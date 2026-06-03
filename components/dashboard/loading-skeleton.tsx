'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg bg-muted/50',
        className
      )}
    />
  );
}

export function KpiSkeleton() {
  return (
    <div className="glass-card rounded-2xl p-6 h-[140px] flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <Skeleton className="w-10 h-10 rounded-xl" />
        <Skeleton className="w-16 h-6 rounded-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="w-24 h-8" />
        <Skeleton className="w-32 h-4" />
      </div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="glass-card rounded-2xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="w-32 h-5" />
          <Skeleton className="w-48 h-4" />
        </div>
        <Skeleton className="w-20 h-6 rounded-full" />
      </div>
      <Skeleton className="w-full h-[280px]" />
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="glass-card rounded-2xl p-6 space-y-4">
      <Skeleton className="w-40 h-5" />
      <div className="space-y-3">
        <Skeleton className="w-full h-10" />
        {Array.from({ length: rows }).map((_, i) => (
          <Skeleton key={i} className="w-full h-12" />
        ))}
      </div>
    </div>
  );
}

export function RankingSkeleton({ items = 5 }: { items?: number }) {
  return (
    <div className="glass-card rounded-2xl p-6 space-y-4">
      <Skeleton className="w-48 h-5" />
      <div className="space-y-3">
        {Array.from({ length: items }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="w-24 h-4" />
              <Skeleton className="w-full h-2 rounded-full" />
            </div>
            <Skeleton className="w-12 h-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <KpiSkeleton key={i} />
        ))}
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartSkeleton />
        <ChartSkeleton />
      </div>
      
      {/* Table */}
      <TableSkeleton rows={5} />
    </div>
  );
}
