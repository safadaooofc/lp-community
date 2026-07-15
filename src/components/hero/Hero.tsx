import React, { useState, useEffect } from 'react';
import { useAdminStore } from '../../services/adminStore';
import { ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2, Clock } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onViewProducts: () => void;
}

const backgroundSlides = [
  '/imagens/fotosgta/fotogta.jpg',
  '/imagens/fotosgta/fotocidadegta.jpg',
  '/imagens/fotosgta/fotopalcaviweoodgta.jpg'
];

export const Hero: React.FC<HeroProps> = ({ onShopNow, onViewProducts }) => {
  const { config } = useAdminStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-20 pb-12 bg-surface-dark">
      {/* Background Slideshow com Efeito Parallax */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        {backgroundSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30 scale-102' : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url('${slide}')`,
              transition: 'opacity 1.5s ease-in-out, transform 8s ease-out'
            }}
          />
        ))}
        {/* Overlay em Gradiente Escuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-surface-darkCard/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-lp-dark/20 via-transparent to-transparent" />
      </div>

      {/* Conteúdo Central Compactado */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
        
        {/* Selo de Confiança */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-[10px] font-semibold mb-6 shadow-sm">
          <ShieldCheck size={13} className="text-lp-light" />
          <span>{config.hero.badge}</span>
        </div>

        {/* Título Forte e Menor */}
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
          Evolua sua conta no <span className="text-transparent bg-clip-text bg-gradient-to-r from-lp-light via-emerald-400 to-white">GTA V</span> com Segurança e Prestígio
        </h1>

        {/* Subtítulo Otimizado */}
        <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-normal leading-relaxed">
          {config.hero.subtitle}
        </p>

        {/* Botões Menores */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onShopNow}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-lp-dark to-lp-medium hover:from-lp-medium hover:to-lp-dark text-white font-bold text-sm shadow-premium transition-all transform hover:-translate-y-0.5"
          >
            <span>{config.hero.primaryButtonText}</span>
            <ArrowRight size={15} />
          </button>

          <button
            onClick={onViewProducts}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm backdrop-blur-md border border-white/10 transition-all"
          >
            <span>{config.hero.secondaryButtonText}</span>
          </button>
        </div>

        {/* Indicadores de Segurança / Entrega */}
        <div className="mt-10 pt-6 border-t border-white/5 grid grid-cols-3 gap-4 text-center max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <Clock size={16} className="text-lp-light mb-1" />
            <p className="text-xs font-bold text-white">Até 48 Horas</p>
            <p className="text-[10px] text-gray-400">Prazo de Entrega</p>
          </div>

          <div className="flex flex-col items-center">
            <CheckCircle2 size={16} className="text-lp-light mb-1" />
            <p className="text-xs font-bold text-white">+15.000 Pedidos</p>
            <p className="text-[10px] text-gray-400">Entregues</p>
          </div>

          <div className="flex flex-col items-center">
            <Sparkles size={16} className="text-lp-light mb-1" />
            <p className="text-xs font-bold text-white">Suporte Dedicado</p>
            <p className="text-[10px] text-gray-400">Atendimento Discord</p>
          </div>
        </div>

      </div>
    </section>
  );
};
