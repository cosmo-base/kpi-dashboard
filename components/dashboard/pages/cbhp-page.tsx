"use client";

import { useEffect, useState } from "react";
import Papa from "papaparse";
import {
  MousePointerClick,
  Users,
  Eye,
  Globe,
  MapPin,
  MessageCircle,
  ArrowUpDown, ArrowUpRight
} from "lucide-react";
import { KpiCard } from "../kpi-card";
import { SectionCard } from "../section-card";
import { ChartContainer } from "../chart-container";
import { LineChartComponent } from "../charts/line-chart";
import { DonutChart } from "../charts/donut-chart";
import { ScrollableTable } from "../scrollable-table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CSV_URLS = {
  trend:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=0&single=true&output=csv",
  source:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=1328843602&single=true&output=csv",
  pages:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=242868570&single=true&output=csv",
  region:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=472061508&single=true&output=csv",
  conversions:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSBX8EEqFoTdtvrQ32gTdwF1_vsT1_2yfZaVUzzHOH7RBaHDTcTKjB7rxL8f3zkF29DmwKwazp6q3r/pub?gid=16174631&single=true&output=csv",
};

const SOURCE_COLORS = [
  "#38BDF8",
  "#8B5CF6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#EC4899",
  "#10B981",
  "#6B7280",
];
const REGION_COLORS = [
  "#38BDF8",
  "#8B5CF6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#6B7280",
];

const getJSTDate = () =>
  new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));

const formatSeconds = (sec: number) => {
  if (!sec || isNaN(sec)) return "0秒";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m > 0 ? `${m}分${s}秒` : `${s}秒`;
};

const classifySource = (sourceMedium: string) => {
  const sm = sourceMedium.toLowerCase();
  if (sm.includes("google") || sm.includes("yahoo") || sm.includes("bing"))
    return "自然検索 (Google等)";
  if (sm.includes("t.co") || sm.includes("twitter") || sm.includes("x.com"))
    return "X (Twitter)";
  if (sm.includes("instagram")) return "Instagram";
  if (sm.includes("note.com")) return "note";
  if (sm.includes("direct")) return "直接アクセス (Direct)";
  return "外部サイト・その他";
};

const translateRegion = (enRegion: string) => {
  const map: Record<string, string> = {
    Hokkaido: "北海道",
    Aomori: "青森県",
    Iwate: "岩手県",
    Miyagi: "宮城県",
    Akita: "秋田県",
    Yamagata: "山形県",
    Fukushima: "福島県",
    Ibaraki: "茨城県",
    Tochigi: "栃木県",
    Gunma: "群馬県",
    Saitama: "埼玉県",
    Chiba: "千葉県",
    Tokyo: "東京都",
    Kanagawa: "神奈川県",
    Niigata: "新潟県",
    Toyama: "富山県",
    Ishikawa: "石川県",
    Fukui: "福井県",
    Yamanashi: "山梨県",
    Nagano: "長野県",
    Gifu: "岐阜県",
    Shizuoka: "静岡県",
    Aichi: "愛知県",
    Mie: "三重県",
    Shiga: "滋賀県",
    Kyoto: "京都府",
    Osaka: "大阪府",
    Hyogo: "兵庫県",
    Nara: "奈良県",
    Wakayama: "和歌山県",
    Tottori: "鳥取県",
    Shimane: "島根県",
    Okayama: "岡山県",
    Hiroshima: "広島県",
    Yamaguchi: "山口県",
    Tokushima: "徳島県",
    Kagawa: "香川県",
    Ehime: "愛媛県",
    Kochi: "高知県",
    Fukuoka: "福岡県",
    Saga: "佐賀県",
    Nagasaki: "長崎県",
    Kumamoto: "熊本県",
    Oita: "大分県",
    Miyazaki: "宮崎県",
    Kagoshima: "鹿児島県",
    Okinawa: "沖縄県",
  };
  if (!enRegion || enRegion === "(not set)") return "不明";
  let cleanName = enRegion
    .replace(/ Prefecture$/, "")
    .replace(/-to$/, "")
    .replace(/-fu$/, "")
    .replace(/-ken$/, "")
    .trim();
  return map[cleanName] || enRegion;
};

