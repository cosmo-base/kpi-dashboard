"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  Users,
  TrendingUp,
  Calendar,
  CalendarDays,
  Percent,
  ArrowUpRight,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { ScrollableTable } from "../scrollable-table";
import { LineChartComponent } from "../charts/line-chart";
import { LinearChartComponent } from "../charts/linear-chart";
import { StackedBarChart } from "../charts/stacked-bar-chart";
import { DonutChart } from "../charts/donut-chart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GrowthProjectionSection } from "../growth-projection-section";

const getJSTDate = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));

const formatDiff = (num: number) => {
  if (num > 0) return `+${num.toLocaleString()}`;
  if (num < 0) return num.toLocaleString();
  return "0";
};

const RESULT_COLORS = [
  "#38BDF8",
  "#8B5CF6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#EC4899",
  "#10B981",
  "#6B7280",
  "#F472B6",
  "#A78BFA",
  "#34D399",
  "#FBBF24",
  "#0EA5E9",
  "#D946EF",
];

interface QuestionConfig {
  key: string;
  text: string;
  choices: string[];
}

// ★ 新しい診断コンテンツを増やす場合は、この配列に追加するだけでタブが自動で増えます
interface CosmoMatchVariantConfig {
  key: string;
  label: string;
  // 「ウェブに公開」から取得したCSV出力URLをここに設定してください
  csvUrl: string;
  sheetUrl: string;
  resultColumn: string;
  resultLabel: string;
  axisColumns: string[];
  questions: QuestionConfig[];
  color: string;
}

const ROCKET_QUESTIONS: QuestionConfig[] = [
  {
    key: "Q1",
    text: "一番ワクワクするのは？",
    choices: [
      "圧倒的な迫力やスケール",
      "「どうやって実現したの？」と思う技術",
      "長い歴史や受け継がれてきた物語",
      "新しい時代を切り開く挑戦",
    ],
  },
  {
    key: "Q2",
    text: "応援したくなるのは？",
    choices: [
      "頼れる王道の存在",
      "失敗しても挑み続ける存在",
      "独自の道を進む個性派",
      "長い間活躍してきたベテラン",
    ],
  },
  {
    key: "Q3",
    text: "もし打ち上げを見に行くなら？",
    choices: [
      "誰もが注目する大型ミッション",
      "新型ロケットの初飛行",
      "特別な技術が使われたミッション",
      "歴史に残る名機の活躍",
    ],
  },
  {
    key: "Q4",
    text: "宇宙開発で一番大事だと思うのは？",
    choices: [
      "信頼性と実績の積み重ね",
      "コストを下げて誰でも使えること",
      "技術の限界に挑むこと",
      "国の威信をかけた力強さ",
    ],
  },
  {
    key: "Q5",
    text: "あなたが惹かれるのは？（二択）",
    choices: ["積み重ねてきた長い実績", "前例のない未知への挑戦"],
  },
  {
    key: "Q6",
    text: "直感的にどちらが好き？（二択）",
    choices: ["みんなに愛される王道", "唯一無二の尖った個性"],
  },
  {
    key: "Q7",
    text: "好きなストーリーは？",
    choices: [
      "幾多の失敗を乗り越えた逆転劇",
      "誰も真似できない技術を磨き続けた職人技",
      "時代を超えて愛され続ける不朽の名作",
      "世界を驚かせた大きすぎる夢の実現",
    ],
  },
  {
    key: "Q8",
    text: "ロケットに例えるなら、あなたは？",
    choices: [
      "黙々と使命を果たす縁の下の力持ち",
      "誰よりも高く、誰よりも速く",
      "新しい道を誰よりも先に切り開く先駆者",
      "長年培った技と知恵で挑む熟練者",
    ],
  },
];

