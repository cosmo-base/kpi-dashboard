'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse'; // スプレッドシート連携時に使用します
import { MousePointerClick, Users, Eye, TrendingUp, Globe } from 'lucide-react';
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
    ]
  },
  tables: {
    pageData: [
      { rank: 1, title: 'Cosmo Base | 宇宙をすべての産業に', views: '5,420' },
      { rank: 2, title: '宇宙タイプ診断', views: '3,850' },
      { rank: 3, title: '参加者専用ページ', views: '2,100' },
      { rank: 4, title: 'CBL (Cosmo Base Library)', views: '1,450' },
      { rank: 5, title: 'イベント情報 (CBED)', views: '980' },
    ]
  }
};

export function GA4Page() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // 💡 今後、ここにGA4のデータを出力したスプレッドシートの「CSV公開URL」を入れます。
    // GA4のデータは「日別」「流入元」「ページ別」などで表の形が異なるため、3つのシートに分けて出力するのがおすすめです。
    const urlTrend = '';  // 例: 日付, PV数, ユーザー数
    const urlSource = ''; // 例: 流入元, ユーザー数
    const urlPages = '';  // 例: ページタイトル, PV数

    if (!urlTrend || !urlSource || !urlPages) {
      // URLが空の場合は、デザイン確認用のダミーデータを表示
      setData(MOCK_DATA);
      return;
    }

    // --- スプレッドシートの準備ができたら、ここにCSVを読み込む処理を追加します ---

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
          直近30日間のウェブサイトのアクセス状況・流入経路・人気ページを確認できます。
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
    </div>
  );
}