type SortMode = "views_desc" | "cvr_desc" | "discord_desc";

export function CBHPPage() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [sortMode, setSortMode] = useState<SortMode>("views_desc");

  useEffect(() => {
    Promise.all([
      fetch(CSV_URLS.trend).then((res) => res.text()),
      fetch(CSV_URLS.source).then((res) => res.text()),
      fetch(CSV_URLS.pages).then((res) => res.text()),
      fetch(CSV_URLS.region).then((res) => res.text()),
      fetch(CSV_URLS.conversions).then((res) => res.text()),
    ])
      .then(([trendTxt, sourceTxt, pagesTxt, regionTxt, convTxt]) => {
        const nowJst = getJSTDate();
        const currentY = nowJst.getFullYear();
        const currentM = nowJst.getMonth() + 1;
        const currentD = nowJst.getDate();
        const todayNum = currentY * 10000 + currentM * 100 + currentD;

        const startOfThisMonthNum = currentY * 10000 + currentM * 100 + 1;
        const endOfPrevMonthJst = new Date(nowJst.getTime());
        endOfPrevMonthJst.setDate(0);
        const endOfPrevMonthNum =
          endOfPrevMonthJst.getFullYear() * 10000 +
          (endOfPrevMonthJst.getMonth() + 1) * 100 +
          endOfPrevMonthJst.getDate();
        const startOfPrevMonthNum =
          endOfPrevMonthJst.getFullYear() * 10000 +
          (endOfPrevMonthJst.getMonth() + 1) * 100 +
          1;

        const dayOfWeek = nowJst.getDay() === 0 ? 7 : nowJst.getDay();
        const startOfWeekJst = new Date(nowJst.getTime());
        startOfWeekJst.setDate(nowJst.getDate() - dayOfWeek + 1);
        const startOfWeekNum =
          startOfWeekJst.getFullYear() * 10000 +
          (startOfWeekJst.getMonth() + 1) * 100 +
          startOfWeekJst.getDate();

        const endOfPrevWeekJst = new Date(startOfWeekJst.getTime());
        endOfPrevWeekJst.setDate(startOfWeekJst.getDate() - 1);
        const endOfPrevWeekNum =
          endOfPrevWeekJst.getFullYear() * 10000 +
          (endOfPrevWeekJst.getMonth() + 1) * 100 +
          endOfPrevWeekJst.getDate();
        const startOfPrevWeekJst = new Date(endOfPrevWeekJst.getTime());
        startOfPrevWeekJst.setDate(endOfPrevWeekJst.getDate() - 6);
        const startOfPrevWeekNum =
          startOfPrevWeekJst.getFullYear() * 10000 +
          (startOfPrevWeekJst.getMonth() + 1) * 100 +
          startOfPrevWeekJst.getDate();

        const parseDateToNum = (dateStr: string) => {
          if (!dateStr) return 0;
          const d = dateStr.replace(/\//g, "");
          return parseInt(d, 10) || 0;
        };

        // --- 1. 日別トレンドの処理 ---
        const trendRows = Papa.parse(trendTxt, {
          header: true,
          skipEmptyLines: true,
        }).data as any[];
        let totalPVs = 0,
          totalUsers = 0,
          totalNewUsers = 0,
          sumEngagementRate = 0,
          sumSessionDuration = 0;
        const trendData = trendRows.map((row) => {
          const pv = parseInt(row.screenPageViews, 10) || 0;
          const users = parseInt(row.activeUsers, 10) || 0;
          const newUsers = parseInt(row.newUsers, 10) || 0;
          totalPVs += pv;
          totalUsers += users;
          totalNewUsers += newUsers;
          sumEngagementRate += parseFloat(row.engagementRate) || 0;
          sumSessionDuration += parseFloat(row.averageSessionDuration) || 0;
          const shortDate =
            String(row.date || "").length > 5
              ? String(row.date).substring(5)
              : row.date;
          return {
            name: shortDate,
            PV数: pv,
            ユーザー数: users,
            新規ユーザー: newUsers,
          };
        });
        const avgEngRate =
          trendRows.length > 0
            ? (sumEngagementRate / trendRows.length) * 100
            : 0;
        const avgDuration =
          trendRows.length > 0 ? sumSessionDuration / trendRows.length : 0;

        // --- 2. 流入元の処理 ---
        const sourceRows = Papa.parse(sourceTxt, {
          header: true,
          skipEmptyLines: true,
        }).data as any[];
        const sourceMap = new Map<string, number>();
        sourceRows.forEach((row) => {
          const sm = String(row.sourceMedium || row.sessionSourceMedium || "");
          const users = parseInt(row.activeUsers, 10) || 0;
          const groupName = classifySource(sm);
          sourceMap.set(groupName, (sourceMap.get(groupName) || 0) + users);
        });
        const sourceData = Array.from(sourceMap.entries())
          .map(([name, value], i) => ({
            name,
            value,
            color: SOURCE_COLORS[i % SOURCE_COLORS.length],
          }))
          .sort((a, b) => b.value - a.value);

        // --- 3. コンバージョンの処理 (ページごとにDiscord参加を紐づける) ---
        const convRows = Papa.parse(convTxt, {
          header: true,
          skipEmptyLines: true,
        }).data as any[];
        let totalDiscordJoins = 0;
        const discordJoinsByPage = new Map<string, number>();

        convRows.forEach((row) => {
          const evName = row.eventName || "";
          const path = row.pagePath || "不明";
          const count = parseInt(row.eventCount, 10) || 0;
          if (evName === "discord_join") {
            totalDiscordJoins += count;
            discordJoinsByPage.set(
              path,
              (discordJoinsByPage.get(path) || 0) + count,
            );
          }
        });

        // --- 4. ページランキングの処理 (日付比較 ＆ CVR計算) ---
        const pagesRows = Papa.parse(pagesTxt, {
          header: true,
          skipEmptyLines: true,
        }).data as any[];
        const pathMap = new Map<
          string,
          {
            title: string;
            path: string;
            totalPv: number;
            thisMonth: number;
            prevMonth: number;
            thisWeek: number;
            prevWeek: number;
          }
        >();

        pagesRows.forEach((row) => {
          const path = row.pagePath || "不明";
          const views = parseInt(row.screenPageViews, 10) || 0;
          const shortTitle = String(row.pageTitle || "")
            .split(" - ")[0]
            .split(" | ")[0];
          const dateNum = parseDateToNum(row.date);

          if (!pathMap.has(path))
            pathMap.set(path, {
              title: shortTitle || path,
              path,
              totalPv: 0,
              thisMonth: 0,
              prevMonth: 0,
              thisWeek: 0,
              prevWeek: 0,
            });
          const p = pathMap.get(path)!;
          p.totalPv += views;

          if (dateNum >= startOfThisMonthNum) p.thisMonth += views;
          else if (
            dateNum >= startOfPrevMonthNum &&
            dateNum <= endOfPrevMonthNum
          )
            p.prevMonth += views;

          if (dateNum >= startOfWeekNum) p.thisWeek += views;
          else if (dateNum >= startOfPrevWeekNum && dateNum <= endOfPrevWeekNum)
            p.prevWeek += views;
        });

        const pageData = Array.from(pathMap.values()).map((item) => {
          const discordCount = discordJoinsByPage.get(item.path) || 0;
          const cvr =
            item.totalPv > 0 ? (discordCount / item.totalPv) * 100 : 0;
          const monthRate =
            item.prevMonth === 0
              ? item.thisMonth > 0
                ? 100
                : 0
              : Math.round((item.thisMonth / item.prevMonth) * 100);
          const weekRate =
            item.prevWeek === 0
              ? item.thisWeek > 0
                ? 100
                : 0
              : Math.round((item.thisWeek / item.prevWeek) * 100);

          return {
            title: item.title,
            path: item.path,
            viewsNum: item.totalPv,
            discordNum: discordCount,
            cvrNum: cvr,
            monthRateStr:
              item.thisMonth === 0 && item.prevMonth === 0
                ? "-"
                : `${monthRate}%`,
            weekRateStr:
              item.thisWeek === 0 && item.prevWeek === 0 ? "-" : `${weekRate}%`,
            cvrStr: cvr > 0 ? `${Math.round(cvr * 10) / 10}%` : "0%",
            monthTrend: monthRate >= 100 ? "up" : "down",
            weekTrend: weekRate >= 100 ? "up" : "down",
          };
        });

        // --- 5. 都道府県の処理 ---
        const regionRows = Papa.parse(regionTxt, {
          header: true,
          skipEmptyLines: true,
        }).data as any[];
        const regionDistribution: any[] = [];
        const regionData: any[] = [];
        const regionMap = new Map<string, number>();

        regionRows.forEach((row) => {
          const val = parseInt(row.activeUsers, 10) || 0;
          const rawRegion = String(row.region || "");
          if (val <= 0 || !rawRegion || rawRegion === "(not set)") return;
          const jpRegion = translateRegion(rawRegion);
          regionMap.set(jpRegion, (regionMap.get(jpRegion) || 0) + val);
        });

        const sortedRegions = Array.from(regionMap.entries()).sort(
          (a, b) => b[1] - a[1],
        );
        sortedRegions.forEach(([regionName, val], i) => {
          regionData.push({
            rank: i + 1,
            region: regionName,
            users: val.toLocaleString(),
          });
          if (i < 5)
            regionDistribution.push({
              name: regionName,
              value: val,
              color: REGION_COLORS[i % REGION_COLORS.length],
            });
          else {
            const othersIdx = regionDistribution.findIndex(
              (d) => d.name === "その他",
            );
            if (othersIdx === -1)
              regionDistribution.push({
                name: "その他",
                value: val,
                color: REGION_COLORS[5],
              });
            else regionDistribution[othersIdx].value += val;
          }
        });

        setData({
          summary: {
            totalPVs,
            totalUsers,
            totalNewUsers,
            avgEngRate: avgEngRate.toFixed(1),
            avgDuration: formatSeconds(avgDuration),
            totalDiscordJoins,
          },
          charts: { trendData, sourceData, regionDistribution },
          tables: { pageDataRaw: pageData, regionData },
        });
      })
      .catch((err) => {
        console.error("GA4 CSV Fetch Error:", err);
        setError("データの読み込みに失敗しました。");
      });
  }, []);

  if (error)
    return (
      <div className="flex h-[400px] items-center justify-center text-destructive">
        <p>{error}</p>
      </div>
    );
  if (!data)
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <Globe className="h-5 w-5" />
          <span>GA4アクセスデータを取得・集計中...</span>
        </div>
      </div>
    );

  const { summary, charts, tables } = data;

  const sortedPageData = [...tables.pageDataRaw].sort((a, b) => {
    if (sortMode === "discord_desc") return b.discordNum - a.discordNum;
    if (sortMode === "cvr_desc") return b.cvrNum - a.cvrNum;
    return b.viewsNum - a.viewsNum;
  });

  return (
    <div className="space-y-6">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .recharts-default-tooltip { background-color: rgba(15, 23, 42, 0.95) !important; border: 1px solid rgba(255,255,255,0.1) !important; }
        .recharts-tooltip-item-name, .recharts-tooltip-item-value, .recharts-tooltip-item { color: #ffffff !important; }
      `,
        }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-border/50 pb-4">
        <h2 className="text-2xl font-bold text-foreground">
          CBHP アクセス解析 (GA4)
        </h2>
        <p className="text-muted-foreground mt-1">
          ウェブサイトのアクセス状況・エンゲージメント・流入経路・コンバージョンを確認できます。
        </p>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground w-fit flex items-center gap-2"
        >
          <a
            href="https://docs.google.com/spreadsheets/d/1QwgyndR230Vtr2qiWAgw0FNQEaCfdA1VYagoRE2rxOQ/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>元データ (スプシ)</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        <KpiCard
          title="総ページビュー (累計)"
          value={summary.totalPVs.toLocaleString()}
          unit="PV"
          icon={Eye}
          accentColor="primary"
        />
        <KpiCard
          title="のべユーザー数 (累計)"
          value={summary.totalUsers.toLocaleString()}
          unit="人"
          trendValue={`うち新規: ${summary.totalNewUsers.toLocaleString()}人`}
          trendType="up"
          icon={Users}
          accentColor="success"
        />
        <KpiCard
          title="平均エンゲージメント率"
          value={summary.avgEngRate}
          unit="%"
          trendValue={`平均滞在時間: ${summary.avgDuration}`}
          trendType="up"
          icon={MousePointerClick}
          accentColor="warning"
        />
        <KpiCard
          title="Discord参加クリック数 (累計)"
          value={summary.totalDiscordJoins.toLocaleString()}
          unit="回"
          icon={MessageCircle}
          accentColor="info"
        />
      </div>

      <SectionCard title="アクセス推移 (全期間)">
        <ChartContainer height="h-[350px]">
          <LineChartComponent
            data={charts.trendData}
            lines={[
              { dataKey: "PV数", name: "PV数", color: "#38BDF8" },
              { dataKey: "ユーザー数", name: "ユーザー数", color: "#8B5CF6" },
              {
                dataKey: "新規ユーザー",
                name: "新規ユーザー",
                color: "#22C55E",
              },
            ]}
          />
        </ChartContainer>
      </SectionCard>

      <SectionCard
        title="ページ別 パフォーマンス分析"
        description="各ページのPV数、Discord参加への貢献度（CVR）、およびアクセス増減率"
      >
        <div className="flex flex-wrap items-center justify-end gap-2 mb-4">
          <span className="text-sm text-muted-foreground mr-1">並び順:</span>
          {[
            { mode: "views_desc", label: "PV数順" },
            { mode: "discord_desc", label: "参加クリック数順" },
            { mode: "cvr_desc", label: "CVR (コンバージョン率) 順" },
          ].map((btn) => (
            <Button
              key={btn.mode}
              variant="outline"
              size="sm"
              onClick={() => setSortMode(btn.mode as SortMode)}
              className={cn(
                "transition-all duration-200",
                sortMode === btn.mode
                  ? "bg-primary text-primary-foreground border-transparent"
                  : "bg-secondary/30 hover:bg-secondary/50 border-border/50 text-foreground",
              )}
            >
              <ArrowUpDown className="h-3 w-3 mr-1" />
              {btn.label}
            </Button>
          ))}
        </div>
        <ScrollableTable
          columns={[
            { key: "rank", label: "順位", align: "center" },
            { key: "title", label: "ページ名", align: "left" },
            { key: "viewsStr", label: "PV数", align: "right" },
            { key: "monthRateStr", label: "前月比", align: "right" },
            { key: "weekRateStr", label: "前週比", align: "right" },
            { key: "discordStr", label: "Discord参加", align: "right" },
            { key: "cvrComp", label: "CVR", align: "right" },
          ]}
          data={sortedPageData.map((item, i) => ({
            ...item,
            rank: i + 1,
            viewsStr: item.viewsNum.toLocaleString(),
            discordStr:
              item.discordNum > 0 ? (
                <span className="text-info font-bold">{item.discordNum}回</span>
              ) : (
                "-"
              ),
            cvrComp:
              item.cvrNum > 0 ? (
                <span className="text-warning font-bold">{item.cvrStr}</span>
              ) : (
                "-"
              ),
            monthRateStr: (
              <span
                className={
                  item.monthTrend === "up" ? "text-success" : "text-danger"
                }
              >
                {item.monthRateStr}
              </span>
            ),
            weekRateStr: (
              <span
                className={
                  item.weekTrend === "up" ? "text-success" : "text-danger"
                }
              >
                {item.weekRateStr}
              </span>
            ),
          }))}
        />
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SectionCard title="流入元メディア 割合">
          <ChartContainer height="h-[350px]">
            {charts.sourceData.length > 0 ? (
              <DonutChart data={charts.sourceData} centerLabel="ユーザー" />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
        <SectionCard title="都道府県別 アクセス割合" icon={MapPin}>
          <ChartContainer height="h-[350px]">
            {charts.regionDistribution.length > 0 ? (
              <DonutChart
                data={charts.regionDistribution}
                centerLabel="ユーザー"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                データがありません
              </div>
            )}
          </ChartContainer>
        </SectionCard>
        <SectionCard title="地域(都道府県) ランキング (累計)" icon={MapPin}>
          <ScrollableTable
            columns={[
              { key: "rank", label: "順位", align: "center" },
              { key: "region", label: "都道府県", align: "left" },
              { key: "users", label: "ユーザー数", align: "right" },
            ]}
            data={tables.regionData}
          />
        </SectionCard>
      </div>
    </div>
  );
}
