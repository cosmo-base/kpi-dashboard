// 宇宙機プロジェクトシミュレーターのプレイデータ（スプレッドシート play シートの公開CSV）を集計する。
// 画面とは切り離した純粋な関数だけを置く。日付は「日本時間・朝6時区切り」（lib/utils の getJSTDate と同じ考え方）。

import { SPACECRAFT_LABELS } from "./spacecraft-labels";

export type Mode = "beginner" | "expert";
export type EndingId = "success" | "extended" | "partial" | "lesson" | "early";

export interface PlayLogItem {
  event: string;
  choice: string;
  deltas: Record<string, number>;
  check?: { risk: string; p: number; success: boolean };
  /** 選ぶまでにかかった時間（ミリ秒）。v0.4.0 以降 */
  ms?: number;
}

export interface Play {
  /** 受信日時（日本時間の壁時計の値を UTC として持つ） */
  receivedAt: number | null;
  /** 朝6時区切りの日付 YYYY-MM-DD */
  day: string | null;
  hour: number | null;
  weekday: number | null;
  playId: string;
  appVersion: string;
  mode: Mode;
  seed: number | null;
  ending: EndingId;
  phaseReached: number;
  progress: number;
  design: Record<string, string> | null;
  choiceIds: string[];
  finalValues: Record<string, number>;
  flags: string[];
  log: PlayLogItem[];
  achievements: string[];
  troubles: string[];
  improvements: string[];
  contactOk: boolean;
  success: boolean;
  /** 選択にかかった時間の合計（秒）。v0.4.0 より前のデータは null */
  durationSec: number | null;
  /** 用語ボタンを開いた回数。v0.4.0 より前のデータは null */
  termOpens: Record<string, number> | null;
}

/** プレイ途中でページを閉じた・タブを切り替えたときの到達地点（progress シート） */
export interface ProgressRow {
  playId: string;
  appVersion: string;
  mode: Mode;
  day: string | null;
  phaseReached: number;
  eventCount: number;
  durationSec: number;
  lastEvent: string;
}

// ───────── 名前の対応表 ─────────

type EventLabel = {
  title: string;
  phase: string;
  mode: string;
  /** 柱・ランダム・伏線回収・条件付き・偶然・随時 */
  kind: string;
  order: number;
  answer?: string;
  choices: Record<string, string>;
};
const L = SPACECRAFT_LABELS as unknown as {
  appVersion: string;
  phases: string[];
  endings: Record<string, string>;
  risks: Record<string, string>;
  values: Record<string, string>;
  flags: Record<string, string>;
  subsystems: { id: string; name: string; options: Record<string, string> }[];
  events: Record<string, EventLabel>;
};

export const MODE_LABELS: Record<Mode, string> = { beginner: "初心者", expert: "玄人" };
export const ENDING_ORDER: EndingId[] = ["success", "extended", "partial", "lesson", "early"];
export const ENDING_COLORS: Record<EndingId, string> = {
  success: "#22C55E",
  extended: "#83CBEB",
  partial: "#EEEEBB",
  lesson: "#8B5CF6",
  early: "#94A3B8",
};

export const endingLabel = (id: string) => L.endings[id] ?? id;
export const eventLabel = (id: string) => L.events[id]?.title ?? id;
export const choiceLabel = (eventId: string, choiceId: string) =>
  choiceId === "design" ? "機体構成を決定" : (L.events[eventId]?.choices[choiceId] ?? choiceId);
export const riskLabel = (id: string) => L.risks[id] ?? id;
export const flagLabel = (id: string) => L.flags[id] ?? id;
export const valueLabel = (id: string) => L.values[id] ?? id;
export const phaseLabel = (index: number) => (index >= L.phases.length ? "最後まで" : (L.phases[index] ?? `${index}`));
export const SUBSYSTEMS = L.subsystems;
export const LABELS_VERSION = L.appVersion;

const PHASE_IDS = ["concept", "goals", "design", "funding", "team", "detail", "integration", "testing", "launch", "operations"];
const phaseIndexOfEvent = (eventId: string) => PHASE_IDS.indexOf(L.events[eventId]?.phase ?? "");
export const phaseOfEvent = (eventId: string) =>
  L.events[eventId]?.phase === "any" ? "随時" : (L.phases[phaseIndexOfEvent(eventId)] ?? "-");

/** ゲームの進行順に並べるためのキー（フェーズ順 → フェーズ内の並び）。随時イベントは先頭 */
export const eventSortKey = (eventId: string) => (phaseIndexOfEvent(eventId) + 1) * 1000 + (L.events[eventId]?.order ?? 999);

