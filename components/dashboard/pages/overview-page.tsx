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
} from "lucide-react";
import { KpiCard } from "../kpi-card";
import type { AccentColor } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { LineChartComponent } from "../charts/line-chart";
import { Button } from "@/components/ui/button";

const getJSTDate = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));

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

interface OverviewData {
  discord: Metric;
  x: Metric;
  instagram: Metric;
  note: Metric;
  quiz: Metric;
  type: Metric;
  matchRocket: Metric;
  matchConstellation: Metric;
  trend: { name: string; Discord: number; SNS合計: number }[];
}

const zeroMetric = (): Metric => ({ total: 0, month: 0, week: 0, yesterday: 0, today: 0 });

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

export function OverviewPage() {
  const [data, setData] = useState<OverviewData | null>(null);
  const [statPeriod, setStatPeriod] = useState<StatPeriod>("total");
  const [trendPeriod, setTrendPeriod] = useState("90");

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
          if (r.num === yesterdayNum) discord.yesterday += r.increase;
          if (r.num === todayNum) discord.today += r.increase;
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

        // ---- Quiz ----
        const quizRows = Papa.parse(quizCsv, { header: true, skipEmptyLines: true })
          .data as any[];
        const quiz: Metric = zeroMetric();
        quizRows.forEach((r) => {
          if (!r["問題"] || String(r["問題"]).trim() === "") return;
          const parts = String(r["日時"] || "").trim().split(/[\/\- :]/);
          if (parts.length < 3) return;
          const y = parseInt(parts[0], 10);
          const m = parseInt(parts[1], 10);
          const d = parseInt(parts[2], 10);
          if (!y || !m || !d) return;
          const num = y * 10000 + m * 100 + d;
          const ans = parseInt(String(r["回答数"] || "0").replace(/,/g, ""), 10) || 0;
          quiz.total += ans;
          if (num >= startOfMonthNum) quiz.month += ans;
          if (num >= startOfWeekNum) quiz.week += ans;
          if (num === yesterdayNum) quiz.yesterday += ans;
          if (num === todayNum) quiz.today += ans;
        });

        // ---- Type diagnosis (3 CSVs) ----
        const type: Metric = zeroMetric();
        [type1Csv, type2Csv, type3Csv].forEach((csv) => {
          (Papa.parse(csv, { header: true, skipEmptyLines: true }).data as any[]).forEach(
            (r) => {
              const dStr = String(r.date || "").trim().replace(/-/g, "/");
              const parts = dStr.split("/");
              if (parts.length < 3) return;
              const y = parseInt(parts[0], 10);
              const m = parseInt(parts[1], 10);
              const d = parseInt(parts[2], 10);
              if (!y || !m || !d) return;
              const num = y * 10000 + m * 100 + d;
              type.total++;
              if (num >= startOfMonthNum) type.month++;
              if (num >= startOfWeekNum) type.week++;
              if (num === yesterdayNum) type.yesterday++;
              if (num === todayNum) type.today++;
            },
          );
        });

        // ---- Cosmo Match ----
        const parseMatch = (csv: string, resultCol: string): Metric => {
          const metric: Metric = zeroMetric();
          (Papa.parse(csv, { header: true, skipEmptyLines: true }).data as any[]).forEach(
            (r) => {
              if (!String(r["日時"] || "").trim() || !String(r[resultCol] || "").trim()) return;
              const parts = String(r["日時"]).trim().split(/[\/\- :]/);
              if (parts.length < 3) return;
              const y = parseInt(parts[0], 10);
              const m = parseInt(parts[1], 10);
              const d = parseInt(parts[2], 10);
              if (!y || !m || !d) return;
              const num = y * 10000 + m * 100 + d;
              metric.total++;
              if (num >= startOfMonthNum) metric.month++;
              if (num >= startOfWeekNum) metric.week++;
              if (num === yesterdayNum) metric.yesterday++;
              if (num === todayNum) metric.today++;
            },
          );
          return metric;
        };
        const matchRocket = parseMatch(rocketCsv, "判定ロケット");
        const matchConstellation = parseMatch(constellCsv, "判定");

        // ---- Trend (date-filled from Discord/SNS CSV) ----
        const trend: { name: string; Discord: number; SNS合計: number }[] = [];
        if (dsRecords.length > 0) {
          const firstNum = dsRecords[0].num;
          let lastDiscord = 0, lastX = 0, lastInsta = 0, lastNote = 0;
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
            trend.push({
              name: `${iy}/${String(im).padStart(2, "0")}/${String(id).padStart(2, "0")}`,
              Discord: lastDiscord,
              SNS合計: lastX + lastInsta + lastNote,
            });
            iterDate.setDate(iterDate.getDate() + 1);
          }
        }

        setData({ discord, x, instagram, note, quiz, type, matchRocket, matchConstellation, trend });
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <KpiCard
            title="Discord"
            value={getVal(data?.discord)}
            unit="人"
            icon={Users}
            accentColor={getAccent(data?.discord, "primary")}
          />
          <KpiCard
            title="X"
            value={getVal(data?.x)}
            unit="人"
            icon={TrendingUp}
            accentColor={getAccent(data?.x, "accent")}
          />
          <KpiCard
            title="Instagram"
            value={getVal(data?.instagram)}
            unit="人"
            icon={TrendingUp}
            accentColor={getAccent(data?.instagram, "warning")}
          />
          <KpiCard
            title="note"
            value={getVal(data?.note)}
            unit="人"
            icon={TrendingUp}
            accentColor={getAccent(data?.note, "success")}
          />
        </div>
      </SectionCard>

      {/* コンテンツ */}
      <SectionCard title="コンテンツ" description={`各コンテンツの参加者数 — ${periodLabel}`}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <KpiCard
            title="宇宙クイズ"
            value={getVal(data?.quiz)}
            unit="件"
            icon={HelpCircle}
            accentColor={getAccent(data?.quiz, "warning")}
          />
          <KpiCard
            title="宇宙タイプ診断"
            value={getVal(data?.type)}
            unit="件"
            icon={Sparkles}
            accentColor={getAccent(data?.type, "primary")}
          />
          <KpiCard
            title="Cosmo Match ロケット"
            value={getVal(data?.matchRocket)}
            unit="件"
            icon={Rocket}
            accentColor={getAccent(data?.matchRocket, "accent")}
          />
          <KpiCard
            title="Cosmo Match 星座"
            value={getVal(data?.matchConstellation)}
            unit="件"
            icon={Star}
            accentColor={getAccent(data?.matchConstellation, "success")}
          />
        </div>
      </SectionCard>

      {/* Trend chart */}
      <SectionCard
        title="推移グラフ"
        description="Discordメンバー数・SNS総フォロワー数の推移"
      >
        <div className="flex gap-1 flex-wrap mb-4">
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
        <ChartContainer height="h-[320px]">
          <LineChartComponent
            data={trendFiltered}
            lines={[
              { dataKey: "Discord", name: "Discordメンバー", color: "#38BDF8" },
              { dataKey: "SNS合計", name: "SNS総フォロワー", color: "#8B5CF6" },
            ]}
          />
        </ChartContainer>
      </SectionCard>
    </div>
  );
}
