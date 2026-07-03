"use client";

import { useMemo, useState } from "react";
import { TrendingUp, Sparkles, CalendarClock } from "lucide-react";
import { KpiCard } from "./kpi-card";
import { SectionCard } from "./section-card";
import { ChartContainer } from "./chart-container";
import { ScrollableTable } from "./scrollable-table";
import { LineChartComponent } from "./charts/line-chart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MonthlyCumulative } from "@/data/growth-projection";
import { computeGrowthProjection } from "@/data/growth-projection";

const formatDiff = (num: number) => {
  if (num > 0) return `+${num.toLocaleString()}`;
  if (num < 0) return num.toLocaleString();
  return "0";
};

export interface GrowthProjectionSeries {
  key: string;
  label: string;
  color: string;
  history: MonthlyCumulative[];
}

interface GrowthProjectionSectionProps {
  title: string;
  description?: string;
  unit?: string;
  /** 単一系列の場合。series を指定した場合は無視される。 */
  history?: MonthlyCumulative[];
  color?: string;
  /** 複数系列を重ねて表示し、切り替えボタンで絞り込めるようにする場合に指定 */
  series?: GrowthProjectionSeries[];
  /** KPI・テーブルの基準にする系列のkey。省略時は "total" もしくは先頭の系列。 */
  primarySeriesKey?: string;
}

export function GrowthProjectionSection({
  title,
  description = "直近の月次成長率をもとにした想定人数です。実際の増加ペースが変われば数値も変わります。",
  unit = "人",
  history,
  color = "#38BDF8",
  series,
  primarySeriesKey,
}: GrowthProjectionSectionProps) {
  const [filterKey, setFilterKey] = useState<string>("all");
  const primarySeries = series
    ? (series.find((s) => s.key === (primarySeriesKey ?? "total")) ?? series[0])
    : null;
  const primaryHistory = primarySeries
    ? primarySeries.history
    : (history ?? []);
  const primaryColor = primarySeries ? primarySeries.color : color;

  const result = computeGrowthProjection(primaryHistory, { monthsAhead: 12 });

  const seriesResults = useMemo(() => {
    if (!series) return [];
    return series.map((s) => ({
      ...s,
      result: computeGrowthProjection(s.history, { monthsAhead: 12 }),
    }));
  }, [series]);

  const visibleSeries =
    filterKey === "all"
      ? seriesResults
      : seriesResults.filter((s) => s.key === filterKey);

  const combinedChartData = useMemo(() => {
    const nameOrder: string[] = [];
    const nameMap = new Map<string, { name: string; [key: string]: number | string }>();
    visibleSeries.forEach((s) => {
      s.result?.chartData.forEach((point) => {
        if (!nameMap.has(point.name)) {
          nameMap.set(point.name, { name: point.name });
          nameOrder.push(point.name);
        }
        const rec = nameMap.get(point.name)!;
        if (point.実績 !== undefined) rec[`${s.label}_実績`] = point.実績;
        if (point.予測 !== undefined) rec[`${s.label}_予測`] = point.予測;
      });
    });
    return nameOrder.map((name) => nameMap.get(name)!);
  }, [visibleSeries]);

  if (!result) {
    return (
      <SectionCard title={title} description={description}>
        <div className="flex h-[200px] items-center justify-center text-muted-foreground text-sm">
          予測に十分なデータがまだありません（2ヶ月分以上のデータが必要です）
        </div>
      </SectionCard>
    );
  }

  const { monthlyRatePercent, basedOnMonths, currentTotal, projections } =
    result;
  const thisMonth = projections[0];
  const nextMonth = projections[1];
  const oneYear = projections[12];

  const tableData = projections
    .filter((p) => [0, 1, 3, 6, 12].includes(p.monthsAhead))
    .map((p) => ({
      label: p.label,
      value: p.value.toLocaleString(),
      diff: formatDiff(p.diffFromNow),
    }));
  const chartData = series ? combinedChartData : result.chartData;
  const chartLines = series
    ? visibleSeries.flatMap((s) => [
        { dataKey: `${s.label}_実績`, name: s.label, color: s.color },
        {
          dataKey: `${s.label}_予測`,
          name: `${s.label} (予測)`,
          color: s.color,
          dashed: true,
        },
      ])
    : [
        { dataKey: "実績", name: "実績", color: primaryColor },
        { dataKey: "予測", name: "予測", color: "#F59E0B", dashed: true },
      ];

  return (
    <SectionCard title={title} description={description} icon={Sparkles}>
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <KpiCard
            title="現在の人数"
            value={currentTotal.toLocaleString()}
            unit={unit}
            icon={TrendingUp}
            accentColor="primary"
          />
          <KpiCard
            title="今月末 想定"
            value={thisMonth.value.toLocaleString()}
            unit={unit}
            trendValue={formatDiff(thisMonth.diffFromNow)}
            trendType={thisMonth.diffFromNow >= 0 ? "up" : "down"}
            icon={CalendarClock}
            accentColor="accent"
          />
          <KpiCard
            title="来月末 想定"
            value={nextMonth.value.toLocaleString()}
            unit={unit}
            trendValue={formatDiff(nextMonth.diffFromNow)}
            trendType={nextMonth.diffFromNow >= 0 ? "up" : "down"}
            icon={CalendarClock}
            accentColor="success"
          />
          <KpiCard
            title="1年後 想定"
            value={oneYear.value.toLocaleString()}
            unit={unit}
            trendValue={formatDiff(oneYear.diffFromNow)}
            trendType={oneYear.diffFromNow >= 0 ? "up" : "down"}
            icon={Sparkles}
            accentColor="warning"
            description={`月次成長率 約${monthlyRatePercent >= 0 ? "+" : ""}${monthlyRatePercent}%（直近${basedOnMonths}ヶ月平均）`}
          />
        </div>

        {series && (
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFilterKey("all")}
              className={cn(
                "transition-all duration-200",
                filterKey === "all"
                  ? "bg-primary text-primary-foreground border-transparent"
                  : "bg-secondary/30 hover:bg-secondary/50 border-border/50",
              )}
            >
              全体を重ねて表示
            </Button>
            {series.map((s) => (
              <Button
                key={s.key}
                variant="outline"
                size="sm"
                onClick={() => setFilterKey(s.key)}
                className={cn(
                  "transition-all duration-200",
                  filterKey === s.key
                    ? "text-white border-transparent"
                    : "bg-secondary/30 hover:bg-secondary/50 border-border/50",
                )}
                style={filterKey === s.key ? { backgroundColor: s.color } : undefined}
              >
                {s.label}のみ
              </Button>
            ))}
          </div>
        )}
        <ChartContainer height="h-[320px]">
          <LineChartComponent data={chartData} lines={chartLines} />
        </ChartContainer>

        <ScrollableTable
          columns={[
            { key: "label", label: "時期", align: "left" },
            { key: "value", label: `想定人数${primarySeries ? `（${primarySeries.label}）` : ""}`, align: "right" },
            { key: "diff", label: "現在からの増減", align: "right" },
          ]}
          data={tableData}
        />
      </div>
    </SectionCard>
  );
}
