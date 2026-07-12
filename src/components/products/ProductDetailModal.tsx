import React, { useState } from 'react';
import { Product } from '../../types';
import { X, Check, ShieldCheck, Clock, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, customValue?: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const isMoneyCalculator = product.type === 'calculator-money';
  const isQtyCalculator = product.type === 'calculator-qty';

  const [moneyMillions, setMoneyMillions] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(1);

  const calculateTotalPrice = () => {
    if (isMoneyCalculator && product.pricePerMillion) {
      return moneyMillions * product.pricePerMillion;
    }
    if (isQtyCalculator && product.pricePerUnit) {
      return quantity * product.pricePerUnit;
    }
    return product.price * quantity;
  };

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleAddAndClose = () => {
    if (isMoneyCalculator) {
      onAddToCart(product, 1, moneyMillions);
    } else {
      onAddToCart(product, quantity);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop Animado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Corpo do Modal Animado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', duration: 0.3 }}
        className="relative bg-surface-card rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-surface-border z-10"
      >
        
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X size={16} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Imagem */}
          <div className="md:col-span-5 relative bg-surface-dark min-h-[200px] md:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/imagens/fotosgta/fotogta.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-lp-medium text-[9px] font-bold mb-2">
                Qualidade LP Community
              </span>
              <p className="text-[10px] text-gray-300">
                Acompanhamento individual e prazos de entrega garantidos por ticket de suporte.
              </p>
            </div>
          </div>

          {/* Dados e Detalhes */}
          <div className="md:col-span-7 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-lp-light">
                  Serviço de Evolução
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-gray-400">
                  <Clock size={12} className="text-lp-light" />
                  {product.deliveryTime}
                </span>
              </div>

              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white leading-tight">
                {product.name}
              </h2>

              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                {product.description}
              </p>

              {/* Calculadora de Dinheiro */}
              {isMoneyCalculator && (
                <div className="mt-4 p-4 rounded-xl bg-surface-hover border border-surface-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-white">
                      Saldo Desejado (GTA$)
                    </label>
                    <span className="font-display font-extrabold text-sm text-lp-light">
                      ${moneyMillions} Milhões
                    </span>
                  </div>

                  <input
                    type="range"
                    min={product.minQty || 10}
                    max={product.maxQty || 1000}
                    step={10}
                    value={moneyMillions}
                    onChange={(e) => setMoneyMillions(Number(e.target.value))}
                    className="w-full accent-lp-medium h-1 bg-gray-700 rounded-lg cursor-pointer"
                  />

                  <div className="flex justify-between text-[9px] text-gray-500 font-semibold mt-1">
                    <span>Mín: $10M</span>
                    <span>$500M</span>
                    <span>Máx: $1.000M</span>
                  </div>
                </div>
              )}

              {/* Calculadora de Quantidade */}
              {isQtyCalculator && (
                <div className="mt-4 p-3 rounded-xl bg-surface-hover border border-surface-border/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">
                    Unidades
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded bg-[#1c2e25] border border-lp-border/30 text-white font-bold text-xs"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm w-4 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-7 h-7 rounded bg-[#1c2e25] border border-lp-border/30 text-white font-bold text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              {/* Características */}
              <div className="mt-4">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Especificações:
                </h4>
                <ul className="space-y-1.5">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-semibold">
                      <div className="w-4 h-4 rounded-full bg-lp-soft text-lp-light flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suporte pós venda */}
              <div className="mt-4 p-3 rounded-xl bg-lp-soft/30 border border-lp-border/20 flex items-start gap-2">
                <ShieldCheck size={16} className="text-lp-light shrink-0 mt-0.5" />
                <div className="text-[10px] text-gray-300 leading-relaxed">
                  <strong className="font-semibold text-lp-light">Pós-venda LP Community:</strong> {product.warranty}.
                </div>
              </div>
            </div>

            {/* Rodapé do Modal */}
            <div className="mt-6 pt-4 border-t border-surface-border/50 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-gray-500 font-bold block uppercase">
                  Valor Total
                </span>
                <span className="font-display font-extrabold text-xl sm:text-2xl text-lp-light">
                  {formatPrice(calculateTotalPrice())}
                </span>
              </div>

              <button
                onClick={handleAddAndClose}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-lp-medium hover:bg-lp-light hover:text-surface-base text-white font-extrabold text-xs shadow-premium transition-all"
              >
                <ShoppingBag size={14} />
                <span>Adicionar</span>
              </button>
            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
};
