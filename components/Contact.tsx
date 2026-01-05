
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Загрузка анализа...');
    setTimeout(() => {
      setStatus('Сигнал принят. Аудит будет отправлен в течение 24 часов.');
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="reveal max-w-6xl mx-auto flex flex-col lg:flex-row rounded-5xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
          <div className="lg:w-2/5 bg-brand-dark p-12 lg:p-20 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-extrabold mb-8 italic">Готовы к <span className="text-brand-primary">трансформации?</span></h2>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl mb-12">
                <p className="text-brand-primary text-xs font-black uppercase tracking-widest mb-2">Наш стандарт:</p>
                <p className="text-white text-lg font-bold">Оставьте заявку, и мы свяжемся с вами в течение 1 часа</p>
              </div>
              <p className="text-slate-400 text-lg mb-12 font-medium">Получите бесплатный аудит вашей HR-системы и персональный план масштабирования.</p>
            </div>
            
            <div className="space-y-6">
               <a href="https://t.me/mirovozzreni" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
                 <div className="w-12 h-12 rounded-2xl bg-[#0088cc]/10 flex items-center justify-center group-hover:bg-[#0088cc] transition-all border border-[#0088cc]/20">
                   <i className="fab fa-telegram-plane text-[#0088cc] group-hover:text-white text-xl"></i>
                 </div>
                 <span className="font-bold text-slate-300 group-hover:text-white transition-colors">@mirovozzreni</span>
               </a>
               <a href="mailto:hello@mirrussian.ru" className="flex items-center gap-6 group cursor-pointer">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary transition-all">
                   <i className="fas fa-paper-plane text-brand-primary group-hover:text-white"></i>
                 </div>
                 <span className="font-bold text-slate-300 group-hover:text-white transition-colors">hello@mirrussian.ru</span>
               </a>
               <a href="tel:+79372977772" className="flex items-center gap-6 group cursor-pointer">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-primary transition-all">
                   <i className="fas fa-phone text-brand-primary group-hover:text-white"></i>
                 </div>
                 <span className="font-bold text-slate-300 group-hover:text-white transition-colors">+7 937 297 77 72</span>
               </a>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-12 lg:p-20 bg-slate-50">
            <h3 className="text-3xl font-extrabold text-brand-dark mb-4">Бесплатный аудит HR-системы за 24 часа</h3>
            <p className="text-slate-500 mb-10 font-medium">Мы проведем экспресс-анализ ваших процессов и пришлем отчет с рекомендациями.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required placeholder="Имя и Фамилия" className="w-full bg-white border border-slate-200 p-5 rounded-2xl outline-none focus:border-brand-primary font-bold text-slate-700" />
                <input required placeholder="Название компании" className="w-full bg-white border border-slate-200 p-5 rounded-2xl outline-none focus:border-brand-primary font-bold text-slate-700" />
              </div>
              <input required type="email" placeholder="Рабочий Email" className="w-full bg-white border border-slate-200 p-5 rounded-2xl outline-none focus:border-brand-primary font-bold text-slate-700" />
              <textarea placeholder="Ваша текущая задача в найме или обучении..." className="w-full bg-white border border-slate-200 p-5 rounded-2xl outline-none focus:border-brand-primary font-bold text-slate-700 min-h-[120px] resize-none"></textarea>
              
              <button className="w-full btn-primary text-white font-black py-6 rounded-2xl uppercase tracking-[0.2em] text-xs shadow-lg shadow-brand-primary/20">
                Заказать аудит (бесплатно)
              </button>
              
              {status && <p className="text-center font-bold text-brand-primary animate-pulse uppercase text-[10px] tracking-widest mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