/** 「太陽同期軌道（毎日同じ…）」のような長い選択肢名の、括弧より前だけ */
export const shortLabel = (label: string) => label.split(/[（(]/)[0].trim() || label;

// ───────── CSV の行 → Play ─────────

function safeJson<T>(text: string | undefined, fallback: T): T {
  if (!text) return fallback;
  try {
    const v = JSON.parse(text);
    return (v ?? fallback) as T;
  } catch {
    return fallback;
  }
}

const num = (v: string | undefined) => {
  const n = parseFloat(String(v ?? "").replace(/,/g, ""));
  return Number.isFinite(n) ? n : null;
};

/** "2026/10/22 9:05:03" や ISO 形式を、日本時間の壁時計の値として読む */
export function parseJstDateTime(text: string | undefined): number | null {
  const m = String(text ?? "").match(/(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
  if (!m) return null;
  const [, y, mo, d, h = "0", mi = "0", s = "0"] = m;
  return Date.UTC(+y, +mo - 1, +d, +h, +mi, +s);
}

const SIX_HOURS = 6 * 3600 * 1000;
const DAY = 24 * 3600 * 1000;
export const dayKey = (jstMs: number) => new Date(jstMs - SIX_HOURS).toISOString().slice(0, 10);

/** lib/utils の getJSTDate()（日本時間から6時間引いた日時）から、今日の日付キーを作る */
export function todayKeyFrom(jstMinus6h: Date) {
  return new Date(Date.UTC(jstMinus6h.getFullYear(), jstMinus6h.getMonth(), jstMinus6h.getDate())).toISOString().slice(0, 10);
}

export function parsePlays(rows: Record<string, string>[]): { plays: Play[]; invalid: number } {
  const plays: Play[] = [];
  let invalid = 0;
  for (const r of rows) {
    const mode = r.mode as Mode;
    const ending = r.ending as EndingId;
    if ((mode !== "beginner" && mode !== "expert") || !ENDING_ORDER.includes(ending) || !r.playId) {
      invalid++;
      continue;
    }
    const receivedAt = parseJstDateTime(r.receivedAt);
    const report = safeJson<{ achievements?: string[]; troubles?: string[]; improvements?: string[] }>(r.report, {});
    const flags = String(r.flags ?? "").split(/\s+/).filter(Boolean);
    const finalValues = safeJson<Record<string, number>>(r.finalValues, {});
    plays.push({
      receivedAt,
      day: receivedAt == null ? null : dayKey(receivedAt),
      hour: receivedAt == null ? null : new Date(receivedAt).getUTCHours(),
      weekday: receivedAt == null ? null : new Date(receivedAt).getUTCDay(),
      playId: r.playId,
      appVersion: r.appVersion || "不明",
      mode,
      seed: num(r.seed),
      ending,
      phaseReached: num(r.phaseReached) ?? 0,
      progress: num(r.progress) ?? finalValues.progress ?? 0,
      design: safeJson<Record<string, string> | null>(r.design, null),
      choiceIds: String(r.choiceIds ?? "").split(/\s+/).filter(Boolean),
      finalValues,
      flags,
      log: safeJson<PlayLogItem[]>(r.log, []),
      achievements: report.achievements ?? [],
      troubles: report.troubles ?? [],
      improvements: report.improvements ?? [],
      contactOk: flags.includes("contactOk"),
      success: ending === "success" || ending === "extended",
      durationSec: r.durationSec ? num(r.durationSec) : null,
      termOpens: r.termOpens ? safeJson<Record<string, number>>(r.termOpens, {}) : null,
    });
  }
  plays.sort((a, b) => (a.receivedAt ?? 0) - (b.receivedAt ?? 0));
  return { plays, invalid };
}

/** progress シートの公開CSV。同じプレイの行が複数あれば、いちばん先まで進んだ行を残す */
export function parseProgress(rows: Record<string, string>[]): ProgressRow[] {
  const latest = new Map<string, ProgressRow>();
  for (const r of rows) {
    const mode = r.mode as Mode;
    if (!r.playId || (mode !== "beginner" && mode !== "expert")) continue;
    const at = parseJstDateTime(r.receivedAt);
    const row: ProgressRow = {
      playId: r.playId,
      appVersion: r.appVersion || "不明",
      mode,
      day: at == null ? null : dayKey(at),
      phaseReached: num(r.phaseReached) ?? 0,
      eventCount: num(r.eventCount) ?? 0,
      durationSec: num(r.durationSec) ?? 0,
      lastEvent: r.lastEvent ?? "",
    };
    const prev = latest.get(row.playId);
    if (!prev || row.eventCount >= prev.eventCount) latest.set(row.playId, row);
  }
  return [...latest.values()];
}

// ───────── 絞り込み ─────────

export type Period = "all" | "90d" | "30d" | "7d";
export interface Filter {
  period: Period;
  mode: "all" | Mode;
  version: string; // "all" または appVersion
}

export function applyFilter<T extends { mode: Mode; appVersion: string; day: string | null }>(plays: T[], f: Filter, today: string): T[] {
  const days = { all: Infinity, "90d": 90, "30d": 30, "7d": 7 }[f.period];
  const from = days === Infinity ? null : shiftDay(today, -(days - 1));
  return plays.filter(
    (p) =>
      (f.mode === "all" || p.mode === f.mode) &&
      (f.version === "all" || p.appVersion === f.version) &&
      (from == null || (p.day != null && p.day >= from)),
  );
}

export const shiftDay = (day: string, n: number) => new Date(Date.parse(day) + n * DAY).toISOString().slice(0, 10);

export const versionsOf = (plays: Play[]) =>
  [...new Set(plays.map((p) => p.appVersion))].sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

// ───────── 集計 ─────────

/** グラフ部品（lib/types の ChartData）に渡せる行 */
export type ChartRow = { name: string; [key: string]: string | number };

const pct = (a: number, b: number) => (b > 0 ? Math.round((a / b) * 1000) / 10 : 0);
const avg = (xs: number[]) => (xs.length ? Math.round((xs.reduce((s, x) => s + x, 0) / xs.length) * 10) / 10 : 0);
const rate = (ps: Play[]) => pct(ps.filter((p) => p.success).length, ps.length);

/** 月曜はじまりの週の初日 */
const weekStart = (day: string) => {
  const wd = new Date(Date.parse(day)).getUTCDay(); // 0=日
  return shiftDay(day, -((wd + 6) % 7));
};

export function summarize(plays: Play[], today: string) {
  const ws = weekStart(today);
  const prevWs = shiftDay(ws, -7);
  const month = today.slice(0, 7);
  const thisWeek = plays.filter((p) => p.day != null && p.day >= ws).length;
  const lastWeek = plays.filter((p) => p.day != null && p.day >= prevWs && p.day < ws).length;
  return {
    total: plays.length,
    today: plays.filter((p) => p.day === today).length,
    thisWeek,
    lastWeek,
    thisMonth: plays.filter((p) => p.day?.startsWith(month)).length,
    successRate: rate(plays),
    avgProgress: avg(plays.filter((p) => p.contactOk).map((p) => p.progress)),
    contactRate: pct(plays.filter((p) => p.contactOk).length, plays.filter((p) => p.phaseReached >= 8 || p.contactOk).length),
    earlyRate: pct(plays.filter((p) => p.ending === "early").length, plays.length),
    beginnerShare: pct(plays.filter((p) => p.mode === "beginner").length, plays.length),
    avgChoices: avg(plays.map((p) => p.choiceIds.length)),
    uniqueSeeds: new Set(plays.map((p) => p.seed)).size,
  };
}

/** 日別のプレイ数と累計（直近 days 日） */
export function dailyTrend(plays: Play[], today: string, days = 90) {
  const from = shiftDay(today, -(days - 1));
  let cumulative = plays.filter((p) => p.day != null && p.day < from).length;
  const byDay = new Map<string, Play[]>();
  for (const p of plays) if (p.day && p.day >= from) byDay.set(p.day, [...(byDay.get(p.day) ?? []), p]);
  const out: ChartRow[] = [];
  for (let i = 0; i < days; i++) {
    const d = shiftDay(from, i);
    const ps = byDay.get(d) ?? [];
    cumulative += ps.length;
    out.push({
      name: `${+d.slice(5, 7)}/${+d.slice(8, 10)}`,
      全体: ps.length,
      初心者: ps.filter((p) => p.mode === "beginner").length,
      玄人: ps.filter((p) => p.mode === "expert").length,
      累計: cumulative,
    });
  }
  return out;
}

export function endingBreakdown(plays: Play[]) {
  return ENDING_ORDER.map((id) => ({
    name: endingLabel(id),
    value: plays.filter((p) => p.ending === id).length,
    color: ENDING_COLORS[id],
  })).filter((x) => x.value > 0);
}

/** モード別のエンディング割合（%） */
export function endingByMode(plays: Play[]) {
  return (["beginner", "expert"] as Mode[]).map((m) => {
    const ps = plays.filter((p) => p.mode === m);
    const row: ChartRow = { name: `${MODE_LABELS[m]}（${ps.length}）` };
    for (const id of ENDING_ORDER) row[id] = pct(ps.filter((p) => p.ending === id).length, ps.length);
    return row;
  });
}

/** 達成度の分布（通信に成功したプレイのみ） */
export function progressHistogram(plays: Play[]) {
  const bins = Array.from({ length: 11 }, (_, i) => ({ name: i === 10 ? "100" : `${i * 10}〜`, 初心者: 0, 玄人: 0 }));
  for (const p of plays) {
    if (!p.contactOk) continue;
    const b = bins[Math.min(10, Math.floor(p.progress / 10))];
    b[MODE_LABELS[p.mode] as "初心者" | "玄人"]++;
  }
  return bins;
}

/** 打ち上げ前に終わったプレイが、どのフェーズで終わったか */
export function endPhase(plays: Play[]) {
  const rows = L.phases.map((name) => ({ name, 早期終了: 0, 通信できず: 0 }));
  for (const p of plays) {
    const i = Math.min(L.phases.length - 1, Math.max(0, p.phaseReached));
    if (p.ending === "early") rows[i].早期終了++;
    else if (!p.contactOk) rows[i].通信できず++;
  }
  return rows;
}

/** 機体構成：サブシステムごとの選択肢の人気と結果 */
export function designStats(plays: Play[]) {
  const withDesign = plays.filter((p) => p.design);
  return L.subsystems.flatMap((s) =>
    Object.entries(s.options).map(([id, name]) => {
      const ps = withDesign.filter((p) => p.design![s.id] === id);
      return {
        subsystem: s.name,
        option: name,
        count: ps.length,
        share: pct(ps.length, withDesign.length),
        successRate: rate(ps),
        avgProgress: avg(ps.filter((p) => p.contactOk).map((p) => p.progress)),
      };
    }),
  );
}

export function topDesigns(plays: Play[], limit = 10) {
  const counts = new Map<string, Play[]>();
  for (const p of plays) {
    if (!p.design) continue;
    const key = L.subsystems.map((s) => s.options[p.design![s.id]] ?? p.design![s.id]).join(" / ");
    counts.set(key, [...(counts.get(key) ?? []), p]);
  }
  const total = plays.filter((p) => p.design).length;
  return [...counts.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, limit)
    .map(([name, ps], i) => ({ rank: i + 1, name: `${name}（達成率 ${rate(ps)}%）`, count: ps.length, percentage: pct(ps.length, total) }));
}

export interface ChoiceStat {
  choice: string;
  label: string;
  count: number;
  share: number;
  successRate: number;
  avgProgress: number;
}

export interface EventStat {
  event: string;
  title: string;
  phase: string;
  /** その回のプレイで出た割合 */
  appearRate: number;
  count: number;
  choices: ChoiceStat[];
  /** 十分な数（minN 以上）選ばれた選択肢の間での、達成率の最大差（pt）。比べられなければ null */
  spread: number | null;
}

/** イベントごとの選択の傾向と、選んだ人のその後の結果 */
export function eventStats(plays: Play[], minN = 10): EventStat[] {
  const byEvent = new Map<string, Map<string, Play[]>>();
  for (const p of plays) {
    for (const item of p.log) {
      const m = byEvent.get(item.event) ?? new Map<string, Play[]>();
      m.set(item.choice, [...(m.get(item.choice) ?? []), p]);
      byEvent.set(item.event, m);
    }
  }
  return [...byEvent.entries()]
    .map(([event, m]) => {
      const count = [...m.values()].reduce((s, ps) => s + ps.length, 0);
      const choices = [...m.entries()]
        .map(([choice, ps]) => ({
          choice,
          label: choiceLabel(event, choice),
          count: ps.length,
          share: pct(ps.length, count),
          successRate: rate(ps),
          avgProgress: avg(ps.filter((p) => p.contactOk).map((p) => p.progress)),
        }))
        .sort((a, b) => b.count - a.count);
      const comparable = choices.filter((c) => c.count >= minN);
      const spread =
        comparable.length >= 2
          ? Math.round((Math.max(...comparable.map((c) => c.successRate)) - Math.min(...comparable.map((c) => c.successRate))) * 10) / 10
          : null;
      return {
        event,
        title: eventLabel(event),
        phase: phaseOfEvent(event),
        appearRate: pct(count, plays.length),
        count,
        choices,
        spread,
      };
    })
    .sort((a, b) => b.count - a.count);
}

/** 確率判定の「見込み」と「実際の結果」の答え合わせ */
export function riskStats(plays: Play[]) {
  const m = new Map<string, { p: number[]; ok: number }>();
  for (const pl of plays) {
    for (const item of pl.log) {
      if (!item.check) continue;
      const s = m.get(item.check.risk) ?? { p: [], ok: 0 };
      s.p.push(item.check.p);
      if (item.check.success) s.ok++;
      m.set(item.check.risk, s);
    }
  }
  return [...m.entries()]
    .map(([risk, s]) => {
      // avg() は小数1桁に丸めるので、確率（0〜1）の平均はここで丸めずに計算する
      const expected = Math.round((s.p.reduce((x, y) => x + y, 0) / s.p.length) * 1000) / 10;
      const actual = pct(s.ok, s.p.length);
      return { risk: riskLabel(risk), count: s.p.length, expected, actual, diff: Math.round((actual - expected) * 10) / 10 };
    })
    .sort((a, b) => b.count - a.count);
}

/** 分岐（フラグ）を通ったプレイと通らなかったプレイの達成率の比較 */
export function flagStats(plays: Play[], minN = 10) {
  const all = new Set(plays.flatMap((p) => p.flags));
  return [...all]
    .map((flag) => {
      const yes = plays.filter((p) => p.flags.includes(flag));
      const no = plays.filter((p) => !p.flags.includes(flag));
      return {
        flag: flagLabel(flag),
        reachRate: pct(yes.length, plays.length),
        count: yes.length,
        successWith: rate(yes),
        successWithout: rate(no),
        lift: yes.length >= minN && no.length >= minN ? Math.round((rate(yes) - rate(no)) * 10) / 10 : null,
      };
    })
    .sort((a, b) => Math.abs(b.lift ?? 0) - Math.abs(a.lift ?? 0));
}

/** レポートの「トラブル」「ヒント」などの出現頻度 */
export function frequency(lists: string[][], limit = 15) {
  const m = new Map<string, number>();
  for (const list of lists) for (const x of new Set(list)) m.set(x, (m.get(x) ?? 0) + 1);
  return [...m.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, count], i) => ({ rank: i + 1, name, count, percentage: pct(count, lists.length) }));
}

const FINAL_KEYS = ["budget", "months", "reliability", "mission", "team", "trust", "progress", "massMargin", "powerMargin", "thermalMargin", "linkMargin", "coverage", "issues", "opsLoad"];

/** エンディング別の最終数値の平均 */
export function finalValuesByEnding(plays: Play[]) {
  return {
    keys: FINAL_KEYS.map((k) => ({ key: k, label: valueLabel(k) })),
    rows: ENDING_ORDER.map((id) => {
      const ps = plays.filter((p) => p.ending === id);
      const row: Record<string, string | number> = { ending: `${endingLabel(id)}（${ps.length}）` };
      for (const k of FINAL_KEYS) row[k] = ps.length ? avg(ps.map((p) => p.finalValues[k] ?? 0)) : "-";
      return row;
    }).filter((_, i) => plays.some((p) => p.ending === ENDING_ORDER[i])),
  };
}

export function versionStats(plays: Play[]) {
  return versionsOf(plays).map((v) => {
    const ps = plays.filter((p) => p.appVersion === v);
    return {
      version: v,
      count: ps.length,
      successRate: rate(ps),
      avgProgress: avg(ps.filter((p) => p.contactOk).map((p) => p.progress)),
      earlyRate: pct(ps.filter((p) => p.ending === "early").length, ps.length),
      avgChoices: avg(ps.map((p) => p.choiceIds.length)),
    };
  });
}

export function byHour(plays: Play[]) {
  return Array.from({ length: 24 }, (_, h) => ({ name: `${h}時`, プレイ数: plays.filter((p) => p.hour === h).length }));
}

export function byWeekday(plays: Play[]) {
  // 月曜はじまり。曜日は朝6時区切りではなく、受信した時刻の曜日
  return [1, 2, 3, 4, 5, 6, 0].map((wd) => ({ name: "日月火水木金土"[wd], プレイ数: plays.filter((p) => p.weekday === wd).length }));
}

export function recentPlays(plays: Play[], limit = 50) {
  return [...plays]
    .reverse()
    .slice(0, limit)
    .map((p) => ({
      receivedAt: p.receivedAt == null ? "-" : new Date(p.receivedAt).toISOString().slice(0, 16).replace("T", " "),
      mode: MODE_LABELS[p.mode],
      ending: endingLabel(p.ending),
      progress: p.contactOk ? p.progress : "-",
      choices: p.choiceIds.length,
      version: p.appVersion,
      seed: p.seed ?? "-",
      playId: p.playId,
    }));
}

// ───────── よく通る道筋 ─────────

const choiceOf = (p: Play, eventId: string) => p.log.find((x) => x.event === eventId)?.choice ?? null;

/**
 * 道筋をたどる主な決断。1プレイで出るイベント数を絞っているため、必ず出る「柱」のイベントだけを使う。
 * そこまで進まずに終わったプレイは「（到達せず）」になる。
 */
export const KEY_DECISIONS: { id: string; label: string; value: (p: Play) => string | null }[] = [
  ...[
    ["c-mission", "ミッション"],
    ["g-success", "成功の条件"],
  ].map(([id, label]) => ({ id, label, value: (p: Play) => { const c = choiceOf(p, id); return c ? shortLabel(choiceLabel(id, c)) : null; } })),
  {
    id: "design:payload",
    label: "観測機器",
    value: (p: Play) => (p.design ? (L.subsystems.find((s) => s.id === "payload")?.options[p.design.payload] ?? p.design.payload) : null),
  },
  ...[
    ["f-grant", "助成金"],
    ["te-vibration", "振動試験"],
    ["te-rehearsal", "運用リハーサル"],
  ].map(([id, label]) => ({ id, label, value: (p: Play) => { const c = choiceOf(p, id); return c ? shortLabel(choiceLabel(id, c)) : null; } })),
];

/** 道筋として表示する決断（多すぎると組み合わせが細かく割れるので、前半4つ） */
const PATH_STEPS = KEY_DECISIONS.slice(0, 4);
export const PATH_LABEL = PATH_STEPS.map((s) => s.label).join(" → ");

/** 主な決断の組み合わせのうち、多いもの */
export function commonPaths(plays: Play[], limit = 15) {
  const m = new Map<string, Play[]>();
  for (const p of plays) {
    const key = PATH_STEPS.map((s) => s.value(p) ?? "（到達せず）").join(" → ");
    m.set(key, [...(m.get(key) ?? []), p]);
  }
  return [...m.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, limit)
    .map(([path, ps]) => ({
      path,
      count: ps.length,
      share: pct(ps.length, plays.length),
      successRate: rate(ps),
      avgProgress: avg(ps.filter((p) => p.contactOk).map((p) => p.progress)),
    }));
}

/** 主な決断それぞれで、次にどの選択肢へ進んだか（隣り合う2つの決断の流れ） */
export function decisionFlows(plays: Play[]) {
  return KEY_DECISIONS.slice(0, -1).map((from, i) => {
    const to = KEY_DECISIONS[i + 1];
    const m = new Map<string, Play[]>();
    for (const p of plays) {
      const a = from.value(p);
      const b = to.value(p);
      if (!a || !b) continue;
      const key = `${a} → ${b}`;
      m.set(key, [...(m.get(key) ?? []), p]);
    }
    const total = [...m.values()].reduce((s, ps) => s + ps.length, 0);
    return {
      title: `${from.label} → ${to.label}`,
      rows: [...m.entries()]
        .sort((x, y) => y[1].length - x[1].length)
        .map(([flow, ps]) => ({ flow, count: ps.length, share: pct(ps.length, total), successRate: rate(ps) })),
    };
  });
}

// ───────── 組み合わせ（クロス集計） ─────────

export interface Dimension {
  id: string;
  label: string;
  value: (p: Play) => string | null;
  /** 並び順を固定したい場合 */
  order?: string[];
}

/** クロス集計に使える切り口。主なイベントは、対象プレイの20%以上で出たものだけ */
export function dimensions(plays: Play[]): Dimension[] {
  const dims: Dimension[] = [
    { id: "mode", label: "モード", value: (p) => MODE_LABELS[p.mode], order: ["初心者", "玄人"] },
    { id: "ending", label: "エンディング", value: (p) => endingLabel(p.ending), order: ENDING_ORDER.map(endingLabel) },
    {
      id: "progress",
      label: "達成度の帯",
      value: (p) => (p.contactOk ? `${Math.min(80, Math.floor(p.progress / 20) * 20)}${p.progress >= 80 ? "以上" : "〜"}` : "通信できず"),
      order: ["0〜", "20〜", "40〜", "60〜", "80以上", "通信できず"],
    },
    ...L.subsystems.map((s) => ({
      id: `design:${s.id}`,
      label: `機体：${s.name}`,
      value: (p: Play) => (p.design ? (s.options[p.design[s.id]] ?? p.design[s.id]) : null),
      order: Object.values(s.options),
    })),
  ];
  const counts = new Map<string, number>();
  for (const p of plays) for (const id of new Set(p.log.map((x) => x.event))) counts.set(id, (counts.get(id) ?? 0) + 1);
  const events = [...counts.entries()]
    .filter(([id, n]) => {
      const ev = L.events[id];
      return ev && ev.phase !== "any" && Object.keys(ev.choices).length >= 2 && n >= plays.length * 0.2;
    })
    .sort((a, b) => eventSortKey(a[0]) - eventSortKey(b[0]));
  for (const [id] of events) {
    const ev = L.events[id];
    dims.push({
      id: `event:${id}`,
      label: `${phaseOfEvent(id)}：${ev.title}`,
      value: (p) => {
        const c = choiceOf(p, id);
        return c ? shortLabel(choiceLabel(id, c)) : null;
      },
      order: Object.values(ev.choices).map(shortLabel),
    });
  }
  return dims;
}

export type CrossMetric = "successRate" | "avgProgress" | "count";

export interface CrossCell {
  n: number;
  value: number | null;
}

/** 2つの切り口の組み合わせごとの達成率・平均達成度・件数。n が minN 未満のマスは value を null にする */
export function crossTab(plays: Play[], row: Dimension, col: Dimension, metric: CrossMetric, minN = 5) {
  const cells = new Map<string, Play[]>();
  const rowSet = new Set<string>();
  const colSet = new Set<string>();
  for (const p of plays) {
    const r = row.value(p);
    const c = col.value(p);
    if (r == null || c == null) continue;
    rowSet.add(r);
    colSet.add(c);
    const k = `${r}\u0000${c}`;
    cells.set(k, [...(cells.get(k) ?? []), p]);
  }
  const ordered = (set: Set<string>, order?: string[]) =>
    order ? [...order.filter((x) => set.has(x)), ...[...set].filter((x) => !order.includes(x))] : [...set].sort();
  const rows = ordered(rowSet, row.order);
  const cols = ordered(colSet, col.order);
  const measure = (ps: Play[]): number | null => {
    if (metric === "count") return ps.length;
    if (ps.length < minN) return null;
    return metric === "successRate" ? rate(ps) : avg(ps.filter((p) => p.contactOk).map((p) => p.progress));
  };
  const total = (ps: Play[]): CrossCell => ({ n: ps.length, value: measure(ps) });
  return {
    rows,
    cols,
    cell: (r: string, c: string): CrossCell => total(cells.get(`${r}\u0000${c}`) ?? []),
    rowTotal: (r: string) => total(cols.flatMap((c) => cells.get(`${r}\u0000${c}`) ?? [])),
    colTotal: (c: string) => total(rows.flatMap((r) => cells.get(`${r}\u0000${c}`) ?? [])),
  };
}

// ───────── 宇宙クイズ ─────────

export function quizStats(plays: Play[]) {
  return Object.entries(L.events)
    .filter(([, ev]) => ev.answer)
    .sort((a, b) => eventSortKey(a[0]) - eventSortKey(b[0]))
    .map(([id, ev]) => {
      const answers = plays.map((p) => choiceOf(p, id)).filter((c): c is string => c != null);
      const correct = answers.filter((c) => c === ev.answer).length;
      return {
        event: id,
        title: ev.title.replace(/^宇宙クイズ：/, ""),
        count: answers.length,
        correctRate: pct(correct, answers.length),
        answers: Object.entries(ev.choices).map(([cid, label]) => ({
          label,
          correct: cid === ev.answer,
          count: answers.filter((c) => c === cid).length,
          share: pct(answers.filter((c) => c === cid).length, answers.length),
        })),
      };
    });
}

// ───────── イベントの出現ばらつき ─────────

export const EVENT_KINDS = ["柱", "ランダム", "伏線回収", "条件付き", "偶然", "随時"];

/** 各イベントが、そのイベントの対象モードのプレイのうち何%で出たか */
export function eventExposure(plays: Play[]) {
  const byMode = { beginner: plays.filter((p) => p.mode === "beginner"), expert: plays.filter((p) => p.mode === "expert") };
  const seen = { beginner: new Map<string, number>(), expert: new Map<string, number>() };
  for (const m of ["beginner", "expert"] as Mode[]) {
    for (const p of byMode[m]) for (const id of new Set(p.log.map((x) => x.event))) seen[m].set(id, (seen[m].get(id) ?? 0) + 1);
  }
  const rateFor = (id: string, m: Mode) => {
    const ev = L.events[id];
    if (ev.mode !== "common" && ev.mode !== m) return null; // 対象外のモード
    return pct(seen[m].get(id) ?? 0, byMode[m].length);
  };
  return Object.entries(L.events)
    .sort((a, b) => eventSortKey(a[0]) - eventSortKey(b[0]))
    .map(([id, ev]) => ({
      event: id,
      title: ev.title,
      phase: phaseOfEvent(id),
      kind: ev.kind,
      target: ev.mode === "common" ? "共通" : MODE_LABELS[ev.mode as Mode],
      beginner: rateFor(id, "beginner"),
      expert: rateFor(id, "expert"),
    }));
}

/** フェーズごとに、1プレイあたり平均何件のイベントが出たか（モード別） */
export function eventsPerPhase(plays: Play[]): ChartRow[] {
  return L.phases.map((name, i) => {
    const row: ChartRow = { name };
    for (const m of ["beginner", "expert"] as Mode[]) {
      const ps = plays.filter((p) => p.mode === m);
      row[MODE_LABELS[m]] = avg(ps.map((p) => p.log.filter((x) => phaseIndexOfEvent(x.event) === i).length));
    }
    return row;
  });
}

/** 種類ごとの「1プレイあたりの平均件数」 */
export function eventsPerKind(plays: Play[]): ChartRow[] {
  return EVENT_KINDS.map((kind) => {
    const row: ChartRow = { name: kind };
    for (const m of ["beginner", "expert"] as Mode[]) {
      const ps = plays.filter((p) => p.mode === m);
      row[MODE_LABELS[m]] = avg(ps.map((p) => p.log.filter((x) => L.events[x.event]?.kind === kind).length));
    }
    return row;
  });
}

// ───────── 1. 結果を左右する要因（複数の要因をまとめて見る） ─────────

export interface FactorEffect {
  group: string;
  category: string;
  baseline: string;
  /** ほかの要因をそろえたときの、達成率への影響（pt） */
  effect: number;
  /** 単純に比べた達成率の差（pt）。effect との差が大きいほど、ほかの要因と重なっていた */
  rawDiff: number;
  n: number;
  /** 件数が十分で、ある程度信頼できるか */
  reliable: boolean;
}

const NOT_SHOWN = "（出ていない）";
const sigmoid = (z: number) => 1 / (1 + Math.exp(-z));

/**
 * 打ち上げ前の決断（モード・機体構成・試験までの各イベントの選択）を要因として、
 * 「ミッション達成・延命運用」になるかをロジスティック回帰（L2 正則化）で推定する。
 * - 運用中のイベントは、出たこと自体が結果の表れ（例：通信が途絶えた）なので要因に入れない
 * - 早期終了したプレイは、打ち上げ前の決断が最後まで出そろわないので除く
 * - 各要因は「いちばん多い選択」を基準にし、そこから別の選択に変えたときの影響を出す
 * - 影響は平均限界効果：各プレイの予測確率を、その要因だけ変えて比べた差の平均
 */
type DecisionGroup = { label: string; value: (p: Play) => string };

/**
 * 打ち上げ前の決断（モード・機体構成・試験フェーズまでのイベントの選択）を、要因のまとまりとして作る。
 * 対象プレイの minShare 以上で出たイベントだけ。随時イベント・クイズ・選択肢が1つのイベントは除く
 */
function preLaunchGroups(data: Play[], minShare = 0.15): DecisionGroup[] {
  const groups: DecisionGroup[] = [
    { label: "モード", value: (p) => MODE_LABELS[p.mode] },
    ...L.subsystems.map((s) => ({ label: `機体：${s.name}`, value: (p: Play) => (p.design ? (s.options[p.design[s.id]] ?? p.design[s.id]) : NOT_SHOWN) })),
  ];
  const appear = new Map<string, number>();
  for (const p of data) for (const id of new Set(p.log.map((x) => x.event))) appear.set(id, (appear.get(id) ?? 0) + 1);
  const preLaunch = [...appear.entries()]
    .filter(([id, n]) => {
      const i = phaseIndexOfEvent(id);
      const ev = L.events[id];
      return ev && i >= 0 && i <= 7 && ev.kind !== "随時" && !ev.answer && Object.keys(ev.choices).length >= 2 && n >= data.length * minShare;
    })
    .sort((a, b) => eventSortKey(a[0]) - eventSortKey(b[0]));
  for (const [id] of preLaunch) {
    groups.push({
      label: `${phaseOfEvent(id)}：${eventLabel(id)}`,
      value: (p) => {
        const c = choiceOf(p, id);
        return c ? shortLabel(choiceLabel(id, c)) : NOT_SHOWN;
      },
    });
  }
  return groups;
}

export function factorRanking(plays: Play[], minN = 10, iterations = 300): { used: number; effects: FactorEffect[] } {
  const data = plays.filter((p) => p.ending !== "early").slice(-5000);
  if (data.length < 30) return { used: data.length, effects: [] };
  const groups = preLaunchGroups(data);

  // 各グループの基準（最多の選択）と、特徴量にする選択（基準以外で minN 件以上）
  const values = data.map((p) => groups.map((g) => g.value(p)));
  type Feature = { g: number; category: string };
  const features: Feature[] = [];
  const baselines: string[] = [];
  groups.forEach((_, gi) => {
    const counts = new Map<string, number>();
    for (const v of values) counts.set(v[gi], (counts.get(v[gi]) ?? 0) + 1);
    const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
    baselines.push(sorted[0][0]);
    for (const [cat, n] of sorted.slice(1)) if (n >= minN) features.push({ g: gi, category: cat });
  });
  const featIndex = new Map(features.map((f, i) => [`${f.g}\u0000${f.category}`, i]));
  const X = values.map((v) => v.map((cat, gi) => featIndex.get(`${gi}\u0000${cat}`)).filter((i): i is number => i != null));
  const y: number[] = data.map((p) => (p.success ? 1 : 0));

  // 勾配降下法（目的関数：平均対数損失 + λ/2 |w|²）
  const lambda = 0.02;
  const lr = 0.5;
  const w = new Float64Array(features.length);
  const meanY = y.reduce((s, v) => s + v, 0) / y.length;
  let b = Math.log((meanY + 1e-3) / (1 - meanY + 1e-3));
  const n = data.length;
  for (let it = 0; it < iterations; it++) {
    const grad = new Float64Array(features.length);
    let gb = 0;
    for (let i = 0; i < n; i++) {
      let z = b;
      for (const j of X[i]) z += w[j];
      const err = sigmoid(z) - y[i];
      gb += err;
      for (const j of X[i]) grad[j] += err;
    }
    b -= (lr * gb) / n;
    for (let j = 0; j < w.length; j++) w[j] -= lr * (grad[j] / n + lambda * w[j]);
  }

  const z = X.map((xs) => xs.reduce((s, j) => s + w[j], b));
  const effects: FactorEffect[] = features.map((f, j) => {
    // その要因だけを「この選択」と「基準」に置き換えたときの予測確率の差を平均する
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const own = featIndex.get(`${f.g}\u0000${values[i][f.g]}`);
      const without = z[i] - (own != null ? w[own] : 0);
      sum += sigmoid(without + w[j]) - sigmoid(without);
    }
    const withCat = data.filter((_, i) => values[i][f.g] === f.category);
    const withBase = data.filter((_, i) => values[i][f.g] === baselines[f.g]);
    return {
      group: groups[f.g].label,
      category: f.category,
      baseline: baselines[f.g],
      effect: Math.round((sum / n) * 1000) / 10,
      rawDiff: Math.round((rate(withCat) - rate(withBase)) * 10) / 10,
      n: withCat.length,
      reliable: withCat.length >= 30,
    };
  });
  return { used: n, effects: effects.sort((a, b2) => b2.effect - a.effect) };
}

