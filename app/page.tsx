import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedSermons from '@/components/sections/FeaturedSermons';
import LiveTVSection from '@/components/sections/LiveTVSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedSermons />
        <LiveTVSection />
      </main>
      <Footer />
    </div>
  );
}