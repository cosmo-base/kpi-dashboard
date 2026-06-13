'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Calendar, Zap, ArrowUpRight } from 'lucide-react';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { LineChartComponent } from '../charts/line-chart';
import { StackedBarChart } from '../charts/stacked-bar-chart';
import { DonutChartWithLegend } from '../charts/donut-chart-with-legend';
import { ScrollableTable } from '../scrollable-table';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const formatDiff = (num: number) => {
  if (num > 0) return `+${num.toLocaleString()}`;
  if (num < 0) return num.toLocaleString();
  return '0';
};

function XIcon({ className }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>); }
function InstagramIcon({ className }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>); }
function NoteIcon({ className }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2v-4h2v4zm0-6h-2V9h2v2z" /></svg>); }

type FilterMode = 'all' | 'x' | 'instagram' | 'note';
type ChartFilterMode = 'total' | 'x' | 'instagram' | 'note';

export function SNSPage() {
  const [data, setData] = useState<any>(null);
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [monthlyFilterMode, setMonthlyFilterMode] = useState<ChartFilterMode>('total');
  const [weeklyFilterMode, setWeeklyFilterMode] = useState<ChartFilterMode>('total');

  useEffect(() => {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRoX91AuTR9uVSNcCSqr0ir_SIP-6ZtNpOqBHaLEwXDMA99w1Rws-5L7crTpqBY_JqHa-n0Ie4PxWLq/pub?gid=0&single=true&output=csv';

    fetch(csvUrl)
      .then(response => response.text())
      .then(csvText => {
        const parsed = Papa.parse(csvText, { skipEmptyLines: true });
        const rawData = parsed.data as string[][];

        const headerRowIndex = rawData.findIndex(row => row.includes('Instagram'));
        if (headerRowIndex === -1) return;

        const headers = rawData[headerRowIndex];
        const monthIdx = headers.indexOf('月');
        const dayIdx = headers.indexOf('日');
        let xIdx = headers.indexOf('X');
        if (xIdx === -1) xIdx = headers.indexOf('x');
        const instaIdx = headers.indexOf('Instagram');
        const noteIdx = headers.indexOf('note');

        const dailyRecords = rawData.slice(headerRowIndex + 1)
          .map(row => ({
            date: `${row[monthIdx]}/${row[dayIdx]}`,
            x: Number(row[xIdx]) || 0,
            instagram: Number(row[instaIdx]) || 0,
            note: Number(row[noteIdx]) || 0,
          }))
          .filter(record => record.x > 0 || record.instagram > 0 || record.note > 0);

        if (dailyRecords.length === 0) return;

        const processedRecords = dailyRecords.map((record, i) => {
          const prev = i > 0 ? dailyRecords[i - 1] : record;
          return { ...record, incX: record.x - prev.x, incInsta: record.instagram - prev.instagram, incNote: record.note - prev.note, total: record.x + record.instagram + record.note };
        });

        const nowJst = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
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
        if (dailyRecords.length > 0 && parseInt(dailyRecords[0].date.split('/')[0], 10) > currentM + 1) currentYearForDate--;

        let prevMonthForDate = -1;
        const recordsWithDateNum = processedRecords.map(record => {
          const [mStr, dStr] = record.date.split('/');
          const m = parseInt(mStr, 10);
          const d = parseInt(dStr, 10);
          if (prevMonthForDate !== -1 && prevMonthForDate === 12 && m === 1) currentYearForDate++;
          prevMonthForDate = m;
          return { ...record, recordNum: currentYearForDate * 10000 + m * 100 + d };
        });

        const calculateMetrics = (key: 'x' | 'instagram' | 'note') => {
          let thisMonthInc = 0, thisWeekInc = 0, todayInc = 0;
          let endOfPrevMonthVal = recordsWithDateNum[0][key] || 0;
          let endOfPrevWeekVal = recordsWithDateNum[0][key] || 0;

          recordsWithDateNum.forEach(record => {
            const num = record.recordNum;
            const incKey = key === 'x' ? 'incX' : key === 'instagram' ? 'incInsta' : 'incNote';
            if (num >= startOfThisMonthNum) thisMonthInc += record[incKey];
            if (num <= endOfPrevMonthNum) endOfPrevMonthVal = record[key];
            if (num >= startOfWeekNum) thisWeekInc += record[incKey];
            if (num <= endOfPrevWeekNum) endOfPrevWeekVal = record[key];
            if (num === todayNum) todayInc += record[incKey];
          });

          const latest = recordsWithDateNum[recordsWithDateNum.length - 1][key];
          return {
            followers: latest, todayIncrease: todayInc, weeklyIncrease: thisWeekInc,
            weeklyRate: endOfPrevWeekVal === 0 ? 100 : Math.round((latest / endOfPrevWeekVal) * 100),
            monthlyIncrease: thisMonthInc, monthlyRate: endOfPrevMonthVal === 0 ? 100 : Math.round((latest / endOfPrevMonthVal) * 100)
          };
        };

        const latestRecord = dailyRecords[dailyRecords.length - 1];

        const monthlyMap = new Map<string, { x: number; instagram: number; note: number; total: number }>();
        processedRecords.forEach(record => {
          const monthLabel = record.date.split('/')[0] + '月';
          if (!monthlyMap.has(monthLabel)) monthlyMap.set(monthLabel, { x: 0, instagram: 0, note: 0, total: 0 });
          const cur = monthlyMap.get(monthLabel)!;
          cur.x += record.incX; cur.instagram += record.incInsta; cur.note += record.incNote; cur.total += (record.incX + record.incInsta + record.incNote);
        });

        const monthlyTableRaw = Array.from(monthlyMap.entries()).map(([month, val]) => ({ month, x: val.x, instagram: val.instagram, note: val.note, total: val.total }));
        const monthlyTable = [...monthlyTableRaw].reverse();
        const monthlyByPlatform = [...monthlyTableRaw].slice(-4).map(item => ({ name: item.month, X: item.x, Instagram: item.instagram, note: item.note }));

        const weeklyMap = new Map<string, { x: number; instagram: number; note: number; total: number; startStr: string; endStr: string }>();
        let currentYear = nowJst.getFullYear();
        if (processedRecords.length > 0 && parseInt(processedRecords[0].date.split('/')[0], 10) > nowJst.getMonth() + 2) currentYear--;

        let prevMonth = -1;
        processedRecords.forEach(record => {
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
            weeklyMap.set(weekKey, { x: 0, instagram: 0, note: 0, total: 0, startStr: `${startOfWeek.getMonth() + 1}/${startOfWeek.getDate()}`, endStr: `${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}` });
          }
          const weekData = weeklyMap.get(weekKey)!;
          weekData.x += record.incX; weekData.instagram += record.incInsta; weekData.note += record.incNote; weekData.total += (record.incX + record.incInsta + record.incNote);
        });

        const weeklyTableRaw = Array.from(weeklyMap.values()).map(data => {
          const endMonth = parseInt(data.endStr.split('/')[0], 10);
          const endDay = parseInt(data.endStr.split('/')[1], 10);
          const weekNum = Math.ceil(endDay / 7);
          return { week: `${endMonth}月第${weekNum}週 (${data.startStr}-${data.endStr})`, shortWeek: `${endMonth}月第${weekNum}週`, x: data.x, instagram: data.instagram, note: data.note, total: data.total };
        });

        const weeklyTable = [...weeklyTableRaw].reverse();
        const weeklyByPlatform = [...weeklyTableRaw].slice(-4).map(item => ({ name: item.shortWeek, X: item.x, Instagram: item.instagram, note: item.note }));

        setData({
          platforms: { x: calculateMetrics('x'), instagram: calculateMetrics('instagram'), note: calculateMetrics('note') },
          charts: {
            followersTrend: dailyRecords.map(record => ({ name: record.date, X: record.x, Instagram: record.instagram, note: record.note, 総数: record.x + record.instagram + record.note })),
            monthlyByPlatform, weeklyByPlatform,
            platformDistribution: [{ name: 'X', value: latestRecord.x, color: '#1DA1F2' }, { name: 'Instagram', value: latestRecord.instagram, color: '#d640e4' }, { name: 'note', value: latestRecord.note, color: '#41C9B4' }].filter(item => item.value > 0)
          },
          tables: { monthlyTable, weeklyTable }
        });
      })
      .catch(err => console.error('CSV Fetch Error:', err));
  }, []);

  if (!data) return (<div className="flex h-[400px] items-center justify-center text-muted-foreground"><div className="animate-pulse flex items-center gap-2"><TrendingUp className="h-5 w-5" /><span>スプレッドシートからSNSデータを読み込み中...</span></div></div>);

  const { platforms, charts, tables } = data;
  const getTrendLines = () => {
    switch (filterMode) {
      case 'x': return [{ dataKey: 'X', color: '#1DA1F2', name: 'X' }];
      case 'instagram': return [{ dataKey: 'Instagram', color: '#d640e4', name: 'Instagram' }];
      case 'note': return [{ dataKey: 'note', color: '#41C9B4', name: 'note' }];
      default: return [{ dataKey: '総数', color: '#F59E0B', name: '総数' }, { dataKey: 'X', color: '#1DA1F2', name: 'X' }, { dataKey: 'Instagram', color: '#d640e4', name: 'Instagram' }, { dataKey: 'note', color: '#41C9B4', name: 'note' }];
    }
  };
  const getMonthlyBars = () => {
    switch (monthlyFilterMode) {
      case 'x': return [{ dataKey: 'X', name: 'X', color: '#1DA1F2' }];
      case 'instagram': return [{ dataKey: 'Instagram', name: 'Instagram', color: '#d640e4' }];
      case 'note': return [{ dataKey: 'note', name: 'note', color: '#41C9B4' }];
      default: return [{ dataKey: 'X', name: 'X', color: '#1DA1F2' }, { dataKey: 'Instagram', name: 'Instagram', color: '#d640e4' }, { dataKey: 'note', name: 'note', color: '#41C9B4' }];
    }
  };
  const getWeeklyBars = () => {
    switch (weeklyFilterMode) {
      case 'x': return [{ dataKey: 'X', name: 'X', color: '#1DA1F2' }];
      case 'instagram': return [{ dataKey: 'Instagram', name: 'Instagram', color: '#d640e4' }];
      case 'note': return [{ dataKey: 'note', name: 'note', color: '#41C9B4' }];
      default: return [{ dataKey: 'X', name: 'X', color: '#1DA1F2' }, { dataKey: 'Instagram', name: 'Instagram', color: '#d640e4' }, { dataKey: 'note', name: 'note', color: '#41C9B4' }];
    }
  };

  const chartFilterButtons: { mode: ChartFilterMode; label: string; color: string }[] = [
    { mode: 'total', label: '総数', color: 'bg-[#F59E0B]' }, { mode: 'x', label: 'X', color: 'bg-[#1DA1F2]' },
    { mode: 'instagram', label: 'Instagram', color: 'bg-[#d640e4]' }, { mode: 'note', label: 'note', color: 'bg-[#41C9B4]' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
        <div><h2 className="text-2xl font-bold text-foreground">SNS分析</h2><p className="text-sm text-muted-foreground">X、Instagram、noteのフォロワー数と増加推移を確認できます</p></div>
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

      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4"><div className="p-2.5 rounded-xl bg-[#1DA1F2]/10 border border-[#1DA1F2]/20"><XIcon className="h-5 w-5 text-[#1DA1F2]" /></div><span className="text-lg font-semibold text-foreground">X (Twitter)</span></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            <KpiCard title="フォロワー数" value={platforms.x.followers.toLocaleString()} icon={Users} accentColor="primary" />
            <KpiCard title="今月の増加数" value={formatDiff(platforms.x.monthlyIncrease)} icon={TrendingUp} accentColor="success" />
            <KpiCard title="1カ月比" value={platforms.x.monthlyRate} unit="%" trendValue="先月末比" trendType="up" icon={Calendar} accentColor="primary" />
            <KpiCard title="今週の増加数" value={formatDiff(platforms.x.weeklyIncrease)} icon={TrendingUp} accentColor="success" />
            <KpiCard title="週間比" value={platforms.x.weeklyRate} unit="%" trendValue="先週末比" trendType="up" icon={Zap} accentColor="accent" />
            <KpiCard title="今日の増加数" value={formatDiff(platforms.x.todayIncrease)} icon={TrendingUp} accentColor="warning" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4"><div className="p-2.5 rounded-xl bg-[#d640e4]/10 border border-[#d640e4]/20"><InstagramIcon className="h-5 w-5 text-[#d640e4]" /></div><span className="text-lg font-semibold text-foreground">Instagram</span></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            <KpiCard title="フォロワー数" value={platforms.instagram.followers.toLocaleString()} icon={Users} accentColor="danger" />
            <KpiCard title="今月の増加数" value={formatDiff(platforms.instagram.monthlyIncrease)} icon={TrendingUp} accentColor="success" />
            <KpiCard title="1カ月比" value={platforms.instagram.monthlyRate} unit="%" trendValue="先月末比" trendType="up" icon={Calendar} accentColor="primary" />
            <KpiCard title="今週の増加数" value={formatDiff(platforms.instagram.weeklyIncrease)} icon={TrendingUp} accentColor="success" />
            <KpiCard title="週間比" value={platforms.instagram.weeklyRate} unit="%" trendValue="先週末比" trendType="up" icon={Zap} accentColor="accent" />
            <KpiCard title="今日の増加数" value={formatDiff(platforms.instagram.todayIncrease)} icon={TrendingUp} accentColor="warning" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4"><div className="p-2.5 rounded-xl bg-[#41C9B4]/10 border border-[#41C9B4]/20"><NoteIcon className="h-5 w-5 text-[#41C9B4]" /></div><span className="text-lg font-semibold text-foreground">note</span></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            <KpiCard title="フォロワー数" value={platforms.note.followers.toLocaleString()} icon={Users} accentColor="success" />
            <KpiCard title="今月の増加数" value={formatDiff(platforms.note.monthlyIncrease)} icon={TrendingUp} accentColor="success" />
            <KpiCard title="1カ月比" value={platforms.note.monthlyRate} unit="%" trendValue="先月末比" trendType="up" icon={Calendar} accentColor="primary" />
            <KpiCard title="今週の増加数" value={formatDiff(platforms.note.weeklyIncrease)} icon={TrendingUp} accentColor="success" />
            <KpiCard title="週間比" value={platforms.note.weeklyRate} unit="%" trendValue="先週末比" trendType="up" icon={Zap} accentColor="accent" />
            <KpiCard title="今日の増加数" value={formatDiff(platforms.note.todayIncrease)} icon={TrendingUp} accentColor="warning" />
          </div>
        </motion.div>
      </div>

      <SectionCard title="SNSフォロワー推移" description="フォロワー数推移（媒体別切替可能）">
        <div className="flex flex-wrap gap-2 mb-4">
          {[{ mode: 'all' as FilterMode, label: '全媒体', color: 'bg-primary' }, { mode: 'x' as FilterMode, label: 'Xのみ', color: 'bg-[#1DA1F2]' }, { mode: 'instagram' as FilterMode, label: 'Instagramのみ', color: 'bg-[#d640e4]' }, { mode: 'note' as FilterMode, label: 'noteのみ', color: 'bg-[#41C9B4]' }].map((btn) => (
            <Button key={btn.mode} variant="outline" size="sm" onClick={() => setFilterMode(btn.mode)} className={cn('transition-all duration-200', filterMode === btn.mode ? `${btn.color} text-white border-transparent` : 'bg-secondary/30 hover:bg-secondary/50 border-border/50')}>
              {btn.label}
            </Button>
          ))}
        </div>
        <div className="h-[350px]"><LineChartComponent data={charts.followersTrend.slice(-90)} lines={getTrendLines()} /></div>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月別増加数" description="直近4ヶ月のSNS別増加数">
          <div className="flex flex-wrap gap-2 mb-4">
            {chartFilterButtons.map((btn) => (<Button key={btn.mode} variant="outline" size="sm" onClick={() => setMonthlyFilterMode(btn.mode)} className={cn('transition-all duration-200', monthlyFilterMode === btn.mode ? `${btn.color} text-white border-transparent` : 'bg-secondary/30 hover:bg-secondary/50 border-border/50')}>{btn.label}</Button>))}
          </div>
          <div className="h-[300px]"><StackedBarChart data={charts.monthlyByPlatform} bars={getMonthlyBars()} /></div>
        </SectionCard>
        <SectionCard title="週別増加数" description="直近4週間のSNS別増加数 (月〜日)">
          <div className="flex flex-wrap gap-2 mb-4">
            {chartFilterButtons.map((btn) => (<Button key={btn.mode} variant="outline" size="sm" onClick={() => setWeeklyFilterMode(btn.mode)} className={cn('transition-all duration-200', weeklyFilterMode === btn.mode ? `${btn.color} text-white border-transparent` : 'bg-secondary/30 hover:bg-secondary/50 border-border/50')}>{btn.label}</Button>))}
          </div>
          <div className="h-[300px]"><StackedBarChart data={charts.weeklyByPlatform} bars={getWeeklyBars()} /></div>
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月別増加数テーブル" description="SNS別の月間増加数">
          <ScrollableTable columns={[{ key: 'month', label: '月', align: 'left' }, { key: 'x', label: 'X', align: 'right' }, { key: 'instagram', label: 'Instagram', align: 'right' }, { key: 'note', label: 'note', align: 'right' }, { key: 'total', label: '合計', align: 'right' }]} data={tables.monthlyTable.map((row: any) => ({ ...row, x: formatDiff(row.x), instagram: formatDiff(row.instagram), note: formatDiff(row.note), total: formatDiff(row.total) }))} />
        </SectionCard>
        <SectionCard title="週別増加数テーブル" description="SNS別の週間増加数 (月〜日)">
          <ScrollableTable columns={[{ key: 'week', label: '週 (月〜日)', align: 'left' }, { key: 'x', label: 'X', align: 'right' }, { key: 'instagram', label: 'Instagram', align: 'right' }, { key: 'note', label: 'note', align: 'right' }, { key: 'total', label: '合計', align: 'right' }]} data={tables.weeklyTable.map((row: any) => ({ ...row, x: formatDiff(row.x), instagram: formatDiff(row.instagram), note: formatDiff(row.note), total: formatDiff(row.total) }))} />
        </SectionCard>
      </div>

      <SectionCard title="媒体別フォロワー割合" description="各SNSのフォロワー数構成比">
        <div className="h-[350px]">
          {charts.platformDistribution.length > 0 ? (<DonutChartWithLegend data={charts.platformDistribution} centerLabel="フォロワー" />) : (<div className="flex h-full items-center justify-center text-muted-foreground">データがありません</div>)}
        </div>
      </SectionCard>
    </motion.div>
  );
}
