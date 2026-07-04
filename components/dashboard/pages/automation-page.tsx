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
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ScrollableTable } from "../scrollable-table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQUAhEPxwv1Vw-8yN5A8MHaS0jW_7l0hkGc9e_AuXym9q-rSjbv2lrzaY2yzC_ybQONC52dBJTEp0WV/pub?gid=0&single=true&output=csv";
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1E4jZU_L3FDT-1ZGlneUTu3Wbry9zJeZipk96p5NV7l8/edit?gid=0#gid=0";

// 1:赤, 2:橙, 3:黄, 4:緑, 5:青
const LEVEL_COLORS: Record<number, string> = {
  1: "#EF4444",
  2: "#F59E0B",
  3: "#EAB308",
  4: "#22C55E",
  5: "#38BDF8",
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

function LevelBadge({ level }: { level: number | null }) {
  if (level == null) return <span className="text-muted-foreground">-</span>;
  const color = LEVEL_COLORS[level] ?? "#6B7280";
  return (
    <span
      className="inline-block w-full text-center rounded-md px-2 py-1 text-xs font-bold text-white"
      style={{ backgroundColor: color }}
    >
      Lv{level}
    </span>
  );
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

  const achievedCount = contents.filter(
    (c) => c.targetLevel != null && c.currentLevel != null && c.currentLevel >= c.targetLevel,
  ).length;
  const totalCount = contents.length;
  const achievedRate =
    totalCount > 0 ? Math.round((achievedCount / totalCount) * 1000) / 10 : 0;

  const contentTableData: Record<string, any>[] = contents.map((c) => {
    const needsImprovement =
      c.targetLevel != null && (c.currentLevel == null || c.currentLevel < c.targetLevel);
    return {
      name: needsImprovement ? (
        <span className="inline-flex items-center gap-1.5 rounded-md bg-danger/15 px-2 py-1 text-danger font-semibold">
          <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0" />
          {c.name}
        </span>
      ) : (
        <span className="text-foreground">{c.name}</span>
      ),
      current: <LevelBadge level={c.currentLevel} />,
      target: <LevelBadge level={c.targetLevel} />,
    };
  });

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

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
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
          trendValue={rates ? `-${Math.round((rates.target - rates.current) * 100) / 100}pt` : undefined}
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
        <KpiCard
          title="目標達成率"
          value={achievedRate}
          unit="%"
          icon={CheckCircle2}
          accentColor="success"
          description={`${achievedCount}/${totalCount}件`}
        />
      </div>
      <SectionCard title="コンテンツ別 現状・目標一覧" icon={ListChecks}>
        <ScrollableTable
          columns={[
            { key: "name", label: "コンテンツ名", align: "left" },
            { key: "current", label: "現状レベル", align: "center" },
            { key: "target", label: "目標レベル", align: "center" },
          ]}
          data={contentTableData}
          maxVisibleRows={contentTableData.length + 2}
        />
      </SectionCard>
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
    </div>
  );
}

function formatSigned(num: number) {
  if (num > 0) return `+${num}`;
  return `${num}`;
}
