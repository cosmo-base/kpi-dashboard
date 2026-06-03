'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { 
  Link as LinkIcon,ChartSpline,ExternalLink,Sparkles,Copy,Check,Users,Handshake,Settings,Home,Database,Calendar,BookOpen,FileText,UserPlus,FolderOpen,BarChart3,HelpCircle,Image,Plus,Pencil,  Trash2,  GripVertical,  Wrench,X,Focus,Notebook,SquarePlay,FolderGit,
  type LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { title } from 'process';

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
        title: 'FSIF Github',
        url: 'https://github.com/FSIFofficial',
        description: 'CBHP,AIBot',
        icon: FolderGit ,
      },
      {
        id: 'admin-6',
        title: 'CB Github',
        url: 'https://github.com/cosmo-base/',
        description: '参加者、CBL、KPI,CBBot',
        icon: FolderGit ,
      },
      {
        id: 'admin-7',
        title: `CBHP analytics`,
        url: 'https://analytics.google.com/analytics/web/?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fanalytics%2F#/a385612556p525984972/reports/intelligenthome?params=_u..nav%3Dmaui',
        description: '参加者、CBL、KPI,CBBot',
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
        title: '宇宙タイプ診断簡易版診断データCBHP',
        url: 'https://docs.google.com/spreadsheets/d/1LcbLG6GYqNZXlx38ZXqgLZ0OlLBLavd8VSJZEayfXYs/edit',
        description: '宇宙タイプ診断簡易版診断データCBHP',
        icon: Sparkles ,
      },
      {
        id: 'manage-9',
        title: '宇宙タイプ診断簡易版診断データ参加者ページ',
        url: 'https://docs.google.com/spreadsheets/d/1LiOtm3NW4NGMQuchAjnSj_26rK3K9AaxSo4Autphi8Y/edit',
        description: '宇宙タイプ診断簡易版診断データ参加者ページ',
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
        title: 'Cosmo Baseで宇宙知っトク表紙',
        url: 'https://canva.link/3oqqw9yl2iqbew8',
        description: '宇宙知っトクの表紙デザイン',
        icon: Image,
      },
    ],
  },
];

