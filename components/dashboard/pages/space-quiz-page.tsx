'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Users, Calendar, TrendingUp, Clock, Target, ArrowUpDown, CalendarDays, AlertTriangle, HelpCircle } from 'lucide-react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, ZAxis } from 'recharts';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { ScrollableTable } from '../scrollable-table';
import { LineChartComponent } from '../charts/line-chart';
import { DonutChart } from '../charts/donut-chart';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const getJSTDate = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));

const formatDiff = (num: number) => {
  if (num > 0) return `+${num.toLocaleString()}`;
  if (num < 0) return num.toLocaleString(); 
  return '0';
};

type SortMode = 'date_desc' | 'answers_desc' | 'accuracy_desc' | 'accuracy_asc';

// 散布図用のカスタムツールチップ
const ScatterTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900 border border-white/10 p-3 rounded-xl shadow-xl z-50">
        <p className="text-white font-bold text-sm mb-1">{data.question}</p>
        <p className="text-[#38BDF8] text-xs">回答数: {data.answers}件</p>
        <p className="text-[#8B5CF6] text-xs">正答率: {data.accuracy}%</p>
      </div>
    );
  }
  return null;
};

export function SpaceQuizPage() {
  const [data, setData] = useState<any>(null);
  const [sortMode, setSortMode] = useState<SortMode>('date_desc');

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

        let totalAnswers = 0, totalCorrects = 0;
        let sumDiscord = 0, sumX = 0, sumInstagram = 0, sumMyCommu = 0;

        const tableDataRaw: any[] = [];
        const dailyAgg = new Map<string, any>();
        const typeCounts = new Map<string, number>();

        const nowJst = getJSTDate();
        const currentY = nowJst.getFullYear();
        const currentM = nowJst.getMonth() + 1;
        const currentD = nowJst.getDate();
        const todayNum = currentY * 10000 + currentM * 100 + currentD;
        
        let recent7Questions = 0, recent7ZeroAnswers = 0;
        let recent30Questions = 0, recent30ZeroAnswers = 0;

        validRows.forEach((row) => {
          const dateStrRaw = String(row['出題日'] || '').replace(/\-/g, '/').split(' ')[0];
          const parts = dateStrRaw.split('/');
          if (parts.length < 3) return;

          const y = parseInt(parts[0], 10);
          const m = parseInt(parts[1], 10);
          const d = parseInt(parts[2], 10);
          const num = y * 10000 + m * 100 + d;
          
          const dateKey = `${y}/${String(m).padStart(2, '0')}/${String(d).padStart(2, '0')}`;
          const formattedDate = `${m}/${d}`;

          // --- 種別の集計 ---
          const typeStr = String(row['種別'] || row['カテゴリ'] || '未分類').trim();
          if (typeStr) {
            typeCounts.set(typeStr, (typeCounts.get(typeStr) || 0) + 1);
          }

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
            dailyAgg.set(dateKey, { num, formattedDate, answers: 0, corrects: 0 });
          }
          const dayData = dailyAgg.get(dateKey);
          dayData.answers += answers;
          dayData.corrects += calculatedCorrect;

          const qObj = { id: row['番号'], question: String(row['問題']), type: typeStr, answers: answers, correct: calculatedCorrect, accuracy: Math.round(accNum * 10) / 10, num: num, timestamp: new Date(dateStrRaw).getTime() };
          tableDataRaw.push(qObj);

          // --- 回答0件の割合集計 (過去出題分のみ) ---
          const diffDays = Math.floor((nowJst.getTime() - qObj.timestamp) / (1000 * 60 * 60 * 24));
          if (diffDays >= 0 && diffDays <= 7) {
            recent7Questions++;
            if (answers === 0) recent7ZeroAnswers++;
          }
          if (diffDays >= 0 && diffDays <= 30) {
            recent30Questions++;
            if (answers === 0) recent30ZeroAnswers++;
          }
        });

        // 0件割合の計算
        const zeroRate7 = recent7Questions > 0 ? Math.round((recent7ZeroAnswers / recent7Questions) * 100) : 0;
        const zeroRate30 = recent30Questions > 0 ? Math.round((recent30ZeroAnswers / recent30Questions) * 100) : 0;

        const dailyRecords = Array.from(dailyAgg.values()).sort((a, b) => a.num - b.num);
        let cumulativeAnswers = 0;
        const trendData: any[] = [];
        const accuracyData: any[] = [];

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

        let thisMonthAnswers = 0, thisWeekAnswers = 0, todayAnswers = 0;
        let endOfPrevMonthCum = 0, endOfPrevWeekCum = 0;

        dailyRecords.forEach(day => {
          cumulativeAnswers += day.answers;
          trendData.push({ name: day.formattedDate, 参加者数: cumulativeAnswers });
          accuracyData.push({ name: day.formattedDate, 正答率: day.answers > 0 ? Math.round((day.corrects / day.answers) * 10) / 10 : 0 });

          const num = day.num;
          if (num >= startOfThisMonthNum) thisMonthAnswers += day.answers;
          if (num <= endOfPrevMonthNum) endOfPrevMonthCum = cumulativeAnswers;
          if (num >= startOfWeekNum) thisWeekAnswers += day.answers;
          if (num <= endOfPrevWeekNum) endOfPrevWeekCum = cumulativeAnswers;
          if (num === todayNum) todayAnswers += day.answers;
        });

        const monthlyRate = endOfPrevMonthCum === 0 ? 100 : Math.round((cumulativeAnswers / endOfPrevMonthCum) * 100);
        const weeklyRate = endOfPrevWeekCum === 0 ? 100 : Math.round((cumulativeAnswers / endOfPrevWeekCum) * 100);
        const averageAccuracy = totalAnswers <= 0 ? 0 : Math.round((totalCorrects / totalAnswers) * 100);

        const typeColors = ['#38BDF8', '#8B5CF6', '#22C55E', '#F59E0B', '#EF4444', '#EC4899', '#10B981', '#6B7280'];
        const typeDistribution = Array.from(typeCounts.entries())
          .filter(([name]) => name !== '未分類')
          .sort((a, b) => b[1] - a[1])
          .map(([name, value], i) => ({ name, value, color: typeColors[i % typeColors.length] }));

        const platformDistribution = [
          { name: 'Discord', value: sumDiscord, color: '#5865F2' }, { name: 'X', value: sumX, color: '#1DA1F2' },
          { name: 'Instagram', value: sumInstagram, color: '#E4405F' }, { name: 'マイコミュ', value: sumMyCommu, color: '#F59E0B' },
        ].filter(item => item.value > 0).sort((a, b) => b.value - a.value);

        // --- 難易度別集計 (回答5件超のみ対象) ---
        const difficultyGroups = [
          { range: '0-20%', min: 0, max: 20, count: 0, totalAns: 0, totalAcc: 0 },
          { range: '21-40%', min: 21, max: 40, count: 0, totalAns: 0, totalAcc: 0 },
          { range: '41-60%', min: 41, max: 60, count: 0, totalAns: 0, totalAcc: 0 },
          { range: '61-80%', min: 61, max: 80, count: 0, totalAns: 0, totalAcc: 0 },
          { range: '81-100%', min: 81, max: 100, count: 0, totalAns: 0, totalAcc: 0 },
        ];

        tableDataRaw.filter(q => q.answers > 5).forEach(q => {
          const group = difficultyGroups.find(g => q.accuracy >= g.min && q.accuracy <= g.max);
          if (group) {
            group.count++;
            group.totalAns += q.answers;
            group.totalAcc += q.accuracy;
          }
        });

        const difficultyTable = difficultyGroups.map(g => ({
          range: g.range,
          count: g.count,
          avgAnswers: g.count > 0 ? Math.round(g.totalAns / g.count) : 0,
          avgAccuracy: g.count > 0 ? `${Math.round(g.totalAcc / g.count)}%` : '-'
        }));

        // --- 要注意問題の抽出 (平均回答数以上 ＆ 正答率50%以下) ---
        const avgAnswersOverall = tableDataRaw.length > 0 ? totalAnswers / tableDataRaw.length : 0;
        const attentionQuestions = tableDataRaw
          .filter(q => q.answers >= avgAnswersOverall && q.accuracy <= 50 && q.answers > 0)
          .sort((a, b) => b.answers - a.answers); // 回答数が多い順にソート

        setData({
          summary: {
            totalParticipants: totalAnswers,
            monthlyParticipants: thisMonthAnswers, monthlyParticipantsRate: monthlyRate,
            weeklyParticipants: thisWeekAnswers, weeklyParticipantsRate: weeklyRate,
            todayParticipants: todayAnswers, averageAccuracy: averageAccuracy,
            zeroRate7, zeroRate30, recent7Questions, recent30Questions
          },
          charts: { participantsTrend: trendData, accuracyTrend: accuracyData, platformDistribution, typeDistribution, scatterData: tableDataRaw.filter(q => q.answers > 0) },
          tables: { questionRanking: tableDataRaw, difficultyTable, attentionQuestions }
        });
      })
      .catch(err => console.error('CSV Fetch Error:', err));
  }, []);

  if (!data) return (<div className="flex h-[400px] items-center justify-center text-muted-foreground"><div className="animate-pulse flex items-center gap-2"><Target className="h-5 w-5" /><span>クイズデータを集計中...</span></div></div>);

  const { summary, charts, tables } = data;

  const sortedQuestions = [...tables.questionRanking].sort((a, b) => {
    if (sortMode === 'accuracy_desc') return b.accuracy - a.accuracy; 
    if (sortMode === 'accuracy_asc') return a.accuracy - b.accuracy;  
    if (sortMode === 'answers_desc') return b.answers - a.answers;    
    return b.num - a.num; 
  });

  return (
    <div className="space-y-6">
      <div className="mb-6"><h2 className="text-2xl font-bold text-foreground">宇宙クイズ分析</h2><p className="text-muted-foreground mt-1">宇宙クイズの参加状況、正答率、プラットフォーム別の回答傾向を確認できます。</p></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="総参加者数 (累計)" value={summary.totalParticipants.toLocaleString()} unit="人" icon={Users} accentColor="primary" />
        <KpiCard title="今月の参加者数" value={`+${summary.monthlyParticipants.toLocaleString()}`} unit="人" icon={Calendar} accentColor="accent" />
        <KpiCard title="参加者数の先月末比" value={summary.monthlyParticipantsRate} unit="%" icon={TrendingUp} accentColor="success" trendValue={`先月末比`} trendType="up" />
        <KpiCard title="平均正答率" value={summary.averageAccuracy} unit="%" icon={Target} accentColor="primary" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="今週の参加者数" value={`+${summary.weeklyParticipants.toLocaleString()}`} unit="人" icon={CalendarDays} accentColor="primary" />
        <KpiCard title="今日の参加者数" value={`+${summary.todayParticipants.toLocaleString()}`} unit="人" icon={Clock} accentColor="warning" />
        <KpiCard title="直近7日の回答0件割合" value={summary.zeroRate7} unit="%" icon={HelpCircle} accentColor="danger" description={`出題${summary.recent7Questions}件中`} />
        <KpiCard title="直近30日の回答0件割合" value={summary.zeroRate30} unit="%" icon={HelpCircle} accentColor="danger" description={`出題${summary.recent30Questions}件中`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="宇宙クイズ 累計参加者数推移"><ChartContainer height="h-[350px]"><LineChartComponent data={charts.participantsTrend.slice(-90)} lines={[{ dataKey: '参加者数', name: '累計参加者数', color: '#38BDF8' }]} /></ChartContainer></SectionCard>
        <SectionCard title="日別 平均正答率推移"><ChartContainer height="h-[350px]"><LineChartComponent data={charts.accuracyTrend.slice(-90)} lines={[{ dataKey: '正答率', name: '平均正答率', color: '#8B5CF6' }]} yAxisUnit="%" /></ChartContainer></SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="クイズ種別 割合" description="検定に向けた問題カテゴリの分布"><ChartContainer height="h-[300px]">{charts.typeDistribution.length > 0 ? (<DonutChart data={charts.typeDistribution} centerLabel="問題数" />) : (<div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>)}</ChartContainer></SectionCard>
        <SectionCard title="プラットフォーム別 回答割合" description="各SNS・コミュニティからの回答比率"><ChartContainer height="h-[300px]">{charts.platformDistribution.length > 0 ? (<DonutChart data={charts.platformDistribution} centerLabel="回答" />) : (<div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>)}</ChartContainer></SectionCard>
      </div>

      <SectionCard title="回答人数と正答率の分布図" description="右に行くほど回答数が多く、上に行くほど正答率が高い問題です">
        <ChartContainer height="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis type="number" dataKey="answers" name="回答数" stroke="#888" tick={{ fill: '#888' }} label={{ value: '回答数', position: 'insideBottomRight', offset: -10, fill: '#888' }} />
              <YAxis type="number" dataKey="accuracy" name="正答率" unit="%" stroke="#888" tick={{ fill: '#888' }} domain={[0, 100]} label={{ value: '正答率(%)', angle: -90, position: 'insideLeft', fill: '#888' }} />
              <ZAxis type="number" range={[60, 60]} />
              <RechartsTooltip cursor={{ strokeDasharray: '3 3' }} content={<ScatterTooltip />} />
              <Scatter name="問題" data={charts.scatterData} fill="#38BDF8" opacity={0.6} />
            </ScatterChart>
          </ResponsiveContainer>
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="難易度別 分析" description="正答率20%ごとの集計（※回答5件以下の問題は除外）">
          <ScrollableTable columns={[{ key: 'range', label: '正答率の帯', align: 'left' }, { key: 'count', label: '問題数', align: 'right' }, { key: 'avgAnswers', label: '平均回答数', align: 'right' }, { key: 'avgAccuracy', label: '平均正答率', align: 'right' }]} data={tables.difficultyTable} />
        </SectionCard>
        
        <SectionCard title="要注意問題リスト" description="回答数が平均以上で、正答率が50%以下のつまずきやすい問題" icon={AlertTriangle}>
          <ScrollableTable 
            columns={[{ key: 'question', label: '問題名', align: 'left' }, { key: 'answers', label: '回答数', align: 'right' }, { key: 'accuracyStr', label: '正答率', align: 'right' }]} 
            data={tables.attentionQuestions.map((q: any) => ({ ...q, accuracyStr: <span className="text-danger font-semibold">{q.accuracy}%</span> }))} 
          />
        </SectionCard>
      </div>

      <SectionCard title="問題別 回答データ一覧" description="各問題の回答数と正答率（ボタンで並び替え可能）">
        <div className="flex flex-wrap items-center justify-end gap-2 mb-4">
          <span className="text-sm text-muted-foreground mr-1">並び順:</span>
          {[ { mode: 'date_desc', label: '新着順' }, { mode: 'answers_desc', label: '回答数順' }, { mode: 'accuracy_desc', label: '正答率 (高)' }, { mode: 'accuracy_asc', label: '正答率 (低)' } ].map((btn) => (
            <Button key={btn.mode} variant="outline" size="sm" onClick={() => setSortMode(btn.mode as SortMode)} className={cn('transition-all duration-200', sortMode === btn.mode ? 'bg-primary text-primary-foreground border-transparent' : 'bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground')}>
              {btn.mode !== 'date_desc' && <ArrowUpDown className="h-3 w-3 mr-1" />}{btn.label}
            </Button>
          ))}
        </div>
        <ScrollableTable columns={[{ key: 'rank', label: '順位', align: 'center' }, { key: 'question', label: '問題名', align: 'left' }, { key: 'answers', label: '回答数', align: 'right' }, { key: 'correct', label: '正解数', align: 'right' }, { key: 'accuracyStr', label: '正答率', align: 'right' }]} data={sortedQuestions.map((q, i) => ({ ...q, rank: sortMode === 'date_desc' ? '-' : i + 1, answers: q.answers.toLocaleString(), correct: q.correct.toLocaleString(), accuracyStr: `${q.accuracy}%` }))} />
      </SectionCard>
    </div>
  );
}
