"use client";

import React, { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// publicフォルダに配置した日本地図データへのパス
const geoUrl = "/japan.json";

interface JapanMapProps {
  data: { name: string; value: number }[];
  colorMax?: string; // 最大値の色（デフォルト: #38BDF8）
}

export function JapanMap({ data, colorMax = "#38BDF8" }: JapanMapProps) {
  const [tooltipContent, setTooltipContent] = useState<{ pref: string; count: number } | null>(null);

  // データをMap化し、最大値を取得する
  const { dataMap, maxValue } = useMemo(() => {
    const map = new Map<string, number>();
    let max = 0;
    data.forEach((d) => {
      // "東京都" などを "東京" に統一してマッチしやすくする
      const cleanName = d.name.replace(/(都|府|県)$/, "");
      map.set(cleanName, d.value);
      if (d.value > max) max = d.value;
    });
    return { dataMap: map, maxValue: max };
  }, [data]);

  // 値に応じて色の濃さ（不透明度）を計算する関数
  const getFillColor = (value: number) => {
    if (!value || maxValue === 0) return "#F1F5F9"; // 0件の場合は薄いグレー（Tailwindのslate-100）

    // 0.2（20%）〜 1.0（100%）の間で濃さを決定
    const opacity = 0.2 + (value / maxValue) * 0.8;

    // 渡されたHEXカラー（#38BDF8 など）を RGB に変換して RGBA を返す簡易ロジック
    let r = 56, g = 189, b = 248; // デフォルト #38BDF8
    if (colorMax.startsWith("#") && colorMax.length === 7) {
      r = parseInt(colorMax.substring(1, 3), 16);
      g = parseInt(colorMax.substring(3, 5), 16);
      b = parseInt(colorMax.substring(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div className="relative w-full h-full min-h-[350px] flex items-center justify-center bg-secondary/10 rounded-xl overflow-hidden border border-border/30">
      
      {/* react-simple-maps による地図描画 */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [137.0, 38.2], // 日本の中心座標付近
          scale: 1600,           // 日本全体が収まるズーム倍率
        }}
        width={800}
        height={400}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              // json内のプロパティから都道府県名を抽出（データ元によってキーが nam_ja の場合がある）
              const prefNameFull = geo.properties.nam_ja || geo.properties.name_local || geo.properties.name || "";
              const prefName = prefNameFull.replace(/(都|府|県)$/, "");
              
              // マップから該当する都道府県の件数を取得
              const count = dataMap.get(prefName) || 0;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getFillColor(count)}
                  stroke="#ffffff"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none", transition: "all 250ms" },
                    hover: { fill: colorMax, outline: "none", cursor: "pointer", transition: "all 250ms" },
                    pressed: { outline: "none" },
                  }}
                  onMouseEnter={() => setTooltipContent({ pref: prefNameFull, count })}
                  onMouseLeave={() => setTooltipContent(null)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* ホバー時のポップアップ（ツールチップ） */}
      {tooltipContent && (
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur border border-border p-3 rounded-lg shadow-xl pointer-events-none z-10">
          <p className="text-sm font-bold text-foreground">{tooltipContent.pref}</p>
          <p className="text-2xl font-black" style={{ color: colorMax }}>
            {tooltipContent.count}<span className="text-xs text-muted-foreground ml-1">件</span>
          </p>
        </div>
      )}
    </div>
  );
}