import React, { useState, useEffect } from 'react';
import { Product, CategoryId, CartItem } from './types';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { TrustBadges } from './components/trust/TrustBadges';
import { AboutLP } from './components/about/AboutLP';
import { CategoriesSection } from './components/categories/CategoriesSection';
import { ProductCatalog } from './components/products/ProductCatalog';
import { ProductDetailModal } from './components/products/ProductDetailModal';
import { DifferentialsSection } from './components/differentials/DifferentialsSection';
import { ReviewsCarousel } from './components/reviews/ReviewsCarousel';
import { FAQSection } from './components/faq/FAQSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { adminStore, useAdminStore } from './services/adminStore';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AdminLoginModal } from './components/admin/AdminLoginModal';
import { CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface UserSession {
  name: string;
  provider: 'discord' | 'google';
}

export const App: React.FC = () => {
  // Estado do Carrinho salvo no localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lp_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Estado do Tema (Sempre Dark e Preto Puro #000000)
  const [theme] = useState<'dark'>('dark');
  useEffect(() => {
    localStorage.setItem('lp_theme', 'dark');
  }, []);

  // Estado do Usuário salvo no localStorage
  const [user, setUser] = useState<UserSession | null>(() => {
    try {
      const saved = localStorage.getItem('lp_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryId | 'all'>('all');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'store' | 'admin'>(() => {
    return window.location.hash === '#admin' || window.location.search.includes('admin=true') ? 'admin' : 'store';
  });
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);

  const handleOpenAdmin = () => {
    const session = adminStore.getSession();
    if (session) {
      setViewMode('admin');
      window.location.hash = 'admin';
    } else {
      setShowAdminLoginModal(true);
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem('lp_cart', JSON.stringify(cartItems));
    } catch {
      // Fallback
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('lp_theme', theme);
    } catch {
      // Fallback
    }
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('lp_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('lp_user');
      }
    } catch {
      // Fallback
    }
  }, [user]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleToggleTheme = () => {
    // Modo sempre dark escuro preto puro
  };

  const handleLogin = (provider: 'discord' | 'google') => {
    const simulatedName = provider === 'discord' ? 'DiscordGamer#4288' : 'GooglePlayer';
    setUser({ name: simulatedName, provider });
    showToast(`Conectado com sucesso via ${provider === 'discord' ? 'Discord' : 'Google'}!`);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleAddToCart = (product: Product, quantity = 1, customValue?: number) => {
    let price = product.price;
    if (product.type === 'calculator-money' && customValue && product.pricePerMillion) {
      price = customValue * product.pricePerMillion;
    } else if (product.type === 'calculator-qty' && product.pricePerUnit) {
      price = quantity * product.pricePerUnit;
    }

    const newItemId = `${product.id}-${customValue || quantity}`;

    setCartItems((prev) => {
      const existingIdx = prev.findIndex(item => item.id === newItemId);
      if (existingIdx >= 0) {
        const updated = [...prev];
        const oldItem = updated[existingIdx];
        const newQty = oldItem.quantity + quantity;
        updated[existingIdx] = {
          ...oldItem,
          quantity: newQty,
          calculatedPrice: product.type === 'calculator-money' ? price : newQty * product.price
        };
        return updated;
      }

      return [
        ...prev,
        {
          id: newItemId,
          product,
          quantity,
          customValue,
          calculatedPrice: price
        }
      ];
    });

    showToast(`"${product.name}" adicionado ao carrinho!`);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  if (viewMode === 'admin') {
    return (
      <>
        <AdminDashboard
          onReturnToStore={() => {
            setViewMode('store');
            window.location.hash = '';
          }}
          onLogout={() => {
            adminStore.logout();
            setViewMode('store');
            window.location.hash = '';
            showToast('Você saiu do Painel Administrativo.');
          }}
          onShowToast={showToast}
        />
        {/* Toast Notificação Admin */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 right-6 z-50 bg-[#060a08] border border-lp-medium text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-lp-light text-black flex items-center justify-center font-bold">
                <CheckCircle2 size={12} />
              </div>
              <span className="text-xs font-semibold">{toastMessage}</span>
              <button
                onClick={() => setToastMessage(null)}
                className="text-gray-400 hover:text-white p-0.5"
              >
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white">
      {/* Navegação Fixa */}
      <Navbar
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSelectCategory={setActiveCategory}
        onOpenAdmin={handleOpenAdmin}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      {/* Animação de Entrada Geral */}
      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        {/* Hero */}
        <Hero
          onShopNow={() => {
            document.getElementById('catalogo-produtos')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onViewProducts={() => {
            document.getElementById('catalogo-produtos')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Selos de Confiança */}
        <TrustBadges />

        {/* Categorias */}
        <CategoriesSection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Catálogo de Produtos Principal */}
        <ProductCatalog
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onAddToCart={handleAddToCart}
          onViewDetails={(prod) => setSelectedProduct(prod)}
        />

        {/* Sobre a LP Community */}
        <AboutLP />

        {/* Diferenciais */}
        <DifferentialsSection />

        {/* Avaliações de Clientes */}
        <ReviewsCarousel />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Contato Oficial */}
        <ContactSection />
      </motion.main>

      {/* Rodapé */}
      <Footer />

      {/* Modal de Detalhes do Produto */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>

      {/* Carrinho Lateral Animado */}
      <AnimatePresence>
        {isCartOpen && (
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItems={cartItems}
            onRemoveItem={handleRemoveFromCart}
            onUpdateQuantity={() => {}}
            onClearCart={handleClearCart}
          />
        )}
      </AnimatePresence>

      {/* Toast Notificação de Sucesso */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-gray-800 flex items-center gap-3"
          >
            <div className="w-5 h-5 rounded-full bg-lp-light text-surface-base flex items-center justify-center font-bold">
              <CheckCircle2 size={12} />
            </div>
            <span className="text-xs font-semibold">{toastMessage}</span>
            <button
              onClick={() => setIsCartOpen(true)}
              className="ml-1 px-2.5 py-1 rounded bg-lp-medium hover:bg-lp-dark text-white text-[10px] font-bold transition-colors"
            >
              Ver Carrinho
            </button>
            <button
              onClick={() => setToastMessage(null)}
              className="text-gray-400 hover:text-white p-0.5"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de Autenticação Admin */}
      <AdminLoginModal
        isOpen={showAdminLoginModal}
        onClose={() => setShowAdminLoginModal(false)}
        onSuccess={() => {
          setShowAdminLoginModal(false);
          setViewMode('admin');
          window.location.hash = 'admin';
          showToast('Autenticação de administrador bem-sucedida!');
        }}
      />
    </div>
  );
};
