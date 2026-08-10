"use client";

import { useEffect, useState, useCallback } from "react";
import Papa from "papaparse";
import {
  Users,
  TrendingUp,
  TrendingDown,
  Minus,
  RefreshCw,
  HelpCircle,
  Sparkles,
  Rocket,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, getJSTDate } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

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

interface RealtimeData {
  todayLabel: string;
  discord: { value: number; updated: boolean };
  x: { value: number; updated: boolean };
  instagram: { value: number; updated: boolean };
  note: { value: number; updated: boolean };
  quiz: number;
  type: number;
  matchRocket: number;
  matchConstellation: number;
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

function formatDelta(n: number) {
  if (n > 0) return `+${n.toLocaleString()}`;
  if (n < 0) return n.toLocaleString();
  return "0";
}

type DeltaStatus = "up" | "down" | "neutral" | "loading";

function RealtimeCard({
  title,
  delta,
  unit,
  status,
  icon: Icon,
  note,
}: {
  title: string;
  delta: string;
  unit: string;
  status: DeltaStatus;
  icon: LucideIcon;
  note?: string;
}) {
  const colors = {
    up: {
      border: "border-success/30",
      text: "text-success",
      icon: TrendingUp,
      iconColor: "text-success",
    },
    down: {
      border: "border-danger/30",
      text: "text-danger",
      icon: TrendingDown,
      iconColor: "text-danger",
    },
    neutral: {
      border: "border-border/20",
      text: "text-muted-foreground",
      icon: Minus,
      iconColor: "text-muted-foreground",
    },
    loading: {
      border: "border-border/20",
      text: "text-foreground",
      icon: Minus,
      iconColor: "text-muted-foreground",
    },
  };
  const c = colors[status];
  const DeltaIcon = status === "up" ? TrendingUp : status === "down" ? TrendingDown : Minus;

  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden group",
        `border ${c.border}`,
      )}
    >
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "p-2 rounded-xl",
            status === "up"
              ? "bg-success/10"
              : status === "down"
                ? "bg-danger/10"
                : "bg-secondary/30",
          )}
        >
          <Icon
            className={cn(
              "w-4 h-4",
              status === "up"
                ? "text-success"
                : status === "down"
                  ? "text-danger"
                  : "text-muted-foreground",
            )}
          />
        </div>
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
      </div>

      <div className="flex items-end gap-2">
        {status !== "loading" && (
          <DeltaIcon className={cn("w-5 h-5 mb-1 flex-shrink-0", c.iconColor)} />
        )}
        <span className={cn("text-4xl font-bold tracking-tight", c.text)}>
          {status === "loading" ? (
            <span className="animate-pulse">...</span>
          ) : (
            delta
          )}
        </span>
        {status !== "loading" && (
          <span className="text-sm text-muted-foreground mb-1">{unit}</span>
        )}
      </div>

      {note && (
        <span className="text-xs text-muted-foreground border-t border-border/30 pt-2">
          {note}
        </span>
      )}
    </div>
  );
}

function deltaStatus(value: number): DeltaStatus {
  if (value > 0) return "up";
  if (value < 0) return "down";
  return "neutral";
}

