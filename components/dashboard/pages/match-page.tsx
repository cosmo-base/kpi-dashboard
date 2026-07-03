"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  Users,
  TrendingUp,
  Calendar,
  CalendarDays,
  Percent,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { ScrollableTable } from "../scrollable-table";
import { LineChartComponent } from "../charts/line-chart";
import { LinearChartComponent } from "../charts/linear-chart";
import { StackedBarChart } from "../charts/stacked-bar-chart";
import { DonutChart } from "../charts/donut-chart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GrowthProjectionSection } from "../growth-projection-section";

const getJSTDate = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));

const formatDiff = (num: number) => {
  if (num > 0) return `+${num.toLocaleString()}`;
  if (num < 0) return num.toLocaleString();
  return "0";
};

const RESULT_COLORS = [
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
  "#0EA5E9",
  "#D946EF",
];

// ★ 新しい診断コンテンツを増やす場合は、この配列に追加するだけでタブが自動で増えます
interface CosmoMatchVariantConfig {
  key: string;
  label: string;
  // 「ウェブに公開」から取得したCSV出力URLをここに設定してください
  csvUrl: string;
  sheetUrl: string;
  resultColumn: string;
  resultLabel: string;
  axisColumns: string[];
  color: string;
}

const VARIANTS: CosmoMatchVariantConfig[] = [
  {
    key: "rocket",
    label: "日本のロケット編",
    csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQENBPEZ3ep1J54G09l7I-vPMaMC6wNxr55bXBsdAdj_xp6gy5ksoM27EyITCuGObi0Kzxbzu2HpLM1/pub?gid=1977317423&single=true&output=csv",
    sheetUrl: "",
    resultColumn: "判定ロケット",
    resultLabel: "判定ロケット",
    axisColumns: [
      "パワー",
      "技術",
      "歴史",
      "エース",
      "挑戦",
      "個性",
      "未来",
      "信頼",
    ],
    color: "#38BDF8",
  },
  {
    key: "constellation",
    label: "88星座編",
    csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTbfWKxGFEmOkuaszkGJNUcX4FySkqmdxKJtaXG0esrjJoHSo5zmEoOGLTmzH09YJd9BZY1DyqNc7P/pub?gid=1977317423&single=true&output=csv",
    sheetUrl: "",
    resultColumn: "判定",
    resultLabel: "判定星座",
    axisColumns: ["物語", "活動", "役割", "関係", "対象", "温度", "存在"],
    color: "#8B5CF6",
  },
];

interface VariantData {
  summary: {
    totalParticipants: number;
    monthlyIncrease: number;
    monthlyRate: number;
    weeklyIncrease: number;
    weeklyRate: number;
    todayIncrease: number;
    averageSyncRate: number;
    todayAverageSyncRate: number;
  };
  charts: {
    participantsTrend: { name: string; 累計診断数: number }[];
    resultDistribution: { name: string; value: number; color: string }[];
    axisAverages: { name: string; 平均スコア: number }[];
    monthlySyncRateTrend: { name: string; 平均同調率: number }[];
  };
  tables: {
    monthlyTable: {
      month: string;
      increase: string;
      rate: string;
      cumulative: string;
      avgSyncRate: string;
    }[];
    resultRanking: { rank: number; name: string; count: number; percentage: string }[];
  };
  growthHistory: { month: string; cumulative: number }[];
}

