'use client';

import { useEffect, useState, useMemo } from 'react';
import Papa from 'papaparse';
import { Calendar, CalendarOff, MapPin, Globe, TrendingUp, ArrowUpDown, Clock } from 'lucide-react';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { ScrollableTable } from '../scrollable-table';
import { RankingList } from '../ranking-list';
import { DonutChart } from '../charts/donut-chart';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const getJSTDate = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));

const REGION_MAP: Record<string, string> = {
  北海道: '北海道', 青森: '東北', 岩手: '東北', 宮城: '東北', 秋田: '東北', 山形: '東北', 福島: '東北',
  茨城: '関東', 栃木: '関東', 群馬: '関東', 埼玉: '関東', 千葉: '関東', 東京: '関東', 神奈川: '関東',
  新潟: '中部', 富山: '中部', 石川: '中部', 福井: '中部', 山梨: '中部', 長野: '中部', 岐阜: '中部', 静岡: '中部', 愛知: '中部',
  三重: '近畿', 滋賀: '近畿', 京都: '近畿', 大阪: '近畿', 兵庫: '近畿', 奈良: '近畿', 和歌山: '近畿',
  鳥取: '中国', 島根: '中国', 岡山: '中国', 広島: '中国', 山口: '中国',
  徳島: '四国', 香川: '四国', 愛媛: '四国', 高知: '四国',
  福岡: '九州・沖縄', 佐賀: '九州・沖縄', 長崎: '九州・沖縄', 熊本: '九州・沖縄', 大分: '九州・沖縄', 宮崎: '九州・沖縄', 鹿児島: '九州・沖縄', 沖縄: '九州・沖縄'
};

const PREFECTURES_FULL = [
  '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
  '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
  '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
];

type SortMode = 'listings' | 'upcoming' | 'completed' | 'north';