export function RealtimePage() {
  const [data, setData] = useState<RealtimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastFetched, setLastFetched] = useState<string>("");

  const fetchData = useCallback(() => {
    setLoading(true);
    const nowJst = getJSTDate();
    const currentY = nowJst.getFullYear();
    const currentM = nowJst.getMonth() + 1;
    const currentD = nowJst.getDate();
    const todayNum = currentY * 10000 + currentM * 100 + currentD;
    const todayLabel = `${currentY}/${String(currentM).padStart(2, "0")}/${String(currentD).padStart(2, "0")}`;
    const todayStr = `${currentY}/${String(currentM).padStart(2, "0")}/${String(currentD).padStart(2, "0")}`;

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
        // Discord / SNS
        const rawData = Papa.parse(discordSnsCsv, { skipEmptyLines: true })
          .data as string[][];
        const dsRecords = addDateNums(parseDiscordSnsRecords(rawData));
        const latest = dsRecords[dsRecords.length - 1];
        const prev = dsRecords.length >= 2 ? dsRecords[dsRecords.length - 2] : null;

        const isDiscordUpdatedToday = latest?.num === todayNum;
        const discordToday = isDiscordUpdatedToday ? latest.increase : 0;
        const xToday = isDiscordUpdatedToday && prev ? latest.x - prev.x : 0;
        const instagramToday = isDiscordUpdatedToday && prev ? latest.instagram - prev.instagram : 0;
        const noteToday = isDiscordUpdatedToday && prev ? latest.note - prev.note : 0;

        // Quiz: sum "回答数" for rows where 日時 starts with today
        const quizRows = Papa.parse(quizCsv, { header: true, skipEmptyLines: true })
          .data as any[];
        let quizToday = 0;
        quizRows.forEach((r) => {
          if (r["問題"] && String(r["問題"]).trim() !== "") {
            const dateStr = String(r["日時"] || "").trim();
            if (dateStr.startsWith(todayStr)) {
              quizToday +=
                parseInt(String(r["回答数"] || "0").replace(/,/g, ""), 10) || 0;
            }
          }
        });

        // Type: count rows where date starts with today
        const parseTypeRowsToday = (csv: string) => {
          const rows = Papa.parse(csv, { header: true, skipEmptyLines: true })
            .data as any[];
          return rows.filter(
            (r) =>
              String(r.date || "").trim().startsWith(todayStr) ||
              String(r.date || "").trim().replace(/-/g, "/").startsWith(todayStr),
          ).length;
        };
        const typeToday =
          parseTypeRowsToday(type1Csv) +
          parseTypeRowsToday(type2Csv) +
          parseTypeRowsToday(type3Csv);

        // Match: count rows where 日時 starts with today and result is non-empty
        const parseMatchToday = (csv: string, resultCol: string) => {
          const rows = Papa.parse(csv, { header: true, skipEmptyLines: true })
            .data as any[];
          return rows.filter(
            (r) =>
              String(r["日時"] || "").trim().startsWith(todayStr) &&
              String(r[resultCol] || "").trim() !== "",
          ).length;
        };
        const rocketToday = parseMatchToday(rocketCsv, "判定ロケット");
        const constellationToday = parseMatchToday(constellCsv, "判定");

        setData({
          todayLabel,
          discord: { value: discordToday, updated: isDiscordUpdatedToday },
          x: { value: xToday, updated: isDiscordUpdatedToday },
          instagram: { value: instagramToday, updated: isDiscordUpdatedToday },
          note: { value: noteToday, updated: isDiscordUpdatedToday },
          quiz: quizToday,
          type: typeToday,
          matchRocket: rocketToday,
          matchConstellation: constellationToday,
        });

        const now = getJSTDate();
        setLastFetched(
          `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")} JST`,
        );
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const notUpdatedNote = "本日未更新（前回との差分が0の場合あり）";

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/50 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">リアルタイム</h2>
          <p className="text-muted-foreground mt-1">
            今日 ({data?.todayLabel ?? "..."}) の増減を各指標ごとに表示します。
          </p>
        </div>
        <div className="flex items-center gap-3">
          {lastFetched && (
            <span className="text-xs text-muted-foreground">更新: {lastFetched}</span>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={fetchData}
            disabled={loading}
            className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground flex items-center gap-2"
          >
            <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
            更新
          </Button>
        </div>
      </div>

      {/* 全体 */}
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          全体
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <RealtimeCard
            title="Discord メンバー増減"
            delta={loading ? "..." : formatDelta(data?.discord.value ?? 0)}
            unit="人"
            status={loading ? "loading" : deltaStatus(data?.discord.value ?? 0)}
            icon={Users}
            note={!loading && !data?.discord.updated ? notUpdatedNote : undefined}
          />
          <RealtimeCard
            title="X フォロワー増減"
            delta={loading ? "..." : formatDelta(data?.x.value ?? 0)}
            unit="人"
            status={loading ? "loading" : deltaStatus(data?.x.value ?? 0)}
            icon={TrendingUp}
            note={!loading && !data?.x.updated ? notUpdatedNote : undefined}
          />
          <RealtimeCard
            title="Instagram フォロワー増減"
            delta={loading ? "..." : formatDelta(data?.instagram.value ?? 0)}
            unit="人"
            status={loading ? "loading" : deltaStatus(data?.instagram.value ?? 0)}
            icon={TrendingUp}
            note={!loading && !data?.instagram.updated ? notUpdatedNote : undefined}
          />
          <RealtimeCard
            title="note フォロワー増減"
            delta={loading ? "..." : formatDelta(data?.note.value ?? 0)}
            unit="人"
            status={loading ? "loading" : deltaStatus(data?.note.value ?? 0)}
            icon={TrendingUp}
            note={!loading && !data?.note.updated ? notUpdatedNote : undefined}
          />
        </div>
      </div>

      {/* コンテンツ */}
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          コンテンツ
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <RealtimeCard
            title="宇宙クイズ 回答数"
            delta={loading ? "..." : (data?.quiz ?? 0).toLocaleString()}
            unit="件"
            status={loading ? "loading" : data?.quiz ? "up" : "neutral"}
            icon={HelpCircle}
          />
          <RealtimeCard
            title="宇宙タイプ診断 診断数"
            delta={loading ? "..." : (data?.type ?? 0).toLocaleString()}
            unit="件"
            status={loading ? "loading" : data?.type ? "up" : "neutral"}
            icon={Sparkles}
          />
          <RealtimeCard
            title="Cosmo Match ロケット編"
            delta={loading ? "..." : (data?.matchRocket ?? 0).toLocaleString()}
            unit="件"
            status={loading ? "loading" : data?.matchRocket ? "up" : "neutral"}
            icon={Rocket}
          />
          <RealtimeCard
            title="Cosmo Match 星座編"
            delta={loading ? "..." : (data?.matchConstellation ?? 0).toLocaleString()}
            unit="件"
            status={loading ? "loading" : data?.matchConstellation ? "up" : "neutral"}
            icon={Star}
          />
        </div>
      </div>

      {/* 合計 */}
      <div className="glass-card rounded-2xl p-5 border border-border/20">
        <p className="text-sm text-muted-foreground mb-3">今日のコンテンツ合計</p>
        <p className={cn("text-5xl font-bold tracking-tight", !loading && ((data?.quiz ?? 0) + (data?.type ?? 0) + (data?.matchRocket ?? 0) + (data?.matchConstellation ?? 0)) > 0 ? "text-success" : "text-foreground")}>
          {loading
            ? "..."
            : (
                (data?.quiz ?? 0) +
                (data?.type ?? 0) +
                (data?.matchRocket ?? 0) +
                (data?.matchConstellation ?? 0)
              ).toLocaleString()}
          <span className="text-base text-muted-foreground font-normal ml-2">件</span>
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          クイズ + タイプ診断 + Cosmo Match（ロケット編 + 星座編）
        </p>
      </div>
    </div>
  );
}
