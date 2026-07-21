"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  Users,
  TrendingUp,
  HelpCircle,
  Sparkles,
  Rocket,
  Star,
  Calendar,
} from "lucide-react";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";

const getJSTDate = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));

const CSV_URLS = {
  discordSns:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRoX91AuTR9uVSNcCSqr0ir_SIP-6ZtNpOqBHaLEwXDMA99w1Rws-5L7crTpqBY_JqHa-n0Ie4PxWLq/pub?gid=0&single=true&output=csv",
  quiz: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSVq2TSYbOibnTUUyYqHJmrEfspQ1KQn8JpaTsvkrC8oekSogURY1N9yqocitnAbEXewzPIQVyj59rf/pub?gid=0&single=true&output=csv",
  typeSimpleCbhp:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vReKqSJGubls2ixij5n6FbAi37wzshzZ09Q10a0uzJO1kuk8dSuw9c_yjm4XmsJelkiCLBubKAUFgky/pub?gid=0&single=true&output=csv",
  typeSimpleParticipant:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzLEbfZRlDsErUJ7hrEqtaXTpEym3kWXGyvpQDrAbLOFbJZ4_aoMdFn-BQM1GSeHiXsTo4L3kY86YC/pub?gid=0&single=true&output=csv",
  typeDetailed:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJvQVHHyL56_1xeVimkfbJCXCNN9MGtDt_ACebndkqhuqGbugvykZvRhkmajQ5fs6ug_Tas_rPXZUl/pub?gid=0&single=true&output=csv",
  matchRocket:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQENBPEZ3ep1J54G09l7I-vPMaMC6wNxr55bXBsdAdj_xp6gy5ksoM27EyITCuGObi0Kzxbzu2HpLM1/pub?gid=1977317423&single=true&output=csv",
  matchConstellation:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTbfWKxGFEmOkuaszkGJNUcX4FySkqmdxKJtaXG0esrjJoHSo5zmEoOGLTmzH09YJd9BZY1DyqNc7P/pub?gid=1977317423&single=true&output=csv",
};

interface OverviewData {
  discordTotal: number;
  discordThisMonth: number;
  xFollowers: number;
  instagramFollowers: number;
  noteFollowers: number;
  quizTotal: number;
  typeTotal: number;
  rocketTotal: number;
  constellationTotal: number;
}

function parseDiscordSnsRecords(rawData: string[][]) {
  const headerRowIndex = rawData.findIndex((row) => row.includes("参加数"));
  if (headerRowIndex === -1) return [];
  const headers = rawData[headerRowIndex];
  const monthIdx = headers.indexOf("月");
  const dayIdx = headers.indexOf("日");
  const increaseIdx = headers.indexOf("参加増加数");
  const totalIdx = headers.indexOf("参加数");
  let xIdx = headers.indexOf("X");
  if (xIdx === -1) xIdx = headers.indexOf("x");
  const instagramIdx = headers.indexOf("Instagram");
  const noteIdx = headers.indexOf("note");

  return rawData
    .slice(headerRowIndex + 1)
    .map((row) => ({
      month: parseInt(row[monthIdx], 10),
      day: parseInt(row[dayIdx], 10),
      increase: parseInt(String(row[increaseIdx] || "").replace(/,/g, ""), 10) || 0,
      total: parseInt(String(row[totalIdx] || "").replace(/,/g, ""), 10) || 0,
      x: parseInt(String(row[xIdx] || "").replace(/,/g, ""), 10) || 0,
      instagram: parseInt(String(row[instagramIdx] || "").replace(/,/g, ""), 10) || 0,
      note: parseInt(String(row[noteIdx] || "").replace(/,/g, ""), 10) || 0,
    }))
    .filter((r) => r.total > 0);
}

function addDateNums(records: ReturnType<typeof parseDiscordSnsRecords>) {
  const nowJst = getJSTDate();
  const currentM = nowJst.getMonth() + 1;
  let yearForDate = nowJst.getFullYear();
  if (records.length > 0 && records[0].month > currentM + 1) yearForDate--;
  let prevMonth = -1;
  return records.map((r) => {
    if (prevMonth !== -1 && prevMonth === 12 && r.month === 1) yearForDate++;
    prevMonth = r.month;
    return { ...r, num: yearForDate * 10000 + r.month * 100 + r.day };
  });
}

