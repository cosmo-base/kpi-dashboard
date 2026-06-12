"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Users, TrendingUp, Sparkles, Zap, HelpCircle, ArrowUpRight } from "lucide-react";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { ScrollableTable } from "../scrollable-table";
import { DonutChart } from "../charts/donut-chart";
import { LineChartComponent } from "../charts/line-chart";
import { StackedBarChart } from "../charts/stacked-bar-chart";
import { Button } from '@/components/ui/button';

const getJSTDate = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));

const formatDiff = (num: number) => {
  if (num > 0) return `+${num.toLocaleString()}`;
  if (num < 0) return num.toLocaleString();
  return "0";
};

const SIMPLE_TYPE_COLORS: Record<string, string> = {
  RI: "#cbace4",
  DI: "#85c68b",
  RO: "#EEEEBB",
  DO: "#83CBEB",
};
const SIMPLE_TYPE_LABELS: Record<string, string> = {
  RI: "天文台トラベラー (RI)",
  DI: "人工衛星 (DI)",
  RO: "ロケット打ち上げ (RO)",
  DO: "宇宙ステーション (DO)",
};
const DETAILED_TYPE_COLORS: Record<string, string> = {
  RVXI: "#D1B3E8",
  RVXS: "#BCA2DC",
  RVMI: "#E4C3F0",
  RVMS: "#C5B9D6",
  RAXI: "#F2F2C4",
  RAXS: "#F5E69C",
  RAMI: "#E8E8B6",
  RAMS: "#FCE877",
  PVXI: "#96CE9C",
  PVXS: "#72B879",
  PVMI: "#A8DCAE",
  PVMS: "#8BCA83",
  PAXI: "#76C5E8",
  PAXS: "#9AD4EE",
  PAMI: "#6CB6D9",
  PAMS: "#5AADD6",
};
const DETAILED_TYPE_LABELS: Record<string, string> = {
  RVXI: "🌌宇宙ロマン志向夢想家 (RVXI)",
  RVXS: "🌕未来観察志向観測者 (RVXS)",
  RVMI: "🪐天体愛好志向探訪者 (RVMI)",
  RVMS: "🌠探査共感志向見守り手 (RVMS)",
  RAXI: "🛸宇宙探求志向探求者 (RAXI)",
  RAXS: "🎙️宇宙伝道志向語り部 (RAXS)",
  RAMI: "📸趣味没頭志向職人 (RAMI)",
  RAMS: "🎉宇宙カルチャー志向仕掛け人 (RAMS)",
  PVXI: "📖宇宙教養志向学び手 (PVXI)",
  PVXS: "🧩産業分析志向分析者 (PVXS)",
  PVMI: "📡最新テック志向追跡者 (PVMI)",
  PVMS: "🤝社会応用志向つなぎ手 (PVMS)",
  PAXI: "🧭宇宙キャリア志向開拓者 (PAXI)",
  PAXS: "🏁産業推進志向推進者 (PAXS)",
  PAMI: "🔧技術開発志向創り手 (PAMI)",
  PAMS: "🌐社会課題解決志向実装者 (PAMS)",
};

const SIMPLE_QUESTIONS_MAP = [
  {
    key: "R",
    text: "ブラックホールや地球外生命体など、未知の宇宙の話にワクワクする",
  },
  { key: "D", text: "宇宙の技術が、生活やビジネスにどう役立つか気になる" },
  { key: "I", text: "宇宙について、記事やニュースをじっくり読むのが好き" },
  { key: "O", text: "誰かと話したり、イベントで盛り上がるのが好き" },
  { key: "P", text: "これから宇宙に関わる活動に少しでも触れてみたい" },
];

const DETAILED_2CHOICE_MAP = [
  { key: "Q1", text: "宇宙のニュースでつい見てしまうのは？", opt1: "未知の銀河やブラックホール", val1: "1", opt2: "宇宙ビジネスやロケット開発", val2: "-1" },
  { key: "Q2", text: "宇宙の魅力はどっちに近い？", opt1: "神秘やロマン", val1: "1", opt2: "可能性や実用性", val2: "-1" },
  { key: "Q3", text: "もし宇宙関連で自由に1万円使えるなら？", opt1: "星空ツアーや高画質な写真集", val1: "1", opt2: "専門書や最新技術サロン", val2: "-1" },
  { key: "Q4", text: "宇宙について話すなら？", opt1: "「宇宙人いると思う？」", val1: "1", opt2: "「この技術、地上で使えるね」", val2: "-1" },
  { key: "Q7", text: "面白い宇宙コンテンツを見たら？", opt1: "満足して終わる", val1: "1", opt2: "誰かに話す・発信する", val2: "-1" },
  { key: "Q8", text: "最近の宇宙との関わりは？", opt1: "見る・読む", val1: "1", opt2: "話す・投稿・参加", val2: "-1" },
  { key: "Q9", text: "コミュニティに入ったら？", opt1: "まずは様子を見る", val1: "1", opt2: "とりあえず発言してみる", val2: "-1" },
  { key: "Q10", text: "本音として近いのは？", opt1: "発信や制作はハードル高い", val1: "1", opt2: "見てるだけだと物足りない", val2: "-1" },
  { key: "Q13", text: "ロケットで気になるのは？", opt1: "構造や仕組み", val1: "1", opt2: "社会への影響", val2: "-1" },
  { key: "Q14", text: "新しい宇宙プロジェクトが発表されたら？", opt1: "どんな技術で動くの？", val1: "1", opt2: "人類の未来をどう変えるの？", val2: "-1" },
  { key: "Q15", text: "展示で見入るのは？", opt1: "部品や構造", val1: "1", opt2: "歴史や未来", val2: "-1" },
  { key: "Q16", text: "モヤっとするのは？", opt1: "仕組みが分からない説明", val1: "1", opt2: "全体像が見えない話", val2: "-1" },
  { key: "Q19", text: "宇宙との関わり方は？", opt1: "趣味として楽しみたい", val1: "1", opt2: "仕事や活動にしたい", val2: "-1" },
  { key: "Q20", text: "宇宙に時間を使うなら？", opt1: "楽しいこと優先", val1: "1", opt2: "役に立つこと優先", val2: "-1" },
  { key: "Q21", text: "理想の関わり方は？", opt1: "自分のペース", val1: "1", opt2: "社会に影響", val2: "-1" },
  { key: "Q22", text: "冷める瞬間は？", opt1: "義務や成果を求められる時", val1: "1", opt2: "何も生まれない時", val2: "-1" },
];