// ───────── 2. バランスの健康診断 ─────────

/** 選ばれない選択肢・偏りすぎた選択・強すぎ／弱すぎる選択肢 */
export function balanceCheck(events: EventStat[], effects: FactorEffect[], minEventCount = 30) {
  const target = events.filter((e) => {
    const ev = L.events[e.event];
    return ev && ev.phase !== "any" && !ev.answer && Object.keys(ev.choices).length >= 2 && e.count >= minEventCount;
  });
  const rare = target
    .flatMap((e) =>
      e.choices
        .filter((c) => c.share < 5)
        .map((c) => ({ title: e.title, phase: e.phase, choice: c.label, share: c.share, count: e.count })),
    )
    .sort((a, b) => a.share - b.share);
  // ログに一度も出ていない選択肢（選択率 0%）も拾う
  for (const e of target) {
    const chosen = new Set(e.choices.map((c) => c.choice));
    for (const [cid, label] of Object.entries(L.events[e.event].choices)) {
      if (!chosen.has(cid)) rare.unshift({ title: e.title, phase: e.phase, choice: label, share: 0, count: e.count });
    }
  }
  const dominant = target
    .filter((e) => e.choices[0] && e.choices[0].share >= 85)
    .map((e) => ({ title: e.title, phase: e.phase, choice: e.choices[0].label, share: e.choices[0].share, count: e.count }))
    .sort((a, b) => b.share - a.share);
  const extreme = effects
    .filter((f) => f.reliable && Math.abs(f.effect) >= 8)
    .map((f) => ({
      verdict: f.effect > 0 ? "強すぎ候補" : "弱すぎ候補",
      group: f.group,
      category: `${f.category}（基準：${f.baseline}）`,
      rate: `${f.effect > 0 ? "+" : ""}${f.effect}`,
      n: f.n,
    }));
  return { rare, dominant, extreme };
}

