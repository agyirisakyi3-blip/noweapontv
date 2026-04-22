'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Play, Radio } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/live', label: 'Live TV' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/about', label: 'About' },
  { href: '/testimonies', label: 'Testimonies' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center group-hover:glow-gold transition-all duration-300">
                <Cross className="w-5 h-5 text-bg-deep" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl tracking-wider text-gradient-gold">
                NO WEAPON
              </span>
              <span className="block font-heading text-xs tracking-[0.3em] text-text-secondary">
                TV
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-text-secondary'
                }`}
              >
                {link.label}
                {link.href === '/live' && (
                  <span className="absolute -top-1 -right-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                    </span>
                  </span>
                )}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-gold rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/live"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success border border-success/30 hover:bg-success/20 transition-all duration-300"
            >
              <Radio className="w-4 h-4 animate-glow-pulse" />
              <span className="text-sm font-medium">Watch Live</span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-text-primary hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-bg-deep/95 backdrop-blur-lg" onClick={() => setIsMobileMenuOpen(false)} />
          <nav className="absolute inset-y-0 right-0 w-full max-w-sm bg-bg-secondary shadow-2xl">
            <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-display text-2xl tracking-wider transition-colors duration-300 hover:text-gold animate-fade-up ${
                    pathname === link.href ? 'text-gold' : 'text-text-primary'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.label}
                  {link.href === '/live' && (
                    <span className="ml-2 inline-flex items-center">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                      </span>
                    </span>
                  )}
                </Link>
              ))}
              <Link
                href="/live"
                className="mt-4 flex items-center gap-2 px-6 py-3 rounded-full bg-success text-bg-deep font-semibold animate-fade-up"
                style={{ animationDelay: '600ms' }}
              >
                <Play className="w-4 h-4" />
                Watch Live
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

function Cross({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 2v20M2 12h20" />
    </svg>
  );
}