export function OverviewPage() {
  const [data, setData] = useState<OverviewData | null>(null);

  useEffect(() => {
    Promise.all([
      fetch(CSV_URLS.discordSns).then((r) => r.text()),
      fetch(CSV_URLS.quiz).then((r) => r.text()),
      fetch(CSV_URLS.typeSimpleCbhp).then((r) => r.text()),
      fetch(CSV_URLS.typeSimpleParticipant).then((r) => r.text()),
      fetch(CSV_URLS.typeDetailed).then((r) => r.text()),
      fetch(CSV_URLS.matchRocket).then((r) => r.text()),
      fetch(CSV_URLS.matchConstellation).then((r) => r.text()),
    ])
      .then(([discordSnsCsv, quizCsv, type1Csv, type2Csv, type3Csv, rocketCsv, constellCsv]) => {
        const nowJst = getJSTDate();
        const startOfMonthNum =
          nowJst.getFullYear() * 10000 + (nowJst.getMonth() + 1) * 100 + 1;

        // Discord / SNS
        const rawData = Papa.parse(discordSnsCsv, { skipEmptyLines: true })
          .data as string[][];
        const dsRecords = addDateNums(parseDiscordSnsRecords(rawData));
        const latest = dsRecords[dsRecords.length - 1];
        let discordThisMonth = 0;
        dsRecords.forEach((r) => {
          if (r.num >= startOfMonthNum) discordThisMonth += r.increase;
        });

        // Quiz: sum of "回答数" column
        const quizRows = Papa.parse(quizCsv, {
          header: true,
          skipEmptyLines: true,
        }).data as any[];
        let quizTotal = 0;
        quizRows.forEach((r) => {
          if (r["問題"] && String(r["問題"]).trim() !== "") {
            quizTotal += parseInt(String(r["回答数"] || "0").replace(/,/g, ""), 10) || 0;
          }
        });

        // Type diagnosis: count valid rows across 3 CSVs
        const parseTypeRows = (csv: string) =>
          (Papa.parse(csv, { header: true, skipEmptyLines: true }).data as any[]).filter(
            (r) => String(r.date || "").trim().length >= 8,
          );
        const typeTotal =
          parseTypeRows(type1Csv).length +
          parseTypeRows(type2Csv).length +
          parseTypeRows(type3Csv).length;

        // Match: count rows with non-empty 日時 and result
        const parseMatchCount = (csv: string, resultCol: string) =>
          (Papa.parse(csv, { header: true, skipEmptyLines: true }).data as any[]).filter(
            (r) =>
              String(r["日時"] || "").trim() !== "" &&
              String(r[resultCol] || "").trim() !== "",
          ).length;
        const rocketTotal = parseMatchCount(rocketCsv, "判定ロケット");
        const constellationTotal = parseMatchCount(constellCsv, "判定");

        setData({
          discordTotal: latest?.total ?? 0,
          discordThisMonth,
          xFollowers: latest?.x ?? 0,
          instagramFollowers: latest?.instagram ?? 0,
          noteFollowers: latest?.note ?? 0,
          quizTotal,
          typeTotal,
          rocketTotal,
          constellationTotal,
        });
      })
      .catch(console.error);
  }, []);

  const v = (n: number | undefined) => (n !== undefined ? n.toLocaleString() : "...");
  const loading = !data;

  return (
    <div className="space-y-8">
      <div className="border-b border-border/50 pb-4">
        <h2 className="text-2xl font-bold text-foreground">概要</h2>
        <p className="text-muted-foreground mt-1">
          各ページの主要KPIを一覧で確認できます。
        </p>
      </div>

      {/* 全体 */}
      <SectionCard title="全体" description="Discord・SNSの最新フォロワー数">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <KpiCard
            title="Discord メンバー数"
            value={loading ? "..." : v(data.discordTotal)}
            unit="人"
            icon={Users}
            accentColor="primary"
            trendValue={
              !loading
                ? `今月 ${data.discordThisMonth >= 0 ? "+" : ""}${data.discordThisMonth}人`
                : undefined
            }
            trendType="up"
          />
          <KpiCard
            title="X フォロワー"
            value={loading ? "..." : v(data.xFollowers)}
            unit="人"
            icon={TrendingUp}
            accentColor="accent"
          />
          <KpiCard
            title="Instagram フォロワー"
            value={loading ? "..." : v(data.instagramFollowers)}
            unit="人"
            icon={TrendingUp}
            accentColor="warning"
          />
          <KpiCard
            title="note フォロワー"
            value={loading ? "..." : v(data.noteFollowers)}
            unit="人"
            icon={TrendingUp}
            accentColor="success"
          />
        </div>
      </SectionCard>

      {/* コンテンツ */}
      <SectionCard title="コンテンツ" description="各コンテンツの累計参加者数">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <KpiCard
            title="宇宙クイズ 累計回答数"
            value={loading ? "..." : v(data.quizTotal)}
            unit="件"
            icon={HelpCircle}
            accentColor="warning"
          />
          <KpiCard
            title="宇宙タイプ診断 累計"
            value={loading ? "..." : v(data.typeTotal)}
            unit="件"
            icon={Sparkles}
            accentColor="primary"
          />
          <KpiCard
            title="Cosmo Match ロケット編"
            value={loading ? "..." : v(data.rocketTotal)}
            unit="件"
            icon={Rocket}
            accentColor="accent"
          />
          <KpiCard
            title="Cosmo Match 星座編"
            value={loading ? "..." : v(data.constellationTotal)}
            unit="件"
            icon={Star}
            accentColor="success"
          />
        </div>
      </SectionCard>

      {/* 合計まとめ */}
      <SectionCard title="コンテンツ合計" description="全コンテンツ累計の合算">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <KpiCard
            title="SNS 総フォロワー"
            value={
              loading
                ? "..."
                : v(data.xFollowers + data.instagramFollowers + data.noteFollowers)
            }
            unit="人"
            icon={TrendingUp}
            accentColor="accent"
            description="X + Instagram + note"
          />
          <KpiCard
            title="Cosmo Match 全編合計"
            value={loading ? "..." : v(data.rocketTotal + data.constellationTotal)}
            unit="件"
            icon={Rocket}
            accentColor="primary"
            description="ロケット編 + 星座編"
          />
          <KpiCard
            title="コンテンツ参加者 総計"
            value={
              loading
                ? "..."
                : v(
                    data.quizTotal +
                      data.typeTotal +
                      data.rocketTotal +
                      data.constellationTotal,
                  )
            }
            unit="件"
            icon={Calendar}
            accentColor="success"
            description="クイズ + タイプ診断 + Cosmo Match"
          />
        </div>
      </SectionCard>
    </div>
  );
}
