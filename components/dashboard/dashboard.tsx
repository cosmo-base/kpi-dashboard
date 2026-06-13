'use client';

import { useState, useCallback } from 'react';
import { DashboardHeader } from './dashboard-header';
import { RibbonTabs } from './ribbon-tabs';
import { CommunityPage } from './pages/community-page';
import { PartnerPage } from './pages/partner-page';
import { SpaceQuizPage } from './pages/space-quiz-page';
import { CBEDPage } from './pages/cbed-page';
import { CBMDPage } from './pages/cbmd-page';
import { CBLPage } from './pages/cbl-page';
import { SpaceDiagnosisPage } from './pages/space-type-page';
import { LinksPage } from './pages/links-page';
import { SNSPage } from './pages/sns-page';
import { CBHPPage } from './pages/cbhp-page';
import { LoadingSkeleton } from './chart-container';
import { dashboardTabs } from '@/lib/mock-data';
import { ShittokuPage } from './pages/shittoku-page';

// ★ グループと表示名の定義
const tabGroups = [
  {
    name: '全体',
    tabs: [
      { id: 'community', label: 'Discord' },
      { id: 'sns', label: 'SNS' },
      { id: 'cbhp', label: 'CBHP' },
      { id: 'partners', label: 'パートナー' },
    ],
  },
  {
    name: 'コンテンツ',
    tabs: [
      { id: 'space-quiz', label: '宇宙クイズ' },
      { id: 'cbed', label: 'CBED' },
      { id: 'cbmd', label: 'CBMD' },
      { id: 'cbl', label: 'CBL' },
      { id: 'space-diagnosis', label: '宇宙タイプ診断' },
      { id: 'shittoku', label: '宇宙知っトク' },
    ],
  },
  {
    name: 'リンク',
    tabs: [
      { id: 'links', label: 'リンク' },
    ],
  },
];

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('community');
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string | null>(
    new Date().toISOString()
  );

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
    // Scroll to top when tab changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLastUpdated(new Date().toISOString());
    setIsLoading(false);
  }, []);

  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <LoadingSkeleton key={i} type="kpi" />
            ))}
          </div>
          <div className="glass-card rounded-2xl p-6">
            <LoadingSkeleton type="chart" />
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'community':
        return <CommunityPage />;
      case 'sns':
        return <SNSPage />;
      case 'cbhp':
        return <CBHPPage />;
      case 'partners':
        return <PartnerPage />;
      case 'space-quiz':
        return <SpaceQuizPage />;
      case 'cbed':
        return <CBEDPage />;
      case 'cbmd':
        return <CBMDPage />;
      case 'cbl':
        return <CBLPage />;
      case 'space-diagnosis':
        return <SpaceDiagnosisPage />;
      case 'shittoku':
        return <ShittokuPage />;
      case 'links':
        return <LinksPage />;
      default:
        return <CommunityPage />;
    }
  };

  return (
    <div className="min-h-screen cosmic-bg cosmic-stars">
      <DashboardHeader
        lastUpdated={lastUpdated}
        isLoading={isLoading}
        onRefresh={handleRefresh}
      />

      {/* Tab Navigation (★ 複数段に分けて表示するよう改修) */}
      <div className="sticky top-16 z-40 backdrop-blur-md bg-background/60 border-b border-border/30">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-8 py-2 sm:py-3 space-y-1.5 sm:space-y-2">
          {tabGroups.map((group) => (
            <div key={group.name} className="flex items-center gap-1 sm:gap-3">
              {/* 左側の見出しラベル */}
              <span className="text-[10px] sm:text-xs font-bold text-muted-foreground w-12 sm:w-16 shrink-0">
                {group.name}
              </span>
              {/* 各行のタブ群 */}
              <div className="flex-1 min-w-0">
                <RibbonTabs
                  tabs={group.tabs.map((tab) => {
                    // 既存のアイコンデータを引き継ぎつつ、ラベルだけを上書き
                    const existing = dashboardTabs.find((t) => t.id === tab.id);
                    return existing ? { ...existing, label: tab.label } : (tab as any);
                  })}
                  activeTab={activeTab}
                  onChange={handleTabChange}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-6 mt-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Cosmo Base. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}