import React, { useState } from 'react';
import { ShoppingBag, Search, ShieldCheck, Menu, X, LogIn, LogOut, Chrome } from 'lucide-react';
import { CategoryId } from '../../types';

interface UserSession {
  name: string;
  provider: 'discord' | 'google';
}

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectCategory: (category: CategoryId | 'all') => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  user: UserSession | null;
  onLogin: (provider: 'discord' | 'google') => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
  onSelectCategory,
  theme,
  onToggleTheme,
  user,
  onLogin,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleNavClick = (sectionId: string, category?: CategoryId | 'all') => {
    setMobileMenuOpen(false);
    if (category) {
      onSelectCategory(category);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 border-b border-surface-border bg-surface-darkCard/90 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Logo da Empresa (logo_cliente.png) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <img
              src="/logo_cliente.png"
              alt="LP Community Logo"
              className="w-9 h-9 rounded-full border border-lp-medium/40 object-cover transform group-hover:scale-105 transition-transform"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/imagens/fotosgta/gtalogo.jpg';
              }}
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-white text-base tracking-tight leading-none group-hover:text-lp-light transition-colors">
                LP Community
              </span>
              <span className="text-[9px] text-gray-400 font-semibold mt-0.5 uppercase tracking-wider">
                Serviços de GTA V
              </span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('produtos', 'all')}
              className="text-xs font-bold text-gray-300 hover:text-white transition-colors"
            >
              Catálogo
            </button>
            <button
              onClick={() => handleNavClick('produtos', 'up-de-conta')}
              className="text-xs font-bold text-gray-300 hover:text-white transition-colors"
            >
              Serviços de Up
            </button>
            <button
              onClick={() => handleNavClick('produtos', 'dinheiro')}
              className="text-xs font-bold text-gray-300 hover:text-white transition-colors"
            >
              Dinheiro GTA$
            </button>
            <button
              onClick={() => handleNavClick('diferenciais')}
              className="text-xs font-bold text-gray-300 hover:text-white transition-colors"
            >
              Diferenciais
            </button>
            <button
              onClick={() => handleNavClick('avaliacoes')}
              className="text-xs font-bold text-gray-300 hover:text-white transition-colors"
            >
              Avaliações
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-xs font-bold text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Ações */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Barra de busca */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-surface-hover border border-surface-border rounded-lg px-2 py-1 w-32 sm:w-44 transition-all">
                  <Search size={13} className="text-gray-400 mr-1.5 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Buscar..."
                    autoFocus
                    className="w-full bg-transparent text-xs text-white placeholder-gray-500 focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      onSearchChange('');
                      setSearchOpen(false);
                    }}
                    className="text-gray-400 hover:text-gray-200 ml-0.5"
                  >
                    <X size={11} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-1.5 text-gray-300 hover:text-white hover:bg-surface-hover rounded-lg transition-colors"
                  title="Buscar produtos"
                >
                  <Search size={15} />
                </button>
              )}
            </div>

            {/* Login Panel */}
            {user ? (
              <div className="flex items-center gap-2 bg-surface-hover py-1 px-2.5 rounded-lg border border-surface-border">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white uppercase ${
                  user.provider === 'discord' ? 'bg-indigo-600' : 'bg-red-500'
                }`}>
                  {user.name.charAt(0)}
                </div>
                <span className="text-[10px] font-bold text-white max-w-[60px] truncate hidden sm:inline">
                  {user.name}
                </span>
                <button
                  onClick={onLogout}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                  title="Sair da Conta"
                >
                  <LogOut size={12} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="inline-flex items-center gap-1 bg-surface-hover hover:bg-surface-hover/80 text-white border border-surface-border px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all"
              >
                <LogIn size={13} />
                <span className="hidden sm:inline">Entrar</span>
              </button>
            )}

            {/* Botão do Carrinho */}
            <button
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-1.5 bg-lp-medium hover:bg-lp-dark text-white px-2.5 py-1.5 rounded-lg font-bold text-xs shadow-sm transition-all"
              aria-label="Abrir carrinho"
            >
              <ShoppingBag size={14} />
              <span className="hidden sm:inline">Carrinho</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-1 ring-surface-darkCard animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-gray-300 hover:bg-surface-hover rounded-lg transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 pt-2 border-t border-surface-border flex flex-col gap-2 pb-2">
            <button
              onClick={() => handleNavClick('produtos', 'all')}
              className="text-left px-2.5 py-1.5 text-xs font-bold text-gray-300 hover:bg-surface-hover rounded-lg"
            >
              Catálogo Completo
            </button>
            <button
              onClick={() => handleNavClick('produtos', 'up-de-conta')}
              className="text-left px-2.5 py-1.5 text-xs font-bold text-gray-300 hover:bg-surface-hover rounded-lg"
            >
              Serviços de Up
            </button>
            <button
              onClick={() => handleNavClick('produtos', 'dinheiro')}
              className="text-left px-2.5 py-1.5 text-xs font-bold text-gray-300 hover:bg-surface-hover rounded-lg"
            >
              Dinheiro GTA$
            </button>
            <button
              onClick={() => handleNavClick('diferenciais')}
              className="text-left px-2.5 py-1.5 text-xs font-bold text-gray-300 hover:bg-surface-hover rounded-lg"
            >
              Diferenciais
            </button>
            <button
              onClick={() => handleNavClick('avaliacoes')}
              className="text-left px-2.5 py-1.5 text-xs font-bold text-gray-300 hover:bg-surface-hover rounded-lg"
            >
              Avaliações
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left px-2.5 py-1.5 text-xs font-bold text-gray-300 hover:bg-surface-hover rounded-lg"
            >
              FAQ
            </button>
          </div>
        )}
      </div>

      {/* Modal de Login (Discord / Google) */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-surface-card border border-surface-border rounded-2xl max-w-sm w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>
            <h3 className="font-display font-extrabold text-white text-lg text-center mb-4">
              Entrar na LP Community
            </h3>
            <p className="text-xs text-gray-400 text-center mb-6">
              Acesse sua conta para salvar seus itens no carrinho e visualizar tickets no Discord.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  onLogin('discord');
                  setShowLoginModal(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors"
              >
                <LogIn size={14} />
                <span>Entrar com Discord</span>
              </button>
              <button
                onClick={() => {
                  onLogin('google');
                  setShowLoginModal(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-800 font-bold text-xs transition-colors"
              >
                <Chrome size={14} className="text-red-500" />
                <span>Entrar com o Google</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
