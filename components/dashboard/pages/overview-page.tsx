"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  Users,
  TrendingUp,
  HelpCircle,
  Sparkles,
  Rocket,
  Star,
  BarChart2,
  Hash,
} from "lucide-react";
import { KpiCard } from "../kpi-card";
import type { AccentColor } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { LineChartComponent } from "../charts/line-chart";
import { Button } from "@/components/ui/button";
import { getJSTDate } from "@/lib/utils";

const CSV_URLS = {
  discordSns:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRoX91AuTR9uVSNcCSqr0ir_SIP-6ZtNpOqBHaLEwXDMA99w1Rws-5L7crTpqBY_JqHa-n0Ie4PxWLq/pub?gid=0&single=true&output=csv",
  quiz: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSVq2TSYbOibnTUUyYqHJmrEfspQ1KQn8JpaTsvkrC8oekSogURY1N9yqocitnAbEXewzPIQVyj59rf/pub?gid=0&single=true&output=csv",
  typeSimpleCbhp:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vReKqSJGubls2ixij5n6FbAi37wzshzZ09Q10a0uzJO1kuk8dSuw9c_yjm4XmsJelkiCLBubKAUFgky/pub?gid=0&single=true&output=csv",
  typeSimpleParticipant:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzLEbfZRlDsErUJ7hrEqtaXTpEym3kWXGyvpQDrAbLOFbJZ4_aoMdFn-BQM1GSeHiXsTo4L3kY86YC/pub?gid=0&single=true&output=csv",
  typeDetailed:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJvQVHHyL56_1xeVimkfbJCXCNN9MGtDt_ACebndkqhuqGbugvykZvRhkmajQ5fs6ug_Tas_rPXZUl/pub?gid=0&single=true&output=csv",
  matchRocket:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQENBPEZ3ep1J54G09l7I-vPMaMC6wNxr55bXBsdAdj_xp6gy5ksoM27EyITCuGObi0Kzxbzu2HpLM1/pub?gid=1977317423&single=true&output=csv",
  matchConstellation:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTbfWKxGFEmOkuaszkGJNUcX4FySkqmdxKJtaXG0esrjJoHSo5zmEoOGLTmzH09YJd9BZY1DyqNc7P/pub?gid=1977317423&single=true&output=csv",
};

type StatPeriod = "total" | "month" | "week" | "yesterday" | "today";

const STAT_PERIODS: { key: StatPeriod; label: string }[] = [
  { key: "total", label: "全体" },
  { key: "month", label: "今月" },
  { key: "week", label: "今週" },
  { key: "yesterday", label: "昨日" },
  { key: "today", label: "今日" },
];

const TREND_PERIODS = [
  { key: "30", label: "1ヶ月", days: 30 as number | null },
  { key: "90", label: "3ヶ月", days: 90 as number | null },
  { key: "180", label: "6ヶ月", days: 180 as number | null },
  { key: "365", label: "1年", days: 365 as number | null },
  { key: "all", label: "全期間", days: null as number | null },
];

interface Metric {
  total: number;
  month: number;
  week: number;
  yesterday: number;
  today: number;
}

type TrendRow = {
  name: string;
  Discord: number;
  SNS合計: number;
  X: number;
  Instagram: number;
  note: number;
  コンテンツ合計: number;
  宇宙クイズ: number;
  宇宙タイプ診断: number;
  "Cosmo Matchロケット": number;
  "Cosmo Match星座": number;
};

interface OverviewData {
  discord: Metric;
  snsTotal: Metric;
  x: Metric;
  instagram: Metric;
  note: Metric;
  contentTotal: Metric;
  quiz: Metric;
  type: Metric;
  matchRocket: Metric;
  matchConstellation: Metric;
  trend: TrendRow[];
  todayUpdated: { discord: boolean; sns: boolean; quiz: boolean };
}

