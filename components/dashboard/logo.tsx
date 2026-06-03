'use client';

import Image from 'next/image';
import { Rocket } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizes = {
  sm: { icon: 32, text: 'text-sm' },
  md: { icon: 40, text: 'text-base' },
  lg: { icon: 48, text: 'text-lg' },
};

export function Logo({ size = 'md', showText = true }: LogoProps) {
  const { icon, text } = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-shrink-0" style={{ width: icon, height: icon }}>
        <Image
          src="/CB_icon.png"
          alt="Cosmo Base"
          width={icon}
          height={icon}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-foreground leading-tight ${text}`}>
            Cosmo Base
          </span>
          <span className="text-[10px] text-primary font-medium tracking-wide">
            KPI Dashboard
          </span>
        </div>
      )}
    </div>
  );
}

export function LogoPlaceholder({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const { icon } = sizes[size];

  return (
    <div
      className="flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border/50"
      style={{ width: icon, height: icon }}
    >
      <Rocket className="w-1/2 h-1/2 text-primary" />
    </div>
  );
}
