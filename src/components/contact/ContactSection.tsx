import React from 'react';
import { Mail, ExternalLink, Headphones, Sparkles, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const contactChannels = [
    {
      title: 'Comunidade no Discord',
      description: 'Junte-se ao nosso servidor para ver milhares de feedbacks reais de clientes e promoções exclusivas.',
      actionText: 'Entrar no Servidor',
      link: 'https://discord.gg',
      color: 'bg-indigo-600 hover:bg-indigo-700',
      tag: 'Comunidade Oficial',
      icon: MessageSquare
    },
    {
      title: 'Suporte & Tickets VIP',
      description: 'Abra um ticket de suporte privado com nossos atendentes no Discord para tirar dúvidas ou finalizar pedidos.',
      actionText: 'Abrir Ticket no Discord',
      link: 'https://discord.gg',
      color: 'bg-lp-medium hover:bg-lp-dark',
      tag: 'Atendimento Rápido',
      icon: Headphones
    },
    {
      title: 'Feedbacks & Entregas',
      description: 'Canal dedicado no nosso Discord mostrando prints e avaliações de pedidos entregues todos os dias.',
      actionText: 'Ver Feedbacks',
      link: 'https://discord.gg',
      color: 'bg-surface-hover hover:bg-surface-border text-white',
      tag: 'Transparência',
      icon: ExternalLink
    }
  ];

  return (
    <section id="contato" className="py-16 bg-surface-base border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-lp-soft text-lp-light text-[10px] font-semibold mb-2">
            <Headphones size={12} />
            <span>Fale Conosco</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Canais de Atendimento LP Community
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Escolha o seu canal preferido. Nossa equipe de suporte está online no Discord para ajudar.
          </p>
        </div>

        {/* Grade de Canais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactChannels.map((channel, idx) => {
            const IconComp = channel.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-surface-card border border-surface-border/65 hover:border-lp-medium/40 shadow-sm hover:shadow-premium transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 rounded bg-surface-hover text-gray-300 text-[10px] font-bold uppercase">
                      {channel.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-surface-hover text-lp-light flex items-center justify-center">
                      <IconComp size={16} />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-white text-base">
                    {channel.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-1.5 leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border/40">
                  <a
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-white font-bold text-xs shadow-sm transition-all ${channel.color}`}
                  >
                    <span>{channel.actionText}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
