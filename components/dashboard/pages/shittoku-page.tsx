"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  Users,
  Calendar,
  Target,
  UserPlus,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { LineChartComponent } from "../charts/line-chart";
import { StackedBarChart } from "../charts/stacked-bar-chart";
import { DonutChart } from "../charts/donut-chart";
import { Button } from "@/components/ui/button";

export function ShittokuPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLLj6DB0iMVlhvHqUbfQhAhE7JEl5cps2zkE-WG-P2Vr-YiJWhdaOqO2QCzsXR-fjKFV1P44-0n7l3/pub?gid=0&single=true&output=csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { skipEmptyLines: true });
        const rawData = parsed.data as string[][];

        // "id"という列名がある行（1行目）を探す
        const headerIdx = rawData.findIndex((row) => row[0] === "id");
        if (headerIdx === -1) return;

        // ヘッダー行とサブヘッダー行（1〜2行）を飛ばしてデータ行を取得
        const dataRows = rawData.slice(headerIdx + 2);

        const events: any[] = [];
        let totalParticipants = 0;
        let totalSatSum = 0;
        let totalSatResponses = 0;

        const formatCounts = new Map<string, number>();
        const monthlyAgg = new Map<
          string,
          { events: number; participants: number; satSum: number; satResponses: number }
        >();
        const cumulativeTrend: any[] = [];

        dataRows.forEach((row) => {
          const dateStr = String(row[1] || "").trim();
          const nameStr = String(row[2] || "").trim();
          const formatStr = String(row[4] || "未分類").trim();
          const participantsStr = String(row[21] || "").trim();

          // 開催日が空、または参加者数が空（未開催）の行は除外
          if (!dateStr || participantsStr === "") return;

          const participants = parseInt(participantsStr, 10) || 0;
          const s5 = parseInt(row[22], 10) || 0;
          const s4 = parseInt(row[23], 10) || 0;
          const s3 = parseInt(row[24], 10) || 0;
          const s2 = parseInt(row[25], 10) || 0;
          const s1 = parseInt(row[26], 10) || 0;

          const satTotalResponses = s5 + s4 + s3 + s2 + s1;
          const satSum = s5 * 5 + s4 * 4 + s3 * 3 + s2 * 2 + s1 * 1;
          const avgSat = satTotalResponses > 0 ? satSum / satTotalResponses : null;

          // 月ラベルの生成
          let monthLabel = "";
          const dateObj = new Date(dateStr);
          if (isNaN(dateObj.getTime())) {
            monthLabel = dateStr.slice(0, 7).replace("-", "年") + "月";
          } else {
            const y = dateObj.getFullYear();
            const m = dateObj.getMonth() + 1;
            monthLabel = `${y}年${m}月`;
          }

          events.push({
            date: dateStr,
            name: nameStr,
            monthLabel,
            format: formatStr,
            participants,
            satTotalResponses,
            satSum,
            avgSat,
          });

          // 全体集計
          totalParticipants += participants;
          totalSatSum += satSum;
          totalSatResponses += satTotalResponses;

          // 形式別集計
          if (formatStr) {
            formatCounts.set(formatStr, (formatCounts.get(formatStr) || 0) + 1);
          }

          // 月別集計
          if (!monthlyAgg.has(monthLabel)) {
            monthlyAgg.set(monthLabel, { events: 0, participants: 0, satSum: 0, satResponses: 0 });
          }
          const mData = monthlyAgg.get(monthLabel)!;
          mData.events += 1;
          mData.participants += participants;
          mData.satSum += satSum;
          mData.satResponses += satTotalResponses;

          // 累計推移
          cumulativeTrend.push({
            name: dateStr,
            累計参加者数: totalParticipants,
          });
        });

        // 月別チャート用データの生成
        const monthlyParticipantsData: any[] = [];
        const monthlyAvgParticipantsData: any[] = [];
        const monthlyAvgSatData: any[] = [];

        monthlyAgg.forEach((val, key) => {
          monthlyParticipantsData.push({
            name: key,
            参加者数: val.participants,
          });
          monthlyAvgParticipantsData.push({
            name: key,
            平均参加者数: Math.round((val.participants / val.events) * 10) / 10,
          });
          monthlyAvgSatData.push({
            name: key,
            平均満足度: val.satResponses > 0 ? Math.round((val.satSum / val.satResponses) * 100) / 100 : 0,
          });
        });

        // 形式別円グラフ用データ
        const typeColors = ["#38BDF8", "#8B5CF6", "#22C55E", "#F59E0B", "#EF4444", "#EC4899", "#10B981"];
        const formatDistribution = Array.from(formatCounts.entries())
          .map(([name, value], i) => ({
            name,
            value,
            color: typeColors[i % typeColors.length],
          }))
          .sort((a, b) => b.value - a.value);

        // 各種KPIの計算
        const lastEvent = events.length > 0 ? events[events.length - 1] : null;
        const lastParticipants = lastEvent ? lastEvent.participants : 0;
        const lastAvgSat = lastEvent && lastEvent.avgSat !== null ? Math.round(lastEvent.avgSat * 100) / 100 : "-";
        const lastEventDate = lastEvent ? lastEvent.date : "";

        const avgParticipants = events.length > 0 ? Math.round((totalParticipants / events.length) * 10) / 10 : 0;
        const avgSatOverall = totalSatResponses > 0 ? Math.round((totalSatSum / totalSatResponses) * 100) / 100 : "-";

        setData({
          summary: {
            totalParticipants,
            totalEvents: events.length,
            avgParticipants,
            avgSatOverall,
            lastParticipants,
            lastAvgSat,
            lastEventDate,
          },
          charts: {
            cumulativeTrend,
            monthlyParticipantsData,
            monthlyAvgParticipantsData,
            monthlyAvgSatData,
            formatDistribution,
          },
        });
      })
      .catch((err) => console.error("CSV Fetch Error:", err));
  }, []);

  if (!data)
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <span>イベントデータを集計中...</span>
        </div>
      </div>
    );

  const { summary, charts } = data;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">宇宙知っトク 分析</h2>
          <p className="text-muted-foreground mt-1">
            イベントの参加者数推移、形式別の傾向、満足度の変化を確認できます。
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
        >
          <a
            href="https://docs.google.com/spreadsheets/d/1Clqn3sHYbpthvFKzb2XAaQ8RLHwWSOYxgkvm4HxoJp0/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>元データ (スプシ)</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <KpiCard
          title="累計参加者数"
          value={summary.totalParticipants.toLocaleString()}
          unit="人"
          icon={Users}
          accentColor="primary"
        />
        <KpiCard
          title="開催数"
          value={summary.totalEvents.toLocaleString()}
          unit="回"
          icon={Calendar}
          accentColor="accent"
        />
        <KpiCard
          title="全体平均参加者数"
          value={summary.avgParticipants}
          unit="人/回"
          icon={Users}
          accentColor="success"
        />
        <KpiCard
          title="全体平均満足度"
          value={summary.avgSatOverall}
          unit=""
          icon={Target}
          accentColor="warning"
        />
        <KpiCard
          title="前回の参加者数"
          value={summary.lastParticipants}
          unit="人"
          icon={UserPlus}
          accentColor="primary"
          description={summary.lastEventDate ? `${summary.lastEventDate} 開催` : ""}
        />
        <KpiCard
          title="前回の平均満足度"
          value={summary.lastAvgSat}
          unit=""
          icon={Target}
          accentColor="warning"
          description={summary.lastEventDate ? `${summary.lastEventDate} 開催` : ""}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="累計参加者数の推移" description="各イベント開催ごとの参加者合計の推移">
          <ChartContainer height="h-[350px]">
            <LineChartComponent
              data={charts.cumulativeTrend}
              lines={[
                { dataKey: "累計参加者数", name: "累計参加者数", color: "#38BDF8" },
              ]}
            />
          </ChartContainer>
        </SectionCard>
        <SectionCard title="月別 参加者数" description="月間の合計参加人数">
          <ChartContainer height="h-[350px]">
            <StackedBarChart
              data={charts.monthlyParticipantsData}
              bars={[{ dataKey: "参加者数", name: "参加者数", color: "#8B5CF6" }]}
            />
          </ChartContainer>
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SectionCard title="月別 平均参加者数の推移" description="1イベントあたりの平均人数">
          <ChartContainer height="h-[300px]">
            <LineChartComponent
              data={charts.monthlyAvgParticipantsData}
              lines={[
                { dataKey: "平均参加者数", name: "平均参加者数", color: "#22C55E" },
              ]}
            />
          </ChartContainer>
        </SectionCard>
        <SectionCard title="月別 平均満足度の推移" description="月間の平均満足度 (5段階)">
          <ChartContainer height="h-[300px]">
            <LineChartComponent
              data={charts.monthlyAvgSatData}
              lines={[
                { dataKey: "平均満足度", name: "平均満足度", color: "#F59E0B" },
              ]}
            />
          </ChartContainer>
        </SectionCard>
        <SectionCard
          title="イベント形式別 割合"
          description="開催されたイベントの形式の分布"
        >
          <ChartContainer height="h-[300px]">
            {charts.formatDistribution.length > 0 ? (
              <DonutChart data={charts.formatDistribution} centerLabel="開催数" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
      </div>
    </div>
  );
}