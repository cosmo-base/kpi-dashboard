'use client';

import { useEffect, useState } from 'react';
import { MousePointerClick, Users, Eye, TrendingUp, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { LineChartComponent } from '../charts/line-chart';
import { DonutChart } from '../charts/donut-chart';
import { ScrollableTable } from '../scrollable-table';

// GA4の日付文字列(YYYYMMDD)を M/D 形式に変換
const formatDate = (ds: string) => `${parseInt(ds.substring(4, 6))}/${parseInt(ds.substring(6, 8))}`;

// チャンネル名（英語）を分かりやすい日本語に変換
const CHANNEL_MAP: Record<string, string> = {
  'Organic Search': '自然検索 (Google/Yahoo等)',
  'Direct': '直接アクセス (ブックマーク等)',
  'Organic Social': 'SNS (X/Instagram等)',
  'Referral': '外部サイトからのリンク',
  'Unassigned': 'その他・不明',
};

const SOURCE_COLORS = ['#38BDF8', '#8B5CF6', '#22C55E', '#F59E0B', '#EF4444', '#EC4899'];

export function CBHPPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/ga4')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((apiData) => {
        if (apiData.error) throw new Error(apiData.error);

        // --- 1. トレンドデータの整形 ---
        let totalPVs = 0;
        let totalUsers = 0;
        const trendData = apiData.trend.map((row: any) => {
          const pv = parseInt(row.metricValues[0].value, 10);
          const users = parseInt(row.metricValues[1].value, 10);
          totalPVs += pv;
          totalUsers += users;
          return {
            name: formatDate(row.dimensionValues[0].value),
            PV数: pv,
            ユーザー数: users,
          };
        });

        // --- 2. 流入元データの整形 ---
        const sourceData = apiData.sources.map((row: any, i: number) => {
          const rawName = row.dimensionValues[0].value;
          return {
            name: CHANNEL_MAP[rawName] || rawName,
            value: parseInt(row.metricValues[0].value, 10),
            color: SOURCE_COLORS[i % SOURCE_COLORS.length]
          };
        }).sort((a: any, b: any) => b.value - a.value);

        // --- 3. ページ別ランキングの整形 ---
        const pageData = apiData.pages.map((row: any, i: number) => ({
          rank: i + 1,
          path: row.dimensionValues[0].value,
          title: row.dimensionValues[1].value.split(' - ')[0], // タイトルの余分な部分をカット
          views: parseInt(row.metricValues[0].value, 10).toLocaleString(),
        }));

        setData({
          summary: { totalPVs, totalUsers },
          charts: { trendData, sourceData },
          tables: { pageData }
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error('GA4 Error:', err);
        setError('GA4データの取得に失敗しました。認証設定等をご確認ください。');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <Globe className="h-5 w-5" />
          <span>GA4から最新データを取得中...</span>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex h-[400px] items-center justify-center text-destructive">
        <p>{error}</p>
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

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">CBHP アクセス解析 (GA4)</h2>
        <p className="text-muted-foreground mt-1">
          直近30日間のウェブサイトのアクセス状況・流入経路・人気ページを自動取得しています。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="総ページビュー (30日)" value={summary.totalPVs.toLocaleString()} unit="PV" icon={Eye} accentColor="primary" />
        <KpiCard title="アクティブユーザー (30日)" value={summary.totalUsers.toLocaleString()} unit="人" icon={Users} accentColor="success" />
        <KpiCard title="今日のPV推移" value="自動取得中" unit="" icon={TrendingUp} accentColor="accent" />
        <KpiCard title="平均エンゲージメント" value="-" unit="" icon={MousePointerClick} accentColor="warning" />
      </div>

      <SectionCard title="アクセス推移 (直近30日間)">
        <ChartContainer height="h-[350px]">
          <LineChartComponent
            data={charts.trendData}
            lines={[
              { dataKey: 'PV数', name: 'PV数', color: '#38BDF8' },
              { dataKey: 'ユーザー数', name: 'ユーザー数', color: '#8B5CF6' },
            ]}
          />
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="流入元 (チャネル) 割合">
          <ChartContainer height="h-[350px]">
            <DonutChart data={charts.sourceData} centerLabel="ユーザー" />
          </ChartContainer>
        </SectionCard>

        <SectionCard title="人気ページランキング (PV順)">
          <ScrollableTable
            columns={[
              { key: 'rank', label: '順位', align: 'left' },
              { key: 'title', label: 'ページタイトル', align: 'left' },
              { key: 'views', label: 'PV数', align: 'right' },
            ]}
            data={tables.pageData}
          />
        </SectionCard>
      </div>
    </div>
  );
}