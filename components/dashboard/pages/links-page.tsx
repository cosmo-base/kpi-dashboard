'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Link as LinkIcon,ChartSpline,Building,ExternalLink,Copy,Check,Users,Handshake,Settings,Home,Database,Calendar,BookOpen,FileText,UserPlus,FolderOpen,BarChart3,HelpCircle,Image,Wrench,X,Focus,Notebook,SquarePlay,FolderGit,Sparkles,
  type LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LinkItem {
  id: string;
  title: string;
  url: string;
  description: string;
  icon: LucideIcon;
}

interface LinkCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  links: LinkItem[];
}

const initialLinkCategories: LinkCategory[] = [
  {
    id: 'general',
    label: '一般ページ',
    icon: Users,
    links: [
      {
        id: 'general-1',
        title: 'ホーム',
        url: 'https://fsifofficial.github.io/CosmoBase/',
        description: 'CBホームページ',
        icon: Home,
      },
      {
        id: 'general-2',
        title: 'X',
        url: 'https://x.com/CosmoBase',
        description: 'CB X',
        icon: X,
      },
      {
        id: 'general-3',
        title: 'Instagram',
        url: 'https://www.instagram.com/cosmobase.official',
        description: 'CB Instagram',
        icon: Focus,
      },
      {
        id: 'general-4',
        title: 'note',
        url: 'https://note.com/cosmobase',
        description: 'CB note',
        icon: Notebook,
      },
      {
        id: 'general-5',
        title: 'YouTube',
        url: 'https://www.youtube.com/channel/UC3bcWCM6ccvsyQyiXLIwhkQ',
        description: 'CB YouTube',
        icon: SquarePlay,
      },
      {
        id: 'general-6',
        title: 'Peatix',
        url: 'https://peatix.com/user/29355410/dashboard',
        description: '',
        icon: Users,
      },
      {
        id: 'general-7',
        title: 'FSIF HP',
        url: 'https://fsifofficial.wixsite.com/future-space-industr',
        description: '',
        icon: Home,
      },
    ],
  },
  {
    id: 'member',
    label: '参加者ページ',
    icon: Users,
    links: [
      {
        id: 'member-1',
        title: '参加者ホーム',
        url: 'https://cosmo-base.github.io/member_only/',
        description: '参加者向けトップページ',
        icon: Home,
      },
      {
        id: 'member-2',
        title: 'CBL',
        url: 'https://cosmo-base.github.io/library/index.html',
        description: 'Cosmo Base Library',
        icon: BookOpen,
      },
      {
        id: 'member-3',
        title: 'CBED',
        url: 'https://cosmo-base.github.io/member_only/CBED/',
        description: 'Cosmo Base Event Database',
        icon: Calendar,
      },
      {
        id: 'member-4',
        title: 'CBMD',
        url: 'https://cosmo-base.github.io/member_only/CBMD/',
        description: 'Cosmo Base Museum Database',
        icon: Database,
      },
    ],
  },
  {
    id: 'partner',
    label: 'パートナーページ',
    icon: Handshake,
    links: [
      {
        id: 'partner-1',
        title: 'パートナーページ',
        url: 'https://cosmo-base.github.io/member_only/partner/',
        description: 'パートナー専用ページ',
        icon: Handshake,
      },
      {
        id: 'partner-2',
        title: 'パートナー申請',
        url: 'https://cosmo-base.github.io/member_only/partner/join/',
        description: 'パートナー申請フォーム',
        icon: UserPlus,
      },
    ],
  },
  {
    id: 'admin',
    label: '運営ページ',
    icon: Settings,
    links: [
      {
        id: 'admin-1',
        title: 'コミュニティードライブ',
        url: 'https://drive.google.com/drive/u/0/folders/1odqLTxdIc9T91aneRIdraf1YY44aeqcC',
        description: '運営共有ドライブ',
        icon: FolderOpen,
      },
      {
        id: 'admin-2',
        title: '招待リンク一覧',
        url: 'https://docs.google.com/document/d/1hhsrqBj57j58JzkmIlQOgizK3zfGzm5_xUGK_kB-Rbk/edit?tab=t.0',
        description: 'コミュニティ招待リンクの管理',
        icon: LinkIcon,
      },
      {
        id: 'admin-3',
        title: 'パートナー申請データ',
        url: 'https://docs.google.com/spreadsheets/d/1PtyAO6VeBwgZcFsiiUhQseg6ugZJmMI_Di6N5StMQiA/edit?gid=0#gid=0',
        description: 'パートナー申請の管理シート',
        icon: Handshake,
      },
      {
        id: 'admin-4',
        title: 'SNS投稿テンプレート',
        url: 'https://docs.google.com/spreadsheets/d/15F49NGpyEEjdRAEKAHAeBpkH4HWsiZXpEyMAiLCniPo/edit?gid=0#gid=0',
        description: 'SNS投稿用のテンプレート集',
        icon: FileText,
      },
      {
        id: 'admin-5',
        title: 'Union',
        url: 'https://campus-union-connect.base44.app/Home',
        description: '',
        icon: Building ,
      },
      {
        id: 'admin-6',
        title: 'パートナー営業',
        url: 'https://docs.google.com/spreadsheets/d/1Nbq6rD_PfF1-KdIXqlq4wCVPA6SWITvDroO5eKe42Q4/edit',
        description: '',
        icon: Handshake,
      },
      {
        id: 'admin-7',
        title: 'パートナー公開チェックリスト',
        url: 'https://docs.google.com/spreadsheets/d/1SoZ2O92aYnMXRBuFU7-vV7gX4vItVbxnIoKhGVxpo4s/edit',
        description: '',
        icon: Handshake,
      },
      {
        id: 'admin-8',
        title: 'Instagramビジネス投稿(Cosmo Base)',
        url: 'https://business.facebook.com/latest/home?asset_id=922321694307649&business_id=2338074866656029',
        description: '',
        icon: Focus,
      },
      {
        id: 'admin-9',
        title: 'Instagramビジネス投稿(FSIF)',
        url: 'https://business.facebook.com/latest/home?asset_id=416684408195963&business_id=1693962128107258',
        description: '',
        icon: Focus,
      },
      {
        id: 'admin-10',
        title: 'パートナー営業資料',
        url: 'https://drive.google.com/drive/u/0/folders/1g-u-D4AWqQQeO7SheKx7m0bgiaGvQ326',
        description: '',
        icon: Handshake,
      },
      {
        id: 'admin-11',
        title: '初期のブランディング',
        url: 'https://docs.google.com/spreadsheets/d/1BRjUW9K0S7OVqKs4oN4zEPPFnGQnF89KoqDq0a1CY-k/edit',
        description: '',
        icon: Building,
      },
    ],
  },
  {
    id: 'admin2',
    label: '運営ページ(開発)',
    icon: Settings,
    links: [
      {
        id: 'admin2-1',
        title: 'FSIF Github',
        url: 'https://github.com/FSIFofficial',
        description: 'CBHP,AIBot',
        icon: FolderGit ,
      },
      {
        id: 'admin2-2',
        title: 'CB Github',
        url: 'https://github.com/cosmo-base/',
        description: '参加者、CBL、KPI,CBBot',
        icon: FolderGit ,
      },
      {
        id: 'admin2-3',
        title: 'FSIF HP 編集',
        url: 'https://manage.wix.com/dashboard/5676783d-ee0f-4707-a11d-e960efead3e1/setup?referralInfo=my-sites',
        description: '',
        icon: FolderGit,
      },
      {
        id: 'admin2-4',
        title: 'CBHP analytics',
        url: 'https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/a385612556p525984972/reports/intelligenthome?params=_u..nav%3Dmaui',
        description: 'GA4解析ツール',
        icon: ChartSpline ,
      }
    ],
  },
  {
    id: 'manage',
    label: 'ダッシュボード原本',
    icon: Wrench,
    links: [      
      {
        id: 'manage-1',
        title: 'KPI',
        url: 'https://docs.google.com/spreadsheets/d/1DVcnAj75n_Hokt74Q-SX_FI_J5PSbJiOzhvwJfHggFM/edit?gid=0#gid=0',
        description: 'KPIデータの原本（Discord,SNS）',
        icon: BarChart3,
      },
      {
        id: 'manage-2',
        title: 'クイズ総回答数',
        url: 'https://docs.google.com/spreadsheets/d/113XXwG9heW_Vv173SH_pp9w8cwRgWzC341jbXeaJ22w/edit',
        description: '宇宙クイズの回答データ',
        icon: HelpCircle,
      },
      {
        id: 'manage-3',
        title: 'CBL',
        url: 'https://docs.google.com/spreadsheets/d/1QtgJJiX1dBq_jXtbEgD88v9ZgSCcZSr2cObcnglKsNQ/edit',
        description: 'CBLの原本スプレッドシート',
        icon: FileText,
      },
      {
        id: 'manage-4',
        title: 'CBED原本',
        url: 'https://docs.google.com/spreadsheets/d/1jl7DqMAcPN92p7RbMeLRE7RPuvea3j-lsAMSs8M1Xj4/edit',
        description: 'イベントデータベースの原本スプレッドシート',
        icon: FileText,
      },
      {
        id: 'manage-5',
        title: 'CBMD原本',
        url: 'https://docs.google.com/spreadsheets/d/1gdD3uqzvQWZMmn0UK6LZm_TIWS53Ar8tR80E8cz-ybY/edit',
        description: 'CBMDの原本',
        icon: Database,
      },
      {
        id: 'manage-6',
        title: 'パートナー一覧',
        url: 'https://docs.google.com/spreadsheets/d/1FL6G_-IpL4Yck1tds7hqFL1pqJ85RDt1oyVE545WOZQ/edit',
        description: 'CBHPパートナーデータ',
        icon: Handshake,
      },
      {
        id: 'manage-7',
        title: 'パートナー分析',
        url: 'https://docs.google.com/spreadsheets/d/1Nbq6rD_PfF1-KdIXqlq4wCVPA6SWITvDroO5eKe42Q4/edit',
        description: 'パートナーデータ',
        icon: Handshake,
      },
      {
        id: 'manage-8',
        title: '宇宙タイプ診断簡易版データ(CBHP)',
        url: 'https://docs.google.com/spreadsheets/d/1LcbLG6GYqNZXlx38ZXqgLZ0OlLBLavd8VSJZEayfXYs/edit',
        description: '宇宙タイプ診断簡易版診断データ',
        icon: Sparkles ,
      },
      {
        id: 'manage-9',
        title: '宇宙タイプ診断簡易版データ(参加者)',
        url: 'https://docs.google.com/spreadsheets/d/1LiOtm3NW4NGMQuchAjnSj_26rK3K9AaxSo4Autphi8Y/edit',
        description: '宇宙タイプ診断簡易版診断データ',
        icon: Sparkles ,
      },
      {
        id: 'manage-10',
        title: '宇宙タイプ
