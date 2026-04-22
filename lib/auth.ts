import { useLocalStorage } from './hooks';

export interface User {
  id: string;
  email: string;
  name: string;
  favorites: string[];
}

const USER_KEY = 'currentUser';

export function useAuth() {
  const [user, setUser] = useLocalStorage<User | null>(USER_KEY, null);

  const login = (email: string, name: string) => {
    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      name,
      favorites: [],
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const addFavorite = (sermonId: string) => {
    if (!user) return;
    setUser(prev => {
      if (!prev) return prev;
      if (prev.favorites.includes(sermonId)) return prev;
      return { ...prev, favorites: [...prev.favorites, sermonId] };
    });
  };

  const removeFavorite = (sermonId: string) => {
    if (!user) return;
    setUser(prev => {
      if (!prev) return prev;
      return { ...prev, favorites: prev.favorites.filter(id => id !== sermonId) };
    });
  };

  const isFavorite = (sermonId: string) => {
    return user?.favorites.includes(sermonId) ?? false;
  };

  return {
    user,
    login,
    logout,
    addFavorite,
    removeFavorite,
    isFavorite,
    isAuthenticated: !!user,
  };
}