export function CBEDPage() {
  const [data, setData] = useState<any>(null);
  const [prefSortMode, setPrefSortMode] = useState<SortMode>('listings');

  useEffect(() => {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJU_Qq6TICMIAhDidiH2BYlBcZBvS_Uwy4wth9tT-02RYWkVP_AufdGo0PMAbAyrHKeZrE1x0laETY/pub?gid=0&single=true&output=csv';

    fetch(csvUrl)
      .then(response => response.text())
      .then(csvText => {
        const parsed = Papa.parse(csvText, { skipEmptyLines: true });
        const rawData = parsed.data as string[][];

        const headerRowIndex = rawData.findIndex(row => row.includes('title') || row.includes('location'));
        if (headerRowIndex === -1) return;
        
        const headers = rawData[headerRowIndex];
        const titleIdx = headers.indexOf('title') !== -1 ? headers.indexOf('title') : 1;
        const dateIdx = headers.indexOf('date') !== -1 ? headers.indexOf('date') : 2;
        const latIdx = headers.indexOf('lat') !== -1 ? headers.indexOf('lat') : 6;
        const lngIdx = headers.indexOf('lng') !== -1 ? headers.indexOf('lng') : 7;
        let prefIdx = headers.indexOf('都道府県');
        if (prefIdx === -1) prefIdx = 16; 
        
        let updateIdx = headers.indexOf('更新日時');
        if (updateIdx === -1) updateIdx = headers.indexOf('updatedAt');
        if (updateIdx === -1) updateIdx = 17;

        const validRows = rawData.slice(headerRowIndex + 1).filter(row => row[titleIdx] && String(row[titleIdx]).trim() !== '');

        if (validRows.length === 0) return;

        const now = getJSTDate();
        const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);

        let upcomingCount = 0, onlineCount = 0, offlineCount = 0, todayUpdateCount = 0;
        
        const regionCounts = new Map<string, number>();
        const prefCounts = new Map<string, { total: number, upcoming: number, completed: number, region: string }>();
        const monthCounts = new Map<string, number>();
        
        // ★ 未開催イベント専用のカウント
        const upcomingRegionCounts = new Map<string, number>();
        const upcomingMonthCounts = new Map<string, number>();

        PREFECTURES_FULL.forEach(pref => {
          let cleanPref = pref.replace(/(都|府|県)$/, '');
          if (cleanPref === '北海') cleanPref = '北海道';
          prefCounts.set(pref, { total: 0, upcoming: 0, completed: 0, region: REGION_MAP[cleanPref] });
        });
        
        let currentMonthCount = 0;
        let prevMonthCount = 0;
        const currentMonthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
        const prevMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const prevMonthStr = `${prevMonthDate.getFullYear()}-${String(prevMonthDate.getMonth() + 1).padStart(2, '0')}`;

        validRows.forEach(row => {
          const updateStr = String(row[updateIdx] || '').trim();
          if (updateStr) {
            const updateDate = new Date(updateStr.replace(/\//g, '-'));
            if (!isNaN(updateDate.getTime()) && updateDate.getTime() >= startOfToday.getTime()) {
              todayUpdateCount++;
            }
          }

          const eventDateStr = String(row[dateIdx] || '').replace(/\//g, '-');
          let isUpcoming = false;
          let monthLabel = '未定';
          
          if (eventDateStr) {
            const eventDate = new Date(eventDateStr);
            if (!isNaN(eventDate.getTime())) {
              isUpcoming = eventDate >= now;
              const ym = `${eventDate.getFullYear()}-${String(eventDate.getMonth() + 1).padStart(2, '0')}`;
              monthLabel = `${eventDate.getMonth() + 1}月`;
              if (ym === currentMonthStr) currentMonthCount++;
              if (ym === prevMonthStr) prevMonthCount++;
            }
          }
          monthCounts.set(monthLabel, (monthCounts.get(monthLabel) || 0) + 1);

          const isOnline = String(row[latIdx] || '').trim() === '' && String(row[lngIdx] || '').trim() === ''; 
          let region = 'その他';

          if (isOnline) {
            onlineCount++;
            regionCounts.set('オンライン', (regionCounts.get('オンライン') || 0) + 1);
          } else {
            offlineCount++;
            const rawPref = String(row[prefIdx] || '').trim();
            let cleanPref = rawPref.replace(/(都|府|県)$/, '');
            if (cleanPref === '北海') cleanPref = '北海道';
            region = REGION_MAP[cleanPref] || 'その他';
            const displayPref = PREFECTURES_FULL.find(p => p.startsWith(cleanPref)) || (rawPref ? rawPref : '未設定');

            regionCounts.set(region, (regionCounts.get(region) || 0) + 1);
            if (!prefCounts.has(displayPref)) prefCounts.set(displayPref, { total: 0, upcoming: 0, completed: 0, region });
            const pData = prefCounts.get(displayPref)!;
            pData.total++;
            if (isUpcoming) pData.upcoming++; else pData.completed++;
          }

          // ★ 未開催イベントの場合のみ、専用のグラフ用データを加算
          if (isUpcoming) {
            upcomingCount++;
            upcomingMonthCounts.set(monthLabel, (upcomingMonthCounts.get(monthLabel) || 0) + 1);
            if (isOnline) {
              upcomingRegionCounts.set('オンライン', (upcomingRegionCounts.get('オンライン') || 0) + 1);
            } else {
              upcomingRegionCounts.set(region, (upcomingRegionCounts.get(region) || 0) + 1);
            }
          }
        });

        const regionColors = ['#38BDF8', '#8B5CF6', '#22C55E', '#F59E0B', '#EF4444', '#EC4899', '#10B981', '#6B7280'];
        
        const regionDistribution = Array.from(regionCounts.entries())
          .map(([name, value], i) => ({ name, value, color: name === 'オンライン' ? '#06B6D4' : regionColors[i % regionColors.length] }))
          .sort((a, b) => b.value - a.value);

        const monthlyDistribution = Array.from(monthCounts.entries())
          .filter(([name]) => name !== '未定')
          .map(([name, value], i) => ({ name, value, color: regionColors[i % regionColors.length] }))
          .sort((a, b) => (parseInt(a.name) || 0) - (parseInt(b.name) || 0));

        // ★ 未開催イベント用のデータ整形
        const upcomingRegionDistribution = Array.from(upcomingRegionCounts.entries())
          .map(([name, value], i) => ({ name, value, color: name === 'オンライン' ? '#06B6D4' : regionColors[i % regionColors.length] }))
          .sort((a, b) => b.value - a.value);

        const upcomingMonthDistribution = Array.from(upcomingMonthCounts.entries())
          .filter(([name]) => name !== '未定')
          .map(([name, value], i) => ({ name, value, color: regionColors[i % regionColors.length] }))
          .sort((a, b) => (parseInt(a.name) || 0) - (parseInt(b.name) || 0));

        const regionRanking = regionDistribution
          .filter(r => r.name !== 'オンライン' && r.name !== 'その他')
          .map((r, i) => ({ rank: i + 1, name: r.name, count: r.value, percentage: Math.round((r.value / offlineCount) * 100) || 0 }));

        const prefectureRanking = Array.from(prefCounts.entries())
          .filter(([name, data]) => name !== '未設定' && data.total > 0)
          .sort((a, b) => b[1].total - a[1].total).slice(0, 10)
          .map(([name, data], i) => ({ rank: i + 1, name, count: data.total, percentage: Math.round((data.total / offlineCount) * 100) || 0 }));

        const prefectureTableRaw = Array.from(prefCounts.entries()).map(([prefecture, data]) => ({
            prefecture, region: data.region, listings: data.total, upcoming: data.upcoming, completed: data.completed
        }));

        const onlineTable = [{
          category: 'オンラインイベント全体',
          listings: onlineCount,
          upcoming: validRows.filter(r => String(r[latIdx]).trim() === '' && String(r[lngIdx]).trim() === '' && new Date(String(r[dateIdx]).replace(/\//g, '-')) >= now).length,
          completed: validRows.filter(r => String(r[latIdx]).trim() === '' && String(r[lngIdx]).trim() === '' && new Date(String(r[dateIdx]).replace(/\//g, '-')) < now).length,
        }];

        setData({
          summary: { totalListings: validRows.length, upcomingListings: upcomingCount, offlineListings: offlineCount, onlineListings: onlineCount, monthlyIncrease: currentMonthCount - prevMonthCount, todayUpdateCount },
          charts: { regionDistribution, monthlyDistribution, upcomingRegionDistribution, upcomingMonthDistribution },
          rankings: { regionRanking, prefectureRanking },
          tables: { prefectureTableRaw, onlineTable }
        });
      })
      .catch(err => console.error('CSV Fetch Error:', err));
  }, []);

  const sortedPrefectureTable = useMemo(() => {
    if (!data || !data.tables.prefectureTableRaw) return [];
    const table = [...data.tables.prefectureTableRaw];
    const undefinedItems = table.filter(t => !PREFECTURES_FULL.includes(t.prefecture) && t.listings > 0);
    const validItems = table.filter(t => PREFECTURES_FULL.includes(t.prefecture));
    if (prefSortMode === 'north') {
      validItems.sort((a, b) => PREFECTURES_FULL.indexOf(a.prefecture) - PREFECTURES_FULL.indexOf(b.prefecture));
    } else {
      validItems.sort((a, b) => {
        if (b[prefSortMode] !== a[prefSortMode]) return b[prefSortMode] - a[prefSortMode]; 
        return PREFECTURES_FULL.indexOf(a.prefecture) - PREFECTURES_FULL.indexOf(b.prefecture);
      });
    }
    return [...validItems, ...undefinedItems];
  }, [data, prefSortMode]);

  if (!data) return (<div className="flex h-[400px] items-center justify-center text-muted-foreground"><div className="animate-pulse flex items-center gap-2"><Calendar className="h-5 w-5" /><span>CBEDデータを集計中...</span></div></div>);

  const { summary, charts, rankings, tables } = data;

  return (
    <div className="space-y-6">
      <div className="mb-6"><h2 className="text-2xl font-bold text-foreground">CBED分析</h2><p className="text-muted-foreground mt-1">掲載イベントの件数、開催形式、地域別分布を確認できます。</p></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <KpiCard title="掲載件数" value={summary.totalListings.toLocaleString()} unit="件" icon={Calendar} accentColor="primary" />
        <KpiCard title="未開催の掲載件数" value={summary.upcomingListings} unit="件" icon={CalendarOff} accentColor="warning" />
        <KpiCard title="リアル会場の掲載件数" value={summary.offlineListings} unit="件" icon={MapPin} accentColor="accent" />
        <KpiCard title="オンライン掲載件数" value={summary.onlineListings} unit="件" icon={Globe} accentColor="success" />
        <KpiCard title="今月のイベント増減" value={summary.monthlyIncrease >= 0 ? `+${summary.monthlyIncrease}` : summary.monthlyIncrease} unit="件" description="先月開催数との差" icon={TrendingUp} accentColor={summary.monthlyIncrease >= 0 ? "success" : "danger"} />
        <KpiCard title="今日の更新数" value={`+${summary.todayUpdateCount}`} unit="件" icon={Clock} accentColor="warning" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="【未開催】 地方別・オンライン割合" description="これから参加できるイベントの分布"><ChartContainer height="h-[300px]">{charts?.upcomingRegionDistribution?.length > 0 ? (<DonutChart data={charts.upcomingRegionDistribution} centerLabel="イベント" />) : (<div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>)}</ChartContainer></SectionCard>
        <SectionCard title="【未開催】 開催月ごとの件数割合" description="これから参加できるイベントの時期"><ChartContainer height="h-[300px]">{charts?.upcomingMonthDistribution?.length > 0 ? (<DonutChart data={charts.upcomingMonthDistribution} centerLabel="イベント" />) : (<div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>)}</ChartContainer></SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="【全期間】 地方別＋オンライン割合"><ChartContainer height="h-[300px]">{charts?.regionDistribution?.length > 0 ? (<DonutChart data={charts.regionDistribution} centerLabel="イベント" />) : (<div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>)}</ChartContainer></SectionCard>
        <SectionCard title="【全期間】 開催月ごとの件数割合"><ChartContainer height="h-[300px]">{charts?.monthlyDistribution?.length > 0 ? (<DonutChart data={charts.monthlyDistribution} centerLabel="イベント" />) : (<div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>)}</ChartContainer></SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="地方別掲載件数ランキング"><RankingList items={rankings?.regionRanking || []} /></SectionCard>
        <SectionCard title="都道府県別掲載件数ランキング"><RankingList items={rankings?.prefectureRanking || []} /></SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="都道府県別 イベント掲載件数">
          <div className="flex flex-wrap items-center justify-end gap-2 mb-4">
            <span className="text-sm text-muted-foreground mr-1">並び順:</span>
            {[{ mode: 'north', label: '北から' }, { mode: 'listings', label: '総件数' }, { mode: 'upcoming', label: '未開催' }, { mode: 'completed', label: '開催済' }].map((btn) => (
              <Button key={btn.mode} variant="outline" size="sm" onClick={() => setPrefSortMode(btn.mode as SortMode)} className={cn('transition-all duration-200', prefSortMode === btn.mode ? 'bg-primary text-primary-foreground border-transparent' : 'bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground')}>
                {btn.mode !== 'north' && <ArrowUpDown className="h-3 w-3 mr-1" />}{btn.label}
              </Button>
            ))}
          </div>
          <ScrollableTable columns={[{ key: 'prefecture', label: '都道府県', align: 'left' }, { key: 'region', label: '地方', align: 'left' }, { key: 'listings', label: '掲載件数', align: 'right' }, { key: 'upcoming', label: '未開催', align: 'right' }, { key: 'completed', label: '開催済み', align: 'right' }]} data={sortedPrefectureTable} />
        </SectionCard>
        <SectionCard title="オンラインイベント掲載件数"><ScrollableTable columns={[{ key: 'category', label: '区分', align: 'left' }, { key: 'listings', label: '掲載件数', align: 'right' }, { key: 'upcoming', label: '未開催', align: 'right' }, { key: 'completed', label: '開催済み', align: 'right' }]} data={tables?.onlineTable || []} /></SectionCard>
      </div>
    </div>
  );
}