/** 見込みの高さ別に、画面で見せた見込みと実際の成功率を比べる */
export function calibration(plays: Play[]) {
  const buckets = Array.from({ length: 10 }, (_, i) => ({ name: `${i * 10}〜${i * 10 + 10}%`, p: [] as number[], ok: 0 }));
  for (const pl of plays) {
    for (const item of pl.log) {
      if (!item.check) continue;
      const b = buckets[Math.min(9, Math.floor(item.check.p * 10))];
      b.p.push(item.check.p);
      if (item.check.success) b.ok++;
    }
  }
  return buckets
    .filter((b) => b.p.length > 0)
    .map((b) => {
      const expected = Math.round((b.p.reduce((s, x) => s + x, 0) / b.p.length) * 1000) / 10;
      const actual = pct(b.ok, b.p.length);
      return { name: b.name, 見込み: expected, 実際: actual, count: b.p.length, diff: Math.round((actual - expected) * 10) / 10 };
    });
}

// ───────── 3. プレイ中の数値の推移 ─────────

export const TRAJECTORY_KEYS = ["budget", "months", "reliability", "mission", "team", "trust", "progress"];

/**
 * 1プレイの、各フェーズ終了時点の数値。最終的な値から、選択ごとの変化をさかのぼって引いて求める
 * （開始時の値がバージョンで違っても正しく計算できる）。インデックス -1 は開始時点。
 */
