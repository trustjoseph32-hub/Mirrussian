
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate translation: move cards based on scroll progress
  const xTranslation = scrollProgress * (reviews.length * 85); 

  return (
    <section id="testimonials" className="relative scroll-mt-20">
      <div ref={ghostRef} className="h-[350vh] w-full relative">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-white md:bg-slate-50">
          
          <div className="container mx-auto px-6 mb-8 md:mb-16">
            <div className="max-w-4xl reveal">
              <h2 className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Рекомендации</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold text-brand-dark tracking-tighter italic">
                Голоса <span className="text-slate-400 font-medium">лидеров рынка</span>
              </h3>
            </div>
          </div>

          <div className="relative w-full">
            <div 
              ref={scrollRef}
              className="flex gap-8 md:gap-16 px-6 md:px-[10vw] transition-transform duration-75 ease-out will-change-transform"
              style={{ 
                transform: `translateX(-${xTranslation}vw)` 
              }}
            >
              {reviews.map((r, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 w-[85vw] md:w-[500px] lg:w-[600px] bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl shadow-slate-200/60 flex flex-col h-[520px] md:h-[600px] relative group"
                >
                  <div className="h-14 md:h-20 mb-10 flex items-center justify-start transition-transform duration-500 group-hover:scale-105">
                    <img 
                      src={r.logo} 
                      alt={r.role} 
                      className={`max-h-full w-auto object-contain ${r.scale}`} 
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-slate-600 italic mb-10 font-semibold leading-relaxed text-lg md:text-2xl tracking-tight">
                      "{r.text}"
                    </p>
                  </div>

                  <div className="pt-10 border-t border-slate-100 mt-auto">
                    <p className="font-black text-brand-dark text-base uppercase tracking-widest">{r.name}</p>
                    <p className="text-xs text-brand-primary font-black uppercase tracking-[0.25em] mt-3">
                      {r.role}
                    </p>
                  </div>

                  <div className="absolute top-12 right-12 text-7xl font-black text-slate-50 italic select-none -z-0 pointer-events-none group-hover:text-brand-primary/5 transition-colors">
                    0{i + 1}
                  </div>
                </div>
              ))}
              <div className="flex-shrink-0 w-[30vw] h-10"></div>
            </div>
          </div>

          <div className="container mx-auto px-6 mt-12 md:mt-20">
            <div className="flex items-center gap-4">
               <div className="h-[1px] w-12 bg-brand-primary/20"></div>
               <p className="text-[10px] font-black text-brand-primary/60 uppercase tracking-[0.4em]">
                 Листайте, чтобы узнать больше о нашем опыте
               </p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        #testimonials .transition-transform {
           transition-timing-function: cubic-bezier(0.1, 0, 0.3, 1);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
