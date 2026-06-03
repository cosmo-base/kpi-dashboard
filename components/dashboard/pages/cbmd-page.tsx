'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { FileText, TrendingUp, Calendar } from 'lucide-react';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { RankingList } from '../ranking-list';
import { StackedBarChart } from '../charts/stacked-bar-chart';

// --- 都道府県から地方を自動判定するためのマップ ---
const REGION_MAP: Record<string, string> = {
  北海道: '北海道',
  青森: '東北', 岩手: '東北', 宮城: '東北', 秋田: '東北', 山形: '東北', 福島: '東北',
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
    // CBMDのCSV URL
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRDvzMbN9CNa_PXwmre1IFid8fw7rD2yG0IlBnifsjtrtDN0cy3n-nQlEFvKQbE4w06TXTHoZ4edpzj/pub?gid=0&single=true&output=csv';

    fetch(csvUrl)
      .then(response => response.text())
      .then(csvText => {
        const parsed = Papa.parse(csvText, { skipEmptyLines: true });
        const rawData = parsed.data as string[][];

        // ヘッダー行を探す
        const headerRowIndex = rawData.findIndex(row => row.includes('name') && row.includes('prefecture'));
        if (headerRowIndex === -1) return;
        
        const headers = rawData[headerRowIndex];
        const nameIdx = headers.indexOf('name');
        const prefIdx = headers.indexOf('prefecture');
        const updateIdx = headers.indexOf('updatedAt');

        // 名前が入っている有効な行だけを抽出
        const validRows = rawData.slice(headerRowIndex + 1).filter(row => row[nameIdx] && String(row[nameIdx]).trim() !== '');

        if (validRows.length === 0) return;

        const now = new Date();
        const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
        const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;

        let monthlyChange = 0;
        let prevMonthlyChange = 0;
        let weeklyChange = 0;

        const regionCounts = new Map<string, number>();
        const prefCounts = new Map<string, number>();

        validRows.forEach(row => {
          // --- KPI用の日付処理 (updatedAt) ---
          const dateStr = String(row[updateIdx] || '').trim();
          if (dateStr) {
            const updateDate = new Date(dateStr.replace(/\//g, '-'));
            if (!isNaN(updateDate.getTime())) {
              const diffTime = now.getTime() - updateDate.getTime();
              
              if (diffTime <= THIRTY_DAYS) {
                monthlyChange++;
              } else if (diffTime <= THIRTY_DAYS * 2) {
                prevMonthlyChange++;
              }

              if (diffTime <= SEVEN_DAYS) {
                weeklyChange++;
              }
            }
          }

          // --- 地方・都道府県の集計 ---
          const rawPref = String(row[prefIdx] || '').trim();
          let cleanPref = rawPref.replace(/(都|府|県)$/, '');
          if (cleanPref === '北海') cleanPref = '北海道';

          const region = REGION_MAP[cleanPref] || 'その他';
          const displayPref = rawPref || '未設定';

          regionCounts.set(region, (regionCounts.get(region) || 0) + 1);
          prefCounts.set(displayPref, (prefCounts.get(displayPref) || 0) + 1);
        });

        // --- データの整形 ---
        
        // 1. 先月比の計算 (0割防止)
        const monthlyChangeRate = prevMonthlyChange === 0 ? 100 : Math.round((monthlyChange / prevMonthlyChange) * 100);

        // 2. 地方別チャートデータ
        const regionOrder = ['北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州・沖縄', 'その他'];
        const regionChartData = Array.from(regionCounts.entries())
          .map(([name, count]) => ({ name, 掲載件数: count }))
          .sort((a, b) => {
            const idxA = regionOrder.indexOf(a.name);
            const idxB = regionOrder.indexOf(b.name);
            return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
          });

        // 3. ランキングデータ
        const totalListings = validRows.length;
        const regionRanking = Array.from(regionCounts.entries())
          .filter(([name]) => name !== 'その他')
          .sort((a, b) => b[1] - a[1])
          .map(([name, count], i) => ({
            rank: i + 1,
            name,
            count,
            percentage: Math.round((count / totalListings) * 100) || 0
          }));

        const prefectureRanking = Array.from(prefCounts.entries())
          .filter(([name]) => name !== '未設定')
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10) 
          .map(([name, count], i) => ({
            rank: i + 1,
            name,
            count,
            percentage: Math.round((count / totalListings) * 100) || 0
          }));

        setData({
          summary: {
            totalListings,
            monthlyChange,
            monthlyChangeRate,
            weeklyChange,
          },
          charts: {
            regionData: regionChartData,
          },
          rankings: {
            regionRanking,
            prefectureRanking
          }
        });
      })
      .catch(err => console.error('CSV Fetch Error:', err));
  }, []);

  if (!data) {
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <FileText className="h-5 w-5" />
          <span>CBMDデータを集計中...</span>
        </div>
      </div>
    );
  }

  const { summary, charts, rankings } = data;

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
        <h2 className="text-2xl font-bold text-foreground">CBMD分析</h2>
        <p className="text-muted-foreground mt-1">
          CBMD掲載情報（ミュージアム・施設）の地域別・都道府県別の分布を確認できます。
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="掲載件数"
          value={summary.totalListings.toLocaleString()}
          unit="件"
          icon={FileText}
          accentColor="primary"
        />
        <KpiCard
          title="直近30日の追加数"
          value={`+${summary.monthlyChange}`}
          unit="件"
          icon={TrendingUp}
          accentColor="success"
        />
        <KpiCard
          title="追加数の先月比"
          value={summary.monthlyChangeRate}
          unit="%"
          icon={TrendingUp}
          accentColor="success"
        />
        <KpiCard
          title="今週の増加数"
          value={`+${summary.weeklyChange}`}
          unit="件"
          icon={Calendar}
          accentColor="accent"
        />
      </div>

      {/* Region Chart */}
      <SectionCard
        title="地方別掲載件数"
        description="各地方のCBMD掲載数（北から南へ並び順）"
      >
        <ChartContainer height="h-[400px]">
          {charts?.regionData?.length > 0 ? (
            <StackedBarChart
              data={charts.regionData}
              bars={[
                { dataKey: '掲載件数', name: '掲載件数', color: '#38BDF8' },
              ]}
            />
          ) : (
             <div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>
          )}
        </ChartContainer>
      </SectionCard>

      {/* Rankings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="地方別掲載件数ランキング">
          <RankingList items={rankings?.regionRanking || []} />
        </SectionCard>

        <SectionCard title="都道府県別掲載件数ランキング">
          <RankingList items={rankings?.prefectureRanking || []} />
        </SectionCard>
      </div>
    </div>
  );
}