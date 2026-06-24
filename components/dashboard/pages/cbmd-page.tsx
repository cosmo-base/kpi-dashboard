"use client";

import { useEffect, useState, useMemo } from "react";
import Papa from "papaparse";
import { FileText, TrendingUp, Calendar, ArrowUpRight } from "lucide-react";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { RankingList } from "../ranking-list";
import { StackedBarChart } from "../charts/stacked-bar-chart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { JapanMap } from "../charts/japan-map";

const getJSTDate = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));

const REGION_MAP: Record<string, string> = {
  北海道: "北海道",
  青森: "東北",
  岩手: "東北",
  宮城: "東北",
  秋田: "東北",
  山形: "東北",
  福島: "東北",
  茨城: "関東",
  栃木: "関東",
  群生: "関東",
  群馬: "関東",
  埼玉: "関東",
  千葉: "関東",
  東京: "関東",
  神奈川: "関東",
  新潟: "中部",
  富山: "中部",
  石川: "中部",
  福井: "中部",
  山梨: "中部",
  長野: "中部",
  岐阜: "中部",
  静岡: "中部",
  愛知: "中部",
  三重: "近畿",
  滋賀: "近畿",
  Kyoto: "近畿",
  京都: "近畿",
  大阪: "近畿",
  兵庫: "近畿",
  奈良: "近畿",
  和歌山: "近畿",
  鳥取: "中国",
  島根: "中国",
  岡山: "中国",
  広島: "中国",
  山口: "中国",
  徳島: "四国",
  香川: "四国",
  愛媛: "四国",
  高知: "四国",
  福岡: "九州・沖縄",
  佐賀: "九州・沖縄",
  長崎: "九州・沖縄",
  熊本: "九州・沖縄",
  大分: "九州・沖縄",
  宮崎: "九州・沖縄",
  鹿児島: "九州・沖縄",
  沖縄: "九州・沖縄",
};

