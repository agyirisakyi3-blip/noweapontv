'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { Testimony } from '@/lib/data';

export default function TestimonyCard({
  name,
  location,
  testimony,
  image,
  date,
  isFeatured = false,
}: Testimony) {
  return (
    <article className={cn(
      'group relative bg-bg-card rounded-xl p-6 transition-all duration-300 border border-gold/10',
      isFeatured ? 'border-gold/30 lg:p-8' : 'hover:border-gold/30'
    )}>
      <div className="flex items-start gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold/30 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-body font-medium text-text-primary">{name}</span>
            {isFeatured && (
              <span className="px-2 py-0.5 rounded text-xs bg-gradient-gold text-bg-deep">
                Featured
              </span>
            )}
          </div>
          <span className="text-xs text-text-muted">{location}</span>
        </div>
      </div>

      <blockquote className={cn(
        'mt-4 scripture-text text-text-secondary group-hover:text-text-primary transition-colors',
        isFeatured ? 'text-lg' : 'text-sm'
      )}>
        &ldquo;{testimony}&rdquo;
      </blockquote>

      <div className="mt-4 pt-4 border-t border-gold/10">
        <time className="text-xs text-text-muted">{date}</time>
      </div>
    </article>
  );
}