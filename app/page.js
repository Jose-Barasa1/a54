import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import LiveTicker from './components/LiveTicker';
import Stats from './components/Stats';
import Disciplines from './components/Disciplines';
import TabsSection from './components/TabsSection';
import NewsSection from './components/NewsSection';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import SiteFooter from './components/SiteFooter';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <LiveTicker />
        <Stats />
        <Disciplines />
        <TabsSection />
        <NewsSection />
        <Gallery />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}