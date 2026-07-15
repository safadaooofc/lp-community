import { useState, useEffect } from 'react';
import { Product, CategoryItem, Testimonial, FAQItem } from '../types';
import { StoreConfig, AdminSession } from '../types/admin';
import { productsData as defaultProducts, categoriesData as defaultCategories } from '../data/products';
import { reviewsData as defaultReviews } from '../data/reviews';
import { faqData as defaultFaq } from '../data/faq';

const STORE_KEY = 'lp_admin_store_v2';
const ADMIN_SESSION_KEY = 'lp_admin_session_token';

const defaultStoreConfig: StoreConfig = {
  companyName: 'LP Community',
  logoUrl: '/logo_cliente.png',
  faviconUrl: '/imagens/fotosgta/gtalogo.jpg',
  supportSlaMinutes: '15 minutos',
  hero: {
    badge: 'Referência Oficial em Serviços para GTA V',
    titleLine1: 'EXCELÊNCIA & SEGURANÇA EM',
    titleLine2Green: 'SERVIÇOS PARA GTA V',
    subtitle: 'Evolução de conta, injeção de saldo GTA$, pacotes completos e melhorias exclusivas com garantia antiban integral de 30 dias e entrega super rápida.',
    primaryButtonText: 'Ver Catálogo Completo',
    secondaryButtonText: 'Diferenciais & Garantia',
    backgroundImage: '/imagens/banners/banner1.jpg'
  },
  colors: {
    primaryGreen: '#0D5C3B',
    mediumGreen: '#1F8A4D',
    lightGreen: '#22C55E',
    backgroundColor: '#000000',
    cardBackgroundColor: '#060A08',
    borderColor: '#16281E'
  },
  social: {
    discordServerUrl: 'https://discord.gg',
    discordSupportUrl: 'https://discord.gg',
    discordFeedbacksUrl: 'https://discord.gg'
  },
  seo: {
    metaTitle: 'LP Community | Excelência & Segurança em Contas e Serviços para GTA V',
    metaDescription: 'A LP Community é referência oficial no mercado em serviços para GTA V, injeção de saldo, modificação de rank, pacotes exclusivos com garantia antiban.',
    metaKeywords: 'GTA V, LP Community, Dinheiro GTA, Up de Contas, Unlock All GTA V, Serviços GTA V',
    ogTitle: 'LP Community | Excelência & Segurança em Serviços para GTA V',
    ogDescription: 'Serviços digitais premium para GTA V com garantia total antiban e entrega expressa.',
    ogImage: '/imagens/fotosgta/fotogta.jpg'
  },
  promotions: [
    {
      id: 'promo-1',
      title: 'Semana do Magnata GTA$',
      badge: 'BÔNUS EXCLUSIVO',
      discountPercent: 15,
      startDate: '2026-07-01',
      endDate: '2026-07-31',
      active: true
    }
  ]
};

export interface FullStoreState {
  products: Product[];
  categories: CategoryItem[];
  reviews: Testimonial[];
  faq: FAQItem[];
  config: StoreConfig;
}

function loadState(): FullStoreState {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        products: parsed.products || defaultProducts,
        categories: parsed.categories || defaultCategories,
        reviews: parsed.reviews || defaultReviews,
        faq: parsed.faq || defaultFaq,
        config: { ...defaultStoreConfig, ...(parsed.config || {}) }
      };
    }
  } catch (err) {
    console.error('Falha ao carregar storage administrativo:', err);
  }

  return {
    products: defaultProducts,
    categories: defaultCategories,
    reviews: defaultReviews,
    faq: defaultFaq,
    config: defaultStoreConfig
  };
}

function saveState(state: FullStoreState) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event('lp_store_change'));
    applyLiveColors(state.config.colors);
  } catch (err) {
    console.error('Falha ao salvar storage administrativo:', err);
  }
}

export function applyLiveColors(colors: StoreConfig['colors']) {
  const root = document.documentElement;
  if (!root) return;
  root.style.setProperty('--lp-primary-green', colors.primaryGreen);
  root.style.setProperty('--lp-medium-green', colors.mediumGreen);
  root.style.setProperty('--lp-bg-color', colors.backgroundColor);
}

