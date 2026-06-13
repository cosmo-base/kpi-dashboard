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

// ★ 1段目と2段目の階層データを定義
const tabGroups = [
  {
    id: 'general',
    name: '全体',
    tabs: [
      { id: 'community', label: 'Discord' },
      { id: 'sns', label: 'SNS' },
      { id: 'cbhp', label: 'CBHP' },
      { id: 'partners', label: 'パートナー' },
    ],
  },
  {
    id: 'content',
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
    id: 'links',
    name: 'リンク',
    tabs: [
      { id: 'links', label: 'リンク' },
    ],
  },
];

export function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('general'); // 1段目のステート
  const [activeTab, setActiveTab] = useState('community');         // 2段目のステート
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string | null>(
    new Date().toISOString()
  );

  // 1段目（親カテゴリ）を変更した時の処理
  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId);
    const group = tabGroups.find((g) => g.id === categoryId);
    if (group && group.tabs.length > 0) {
      // 1段目を切り替えたら、自動的にそのカテゴリの先頭のタブを選択する
      setActiveTab(group.tabs[0].id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // 2段目（子タブ）を変更した時の処理
  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsLoading(true);
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

      {/* Tab Navigation (階層型) */}
      {/* 1段目: 大カテゴリ (スクロールで上に隠れる) */}
      <div className="pt-4 pb-2 border-b border-border/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-1">
            {tabGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => handleCategoryChange(group.id)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${activeCategory === group.id
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'bg-secondary/40 text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                  }`}
              >
                {group.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2段目: 選択されたカテゴリのサブタブ (スクロール時に上部で固定される) */}
      <div className="sticky top-16 z-40 backdrop-blur-md bg-background/80 border-b border-border/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex-1 min-w-0">
            {tabGroups
              .filter((g) => g.id === activeCategory)
              .map((group) => (
                <RibbonTabs
                  key={group.id}
                  tabs={group.tabs.map((tab) => {
                    const existing = dashboardTabs.find((t) => t.id === tab.id);
                    return existing ? { ...existing, label: tab.label } : (tab as any);
                  })}
                  activeTab={activeTab}
                  onChange={handleTabChange}
                />
              ))}
          </div>
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>

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