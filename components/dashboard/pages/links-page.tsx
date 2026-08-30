'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as LinkIcon,ClipboardClock,LayoutList,ChartSpline,Building,ExternalLink,Copy,Check,Users,Handshake,Settings,Home,Database,Calendar,BookOpen,FileText,UserPlus,FolderOpen,BarChart3,HelpCircle,Image,Wrench,X,Focus,Notebook,SquarePlay,FolderGit,Sparkles,type LucideIcon} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LinkItem {
  id: string;
  title: string;
  url: string;
  description: string;
  icon: LucideIcon;
  subCategory?: string;
}

interface LinkCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  links: LinkItem[];
}

const LINK_URLS: Record<string, string> = (() => {
  try {
    return JSON.parse(process.env.NEXT_PUBLIC_KPI_LINK_URLS ?? '{}');
  } catch {
    return {};
  }
})();

const L = (id: string) => LINK_URLS[id] ?? '';

const initialLinkCategories: LinkCategory[] = [
  {
    id: 'general',
    label: '一般',
    icon: Users,
    links: [
      {
        id: 'general-1',
        title: 'ホーム',
        url: 'https://fsifofficial.github.io/CosmoBase/',
        description: 'CBホームページ',
        icon: Home,
        subCategory: 'Webサイト'
      },
      {
        id: 'general-7',
        title: 'FSIF HP',
        url: 'https://fsifofficial.wixsite.com/future-space-industr',
        description: '',
        icon: Home,
        subCategory: 'Webサイト'
      },
      {
        id: 'general-2',
        title: 'X',
        url: 'https://x.com/CosmoBase',
        description: 'CB X',
        icon: X,
        subCategory: 'SNS'
      },
      {
        id: 'general-3',
        title: 'Instagram',
        url: 'https://www.instagram.com/cosmobase.official',
        description: 'CB Instagram',
        icon: Focus,
        subCategory: 'SNS'
      },
      {
        id: 'general-4',
        title: 'note',
        url: 'https://note.com/cosmobase',
        description: 'CB note',
        icon: Notebook,
        subCategory: 'SNS'
      },
      {
        id: 'general-5',
        title: 'YouTube',
        url: 'https://www.youtube.com/channel/UC3bcWCM6ccvsyQyiXLIwhkQ',
        description: 'CB YouTube',
        icon: SquarePlay,
        subCategory: 'SNS'
      },
      {
        id: 'general-6',
        title: 'Peatix',
        url: 'https://peatix.com/user/29355410/dashboard',
        description: '',
        icon: Users,
        subCategory: ''
      },
    ],
  },
  {
    id: 'member',
    label: '参加者',
    icon: Users,
    links: [
      {
        id: 'member-1',
        title: '参加者ホーム',
        url: 'https://cosmo-base.github.io/member_only/',
        description: '参加者向けトップページ',
        icon: Home,
        subCategory: ''
      },
      {
        id: 'member-2',
        title: 'CBL',
        url: 'https://cosmo-base.github.io/library/index.html',
        description: 'Cosmo Base Library',
        icon: BookOpen,
        subCategory: ''
      },
      {
        id: 'member-3',
        title: 'CBED',
        url: 'https://cosmo-base.github.io/event_database/',
        description: 'Cosmo Base Event Database',
        icon: Calendar,
        subCategory: ''
      },
      {
        id: 'member-4',
        title: 'CBMD',
        url: 'https://cosmo-base.github.io/member_only/CBMD/',
        description: 'Cosmo Base Museum Database',
        icon: Database,
        subCategory: ''
      },
    ],
  },
  {
    id: 'partner',
    label: 'パートナー',
    icon: Handshake,
    links: [
      {
        id: 'partner-1',
        title: 'パートナーページ',
        url: 'https://cosmo-base.github.io/member_only/partner/',
        description: 'パートナー専用ページ',
        icon: Handshake,
        subCategory: ''
      },
      {
        id: 'partner-2',
        title: 'パートナー申請',
        url: 'https://cosmo-base.github.io/member_only/partner/join/',
        description: 'パートナー申請フォーム',
        icon: UserPlus,
        subCategory: ''
      },
    ],
  },
  {
    id: 'admin',
    label: '運営',
    icon: Settings,
    links: [
      {
        id: 'admin-1',
        title: 'コミュニティードライブ',
        url: L('admin-1'),
        description: '運営共有ドライブ',
        icon: FolderOpen,
        subCategory: 'ドライブ・資料'
      },
      {
        id: 'admin-11',
        title: '初期のブランディング',
        url: L('admin-11'),
        description: '',
        icon: Building,
        subCategory: 'ドライブ・資料'
      },
      {
        id: 'admin-2',
        title: '招待リンク一覧',
        url: L('admin-2'),
        description: 'コミュニティ招待リンクの管理',
        icon: LinkIcon,
        subCategory: '管理・運用シート'
      },
      {
        id: 'admin-5',
        title: 'パートナー営業',
        url: L('admin-5'),
        description: '',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'admin-10',
        title: 'パートナー営業資料',
        url: L('admin-10'),
        description: '',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'admin-6',
        title: 'パートナー公開チェックリスト',
        url: L('admin-6'),
        description: '',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'admin-12',
        title: 'パートナー申請データ',
        url: L('admin-12'),
        description: 'パートナー申請の管理シート',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'admin-7',
        title: '宇宙知っトク進捗確認',
        url: L('admin-7'),
        description: '',
        icon: FileText,
        subCategory: '宇宙知っトク'
      },
      {
        id: 'admin-3',
        title: 'SNS投稿テンプレート',
        url: L('admin-3'),
        description: 'SNS投稿用のテンプレート集',
        icon: FileText,
        subCategory: 'SNS'
      },
      {
        id: 'admin-8',
        title: 'Instagramビジネス投稿(Cosmo Base)',
        url: L('admin-8'),
        description: '',
        icon: Focus,
        subCategory: 'SNS'
      },
      {
        id: 'admin-9',
        title: 'Instagramビジネス投稿(FSIF)',
        url: L('admin-9'),
        description: '',
        icon: Focus,
        subCategory: 'SNS'
      },
      {
        id: 'admin-4',
        title: 'Union',
        url: L('admin-4'),
        description: '',
        icon: Building,
        subCategory: ''
      },
      {
        id: "admin-13",
        title: "自動化率計算",
        url: L('admin-13'),
        description:"",
        icon: Building,
        subCategory:"管理・運用シート"
      },
      {
        id:"admin-14",
        title:"STAT BOT",
        url: L('admin-14'),
        description:"Discord分析BOT メンバー数カウント",
        icon: Users,
        subCategory:"Discord"
      },
      {
        id:"admin-15",
        title:"運営用イベントページ一覧",
        url: L('admin-15'),
        description:"イベントページの運営用まとめページ",
        icon: ClipboardClock,
        subCategory:"イベント"
      },
      {
        id:"admin-16",
        title:"Orbit",
        url: L('admin-16'),
        description:"タスク＆人材管理ツール",
        icon: ClipboardClock,
        subCategory:"管理"
      }
    ],
  },
  {
    id: 'admin2',
    label: '開発',
    icon: Settings,
    links: [
      {
        id: 'admin2-1',
        title: 'FSIF Github',
        url: 'https://github.com/FSIFofficial',
        description: 'CBHP,AIBot',
        icon: FolderGit,
        subCategory: ''
      },
      {
        id: 'admin2-2',
        title: 'CB Github',
        url: 'https://github.com/cosmo-base/',
        description: '参加者、CBL、KPI,CBBot',
        icon: FolderGit,
        subCategory: ''
      },
      {
        id: 'admin2-3',
        title: 'FSIF HP 編集',
        url: 'https://manage.wix.com/dashboard/5676783d-ee0f-4707-a11d-e960efead3e1/setup?referralInfo=my-sites',
        description: '',
        icon: FolderGit,
        subCategory: ''
      },
      {
        id: 'admin2-4',
        title: 'CBHP analytics',
        url: 'https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/a385612556p525984972/reports/intelligenthome?params=_u..nav%3Dmaui',
        description: 'GA4解析ツール',
        icon: ChartSpline,
        subCategory: ''
      },
      {
        id: 'admin2-5',
        title: 'CB参加者ページ analytics',
        url: 'https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/a385612556p541593058/reports/intelligenthome?params=_u..nav%3Dmaui',
        description: 'GA4解析ツール',
        icon: ChartSpline,
        subCategory: ''
      },
      {
        id: 'admin2-6',
        title: 'パートナーロゴ格納箱',
        url: 'https://supabase.com/dashboard/project/oqomwuhrvqoozfujgtsj/storage/files/buckets/library',
        description: '',
        icon: FolderGit,
        subCategory: ''
      },
    ],
  },
  {
    id: 'manage',
    label: '原本',
    icon: Wrench,
    links: [
      {
        id: 'manage-1',
        title: 'KPI',
        url: L('manage-1'),
        description: 'KPIデータの原本（Discord,SNS）',
        icon: BarChart3,
        subCategory: 'Discord, SNS'
      },
      {
        id: 'manage-2',
        title: 'クイズ総回答数',
        url: L('manage-2'),
        description: '宇宙クイズの回答データ',
        icon: HelpCircle,
        subCategory: '毎日宇宙クイズ'
      },
      {
        id: 'manage-3',
        title: 'CBL',
        url: L('manage-3'),
        description: 'CBLの原本スプレッドシート',
        icon: FileText,
        subCategory: 'CBL'
      },
      {
        id: 'manage-4',
        title: 'CBED原本',
        url: L('manage-4'),
        description: 'CBEDの原本スプレッドシート、ロケット打ち上げ',
        icon: FileText,
        subCategory: 'CBED'
      },
      {
        id: 'manage-5',
        title: 'CBMD原本',
        url: L('manage-5'),
        description: 'CBMDの原本',
        icon: Database,
        subCategory: 'CBMD'
      },
      {
        id: 'manage-6',
        title: 'パートナー一覧',
        url: L('manage-6'),
        description: 'CBHPパートナーデータ',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'manage-7',
        title: 'パートナー分析',
        url: L('manage-7'),
        description: 'パートナーデータ',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'manage-11',
        title: 'CBHP分析',
        url: L('manage-11'),
        description: 'GA4からとってきたCBHPトラッキングデータ',
        icon: FileText,
        subCategory: 'CBHP'
      },
      {
        id: 'manage-8',
        title: '宇宙タイプ診断簡易版データ(CBHP)',
        url: L('manage-8'),
        description: '宇宙タイプ診断 簡易版診断データ',
        icon: Sparkles,
        subCategory: '宇宙タイプ診断'
      },
      {
        id: 'manage-9',
        title: '宇宙タイプ診断簡易版データ(参加者)',
        url: L('manage-9'),
        description: '宇宙タイプ診断 簡易版診断データ',
        icon: Sparkles,
        subCategory: '宇宙タイプ診断'
      },
      {
        id: 'manage-10',
        title: '宇宙タイプ診断詳細版診断データ',
        url: L('manage-10'),
        description: '宇宙タイプ診断 完全版診断データ',
        icon: Sparkles,
        subCategory: '宇宙タイプ診断'
      },
      {
        id: 'manage-12',
        title: '行ってきた スプレッドシート',
        url: L('manage-12'),
        description: '行ってきた管理リスト(参加者ページ反映)',
        icon: Database,
        subCategory: '行ってきた'
      },
      {
        id: 'manage-13',
        title: '宇宙知っトク進捗確認 スプレッドシート',
        url: L('manage-13'),
        description: '知っトク管理リスト(参加者ページ反映)',
        icon: Database,
        subCategory: '宇宙知っトク'
      },
      {
        id: 'manage-14',
        title: 'Cosmo Match 日本のロケット編 スプレッドシート',
        url: L('manage-14'),
        description: '',
        icon: Database,
        subCategory: 'Cosmo Match'
      },
      {
        id: 'manage-15',
        title: 'Cosmo Match 88星座編 スプレッドシート',
        url: L('manage-15'),
        description: '',
        icon: Database,
        subCategory: 'Cosmo Match'
      },
      {
        id: 'manage-16',
        title: '宇宙用語集 スプレッドシート',
        url: L('manage-16'),
        description: '',
        icon: Database,
        subCategory: '宇宙用語集'
      },
      {
        id: 'manage-17',
        title: '参加者ページGA4 スプレッドシート',
        url: L('manage-17'),
        description: '',
        icon: Database,
        subCategory: '参加者ページ'
      },
    ]
  },
  {
    id: 'form',
    label: 'フォーム',
    icon: LayoutList,
    links: [
      {
        id: 'form-1',
        title: 'CosmoBase お問い合わせ',
        url: L('form-1'),
        description: 'CBHP お問い合わせ',
        icon: LayoutList,
        subCategory: 'お問い合わせ'
      },
      {
        id: 'form-2',
        title: 'Cosmo Base パートナー制度 お問い合わせ',
        url: L('form-2'),
        description: 'CBHP パートナーお問い合わせ',
        icon: LayoutList,
        subCategory: 'パートナー'
      },
      {
        id: 'form-3',
        title: 'パートナー申請データ',
        url: L('form-3'),
        description: 'パートナー申請の管理シート',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'form-4',
        title: 'パートナー修正データ',
        url: L('form-4'),
        description: 'パートナーページ 修正データ',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'form-5',
        title: 'CBLパートナー資料格納',
        url: L('form-5'),
        description: 'パートナーページ CBL資料格納申請フォーム',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'form-8',
        title: 'アンケート確認',
        url: L('form-8'),
        description: 'パートナーページ アンケート確認フォーム',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'form-6',
        title: 'イベント登壇申請データ',
        url: L('form-6'),
        description: 'パートナーページ 知っトク登壇申請フォーム',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'form-7',
        title: 'メンバー申請',
        url: L('form-7'),
        description: 'パートナーページ メンバー申請フォーム',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'form-9',
        title: 'Cosmo Base 匿名質問フォーム',
        url: L('form-9'),
        description: '参加者ページ 宇宙教えて 匿名質問フォーム',
        icon: LayoutList,
        subCategory: '宇宙教えて'
      },
      {
        id: 'form-10',
        title: 'イベント登録',
        url: L('form-10'),
        description: '参加者ページ CBED イベント追加フォーム',
        icon: LayoutList,
        subCategory: 'CBED'
      },
      {
        id: 'form-11',
        title: 'イベントテーマ希望フォーム',
        url: L('form-11'),
        description: '参加者ページ 宇宙知っトク リクエストフォーム',
        icon: LayoutList,
        subCategory: '宇宙知っトク'
      },
      {
        id: 'form-12',
        title: '宇宙知っトク 参加後アンケート',
        url: L('form-12'),
        description: '',
        icon: LayoutList,
        subCategory: '宇宙知っトク'
      },
      {
        id: 'form-13',
        title: 'CBMDお問い合わせ',
        url: L('form-13'),
        description: '参加者ページ CBMD お問い合わせフォーム',
        icon: LayoutList,
        subCategory: 'CBMD'
      },
    ]
  },
  {
    id: 'design',
    label: 'デザイン',
    icon: Image,
    links: [
      {
        id: 'design-3',
        title: 'Instagram_汎用投稿_デザイン',
        url: L('design-3'),
        description: '',
        icon: Image,
        subCategory: 'SNS投稿用'
      },
      {
        id: 'design-4',
        title: 'Instagram_クイズ投稿_デザイン',
        url: L('design-4'),
        description: '',
        icon: Image,
        subCategory: 'SNS投稿用'
      },
      {
        id: 'design-11',
        title: '宇宙クイズ_問題&回答_デザイン',
        url: L('design-11'),
        description: '',
        icon: Image,
        subCategory: 'SNS投稿用'
      },
      {
        id: 'design-14',
        title: 'パートナー締結_サブ(Instagram)デザイン',
        url: L('design-14'),
        description: '',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'design-1',
        title: 'Instagram_イベント投稿_デザイン',
        url: L('design-1'),
        description: '',
        icon: Image,
        subCategory: 'SNS投稿用'
      },
      {
        id: 'design-2',
        title: '宇宙知っトク_座談会用当日_資料',
        url: L('design-2'),
        description: '',
        icon: Image,
        subCategory: '資料・カバー画像'
      },
      {
        id: 'design-6',
        title: 'FSIF&CB_新歓_資料',
        url: L('design-6'),
        description: '',
        icon: Image,
        subCategory: '資料・カバー画像'
      },
      {
        id: 'design-9',
        title: '週間宇宙ニュース_表紙デザイン',
        url: L('design-9'),
        description: '',
        icon: Image,
        subCategory: '資料・カバー画像'
      },
      {
        id: 'design-10',
        title: 'note_コンテンツ紹介_デザイン',
        url: L('design-10'),
        description: '',
        icon: Image,
        subCategory: '資料・カバー画像'
      },
      {
        id: 'design-13',
        title: '宇宙知っトク_表紙_デザイン',
        url: L('design-13'),
        description: '',
        icon: Image,
        subCategory: '資料・カバー画像'
      },
      {
        id: 'design-5',
        title: 'CB_メイン背景_デザイン',
        url: L('design-5'),
        description: '',
        icon: Image,
        subCategory: 'ブランディング・宣伝'
      },
      {
        id: 'design-7',
        title: 'パートナー締結_メインデザイン',
        url: L('design-7'),
        description: '',
        icon: Handshake,
        subCategory: 'パートナー'
      },
      {
        id: 'design-8',
        title: 'CBMDコンテンツ紹介_投稿用デザイン',
        url: L('design-8'),
        description: '',
        icon: Image,
        subCategory: 'ブランディング・宣伝'
      },
      {
        id: 'design-12',
        title: 'プレスリリース_表紙_デザイン',
        url: L('design-12'),
        description: '',
        icon: Image,
        subCategory: 'ブランディング・宣伝'
      },
    ],
  },
  {
    id: 'external',
    label: '外部資料',
    icon: Building,
    links: [
      {
        id: 'external-1',
        title: '宇宙システム株式会社_宇宙関連のイベント',
        url: 'https://space-sd.co.jp/symposium/symposium.html',
        description: '',
        icon: Building,
        subCategory: ''
      },
      {
        id: 'external-2',
        title: '空畑',
        url: 'https://sorabatake.jp/',
        description: '',
        icon: Building,
        subCategory: ''
      },
      {
        id: 'external-3',
        title: 'sorae',
        url: 'https://sorae.info/',
        description: '',
        icon: Building,
        subCategory: ''
      },
      {
        id: 'external-4',
        title: 'SpaceMedia',
        url: 'https://spacemedia.jp/',
        description: '',
        icon: Building,
        subCategory: ''
      },
      {
        id: 'external-5',
        title: 'SPACE CONNECT',
        url: 'https://space-connect.jp/',
        description: '',
        icon: Building,
        subCategory: ''
      },
    ],
  },
];

