"use client";

import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import {
  Users,
  UserPlus,
  BookOpen,
  GraduationCap,
  Repeat,
  Target,
  Award,
  AlertTriangle,
  Activity,
  CalendarDays,
  BarChart2,
  Layers,
  Gauge,
  Database,
  ArrowUpDown,
  ExternalLink,
  Star,
  ListChecks,
} from "lucide-react";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer, EmptyState } from "../chart-container";
import { ScrollableTable } from "../scrollable-table";
import { LineChartComponent } from "../charts/line-chart";
import { LinearChartComponent } from "../charts/linear-chart";
import { StackedBarChart } from "../charts/stacked-bar-chart";
import { DonutChart } from "../charts/donut-chart";
import { HeatmapGrid } from "../charts/heatmap-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn, getJSTDate } from "@/lib/utils";
import { kpiFetch, kpiSource } from "@/lib/kpi-api";

// 過去問サイト（cbquiz.archive.fsif.jp）の利用状況。
// データは Archive の GAS（archive-stats.gs）が毎朝作る集計用スプシの kpi_* タブ（13個）を、
// これまでの CSV と同じ仕組み（kpiFetch(kpiSource(名前))）で読む。
// 仕様: kpi-archive.md（率は画面で計算し分母0は「算出不可」、平均正答率は合算、個人の一覧は作らない）

const CSV_SOURCES = {
  daily: kpiSource("ARCHIVE_DAILY"),
  tests: kpiSource("ARCHIVE_TESTS"),
  scoreDist: kpiSource("ARCHIVE_SCORE_DIST"),
  practice: kpiSource("ARCHIVE_PRACTICE"),
  segments: kpiSource("ARCHIVE_SEGMENTS"),
  questions: kpiSource("ARCHIVE_QUESTIONS"),
  promotion: kpiSource("ARCHIVE_PROMOTION"),
  retention: kpiSource("ARCHIVE_RETENTION"),
  heatmap: kpiSource("ARCHIVE_HEATMAP"),
  reports: kpiSource("ARCHIVE_REPORTS"),
  levels: kpiSource("ARCHIVE_LEVELS"),
  ops: kpiSource("ARCHIVE_OPS"),
  meta: kpiSource("ARCHIVE_META"),
};

// Quiz Manager（ログイン必須、別タブで開く）の過去問サイト画面へのリンク
const QUIZ_MANAGER_ARCHIVE_URL =
  "https://cosmo-base.github.io/quizManager/archive/";
const questionManagerUrl = (questionId: string) =>
  `${QUIZ_MANAGER_ARCHIVE_URL}?tab=questions&id=${encodeURIComponent(questionId)}`;

// --- ラベル変換（仕様3章のコード表） ---
const FIELD_LABELS: Record<string, string> = {
  astronomy: "天文",
  development: "宇宙開発",
  business: "宇宙ビジネス",
  exploration: "宇宙探査",
  history: "歴史",
  basics: "宇宙基礎",
  policy: "宇宙政策",
  all: "指定なし",
};
const DIFFICULTY_LABELS: Record<string, string> = {
  beginner: "初級",
  intermediate: "中級",
  advanced: "上級",
  expert: "専門家",
  unknown: "不明",
  all: "指定なし",
};
const TEST_TYPE_LABELS: Record<string, string> = {
  toIntermediate: "中級への昇格",
  toAdvanced: "上級への昇格",
  toExpert: "専門家への昇格",
  expertStars: "専門家の星",
};
const OUTCOME_LABELS: Record<string, string> = {
  completed_all: "全問回答して終了",
  completed_partial: "未回答ありで終了",
  timeout: "時間切れ",
  abandoned: "放置",
  in_progress: "回答中",
};
const USER_TYPE_LABELS: Record<string, string> = { user: "ログイン", guest: "ゲスト" };
const MODE_LABELS: Record<string, string> = { practice: "練習", review: "復習" };
const REPORT_REASON_LABELS: Record<string, string> = {
  answer: "正解",
  text: "問題文・選択肢",
  explanation: "解説",
  other: "その他",
};
const REPORT_STATUS_LABELS: Record<string, string> = {
  received: "未対応",
  resolved: "対応済み",
  dismissed: "対応しない",
};

const jp = (map: Record<string, string>, key: string) => map[key] || key || "不明";

// --- 率の表示（分母0は「算出不可」。0%とは出さない） ---
const formatRate = (numerator: number, denominator: number, digits = 1) => {
  if (!denominator || denominator <= 0) return "算出不可";
  return `${((numerator / denominator) * 100).toFixed(digits)}%`;
};
const rateValue = (numerator: number, denominator: number) =>
  denominator > 0 ? (numerator / denominator) * 100 : null;

const toNum = (v: any) => {
  const n = parseFloat(String(v ?? "").replace(/,/g, ""));
  return isNaN(n) ? 0 : n;
};

