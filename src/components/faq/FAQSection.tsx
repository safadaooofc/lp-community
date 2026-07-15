import React, { useState } from 'react';
import { useAdminStore } from '../../services/adminStore';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { faq } = useAdminStore();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-surface-base border-b border-surface-border/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-lp-soft text-lp-light text-[10px] font-semibold mb-2">
            <HelpCircle size={12} />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Confira as principais dúvidas sobre os nossos prazos e formas de pagamento.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-surface-card border-lp-medium shadow-sm'
                    : 'bg-surface-card/65 border-surface-border/60 hover:border-gray-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 focus:outline-none"
                >
                  <span className="font-display font-bold text-white text-sm sm:text-base">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-lp-medium text-white rotate-180'
                        : 'bg-surface-hover text-gray-400'
                    }`}
                  >
                    <ChevronDown size={14} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-surface-border/40">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Box de Suporte */}
        <div className="mt-8 p-5 rounded-xl bg-surface-card border border-surface-border/60 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-left">
            <h4 className="font-bold text-white text-xs sm:text-sm">Ainda com alguma dúvida específica?</h4>
            <p className="text-[10px] text-gray-400 mt-0.5">Nossa equipe de suporte está pronta para te atender ao vivo via Discord.</p>
          </div>
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-lp-medium hover:bg-lp-dark text-white font-bold text-xs transition-colors shrink-0"
          >
            <span>Abrir Ticket no Discord</span>
          </a>
        </div>

      </div>
    </section>
  );
};
