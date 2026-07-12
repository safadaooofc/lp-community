import React from 'react';
import { CartItem } from '../../types';
import { X, Trash2, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart
}) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.calculatedPrice, 0);

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleCheckoutDiscord = () => {
    if (cartItems.length === 0) return;

    let message = `**NOVO PEDIDO - LP COMMUNITY (GTA V)**\n\n`;
    message += `Olá! Gostaria de finalizar o meu pedido no site da LP Community:\n\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. **${item.product.name}**\n`;
      if (item.customValue) {
        message += `   - Quantidade/Carga: ${item.customValue} Milhões GTA$\n`;
      } else if (item.quantity > 1) {
        message += `   - Unidades: ${item.quantity}x\n`;
      }
      message += `   - Valor: ${formatPrice(item.calculatedPrice)}\n\n`;
    });

    message += `**TOTAL DO PEDIDO: ${formatPrice(totalAmount)}**\n\n`;
    message += `Abri um ticket no Discord para finalizar e realizar o pagamento!`;

    try {
      navigator.clipboard.writeText(message);
    } catch {
      // Fallback
    }
    
    alert('Pedido copiado com sucesso! Abra um ticket no servidor do Discord e cole o seu pedido para finalizarmos.');
    window.open(`https://discord.gg`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop com animação */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6">
        {/* Painel do Carrinho com animação de slide lateral */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
          className="w-screen max-w-sm bg-[#040706] text-white shadow-2xl flex flex-col justify-between border-l border-surface-border"
        >
          
          {/* Cabeçalho */}
          <div>
            <div className="p-4 border-b border-surface-border/60 flex items-center justify-between bg-surface-darkCard">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-lp-soft text-lp-light flex items-center justify-center">
                  <ShoppingBag size={16} />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-white text-base">
                    Seu Carrinho
                  </h3>
                  <p className="text-[10px] text-gray-400">
                    {cartItems.length} {cartItems.length === 1 ? 'serviço' : 'serviços'}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-surface-hover hover:bg-surface-hover/80 text-gray-300 flex items-center justify-center transition-colors"
                aria-label="Fechar"
              >
                <X size={16} />
              </button>
            </div>

            {/* Lista de Itens */}
            <div className="p-4 overflow-y-auto max-h-[calc(100vh-270px)] space-y-3">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-surface-hover text-gray-500 mx-auto flex items-center justify-center mb-3">
                    <ShoppingBag size={20} />
                  </div>
                  <h4 className="font-display font-bold text-white text-sm">
                    Seu carrinho está vazio
                  </h4>
                  <p className="text-[10px] text-gray-500 mt-1 max-w-xs mx-auto">
                    Explore nosso catálogo para adicionar melhorias na sua conta.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 rounded-lg bg-lp-medium text-white font-bold text-xs transition-all hover:bg-lp-dark"
                  >
                    Ver Catálogo
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-xl bg-surface-hover/50 border border-surface-border/50 flex gap-2.5 items-start"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 rounded-lg object-cover shrink-0 bg-surface-dark border border-surface-border/40"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/imagens/fotosgta/fotogta.jpg';
                      }}
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-white text-xs line-clamp-1">
                        {item.product.name}
                      </h5>

                      {item.customValue ? (
                        <span className="text-[10px] text-lp-light font-bold block mt-0.5">
                          Carga: ${item.customValue}M GTA$
                        </span>
                      ) : (
                        <span className="text-[10px] text-gray-400 block mt-0.5">
                          Quantidade: {item.quantity}x
                        </span>
                      )}

                      <div className="mt-1 flex items-center justify-between">
                        <span className="font-display font-extrabold text-white text-xs">
                          {formatPrice(item.calculatedPrice)}
                        </span>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-gray-500 hover:text-red-500 p-1 transition-colors"
                          title="Remover"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Rodapé de Checkout */}
          {cartItems.length > 0 && (
            <div className="p-4 border-t border-surface-border/60 bg-surface-darkCard space-y-3">
              
              {/* Box de Suporte */}
              <div className="p-2.5 rounded-lg bg-lp-soft/80 border border-lp-border/30 flex items-center gap-1.5 text-[10px] text-lp-light font-bold">
                <ShieldCheck size={14} className="shrink-0" />
                <span>Prazo de conclusão: em até 48 horas</span>
              </div>

              {/* Total */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] text-gray-400">
                  <span>Início do Serviço</span>
                  <span className="font-bold text-emerald-400">GARANTIDO</span>
                </div>
                <div className="flex items-baseline justify-between pt-1 border-t border-surface-border/40">
                  <span className="text-xs font-bold text-white">Total do Pedido</span>
                  <span className="font-display font-extrabold text-lg text-white">
                    {formatPrice(totalAmount)}
                  </span>
                </div>
              </div>

              {/* Ações */}
              <div className="space-y-2">
                <button
                  onClick={handleCheckoutDiscord}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-lp-medium hover:bg-lp-dark text-white font-bold text-xs shadow-premium transition-all"
                >
                  <span>Finalizar Pedido pelo Discord</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={onClearCart}
                  className="w-full py-1 text-[10px] font-semibold text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Limpar Carrinho
                </button>
              </div>

            </div>
          )}

        </motion.div>
      </div>
    </div>
  );
};
