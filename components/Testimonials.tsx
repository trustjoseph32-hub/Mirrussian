
import React, { useRef, useEffect, useState } from 'react';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const reviews = [
    { 
      name: 'В.В. Семенов', 
      role: 'Директор ГБУ «Мосжилниипроект»', 
      text: 'Выражаем благодарность за оперативный и качественный подбор персонала. Команда «Мировоззрение» проявила высокий уровень профессионализма в поиске узкопрофильных специалистов для наших ключевых проектов.', 
      logo: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/moszhilnii.png',
      scale: 'scale-[1.2]'
    },
    { 
      name: 'Департамент персонала', 
      role: 'ГУП «Московский метрополитен»', 
      text: 'Рекомендуем агентство как надежного партнера в сфере рекрутмента. Отмечаем глубокую экспертизу в анализе рынка труда и умение находить кандидатов, полностью соответствующих корпоративным стандартам Московского Транспорта.', 
      logo: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/mosmetro-horizontal-logo.png',
      scale: 'scale-[1.0]'
    },
    { 
      name: 'Отдел подбора', 
      role: 'АО «Аптеки 36.6»', 
      text: 'Сотрудничество с «Мировоззрение» позволило нам существенно сократить Time-to-Hire на массовые и офисные позиции. Системный подход и проактивность консультантов делают их лидерами в своем деле.', 
      logo: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/36,6-Logo.svg',
      scale: 'scale-[1.2]'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!ghostRef.current) return;
      
      const rect = ghostRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      
      let progress = -rect.top / totalHeight;
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
    };

    // Only apply the listener if we are on mobile (optional optimization)
    if (window.innerWidth < 768) {
      window.addEventListener('scroll', handleScroll);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate translation: only used on mobile
  const xTranslation = scrollProgress * (reviews.length * 85); 

  return (
    <section id="testimonials" className="relative scroll-mt-20">
      {/* 
        Mobile: Tall ghost container for sticky scroll
        Desktop: Normal height container
      */}
      <div ref={ghostRef} className="h-auto md:h-auto md:py-32 w-full relative mobile-sticky-container">
        <div className="static md:relative h-auto w-full flex flex-col justify-center overflow-hidden bg-white md:bg-slate-50">
          
          <div className="container mx-auto px-6 mb-12 md:mb-20">
            <div className="max-w-4xl reveal">
              <h2 className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Рекомендации</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold text-brand-dark tracking-tighter italic">
                Голоса <span className="text-slate-400 font-medium">лидеров рынка</span>
              </h3>
            </div>
          </div>

          <div className="relative w-full">
            {/* 
              Mobile: flex-nowrap with transform
              Desktop: md:grid or md:flex-wrap without transform
            */}
            <div 
              ref={scrollRef}
              className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8 md:gap-12 px-6 md:px-6 transition-transform duration-75 ease-out will-change-transform"
              style={{ 
                transform: window.innerWidth < 768 ? `translateX(-${xTranslation}vw)` : 'none',
                flexDirection: window.innerWidth < 768 ? 'row' : undefined
              }}
            >
              {reviews.map((r, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 w-full md:w-[calc(50%-24px)] lg:w-[400px] bg-white p-10 md:p-12 rounded-[3rem] md:rounded-[4rem] border border-slate-100 shadow-xl md:shadow-2xl shadow-slate-200/60 flex flex-col h-auto min-h-[480px] md:min-h-[550px] relative group reveal"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="h-14 md:h-16 mb-8 flex items-center justify-start transition-transform duration-500 group-hover:scale-105">
                    <img 
                      src={r.logo} 
                      alt={r.role} 
                      className={`max-h-full w-auto object-contain ${r.scale}`} 
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-slate-600 italic mb-8 font-semibold leading-relaxed text-lg md:text-xl tracking-tight">
                      "{r.text}"
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100 mt-auto">
                    <p className="font-black text-brand-dark text-base uppercase tracking-widest">{r.name}</p>
                    <p className="text-[10px] text-brand-primary font-black uppercase tracking-[0.25em] mt-2">
                      {r.role}
                    </p>
                  </div>

                  <div className="absolute top-10 right-10 text-6xl font-black text-slate-50 italic select-none -z-0 pointer-events-none group-hover:text-brand-primary/5 transition-colors">
                    0{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrolling hint only on mobile */}
          <div className="container mx-auto px-6 mt-12 block md:hidden">
            <div className="flex items-center gap-4">
               <div className="h-[1px] w-12 bg-brand-primary/20"></div>
               <p className="text-[10px] font-black text-brand-primary/60 uppercase tracking-[0.4em]">
                 Листайте вправо
               </p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 767px) {
          .mobile-sticky-container {
            height: 350vh;
          }
          .mobile-sticky-container > div {
            position: sticky;
            top: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
        #testimonials .transition-transform {
           transition-timing-function: cubic-bezier(0.1, 0, 0.3, 1);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
