
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Metrics from './components/Metrics';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -80px 0px"
    });

    const refreshObserver = () => {
      const revealedElements = document.querySelectorAll('.reveal');
      revealedElements.forEach(el => observer.observe(el));
    };

    refreshObserver();
    window.addEventListener('scroll', handleScroll);
    
    const mutationObserver = new MutationObserver(() => {
      refreshObserver();
    });
    
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        {/* КТО МЫ (Hero) */}
        <Hero />
        
        {/* О КОМПАНИИ & НАПРАВЛЕНИЯ (Main Info) */}
        <About />

        {/* НАШ ПОДХОД & МЕТОДОЛОГИЯ */}
        <Metrics />
        <Workflow />

        {/* СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО */}
        <Testimonials />

        {/* КОНТАКТЫ */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
