
import React from 'react';

const Metrics: React.FC = () => {
  const approaches = [
    {
      title: "Международная экспертиза",
      desc: "Опыт работы в 15 странах через платформу GrowBRICS. Доступ к международным кандидатам и адаптация под рынки БРИКС.",
      stats: ["50К+ кандидатов", "15 стран", "98% CSI"],
      icon: "fa-globe-americas",
      color: "bg-slate-50"
    },
    {
      title: "Комплексный подход",
      desc: "От стратегии до практической реализации. Полный цикл HR-решений: от подбора до развития команд.",
      stats: ["360° охват", "24/7 поддержка", "∞ решений"],
      icon: "fa-sync-alt",
      color: "bg-slate-100"
    },
    {
      title: "Проверенные методологии",
      desc: "Адаптация лучших мировых практик под российский рынок. Собственные методики оценки и развития.",
      stats: ["SLA гарантия", "18+ лет опыта", "ISO стандарты"],
      icon: "fa-shield-halved",
      color: "bg-white"
    },
    {
      title: "Долгосрочное партнерство",
      desc: "Сопровождение клиентов на всех этапах развития. Мы отвечаем за результат и растем вместе с вами.",
      stats: ["5-6 лет работы", "100% legal", "350+ клиентов"],
      icon: "fa-handshake",
      color: "bg-slate-50"
    }
  ];

  return (
    <section id="approach" className="section-padding bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16 md:mb-24 reveal">
          <h2 className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">Наш подход</h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-brand-dark tracking-tighter italic leading-tight">
            Фундамент вашего <br className="hidden md:block" />
            <span className="text-slate-400 font-medium">масштабирования</span>
          </h3>
        </div>

        {/* 
          Mobile: Sticky stack effect (sticky classes removed on md+)
          Desktop: Standard grid (md:static)
        */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto">
          {approaches.map((item, i) => (
            <div 
              key={i} 
              className={`
                reveal
                sticky md:static top-[100px]
                ${item.color} 
                p-8 md:p-12 
                rounded-[2.5rem] md:rounded-[3.5rem] 
                border border-slate-200/60
                shadow-xl md:shadow-none
                flex flex-col h-[400px] md:h-auto 
                transition-all duration-500
              `}
              style={{ 
                zIndex: i + 1,
                transitionDelay: `${i * 100}ms`
              }}
            >
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center text-brand-primary text-2xl shadow-sm">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div className="text-[40px] md:text-6xl font-black text-brand-primary/10 italic">
                  0{i + 1}
                </div>
              </div>
              
              <div className="flex-grow">
                <h4 className="text-xl md:text-2xl font-bold text-brand-dark mb-4 md:mb-6 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>

              <div className="pt-8 border-t border-slate-200/50 flex flex-wrap gap-4 md:gap-8">
                {item.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-dark">
                      {stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
