'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface DonutChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  showCenter?: boolean;
  centerLabel?: string;
}

export function DonutChart({ data, showCenter = true, centerLabel }: DonutChartProps) {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="40%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={2}
          dataKey="value"
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '12px',
          }}
          formatter={(value: number, name: string) => [
            `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`,
            name,
          ]}
        />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          formatter={(value) => (
            <span style={{ color: 'rgb(203, 213, 225)', fontSize: '12px' }}>{value}</span>
          )}
          wrapperStyle={{ paddingLeft: '20px' }}
        />
        {showCenter && (
          <text
            x="40%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fill: 'white', fontSize: '14px' }}
          >
            <tspan x="40%" dy="-0.5em" style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {total.toLocaleString()}
            </tspan>
            <tspan x="40%" dy="1.4em" style={{ fontSize: '11px', fill: 'rgb(148, 163, 184)' }}>
              {centerLabel || '合計'}
            </tspan>
          </text>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
}
