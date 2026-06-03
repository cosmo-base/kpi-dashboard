'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse'; 
import { MousePointerClick, Users, Eye, TrendingUp, Globe, MapPin } from 'lucide-react';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { LineChartComponent } from '../charts/line-chart';
import { DonutChart } from '../charts/donut-chart';
import { ScrollableTable } from '../scrollable-table';

// --- モックデータ（スプレッドシート連携が完了するまでの表示用） ---
const MOCK_DATA = {
  summary: { totalPVs: 15420, totalUsers: 5120, todayPv: 342, engagement: "68%" },
  charts: {
    trendData: Array.from({ length: 30 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (29 - i));
      return {
        name: `${d.getMonth() + 1}/${d.getDate()}`,
        PV数: Math.floor(Math.random() * 200) + 300,
        ユーザー数: Math.floor(Math.random() * 100) + 150,
      };
    }),
    sourceData: [
      { name: '自然検索 (Organic)', value: 2100, color: '#38BDF8' },
      { name: 'SNS (Social)', value: 1500, color: '#8B5CF6' },
      { name: '直接アクセス (Direct)', value: 900, color: '#22C55E' },
      { name: '外部サイト (Referral)', value: 620, color: '#F59E0B' },
    ],
    regionDistribution: [
      { name: '東京都', value: 1850, color: '#38BDF8' },
      { name: '神奈川県', value: 920, color: '#8B5CF6' },
      { name: '大阪府', value: 680, color: '#22C55E' },
      { name: '愛知県', value: 450, color: '#F59E0B' },
      { name: 'その他', value: 1220, color: '#6B7280' },
    ]
  },
  tables: {
    pageData: [
      { rank: 1, title: 'Cosmo Base | 宇宙をすべての産業に', views: '5,420' },
      { rank: 2, title: '宇宙タイプ診断', views: '3,850' },
      { rank: 3, title: '参加者専用ページ', views: '2,100' },
      { rank: 4, title: 'CBL (Cosmo Base Library)', views: '1,450' },
      { rank: 5, title: 'イベント情報 (CBED)', views: '980' },
    ],
    regionData: [
      { rank: 1, region: '東京都', users: '1,850' },
      { rank: 2, region: '神奈川県', users: '920' },
      { rank: 3, region: '大阪府', users: '680' },
      { rank: 4, region: '愛知県', users: '450' },
      { rank: 5, region: '埼玉県', users: '380' },
      { rank: 6, region: '福岡県', users: '310' },
      { rank: 7, region: '千葉県', users: '290' },
    ]
  }
};

export function CBHPPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // 💡 1つのスプレッドシートファイルから、各シートの「CSV公開URL」を個別に取得してここに貼り付けます
    const urlTrend  = ''; // シート1: 日別トレンド (date, screenPageViews, activeUsers)
    const urlSource = ''; // シート2: 流入元 (sessionDefaultChannelGroup, activeUsers)
    const urlPages  = ''; // シート3: ページ別 (pageTitle, screenPageViews)
    const urlRegion = ''; // シート4: 都道府県別 (region, activeUsers)

    if (!urlTrend || !urlSource || !urlPages || !urlRegion) {
      // URLがすべて揃っていない場合はモックデータを表示
      setData(MOCK_DATA);
      return;
    }

    // --- 今後、ここに4つのCSVを同時に読み込んで処理するコードを追加します ---
    // 例: Promise.all([fetch(urlTrend), fetch(urlSource), ...])

  }, []);

  if (!data) {
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <Globe className="h-5 w-5" />
          <span>アクセスデータを読み込み中...</span>
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

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">CBHP アクセス解析 (GA4)</h2>
        <p className="text-muted-foreground mt-1">
          直近30日間のウェブサイトのアクセス状況・流入経路・人気ページ・アクセス地域を確認できます。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="総ページビュー (30日)" value={summary.totalPVs.toLocaleString()} unit="PV" icon={Eye} accentColor="primary" />
        <KpiCard title="アクティブユーザー (30日)" value={summary.totalUsers.toLocaleString()} unit="人" icon={Users} accentColor="success" />
        <KpiCard title="今日のPV推移" value={`+${summary.todayPv}`} unit="PV" icon={TrendingUp} accentColor="accent" />
        <KpiCard title="平均エンゲージメント率" value={summary.engagement} unit="" icon={MousePointerClick} accentColor="warning" />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="都道府県別 アクセス割合" icon={MapPin}>
          <ChartContainer height="h-[350px]">
            <DonutChart data={charts.regionDistribution} centerLabel="ユーザー" />
          </ChartContainer>
        </SectionCard>

        <SectionCard title="地域(都道府県) ランキング" icon={MapPin}>
          <ScrollableTable
            columns={[
              { key: 'rank', label: '順位', align: 'left' },
              { key: 'region', label: '都道府県', align: 'left' },
              { key: 'users', label: 'ユーザー数', align: 'right' },
            ]}
            data={tables.regionData}
          />
        </SectionCard>
      </div>

    </div>
  );
}