const DETAILED_5SCALE_MAP = [
  { key: "Q5", text: "宇宙の美しさやスケールに、理由なく心を動かされることがある", invert: false },
  { key: "Q6", text: "宇宙は“ビジネスや社会を変える手段”として興味がある", invert: true },
  { key: "Q11", text: "面白いものを見るだけで満足できるタイプだ", invert: false },
  { key: "Q12", text: "自分の考えや好きなことを、何かしらの形で外に出したいと思う", invert: true },
  { key: "Q17", text: "細かい仕組みや構造を理解すると満足感がある", invert: false },
  { key: "Q18", text: "大きな流れや未来の方向性を理解するとワクワクする", invert: true },
  { key: "Q23", text: "自分が楽しいと思えることを最優先したい", invert: false },
  { key: "Q24", text: "自分の行動が誰かや社会に影響することにやりがいを感じる", invert: true },
];

const AxisBar = ({
  labelLeft,
  labelRight,
  countLeft,
  countRight,
  colorLeft,
  colorRight,
}: any) => {
  const safeCountLeft = countLeft || 0;
  const safeCountRight = countRight || 0;
  const total = safeCountLeft + safeCountRight || 1;
  const leftPct = (safeCountLeft / total) * 100;
  const rightPct = (safeCountRight / total) * 100;
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm font-semibold text-foreground mb-1.5 px-1">
        <span>
          {labelLeft}{" "}
          <span className="text-muted-foreground font-normal ml-1">
            ({safeCountLeft}人)
          </span>
        </span>
        <span>
          <span className="text-muted-foreground font-normal mr-1">
            ({safeCountRight}人)
          </span>{" "}
          {labelRight}
        </span>
      </div>
      <div className="h-4 w-full flex rounded-full overflow-hidden bg-secondary/30">
        <div
          style={{ width: `${leftPct}%`, backgroundColor: colorLeft }}
          className="transition-all duration-500"
        />
        <div
          style={{ width: `${rightPct}%`, backgroundColor: colorRight }}
          className="transition-all duration-500"
        />
      </div>
    </div>
  );
};

const MultiSegmentBar = ({ title, segments }: any) => {
  const total = segments.reduce((sum: number, s: any) => sum + s.count, 0) || 1;
  return (
    <div className="mt-4 pt-4 border-t border-border/50">
      <div className="flex justify-between text-sm font-semibold text-foreground mb-2 px-1">
        <span>
          {title}{" "}
          <span className="text-muted-foreground font-normal ml-1">
            ({total}人)
          </span>
        </span>
      </div>
      <div className="h-4 w-full flex rounded-full overflow-hidden bg-secondary/30 mb-2">
        {segments.map((s: any, i: number) => {
          const pct = (s.count / total) * 100;
          return pct > 0 ? (
            <div
              key={i}
              style={{ width: `${pct}%`, backgroundColor: s.color }}
              className="transition-all duration-500"
              title={`${s.label}: ${s.count}人`}
            />
          ) : null;
        })}
      </div>
      <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground px-1">
        {segments.map((s: any, i: number) => (
          <span key={i} className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: s.color }}
            ></span>
            {s.label} ({s.count}人)
          </span>
        ))}
      </div>
    </div>
  );
};

