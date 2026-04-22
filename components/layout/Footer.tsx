'use client';

import Link from 'next/link';
import { Heart, Youtube, Facebook, Twitter, Instagram } from 'lucide-react';
import { scriptures } from '@/lib/data';

const footerLinks = {
  platform: [
    { href: '/', label: 'Home' },
    { href: '/live', label: 'Live TV' },
    { href: '/sermons', label: 'Sermons Library' },
  ],
  about: [
    { href: '/about', label: 'About Us' },
    { href: '/testimonies', label: 'Testimonies' },
    { href: '/contact', label: 'Contact' },
    { href: '/contact#prayer', label: 'Prayer Request' },
  ],
};

const socialLinks = [
  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
];

export default function Footer() {
  const scriptureOfTheDay = scriptures[0];

  return (
    <footer className="relative bg-bg-secondary border-t border-gold/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-deep/50" />

      <div className="container-custom relative py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <svg className="w-6 h-6 text-bg-deep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <div>
                <span className="font-display text-2xl tracking-wider text-gradient-gold block">
                  NO WEAPON
                </span>
                <span className="font-heading text-sm tracking-[0.3em] text-text-secondary">
                  TV
                </span>
              </div>
            </Link>
            <p className="text-text-secondary font-body mb-6 max-w-md leading-relaxed">
              Spreading the Gospel of Jesus Christ to the ends of the earth through powerful teaching, worship, and testimony. No weapon formed against you shall prosper.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold hover:glow-gold-sm transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-6 text-text-primary">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-gold transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg mb-6 text-text-primary">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-gold transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 mb-8">
          <blockquote className="text-center max-w-2xl mx-auto">
            <p className="scripture-text text-xl md:text-2xl text-text-primary italic mb-3">
              &ldquo;{scriptureOfTheDay.verse}&rdquo;
            </p>
            <cite className="text-gold text-sm not-italic">
              — {scriptureOfTheDay.reference}
            </cite>
          </blockquote>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gold/10">
          <p className="text-text-muted text-sm font-body">
            &copy; {new Date().getFullYear()} NO WEAPON TV. All rights reserved.
          </p>
          <p className="text-text-muted text-sm font-body flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-error fill-error" /> for the Kingdom
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gold/0 to-gold/30" />
    </footer>
  );
}