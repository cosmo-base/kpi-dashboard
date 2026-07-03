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
            正答率:
              v.ans > 0 ? Math.round((v.cor / v.ans) * 100 * 100) / 100 : 0,
            "0件割合":
              v.qCount > 0
                ? Math.round((v.zeroCount / v.qCount) * 100 * 100) / 100
                : 0,
            qCount: v.qCount,
            aveNun:
              v.qCount > 0 ? Math.round((v.ans / v.qCount) * 100) / 100 : 0,
          }));

        const quizWeeklyTrend = Array.from(quizWeeklyMap.entries())
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([key, v]) => ({
            name: v.label,
            回答数: v.ans,
            正答率:
              v.ans > 0 ? Math.round((v.cor / v.ans) * 100 * 100) / 100 : 0,
            "0件割合":
              v.qCount > 0
                ? Math.round((v.zeroCount / v.qCount) * 100 * 100) / 100
                : 0,
            qCount: v.qCount,
            aveNun:
              v.qCount > 0 ? Math.round((v.ans / v.qCount) * 100) / 100 : 0,
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
                o.ans > 0
                  ? `${Math.round((o.cor / o.ans) * 100 * 100) / 100}%`
                  : "0%",
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
          accuracy:
            p.ans > 0
              ? `${Math.round((p.cor / p.ans) * 100 * 100) / 100}%`
              : "0%",
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
            todayPartic