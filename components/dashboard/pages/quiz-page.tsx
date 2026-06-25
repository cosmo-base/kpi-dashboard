"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  Users,
  Clock,
  Calendar,
  TrendingUp,
  Target,
  ArrowUpDown,
  CalendarDays,
  AlertTriangle,
  HelpCircle,
  BookOpenText,
  ArrowUpRight,
  Activity,
  BarChart2,
} from "lucide-react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  ZAxis,
} from "recharts";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { ScrollableTable } from "../scrollable-table";
import { LineChartComponent } from "../charts/line-chart";
import { LinearChartComponent } from "../charts/linear-chart";
import { DonutChart } from "../charts/donut-chart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const getJSTDate = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));

type SortMode = "date_desc" | "answers_desc" | "accuracy_desc" | "accuracy_asc";

// 平均回答数をフォーマットする関数 (100以上は整数、10-99.9は小数第1位、0-9.99は小数第2位)
const formatAverage = (num: number) => {
  if (!num || isNaN(num) || num === 0) return "0";
  if (num >= 100) return Math.round(num).toString();
  if (num >= 10) return (Math.round(num * 10) / 10).toFixed(1);
  return (Math.round(num * 100) / 100).toFixed(2);
};
const format = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

// 種別用のカラーパレット
const TYPE_COLORS = [
  "#38BDF8",
  "#8B5CF6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#EC4899",
  "#10B981",
  "#6B7280",
  "#F472B6",
  "#A78BFA",
  "#34D399",
  "#FBBF24",
];

