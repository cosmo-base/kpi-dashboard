// 月末累計人数の推移から、直近の月次成長率をもとに将来の想定人数を予測するユーティリティ

export interface MonthlyCumulative {
  month: string;
  cumulative: number;
}

export interface ProjectionPoint {
  label: string;
  shortLabel: string;
  monthsAhead: number;
  value: number;
  diffFromNow: number;
}

export interface GrowthProjectionResult {
  monthlyRatePercent: number;
  basedOnMonths: number;
  currentTotal: number;
  projections: ProjectionPoint[];
  chartData: Array<{ name: string; 実績?: number; 予測?: number }>;
}

const MAX_SAMPLE_MONTHS = 6;

/**
 * history は月末時点の累計値を古い順に並べたもの。
 * 最後の要素は「今月」（まだ月末を迎えていない可能性がある）として扱い、
 * 成長率の算出には使わず、予測の起点としてのみ使う。
 */
export function computeGrowthProjection(
  history: MonthlyCumulative[],
  opts?: { monthsAhead?: number; now?: Date },
): GrowthProjectionResult | null {
  if (history.length < 2) return null;

  const monthsAhead = opts?.monthsAhead ?? 12;
  const now = opts?.now ?? new Date();

  const currentTotal = history[history.length - 1].cumulative;
  const completedMonths = history.slice(0, -1);

  const ratios: number[] = [];
  for (let i = 1; i < completedMonths.length; i++) {
    const prev = completedMonths[i - 1].cumulative;
    const cur = completedMonths[i].cumulative;
    if (prev > 0) ratios.push(cur / prev);
  }

  // 直近の完了月から最後に、今月への遷移も参考データとして加える
  if (completedMonths.length > 0) {
    const lastCompleted = completedMonths[completedMonths.length - 1].cumulative;
    if (lastCompleted > 0) ratios.push(currentTotal / lastCompleted);
  }

  if (ratios.length === 0) return null;

  const sample = ratios.slice(-MAX_SAMPLE_MONTHS);
  const product = sample.reduce((acc, r) => acc * Math.max(r, 0.0001), 1);
  const monthlyRate = Math.pow(product, 1 / sample.length);

  const daysInCurrentMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
  ).getDate();
  const dayOfMonth = now.getDate();
  const fractionRemaining = Math.max(
    0,
    (daysInCurrentMonth - dayOfMonth) / daysInCurrentMonth,
  );

  const thisMonthEndValue = currentTotal * Math.pow(monthlyRate, fractionRemaining);

  const projections: ProjectionPoint[] = [];
  let value = thisMonthEndValue;
  for (let k = 0; k <= monthsAhead; k++) {
    if (k > 0) value = value * monthlyRate;
    const targetDate = new Date(now.getFullYear(), now.getMonth() + k, 1);
    const y = targetDate.getFullYear();
    const m = targetDate.getMonth() + 1;
    let label = `${y}年${m}月末`;
    if (k === 0) label = `今月末 (${m}月末)`;
    else if (k === 1) label = `来月末 (${m}月末)`;
    else if (k === 12) label = `1年後 (${y}年${m}月末)`;
    projections.push({
      label,
      shortLabel: `${y}/${m}`,
      monthsAhead: k,
      value: Math.round(value),
      diffFromNow: Math.round(value - currentTotal),
    });
  }

  const chartData: Array<{ name: string; 実績?: number; 予測?: number }> = [
    ...history.slice(0, -1).map((h) => ({ name: h.month, 実績: h.cumulative })),
    // 実績と予測をつなげるため、現在値を両方の系列に含める
    { name: history[history.length - 1].month, 実績: currentTotal, 予測: currentTotal },
    ...projections
      .slice(1)
      .map((p) => ({ name: p.shortLabel, 予測: p.value })),
  ];

  return {
    monthlyRatePercent: Math.round((monthlyRate - 1) * 1000) / 10,
    basedOnMonths: sample.length,
    currentTotal,
    projections,
    chartData,
  };
}