const CONSTELLATION_QUESTIONS: QuestionConfig[] = [
  {
    key: "Q1",
    text: "新しいプロジェクトや趣味を始める時、あなたの原動力は？",
    choices: [
      "まずは歴史やデータを徹底的に調べ上げ、勝算と計画を立ててから動きたい。",
      "「面白そう！」という直感のままに、前例のない未知の領域へ飛び込みたい。",
    ],
  },
  {
    key: "Q2",
    text: "チームでの仕事や文化祭の準備。あなたが一番実力を発揮できるポジションは？",
    choices: [
      "方向性をバシッと決めて、みんなの前に立ってプロジェクトを引っ張る役。",
      "必要な機材の調達やタスクの整理など、プロジェクトを裏から確実に支える役。",
    ],
  },
  {
    key: "Q3",
    text: "初対面の人ばかりが集まる交流会やキックオフ。あなたの振る舞いは？",
    choices: [
      "自分からフランクに声をかけ、いろんな背景を持つ人と広くワイワイ打ち解ける。",
      "たまたま隣になった数人と、お互いの価値観や専門分野について静かに深く語り合う。",
    ],
  },
  {
    key: "Q4",
    text: "仕事や作業で使う「新しいツール」を導入するなら、どちらを選ぶ？",
    choices: [
      "長く愛され、多くの人を助けてきた実績のある、信頼できる定番ツール。",
      "まだ誰も使いこなしていない、最新鋭の機能を持った挑戦的なツール。",
    ],
  },
  {
    key: "Q5",
    text: "業務中に想定外のトラブル発生！チームが焦る中、あなたの行動は？",
    choices: [
      "自ら率先して動き、その場の直感と判断力でスピーディに火消しに走る。",
      "一歩引いて原因のデータを整理し、リーダーが正しい指示を出せるようサポートする。",
    ],
  },
  {
    key: "Q6",
    text: "大きな目標を達成した時、その成果をどうやって周りに共有する？",
    choices: [
      "「最高だった！」という熱量や感動を、エモーショナルな言葉やデザインで発信する。",
      "どんな成果が出たのかを、正確な数値や客観的なレポートとして冷静にまとめる。",
    ],
  },
  {
    key: "Q7",
    text: "プロジェクト成功の打ち上げ・飲み会。あなたはどのポジションにいる？",
    choices: [
      "中心のテーブルに陣取り、たくさんの人とグラスを交わして場を盛り上げる。",
      "隅の席で、苦労を共にした数人のコアメンバーと静かに達成感を分かち合う。",
    ],
  },
  {
    key: "Q8",
    text: "次の仕事を選ぶなら、どちらの依頼を受けたい？",
    choices: [
      "確実な成果と正確性が求められる、地に足のついたルーティンワーク。",
      "リスクはあるが胸が熱くなる、まだ誰も成功したことのない新規開拓。",
    ],
  },
  {
    key: "Q9",
    text: "チームに余った予算が支給されました。何に投資する？",
    choices: [
      "メンバーのモチベーションが上がるような、イベントやリフレッシュ空間の充実。",
      "今後の業務効率や成功率を論理的に引き上げる、高価な分析ソフトや機材。",
    ],
  },
  {
    key: "Q10",
    text: "チームに新しく入ったメンバーが、上手く馴染めず悩んでいます。どう助ける？",
    choices: [
      "自分がハブになって全員に声をかけ、みんなで歓迎するオープンな場を作る。",
      "1対1でじっくり話を聞き、その人が得意な作業に集中できるよう裏から環境を整える。",
    ],
  },
  {
    key: "Q11",
    text: "あなたの活躍が社内報（またはメディア）で紹介されることに。理想の紹介のされ方は？",
    choices: [
      "自分の顔写真や熱いインタビューが、プロジェクトの「顔」として大々的に載る。",
      "自分が裏で組み上げた完璧なシステムや仕組みが、プロジェクトの「成果」として渋く紹介される。",
    ],
  },
  {
    key: "Q12",
    text: "最後に。あなたにとって、チームで働く（活動する）最大の意義とは？",
    choices: [
      "自らが先陣を切り、次々と新しい価値や前例をアクティブに生み出し続けること。",
      "自分の得意な役割を全うし、チーム全体が確実に前へ進むのを縁の下で支えること。",
    ],
  },
];