// 媒体のバッジを生成する関数
const renderPlatformBadges = (platforms: string[]) => {
  if (!platforms || platforms.length === 0)
    return <span className="text-muted-foreground text-xs">-</span>;

  // 4媒体すべての場合は専用の色に変更
  if (platforms.length === 4) {
    return (
      <div className="flex items-center gap-1.5 flex-wrap min-w-[80px]">
        <span className="bg-[#e879f9]/20 text-[#e879f9] px-1.5 py-0.5 rounded text-[10px] font-bold whitespace-nowrap border border-fuchsia-500/30">
          すべて
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 flex-wrap min-w-[80px]">
      {platforms.map((p) => {
        if (p === "Discord")
          return (
            <span
              key={p}
              className="bg-[#5865F2]/20 text-[#5865F2] px-1.5 py-0.5 rounded text-[10px] font-bold whitespace-nowrap"
            >
              Discord
            </span>
          );
        if (p === "X")
          return (
            <span
              key={p}
              className="bg-[#1DA1F2]/20 text-[#1DA1F2] px-1.5 py-0.5 rounded text-[10px] font-bold whitespace-nowrap"
            >
              X
            </span>
          );
        if (p === "Instagram")
          return (
            <span
              key={p}
              className="bg-[#E4405F]/20 text-[#E4405F] px-1.5 py-0.5 rounded text-[10px] font-bold whitespace-nowrap"
            >
              Instagram
            </span>
          );
        if (p === "マイコミュ")
          return (
            <span
              key={p}
              className="bg-[#F59E0B]/20 text-[#F59E0B] px-1.5 py-0.5 rounded text-[10px] font-bold whitespace-nowrap"
            >
              マイコミュ
            </span>
          );
        return null;
      })}
    </div>
  );
};

const ScatterTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900 border border-white/10 p-3 rounded-xl shadow-xl z-50 max-w-xs cursor-default">
        <div className="max-h-[150px] overflow-y-auto custom-scrollbar pr-2 mb-2 space-y-2">
          {data.questions.map((q: any, i: number) => (
            <div
              key={i}
              className="border-b border-white/10 pb-2 pt-0.5 last:border-0"
            >
              <p className="text-white font-bold text-sm leading-tight mb-1.5">
                {q.text}
              </p>
              {renderPlatformBadges(q.platforms)}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-end border-t border-white/10 pt-2">
          <div className="flex gap-3">
            <p className="text-[#38BDF8] text-xs font-medium">
              回答数: {data.answers}件
            </p>
            <p className="text-[#8B5CF6] text-xs font-medium">
              正答率: {data.accuracy}%
            </p>
          </div>
          <p className="text-muted-foreground text-[10px] whitespace-nowrap ml-2">
            クリックで固定表示
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function SpaceQuizPage() {
  const [data, setData] = useState<any>(null);
  const [sortMode, setSortMode] = useState<SortMode>("date_desc");
  const [selectedDot, setSelectedDot] = useState<any>(null);

  // グラフ表示のON/OFFステート
  const [visibleLines, setVisibleLines] = useState<Record<string, boolean>>({
    全体: true,
    Discord: true,
    X: true,
    Instagram: true,
    マイコミュ: true,
  });

  // 種別推移グラフ用のステート
  const [typeChartPeriod, setTypeChartPeriod] = useState<"monthly" | "weekly">(
    "monthly",
  );
  const [typeChartMetric, setTypeChartMetric] = useState<
    "qCount" | "ans" | "avgAns" | "accuracy" | "zeroRate"
  >("ans");
  const [typeTablePeriod, setTypeTablePeriod] = useState<
    "overall" | "thisMonth" | "thisWeek"
  >("overall");
  const [visibleTypes, setVisibleTypes] = useState<Record<string, boolean>>({});

  // ★ 新設：クイズ全体用の指標切り替えステート
  const [monthlyMetric, setMonthlyMetric] = useState<
    "回答数" | "正答率" | "0件割合"
  >("回答数");
  const [weeklyMetric, setWeeklyMetric] = useState<
    "回答数" | "正答率" | "0件割合"
  >("回答数");

  const toggleLine = (lineKey: string) =>
    setVisibleLines((prev) => ({ ...prev, [lineKey]: !prev[lineKey] }));
  const toggleTypeLine = (typeKey: string) =>
    setVisibleTypes((prev) => ({ ...prev, [typeKey]: !prev[typeKey] }));

  // 種別表示の初期化
  useEffect(() => {
    if (data?.charts?.activeTypes) {
      const initial: Record<string, boolean> = {};
      data.charts.activeTypes.forEach((t: string) => (initial[t] = true));
      setVisibleTypes(initial);
    }
  }, [data?.charts?.activeTypes]);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSVq2TSYbOibnTUUyYqHJmrEfspQ1KQn8JpaTsvkrC8oekSogURY1N9yqocitnAbEXewzPIQVyj59rf/pub?gid=0&single=true&output=csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });
        const rows = parsed.data as any[];

        if (rows.length === 0) return;
        const validRows = rows.filter(
          (row) => row["問題"] && String(row["問題"]).trim() !== "",
        );
        if (validRows.length === 0) return;

        let totalAnswers = 0,
          totalCorrects = 0,
          totalZeroAnswers = 0;
        let todayCorrects = 0,
          thisWeekCorrects = 0,
          thisMonthCorrects = 0;
        let sumDiscord = 0,
          sumX = 0,
          sumInstagram = 0,
          sumMyCom = 0;

        const pStats = {
          Discord: { qCount: 0, zeroCount: 0, ans: 0, cor: 0 },
          X: { qCount: 0, zeroCount: 0, ans: 0, cor: 0 },
          Instagram: { qCount: 0, zeroCount: 0, ans: 0, cor: 0 },
          マイコミュ: { qCount: 0, zeroCount: 0, ans: 0, cor: 0 },
        };

        const tableDataRaw: any[] = [];
        const dailyAgg = new Map<string, any>();
        const typeCounts = new Map<string, number>();

        // ★ 種別分析用の集計Map
        const typeStatsOverall = new Map<string, any>();
        const typeStatsMonthly = new Map<string, Map<string, any>>();
        const typeStatsWeekly = new Map<string, Map<string, any>>();
        const initAgg = () => ({ qCount: 0, zeroCount: 0, ans: 0, cor: 0 });

        // ★ クイズ全体分析用の月別・週別集計Map
        const quizMonthlyMap = new Map<string, any>();
        const quizWeeklyMap = new Map<string, any>();

        const nowJst = getJSTDate();
        const currentY = nowJst.getFullYear();
        const currentM = nowJst.getMonth() + 1;
        const currentD = nowJst.getDate();
        const todayNum = currentY * 10000 + currentM * 100 + currentD;

        const startOfThisMonthNum = currentY * 10000 + currentM * 100 + 1;
        const dayOfWeek = nowJst.getDay() === 0 ? 7 : nowJst.getDay();
        const startOfWeekJst = new Date(nowJst.getTime());
        startOfWeekJst.setDate(nowJst.getDate() - dayOfWeek + 1);
        const startOfWeekNum =
          startOfWeekJst.getFullYear() * 10000 +
          (startOfWeekJst.getMonth() + 1) * 100 +
          startOfWeekJst.getDate();

        let todayQuestions = 0,
          todayZeroAnswers = 0;
        let thisWeekQuestions = 0,
          thisWeekZeroAnswers = 0;
        let thisMonthQuestions = 0,
          thisMonthZeroAnswers = 0;

        validRows.forEach((row) => {
          const dateStrRaw = String(row["出題日"] || "")
            .replace(/\-/g, "/")
            .split(" ")[0];
          const parts = dateStrRaw.split("/");
          if (parts.length < 3) return;

          const y = parseInt(parts[0], 10);
          const m = parseInt(parts[1], 10);
          const d = parseInt(parts[2], 10);
          const num = y * 10000 + m * 100 + d;
          const dateKey = `${y}/${String(m).padStart(2, "0")}/${String(d).padStart(2, "0")}`;
          const formattedDate = `${m}/${d}`;

          const typeStr = String(
            row["クイズの分類"] || row["種別"] || row["カテゴリ"] || "未分類",
          ).trim();
          if (typeStr)
            typeCounts.set(typeStr, (typeCounts.get(typeStr) || 0) + 1);

          const answers =
            parseInt(String(row["回答数"] || "0").replace(/,/g, ""), 10) || 0;
          if (answers === 0) totalZeroAnswers++;

          const rawDiscord = String(row["回答数(Discord)"] || "").trim();
          const rawX = String(row["回答数(X)"] || "").trim();
          const rawInstagram = String(row["回答数(Instagram)"] || "").trim();
          const rawMyCom = String(row["回答数(マイコミュ)"] || "").trim();

          const ansDiscord = parseInt(rawDiscord.replace(/,/g, ""), 10) || 0;
          const ansX = parseInt(rawX.replace(/,/g, ""), 10) || 0;
          const ansInstagram =
            parseInt(rawInstagram.replace(/,/g, ""), 10) || 0;
          const ansMyCom = parseInt(rawMyCom.replace(/,/g, ""), 10) || 0;

          const corDiscord =
            parseInt(
              String(row["正答数(Discord)"] || "0").replace(/,/g, ""),
              10,
            ) || 0;
          const corX =
            parseInt(String(row["正答数(X)"] || "0").replace(/,/g, ""), 10) ||
            0;
          const corInstagram =
            parseInt(
              String(row["正答数(Instagram)"] || "0").replace(/,/g, ""),
              10,
            ) || 0;
          const corMyCom =
            parseInt(
              String(row["正答数(マイコミュ)"] || "0").replace(/,/g, ""),
              10,
            ) || 0;

          const platforms: string[] = [];
          if (rawDiscord !== "") {
            platforms.push("Discord");
            pStats.Discord.qCount++;
            if (ansDiscord === 0) pStats.Discord.zeroCount++;
            pStats.Discord.ans += ansDiscord;
            pStats.Discord.cor += corDiscord;
          }
          if (rawX !== "") {
            platforms.push("X");
            pStats.X.qCount++;
            if (ansX === 0) pStats.X.zeroCount++;
            pStats.X.ans += ansX;
            pStats.X.cor += corX;
          }
          if (rawInstagram !== "") {
            platforms.push("Instagram");
            pStats.Instagram.qCount++;
            if (ansInstagram === 0) pStats.Instagram.zeroCount++;
            pStats.Instagram.ans += ansInstagram;
            pStats.Instagram.cor += corInstagram;
          }
          if (rawMyCom !== "") {
            platforms.push("マイコミュ");
            pStats.マイコミュ.qCount++;
            if (ansMyCom === 0) pStats.マイコミュ.zeroCount++;
            pStats.マイコミュ.ans += ansMyCom;
            pStats.マイコミュ.cor += corMyCom;
          }

          sumDiscord += ansDiscord;
          sumX += ansX;
          sumInstagram += ansInstagram;
          sumMyCom += ansMyCom;

          let accRaw = String(row["正答率"] || "0")
            .replace("%", "")
            .trim();
          let accNum = parseFloat(accRaw);
          if (
            String(row["正答率"]).indexOf("%") === -1 &&
            accNum > 0 &&
            accNum <= 1
          )
            accNum *= 100;
          if (isNaN(accNum)) accNum = 0;

          const correctSum = corDiscord + corX + corInstagram + corMyCom;
          const calculatedCorrect =
            correctSum > 0 ? correctSum : Math.round(answers * (accNum / 100));

          totalAnswers += answers;
          totalCorrects += calculatedCorrect;

          if (!dailyAgg.has(dateKey)) {
            dailyAgg.set(dateKey, {
              num,
              formattedDate,
              answers: 0,
              corrects: 0,
              discord: 0,
              x: 0,
              instagram: 0,
              MyCom: 0,
            });
          }
          const dayData = dailyAgg.get(dateKey);
          dayData.answers += answers;
          dayData.corrects += calculatedCorrect;
          dayData.discord += ansDiscord;
          dayData.x += ansX;
          dayData.instagram += ansInstagram;
          dayData.MyCom += ansMyCom;

          // ★ 各種時系列の集計処理
          const monthKey = `${y}/${String(m).padStart(2, "0")}`;
          const dateObj = new Date(y, m - 1, d);
          const dw = dateObj.getDay() === 0 ? 7 : dateObj.getDay();
          const endOfWeek = new Date(dateObj.getTime());
          endOfWeek.setDate(dateObj.getDate() + (7 - dw));
          const weekKey = `${endOfWeek.getFullYear()}/${String(endOfWeek.getMonth() + 1).padStart(2, "0")}/${String(endOfWeek.getDate()).padStart(2, "0")}`;

          // 種別集計
          if (typeStr && typeStr !== "未分類") {
            if (!typeStatsOverall.has(typeStr))
              typeStatsOverall.set(typeStr, initAgg());
            const o = typeStatsOverall.get(typeStr)!;
            o.qCount++;
            if (answers === 0) o.zeroCount++;
            o.ans += answers;
            o.cor += calculatedCorrect;

            if (!typeStatsMonthly.has(monthKey))
              typeStatsMonthly.set(monthKey, new Map());
            const mAgg = typeStatsMonthly.get(monthKey)!;
            if (!mAgg.has(typeStr)) mAgg.set(typeStr, initAgg());
            const mo = mAgg.get(typeStr)!;
            mo.qCount++;
            if (answers === 0) mo.zeroCount++;
            mo.ans += answers;
            mo.cor += calculatedCorrect;

            if (!typeStatsWeekly.has(weekKey))
              typeStatsWeekly.set(weekKey, new Map());
            const wAgg = typeStatsWeekly.get(weekKey)!;
            if (!wAgg.has(typeStr)) wAgg.set(typeStr, initAgg());
            const wo = wAgg.get(typeStr)!;
            wo.qCount++;
            if (answers === 0) wo.zeroCount++;
            wo.ans += answers;
            wo.cor += calculatedCorrect;
          }

          // ★ クイズ全体：月別集計の格納
          if (!quizMonthlyMap.has(monthKey)) {
            quizMonthlyMap.set(monthKey, {
              qCount: 0,
              zeroCount: 0,
              ans: 0,
              cor: 0,
            });
          }
          const qm = quizMonthlyMap.get(monthKey)!;
          qm.qCount++;
          if (answers === 0) qm.zeroCount++;
          qm.ans += answers;
          qm.cor += calculatedCorrect;

          // ★ クイズ全体：週別集計の格納
          if (!quizWeeklyMap.has(weekKey)) {
            const startOfWeekDate = new Date(dateObj.getTime());
            startOfWeekDate.setDate(dateObj.getDate() - (dw - 1));
            const wLabel = `${startOfWeekDate.getMonth() + 1}/${startOfWeekDate.getDate()}〜${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}`;
            quizWeeklyMap.set(weekKey, {
              qCount: 0,
              zeroCount: 0,
              ans: 0,
              cor: 0,
              label: wLabel,
            });
          }
          const qw = quizWeeklyMap.get(weekKey)!;
          qw.qCount++;
          if (answers === 0) qw.zeroCount++;
          qw.ans += answers;
          qw.cor += calculatedCorrect;

          tableDataRaw.push({
            id: row["番号"],
            question: String(row["問題"]),
            type: typeStr,
            answers: answers,
            correct: calculatedCorrect,
            accuracy: Math.round(accNum * 10) / 10,
            num: num,
            timestamp: new Date(dateStrRaw).getTime(),
            platforms: platforms,
          });

          if (num >= startOfThisMonthNum && num <= todayNum) {
            thisMonthQuestions++;
            if (answers === 0) thisMonthZeroAnswers++;
          }
          if (num >= startOfWeekNum && num <= todayNum) {
            thisWeekQuestions++;
            if (answers === 0) thisWeekZeroAnswers++;
          }
          if (num === todayNum) {
            todayQuestions++;
            if (answers === 0) todayZeroAnswers++;
          }
        });

        const totalZeroRate =
          validRows.length > 0
            ? (totalZeroAnswers / validRows.length) * 100
            : 0;
        const zeroRateDay =
          todayQuestions > 0 ? (todayZeroAnswers / todayQuestions) * 100 : 0;
        const zeroRateWeek =
          thisWeekQuestions > 0
            ? (thisWeekZeroAnswers / thisWeekQuestions) * 100
            : 0;
        const zeroRateMonth =
          thisMonthQuestions > 0
            ? (thisMonthZeroAnswers / thisMonthQuestions) * 100
            : 0;

        const dailyRecords = Array.from(dailyAgg.values()).sort(
          (a, b) => a.num - b.num,
        );

        let cumulativeAnswers = 0;
        let cumDiscord = 0,
          cumX = 0,
          cumInstagram = 0,
          cumMyCom = 0;
        const trendData: any[] = [];
        const accuracyData: any[] = [];

        const endOfPrevMonthJst = new Date(nowJst.getTime());
        endOfPrevMonthJst.setDate(0);
        const endOfPrevMonthNum =
          endOfPrevMonthJst.getFullYear() * 10000 +
          (endOfPrevMonthJst.getMonth() + 1) * 100 +
          endOfPrevMonthJst.getDate();

        const endOfPrevWeekJst = new Date(startOfWeekJst.getTime());
        endOfPrevWeekJst.setDate(startOfWeekJst.getDate() - 1);
        const endOfPrevWeekNum =
          endOfPrevWeekJst.getFullYear() * 10000 +
          (endOfPrevWeekJst.getMonth() + 1) * 100 +
          endOfPrevWeekJst.getDate();

        const endOfPrevDayJst = new Date(nowJst.getTime());
        endOfPrevDayJst.setDate(nowJst.getDate() - 1);
        const endOfPrevDayNum =
          endOfPrevDayJst.getFullYear() * 10000 +
          (endOfPrevDayJst.getMonth() + 1) * 100 +
          endOfPrevDayJst.getDate();

        let thisMonthAnswers = 0,
          thisWeekAnswers = 0,
          todayAnswers = 0;
        let endOfPrevMonthCum = 0,
          endOfPrevWeekCum = 0,
          endOfPrevDayCum = 0;

        dailyRecords.forEach((day) => {
          cumulativeAnswers += day.answers;
          cumDiscord += day.discord;
          cumX += day.x;
          cumInstagram += day.instagram;
          cumMyCom += day.MyCom;

          trendData.push({
            name: day.formattedDate,
            累計_全体: cumulativeAnswers,
            累計_Discord: cumDiscord,
            累計_X: cumX,
            累計_Instagram: cumInstagram,
            累計_マイコミュ: cumMyCom,
            日別_全体: day.answers,
            日別_Discord: day.discord,
            日別_X: day.x,
            日別_Instagram: day.instagram,
            日別_マイコミュ: day.MyCom,
          });

          accuracyData.push({
            name: day.formattedDate,
            正答率:
              day.answers > 0
                ? Math.round((day.corrects / day.answers) * 10) / 10
                : 0,
          });

          const num = day.num;
          if (num >= startOfThisMonthNum) {
            thisMonthAnswers += day.answers;
            thisMonthCorrects += day.corrects;
          }
          if (num <= endOfPrevMonthNum) endOfPrevMonthCum = cumulativeAnswers;
          if (num >= startOfWeekNum) {
            thisWeekAnswers += day.answers;
            thisWeekCorrects += day.corrects;
          }
          if (num <= endOfPrevWeekNum) endOfPrevWeekCum = cumulativeAnswers;
          if (num === todayNum) {
            todayAnswers += day.answers;
            todayCorrects += day.corrects;
          }
          if (num <= endOfPrevDayNum) endOfPrevDayCum = cumulativeAnswers;
        });

        const monthlyRate =
          endOfPrevMonthCum === 0
            ? 100
            : (cumulativeAnswers / endOfPrevMonthCum) * 100;
        const weeklyRate =
          endOfPrevWeekCum === 0
            ? 100
            : (cumulativeAnswers / endOfPrevWeekCum) * 100;
        const todayRate =
          endOfPrevDayCum === 0
            ? 100
            : (cumulativeAnswers / endOfPrevDayCum) * 100;

        // 計算元の数値をそのまま格納（フォーマットはレンダリング時に行う）
        const averageParticipants =
          validRows.length <= 0 ? 0 : totalAnswers / validRows.length;
        const todayAverageParticipants =
          todayQuestions <= 0 ? 0 : todayAnswers / todayQuestions;
        const weeklyAverageParticipants =
          thisWeekQuestions <= 0 ? 0 : thisWeekAnswers / thisWeekQuestions;
        const monthlyAverageParticipants =
          thisMonthQuestions <= 0 ? 0 : thisMonthAnswers / thisMonthQuestions;

        const averageAccuracy =
          totalAnswers <= 0 ? 0 : (totalCorrects / totalAnswers) * 100;
        const todayAverageAccuracy =
          todayAnswers <= 0 ? 0 : (todayCorrects / todayAnswers) * 100;
        const weeklyAverageAccuracy =
          thisWeekAnswers <= 0 ? 0 : (thisWeekCorrects / thisWeekAnswers) * 100;
        const monthlyAverageAccuracy =
          thisMonthAnswers <= 0
            ? 0
            : (thisMonthCorrects / thisMonthAnswers) * 100;

        // --- 種別グラフ用のデータ生成 ---
        const activeTypes = Array.from(typeCounts.keys()).filter(
          (t) => t !== "未分類",
        );

        const monthlyTypeTrend = Array.from(typeStatsMonthly.keys())
          .sort()
          .map((monthKey) => {
            const mAgg = typeStatsMonthly.get(monthKey)!;
            const res: any = { name: monthKey };
            activeTypes.forEach((type) => {
              const d = mAgg.get(type) || initAgg();
              res[`${type}_qCount`] = d.qCount;
              res[`${type}_ans`] = d.ans;
              res[`${type}_avgAns`] = d.qCount > 0 ? d.ans / d.qCount : 0;
              res[`${type}_accuracy`] =
                d.ans > 0 ? Math.round((d.cor / d.ans) * 100) : 0;
              res[`${type}_zeroRate`] =
                d.qCount > 0 ? Math.round((d.zeroCount / d.qCount) * 100) : 0;
            });
            return res;
          });

        const weeklyTypeTrend = Array.from(typeStatsWeekly.keys())
          .sort()
          .map((weekKey) => {
            const wAgg = typeStatsWeekly.get(weekKey)!;
            const shortName = weekKey.substring(5); // MM/DD
            const res: any = { name: shortName };
            activeTypes.forEach((type) => {
              const d = wAgg.get(type) || initAgg();
              res[`${type}_qCount`] = d.qCount;
              res[`${type}_ans`] = d.ans;
              res[`${type}_avgAns`] = d.qCount > 0 ? d.ans / d.qCount : 0;
              res[`${type}_accuracy`] =
                d.ans > 0 ? Math.round((d.cor / d.ans) * 100) : 0;
              res[`${type}_zeroRate`] =
                d.qCount > 0 ? Math.round((d.zeroCount / d.qCount) * 100) : 0;
            });
            return res;
          });

        // --- 全体クイズ分析グラフ・テーブル用のデータ生成 ---
        const quizMonthlyTrend = Array.from(quizMonthlyMap.entries())
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([key, v]) => ({
            name: key,
            回答数: v.ans,
            正答率: v.ans > 0 ? Math.round((v.cor / v.ans) * 100 * 100) / 100 : 0,
            "0件割合":
              v.qCount > 0
                ? Math.round((v.zeroCount / v.qCount) * 100 * 100) / 100
                : 0,
            qCount: v.qCount,
          }));

        const quizWeeklyTrend = Array.from(quizWeeklyMap.entries())
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([key, v]) => ({
            name: v.label,
            回答数: v.ans,
            正答率: v.ans > 0 ? Math.round((v.cor / v.ans) * 100 * 100) / 100 : 0,
            "0件割合":
              v.qCount > 0
                ? Math.round((v.zeroCount / v.qCount) * 100 * 100) / 100
                : 0,
            qCount: v.qCount,
          }));

        const quizMonthlyTable = [...quizMonthlyTrend].reverse();
        const quizWeeklyTable = [...quizWeeklyTrend].reverse();

        // --- 種別パフォーマンス表のデータ生成 ---
        const buildTypeTable = (aggMap: Map<string, any>) => {
          return Array.from(aggMap.entries())
            .filter(([t]) => t !== "未分類")
            .map(([type, o]) => ({
              type,
              qCount: o.qCount,
              sumAns: o.ans,
              avgAns: o.qCount > 0 ? o.ans / o.qCount : 0,
              accuracy:
                o.ans > 0 ? `${Math.round((o.cor / o.ans) * 100 * 100) / 100}%` : "0%",
              zeroRate:
                o.qCount > 0
                  ? `${Math.round((o.zeroCount / o.qCount) * 100 * 100) / 100}%`
                  : "0%",
            }))
            .sort((a, b) => b.qCount - a.qCount);
        };

        const overallTypeTable = buildTypeTable(typeStatsOverall);
        const currentMonthKey = `${currentY}/${String(currentM).padStart(2, "0")}`;
        const thisMonthTypeTable = typeStatsMonthly.has(currentMonthKey)
          ? buildTypeTable(typeStatsMonthly.get(currentMonthKey)!)
          : [];

        const thisWeekEnd = new Date(startOfWeekJst.getTime());
        thisWeekEnd.setDate(thisWeekEnd.getDate() + 6);
        const currentWeekKey = `${thisWeekEnd.getFullYear()}/${String(thisWeekEnd.getMonth() + 1).padStart(2, "0")}/${String(thisWeekEnd.getDate()).padStart(2, "0")}`;
        const thisWeekTypeTable = typeStatsWeekly.has(currentWeekKey)
          ? buildTypeTable(typeStatsWeekly.get(currentWeekKey)!)
          : [];

        const typeDistribution = Array.from(typeCounts.entries())
          .filter(([name]) => name !== "未分類")
          .sort((a, b) => b[1] - a[1])
          .map(([name, value], i) => ({
            name,
            value,
            color: TYPE_COLORS[i % TYPE_COLORS.length],
          }));

        const platformDistribution = [
          { name: "Discord", value: sumDiscord, color: "#5865F2" },
          { name: "X", value: sumX, color: "#1DA1F2" },
          { name: "Instagram", value: sumInstagram, color: "#E4405F" },
          { name: "マイコミュ", value: sumMyCom, color: "#F59E0B" },
        ]
          .filter((item) => item.value > 0)
          .sort((a, b) => b.value - a.value);

        const difficultyGroups = [
          {
            range: "0-20%",
            min: 0,
            max: 20,
            count: 0,
            totalAns: 0,
            totalAcc: 0,
          },
          {
            range: "21-40%",
            min: 21,
            max: 40,
            count: 0,
            totalAns: 0,
            totalAcc: 0,
          },
          {
            range: "41-60%",
            min: 41,
            max: 60,
            count: 0,
            totalAns: 0,
            totalAcc: 0,
          },
          {
            range: "61-80%",
            min: 61,
            max: 80,
            count: 0,
            totalAns: 0,
            totalAcc: 0,
          },
          {
            range: "81-100%",
            min: 81,
            max: 100,
            count: 0,
            totalAns: 0,
            totalAcc: 0,
          },
        ];

        tableDataRaw
          .filter((q) => q.answers > 5)
          .forEach((q) => {
            const group = difficultyGroups.find(
              (g) => q.accuracy >= g.min && q.accuracy <= g.max,
            );
            if (group) {
              group.count++;
              group.totalAns += q.answers;
              group.totalAcc += q.accuracy;
            }
          });

        const difficultyTable = difficultyGroups.map((g) => ({
          range: g.range,
          count: g.count,
          avgAnswers: g.count > 0 ? Math.round(g.totalAns / g.count) : 0,
          avgAccuracy:
            g.count > 0 ? `${Math.round(g.totalAcc / g.count)}%` : "-",
        }));

        const platformMetricsTable = [
          { platform: "Discord", ...pStats.Discord },
          { platform: "X", ...pStats.X },
          { platform: "Instagram", ...pStats.Instagram },
          { platform: "マイコミュ", ...pStats.マイコミュ },
        ].map((p) => ({
          platform: p.platform,
          sumAns: p.ans,
          qCount: p.qCount,
          zeroRate:
            p.qCount > 0
              ? `${Math.round((p.zeroCount / p.qCount) * 100 * 100) / 100}%`
              : "0%",
          avgAns: p.qCount > 0 ? p.ans / p.qCount : 0,
          accuracy: p.ans > 0 ? `${Math.round((p.cor / p.ans) * 100 * 100) / 100}%` : "0%",
        }));

        const scatterMap = new Map<string, any>();
        const zeroAnswerQuestions = tableDataRaw
          .filter((q) => q.answers === 0)
          .map((q) => ({ text: q.question, platforms: q.platforms }));
        if (zeroAnswerQuestions.length > 0) {
          scatterMap.set("0-0", {
            answers: 0,
            accuracy: 0,
            questions: zeroAnswerQuestions,
            isOrigin: true,
          });
        }
        tableDataRaw
          .filter((q) => q.answers > 0)
          .forEach((q) => {
            const key = `${q.answers}-${q.accuracy}`;
            if (!scatterMap.has(key)) {
              scatterMap.set(key, {
                answers: q.answers,
                accuracy: q.accuracy,
                questions: [{ text: q.question, platforms: q.platforms }],
                isOrigin: false,
              });
            } else {
              scatterMap
                .get(key)
                .questions.push({ text: q.question, platforms: q.platforms });
            }
          });
        const scatterData = Array.from(scatterMap.values());

        const avgAnswersOverall =
          tableDataRaw.length > 0 ? totalAnswers / tableDataRaw.length : 0;
        const attentionQuestions = tableDataRaw
          .filter(
            (q) =>
              q.answers >= avgAnswersOverall &&
              q.accuracy <= 50 &&
              q.answers > 0,
          )
          .sort((a, b) => b.answers - a.answers);

        setData({
          summary: {
            totalParticipants: totalAnswers,
            totalQuestions: validRows.length,
            averageAccuracy,
            todayAverageAccuracy,
            weeklyAverageAccuracy,
            monthlyAverageAccuracy,
            averageParticipants,
            todayAverageParticipants,
            weeklyAverageParticipants,
            monthlyAverageParticipants,
            totalZeroAnswers,
            totalZeroRate,
            monthlyParticipants: thisMonthAnswers,
            monthlyParticipantsRate: monthlyRate,
            weeklyParticipants: thisWeekAnswers,
            weeklyParticipantsRate: weeklyRate,
            todayParticipants: todayAnswers,
            todayParticipantsRate: todayRate,
            zeroRateDay,
            zeroRateWeek,
            zeroRateMonth,
            todayQuestions,
            thisWeekQuestions,
            thisMonthQuestions,
          },
          charts: {
            participantsTrend: trendData,
            accuracyTrend: accuracyData,
            platformDistribution,
            typeDistribution,
            scatterData,
            activeTypes,
            monthlyTypeTrend,
            weeklyTypeTrend,
            quizMonthlyTrend,
            quizWeeklyTrend,
          },
          tables: {
            questionRanking: tableDataRaw,
            difficultyTable,
            attentionQuestions,
            platformMetricsTable,
            overallTypeTable,
            thisMonthTypeTable,
            thisWeekTypeTable,
            quizMonthlyTable,
            quizWeeklyTable,
          },
        });
      })
      .catch((err) => console.error("CSV Fetch Error:", err));
  }, []);

  if (!data)
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <Target className="h-5 w-5" />
          <span>クイズデータを集計中...</span>
        </div>
      </div>
    );

  const { summary, charts, tables } = data;

  const sortedQuestions = [...tables.questionRanking].sort((a, b) => {
    if (sortMode === "accuracy_desc") return b.accuracy - a.accuracy;
    if (sortMode === "accuracy_asc") return a.accuracy - b.accuracy;
    if (sortMode === "answers_desc") return b.answers - a.answers;
    return b.num - a.num;
  });

  const getTrendLines = (prefix: "累計_" | "日別_") => {
    const lines = [];
    if (visibleLines["全体"])
      lines.push({ dataKey: `${prefix}全体`, name: "全体", color: "#e879f9" });
    if (visibleLines["Discord"])
      lines.push({
        dataKey: `${prefix}Discord`,
        name: "Discord",
        color: "#5865F2",
      });
    if (visibleLines["X"])
      lines.push({ dataKey: `${prefix}X`, name: "X", color: "#1DA1F2" });
    if (visibleLines["Instagram"])
      lines.push({
        dataKey: `${prefix}Instagram`,
        name: "Instagram",
        color: "#E4405F",
      });
    if (visibleLines["マイコミュ"])
      lines.push({
        dataKey: `${prefix}マイコミュ`,
        name: "マイコミュ",
        color: "#F59E0B",
      });
    return lines;
  };

  const getTypeTrendLines = () => {
    const lines: any[] = [];
    charts.activeTypes.forEach((type: string, i: number) => {
      if (visibleTypes[type]) {
        lines.push({
          dataKey: `${type}_${typeChartMetric}`,
          name: type,
          color: TYPE_COLORS[i % TYPE_COLORS.length],
        });
      }
    });
    return lines;
  };

  const metricNames: Record<string, string> = {
    qCount: "出題数",
    ans: "総回答数",
    avgAns: "平均回答数",
    accuracy: "平均正答率",
    zeroRate: "回答0件割合",
  };
  const metricUnits: Record<string, string> = {
    qCount: "問",
    ans: "件",
    avgAns: "件",
    accuracy: "%",
    zeroRate: "%",
  };

  // ★ 新設：トグルボタンの定義
  const quizMetricButtons = [
    { mode: "回答数", label: "回答数", color: "bg-primary", unit: "件" },
    { mode: "正答率", label: "平均正答率", color: "bg-success", unit: "%" },
    { mode: "0件割合", label: "回答0件割合", color: "bg-danger", unit: "%" },
  ];

  const typeTableData =
    typeTablePeriod === "overall"
      ? tables.overallTypeTable
      : typeTablePeriod === "thisMonth"
        ? tables.thisMonthTypeTable
        : tables.thisWeekTypeTable;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">宇宙クイズ分析</h2>
          <p className="text-muted-foreground mt-1">
            宇宙クイズの参加状況、正答率、プラットフォーム別の回答傾向を確認できます。
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
        >
          <a
            href="https://docs.google.com/spreadsheets/d/113XXwG9heW_Vv173SH_pp9w8cwRgWzC341jbXeaJ22w/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>元データ (スプシ)</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <KpiCard
          title="総参加者数 (累計)"
          value={summary.totalParticipants.toLocaleString()}
          unit="人"
          icon={Users}
          accentColor="primary"
        />
        <KpiCard
          title="総出題数"
          value={summary.totalQuestions.toLocaleString()}
          unit="問"
          icon={BookOpenText}
          accentColor="primary"
        />
        <KpiCard
          title="平均回答数"
          value={formatAverage(summary.averageParticipants)}
          unit="件"
          icon={Target}
          accentColor="primary"
        />
        <KpiCard
          title="平均正答率"
          value={format(summary.averageAccuracy)}
          unit="%"
          icon={Target}
          accentColor="primary"
        />
        <KpiCard
          title="累計 回答0件割合"
          value={format(summary.totalZeroRate)}
          unit="%"
          icon={HelpCircle}
          accentColor="danger"
        />
        <KpiCard
          title="累計 回答0件問題数"
          value={summary.totalZeroAnswers.toLocaleString()}
          unit="問"
          icon={AlertTriangle}
          accentColor="danger"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <KpiCard
          title="今日の参加者数"
          value={`+${summary.todayParticipants.toLocaleString()}`}
          unit="人"
          icon={Clock}
          accentColor="warning"
        />
        <KpiCard
          title="参加者数の前日比"
          value={format(summary.todayParticipantsRate)}
          unit="%"
          icon={TrendingUp}
          accentColor="success"
          trendValue={`前日比`}
          trendType="up"
        />
        <KpiCard
          title="今日の平均回答数"
          value={formatAverage(summary.todayAverageParticipants)}
          unit="件"
          icon={Target}
          accentColor="primary"
        />
        <KpiCard
          title="今日の平均正答率"
          value={format(summary.todayAverageAccuracy)}
          unit="%"
          icon={Target}
          accentColor="primary"
        />
        <KpiCard
          title="今日の回答0件割合"
          value={format(summary.zeroRateDay)}
          unit="%"
          icon={HelpCircle}
          accentColor="danger"
          description={`出題${summary.todayQuestions}件中`}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <KpiCard
          title="今週の参加者数"
          value={`+${summary.weeklyParticipants.toLocaleString()}`}
          unit="人"
          icon={CalendarDays}
          accentColor="primary"
        />
        <KpiCard
          title="参加者数の先週末比"
          value={format(summary.weeklyParticipantsRate)}
          unit="%"
          icon={TrendingUp}
          accentColor="success"
          trendValue={`先週末比`}
          trendType="up"
        />
        <KpiCard
          title="今週の平均回答数"
          value={formatAverage(summary.weeklyAverageParticipants)}
          unit="件"
          icon={Target}
          accentColor="primary"
        />
        <KpiCard
          title="今週の平均正答率"
          value={format(summary.weeklyAverageAccuracy)}
          unit="%"
          icon={Target}
          accentColor="primary"
        />
        <KpiCard
          title="今週の回答0件割合"
          value={format(summary.zeroRateWeek)}
          unit="%"
          icon={HelpCircle}
          accentColor="danger"
          description={`出題${summary.thisWeekQuestions}件中`}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
        <KpiCard
          title="今月の参加者数"
          value={`+${summary.monthlyParticipants.toLocaleString()}`}
          unit="人"
          icon={Calendar}
          accentColor="accent"
        />
        <KpiCard
          title="参加者数の先月末比"
          value={format(summary.monthlyParticipantsRate)}
          unit="%"
          icon={TrendingUp}
          accentColor="success"
          trendValue={`先月末比`}
          trendType="up"
        />
        <KpiCard
          title="今月の平均回答数"
          value={formatAverage(summary.monthlyAverageParticipants)}
          unit="件"
          icon={Target}
          accentColor="primary"
        />
        <KpiCard
          title="今月の平均正答率"
          value={format(summary.monthlyAverageAccuracy)}
          unit="%"
          icon={Target}
          accentColor="primary"
        />
        <KpiCard
          title="今月の回答0件割合"
          value={format(summary.zeroRateMonth)}
          unit="%"
          icon={HelpCircle}
          accentColor="danger"
          description={`出題${summary.thisMonthQuestions}件中`}
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <SectionCard
          title="媒体別 パフォーマンス"
          description="各媒体の出題数、回答0件の割合、平均回答数、平均正答率の比較"
          icon={Activity}
        >
          <ScrollableTable
            columns={[
              { key: "platform", label: "媒体", align: "left" },
              { key: "qCount", label: "出題数", align: "right" },
              { key: "sumAns", label: "総回答数", align: "right" },
              { key: "avgAnsStr", label: "平均回答数", align: "right" },
              { key: "accuracy", label: "正答率", align: "right" },
              { key: "zeroRate", label: "回答0件割合", align: "right" },
            ]}
            data={tables.platformMetricsTable.map((p: any) => ({
              ...p,
              avgAnsStr: formatAverage(p.avgAns),
            }))}
          />
        </SectionCard>
      </div>

      {/* 推移グラフ */}
      <div className="grid grid-cols-1 gap-6">
        <SectionCard title="宇宙クイズ 累計参加者数推移 (全体・媒体別)">
          <ChartContainer height="h-[350px]">
            {getTrendLines("累計_").length > 0 ? (
              <LineChartComponent
                data={charts.participantsTrend.slice(-90)}
                lines={getTrendLines("累計_")}
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
                表示するグラフを選択してください
              </div>
            )}
          </ChartContainer>
        </SectionCard>

        <div className="bg-secondary/20 p-4 rounded-2xl border border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-sm font-bold text-foreground">
            グラフの表示切り替え:
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "全体", color: "bg-[#e879f9]" },
              { key: "Discord", color: "bg-[#5865F2]" },
              { key: "X", color: "bg-[#1DA1F2]" },
              { key: "Instagram", color: "bg-[#E4405F]" },
              { key: "マイコミュ", color: "bg-[#F59E0B]" },
            ].map((btn) => (
              <Button
                key={btn.key}
                variant="outline"
                size="sm"
                onClick={() => toggleLine(btn.key)}
                className={cn(
                  "transition-all duration-200 border-border/50 flex items-center gap-2",
                  visibleLines[btn.key]
                    ? "bg-secondary/80 text-foreground"
                    : "bg-background text-muted-foreground opacity-50",
                )}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${btn.color}`} />
                {btn.key}
              </Button>
            ))}
          </div>
        </div>

        <SectionCard
          title="日別 回答数推移 (全体・媒体別)"
          description="日ごとの回答増減の推移"
        >
          <ChartContainer height="h-[350px]">
            {getTrendLines("日別_").length > 0 ? (
              <LinearChartComponent
                data={charts.participantsTrend.slice(-90)}
                lines={getTrendLines("日別_")}
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
                表示するグラフを選択してください
              </div>
            )}
          </ChartContainer>
        </SectionCard>
      </div>

      {/* ★ 新設：月別・週別クイズ状況推移トグルグラフ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard
          title="全体：月別クイズ推移"
          description="月単位の回答数・正答率・0件割合の推移"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {quizMetricButtons.map((btn) => (
              <Button
                key={btn.mode}
                variant="outline"
                size="sm"
                onClick={() => setMonthlyMetric(btn.mode as any)}
                className={cn(
                  "transition-all duration-200 border-border/50",
                  monthlyMetric === btn.mode
                    ? "bg-primary text-primary-foreground border-transparent"
                    : "bg-secondary/30 hover:bg-secondary/50 text-foreground",
                )}
              >
                {btn.label}
              </Button>
            ))}
          </div>
          <ChartContainer height="h-[300px]">
            <LinearChartComponent
              data={charts.quizMonthlyTrend || []}
              lines={[
                {
                  dataKey: monthlyMetric,
                  name: monthlyMetric,
                  color:
                    monthlyMetric === "回答数"
                      ? "#38BDF8"
                      : monthlyMetric === "正答率"
                        ? "#22C55E"
                        : "#EF4444",
                },
              ]}
              yAxisUnit={monthlyMetric === "回答数" ? "件" : "%"}
            />
          </ChartContainer>
        </SectionCard>

        <SectionCard
          title="全体：週別クイズ推移"
          description="週単位の回答数・正答率・0件割合の推移 (月〜日)"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {quizMetricButtons.map((btn) => (
              <Button
                key={btn.mode}
                variant="outline"
                size="sm"
                onClick={() => setWeeklyMetric(btn.mode as any)}
                className={cn(
                  "transition-all duration-200 border-border/50",
                  weeklyMetric === btn.mode
                    ? "bg-primary text-primary-foreground border-transparent"
                    : "bg-secondary/30 hover:bg-secondary/50 text-foreground",
                )}
              >
                {btn.label}
              </Button>
            ))}
          </div>
          <ChartContainer height="h-[300px]">
            <LinearChartComponent
              data={charts.quizWeeklyTrend || []}
              lines={[
                {
                  dataKey: weeklyMetric,
                  name: weeklyMetric,
                  color:
                    weeklyMetric === "回答数"
                      ? "#38BDF8"
                      : weeklyMetric === "正答率"
                        ? "#22C55E"
                        : "#EF4444",
                },
              ]}
              yAxisUnit={weeklyMetric === "回答数" ? "件" : "%"}
            />
          </ChartContainer>
        </SectionCard>
      </div>

      {/* ★ 新設：月別・週別クイズパフォーマンス一覧テーブル */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard
          title="月別クイズ状況一覧テーブル"
          description="全体パフォーマンスの月次データ"
        >
          <ScrollableTable
            columns={[
              { key: "month", label: "月", align: "left" },
              { key: "qCountStr", label: "出題数", align: "right" },
              { key: "answersStr", label: "総回答数", align: "right" },
              { key: "accuracyStr", label: "平均正答率", align: "right" },
              { key: "zeroRateStr", label: "回答0件割合", align: "right" },
            ]}
            data={(tables.quizMonthlyTable || []).map((row: any) => ({
              ...row,
              month: row.name,
              qCountStr: `${row.qCount}問`,
              answersStr: `${row.回答数.toLocaleString()}件`,
              accuracyStr: `${row.正答率}%`,
              zeroRateStr: `${row["0件割合"]}%`,
            }))}
          />
        </SectionCard>

        <SectionCard
          title="週別クイズ状況一覧テーブル"
          description="全体パフォーマンスの週次データ (月〜日)"
        >
          <ScrollableTable
            columns={[
              { key: "week", label: "週 (月〜日)", align: "left" },
              { key: "qCountStr", label: "出題数", align: "right" },
              { key: "answersStr", label: "総回答数", align: "right" },
              { key: "accuracyStr", label: "平均正答率", align: "right" },
              { key: "zeroRateStr", label: "回答0件割合", align: "right" },
            ]}
            data={(tables.quizWeeklyTable || []).map((row: any) => ({
              ...row,
              week: row.name,
              qCountStr: `${row.qCount}問`,
              answersStr: `${row.回答数.toLocaleString()}件`,
              accuracyStr: `${row.正答率}%`,
              zeroRateStr: `${row["0件割合"]}%`,
            }))}
          />
        </SectionCard>
      </div>

      {/* クイズ種別ごとの分析セクション */}
      <div className="grid grid-cols-1 gap-6">
        <SectionCard title="クイズ種別 パフォーマンス一覧" icon={BarChart2}>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-sm text-muted-foreground mr-1">
              集計期間:
            </span>
            {[
              { key: "overall", label: "累計" },
              { key: "thisMonth", label: "今月" },
              { key: "thisWeek", label: "今週" },
            ].map((btn) => (
              <Button
                key={btn.key}
                variant="outline"
                size="sm"
                onClick={() => setTypeTablePeriod(btn.key as any)}
                className={cn(
                  "transition-all duration-200",
                  typeTablePeriod === btn.key
                    ? "bg-primary text-primary-foreground border-transparent"
                    : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground",
                )}
              >
                {btn.label}
              </Button>
            ))}
          </div>

          <div className="w-full overflow-x-auto mt-2">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground bg-secondary/50 border-b border-border/50">
                <tr>
                  <th className="px-4 py-3 font-medium text-left whitespace-nowrap">
                    種別
                  </th>
                  <th className="px-4 py-3 font-medium text-right whitespace-nowrap">
                    出題数
                  </th>
                  <th className="px-4 py-3 font-medium text-right whitespace-nowrap">
                    総回答数
                  </th>
                  <th className="px-4 py-3 font-medium text-right whitespace-nowrap">
                    平均回答数
                  </th>
                  <th className="px-4 py-3 font-medium text-right whitespace-nowrap">
                    平均正答率
                  </th>
                  <th className="px-4 py-3 font-medium text-right whitespace-nowrap">
                    回答0件割合
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {typeTableData.map((d: any, i: number) => (
                  <tr
                    key={i}
                    className="hover:bg-secondary/20 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                      {d.type}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground whitespace-nowrap">
                      {d.qCount?.toLocaleString() || 0}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground whitespace-nowrap">
                      {d.sumAns?.toLocaleString() || 0}
                    </td>
                    <td className="px-4 py-3 text-right text-foreground font-medium whitespace-nowrap">
                      {formatAverage(d.avgAns)}
                    </td>
                    <td className="px-4 py-3 text-right text-foreground font-medium whitespace-nowrap">
                      {d.accuracy}
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground whitespace-nowrap">
                      {d.zeroRate}
                    </td>
                  </tr>
                ))}
                {typeTableData.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-8 text-center text-muted-foreground"
                    >
                      データがありません
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard
          title="クイズ種別 ごとの推移グラフ"
          description="月別・週別での各指標の変化を比較できます"
        >
          <div className="flex flex-col gap-3 mb-6 bg-secondary/20 p-4 rounded-2xl border border-border/50">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-foreground">期間:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTypeChartPeriod("monthly")}
                  className={
                    typeChartPeriod === "monthly"
                      ? "bg-primary text-primary-foreground border-transparent"
                      : "bg-secondary/30"
                  }
                >
                  月別
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTypeChartPeriod("weekly")}
                  className={
                    typeChartPeriod === "weekly"
                      ? "bg-primary text-primary-foreground border-transparent"
                      : "bg-secondary/30"
                  }
                >
                  週別
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-foreground ml-2">
                  指標:
                </span>
                {Object.entries(metricNames).map(([key, label]) => (
                  <Button
                    key={key}
                    variant="outline"
                    size="sm"
                    onClick={() => setTypeChartMetric(key as any)}
                    className={
                      typeChartMetric === key
                        ? "bg-primary text-primary-foreground border-transparent"
                        : "bg-secondary/30"
                    }
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
              <span className="text-sm font-bold text-foreground mt-1.5 mr-1">
                種別の表示:
              </span>
              {charts.activeTypes.map((type: string, i: number) => (
                <Button
                  key={type}
                  variant="outline"
                  size="sm"
                  onClick={() => toggleTypeLine(type)}
                  className={cn(
                    "transition-all duration-200 border-border/50 flex items-center gap-2",
                    visibleTypes[type]
                      ? "bg-secondary/80 text-foreground"
                      : "bg-background text-muted-foreground opacity-50",
                  )}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: TYPE_COLORS[i % TYPE_COLORS.length],
                    }}
                  />
                  {type}
                </Button>
              ))}
            </div>
          </div>

          <ChartContainer height="h-[400px]">
            {getTypeTrendLines().length > 0 ? (
              <LinearChartComponent
                data={
                  typeChartPeriod === "monthly"
                    ? charts.monthlyTypeTrend.slice(-12)
                    : charts.weeklyTypeTrend.slice(-12)
                }
                lines={getTypeTrendLines()}
                yAxisUnit={metricUnits[typeChartMetric]}
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
                表示する種別を選択してください
              </div>
            )}
          </ChartContainer>
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard
          title="クイズ種別 割合"
          description="検定に向けた問題カテゴリの分布"
        >
          <ChartContainer height="h-[300px]">
            {charts.typeDistribution.length > 0 ? (
              <DonutChart data={charts.typeDistribution} centerLabel="問題数" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
        <SectionCard
          title="プラットフォーム別 回答割合"
          description="各SNS・コミュニティからの回答比率"
        >
          <ChartContainer height="h-[300px]">
            {charts.platformDistribution.length > 0 ? (
              <DonutChart
                data={charts.platformDistribution}
                centerLabel="回答"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
      </div>

      <SectionCard
        title="回答人数と正答率の分布図"
        description="右に行くほど回答数が多く、上に行くほど正答率が高い問題です。点にマウスを乗せてクリックすると重なっている問題が全件表示されます。"
      >
        <ChartContainer height="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis
                type="number"
                dataKey="answers"
                name="回答数"
                stroke="#888"
                tick={{ fill: "#888" }}
                label={{
                  value: "回答数",
                  position: "insideBottomRight",
                  offset: -10,
                  fill: "#888",
                }}
              />
              <YAxis
                type="number"
                dataKey="accuracy"
                name="正答率"
                unit="%"
                stroke="#888"
                tick={{ fill: "#888" }}
                domain={[0, 100]}
                label={{
                  value: "正答率(%)",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#888",
                }}
              />
              <ZAxis type="number" range={[100, 100]} />
              <RechartsTooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<ScatterTooltip />}
                wrapperStyle={{ pointerEvents: "auto", zIndex: 100 }}
              />
              <Scatter
                name="問題"
                data={charts.scatterData}
                fill="#38BDF8"
                opacity={0.8}
                style={{ cursor: "pointer" }}
                onClick={(data) => setSelectedDot(data)}
                shape={(props: any) => {
                  const { cx, cy } = props;
                  return <circle cx={cx} cy={cy} r={6} fill="#38BDF8" />;
                }}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard
          title="難易度別 分析"
          description="正答率20%ごとの集計（※回答5件以下の問題は除外）"
        >
          <ScrollableTable
            columns={[
              { key: "range", label: "正答率の帯", align: "left" },
              { key: "count", label: "問題数", align: "right" },
              { key: "avgAnswers", label: "平均回答数", align: "right" },
              { key: "avgAccuracy", label: "平均正答率", align: "right" },
            ]}
            data={tables.difficultyTable}
          />
        </SectionCard>

        <SectionCard
          title="要注意問題リスト"
          description="回答数が平均以上で、正答率が50%以下のつまずきやすい問題"
          icon={AlertTriangle}
        >
          <ScrollableTable
            columns={[
              { key: "question", label: "問題名", align: "left" },
              { key: "platformsNode", label: "出題媒体", align: "left" },
              { key: "answers", label: "回答数", align: "right" },
              { key: "accuracyStr", label: "正答率", align: "right" },
            ]}
            data={tables.attentionQuestions.map((q: any) => ({
              ...q,
              accuracyStr: (
                <span className="text-danger font-semibold">{q.accuracy}%</span>
              ),
              platformsNode: renderPlatformBadges(q.platforms),
            }))}
          />
        </SectionCard>
      </div>

      <SectionCard
        title="問題別 回答データ一覧"
        description="各問題の回答数と正答率（ボタンで並び替え可能）"
      >
        <div className="flex flex-wrap items-center justify-end gap-2 mb-4">
          <span className="text-sm text-muted-foreground mr-1">並び順:</span>
          {[
            { mode: "date_desc", label: "新着順" },
            { mode: "answers_desc", label: "回答数順" },
            { mode: "accuracy_desc", label: "正答率 (高)" },
            { mode: "accuracy_asc", label: "正答率 (低)" },
          ].map((btn) => (
            <Button
              key={btn.mode}
              variant="outline"
              size="sm"
              onClick={() => setSortMode(btn.mode as SortMode)}
              className={cn(
                "transition-all duration-200",
                sortMode === btn.mode
                  ? "bg-primary text-primary-foreground border-transparent"
                  : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground",
              )}
            >
              {btn.mode !== "date_desc" && (
                <ArrowUpDown className="h-3 w-3 mr-1" />
              )}
              {btn.label}
            </Button>
          ))}
        </div>
        <ScrollableTable
          columns={[
            { key: "rank", label: "順位", align: "center" },
            { key: "question", label: "問題名", align: "left" },
            { key: "platformsNode", label: "出題媒体", align: "left" },
            { key: "answers", label: "回答数", align: "right" },
            { key: "correct", label: "正解数", align: "right" },
            { key: "accuracyStr", label: "正答率", align: "right" },
          ]}
          data={sortedQuestions.map((q, i) => ({
            ...q,
            rank: sortMode === "date_desc" ? "-" : i + 1,
            answers: q.answers.toLocaleString(),
            correct: q.correct.toLocaleString(),
            accuracyStr: `${q.accuracy}%`,
            platformsNode: renderPlatformBadges(q.platforms),
          }))}
        />
      </SectionCard>

      <Dialog
        open={!!selectedDot}
        onOpenChange={(open) => !open && setSelectedDot(null)}
      >
        <DialogContent className="glass-card border-border/50 max-w-md max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>重なっている問題一覧</DialogTitle>
          </DialogHeader>
          {selectedDot && (
            <div className="flex justify-between items-center mb-2 pb-3 border-b border-border/50">
              <div className="flex gap-4">
                <p className="text-[#38BDF8] text-sm font-bold">
                  回答数: {selectedDot.answers}件
                </p>
                <p className="text-[#8B5CF6] text-sm font-bold">
                  正答率: {selectedDot.accuracy}%
                </p>
              </div>
              <p className="text-muted-foreground text-sm font-bold">
                計 {selectedDot.questions.length} 問
              </p>
            </div>
          )}
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-2">
            {selectedDot?.questions.map((q: any, i: number) => (
              <div
                key={i}
                className="p-3 bg-secondary/30 rounded-lg border border-border/30 flex flex-col gap-2"
              >
                <p className="text-foreground font-medium text-sm leading-snug">
                  {q.text}
                </p>
                {renderPlatformBadges(q.platforms)}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
