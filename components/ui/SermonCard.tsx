'use client';

import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { formatViews, formatDate } from '@/lib/utils';

interface SermonCardProps {
  id: string;
  title: string;
  description: string;
  preacher: string;
  preacherImage: string;
  thumbnail: string;
  duration: string;
  date: string;
  views: number;
  isFeatured?: boolean;
  onClick?: () => void;
}

export default function SermonCard({
  title,
  description,
  preacher,
  preacherImage,
  thumbnail,
  duration,
  date,
  views,
  isFeatured = false,
  onClick,
}: SermonCardProps) {
  return (
    <article
      onClick={onClick}
      className={cn(
        'group relative bg-bg-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02]',
        isFeatured ? 'border-2 border-gold/30 hover:border-gold/60 hover:shadow-gold-glow' : 'border border-gold/10 hover:border-gold/40 hover:shadow-gold-glow-sm'
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-bg-deep/80 backdrop-blur-sm text-sm text-gold font-medium">
            {duration}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold-glow transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-bg-deep fill-bg-deep" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gold/30">
            <Image
              src={preacherImage}
              alt={preacher}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <p className="font-body text-sm font-medium text-text-primary">{preacher}</p>
            <p className="text-xs text-text-muted">{formatDate(date)}</p>
          </div>
        </div>

        <h3 className={cn(
          'font-heading mb-2 text-text-primary group-hover:text-gold transition-colors duration-300 line-clamp-2',
          isFeatured ? 'text-xl' : 'text-lg'
        )}>
          {title}
        </h3>

        <p className="text-sm text-text-secondary line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">
            {formatViews(views)} views
          </span>
        </div>
      </div>

      {isFeatured && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full bg-gradient-gold text-bg-deep text-xs font-semibold">
            Featured
          </span>
        </div>
      )}
    </article>
  );
}