export function CBMDPage() {
  const [data, setData] = useState<any>(null);

  // ★ マップとランキングの表示切り替えステートを追加（CBMDは「未開催」などの概念がないため、ひとまず「総件数」のみをデフォルトとします。
  // 必要に応じて「今月追加分」などの切り替えを追加することも可能です）
  const [mapViewMode, setMapViewMode] = useState<"total">("total");

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDvzMbN9CNa_PXwmre1IFid8fw7rD2yG0IlBnifsjtrtDN0cy3n-nQlEFvKQbE4w06TXTHoZ4edpzj/pub?gid=0&single=true&output=csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { skipEmptyLines: true });
        const rawData = parsed.data as string[][];

        const headerRowIndex = rawData.findIndex(
          (row) => row.includes("name") && row.includes("prefecture"),
        );
        if (headerRowIndex === -1) return;

        const headers = rawData[headerRowIndex];
        const nameIdx = headers.indexOf("name");
        const prefIdx = headers.indexOf("prefecture");
        const updateIdx = headers.indexOf("updatedAt");

        const validRows = rawData
          .slice(headerRowIndex + 1)
          .filter((row) => row[nameIdx] && String(row[nameIdx]).trim() !== "");
        if (validRows.length === 0) return;

        const nowJst = getJSTDate();
        const currentY = nowJst.getFullYear();
        const currentM = nowJst.getMonth() + 1;
        const currentD = nowJst.getDate();
        const todayNum = currentY * 10000 + currentM * 100 + currentD;
        const startOfThisMonthNum = currentY * 10000 + currentM * 100 + 1;

        const endOfPrevMonthJst = new Date(nowJst.getTime());
        endOfPrevMonthJst.setDate(0);
        const endOfPrevMonthNum =
          endOfPrevMonthJst.getFullYear() * 10000 +
          (endOfPrevMonthJst.getMonth() + 1) * 100 +
          endOfPrevMonthJst.getDate();

        const dayOfWeek = nowJst.getDay() === 0 ? 7 : nowJst.getDay();
        const startOfWeekJst = new Date(nowJst.getTime());
        startOfWeekJst.setDate(nowJst.getDate() - dayOfWeek + 1);
        const startOfWeekNum =
          startOfWeekJst.getFullYear() * 10000 +
          (startOfWeekJst.getMonth() + 1) * 100 +
          startOfWeekJst.getDate();

        let thisMonthChange = 0,
          thisWeekChange = 0,
          todayChange = 0,
          endOfPrevMonthListings = 0;
        const regionCounts = new Map<string, number>();
        const prefCounts = new Map<string, number>();

        validRows.forEach((row) => {
          const updateStr = String(row[updateIdx] || "").trim();
          if (updateStr) {
            const parts = updateStr.split(/[\/\- :]/);
            if (parts.length >= 3) {
              const uNum =
                parseInt(parts[0], 10) * 10000 +
                parseInt(parts[1], 10) * 100 +
                parseInt(parts[2], 10);
              if (uNum >= startOfThisMonthNum) thisMonthChange++;
              if (uNum <= endOfPrevMonthNum) endOfPrevMonthListings++;
              if (uNum >= startOfWeekNum) thisWeekChange++;
              if (uNum === todayNum) todayChange++;
            }
          }

          const rawPref = String(row[prefIdx] || "").trim();
          let cleanPref = rawPref.replace(/(都|府|県)$/, "");
          if (cleanPref === "北海") cleanPref = "北海道";

          const region = REGION_MAP[cleanPref] || "その他";
          const displayPref = rawPref || "未設定";

          regionCounts.set(region, (regionCounts.get(region) || 0) + 1);
          prefCounts.set(displayPref, (prefCounts.get(displayPref) || 0) + 1);
        });

        const totalListings = validRows.length;
        const monthlyChangeRate =
          endOfPrevMonthListings === 0
            ? 100
            : Math.round((totalListings / endOfPrevMonthListings) * 100);

        const regionOrder = [
          "北海道",
          "東北",
          "関東",
          "中部",
          "近畿",
          "中国",
          "四国",
          "九州・沖縄",
          "その他",
        ];
        const regionChartData = Array.from(regionCounts.entries())
          .map(([name, count]) => ({ name, 掲載件数: count }))
          .sort((a, b) => {
            const idxA = regionOrder.indexOf(a.name);
            const idxB = regionOrder.indexOf(b.name);
            return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
          });

        const regionRanking = Array.from(regionCounts.entries())
          .filter(([name]) => name !== "その他")
          .sort((a, b) => b[1] - a[1])
          .map(([name, count], i) => ({
            rank: i + 1,
            name,
            count,
            percentage: Math.round((count / totalListings) * 100) || 0,
          }));

        // ★ 都道府県ランキングを「全件表示」に変更（sliceを外す）
        const prefectureRanking = Array.from(prefCounts.entries())
          .filter(([name]) => name !== "未設定")
          .sort((a, b) => b[1] - a[1])
          .map(([name, count], i) => ({
            rank: i + 1,
            name,
            count,
            percentage: Math.round((count / totalListings) * 100) || 0,
          }));

        setData({
          summary: {
            totalListings,
            thisMonthChange,
            monthlyChangeRate,
            thisWeekChange,
            todayChange,
          },
          charts: { regionData: regionChartData },
          rankings: { regionRanking, prefectureRanking },
        });
      })
      .catch((err) => console.error("CSV Fetch Error:", err));
  }, []);

  // ★ マップとランキングの表示データ
  const displayRankings = useMemo(() => {
    if (!data || !data.rankings) return { mapData: [] };

    // CBMDは「未開催」などの区別がないので、そのままランキングデータを流用
    const mapData = data.rankings.prefectureRanking.map((p: any) => ({
      name: p.name,
      value: p.count,
    }));

    return { mapData };
  }, [data, mapViewMode]);

  if (!data)
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <FileText className="h-5 w-5" />
          <span>CBMDデータを集計中...</span>
        </div>
      </div>
    );

  const { summary, charts, rankings } = data;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">CBMD分析</h2>
          <p className="text-muted-foreground mt-1">
            CBMD掲載情報（ミュージアム・施設）の地域別・都道府県別の分布を確認できます。
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
        >
          <a
            href="https://docs.google.com/spreadsheets/d/1gdD3uqzvQWZMmn0UK6LZm_TIWS53Ar8tR80E8cz-ybY/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>元データ (スプシ)</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        <KpiCard
          title="掲載件数"
          value={summary.totalListings.toLocaleString()}
          unit="件"
          icon={FileText}
          accentColor="primary"
        />
        <KpiCard
          title="今月の追加数"
          value={`+${summary.thisMonthChange}`}
          unit="件"
          icon={TrendingUp}
          accentColor="success"
        />
        <KpiCard
          title="先月末比"
          value={summary.monthlyChangeRate}
          unit="%"
          trendValue="先月末比"
          trendType="up"
          icon={TrendingUp}
          accentColor="success"
        />
        <KpiCard
          title="今週の追加数"
          value={`+${summary.thisWeekChange}`}
          unit="件"
          icon={Calendar}
          accentColor="accent"
        />
        <KpiCard
          title="今日の追加数"
          value={`+${summary.todayChange}`}
          unit="件"
          icon={TrendingUp}
          accentColor="warning"
        />
      </div>

      <SectionCard
        title="地方別掲載件数"
        description="各地方のCBMD掲載数（北から南へ並び順）"
      >
        <ChartContainer height="h-[400px]">
          {charts?.regionData?.length > 0 ? (
            <StackedBarChart
              data={charts.regionData}
              bars={[
                { dataKey: "掲載件数", name: "掲載件数", color: "#38BDF8" },
              ]}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              データがありません
            </div>
          )}
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SectionCard title="地方別掲載件数ランキング">
          {/* 高さを固定してスクロールできるようにする */}
          <div className="max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
            <RankingList items={rankings?.regionRanking || []} />
          </div>
        </SectionCard>
        <SectionCard title="都道府県別掲載件数ランキング">
          {/* 都道府県は件数が多いのでスクロールエリアに配置し、全件表示 */}
          <div className="max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
            <RankingList items={rankings?.prefectureRanking || []} />
          </div>
        </SectionCard>
        {/* ★ CBMD 日本地図 */}
        <SectionCard
          title="ミュージアム分布ヒートマップ"
          description="都道府県別のCBMD登録施設数"
        >
          <div className="h-[400px]">
            <JapanMap data={displayRankings.mapData} colorMax="#16f372" />
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
