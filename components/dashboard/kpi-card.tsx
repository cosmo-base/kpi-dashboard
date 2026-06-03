'use client';

import { ReactNode } from 'react';
import { TrendingUp, TrendingDown, Minus, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { TrendType } from '@/lib/types';

interface KpiCardProps {
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  trendValue?: string;
  trendType?: TrendType;
  icon?: LucideIcon;
  accentColor?: 'primary' | 'accent' | 'success' | 'warning' | 'danger';
}

const accentColors = {
  primary: 'text-primary',
  accent: 'text-accent',
  success: 'text-success',
  warning: 'text-warning',
  danger: 'text-destructive',
};

const trendColors = {
  up: 'text-success',
  down: 'text-destructive',
  neutral: 'text-muted-foreground',
};

export function KpiCard({
  title,
  value,
  unit,
  description,
  trendValue,
  trendType = 'neutral',
  icon: Icon,
  accentColor = 'primary',
}: KpiCardProps) {
  const TrendIcon = trendType === 'up' ? TrendingUp : trendType === 'down' ? TrendingDown : Minus;

  return (
    <div className="glass-card rounded-2xl p-5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {Icon && (
            <div className={cn('p-2 rounded-xl bg-secondary/50', accentColors[accentColor])}>
              <Icon className="h-4 w-4" />
            </div>
          )}
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
        </div>
        {trendValue && (
          <div className={cn('flex items-center gap-1 text-sm font-medium', trendColors[trendType])}>
            <TrendIcon className="h-3.5 w-3.5" />
            <span>{trendValue}</span>
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold tracking-tight text-foreground">{value}</span>
        {unit && <span className="text-lg text-muted-foreground">{unit}</span>}
      </div>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
