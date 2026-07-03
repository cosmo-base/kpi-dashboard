"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  Gauge,
  Target,
  TrendingUp,
  ListChecks,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { ScrollableTable } from "../scrollable-table";
import { StackedBarChart } from "../charts/stacked-bar-chart";
import { DonutChart } from "../charts/donut-chart";
import { Button } from "@/components/ui/button";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQUAhEPxwv1Vw-8yN5A8MHaS0jW_7l0hkGc9e_AuXym9q-rSjbv2lrzaY2yzC_ybQONC52dBJTEp0WV/pub?gid=0&single=true&output=csv";
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1E4jZU_L3FDT-1ZGlneUTu3Wbry9zJeZipk96p5NV7l8/edit?gid=0#gid=0";

const LEVEL_COLORS: Record<number, string> = {
  1: "#EF4444",
  2: "#F59E0B",
  3: "#FBBF24",
  4: "#38BDF8",
  5: "#22C55E",
};

interface LevelDef {
  level: number;
  status: string;
  timeRange: string;
  points: number;
  currentCount: number;
  targetCount: number;
}

interface ContentRow {
  name: string;
  currentLevel: number | null;
  targetLevel: number | null;
  currentPoints: number | null;
  targetPoints: number | null;
}

interface AutomationData {
  contents: ContentRow[];
  levelDefs: LevelDef[];
  totals: { current: number; target: number } | null;
  rates: { current: number; target: number } | null;
}

// シート上の「自動化率」「合計ポイント」はスプレッドシート側の数式で計算済みの値のため、
// ここでは再計算せずセルの値をそのまま読み取って表示する。
function parseAutomationCsv(csvText: string): AutomationData | null {
  const parsed = Papa.parse(csvText, { header: false, skipEmptyLines: true });
  const rows = parsed.data as string[][];

  const levelDefs: LevelDef[] = [];
  let totals: { current: number; target: number } | null = null;
  let rates: { current: number; target: number } | null = null;

  rows.forEach((row) => {
    const label = String(row[4] || "").trim();
    if (label === "合計ポイント") {
      totals = {
        current: parseFloat(String(row[7] || "0").replace(/,/g, "")) || 0,
        target: parseFloat(String(row[9] || "0").replace(/,/g, "")) || 0,
      };
      return;
    }
    if (label === "自動化率") {
      rates = {
        current: parseFloat(String(row[7] || "0").replace("%", "")) || 0,
        target: parseFloat(String(row[9] || "0").replace("%", "")) || 0,
      };
      return;
    }
    const levelNum = parseInt(label, 10);
    if (!isNaN(levelNum) && levelNum >= 1 && levelNum <= 5 && String(row[5] || "").trim()) {
      levelDefs.push({
        level: levelNum,
        status: String(row[5] || "").trim(),
        timeRange: String(row[6] || "").trim(),
        points: parseFloat(String(row[7] || "0")) || 0,
        currentCount: parseInt(String(row[8] || "0"), 10) || 0,
        targetCount: parseInt(String(row[9] || "0"), 10) || 0,
      });
    }
  });

  const levelPointsMap = new Map(levelDefs.map((l) => [l.level, l.points]));
  const parseLevelLabel = (label: string) => {
    const m = String(label || "").match(/(\d+)/);
    return m ? parseInt(m[1], 10) : null;
  };

  const contents: ContentRow[] = rows
    .filter((row) => {
      const name = String(row[0] || "").trim();
      return name && name !== "コンテンツ名";
    })
    .map((row) => {
      const name = String(row[0]).trim();
      const currentLevel = parseLevelLabel(row[1]);
      const targetLevel = parseLevelLabel(row[2]);
      return {
        name,
        currentLevel,
        targetLevel,
        currentPoints: currentLevel != null ? (levelPointsMap.get(currentLevel) ?? null) : null,
        targetPoints: targetLevel != null ? (levelPointsMap.get(targetLevel) ?? null) : null,
      };
    });

  if (contents.length === 0 || levelDefs.length === 0) return null;

  return { contents, levelDefs, totals, rates };
}