function parseVariantCsv(
  csvText: string,
  config: CosmoMatchVariantConfig,
): VariantData | null {
  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
  const rows = parsed.data as any[];

  const validRows = rows
    .map((row) => {
      const dateStrRaw = String(row["日時"] || "").trim();
      const parts = dateStrRaw.split(/[\/\- :]/).filter(Boolean);
      if (parts.length < 3) return null;
      const y = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10);
      const d = parseInt(parts[2], 10);
      if (!y || !m || !d) return null;
      const num = y * 10000 + m * 100 + d;
      const dateKey = `${y}/${String(m).padStart(2, "0")}/${String(d).padStart(2, "0")}`;
      const monthKey = `${y}/${String(m).padStart(2, "0")}`;

      const result = String(row[config.resultColumn] || "").trim();
      const syncRateRaw = String(row["同調率"] || "0")
        .replace("%", "")
        .trim();
      const syncRate = parseFloat(syncRateRaw) || 0;

      const axisValues: Record<string, number> = {};
      config.axisColumns.forEach((col) => {
        axisValues[col] = parseFloat(String(row[col] || "0")) || 0;
      });

      return { num, y, m, d, dateKey, monthKey, result, syncRate, axisValues };
    })
    .filter((r): r is NonNullable<typeof r> => r !== null && r.result !== "")
    .sort((a, b) => a.num - b.num);

  if (validRows.length === 0) return null;

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

  // 日別集計（累計診断数推移用）
  const dailyMap = new Map<string, { num: number; count: number; syncSum: number }>();
  validRows.forEach((r) => {
    if (!dailyMap.has(r.dateKey))
      dailyMap.set(r.dateKey, { num: r.num, count: 0, syncSum: 0 });
    const d = dailyMap.get(r.dateKey)!;
    d.count++;
    d.syncSum += r.syncRate;
  });
  const dailyRecords = Array.from(dailyMap.values()).sort((a, b) => a.num - b.num);

  let cumulative = 0;
  let endOfPrevMonthCum = 0;
  let endOfPrevWeekCum = 0;
  let monthlyIncrease = 0;
  let weeklyIncrease = 0;
  let todayIncrease = 0;
  const participantsTrend: { name: string; 累計診断数: number }[] = [];

  dailyRecords.forEach((d) => {
    cumulative += d.count;
    const dateEntry = Array.from(dailyMap.entries()).find(([, v]) => v === d)?.[0];
    participantsTrend.push({ name: dateEntry || "", 累計診断数: cumulative });
    if (d.num >= startOfThisMonthNum) monthlyIncrease += d.count;
    if (d.num <= endOfPrevMonthNum) endOfPrevMonthCum = cumulative;
    if (d.num >= startOfWeekNum) weeklyIncrease += d.count;
    if (d.num <= endOfPrevWeekNum) endOfPrevWeekCum = cumulative;
    if (d.num === todayNum) todayIncrease += d.count;
  });

  const monthlyRate =
    endOfPrevMonthCum === 0 ? 100 : Math.round((cumulative / endOfPrevMonthCum) * 100);
  const weeklyRate =
    endOfPrevWeekCum === 0 ? 100 : Math.round((cumulative / endOfPrevWeekCum) * 100);

  const totalSyncSum = validRows.reduce((sum, r) => sum + r.syncRate, 0);
  const averageSyncRate =
    validRows.length > 0 ? Math.round((totalSyncSum / validRows.length) * 10) / 10 : 0;
  const todayRows = validRows.filter((r) => r.num === todayNum);
  const todayAverageSyncRate =
    todayRows.length > 0
      ? Math.round(
          (todayRows.reduce((sum, r) => sum + r.syncRate, 0) / todayRows.length) * 10,
        ) / 10
      : 0;

  // 判定結果の分布
  const resultCounts = new Map<string, number>();
  validRows.forEach((r) => resultCounts.set(r.result, (resultCounts.get(r.result) || 0) + 1));
  const resultDistribution = Array.from(resultCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, value], i) => ({
      name,
      value,
      color: RESULT_COLORS[i % RESULT_COLORS.length],
    }));
  const resultRankingTable = Array.from(resultCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count], i) => ({
      rank: i + 1,
      name,
      count,
      percentage: `${Math.round((count / validRows.length) * 1000) / 10}%`,
    }));

  // 軸別 平均スコア
  const axisAverages = config.axisColumns.map((col) => {
    const sum = validRows.reduce((acc, r) => acc + r.axisValues[col], 0);
    return {
      name: col,
      平均スコア: Math.round((sum / validRows.length) * 100) / 100,
    };
  });

  // 月別集計
  const monthlyMap = new Map<string, { count: number; syncSum: number; cumulative: number }>();
  let runningCum = 0;
  validRows.forEach((r) => {
    runningCum++;
    if (!monthlyMap.has(r.monthKey))
      monthlyMap.set(r.monthKey, { count: 0, syncSum: 0, cumulative: 0 });
    const m = monthlyMap.get(r.monthKey)!;
    m.count++;
    m.syncSum += r.syncRate;
    m.cumulative = runningCum;
  });
  const monthlyEntries = Array.from(monthlyMap.entries()).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );
  const monthlySyncRateTrend = monthlyEntries.map(([month, v]) => ({
    name: month,
    平均同調率: Math.round((v.syncSum / v.count) * 10) / 10,
  }));
  const monthlyTableRaw = monthlyEntries.map(([month, v], idx) => {
    let rate = 100;
    if (idx > 0) {
      const prev = monthlyEntries[idx - 1][1].count;
      rate = prev <= 0 ? 100 : Math.round((v.count / prev) * 100);
    }
    return {
      month,
      increase: formatDiff(v.count),
      rate: `${rate}%`,
      cumulative: v.cumulative.toLocaleString(),
      avgSyncRate: `${Math.round((v.syncSum / v.count) * 10) / 10}%`,
    };
  });

  const growthHistory = monthlyEntries.map(([month, v]) => ({
    month,
    cumulative: v.cumulative,
  }));

  return {
    summary: {
      totalParticipants: cumulative,
      monthlyIncrease,
      monthlyRate,
      weeklyIncrease,
      weeklyRate,
      todayIncrease,
      averageSyncRate,
      todayAverageSyncRate,
    },
    charts: {
      participantsTrend,
      resultDistribution,
      axisAverages,
      monthlySyncRateTrend,
    },
    tables: {
      monthlyTable: [...monthlyTableRaw].reverse(),
      resultRanking: resultRankingTable,
    },
    growthHistory,
  };
}

