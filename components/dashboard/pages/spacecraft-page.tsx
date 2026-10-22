"use client";

import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import {
  Rocket,
  Users,
  Trophy,
  Gauge,
  Radio,
  CalendarDays,
  Calendar,
  Clock,
  ArrowUpRight,
  Satellite,
  GitBranch,
  Dice5,
  AlertTriangle,
  Lightbulb,
  ListChecks,
  History,
  Wrench,
  Route,
  Grid3x3,
  HelpCircle,
  Shuffle,
  Scale,
  Stethoscope,
  TrendingDown,
  LogOut,
  Timer,
  BookOpen,
  UserCircle,
  CalendarRange,
} from "lucide-react";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { ScrollableTable } from "../scrollable-table";
import { RankingList } from "../ranking-list";
import { DonutChart } from "../charts/donut-chart";
import { LineChartComponent } from "../charts/line-chart";
import { StackedBarChart } from "../charts/stacked-bar-chart";
import { Button } from "@/components/ui/button";
import { cn, getJSTDate } from "@/lib/utils";
import {
  dropoff,
  earlyCauses,
  KEY_DECISIONS,
  parseProgress,
  playerTypes,
  termStats,
  timeStats,
  weeklyChoiceShare,
  weeklyTrends,
  type ProgressRow,
  applyFilter,
  balanceCheck,
  calibration,
  factorRanking,
  shortageByPhase,
  trajectoryByEnding,
  TRAJECTORY_KEYS,
  valueLabel,
  byHour,
  byWeekday,
  commonPaths,
  crossTab,
  dailyTrend,
  decisionFlows,
  dimensions,
  eventExposure,
  eventsPerKind,
  eventsPerPhase,
  quizStats,
  type CrossCell,
  type CrossMetric,
  type Dimension,
  designStats,
  endingBreakdown,
  endingByMode,
  endingLabel,
  endPhase,
  ENDING_COLORS,
  ENDING_ORDER,
  eventStats,
  finalValuesByEnding,
  flagStats,
  frequency,
  LABELS_VERSION,
  PATH_LABEL,
  parsePlays,
  progressHistogram,
  recentPlays,
  riskStats,
  summarize,
  todayKeyFrom,
  topDesigns,
  versionsOf,
  versionStats,
  type Filter,
  type Play,
} from "@/lib/spacecraft-analysis";

// プレイデータ（スプレッドシート play シート）の公開CSV
const CSV_URL = process.env.NEXT_PUBLIC_KPI_SPACECRAFT_CSV_URL ?? "";
// 途中でやめたプレイの到達地点（progress シート）の公開CSV。未設定なら離脱の分析だけ表示しない
const PROGRESS_CSV_URL = process.env.NEXT_PUBLIC_KPI_SPACECRAFT_PROGRESS_CSV_URL ?? "";
// 元データのスプレッドシート（閲覧権限のある人だけが開ける編集用URL）。空なら「元データ」ボタンを出さない
const SHEET_URL = "";

// 選択肢の結果を比べるときの最低人数（これ未満の選択肢は差の計算に使わない）
const MIN_SAMPLE = 10;

// 選択肢ごとの線などに使う色（既存ページの配色に合わせる）
const SERIES_COLORS = ["#38BDF8", "#EEEEBB", "#8B5CF6", "#22C55E", "#F59E0B", "#94A3B8"];

const PERIODS: { id: Filter["period"]; label: string }[] = [
  { id: "all", label: "全期間" },
  { id: "90d", label: "90日" },
  { id: "30d", label: "30日" },
  { id: "7d", label: "7日" },
];
const MODES: { id: Filter["mode"]; label: string }[] = [
  { id: "all", label: "全体" },
  { id: "beginner", label: "初心者" },
  { id: "expert", label: "玄人" },
];