export function AutomationPage() {
  const [data, setData] = useState<AutomationData | null>(null);

  useEffect(() => {
    fetch(CSV_URL)
      .then((res) => res.text())
      .then((csvText) => setData(parseAutomationCsv(csvText)))
      .catch((err) => console.error("CSV Fetch Error:", err));
  }, []);

  if (!data)
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <Gauge className="h-5 w-5" />
          <span>自動化率データを集計中...</span>
        </div>
      </div>
    );

  const { contents, levelDefs, totals, rates } = data;

  const levelDistribution = (key: "currentCount" | "targetCount") =>
    levelDefs
      .filter((l) => l[key] > 0)
      .map((l) => ({
        name: `Lv${l.level} ${l.status}`,
        value: l[key],
        color: LEVEL_COLORS[l.level] ?? "#6B7280",
      }));

  const levelCompareChart = levelDefs.map((l) => ({
    name: `Lv${l.level} ${l.status}`,
    現状の数: l.currentCount,
    目標の数: l.targetCount,
  }));

  const contentTableData = contents.map((c) => ({
    name: c.name,
    current: c.currentLevel != null ? `Lv${c.currentLevel}` : "-",
    currentPoints: c.currentPoints ?? "-",
    target: c.targetLevel != null ? `Lv${c.targetLevel}` : "-",
    targetPoints: c.targetPoints ?? "-",
  }));

  const levelTableData = levelDefs.map((l) => ({
    level: `レベル${l.level}`,
    status: l.status,
    timeRange: l.timeRange,
    points: l.points,
    currentCount: l.currentCount,
    targetCount: l.targetCount,
  }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">自動化率</h2>
          <p className="text-muted-foreground mt-1">
            各コンテンツの運用レベル(手動〜自動化度合い)と、現状・目標の自動化率を確認できます。
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
        >
          <a href={SHEET_URL} target="_blank" rel="noopener noreferrer">
            <span>元データ (スプシ)</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <KpiCard
          title="現状の自動化率"
          value={rates ? rates.current : "-"}
          unit="%"
          icon={Gauge}
          accentColor="warning"
        />
        <KpiCard
          title="目標の自動化率"
          value={rates ? rates.target : "-"}
          unit="%"
          icon={Target}
          accentColor="success"
          trendValue={rates ? `+${Math.round((rates.target - rates.current) * 100) / 100}pt` : undefined}
          trendType="up"
        />
        <KpiCard
          title="現状の合計ポイント"
          value={totals ? totals.current : "-"}
          unit="pt"
          icon={ListChecks}
          accentColor="primary"
          description="ポイントが低いほど自動化が進んでいる"
        />
        <KpiCard
          title="目標の合計ポイント"
          value={totals ? totals.target : "-"}
          unit="pt"
          icon={TrendingUp}
          accentColor="accent"
          description={totals ? `現状比 ${formatSigned(totals.target - totals.current)}pt` : undefined}
        />
      </div>

      <SectionCard
        title="レベル定義"
        description="ポイントが低いほど自動化度が高い（作業時間が短い）状態を表します"
        icon={Sparkles}
      >
        <ScrollableTable
          columns={[
            { key: "level", label: "レベル", align: "left" },
            { key: "status", label: "状態", align: "left" },
            { key: "timeRange", label: "週あたり作業時間", align: "left" },
            { key: "points", label: "ポイント", align: "right" },
            { key: "currentCount", label: "現状の数", align: "right" },
            { key: "targetCount", label: "目標の数", align: "right" },
          ]}
          data={levelTableData}
        />
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="現状レベル分布" description="コンテンツが現在どのレベルに集中しているか">
          <ChartContainer height="h-[320px]">
            {levelDistribution("currentCount").length > 0 ? (
              <DonutChart data={levelDistribution("currentCount")} centerLabel="コンテンツ数" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
        <SectionCard title="目標レベル分布" description="コンテンツの目標レベルの分布">
          <ChartContainer height="h-[320px]">
            {levelDistribution("targetCount").length > 0 ? (
              <DonutChart data={levelDistribution("targetCount")} centerLabel="コンテンツ数" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
      </div>

      <SectionCard title="レベル別 現状 vs 目標" description="各レベルに何件のコンテンツが該当するか">
        <ChartContainer height="h-[320px]">
          <StackedBarChart
            data={levelCompareChart}
            bars={[
              { dataKey: "現状の数", name: "現状の数", color: "#38BDF8" },
              { dataKey: "目標の数", name: "目標の数", color: "#22C55E" },
            ]}
          />
        </ChartContainer>
      </SectionCard>

      <SectionCard title="コンテンツ別 現状・目標一覧" icon={ListChecks}>
        <ScrollableTable
          columns={[
            { key: "name", label: "コンテンツ名", align: "left" },
            { key: "current", label: "現状レベル", align: "center" },
            { key: "currentPoints", label: "現状ポイント", align: "right" },
            { key: "target", label: "目標レベル", align: "center" },
            { key: "targetPoints", label: "目標ポイント", align: "right" },
          ]}
          data={contentTableData}
          maxVisibleRows={12}
        />
      </SectionCard>
    </div>
  );
}

function formatSigned(num: number) {
  if (num > 0) return `+${num}`;
  return `${num}`;
}
