'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Users, TrendingUp, Calendar, CalendarDays, Clock, UserPlus, ArrowUpRight } from 'lucide-react';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { ScrollableTable } from '../scrollable-table';
import { LineChartComponent } from '../charts/line-chart';
import { LinearChartComponent } from '../charts/linear-chart';
import { StackedBarChart } from '../charts/stacked-bar-chart';
import { DonutChart } from '../charts/donut-chart';
import { Button } from '@/components/ui/button';

const getJSTDate = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));

const formatDiff = (num: number) => {
  if (num > 0) return `+${num.toLocaleString()}`;
  if (num < 0) return num.toLocaleString();
  return '0';
};

export function CommunityPage() {
  const [data, setData] = useState<any>(null);
  const [showSns, setShowSns] = useState(false);

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
        let xIdx = headers.indexOf('X');
        if (xIdx === -1) xIdx = headers.indexOf('x');
        const instaIdx = headers.indexOf('Instagram');
        const noteIdx = headers.indexOf('note');

        const dailyRecords = rawData.slice(headerRowIndex + 1)
          .map(row => {
            const snsTotal = (Number(row[xIdx]) || 0) + (Number(row[instaIdx]) || 0) + (Number(row[noteIdx]) || 0);
            return {
              date: `${row[monthIdx]}/${row[dayIdx]}`,
              increase: Number(row[increaseIdx]) || 0,
              total: Number(row[totalIdx]) || 0,
              snsTotal: snsTotal
            };
          })
          .filter(record => record.total > 0);

        if (dailyRecords.length === 0) return;
        const latest = dailyRecords[dailyRecords.length - 1];

        const sourceColors: Record<string, string> = {
          '個別招待': '#38BDF8', 'HP': '#8B5CF6', 'X': '#1DA1F2', 'Instagram': '#E4405F',
          'note': '#41C9B4', 'YouTube': '#FF0000', 'ピーテックス(外部のイベント掲載)': '#F59E0B',
          'パートナー団体': '#22C55E', 'チラシ': '#EC4899',
        };
        const defaultColors = ['#38BDF8', '#8B5CF6', '#22C55E', '#F59E0B', '#EF4444', '#06B6D4'];
        let colorIdx = 0;

        const sourceDistributionRaw = new Map<string, number>();
        Object.keys(sourceColors).forEach(key => sourceDistributionRaw.set(key, 0));

        rawData.forEach(row => {
          if (row.length > 19 && row[18] !== undefined && row[19] !== undefined) {
            const name = String(row[18]).trim();
            const valStr = String(row[19]).replace(/,/g, '').trim();
            const val = parseInt(valStr, 10);
            if (name && !isNaN(val) && name !== '流入元' && name !== '項目') sourceDistributionRaw.set(name, val);
          }
        });

        const sourceDistribution = Array.from(sourceDistributionRaw.entries()).map(([name, val]) => ({
          name: `${name} (${val})`, value: val, color: sourceColors[name] || defaultColors[colorIdx++ % defaultColors.length]
        }));

        const nowJst = getJSTDate();
        const currentY = nowJst.getFullYear();
        const currentM = nowJst.getMonth() + 1;
        const currentD = nowJst.getDate();
        const todayNum = currentY * 10000 + currentM * 100 + currentD;
        const startOfThisMonthNum = currentY * 10000 + currentM * 100 + 1;

        const endOfPrevMonthJst = new Date(nowJst.getTime());
        endOfPrevMonthJst.setDate(0);
        const endOfPrevMonthNum = endOfPrevMonthJst.getFullYear() * 10000 + (endOfPrevMonthJst.getMonth() + 1) * 100 + endOfPrevMonthJst.getDate();

        const dayOfWeek = nowJst.getDay() === 0 ? 7 : nowJst.getDay();
        const startOfWeekJst = new Date(nowJst.getTime());
        startOfWeekJst.setDate(nowJst.getDate() - dayOfWeek + 1);
        const startOfWeekNum = startOfWeekJst.getFullYear() * 10000 + (startOfWeekJst.getMonth() + 1) * 100 + startOfWeekJst.getDate();

        const endOfPrevWeekJst = new Date(startOfWeekJst.getTime());
        endOfPrevWeekJst.setDate(startOfWeekJst.getDate() - 1);
        const endOfPrevWeekNum = endOfPrevWeekJst.getFullYear() * 10000 + (endOfPrevWeekJst.getMonth() + 1) * 100 + endOfPrevWeekJst.getDate();

        let currentYearForDate = currentY;
        if (dailyRecords.length > 0) {
          const firstMonth = parseInt(dailyRecords[0].date.split('/')[0], 10);
          if (firstMonth > currentM + 1) currentYearForDate--;
        }

        let prevMonthForDate = -1;
        const recordsWithDateNum = dailyRecords.map(record => {
          const [mStr, dStr] = record.date.split('/');
          const m = parseInt(mStr, 10);
          const d = parseInt(dStr, 10);
          if (prevMonthForDate !== -1 && prevMonthForDate === 12 && m === 1) currentYearForDate++;
          prevMonthForDate = m;
          const recordNum = currentYearForDate * 10000 + m * 100 + d;
          return { ...record, recordNum };
        });

        let thisMonthIncrease = 0, thisWeekIncrease = 0, todayIncrease = 0;
        let endOfPrevMonthTotal = recordsWithDateNum[0]?.total || 0;
        let endOfPrevWeekTotal = recordsWithDateNum[0]?.total || 0;

        recordsWithDateNum.forEach(r => {
          if (r.recordNum >= startOfThisMonthNum) thisMonthIncrease += r.increase;
          if (r.recordNum <= endOfPrevMonthNum) endOfPrevMonthTotal = r.total;
          if (r.recordNum >= startOfWeekNum) thisWeekIncrease += r.increase;
          if (r.recordNum <= endOfPrevWeekNum) endOfPrevWeekTotal = r.total;
          if (r.recordNum === todayNum) todayIncrease += r.increase;
        });

        const monthlyIncreaseRate = endOfPrevMonthTotal === 0 ? 100 : Math.round((latest.total / endOfPrevMonthTotal) * 100);
        const weeklyIncreaseRate = endOfPrevWeekTotal === 0 ? 100 : Math.round((latest.total / endOfPrevWeekTotal) * 100);

        const monthlyMap = new Map<string, { increase: number; total: number }>();
        dailyRecords.forEach(record => {
          const monthLabel = record.date.split('/')[0] + '月';
          if (!monthlyMap.has(monthLabel)) monthlyMap.set(monthLabel, { increase: 0, total: 0 });
          const current = monthlyMap.get(monthLabel)!;
          current.increase += record.increase; current.total = record.total;
        });

        const monthlyTableRaw = Array.from(monthlyMap.entries()).map(([month, val]) => ({ month, increase: val.increase, cumulative: val.total }));
        const monthlyTable = monthlyTableRaw.map((item, idx) => {
          let rate = 100;
          if (idx > 0) {
            const prevIncrease = monthlyTableRaw[idx - 1].increase;
            rate = prevIncrease <= 0 ? 100 : Math.round((item.increase / prevIncrease) * 100);
          }
          return { month: item.month, increase: item.increase, rateRaw: rate, rate: `${rate}%`, cumulative: item.cumulative };
        });

        const weeklyMap = new Map<string, { increase: number; cumulative: number; startStr: string; endStr: string }>();
        let currentYear = nowJst.getFullYear();
        if (dailyRecords.length > 0 && parseInt(dailyRecords[0].date.split('/')[0], 10) > nowJst.getMonth() + 2) currentYear--;

        let prevMonth = -1;
        dailyRecords.forEach(record => {
          const [mStr, dStr] = record.date.split('/');
          const m = parseInt(mStr, 10);
          const d = parseInt(dStr, 10);
          if (prevMonth !== -1 && prevMonth === 12 && m === 1) currentYear++;
          prevMonth = m;

          const dateObj = new Date(currentYear, m - 1, d);
          const dayOfWeek = dateObj.getDay() === 0 ? 7 : dateObj.getDay();
          const endOfWeek = new Date(dateObj.getTime()); endOfWeek.setDate(dateObj.getDate() + (7 - dayOfWeek));
          const startOfWeek = new Date(endOfWeek.getTime()); startOfWeek.setDate(endOfWeek.getDate() - 6);
          const weekKey = `${endOfWeek.getFullYear()}-${endOfWeek.getMonth() + 1}-${endOfWeek.getDate()}`;

          if (!weeklyMap.has(weekKey)) {
            weeklyMap.set(weekKey, { increase: 0, cumulative: 0, startStr: `${startOfWeek.getMonth() + 1}/${startOfWeek.getDate()}`, endStr: `${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}` });
          }
          const weekData = weeklyMap.get(weekKey)!;
          weekData.increase += record.increase; weekData.cumulative = record.total;
        });

        const weeklyTableRaw = Array.from(weeklyMap.values()).map(data => {
          const endMonth = parseInt(data.endStr.split('/')[0], 10);
          const endDay = parseInt(data.endStr.split('/')[1], 10);
          const weekNum = Math.ceil(endDay / 7);
          return { week: `${endMonth}月第${weekNum}週 (${data.startStr}-${data.endStr})`, shortWeek: `${endMonth}月第${weekNum}週`, increase: data.increase, cumulative: data.cumulative };
        });

        const weeklyTable = weeklyTableRaw.map((item, idx) => {
          let rate = 100;
          if (idx > 0) {
            const prevIncrease = weeklyTableRaw[idx - 1].increase;
            rate = prevIncrease <= 0 ? 100 : Math.round((item.increase / prevIncrease) * 100);
          }
          return { week: item.week, shortWeek: item.shortWeek, increase: item.increase, rateRaw: rate, rate: `${rate}%`, cumulative: item.cumulative };
        });

        const monthlyByTotal = [...monthlyTableRaw].slice(-4).map(item => ({ name: item.month, 増加数: item.increase }));
        const weeklyByTotal = [...weeklyTableRaw].slice(-4).map(item => ({ name: item.shortWeek, 増加数: item.increase }));

        const monthlyRateTrend = monthlyTable.map(item => ({ name: item.month, 先月比: item.rateRaw }));
        const weeklyRateTrend = weeklyTable.map(item => ({ name: item.shortWeek, 先週比: item.rateRaw }));

        setData({
          summary: {
            totalMembers: latest.total,
            thisMonthIncrease: thisMonthIncrease, monthlyIncreaseRate: monthlyIncreaseRate,
            thisWeekIncrease: thisWeekIncrease, weeklyIncreaseRate: weeklyIncreaseRate,
            todayIncrease: todayIncrease,
          },
          charts: {
            membersTrend: dailyRecords.map(record => ({
              name: record.date,
              累計人数: record.total,
              SNS総フォロワー数: record.snsTotal > 0 ? record.snsTotal : undefined
            })),
            monthlyByTotal, weeklyByTotal, sourceDistribution,
            monthlyRateTrend, weeklyRateTrend
          },
          tables: {
            monthlyTable: [...monthlyTable].reverse(),
            weeklyTable: [...weeklyTable].reverse()
          }
        });
      })
      .catch(err => console.error('CSV Fetch Error:', err));
  }, []);

  if (!data) return (<div className="flex h-[400px] items-center justify-center text-muted-foreground"><div className="animate-pulse flex items-center gap-2"><Users className="h-5 w-5" /><span>スプレッドシートからダッシュボードデータを生成中...</span></div></div>);

  const { summary, charts, tables } = data;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
        <div><h2 className="text-2xl font-bold text-foreground">Discord登録数</h2><p className="text-muted-foreground mt-1">Cosmo Base全体の登録者数、増加推移、詳細な期間集計を確認できます。</p></div>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
        >
          <a
            href="https://docs.google.com/spreadsheets/d/1DVcnAj75n_Hokt74Q-SX_FI_J5PSbJiOzhvwJfHggFM/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>元データ (スプシ)</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        <KpiCard title="全体の人数" value={summary.totalMembers.toLocaleString()} unit="人" icon={Users} accentColor="primary" />
        <KpiCard title="今月の増加数" value={formatDiff(summary.thisMonthIncrease)} unit="人" icon={TrendingUp} accentColor="success" />
        <KpiCard title="1カ月比" value={`${summary.monthlyIncreaseRate}`} unit="%" trendValue="先月末比" trendType="up" icon={Calendar} accentColor="accent" />
        <KpiCard title="今週の増加数" value={formatDiff(summary.thisWeekIncrease)} unit="人" icon={CalendarDays} accentColor="primary" />
        <KpiCard title="週間比" value={summary.weeklyIncreaseRate} unit="%" trendValue="先週末比" trendType="up" icon={TrendingUp} accentColor="success" />
        <KpiCard title="今日の増加数" value={formatDiff(summary.todayIncrease)} unit="人" icon={UserPlus} accentColor="warning" />
      </div>

      <SectionCard title="全体の人数推移" description="Discord参加人数とSNSフォロワー数の比較">
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSns(!showSns)}
            className={showSns ? 'bg-primary text-primary-foreground border-transparent' : 'bg-secondary/30 text-foreground'}
          >
            {showSns ? 'SNSフォロワー数を隠す' : 'SNSフォロワー数を重ねて比較'}
          </Button>
        </div>
        <ChartContainer height="h-[350px]">
          <LineChartComponent
            data={charts.membersTrend.slice(-90)}
            lines={[
              { dataKey: '累計人数', name: 'Discord累計人数', color: '#38BDF8' },
              ...(showSns ? [{ dataKey: 'SNS総フォロワー数', name: 'SNS総フォロワー数', color: '#F59E0B' }] : [])
            ]}
          />
        </ChartContainer>
      </SectionCard>

      {/* ★ 追加：比率の折れ線グラフセクション */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月間 登録数 先月比の推移" description="前月の増加人数に対するパーセンテージ">
          <ChartContainer height="h-[300px]">
            <LinearChartComponent
              data={charts.monthlyRateTrend.slice(-12)}
              lines={[{ dataKey: '先月比', name: '先月比', color: '#10B981' }]}
              yAxisUnit="%"
            />
          </ChartContainer>
        </SectionCard>
        <SectionCard title="週間 登録数 先週比の推移" description="前週の増加人数に対するパーセンテージ">
          <ChartContainer height="h-[300px]">
            <LinearChartComponent
              data={charts.weeklyRateTrend.slice(-12)}
              lines={[{ dataKey: '先週比', name: '先週比', color: '#F59E0B' }]}
              yAxisUnit="%"
            />
          </ChartContainer>
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月別増加人数" description="直近4か月の推移"><ChartContainer height="h-[300px]"><StackedBarChart data={charts.monthlyByTotal} bars={[{ dataKey: '増加数', name: '増加人数', color: '#38BDF8' }]} /></ChartContainer></SectionCard>
        <SectionCard title="週別増加人数" description="直近4週の推移 (月〜日)"><ChartContainer height="h-[300px]"><StackedBarChart data={charts.weeklyByTotal} bars={[{ dataKey: '増加数', name: '増加人数', color: '#8B5CF6' }]} /></ChartContainer></SectionCard>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月単位の増加人数"><ScrollableTable columns={[{ key: 'month', label: '月', align: 'left' }, { key: 'increase', label: '増加人数', align: 'right' }, { key: 'rate', label: '前月比', align: 'right' }, { key: 'cumulative', label: '累計人数', align: 'right' }]} data={tables.monthlyTable.map((row: any) => ({ ...row, increase: formatDiff(row.increase) }))} /></SectionCard>
        <SectionCard title="週単位の増加人数"><ScrollableTable columns={[{ key: 'week', label: '週 (月〜日)', align: 'left' }, { key: 'increase', label: '増加人数', align: 'right' }, { key: 'rate', label: '前週比', align: 'right' }, { key: 'cumulative', label: '累計人数', align: 'right' }]} data={tables.weeklyTable.map((row: any) => ({ ...row, increase: formatDiff(row.increase) }))} /></SectionCard>
      </div>
      <SectionCard title="流入元割合"><ChartContainer height="h-[350px]">{charts.sourceDistribution.length > 0 ? (<DonutChart data={charts.sourceDistribution} centerLabel="流入数" />) : (<div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>)}</ChartContainer></SectionCard>
    </div>
  );
}