const VARIANTS: CosmoMatchVariantConfig[] = [
  {
    key: "rocket",
    label: "日本のロケット編",
    csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQENBPEZ3ep1J54G09l7I-vPMaMC6wNxr55bXBsdAdj_xp6gy5ksoM27EyITCuGObi0Kzxbzu2HpLM1/pub?gid=1977317423&single=true&output=csv",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1-Zpc-AbelO2orxbVMP2TzG9Bkqf0SI1MJ1nRbiy2B8M/edit?gid=1977317423#gid=1977317423",
    resultColumn: "判定ロケット",
    resultLabel: "判定ロケット",
    axisColumns: [
      "パワー",
      "技術",
      "歴史",
      "エース",
      "挑戦",
      "個性",
      "未来",
      "信頼",
    ],
    questions: ROCKET_QUESTIONS,
    color: "#38BDF8",
  },
  {
    key: "constellation",
    label: "88星座編",
    csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTbfWKxGFEmOkuaszkGJNUcX4FySkqmdxKJtaXG0esrjJoHSo5zmEoOGLTmzH09YJd9BZY1DyqNc7P/pub?gid=1977317423&single=true&output=csv",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1XIVQ1ID91XG4AT7jBeAw1QGbu4EvGUYdnrjferIxN4M/edit?gid=1977317423#gid=1977317423",
    resultColumn: "判定",
    resultLabel: "判定星座",
    axisColumns: ["物語", "活動", "役割", "関係", "対象", "温度", "存在"],
    questions: CONSTELLATION_QUESTIONS,
    color: "#8B5CF6",
  },
];

interface MonthlyOrWeeklyRow {
  increase: string;
  rate: string;
  cumulative: string;
  avgSyncRate: string;
}

interface QuestionOption {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

interface QuestionResult {
  key: string;
  question: string;
  count: number;
  options: QuestionOption[];
}

interface VariantData {
  summary: {
    totalParticipants: number;
    monthlyIncrease: number;
    monthlyRate: number;
    weeklyIncrease: number;
    weeklyRate: number;
    todayIncrease: number;
    averageSyncRate: number;
    todayAverageSyncRate: number;
  };
  charts: {
    participantsTrend: { name: string; 累計診断数: number }[];
    resultDistribution: { name: string; value: number; color: string }[];
    axisAverages: { name: string; 平均スコア: number }[];
    monthlySyncRateTrend: { name: string; 平均同調率: number }[];
  };
  tables: {
    monthlyTable: ({ month: string } & MonthlyOrWeeklyRow & Record<string, string | number>)[];
    weeklyTable: ({ week: string } & MonthlyOrWeeklyRow & Record<string, string | number>)[];
    resultRanking: { rank: number; name: string; count: number; percentage: string }[];
    questionsData: QuestionResult[];
  };
  growthHistory: { month: string; cumulative: number }[];
}

function parseVariantCsv(
  csvText: string,
  config: CosmoMatchVariantConfig,
): VariantData | null {
  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
  const rows = parsed.data as any[];

  const validRows = rows
    .map((row) => {
      const dateStrRaw = String(row["日時"] || "").trim();
      const parts = dateStrRaw.split(/[\/\- :]/).filter(Boolean);
      if (parts.length < 3) return null;
      const y = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10);
      const d = parseInt(parts[2], 10);
      if (!y || !m || !d) return null;
      const num = y * 10000 + m * 100 + d;
      const dateKey = `${y}/${String(m).padStart(2, "0")}/${String(d).padStart(2, "0")}`;
      const monthKey = `${y}/${String(m).padStart(2, "0")}`;

      const result = String(row[config.resultColumn] || "").trim();
      const syncRateRaw = String(row["同調率"] || "0")
        .replace("%", "")
        .trim();
      const syncRate = parseFloat(syncRateRaw) || 0;

      const axisValues: Record<string, number> = {};
      config.axisColumns.forEach((col) => {
        axisValues[col] = parseFloat(String(row[col] || "0")) || 0;
      });

      const answers: Record<string, string> = {};
      config.questions.forEach((q) => {
        answers[q.key] = String(row[q.key] || "").trim();
      });

      return { num, y, m, d, dateKey, monthKey, result, syncRate, axisValues, answers };
    })
    .filter((r): r is NonNullable<typeof r> => r !== null && r.result !== "")
    .sort((a, b) => a.num - b.num);

  if (rows.length === 0) return null;

