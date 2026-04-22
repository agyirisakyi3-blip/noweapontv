import { useLocalStorage } from './hooks';
import { Sermon } from './data';

export interface WatchHistoryItem {
  sermonId: string;
  progress: number;
  lastWatched: string;
}

const WATCH_HISTORY_KEY = 'watchHistory';
const MAX_HISTORY_ITEMS = 20;

export function useWatchHistory() {
  const [history, setHistory] = useLocalStorage<WatchHistoryItem[]>(WATCH_HISTORY_KEY, []);

  const addToHistory = (sermonId: string, progress: number) => {
    setHistory(prev => {
      const filtered = prev.filter(item => item.sermonId !== sermonId);
      const newItem: WatchHistoryItem = {
        sermonId,
        progress,
        lastWatched: new Date().toISOString(),
      };
      return [newItem, ...filtered].slice(0, MAX_HISTORY_ITEMS);
    });
  };

  const updateProgress = (sermonId: string, progress: number) => {
    setHistory(prev =>
      prev.map(item =>
        item.sermonId === sermonId
          ? { ...item, progress, lastWatched: new Date().toISOString() }
          : item
      )
    );
  };

  const removeFromHistory = (sermonId: string) => {
    setHistory(prev => prev.filter(item => item.sermonId !== sermonId));
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const getContinueWatching = () => {
    return history.filter(item => item.progress > 0 && item.progress < 95);
  };

  return {
    history,
    addToHistory,
    updateProgress,
    removeFromHistory,
    clearHistory,
    getContinueWatching,
  };
}