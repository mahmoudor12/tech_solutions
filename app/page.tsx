
import Navigation from '@/app/components/Navigation';
import Hero from '@/app/components/Hero';
import ContentSection from '@/app/components/ContentSection';
import CallToAction from '@/app/components/Call';
import Footer from '@/app/components/footer';
import './globals.css';

function App() {
  return (
    <div className="app">
      
      <Navigation />
      <main>
        <Hero />
        <ContentSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;