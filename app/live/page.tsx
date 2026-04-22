'use client';

import { useState } from 'react';
import { Radio, MessageCircle, Share2, Volume2, VolumeX, Maximize } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProgramCard from '@/components/ui/ProgramCard';
import { programs } from '@/lib/data';
import Button from '@/components/ui/Button';

export default function LivePage() {
  const [isMuted, setIsMuted] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const liveProgram = programs.find(p => p.isCurrentlyLive);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-success font-medium">Live Now</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-bg-deep border border-gold/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6 glow-gold animate-glow-pulse">
                        <Radio className="w-12 h-12 text-bg-deep" />
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl text-text-primary mb-2">
                        Sunday Morning Worship
                      </h2>
                      <p className="text-text-secondary">
                        Streaming Live from NO WEAPON TV Studios
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-success/20 text-success text-sm font-medium">
                      LIVE
                    </span>
                    <span className="px-3 py-1 rounded-full bg-bg-deep/50 text-text-primary text-sm">
                      2,547 watching
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg-deep/90 to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setIsMuted(!isMuted)}
                          className="w-10 h-10 rounded-full bg-bg-card/50 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
                        >
                          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </button>
                        <button
                          onClick={() => setIsFullscreen(!isFullscreen)}
                          className="w-10 h-10 rounded-full bg-bg-card/50 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
                        >
                          <Maximize className="w-5 h-5" />
                        </button>
                      </div>
                      <button
                        onClick={() => setShowChat(!showChat)}
                        className="px-4 py-2 rounded-full bg-bg-card/50 text-text-secondary hover:text-gold transition-colors flex items-center gap-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span className="hidden sm:inline">Chat</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 rounded-2xl bg-bg-card border border-gold/20">
                  <h3 className="font-heading text-xl text-text-primary mb-2">
                    Sunday Morning Worship
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Join us for an inspiring time of worship, praise, and powerful preaching of the Word of God. Experience the presence of the Holy Spirit as we gather to honor and glorify our King.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span>With Pastor Michael Rivers</span>
                    <span>Started at 9:00 AM EST</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="sticky top-24">
                  <h3 className="font-heading text-xl text-text-primary mb-4">
                    Upcoming Programs
                  </h3>
                  <div className="space-y-3">
                    {programs.map((program) => (
                      <ProgramCard key={program.id} {...program} />
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-gradient-gold/10 border border-gold/20">
                    <h4 className="font-heading text-sm text-gold mb-2">
                      Join Our Community
                    </h4>
                    <p className="text-sm text-text-secondary mb-3">
                      Connect with believers worldwide during our live broadcasts.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="secondary" size="sm" className="flex-1">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="secondary" size="sm" className="flex-1">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}