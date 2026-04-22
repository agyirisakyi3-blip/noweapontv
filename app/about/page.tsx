'use client';

import { useState } from 'react';
import { Target, Eye, Heart, Globe, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

const values = [
  {
    icon: Target,
    title: 'Biblical Authority',
    description: 'We stand firm on the unchanging Word of God, teaching sound doctrine that builds faith and transforms lives.',
  },
  {
    icon: Heart,
    title: 'Authentic Worship',
    description: 'We cultivate genuine encounters with God where His presence is tangibly felt and lives are changed.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We are committed to spreading the Gospel to every nation, tongue, and tribe on earth.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build authentic relationships where believers grow together in faith and purpose.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-bg-deep via-bg-deep to-royal-purple/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-bg-deep/80" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />

          <div className="container-custom relative z-10 text-center">
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-4 block">Our Story</span>
            <h1 className="font-display text-4xl md:text-6xl mb-6">
              <span className="text-gradient-gold">About</span>
              <span className="text-text-primary"> NO WEAPON TV</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Spreading the Gospel of Jesus Christ to the ends of the earth through powerful teaching, worship, and testimony.
            </p>
          </div>
        </section>

        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl mb-6">
                  <span className="text-gradient-gold">Our</span>
                  <span className="text-text-primary"> Mission</span>
                </h2>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  NO WEAPON TV was founded with a singular vision: to make the life-changing message of Jesus Christ accessible to everyone, everywhere. We believe that technology should be a tool for the Kingdom, not a barrier.
                </p>
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  Through powerful sermons, inspiring worship, and real-time global connections, we are breaking barriers of distance and circumstance to bring believers together in unity of faith.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Isaiah 54:17 reminds us that no weapon formed against us shall prosper. This platform stands as a testament to God&apos;s faithfulness and His desire for all to come to know Him.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-gold/20 rounded-3xl blur-2xl" />
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src="https://picsum.photos/seed/about/800/450"
                    alt="Worship service"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl mb-4">
                <span className="text-text-primary">Our</span>
                <span className="text-gradient-gold"> Values</span>
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                These principles guide everything we do at NO WEAPON TV.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl bg-bg-card border border-gold/20 hover:border-gold/40 transition-colors"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-bg-deep" />
                  </div>
                  <h3 className="font-heading text-xl text-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding relative overflow-hidden">
          <div className="container-custom text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              <span className="text-text-primary">Ready to</span>
              <span className="text-gradient-gold"> Grow</span>
              <span className="text-text-primary"> Your Faith?</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
              Join thousands of believers worldwide who are deepening their walk with God through NO WEAPON TV.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/sermons">
                <Button size="lg">Explore Sermons</Button>
              </Link>
              <Link href="/live">
                <Button variant="secondary" size="lg">Watch Live</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}