function CosmoMatchVariantSection({
  config,
  data,
}: {
  config: CosmoMatchVariantConfig;
  data: VariantData | null;
}) {
  if (!config.csvUrl) {
    return (
      <div className="flex h-[300px] items-center justify-center text-muted-foreground text-sm">
        「{config.label}」のCSV公開URLが未設定です。match-page.tsx の VARIANTS
        に csvUrl を設定してください。
      </div>
    );
  }

  if (!data)
    return (
      <div className="flex h-[300px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <span>{config.label}のデータを集計中...</span>
        </div>
      </div>
    );

  const { summary, charts, tables } = data;

  return (
    <div className="space-y-6">
      {config.sheetUrl && (
        <div className="flex justify-end">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
          >
            <a href={config.sheetUrl} target="_blank" rel="noopener noreferrer">
              <span>元データ (スプシ)</span>
              <ArrowUpRight className="h-4 w-4 opacity-70" />
            </a>
          </Button>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <KpiCard
          title="累計診断数"
          value={summary.totalParticipants.toLocaleString()}
          unit="件"
          icon={Users}
          accentColor="primary"
        />
        <KpiCard
          title="今月の診断数"
          value={formatDiff(summary.monthlyIncrease)}
          unit="件"
          trendValue="先月末比"
          trendType="up"
          icon={Calendar}
          accentColor="accent"
        />
        <KpiCard
          title="1カ月比"
          value={summary.monthlyRate}
          unit="%"
          icon={TrendingUp}
          accentColor="success"
        />
        <KpiCard
          title="平均同調率"
          value={summary.averageSyncRate}
          unit="%"
          icon={Percent}
          accentColor="warning"
        />
        <KpiCard
          title="今週の診断数"
          value={formatDiff(summary.weeklyIncrease)}
          unit="件"
          trendValue="先週末比"
          trendType="up"
          icon={CalendarDays}
          accentColor="primary"
        />
        <KpiCard
          title="週間比"
          value={summary.weeklyRate}
          unit="%"
          icon={TrendingUp}
          accentColor="success"
        />
        <KpiCard
          title="今日の診断数"
          value={formatDiff(summary.todayIncrease)}
          unit="件"
          icon={Users}
          accentColor="warning"
        />
        <KpiCard
          title="今日の平均同調率"
          value={summary.todayAverageSyncRate}
          unit="%"
          icon={Percent}
          accentColor="accent"
        />
      </div>

      <SectionCard title="累計診断数の推移" description="日ごとの累計診断数">
        <ChartContainer height="h-[320px]">
          <LineChartComponent
            data={charts.participantsTrend.slice(-90)}
            lines={[{ dataKey: "累計診断数", name: "累計診断数", color: config.color }]}
          />
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard
          title={`${config.resultLabel}の分布`}
          description="判定結果ごとの件数比率"
        >
          <ChartContainer height="h-[320px]">
            {charts.resultDistribution.length > 0 ? (
              <DonutChart data={charts.resultDistribution} centerLabel="診断数" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
        <SectionCard
          title="軸別 平均スコア"
          description="全回答者の平均スコアで見る傾向"
        >
          <ChartContainer height="h-[320px]">
            <StackedBarChart
              data={charts.axisAverages}
              bars={[{ dataKey: "平均スコア", name: "平均スコア", color: config.color }]}
            />
          </ChartContainer>
        </SectionCard>
      </div>

      <SectionCard title="月別 平均同調率の推移">
        <ChartContainer height="h-[280px]">
          <LinearChartComponent
            data={charts.monthlySyncRateTrend}
            lines={[{ dataKey: "平均同調率", name: "平均同調率", color: "#F59E0B" }]}
            yAxisUnit="%"
          />
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月単位の診断数一覧">
          <ScrollableTable
            columns={[
              { key: "month", label: "月", align: "left" },
              { key: "increase", label: "診断数", align: "right" },
              { key: "rate", label: "前月比", align: "right" },
              { key: "avgSyncRate", label: "平均同調率", align: "right" },
              { key: "cumulative", label: "累計", align: "right" },
            ]}
            data={tables.monthlyTable}
          />
        </SectionCard>
        <SectionCard title={`${config.resultLabel} ランキング`}>
          <ScrollableTable
            columns={[
              { key: "rank", label: "順位", align: "center" },
              { key: "name", label: config.resultLabel, align: "left" },
              { key: "count", label: "件数", align: "right" },
              { key: "percentage", label: "割合", align: "right" },
            ]}
            data={tables.resultRanking}
          />
        </SectionCard>
      </div>

      <GrowthProjectionSection
        title={`${config.label} 診断数の成長予測`}
        description="直近の月次増加ペースから、今月末〜1年後までの想定累計診断数を算出します。"
        unit="件"
        history={data.growthHistory}
        color={config.color}
      />
    </div>
  );
}

export function MatchPage() {
  const [activeVariant, setActiveVariant] = useState(VARIANTS[0].key);
  const [dataMap, setDataMap] = useState<Record<string, VariantData | null>>({});
  const current = VARIANTS.find((v) => v.key === activeVariant) ?? VARIANTS[0];

  useEffect(() => {
    VARIANTS.forEach((config) => {
      if (!config.csvUrl) return;
      fetch(config.csvUrl)
        .then((res) => res.text())
        .then((csvText) => {
          const parsedData = parseVariantCsv(csvText, config);
          setDataMap((prev) => ({ ...prev, [config.key]: parsedData }));
        })
        .catch((err) => console.error("CSV Fetch Error:", err));
    });
  }, []);

  const loadedVariants = VARIANTS.filter((v) => dataMap[v.key]);
  const combinedTotal = loadedVariants.reduce(
    (sum, v) => sum + (dataMap[v.key]?.summary.totalParticipants || 0),
    0,
  );
  const combinedMonthly = loadedVariants.reduce(
    (sum, v) => sum + (dataMap[v.key]?.summary.monthlyIncrease || 0),
    0,
  );
  const combinedWeekly = loadedVariants.reduce(
    (sum, v) => sum + (dataMap[v.key]?.summary.weeklyIncrease || 0),
    0,
  );
  const combinedToday = loadedVariants.reduce(
    (sum, v) => sum + (dataMap[v.key]?.summary.todayIncrease || 0),
    0,
  );

  const currentData: VariantData | null = dataMap[current.key] ?? null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Cosmo Match</h2>
          <p className="text-muted-foreground mt-1">
            相性診断コンテンツ「Cosmo Match」の診断数・判定結果の傾向を編ごとに確認できます。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <KpiCard
          title="全編合計の累計診断数"
          value={combinedTotal.toLocaleString()}
          unit="件"
          icon={Users}
          accentColor="primary"
          description={loadedVariants.length < VARIANTS.length ? "一部データ未設定" : undefined}
        />
        <KpiCard
          title="今月の診断数 (全編合計)"
          value={formatDiff(combinedMonthly)}
          unit="件"
          icon={Calendar}
          accentColor="accent"
        />
        <KpiCard
          title="今週の診断数 (全編合計)"
          value={formatDiff(combinedWeekly)}
          unit="件"
          icon={CalendarDays}
          accentColor="primary"
        />
        <KpiCard
          title="今日の診断数 (全編合計)"
          value={formatDiff(combinedToday)}
          unit="件"
          icon={Users}
          accentColor="warning"
        />
      </div>

      <div className="flex flex-wrap gap-2 border-b border-border/50 pb-4">
        {VARIANTS.map((v) => (
          <Button
            key={v.key}
            variant="outline"
            size="sm"
            onClick={() => setActiveVariant(v.key)}
            className={cn(
              "transition-all duration-200",
              activeVariant === v.key
                ? "text-white border-transparent"
                : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground",
            )}
            style={activeVariant === v.key ? { backgroundColor: v.color } : undefined}
          >
            {v.label}
          </Button>
        ))}
      </div>

      <CosmoMatchVariantSection key={current.key} config={current} data={currentData} />
    </div>
  );
}
