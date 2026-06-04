'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Users, TrendingUp, Sparkles, Zap, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { ScrollableTable } from '../scrollable-table';
import { DonutChart } from '../charts/donut-chart';
import { LineChartComponent } from '../charts/line-chart';
import { StackedBarChart } from '../charts/stacked-bar-chart';

const getJSTDate = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));

const formatDiff = (num: number) => {
  if (num > 0) return `+${num.toLocaleString()}`;
  if (num < 0) return num.toLocaleString(); 
  return '0';
};

const SIMPLE_TYPE_COLORS: Record<string, string> = { 'RI': '#cbace4', 'DI': '#85c68b', 'RO': '#EEEEBB', 'DO': '#83CBEB' };
const SIMPLE_TYPE_LABELS: Record<string, string> = { 'RI': '天文台トラベラー (RI)', 'DI': '人工衛星 (DI)', 'RO': 'ロケット打ち上げ (RO)', 'DO': '宇宙ステーション (DO)' };
const DETAILED_TYPE_COLORS: Record<string, string> = { 'RVXI': '#D1B3E8', 'RVXS': '#BCA2DC', 'RVMI': '#E4C3F0', 'RVMS': '#C5B9D6', 'RAXI': '#F2F2C4', 'RAXS': '#F5E69C', 'RAMI': '#E8E8B6', 'RAMS': '#FCE877', 'PVXI': '#96CE9C', 'PVXS': '#72B879', 'PVMI': '#A8DCAE', 'PVMS': '#8BCA83', 'PAXI': '#76C5E8', 'PAXS': '#9AD4EE', 'PAMI': '#6CB6D9', 'PAMS': '#5AADD6' };
const DETAILED_TYPE_LABELS: Record<string, string> = { 'RVXI': '宇宙ロマン志向夢想家 (RVXI)', 'RVXS': '未来観察志向観測者 (RVXS)', 'RVMI': '天体愛好志向探訪者 (RVMI)', 'RVMS': '探査共感志向見守り手 (RVMS)', 'RAXI': '宇宙探求志向探求者 (RAXI)', 'RAXS': '宇宙伝道志向語り部 (RAXS)', 'RAMI': '趣味没頭志向職人 (RAMI)', 'RAMS': '宇宙カルチャー志向仕掛け人 (RAMS)', 'PVXI': '宇宙教養志向学び手 (PVXI)', 'PVXS': '産業分析志向分析者 (PVXS)', 'PVMI': '最新テック志向追跡者 (PVMI)', 'PVMS': '社会応用志向つなぎ手 (PVMS)', 'PAXI': '宇宙キャリア志向開拓者 (PAXI)', 'PAXS': '産業推進志向推進者 (PAXS)', 'PAMI': '技術開発志向創り手 (PAMI)', 'PAMS': '社会課題解決志向実装者 (PAMS)' };

const AxisBar = ({ labelLeft, labelRight, countLeft, countRight, colorLeft, colorRight }: any) => {
  const safeCountLeft = countLeft || 0; const safeCountRight = countRight || 0;
  const total = safeCountLeft + safeCountRight || 1;
  const leftPct = (safeCountLeft / total) * 100; const rightPct = (safeCountRight / total) * 100;
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm font-semibold text-foreground mb-1.5 px-1"><span>{labelLeft} <span className="text-muted-foreground font-normal ml-1">({safeCountLeft}人)</span></span><span><span className="text-muted-foreground font-normal mr-1">({safeCountRight}人)</span> {labelRight}</span></div>
      <div className="h-4 w-full flex rounded-full overflow-hidden bg-secondary/30"><div style={{ width: `${leftPct}%`, backgroundColor: colorLeft }} className="transition-all duration-500" /><div style={{ width: `${rightPct}%`, backgroundColor: colorRight }} className="transition-all duration-500" /></div>
    </div>
  );
};

const MultiSegmentBar = ({ title, segments }: any) => {
  const total = segments.reduce((sum: number, s: any) => sum + s.count, 0) || 1;
  return (
    <div className="mt-4 pt-4 border-t border-border/50">
      <div className="flex justify-between text-sm font-semibold text-foreground mb-2 px-1"><span>{title} <span className="text-muted-foreground font-normal ml-1">({total}人)</span></span></div>
      <div className="h-4 w-full flex rounded-full overflow-hidden bg-secondary/30 mb-2">{segments.map((s: any, i: number) => { const pct = (s.count / total) * 100; return pct > 0 ? (<div key={i} style={{ width: `${pct}%`, backgroundColor: s.color }} className="transition-all duration-500" title={`${s.label}: ${s.count}人`} />) : null; })}</div>
      <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground px-1">{segments.map((s: any, i: number) => (<span key={i} className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }}></span>{s.label} ({s.count}人)</span>))}</div>
    </div>
  );
};