export function SpacecraftPage() {
  const [plays, setPlays] = useState<Play[] | null>(null);
  const [invalid, setInvalid] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>({ period: "all", mode: "all", version: "all" });
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [rowDim, setRowDim] = useState("event:c-mission");
  const [colDim, setColDim] = useState("design:payload");
  const [metric, setMetric] = useState<CrossMetric>("successRate");
  const [onlyMissing, setOnlyMissing] = useState(false);
  const [trajKey, setTrajKey] = useState("budget");
  const [progress, setProgress] = useState<ProgressRow[] | null>(null);
  const [weeklyDecision, setWeeklyDecision] = useState(KEY_DECISIONS[0].id);

  useEffect(() => {
    if (!CSV_URL) {
      setError("NEXT_PUBLIC_KPI_SPACECRAFT_CSV_URL が設定されていません");
      return;
    }
    fetch(CSV_URL)
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = Papa.parse<Record<string, string>>(csvText, { header: true, skipEmptyLines: true });
        const result = parsePlays(parsed.data);
        setPlays(result.plays);
        setInvalid(result.invalid);
      })
      .catch((err) => {
        console.error("CSV Fetch Error:", err);
        setError("データの読み込みに失敗しました");
      });
    if (PROGRESS_CSV_URL) {
      fetch(PROGRESS_CSV_URL)
        .then((res) => res.text())
        .then((csvText) => setProgress(parseProgress(Papa.parse<Record<string, string>>(csvText, { header: true, skipEmptyLines: true }).data)))
        .catch((err) => console.error("Progress CSV Fetch Error:", err));
    }
  }, []);

  const today = todayKeyFrom(getJSTDate());
  const filtered = useMemo(() => (plays ? applyFilter(plays, filter, today) : []), [plays, filter, today]);
  const versions = useMemo(() => (plays ? versionsOf(plays) : []), [plays]);

  const a = useMemo(() => {
    if (!plays) return null;
    const events = eventStats(filtered, MIN_SAMPLE);
    const factors = factorRanking(filtered, MIN_SAMPLE);
    return {
      // 週ごとの変化は、期間の絞り込みに関係なく直近12週を表示する
      weekly: weeklyTrends(applyFilter(plays, { ...filter, period: "all" }, today), today),
      early: earlyCauses(filtered),
      types: playerTypes(filtered),
      time: timeStats(filtered),
      terms: termStats(filtered),
      dropoff: progress ? dropoff(filtered, applyFilter(progress, filter, today)) : null,
      factors,
      balance: balanceCheck(events, factors.effects),
      calibration: calibration(filtered),
      shortage: shortageByPhase(filtered),
      // 「今日・今週・今月」は期間の絞り込みに関係なく、モード・バージョンの絞り込みだけを反映する
      summary: summarize(applyFilter(plays, { ...filter, period: "all" }, today), today),
      filteredSummary: summarize(filtered, today),
      trend: dailyTrend(applyFilter(plays, { ...filter, period: "all" }, today), today, filter.period === "7d" ? 7 : filter.period === "30d" ? 30 : 90),
      endings: endingBreakdown(filtered),
      endingByMode: endingByMode(filtered),
      histogram: progressHistogram(filtered),
      endPhase: endPhase(filtered),
      design: designStats(filtered),
      topDesigns: topDesigns(filtered),
      events,
      impact: events.filter((e) => e.spread != null).sort((x, y) => (y.spread ?? 0) - (x.spread ?? 0)).slice(0, 20),
      risks: riskStats(filtered),
      flags: flagStats(filtered, MIN_SAMPLE).filter((f) => f.lift != null).slice(0, 25),
      troubles: frequency(filtered.map((p) => p.troubles)),
      improvements: frequency(filtered.map((p) => p.improvements)),
      achievements: frequency(filtered.map((p) => p.achievements)),
      finals: finalValuesByEnding(filtered),
      versions: versionStats(applyFilter(plays, { ...filter, version: "all" }, today)),
      hours: byHour(filtered),
      weekdays: byWeekday(filtered),
      recent: recentPlays(filtered),
      paths: commonPaths(filtered),
      flows: decisionFlows(filtered),
      dims: dimensions(filtered),
      quizzes: quizStats(filtered),
      exposure: eventExposure(filtered),
      perPhase: eventsPerPhase(filtered),
      perKind: eventsPerKind(filtered),
    };
  }, [plays, filtered, filter, today, progress]);

  const weeklyShare = useMemo(
    () => (plays ? weeklyChoiceShare(applyFilter(plays, { ...filter, period: "all" }, today), today, weeklyDecision) : null),
    [plays, filter, today, weeklyDecision],
  );

  const trajectory = useMemo(() => trajectoryByEnding(filtered, trajKey), [filtered, trajKey]);

  const cross = useMemo(() => {
    if (!a) return null;
    const r = a.dims.find((d) => d.id === rowDim) ?? a.dims[0];
    const c = a.dims.find((d) => d.id === colDim) ?? a.dims[1];
    return { row: r, col: c, table: crossTab(filtered, r, c, metric) };
  }, [a, filtered, rowDim, colDim, metric]);

  const eventDetail = a?.events.find((e) => e.event === selectedEvent) ?? a?.events[0];

  if (error)
    return (
      <div className="flex h-[400px] flex-col items-center justify-center gap-2 text-muted-foreground">
        <AlertTriangle className="h-6 w-6" />
        <span>{error}</span>
      </div>
    );

  if (!plays || !a)
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <Rocket className="h-5 w-5" />
          <span>宇宙機シミュレーターのデータを集計中...</span>
        </div>
      </div>
    );

  const s = a.summary;
  const fs = a.filteredSummary;
  const weekDiff = s.thisWeek - s.lastWeek;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">宇宙機プロジェクトシミュレーター 分析</h2>
          <p className="text-muted-foreground mt-1">
            エンディングまで遊んだプレイの記録から、プレイ数・結果・選択の傾向・バランスを確認できます。
          </p>
        </div>
        {SHEET_URL && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
          >
            <a href={SHEET_URL} target="_blank" rel="noopener noreferrer">
              <span>元データ (スプシ)</span>
              <ArrowUpRight className="h-4 w-4 opacity-70" />
            </a>
          </Button>
        )}
      </div>

      {/* 絞り込み */}
      <div className="glass-card rounded-2xl p-4 flex flex-wrap gap-x-8 gap-y-3 items-center">
        <FilterGroup label="期間" options={PERIODS} value={filter.period} onChange={(v) => setFilter({ ...filter, period: v })} />
        <FilterGroup label="モード" options={MODES} value={filter.mode} onChange={(v) => setFilter({ ...filter, mode: v })} />
        <FilterGroup
          label="バージョン"
          options={[{ id: "all", label: "すべて" }, ...versions.map((v) => ({ id: v, label: `v${v}` }))]}
          value={filter.version}
          onChange={(v) => setFilter({ ...filter, version: v })}
        />
        <span className="text-xs text-muted-foreground ml-auto">
          対象 {filtered.length.toLocaleString()} 件
          {invalid > 0 && ` ／ 読み込めなかった行 ${invalid} 件`}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <KpiCard
          title="総プレイ数"
          value={s.total.toLocaleString()}
          unit="回"
          icon={Users}
          accentColor="primary"
          description={`初心者 ${s.beginnerShare}% / 玄人 ${Math.round((100 - s.beginnerShare) * 10) / 10}%`}
        />
        <KpiCard title="今日のプレイ" value={`+${s.today}`} unit="回" icon={Clock} accentColor="warning" />
        <KpiCard
          title="今週のプレイ"
          value={`+${s.thisWeek}`}
          unit="回"
          icon={CalendarDays}
          accentColor="primary"
          trendValue={`先週比 ${weekDiff >= 0 ? "+" : ""}${weekDiff}`}
          trendType={weekDiff > 0 ? "up" : weekDiff < 0 ? "down" : "neutral"}
        />
        <KpiCard title="今月のプレイ" value={`+${s.thisMonth}`} unit="回" icon={Calendar} accentColor="success" />
        <KpiCard
          title="平均選択数"
          value={fs.avgChoices}
          unit="回"
          icon={ListChecks}
          accentColor="info"
          description="1プレイで選んだ回数"
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <KpiCard
          title="ミッション達成率"
          value={fs.successRate}
          unit="%"
          icon={Trophy}
          accentColor="success"
          description="「ミッション達成」「延命運用」の割合"
        />
        <KpiCard
          title="平均達成度"
          value={fs.avgProgress}
          unit="%"
          icon={Gauge}
          accentColor="primary"
          description="衛星と通信できたプレイの平均"
        />
        <KpiCard
          title="初通信の成功率"
          value={fs.contactRate}
          unit="%"
          icon={Radio}
          accentColor="info"
          description="打ち上げまで進んだプレイのうち"
        />
        <KpiCard
          title="早期終了率"
          value={fs.earlyRate}
          unit="%"
          icon={AlertTriangle}
          accentColor="danger"
          description="資金などの事情で打ち上げ前に終了"
        />
      </div>

      <SectionCard title="プレイ数の推移" description="エンディングに着いた日（日本時間・朝6時区切り）で数えています" icon={History}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartContainer height="h-[300px]" isEmpty={a.trend.length === 0}>
            <LineChartComponent
              data={a.trend}
              lines={[
                { dataKey: "全体", name: "全体", color: "#38BDF8" },
                { dataKey: "初心者", name: "初心者", color: "#EEEEBB" },
                { dataKey: "玄人", name: "玄人", color: "#8B5CF6" },
              ]}
            />
          </ChartContainer>
          <ChartContainer height="h-[300px]" isEmpty={a.trend.length === 0}>
            <LineChartComponent data={a.trend} lines={[{ dataKey: "累計", name: "累計", color: "#22C55E" }]} />
          </ChartContainer>
        </div>
      </SectionCard>

      <SectionCard
        title="週ごとの変化"
        description="直近12週（月曜はじまり）。ゲームを調整した後や、遊ぶ人の層が変わったときに、結果がどう動いたかを見られます（期間の絞り込みは無視）"
        icon={CalendarRange}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">達成率・初心者の割合・平均達成度（%）</p>
            <ChartContainer height="h-[280px]" isEmpty={a.weekly.every((w) => w.プレイ数 === 0)}>
              <LineChartComponent
                data={a.weekly}
                yAxisUnit="%"
                lines={[
                  { dataKey: "達成率", name: "達成率", color: "#22C55E" },
                  { dataKey: "平均達成度", name: "平均達成度", color: "#38BDF8" },
                  { dataKey: "初心者の割合", name: "初心者の割合", color: "#EEEEBB", dashed: true },
                ]}
              />
            </ChartContainer>
          </div>
          <div>
            <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
              <p className="text-sm font-semibold text-foreground">主な決断の選択率（%）</p>
              <select
                className="rounded-xl border border-border/50 bg-secondary/40 px-3 py-1.5 text-xs text-foreground"
                value={weeklyDecision}
                onChange={(e) => setWeeklyDecision(e.target.value)}
                aria-label="決断を選ぶ"
              >
                {KEY_DECISIONS.map((d) => (
                  <option key={d.id} value={d.id} className="bg-background">
                    {d.label}
                  </option>
                ))}
              </select>
            </div>
            <ChartContainer height="h-[280px]" isEmpty={!weeklyShare || weeklyShare.options.length === 0}>
              <LineChartComponent
                data={weeklyShare?.rows ?? []}
                yAxisUnit="%"
                lines={(weeklyShare?.options ?? []).map((o, i) => ({ dataKey: o, name: o, color: SERIES_COLORS[i % SERIES_COLORS.length] }))}
              />
            </ChartContainer>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">プレイ数：{a.weekly.map((w) => w.プレイ数).join(" / ")}（古い週 → 今週）</p>
      </SectionCard>

      <SectionCard
        title="途中でやめた場所"
        description="遊び始めたプレイのうち、各フェーズまで進んだ割合と、やめた場所（途中でページを閉じた・タブを切り替えたまま戻らなかったプレイ）"
        icon={LogOut}
      >
        {!PROGRESS_CSV_URL ? (
          <p className="text-sm text-muted-foreground py-6 text-center">
            NEXT_PUBLIC_KPI_SPACECRAFT_PROGRESS_CSV_URL（progress シートの公開CSV）を設定すると表示されます
          </p>
        ) : !a.dropoff ? (
          <p className="text-sm text-muted-foreground py-6 text-center">読み込み中...</p>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <MiniStat label="遊び始めた" value={a.dropoff.started.toLocaleString()} unit="回" />
              <MiniStat label="最後まで遊んだ" value={a.dropoff.finished.toLocaleString()} unit="回" />
              <MiniStat
                label="途中でやめた割合"
                value={a.dropoff.abandonRate}
                unit="%"
                note={a.dropoff.byMode.map((m) => `${m.mode} ${m.abandonRate}%`).join(" / ")}
              />
              <MiniStat label="やめるまでの時間（中央値）" value={a.dropoff.medianMinutesBeforeLeave} unit="分" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">各フェーズまで進んだ割合（%）</p>
                <ChartContainer height="h-[260px]" isEmpty={a.dropoff.started === 0}>
                  <LineChartComponent data={a.dropoff.funnel} yAxisUnit="%" lines={[{ dataKey: "進んだ割合", name: "進んだ割合", color: "#38BDF8" }]} />
                </ChartContainer>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">やめたフェーズ（件数）</p>
                <ChartContainer height="h-[260px]" isEmpty={a.dropoff.abandoned === 0}>
                  <StackedBarChart
                    data={a.dropoff.whereAbandoned}
                    bars={[
                      { dataKey: "初心者", name: "初心者", color: "#EEEEBB" },
                      { dataKey: "玄人", name: "玄人", color: "#8B5CF6" },
                    ]}
                  />
                </ChartContainer>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">やめたときに表示されていたイベント</p>
                {a.dropoff.lastEvents.length ? <RankingList items={a.dropoff.lastEvents} /> : <Empty />}
              </div>
            </div>
          </>
        )}
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="エンディングの割合" icon={Trophy}>
          <ChartContainer height="h-[300px]" isEmpty={a.endings.length === 0}>
            <DonutChart data={a.endings} centerLabel="プレイ" />
          </ChartContainer>
        </SectionCard>
        <SectionCard title="モード別のエンディング（%）" description="モードによって結果の出方がどう違うか" icon={Users}>
          <ChartContainer height="h-[300px]" isEmpty={filtered.length === 0}>
            <StackedBarChart
              data={a.endingByMode}
              bars={ENDING_ORDER.map((id) => ({ dataKey: id, name: endingLabel(id), color: ENDING_COLORS[id] }))}
            />
          </ChartContainer>
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard
          title="達成度の分布"
          description="衛星と通信できたプレイの、最終的なミッション達成度（70%以上でミッション達成）"
          icon={Gauge}
        >
          <ChartContainer height="h-[300px]" isEmpty={filtered.length === 0}>
            <StackedBarChart
              data={a.histogram}
              bars={[
                { dataKey: "初心者", name: "初心者", color: "#EEEEBB" },
                { dataKey: "玄人", name: "玄人", color: "#8B5CF6" },
              ]}
            />
          </ChartContainer>
        </SectionCard>
        <SectionCard
          title="運用までたどり着けなかったフェーズ"
          description="早期終了・初通信の失敗が、どの段階で起きたか"
          icon={AlertTriangle}
        >
          <ChartContainer height="h-[300px]" isEmpty={filtered.length === 0}>
            <StackedBarChart
              data={a.endPhase}
              bars={[
                { dataKey: "早期終了", name: "早期終了", color: "#94A3B8" },
                { dataKey: "通信できず", name: "通信できず", color: "#8B5CF6" },
              ]}
            />
          </ChartContainer>
        </SectionCard>
      </div>

      <SectionCard
        title="早期終了の原因"
        description={`資金不足などで打ち上げ前に終わったプレイ（${a.early.earlyCount}件）で、それ以外のプレイより多かった選択`}
        icon={AlertTriangle}
      >
        {a.early.rows.length ? (
          <ScrollableTable
            columns={[
              { key: "group", label: "決断" },
              { key: "category", label: "選択" },
              { key: "earlyShare", label: "早期終了で(%)", align: "right" },
              { key: "otherShare", label: "それ以外で(%)", align: "right" },
              { key: "rate", label: "差(pt)", align: "right" },
              { key: "earlyRate", label: "この選択の早期終了率(%)", align: "right" },
            ]}
            data={a.early.rows.map((r) => ({ ...r, rate: `${r.diff > 0 ? "+" : ""}${r.diff}` }))}
            maxVisibleRows={8}
          />
        ) : (
          <p className="text-sm text-muted-foreground py-6 text-center">早期終了が少ないため、比べられません（5件以上で表示）</p>
        )}
      </SectionCard>

      <SectionCard
        title="プレイ中の数値の推移"
        description="各フェーズの終わり時点の平均値を、エンディング別に表示します（最終的な値から、選択ごとの変化をさかのぼって求めています）"
        icon={TrendingDown}
      >
        <div className="mb-4">
          <FilterGroup
            label="数値"
            options={TRAJECTORY_KEYS.map((k) => ({ id: k, label: valueLabel(k) }))}
            value={trajKey}
            onChange={setTrajKey}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChartContainer height="h-[320px]" isEmpty={filtered.length === 0}>
              <LineChartComponent
                data={trajectory}
                lines={ENDING_ORDER.map((id) => ({ dataKey: endingLabel(id), name: endingLabel(id), color: ENDING_COLORS[id] }))}
              />
            </ChartContainer>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">足りなくなっていたプレイの割合（%）</p>
            <p className="text-xs text-muted-foreground mb-2">各フェーズの終わり時点。そのフェーズまで進んだプレイのうち</p>
            <ChartContainer height="h-[270px]" isEmpty={filtered.length === 0}>
              <LineChartComponent
                data={a.shortage}
                yAxisUnit="%"
                lines={[
                  { dataKey: "資金がマイナス", name: "資金がマイナス", color: "#F59E0B" },
                  { dataKey: "日程が足りない", name: "日程が足りない", color: "#8B5CF6" },
                ]}
              />
            </ChartContainer>
          </div>
        </div>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SectionCard
          title="機体構成の選ばれ方と結果"
          description="サブシステムごとの選択率と、その構成を選んだプレイの達成率"
          icon={Satellite}
          className="lg:col-span-2"
        >
          <ScrollableTable
            columns={[
              { key: "subsystem", label: "サブシステム" },
              { key: "option", label: "選択肢" },
              { key: "count", label: "回数", align: "right" },
              { key: "share", label: "選択率(%)", align: "right" },
              { key: "successRate", label: "達成率(%)", align: "right" },
              { key: "avgProgress", label: "平均達成度", align: "right" },
            ]}
            data={a.design}
            maxVisibleRows={8}
          />
        </SectionCard>
        <SectionCard title="よく選ばれる機体構成" description="電源 / 通信 / 姿勢制御 / 熱制御 / 観測機器" icon={Wrench}>
          {a.topDesigns.length ? <RankingList items={a.topDesigns} /> : <Empty />}
        </SectionCard>
      </div>

      <SectionCard
        title="結果を左右する要因のランキング"
        description={`打ち上げ前の決断（モード・機体構成・試験までの選択）をまとめて分析し、ほかの要因をそろえたときに達成率がどれだけ変わるかを推定しています（${a.factors.used.toLocaleString()}件。早期終了は除外）`}
        icon={Scale}
      >
        {a.factors.effects.length ? (
          <>
            <ScrollableTable
              columns={[
                { key: "group", label: "要因" },
                { key: "category", label: "選択" },
                { key: "baseline", label: "比べた基準" },
                { key: "rate", label: "影響(pt)", align: "right" },
                { key: "rawDiff", label: "単純比較(pt)", align: "right" },
                { key: "n", label: "件数", align: "right" },
              ]}
              data={a.factors.effects
                .filter((f) => Math.abs(f.effect) >= 1)
                .sort((x, y) => Math.abs(y.effect) - Math.abs(x.effect))
                .map((f) => ({
                  group: f.group,
                  category: f.reliable ? f.category : `${f.category}（少数）`,
                  baseline: f.baseline,
                  rate: `${f.effect > 0 ? "+" : ""}${f.effect}`,
                  rawDiff: f.rawDiff,
                  n: f.n,
                }))}
              maxVisibleRows={10}
            />
            <p className="text-xs text-muted-foreground mt-3">
              影響：基準の選択からその選択に変えたとき、達成率が平均で何ポイント変わるかの推定値（影響が1pt未満のものは省略）。単純比較：その選択をしたプレイと基準のプレイの達成率をそのまま比べた差。両者の差が大きいほど、ほかの選択と重なって見えていたことを意味します。
              「（出ていない）」は、そのイベントが出なかったプレイです。件数30未満は「（少数）」と表示しています。
            </p>
          </>
        ) : (
          <Empty />
        )}
      </SectionCard>

      <SectionCard
        title="結果への影響が大きいイベント"
        description={`選択肢によって、その後の達成率に差が出ているイベント（各選択肢 ${MIN_SAMPLE} 回以上のもの）。差は相関であり、選択が直接の原因とは限りません`}
        icon={GitBranch}
      >
        <ScrollableTable
          columns={[
            { key: "title", label: "イベント" },
            { key: "phase", label: "フェーズ" },
            { key: "appearRate", label: "出現率(%)", align: "right" },
            { key: "spread", label: "達成率の差(pt)", align: "right" },
            { key: "best", label: "達成率が高い選択肢" },
          ]}
          data={a.impact.map((e) => {
            const best = [...e.choices].filter((c) => c.count >= MIN_SAMPLE).sort((x, y) => y.successRate - x.successRate)[0];
            return { title: e.title, phase: e.phase, appearRate: e.appearRate, spread: e.spread ?? "-", best: best ? `${best.label}（${best.successRate}%）` : "-" };
          })}
          maxVisibleRows={8}
        />
      </SectionCard>

      <SectionCard title="イベント別の選択" description="イベントを選ぶと、選択肢ごとの選ばれ方と、選んだプレイのその後の結果を表示します" icon={ListChecks}>
        <div className="flex flex-col gap-4">
          <select
            className="w-full lg:w-[480px] rounded-xl border border-border/50 bg-secondary/40 px-3 py-2 text-sm text-foreground"
            value={eventDetail?.event ?? ""}
            onChange={(e) => setSelectedEvent(e.target.value)}
            aria-label="イベントを選ぶ"
          >
            {a.events.map((e) => (
              <option key={e.event} value={e.event} className="bg-background">
                [{e.phase}] {e.title}（{e.count}回）
              </option>
            ))}
          </select>
          {eventDetail ? (
            <>
              <p className="text-sm text-muted-foreground">
                対象プレイの {eventDetail.appearRate}% で出現（{eventDetail.count} 回）
              </p>
              <ScrollableTable
                columns={[
                  { key: "label", label: "選択肢" },
                  { key: "count", label: "回数", align: "right" },
                  { key: "share", label: "選択率(%)", align: "right" },
                  { key: "successRate", label: "その後の達成率(%)", align: "right" },
                  { key: "avgProgress", label: "平均達成度", align: "right" },
                ]}
                data={eventDetail.choices.map((c) => ({ ...c, label: c.count < MIN_SAMPLE ? `${c.label}（少数）` : c.label }))}
              />
            </>
          ) : (
            <Empty />
          )}
        </div>
      </SectionCard>

      <SectionCard
        title="よく通る道筋"
        description={`必ず通る主な決断（${PATH_LABEL}）の組み合わせのうち多いものと、隣り合う決断どうしの流れ`}
        icon={Route}
      >
        <ScrollableTable
          columns={[
            { key: "path", label: "道筋" },
            { key: "count", label: "件数", align: "right" },
            { key: "share", label: "割合(%)", align: "right" },
            { key: "successRate", label: "達成率(%)", align: "right" },
            { key: "avgProgress", label: "平均達成度", align: "right" },
          ]}
          data={a.paths}
          maxVisibleRows={8}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          {a.flows.map((f) => (
            <div key={f.title}>
              <p className="text-sm font-semibold text-foreground mb-2">{f.title}</p>
              <ScrollableTable
                columns={[
                  { key: "flow", label: "流れ" },
                  { key: "share", label: "割合(%)", align: "right" },
                  { key: "successRate", label: "達成率(%)", align: "right" },
                ]}
                data={f.rows}
                maxVisibleRows={5}
              />
            </div>
          ))}
        </div>
      </SectionCard>

      {cross && (
        <SectionCard
          title="組み合わせ分析"
          description="2つの切り口を選ぶと、組み合わせごとの結果を色の濃さで表示します（件数が5未満のマスは「-」）"
          icon={Grid3x3}
        >
          <div className="flex flex-wrap gap-3 mb-4 items-center">
            <DimSelect label="縦" dims={a.dims} value={cross.row.id} onChange={setRowDim} />
            <DimSelect label="横" dims={a.dims} value={cross.col.id} onChange={setColDim} />
            <FilterGroup
              label="指標"
              options={[
                { id: "successRate", label: "達成率" },
                { id: "avgProgress", label: "平均達成度" },
                { id: "count", label: "件数" },
              ]}
              value={metric}
              onChange={setMetric}
            />
          </div>
          <Heatmap table={cross.table} rowLabel={cross.row.label} metric={metric} />
        </SectionCard>
      )}

      <SectionCard
        title="遊び方のタイプ"
        description="選択の傾向から、慎重派（試験・確認を重視）・挑戦派（大きな目標・新技術）・広報派（発信・共感）・節約派（費用を抑える）に分類。どれも強くなければバランス型"
        icon={UserCircle}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ChartContainer height="h-[260px]" isEmpty={a.types.donut.length === 0}>
            <DonutChart data={a.types.donut} centerLabel="プレイ" />
          </ChartContainer>
          <div className="lg:col-span-2">
            <ScrollableTable
              columns={[
                { key: "type", label: "タイプ" },
                { key: "share", label: "割合(%)", align: "right" },
                { key: "successRate", label: "達成率(%)", align: "right" },
                { key: "avgProgress", label: "平均達成度", align: "right" },
                { key: "earlyRate", label: "早期終了率(%)", align: "right" },
                { key: "beginnerShare", label: "初心者の割合(%)", align: "right" },
              ]}
              data={a.types.rows}
            />
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm font-semibold text-foreground mb-2">タイプ別のエンディング（%）</p>
          <ChartContainer height="h-[260px]" isEmpty={filtered.length === 0}>
            <StackedBarChart
              data={a.types.endings}
              bars={ENDING_ORDER.map((id) => ({ dataKey: id, name: endingLabel(id), color: ENDING_COLORS[id] }))}
            />
          </ChartContainer>
        </div>
      </SectionCard>

      <SectionCard title="宇宙クイズの正答率" description="初心者モードで出るクイズ。まちがえても不利にならない設計です" icon={HelpCircle}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {a.quizzes.map((q) => (
            <div key={q.event} className="rounded-xl border border-border/50 p-4 bg-secondary/20">
              <p className="text-sm font-semibold text-foreground">{q.title}</p>
              <p className="mt-2">
                <span className="text-3xl font-bold text-foreground">{q.count ? q.correctRate : "-"}</span>
                <span className="text-sm text-muted-foreground ml-1">% 正解（{q.count}回出題）</span>
              </p>
              <div className="mt-3 space-y-2">
                {q.answers.map((ans) => (
                  <div key={ans.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className={ans.correct ? "text-success font-semibold" : "text-muted-foreground"}>
                        {ans.correct ? "✓ " : ""}
                        {ans.label}
                      </span>
                      <span className="text-muted-foreground">{ans.share}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full", ans.correct ? "bg-success" : "bg-primary/50")} style={{ width: `${ans.share}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title="イベントの出現ばらつき"
        description="1プレイで出るイベント数を絞っているため、どのイベントがどれくらい出ているかを確認できます"
        icon={Shuffle}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">フェーズごとの平均イベント数（1プレイあたり）</p>
            <ChartContainer height="h-[260px]" isEmpty={filtered.length === 0}>
              <StackedBarChart
                data={a.perPhase}
                bars={[
                  { dataKey: "初心者", name: "初心者", color: "#EEEEBB" },
                  { dataKey: "玄人", name: "玄人", color: "#8B5CF6" },
                ]}
              />
            </ChartContainer>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-2">種類ごとの平均イベント数（1プレイあたり）</p>
            <ChartContainer height="h-[260px]" isEmpty={filtered.length === 0}>
              <StackedBarChart
                data={a.perKind}
                bars={[
                  { dataKey: "初心者", name: "初心者", color: "#EEEEBB" },
                  { dataKey: "玄人", name: "玄人", color: "#8B5CF6" },
                ]}
              />
            </ChartContainer>
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm text-muted-foreground mb-3 cursor-pointer w-fit">
          <input type="checkbox" checked={onlyMissing} onChange={(e) => setOnlyMissing(e.target.checked)} />
          まだ一度も出ていないイベントだけ表示（
          {a.exposure.filter((x) => (x.beginner ?? 0) === 0 && (x.expert ?? 0) === 0).length} 件）
        </label>
        <ScrollableTable
          columns={[
            { key: "phase", label: "フェーズ" },
            { key: "title", label: "イベント" },
            { key: "kind", label: "種類" },
            { key: "target", label: "対象" },
            { key: "beginner", label: "初心者で出た(%)", align: "right" },
            { key: "expert", label: "玄人で出た(%)", align: "right" },
          ]}
          data={a.exposure
            .filter((x) => !onlyMissing || ((x.beginner ?? 0) === 0 && (x.expert ?? 0) === 0))
            .map((x) => ({ ...x, beginner: x.beginner ?? "対象外", expert: x.expert ?? "対象外" }))}
          maxVisibleRows={10}
        />
        <p className="text-xs text-muted-foreground mt-3">
          種類：柱＝条件を満たせば必ず出る／ランダム＝フェーズごとの枠の中から抽選／伏線回収＝前の選択を受けて出やすい／条件付き＝数値や設計しだい／偶然＝確率で起きる／随時＝資金不足などで割り込む
        </p>
      </SectionCard>

      <SectionCard
        title="バランスの健康診断"
        description="ゲームの調整が必要かもしれない箇所の一覧です（出現30回以上のイベントが対象。クイズは除く）"
        icon={Stethoscope}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">選ばれない選択肢（選択率5%未満）</p>
            <p className="text-xs text-muted-foreground mb-2">
              魅力が伝わっていない可能性。ただし、条件を満たしたときだけ表示される選択肢もあるため、少ないのが設計どおりの場合もあります
            </p>
            {a.balance.rare.length ? (
              <ScrollableTable
                columns={[
                  { key: "title", label: "イベント" },
                  { key: "choice", label: "選択肢" },
                  { key: "share", label: "選択率(%)", align: "right" },
                ]}
                data={a.balance.rare}
                maxVisibleRows={6}
              />
            ) : (
              <Empty />
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">偏りすぎた選択（1つが85%以上）</p>
            <p className="text-xs text-muted-foreground mb-2">ほとんどの人が同じものを選んでおり、選択として機能していない可能性</p>
            {a.balance.dominant.length ? (
              <ScrollableTable
                columns={[
                  { key: "title", label: "イベント" },
                  { key: "choice", label: "選ばれた選択肢" },
                  { key: "share", label: "選択率(%)", align: "right" },
                ]}
                data={a.balance.dominant}
                maxVisibleRows={6}
              />
            ) : (
              <Empty />
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">強すぎる・弱すぎる選択肢（影響 ±8pt 以上）</p>
            <p className="text-xs text-muted-foreground mb-2">「結果を左右する要因のランキング」で、件数30以上かつ影響が大きいもの</p>
            {a.balance.extreme.length ? (
              <ScrollableTable
                columns={[
                  { key: "verdict", label: "判定" },
                  { key: "group", label: "要因" },
                  { key: "category", label: "選択" },
                  { key: "rate", label: "影響(pt)", align: "right" },
                ]}
                data={a.balance.extreme}
                maxVisibleRows={6}
              />
            ) : (
              <Empty />
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">見込みのずれ（見込みの高さ別）</p>
            <p className="text-xs text-muted-foreground mb-2">画面に出した見込みと実際の成功率。2本の線が近いほど、見込みの表示が正直です</p>
            <ChartContainer height="h-[240px]" isEmpty={a.calibration.length === 0}>
              <LineChartComponent
                data={a.calibration}
                yAxisUnit="%"
                lines={[
                  { dataKey: "見込み", name: "見込み", color: "#94A3B8", dashed: true },
                  { dataKey: "実際", name: "実際", color: "#38BDF8" },
                ]}
              />
            </ChartContainer>
          </div>
        </div>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard
          title="確率判定の答え合わせ"
          description="画面に出した「見込み」の平均と、実際に成功した割合。差が大きいものは調整の候補です"
          icon={Dice5}
        >
          <ScrollableTable
            columns={[
              { key: "risk", label: "判定" },
              { key: "count", label: "回数", align: "right" },
              { key: "expected", label: "見込み(%)", align: "right" },
              { key: "actual", label: "実際(%)", align: "right" },
              { key: "diff", label: "差(pt)", align: "right" },
            ]}
            data={a.risks}
            maxVisibleRows={8}
          />
        </SectionCard>
        <SectionCard
          title="分岐と結果"
          description={`その分岐を通ったプレイと通らなかったプレイの達成率の差（${MIN_SAMPLE} 回以上ずつ）`}
          icon={GitBranch}
        >
          <ScrollableTable
            columns={[
              { key: "flag", label: "分岐（立てた選択）" },
              { key: "reachRate", label: "到達率(%)", align: "right" },
              { key: "successWith", label: "通った(%)", align: "right" },
              { key: "successWithout", label: "通らない(%)", align: "right" },
              { key: "lift", label: "差(pt)", align: "right" },
            ]}
            data={a.flags.map((f) => ({ ...f, lift: f.lift ?? "-" }))}
            maxVisibleRows={8}
          />
        </SectionCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SectionCard title="よく起きたトラブル" description="ミッションレポートの「トラブル・うまくいかなかったこと」" icon={AlertTriangle}>
          {a.troubles.length ? <RankingList items={a.troubles} /> : <Empty />}
        </SectionCard>
        <SectionCard title="よく出たヒント" description="ミッションレポートの「次に向けたヒント」＝つまずきやすい点" icon={Lightbulb}>
          {a.improvements.length ? <RankingList items={a.improvements} /> : <Empty />}
        </SectionCard>
        <SectionCard title="よく得られた成果" description="ミッションレポートの「得られた成果」" icon={Trophy}>
          {a.achievements.length ? <RankingList items={a.achievements} /> : <Empty />}
        </SectionCard>
      </div>

      <SectionCard title="エンディング別の最終数値（平均）" description="どんな状態で終わったプレイが、どのエンディングになったか" icon={Gauge}>
        <ScrollableTable
          columns={[
            { key: "ending", label: "エンディング" },
            ...a.finals.keys.map((k) => ({ key: k.key, label: k.label, align: "right" as const })),
          ]}
          data={a.finals.rows}
        />
      </SectionCard>

      <SectionCard
        title="プレイ時間と迷いやすいイベント"
        description={`選択にかかった時間の合計（結果を読む時間は含まない。1回30分で打ち切り）。v0.4.0 以降の ${a.time.count.toLocaleString()} 件`}
        icon={Timer}
      >
        {a.time.count ? (
          <>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <MiniStat label="プレイ時間（中央値）" value={a.time.medianMinutes.全体} unit="分" />
              <MiniStat label="初心者" value={a.time.medianMinutes.初心者} unit="分" />
              <MiniStat label="玄人" value={a.time.medianMinutes.玄人} unit="分" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">プレイ時間の分布（件数）</p>
                <ChartContainer height="h-[240px]">
                  <StackedBarChart
                    data={a.time.histogram}
                    bars={[
                      { dataKey: "初心者", name: "初心者", color: "#EEEEBB" },
                      { dataKey: "玄人", name: "玄人", color: "#8B5CF6" },
                    ]}
                  />
                </ChartContainer>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">1回の選択にかかった時間（秒・中央値）</p>
                <ChartContainer height="h-[240px]">
                  <StackedBarChart
                    data={a.time.perPhase}
                    bars={[
                      { dataKey: "初心者", name: "初心者", color: "#EEEEBB" },
                      { dataKey: "玄人", name: "玄人", color: "#8B5CF6" },
                    ]}
                  />
                </ChartContainer>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">迷いやすいイベント（選ぶまでの時間が長い順）</p>
                <ScrollableTable
                  columns={[
                    { key: "title", label: "イベント" },
                    { key: "phase", label: "フェーズ" },
                    { key: "median", label: "中央値(秒)", align: "right" },
                    { key: "count", label: "回数", align: "right" },
                  ]}
                  data={a.time.slowest}
                  maxVisibleRows={6}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">プレイ時間と結果</p>
                <ScrollableTable
                  columns={[
                    { key: "name", label: "プレイ時間" },
                    { key: "count", label: "件数", align: "right" },
                    { key: "successRate", label: "達成率(%)", align: "right" },
                    { key: "avgProgress", label: "平均達成度", align: "right" },
                  ]}
                  data={a.time.byDuration}
                />
              </div>
            </div>
          </>
        ) : (
          <p className="text-sm text-muted-foreground py-6 text-center">v0.4.0 以降のデータが入ると表示されます</p>
        )}
      </SectionCard>

      <SectionCard
        title="用語ボタンの利用"
        description={`どの用語の説明がよく開かれたか（＝分かりにくい言葉の候補）。v0.4.0 以降の ${a.terms.count.toLocaleString()} 件`}
        icon={BookOpen}
      >
        {a.terms.count ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <MiniStat
                label="用語を1回以上開いたプレイ"
                value={a.terms.usedRate.全体}
                unit="%"
                note={`初心者 ${a.terms.usedRate.初心者}% / 玄人 ${a.terms.usedRate.玄人}%`}
              />
              <MiniStat label="1プレイあたりの平均回数" value={a.terms.avgOpens} unit="回" />
              <MiniStat
                label="達成率"
                value={`${a.terms.successWith} / ${a.terms.successWithout}`}
                unit="%"
                note="用語を開いたプレイ / 開かなかったプレイ"
              />
            </div>
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold text-foreground mb-2">よく開かれた用語（開いたプレイの割合）</p>
              {a.terms.ranking.length ? <RankingList items={a.terms.ranking} /> : <Empty />}
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground py-6 text-center">v0.4.0 以降のデータが入ると表示されます</p>
        )}
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="時間帯別のプレイ数" description="エンディングに着いた時刻（日本時間）" icon={Clock}>
          <ChartContainer height="h-[260px]" isEmpty={filtered.length === 0}>
            <StackedBarChart data={a.hours} bars={[{ dataKey: "プレイ数", name: "プレイ数", color: "#38BDF8" }]} />
          </ChartContainer>
        </SectionCard>
        <SectionCard title="曜日別のプレイ数" icon={CalendarDays}>
          <ChartContainer height="h-[260px]" isEmpty={filtered.length === 0}>
            <StackedBarChart data={a.weekdays} bars={[{ dataKey: "プレイ数", name: "プレイ数", color: "#83CBEB" }]} />
          </ChartContainer>
        </SectionCard>
      </div>

      <SectionCard
        title="バージョン別の比較"
        description="イベントや数値を調整した前後で、結果がどう変わったか（バージョンの絞り込みは無視して表示）"
        icon={History}
      >
        <ScrollableTable
          columns={[
            { key: "version", label: "バージョン" },
            { key: "count", label: "プレイ数", align: "right" },
            { key: "successRate", label: "達成率(%)", align: "right" },
            { key: "avgProgress", label: "平均達成度", align: "right" },
            { key: "earlyRate", label: "早期終了率(%)", align: "right" },
            { key: "avgChoices", label: "平均選択数", align: "right" },
          ]}
          data={a.versions}
        />
      </SectionCard>

      <SectionCard
        title="最近のプレイ"
        description={`seed と バージョン があれば、シミュレーターの replayPlay で同じ展開を再現できます（イベント名の対応表は v${LABELS_VERSION} 時点）`}
        icon={History}
      >
        <ScrollableTable
          columns={[
            { key: "receivedAt", label: "日時" },
            { key: "mode", label: "モード" },
            { key: "ending", label: "エンディング" },
            { key: "progress", label: "達成度", align: "right" },
            { key: "choices", label: "選択数", align: "right" },
            { key: "version", label: "バージョン" },
            { key: "seed", label: "seed", align: "right" },
            { key: "playId", label: "playId" },
          ]}
          data={a.recent}
          maxVisibleRows={10}
        />
      </SectionCard>
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-semibold text-muted-foreground shrink-0 mr-1">{label}</span>
      {options.map((o) => (
        <button
          key={o.id}
          onClick={() => onChange(o.id)}
          className={cn(
            "px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap",
            value === o.id
              ? "bg-primary text-white shadow-md shadow-primary/30"
              : "bg-secondary/40 text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function DimSelect({
  label,
  dims,
  value,
  onChange,
}: {
  label: string;
  dims: Dimension[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
      {label}
      <select
        className="w-[260px] rounded-xl border border-border/50 bg-secondary/40 px-3 py-2 text-sm font-normal text-foreground"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {dims.map((d) => (
          <option key={d.id} value={d.id} className="bg-background">
            {d.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Heatmap({
  table,
  rowLabel,
  metric,
}: {
  table: ReturnType<typeof crossTab>;
  rowLabel: string;
  metric: CrossMetric;
}) {
  const { rows, cols, cell, rowTotal, colTotal } = table;
  if (rows.length === 0 || cols.length === 0) return <Empty />;
  const maxCount = Math.max(1, ...rows.flatMap((r) => cols.map((c) => cell(r, c).n)));
  const unit = metric === "count" ? "" : metric === "successRate" ? "%" : "";
  // 達成率・平均達成度は 0〜100 を、件数は最大値を基準に色の濃さを決める
  const alpha = (v: number | null) => (v == null ? 0 : metric === "count" ? v / maxCount : v / 100);
  const Cell = ({ c, bold }: { c: CrossCell; bold?: boolean }) => (
    <td
      className={cn("px-3 py-2 text-center text-sm whitespace-nowrap", bold ? "font-semibold" : "")}
      style={{ backgroundColor: `rgba(56, 189, 248, ${(alpha(c.value) * 0.7).toFixed(2)})` }}
      title={`${c.n}件`}
    >
      <div className="text-foreground">{c.value == null ? "-" : `${c.value}${unit}`}</div>
      {metric !== "count" && <div className="text-[10px] text-muted-foreground">n={c.n}</div>}
    </td>
  );
  return (
    <div className="overflow-auto rounded-xl border border-border/50">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-secondary/80">
            <th className="px-3 py-2 text-left text-xs font-semibold text-muted-foreground">{rowLabel}</th>
            {cols.map((c) => (
              <th key={c} className="px-3 py-2 text-center text-xs font-semibold text-muted-foreground">
                {c}
              </th>
            ))}
            <th className="px-3 py-2 text-center text-xs font-semibold text-muted-foreground">全体</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/30">
          {rows.map((r) => (
            <tr key={r}>
              <th className="px-3 py-2 text-left text-sm font-medium text-foreground whitespace-nowrap">{r}</th>
              {cols.map((c) => (
                <Cell key={c} c={cell(r, c)} />
              ))}
              <Cell c={rowTotal(r)} bold />
            </tr>
          ))}
          <tr>
            <th className="px-3 py-2 text-left text-sm font-semibold text-foreground">全体</th>
            {cols.map((c) => (
              <Cell key={c} c={colTotal(c)} bold />
            ))}
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function MiniStat({ label, value, unit, note }: { label: string; value: string | number; unit?: string; note?: string }) {
  return (
    <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1">
        <span className="text-2xl font-bold text-foreground">{value}</span>
        {unit && <span className="text-sm text-muted-foreground ml-1">{unit}</span>}
      </p>
      {note && <p className="text-xs text-muted-foreground mt-1">{note}</p>}
    </div>
  );
}

function Empty() {
  return <p className="text-sm text-muted-foreground py-8 text-center">表示できるデータがありません</p>;
}
