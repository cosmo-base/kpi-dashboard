'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { FileText, TrendingUp, Calendar } from 'lucide-react';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { RankingList } from '../ranking-list';
import { StackedBarChart } from '../charts/stacked-bar-chart';

const REGION_MAP: Record<string, string> = {
  北海道: '北海道', 青森: '東北', 岩手: '東北', 宮城: '東北', 秋田: '東北', 山形: '東北', 福島: '東北',
  茨城: '関東', 栃木: '関東', 群馬: '関東', 埼玉: '関東', 千葉: '関東', 東京: '関東', 神奈川: '関東',
  新潟: '中部', 富山: '中部', 石川: '中部', 福井: '中部', 山梨: '中部', 長野: '中部', 岐阜: '中部', 静岡: '中部', 愛知: '中部',
  三重: '近畿', 滋賀: '近畿', Kyoto: '近畿', 京都: '近畿', 大阪: '近畿', 兵庫: '近畿', 奈良: '近畿', 和歌山: '近畿',
  鳥取: '中国', 島根: '中国', 岡山: '中国', 広島: '中国', 山口: '中国',
  徳島: '四国', 香川: '四国', 愛媛: '四国', 高知: '四国',
  福岡: '九州・沖縄', 佐賀: '九州・沖縄', 長崎: '九州・沖縄', 熊本: '九州・沖縄', 大分: '九州・沖縄', 宮崎: '九州・沖縄', 鹿児島: '九州・沖縄', 沖縄: '九州・沖縄'
};

export function CBMDPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRDvzMbN9CNa_PXwmre1IFid8fw7rD2yG0IlBnifsjtrtDN0cy3n-nQlEFvKQbE4w06TXTHoZ4edpzj/pub?gid=0&single=true&output=csv';

    fetch(csvUrl)
      .then(response => response.text())
      .then(csvText => {
        const parsed = Papa.parse(csvText, { skipEmptyLines: true });
        const rawData = parsed.data as string[][];

        const headerRowIndex = rawData.findIndex(row => row.includes('name') && row.includes('prefecture'));
        if (headerRowIndex === -1) return;
        
        const headers = rawData[headerRowIndex];
        const nameIdx = headers.indexOf('name');
        const prefIdx = headers.indexOf('prefecture');
        const updateIdx = headers.indexOf('updatedAt');

        const validRows = rawData.slice(headerRowIndex + 1).filter(row => row[nameIdx] && String(row[nameIdx]).trim() !== '');
        if (validRows.length === 0) return;

        const now = new Date();
        const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
        const currentDay = now.getDay() === 0 ? 7 : now.getDay();
        const startOfThisWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - currentDay + 1);
        startOfThisWeek.setHours(0, 0, 0, 0);

        let thisMonthChange = 0;
        let thisWeekChange = 0;
        let endOfPrevMonthListings = 0;

        const regionCounts = new Map<string, number>();
        const prefCounts = new Map<string, number>();

        validRows.forEach(row => {
          const dateStr = String(row[updateIdx] || '').trim();
          if (dateStr) {
            const updateDate = new Date(dateStr.replace(/\//g, '-'));
            if (!isNaN(updateDate.getTime())) {
              const t = updateDate.getTime();
              if (t >= startOfThisMonth.getTime()) thisMonthChange++;
              if (t <= endOfPrevMonth.getTime()) endOfPrevMonthListings++;
              if (t >= startOfThisWeek.getTime()) thisWeekChange++;
            }
          }

          const rawPref = String(row[prefIdx] || '').trim();
          let cleanPref = rawPref.replace(/(都|府|県)$/, '');
          if (cleanPref === '北海') cleanPref = '北海道';

          const region = REGION_MAP[cleanPref] || 'その他';
          const displayPref = rawPref || '未設定';

          regionCounts.set(region, (regionCounts.get(region) || 0) + 1);
          prefCounts.set(displayPref, (prefCounts.get(displayPref) || 0) + 1);
        });

        const totalListings = validRows.length;
        const monthlyChangeRate = endOfPrevMonthListings === 0 ? 100 : Math.round((totalListings / endOfPrevMonthListings) * 100);

        const regionOrder = ['北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州・沖縄', 'その他'];
        const regionChartData = Array.from(regionCounts.entries())
          .map(([name, count]) => ({ name, 掲載件数: count }))
          .sort((a, b) => {
            const idxA = regionOrder.indexOf(a.name);
            const idxB = regionOrder.indexOf(b.name);
            return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
          });

        const regionRanking = Array.from(regionCounts.entries())
          .filter(([name]) => name !== 'その他')
          .sort((a, b) => b[1] - a[1])
          .map(([name, count], i) => ({ rank: i + 1, name, count, percentage: Math.round((count / totalListings) * 100) || 0 }));

        const prefectureRanking = Array.from(prefCounts.entries())
          .filter(([name]) => name !== '未設定')
          .sort((a, b) => b[1] - a[1]).slice(0, 10) 
          .map(([name, count], i) => ({ rank: i + 1, name, count, percentage: Math.round((count / totalListings) * 100) || 0 }));

        setData({
          summary: { totalListings, thisMonthChange, monthlyChangeRate, thisWeekChange },
          charts: { regionData: regionChartData },
          rankings: { regionRanking, prefectureRanking }
        });
      })
      .catch(err => console.error('CSV Fetch Error:', err));
  }, []);

  if (!data) return (<div className="flex h-[400px] items-center justify-center text-muted-foreground"><div className="animate-pulse flex items-center gap-2"><FileText className="h-5 w-5" /><span>CBMDデータを集計中...</span></div></div>);

  const { summary, charts, rankings } = data;

  return (
    <div className="space-y-6">
      <div className="mb-6"><h2 className="text-2xl font-bold text-foreground">CBMD分析</h2><p className="text-muted-foreground mt-1">CBMD掲載情報（ミュージアム・施設）の地域別・都道府県別の分布を確認できます。</p></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="掲載件数" value={summary.totalListings.toLocaleString()} unit="件" icon={FileText} accentColor="primary" />
        <KpiCard title="今月の追加数" value={`+${summary.thisMonthChange}`} unit="件" icon={TrendingUp} accentColor="success" />
        <KpiCard title="先月末比" value={summary.monthlyChangeRate} unit="%" trendValue="先月末比" trendType="up" icon={TrendingUp} accentColor="success" />
        <KpiCard title="今週の追加数" value={`+${summary.thisWeekChange}`} unit="件" icon={Calendar} accentColor="accent" />
      </div>

      <SectionCard title="地方別掲載件数" description="各地方のCBMD掲載数（北から南へ並び順）">
        <ChartContainer height="h-[400px]">
          {charts?.regionData?.length > 0 ? (<StackedBarChart data={charts.regionData} bars={[{ dataKey: '掲載件数', name: '掲載件数', color: '#38BDF8' }]} />) : (<div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>)}
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="地方別掲載件数ランキング"><RankingList items={rankings?.regionRanking || []} /></SectionCard>
        <SectionCard title="都道府県別掲載件数ランキング"><RankingList items={rankings?.prefectureRanking || []} /></SectionCard>
      </div>
    </div>
  );
}
