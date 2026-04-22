'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { topics, preachers } from '@/lib/data';
import Button from '@/components/ui/Button';

interface SermonFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: { preacher: string; topic: string }) => void;
}

export default function SermonFilters({ onSearch, onFilterChange }: SermonFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPreacher, setSelectedPreacher] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handlePreacherChange = (value: string) => {
    setSelectedPreacher(value);
    onFilterChange({ preacher: value, topic: selectedTopic });
  };

  const handleTopicChange = (value: string) => {
    setSelectedTopic(value);
    onFilterChange({ preacher: selectedPreacher, topic: value });
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedPreacher('');
    setSelectedTopic('');
    onSearch('');
    onFilterChange({ preacher: '', topic: '' });
  };

  const hasFilters = searchQuery || selectedPreacher || selectedTopic;

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search sermons, preachers, topics..."
            className="w-full pl-12 pr-4 py-3 rounded-full bg-bg-card border border-gold/20 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        <Button
          variant="secondary"
          leftIcon={<Filter className="w-4 h-4" />}
          onClick={() => setShowFilters(!showFilters)}
        >
          Filters
        </Button>
      </div>

      {showFilters && (
        <div className="p-6 rounded-2xl bg-bg-card border border-gold/20 space-y-4 animate-fade-up">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-text-secondary mb-2">Preacher</label>
              <select
                value={selectedPreacher}
                onChange={(e) => handlePreacherChange(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-gold/20 text-text-primary focus:outline-none focus:border-gold transition-colors"
              >
                <option value="">All Preachers</option>
                {preachers.map((preacher) => (
                  <option key={preacher} value={preacher}>
                    {preacher}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-text-secondary mb-2">Topic</label>
              <select
                value={selectedTopic}
                onChange={(e) => handleTopicChange(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-gold/20 text-text-primary focus:outline-none focus:border-gold transition-colors"
              >
                <option value="">All Topics</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-gold hover:text-gold-light transition-colors"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}