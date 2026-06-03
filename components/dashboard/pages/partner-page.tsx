'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Building2, Clock, FileCheck, Calendar, TrendingUp, XCircle, Phone, HelpCircle } from 'lucide-react';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { ScrollableTable } from '../scrollable-table';
import { DonutChart } from '../charts/donut-chart';

// カテゴリ用カラーパレット
const CATEGORY_COLORS: Record<string, string> = {
  '宇宙系学生団体': '#38BDF8',
  '宇宙系企業': '#8B5CF6',
  '非宇宙系学生団体': '#22C55E',
  '非宇宙系企業': '#F59E0B',
};

export function PartnerPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // パートナー連絡リストのCSV URL
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQEJHQIgKbrIVbjo1mlnEg2iN3Jl4MXit4ArDW9ISOumOEzjKvjhcckAka7zWSkPwihVlxdC0255Q0D/pub?gid=560621363&single=true&output=csv';

    fetch(csvUrl)
      .then(response => response.text())
      .then(csvText => {
        const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
        const rows = parsed.data as any[];

        if (rows.length === 0) return;

        let totalPartners = 0;      // のべパートナー企業団体数 (公開)
        let pendingAnnouncement = 0; // 公式発表待ち (締結)
        let applied = 0;             // 申請済み (申請)
        let pendingApplication = 0;  // 申請待ち (申請待ち)
        let pendingContract = 0;     // 検討中 (検討中)
        let contacted = 0;           // 連絡済み (連絡済)
        let declined = 0;            // 締結見送り (締結見送り)

        let spaceCount = 0;
        let nonSpaceCount = 0;
        let studentCount = 0;
        let enterpriseCount = 0;

        const categoryMap = new Map<string, number>();
        const monthlyMap = new Map<string, number>();

        rows.forEach(row => {
          const status = String(row['status'] || '').trim();
          const category = String(row['category'] || '').trim();
          const releaseDate = String(row['ReleaseDate'] || '').trim();

          // --- KPIの集計 ---
          if (status === '公開') totalPartners++;
          if (status === '締結') pendingAnnouncement++;
          if (status === '申請') applied++;
          if (status === '申請待ち') pendingApplication++;
          if (status === '検討中') pendingContract++;
          if (status === '連絡済') contacted++;
          if (status === '締結見送り') declined++;

          // --- 割合グラフの集計（のべパートナー＝「公開」のみを対象にする） ---
          if (status === '公開') {
            if (category.includes('非宇宙系')) nonSpaceCount++;
            else if (category.includes('宇宙系')) spaceCount++;

            if (category.includes('学生団体')) studentCount++;
            else if (category.includes('企業')) enterpriseCount++;

            if (category) {
              categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
            }
          }

          // --- 月別締結発表数の集計（公開済みでReleaseDateがあるもの） ---
          if (status === '公開' && releaseDate) {
            const dateObj = new Date(releaseDate.replace(/\-/g, '/'));
            if (!isNaN(dateObj.getTime())) {
              const ym = `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
              monthlyMap.set(ym, (monthlyMap.get(ym) || 0) + 1);
            }
          }
        });

        // --- 月別テーブルデータの作成（古い順にソート） ---
        const sortedMonths = Array.from(monthlyMap.keys()).sort();
        let cumulative = 0;
        const monthlyTableRaw = sortedMonths.map(m => {
          const count = monthlyMap.get(m)!;
          cumulative += count;
          return { month: m, announced: count, cumulative };
        });

        // KPIカード用の計算 (今月の発表数 / 先月の発表数)
        const latestMonthItem = monthlyTableRaw[monthlyTableRaw.length - 1];
        const prevMonthItem = monthlyTableRaw[monthlyTableRaw.length - 2];

        const monthlyAnnounced = latestMonthItem ? latestMonthItem.announced : 0;
        const prevMonthlyAnnounced = prevMonthItem ? prevMonthItem.announced : 0;
        const monthlyAnnouncedRate = prevMonthlyAnnounced === 0 ? 100 : Math.round((monthlyAnnounced / prevMonthlyAnnounced) * 100);

        // ★修正: テーブル用の「前月比」を「累計パートナー数(cumulative)」の比率で計算
        const monthlyTable = monthlyTableRaw.map((item, idx) => {
          let rate = 100;
          if (idx > 0) {
            const prevCumulative = monthlyTableRaw[idx - 1].cumulative;
            rate = prevCumulative === 0 ? 100 : Math.round((item.cumulative / prevCumulative) * 100);
          }
          return {
            month: item.month,
            announced: `+${item.announced}`,
            cumulative: item.cumulative,
            rate: `${rate}%`
          };
        }).reverse(); // 新着順に反転

        // --- グラフデータの作成 ---
        const spaceRelated = [
          { name: '宇宙系', value: spaceCount, color: '#38BDF8' },
          { name: '非宇宙系', value: nonSpaceCount, color: '#22C55E' },
        ].filter(d => d.value > 0);

        const organizationType = [
          { name: '企業', value: enterpriseCount, color: '#8B5CF6' },
          { name: '学生団体', value: studentCount, color: '#F59E0B' },
        ].filter(d => d.value > 0);

        const fourCategories = Array.from(categoryMap.entries()).map(([name, value]) => ({
          name, 
          value, 
          color: CATEGORY_COLORS[name] || '#6B7280'
        }));

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
            monthlyAnnouncedRate
          },
          charts: {
            spaceRelated,
            organizationType,
            fourCategories
          },
          tables: {
            monthlyTable
          }
        });

      })
      .catch(err => console.error('CSV Fetch Error:', err));
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
      <style dangerouslySetInnerHTML={{ __html: `
        .recharts-default-tooltip {
          background-color: rgba(15, 23, 42, 0.95) !important;
          border: 1px solid rgba(255,255,255,0.1) !important;
        }
        .recharts-tooltip-item-name, .recharts-tooltip-item-value, .recharts-tooltip-item {
          color: #ffffff !important;
        }
      `}} />

      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">パートナー分析</h2>
        <p className="text-muted-foreground mt-1">
          パートナー企業・団体の締結状況と属性を確認できます。
        </p>
      </div>

      {/* KPI Cards - First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
      </div>

      {/* KPI Cards - Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Distribution Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="宇宙系・非宇宙系の割合 (のべパートナー)">
          <ChartContainer height="h-[300px]">
            {charts.spaceRelated.length > 0 ? (
              <DonutChart data={charts.spaceRelated} centerLabel="パートナー" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>
            )}
          </ChartContainer>
        </SectionCard>

        <SectionCard title="学生団体・企業の割合 (のべパートナー)">
          <ChartContainer height="h-[300px]">
            {charts.organizationType.length > 0 ? (
              <DonutChart data={charts.organizationType} centerLabel="パートナー" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>
            )}
          </ChartContainer>
        </SectionCard>
      </div>

      {/* 4 Classification Donut Chart */}
      <SectionCard title="4分類の割合 (のべパートナー)">
        <ChartContainer height="h-[350px]">
          {charts.fourCategories.length > 0 ? (
            <DonutChart 
              data={charts.fourCategories} 
              centerLabel="パートナー" 
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>
          )}
        </ChartContainer>
      </SectionCard>

      {/* Monthly Table */}
      <SectionCard title="月ごとのパートナー締結発表数">
        <ScrollableTable
          columns={[
            { key: 'month', label: '月', align: 'left' },
            { key: 'announced', label: '締結発表数', align: 'right' },
            { key: 'cumulative', label: '累計パートナー数', align: 'right' },
            { key: 'rate', label: '前月比', align: 'right' },
          ]}
          data={tables.monthlyTable}
        />
      </SectionCard>
    </div>
  );
}