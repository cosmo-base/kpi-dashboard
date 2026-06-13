"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Users, Clock, Calendar, TrendingUp, Target, ArrowUpDown, CalendarDays, AlertTriangle, HelpCircle, BookOpenText, ArrowUpRight, Activity,} from "lucide-react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, ZAxis,} from "recharts";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { ScrollableTable } from "../scrollable-table";
import { LineChartComponent } from "../charts/line-chart";
import { LinearChartComponent } from "../charts/linear-chart";
import { DonutChart } from "../charts/donut-chart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle,} from "@/components/ui/dialog";

const getJSTDate = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));

type SortMode = "date_desc" | "answers_desc" | "accuracy_desc" | "accuracy_asc";

// 媒体のバッジを生成する関数
const renderPlatformBadges = (platforms: string[]) => {
  if (!platforms || platforms.length === 0)
    return <span className="text-muted-foreground text-xs">-</span>;

  // ★ 4媒体すべての場合は専用の色に変更（Xの青とかぶらない紫系グラデーション風）
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

  // ★ グラフ表示のON/OFFステート
  const [visibleLines, setVisibleLines] = useState<Record<string, boolean>>({
    全体: true,
    Discord: true,
    X: true,
    Instagram: true,
    マイコミュ: true,
  });

  const toggleLine = (lineKey: string) => {
    setVisibleLines((prev) => ({
      ...prev,
      [lineKey]: !prev[lineKey],
    }));
  };

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

        let sumDiscord = 0,
          sumX = 0,
          sumInstagram = 0,
          sumMyCommu = 0;

        const pStats = {
          Discord: { qCount: 0, zeroCount: 0, ans: 0, cor: 0 },
          X: { qCount: 0, zeroCount: 0, ans: 0, cor: 0 },
          Instagram: { qCount: 0, zeroCount: 0, ans: 0, cor: 0 },
          マイコミュ: { qCount: 0, zeroCount: 0, ans: 0, cor: 0 },
        };

        const tableDataRaw: any[] = [];
        const dailyAgg = new Map<string, any>();
        const typeCounts = new Map<string, number>();

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
          if (typeStr) {
            typeCounts.set(typeStr, (typeCounts.get(typeStr) || 0) + 1);
          }

          const answers =
            parseInt(String(row["回答数"] || "0").replace(/,/g, ""), 10) || 0;
          if (answers === 0) totalZeroAnswers++;

          const rawDiscord = String(row["回答数(Discord)"] || "").trim();
          const rawX = String(row["回答数(X)"] || "").trim();
          const rawInsta = String(row["回答数(Instagram)"] || "").trim();
          const rawMyCommu = String(row["回答数(マイコミュ)"] || "").trim();

          const ansDiscord = parseInt(rawDiscord.replace(/,/g, ""), 10) || 0;
          const ansX = parseInt(rawX.replace(/,/g, ""), 10) || 0;
          const ansInsta = parseInt(rawInsta.replace(/,/g, ""), 10) || 0;
          const ansMyCommu = parseInt(rawMyCommu.replace(/,/g, ""), 10) || 0;

          const corDiscord =
            parseInt(String(row["正答数(Discord)"] || "0").replace(/,/g, ""), 10) ||
            0;
          const corX =
            parseInt(String(row["正答数(X)"] || "0").replace(/,/g, ""), 10) || 0;
          const corInsta =
            parseInt(String(row["正答数(Instagram)"] || "0").replace(/,/g, ""), 10) ||
            0;
          const corMyCommu =
            parseInt(String(row["正答数(マイコミュ)"] || "0").replace(/,/g, ""), 10) ||
            0;

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
          if (rawInsta !== "") {
            platforms.push("Instagram");
            pStats.Instagram.qCount++;
            if (ansInsta === 0) pStats.Instagram.zeroCount++;
            pStats.Instagram.ans += ansInsta;
            pStats.Instagram.cor += corInsta;
          }
          if (rawMyCommu !== "") {
            platforms.push("マイコミュ");
            pStats.マイコミュ.qCount++;
            if (ansMyCommu === 0) pStats.マイコミュ.zeroCount++;
            pStats.マイコミュ.ans += ansMyCommu;
            pStats.マイコミュ.cor += corMyCommu;
          }

          sumDiscord += ansDiscord;
          sumX += ansX;
          sumInstagram += ansInsta;
          sumMyCommu += ansMyCommu;

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

          const correctSum = corDiscord + corX + corInsta + corMyCommu;
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
              insta: 0,
              mycommu: 0,
            });
          }
          const dayData = dailyAgg.get(dateKey);
          dayData.answers += answers;
          dayData.corrects += calculatedCorrect;
          dayData.discord += ansDiscord;
          dayData.x += ansX;
          dayData.insta += ansInsta;
          dayData.mycommu += ansMyCommu;

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
        });

        const totalZeroRate =
          validRows.length > 0
            ? Math.round((totalZeroAnswers / validRows.length) * 100)
            : 0;
        const zeroRateWeek =
          thisWeekQuestions > 0
            ? Math.round((thisWeekZeroAnswers / thisWeekQuestions) * 100)
            : 0;
        const zeroRateMonth =
          thisMonthQuestions > 0
            ? Math.round((thisMonthZeroAnswers / thisMonthQuestions) * 100)
            : 0;

        const dailyRecords = Array.from(dailyAgg.values()).sort(
          (a, b) => a.num - b.num,
        );

        let cumulativeAnswers = 0;
        let cumDiscord = 0,
          cumX = 0,
          cumInsta = 0,
          cumMyCommu = 0;
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

        let thisMonthAnswers = 0,
          thisWeekAnswers = 0,
          todayAnswers = 0;
        let endOfPrevMonthCum = 0,
          endOfPrevWeekCum = 0;

        dailyRecords.forEach((day) => {
          cumulativeAnswers += day.answers;
          cumDiscord += day.discord;
          cumX += day.x;
          cumInsta += day.insta;
          cumMyCommu += day.mycommu;

          trendData.push({
            name: day.formattedDate,
            // 累計
            累計_全体: cumulativeAnswers,
            累計_Discord: cumDiscord,
            累計_X: cumX,
            累計_Instagram: cumInsta,
            累計_マイコミュ: cumMyCommu,
            // 日別
            日別_全体: day.answers,
            日別_Discord: day.discord,
            日別_X: day.x,
            日別_Instagram: day.insta,
            日別_マイコミュ: day.mycommu,
          });

          accuracyData.push({
            name: day.formattedDate,
            正答率:
              day.answers > 0
                ? Math.round((day.corrects / day.answers) * 10) / 10
                : 0,
          });

          const num = day.num;
          if (num >= startOfThisMonthNum) thisMonthAnswers += day.answers;
          if (num <= endOfPrevMonthNum) endOfPrevMonthCum = cumulativeAnswers;
          if (num >= startOfWeekNum) thisWeekAnswers += day.answers;
          if (num <= endOfPrevWeekNum) endOfPrevWeekCum = cumulativeAnswers;
          if (num === todayNum) todayAnswers += day.answers;
        });

        const monthlyRate =
          endOfPrevMonthCum === 0
            ? 100
            : Math.round((cumulativeAnswers / endOfPrevMonthCum) * 100);
        const weeklyRate =
          endOfPrevWeekCum === 0
            ? 100
            : Math.round((cumulativeAnswers / endOfPrevWeekCum) * 100);
        const averageAccuracy =
          totalAnswers <= 0
            ? 0
            : Math.round((totalCorrects / totalAnswers) * 100);

        const typeColors = [
          "#38BDF8",
          "#8B5CF6",
          "#22C55E",
          "#F59E0B",
          "#EF4444",
          "#EC4899",
          "#10B981",
          "#6B7280",
        ];
        const typeDistribution = Array.from(typeCounts.entries())
          .filter(([name]) => name !== "未分類")
          .sort((a, b) => b[1] - a[1])
          .map(([name, value], i) => ({
            name,
            value,
            color: typeColors[i % typeColors.length],
          }));

        const platformDistribution = [
          { name: "Discord", value: sumDiscord, color: "#5865F2" },
          { name: "X", value: sumX, color: "#1DA1F2" },
          { name: "Instagram", value: sumInstagram, color: "#E4405F" },
          { name: "マイコミュ", value: sumMyCommu, color: "#F59E0B" },
        ]
          .filter((item) => item.value > 0)
          .sort((a, b) => b.value - a.value);

        const difficultyGroups = [
          { range: "0-20%", min: 0, max: 20, count: 0, totalAns: 0, totalAcc: 0 },
          { range: "21-40%", min: 21, max: 40, count: 0, totalAns: 0, totalAcc: 0 },
          { range: "41-60%", min: 41, max: 60, count: 0, totalAns: 0, totalAcc: 0 },
          { range: "61-80%", min: 61, max: 80, count: 0, totalAns: 0, totalAcc: 0 },
          { range: "81-100%", min: 81, max: 100, count: 0, totalAns: 0, totalAcc: 0 },
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
          qCount: p.qCount,
          zeroRate:
            p.qCount > 0 ? `${Math.round((p.zeroCount / p.qCount) * 100)}%` : "0%",
          avgAns: p.qCount > 0 ? Math.round((p.ans / p.qCount) * 10) / 10 : 0,
          accuracy: p.ans > 0 ? `${Math.round((p.cor / p.ans) * 100)}%` : "0%",
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
              scatterMap.get(key).questions.push({
                text: q.question,
                platforms: q.platforms,
              });
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
            averageAccuracy: averageAccuracy,
            totalZeroAnswers,
            totalZeroRate,
            monthlyParticipants: thisMonthAnswers,
            monthlyParticipantsRate: monthlyRate,
            weeklyParticipants: thisWeekAnswers,
            weeklyParticipantsRate: weeklyRate,
            todayParticipants: todayAnswers,
            zeroRateWeek,
            zeroRateMonth,
            thisWeekQuestions,
            thisMonthQuestions,
          },
          charts: {
            participantsTrend: trendData,
            accuracyTrend: accuracyData,
            platformDistribution,
            typeDistribution,
            scatterData,
          },
          tables: {
            questionRanking: tableDataRaw,
            difficultyTable,
            attentionQuestions,
            platformMetricsTable,
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

  // ★ グラフの線を出し分けするための配列を生成
  const getTrendLines = (prefix: "累計_" | "日別_") => {
    const lines = [];
    if (visibleLines["全体"]) lines.push({ dataKey: `${prefix}全体`, name: "全体", color: "#e879f9" });
    if (visibleLines["Discord"]) lines.push({ dataKey: `${prefix}Discord`, name: "Discord", color: "#5865F2" });
    if (visibleLines["X"]) lines.push({ dataKey: `${prefix}X`, name: "X", color: "#1DA1F2" });
    if (visibleLines["Instagram"]) lines.push({ dataKey: `${prefix}Instagram`, name: "Insta", color: "#E4405F" });
    if (visibleLines["マイコミュ"]) lines.push({ dataKey: `${prefix}マイコミュ`, name: "マイコミュ", color: "#F59E0B" });
    return lines;
  };

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

      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-4">
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
          title="平均正答率"
          value={summary.averageAccuracy}
          unit="%"
          icon={Target}
          accentColor="primary"
        />
        <KpiCard
          title="累計 回答0件問題数"
          value={summary.totalZeroAnswers.toLocaleString()}
          unit="問"
          icon={AlertTriangle}
          accentColor="danger"
        />
        <KpiCard
          title="累計 回答0件割合"
          value={summary.totalZeroRate}
          unit="%"
          icon={HelpCircle}
          accentColor="danger"
        />
        <KpiCard
          title="今月の参加者数"
          value={`+${summary.monthlyParticipants.toLocaleString()}`}
          unit="人"
          icon={Calendar}
          accentColor="accent"
        />
        <KpiCard
          title="参加者数の先月末比"
          value={summary.monthlyParticipantsRate}
          unit="%"
          icon={TrendingUp}
          accentColor="success"
          trendValue={`先月末比`}
          trendType="up"
        />
        <KpiCard
          title="今月の回答0件割合"
          value={summary.zeroRateMonth}
          unit="%"
          icon={HelpCircle}
          accentColor="danger"
          description={`出題${summary.thisMonthQuestions}件中`}
        />
        <KpiCard
          title="今週の参加者数"
          value={`+${summary.weeklyParticipants.toLocaleString()}`}
          unit="人"
          icon={CalendarDays}
          accentColor="primary"
        />
        <KpiCard
          title="参加者数の先週末比"
          value={summary.weeklyParticipantsRate}
          unit="%"
          icon={TrendingUp}
          accentColor="success"
          trendValue={`先週末比`}
          trendType="up"
        />
        <KpiCard
          title="今週の回答0件割合"
          value={summary.zeroRateWeek}
          unit="%"
          icon={HelpCircle}
          accentColor="danger"
          description={`出題${summary.thisWeekQuestions}件中`}
        />
        <KpiCard
         title="今日の参加者数"
         value={`+${summary.todayParticipants.toLocaleString()}`}
         unit="人"
         icon={Clock}
         accentColor="warning"
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
              { key: "zeroRate", label: "回答0件割合", align: "right" },
              { key: "avgAns", label: "平均回答数", align: "right" },
              { key: "accuracy", label: "正答率", align: "right" },
            ]}
            data={tables.platformMetricsTable}
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
        {/* ★ グラフ切り替えボタン共通コントロール */}
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
                    : "bg-background text-muted-foreground opacity-50"
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
                onClick={(data) => setSelectedDot(data.payload || data)}
                shape={(props: any) => {
                  const { cx, cy, payload } = props;
                  if (payload.isOrigin)
                    return <circle cx={cx} cy={cy} r={8} fill="#38BDF8" />;
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

      {/* ★ クリック時に全件表示されるポップアップ */}
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