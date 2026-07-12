import React from 'react';
import { Product } from '../../types';
import { ShoppingBag, Eye, Clock, Sparkles, Flame, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity?: number, customValue?: number) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewDetails
}) => {
  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const isCalculator = product.type === 'calculator-money' || product.type === 'calculator-qty';
  const isPromo = product.category === 'promocoes' || !!product.oldPrice;

  return (
    <div className={`group rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
      isPromo 
        ? 'bg-[#0c1912] border-lp-light/50 hover:border-lp-light shadow-emerald-950/20' 
        : 'bg-[#090f0c] border-surface-border/80 hover:border-lp-medium/50'
    }`}>
      
      {/* Selo Exclusivo de Promoção no Topo Direito */}
      {isPromo && (
        <div className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-md bg-lp-light text-surface-base text-[9px] font-extrabold tracking-wider uppercase flex items-center gap-1 shadow-md animate-pulse">
          <Flame size={10} />
          <span>Oferta Especial</span>
        </div>
      )}

      {/* Imagem */}
      <div 
        onClick={() => onViewDetails(product)}
        className="relative h-44 bg-[#050807] overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/imagens/fotosgta/fotogta.jpg';
          }}
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Badge Popular / Destaque */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-lp-dark/85 text-white text-[9px] font-bold tracking-wide shadow-sm flex items-center gap-1">
            <Sparkles size={9} />
            <span>{product.badge}</span>
          </div>
        )}

        {/* Prazo de Entrega */}
        <div className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/75 text-white text-[10px] font-bold">
          <Clock size={10} className="text-lp-light" />
          <span>{product.deliveryTime}</span>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-lp-light">
              {product.category === 'up-de-conta'
                ? 'Serviço de Up'
                : product.category === 'dinheiro'
                ? 'Dinheiro GTA$'
                : product.category === 'itens'
                ? 'Item Modded'
                : product.category === 'servicos'
                ? 'Serviço de Conta'
                : 'Promoção Especial'}
            </span>
          </div>

          <h3
            onClick={() => onViewDetails(product)}
            className="font-display font-extrabold text-white text-base sm:text-lg hover:text-lp-light transition-colors cursor-pointer leading-tight line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-[11px] text-gray-400 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Lista curta de características no card para justificar o valor */}
          <ul className="mt-3 space-y-1">
            {product.features.slice(0, 2).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-1 text-[10px] text-gray-300">
                <Check size={10} className="text-lp-light shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Preço de Alto Contraste & Botões */}
        <div className="mt-4 pt-3 border-t border-surface-border/40">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-[9px] text-gray-500 font-bold uppercase block tracking-wider">
                {isCalculator ? 'Ajustável' : 'Valor Total'}
              </span>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                {/* Preço Principal com tamanho grande e cor vibrante verde claro */}
                <span className="font-display font-extrabold text-lp-light text-2xl sm:text-3xl tracking-tight leading-none drop-shadow-sm">
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-[11px] text-gray-500 font-medium line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
              </div>
            </div>

            {product.oldPrice && (
              <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-900 animate-pulse">
                {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
              </span>
            )}
          </div>

          {/* Botões do Card */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-hover hover:bg-surface-hover/80 text-white font-bold text-xs border border-surface-border/50 transition-colors"
            >
              <Eye size={12} />
              <span>Ver Detalhes</span>
            </button>

            <button
              onClick={() => {
                if (isCalculator) {
                  onViewDetails(product);
                } else {
                  onAddToCart(product, 1);
                }
              }}
              className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-lp-medium hover:bg-lp-light hover:text-surface-base text-white font-extrabold text-xs shadow-sm transition-all"
            >
              <ShoppingBag size={12} />
              <span>{isCalculator ? 'Ajustar' : 'Comprar'}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
