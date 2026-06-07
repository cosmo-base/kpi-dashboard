import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  icon?: LucideIcon; // ★ これを追加！
}

export function SectionCard({ title, description, children, className, icon: Icon }: SectionCardProps) {
  return (
    <div className={cn('glass-card rounded-2xl p-6 flex flex-col', className)}>
      <div className="mb-5">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-5 w-5 text-primary" />}
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}
