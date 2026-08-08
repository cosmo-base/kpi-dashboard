"use client";

import { TrendingUp, Sparkles, CalendarClock, AlertTriangle } from "lucide-react";
import { KpiCard } from "./kpi-card";
import { SectionCard } from "./section-card";
import { ChartContainer } from "./chart-container";
import { ScrollableTable } from "./scrollable-table";
import { LineChartComponent } from "./charts/line-chart";
import { computeRegressionProjection } from "@/data/regression-growth-projection";

const formatDiff = (num: number) => {
  if (num > 0) return `+${num.toLocaleString()}`;
  if (num < 0) return num.toLocaleString();
  return "0";
};

interface RegressionProjectionSectionProps {
  title: string;
  description?: string;
  unit?: string;
  /** 日次の累計値を古い順に並べたもの（欠損日なし、最後が現在日） */
  dailyCumulative: number[];
  /** dailyCumulative と同じ長さの日付ラベル（グラフのx軸用） */
  dailyLabels: string[];
  color?: string;
}

export function RegressionProjectionSection({
  title,
  description = "日次の累計推移をもとに、過去の伸び率が将来どれだけ実現したかを回帰分析で学習し、今月末〜1年後までの想定件数を算出します。上の予測（月次平均成長率ベース）とは別ロジックによる参考値です。",
  unit = "件",
  dailyCumulative,
  dailyLabels,
  color = "#8B5CF6",
}: RegressionProjectionSectionProps) {
  const result = computeRegressionProjection(dailyCumulative, { monthsAhead: 12 });

  if (!result) {
    return (
      <SectionCard title={title} description={description}>
        <div className="flex h-[200px] items-center justify-center text-muted-foreground text-sm">
          予測に十分なデータがまだありません（日次データがもう少し必要です）
        </div>
      </SectionCard>
    );
  }

  const { currentTotal, projections, hRange, sampleCount } = result;
  const thisMonth = projections[0];
  const nextMonth = projections[1];
  const oneYear = projections[projections.length - 1];

  const periodMonthsAhead = [0, 1, 3, 6, 12];
  const tableData = projections
    .filter((p) => periodMonthsAhead.includes(p.monthsAhead))
    .map((p) => ({
      label: p.label,
      value: p.value.toLocaleString(),
      diff: formatDiff(p.diffFromNow),
      note: p.h > hRange.max ? "学習範囲外の外挿（参考値）" : "",
    }));

  const dailyChartData: Array<{ name: string; 実績?: number; 予測?: number }> =
    dailyLabels.map((name, i) => ({ name, 実績: dailyCumulative[i] }));
  if (dailyChartData.length > 0) {
    dailyChartData[dailyChartData.length - 1].予測 = currentTotal;
  }
  const chartData = [
    ...dailyChartData,
    ...projections.slice(1).map((p) => ({ name: p.shortLabel, 予測: p.value })),
  ];

  return (
    <SectionCard title={title} description={description} icon={Sparkles}>
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <KpiCard
            title="現在の累計"
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
            description={`学習ホライズン: ${hRange.min}〜${hRange.max}日（サンプル${sampleCount}件）`}
          />
        </div>

        <div className="flex items-start gap-2 text-xs text-muted-foreground bg-secondary/20 border border-border/50 rounded-lg px-3 py-2">
          <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5 text-warning" />
          <span>
            1年後の予測は学習範囲（{hRange.max}日先まで）を超えた外挿のため、他の期間より不確実性が高い参考値です。
          </span>
        </div>

        <ChartContainer height="h-[320px]">
          <LineChartComponent
            data={chartData}
            lines={[
              { dataKey: "実績", name: "実績", color },
              { dataKey: "予測", name: "予測", color: "#F59E0B", dashed: true },
            ]}
          />
        </ChartContainer>

        <ScrollableTable
          columns={[
            { key: "label", label: "時期", align: "left" },
            { key: "value", label: "想定件数", align: "right" },
            { key: "diff", label: "現在からの増減", align: "right" },
            { key: "note", label: "備考", align: "left" },
          ]}
          data={tableData}
        />
      </div>
    </SectionCard>
  );
}
