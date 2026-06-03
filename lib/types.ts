// Type definitions for Cosmo Base KPI Dashboard

import { LucideIcon } from 'lucide-react';

// Common Types
export type TrendType = 'up' | 'down' | 'neutral';

export interface KpiData {
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  trendValue?: string;
  trendType?: TrendType;
  icon?: LucideIcon; // コンポーネント側でアイコンを渡せるように追加
  accentColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'accent'; // 色指定用に追加
}

// API Response Types
export interface ApiResponse<T> {
  updatedAt: string;
  summary: T;
  charts: Record<string, ChartData[]>;
  tables: Record<string, TableRow[]>;
}

export interface ChartData {
  name: string;
  [key: string]: string | number;
}

export interface TableRow {
  [key: string]: string | number;
}

// Community Page Types
export interface CommunitySummary {
  totalMembers: number;
  monthlyIncrease: number;
  monthlyIncreaseRate: number;
  weeklyIncrease: number;
  weeklyIncreaseRate: number;
  todayIncrease: number;
}

// Partner Page Types
export interface PartnerSummary {
  totalPartners: number;
  pendingAnnouncement: number;
  pendingContract: number;
  monthlyAnnounced: number;
  monthlyAnnouncedRate: number;
}

// Space Quiz Types
export interface SpaceQuizSummary {
  totalParticipants: number;
  monthlyParticipants: number;
  monthlyParticipantsRate: number;
  todayParticipants: number;
  averageAccuracy: number;
  completionRate: number;
}

// CBED Types
export interface CBEDSummary {
  totalListings: number;
  upcomingListings: number;
  offlineListings: number;
  onlineListings: number;
  monthlyIncrease: number;
}

// CBMD Types
export interface CBMDSummary {
  totalListings: number;
  monthlyChange: number;
}

// CBL Types
export interface CBLSummary {
  totalListings: number;
  monthlyChange: number;
  adminListings: number;
  adminIncreaseRate: number;
  partnerListings: number;
  partnerIncreaseRate: number;
  averageIntervalDays: number;
}

// Space Diagnosis Types
export interface SpaceDiagnosisSummary {
  totalParticipants: number;
  monthlyIncrease: number;
  monthlyIncreaseRate: number;
  simpleVersionParticipants: number;
  simpleVersionRate: number;
  fullVersionParticipants: number;
  fullVersionRate: number;
}

// SNS Types (新規追加)
export interface SNSMetrics {
  followers: number;
  todayIncrease: number;
  weeklyIncrease: number;
  weeklyRate: number;
  monthlyIncrease: number;
  monthlyRate: number;
}

export interface SNSSummary {
  x: SNSMetrics;
  instagram: SNSMetrics;
  note: SNSMetrics;
}

// Tab Definition
export interface TabItem {
  id: string;
  label: string;
}

// Ranking Item
export interface RankingItem {
  rank: number;
  name: string;
  count: number;
  percentage: number;
}

// Table Column Definition
export interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
}

// Dashboard State
export interface DashboardState {
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
}