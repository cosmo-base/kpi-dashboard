"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  Building2,
  Clock,
  FileCheck,
  Calendar,
  TrendingUp,
  XCircle,
  Phone,
  HelpCircle, ArrowUpRight
} from "lucide-react";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { ScrollableTable } from "../scrollable-table";
import { DonutChart } from "../charts/donut-chart";
import { Button } from '@/components/ui/button';

// カテゴリ用カラーパレット
const CATEGORY_COLORS: Record<string, string> = {
  宇宙系学生団体: "#38BDF8",
  宇宙系企業: "#8B5CF6",
  非宇宙系学生団体: "#22C55E",
  非宇宙系企業: "#F59E0B",
};

export function PartnerPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // パートナー連絡リストのCSV URL
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEJHQIgKbrIVbjo1mlnEg2iN3Jl4MXit4ArDW9ISOumOEzjKvjhcckAka7zWSkPwihVlxdC0255Q0D/pub?gid=560621363&single=true&output=csv";

    fetch(csvUrl)
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
        });
        const rows = parsed.data as any[];

        if (rows.length === 0) return;

        let totalPartners = 0; // のべパートナー企業団体数 (公開)
        let pendingAnnouncement = 0; // 公式発表待ち (締結)
        let applied = 0; // 申請済み (申請)
        let pendingApplication = 0; // 申請待ち (申請待ち)
        let pendingContract = 0; // 検討中 (検討中)
        let contacted = 0; // 連絡済み (連絡済)
        let declined = 0; // 締結見送り (締結見送り)

        // --- 各段（ステージ）ごとの集計用変数 ---
        // 1段目: 公開
        let s1_space = 0,
          s1_nonSpace = 0,
          s1_student = 0,
          s1_enterprise = 0;
        const s1_catMap = new Map<string, number>();

        // 2段目: 申請待ち, 申請, 締結, 公開
        let s2_space = 0,
          s2_nonSpace = 0,
          s2_student = 0,
          s2_enterprise = 0;
        const s2_catMap = new Map<string, number>();

        // 3段目: 連絡済, 検討中, 締結見送り, 申請待ち, 申請, 締結, 公開
        let s3_space = 0,
          s3_nonSpace = 0,
          s3_student = 0,
          s3_enterprise = 0;
        const s3_catMap = new Map<string, number>();

        const monthlyMap = new Map<string, number>();

        rows.forEach((row) => {
          const status = String(row["status"] || "").trim();
          const category = String(row["category"] || "").trim();
          const releaseDate = String(row["ReleaseDate"] || "").trim();

          // --- KPIの集計 ---
          if (status === "公開") totalPartners++;
          if (status === "締結") pendingAnnouncement++;
          if (status === "申請") applied++;
          if (status === "申請待ち") pendingApplication++;
          if (status === "検討中") pendingContract++;
          if (status === "連絡済") contacted++;
          if (status === "締結見送り") declined++;

          // --- 割合グラフの集計（9個の円グラフ用） ---
          const isS1 = status === "公開";
          const isS2 = ["申請待ち", "申請", "締結", "公開"].includes(status);
          const isS3 = [
            "連絡済",
            "検討中",
            "締結見送り",
            "申請待ち",
            "申請",
            "締結",
            "公開",
          ].includes(status);

          const isNonSpace = category.includes("非宇宙系");
          const isSpace = !isNonSpace && category.includes("宇宙系");
          const isStudent = category.includes("学生団体");
          const isEnterprise = category.includes("企業");

          if (isS1 && category) {
            if (isNonSpace) s1_nonSpace++;
            else if (isSpace) s1_space++;
            if (isStudent) s1_student++;
            else if (isEnterprise) s1_enterprise++;
            s1_catMap.set(category, (s1_catMap.get(category) || 0) + 1);
          }
          if (isS2 && category) {
            if (isNonSpace) s2_nonSpace++;
            else if (isSpace) s2_space++;
            if (isStudent) s2_student++;
            else if (isEnterprise) s2_enterprise++;
            s2_catMap.set(category, (s2_catMap.get(category) || 0) + 1);
          }
          if (isS3 && category) {
            if (isNonSpace) s3_nonSpace++;
            else if (isSpace) s3_space++;
            if (isStudent) s3_student++;
            else if (isEnterprise) s3_enterprise++;
            s3_catMap.set(category, (s3_catMap.get(category) || 0) + 1);
          }

          // --- 月別締結発表数の集計（公開済みでReleaseDateがあるもの） ---
          if (status === "公開" && releaseDate) {
            const dateObj = new Date(releaseDate.replace(/\-/g, "/"));
            if (!isNaN(dateObj.getTime())) {
              const ym = `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, "0")}`;
              monthlyMap.set(ym, (monthlyMap.get(ym) || 0) + 1);
            }
          }
        });

        // --- 月別テーブルデータの作成（古い順にソート） ---
        const sortedMonths = Array.from(monthlyMap.keys()).sort();
        let cumulative = 0;
        const monthlyTableRaw = sortedMonths.map((m) => {
          const count = monthlyMap.get(m)!;
          cumulative += count;
          return { month: m, announced: count, cumulative };
        });

        const latestMonthItem = monthlyTableRaw[monthlyTableRaw.length - 1];
        const prevMonthItem = monthlyTableRaw[monthlyTableRaw.length - 2];
        const monthlyAnnounced = latestMonthItem
          ? latestMonthItem.announced
          : 0;
        const prevMonthlyAnnounced = prevMonthItem
          ? prevMonthItem.announced
          : 0;
        const monthlyAnnouncedRate =
          prevMonthlyAnnounced === 0
            ? 100
            : Math.round((monthlyAnnounced / prevMonthlyAnnounced) * 100);

        const monthlyTable = monthlyTableRaw
          .map((item, idx) => {
            let rate = 100;
            if (idx > 0) {
              const prevCumulative = monthlyTableRaw[idx - 1].cumulative;
              rate =
                prevCumulative === 0
                  ? 100
                  : Math.round((item.cumulative / prevCumulative) * 100);
            }
            return {
              month: item.month,
              announced: `+${item.announced}`,
              cumulative: item.cumulative,
              rate: `${rate}%`,
            };
          })
          .reverse();

        // --- 各段のグラフデータ生成関数 ---
        const makeChartData = (
          space: number,
          nonSpace: number,
          student: number,
          enterprise: number,
          catMap: Map<string, number>,
        ) => {
          const spaceRelated = [
            { name: "宇宙系", value: space, color: "#38BDF8" },
            { name: "非宇宙系", value: nonSpace, color: "#22C55E" },
          ].filter((d) => d.value > 0);

          const organizationType = [
            { name: "企業", value: enterprise, color: "#8B5CF6" },
            { name: "学生団体", value: student, color: "#F59E0B" },
          ].filter((d) => d.value > 0);

          const fourCategories = Array.from(catMap.entries())
            .map(([name, value]) => ({
              name,
              value,
              color: CATEGORY_COLORS[name] || "#6B7280",
            }))
            .filter((d) => d.value > 0)
            .sort((a, b) => b.value - a.value);

          return { spaceRelated, organizationType, fourCategories };
        };

        setData({
          summary: {
            totalPartners,
            pendingAnnouncement,
            applied,
            pendingApplication,
            pendingContract,
            contacted,
            declined,
            monthlyAnnounced,
            monthlyAnnouncedRate,
          },
          charts: {
            stage1: makeChartData(
              s1_space,
              s1_nonSpace,
              s1_student,
              s1_enterprise,
              s1_catMap,
            ),
            stage2: makeChartData(
              s2_space,
              s2_nonSpace,
              s2_student,
              s2_enterprise,
              s2_catMap,
            ),
            stage3: makeChartData(
              s3_space,
              s3_nonSpace,
              s3_student,
              s3_enterprise,
              s3_catMap,
            ),
          },
          tables: { monthlyTable },
        });
      })
      .catch((err) => console.error("CSV Fetch Error:", err));
  }, []);

  if (!data) {
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          <span>パートナーデータを集計中...</span>
        </div>
      </div>
    );
  }

  const { summary, charts, tables } = data;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
        <h2 className="text-2xl font-bold text-foreground">パートナー分析</h2>
        <p className="text-muted-foreground mt-1">
          パートナー企業・団体の締結状況と属性を確認できます。
        </p>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
        >
          <a
            href="https://docs.google.com/spreadsheets/d/1Nbq6rD_PfF1-KdIXqlq4wCVPA6SWITvDroO5eKe42Q4/edit"
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
          title="のべパートナー企業団体数"
          value={summary.totalPartners.toLocaleString()}
          unit="団体"
          icon={Building2}
          accentColor="primary"
        />
        <KpiCard
          title="公式発表待ち"
          value={summary.pendingAnnouncement}
          unit="団体"
          icon={Clock}
          accentColor="warning"
        />
        <KpiCard
          title="申請済み"
          value={summary.applied}
          unit="団体"
          icon={FileCheck}
          accentColor="success"
        />
        <KpiCard
          title="申請待ち"
          value={summary.pendingApplication}
          unit="団体"
          icon={HelpCircle}
          accentColor="accent"
        />
        <KpiCard
          title="検討中"
          value={summary.pendingContract}
          unit="団体"
          icon={FileCheck}
          accentColor="primary"
        />
        <KpiCard
          title="連絡済み"
          value={summary.contacted}
          unit="団体"
          icon={Phone}
          accentColor="primary"
        />
        <KpiCard
          title="締結見送り"
          value={summary.declined}
          unit="団体"
          icon={XCircle}
          accentColor="danger"
        />
        <KpiCard
          title="今月の締結発表数"
          value={`+${summary.monthlyAnnounced}`}
          unit="団体"
          icon={Calendar}
          accentColor="success"
        />
        <KpiCard
          title="締結発表の先月比"
          value={summary.monthlyAnnouncedRate}
          unit="%"
          icon={TrendingUp}
          accentColor="success"
          trendValue={`前月比`}
          trendType="up"
        />
      </div>

      {/* 1段目：締結発表済み */}
      <div className="mt-8 mb-4 border-l-4 border-primary pl-4">
        <h3 className="text-xl font-bold text-foreground">
          締結発表済みの属性 (公開)
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          すでに公開されているパートナーの属性割合です。
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SectionCard title="宇宙系・非宇宙系">
          <ChartContainer height="h-[250px]">
            {charts.stage1.spaceRelated.length > 0 ? (
              <DonutChart
                data={charts.stage1.spaceRelated}
                centerLabel="団体"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
        <SectionCard title="学生団体・企業">
          <ChartContainer height="h-[250px]">
            {charts.stage1.organizationType.length > 0 ? (
              <DonutChart
                data={charts.stage1.organizationType}
                centerLabel="団体"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
        <SectionCard title="4分類の割合">
          <ChartContainer height="h-[250px]">
            {charts.stage1.fourCategories.length > 0 ? (
              <DonutChart
                data={charts.stage1.fourCategories}
                centerLabel="団体"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
      </div>

      {/* 2段目：手続き中〜公開 */}
      <div className="mt-8 mb-4 border-l-4 border-success pl-4">
        <h3 className="text-xl font-bold text-foreground">
          手続中〜公開の属性 (申請待ち・申請・締結・公開)
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          申請以降のフェーズに進んでいる団体の属性割合です。
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SectionCard title="宇宙系・非宇宙系">
          <ChartContainer height="h-[250px]">
            {charts.stage2.spaceRelated.length > 0 ? (
              <DonutChart
                data={charts.stage2.spaceRelated}
                centerLabel="団体"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
        <SectionCard title="学生団体・企業">
          <ChartContainer height="h-[250px]">
            {charts.stage2.organizationType.length > 0 ? (
              <DonutChart
                data={charts.stage2.organizationType}
                centerLabel="団体"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
        <SectionCard title="4分類の割合">
          <ChartContainer height="h-[250px]">
            {charts.stage2.fourCategories.length > 0 ? (
              <DonutChart
                data={charts.stage2.fourCategories}
                centerLabel="団体"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
      </div>

      {/* 3段目：アプローチ済み全体 */}
      <div className="mt-8 mb-4 border-l-4 border-warning pl-4">
        <h3 className="text-xl font-bold text-foreground">
          アプローチ済み全体の属性 (連絡済〜公開・見送り含む)
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          営業等でアプローチを行ったすべての団体の属性割合です。
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SectionCard title="宇宙系・非宇宙系">
          <ChartContainer height="h-[250px]">
            {charts.stage3.spaceRelated.length > 0 ? (
              <DonutChart
                data={charts.stage3.spaceRelated}
                centerLabel="団体"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
        <SectionCard title="学生団体・企業">
          <ChartContainer height="h-[250px]">
            {charts.stage3.organizationType.length > 0 ? (
              <DonutChart
                data={charts.stage3.organizationType}
                centerLabel="団体"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
        <SectionCard title="4分類の割合">
          <ChartContainer height="h-[250px]">
            {charts.stage3.fourCategories.length > 0 ? (
              <DonutChart
                data={charts.stage3.fourCategories}
                centerLabel="団体"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
      </div>

      {/* Monthly Table */}
      <SectionCard title="月ごとのパートナー締結発表数">
        <ScrollableTable
          columns={[
            { key: "month", label: "月", align: "left" },
            { key: "announced", label: "締結発表数", align: "right" },
            { key: "cumulative", label: "累計パートナー数", align: "right" },
            { key: "rate", label: "前月比", align: "right" },
          ]}
          data={tables.monthlyTable}
        />
      </SectionCard>
    </div>
  );
}
