'use client';

import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as LinkIcon,ClipboardClock,LayoutList,ChartSpline,Building,ExternalLink,Copy,Check,Users,Handshake,Settings,Home,Database,Calendar,BookOpen,FileText,UserPlus,FolderOpen,BarChart3,HelpCircle,Image,Wrench,X,Focus,Notebook,SquarePlay,FolderGit,Sparkles,Search,type LucideIcon} from 'lucide-react';
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

// スプレッドシートの icon 列の値 → 実際のアイコンコンポーネント。
// 新しい値を使いたい場合はここに追加する（未登録の名前は LinkIcon にフォールバック）。
const ICON_MAP: Record<string, LucideIcon> = {
  Link: LinkIcon,
  ClipboardClock,
  LayoutList,
  ChartSpline,
  Building,
  Users,
  Handshake,
  Settings,
  Home,
  Database,
  Calendar,
  BookOpen,
  FileText,
  UserPlus,
  FolderOpen,
  BarChart3,
  HelpCircle,
  Image,
  Wrench,
  X,
  Focus,
  Notebook,
  SquarePlay,
  FolderGit,
  Sparkles,
};

// タブ（カテゴリ）の並び順・ラベル・アイコンはここで固定。中身のリンク一覧はスプレッドシートから取得する。
const CATEGORY_META: { id: string; label: string; icon: LucideIcon }[] = [
  { id: 'general', label: '一般', icon: Users },
  { id: 'member', label: '参加者', icon: Users },
  { id: 'partner', label: 'パートナー', icon: Handshake },
  { id: 'admin', label: '運営', icon: Settings },
  { id: 'selfdev', label: '自主開発ツール', icon: Wrench },
  { id: 'admin2', label: '開発', icon: Settings },
  { id: 'manage', label: '原本', icon: Wrench },
  { id: 'form', label: 'フォーム', icon: LayoutList },
  { id: 'design', label: 'デザイン', icon: Image },
  { id: 'external', label: '外部資料', icon: Building },
];

function LinkCard({
  link,
  delay,
  categoryLabel
}: {
  link: LinkItem;
  delay: number;
  categoryLabel?: string;
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
        "relative glass-card rounded-2xl p-5 cursor-pointer group transition-all duration-300",
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
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {link.title}
            </h3>
            {/* カテゴリタブを横断して検索した時、どのタブのリンクか分かるようにするバッジ */}
            {categoryLabel && (
              <span className="text-[10px] font-medium text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded-full shrink-0">
                {categoryLabel}
              </span>
            )}
          </div>
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
  const [categories, setCategories] = useState<LinkCategory[] | null>(null);
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const isSearching = searchQuery.trim().length > 0;

  useEffect(() => {
    const csvUrl = process.env.NEXT_PUBLIC_KPI_LINKS_CSV_URL ?? '';

    fetch(csvUrl)
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
        const rows = parsed.data as Record<string, string>[];

        const linksByCategory = new Map<string, LinkItem[]>();
        rows.forEach((row) => {
          const categoryId = String(row.category || '').trim();
          const id = String(row.id || '').trim();
          const url = String(row.url || '').trim();
          if (!categoryId || !id || !url) return;

          if (!linksByCategory.has(categoryId)) linksByCategory.set(categoryId, []);
          linksByCategory.get(categoryId)!.push({
            id,
            title: String(row.title || '').trim(),
            url,
            description: String(row.description || '').trim(),
            icon: ICON_MAP[String(row.icon || '').trim()] ?? LinkIcon,
            subCategory: String(row.subCategory || '').trim(),
          });
        });

        setCategories(
          CATEGORY_META.map((meta) => ({
            ...meta,
            links: linksByCategory.get(meta.id) ?? [],
          }))
        );
      })
      .catch((err) => {
        console.error('Link Data Load Error:', err);
        setCategories(CATEGORY_META.map((meta) => ({ ...meta, links: [] })));
      });
  }, []);

  const currentCategory = categories?.find((cat) => cat.id === activeCategory);

  // 選択されたタブのリンクをサブカテゴリでグループ化
  const groupedLinks = currentCategory?.links.reduce((acc, link) => {
    const group = link.subCategory || 'その他';
    if (!acc[group]) acc[group] = [];
    acc[group].push(link);
    return acc;
  }, {} as Record<string, LinkItem[]>);

  // タブを問わず全カテゴリのリンクからタイトル・説明・URLで検索
  const searchResults = (() => {
    if (!isSearching || !categories) return [];
    const q = searchQuery.trim().toLowerCase();
    return categories.flatMap((category) =>
      category.links
        .filter(
          (link) =>
            link.title.toLowerCase().includes(q) ||
            link.description.toLowerCase().includes(q) ||
            link.url.toLowerCase().includes(q)
        )
        .map((link) => ({ link, categoryLabel: category.label }))
    );
  })();

  if (!categories) {
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        <div className="animate-pulse flex items-center gap-2">
          <LinkIcon className="h-5 w-5" />
          <span>リンクデータを読み込み中...</span>
        </div>
      </div>
    );
  }

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

        {/* タブを問わず全リンクから検索 */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="全タブからリンクを検索"
            className="w-full pl-9 pr-9 py-2.5 rounded-xl text-sm bg-secondary/30 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          {isSearching && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="検索をクリア"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Sub-tabs (Main Categories) */}
      <div className={cn('flex gap-2 flex-wrap', isSearching && 'opacity-50 pointer-events-none')}>
        {categories.map((category) => {
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

      {/* Link Cards Grid: 検索中は全タブ横断のフラット表示、それ以外はタブ内をサブカテゴリでグループ表示 */}
      <AnimatePresence mode="wait">
        {isSearching ? (
          <motion.div
            key="search"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4 border-b border-border/50 pb-2">
              <div className="w-1.5 h-5 bg-primary rounded-full"></div>
              <h3 className="text-lg font-bold text-foreground tracking-tight">検索結果</h3>
              <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                {searchResults.length}件
              </span>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map(({ link, categoryLabel }, index) => (
                  <LinkCard
                    key={link.id}
                    link={link}
                    delay={index}
                    categoryLabel={categoryLabel}
                  />
                ))}
              </div>
            ) : (
              <div className="glass-card rounded-2xl p-12 text-center">
                <Search className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">「{searchQuery}」に一致するリンクは見つかりませんでした</p>
              </div>
            )}
          </motion.div>
        ) : (
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
        )}
      </AnimatePresence>

      {/* Quick Stats */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-semibold text-foreground mb-4">リンク統計</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {categories.map((cat) => {
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
