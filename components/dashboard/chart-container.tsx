'use client';

import { ReactNode } from 'react';
import { AlertCircle, RefreshCcw, FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChartContainerProps {
  isLoading?: boolean;
  isEmpty?: boolean;
  error?: string | null;
  onRetry?: () => void;
  children: ReactNode;
  className?: string;
  height?: string;
}

export function ChartContainer({
  isLoading,
  isEmpty,
  error,
  onRetry,
  children,
  className,
  height = 'h-[300px]',
}: ChartContainerProps) {
  if (isLoading) {
    return (
      <div className={cn('flex items-center justify-center', height, className)}>
        <LoadingSkeleton type="chart" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn('flex flex-col items-center justify-center gap-4', height, className)}>
        <AlertCircle className="h-12 w-12 text-destructive/60" />
        <p className="text-sm text-muted-foreground">データの読み込みに失敗しました</p>
        {onRetry && (
          <Button variant="outline" size="sm" onClick={onRetry} className="gap-2">
            <RefreshCcw className="h-4 w-4" />
            再読み込み
          </Button>
        )}
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className={cn('flex flex-col items-center justify-center gap-3', height, className)}>
        <FileQuestion className="h-12 w-12 text-muted-foreground/40" />
        <p className="text-sm text-muted-foreground">表示できるデータがありません</p>
      </div>
    );
  }

  return <div className={cn(height, className)}>{children}</div>;
}

// Empty State Component
export function EmptyState({ message = '表示できるデータがありません' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-3">
      <FileQuestion className="h-16 w-16 text-muted-foreground/30" />
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}

// Loading Skeleton Components
interface LoadingSkeletonProps {
  type: 'kpi' | 'chart' | 'table';
}

export function LoadingSkeleton({ type }: LoadingSkeletonProps) {
  if (type === 'kpi') {
    return (
      <div className="glass-card rounded-2xl p-5 animate-pulse">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-secondary rounded-xl" />
          <div className="w-24 h-4 bg-secondary rounded" />
        </div>
        <div className="w-32 h-8 bg-secondary rounded mb-2" />
        <div className="w-20 h-3 bg-secondary rounded" />
      </div>
    );
  }

  if (type === 'chart') {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-secondary rounded-full" />
            <div className="absolute inset-0 border-4 border-primary/30 rounded-full border-t-primary animate-spin" />
          </div>
          <span className="text-sm text-muted-foreground">読み込み中...</span>
        </div>
      </div>
    );
  }

  // Table skeleton
  return (
    <div className="space-y-3 animate-pulse">
      <div className="flex gap-4 p-3 bg-secondary/30 rounded-lg">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-4 bg-secondary rounded flex-1" />
        ))}
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex gap-4 p-3">
          {[...Array(4)].map((_, j) => (
            <div key={j} className="h-4 bg-secondary/50 rounded flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
}
