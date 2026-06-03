'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Users, TrendingUp, Calendar, CalendarDays, Clock, UserPlus } from 'lucide-react';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { ScrollableTable } from '../scrollable-table';
import { LineChartComponent } from '../charts/line-chart';
import { StackedBarChart } from '../charts/stacked-bar-chart';
import { DonutChart } from '../charts/donut-chart';

// --- 数値の増減を綺麗にフォーマットする関数（+X, 0, -X） ---
const formatDiff = (num: number) => {
  if (num > 0) return `+${num.toLocaleString()}`;
  if (num < 0) return num.toLocaleString(); // マイナスは自動で - が付く
  return '0';
};

export function CommunityPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRoX91AuTR9uVSNcCSqr0ir_SIP-6ZtNpOqBHaLEwXDMA99w1Rws-5L7crTpqBY_JqHa-n0Ie4PxWLq/pub?gid=0&single=true&output=csv';

    fetch(csvUrl)
      .then(response => response.text())
      .then(csvText => {
        const parsed = Papa.parse(csvText, { skipEmptyLines: true });
        const rawData = parsed.data as string[][];

        const headerRowIndex = rawData.findIndex(row => row.includes('参加数'));
        if (headerRowIndex === -1) return;
        
        const headers = rawData[headerRowIndex];
        const monthIdx = headers.indexOf('月');
        const dayIdx = headers.indexOf('日');
        const increaseIdx = headers.indexOf('参加増加数');
        const totalIdx = headers.indexOf('参加数');

        // 日次データの抽出
        const dailyRecords = rawData.slice(headerRowIndex + 1)
          .map(row => ({
            date: `${row[monthIdx]}/${row[dayIdx]}`,
            increase: Number(row[increaseIdx]) || 0,
            total: Number(row[totalIdx]) || 0,
          }))
          .filter(record => record.total > 0);

        if (dailyRecords.length === 0) return;

        const latest = dailyRecords[dailyRecords.length - 1];
        const len = dailyRecords.length;
        
        // --- P列, Q列 流入元データ ---
        const sourceColors: Record<string, string> = {
          '個別招待': '#38BDF8',
          'HP': '#8B5CF6',
          'X': '#1DA1F2',
          'Instagram': '#E4405F',
          'note': '#41C9B4',
          'YouTube': '#FF0000',
          'ピーテックス(外部のイベント掲載)': '#F59E0B',
          'パートナー団体': '#22C55E',
          'チラシ': '#EC4899',
        };
        const defaultColors = ['#38BDF8', '#8B5CF6', '#22C55E', '#F59E0B', '#EF4444', '#06B6D4'];
        let colorIdx = 0;

        const sourceDistributionRaw = new Map<string, number>();
        Object.keys(sourceColors).forEach(key => {
          sourceDistributionRaw.set(key, 0);
        });

        rawData.forEach(row => {
          if (row.length > 16 && row[15] !== undefined && row[16] !== undefined) {
            const name = String(row[15]).trim();
            const valStr = String(row[16]).replace(/,/g, '').trim();
            const val = parseInt(valStr, 10);

            if (name && !isNaN(val) && name !== '流入元' && name !== '項目') {
              sourceDistributionRaw.set(name, val);
            }
          }
        });

        const sourceDistribution = Array.from(sourceDistributionRaw.entries()).map(([name, val]) => ({
          name: `${name} (${val})`,
          value: val,
          color: sourceColors[name] || defaultColors[colorIdx++ % defaultColors.length]
        }));

        const getSum = (days: number) => {
          return dailyRecords.slice(-days).reduce((sum, record) => sum + record.increase, 0);
        };

        const weeklyIncrease = getSum(7);
        const monthlyIncrease = getSum(30);

        const prev7Total = len > 7 ? dailyRecords[len - 8].total : dailyRecords[0].total;
        const prev30Total = len > 30 ? dailyRecords[len - 31].total : dailyRecords[0].total;

        const weeklyIncreaseRate = prev7Total === 0 ? 100 : Math.round((latest.total / prev7Total) * 100);
        const monthlyIncreaseRate = prev30Total === 0 ? 100 : Math.round((latest.total / prev30Total) * 100);

        // --- 1. 月単位の集計 ---
        const monthlyMap = new Map<string, { increase: number; total: number }>();
        dailyRecords.forEach(record => {
          const monthLabel = record.date.split('/')[0] + '月';
          if (!monthlyMap.has(monthLabel)) {
            monthlyMap.set(monthLabel, { increase: 0, total: 0 });
          }
          const current = monthlyMap.get(monthLabel)!;
          current.increase += record.increase;
          current.total = record.total; 
        });

        const monthlyTableRaw = Array.from(monthlyMap.entries()).map(([month, val]) => ({
          month,
          increase: val.increase,
          cumulative: val.total,
        }));

        const monthlyTable = monthlyTableRaw.map((item, idx) => {
          let rate = 100;
          if (idx > 0) {
            const prevCumulative = monthlyTableRaw[idx - 1].cumulative;
            rate = prevCumulative <= 0 ? 100 : Math.round((item.cumulative / prevCumulative) * 100);
          }
          return {
            month: item.month,
            increase: item.increase,
            rate: `${rate}%`,
            cumulative: item.cumulative
          };
        }).reverse(); 

        // --- 2. 週単位の集計ロジック（月曜スタート・日曜終わり） ---
        const weeklyMap = new Map<string, { increase: number; cumulative: number; startStr: string; endStr: string }>();
        const now = new Date();
        let currentYear = now.getFullYear();
        
        if (dailyRecords.length > 0) {
           const firstMonth = parseInt(dailyRecords[0].date.split('/')[0], 10);
           const currentMonth = now.getMonth() + 1;
           if (firstMonth > currentMonth + 1) currentYear--;
        }
        
        let prevMonth = -1;
        dailyRecords.forEach(record => {
           const [mStr, dStr] = record.date.split('/');
           const m = parseInt(mStr, 10);
           const d = parseInt(dStr, 10);
           
           if (prevMonth !== -1 && prevMonth === 12 && m === 1) currentYear++;
           prevMonth = m;
           
           const dateObj = new Date(currentYear, m - 1, d);
           const dayOfWeek = dateObj.getDay() === 0 ? 7 : dateObj.getDay(); 
           
           const endOfWeek = new Date(dateObj);
           endOfWeek.setDate(dateObj.getDate() + (7 - dayOfWeek));
           
           const startOfWeek = new Date(endOfWeek);
           startOfWeek.setDate(endOfWeek.getDate() - 6);

           const weekKey = `${endOfWeek.getFullYear()}-${endOfWeek.getMonth() + 1}-${endOfWeek.getDate()}`;
           
           if (!weeklyMap.has(weekKey)) {
              weeklyMap.set(weekKey, { 
                increase: 0, 
                cumulative: 0,
                startStr: `${startOfWeek.getMonth() + 1}/${startOfWeek.getDate()}`,
                endStr: `${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}`
              });
           }
           
           const weekData = weeklyMap.get(weekKey)!;
           weekData.increase += record.increase;
           weekData.cumulative = record.total; 
        });

        const weeklyTableRaw = Array.from(weeklyMap.values()).map(data => {
            const endMonth = parseInt(data.endStr.split('/')[0], 10);
            const endDay = parseInt(data.endStr.split('/')[1], 10);
            const weekNum = Math.ceil(endDay / 7);
            
            return {
               week: `${endMonth}月第${weekNum}週 (${data.startStr}-${data.endStr})`,
               shortWeek: `${endMonth}月第${weekNum}週`,
               increase: data.increase,
               cumulative: data.cumulative
            };
        });

        const weeklyTable = weeklyTableRaw.map((item, idx) => {
          let rate = 100;
          if (idx > 0) {
            const prevCumulative = weeklyTableRaw[idx - 1].cumulative;
            rate = prevCumulative <= 0 ? 100 : Math.round((item.cumulative / prevCumulative) * 100);
          }
          return {
            week: item.week,
            increase: item.increase,
            rate: `${rate}%`,
            cumulative: item.cumulative
          };
        }).reverse(); 

        const monthlyByTotal = [...monthlyTableRaw].slice(-4).map(item => ({
          name: item.month,
          増加数: item.increase
        }));

        const weeklyByTotal = [...weeklyTableRaw].slice(-4).map(item => ({
          name: item.shortWeek, 
          増加数: item.increase
        }));

        const formattedData = {
          summary: {
            totalMembers: latest.total,
            monthlyIncrease: monthlyIncrease,
            monthlyIncreaseRate: monthlyIncreaseRate,
            weeklyIncrease: weeklyIncrease,
            weeklyIncreaseRate: weeklyIncreaseRate,
            todayIncrease: latest.increase,
          },
          charts: {
            membersTrend: dailyRecords.map(record => ({
              name: record.date,
              累計人数: record.total
            })),
            monthlyByTotal,
            weeklyByTotal,
            sourceDistribution 
          },
          tables: {
            monthlyTable,
            weeklyTable
          }
        };

        setData(formattedData);
      })
      .catch(err => console.error('CSV Fetch Error:', err));
  }, []);

  if (!data) {
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <Users className="h-5 w-5" />
          <span>スプレッドシートからダッシュボードデータを生成中...</span>
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
        <h2 className="text-2xl font-bold text-foreground">Discord登録数</h2>
        <p className="text-muted-foreground mt-1">
          Cosmo Base全体の登録者数、増加推移、詳細な期間集計を確認できます。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <KpiCard title="全体の人数" value={summary.totalMembers.toLocaleString()} unit="人" icon={Users} accentColor="primary" />
        <KpiCard title="直近30日の増加" value={formatDiff(summary.monthlyIncrease)} unit="人" icon={TrendingUp} accentColor="success" />
        <KpiCard title="1カ月比" value={`${summary.monthlyIncreaseRate}`} unit="%" trendValue="前月比" trendType="up" icon={Calendar} accentColor="accent" />
        <KpiCard title="直近7日の増加" value={formatDiff(summary.weeklyIncrease)} unit="人" icon={CalendarDays} accentColor="primary" />
        <KpiCard title="週間比" value={summary.weeklyIncreaseRate} unit="%" trendValue="前週比" trendType="up" icon={TrendingUp} accentColor="success" />
        <KpiCard title="今日の増加数" value={formatDiff(summary.todayIncrease)} unit="人" icon={UserPlus} accentColor="warning" />
      </div>

      <SectionCard title="全体の人数推移">
        <ChartContainer height="h-[350px]">
          <LineChartComponent
            data={charts.membersTrend.slice(-90)}
            lines={[{ dataKey: '累計人数', name: '累計人数', color: '#38BDF8' }]}
          />
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月別増加人数" description="直近4か月の推移">
          <ChartContainer height="h-[300px]">
            <StackedBarChart
              data={charts.monthlyByTotal}
              bars={[{ dataKey: '増加数', name: '増加人数', color: '#38BDF8' }]}
            />
          </ChartContainer>
        </SectionCard>

        <SectionCard title="週別増加人数" description="直近4週の推移 (月〜日)">
          <ChartContainer height="h-[300px]">
            <StackedBarChart
              data={charts.weeklyByTotal}
              bars={[{ dataKey: '増加数', name: '増加人数', color: '#8B5CF6' }]}
            />
          </ChartContainer>
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月単位の増加人数">
          <ScrollableTable
            columns={[
              { key: 'month', label: '月', align: 'left' },
              { key: 'increase', label: '増加人数', align: 'right' },
              { key: 'rate', label: '前月比', align: 'right' },
              { key: 'cumulative', label: '累計人数', align: 'right' },
            ]}
            data={tables.monthlyTable.map((row: any) => ({
              ...row,
              increase: formatDiff(row.increase)
            }))}
          />
        </SectionCard>

        <SectionCard title="週単位の増加人数">
          <ScrollableTable
            columns={[
              { key: 'week', label: '週 (月〜日)', align: 'left' },
              { key: 'increase', label: '増加人数', align: 'right' },
              { key: 'rate', label: '前週比', align: 'right' },
              { key: 'cumulative', label: '累計人数', align: 'right' },
            ]}
            data={tables.weeklyTable.map((row: any) => ({
              ...row,
              increase: formatDiff(row.increase)
            }))}
          />
        </SectionCard>
      </div>

      <SectionCard title="流入元割合">
        <ChartContainer height="h-[350px]">
          {charts.sourceDistribution.length > 0 ? (
            <DonutChart data={charts.sourceDistribution} centerLabel="流入数" />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              データがありません
            </div>
          )}
        </ChartContainer>
      </SectionCard>
    </div>
  );
}