  const nowJst = getJSTDate();
  const currentY = nowJst.getFullYear();
  const currentM = nowJst.getMonth() + 1;
  const currentD = nowJst.getDate();
  const todayNum = currentY * 10000 + currentM * 100 + currentD;
  const startOfThisMonthNum = currentY * 10000 + currentM * 100 + 1;
  const currentMonthKey = `${currentY}/${String(currentM).padStart(2, "0")}`;
  const dayOfWeek = nowJst.getDay() === 0 ? 7 : nowJst.getDay();
  const startOfWeekJst = new Date(nowJst.getTime());
  startOfWeekJst.setDate(nowJst.getDate() - dayOfWeek + 1);
  const startOfWeekNum =
    startOfWeekJst.getFullYear() * 10000 +
    (startOfWeekJst.getMonth() + 1) * 100 +
    startOfWeekJst.getDate();

  const endOfPrevMonthJst = new Date(nowJst.getTime());
  endOfPrevMonthJst.setDate(0);
  const endOfPrevMonthNum =
    endOfPrevMonthJst.getFullYear() * 10000 +
    (endOfPrevMonthJst.getMonth() + 1) * 100 +
    endOfPrevMonthJst.getDate();

  const endOfPrevWeekJst = new Date(startOfWeekJst.getTime());
  endOfPrevWeekJst.setDate(startOfWeekJst.getDate() - 1);
  const endOfPrevWeekNum =
    endOfPrevWeekJst.getFullYear() * 10000 +
    (endOfPrevWeekJst.getMonth() + 1) * 100 +
    endOfPrevWeekJst.getDate();

  // 日別集計（累計診断数推移用）
  const dailyMap = new Map<string, { num: number; count: number; syncSum: number }>();
  validRows.forEach((r) => {
    if (!dailyMap.has(r.dateKey))
      dailyMap.set(r.dateKey, { num: r.num, count: 0, syncSum: 0 });
    const d = dailyMap.get(r.dateKey)!;
    d.count++;
    d.syncSum += r.syncRate;
  });
  const dailyEntries = Array.from(dailyMap.entries()).sort((a, b) => a[1].num - b[1].num);

  let cumulative = 0;
  let endOfPrevMonthCum = 0;
  let endOfPrevWeekCum = 0;
  let monthlyIncrease = 0;
  let weeklyIncrease = 0;
  let todayIncrease = 0;
  const participantsTrend: { name: string; 累計診断数: number }[] = [];

  dailyEntries.forEach(([dateKey, d]) => {
    cumulative += d.count;
    participantsTrend.push({ name: dateKey, 累計診断数: cumulative });
    if (d.num >= startOfThisMonthNum) monthlyIncrease += d.count;
    if (d.num <= endOfPrevMonthNum) endOfPrevMonthCum = cumulative;
    if (d.num >= startOfWeekNum) weeklyIncrease += d.count;
    if (d.num <= endOfPrevWeekNum) endOfPrevWeekCum = cumulative;
    if (d.num === todayNum) todayIncrease += d.count;
  });

  const monthlyRate =
    endOfPrevMonthCum === 0 ? 100 : Math.round((cumulative / endOfPrevMonthCum) * 100);
  const weeklyRate =
    endOfPrevWeekCum === 0 ? 100 : Math.round((cumulative / endOfPrevWeekCum) * 100);

  const totalSyncSum = validRows.reduce((sum, r) => sum + r.syncRate, 0);
  const averageSyncRate =
    validRows.length > 0 ? Math.round((totalSyncSum / validRows.length) * 10) / 10 : 0;
  const todayRows = validRows.filter((r) => r.num === todayNum);
  const todayAverageSyncRate =
    todayRows.length > 0
      ? Math.round(
          (todayRows.reduce((sum, r) => sum + r.syncRate, 0) / todayRows.length) * 10,
        ) / 10
      : 0;

