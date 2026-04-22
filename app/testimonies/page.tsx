'use client';

import { useState } from 'react';
import { Send, Heart } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TestimonyCard from '@/components/ui/TestimonyCard';
import { testimonies } from '@/lib/data';
import Button from '@/components/ui/Button';

export default function TestimoniesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    testimony: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const featuredTestimonies = testimonies.filter(t => t.isFeatured);
  const allTestimonies = testimonies;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28">
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-medium tracking-wider uppercase mb-4 block">Praise Reports</span>
              <h1 className="font-display text-4xl md:text-5xl mb-4">
                <span className="text-gradient-gold">God&apos;s</span>
                <span className="text-text-primary"> Faithfulness</span>
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Read how God is moving in the lives of believers around the world. Share your own testimony and let others be encouraged.
              </p>
            </div>

            {featuredTestimonies.length > 0 && (
              <div className="mb-16">
                <h2 className="font-heading text-2xl mb-6">Featured Testimonies</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredTestimonies.map((testimony) => (
                    <TestimonyCard key={testimony.id} {...testimony} isFeatured />
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-gold/10 pt-16">
              <h2 className="font-heading text-2xl mb-6">All Testimonies</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allTestimonies.map((testimony) => (
                  <TestimonyCard key={testimony.id} {...testimony} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-purple/10 to-bg-deep" />
          <div className="container-custom relative">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
                <h2 className="font-heading text-3xl mb-4">
                  <span className="text-text-primary">Share Your</span>
                  <span className="text-gradient-gold"> Testimony</span>
                </h2>
                <p className="text-text-secondary">
                  Your story can encourage others who are facing similar challenges. Let us celebrate God&apos;s goodness together.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center p-8 rounded-2xl bg-bg-card border border-gold/20">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="font-heading text-xl text-text-primary mb-2">Thank You!</h3>
                  <p className="text-text-secondary">
                    Your testimony has been submitted. God is glorified through your story!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-bg-card border border-gold/20 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-gold/20 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-text-secondary mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-gold/20 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-text-secondary mb-2">Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-gold/20 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
                      placeholder="City, Country"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-text-secondary mb-2">Your Testimony</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.testimony}
                      onChange={(e) => setFormData({ ...formData, testimony: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-gold/20 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Share how God worked in your life..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting} rightIcon={<Send className="w-5 h-5" />}>
                    Submit Testimony
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}