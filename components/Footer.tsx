
import React from 'react';

const Footer: React.FC = () => {
  const logoUrl = "https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/hero_logo.jpg";

  return (
    <footer id="footer" className="bg-brand-dark border-t border-white/5 pt-20 pb-12 scroll-mt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-8 flex flex-col items-center gap-6">
             <div className="h-16 w-auto bg-white rounded-2xl p-3 shadow-2xl overflow-hidden">
               <img 
                 src={logoUrl} 
                 alt="Мировоззрение" 
                 className="h-full w-auto object-contain" 
               />
             </div>
             <div className="flex flex-col items-center">
               <span className="text-sm font-black uppercase tracking-[0.4em] text-white leading-tight">Мировоззрение</span>
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mt-2">HR Ecosystem │ GrowBRICS Partner</span>
             </div>
          </div>
          
          <p className="text-slate-500 font-medium leading-relaxed max-w-xl mb-10">
            HR-экосистема нового поколения. Мы объединяем классическую экспертизу и возможности платформы GrowBRICS для поиска и развития талантов в масштабах БРИКС+.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <a href="tel:+79372977772" className="text-white font-bold text-xl hover:text-brand-primary transition-colors flex items-center gap-3">
              <i className="fas fa-phone text-sm text-brand-primary"></i>
              +7 937 297 77 72
            </a>
            <a href="mailto:hello@mirrussian.ru" className="text-white font-bold text-xl hover:text-brand-primary transition-colors flex items-center gap-3">
              <i className="fas fa-envelope text-sm text-brand-primary"></i>
              hello@mirrussian.ru
            </a>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">© 2026 HR-агентство «Мировоззрение»</p>
          </div>
          <div className="flex gap-8 items-center">
            <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest hidden sm:block">Part of GrowBRICS Global Network</span>
            <div className="flex gap-6">
              <a href="https://t.me/mirovozzreni" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0088cc] transition-all text-xl">
                <i className="fab fa-telegram-plane"></i>
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-all text-xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
