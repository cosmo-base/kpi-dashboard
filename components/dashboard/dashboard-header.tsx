"use client";

import { useState, useEffect } from "react";
import { RefreshCcw, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface DashboardHeaderProps {
  lastUpdated: string | null;
  isLoading?: boolean;
  onRefresh: () => void;
}

export function DashboardHeader({
  lastUpdated,
  isLoading,
  onRefresh,
}: DashboardHeaderProps) {
  const [formattedDate, setFormattedDate] = useState<string>("-");

  useEffect(() => {
    if (!lastUpdated) {
      setFormattedDate("-");
      return;
    }
    const date = new Date(lastUpdated);
    const formatted = new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
    setFormattedDate(formatted);
  }, [lastUpdated]);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Title */}
          <div className="flex">
            <Image src="/CB_icon.png" alt="CB" width={40} height={40} className="h-max"/>
            <div>
              <h1 className="text-lg font-bold gradient-text">
                Cosmo Base Dashboard
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Community Growth Analytics
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Connection Status */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
              <Cloud className="h-3.5 w-3.5 text-success" />
              <span className="text-xs font-medium text-success">
                Connected
              </span>
            </div>

            {/* Last Updated */}
            <div className="hidden md:block text-xs text-muted-foreground">
              最終更新: {formattedDate}
            </div>

            {/* Refresh Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={onRefresh}
              disabled={isLoading}
              className="gap-2 bg-secondary/50 hover:bg-secondary border-border/50"
            >
              <RefreshCcw
                className={cn("h-4 w-4", isLoading && "animate-spin")}
              />
              <span className="hidden sm:inline">更新</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
