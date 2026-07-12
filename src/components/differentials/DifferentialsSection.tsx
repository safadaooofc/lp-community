import React from 'react';
import { Clock, ShieldCheck, Headphones, CreditCard, Users, CheckCircle2, Zap } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const differentials = [
    {
      icon: Clock,
      title: 'Entrega em até 48 Horas',
      description: 'Todos os pedidos são processados por ordem de fila e entregues no prazo de até 48 horas após a confirmação do pagamento.',
      badge: 'Prazo Garantido'
    },
    {
      icon: CreditCard,
      title: 'Pagamento 100% Seguro',
      description: 'Aceitamos Pix com aprovação imediata ou cartão de crédito parcelado em ambiente de segurança de dados criptografado.',
      badge: 'Aprovação Rápida'
    },
    {
      icon: Headphones,
      title: 'Suporte Dedicado via Discord',
      description: 'Atendimento e acompanhamento individual através de tickets de suporte no nosso servidor do Discord.',
      badge: 'Atendimento VIP'
    },
    {
      icon: ShieldCheck,
      title: 'Garantia de 30 Dias',
      description: 'Oferecemos total garantia de suporte pós-venda para acompanhar o progresso e tirar qualquer dúvida.',
      badge: 'Suporte Garantido'
    },
    {
      icon: Users,
      title: '+15.000 Pedidos Concluídos',
      description: 'Uma comunidade sólida com milhares de clientes satisfeitos em todo o Brasil. Confiança e transparência.',
      badge: 'Comunidade Ativa'
    }
  ];

  return (
    <section id="diferenciais" className="py-16 bg-surface-base border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-lp-soft text-lp-light text-[10px] font-semibold mb-2">
            <Zap size={12} />
            <span>Por que escolher a LP Community?</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            A Estrutura Mais Segura do Mercado para GTA V
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Oferecemos uma infraestrutura profissional e institucional com garantias de funcionamento e suporte técnico especializado.
          </p>
        </div>

        {/* Grade de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((diff, idx) => {
            const IconComponent = diff.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-surface-card border border-surface-border/60 hover:border-lp-medium/40 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-hover text-lp-light flex items-center justify-center shadow-sm group-hover:bg-lp-medium group-hover:text-white transition-colors">
                      <IconComponent size={20} />
                    </div>
                    <span className="px-2 py-0.5 rounded bg-lp-soft text-lp-light text-[10px] font-bold">
                      {diff.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-white text-base group-hover:text-lp-light transition-colors">
                    {diff.title}
                  </h3>

                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-surface-border/40 flex items-center gap-1.5 text-[10px] font-semibold text-gray-500">
                  <CheckCircle2 size={13} className="text-lp-light" />
                  <span>Padrão de Qualidade LP Community</span>
                </div>
              </div>
            );
          })}

          {/* Card CTA Institucional */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-lp-dark to-surface-card text-white shadow-premium flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded bg-white/10 text-white text-[10px] font-bold">
                Pronto para Evoluir?
              </span>
              <h3 className="font-display font-extrabold text-xl mt-3">
                Suporte e Acompanhamento
              </h3>
              <p className="text-xs text-gray-200 mt-2 leading-relaxed">
                Nossa equipe está online no Discord pronta para iniciar a configuração da sua conta ou tirar dúvidas.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href="#catalogo-produtos"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-white text-lp-dark font-bold text-xs hover:bg-gray-100 transition-colors shadow-sm"
              >
                <span>Ver Catálogo</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
