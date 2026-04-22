'use client';

import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { formatTime } from '@/lib/utils';
import type { Program } from '@/lib/data';

export default function ProgramCard({
  title,
  description,
  host,
  thumbnail,
  scheduledTime,
  dayOfWeek,
  isCurrentlyLive,
}: Program) {
  return (
    <article className={cn(
      'group relative bg-bg-card rounded-xl overflow-hidden transition-all duration-300 border border-gold/10',
      isCurrentlyLive ? 'border-success/50' : 'hover:border-gold/30'
    )}>
      <div className="flex gap-4 p-4">
        <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            sizes="96px"
          />
          {isCurrentlyLive && (
            <div className="absolute inset-0 bg-bg-deep/60 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center animate-glow-pulse">
                <Play className="w-4 h-4 text-bg-deep fill-bg-deep" />
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={cn(
              'px-2 py-0.5 rounded text-xs font-medium',
              isCurrentlyLive
                ? 'bg-success text-bg-deep'
                : 'bg-gold/10 text-gold'
            )}>
              {dayOfWeek}
            </span>
            <span className="text-xs text-text-muted">
              {formatTime(scheduledTime)}
            </span>
          </div>
          <h3 className="font-heading text-sm text-text-primary truncate group-hover:text-gold transition-colors">
            {title}
          </h3>
          <p className="text-xs text-text-muted truncate">{host}</p>
        </div>
      </div>

      {!isCurrentlyLive && (
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      )}
    </article>
  );
}