function LinkCard({
  link,
  delay
}: {
  link: LinkItem;
  delay: number;
}) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const Icon = link.icon;

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(link.url);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => {
      setCopied(false);
      setShowToast(false);
    }, 2000);
  };

  const handleOpen = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: delay * 0.05 }}
      className={cn(
        "glass-card rounded-2xl p-5 cursor-pointer group transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1"
      )}
      onClick={handleOpen}
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-2 right-2 bg-success/90 text-white text-xs px-3 py-1.5 rounded-lg z-10"
          >
            URLをコピーしました
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {link.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
          <p className="text-xs text-muted-foreground/60 mt-2 truncate font-mono">
            {link.url}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-4 pt-4 border-t border-border/30">
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="flex-1 gap-2 bg-secondary/30 hover:bg-secondary/50 border-border/50"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-success" />
              <span className="text-xs">コピー完了</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span className="text-xs">Copy</span>
            </>
          )}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            handleOpen();
          }}
          className="flex-1 gap-2 bg-primary/10 hover:bg-primary/20 border-primary/20 text-primary"
        >
          <ExternalLink className="h-4 w-4" />
          <span className="text-xs">Open</span>
        </Button>
      </div>
    </motion.div>
  );
}

export function LinksPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const currentCategory = initialLinkCategories.find((cat) => cat.id === activeCategory);

  // 選択されたタブのリンクをサブカテゴリでグループ化
  const groupedLinks = currentCategory?.links.reduce((acc, link) => {
    const group = link.subCategory || 'その他';
    if (!acc[group]) acc[group] = [];
    acc[group].push(link);
    return acc;
  }, {} as Record<string, LinkItem[]>);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Page Header */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/20">
            <LinkIcon className="h-6 w-6 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">リンク管理</h2>
            <p className="text-sm text-muted-foreground">Cosmo Base運営で利用するリンクを一元管理</p>
          </div>
        </div>
      </div>

      {/* Sub-tabs (Main Categories) */}
      <div className="flex gap-2 flex-wrap">
        {initialLinkCategories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;

          return (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300',
                isActive
                  ? 'text-white'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50 glass-card'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeLinkTab"
                  className="absolute inset-0 tab-active rounded-xl"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {category.label}
                <span className="text-xs opacity-70">({category.links.length})</span>
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Link Cards Grid Grouped by Subcategory */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {groupedLinks && Object.keys(groupedLinks).length > 0 ? (
            <div className="space-y-8">
              {Object.entries(groupedLinks).map(([group, links]) => (
                <div key={group} className="scroll-mt-6">
                  {/* サブカテゴリの見出し */}
                  <div className="flex items-center gap-3 mb-4 border-b border-border/50 pb-2">
                    <div className="w-1.5 h-5 bg-primary rounded-full"></div>
                    <h3 className="text-lg font-bold text-foreground tracking-tight">{group}</h3>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                      {links.length}件
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {links.map((link, index) => (
                      <LinkCard
                        key={link.id}
                        link={link}
                        delay={index}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-12 text-center">
              <LinkIcon className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">このカテゴリにはまだリンクがありません</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Quick Stats */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-semibold text-foreground mb-4">リンク統計</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {initialLinkCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{cat.links.length}</p>
                  <p className="text-xs text-muted-foreground">{cat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
