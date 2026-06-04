'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Link as LinkIcon,ChartSpline,Building,ExternalLink,Copy,Check,Users,Handshake,Settings,Home,Database,Calendar,BookOpen,FileText,UserPlus,FolderOpen,BarChart3,HelpCircle,Image,Wrench,X,Focus,Notebook,SquarePlay,FolderGit,
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
        icon: ,
      },
      {
        id: 'admin-6',
        title: 'パートナー営業',
        url: 'https://docs.google.com/spreadsheets/d/1Nbq6rD_PfF1-KdIXqlq4wCVPA6SWITvDroO5eKe42Q4/edit',
        description: '',
        icon: ,
      },
      {
        id: 'admin-7',
        title: 'パートナー公開チェックリスト',
        url: 'https://docs.google.com/spreadsheets/d/1SoZ2O92aYnMXRBuFU7-vV7gX4vItVbxnIoKhGVxpo4s/edit',
        description: '',
        icon: ,
      },
      {
        id: 'admin-8',
        title: 'Instagramビジネス投稿(Cosmo Base)',
        url: 'https://business.facebook.com/latest/home?asset_id=922321694307649&business_id=2338074866656029',
        description: '',
        icon: ,
      },
      {
        id: 'admin-9',
        title: 'Instagramビジネス投稿(FSIF)',
        url: 'https://business.facebook.com/latest/home?asset_id=416684408195963&business_id=1693962128107258',
        description: '',
        icon: ,
      },
      {
        id: 'admin-10',
        title: 'パートナー営業資料',
        url: 'https://drive.google.com/drive/u/0/folders/1g-u-D4AWqQQeO7SheKx7m0bgiaGvQ326',
        description: '',
        icon: ,
      },
      {
        id: 'admin-11',
        title: '初期のブランディング',
        url: 'https://docs.google.com/spreadsheets/d/1BRjUW9K0S7OVqKs4oN4zEPPFnGQnF89KoqDq0a1CY-k/edit',
        description: '',
        icon: ,
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
        icon: ,
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
        title: '宇宙タイプ診断詳細版診断データ',
        url: 'https://docs.google.com/spreadsheets/d/13yFYKDVm0g09Vw6cyHN9Hr4H2n66CL9SpPDJ-mytLb0/edit?',
        description: '宇宙タイプ診断詳細版診断データ',
        icon: Sparkles ,
      },
    ]
  },
  {
    id: 'design',
    label: 'デザイン',
    icon: Image,
    links: [
      {
        id: 'design-1',
        title: 'Instagram＿イベント投稿＿デザイン',
        url: 'https://canva.link/6ohgqrezzrde9dj',
        description: '',
        icon: Image,
      },
      {
        id: 'design-2',
        title: '宇宙知っトク＿座談会用当日＿資料',
        url: 'https://canva.link/sygrarpb5f0osz4',
        description: '',
        icon: Image,
      },
      {
        id: 'design-3',
        title: 'Instagram＿汎用投稿＿デザイン',
        url: 'https://canva.link/ac3ep7ya04p7ff0',
        description: '',
        icon: Image,
      },
      {
        id: 'design-4',
        title: 'Instagram＿クイズ投稿＿デザイン',
        url: 'https://canva.link/k9rtx04myz9upf5',
        description: '',
        icon: Image,
      },
      {
        id: 'design-5',
        title: 'CB＿メイン背景＿デザイン',
        url: 'https://canva.link/t4cehf79ym5swmz',
        description: '',
        icon: Image,
      },
      {
        id: 'design-6',
        title: 'FSIF&CB＿新歓＿資料',
        url: 'https://canva.link/lyl255ilb5p40mm',
        description: '',
        icon: Image,
      },
      {
        id: 'design-7',
        title: 'パートナー締結＿メインデザイン',
        url: 'https://canva.link/1aakw2t0bjl906i',
        description: '',
        icon: Handshake,
      },
      {
        id: 'design-8',
        title: 'CBMDコンテンツ紹介＿投稿用デザイン',
        url: 'https://canva.link/foa4xfbsrjn5lbp',
        description: '',
        icon: Image,
      },
      {
        id: 'design-9',
        title: '週間宇宙ニュース＿表紙デザイン',
        url: 'https://canva.link/wyjmvia38dzv2cu',
        description: '',
        icon: Image,
      },
      {
        id: 'design-10',
        title: 'note＿コンテンツ紹介＿デザイン',
        url: 'https://canva.link/h8fsg4d8ielshsv',
        description: '',
        icon: Image,
      },
      {
        id: 'design-11',
        title: '宇宙クイズ＿問題&回答＿デザイン',
        url: 'https://canva.link/v9q69e1cmw5xc8v',
        description: '',
        icon: Image,
      },
      {
        id: 'design-12',
        title: 'プレスリリース＿表紙＿デザイン',
        url: 'https://canva.link/ql3kf2fnhktw0l8',
        description: '',
        icon: Image,
      },
      {
        id: 'design-13',
        title: '宇宙知っトク＿表紙＿デザイン',
        url: 'https://canva.link/3oqqw9yl2iqbew8',
        description: '',
        icon: Image,
      },
      {
        id: 'design-14',
        title: 'パートナー締結＿サブ(Instagram)デザイン',
        url: 'https://canva.link/dcgka4ivmcz80tg',
        description: '',
        icon: Handshake,
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
        title: '宇宙システム株式会社＿宇宙関連のイベント',
        url: 'https://space-sd.co.jp/symposium/symposium.html',
        description: '',
        icon: Building,
      },
      {
        id: 'external-2',
        title: '空畑',
        url: 'https://sorabatake.jp/',
        description: '',
        icon: Building,
      },
      {
        id: 'external-3',
        title: 'sorae',
        url: 'https://sorae.info/',
        description: '',
        icon: Building,
      },
      {
        id: 'external-4',
        title: 'SpaceMedia',
        url: 'https://spacemedia.jp/',
        description: '',
        icon: Building,
      },
      {
        id: 'external-5',
        title: 'SPACE CONNECT',
        url: 'https://space-connect.jp/',
        description: '',
        icon: Building,
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
  const [activeCategory, setActiveCategory] = useState('member');
  const currentCategory = initialLinkCategories.find((cat) => cat.id === activeCategory);

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

      {/* Sub-tabs */}
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

      {/* Link Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {currentCategory && currentCategory.links.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentCategory.links.map((link, index) => (
                <LinkCard 
                  key={link.id}
                  link={link} 
                  delay={index}
                />
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
