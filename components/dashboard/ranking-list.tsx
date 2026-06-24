'use client';

import { cn } from '@/lib/utils';
import type { RankingItem } from '@/lib/types';

interface RankingListProps {
  items: RankingItem[];
  maxVisible?: number;
  className?: string;
}

export function RankingList({ items, maxVisible = 6, className }: RankingListProps) {
  const maxCount = Math.max(...items.map((item) => item.count));

  return (
    <div className={cn('space-y-2', className)}>
      <div className="max-h-[400px] overflow-y-auto space-y-2 pr-1">
        {items.map((item, index) => (
          <div
            key={item.name}
            className={cn(
              'flex items-center gap-3 p-3 rounded-xl transition-colors',
              index === 0 ? 'bg-primary/10' : 'hover:bg-secondary/50'
            )}
          >
            <div
              className={cn(
                'w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold',
                index === 0
                  ? 'bg-primary text-primary-foreground'
                  : index === 1
                  ? 'bg-accent/80 text-accent-foreground'
                  : index === 2
                  ? 'bg-warning/80 text-white'
                  : 'bg-secondary text-secondary-foreground'
              )}
            >
              {item.rank}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-foreground truncate">
                  {item.name}
                </span>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-foreground">
                    {item.count.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">
                    ({item.percentage.toFixed(1)}%)
                  </span>
                </div>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className={cn(
                    'h-full rounded-full transition-all duration-500',
                    index === 0
                      ? 'bg-gradient-to-r from-primary to-accent'
                      : 'bg-primary/60'
                  )}
                  style={{ width: `${(item.count / maxCount) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
