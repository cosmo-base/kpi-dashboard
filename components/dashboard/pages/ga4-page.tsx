'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { MousePointerClick, Users, Eye, TrendingUp, Globe, MapPin, MessageCircle } from 'lucide-react';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { LineChartComponent } from '../charts/line-chart';
import { DonutChart } from '../charts/donut-chart';
import { ScrollableTable } from '../scrollable-table';

// ==========================================
// スプレッドシートのCSV公開URL
// ==========================================
const CSV_URLS = {
  trend: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=0&single=true&output=csv',
  source: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=1328843602&single=true&output=csv',
  pages: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=242868570&single=true&output=csv',
  region: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=472061508&single=true&output=csv',
  conversions: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=16174631&single=true&output=csv' 
};

const SOURCE_COLORS = ['#38BDF8', '#8B5CF6', '#22C55E', '#F59E0B', '#EF4444', '#EC4899', '#10B981', '#6B7280'];
const REGION_COLORS = ['#38BDF8', '#8B5CF6', '#22C55E', '#F59E0B', '#EF4444', '#6B7280'];

// 秒数を「X分Y秒」に変換
const formatSeconds = (sec: number) => {
  if (!sec || isNaN(sec)) return '0秒';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m > 0 ? `${m}分${s}秒` : `${s}秒`;
};

// 詳細なSource/Mediumを分かりやすくまとめる関数
const classifySource = (sourceMedium: string) => {
  const sm = sourceMedium.toLowerCase();
  if (sm.includes('google') || sm.includes('yahoo') || sm.includes('bing')) return '自然検索 (Google等)';
  if (sm.includes('t.co') || sm.includes('twitter') || sm.includes('x.com')) return 'X (Twitter)';
  if (sm.includes('instagram')) return 'Instagram';
  if (sm.includes('note.com')) return 'note';
  if (sm.includes('direct')) return '直接アクセス (Direct)';
  return '外部サイト・その他';
};

// 英語の都道府県名を日本語に変換
const translateRegion = (enRegion: string) => {
  const map: Record<string, string> = {
    'Hokkaido': '北海道', 'Aomori': '青森県', 'Iwate': '岩手県', 'Miyagi': '宮城県', 'Akita': '秋田県',
    'Yamagata': '山形県', 'Fukushima': '福島県', 'Ibaraki': '茨城県', 'Tochigi': '栃木県', 'Gunma': '群馬県',
    'Saitama': '埼玉県', 'Chiba': '千葉県', 'Tokyo': '東京都', 'Kanagawa': '神奈川県', 'Niigata': '新潟県',
    'Toyama': '富山県', 'Ishikawa': '石川県', 'Fukui': '福井県', 'Yamanashi': '山梨県', 'Nagano': '長野県',
    'Gifu': '岐阜県', 'Shizuoka': '静岡県', 'Aichi': '愛知県', 'Mie': '三重県', 'Shiga': '滋賀県',
    'Kyoto': '京都府', 'Osaka': '大阪府', 'Hyogo': '兵庫県', 'Nara': '奈良県', 'Wakayama': '和歌山県',
    'Tottori': '鳥取県', 'Shimane': '島根県', 'Okayama': '岡山県', 'Hiroshima': '広島県', 'Yamaguchi': '山口県',
    'Tokushima': '徳島県', 'Kagawa': '香川県', 'Ehime': '愛媛県', 'Kochi': '高知県', 'Fukuoka': '福岡県',
    'Saga': '佐賀県', 'Nagasaki': '長崎県', 'Kumamoto': '熊本県', 'Oita': '大分県', 'Miyazaki': '宮崎県',
    'Kagoshima': '鹿児島県', 'Okinawa': '沖縄県'
  };
  if (!enRegion || enRegion === '(not set)') return '不明';
  let cleanName = enRegion.replace(/ Prefecture$/, '').replace(/-to$/, '').replace(/-fu$/, '').replace(/-ken$/, '').trim();
  return map[cleanName] || enRegion; 
};

