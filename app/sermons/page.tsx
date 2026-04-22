'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SermonFilters from '@/components/sections/SermonFilters';
import SermonCard from '@/components/ui/SermonCard';
import { sermons } from '@/lib/data';

export default function SermonsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ preacher: '', topic: '' });

  const filteredSermons = sermons.filter((sermon) => {
    const matchesSearch = searchQuery === '' ||
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesPreacher = filters.preacher === '' || sermon.preacher === filters.preacher;
    const matchesTopic = filters.topic === '' || sermon.topics.includes(filters.topic);

    return matchesSearch && matchesPreacher && matchesTopic;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28">
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="mb-12">
              <h1 className="font-display text-4xl md:text-5xl mb-4">
                <span className="text-gradient-gold">Sermons</span>
                <span className="text-text-primary"> Library</span>
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl">
                Dive deep into the Word of God with our extensive library of powerful sermons from anointed preachers.
              </p>
            </div>

            <SermonFilters
              onSearch={setSearchQuery}
              onFilterChange={setFilters}
            />

            <div className="mt-8">
              <p className="text-sm text-text-muted mb-4">
                {filteredSermons.length} sermons found
              </p>

              {filteredSermons.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSermons.map((sermon) => (
                    <SermonCard key={sermon.id} {...sermon} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl text-text-primary mb-2">
                    No sermons found
                  </h3>
                  <p className="text-text-secondary">
                    Keep seeking His face. Try adjusting your search or filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}