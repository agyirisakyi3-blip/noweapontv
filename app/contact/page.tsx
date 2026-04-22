'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Heart, MessageCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    isPrivate: false,
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

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28">
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-gold text-sm font-medium tracking-wider uppercase mb-4 block">Get In Touch</span>
              <h1 className="font-display text-4xl md:text-5xl mb-4">
                <span className="text-gradient-gold">Contact</span>
                <span className="text-text-primary"> Us</span>
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                We&apos;d love to hear from you. Whether you have a question, need prayer, or want to partner with us in ministry.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div id="prayer" className="p-8 rounded-2xl bg-bg-card border border-gold/20">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="w-6 h-6 text-gold" />
                    <h2 className="font-heading text-2xl">Prayer Request</h2>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                        <Heart className="w-10 h-10 text-success" />
                      </div>
                      <h3 className="font-heading text-xl text-text-primary mb-2">Prayer Received</h3>
                      <p className="text-text-secondary">
                        We believe God for your situation. Our prayer team is standing with you in faith.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                        <label className="block text-sm text-text-secondary mb-2">Subject</label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-gold/20 text-text-primary focus:outline-none focus:border-gold transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="prayer">Prayer Request</option>
                          <option value="general">General Inquiry</option>
                          <option value="partnership">Ministry Partnership</option>
                          <option value="technical">Technical Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm text-text-secondary mb-2">Message</label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-gold/20 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors resize-none"
                          placeholder="Share how we can pray for you or how we can help..."
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="private"
                          checked={formData.isPrivate}
                          onChange={(e) => setFormData({ ...formData, isPrivate: e.target.checked })}
                          className="w-5 h-5 rounded border-gold/20 bg-bg-secondary text-gold focus:ring-gold"
                        />
                        <label htmlFor="private" className="text-sm text-text-secondary">
                          Keep this request private (prayer team only)
                        </label>
                      </div>

                      <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting} rightIcon={<Send className="w-5 h-5" />}>
                        Submit Prayer Request
                      </Button>
                    </form>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-bg-card border border-gold/20">
                  <h3 className="font-heading text-lg mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="text-sm text-text-muted">Email</p>
                        <a href="mailto:info@noweapontv.com" className="text-text-primary hover:text-gold transition-colors">
                          info@noweapontv.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="text-sm text-text-muted">Phone</p>
                        <a href="tel:+1234567890" className="text-text-primary hover:text-gold transition-colors">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="text-sm text-text-muted">Address</p>
                        <p className="text-text-primary">
                          NO WEAPON TV Headquarters<br />
                          123 Faith Avenue<br />
                          Glory City, GC 12345
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-gold/10 border border-gold/20">
                  <Heart className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-heading text-lg mb-2">Scriptural Comfort</h3>
                  <p className="scripture-text text-text-secondary italic">
                    &ldquo;Call unto me and I will answer thee, and show thee great and mighty things, which thou knowest not.&rdquo;
                  </p>
                  <p className="text-sm text-gold mt-2">— Jeremiah 33:3</p>
                </div>

                <div className="p-6 rounded-xl bg-bg-card border border-gold/20">
                  <h3 className="font-heading text-lg mb-4">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-muted">Monday - Friday</span>
                      <span className="text-text-primary">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Saturday</span>
                      <span className="text-text-primary">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Sunday</span>
                      <span className="text-text-primary">Closed (Live Service)</span>
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