export function SpaceDiagnosisPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const urlSimpleCbhp = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vReKqSJGubls2ixij5n6FbAi37wzshzZ09Q10a0uzJO1kuk8dSuw9c_yjm4XmsJelkiCLBubKAUFgky/pub?gid=0&single=true&output=csv';
    const urlSimpleParticipant = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzLEbfZRlDsErUJ7hrEqtaXTpEym3kWXGyvpQDrAbLOFbJZ4_aoMdFn-BQM1GSeHiXsTo4L3kY86YC/pub?gid=0&single=true&output=csv';
    const urlDetailed = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJvQVHHyL56_1xeVimkfbJCXCNN9MGtDt_ACebndkqhuqGbugvykZvRhkmajQ5fs6ug_Tas_rPXZUl/pub?gid=0&single=true&output=csv';

    Promise.all([fetch(urlSimpleCbhp).then(res => res.text()), fetch(urlSimpleParticipant).then(res => res.text()), fetch(urlDetailed).then(res => res.text())]).then(([csv1, csv2, csv3]) => {
      const parseCSV = (csv: string, source: string, version: string) => { return Papa.parse(csv, { header: true, skipEmptyLines: true }).data.map((row: any) => ({ ...row, _source: source, _version: version })); };
      
      const allRows = [...parseCSV(csv1, 'CBHP', 'simple'), ...parseCSV(csv2, '参加者ページ', 'simple'), ...parseCSV(csv3, '詳細版', 'detailed')]
        .map(row => { const dateStr = String(row.date || '').replace(/\//g, '-'); const timestamp = new Date(dateStr).getTime(); return { ...row, timestamp, dateObj: new Date(dateStr) }; })
        .filter(row => !isNaN(row.timestamp)).sort((a, b) => a.timestamp - b.timestamp);

      if (allRows.length === 0) return;

      const now = getJSTDate();
      const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const endOfPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
      const currentDay = now.getDay() === 0 ? 7 : now.getDay();
      const startOfThisWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - currentDay + 1);
      startOfThisWeek.setHours(0, 0, 0, 0);

      const axisCounts = { R: 0, P: 0, V: 0, A: 0, M: 0, X: 0, I: 0, S: 0 };
      const simpleAxisCounts = { R: 0, D: 0, I: 0, O: 0, P: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } as Record<number, number> };
      const simpleTypeMap = new Map<string, number>();
      const detailedTypeMap = new Map<string, number>();
      const dailyMap = new Map<string, any>();

      allRows.forEach(row => {
        const type = String(row.type || '').trim();
        const dateKey = `${row.dateObj.getFullYear()}/${String(row.dateObj.getMonth() + 1).padStart(2, '0')}/${String(row.dateObj.getDate()).padStart(2, '0')}`;
        if (!dailyMap.has(dateKey)) dailyMap.set(dateKey, { incTotal: 0, incSimpleTotal: 0, incSimpleCbhp: 0, incSimplePart: 0, incDetailed: 0, dateKey });
        const daily = dailyMap.get(dateKey)!;
        daily.incTotal++;

        if (row._version === 'simple') {
          daily.incSimpleTotal++;
          if (row._source === 'CBHP') daily.incSimpleCbhp++;
          if (row._source === '参加者ページ') daily.incSimplePart++;
          if (type && SIMPLE_TYPE_COLORS[type]) {
            simpleTypeMap.set(type, (simpleTypeMap.get(type) || 0) + 1);
            if (type.includes('R')) simpleAxisCounts.R++; if (type.includes('D')) simpleAxisCounts.D++; if (type.includes('I')) simpleAxisCounts.I++; if (type.includes('O')) simpleAxisCounts.O++;
          }
          const pVal = parseInt(row.P);
          if (pVal >= 1 && pVal <= 5) simpleAxisCounts.P[pVal]++;
        } else {
          daily.incDetailed++;
          if (type && DETAILED_TYPE_COLORS[type]) detailedTypeMap.set(type, (detailedTypeMap.get(type) || 0) + 1);
          const rp = parseInt(row.RP) || 0; const va = parseInt(row.VA) || 0; const mx = parseInt(row.MX) || 0; const is = parseInt(row.IS) || 0;
          if (rp > 0) axisCounts.R++; else axisCounts.P++; if (va > 0) axisCounts.V++; else axisCounts.A++; if (mx > 0) axisCounts.M++; else axisCounts.X++; if (is > 0) axisCounts.I++; else axisCounts.S++;
        }
      });

      const dailyRecords = Array.from(dailyMap.values()).sort((a, b) => new Date(a.dateKey).getTime() - new Date(b.dateKey).getTime());
      
      let cumTotal = 0, cumSimple = 0, cumSimpleCbhp = 0, cumSimplePart = 0, cumDetailed = 0;
      dailyRecords.forEach(d => {
        cumTotal += d.incTotal; d.total = cumTotal;
        cumSimple += d.incSimpleTotal; d.simpleTotal = cumSimple;
        cumSimpleCbhp += d.incSimpleCbhp; d.simpleCbhp = cumSimpleCbhp;
        cumSimplePart += d.incSimplePart; d.simplePart = cumSimplePart;
        cumDetailed += d.incDetailed; d.detailedTotal = cumDetailed;
      });

      const latest = dailyRecords[dailyRecords.length - 1];

      let thisMonthTotal = 0, thisMonthSimple = 0, thisMonthDetailed = 0;
      let endOfPrevMonthTotal = 0, endOfPrevMonthSimple = 0, endOfPrevMonthDetailed = 0;

      dailyRecords.forEach(d => {
        const t = new Date(d.dateKey).getTime();
        if (t >= startOfThisMonth.getTime()) { thisMonthTotal += d.incTotal; thisMonthSimple += d.incSimpleTotal; thisMonthDetailed += d.incDetailed; }
        if (t <= endOfPrevMonth.getTime()) { endOfPrevMonthTotal = d.total; endOfPrevMonthSimple = d.simpleTotal; endOfPrevMonthDetailed = d.detailedTotal; }
      });

      const monthlyRate = endOfPrevMonthTotal === 0 ? 100 : Math.round((latest.total / endOfPrevMonthTotal) * 100);
      const simpleRate = endOfPrevMonthSimple === 0 ? 100 : Math.round((latest.simpleTotal / endOfPrevMonthSimple) * 100);
      const detailedRate = endOfPrevMonthDetailed === 0 ? 100 : Math.round((latest.detailedTotal / endOfPrevMonthDetailed) * 100);

      const monthlyAgg = new Map<string, any>();
      const weeklyAgg = new Map<string, any>();
      
      let prevMonth = -1;
      let currentYear = now.getFullYear();
      if (dailyRecords.length > 0 && parseInt(dailyRecords[0].dateKey.split('/')[0], 10) > now.getMonth() + 2) currentYear--;

      dailyRecords.forEach(d => {
        const mLabel = parseInt(d.dateKey.split('/')[1], 10) + '月';
        if (!monthlyAgg.has(mLabel)) monthlyAgg.set(mLabel, { incTotal: 0, incSimple: 0, incSimpleCbhp: 0, incSimplePart: 0, incDetailed: 0, cum: 0 });
        const m = monthlyAgg.get(mLabel)!;
        m.incTotal += d.incTotal; m.incSimple += d.incSimpleTotal; m.incSimpleCbhp += d.incSimpleCbhp; m.incSimplePart += d.incSimplePart; m.incDetailed += d.incDetailed; m.cum = d.total;

        const [yStr, mStr, dStr] = d.dateKey.split('/');
        const monthNum = parseInt(mStr, 10);
        const dayNum = parseInt(dStr, 10);
        if (prevMonth !== -1 && prevMonth === 12 && monthNum === 1) currentYear++;
        prevMonth = monthNum;
        
        const dateObj = new Date(currentYear, monthNum - 1, dayNum);
        const dayOfWeek = dateObj.getDay() === 0 ? 7 : dateObj.getDay(); 
        const endOfWeek = new Date(dateObj); endOfWeek.setDate(dateObj.getDate() + (7 - dayOfWeek));
        const startOfWeek = new Date(endOfWeek); startOfWeek.setDate(endOfWeek.getDate() - 6);
        
        const wKey = `${endOfWeek.getFullYear()}-${endOfWeek.getMonth() + 1}-${endOfWeek.getDate()}`;
        if (!weeklyAgg.has(wKey)) {
          weeklyAgg.set(wKey, { incTotal: 0, incSimple: 0, incSimpleCbhp: 0, incSimplePart: 0, incDetailed: 0, cum: 0, startStr: `${startOfWeek.getMonth() + 1}/${startOfWeek.getDate()}`, endStr: `${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}` });
        }
        const w = weeklyAgg.get(wKey)!;
        w.incTotal += d.incTotal; w.incSimple += d.incSimpleTotal; w.incSimpleCbhp += d.incSimpleCbhp; w.incSimplePart += d.incSimplePart; w.incDetailed += d.incDetailed; w.cum = d.total;
      });

      const buildTable = (aggMap: Map<string, any>, labelGen: (k:string, v:any)=>string) => {
        const arr = Array.from(aggMap.entries()).map(([k, v]) => ({ label: labelGen(k, v), ...v }));
        return arr.map((item, idx) => {
          let rate = 100;
          if (idx > 0) {
            const prevCum = arr[idx - 1].cum;
            rate = prevCum <= 0 ? 100 : Math.round((item.cum / prevCum) * 100);
          }
          return { ...item, rate: `${rate}%` };
        }).reverse();
      };

      const monthlyTable = buildTable(monthlyAgg, (k) => k).map(r => ({ month: r.label, total: formatDiff(r.incTotal), simpleCbhp: formatDiff(r.incSimpleCbhp), simplePart: formatDiff(r.incSimplePart), full: formatDiff(r.incDetailed), rate: r.rate }));
      const weeklyTable = buildTable(weeklyAgg, (k, v) => {
        const endDay = parseInt(v.endStr.split('/')[1], 10);
        return `${v.endStr.split('/')[0]}月第${Math.ceil(endDay / 7)}週 (${v.startStr}-${v.endStr})`;
      }).map(r => ({ week: r.label, total: formatDiff(r.incTotal), simpleCbhp: formatDiff(r.incSimpleCbhp), simplePart: formatDiff(r.incSimplePart), full: formatDiff(r.incDetailed), rate: r.rate }));

      const simpleTypeDistribution = Array.from(simpleTypeMap.entries()).map(([k, v]) => ({ name: SIMPLE_TYPE_LABELS[k] || k, value: v, color: SIMPLE_TYPE_COLORS[k] || '#ccc' }));
      const detailedTypeDistribution = Array.from(detailedTypeMap.entries()).map(([k, v]) => ({ name: k, value: v, color: DETAILED_TYPE_COLORS[k] || '#ccc' }));
      const monthlyByVersion = Array.from(monthlyAgg.entries()).slice(-4).map(([k, v]) => ({ name: k, 簡易版_CBHP: v.incSimpleCbhp, 簡易版_参加者: v.incSimplePart, 完全版: v.incDetailed })); 
      const weeklyByVersion = Array.from(weeklyAgg.values()).slice(-4).map(v => {
        const endDay = parseInt(v.endStr.split('/')[1], 10);
        return { name: `${v.endStr.split('/')[0]}月第${Math.ceil(endDay / 7)}週`, 簡易版_CBHP: v.incSimpleCbhp, 簡易版_参加者: v.incSimplePart, 完全版: v.incDetailed };
      });

      setData({
        summary: {
          totalParticipants: latest.total,
          monthlyIncrease: thisMonthTotal, monthlyRate,
          fullVersionParticipants: latest.detailedTotal, fullVersionRate: detailedRate,
          simpleVersionParticipants: latest.simpleTotal, simpleVersionRate: simpleRate,
          simpleCbhpParticipants: latest.simpleCbhp, simplePartParticipants: latest.simplePart,
        },
        charts: { participantsTrend: dailyRecords.map(d => ({ name: d.dateKey, 全体: d.total, 簡易版_合計: d.simpleTotal, 簡易版_CBHP: d.simpleCbhp, 簡易版_参加者: d.simplePart, 完全版: d.detailedTotal })), simpleTypeDistribution, detailedTypeDistribution, monthlyByVersion, weeklyByVersion },
        axisCounts, simpleAxisCounts, tables: { monthlyTable, weeklyTable }
      });
    }).catch(err => console.error('Data Load Error:', err));
  }, []);

  if (!data) return (<div className="flex h-[400px] items-center justify-center text-muted-foreground"><div className="animate-pulse flex items-center gap-2"><Sparkles className="h-5 w-5" /><span>診断データを集計中...</span></div></div>);

  const { summary = {}, charts = {}, axisCounts = {}, simpleAxisCounts = { R: 0, D: 0, I: 0, O: 0, P: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } }, tables = {} } = data;
  const pSegments = [{ label: 'P=1', count: simpleAxisCounts?.P?.[1] || 0, color: '#fed7aa' }, { label: 'P=2', count: simpleAxisCounts?.P?.[2] || 0, color: '#fdba74' }, { label: 'P=3', count: simpleAxisCounts?.P?.[3] || 0, color: '#fb923c' }, { label: 'P=4', count: simpleAxisCounts?.P?.[4] || 0, color: '#f97316' }, { label: 'P=5', count: simpleAxisCounts?.P?.[5] || 0, color: '#ea580c' }];

  return (
    <div className="space-y-6">
      <div className="mb-6"><h2 className="text-2xl font-bold text-foreground">宇宙タイプ診断 分析</h2><p className="text-muted-foreground mt-1">診断参加者数、簡易版（CBHP/参加者ページ）・完全版の利用状況、各軸の傾向を確認できます。</p></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <KpiCard title="総参加者数" value={summary.totalParticipants?.toLocaleString() || 0} unit="人" icon={Users} accentColor="primary" />
        <KpiCard title="今月の増加数" value={formatDiff(summary.monthlyIncrease || 0)} unit="人" icon={TrendingUp} accentColor="success" />
        <KpiCard title="全体の先月末比" value={summary.monthlyRate || 0} unit="%" trendValue="先月末比" trendType="up" icon={TrendingUp} accentColor="success" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="簡易版の参加者数 (合計)" value={summary.simpleVersionParticipants?.toLocaleString() || 0} unit="人" icon={Sparkles} accentColor="primary" />
        <KpiCard title="簡易版の先月末比" value={summary.simpleVersionRate || 0} unit="%" trendValue="先月末比" trendType="up" icon={TrendingUp} accentColor="success" />
        <KpiCard title="完全版の参加者数" value={summary.fullVersionParticipants?.toLocaleString() || 0} unit="人" icon={Zap} accentColor="accent" />
        <KpiCard title="完全版の先月末比" value={summary.fullVersionRate || 0} unit="%" trendValue="先月末比" trendType="up" icon={TrendingUp} accentColor="success" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         <div className="glass-card p-4 rounded-xl flex items-center justify-between border border-border/50"><span className="text-sm font-medium text-muted-foreground">簡易版：CBHP経由</span><span className="text-xl font-bold text-foreground">{summary.simpleCbhpParticipants?.toLocaleString() || 0} 人</span></div>
         <div className="glass-card p-4 rounded-xl flex items-center justify-between border border-border/50"><span className="text-sm font-medium text-muted-foreground">簡易版：参加者ページ経由</span><span className="text-xl font-bold text-foreground">{summary.simplePartParticipants?.toLocaleString() || 0} 人</span></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="簡易版：各軸の傾向分析"><div className="pt-2 flex flex-col justify-center h-[350px]"><AxisBar labelLeft="R" countLeft={simpleAxisCounts?.R || 0} colorLeft="#d1d5db" labelRight="D" countRight={simpleAxisCounts?.D || 0} colorRight="#6b7280" /><AxisBar labelLeft="I" countLeft={simpleAxisCounts?.I || 0} colorLeft="#d1d5db" labelRight="O" countRight={simpleAxisCounts?.O || 0} colorRight="#6b7280" /><MultiSegmentBar title="P（5段階分布）" segments={pSegments} /></div></SectionCard>
        <SectionCard title="簡易版 4タイプ割合"><ChartContainer height="h-[350px]"><DonutChart data={charts.simpleTypeDistribution || []} centerLabel="簡易版" /></ChartContainer></SectionCard>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="完全版：各軸の傾向分析" description="全参加者のパラメータ分布"><div className="pt-4 flex flex-col justify-center h-[350px]"><AxisBar labelLeft="① 関心の方向 (R: ロマン)" countLeft={axisCounts?.R || 0} colorLeft="#d1d5db" labelRight="(P: 実用)" countRight={axisCounts?.P || 0} colorRight="#6b7280" /><AxisBar labelLeft="② 関わり方 (V: 受動)" countLeft={axisCounts?.V || 0} colorLeft="#d1d5db" labelRight="(A: 能動)" countRight={axisCounts?.A || 0} colorRight="#6b7280" /><AxisBar labelLeft="③ 対象スケール (X: マクロ)" countLeft={axisCounts?.X || 0} colorLeft="#d1d5db" labelRight="(M: ミクロ)" countRight={axisCounts?.M || 0} colorRight="#6b7280" /><AxisBar labelLeft="④ 社会との距離 (I: 個人)" countLeft={axisCounts?.I || 0} colorLeft="#d1d5db" labelRight="(S: 社会)" countRight={axisCounts?.S || 0} colorRight="#6b7280" /></div></SectionCard>
        <SectionCard title="完全版 16タイプ割合"><ChartContainer height="h-[350px]"><DonutChart data={charts.detailedTypeDistribution || []} centerLabel="完全版" /></ChartContainer></SectionCard>
      </div>
      <SectionCard title="完全版 16タイプ一覧" description="カラーコードと正式名称の対応表"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-2">{Object.entries(DETAILED_TYPE_LABELS).map(([key, label]) => (<div key={key} className="flex items-center gap-3 p-3 border border-border/50 rounded-xl bg-secondary/20"><div className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm" style={{ backgroundColor: DETAILED_TYPE_COLORS[key] }} /><span className="text-sm text-foreground font-medium">{label}</span></div>))}</div></SectionCard>
      <SectionCard title="診断参加者数推移 (累計)"><ChartContainer height="h-[320px]"><LineChartComponent data={charts.participantsTrend?.slice(-90) || []} lines={[{ dataKey: '全体', name: '全体', color: '#38BDF8' }, { dataKey: '完全版', name: '完全版', color: '#22C55E' }, { dataKey: '簡易版_合計', name: '簡易版(合)', color: '#8B5CF6' }, { dataKey: '簡易版_CBHP', name: '簡易(CBHP)', color: '#a78bfa' }, { dataKey: '簡易版_参加者', name: '簡易(参加)', color: '#c4b5fd' }]} /></ChartContainer></SectionCard>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月別 参加者増加数"><ChartContainer height="h-[300px]"><StackedBarChart data={charts.monthlyByVersion || []} bars={[{ dataKey: '簡易版_CBHP', name: '簡易(CBHP)', color: '#a78bfa' }, { dataKey: '簡易版_参加者', name: '簡易(参加)', color: '#c4b5fd' }, { dataKey: '完全版', name: '完全版', color: '#22C55E' }]} /></ChartContainer></SectionCard>
        <SectionCard title="週別 参加者増加数 (月〜日)"><ChartContainer height="h-[300px]"><StackedBarChart data={charts.weeklyByVersion || []} bars={[{ dataKey: '簡易版_CBHP', name: '簡易(CBHP)', color: '#a78bfa' }, { dataKey: '簡易版_参加者', name: '簡易(参加)', color: '#c4b5fd' }, { dataKey: '完全版', name: '完全版', color: '#22C55E' }]} /></ChartContainer></SectionCard>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月単位の参加者増加人数"><ScrollableTable columns={[{ key: 'month', label: '月', align: 'left' }, { key: 'total', label: '合計増', align: 'right' }, { key: 'simpleCbhp', label: '簡易(CBHP)', align: 'right' }, { key: 'simplePart', label: '簡易(参加)', align: 'right' }, { key: 'full', label: '完全版', align: 'right' }, { key: 'rate', label: '前月比', align: 'right' }]} data={tables.monthlyTable || []} /></SectionCard>
        <SectionCard title="週単位の参加者増加人数"><ScrollableTable columns={[{ key: 'week', label: '週 (月〜日)', align: 'left' }, { key: 'total', label: '合計増', align: 'right' }, { key: 'simpleCbhp', label: '簡易(CBHP)', align: 'right' }, { key: 'simplePart', label: '簡易(参加)', align: 'right' }, { key: 'full', label: '完全版', align: 'right' }, { key: 'rate', label: '前週比', align: 'right' }]} data={tables.weeklyTable || []} /></SectionCard>
      </div>
    </div>
  );
}
