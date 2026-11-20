'use client';

// 曜日 × 時間帯のヒートマップ（kpi_heatmap用）。既存のチャート部品に同じ形のものがないため新規作成。
interface HeatmapCell {
  weekday: number; // 1=月 〜 7=日
  hour: number; // 0〜23
  value: number;
}

interface HeatmapGridProps {
  data: HeatmapCell[];
  color?: string; // rgb()形式、カンマ区切り。例: '56, 189, 248'
}

const WEEKDAY_LABELS = ['月', '火', '水', '木', '金', '土', '日'];

export function HeatmapGrid({ data, color = '56, 189, 248' }: HeatmapGridProps) {
  const valueMap = new Map<string, number>();
  let max = 0;
  data.forEach((cell) => {
    valueMap.set(`${cell.weekday}-${cell.hour}`, cell.value);
    if (cell.value > max) max = cell.value;
  });

  return (
    <div className="overflow-x-auto custom-scrollbar">
      <div className="min-w-[640px]">
        <div className="flex">
          <div className="w-10 shrink-0" />
          <div className="flex-1 grid grid-cols-[repeat(24,minmax(0,1fr))] gap-[2px]">
            {Array.from({ length: 24 }).map((_, hour) => (
              <div
                key={hour}
                className="text-center text-[10px] text-muted-foreground"
              >
                {hour % 3 === 0 ? hour : ''}
              </div>
            ))}
          </div>
        </div>
        {WEEKDAY_LABELS.map((label, i) => {
          const weekday = i + 1;
          return (
            <div key={weekday} className="flex items-center mt-[2px]">
              <div className="w-10 shrink-0 text-xs text-muted-foreground">
                {label}
              </div>
              <div className="flex-1 grid grid-cols-[repeat(24,minmax(0,1fr))] gap-[2px]">
                {Array.from({ length: 24 }).map((_, hour) => {
                  const value = valueMap.get(`${weekday}-${hour}`) ?? 0;
                  const intensity = max > 0 ? value / max : 0;
                  return (
                    <div
                      key={hour}
                      title={`${label}曜 ${hour}時台: ${value.toLocaleString()}件`}
                      className="aspect-square rounded-sm"
                      style={{
                        backgroundColor:
                          value > 0
                            ? `rgba(${color}, ${0.12 + intensity * 0.78})`
                            : 'rgba(255,255,255,0.04)',
                      }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