const TREND_LINES = [
  { dataKey: "Discord", name: "Discord", color: "#38BDF8" },
  { dataKey: "SNS合計", name: "SNS合計", color: "#8B5CF6" },
  { dataKey: "X", name: "X", color: "#60A5FA" },
  { dataKey: "Instagram", name: "Instagram", color: "#F472B6" },
  { dataKey: "note", name: "note", color: "#34D399" },
  { dataKey: "コンテンツ合計", name: "コンテンツ合計", color: "#FBBF24" },
  { dataKey: "宇宙クイズ", name: "宇宙クイズ", color: "#FB923C" },
  { dataKey: "宇宙タイプ診断", name: "宇宙タイプ診断", color: "#A78BFA" },
  { dataKey: "Cosmo Matchロケット", name: "Cosmo Matchロケット", color: "#F87171" },
  { dataKey: "Cosmo Match星座", name: "Cosmo Match星座", color: "#E879F9" },
] as const;

const zeroMetric = (): Metric => ({ total: 0, month: 0, week: 0, yesterday: 0, today: 0 });

function addMetrics(a: Metric, b: Metric): Metric {
  return {
    total: a.total + b.total,
    month: a.month + b.month,
    week: a.week + b.week,
    yesterday: a.yesterday + b.yesterday,
    today: a.today + b.today,
  };
}

function parseDiscordSnsRecords(rawData: string[][]) {
  const headerRowIndex = rawData.findIndex((row) => row.includes("参加数"));
  if (headerRowIndex === -1) return [];
  const headers = rawData[headerRowIndex];
  const monthIdx = headers.indexOf("月");
  const dayIdx = headers.indexOf("日");
  const increaseIdx = headers.indexOf("参加増加数");
  const totalIdx = headers.indexOf("参加数");
  let xIdx = headers.indexOf("X");
  if (xIdx === -1) xIdx = headers.indexOf("x");
  const instagramIdx = headers.indexOf("Instagram");
  const noteIdx = headers.indexOf("note");

  return rawData
    .slice(headerRowIndex + 1)
    .map((row) => ({
      month: parseInt(row[monthIdx], 10),
      day: parseInt(row[dayIdx], 10),
      increase: parseInt(String(row[increaseIdx] || "").replace(/,/g, ""), 10) || 0,
      total: parseInt(String(row[totalIdx] || "").replace(/,/g, ""), 10) || 0,
      x: parseInt(String(row[xIdx] || "").replace(/,/g, ""), 10) || 0,
      instagram: parseInt(String(row[instagramIdx] || "").replace(/,/g, ""), 10) || 0,
      note: parseInt(String(row[noteIdx] || "").replace(/,/g, ""), 10) || 0,
    }))
    .filter((r) => r.total > 0);
}

function withDateNums(records: ReturnType<typeof parseDiscordSnsRecords>) {
  const nowJst = getJSTDate();
  const currentM = nowJst.getMonth() + 1;
  let yearForDate = nowJst.getFullYear();
  if (records.length > 0 && records[0].month > currentM + 1) yearForDate--;
  let prevMonth = -1;
  return records.map((r) => {
    if (prevMonth !== -1 && prevMonth === 12 && r.month === 1) yearForDate++;
    prevMonth = r.month;
    return { ...r, num: yearForDate * 10000 + r.month * 100 + r.day };
  });
}