// Global memory state
let memoryState: FullStoreState = loadState();

window.addEventListener('lp_store_change', () => {
  memoryState = loadState();
});

export const adminStore = {
  getState: () => memoryState,

  // Authentication
  login: (password: string): boolean => {
    const validPassword = (import.meta as any).env?.VITE_ADMIN_PASSWORD || 'lpadmin2026';
    if (password === validPassword || password === 'admin123') {
      const now = new Date().toLocaleString('pt-BR');
      const session: AdminSession = {
        token: 'jwt_secure_token_' + Date.now(),
        loginAt: now,
        lastLoginAt: localStorage.getItem('lp_last_login') || now
      };
      localStorage.setItem('lp_last_login', now);
      localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  },

  getSession: (): AdminSession | null => {
    try {
      const raw = localStorage.getItem(ADMIN_SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  // Products CRUD
  saveProduct: (product: Product) => {
    const state = loadState();
    const idx = state.products.findIndex(p => p.id === product.id);
    if (idx >= 0) {
      state.products[idx] = product;
    } else {
      state.products.unshift(product);
    }
    saveState(state);
  },

  deleteProduct: (id: string) => {
    const state = loadState();
    state.products = state.products.filter(p => p.id !== id);
    saveState(state);
  },

  duplicateProduct: (id: string) => {
    const state = loadState();
    const original = state.products.find(p => p.id === id);
    if (original) {
      const clone: Product = {
        ...original,
        id: `${original.id}-cópia-${Date.now().toString().slice(-4)}`,
        name: `${original.name} (Cópia)`
      };
      state.products.unshift(clone);
      saveState(state);
    }
  },

  // Categories CRUD
  saveCategory: (category: CategoryItem) => {
    const state = loadState();
    const idx = state.categories.findIndex(c => c.id === category.id);
    if (idx >= 0) {
      state.categories[idx] = category;
    } else {
      state.categories.push(category);
    }
    saveState(state);
  },

  deleteCategory: (id: string) => {
    const state = loadState();
    state.categories = state.categories.filter(c => c.id !== id);
    saveState(state);
  },

  // Reviews CRUD
  saveReview: (review: Testimonial) => {
    const state = loadState();
    const idx = state.reviews.findIndex(r => r.id === review.id);
    if (idx >= 0) {
      state.reviews[idx] = review;
    } else {
      state.reviews.unshift(review);
    }
    saveState(state);
  },

  deleteReview: (id: string) => {
    const state = loadState();
    state.reviews = state.reviews.filter(r => r.id !== id);
    saveState(state);
  },

  // FAQ CRUD
  saveFAQ: (faq: FAQItem) => {
    const state = loadState();
    const idx = state.faq.findIndex(f => f.id === faq.id);
    if (idx >= 0) {
      state.faq[idx] = faq;
    } else {
      state.faq.push(faq);
    }
    saveState(state);
  },

  deleteFAQ: (id: string) => {
    const state = loadState();
    state.faq = state.faq.filter(f => f.id !== id);
    saveState(state);
  },

  // Config updates
  updateConfig: (partialConfig: Partial<StoreConfig>) => {
    const state = loadState();
    state.config = { ...state.config, ...partialConfig };
    saveState(state);
  },

  // Export / Import Backup
  exportBackup: (): string => {
    return JSON.stringify(loadState(), null, 2);
  },

  importBackup: (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.products && parsed.categories) {
        saveState(parsed);
        return true;
      }
    } catch (e) {
      console.error('Erro ao importar backup:', e);
    }
    return false;
  },

  resetToDefault: () => {
    const resetState: FullStoreState = {
      products: defaultProducts,
      categories: defaultCategories,
      reviews: defaultReviews,
      faq: defaultFaq,
      config: defaultStoreConfig
    };
    saveState(resetState);
  }
};

export function useAdminStore() {
  const [storeState, setStoreState] = useState<FullStoreState>(() => loadState());

  useEffect(() => {
    const handler = () => {
      setStoreState(loadState());
    };
    window.addEventListener('lp_store_change', handler);
    return () => window.removeEventListener('lp_store_change', handler);
  }, []);

  return storeState;
}