function phaseValues(p: Play): Map<number, Record<string, number>> {
  const out = new Map<number, Record<string, number>>();
  // 随時イベントは、直前のイベントと同じフェーズとして扱う
  const phases: number[] = [];
  let last = 0;
  for (const item of p.log) {
    const i = phaseIndexOfEvent(item.event);
    if (i >= 0) last = i;
    phases.push(last);
  }
  const cur: Record<string, number> = {};
  for (const k of TRAJECTORY_KEYS) cur[k] = p.finalValues[k] ?? 0;
  for (let i = p.log.length - 1; i >= 0; i--) {
    if (!out.has(phases[i])) out.set(phases[i], { ...cur });
    for (const k of TRAJECTORY_KEYS) cur[k] -= p.log[i].deltas[k] ?? 0;
  }
  out.set(-1, { ...cur });
  return out;
}

/** エンディング別の、各フェーズ終了時点の平均値 */
export function trajectoryByEnding(plays: Play[], key: string): ChartRow[] {
  const traj = plays.map((p) => ({ p, v: phaseValues(p) }));
  return [-1, ...L.phases.map((_, i) => i)].map((i) => {
    const row: ChartRow = { name: i < 0 ? "開始" : L.phases[i] };
    for (const id of ENDING_ORDER) {
      const vs = traj.filter((t) => t.p.ending === id && t.v.has(i)).map((t) => t.v.get(i)![key]);
      if (vs.length) row[endingLabel(id)] = avg(vs);
    }
    return row;
  });
}

