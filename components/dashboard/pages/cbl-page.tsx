'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { BookOpen, Eye, Star, TrendingUp, Calendar, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { KpiCard } from '../kpi-card';
import { SectionCard } from '../section-card';
import { ChartContainer } from '../chart-container';
import { ScrollableTable } from '../scrollable-table';
import { DonutChart } from '../charts/donut-chart';
import { StackedBarChart } from '../charts/stacked-bar-chart';
import { RankingList } from '../ranking-list';

const getJSTDate = () => new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));

const formatDiff = (num: number) => {
  if (num > 0) return `+${num.toLocaleString()}`;
  if (num < 0) return num.toLocaleString(); 
  return '0';
};

const CATEGORY_COLORS: string[] = ['#38BDF8', '#8B5CF6', '#22C55E', '#F59E0B', '#EF4444', '#EC4899', '#10B981', '#6B7280'];
const TYPE_COLORS: string[] = ['#8B5CF6', '#38BDF8', '#F59E0B', '#22C55E', '#EC4899'];
const LEVEL_COLORS: Record<string, string> = { '入門': '#22C55E', '初級': '#38BDF8', '中級': '#F59E0B', '上級': '#EF4444', '専門': '#8B5CF6' };

export function CBLPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTiWVQ_iCVoOVIzzsR28wnfaWqniBFolkDs3uOn_kMcquNmiVqg1ZVV_BGjlIfsyCQlRemOXeoL4Mhw/pub?gid=0&single=true&output=csv';

    fetch(csvUrl)
      .then(response => response.text())
      .then(csvText => {
        const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
        const rows = parsed.data as any[];

        if (rows.length === 0) return;
        const validRows = rows.filter(row => row.title && String(row.title).trim() !== '');
        if (validRows.length === 0) return;

        const nowJst = getJSTDate();
        const currentY = nowJst.getFullYear();
        const currentM = nowJst.getMonth() + 1;
        const currentMonthStr = `${currentY}/${String(currentM).padStart(2, '0')}`;

        const endOfPrevMonthJst = new Date(nowJst.getTime());
        endOfPrevMonthJst.setDate(0);
        const endOfPrevMonthNum = endOfPrevMonthJst.getFullYear() * 10000 + (endOfPrevMonthJst.getMonth() + 1) * 100 + endOfPrevMonthJst.getDate();

        let totalViews = 0, recommendCount = 0, currentMonthCount = 0, endOfPrevMonthArticles = 0;

        const categoryCounts = new Map<string, number>();
        const categoryViewsCounts = new Map<string, number>(); // ★ ビュー数用のMapを追加
        const typeCounts = new Map<string, number>();
        const levelCounts = new Map<string, number>();
        const monthlyCounts = new Map<string, number>();
        const articlesForRanking: { title: string; views: number }[] = [];

        validRows.forEach(row => {
          const views = parseInt(String(row.views || '0').replace(/,/g, ''), 10) || 0;
          totalViews += views;

          const isRecStr = String(row.isRecommend || '').trim().toLowerCase();
          if (isRecStr === 'true' || isRecStr === '1' || isRecStr === 'yes') recommendCount++;
          articlesForRanking.push({ title: String(row.title || '無題'), views: views });

          const dateStr = String(row.date || '').replace(/\-/g, '/').trim();
          let monthLabel = '未定';
          if (dateStr) {
            const parts = dateStr.split('/');
            if (parts.length >= 3) {
              const dNum = parseInt(parts[0], 10) * 10000 + parseInt(parts[1], 10) * 100 + parseInt(parts[2], 10);
              const ym = `${parts[0]}/${String(parseInt(parts[1], 10)).padStart(2, '0')}`;
              monthLabel = ym;
              if (ym === currentMonthStr) currentMonthCount++;
              if (dNum <= endOfPrevMonthNum) endOfPrevMonthArticles++;
            }
          }
          monthlyCounts.set(monthLabel, (monthlyCounts.get(monthLabel) || 0) + 1);

          const cat = String(row.category || '未分類').trim();
          const type = String(row.type || '未分類').trim();
          const level = String(row.level || '未設定').trim();
          
          categoryCounts.set(cat, (categoryCounts.get(cat) || 0) + 1);
          categoryViewsCounts.set(cat, (categoryViewsCounts.get(cat) || 0) + views); // ★ ビュー数を加算
          
          typeCounts.set(type, (typeCounts.get(type) || 0) + 1);
          levelCounts.set(level, (levelCounts.get(level) || 0) + 1);
        });

        const monthlyRate = endOfPrevMonthArticles === 0 ? 100 : Math.round((validRows.length / endOfPrevMonthArticles) * 100);

        const categoryDistribution = Array.from(categoryCounts.entries()).sort((a, b) => b[1] - a[1]).map(([name, value], i) => ({ name, value, color: CATEGORY_COLORS[i % CATEGORY_COLORS.length] }));
        const categoryViewsDistribution = Array.from(categoryViewsCounts.entries()).sort((a, b) => b[1] - a[1]).map(([name, value], i) => ({ name, value, color: CATEGORY_COLORS[i % CATEGORY_COLORS.length] })); // ★ ビュー数のデータ作成
        const typeDistribution = Array.from(typeCounts.entries()).sort((a, b) => b[1] - a[1]).map(([name, value], i) => ({ name, value, color: TYPE_COLORS[i % TYPE_COLORS.length] }));
        const levelDistribution = Array.from(levelCounts.entries()).sort((a, b) => b[1] - a[1]).map(([name, value]) => ({ name, value, color: LEVEL_COLORS[name] || '#6B7280' }));

        const sortedMonths = Array.from(monthlyCounts.keys()).filter(k => k !== '未定').sort();
        const monthlyTrend = sortedMonths.slice(-6).map(m => ({ name: m, 新規記事数: monthlyCounts.get(m) || 0 }));
        const topViewedArticles = articlesForRanking.sort((a, b) => b.views - a.views).slice(0, 10).map((a, i) => ({ rank: i + 1, name: a.title, count: a.views, percentage: 0 }));

        const categoryTable = Array.from(categoryCounts.entries()).sort((a, b) => b[1] - a[1]).map(([category, count]) => ({ category, count, percentage: `${Math.round((count / validRows.length) * 100)}%` }));

        setData({
          summary: { totalArticles: validRows.length, totalViews: totalViews, recommendCount: recommendCount, monthlyIncrease: currentMonthCount, monthlyRate },
          charts: { categoryDistribution, categoryViewsDistribution, typeDistribution, levelDistribution, monthlyTrend },
          rankings: { topViewedArticles },
          tables: { categoryTable }
        });
      })
      .catch(err => console.error('CSV Fetch Error:', err));
  }, []);

  if (!data) return (<div className="flex h-[400px] items-center justify-center text-muted-foreground"><div className="animate-pulse flex items-center gap-2"><BookOpen className="h-5 w-5" /><span>CBLデータを集計中...</span></div></div>);

  const { summary = {}, charts = {}, rankings = {}, tables = {} } = data;

  return (
    <div className="space-y-6">
      <div className="mb-6"><h2 className="text-2xl font-bold text-foreground">CBL (Library) 分析</h2><p className="text-muted-foreground mt-1">Cosmo Base Libraryの記事数、ビュー数、カテゴリ分布等を確認できます。</p></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="総記事数" value={summary.totalArticles?.toLocaleString() || 0} unit="記事" icon={BookOpen} accentColor="primary" />
        <KpiCard title="総ビュー数" value={summary.totalViews?.toLocaleString() || 0} unit="views" icon={Eye} accentColor="success" />
        <KpiCard title="おすすめ記事数" value={summary.recommendCount?.toLocaleString() || 0} unit="記事" icon={Star} accentColor="warning" />
        <KpiCard title="今月の新規記事" value={`+${summary.monthlyIncrease || 0}`} unit="記事" trendValue={`先月末比 ${summary.monthlyRate}%`} trendType="up" icon={TrendingUp} accentColor="accent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="カテゴリ別 記事数"><ChartContainer height="h-[300px]"><DonutChart data={charts.categoryDistribution || []} centerLabel="記事" /></ChartContainer></SectionCard>
        <SectionCard title="カテゴリ別 ビュー数"><ChartContainer height="h-[300px]"><DonutChart data={charts.categoryViewsDistribution || []} centerLabel="Views" /></ChartContainer></SectionCard>
        <SectionCard title="タイプ別 割合"><ChartContainer height="h-[300px]"><DonutChart data={charts.typeDistribution || []} centerLabel="記事" /></ChartContainer></SectionCard>
        <SectionCard title="レベル別 割合"><ChartContainer height="h-[300px]"><DonutChart data={charts.levelDistribution || []} centerLabel="記事" /></ChartContainer></SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月別 記事投稿数推移 (直近6ヶ月)"><ChartContainer height="h-[320px]"><StackedBarChart data={charts.monthlyTrend || []} bars={[{ dataKey: '新規記事数', name: '新規記事数', color: '#38BDF8' }]} /></ChartContainer></SectionCard>
        <SectionCard title="総ビュー数 トップ10ランキング">
          <div className="h-[320px] overflow-y-auto pr-2 custom-scrollbar">
            {rankings.topViewedArticles && rankings.topViewedArticles.length > 0 ? (<RankingList items={rankings.topViewedArticles.map((item: any) => ({ ...item, count: `${item.count.toLocaleString()} views` }))} />) : (<div className="flex h-full items-center justify-center text-muted-foreground">ビュー数データがありません</div>)}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="カテゴリ別 記事集計"><ScrollableTable columns={[{ key: 'category', label: 'カテゴリ名', align: 'left' }, { key: 'count', label: '記事数', align: 'right' }, { key: 'percentage', label: '全体割合', align: 'right' }]} data={tables.categoryTable || []} /></SectionCard>
    </div>
  );
}