export function CBHPPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!CSV_URLS.trend || !CSV_URLS.conversions) return;

    Promise.all([
      fetch(CSV_URLS.trend).then(res => res.text()),
      fetch(CSV_URLS.source).then(res => res.text()),
      fetch(CSV_URLS.pages).then(res => res.text()),
      fetch(CSV_URLS.region).then(res => res.text()),
      fetch(CSV_URLS.conversions).then(res => res.text()) // 追加！
    ]).then(([trendTxt, sourceTxt, pagesTxt, regionTxt, convTxt]) => {
      
      // --- 1. 日別トレンドの処理 ---
      const trendRows = Papa.parse(trendTxt, { header: true, skipEmptyLines: true }).data as any[];
      let thirtyDaysPVs = 0;
      let thirtyDaysUsers = 0;
      let thirtyDaysNewUsers = 0;
      let sumEngagementRate = 0;
      let sumSessionDuration = 0;
      let count30Days = 0;

      const trendData = trendRows.map((row, i) => {
        const pv = parseInt(row.screenPageViews, 10) || 0;
        const users = parseInt(row.activeUsers, 10) || 0;
        const newUsers = parseInt(row.newUsers, 10) || 0;
        const engRate = parseFloat(row.engagementRate) || 0;
        const avgDuration = parseFloat(row.averageSessionDuration) || 0;
        
        const dateStr = String(row.date || '');
        const shortDate = dateStr.length > 5 ? dateStr.substring(5) : dateStr;

        // 直近30日の集計
        if (i >= trendRows.length - 30) {
          thirtyDaysPVs += pv;
          thirtyDaysUsers += users;
          thirtyDaysNewUsers += newUsers;
          sumEngagementRate += engRate;
          sumSessionDuration += avgDuration;
          count30Days++;
        }

        return {
          name: shortDate,
          PV数: pv,
          ユーザー数: users,
          新規ユーザー: newUsers
        };
      });

      const avgEngRate = count30Days > 0 ? (sumEngagementRate / count30Days) * 100 : 0;
      const avgDuration = count30Days > 0 ? (sumSessionDuration / count30Days) : 0;

      // --- 2. 詳細な流入元の処理 ---
      const sourceRows = Papa.parse(sourceTxt, { header: true, skipEmptyLines: true }).data as any[];
      const sourceMap = new Map<string, number>();
      
      sourceRows.forEach(row => {
        const sm = String(row.sourceMedium || row.sessionSourceMedium || '');
        const users = parseInt(row.activeUsers, 10) || 0;
        const groupName = classifySource(sm);
        sourceMap.set(groupName, (sourceMap.get(groupName) || 0) + users);
      });

      const sourceData = Array.from(sourceMap.entries())
        .map(([name, value], i) => ({ name, value, color: SOURCE_COLORS[i % SOURCE_COLORS.length] }))
        .sort((a, b) => b.value - a.value);

      // --- 3. ページランキング ---
      const pagesRows = Papa.parse(pagesTxt, { header: true, skipEmptyLines: true }).data as any[];
      const pathMap = new Map<string, { title: string, path: string, views: number }>();
      pagesRows.forEach((row) => {
        const path = row.pagePath || '不明';
        const views = parseInt(row.screenPageViews, 10) || 0;
        const shortTitle = String(row.pageTitle || '').split(' - ')[0].split(' | ')[0]; 
        if (!pathMap.has(path)) pathMap.set(path, { title: shortTitle || path, path, views });
        else pathMap.get(path)!.views += views;
      });

      const pageData = Array.from(pathMap.values())
        .sort((a, b) => b.views - a.views)
        .map((item, i) => ({
          rank: i + 1,
          title: item.title,
          path: item.path,
          views: item.views.toLocaleString(),
        }));

      // --- 4. 都道府県 ---
      const regionRows = Papa.parse(regionTxt, { header: true, skipEmptyLines: true }).data as any[];
      const regionDistribution: any[] = [];
      const regionData: any[] = [];
      const regionMap = new Map<string, number>();

      regionRows.forEach((row) => {
        const val = parseInt(row.activeUsers, 10) || 0;
        const rawRegion = String(row.region || '');
        if (val <= 0 || !rawRegion || rawRegion === '(not set)') return;
        const jpRegion = translateRegion(rawRegion);
        regionMap.set(jpRegion, (regionMap.get(jpRegion) || 0) + val);
      });

      const sortedRegions = Array.from(regionMap.entries()).sort((a, b) => b[1] - a[1]);
      sortedRegions.forEach(([regionName, val], i) => {
        regionData.push({ rank: i + 1, region: regionName, users: val.toLocaleString() });
        if (i < 5) {
          regionDistribution.push({ name: regionName, value: val, color: REGION_COLORS[i % REGION_COLORS.length] });
        } else {
          const othersIdx = regionDistribution.findIndex(d => d.name === 'その他');
          if (othersIdx === -1) regionDistribution.push({ name: 'その他', value: val, color: REGION_COLORS[5] });
          else regionDistribution[othersIdx].value += val;
        }
      });

      // --- 5. コンバージョン（Discord参加）---
      const convRows = Papa.parse(convTxt, { header: true, skipEmptyLines: true }).data as any[];
      let totalDiscordJoins = 0;
      let thirtyDaysDiscordJoins = 0;
      
      convRows.forEach((row, i) => {
        const evName = row.eventName || '';
        const count = parseInt(row.eventCount, 10) || 0;
        
        // GA4で設定したイベント名（discord_join）をカウント
        if (evName === 'discord_join') {
          totalDiscordJoins += count;
          // 直近30日かどうかの簡易判定 (行の後ろの方にあるかで判定)
          if (i >= convRows.length - 30) {
            thirtyDaysDiscordJoins += count;
          }
        }
      });

      setData({
        summary: { 
          thirtyDaysPVs, 
          thirtyDaysUsers, 
          thirtyDaysNewUsers,
          avgEngRate: avgEngRate.toFixed(1),
          avgDuration: formatSeconds(avgDuration),
          totalDiscordJoins,
        },
        charts: { trendData, sourceData, regionDistribution },
        tables: { pageData, regionData }
      });

    }).catch(err => {
      console.error('GA4 CSV Fetch Error:', err);
      setError('データの読み込みに失敗しました。');
    });
  }, []);

  if (error) {
    return <div className="flex h-[400px] items-center justify-center text-destructive"><p>{error}</p></div>;
  }

  if (!data) {
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <Globe className="h-5 w-5" />
          <span>GA4アクセスデータを取得・集計中...</span>
        </div>
      </div>
    );
  }

  const { summary, charts, tables } = data;

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">CBHP アクセス解析 (GA4)</h2>
        <p className="text-muted-foreground mt-1">
          ウェブサイトのアクセス状況・エンゲージメント・流入経路・コンバージョンを確認できます。
        </p>
      </div>

      {/* 超強化されたKPIカード */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard 
          title="総ページビュー (直近30日)" 
          value={summary.thirtyDaysPVs.toLocaleString()} 
          unit="PV" 
          icon={Eye} 
          accentColor="primary" 
        />
        <KpiCard 
          title="アクティブユーザー (直近30日)" 
          value={summary.thirtyDaysUsers.toLocaleString()} 
          unit="人" 
          trendValue={`うち新規: ${summary.thirtyDaysNewUsers.toLocaleString()}人`}
          trendType="up"
          icon={Users} 
          accentColor="success" 
        />
        <KpiCard 
          title="平均エンゲージメント率" 
          value={summary.avgEngRate} 
          unit="%" 
          trendValue={`平均滞在時間: ${summary.avgDuration}`}
          trendType="up"
          icon={MousePointerClick} 
          accentColor="warning" 
        />
        <KpiCard 
          title="Discord参加クリック数 (累計)" 
          value={summary.totalDiscordJoins.toLocaleString()} 
          unit="回" 
          icon={MessageCircle} 
          accentColor="info" 
        />
      </div>

      <SectionCard title="アクセス推移 (全期間)">
        <ChartContainer height="h-[350px]">
          <LineChartComponent
            data={charts.trendData}
            lines={[
              { dataKey: 'PV数', name: 'PV数', color: '#38BDF8' },
              { dataKey: 'ユーザー数', name: 'ユーザー数', color: '#8B5CF6' },
              { dataKey: '新規ユーザー', name: '新規ユーザー', color: '#22C55E' },
            ]}
          />
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="流入元メディア 割合 (直近30日)">
          <ChartContainer height="h-[350px]">
            {charts.sourceData.length > 0 ? (
              <DonutChart data={charts.sourceData} centerLabel="ユーザー" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>
            )}
          </ChartContainer>
        </SectionCard>

        <SectionCard title="人気ページランキング (直近30日)">
          <ScrollableTable
            columns={[
              { key: 'rank', label: '順位', align: 'center' },
              { key: 'title', label: 'ページ名', align: 'left' },
              { key: 'path', label: 'URL', align: 'left' },
              { key: 'views', label: 'PV数', align: 'right' },
            ]}
            data={tables.pageData}
          />
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="都道府県別 アクセス割合 (直近30日)" icon={MapPin}>
          <ChartContainer height="h-[350px]">
            {charts.regionDistribution.length > 0 ? (
              <DonutChart data={charts.regionDistribution} centerLabel="ユーザー" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>
            )}
          </ChartContainer>
        </SectionCard>

        <SectionCard title="地域(都道府県) ランキング" icon={MapPin}>
          <ScrollableTable
            columns={[
              { key: 'rank', label: '順位', align: 'center' },
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
