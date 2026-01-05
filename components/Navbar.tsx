
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoUrl = "https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/hero_logo.jpg";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* STRATEGIC LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="relative h-10 md:h-12 flex items-center">
            <img 
              src={logoUrl} 
              alt="Мировоззрение" 
              className="h-full w-auto object-contain mix-blend-multiply" 
            />
            <div className="flex flex-col justify-center ml-4 border-l border-slate-200 pl-4">
               <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-brand-primary/90 leading-tight">Мировоззрение</span>
               <span className="text-[7px] font-bold uppercase tracking-[0.1em] text-slate-400 leading-none mt-1">HR Ecosystem</span>
            </div>
          </div>
        </div>

        {/* DESKTOP MENU - 4 ITEMS */}
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => scrollToSection('about')} className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand-primary transition-colors cursor-pointer outline-none">
            О нас
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand-primary transition-colors cursor-pointer outline-none">
            Рекомендации
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand-primary transition-colors cursor-pointer outline-none">
            Аудит
          </button>
          <button onClick={() => scrollToSection('footer')} className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-brand-primary transition-colors cursor-pointer outline-none">
            Контакты
          </button>
        </div>

        <button className="md:hidden text-brand-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-2xl`}></i>
        </button>
      </div>
      
      {/* MOBILE MENU - 4 ITEMS (Audit is now a text item) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b p-8 flex flex-col gap-6 shadow-2xl animate-fade-in">
          <button className="text-left text-lg font-bold text-brand-dark" onClick={() => scrollToSection('about')}>
            О нас
          </button>
          <button className="text-left text-lg font-bold text-brand-dark" onClick={() => scrollToSection('testimonials')}>
            Рекомендации
          </button>
          <button className="text-left text-lg font-bold text-brand-dark" onClick={() => scrollToSection('contact')}>
            Аудит
          </button>
          <button className="text-left text-lg font-bold text-brand-dark" onClick={() => scrollToSection('footer')}>
            Контакты
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