function LinkCard({ 
  link, 
  delay, 
  onEdit, 
  isDragging 
}: { 
  link: LinkItem; 
  delay: number;
  onEdit: (link: LinkItem) => void;
  isDragging?: boolean;
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
      animate={{ opacity: isDragging ? 0.8 : 1, y: 0, scale: isDragging ? 1.02 : 1 }}
      transition={{ duration: 0.3, delay: delay * 0.05 }}
      className={cn(
        "glass-card rounded-2xl p-5 cursor-pointer group transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1",
        isDragging && "shadow-2xl shadow-primary/20 border-primary/40"
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
        {/* Drag Handle */}
        <div className="p-1 cursor-grab active:cursor-grabbing opacity-40 hover:opacity-100 transition-opacity">
          <GripVertical className="h-4 w-4 text-muted-foreground" />
        </div>
        
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
        <Button
          variant="outline"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(link);
          }}
          className="gap-2 bg-accent/10 hover:bg-accent/20 border-accent/20 text-accent"
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

export function LinksPage() {
  const [categories, setCategories] = useState<LinkCategory[]>(initialLinkCategories);
  const [activeCategory, setActiveCategory] = useState('member');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [editingLink, setEditingLink] = useState<LinkItem | null>(null);
  const [deletingLink, setDeletingLink] = useState<LinkItem | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '', url: '' });

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  const handleAddLink = useCallback(() => {
    if (!formData.title || !formData.url) return;
    
    const newLink: LinkItem = {
      id: `${activeCategory}-${Date.now()}`,
      title: formData.title,
      description: formData.description,
      url: formData.url,
      icon: LinkIcon,
    };

    setCategories(prev => prev.map(cat => {
      if (cat.id === activeCategory) {
        return { ...cat, links: [...cat.links, newLink] };
      }
      return cat;
    }));

    setFormData({ title: '', description: '', url: '' });
    setIsAddDialogOpen(false);
  }, [activeCategory, formData]);

  const handleEditLink = useCallback(() => {
    if (!editingLink || !formData.title || !formData.url) return;

    setCategories(prev => prev.map(cat => ({
      ...cat,
      links: cat.links.map(link => 
        link.id === editingLink.id 
          ? { ...link, title: formData.title, description: formData.description, url: formData.url }
          : link
      )
    })));

    setEditingLink(null);
    setFormData({ title: '', description: '', url: '' });
    setIsEditDialogOpen(false);
  }, [editingLink, formData]);

  const handleDeleteLink = useCallback(() => {
    if (!deletingLink) return;

    setCategories(prev => prev.map(cat => ({
      ...cat,
      links: cat.links.filter(link => link.id !== deletingLink.id)
    })));

    setDeletingLink(null);
    setIsDeleteDialogOpen(false);
  }, [deletingLink]);

  const openEditDialog = (link: LinkItem) => {
    setEditingLink(link);
    setFormData({ title: link.title, description: link.description, url: link.url });
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (link: LinkItem) => {
    setDeletingLink(link);
    setIsDeleteDialogOpen(true);
  };

  const handleReorder = (newOrder: LinkItem[]) => {
    setCategories(prev => prev.map(cat => {
      if (cat.id === activeCategory) {
        return { ...cat, links: newOrder };
      }
      return cat;
    }));
  };

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
        <Button
          onClick={() => {
            setFormData({ title: '', description: '', url: '' });
            setIsAddDialogOpen(true);
          }}
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          リンクを追加
        </Button>
      </div>

      {/* Sub-tabs */}
      <div className="flex gap-2 flex-wrap">
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

      {/* Link Cards Grid with Drag & Drop */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {currentCategory && currentCategory.links.length > 0 ? (
            <Reorder.Group
              axis="y"
              values={currentCategory.links}
              onReorder={handleReorder}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {currentCategory.links.map((link, index) => (
                <Reorder.Item
                  key={link.id}
                  value={link}
                  className="list-none"
                >
                  <LinkCard 
                    link={link} 
                    delay={index}
                    onEdit={openEditDialog}
                  />
                </Reorder.Item>
              ))}
            </Reorder.Group>
          ) : (
            <div className="glass-card rounded-2xl p-12 text-center">
              <LinkIcon className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">このカテゴリにはまだリンクがありません</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setFormData({ title: '', description: '', url: '' });
                  setIsAddDialogOpen(true);
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                リンクを追加
              </Button>
            </div>
          )}
        </motion.div>
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

      {/* Add Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="glass-card border-border/50">
          <DialogHeader>
            <DialogTitle>新しいリンクを追加</DialogTitle>
            <DialogDescription>
              {currentCategory?.label}に新しいリンクを追加します
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">タイトル *</label>
              <Input
                placeholder="リンクのタイトル"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">説明</label>
              <Input
                placeholder="リンクの説明"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">URL *</label>
              <Input
                placeholder="https://..."
                value={formData.url}
                onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              キャンセル
            </Button>
            <Button onClick={handleAddLink} disabled={!formData.title || !formData.url}>
              追加
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="glass-card border-border/50">
          <DialogHeader>
            <DialogTitle>リンクを編集</DialogTitle>
            <DialogDescription>
              リンクの情報を編集します
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">タイトル *</label>
              <Input
                placeholder="リンクのタイトル"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">説明</label>
              <Input
                placeholder="リンクの説明"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">URL *</label>
              <Input
                placeholder="https://..."
                value={formData.url}
                onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
              />
            </div>
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              onClick={() => {
                openDeleteDialog(editingLink!);
                setIsEditDialogOpen(false);
              }}
              className="text-destructive hover:bg-destructive/10 border-destructive/30"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              削除
            </Button>
            <div className="flex gap-2 flex-1 justify-end">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                キャンセル
              </Button>
              <Button onClick={handleEditLink} disabled={!formData.title || !formData.url}>
                保存
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent className="glass-card border-border/50">
          <AlertDialogHeader>
            <AlertDialogTitle>リンクを削除しますか？</AlertDialogTitle>
            <AlertDialogDescription>
              「{deletingLink?.title}」を削除します。この操作は取り消せません。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>キャンセル</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteLink}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              削除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </motion.div>
  );
}
