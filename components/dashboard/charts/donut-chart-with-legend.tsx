'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DonutChartData {
  name: string;
  value: number;
  color: string;
}

interface DonutChartWithLegendProps {
  data: DonutChartData[];
  centerLabel?: string;
  mergeThreshold?: number; // percentage below which items are merged into "その他"
}

export function DonutChartWithLegend({ 
  data, 
  centerLabel = 'Total',
  mergeThreshold = 3 
}: DonutChartWithLegendProps) {
  // Calculate total
  const total = data.reduce((acc, item) => acc + item.value, 0);
  
  // Process data - merge items below threshold into "その他"
  const processedData: DonutChartData[] = [];
  let otherValue = 0;
  
  data.forEach(item => {
    const percentage = (item.value / total) * 100;
    if (percentage < mergeThreshold) {
      otherValue += item.value;
    } else {
      processedData.push(item);
    }
  });
  
  if (otherValue > 0) {
    processedData.push({
      name: 'その他',
      value: otherValue,
      color: '#6B7280'
    });
  }
  
  // Sort by value descending for ranking
  const sortedData = [...processedData].sort((a, b) => b.value - a.value);

  // Custom label component for center
  const renderCustomLabel = ({ viewBox }: { viewBox?: { cx: number; cy: number } }) => {
    if (!viewBox) return null;
    const { cx, cy } = viewBox;
    
    return (
      <g>
        <text
          x={cx}
          y={cy - 10}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-foreground"
          style={{ fontSize: '28px', fontWeight: 'bold' }}
        >
          {total.toLocaleString()}
        </text>
        <text
          x={cx}
          y={cy + 16}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-muted-foreground"
          style={{ fontSize: '13px', fontWeight: '500' }}
        >
          {centerLabel}
        </text>
      </g>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 h-full">
      {/* Donut Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full lg:w-1/2 h-[250px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sortedData}
              cx="50%"
              cy="50%"
              innerRadius="55%"
              outerRadius="85%"
              paddingAngle={2}
              dataKey="value"
              labelLine={false}
            >
              {sortedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {/* Invisible pie just for center label rendering */}
            <Pie
              data={[{ value: 1 }]}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={0}
              dataKey="value"
              label={renderCustomLabel}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '12px 16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
              }}
              formatter={(value: number, name: string) => [
                `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`,
                name,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Ranking Legend */}
      <div className="w-full lg:w-1/2 space-y-2 max-h-[250px] overflow-y-auto scrollbar-hide">
        {sortedData.map((item, index) => {
          const percentage = ((item.value / total) * 100).toFixed(1);
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={cn(
                "flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200",
                "hover:bg-secondary/50 cursor-pointer"
              )}
            >
              {/* Rank Badge */}
              <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
                index === 0 ? "bg-yellow-500/20 text-yellow-500" :
                index === 1 ? "bg-slate-400/20 text-slate-400" :
                index === 2 ? "bg-amber-600/20 text-amber-600" :
                "bg-muted text-muted-foreground"
              )}>
                {index + 1}
              </div>
              
              {/* Color Indicator */}
              <div 
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              
              {/* Name and Stats */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-foreground truncate">{item.name}</span>
                  <span className="text-sm font-bold text-foreground">{item.value.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between gap-2 mt-0.5">
                  <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${percentage}%`,
                        backgroundColor: item.color 
                      }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-12 text-right">{percentage}%</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
