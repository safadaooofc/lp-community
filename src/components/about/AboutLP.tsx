import React from 'react';
import { ShieldCheck, Zap, Award, CheckCircle } from 'lucide-react';

export const AboutLP: React.FC = () => {
  return (
    <section id="sobre" className="py-16 bg-surface-darkCard border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Texto Sobre a LP Community */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-lp-soft text-lp-light text-[10px] font-semibold">
              <Award size={12} />
              <span>Sobre a LP Community</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              Excelência Técnica e Transparência no GTA V
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              A <strong className="text-white font-semibold">LP Community</strong> nasceu com o propósito de oferecer serviços estáveis de progresso, saldo e conquistas para a comunidade de GTA V. Contamos com servidores dedicados e atendimento especializado para garantir um padrão profissional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-card border border-surface-border">
                <div className="w-8 h-8 rounded-lg bg-lp-soft text-lp-light flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">Progresso Garantido</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Evolução direta da sua conta com suporte pós-venda.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-card border border-surface-border">
                <div className="w-8 h-8 rounded-lg bg-lp-soft text-lp-light flex items-center justify-center shrink-0">
                  <Zap size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">Prazos Claros</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Todas as entregas são concluídas no prazo de até 48 horas.</p>
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-gray-300 font-medium">
              <li className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-lp-light shrink-0" />
                <span>Mais de 4 anos de mercado no GTA V</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-lp-light shrink-0" />
                <span>Suporte via Discord dedicado</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-lp-light shrink-0" />
                <span>Garantia de 30 dias com reposição</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-lp-light shrink-0" />
                <span>Privacidade e sigilo absoluto</span>
              </li>
            </ul>
          </div>

          {/* Card Visual de Destaque */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-lp-dark to-surface-card p-6 sm:p-8 text-white shadow-premium">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-lp-light">
                    Dados Operacionais
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block font-display font-extrabold text-2xl text-white">
                      99.8%
                    </span>
                    <span className="text-[10px] text-gray-300 mt-1 block">
                      Taxa de satisfação comprovada
                    </span>
                  </div>

                  <div>
                    <span className="block font-display font-extrabold text-2xl text-white">
                      48h
                    </span>
                    <span className="text-[10px] text-gray-300 mt-1 block">
                      Prazo máximo de conclusão de conta
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-[11px] text-gray-300 leading-relaxed italic">
                    &ldquo;Nossa filosofia de trabalho é entregar exatamente o que o jogador procura com transparência e clareza no atendimento.&rdquo;
                  </p>
                  <span className="block mt-2 font-semibold text-xs text-white">
                    Equipe de Operações &mdash; LP Community
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
