
import React from 'react';

const Hero: React.FC = () => {
  const partners = [
    { name: 'Татнефть', url: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/Tatneft.png', scale: 'scale-[1.8] md:scale-[1.65]' },
    { name: 'Альфа-Банк', url: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/alfa-bank-new-logo-png_seeklogo-6387.png', scale: 'scale-[1.8] md:scale-[1.65]' },
    { name: 'ОАК', url: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/united-aircraft-corporation-logo-png_seeklogo-463403.png', scale: 'scale-[2.2] md:scale-[2.0]' },
    { name: 'Московский метрополитен', url: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/mosmetro-horizontal-logo.png', scale: 'scale-[1.1]' },
    { name: 'Аптеки 36.6', url: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/36,6-Logo.svg', scale: 'scale-[1.2]' },
    { name: 'Правительство Москвы', url: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/Coat_of_arms_of_Moscow.svg', scale: 'scale-[1.1]' },
    { name: 'Новый Партнер 1', url: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/e9f078fb-5511-4630-a6cd-03a9543240c9.jpg', scale: 'scale-[1.4]' },
    { name: 'Международный альянс BRICS', url: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/Brics_alliance_logo.png.webp', scale: 'scale-[1.3]' },
    { name: 'Сетевая Компания', url: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/setevaya.jpg', scale: 'scale-[1.9] md:scale-[1.7]' },
    { name: 'Новый Партнер 2', url: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/thumb_897_participants_lid_image_big.png', scale: 'scale-[1.5]' },
    { name: 'Мосжилниипроект', url: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/moszhilnii.png', scale: 'scale-[1.2]' },
    { name: 'Партнер БРИКС', url: 'https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/5v4hehyp3p3v3j8clypjluf8m1mrq4zl.png', scale: 'scale-[1.3]' }
  ];

  const scrollItems = [...partners, ...partners, ...partners];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-0 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-primary/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center mb-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-full mb-10 animate-fade-in">
             <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
             <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
               Кто мы: Экосистема GrowBRICS │ Технологии & Таланты 2026
             </span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-extrabold text-brand-dark leading-[0.95] tracking-tighter mb-10 italic pr-2">
            Нанимайте <span className="text-gradient pr-2">Будущее</span>
          </h1>
          
          <div className="mb-12 md:mb-16">
            <p className="text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Мировоззрение — это ваш проводник в мир глобальных талантов. Мы объединяем классический хедхантинг и AI-технологии платформы GrowBRICS для кратного роста вашего бизнеса.
            </p>
          </div>
        </div>
      </div>

      <div className="relative py-12 bg-slate-50/30 border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 mb-8 text-center">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em] opacity-60">Партнеры и клиенты нашей экосистемы</p>
        </div>
        
        <div className="flex overflow-hidden group relative">
          <div className="flex gap-24 md:gap-40 animate-scroll whitespace-nowrap items-center py-4">
            {scrollItems.map((p, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-default px-4 h-12 md:h-20 w-[140px] md:w-[240px]">
                <img 
                  src={p.url} 
                  alt={p.name} 
                  className={`max-h-full max-w-full object-contain select-none transition-transform duration-500 ${p.scale || 'scale-100'}`}
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;