// "yyyy-MM-dd" / "yyyy/MM/dd" → yyyymmdd の数値
const dateToNum = (dateStr: string) => {
  const d = String(dateStr || "").replace(/-/g, "").replace(/\//g, "").trim();
  return parseInt(d.slice(0, 8), 10) || 0;
};
// "yyyy-MM" / "yyyy/MM" → yyyymm の数値
const monthToNum = (monthStr: string) => {
  const m = String(monthStr || "").replace(/-/g, "").replace(/\//g, "").trim();
  return parseInt(m.slice(0, 6), 10) || 0;
};
const numToDate = (num: number) => {
  const s = String(num).padStart(8, "0");
  return new Date(
    parseInt(s.slice(0, 4), 10),
    parseInt(s.slice(4, 6), 10) - 1,
    parseInt(s.slice(6, 8), 10),
  );
};
const dateNumAddDays = (num: number, days: number) => {
  const d = numToDate(num);
  d.setDate(d.getDate() + days);
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
};
const dateNumToMonthNum = (num: number) => Math.floor(num / 100);

type PeriodKey = "7" | "30" | "90" | "all" | "custom";
const PERIOD_OPTIONS: { key: PeriodKey; label: string; days: number | null }[] = [
  { key: "7", label: "7日", days: 7 },
  { key: "30", label: "30日", days: 30 },
  { key: "90", label: "90日", days: 90 },
  { key: "all", label: "全期間", days: null },
  { key: "custom", label: "指定", days: null },
];

interface PeriodRange {
  startNum: number;
  endNum: number;
  prevStartNum: number | null;
  prevEndNum: number | null;
  isAll: boolean;
  label: string;
}

function usePeriodRange(
  periodKey: PeriodKey,
  customStart: string,
  customEnd: string,
): PeriodRange {
  return useMemo(() => {
    const nowJst = getJSTDate();
    const todayNum =
      nowJst.getFullYear() * 10000 + (nowJst.getMonth() + 1) * 100 + nowJst.getDate();

    if (periodKey === "all") {
      return { startNum: 0, endNum: todayNum, prevStartNum: null, prevEndNum: null, isAll: true, label: "全期間" };
    }
    if (periodKey === "custom") {
      const startNum = customStart ? dateToNum(customStart) : todayNum;
      const endNum = customEnd ? dateToNum(customEnd) : todayNum;
      const safeStart = Math.min(startNum, endNum) || todayNum;
      const safeEnd = Math.max(startNum, endNum) || todayNum;
      const spanDays =
        Math.round((numToDate(safeEnd).getTime() - numToDate(safeStart).getTime()) / 86400000) + 1;
      const prevEndNum = dateNumAddDays(safeStart, -1);
      const prevStartNum = dateNumAddDays(prevEndNum, -(spanDays - 1));
      return { startNum: safeStart, endNum: safeEnd, prevStartNum, prevEndNum, isAll: false, label: "指定期間" };
    }
    const opt = PERIOD_OPTIONS.find((o) => o.key === periodKey);
    const days = opt?.days ?? 30;
    const startNum = dateNumAddDays(todayNum, -(days - 1));
    const prevEndNum = dateNumAddDays(startNum, -1);
    const prevStartNum = dateNumAddDays(prevEndNum, -(days - 1));
    return { startNum, endNum: todayNum, prevStartNum, prevEndNum, isAll: false, label: `${days}日間` };
  }, [periodKey, customStart, customEnd]);
}

const inRange = (num: number, start: number, end: number) => num >= start && num <= end;

// 月次タブは「選択期間が含まれる月」をまるごと対象にする（日単位には分割できないため）
const monthInRange = (monthNum: number, startNum: number, endNum: number) => {
  const startMonth = dateNumToMonthNum(startNum);
  const endMonth = dateNumToMonthNum(endNum);
  return monthNum >= startMonth && monthNum <= endMonth;
};

const parseCsv = (text: string): Record<string, string>[] =>
  (Papa.parse(text, { header: true, skipEmptyLines: true }).data as Record<string, string>[]) || [];

const CHART_COLORS = [
  "#38BDF8",
  "#8B5CF6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#EC4899",
  "#10B981",
  "#6B7280",
];

const formatDateTimeJst = (iso: string) => {
  if (!iso) return "-";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
};

type QuestionSortMode =
  | "gap_desc"
  | "accuracy_asc"
  | "accuracy_desc"
  | "unanswered_desc"
  | "reports_desc";

export function ArchivePage() {
  const [raw, setRaw] = useState<Record<string, Record<string, string>[]> | null>(null);
  const [meta, setMeta] = useState<{ generatedAt: string; version: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [periodKey, setPeriodKey] = useState<PeriodKey>("30");
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");
  const [questionSortMode, setQuestionSortMode] = useState<QuestionSortMode>("gap_desc");
  const [scoreDistTestType, setScoreDistTestType] = useState<string>("");

  const range = usePeriodRange(periodKey, customStart, customEnd);

  useEffect(() => {
    const keys = Object.keys(CSV_SOURCES) as (keyof typeof CSV_SOURCES)[];
    Promise.all(keys.map((k) => kpiFetch(CSV_SOURCES[k]).then((res) => res.text())))
      .then((texts) => {
        const result: Record<string, Record<string, string>[]> = {};
        keys.forEach((k, i) => {
          result[k] = parseCsv(texts[i]);
        });
        setRaw(result);
        const metaRow = result.meta?.[0];
        if (metaRow) {
          setMeta({
            generatedAt: String(metaRow.generated_at || ""),
            version: String(metaRow.version || ""),
          });
        }
      })
      .catch((err) => {
        console.error("Archive CSV Fetch Error:", err);
        setError("データの読み込みに失敗しました。");
      });
  }, []);

  // --- 集計 ---
  const computed = useMemo(() => {
    if (!raw) return null;

    // 1. kpi_daily（期間内合計・前期間合計）
    const dailyRows = raw.daily || [];
    const sumDaily = (rows: (Record<string, string> & { __num: number })[]) => {
      const agg = {
        activeUsers: 0,
        activeGuests: 0,
        newUsers: 0,
        logins: 0,
        practiceStarted: 0,
        practiceFinished: 0,
        practiceTimeout: 0,
        testStarted: 0,
        testFinished: 0,
        testTimeout: 0,
        testPassed: 0,
        reviewStarted: 0,
        reviewFinished: 0,
        basicQuestions: 0,
        basicAnswers: 0,
        basicCorrect: 0,
        reviewQuestions: 0,
        reviewAnswers: 0,
        reviewCorrect: 0,
        singleAnswers: 0,
        singleAnswersCorrect: 0,
        singleAnswersCounted: 0,
        singleRetries: 0,
        singleRetriesCorrect: 0,
        singleExplanationOnly: 0,
        promotions: 0,
        expertPasses: 0,
        reports: 0,
      };
      rows.forEach((r) => {
        agg.activeUsers += toNum(r.active_users);
        agg.activeGuests += toNum(r.active_guests);
        agg.newUsers += toNum(r.new_users);
        agg.logins += toNum(r.logins);
        agg.practiceStarted += toNum(r.practice_started);
        agg.practiceFinished += toNum(r.practice_finished);
        agg.practiceTimeout += toNum(r.practice_timeout);
        agg.testStarted += toNum(r.test_started);
        agg.testFinished += toNum(r.test_finished);
        agg.testTimeout += toNum(r.test_timeout);
        agg.testPassed += toNum(r.test_passed);
        agg.reviewStarted += toNum(r.review_started);
        agg.reviewFinished += toNum(r.review_finished);
        agg.basicQuestions += toNum(r.basic_questions);
        agg.basicAnswers += toNum(r.basic_answers);
        agg.basicCorrect += toNum(r.basic_correct);
        agg.reviewQuestions += toNum(r.review_questions);
        agg.reviewAnswers += toNum(r.review_answers);
        agg.reviewCorrect += toNum(r.review_correct);
        agg.singleAnswers += toNum(r.single_answers);
        agg.singleAnswersCorrect += toNum(r.single_answers_correct);
        agg.singleAnswersCounted += toNum(r.single_answers_counted);
        agg.singleRetries += toNum(r.single_retries);
        agg.singleRetriesCorrect += toNum(r.single_retries_correct);
        agg.singleExplanationOnly += toNum(r.single_explanation_only);
        agg.promotions += toNum(r.promotions);
        agg.expertPasses += toNum(r.expert_passes);
        agg.reports += toNum(r.reports);
      });
      return agg;
    };

    const dailyWithNum = dailyRows.map((r) => ({ ...r, __num: dateToNum(r.date) } as Record<string, string> & { __num: number }));
    const currentDailyRows = dailyWithNum.filter((r) => inRange(r.__num, range.startNum, range.endNum));
    const prevDailyRows =
      range.prevStartNum != null && range.prevEndNum != null
        ? dailyWithNum.filter((r) => inRange(r.__num, range.prevStartNum!, range.prevEndNum!))
        : [];
    const current = sumDaily(currentDailyRows);
    const prev = sumDaily(prevDailyRows);

    // 日別トレンド（折れ線用）
    const trendData = [...currentDailyRows]
      .sort((a, b) => a.__num - b.__num)
      .map((r) => ({
        name: String(r.date || "").slice(5),
        ログイン利用者: toNum(r.active_users),
        ゲスト: toNum(r.active_guests),
        単問回答: toNum(r.single_answers),
        単問解き直し: toNum(r.single_retries),
      }));

    // 2. kpi_tests（日粒度。期間で直接絞る）
    const testsRows = (raw.tests || []).map((r) => ({ ...r, __num: dateToNum(r.date) } as Record<string, string> & { __num: number }));
    const testsInRange = testsRows.filter((r) => inRange(r.__num, range.startNum, range.endNum));
    const testTypeAgg = new Map<
      string,
      {
        started: number;
        finished: number;
        passed: number;
        timeout: number;
        abandoned: number;
        adjusted: number;
        eligible: number;
        guestStarted: number;
        scoreSum: number;
        answeredSum: number;
        questionsSum: number;
        durationSum: number;
      }
    >();
    testsInRange.forEach((r) => {
      const type = String(r.test_type || "不明");
      if (!testTypeAgg.has(type))
        testTypeAgg.set(type, {
          started: 0,
          finished: 0,
          passed: 0,
          timeout: 0,
          abandoned: 0,
          adjusted: 0,
          eligible: 0,
          guestStarted: 0,
          scoreSum: 0,
          answeredSum: 0,
          questionsSum: 0,
          durationSum: 0,
        });
      const t = testTypeAgg.get(type)!;
      t.started += toNum(r.started);
      t.finished += toNum(r.finished);
      t.passed += toNum(r.passed);
      t.timeout += toNum(r.timeout);
      t.abandoned += toNum(r.abandoned);
      t.adjusted += toNum(r.adjusted);
      t.eligible += toNum(r.eligible);
      if (String(r.user_type) === "guest") t.guestStarted += toNum(r.started);
      t.scoreSum += toNum(r.score_sum);
      t.answeredSum += toNum(r.answered_sum);
      t.questionsSum += toNum(r.questions_sum);
      t.durationSum += toNum(r.duration_sec_sum);
    });
    const testTypeTable = Array.from(testTypeAgg.entries()).map(([type, t]) => ({
      type,
      typeLabel: jp(TEST_TYPE_LABELS, type),
      started: t.started,
      passRate: formatRate(t.passed, t.finished),
      avgScore: t.finished > 0 ? (t.scoreSum / t.finished).toFixed(1) : "-",
      timeoutRate: formatRate(t.timeout, t.started),
      adjustedRate: formatRate(t.adjusted, t.started),
      guestRate: formatRate(t.guestStarted, t.started),
    }));

    // 3. kpi_score_dist（月粒度。選択期間と重なる月を対象）
    const scoreDistRows = (raw.scoreDist || []).filter((r) =>
      monthInRange(monthToNum(r.month), range.startNum, range.endNum),
    );
    const scoreDistTestTypes = Array.from(new Set(scoreDistRows.map((r) => String(r.test_type || ""))))
      .filter(Boolean)
      .sort();
    const activeScoreTestType = scoreDistTestType || scoreDistTestTypes[0] || "";
    const scoreDistMap = new Map<number, number>();
    scoreDistRows
      .filter((r) => String(r.test_type || "") === activeScoreTestType)
      .forEach((r) => {
        const score = toNum(r.score);
        scoreDistMap.set(score, (scoreDistMap.get(score) || 0) + toNum(r.tests));
      });
    const scoreDistChart = Array.from({ length: 41 }, (_, score) => ({
      name: String(score),
      受験数: scoreDistMap.get(score) || 0,
    }));

    // 4. kpi_practice（月粒度）
    const practiceRows = (raw.practice || []).filter((r) =>
      monthInRange(monthToNum(r.month), range.startNum, range.endNum),
    );
    const practiceByDim = (dimension: string) => {
      const map = new Map<string, { attempts: number; finished: number; questions: number; answered: number; correct: number; duration: number }>();
      practiceRows
        .filter((r) => String(r.dimension) === dimension)
        .forEach((r) => {
          const value = String(r.value || "不明");
          if (!map.has(value)) map.set(value, { attempts: 0, finished: 0, questions: 0, answered: 0, correct: 0, duration: 0 });
          const v = map.get(value)!;
          v.attempts += toNum(r.attempts);
          v.finished += toNum(r.finished);
          v.questions += toNum(r.questions);
          v.answered += toNum(r.answered);
          v.correct += toNum(r.correct);
          v.duration += toNum(r.duration_sec);
        });
      return map;
    };
    const practiceModeMap = practiceByDim("mode");
    const practiceOutcomeMap = practiceByDim("outcome");
    const practiceFieldMap = practiceByDim("field");
    const practiceDifficultyMap = practiceByDim("difficulty");

    const practiceModeTable = Array.from(practiceModeMap.entries()).map(([mode, v]) => ({
      mode: jp(MODE_LABELS, mode),
      attempts: v.attempts,
      finished: v.finished,
      accuracy: formatRate(v.correct, v.answered),
      avgAnswered: v.finished > 0 ? (v.answered / v.finished).toFixed(1) : "-",
      avgDuration: v.finished > 0 ? `${Math.round(v.duration / v.finished)}秒` : "-",
    }));
    const practiceOutcomeChart = Array.from(practiceOutcomeMap.entries()).map(([outcome, v]) => ({
      name: jp(OUTCOME_LABELS, outcome),
      回数: v.attempts,
    }));
    const practiceFieldChart = Array.from(practiceFieldMap.entries())
      .filter(([field]) => field !== "all")
      .map(([field, v]) => ({
        name: jp(FIELD_LABELS, field),
        回数: v.attempts,
        正答率: rateValue(v.correct, v.answered) ?? 0,
      }));
    const practiceDifficultyChart = Array.from(practiceDifficultyMap.entries())
      .filter(([d]) => d !== "all")
      .map(([difficulty, v]) => ({
        name: jp(DIFFICULTY_LABELS, difficulty),
        回数: v.attempts,
        正答率: rateValue(v.correct, v.answered) ?? 0,
      }));

    // 7. kpi_segments（月粒度。分野・難易度・レベル・basic/review比較）
    const segmentsRows = (raw.segments || []).filter((r) =>
      monthInRange(monthToNum(r.month), range.startNum, range.endNum),
    );
    const segmentAgg = (segmentType: string) => {
      const map = new Map<string, { basicServed: number; basicAns: number; basicCor: number; reviewServed: number; reviewAns: number; reviewCor: number }>();
      segmentsRows
        .filter((r) => String(r.segment_type) === segmentType)
        .forEach((r) => {
          const seg = String(r.segment || "不明");
          if (!map.has(seg)) map.set(seg, { basicServed: 0, basicAns: 0, basicCor: 0, reviewServed: 0, reviewAns: 0, reviewCor: 0 });
          const v = map.get(seg)!;
          const served = toNum(r.served);
          const answers = toNum(r.answers);
          const correct = toNum(r.correct);
          if (String(r.bucket) === "review") {
            v.reviewServed += served;
            v.reviewAns += answers;
            v.reviewCor += correct;
          } else {
            v.basicServed += served;
            v.basicAns += answers;
            v.basicCor += correct;
          }
        });
      return map;
    };
    const buildSegmentTable = (segmentType: string, labelMap?: Record<string, string>) =>
      Array.from(segmentAgg(segmentType).entries())
        .filter(([seg]) => seg !== "all")
        .map(([seg, v]) => {
          const basicRate = rateValue(v.basicCor, v.basicAns);
          const reviewRate = rateValue(v.reviewCor, v.reviewAns);
          return {
            segment: labelMap ? jp(labelMap, seg) : seg,
            served: v.basicServed + v.reviewServed,
            basicRate: formatRate(v.basicCor, v.basicAns),
            reviewRate: formatRate(v.reviewCor, v.reviewAns),
            uplift:
              basicRate != null && reviewRate != null
                ? `${reviewRate >= basicRate ? "+" : ""}${(reviewRate - basicRate).toFixed(1)}pt`
                : "算出不可",
          };
        })
        .sort((a, b) => b.served - a.served);
    const fieldSegmentTable = buildSegmentTable("field", FIELD_LABELS);
    const difficultySegmentTable = buildSegmentTable("difficulty_at_start", DIFFICULTY_LABELS);
    const levelSegmentTable = buildSegmentTable("level_at_start");

    // 5. kpi_questions（全期間。期間フィルタなし）
    const questionsRows = raw.questions || [];
    const questionTable = questionsRows.map((r) => {
      const siteAns = toNum(r.site_basic_answers) + toNum(r.site_review_answers);
      const siteCor = toNum(r.site_basic_correct) + toNum(r.site_review_correct);
      const siteRate = rateValue(siteCor, siteAns);
      const snsRate = rateValue(toNum(r.sns_correct), toNum(r.sns_answers));
      const gap = siteRate != null && snsRate != null ? siteRate - snsRate : null;
      return {
        id: String(r.question_id || ""),
        field: jp(FIELD_LABELS, String(r.field || "")),
        status: r.status === "stopped" ? "停止" : "公開",
        siteAnswers: siteAns,
        siteAccuracy: siteRate,
        siteAccuracyStr: formatRate(siteCor, siteAns),
        snsAccuracy: snsRate,
        snsAccuracyStr: formatRate(toNum(r.sns_correct), toNum(r.sns_answers)),
        gap,
        gapStr: gap != null ? `${gap >= 0 ? "+" : ""}${gap.toFixed(1)}pt` : "算出不可",
        unanswered: toNum(r.unanswered),
        reportsTotal: toNum(r.reports_total),
        reportsOpen: toNum(r.reports_open),
        difficulty: jp(DIFFICULTY_LABELS, String(r.judged_difficulty || r.inherited_difficulty || "unknown")),
      };
    });

    // 6. kpi_promotion（全期間）
    const promotionRows = raw.promotion || [];
    const promotionByType = new Map<string, { promotedUsers: number; promotedDaysSum: number; notYetUsers: number }>();
    promotionRows.forEach((r) => {
      const type = String(r.test_type || "");
      if (!promotionByType.has(type)) promotionByType.set(type, { promotedUsers: 0, promotedDaysSum: 0, notYetUsers: 0 });
      const v = promotionByType.get(type)!;
      if (String(r.state) === "promoted") {
        v.promotedUsers += toNum(r.users);
        v.promotedDaysSum += toNum(r.days_sum);
      } else {
        v.notYetUsers += toNum(r.users);
      }
    });
    const promotionTable = Array.from(promotionByType.entries()).map(([type, v]) => ({
      type: jp(TEST_TYPE_LABELS, type),
      promotedUsers: v.promotedUsers,
      avgDays: v.promotedUsers > 0 ? (v.promotedDaysSum / v.promotedUsers).toFixed(1) : "-",
      notYetUsers: v.notYetUsers,
    }));

    // 8. kpi_retention
    const retentionRows = raw.retention || [];
    const cohorts = new Map<string, Map<number, number>>();
    retentionRows.forEach((r) => {
      const cohort = String(r.cohort_week || "");
      const offset = toNum(r.week_offset);
      if (!cohorts.has(cohort)) cohorts.set(cohort, new Map());
      cohorts.get(cohort)!.set(offset, toNum(r.users));
    });
    const retentionTable = Array.from(cohorts.entries())
      .sort((a, b) => b[0].localeCompare(a[0]))
      .slice(0, 12)
      .map(([cohort, offsets]) => {
        const base = offsets.get(0) || 0;
        const row: Record<string, string | number> = { cohort, base };
        [1, 4, 8, 12].forEach((w) => {
          const users = offsets.get(w);
          row[`w${w}`] = users == null ? "-" : `${users} (${formatRate(users, base)})`;
        });
        return row;
      });

    // 9. kpi_heatmap（直近90日固定）
    const heatmapRows = raw.heatmap || [];
    const heatmapAttempts = heatmapRows.map((r) => ({
      weekday: toNum(r.weekday),
      hour: toNum(r.hour),
      value: toNum(r.attempts_started),
    }));
    const heatmapSingle = heatmapRows.map((r) => ({
      weekday: toNum(r.weekday),
      hour: toNum(r.hour),
      value: toNum(r.single_events),
    }));
    const heatmapDays = heatmapRows[0]?.days ? toNum(heatmapRows[0].days) : 90;

    // 10. kpi_reports（月粒度）
    const reportsRows = (raw.reports || []).filter((r) =>
      monthInRange(monthToNum(r.month), range.startNum, range.endNum),
    );
    const reasonMap = new Map<string, number>();
    const statusMap = new Map<string, number>();
    let reportsTotal = 0;
    reportsRows.forEach((r) => {
      const count = toNum(r.reports);
      reportsTotal += count;
      const reason = jp(REPORT_REASON_LABELS, String(r.reason || ""));
      const status = jp(REPORT_STATUS_LABELS, String(r.status || ""));
      reasonMap.set(reason, (reasonMap.get(reason) || 0) + count);
      statusMap.set(status, (statusMap.get(status) || 0) + count);
    });
    const reportReasonChart = Array.from(reasonMap.entries())
      .map(([name, value], i) => ({ name, value, color: CHART_COLORS[i % CHART_COLORS.length] }))
      .sort((a, b) => b.value - a.value);
    const reportStatusChart = Array.from(statusMap.entries())
      .map(([name, value], i) => ({ name, value, color: CHART_COLORS[i % CHART_COLORS.length] }))
      .sort((a, b) => b.value - a.value);
    const reportsReceived = reportsRows
      .filter((r) => String(r.status) === "received")
      .reduce((sum, r) => sum + toNum(r.reports), 0);

    // 11. kpi_levels（直近1件 ＝ 最新のレベル分布）
    const levelsRows = [...(raw.levels || [])].sort((a, b) => dateToNum(a.date) - dateToNum(b.date));
    const latestLevels = levelsRows[levelsRows.length - 1];
    const levelDistribution: { name: string; value: number; color: string }[] = [];
    const starsDistribution: { name: string; value: number; color: string }[] = [];
    let levelsUsers = 0,
      levelsUsersLeft = 0;
    if (latestLevels) {
      levelsUsers = toNum(latestLevels.users);
      levelsUsersLeft = toNum(latestLevels.users_left);
      Object.keys(latestLevels)
        .filter((k) => k.startsWith("level_"))
        .forEach((k, i) => {
          const value = toNum(latestLevels[k]);
          if (value > 0)
            levelDistribution.push({
              name: jp(DIFFICULTY_LABELS, k.replace("level_", "")),
              value,
              color: CHART_COLORS[i % CHART_COLORS.length],
            });
        });
      Object.keys(latestLevels)
        .filter((k) => k.startsWith("stars_"))
        .sort()
        .forEach((k, i) => {
          const value = toNum(latestLevels[k]);
          if (value > 0)
            starsDistribution.push({
              name: `★${k.replace("stars_", "").replace("plus", "+")}`,
              value,
              color: CHART_COLORS[i % CHART_COLORS.length],
            });
        });
    }
    const levelsWithNum = levelsRows.map((r) => ({ ...r, __num: dateToNum(r.date) } as Record<string, string> & { __num: number }));
    const levelsInRange = levelsWithNum.filter((r) => inRange(r.__num, range.startNum, range.endNum));
    const levelKeys = latestLevels
      ? Object.keys(latestLevels).filter((k) => k.startsWith("level_"))
      : [];
    const levelsTrend = levelsInRange.map((r) => {
      const row: Record<string, string | number> = { name: String(r.date || "").slice(5) };
      levelKeys.forEach((k) => {
        row[jp(DIFFICULTY_LABELS, k.replace("level_", ""))] = toNum(r[k]);
      });
      return row;
    });

    // 12. kpi_ops（最新1件 ＝ 現在の運用状況スナップショット）
    const opsRows = [...(raw.ops || [])].sort((a, b) => dateToNum(a.date) - dateToNum(b.date));
    const latestOps = opsRows[opsRows.length - 1];

    return {
      summary: {
        current,
        prev,
        activeTotal: current.activeUsers + current.activeGuests,
        prevActiveTotal: prev.activeUsers + prev.activeGuests,
        avgAccuracy: formatRate(
          current.basicCorrect + current.reviewCorrect,
          current.basicAnswers + current.reviewAnswers,
        ),
        avgAccuracyValue: rateValue(
          current.basicCorrect + current.reviewCorrect,
          current.basicAnswers + current.reviewAnswers,
        ),
        testPassRate: formatRate(current.testPassed, current.testFinished),
        reportsReceived,
      },
      charts: {
        trendData,
        scoreDistChart,
        practiceOutcomeChart,
        practiceFieldChart,
        practiceDifficultyChart,
        reportReasonChart,
        reportStatusChart,
        levelDistribution,
        starsDistribution,
        levelsTrend,
        levelKeys: levelKeys.map((k) => jp(DIFFICULTY_LABELS, k.replace("level_", ""))),
        heatmapAttempts,
        heatmapSingle,
        heatmapDays,
      },
      tables: {
        testTypeTable,
        practiceModeTable,
        fieldSegmentTable,
        difficultySegmentTable,
        levelSegmentTable,
        questionTable,
        promotionTable,
        retentionTable,
      },
      scoreDistTestTypes,
      activeScoreTestType,
      levelsUsers,
      levelsUsersLeft,
      latestOps,
    };
  }, [raw, range]);

  if (error)
    return (
      <div className="flex h-[400px] items-center justify-center text-destructive">
        <p>{error}</p>
      </div>
    );
  if (!raw || !computed)
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <span>過去問サイトのデータを取得・集計中...</span>
        </div>
      </div>
    );

  const { summary, charts, tables } = computed;
  const hasAnyData = Object.values(raw).some((rows) => rows.length > 0);

  const sortedQuestions = [...tables.questionTable].sort((a, b) => {
    if (questionSortMode === "accuracy_asc") return (a.siteAccuracy ?? 999) - (b.siteAccuracy ?? 999);
    if (questionSortMode === "accuracy_desc") return (b.siteAccuracy ?? -1) - (a.siteAccuracy ?? -1);
    if (questionSortMode === "unanswered_desc") return b.unanswered - a.unanswered;
    if (questionSortMode === "reports_desc") return b.reportsTotal - a.reportsTotal;
    return (b.gap ?? -999) - (a.gap ?? -999);
  });

  const compareBadge = (curr: number, previous: number) => {
    if (range.isAll) return undefined;
    if (previous <= 0) return curr > 0 ? "前期間比 +∞%" : undefined;
    const rate = ((curr / previous) * 100).toFixed(0);
    return `前期間比 ${rate}%`;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2 border-b border-border/50 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">過去問サイト</h2>
          <p className="text-muted-foreground mt-1">
            毎日宇宙クイズの過去問サイトの利用状況を確認できます。
          </p>
        </div>
        {meta?.generatedAt && (
          <span className="text-xs text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded-full w-fit">
            最終更新: {formatDateTimeJst(meta.generatedAt)}
          </span>
        )}
      </div>

      {!hasAnyData && (
        <div className="glass-card rounded-2xl p-8 text-center text-muted-foreground">
          データがまだありません。GitHub Secrets に過去問サイトのCSV URLが登録されると表示されます。
        </div>
      )}

      {/* 期間選択 */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-muted-foreground mr-1">期間:</span>
        {PERIOD_OPTIONS.map((opt) => (
          <Button
            key={opt.key}
            variant="outline"
            size="sm"
            onClick={() => setPeriodKey(opt.key)}
            className={cn(
              "transition-all duration-200",
              periodKey === opt.key
                ? "bg-primary text-primary-foreground border-transparent"
                : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground",
            )}
          >
            {opt.label}
          </Button>
        ))}
        {periodKey === "custom" && (
          <div className="flex items-center gap-2 ml-1">
            <Input
              type="date"
              value={customStart}
              onChange={(e) => setCustomStart(e.target.value)}
              className="w-auto"
            />
            <span className="text-muted-foreground text-sm">〜</span>
            <Input
              type="date"
              value={customEnd}
              onChange={(e) => setCustomEnd(e.target.value)}
              className="w-auto"
            />
          </div>
        )}
        {!range.isAll && (
          <span className="text-xs text-muted-foreground ml-1">
            前の同じ長さの期間と比較
          </span>
        )}
      </div>

      {/* 1. 概要 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="利用者数(期間内)"
          value={summary.activeTotal.toLocaleString()}
          unit="人"
          icon={Users}
          accentColor="primary"
          trendValue={compareBadge(summary.activeTotal, summary.prevActiveTotal)}
          trendType={summary.activeTotal >= summary.prevActiveTotal ? "up" : "down"}
          description={`ログイン ${summary.current.activeUsers}・ゲスト ${summary.current.activeGuests}`}
        />
        <KpiCard
          title="新規ログイン"
          value={summary.current.newUsers.toLocaleString()}
          unit="人"
          icon={UserPlus}
          accentColor="success"
          trendValue={compareBadge(summary.current.newUsers, summary.prev.newUsers)}
          trendType={summary.current.newUsers >= summary.prev.newUsers ? "up" : "down"}
        />
        <KpiCard
          title="練習・テスト・単問"
          value={(
            summary.current.practiceStarted +
            summary.current.testStarted +
            summary.current.singleAnswers
          ).toLocaleString()}
          unit="回"
          icon={BookOpen}
          accentColor="info"
          description={`練習 ${summary.current.practiceStarted}・テスト ${summary.current.testStarted}・単問 ${summary.current.singleAnswers}`}
        />
        <KpiCard
          title="平均正答率(合算)"
          value={summary.avgAccuracy}
          icon={Target}
          accentColor="warning"
          description={`${summary.current.basicCorrect + summary.current.reviewCorrect}/${summary.current.basicAnswers + summary.current.reviewAnswers}件`}
        />
        <KpiCard
          title="テスト合格率"
          value={summary.testPassRate}
          icon={GraduationCap}
          accentColor="success"
          description={`${summary.current.testPassed}/${summary.current.testFinished}件(終了分)`}
        />
        <KpiCard
          title="昇格数"
          value={summary.current.promotions.toLocaleString()}
          unit="件"
          icon={Award}
          accentColor="accent"
          description={`専門家の星 +${summary.current.expertPasses}`}
        />
        <KpiCard
          title="未対応の報告(期間内)"
          value={summary.reportsReceived.toLocaleString()}
          unit="件"
          icon={AlertTriangle}
          accentColor="danger"
        />
        <KpiCard
          title="最後の取り込み"
          value={tables.testTypeTable.length > 0 ? "正常" : "-"}
          icon={Database}
          accentColor="info"
          description={
            computed.latestOps
              ? `${computed.latestOps.date || ""} 追加${toNum(computed.latestOps.ingest_added)}・更新${toNum(computed.latestOps.ingest_updated)}`
              : "データなし"
          }
        />
      </div>

      {/* 2. 利用の推移 */}
      <SectionCard title="利用の推移" icon={Activity} description="日ごとの利用者数・回数の推移(選択した期間)">
        <ChartContainer height="h-[300px]" isEmpty={charts.trendData.length === 0}>
          <LineChartComponent
            data={charts.trendData}
            lines={[
              { dataKey: "ログイン利用者", name: "ログイン利用者", color: "#38BDF8" },
              { dataKey: "ゲスト", name: "ゲスト", color: "#8B5CF6" },
            ]}
          />
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard
          title="曜日×時間帯 ヒートマップ(回の開始)"
          icon={CalendarDays}
          description={`直近${charts.heatmapDays}日固定(期間選択の対象外)`}
        >
          {charts.heatmapAttempts.some((c) => c.value > 0) ? (
            <HeatmapGrid data={charts.heatmapAttempts} color="56, 189, 248" />
          ) : (
            <EmptyState message="データがまだありません" />
          )}
        </SectionCard>
        <SectionCard
          title="曜日×時間帯 ヒートマップ(単問の回答)"
          icon={CalendarDays}
          description={`直近${charts.heatmapDays}日固定(期間選択の対象外)`}
        >
          {charts.heatmapSingle.some((c) => c.value > 0) ? (
            <HeatmapGrid data={charts.heatmapSingle} color="139, 92, 246" />
          ) : (
            <EmptyState message="データがまだありません" />
          )}
        </SectionCard>
      </div>

      <SectionCard
        title="継続率(コホート)"
        icon={Repeat}
        description="初めて使った週ごとに、何週後も使っていた人の割合(全期間・最新12コホート)"
      >
        {tables.retentionTable.length > 0 ? (
          <ScrollableTable
            columns={[
              { key: "cohort", label: "初回の週", align: "left" },
              { key: "base", label: "人数", align: "right" },
              { key: "w1", label: "1週後", align: "right" },
              { key: "w4", label: "4週後", align: "right" },
              { key: "w8", label: "8週後", align: "right" },
              { key: "w12", label: "12週後", align: "right" },
            ]}
            data={tables.retentionTable}
          />
        ) : (
          <EmptyState message="データがまだありません" />
        )}
      </SectionCard>

      {/* 3. 練習 */}
      <SectionCard title="練習・復習" icon={BookOpen} description="練習・復習の終わり方や分野・難易度の選ばれ方(選択期間が重なる月を集計)">
        <ScrollableTable
          columns={[
            { key: "mode", label: "モード", align: "left" },
            { key: "attempts", label: "開始数", align: "right" },
            { key: "finished", label: "終えた数", align: "right" },
            { key: "accuracy", label: "正答率(合算)", align: "right" },
            { key: "avgAnswered", label: "1回あたり回答数", align: "right" },
            { key: "avgDuration", label: "1回あたり時間", align: "right" },
          ]}
          data={tables.practiceModeTable.length > 0 ? tables.practiceModeTable : []}
        />
        {tables.practiceModeTable.length === 0 && <EmptyState message="データがまだありません" />}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">終わり方の内訳(回数)</h4>
            <ChartContainer height="h-[260px]" isEmpty={charts.practiceOutcomeChart.length === 0}>
              <StackedBarChart
                data={charts.practiceOutcomeChart}
                bars={[{ dataKey: "回数", name: "回数", color: "#38BDF8" }]}
              />
            </ChartContainer>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">分野別の選ばれ方(練習時に指定)</h4>
            <ChartContainer height="h-[260px]" isEmpty={charts.practiceFieldChart.length === 0}>
              <StackedBarChart
                data={charts.practiceFieldChart}
                bars={[{ dataKey: "回数", name: "回数", color: "#8B5CF6" }]}
              />
            </ChartContainer>
          </div>
        </div>
      </SectionCard>

      {/* 4. テスト */}
      <SectionCard title="テスト" icon={GraduationCap} description="種類ごとの受験状況(期間内の開始日で集計)">
        {tables.testTypeTable.length > 0 ? (
          <ScrollableTable
            columns={[
              { key: "typeLabel", label: "種類", align: "left" },
              { key: "started", label: "受験数", align: "right" },
              { key: "passRate", label: "合格率", align: "right" },
              { key: "avgScore", label: "平均点(40点満点)", align: "right" },
              { key: "timeoutRate", label: "時間切れ割合", align: "right" },
              { key: "adjustedRate", label: "構成調整割合", align: "right" },
              { key: "guestRate", label: "ゲスト割合", align: "right" },
            ]}
            data={tables.testTypeTable}
          />
        ) : (
          <EmptyState message="データがまだありません" />
        )}

        <div className="mt-6">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <h4 className="text-sm font-bold text-foreground">得点分布(月次。選択期間が重なる月)</h4>
            {computed.scoreDistTestTypes.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {computed.scoreDistTestTypes.map((t) => (
                  <Button
                    key={t}
                    variant="outline"
                    size="sm"
                    onClick={() => setScoreDistTestType(t)}
                    className={cn(
                      "transition-all duration-200",
                      computed.activeScoreTestType === t
                        ? "bg-primary text-primary-foreground border-transparent"
                        : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground",
                    )}
                  >
                    {jp(TEST_TYPE_LABELS, t)}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <ChartContainer height="h-[260px]" isEmpty={charts.scoreDistChart.every((d) => d.受験数 === 0)}>
            <LinearChartComponent
              data={charts.scoreDistChart}
              lines={[{ dataKey: "受験数", name: "受験数", color: "#F59E0B" }]}
            />
          </ChartContainer>
        </div>
      </SectionCard>

      {/* 5. 認定・レベル */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="個人レベルの分布(最新)" icon={Star}>
          <ChartContainer height="h-[280px]" isEmpty={charts.levelDistribution.length === 0}>
            <DonutChart data={charts.levelDistribution} centerLabel="人" />
          </ChartContainer>
          <p className="text-xs text-muted-foreground mt-3">
            利用者 {computed.levelsUsers.toLocaleString()}人(うちDiscord退出で匿名化 {computed.levelsUsersLeft.toLocaleString()}人)
          </p>
        </SectionCard>
        <SectionCard title="専門家の星の分布(最新)" icon={Star}>
          <ChartContainer height="h-[280px]" isEmpty={charts.starsDistribution.length === 0}>
            <DonutChart data={charts.starsDistribution} centerLabel="人" />
          </ChartContainer>
        </SectionCard>
      </div>

      <SectionCard title="昇格までの回数・日数" icon={Award} description="認定対象のテストを昇格するまでに何回受けたか(全期間)">
        {tables.promotionTable.length > 0 ? (
          <ScrollableTable
            columns={[
              { key: "type", label: "テストの種類", align: "left" },
              { key: "promotedUsers", label: "昇格した人数", align: "right" },
              { key: "avgDays", label: "平均日数", align: "right" },
              { key: "notYetUsers", label: "まだの人数", align: "right" },
            ]}
            data={tables.promotionTable}
          />
        ) : (
          <EmptyState message="データがまだありません" />
        )}
      </SectionCard>

      {/* 6. 問題 */}
      <SectionCard
        title="問題ごとの状況"
        icon={ListChecks}
        description="サイトとSNSの正答率の差・正答率・報告数などで並び替え(全期間)"
      >
        <div className="flex flex-wrap items-center justify-end gap-2 mb-4">
          <span className="text-sm text-muted-foreground mr-1">並び順:</span>
          {[
            { mode: "gap_desc" as const, label: "SNSとの差順" },
            { mode: "accuracy_asc" as const, label: "正答率が低い順" },
            { mode: "accuracy_desc" as const, label: "正答率が高い順" },
            { mode: "unanswered_desc" as const, label: "無回答が多い順" },
            { mode: "reports_desc" as const, label: "報告が多い順" },
          ].map((btn) => (
            <Button
              key={btn.mode}
              variant="outline"
              size="sm"
              onClick={() => setQuestionSortMode(btn.mode)}
              className={cn(
                "transition-all duration-200",
                questionSortMode === btn.mode
                  ? "bg-primary text-primary-foreground border-transparent"
                  : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground",
              )}
            >
              <ArrowUpDown className="h-3 w-3 mr-1" />
              {btn.label}
            </Button>
          ))}
        </div>
        {sortedQuestions.length > 0 ? (
          <ScrollableTable
            columns={[
              { key: "id", label: "問題ID", align: "left" },
              { key: "field", label: "分野", align: "left" },
              { key: "difficulty", label: "難易度", align: "left" },
              { key: "siteAccuracyStr", label: "サイト正答率", align: "right" },
              { key: "snsAccuracyStr", label: "SNS正答率", align: "right" },
              { key: "gapStr", label: "差(サイト-SNS)", align: "right" },
              { key: "unanswered", label: "無回答", align: "right" },
              { key: "reportsTotal", label: "報告数", align: "right" },
              { key: "link", label: "Quiz Manager", align: "center" },
            ]}
            data={sortedQuestions.map((q) => ({
              ...q,
              link: (
                <a
                  href={questionManagerUrl(q.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  編集 <ExternalLink className="h-3 w-3" />
                </a>
              ),
            })) as any}
          />
        ) : (
          <EmptyState message="データがまだありません" />
        )}
      </SectionCard>

      {/* 7. 分野・難易度・レベル */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SectionCard title="分野別 正答率(練習+復習)" icon={Layers} description="basicとreviewの比較(選択期間が重なる月)">
          {tables.fieldSegmentTable.length > 0 ? (
            <ScrollableTable
              columns={[
                { key: "segment", label: "分野", align: "left" },
                { key: "served", label: "出題数", align: "right" },
                { key: "basicRate", label: "練習・テスト正答率", align: "right" },
                { key: "reviewRate", label: "復習正答率", align: "right" },
                { key: "uplift", label: "復習での変化", align: "right" },
              ]}
              data={tables.fieldSegmentTable}
            />
          ) : (
            <EmptyState message="データがまだありません" />
          )}
        </SectionCard>
        <SectionCard title="難易度別 正答率" icon={Layers}>
          {tables.difficultySegmentTable.length > 0 ? (
            <ScrollableTable
              columns={[
                { key: "segment", label: "難易度", align: "left" },
                { key: "served", label: "出題数", align: "right" },
                { key: "basicRate", label: "練習・テスト正答率", align: "right" },
                { key: "reviewRate", label: "復習正答率", align: "right" },
                { key: "uplift", label: "復習での変化", align: "right" },
              ]}
              data={tables.difficultySegmentTable}
            />
          ) : (
            <EmptyState message="データがまだありません" />
          )}
        </SectionCard>
        <SectionCard title="個人レベル別 正答率" icon={Layers} description="回を始めたときのレベル(ログインのみ)">
          {tables.levelSegmentTable.length > 0 ? (
            <ScrollableTable
              columns={[
                { key: "segment", label: "レベル", align: "left" },
                { key: "served", label: "出題数", align: "right" },
                { key: "basicRate", label: "練習・テスト正答率", align: "right" },
                { key: "reviewRate", label: "復習正答率", align: "right" },
                { key: "uplift", label: "復習での変化", align: "right" },
              ]}
              data={tables.levelSegmentTable}
            />
          ) : (
            <EmptyState message="データがまだありません" />
          )}
        </SectionCard>
      </div>

      {/* 8. 単問 */}
      <SectionCard
        title="単問"
        icon={BarChart2}
        description="単問の回答・解き直し・解説だけ表示の推移(選択期間)"
      >
        <ChartContainer height="h-[280px]" isEmpty={charts.trendData.length === 0}>
          <LineChartComponent
            data={charts.trendData}
            lines={[
              { dataKey: "単問回答", name: "回答", color: "#38BDF8" },
              { dataKey: "単問解き直し", name: "解き直し", color: "#F59E0B" },
            ]}
          />
        </ChartContainer>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <KpiCard
            title="単問 回答数"
            value={summary.current.singleAnswers.toLocaleString()}
            unit="件"
            icon={BarChart2}
            accentColor="primary"
          />
          <KpiCard
            title="単問 正答率(最初の回答)"
            value={formatRate(summary.current.singleAnswersCorrect, summary.current.singleAnswersCounted)}
            icon={Target}
            accentColor="success"
          />
          <KpiCard
            title="解き直し 正答率"
            value={formatRate(summary.current.singleRetriesCorrect, summary.current.singleRetries)}
            icon={Repeat}
            accentColor="info"
          />
          <KpiCard
            title="解説だけ表示"
            value={summary.current.singleExplanationOnly.toLocaleString()}
            unit="件"
            icon={BookOpen}
            accentColor="warning"
          />
        </div>
      </SectionCard>

      {/* 9. 誤り報告 */}
      <SectionCard title="誤り報告" icon={AlertTriangle} description="理由・状態ごとの件数(選択期間が重なる月)">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartContainer height="h-[260px]" isEmpty={charts.reportReasonChart.length === 0}>
            <DonutChart data={charts.reportReasonChart} centerLabel="件" />
          </ChartContainer>
          <ChartContainer height="h-[260px]" isEmpty={charts.reportStatusChart.length === 0}>
            <DonutChart data={charts.reportStatusChart} centerLabel="件" />
          </ChartContainer>
        </div>
      </SectionCard>

      {/* 10. 運用 */}
      <SectionCard title="運用状況(最新日)" icon={Gauge}>
        {computed.latestOps ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <KpiCard
              title="問題数"
              value={toNum(computed.latestOps.questions_total).toLocaleString()}
              unit="問"
              icon={BookOpen}
              accentColor="primary"
              description={`公開 ${toNum(computed.latestOps.questions_published)}・停止 ${toNum(computed.latestOps.questions_stopped)}`}
            />
            <KpiCard
              title="回の数"
              value={toNum(computed.latestOps.attempts_total).toLocaleString()}
              unit="回"
              icon={Activity}
              accentColor="info"
              description={`回答中 ${toNum(computed.latestOps.attempts_in_progress)}・放置 ${toNum(computed.latestOps.attempts_abandoned)}`}
            />
            <KpiCard
              title="利用者数"
              value={toNum(computed.latestOps.users_total).toLocaleString()}
              unit="人"
              icon={Users}
              accentColor="success"
              description={`匿名化 ${toNum(computed.latestOps.users_anonymized)}`}
            />
            <KpiCard
              title="未対応の報告(全体)"
              value={toNum(computed.latestOps.reports_open).toLocaleString()}
              unit="件"
              icon={AlertTriangle}
              accentColor="danger"
            />
            <KpiCard
              title="有効なログイン数"
              value={toNum(computed.latestOps.valid_logins).toLocaleString()}
              unit="件"
              icon={UserPlus}
              accentColor="accent"
            />
            <KpiCard
              title="取り込みで確認が必要"
              value={toNum(computed.latestOps.ingest_review_needed).toLocaleString()}
              unit="件"
              icon={AlertTriangle}
              accentColor="warning"
            />
            <KpiCard
              title="最後の取り込み"
              value={computed.latestOps.ingest_last_at ? formatDateTimeJst(computed.latestOps.ingest_last_at) : "-"}
              icon={Database}
              accentColor="info"
              description={
                computed.latestOps.ingest_error === "1" || computed.latestOps.ingest_error === "true"
                  ? "前回エラーあり"
                  : `追加${toNum(computed.latestOps.ingest_added)}・更新${toNum(computed.latestOps.ingest_updated)}・正解未定${toNum(computed.latestOps.ingest_unresolved)}`
              }
            />
            <KpiCard
              title="スプシ使用量"
              value={formatRate(toNum(computed.latestOps.sheet_cells_used), toNum(computed.latestOps.sheet_cells_limit))}
              icon={Database}
              accentColor="info"
              description={`${toNum(computed.latestOps.sheet_cells_used).toLocaleString()} / ${toNum(computed.latestOps.sheet_cells_limit).toLocaleString()}セル`}
            />
          </div>
        ) : (
          <EmptyState message="データがまだありません" />
        )}
      </SectionCard>
    </div>
  );
}
