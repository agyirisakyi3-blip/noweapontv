'use client';

import { useEffect, useState } from 'react';
import { Play, Radio } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Link from 'next/link';

// Pre-computed deterministic particle positions to avoid SSR/CSR hydration mismatch
// (Math.random() in JSX produces different values server vs client)
const PARTICLES = [
  { left: 12.4, top: 23.1, delay: 0.5, duration: 5.2 },
  { left: 87.3, top: 67.8, delay: 1.2, duration: 4.1 },
  { left: 34.9, top: 45.2, delay: 2.8, duration: 6.3 },
  { left: 61.7, top: 12.5, delay: 0.9, duration: 3.7 },
  { left: 5.2,  top: 78.4, delay: 3.4, duration: 5.8 },
  { left: 76.1, top: 34.6, delay: 1.7, duration: 4.9 },
  { left: 48.5, top: 89.3, delay: 4.1, duration: 6.1 },
  { left: 23.8, top: 56.1, delay: 0.3, duration: 3.4 },
  { left: 92.4, top: 21.7, delay: 2.2, duration: 5.5 },
  { left: 15.6, top: 93.2, delay: 1.5, duration: 4.6 },
  { left: 67.9, top: 7.4,  delay: 3.8, duration: 6.7 },
  { left: 41.2, top: 63.8, delay: 0.7, duration: 3.9 },
  { left: 83.5, top: 47.2, delay: 4.5, duration: 5.1 },
  { left: 29.3, top: 31.5, delay: 1.1, duration: 4.4 },
  { left: 56.8, top: 82.6, delay: 2.6, duration: 6.0 },
  { left: 72.4, top: 58.9, delay: 0.4, duration: 3.6 },
  { left: 8.7,  top: 14.3, delay: 3.1, duration: 5.3 },
  { left: 95.1, top: 74.5, delay: 1.9, duration: 4.2 },
  { left: 38.6, top: 38.7, delay: 4.8, duration: 6.9 },
  { left: 51.3, top: 5.8,  delay: 2.4, duration: 3.8 },
];

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-deep via-bg-deep to-royal-purple/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-bg-deep/80" />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-royal-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

        <div className="absolute inset-0">
          {PARTICLES.map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full animate-float"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className={cn(
          'max-w-4xl mx-auto transition-all duration-1000',
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
            <Radio className="w-4 h-4 text-success animate-glow-pulse" />
            <span className="text-sm text-gold">NOW LIVE</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="text-gradient-gold">No Weapon</span>
            <br />
            <span className="text-text-primary">Formed Against You</span>
            <br />
            <span className="text-gold-light">Shall Prosper</span>
          </h1>

          <p className="font-scripture text-xl md:text-2xl text-text-secondary italic mb-4">
            Isaiah 54:17
          </p>

          <p className="font-body text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Ignite Your Faith. Transform Your Life. Experience the power of God&apos;s Word through powerful preaching, worship, and divine encounters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/live">
              <Button size="lg" rightIcon={<Play className="w-5 h-5" />}>
                Watch Live
              </Button>
            </Link>
            <Link href="/sermons">
              <Button variant="secondary" size="lg">
                Explore Sermons
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}