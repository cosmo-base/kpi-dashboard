'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { ChartData } from '@/lib/types';

interface LineChartComponentProps {
  data: ChartData[];
  lines: {
    dataKey: string;
    name: string;
    color: string;
  }[];
  xAxisKey?: string;
  yAxisLabel?: string;
  yAxisUnit?: string;
}

export function LinearChartComponent({
  data,
  lines,
  xAxisKey = 'name',
  yAxisLabel,
  yAxisUnit,
}: LineChartComponentProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
        <XAxis
          dataKey={xAxisKey}
          tick={{ fill: 'rgb(148, 163, 184)', fontSize: 11 }}
          tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          interval="preserveStartEnd"
        />
        <YAxis
          tick={{ fill: 'rgb(148, 163, 184)', fontSize: 11 }}
          tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          tickFormatter={(value) =>
            yAxisUnit === '%' ? `${value}%` : value.toLocaleString()
          }
          label={
            yAxisLabel
              ? {
                  value: yAxisLabel,
                  angle: -90,
                  position: 'insideLeft',
                  fill: 'rgb(148, 163, 184)',
                  fontSize: 12,
                }
              : undefined
          }
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
          formatter={(value: number, name: string) => [
            yAxisUnit === '%' ? `${value}%` : value.toLocaleString(),
            name,
          ]}
        />
        <Legend
          wrapperStyle={{ paddingTop: '20px' }}
          formatter={(value) => (
            <span style={{ color: 'rgb(203, 213, 225)', fontSize: '12px' }}>{value}</span>
          )}
        />
        {lines.map((line) => (
          <Line
            key={line.dataKey}
            type="linear"
            dataKey={line.dataKey}
            name={line.name}
            stroke={line.color}
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: line.color, stroke: 'white', strokeWidth: 2 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