/** 各フェーズ終了時点で、資金や日程が足りなくなっていたプレイの割合（そのフェーズまで進んだプレイのうち） */
export function shortageByPhase(plays: Play[]): ChartRow[] {
  const traj = plays.map((p) => phaseValues(p));
  return L.phases.map((name, i) => {
    const reached = traj.filter((v) => v.has(i));
    return {
      name,
      資金がマイナス: pct(reached.filter((v) => v.get(i)!.budget < 0).length, reached.length),
      日程が足りない: i <= 7 ? pct(reached.filter((v) => v.get(i)!.months < 0).length, reached.length) : 0,
    };
  });
}

const median = (xs: number[]) => {
  if (!xs.length) return 0;
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

// ───────── 週ごとの変化 ─────────

/** 直近 weeks 週（月曜はじまり）の、プレイ数・達成率・初心者の割合・平均達成度 */
export function weeklyTrends(plays: Play[], today: string, weeks = 12): ChartRow[] {
  const thisWeek = weekStart(today);
  return Array.from({ length: weeks }, (_, i) => {
    const from = shiftDay(thisWeek, -7 * (weeks - 1 - i));
    const to = shiftDay(from, 7);
    const ps = plays.filter((p) => p.day != null && p.day >= from && p.day < to);
    return {
      name: `${+from.slice(5, 7)}/${+from.slice(8, 10)}〜`,
      プレイ数: ps.length,
      達成率: rate(ps),
      初心者の割合: pct(ps.filter((p) => p.mode === "beginner").length, ps.length),
      平均達成度: avg(ps.filter((p) => p.contactOk).map((p) => p.progress)),
    };
  });
}

/** 主な決断の選択率が、週ごとにどう変わったか（%） */
export function weeklyChoiceShare(plays: Play[], today: string, decisionId: string, weeks = 12) {
  const d = KEY_DECISIONS.find((x) => x.id === decisionId) ?? KEY_DECISIONS[0];
  const options = [...new Set(plays.map((p) => d.value(p)).filter((v): v is string => v != null))];
  const thisWeek = weekStart(today);
  const rows: ChartRow[] = Array.from({ length: weeks }, (_, i) => {
    const from = shiftDay(thisWeek, -7 * (weeks - 1 - i));
    const to = shiftDay(from, 7);
    const vs = plays.filter((p) => p.day != null && p.day >= from && p.day < to).map((p) => d.value(p)).filter((v) => v != null);
    const row: ChartRow = { name: `${+from.slice(5, 7)}/${+from.slice(8, 10)}〜` };
    for (const o of options) row[o] = pct(vs.filter((v) => v === o).length, vs.length);
    return row;
  });
  return { label: d.label, options, rows };
}

// ───────── 早期終了の原因 ─────────

/**
 * 早期終了したプレイに多かった選択。打ち上げ前の決断ごとに、
 * 「早期終了したプレイのうちその選択をした割合」と「それ以外のプレイでの割合」を比べる
 */
export function earlyCauses(plays: Play[], minEarly = 5, limit = 20) {
  const early = plays.filter((p) => p.ending === "early");
  const others = plays.filter((p) => p.ending !== "early");
  if (early.length < minEarly) return { earlyCount: early.length, rows: [] };
  const rows: { group: string; category: string; earlyShare: number; otherShare: number; diff: number; earlyRate: number }[] = [];
  for (const g of preLaunchGroups(plays, 0.1)) {
    const cats = new Set(plays.map((p) => g.value(p)));
    for (const cat of cats) {
      if (cat === NOT_SHOWN) continue;
      const e = early.filter((p) => g.value(p) === cat).length;
      const o = others.filter((p) => g.value(p) === cat).length;
      if (e < minEarly) continue;
      rows.push({
        group: g.label,
        category: cat,
        earlyShare: pct(e, early.length),
        otherShare: pct(o, others.length),
        diff: Math.round((pct(e, early.length) - pct(o, others.length)) * 10) / 10,
        earlyRate: pct(e, e + o),
      });
    }
  }
  return { earlyCount: early.length, rows: rows.sort((a, b) => b.diff - a.diff).slice(0, limit) };
}

// ───────── 遊び方のタイプ ─────────

/**
 * 選択から遊び方の傾向を点数にする。値が +1 ならその傾向に当てはまる選択、-1 なら反対の選択。
 * 各傾向の点数 =（当てはまる数 − 反対の数）÷ その傾向に関わる選択をした数（-1〜+1）
 */
const TRAITS: Record<string, Record<string, number>> = {
  慎重: {
    "te-vibration:full": 1, "te-vibration:skip": -1, "te-thermal:full": 1, "te-thermal:skip": -1,
    "te-rehearsal:do": 1, "te-rehearsal:skip": -1, "te-final:careful": 1, "te-final:schedule": -1,
    "i-interface:investigate": 1, "i-interface:patch": -1, "te-glitch:investigate": 1, "te-glitch:watch": -1,
    "i-harness:all": 1, "i-harness:one": -1, "i-flatsat:do": 1, "i-flatsat:skip": -1, "dd-pdr:external": 1, "dd-pdr:internal": -1,
    "te-longrun:two": 1, "te-longrun:day": -1, "te-deploy:repeat": 1, "te-deploy:once": -1, "te-e2e:do": 1, "te-e2e:bench": -1,
    "l-checkout:careful": 1, "l-checkout:quick": -1, "te-ship-review:external": 1, "te-ship-review:internal": -1,
  },
  挑戦: {
    "g-success:ambitious": 1, "g-techdemo:demo": 1, "g-techdemo:proven": -1, "g-duration:two": 1, "g-duration:half": -1,
    "c-rival:unique": 1, "c-rival:coop": -1, "o-routine:explore": 1, "o-routine:plan": -1, "o-end:extend": 1, "o-end:finish": -1,
    "o-storm:observe": 1, "o-storm:safe": -1, "dd-scope:add": 1, "dd-scope:next": -1, "d-techdemo:outside": 1, "d-techdemo:inside": -1,
  },
  広報: {
    "i-pr:join": 1, "i-pr:decline": -1, "f-media:accept": 1, "f-media:later": -1, "f-crowd:run": 1, "f-crowd:skip": -1,
    "f-contest:enter": 1, "f-contest:skip": -1, "b-name:contest": 1, "c-why:catch": 1, "c-why:docs": -1, "c-logo:kids": 1,
    "o-first:share": 1, "o-first:analyze": -1, "o-share:open": 1, "o-share:paper": -1, "l-cheer:live": 1, "o-viral:request": 1,
    "o-viral:steady": -1, "i-photo:public": 1, "i-photo:team": -1, "o-conference:present": 1, "o-conference:paper": -1,
  },
  節約: {
    "dd-parts:alt": 1, "dd-parts:rush": -1, "x-radiation:cots": 1, "x-radiation:space": -1, "dd-battery:cots": 1, "dd-battery:space": -1,
    "dd-redundancy:none": 1, "dd-redundancy:add": -1, "b-cleanroom:desk": 1, "b-cleanroom:clean": -1, "te-ship:hand": 1, "te-ship:container": -1,
    "dd-coating:bare": 1, "dd-coating:mli": -1, "t-people:push": 1, "t-people:expert": -1, "dd-lens:cots": 1, "dd-lens:space": -1,
    "b-ground:own": 1, "b-ground:commercial": -1, "x-ground:single": 1, "x-ground:network": -1, "i-esd:care": 1, "i-esd:strict": -1,
  },
};

export const PLAYER_TYPES = ["慎重派", "挑戦派", "広報派", "節約派", "バランス型"];
const TYPE_COLORS: Record<string, string> = { 慎重派: "#38BDF8", 挑戦派: "#F59E0B", 広報派: "#EEEEBB", 節約派: "#22C55E", バランス型: "#94A3B8" };

function traitScores(p: Play) {
  const out: Record<string, number> = {};
  for (const [trait, map] of Object.entries(TRAITS)) {
    let sum = 0;
    let n = 0;
    for (const x of p.log) {
      const w = map[`${x.event}:${x.choice}`];
      if (w != null) {
        sum += w;
        n++;
      }
    }
    out[trait] = n >= 2 ? sum / n : 0;
  }
  return out;
}

/**
 * いちばん強い傾向でタイプを決める。どの傾向も 0.4 未満なら「バランス型」。
 * 傾向の強さはプレイによって関わる選択の数が違うので、少なくとも2つ関わった傾向だけ数える
 */
export function playerTypes(plays: Play[]) {
  const typed = plays.map((p) => {
    const s = traitScores(p);
    const [best, score] = Object.entries(s).sort((a, b) => b[1] - a[1])[0];
    return { p, type: score >= 0.4 ? `${best}派` : "バランス型", scores: s };
  });
  const rows = PLAYER_TYPES.map((t) => {
    const ps = typed.filter((x) => x.type === t).map((x) => x.p);
    return {
      type: t,
      count: ps.length,
      share: pct(ps.length, plays.length),
      successRate: rate(ps),
      avgProgress: avg(ps.filter((p) => p.contactOk).map((p) => p.progress)),
      earlyRate: pct(ps.filter((p) => p.ending === "early").length, ps.length),
      beginnerShare: pct(ps.filter((p) => p.mode === "beginner").length, ps.length),
    };
  });
  const donut = rows.filter((r) => r.count > 0).map((r) => ({ name: r.type, value: r.count, color: TYPE_COLORS[r.type] }));
  // タイプごとのエンディングの割合
  const endings: ChartRow[] = PLAYER_TYPES.map((t) => {
    const ps = typed.filter((x) => x.type === t).map((x) => x.p);
    const row: ChartRow = { name: t };
    for (const id of ENDING_ORDER) row[id] = pct(ps.filter((p) => p.ending === id).length, ps.length);
    return row;
  });
  return { rows, donut, endings };
}

// ───────── 途中でやめた場所（離脱） ─────────

/**
 * 遊び始めたプレイ（progress または play にあるもの）のうち、各フェーズまで進んだ割合。
 * 最後まで遊んだプレイ（play シート）は、終わったフェーズまで進んだものとして数える
 */
export function dropoff(plays: Play[], progress: ProgressRow[]) {
  const finished = new Set(plays.map((p) => p.playId));
  const abandoned = progress.filter((r) => !finished.has(r.playId));
  const started = plays.length + abandoned.length;
  // phaseReached はそのプレイが最後にいたフェーズ（最後まで遊んだプレイは 10＝すべて通過）
  const funnel: ChartRow[] = L.phases.map((name, i) => {
    const fin = plays.filter((p) => p.phaseReached >= i).length;
    const ab = abandoned.filter((r) => r.phaseReached >= i).length;
    return { name, 進んだ割合: pct(fin + ab, started) };
  });
  const whereAbandoned: ChartRow[] = L.phases.map((name, i) => ({
    name,
    初心者: abandoned.filter((r) => r.mode === "beginner" && Math.min(r.phaseReached, L.phases.length - 1) === i).length,
    玄人: abandoned.filter((r) => r.mode === "expert" && Math.min(r.phaseReached, L.phases.length - 1) === i).length,
  }));
  const lastEvents = frequency(abandoned.map((r) => (r.lastEvent ? [`${phaseOfEvent(r.lastEvent)}：${eventLabel(r.lastEvent)}`] : [])), 10);
  return {
    started,
    finished: plays.length,
    abandoned: abandoned.length,
    abandonRate: pct(abandoned.length, started),
    byMode: (["beginner", "expert"] as Mode[]).map((m) => {
      const s = plays.filter((p) => p.mode === m).length + abandoned.filter((r) => r.mode === m).length;
      return { mode: MODE_LABELS[m], started: s, abandonRate: pct(abandoned.filter((r) => r.mode === m).length, s) };
    }),
    medianMinutesBeforeLeave: Math.round((median(abandoned.map((r) => r.durationSec)) / 60) * 10) / 10,
    funnel,
    whereAbandoned,
    lastEvents,
  };
}

// ───────── 時間 ─────────

const DURATION_BINS = [
  { name: "5分未満", max: 5 },
  { name: "5〜10分", max: 10 },
  { name: "10〜15分", max: 15 },
  { name: "15〜20分", max: 20 },
  { name: "20〜30分", max: 30 },
  { name: "30分以上", max: Infinity },
];

/** プレイ時間（選択にかかった時間の合計）と、迷いやすいイベント。v0.4.0 以降のデータのみ */
export function timeStats(plays: Play[], minN = 10) {
  const timed = plays.filter((p) => p.durationSec != null && p.durationSec > 0);
  const minutes = (p: Play) => p.durationSec! / 60;
  const histogram: ChartRow[] = DURATION_BINS.map((b, i) => {
    const lo = i === 0 ? 0 : DURATION_BINS[i - 1].max;
    const inBin = (p: Play) => minutes(p) >= lo && minutes(p) < b.max;
    return {
      name: b.name,
      初心者: timed.filter((p) => p.mode === "beginner" && inBin(p)).length,
      玄人: timed.filter((p) => p.mode === "expert" && inBin(p)).length,
    };
  });
  const byDuration = DURATION_BINS.map((b, i) => {
    const lo = i === 0 ? 0 : DURATION_BINS[i - 1].max;
    const ps = timed.filter((p) => minutes(p) >= lo && minutes(p) < b.max);
    return { name: b.name, count: ps.length, successRate: rate(ps), avgProgress: avg(ps.filter((p) => p.contactOk).map((p) => p.progress)) };
  });
  // 1回の選択にかかった時間（秒）を、フェーズ別・イベント別に
  const perEvent = new Map<string, number[]>();
  for (const p of timed) for (const x of p.log) if (x.ms != null) perEvent.set(x.event, [...(perEvent.get(x.event) ?? []), x.ms / 1000]);
  const perPhase: ChartRow[] = L.phases.map((name, i) => {
    const row: ChartRow = { name };
    for (const m of ["beginner", "expert"] as Mode[]) {
      const secs = timed.filter((p) => p.mode === m).flatMap((p) => p.log.filter((x) => x.ms != null && phaseIndexOfEvent(x.event) === i).map((x) => x.ms! / 1000));
      row[MODE_LABELS[m]] = Math.round(median(secs) * 10) / 10;
    }
    return row;
  });
  const slowest = [...perEvent.entries()]
    .filter(([, secs]) => secs.length >= minN)
    .map(([id, secs]) => ({ title: eventLabel(id), phase: phaseOfEvent(id), count: secs.length, median: Math.round(median(secs) * 10) / 10 }))
    .sort((a, b) => b.median - a.median)
    .slice(0, 15);
  return {
    count: timed.length,
    medianMinutes: {
      全体: Math.round(median(timed.map(minutes)) * 10) / 10,
      初心者: Math.round(median(timed.filter((p) => p.mode === "beginner").map(minutes)) * 10) / 10,
      玄人: Math.round(median(timed.filter((p) => p.mode === "expert").map(minutes)) * 10) / 10,
    },
    histogram,
    byDuration,
    perPhase,
    slowest,
  };
}

// ───────── 用語ボタン ─────────

/** どの用語の説明がよく開かれたか（＝分かりにくい言葉の候補）。v0.4.0 以降のデータのみ */
export function termStats(plays: Play[], limit = 15) {
  const withTerms = plays.filter((p) => p.termOpens != null);
  const totals = new Map<string, { opens: number; plays: number }>();
  for (const p of withTerms) {
    for (const [term, n] of Object.entries(p.termOpens!)) {
      const t = totals.get(term) ?? { opens: 0, plays: 0 };
      t.opens += n;
      t.plays += 1;
      totals.set(term, t);
    }
  }
  const usedAny = (ps: Play[]) => pct(ps.filter((p) => Object.keys(p.termOpens!).length > 0).length, ps.length);
  return {
    count: withTerms.length,
    usedRate: {
      全体: usedAny(withTerms),
      初心者: usedAny(withTerms.filter((p) => p.mode === "beginner")),
      玄人: usedAny(withTerms.filter((p) => p.mode === "expert")),
    },
    avgOpens: avg(withTerms.map((p) => Object.values(p.termOpens!).reduce((s, n) => s + n, 0))),
    ranking: [...totals.entries()]
      .sort((a, b) => b[1].plays - a[1].plays)
      .slice(0, limit)
      .map(([name, t], i) => ({ rank: i + 1, name: `${name}（計${t.opens}回）`, count: t.plays, percentage: pct(t.plays, withTerms.length) })),
    // 用語を開いたプレイと開かなかったプレイの達成率
    successWith: rate(withTerms.filter((p) => Object.keys(p.termOpens!).length > 0)),
    successWithout: rate(withTerms.filter((p) => Object.keys(p.termOpens!).length === 0)),
  };
}
