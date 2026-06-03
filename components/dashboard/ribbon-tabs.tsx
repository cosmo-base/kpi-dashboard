'use client';

import { cn } from '@/lib/utils';
import type { TabItem } from '@/lib/types';

interface RibbonTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export function RibbonTabs({ tabs, activeTab, onChange }: RibbonTabsProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 p-1 min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              'px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap',
              activeTab === tab.id
                ? 'tab-active text-white shadow-lg shadow-primary/20'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