const DistributionBar = ({ item }: { item: any }) => {
  if (item.type === "scale") {
    const scaleColors = ["#38BDF8", "#7DD3FC", "#E2E8F0", "#94A3B8", "#64748B"];
    return (
      <div className="w-full min-w-[280px] py-1">
        <div className="flex justify-between text-[11px] font-bold text-foreground mb-1.5">
          <span>{item.leftLabel}</span>
          <span>{item.rightLabel}</span>
        </div>
        <div className="flex w-full h-3 rounded-full overflow-hidden bg-secondary/30 mb-1">
          {item.options.map((opt: any, i: number) => (
            <div key={i} style={{ width: `${opt.percentage}%`, backgroundColor: scaleColors[i] }} className="border-r border-background/20 last:border-none" title={`${opt.percentage}% (${opt.count}人)`} />
          ))}
        </div>
        {/* ★ 各％の前に対応する色のドットと選択肢の数値を配置 */}
        <div className="flex w-full justify-between text-[11px] text-muted-foreground px-0.5">
          {item.options.map((opt: any, i: number) => (
            <span key={i} className="flex items-center gap-1 font-medium justify-center whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: scaleColors[i] }} />
              <span>[{opt.label}] {opt.percentage}%</span>
            </span>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full min-w-[280px] py-1">
        <div className="flex justify-between text-[11px] font-bold mb-1.5 gap-3">
          <span className="w-1/2 truncate text-left text-[#38BDF8]">{item.options[0].label}</span>
          <span className="w-1/2 truncate text-right text-[#8B5CF6]">{item.options[1].label}</span>
        </div>
        <div className="flex w-full h-3 rounded-full overflow-hidden bg-secondary/30 mb-1">
          <div style={{ width: `${item.options[0].percentage}%`, backgroundColor: '#38BDF8' }} title={`${item.options[0].label}: ${item.options[0].percentage}% (${item.options[0].count}人)`} />
          <div style={{ width: `${item.options[1].percentage}%`, backgroundColor: '#8B5CF6' }} title={`${item.options[1].label}: ${item.options[1].percentage}% (${item.options[1].count}人)`} />
        </div>
        <div className="flex justify-between text-[11px] font-medium text-muted-foreground px-1">
          <span className="text-[#38BDF8]">{item.options[0].percentage}%</span>
          <span className="text-[#8B5CF6]">{item.options[1].percentage}%</span>
        </div>
      </div>
    );
  }
};

export function SpaceDiagnosisPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const urlSimpleCbhp =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vReKqSJGubls2ixij5n6FbAi37wzshzZ09Q10a0uzJO1kuk8dSuw9c_yjm4XmsJelkiCLBubKAUFgky/pub?gid=0&single=true&output=csv";
    const urlSimpleParticipant =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzLEbfZRlDsErUJ7hrEqtaXTpEym3kWXGyvpQDrAbLOFbJZ4_aoMdFn-BQM1GSeHiXsTo4L3kY86YC/pub?gid=0&single=true&output=csv";
    const urlDetailed =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJvQVHHyL56_1xeVimkfbJCXCNN9MGtDt_ACebndkqhuqGbugvykZvRhkmajQ5fs6ug_Tas_rPXZUl/pub?gid=0&single=true&output=csv";

    Promise.all([
      fetch(urlSimpleCbhp).then((res) => res.text()),
      fetch(urlSimpleParticipant).then((res) => res.text()),
      fetch(urlDetailed).then((res) => res.text()),
    ])
      .then(([csv1, csv2, csv3]) => {
        const parseCSV = (csv: string, source: string, version: string) => {
          return Papa.parse(csv, {
            header: true,
            skipEmptyLines: true,
          }).data.map((row: any) => ({
            ...row,
            _source: source,
            _version: version,
          }));
        };

        const allRows = [
          ...parseCSV(csv1, "CBHP", "simple"),
          ...parseCSV(csv2, "参加者ページ", "simple"),
          ...parseCSV(csv3, "詳細版", "detailed"),
        ]
          .map((row) => {
            const dStr = String(row.date || "").trim();
            const parts = dStr.split(/[\/\- :]/);
            if (parts.length >= 3) {
              const y = parseInt(parts[0], 10);
              const m = parseInt(parts[1], 10);
              const d = parseInt(parts[2], 10);
              const num = y * 10000 + m * 100 + d;
              const dateKey = `${y}/${String(m).padStart(2, "0")}/${String(d).padStart(2, "0")}`;
              return { ...row, num, dateKey, y, m, d };
            }
            return { ...row, num: NaN };
          })
          .filter((row) => !isNaN(row.num))
          .sort((a, b) => a.num - b.num);

        if (allRows.length === 0) return;

        const nowJst = getJSTDate();
        const currentY = nowJst.getFullYear();
        const currentM = nowJst.getMonth() + 1;
        const currentD = nowJst.getDate();
        const startOfThisMonthNum = currentY * 10000 + currentM * 100 + 1;
        const todayNum = currentY * 10000 + currentM * 100 + currentD;

        const endOfPrevMonthJst = new Date(nowJst.getTime());
        endOfPrevMonthJst.setDate(0);
        const endOfPrevMonthNum =
          endOfPrevMonthJst.getFullYear() * 10000 +
          (endOfPrevMonthJst.getMonth() + 1) * 100 +
          endOfPrevMonthJst.getDate();

        const axisCounts = { R: 0, P: 0, V: 0, A: 0, M: 0, X: 0, I: 0, S: 0 };
        const simpleAxisCounts = {
          R: 0,
          D: 0,
          I: 0,
          O: 0,
          P: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } as Record<number, number>,
        };
        const simpleTypeMap = new Map<string, number>();
        const detailedTypeMap = new Map<string, number>();
        const dailyMap = new Map<string, any>();

        // ★ 簡易版と完全版で月別推移を分離
        const monthlySimpleTypeMap = new Map<string, any>();
        const monthlyDetailedTypeMap = new Map<string, any>();

        allRows.forEach((row) => {
          const type = String(row.type || "").trim();
          const dateKey = row.dateKey;
          if (!dailyMap.has(dateKey))
            dailyMap.set(dateKey, {
              incTotal: 0,
              incSimpleTotal: 0,
              incSimpleCbhp: 0,
              incSimplePart: 0,
              incDetailed: 0,
              dateKey,
              num: row.num,
            });
          const daily = dailyMap.get(dateKey)!;
          daily.incTotal++;

          let basicType = "その他";

          if (row._version === "simple") {
            daily.incSimpleTotal++;
            if (row._source === "CBHP") daily.incSimpleCbhp++;
            if (row._source === "参加者ページ") daily.incSimplePart++;
            if (type && SIMPLE_TYPE_COLORS[type]) {
              simpleTypeMap.set(type, (simpleTypeMap.get(type) || 0) + 1);
              if (type.includes("R")) simpleAxisCounts.R++;
              if (type.includes("D")) simpleAxisCounts.D++;
              if (type.includes("I")) simpleAxisCounts.I++;
              if (type.includes("O")) simpleAxisCounts.O++;
            }
            const pVal = parseInt(row.P);
            if (pVal >= 1 && pVal <= 5) simpleAxisCounts.P[pVal]++;
            basicType = type; // RI, DI, RO, DO
          } else {
            daily.incDetailed++;
            if (type && DETAILED_TYPE_COLORS[type])
              detailedTypeMap.set(type, (detailedTypeMap.get(type) || 0) + 1);
            const rp = parseInt(row.RP) || 0;
            const va = parseInt(row.VA) || 0;
            const mx = parseInt(row.MX) || 0;
            const is = parseInt(row.IS) || 0;
            if (rp > 0) axisCounts.R++;
            else axisCounts.P++;
            if (va > 0) axisCounts.V++;
            else axisCounts.A++;
            if (mx > 0) axisCounts.M++;
            else axisCounts.X++;
            if (is > 0) axisCounts.I++;
            else axisCounts.S++;

            const r = type.charAt(0);
            const i = type.charAt(3);
            if (r === "R" && i === "I") basicType = "RI";
            else if (r === "P" && i === "I") basicType = "DI";
            else if (r === "R" && i === "S") basicType = "RO";
            else if (r === "P" && i === "S") basicType = "DO";
          }
          const mLabel = `${row.y}/${String(row.m).padStart(2, "0")}`;
          if (!monthlySimpleTypeMap.has(mLabel)) {
            monthlySimpleTypeMap.set(mLabel, {
              name: mLabel,
              RI: 0,
              DI: 0,
              RO: 0,
              DO: 0,
            });
          }
          if (!monthlyDetailedTypeMap.has(mLabel)) {
            const initObj: any = { name: mLabel };
            Object.keys(DETAILED_TYPE_COLORS).forEach((k) => (initObj[k] = 0));
            monthlyDetailedTypeMap.set(mLabel, initObj);
          }

          if (row._version === "simple") {
            if (["RI", "DI", "RO", "DO"].includes(basicType)) {
              monthlySimpleTypeMap.get(mLabel)[basicType]++;
            }
          } else {
            if (type && DETAILED_TYPE_COLORS[type]) {
              monthlyDetailedTypeMap.get(mLabel)[type]++;
            }
          }
        });
        // --- 設問ごとの回答割合の集計（バー表示＆順番固定） ---
        const questionsData: any[] = [];

        const processQuestionGroup = (
          groupLabel: string,
          questionsList: any[],
          isScale: boolean,
          versionFilter: string,
        ) => {
          questionsList.forEach((q) => {
            const counts = new Map<string, number>();
            let validCount = 0;

            allRows.forEach((row) => {
              if (row._version !== versionFilter) return;
              const val = String(row[q.key] || "").trim();
              if (val) {
                counts.set(val, (counts.get(val) || 0) + 1);
                validCount++;
              }
            });

            if (validCount > 0) {
              const options: any[] = [];

              if (isScale) {
                let scales: string[] = [];
                if (versionFilter === "simple") {
                  scales = ["5", "4", "3", "2", "1"];
                } else {
                  // invert設定に応じた順番（左が常に「とてもそう思う」になるように並べる）
                  scales = q.invert ? ["-2", "-1", "0", "1", "2"] : ["2", "1", "0", "-1", "-2"];
                }

                scales.forEach((s) => {
                  const c = counts.get(s) || 0;
                  options.push({ label: s, count: c, percentage: Math.round((c / validCount) * 100) || 0 });
                });

                let sortOrder = q.key.startsWith("Q") ? 100 + parseInt(q.key.replace("Q", ""), 10) : (["R", "D", "I", "O", "P"].indexOf(q.key) + 1);

                questionsData.push({
                  key: q.key, sortOrder, category: groupLabel, question: q.text, count: validCount,
                  type: "scale", leftLabel: "とてもそう思う", rightLabel: "全くそう思わない", options
                });
              } else {
                const c1 = counts.get(q.val1) || 0;
                const c2 = counts.get(q.val2) || 0;
                options.push({ label: q.opt1, count: c1, percentage: Math.round((c1 / validCount) * 100) || 0 });
                options.push({ label: q.opt2, count: c2, percentage: Math.round((c2 / validCount) * 100) || 0 });

                questionsData.push({
                  key: q.key, sortOrder: 100 + parseInt(q.key.replace("Q", ""), 10), category: groupLabel, question: q.text, count: validCount,
                  type: "choice", options
                });
              }
            }
          });
        };

        processQuestionGroup(
          "簡易版 (5段階)",
          SIMPLE_QUESTIONS_MAP,
          true,
          "simple",
        );
        processQuestionGroup(
          "完全版 (2択)",
          DETAILED_2CHOICE_MAP,
          false,
          "detailed",
        );
        processQuestionGroup(
          "完全版 (5段階)",
          DETAILED_5SCALE_MAP,
          true,
          "detailed",
        );

        // 指定された順序で並び替え
        questionsData.sort((a, b) => a.sortOrder - b.sortOrder);

        const dailyRecords = Array.from(dailyMap.values()).sort(
          (a, b) => a.num - b.num,
        );
        let cumTotal = 0,
          cumSimple = 0,
          cumSimpleCbhp = 0,
          cumSimplePart = 0,
          cumDetailed = 0;
        dailyRecords.forEach((d) => {
          cumTotal += d.incTotal;
          d.total = cumTotal;
          cumSimple += d.incSimpleTotal;
          d.simpleTotal = cumSimple;
          cumSimpleCbhp += d.incSimpleCbhp;
          d.simpleCbhp = cumSimpleCbhp;
          cumSimplePart += d.incSimplePart;
          d.simplePart = cumSimplePart;
          cumDetailed += d.incDetailed;
          d.detailedTotal = cumDetailed;
        });

        const latest = dailyRecords[dailyRecords.length - 1];

        let thisMonthTotal = 0,
          thisMonthSimple = 0,
          thisMonthDetailed = 0;
        let endOfPrevMonthTotal = 0,
          endOfPrevMonthSimple = 0,
          endOfPrevMonthDetailed = 0;
        let todayTotal = 0;
        let todaySimpleCbhp = 0;
        let todaySimplePart = 0;
        let todaySimpleTotal = 0;
        let todayDetailed = 0;

        dailyRecords.forEach((d) => {
          const num = d.num;
          if (num >= startOfThisMonthNum) {
            thisMonthTotal += d.incTotal;
            thisMonthSimple += d.incSimpleTotal;
            thisMonthDetailed += d.incDetailed;
          }
          if (num <= endOfPrevMonthNum) {
            endOfPrevMonthTotal = d.total;
            endOfPrevMonthSimple = d.simpleTotal;
            endOfPrevMonthDetailed = d.detailedTotal;
          }
          if (num === todayNum) {
            todayTotal += d.incTotal;
            todaySimpleCbhp += d.incSimpleCbhp;
            todaySimplePart += d.incSimplePart;
            todaySimpleTotal += d.incSimpleTotal;
            todayDetailed += d.incDetailed;
          }
        });

        const monthlyRate =
          endOfPrevMonthTotal === 0
            ? 100
            : Math.round((latest.total / endOfPrevMonthTotal) * 100);
        const simpleRate =
          endOfPrevMonthSimple === 0
            ? 100
            : Math.round((latest.simpleTotal / endOfPrevMonthSimple) * 100);
        const detailedRate =
          endOfPrevMonthDetailed === 0
            ? 100
            : Math.round((latest.detailedTotal / endOfPrevMonthDetailed) * 100);

        const monthlyAgg = new Map<string, any>();
        const weeklyAgg = new Map<string, any>();

        let prevMonth = -1;
        let currentYear = currentY;
        if (
          dailyRecords.length > 0 &&
          parseInt(dailyRecords[0].dateKey.split("/")[0], 10) > currentM + 1
        )
          currentYear--;

        dailyRecords.forEach((d) => {
          const mLabel = parseInt(d.dateKey.split("/")[1], 10) + "月";
          if (!monthlyAgg.has(mLabel))
            monthlyAgg.set(mLabel, {
              incTotal: 0,
              incSimple: 0,
              incSimpleCbhp: 0,
              incSimplePart: 0,
              incDetailed: 0,
              cum: 0,
            });
          const m = monthlyAgg.get(mLabel)!;
          m.incTotal += d.incTotal;
          m.incSimple += d.incSimpleTotal;
          m.incSimpleCbhp += d.incSimpleCbhp;
          m.incSimplePart += d.incSimplePart;
          m.incDetailed += d.incDetailed;
          m.cum = d.total;

          const [yStr, mStr, dStr] = d.dateKey.split("/");
          const monthNum = parseInt(mStr, 10);
          const dayNum = parseInt(dStr, 10);
          if (prevMonth !== -1 && prevMonth === 12 && monthNum === 1)
            currentYear++;
          prevMonth = monthNum;

          const dateObj = new Date(currentYear, monthNum - 1, dayNum);
          const dw = dateObj.getDay() === 0 ? 7 : dateObj.getDay();
          const endOfWeek = new Date(dateObj.getTime());
          endOfWeek.setDate(dateObj.getDate() + (7 - dw));
          const startOfWeek = new Date(endOfWeek.getTime());
          startOfWeek.setDate(endOfWeek.getDate() - 6);

          const wKey = `${endOfWeek.getFullYear()}-${endOfWeek.getMonth() + 1}-${endOfWeek.getDate()}`;
          if (!weeklyAgg.has(wKey)) {
            weeklyAgg.set(wKey, {
              incTotal: 0,
              incSimple: 0,
              incSimpleCbhp: 0,
              incSimplePart: 0,
              incDetailed: 0,
              cum: 0,
              startStr: `${startOfWeek.getMonth() + 1}/${startOfWeek.getDate()}`,
              endStr: `${endOfWeek.getMonth() + 1}/${endOfWeek.getDate()}`,
            });
          }
          const w = weeklyAgg.get(wKey)!;
          w.incTotal += d.incTotal;
          w.incSimple += d.incSimpleTotal;
          w.incSimpleCbhp += d.incSimpleCbhp;
          w.incSimplePart += d.incSimplePart;
          w.incDetailed += d.incDetailed;
          w.cum = d.total;
        });

        const buildTable = (
          aggMap: Map<string, any>,
          labelGen: (k: string, v: any) => string,
        ) => {
          const arr = Array.from(aggMap.entries()).map(([k, v]) => ({
            label: labelGen(k, v),
            ...v,
          }));
          return arr
            .map((item, idx) => {
              let rate = 100;
              if (idx > 0) {
                const prevCum = arr[idx - 1].cum;
                rate =
                  prevCum <= 0 ? 100 : Math.round((item.cum / prevCum) * 100);
              }
              return { ...item, rate: `${rate}%` };
            })
            .reverse();
        };

        const monthlyTable = buildTable(monthlyAgg, (k) => k).map((r) => ({
          month: r.label,
          total: formatDiff(r.incTotal),
          simpleCbhp: formatDiff(r.incSimpleCbhp),
          simplePart: formatDiff(r.incSimplePart),
          full: formatDiff(r.incDetailed),
          rate: r.rate,
        }));
        const weeklyTable = buildTable(weeklyAgg, (k, v) => {
          const endDay = parseInt(v.endStr.split("/")[1], 10);
          return `${v.endStr.split("/")[0]}月第${Math.ceil(endDay / 7)}週 (${v.startStr}-${v.endStr})`;
        }).map((r) => ({
          week: r.label,
          total: formatDiff(r.incTotal),
          simpleCbhp: formatDiff(r.incSimpleCbhp),
          simplePart: formatDiff(r.incSimplePart),
          full: formatDiff(r.incDetailed),
          rate: r.rate,
        }));

        const simpleOrder = Object.keys(SIMPLE_TYPE_LABELS);
        const simpleTypeDistribution = Array.from(simpleTypeMap.entries())
          .sort((a, b) => simpleOrder.indexOf(a[0]) - simpleOrder.indexOf(b[0]))
          .map(([k, v]) => ({
            name: SIMPLE_TYPE_LABELS[k] || k,
            value: v,
            color: SIMPLE_TYPE_COLORS[k] || "#ccc",
          }));
        const detailedOrder = Object.keys(DETAILED_TYPE_LABELS);
        const detailedTypeDistribution = Array.from(detailedTypeMap.entries())
          .sort((a, b) => detailedOrder.indexOf(a[0]) - detailedOrder.indexOf(b[0]))
          .map(([k, v]) => ({
            name: k,
            value: v,
            color: DETAILED_TYPE_COLORS[k] || "#ccc",
          }));

        const monthlyByVersion = Array.from(monthlyAgg.entries())
          .slice(-4)
          .map(([k, v]) => ({
            name: k,
            簡易版_CBHP: v.incSimpleCbhp,
            簡易版_参加者: v.incSimplePart,
            完全版: v.incDetailed,
          }));
        const weeklyByVersion = Array.from(weeklyAgg.values())
          .slice(-4)
          .map((v) => {
            const endDay = parseInt(v.endStr.split("/")[1], 10);
            return {
              name: `${v.endStr.split("/")[0]}月第${Math.ceil(endDay / 7)}週`,
              簡易版_CBHP: v.incSimpleCbhp,
              簡易版_参加者: v.incSimplePart,
              完全版: v.incDetailed,
            };
          });

        const monthlySimpleTypeTrend = Array.from(monthlySimpleTypeMap.values())
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(-6);
        const monthlyDetailedTypeTrend = Array.from(
          monthlyDetailedTypeMap.values(),
        )
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(-6);

        setData({
          summary: {
            totalParticipants: latest.total,
            todayTotal: todayTotal,
            todaySimpleCbhp: todaySimpleCbhp,
            todaySimplePart: todaySimplePart,
            todaySimpleTotal: todaySimpleTotal,
            todayDetailed: todayDetailed,
            monthlyIncrease: thisMonthTotal,
            monthlyRate,
            fullVersionParticipants: latest.detailedTotal,
            fullVersionRate: detailedRate,
            simpleVersionParticipants: latest.simpleTotal,
            simpleVersionRate: simpleRate,
            simpleCbhpParticipants: latest.simpleCbhp,
            simplePartParticipants: latest.simplePart,
          },
          charts: {
            participantsTrend: dailyRecords.map((d) => ({
              name: d.dateKey,
              全体: d.total,
              完全版: d.detailedTotal,
              簡易版_合計: d.simpleTotal,
              簡易版_CBHP: d.simpleCbhp,
              簡易版_参加者: d.simplePart,
            })),
            simpleTypeDistribution,
            detailedTypeDistribution,
            monthlySimpleTypeTrend,
            monthlyDetailedTypeTrend,
            monthlyByVersion,
            weeklyByVersion,
          },
          axisCounts,
          simpleAxisCounts,
          tables: { monthlyTable, weeklyTable, questionsData },
        });
      })
      .catch((err) => console.error("Data Load Error:", err));
  }, []);

  if (!data)
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <span>診断データを集計中...</span>
        </div>
      </div>
    );

  const {
    summary = {},
    charts = {},
    axisCounts = {},
    simpleAxisCounts = {
      R: 0,
      D: 0,
      I: 0,
      O: 0,
      P: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    },
    tables = {},
  } = data;
  const pSegments = [
    { label: "P=1", count: simpleAxisCounts?.P?.[1] || 0, color: "#fed7aa" },
    { label: "P=2", count: simpleAxisCounts?.P?.[2] || 0, color: "#fdba74" },
    { label: "P=3", count: simpleAxisCounts?.P?.[3] || 0, color: "#fb923c" },
    { label: "P=4", count: simpleAxisCounts?.P?.[4] || 0, color: "#f97316" },
    { label: "P=5", count: simpleAxisCounts?.P?.[5] || 0, color: "#ea580c" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
        <h2 className="text-2xl font-bold text-foreground">
          宇宙タイプ診断 分析
        </h2>
        <p className="text-muted-foreground mt-1">
          診断参加者数、簡易版（CBHP/参加者ページ）・完全版の利用状況、各軸の傾向を確認できます。
        </p>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
        >
          <a
            href="https://docs.google.com/spreadsheets/d/1LcbLG6GYqNZXlx38ZXqgLZ0OlLBLavd8VSJZEayfXYs/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>元データ (スプシ)(簡易版_CBHP)</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
        >
          <a
            href="https://docs.google.com/spreadsheets/d/1LiOtm3NW4NGMQuchAjnSj_26rK3K9AaxSo4Autphi8Y/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>元データ (スプシ)(簡易版_参加者)</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
        >
          <a
            href="https://docs.google.com/spreadsheets/d/13yFYKDVm0g09Vw6cyHN9Hr4H2n66CL9SpPDJ-mytLb0/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>元データ (スプシ)(完全版)</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <KpiCard
          title="総参加者数"
          value={summary.totalParticipants?.toLocaleString() || 0}
          unit="人"
          icon={Users}
          accentColor="primary"
        />
        <KpiCard
          title="今月の増加数"
          value={formatDiff(summary.monthlyIncrease || 0)}
          unit="人"
          icon={TrendingUp}
          accentColor="success"
        />
        <KpiCard
          title="全体の先月末比"
          value={summary.monthlyRate || 0}
          unit="%"
          trendValue="先月末比"
          trendType="up"
          icon={TrendingUp}
          accentColor="success"
        />
        <KpiCard
          title="今日の参加数 (合計)"
          value={`+${summary.todayTotal || 0}`}
          unit="人"
          icon={Users}
          accentColor="warning"
          description={`簡易版合計: +${summary.todaySimpleTotal || 0} (CBHP: +${summary.todaySimpleCbhp || 0} / 参加者: +${summary.todaySimplePart || 0}) | 完全版: +${summary.todayDetailed || 0}`}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="簡易版の参加者数 (合計)"
          value={summary.simpleVersionParticipants?.toLocaleString() || 0}
          unit="人"
          icon={Sparkles}
          accentColor="primary"
        />
        <KpiCard
          title="簡易版の先月末比"
          value={summary.simpleVersionRate || 0}
          unit="%"
          trendValue="先月末比"
          trendType="up"
          icon={TrendingUp}
          accentColor="success"
        />
        <KpiCard
          title="完全版の参加者数"
          value={summary.fullVersionParticipants?.toLocaleString() || 0}
          unit="人"
          icon={Zap}
          accentColor="accent"
        />
        <KpiCard
          title="完全版の先月末比"
          value={summary.fullVersionRate || 0}
          unit="%"
          trendValue="先月末比"
          trendType="up"
          icon={TrendingUp}
          accentColor="success"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="glass-card p-4 rounded-xl flex items-center justify-between border border-border/50">
          <span className="text-sm font-medium text-muted-foreground">
            簡易版：CBHP経由
          </span>
          <span className="text-xl font-bold text-foreground">
            {summary.simpleCbhpParticipants?.toLocaleString() || 0} 人
          </span>
        </div>
        <div className="glass-card p-4 rounded-xl flex items-center justify-between border border-border/50">
          <span className="text-sm font-medium text-muted-foreground">
            簡易版：参加者ページ経由
          </span>
          <span className="text-xl font-bold text-foreground">
            {summary.simplePartParticipants?.toLocaleString() || 0} 人
          </span>
        </div>
      </div>

      <SectionCard title="診断参加者数推移 (累計)">
        <ChartContainer height="h-[320px]">
          <LineChartComponent
            data={charts.participantsTrend?.slice(-90) || []}
            lines={[
              { dataKey: "全体", name: "全体", color: "#38BDF8" },
              { dataKey: "完全版", name: "完全版", color: "#22C55E" },
              { dataKey: "簡易版_合計", name: "簡易版(合)", color: "#8B5CF6" },
              { dataKey: "簡易版_CBHP", name: "簡易(CBHP)", color: "#a78bfa" },
              {
                dataKey: "簡易版_参加者",
                name: "簡易(参加)",
                color: "#c4b5fd",
              },
            ]}
          />
        </ChartContainer>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SectionCard title="簡易版：各軸の傾向分析">
          <div className="pt-2 flex flex-col justify-center h-[350px]">
            <AxisBar
              labelLeft="R"
              countLeft={simpleAxisCounts?.R || 0}
              colorLeft="#d1d5db"
              labelRight="D"
              countRight={simpleAxisCounts?.D || 0}
              colorRight="#6b7280"
            />
            <AxisBar
              labelLeft="I"
              countLeft={simpleAxisCounts?.I || 0}
              colorLeft="#d1d5db"
              labelRight="O"
              countRight={simpleAxisCounts?.O || 0}
              colorRight="#6b7280"
            />
            <MultiSegmentBar title="P（5段階分布）" segments={pSegments} />
          </div>
        </SectionCard>
        <SectionCard title="簡易版 4タイプ割合">
          <ChartContainer height="h-[350px]">
            <DonutChart
              data={charts.simpleTypeDistribution || []}
              centerLabel="簡易版"
            />
          </ChartContainer>
        </SectionCard>
        <SectionCard
          title="【簡易版】 4大タイプ 月別増加推移"
          description="どのタイプがいつ増えたか"
        >
          <ChartContainer height="h-[500px]">
            <StackedBarChart
              data={charts.monthlySimpleTypeTrend || []}
              bars={[
                {
                  dataKey: "RI",
                  name: "天文台トラベラー",
                  color: SIMPLE_TYPE_COLORS["RI"],
                },
                {
                  dataKey: "DI",
                  name: "人工衛星",
                  color: SIMPLE_TYPE_COLORS["DI"],
                },
                {
                  dataKey: "RO",
                  name: "ロケット打ち上げ",
                  color: SIMPLE_TYPE_COLORS["RO"],
                },
                {
                  dataKey: "DO",
                  name: "宇宙ステーション",
                  color: SIMPLE_TYPE_COLORS["DO"],
                },
              ]}
            />
          </ChartContainer>
        </SectionCard>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SectionCard
          title="完全版：各軸の傾向分析"
          description="全参加者のパラメータ分布"
        >
          <div className="pt-4 flex flex-col justify-center h-[350px]">
            <AxisBar
              labelLeft="関心の方向 (R: ロマン)"
              countLeft={axisCounts?.R || 0}
              colorLeft="#d1d5db"
              labelRight="(P: 実用)"
              countRight={axisCounts?.P || 0}
              colorRight="#6b7280"
            />
            <AxisBar
              labelLeft="関わり方 (V: 受動)"
              countLeft={axisCounts?.V || 0}
              colorLeft="#d1d5db"
              labelRight="(A: 能動)"
              countRight={axisCounts?.A || 0}
              colorRight="#6b7280"
            />
            <AxisBar
              labelLeft="対象スケール (X: マクロ)"
              countLeft={axisCounts?.X || 0}
              colorLeft="#d1d5db"
              labelRight="(M: ミクロ)"
              countRight={axisCounts?.M || 0}
              colorRight="#6b7280"
            />
            <AxisBar
              labelLeft="社会との距離 (I: 個人)"
              countLeft={axisCounts?.I || 0}
              colorLeft="#d1d5db"
              labelRight="(S: 社会)"
              countRight={axisCounts?.S || 0}
              colorRight="#6b7280"
            />
          </div>
        </SectionCard>
        <SectionCard title="完全版 16タイプ割合">
          <ChartContainer height="h-[350px]">
            <DonutChart
              data={charts.detailedTypeDistribution || []}
              centerLabel="完全版"
            />
          </ChartContainer>
        </SectionCard>
        <SectionCard
          title="【完全版】 16タイプ 月別増加推移"
          description="完全版の16タイプの月別増加推移"
        >
          <ChartContainer height="h-[500px]">
            <StackedBarChart
              data={charts.monthlyDetailedTypeTrend || []}
              bars={Object.keys(DETAILED_TYPE_LABELS).map((key) => ({
                dataKey: key,
                name: key,
                color: DETAILED_TYPE_COLORS[key],
              }))}
            />
          </ChartContainer>
        </SectionCard>
      </div>
      <SectionCard
        title="完全版 16タイプ一覧"
        description="カラーコードと正式名称の対応表"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-2">
          {Object.entries(DETAILED_TYPE_LABELS).map(([key, label]) => (
            <div
              key={key}
              className="flex items-center gap-3 p-3 border border-border/50 rounded-xl bg-secondary/20"
            >
              <div
                className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm"
                style={{ backgroundColor: DETAILED_TYPE_COLORS[key] }}
              />
              <span className="text-sm text-foreground font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月別 参加者増加数">
          <ChartContainer height="h-[300px]">
            <StackedBarChart
              data={charts.monthlyByVersion || []}
              bars={[
                {
                  dataKey: "簡易版_CBHP",
                  name: "簡易(CBHP)",
                  color: "#a78bfa",
                },
                {
                  dataKey: "簡易版_参加者",
                  name: "簡易(参加者)",
                  color: "#c4b5fd",
                },
                {
                  dataKey: "完全版",
                  name: "完全版",
                  color: "#22C55E",
                },
              ]}
            />
          </ChartContainer>
        </SectionCard>
        <SectionCard title="週別 参加者増加数 (月〜日)">
          <ChartContainer height="h-[300px]">
            <StackedBarChart
              data={charts.weeklyByVersion || []}
              bars={[
                {
                  dataKey: "簡易版_CBHP",
                  name: "簡易(CBHP)",
                  color: "#a78bfa",
                },
                {
                  dataKey: "簡易版_参加者",
                  name: "簡易(参加者)",
                  color: "#c4b5fd",
                },
                {
                  dataKey: "完全版",
                  name: "完全版",
                  color: "#22C55E",
                },
              ]}
            />
          </ChartContainer>
        </SectionCard>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="月単位の参加者増加人数">
          <ScrollableTable
            columns={[
              { key: "month", label: "月", align: "left" },
              { key: "total", label: "合計増", align: "right" },
              { key: "simpleCbhp", label: "簡易(CBHP)", align: "right" },
              { key: "simplePart", label: "簡易(参加者)", align: "right" },
              { key: "full", label: "完全版", align: "right" },
              { key: "rate", label: "前月比", align: "right" },
            ]}
            data={tables.monthlyTable || []}
          />
        </SectionCard>
        <SectionCard title="週単位の参加者増加人数">
          <ScrollableTable
            columns={[
              { key: "week", label: "週 (月〜日)", align: "left" },
              { key: "total", label: "合計増", align: "right" },
              { key: "simpleCbhp", label: "簡易(CBHP)", align: "right" },
              { key: "simplePart", label: "簡易(参加者)", align: "right" },
              { key: "full", label: "完全版", align: "right" },
              { key: "rate", label: "前週比", align: "right" },
            ]}
            data={tables.weeklyTable || []}
          />
        </SectionCard>
      </div>
      <SectionCard
        title="設問別 回答割合"
        description="各質問ごとに選択された回答の分布状況です"
        icon={HelpCircle}
      >
        <div className="w-full overflow-x-auto mt-2">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-secondary/50 border-b border-border/50">
              <tr>
                <th className="px-4 py-3 font-medium whitespace-nowrap">ID</th>
                <th className="px-4 py-3 font-medium whitespace-nowrap">
                  設問内容
                </th>
                <th className="px-4 py-3 font-medium text-right whitespace-nowrap">
                  回答数
                </th>
                <th className="px-4 py-3 font-medium">回答割合</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {tables.questionsData.map((q: any, i: number) => (
                <tr key={i} className="hover:bg-secondary/20 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{q.key}</td>
                  <td className="px-4 py-3 text-foreground font-medium">{q.question}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{q.count.toLocaleString()}</td>
                  <td className="px-4 py-3 min-w-[300px]">
                    <DistributionBar item={q} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
