'use client';

import { useState, useEffect } from 'react';
import { Radio, Clock, Users } from 'lucide-react';
import { programs } from '@/lib/data';
import Button from '@/components/ui/Button';
import Link from 'next/link';

function getNextProgram() {
  const now = new Date();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = dayNames[now.getDay()];

  const todayProgram = programs.find(p => p.dayOfWeek === currentDay);
  if (todayProgram) return { ...todayProgram, status: 'today' };

  const dayIndex = dayNames.indexOf(currentDay);
  for (let i = 1; i <= 7; i++) {
    const nextDayIndex = (dayIndex + i) % 7;
    const nextDay = dayNames[nextDayIndex];
    const program = programs.find(p => p.dayOfWeek === nextDay);
    if (program) return { ...program, status: 'upcoming', daysUntil: i };
  }

  return null;
}

export default function LiveTVSection() {
  const [nextProgram, setNextProgram] = useState<ReturnType<typeof getNextProgram>>(null);
  const [elapsed, setElapsed] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setNextProgram(getNextProgram());

    // Track elapsed time since the live program started at 9:00 AM
    const tick = () => {
      const now = new Date();
      const programStart = new Date();
      programStart.setHours(9, 0, 0, 0);
      const diffMs = Math.max(0, now.getTime() - programStart.getTime());
      const totalSecs = Math.floor(diffMs / 1000);
      setElapsed({
        hours: Math.floor(totalSecs / 3600),
        minutes: Math.floor((totalSecs % 3600) / 60),
        seconds: totalSecs % 60,
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const liveProgram = programs.find(p => p.isCurrentlyLive);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-royal-purple/10 to-bg-deep" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/30 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-success font-medium">Live Now</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl mb-4">
              <span className="text-gradient-gold">Join Us</span>
              <br />
              <span className="text-text-primary">Live on Air</span>
            </h2>

            <p className="text-lg text-text-secondary mb-8">
              Experience worship, prayer, and the Word of God in real-time. Connect with believers worldwide as we seek God together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/live">
                <Button size="lg" leftIcon={<Radio className="w-5 h-5" />}>
                  Watch Live Stream
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-bg-card/50 border border-gold/10">
                <Users className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="font-heading text-2xl text-text-primary">2.5K</p>
                <p className="text-xs text-text-muted">Watching</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-bg-card/50 border border-gold/10">
                <Clock className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="font-heading text-2xl text-text-primary">9:00</p>
                <p className="text-xs text-text-muted">AM EST</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-bg-card/50 border border-gold/10">
                <Radio className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="font-heading text-2xl text-text-primary">HD</p>
                <p className="text-xs text-text-muted">Quality</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold/20 rounded-3xl blur-2xl" />

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-bg-card border border-gold/20">
              <div className="absolute inset-0 bg-gradient-to-br from-royal-purple/20 to-gold/10" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mb-6 glow-gold animate-glow-pulse">
                  <Radio className="w-10 h-10 text-bg-deep" />
                </div>
                <h3 className="font-heading text-xl text-text-primary mb-2">
                  Sunday Morning Worship
                </h3>
                <p className="text-text-secondary">
                  With Pastor Michael Rivers
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg-deep/90 to-transparent">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Live</span>
                  <span className="text-sm text-success">2,547 watching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}