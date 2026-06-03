'use client';

import { cn } from '@/lib/utils';
import type { TableColumn } from '@/lib/types';

interface ScrollableTableProps {
  columns: TableColumn[];
  data: Record<string, string | number>[];
  maxVisibleRows?: number;
  className?: string;
}

export function ScrollableTable({
  columns,
  data,
  maxVisibleRows = 6,
  className,
}: ScrollableTableProps) {
  const rowHeight = 48;
  const headerHeight = 44;
  const maxHeight = headerHeight + rowHeight * maxVisibleRows;

  return (
    <div className={cn('overflow-hidden rounded-xl border border-border/50', className)}>
      <div style={{ maxHeight: `${maxHeight}px` }} className="overflow-auto">
        <table className="w-full">
          <thead className="sticky top-0 z-10">
            <tr className="bg-secondary/80 backdrop-blur-sm">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    'px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider',
                    column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : 'text-left'
                  )}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {data.map((row, index) => (
              <tr
                key={index}
                className="transition-colors hover:bg-secondary/30"
                style={{ height: `${rowHeight}px` }}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={cn(
                      'px-4 py-3 text-sm',
                      column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : 'text-left',
                      column.key === 'rate' || column.key === 'accuracy'
                        ? String(row[column.key]).startsWith('-')
                          ? 'text-destructive'
                          : 'text-success'
                        : 'text-foreground'
                    )}
                  >
                    {typeof row[column.key] === 'number'
                      ? row[column.key].toLocaleString()
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
