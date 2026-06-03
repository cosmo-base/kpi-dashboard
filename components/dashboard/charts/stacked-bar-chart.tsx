'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { ChartData } from '@/lib/types';

interface StackedBarChartProps {
  data: ChartData[];
  bars: {
    dataKey: string;
    name: string;
    color: string;
  }[];
  xAxisKey?: string;
}

export function StackedBarChart({ data, bars, xAxisKey = 'name' }: StackedBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
        <XAxis
          dataKey={xAxisKey}
          tick={{ fill: 'rgb(148, 163, 184)', fontSize: 11 }}
          tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
        />
        <YAxis
          tick={{ fill: 'rgb(148, 163, 184)', fontSize: 11 }}
          tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          tickFormatter={(value) => value.toLocaleString()}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '12px',
          }}
          labelStyle={{ color: 'white', fontWeight: 'bold', marginBottom: '8px' }}
          itemStyle={{ color: 'rgb(203, 213, 225)' }}
          formatter={(value: number) => [value.toLocaleString(), '']}
        />
        <Legend
          wrapperStyle={{ paddingTop: '20px' }}
          formatter={(value) => (
            <span style={{ color: 'rgb(203, 213, 225)', fontSize: '12px' }}>{value}</span>
          )}
        />
        {bars.map((bar) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey}
            name={bar.name}
            fill={bar.color}
            stackId="stack"
            radius={[4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
