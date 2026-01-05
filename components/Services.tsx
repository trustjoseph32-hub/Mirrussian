
import React from 'react';

const services = [
  {
    title: 'Для лидеров рынка',
    subtitle: 'Executive Search',
    desc: 'Точечный хантинг топ-менеджеров и ключевых фигур, способных возглавить трансформацию бизнеса.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    cta: 'Найти лидера',
    large: true
  },
  {
    title: 'Для экспансии',
    subtitle: 'GrowBRICS AI',
    desc: 'Масштабирование бизнеса на рынках БРИКС. Доступ к международным талантам и локальной экспертизе через AI-платформу.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    cta: 'Выйти на новый уровень',
    highlight: true,
    large: true
  },
  {
    title: 'Для Тех-гигантов',
    subtitle: 'IT & Digital',
    desc: 'Сборка распределенных команд разработки и поиск редких специалистов стека 2026 года.',
    icon: 'fa-code',
    cta: 'Собрать команду'
  },
  {
    title: 'Для HR-директоров',
    subtitle: 'HR Strategy',
    desc: 'Глубокий аудит, пересборка процессов найма и внедрение современных методик оценки и вовлечения.',
    icon: 'fa-chess-knight',
    cta: 'Обновить стратегию'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24 reveal">
          <h2 className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">Для кого мы</h2>
          <h3 className="text-5xl md:text-6xl font-extrabold text-brand-dark tracking-tighter italic">Решения для тех, кто <span className="text-slate-400 font-medium">строит будущее</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {services.map((s, i) => (
            s.large ? (
              <div 
                key={i} 
                className={`reveal relative group overflow-hidden rounded-[3.5rem] min-h-[450px] flex flex-col justify-end p-12 transition-all duration-700 hover:shadow-3xl`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="absolute inset-0 z-0">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className={`absolute inset-0 ${s.highlight ? 'bg-brand-dark/80' : 'bg-slate-900/60'} group-hover:bg-brand-dark/40 transition-colors duration-500`}></div>
                </div>
                <div className="relative z-10">
                  <span className="text-brand-primary font-black uppercase tracking-widest text-[9px] mb-2 block">{s.title}</span>
                  <h4 className="text-4xl font-black text-white mb-4 italic tracking-tighter">{s.subtitle}</h4>
                  <p className="text-white/70 mb-10 font-medium max-w-xs text-lg">{s.desc}</p>
                  <a href="#contact" className="inline-block bg-white text-brand-dark px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all duration-300">
                    {s.cta}
                  </a>
                </div>
              </div>
            ) : (
              <div 
                key={i} 
                className="reveal p-12 rounded-[3.5rem] bg-white border border-slate-100 flex flex-col transition-all duration-500 hover:shadow-2xl"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center text-2xl mb-12 shadow-inner">
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <span className="text-brand-primary font-black uppercase tracking-widest text-[9px] mb-2 block">{s.title}</span>
                <h4 className="text-3xl font-bold mb-6 text-brand-dark tracking-tight">{s.subtitle}</h4>
                <p className="text-slate-400 mb-12 flex-grow font-medium leading-relaxed text-lg">{s.desc}</p>
                <a href="#contact" className="w-fit text-brand-primary font-black text-xs uppercase tracking-widest flex items-center gap-3 group">
                  {s.cta} <i className="fas fa-arrow-right transition-transform group-hover:translate-x-2"></i>
                </a>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
