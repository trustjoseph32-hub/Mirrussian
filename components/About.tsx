
import React from 'react';

const About: React.FC = () => {
  const directions = [
    {
      title: "Подбор кадров",
      text: "Executive Search, IT-рекрутинг и массовый подбор с использованием AI-алгоритмов.",
    },
    {
      title: "Обучение и тренинги",
      text: "Развитие лидерства, навыков продаж и soft-skills для команд любого уровня.",
    },
    {
      title: "HR-консалтинг",
      text: "Аудит процессов, построение систем мотивации и оптимизация оргструктуры.",
    },
    {
      title: "Бренд работодателя",
      text: "Формирование EVP, работа с репутацией и привлечение талантов через ценности.",
    },
    {
      title: "Оценка персонала",
      text: "Ассессмент-центры, 360 градусов и профессиональное тестирование компетенций.",
    },
    {
      title: "Коучинг",
      text: "Индивидуальное сопровождение топ-менеджеров и стратегическая поддержка бизнеса.",
    }
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="pt-16 pb-12 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Info Block */}
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
            <div className="relative reveal">
              <div className="aspect-[4/5] rounded-[3rem] md:rounded-[5xl] overflow-hidden shadow-2xl relative z-10 bg-slate-100">
                <img 
                  src="https://cicsvdxtasskrbzbqfod.supabase.co/storage/v1/object/public/Temp_Temp/Gemini_Generated_Image_7eu0bi7eu0bi7eu0.png" 
                  alt="HR Экосистема Мировоззрение" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
            
            <div className="flex flex-col">
              <div className="reveal">
                <h2 className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">О компании</h2>
                <h3 className="text-4xl md:text-6xl font-extrabold text-brand-dark leading-[1.1] mb-10 italic tracking-tighter">
                  Больше, чем <span className="text-gradient">рекрутинг</span>.<br />
                  <span className="text-slate-400 font-medium">Ваш стратегический HR-партнер.</span>
                </h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                  Мировоззрение объединяет классическую экспертизу с технологиями 2026 года. Мы не просто ищем людей — мы строим экосистемы, в которых таланты раскрывают потенциал бизнеса.
                </p>
              </div>
              
              <div className="reveal delay-300">
                <button onClick={scrollToContact} className="inline-flex items-center gap-4 text-brand-dark font-black uppercase tracking-widest text-xs group outline-none">
                  <span className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                  Обсудить ваш кейс
                </button>
              </div>
            </div>
          </div>

          {/* Strategic Directions - Elevated Typographic List */}
          <div className="reveal mb-32">
            <div className="mb-12 px-2">
               <h4 className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">Направления деятельности</h4>
               <p className="text-3xl md:text-5xl font-extrabold text-brand-dark italic tracking-tight leading-tight">Комплексный подход <br className="hidden md:block" /> <span className="text-slate-400">к человеческому капиталу</span></p>
            </div>
            
            <div className="bg-slate-50/80 rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 border border-slate-100 shadow-sm max-w-6xl">
              <div className="flex flex-col">
                {directions.map((dir, i) => (
                  <div 
                    key={i} 
                    className={`reveal py-10 md:py-14 group transition-all duration-500 hover:translate-x-2 ${i !== directions.length - 1 ? 'border-b border-slate-200/60' : ''}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                      {/* Number and Title Area - No Icons */}
                      <div className="flex items-center gap-8 min-w-[320px]">
                        <span className="text-xs font-black text-brand-primary/40 uppercase tracking-[0.3em] italic">0{i + 1}</span>
                        <h5 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tighter group-hover:text-brand-primary transition-colors">
                          {dir.title}
                        </h5>
                      </div>
                      
                      {/* Description Area */}
                      <div className="flex-grow">
                        <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                          {dir.text}
                        </p>
                      </div>

                      {/* Desktop Arrow */}
                      <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-20px] group-hover:translate-x-0">
                        <i className="fas fa-chevron-right text-brand-primary"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Presentation Download -> Leads to Contact */}
          <div className="reveal">
            <div className="bg-brand-primary rounded-[3.5rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10 lg:w-2/3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-6 border border-white/10">
                  <i className="fas fa-file-pdf text-white text-xs"></i>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">Full Ecosystem Presentation 2026</span>
                </div>
                <h4 className="text-3xl md:text-5xl font-black text-white mb-6 italic tracking-tighter leading-tight">
                  Пакет решений <span className="text-indigo-200">Тренинги & Консалтинг</span>
                </h4>
                <p className="text-white/70 text-lg font-medium max-w-2xl leading-relaxed">
                  Оставьте заявку на бесплатный аудит, и мы вышлем вам персональную презентацию решений, адаптированных под ваши бизнес-задачи.
                </p>
              </div>
              <div className="relative z-10 lg:w-1/3 flex justify-center lg:justify-end">
                <button onClick={scrollToContact} className="group flex flex-col items-center gap-4 outline-none">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center text-brand-primary text-3xl md:text-4xl shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <i className="fas fa-arrow-down"></i>
                  </div>
                  <span className="text-white font-black uppercase text-[10px] tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Получить презентацию</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
