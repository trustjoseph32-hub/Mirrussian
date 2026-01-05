
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Бриф & Анализ",
    desc: "Погружаемся в бизнес-задачи, культуру и требования. Формируем идеальный портрет кандидата."
  },
  {
    number: "02",
    title: "Поиск & Маппинг",
    desc: "Анализируем рынок. Используем GrowBRICS AI и внутреннюю базу для охвата 100% подходящих талантов."
  },
  {
    number: "03",
    title: "Deep Interview",
    desc: "Многоуровневое интервью с оценкой компетенций, мотивации и психологических триггеров."
  },
  {
    number: "04",
    title: "Финалисты",
    desc: "Представляем Short-list лучших из лучших с детальными отчетами и нашими рекомендациями."
  },
  {
    number: "05",
    title: "Оффер & Адаптация",
    desc: "Сопровождаем на этапе переговоров и следим за интеграцией сотрудника в вашу команду."
  }
];

const Workflow: React.FC = () => {
  return (
    <section className="section-padding bg-brand-dark text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 reveal">
          <h2 className="text-brand-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6">Методология</h2>
          <h3 className="text-5xl md:text-6xl font-extrabold italic tracking-tighter">Как мы <span className="text-slate-500">работаем</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="reveal relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-5xl font-black text-brand-primary/20 mb-8 group-hover:text-brand-primary/40 transition-colors italic">
                {step.number}
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-tight">{step.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>
              
              {/* Connector for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/10 z-10"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[3.5rem] bg-brand-primary/10 border border-brand-primary/20 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
          <div className="max-w-xl">
            <h4 className="text-2xl font-bold mb-2">Нужен индивидуальный подход?</h4>
            <p className="text-slate-400 font-medium">Мы адаптируем воронку под специфику вашего бизнеса и сложность роли.</p>
          </div>
          <a href="#contact" className="btn-primary text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest whitespace-nowrap">
            Заказать консультацию
          </a>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