  // 判定結果の分布
  const resultCounts = new Map<string, number>();
  validRows.forEach((r) => resultCounts.set(r.result, (resultCounts.get(r.result) || 0) + 1));
  const resultDistribution = Array.from(resultCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, value], i) => ({
      name,
      value,
      color: RESULT_COLORS[i % RESULT_COLORS.length],
    }));
  const resultRankingTable = Array.from(resultCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count], i) => ({
      rank: i + 1,
      name,
      count,
      percentage:
        validRows.length > 0 ? `${Math.round((count / validRows.length) * 1000) / 10}%` : "0%",
    }));

  // 軸別 平均スコア
  const axisAverages = config.axisColumns.map((col) => {
    const sum = validRows.reduce((acc, r) => acc + r.axisValues[col], 0);
    return {
      name: col,
      平均スコア: validRows.length > 0 ? Math.round((sum / validRows.length) * 100) / 100 : 0,
    };
  });

  // 設問別 回答割合
  const questionsData: QuestionResult[] = config.questions.map((q) => {
    const counts = new Map<string, number>();
    let total = 0;
    validRows.forEach((r) => {
      const val = r.answers[q.key];
      if (val) {
        counts.set(val, (counts.get(val) || 0) + 1);
        total++;
      }
    });
    const orderedLabels = [
      ...q.choices,
      ...Array.from(counts.keys()).filter((k) => !q.choices.includes(k)),
    ];
    const options: QuestionOption[] = orderedLabels
      .map((label, i) => ({
        label,
        count: counts.get(label) || 0,
        percentage: total > 0 ? Math.round(((counts.get(label) || 0) / total) * 100) : 0,
        color: RESULT_COLORS[i % RESULT_COLORS.length],
      }))
      .filter((o) => o.count > 0 || q.choices.includes(o.label));

    return { key: q.key, question: q.text, count: total, options };
  });

  // 月別集計（当月の実績が0件でも最新月として表示されるようにする）
  const monthlyMap = new Map<string, { count: number; syncSum: number; cumulative: number }>();
  let runningCum = 0;
  validRows.forEach((r) => {
    runningCum++;
    if (!monthlyMap.has(r.monthKey))
      monthlyMap.set(r.monthKey, { count: 0, syncSum: 0, cumulative: 0 });
    const m = monthlyMap.get(r.monthKey)!;
    m.count++;
    m.syncSum += r.syncRate;
    m.cumulative = runningCum;
  });
  if (!monthlyMap.has(currentMonthKey)) {
    monthlyMap.set(currentMonthKey, { count: 0, syncSum: 0, cumulative });
  }
  const monthlyEntries = Array.from(monthlyMap.entries()).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );
  const monthlySyncRateTrend = monthlyEntries.map(([month, v]) => ({
    name: month,
    平均同調率: v.count > 0 ? Math.round((v.syncSum / v.count) * 10) / 10 : 0,
  }));
  const monthlyTableRaw = monthlyEntries.map(([month, v], idx) => {
    let rate = 100;
    if (idx > 0) {
      const prev = monthlyEntries[idx - 1][1].count;
      rate = prev <= 0 ? 100 : Math.round((v.count / prev) * 100);
    }
    return {
      month,
      increase: formatDiff(v.count),
      rate: `${rate}%`,
      cumulative: v.cumulative.toLocaleString(),
      avgSyncRate: v.count > 0 ? `${Math.round((v.syncSum / v.count) * 10) / 10}%` : "-",
    };
  });

  const growthHistory = monthlyEntries.map(([month, v]) => ({
    month,
    cumulative: v.cumulative,
  }));

  // 週別集計（月曜始まり、当週の実績が0件でも最新週として表示されるようにする）
  const weeklyMap = new Map<
    string,
    { count: number; syncSum: number; cumulative: number; startStr: string; endStr: string; endTime: number }
  >();
  let runningCumWeekly = 0;
  const buildWeekMeta = (y: number, m: number, d: number) => {
    const dateObj = new Date(y, m - 1, d);
    const dow = dateObj.getDay() === 0 ? 7 : dateObj.getDay();
    const endOfWeek = new Date(dateObj.getTime());
    endOfWeek.setDate(dateObj.getDate() + (7 - dow));
    const startOfWeek = new Date(endOfWeek.getTime());
    startOfWeek.setDate(endOfWeek.getDate() - 6);
    const weekKey = `${endOfWeek.getFullYear()}-${endOfWeek.getMonth() + 1}-${endOfWeek.getDate()}`;
    return {
      weekKey,
      startStr: `${startOfWeek.getMonth() + 1}/${startOfWeek.getDate()}`,
      endStr: `${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}`,
      endTime: endOfWeek.getTime(),
    };
  };

  validRows.forEach((r) => {
    runningCumWeekly++;
    const { weekKey, startStr, endStr, endTime } = buildWeekMeta(r.y, r.m, r.d);
    if (!weeklyMap.has(weekKey))
      weeklyMap.set(weekKey, { count: 0, syncSum: 0, cumulative: 0, startStr, endStr, endTime });
    const w = weeklyMap.get(weekKey)!;
    w.count++;
    w.syncSum += r.syncRate;
    w.cumulative = runningCumWeekly;
  });
  const { weekKey: currentWeekKey, startStr: curStartStr, endStr: curEndStr, endTime: curEndTime } =
    buildWeekMeta(currentY, currentM, currentD);
  if (!weeklyMap.has(currentWeekKey)) {
    weeklyMap.set(currentWeekKey, {
      count: 0,
      syncSum: 0,
      cumulative,
      startStr: curStartStr,
      endStr: curEndStr,
      endTime: curEndTime,
    });
  }
  const weeklyEntries = Array.from(weeklyMap.values()).sort((a, b) => a.endTime - b.endTime);
  const weeklyTableRaw = weeklyEntries.map((v, idx) => {
    let rate = 100;
    if (idx > 0) {
      const prev = weeklyEntries[idx - 1].count;
      rate = prev <= 0 ? 100 : Math.round((v.count / prev) * 100);
    }
    const endMonth = parseInt(v.endStr.split("/")[0], 10);
    const endDay = parseInt(v.endStr.split("/")[1], 10);
    const weekNum = Math.ceil(endDay / 7);
    return {
      week: `${endMonth}月第${weekNum}週 (${v.startStr}-${v.endStr})`,
      increase: formatDiff(v.count),
      rate: `${rate}%`,
      cumulative: v.cumulative.toLocaleString(),
      avgSyncRate: v.count > 0 ? `${Math.round((v.syncSum / v.count) * 10) / 10}%` : "-",
    };
  });

  return {
    summary: {
      totalParticipants: cumulative,
      monthlyIncrease,
      monthlyRate,
      weeklyIncrease,
      weeklyRate,
      todayIncrease,
      averageSyncRate,
      todayAverageSyncRate,
    },
    charts: {
      participantsTrend,
      resultDistribution,
      axisAverages,
      monthlySyncRateTrend,
    },
    tables: {
      monthlyTable: [...monthlyTableRaw].reverse(),
      weeklyTable: [...weeklyTableRaw].reverse(),
      resultRanking: resultRankingTable,
      questionsData,
    },
    growthHistory,
  };
}

