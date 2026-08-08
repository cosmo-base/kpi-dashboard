// 日次の累計回答数から、予測期間(h)ごとに「過去h日の伸び率」が
// 「未来h日の伸び率」をどれだけ説明するかを重回帰で学習し、将来の累計値を予測するユーティリティ。
// g = β0 + β1・h + β2・r を最小二乗法で学習し、
// 予測時は Ŷ(t+h) = Y_t + h・(β0 + β1・h + β2・r_t,k) を使う（k = min(h, 履歴日数)）。

export interface RegressionProjectionPoint {
  label: string;
  shortLabel: string;
  monthsAhead: number;
  h: number;
  value: number;
  diffFromNow: number;
}

export interface RegressionProjectionResult {
  beta0: number;
  beta1: number;
  beta2: number;
  sampleCount: number;
  hRange: { min: number; max: number };
  currentTotal: number;
  projections: RegressionProjectionPoint[];
}

const H_MAX_CAP = 120;
const MIN_HISTORY_DAYS = 15;
const MIN_SAMPLE_COUNT = 10;

// 3x3の正規方程式をクラメールの公式で解く。行列がほぼ特異（多重共線性）ならnullを返す。
function solve3x3(A: number[][], b: number[]): [number, number, number] | null {
  const det = (m: number[][]) =>
    m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
    m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
    m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);

  const D = det(A);
  if (Math.abs(D) < 1e-9) return null;

  const withCol = (col: number, vec: number[]) =>
    A.map((row, i) => row.map((v, j) => (j === col ? vec[i] : v)));

  return [
    det(withCol(0, b)) / D,
    det(withCol(1, b)) / D,
    det(withCol(2, b)) / D,
  ];
}

/**
 * dailyCumulative は日次の累計値を古い順に並べたもの（欠損日なし、最後の要素が現在日）。
 */
export function computeRegressionProjection(
  dailyCumulative: number[],
  opts?: { monthsAhead?: number; now?: Date },
): RegressionProjectionResult | null {
  const N = dailyCumulative.length;
  if (N < MIN_HISTORY_DAYS) return null;

  const hMax = Math.min(H_MAX_CAP, Math.floor((N - 1) / 2));
  const hMin = Math.max(3, Math.floor(hMax / 4));
  if (hMax < hMin) return null;

  let Sw = 0,
    Sh = 0,
    Sr = 0,
    Shh = 0,
    Shr = 0,
    Srr = 0,
    Sg = 0,
    Shg = 0,
    Srg = 0,
    count = 0;

  for (let h = hMin; h <= hMax; h++) {
    for (let t = h; t + h <= N - 1; t++) {
      const Yt = dailyCumulative[t];
      const r = (Yt - dailyCumulative[t - h]) / h;
      const g = (dailyCumulative[t + h] - Yt) / h;
      Sw += 1;
      Sh += h;
      Sr += r;
      Shh += h * h;
      Shr += h * r;
      Srr += r * r;
      Sg += g;
      Shg += h * g;
      Srg += r * g;
      count += 1;
    }
  }

  if (count < MIN_SAMPLE_COUNT) return null;

  const beta = solve3x3(
    [
      [Sw, Sh, Sr],
      [Sh, Shh, Shr],
      [Sr, Shr, Srr],
    ],
    [Sg, Shg, Srg],
  );
  if (!beta) return null;
  const [beta0, beta1, beta2] = beta;

  const currentTotal = dailyCumulative[N - 1];

  const predict = (h: number) => {
    if (h <= 0) return currentTotal;
    const k = Math.min(h, N - 1);
    const r = k > 0 ? (currentTotal - dailyCumulative[N - 1 - k]) / k : 0;
    const raw = currentTotal + h * (beta0 + beta1 * h + beta2 * r);
    // 学習データが未来ゼロ以上の伸びしか想定していない前提で、現在値を下回る予測は切り上げる
    return Math.max(raw, currentTotal);
  };

  const monthsAhead = opts?.monthsAhead ?? 12;
  const now = opts?.now ?? new Date();
  const dayMs = 24 * 60 * 60 * 1000;

  const projections: RegressionProjectionPoint[] = [];
  for (let k = 0; k <= monthsAhead; k++) {
    const targetDate =
      k === monthsAhead
        ? new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
        : new Date(now.getFullYear(), now.getMonth() + k + 1, 0);
    const h = Math.max(0, Math.round((targetDate.getTime() - now.getTime()) / dayMs));
    const y = targetDate.getFullYear();
    const m = targetDate.getMonth() + 1;
    let label = `${y}年${m}月末`;
    if (k === 0) label = `今月末 (${m}月末)`;
    else if (k === 1) label = `来月末 (${m}月末)`;
    else if (k === monthsAhead)
      label = `1年後 (${y}年${m}月${targetDate.getDate()}日)`;
    const value = predict(h);
    projections.push({
      label,
      shortLabel: `${y}/${m}`,
      monthsAhead: k,
      h,
      value: Math.round(value),
      diffFromNow: Math.round(value - currentTotal),
    });
  }

  return {
    beta0,
    beta1,
    beta2,
    sampleCount: count,
    hRange: { min: hMin, max: hMax },
    currentTotal,
    projections,
  };
}
