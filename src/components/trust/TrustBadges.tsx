import React from 'react';
import { Clock, Lock, ShieldCheck, Users, Headphones } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Clock,
      title: 'Prazo Garantido',
      description: 'Todos os serviços são iniciados e finalizados em até 48 horas após a confirmação.'
    },
    {
      icon: Lock,
      title: 'Pagamento Seguro',
      description: 'Pix com aprovação imediata ou cartão de crédito em ambiente criptografado.'
    },
    {
      icon: ShieldCheck,
      title: 'Garantia de 30 Dias',
      description: 'Suporte pós-venda completo para qualquer dúvida ou ajuste necessário na sua conta.'
    },
    {
      icon: Headphones,
      title: 'Suporte VIP via Discord',
      description: 'Técnicos dedicados disponíveis para tirar dúvidas e realizar os procedimentos.'
    },
    {
      icon: Users,
      title: 'Comunidade Sólida',
      description: 'Mais de 15.000 jogadores ativos que confiam no nosso padrão de qualidade.'
    }
  ];

  return (
    <section id="seguranca" className="py-8 bg-surface-darkCard border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {badges.map((badge, index) => {
            const IconComp = badge.icon;
            return (
              <div
                key={index}
                className="p-4 rounded-xl bg-surface-card/60 border border-surface-border/50 hover:border-lp-medium/30 transition-all text-center sm:text-left"
              >
                <div className="w-9 h-9 rounded-lg bg-lp-soft text-lp-light flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <IconComp size={18} />
                </div>
                <h3 className="font-display font-bold text-white text-xs mb-1">
                  {badge.title}
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
