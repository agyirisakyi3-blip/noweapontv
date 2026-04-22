'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sermons } from '@/lib/data';
import SermonCard from '@/components/ui/SermonCard';
import Link from 'next/link';

export default function FeaturedSermons() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 400;

  const featuredSermons = sermons.filter((s) => s.isFeatured);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-bg-secondary via-transparent to-bg-secondary z-10 pointer-events-none" />

      <div className="container-custom">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-2 block">Featured</span>
            <h2 className="font-heading text-3xl md:text-4xl text-text-primary">
              Powerful Sermons
            </h2>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 px-4">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
            }}
          >
            {featuredSermons.map((sermon, index) => (
              <div
                key={sermon.id}
                className="flex-shrink-0 w-[350px] md:w-[400px] scroll-snap-align-start"
              >
                <SermonCard
                  {...sermon}
                  onClick={() => {}}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/sermons"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
          >
            View All Sermons
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}