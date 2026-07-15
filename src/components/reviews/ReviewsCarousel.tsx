import React, { useState } from 'react';
import { useAdminStore } from '../../services/adminStore';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ReviewsCarousel: React.FC = () => {
  const { reviews } = useAdminStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [platformFilter, setPlatformFilter] = useState<'all' | 'PC' | 'PS5' | 'Xbox'>('all');

  const filteredReviews = reviews.filter(
    rev => platformFilter === 'all' || rev.platform === platformFilter
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  return (
    <section id="avaliacoes" className="py-16 bg-surface-darkCard border-b border-surface-border/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-lp-soft text-lp-light text-[10px] font-semibold mb-2">
              <ShieldCheck size={12} />
              <span>Avaliações 100% Verificadas</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Feedback real de jogadores que evoluíram suas contas de GTA V conosco.
            </p>
          </div>

          {/* Filtro por Plataforma */}
          <div className="flex items-center gap-1 bg-surface-hover p-1 rounded-xl border border-surface-border/50 self-start md:self-auto">
            <button
              onClick={() => { setPlatformFilter('all'); setCurrentIndex(0); }}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                platformFilter === 'all'
                  ? 'bg-lp-medium text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Todos ({reviews.length})
            </button>
            <button
              onClick={() => { setPlatformFilter('PC'); setCurrentIndex(0); }}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                platformFilter === 'PC'
                  ? 'bg-lp-medium text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              PC
            </button>
            <button
              onClick={() => { setPlatformFilter('PS5'); setCurrentIndex(0); }}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                platformFilter === 'PS5'
                  ? 'bg-lp-medium text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              PS5
            </button>
            <button
              onClick={() => { setPlatformFilter('Xbox'); setCurrentIndex(0); }}
              className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                platformFilter === 'Xbox'
                  ? 'bg-lp-medium text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Xbox
            </button>
          </div>
        </div>

        {/* Carrossel de Depoimentos */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filteredReviews.map((rev, index) => {
              const isHeroCard = index === currentIndex % filteredReviews.length;
              return (
                <div
                  key={rev.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isHeroCard
                      ? 'bg-surface-card border-lp-medium shadow-premium scale-[1.01]'
                      : 'bg-surface-card/60 border-surface-border/50 hover:border-lp-medium/20 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Estrelas */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <span className="px-2 py-0.5 rounded bg-surface-hover text-[10px] font-bold text-gray-300">
                        {rev.platform}
                      </span>
                    </div>

                    {/* Comentário */}
                    <p className="text-xs text-gray-300 leading-relaxed italic">
                      &ldquo;{rev.comment.replace('Módulo', 'Pacote')}&rdquo;
                    </p>
                  </div>

                  {/* Autor e Produto Comprado */}
                  <div className="mt-4 pt-3 border-t border-surface-border/40">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-white text-xs flex items-center gap-1">
                          <span>{rev.author}</span>
                          <CheckCircle2 size={12} className="text-lp-light" />
                        </h4>
                        <span className="text-[10px] text-gray-400 block mt-0.5">
                          Comprado: <strong className="text-gray-300">{rev.productBought}</strong>
                        </span>
                      </div>
                      <span className="text-[10px] text-gray-500">
                        {rev.date}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navegação do Carrossel */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-gray-400">
                Média geral:
              </span>
              <div className="flex items-center gap-0.5 text-amber-500 font-extrabold text-xs">
                <Star size={14} fill="currentColor" />
                <span>5.0 / 5.0</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-xl bg-surface-card border border-surface-border/80 hover:border-lp-medium text-gray-300 flex items-center justify-center shadow-sm transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-xl bg-surface-card border border-surface-border/80 hover:border-lp-medium text-gray-300 flex items-center justify-center shadow-sm transition-all"
                aria-label="Próximo"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