function dateToNum(d: Date) {
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function parseDateNum(dateStr: string): number {
  const s = String(dateStr || "").trim().replace(/-/g, "/").split(" ")[0];
  const parts = s.split("/");
  if (parts.length < 3) return 0;
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  const d = parseInt(parts[2], 10);
  if (!y || !m || !d) return 0;
  return y * 10000 + m * 100 + d;
}

export function OverviewPage() {
  const [data, setData] = useState<OverviewData | null>(null);
  const [statPeriod, setStatPeriod] = useState<StatPeriod>("total");
  const [trendPeriod, setTrendPeriod] = useState("90");
  const [visibleLines, setVisibleLines] = useState<Set<string>>(
    () => new Set(TREND_LINES.map((l) => l.dataKey)),
  );

  const toggleLine = (key: string) => {
    setVisibleLines((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  useEffect(() => {
    Promise.all([
      fetch(CSV_URLS.discordSns).then((r) => r.text()),
      fetch(CSV_URLS.quiz).then((r) => r.text()),
      fetch(CSV_URLS.typeSimpleCbhp).then((r) => r.text()),
      fetch(CSV_URLS.typeSimpleParticipant).then((r) => r.text()),
      fetch(CSV_URLS.typeDetailed).then((r) => r.text()),
      fetch(CSV_URLS.matchRocket).then((r) => r.text()),
      fetch(CSV_URLS.matchConstellation).then((r) => r.text()),
    ])
      .then(([discordSnsCsv, quizCsv, type1Csv, type2Csv, type3Csv, rocketCsv, constellCsv]) => {
        const nowJst = getJSTDate();
        const currentY = nowJst.getFullYear();
        const currentM = nowJst.getMonth() + 1;
        const currentD = nowJst.getDate();
        const todayNum = dateToNum(nowJst);

        const yesterdayDate = new Date(nowJst);
        yesterdayDate.setDate(currentD - 1);
        const yesterdayNum = dateToNum(yesterdayDate);

        const dayBeforeYesterday = new Date(yesterdayDate);
        dayBeforeYesterday.setDate(yesterdayDate.getDate() - 1);
        const dayBeforeYesterdayNum = dateToNum(dayBeforeYesterday);

        const dayOfWeek = nowJst.getDay() === 0 ? 7 : nowJst.getDay();
        const startOfWeek = new Date(nowJst);
        startOfWeek.setDate(currentD - dayOfWeek + 1);
        const startOfWeekNum = dateToNum(startOfWeek);

        const dayBeforeWeekStart = new Date(startOfWeek);
        dayBeforeWeekStart.setDate(startOfWeek.getDate() - 1);
        const dayBeforeWeekStartNum = dateToNum(dayBeforeWeekStart);

        const startOfMonthNum = currentY * 10000 + currentM * 100 + 1;

        const endOfPrevMonth = new Date(nowJst);
        endOfPrevMonth.setDate(0);
        const endOfPrevMonthNum = dateToNum(endOfPrevMonth);

        // ---- Discord / SNS ----
        const rawData = Papa.parse(discordSnsCsv, { skipEmptyLines: true }).data as string[][];
        const dsRecords = withDateNums(parseDiscordSnsRecords(rawData));

        const dsNumMap = new Map<number, (typeof dsRecords)[0]>();
        dsRecords.forEach((r) => dsNumMap.set(r.num, r));

        const findAtOrBefore = (targetNum: number) => {
          let result = dsRecords[0];
          for (const r of dsRecords) {
            if (r.num <= targetNum) result = r;
            else break;
          }
          return result;
        };

        const latest = dsRecords[dsRecords.length - 1];
        const latestIsToday = latest?.num === todayNum;

        const discord: Metric = zeroMetric();
        discord.total = latest?.total ?? 0;
        dsRecords.forEach((r) => {
          if (r.num >= startOfMonthNum) discord.month += r.increase;
          if (r.num >= startOfWeekNum) discord.week += r.increase;
          if (r.num === yesterdayNum) discord.yesterday = r.increase;
          if (r.num === todayNum) discord.today = r.increase;
        });

        const computeSns = (field: "x" | "instagram" | "note"): Metric => {
          const latestVal = latest?.[field] ?? 0;
          return {
            total: latestVal,
            month: latestVal - (findAtOrBefore(endOfPrevMonthNum)?.[field] ?? 0),
            week: latestVal - (findAtOrBefore(dayBeforeWeekStartNum)?.[field] ?? 0),
            yesterday:
              (findAtOrBefore(yesterdayNum)?.[field] ?? 0) -
              (findAtOrBefore(dayBeforeYesterdayNum)?.[field] ?? 0),
            today: latestIsToday
              ? latestVal - (findAtOrBefore(yesterdayNum)?.[field] ?? 0)
              : 0,
          };
        };
        const x = computeSns("x");
        const instagram = computeSns("instagram");
        const note = computeSns("note");

        const snsTotal: Metric = {
          total: x.total + instagram.total + note.total,
          month: x.month + instagram.month + note.month,
          week: x.week + instagram.week + note.week,
          yesterday: x.yesterday + instagram.yesterday + note.yesterday,
          today: x.today + instagram.today + note.today,
        };

        // ---- Quiz ----
        // Uses "出題日" as date column, "回答数" as answer count
        const quizRows = Papa.parse(quizCsv, { header: true, skipEmptyLines: true }).data as any[];
        const quiz: Metric = zeroMetric();
        const quizDailyMap = new Map<number, number>(); // dateNum -> cumulative daily answers
        let quizHasToday = false;
        quizRows.forEach((r) => {
          if (!r["問題"] || String(r["問題"]).trim() === "") return;
          const num = parseDateNum(String(r["出題日"] || ""));
          if (!num) return;
          const ans = parseInt(String(r["回答数"] || "0").replace(/,/g, ""), 10) || 0;
          quiz.total += ans;
          if (num >= startOfMonthNum) quiz.month += ans;
          if (num >= startOfWeekNum) quiz.week += ans;
          if (num === yesterdayNum) quiz.yesterday += ans;
          if (num === todayNum) { quiz.today += ans; quizHasToday = true; }
          quizDailyMap.set(num, (quizDailyMap.get(num) ?? 0) + ans);
        });

        // ---- Type diagnosis (3 CSVs) ----
        const type: Metric = zeroMetric();
        const typeDailyMap = new Map<number, number>();
        [type1Csv, type2Csv, type3Csv].forEach((csv) => {
          (Papa.parse(csv, { header: true, skipEmptyLines: true }).data as any[]).forEach((r) => {
            const num = parseDateNum(String(r.date || ""));
            if (!num) return;
            type.total++;
            if (num >= startOfMonthNum) type.month++;
            if (num >= startOfWeekNum) type.week++;
            if (num === yesterdayNum) type.yesterday++;
            if (num === todayNum) type.today++;
            typeDailyMap.set(num, (typeDailyMap.get(num) ?? 0) + 1);
          });
        });

        // ---- Cosmo Match ----
        const parseMatch = (
          csv: string,
          resultCol: string,
          dailyMap: Map<number, number>,
        ): Metric => {
          const metric: Metric = zeroMetric();
          (Papa.parse(csv, { header: true, skipEmptyLines: true }).data as any[]).forEach((r) => {
            if (!String(r["日時"] || "").trim() || !String(r[resultCol] || "").trim()) return;
            const num = parseDateNum(String(r["日時"]));
            if (!num) return;
            metric.total++;
            if (num >= startOfMonthNum) metric.month++;
            if (num >= startOfWeekNum) metric.week++;
            if (num === yesterdayNum) metric.yesterday++;
            if (num === todayNum) metric.today++;
            dailyMap.set(num, (dailyMap.get(num) ?? 0) + 1);
          });
          return metric;
        };
        const rocketDailyMap = new Map<number, number>();
        const constellDailyMap = new Map<number, number>();
        const matchRocket = parseMatch(rocketCsv, "判定ロケット", rocketDailyMap);
        const matchConstellation = parseMatch(constellCsv, "判定", constellDailyMap);

        const contentTotal = [quiz, type, matchRocket, matchConstellation].reduce(addMetrics, zeroMetric());

        // ---- Trend (date-filled) ----
        const trend: TrendRow[] = [];
        if (dsRecords.length > 0) {
          const firstNum = dsRecords[0].num;
          let lastDiscord = 0, lastX = 0, lastInsta = 0, lastNote = 0;
          // Pre-seed cumulative counts with data before the Discord trend start date
          let cumQuiz = 0, cumType = 0, cumRocket = 0, cumConstell = 0;
          quizDailyMap.forEach((v, n) => { if (n < firstNum) cumQuiz += v; });
          typeDailyMap.forEach((v, n) => { if (n < firstNum) cumType += v; });
          rocketDailyMap.forEach((v, n) => { if (n < firstNum) cumRocket += v; });
          constellDailyMap.forEach((v, n) => { if (n < firstNum) cumConstell += v; });

          const iterDate = new Date(
            Math.floor(firstNum / 10000),
            Math.floor((firstNum % 10000) / 100) - 1,
            firstNum % 100,
          );
          const todayDate = new Date(currentY, currentM - 1, currentD);
          while (iterDate <= todayDate) {
            const iy = iterDate.getFullYear();
            const im = iterDate.getMonth() + 1;
            const id = iterDate.getDate();
            const num = iy * 10000 + im * 100 + id;
            const rec = dsNumMap.get(num);
            if (rec) {
              lastDiscord = rec.total;
              lastX = rec.x;
              lastInsta = rec.instagram;
              lastNote = rec.note;
            }
            cumQuiz += quizDailyMap.get(num) ?? 0;
            cumType += typeDailyMap.get(num) ?? 0;
            cumRocket += rocketDailyMap.get(num) ?? 0;
            cumConstell += constellDailyMap.get(num) ?? 0;
            trend.push({
              name: `${iy}/${String(im).padStart(2, "0")}/${String(id).padStart(2, "0")}`,
              Discord: lastDiscord,
              SNS合計: lastX + lastInsta + lastNote,
              X: lastX,
              Instagram: lastInsta,
              note: lastNote,
              コンテンツ合計: cumQuiz + cumType + cumRocket + cumConstell,
              宇宙クイズ: cumQuiz,
              宇宙タイプ診断: cumType,
              "Cosmo Matchロケット": cumRocket,
              "Cosmo Match星座": cumConstell,
            });
            iterDate.setDate(iterDate.getDate() + 1);
          }
        }

        setData({
          discord, snsTotal, x, instagram, note, contentTotal, quiz, type, matchRocket, matchConstellation, trend,
          todayUpdated: { discord: latestIsToday, sns: latestIsToday, quiz: quizHasToday },
        });
      })
      .catch(console.error);
  }, []);

  const getVal = (m: Metric | undefined): string => {
    if (!m) return "...";
    const v = m[statPeriod];
    if (statPeriod === "total") return v.toLocaleString();
    if (v > 0) return `+${v.toLocaleString()}`;
    if (v < 0) return v.toLocaleString();
    return "0";
  };

  const getAccent = (m: Metric | undefined, def: AccentColor): AccentColor => {
    if (!m || statPeriod === "total") return def;
    const v = m[statPeriod];
    if (v > 0) return "success";
    if (v < 0) return "danger";
    return "primary";
  };

  const trendOpt = TREND_PERIODS.find((o) => o.key === trendPeriod);
  const trendFiltered = trendOpt?.days
    ? (data?.trend ?? []).slice(-trendOpt.days)
    : (data?.trend ?? []);

  const periodLabel =
    statPeriod === "total"
      ? "累計"
      : statPeriod === "month"
        ? "今月の増加数"
        : statPeriod === "week"
          ? "今週の増加数"
          : statPeriod === "yesterday"
            ? "昨日の増加数"
            : "今日の増加数";

  return (
    <div className="space-y-8">
      <div className="border-b border-border/50 pb-4">
        <h2 className="text-2xl font-bold text-foreground">概要</h2>
        <p className="text-muted-foreground mt-1">
          各指標の主要KPIと推移を一覧で確認できます。
        </p>
      </div>

      {/* Period selector */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm text-muted-foreground mr-1">表示:</span>
        {STAT_PERIODS.map((opt) => (
          <Button
            key={opt.key}
            variant="outline"
            size="sm"
            onClick={() => setStatPeriod(opt.key)}
            className={
              statPeriod === opt.key
                ? "bg-primary text-primary-foreground border-transparent"
                : "bg-secondary/30 text-foreground"
            }
          >
            {opt.label}
          </Button>
        ))}
      </div>

      {/* 全体 */}
      <SectionCard title="全体" description={`Discord・SNS — ${periodLabel}`}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { title: "Discord", metric: data?.discord, unit: "人", icon: Users, def: "primary" as AccentColor, notUpdated: statPeriod === "today" && data && !data.todayUpdated.discord },
            { title: "SNS合計", metric: data?.snsTotal, unit: "人", icon: TrendingUp, def: "accent" as AccentColor, notUpdated: statPeriod === "today" && data && !data.todayUpdated.sns },
            { title: "X", metric: data?.x, unit: "人", icon: Hash, def: "accent" as AccentColor, notUpdated: statPeriod === "today" && data && !data.todayUpdated.sns },
            { title: "Instagram", metric: data?.instagram, unit: "人", icon: TrendingUp, def: "warning" as AccentColor, notUpdated: statPeriod === "today" && data && !data.todayUpdated.sns },
            { title: "note", metric: data?.note, unit: "人", icon: TrendingUp, def: "success" as AccentColor, notUpdated: statPeriod === "today" && data && !data.todayUpdated.sns },
          ].map((card) => (
            <div key={card.title}>
              <KpiCard
                title={card.title}
                value={getVal(card.metric)}
                unit={card.unit}
                icon={card.icon}
                accentColor={getAccent(card.metric, card.def)}
              />
              {card.notUpdated && (
                <p className="text-xs text-muted-foreground mt-1 text-center">本日未更新</p>
              )}
            </div>
          ))}
        </div>
      </SectionCard>

      {/* コンテンツ */}
      <SectionCard title="コンテンツ" description={`各コンテンツの参加者数 — ${periodLabel}`}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { title: "合計", metric: data?.contentTotal, unit: "件", icon: BarChart2, def: "primary" as AccentColor, notUpdated: false },
            { title: "宇宙クイズ", metric: data?.quiz, unit: "件", icon: HelpCircle, def: "warning" as AccentColor, notUpdated: statPeriod === "today" && data && !data.todayUpdated.quiz },
            { title: "宇宙タイプ診断", metric: data?.type, unit: "件", icon: Sparkles, def: "accent" as AccentColor, notUpdated: false },
            { title: "Cosmo Match ロケット", metric: data?.matchRocket, unit: "件", icon: Rocket, def: "success" as AccentColor, notUpdated: false },
            { title: "Cosmo Match 星座", metric: data?.matchConstellation, unit: "件", icon: Star, def: "success" as AccentColor, notUpdated: false },
          ].map((card) => (
            <div key={card.title}>
              <KpiCard
                title={card.title}
                value={getVal(card.metric)}
                unit={card.unit}
                icon={card.icon}
                accentColor={getAccent(card.metric, card.def)}
              />
              {card.notUpdated && (
                <p className="text-xs text-muted-foreground mt-1 text-center">本日未更新</p>
              )}
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Trend chart */}
      <SectionCard
        title="推移グラフ"
        description="Discord・SNS・コンテンツ各指標の推移（コンテンツは累計参加数）"
      >
        {/* Period filter */}
        <div className="flex gap-1 flex-wrap mb-3">
          {TREND_PERIODS.map((opt) => (
            <Button
              key={opt.key}
              variant="outline"
              size="sm"
              onClick={() => setTrendPeriod(opt.key)}
              className={
                trendPeriod === opt.key
                  ? "bg-primary text-primary-foreground border-transparent"
                  : "bg-secondary/30 text-foreground"
              }
            >
              {opt.label}
            </Button>
          ))}
        </div>
        {/* Line toggles */}
        <div className="flex gap-x-3 gap-y-1 flex-wrap mb-4 p-2 rounded-lg bg-secondary/20">
          {TREND_LINES.map((line) => {
            const active = visibleLines.has(line.dataKey);
            return (
              <button
                key={line.dataKey}
                onClick={() => toggleLine(line.dataKey)}
                className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded text-xs transition-opacity ${active ? "opacity-100" : "opacity-30"}`}
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: line.color }} />
                <span className="text-foreground whitespace-nowrap">{line.name}</span>
              </button>
            );
          })}
        </div>
        <ChartContainer height="h-[360px]">
          <LineChartComponent
            data={trendFiltered}
            lines={TREND_LINES.filter((l) => visibleLines.has(l.dataKey)) as any}
          />
        </ChartContainer>
      </SectionCard>
    </div>
  );
}
