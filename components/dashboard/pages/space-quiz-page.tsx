'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Users, Calendar, TrendingUp, Clock, Target, ArrowUpDown, CalendarDays, Smartphone } from 'lucide-react';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { ScrollableTable } from '../scrollable-table';
import { LineChartComponent } from '../charts/line-chart';
import { DonutChart } from '../charts/donut-chart';
import { Button } from '@/components/ui/button';

const getJSTDate = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));

const formatDiff = (num: number) => {
  if (num > 0) return `+${num.toLocaleString()}`;
  if (num < 0) return num.toLocaleString(); 
  return '0';
};

export function SpaceQuizPage() {
  const [data, setData] = useState<any>(null);
  const [sortMode, setSortMode] = useState<'date' | 'asc' | 'desc'>('date');

  useEffect(() => {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSVq2TSYbOibnTUUyYqHJmrEfspQ1KQn8JpaTsvkrC8oekSogURY1N9yqocitnAbEXewzPIQVyj59rf/pub?gid=0&single=true&output=csv';

    fetch(csvUrl)
      .then(response => response.text())
      .then(csvText => {
        const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
        const rows = parsed.data as any[];

        if (rows.length === 0) return;
        const validRows = rows.filter(row => row['問題'] && String(row['問題']).trim() !== '');
        if (validRows.length === 0) return;

        let totalAnswers = 0;
        let totalCorrects = 0;
        let sumDiscord = 0, sumX = 0, sumInstagram = 0, sumMyCommu = 0;

        const tableDataRaw: any[] = [];
        const dailyAgg = new Map<string, any>();

        validRows.forEach((row) => {
          const dateStrRaw = String(row['出題日'] || '').replace(/\-/g, '/').split(' ')[0];
          const dateObj = new Date(dateStrRaw);
          dateObj.setHours(0, 0, 0, 0);
          const timestamp = dateObj.getTime();
          if (isNaN(timestamp)) return; 

          const dateKey = `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${String(dateObj.getDate()).padStart(2, '0')}`;
          const formattedDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;

          const answers = parseInt(String(row['回答数'] || '0').replace(/,/g, ''), 10) || 0;
          const ansDiscord = parseInt(String(row['回答数(Discord)'] || '0').replace(/,/g, ''), 10) || 0;
          const ansX = parseInt(String(row['回答数(X)'] || '0').replace(/,/g, ''), 10) || 0;
          const ansInsta = parseInt(String(row['回答数(Instagram)'] || '0').replace(/,/g, ''), 10) || 0;
          const ansMyCommu = parseInt(String(row['回答数(マイコミュ)'] || '0').replace(/,/g, ''), 10) || 0;

          sumDiscord += ansDiscord; sumX += ansX; sumInstagram += ansInsta; sumMyCommu += ansMyCommu;

          let accRaw = String(row['正答率'] || '0').replace('%', '').trim();
          let accNum = parseFloat(accRaw);
          if (String(row['正答率']).indexOf('%') === -1 && accNum > 0 && accNum <= 1) accNum *= 100;
          if (isNaN(accNum)) accNum = 0;

          const corDiscord = parseInt(String(row['正答数(Discord)'] || '0').replace(/,/g, ''), 10) || 0;
          const corX = parseInt(String(row['正答数(X)'] || '0').replace(/,/g, ''), 10) || 0;
          const corInsta = parseInt(String(row['正答数(Instagram)'] || '0').replace(/,/g, ''), 10) || 0;
          const corMyCommu = parseInt(String(row['正答数(マイコミュ)'] || '0').replace(/,/g, ''), 10) || 0;
          const correctSum = corDiscord + corX + corInsta + corMyCommu;
          const calculatedCorrect = correctSum > 0 ? correctSum : Math.round(answers * (accNum / 100));

          totalAnswers += answers;
          totalCorrects += calculatedCorrect;

          if (!dailyAgg.has(dateKey)) {
            dailyAgg.set(dateKey, { timestamp, formattedDate, answers: 0, corrects: 0 });
          }
          const dayData = dailyAgg.get(dateKey);
          dayData.answers += answers;
          dayData.corrects += calculatedCorrect;

          tableDataRaw.push({ id: row['番号'], question: String(row['問題']), answers: answers, correct: calculatedCorrect, accuracy: accNum, timestamp: timestamp });
        });

        const dailyRecords = Array.from(dailyAgg.values()).sort((a, b) => a.timestamp - b.timestamp);

        let cumulativeAnswers = 0;
        const trendData: any[] = [];
        const accuracyData: any[] = [];

        const now = getJSTDate();
        const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
        const currentDay = now.getDay() === 0 ? 7 : now.getDay();
        const startOfThisWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - currentDay + 1);
        startOfThisWeek.setHours(0, 0, 0, 0);
        const endOfPrevWeek = new Date(startOfThisWeek.getTime() - 1);
        const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        let thisMonthAnswers = 0;
        let thisWeekAnswers = 0;
        let endOfPrevMonthCum = 0;
        let endOfPrevWeekCum = 0;
        let todayAnswers = 0;

        dailyRecords.forEach(day => {
          cumulativeAnswers += day.answers;
          trendData.push({ name: day.formattedDate, 参加者数: cumulativeAnswers });
          accuracyData.push({ name: day.formattedDate, 正答率: day.answers > 0 ? Math.round((day.corrects / day.answers) * 1000) / 10 : 0 });

          const t = day.timestamp;
          if (t >= startOfThisMonth.getTime()) thisMonthAnswers += day.answers;
          if (t <= endOfPrevMonth.getTime()) endOfPrevMonthCum = cumulativeAnswers;
          if (t >= startOfThisWeek.getTime()) thisWeekAnswers += day.answers;
          if (t <= endOfPrevWeek.getTime()) endOfPrevWeekCum = cumulativeAnswers;
          if (t >= startOfToday.getTime()) todayAnswers += day.answers;
        });

        const monthlyRate = endOfPrevMonthCum === 0 ? 100 : Math.round((cumulativeAnswers / endOfPrevMonthCum) * 100);
        const weeklyRate = endOfPrevWeekCum === 0 ? 100 : Math.round((cumulativeAnswers / endOfPrevWeekCum) * 100);
        const averageAccuracy = totalAnswers <= 0 ? 0 : Math.round((totalCorrects / totalAnswers) * 100);

        const platformDistribution = [
          { name: 'Discord', value: sumDiscord, color: '#5865F2' }, { name: 'X', value: sumX, color: '#1DA1F2' },
          { name: 'Instagram', value: sumInstagram, color: '#E4405F' }, { name: 'マイコミュ', value: sumMyCommu, color: '#F59E0B' },
        ].filter(item => item.value > 0).sort((a, b) => b.value - a.value);

        setData({
          summary: {
            totalParticipants: totalAnswers,
            monthlyParticipants: thisMonthAnswers, monthlyParticipantsRate: monthlyRate,
            weeklyParticipants: thisWeekAnswers, weeklyParticipantsRate: weeklyRate,
            todayParticipants: todayAnswers,
            averageAccuracy: averageAccuracy,
          },
          charts: { participantsTrend: trendData, accuracyTrend: accuracyData, platformDistribution },
          tables: { questionRanking: tableDataRaw }
        });
      })
      .catch(err => console.error('CSV Fetch Error:', err));
  }, []);

  if (!data) return (<div className="flex h-[400px] items-center justify-center text-muted-foreground"><div className="animate-pulse flex items-center gap-2"><Target className="h-5 w-5" /><span>クイズデータを集計中...</span></div></div>);

  const { summary, charts, tables } = data;

  const sortedQuestions = [...tables.questionRanking].sort((a, b) => {
    if (sortMode === 'asc') return a.accuracy - b.accuracy;
    if (sortMode === 'desc') return b.accuracy - a.accuracy;
    return b.timestamp - a.timestamp; 
  });

  const handleSortChange = () => {
    if (sortMode === 'date') setSortMode('asc');
    else if (sortMode === 'asc') setSortMode('desc');
    else setSortMode('date');
  };

  const getSortLabel = () => {
    if (sortMode === 'asc') return '正答率が低い順';
    if (sortMode === 'desc') return '正答率が高い順';
    return '出題日が新しい順';
  };

  return (
    <div className="space-y-6">
      <div className="mb-6"><h2 className="text-2xl font-bold text-foreground">宇宙クイズ分析</h2><p className="text-muted-foreground mt-1">宇宙クイズの参加状況、正答率、プラットフォーム別の回答傾向を確認できます。</p></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="総参加者数 (累計)" value={summary.totalParticipants.toLocaleString()} unit="人" icon={Users} accentColor="primary" />
        <KpiCard title="今月の参加者数" value={`+${summary.monthlyParticipants.toLocaleString()}`} unit="人" icon={Calendar} accentColor="accent" />
        <KpiCard title="参加者数の先月末比" value={summary.monthlyParticipantsRate} unit="%" icon={TrendingUp} accentColor="success" trendValue={`先月末比`} trendType="up" />
        <KpiCard title="平均正答率" value={summary.averageAccuracy} unit="%" icon={Target} accentColor="primary" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <KpiCard title="今週の参加者数" value={`+${summary.weeklyParticipants.toLocaleString()}`} unit="人" icon={CalendarDays} accentColor="primary" />
        <KpiCard title="参加者数の先週末比" value={summary.weeklyParticipantsRate} unit="%" icon={TrendingUp} accentColor="success" trendValue={`先週末比`} trendType="up" />
        <KpiCard title="今日の参加者数" value={`+${summary.todayParticipants.toLocaleString()}`} unit="人" icon={Clock} accentColor="warning" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="宇宙クイズ 累計参加者数推移"><ChartContainer height="h-[350px]"><LineChartComponent data={charts.participantsTrend.slice(-90)} lines={[{ dataKey: '参加者数', name: '累計参加者数', color: '#38BDF8' }]} /></ChartContainer></SectionCard>
        <SectionCard title="プラットフォーム別 回答割合"><ChartContainer height="h-[350px]">{charts.platformDistribution.length > 0 ? (<DonutChart data={charts.platformDistribution} centerLabel="回答" />) : (<div className="flex h-full items-center justify-center text-muted-foreground">プラットフォームデータがありません</div>)}</ChartContainer></SectionCard>
      </div>

      <SectionCard title="宇宙クイズ 日別 平均正答率推移"><ChartContainer height="h-[300px]"><LineChartComponent data={charts.accuracyTrend.slice(-90)} lines={[{ dataKey: '正答率', name: '平均正答率', color: '#8B5CF6' }]} yAxisUnit="%" /></ChartContainer></SectionCard>

      <SectionCard title="問題別 正答率ランキング" description="各問題の回答数と正答率（ヘッダーのボタンで並び替え可能）">
        <div className="flex justify-end mb-4"><Button variant="outline" size="sm" onClick={handleSortChange} className="gap-2 bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-[160px]"><ArrowUpDown className="h-4 w-4" />{getSortLabel()}</Button></div>
        <ScrollableTable columns={[{ key: 'rank', label: '順位', align: 'center' }, { key: 'question', label: '問題名', align: 'left' }, { key: 'answers', label: '回答数', align: 'right' }, { key: 'correct', label: '正解数', align: 'right' }, { key: 'accuracyStr', label: '正答率', align: 'right' }]} data={sortedQuestions.map((q, i) => ({ ...q, rank: sortMode === 'date' ? '-' : i + 1, answers: q.answers.toLocaleString(), correct: q.correct.toLocaleString(), accuracyStr: `${Math.round(q.accuracy * 10) / 10}%` }))} />
      </SectionCard>
    </div>
  );
}
