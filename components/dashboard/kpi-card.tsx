import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

// ★ "info" を追加！
export type AccentColor = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info';

export interface KpiCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  trendValue?: string;
  trendType?: 'up' | 'down' | 'neutral';
  accentColor?: AccentColor;
  description?: string | ReactNode;
}

const colorStyles: Record<AccentColor, { bg: string; text: string; iconBg: string }> = {
  primary: { bg: 'border-primary/20', text: 'text-primary', iconBg: 'bg-primary/10' },
  accent: { bg: 'border-accent/20', text: 'text-accent', iconBg: 'bg-accent/10' },
  success: { bg: 'border-success/20', text: 'text-success', iconBg: 'bg-success/10' },
  warning: { bg: 'border-warning/20', text: 'text-warning', iconBg: 'bg-warning/10' },
  danger: { bg: 'border-danger/20', text: 'text-danger', iconBg: 'bg-danger/10' },
  info: { bg: 'border-info/20', text: 'text-info', iconBg: 'bg-info/10' }, // ★追加！
};

export function KpiCard({
  title,
  value,
  unit,
  icon: Icon,
  trendValue,
  trendType,
  accentColor = 'primary',
  description
}: KpiCardProps) {
  const styles = colorStyles[accentColor];

  return (
    <div className={cn('glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group', styles.bg)}>
      <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110 transform">
        <Icon className={cn('w-24 h-24 -mr-8 -mt-8', styles.text, 'opacity-20')} />
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className={cn('p-2 rounded-xl', styles.iconBg)}>
            <Icon className={cn('w-4 h-4', styles.text)} />
          </div>
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        </div>
        
        <div className="flex items-baseline gap-1 mt-3 relative z-10">
          <span className="text-3xl font-bold tracking-tight text-foreground">{value}</span>
          {unit && <span className="text-sm text-muted-foreground ml-1">{unit}</span>}
        </div>
      </div>

      {(trendValue || description) && (
        <div className="mt-4 flex items-center gap-2 relative z-10">
          {trendValue && (
            <span className={cn(
              'text-xs font-medium px-2 py-1 rounded-full',
              trendType === 'up' ? 'bg-success/20 text-success' : 
              trendType === 'down' ? 'bg-danger/20 text-danger' : 
              'bg-secondary/50 text-muted-foreground'
            )}>
              {trendValue}
            </span>
          )}
          {description && (
            <span className="text-xs text-muted-foreground">{description}</span>
          )}
        </div>
      )}
    </div>
  );
}
