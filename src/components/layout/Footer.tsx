import React from 'react';
import { ShieldCheck, MessageCircle, ExternalLink, ArrowUpRight, Lock, Award, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-darkCard text-gray-300 border-t border-gray-800/80">
      {/* Faixa de Segurança / Garantias Institucionais */}
      <div className="border-b border-gray-800/60 py-8 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-lp-dark/30 border border-lp-dark/50 flex items-center justify-center text-lp-light shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Garantia Integral Antiban</h4>
                <p className="text-xs text-gray-400 mt-0.5">30 dias de cobertura total ou reposição sem custo em sua conta.</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-lp-dark/30 border border-lp-dark/50 flex items-center justify-center text-lp-light shrink-0">
                <Lock size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Criptografia e Sigilo</h4>
                <p className="text-xs text-gray-400 mt-0.5">Ambiente seguro com proteção de dados e pagamentos verificados.</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-lp-dark/30 border border-lp-dark/50 flex items-center justify-center text-lp-light shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Entrega Expressa VIP</h4>
                <p className="text-xs text-gray-400 mt-0.5">Procedimento iniciado em até 15 minutos pelo nosso suporte humanizado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal do Rodapé */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Coluna 1 e 2: Sobre a Empresa */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lp-dark to-lp-medium flex items-center justify-center">
                <span className="text-white font-display font-extrabold text-lg">LP</span>
              </div>
              <span className="font-display font-bold text-white text-xl tracking-tight">
                LP Community
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Empresa consolidada no mercado de modificações, contas e injeção de saldo para GTA V. Nossa missão é proporcionar progressão rápida, segura e profissional com atendimento humanizado em tempo real.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-lp-dark/20 border border-lp-dark/40 text-xs text-lp-light font-medium">
                <CheckCircle2 size={14} /> +15.000 Pedidos Entregues
              </span>
            </div>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Navegação</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#produtos" className="text-gray-400 hover:text-white transition-colors">
                  Catálogo de Produtos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre a LP Community
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-400 hover:text-white transition-colors">
                  Diferenciais & Segurança
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="text-gray-400 hover:text-white transition-colors">
                  Depoimentos Verificados
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Categorias */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Especialidades</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#produtos" className="text-gray-400 hover:text-white transition-colors">
                  Módulos de Up (Eco a Diamante)
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-400 hover:text-white transition-colors">
                  Injeção de Capital Ativo (GTA$)
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-400 hover:text-white transition-colors">
                  Contas GTA V Prontas
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-400 hover:text-white transition-colors">
                  Veículos & Trajes Modded
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-400 hover:text-white transition-colors">
                  Unlock All & Bypass Estendido
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Atendimento & Comunidade */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Comunidade</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group px-3.5 py-2.5 rounded-xl bg-gray-900/80 hover:bg-lp-dark/30 border border-gray-800 hover:border-lp-dark/50 transition-all"
                >
                  <span className="font-medium text-gray-200 group-hover:text-white">Servidor Discord</span>
                  <ArrowUpRight size={14} className="text-gray-500 group-hover:text-lp-light" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group px-3.5 py-2.5 rounded-xl bg-gray-900/80 hover:bg-lp-dark/30 border border-gray-800 hover:border-lp-dark/50 transition-all"
                >
                  <span className="font-medium text-gray-200 group-hover:text-white">Servidor Discord</span>
                  <ArrowUpRight size={14} className="text-gray-500 group-hover:text-lp-light" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group px-3.5 py-2.5 rounded-xl bg-gray-900/80 hover:bg-lp-dark/30 border border-gray-800 hover:border-lp-dark/50 transition-all"
                >
                  <span className="font-medium text-gray-200 group-hover:text-white">Suporte & Tickets VIP</span>
                  <ArrowUpRight size={14} className="text-gray-500 group-hover:text-lp-light" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal e Direitos */}
        <div className="mt-12 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} LP Community &middot; Todos os direitos reservados. Não possui afiliação direta com a Rockstar Games.
          </p>
          <div className="flex items-center gap-6">
            <a href="#termos" className="hover:text-gray-300 transition-colors">Termos de Serviço & SLA</a>
            <a href="#politica" className="hover:text-gray-300 transition-colors">Política de Reembolso</a>
            <a href="#seguranca" className="hover:text-gray-300 transition-colors">Segurança & Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