function AnswerDistributionBar({ options }: { options: QuestionOption[] }) {
  return (
    <div className="w-full min-w-[280px] py-1">
      <div className="flex w-full h-3 rounded-full overflow-hidden bg-secondary/30 mb-2">
        {options.map((opt, i) =>
          opt.percentage > 0 ? (
            <div
              key={i}
              style={{ width: `${opt.percentage}%`, backgroundColor: opt.color }}
              className="border-r border-background/20 last:border-none"
              title={`${opt.label}: ${opt.percentage}% (${opt.count}件)`}
            />
          ) : null,
        )}
      </div>
      <div className="flex flex-col gap-1 text-[11px] text-muted-foreground">
        {options.map((opt, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: opt.color }}
            />
            <span className="truncate">{opt.label}</span>
            <span className="ml-auto font-medium text-foreground whitespace-nowrap">
              {opt.percentage}% ({opt.count}件)
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function CosmoMatchVariantSection({
  config,
  data,
}: {
  config: CosmoMatchVariantConfig;
  data: VariantData | null;
}) {
  if (!config.csvUrl) {
    return (
      <div className="flex h-[300px] items-center justify-center text-muted-foreground text-sm">
        「{config.label}」のCSV公開URLが未設定です。match-page.tsx の VARIANTS
        に csvUrl を設定してください。
      </div>
    );
  }

  if (!data)
    return (
      <div className="flex h-[300px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <span>{config.label}のデータを集計中...</span>
        </div>
      </div>
    );

  const { summary, charts, tables } = data;

  return (
    <div className="space-y-6">
      {config.sheetUrl && (
        <div className="flex justify-end">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
          >
            <a href={config.sheetUrl} target="_blank" rel="noopener noreferrer">
              <span>元データ (スプシ)</span>
              <ArrowUpRight className="h-4 w-4 opacity-70" />
            </a>
          </Button>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <KpiCard
          title="累計診断数"
          value={summary.totalParticipants.toLocaleString()}
          unit="件"
          icon={Users}
          accentColor="primary"
        />
        <KpiCard
          title="今月の診断数"
          value={formatDiff(summary.monthlyIncrease)}
          unit="件"
          trendValue="先月末比"
          trendType="up"
          icon={Calendar}
          accentColor="accent"
        />
        <KpiCard
          title="1カ月比"
          value={summary.monthlyRate}
          unit="%"
          icon={TrendingUp}
          accentColor="success"
        />
        <KpiCard
          title="平均同調率"
          value={summary.averageSyncRate}
          unit="%"
          icon={Percent}
          accentColor="warning"
        />
        <KpiCard
          title="今週の診断数"
          value={formatDiff(summary.weeklyIncrease)}
          unit="件"
          trendValue="先週末比"
          trendType="up"
          icon={CalendarDays}
          accentColor="primary"
        />
        <KpiCard
          title="週間比"
          value={summary.weeklyRate}
          unit="%"
          icon={TrendingUp}
          accentColor="success"
        />
        <KpiCard
          title="今日の診断数"
          value={formatDiff(summary.todayIncrease)}
          unit="件"
          icon={Users}
          accentColor="warning"
        />
        <KpiCard
          title="今日の平均同調率"
          value={summary.todayAverageSyncRate}
          unit="%"
          icon={Percent}
          accentColor="accent"
        />
      </div>

      <SectionCard title="累計診断数の推移" description="日ごとの累計診断数">
        <ChartContainer height="h-[320px]">
          <LineChartComponent
            data={charts.participantsTrend.slice(-90)}
            lines={[{ dataKey: "累計診断数", name: "累計診断数", color: config.color }]}
          />
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard
          title={`${config.resultLabel}の分布`}
          description="判定結果ごとの件数比率"
        >
          <ChartContainer height="h-[320px]">
            {charts.resultDistribution.length > 0 ? (
              <DonutChart data={charts.resultDistribution} centerLabel="診断数" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
        <SectionCard
          title="軸別 平均スコア"
          description="全回答者の平均スコアで見る傾向"
        >
          <ChartContainer height="h-[320px]">
            <StackedBarChart
              data={charts.axisAverages}
              bars={[{ dataKey: "平均スコア", name: "平均スコア", color: config.color }]}
            />
          </ChartContainer>
        </SectionCard>
      </div>

      <SectionCard title="月別 平均同調率の推移">
        <ChartContainer height="h-[280px]">
          <LinearChartComponent
            data={charts.monthlySyncRateTrend}
            lines={[{ dataKey: "平均同調率", name: "平均同調率", color: "#F59E0B" }]}
            yAxisUnit="%"
          />
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月単位の診断数一覧">
          <ScrollableTable
            columns={[
              { key: "month", label: "月", align: "left" },
              { key: "increase", label: "診断数", align: "right" },
              { key: "rate", label: "前月比", align: "right" },
              { key: "avgSyncRate", label: "平均同調率", align: "right" },
              { key: "cumulative", label: "累計", align: "right" },
            ]}
            data={tables.monthlyTable}
          />
        </SectionCard>
        <SectionCard title="週単位の診断数一覧" description="月〜日の週区切り">
          <ScrollableTable
            columns={[
              { key: "week", label: "週 (月〜日)", align: "left" },
              { key: "increase", label: "診断数", align: "right" },
              { key: "rate", label: "前週比", align: "right" },
              { key: "avgSyncRate", label: "平均同調率", align: "right" },
              { key: "cumulative", label: "累計", align: "right" },
            ]}
            data={tables.weeklyTable}
          />
        </SectionCard>
      </div>

      <SectionCard title={`${config.resultLabel} ランキング`}>
        <ScrollableTable
          columns={[
            { key: "rank", label: "順位", align: "center" },
            { key: "name", label: config.resultLabel, align: "left" },
            { key: "count", label: "件数", align: "right" },
            { key: "percentage", label: "割合", align: "right" },
          ]}
          data={tables.resultRanking}
        />
      </SectionCard>

      <SectionCard
        title="設問別 回答割合"
        description="各設問ごとに選択された回答の分布状況です"
        icon={HelpCircle}
      >
        <div className="w-full overflow-x-auto mt-2">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-secondary/50 border-b border-border/50">
              <tr>
                <th className="px-4 py-3 font-medium whitespace-nowrap">ID</th>
                <th className="px-4 py-3 font-medium whitespace-nowrap">設問内容</th>
                <th className="px-4 py-3 font-medium text-right whitespace-nowrap">
                  回答数
                </th>
                <th className="px-4 py-3 font-medium">回答割合</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {tables.questionsData.map((q) => (
                <tr key={q.key} className="hover:bg-secondary/20 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                    {q.key}
                  </td>
                  <td className="px-4 py-3 text-foreground font-medium">{q.question}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">
                    {q.count.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 min-w-[300px]">
                    <AnswerDistributionBar options={q.options} />
                  </td>
                </tr>
              ))}
              {tables.questionsData.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                    データがありません
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <GrowthProjectionSection
        title={`${config.label} 診断数の成長予測`}
        description="直近の月次増加ペースから、今月末〜1年後までの想定累計診断数を算出します。"
        unit="件"
        history={data.growthHistory}
        color={config.color}
      />
    </div>
  );
}

export function MatchPage() {
  const [activeVariant, setActiveVariant] = useState(VARIANTS[0].key);
  const [dataMap, setDataMap] = useState<Record<string, VariantData | null>>({});
  const current = VARIANTS.find((v) => v.key === activeVariant) ?? VARIANTS[0];

  useEffect(() => {
    VARIANTS.forEach((config) => {
      if (!config.csvUrl) return;
      fetch(config.csvUrl)
        .then((res) => res.text())
        .then((csvText) => {
          const parsedData = parseVariantCsv(csvText, config);
          setDataMap((prev) => ({ ...prev, [config.key]: parsedData }));
        })
        .catch((err) => console.error("CSV Fetch Error:", err));
    });
  }, []);

  const loadedVariants = VARIANTS.filter((v) => dataMap[v.key]);
  const combinedTotal = loadedVariants.reduce(
    (sum, v) => sum + (dataMap[v.key]?.summary.totalParticipants || 0),
    0,
  );
  const combinedMonthly = loadedVariants.reduce(
    (sum, v) => sum + (dataMap[v.key]?.summary.monthlyIncrease || 0),
    0,
  );
  const combinedWeekly = loadedVariants.reduce(
    (sum, v) => sum + (dataMap[v.key]?.summary.weeklyIncrease || 0),
    0,
  );
  const combinedToday = loadedVariants.reduce(
    (sum, v) => sum + (dataMap[v.key]?.summary.todayIncrease || 0),
    0,
  );

  const currentData: VariantData | null = dataMap[current.key] ?? null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Cosmo Match</h2>
          <p className="text-muted-foreground mt-1">
            相性診断コンテンツ「Cosmo Match」の診断数・判定結果の傾向を編ごとに確認できます。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <KpiCard
          title="全編合計の累計診断数"
          value={combinedTotal.toLocaleString()}
          unit="件"
          icon={Users}
          accentColor="primary"
          description={loadedVariants.length < VARIANTS.length ? "一部データ未設定" : undefined}
        />
        <KpiCard
          title="今月の診断数 (全編合計)"
          value={formatDiff(combinedMonthly)}
          unit="件"
          icon={Calendar}
          accentColor="accent"
        />
        <KpiCard
          title="今週の診断数 (全編合計)"
          value={formatDiff(combinedWeekly)}
          unit="件"
          icon={CalendarDays}
          accentColor="primary"
        />
        <KpiCard
          title="今日の診断数 (全編合計)"
          value={formatDiff(combinedToday)}
          unit="件"
          icon={Users}
          accentColor="warning"
        />
      </div>

      <div className="flex flex-wrap gap-2 border-b border-border/50 pb-4">
        {VARIANTS.map((v) => (
          <Button
            key={v.key}
            variant="outline"
            size="sm"
            onClick={() => setActiveVariant(v.key)}
            className={cn(
              "transition-all duration-200",
              activeVariant === v.key
                ? "text-white border-transparent"
                : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground",
            )}
            style={activeVariant === v.key ? { backgroundColor: v.color } : undefined}
          >
            {v.label}
          </Button>
        ))}
      </div>

      <CosmoMatchVariantSection key={current.key} config={current} data={currentData} />
    </div>
  );
}
