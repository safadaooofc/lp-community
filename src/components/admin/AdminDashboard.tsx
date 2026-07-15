import React, { useState } from 'react';
import { adminStore, useAdminStore } from '../../services/adminStore';
import { OverviewView } from './views/OverviewView';
import { ProductsView } from './views/ProductsView';
import { CategoriesView } from './views/CategoriesView';
import { HeroView } from './views/HeroView';
import { ReviewsView } from './views/ReviewsView';
import { FAQView } from './views/FAQView';
import { ColorsView } from './views/ColorsView';
import { SocialSeoView } from './views/SocialSeoView';
import {
  LayoutDashboard,
  Package,
  FolderTree,
  LayoutTemplate,
  MessageSquareQuote,
  HelpCircle,
  Palette,
  Share2,
  Globe,
  LogOut,
  ExternalLink,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';

interface AdminDashboardProps {
  onReturnToStore: () => void;
  onLogout: () => void;
  onShowToast: (msg: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onReturnToStore,
  onLogout,
  onShowToast
}) => {
  const storeState = useAdminStore();
  const session = adminStore.getSession();
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Dashboard Geral', icon: LayoutDashboard },
    { id: 'products', label: 'Gerenciar Produtos', icon: Package },
    { id: 'categories', label: 'Categorias do Site', icon: FolderTree },
    { id: 'hero', label: 'Hero & Banner Principal', icon: LayoutTemplate },
    { id: 'reviews', label: 'Avaliações & Depoimentos', icon: MessageSquareQuote },
    { id: 'faq', label: 'Perguntas Frequentes (FAQ)', icon: HelpCircle },
    { id: 'colors', label: 'Cores & Identidade Visual', icon: Palette },
    { id: 'social', label: 'SEO, Redes & Backup', icon: Share2 }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewView storeState={storeState} onNavigateTab={setActiveTab} />;
      case 'products':
        return <ProductsView storeState={storeState} onShowToast={onShowToast} />;
      case 'categories':
        return <CategoriesView storeState={storeState} onShowToast={onShowToast} />;
      case 'hero':
        return <HeroView storeState={storeState} onShowToast={onShowToast} />;
      case 'reviews':
        return <ReviewsView storeState={storeState} onShowToast={onShowToast} />;
      case 'faq':
        return <FAQView storeState={storeState} onShowToast={onShowToast} />;
      case 'colors':
        return <ColorsView storeState={storeState} onShowToast={onShowToast} />;
      case 'social':
        return <SocialSeoView storeState={storeState} onShowToast={onShowToast} />;
      default:
        return <OverviewView storeState={storeState} onNavigateTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col md:flex-row">
      
      {/* Sidebar Mobile Toggle Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#060a08] border-b border-surface-border">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-lp-light" size={20} />
          <span className="font-display font-extrabold text-white text-base">
            Painel Admin LP
          </span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-gray-300 hover:text-white"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar Principal */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#050807] border-r border-surface-border/80 flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div>
          {/* Logo / Header da Sidebar */}
          <div className="p-6 border-b border-surface-border/80 flex items-center gap-3">
            <img
              src={storeState.config.logoUrl}
              alt="LP Admin"
              className="w-9 h-9 rounded-full border border-lp-medium/40 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/imagens/fotosgta/gtalogo.jpg';
              }}
            />
            <div>
              <span className="font-display font-extrabold text-white text-base block leading-tight">
                LP Community
              </span>
              <span className="text-[10px] text-lp-light font-bold tracking-wider uppercase">
                Administrador
              </span>
            </div>
          </div>

          {/* Lista de Navegação */}
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-lp-medium text-white shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-surface-hover'
                  }`}
                >
                  <IconComp size={16} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Rodapé da Sidebar */}
        <div className="p-4 border-t border-surface-border/80 space-y-2">
          {session && (
            <div className="px-3 py-2 rounded-xl bg-surface-hover/60 text-[10px] text-gray-400">
              <span className="block font-bold text-gray-300">Sessão Segura ativa</span>
              <span>Último login: {session.lastLoginAt}</span>
            </div>
          )}

          <button
            onClick={onReturnToStore}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-surface-hover hover:bg-surface-border text-xs font-bold text-gray-200 transition-colors"
          >
            <span>Ver Site Ao Vivo</span>
            <ExternalLink size={14} className="text-lp-light" />
          </button>

          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-3.5 py-2 rounded-xl text-red-400 hover:bg-red-950/50 text-xs font-bold transition-colors"
          >
            <LogOut size={15} />
            <span>Sair do Painel</span>
          </button>
        </div>
      </aside>

      {/* Área Principal de Conteúdo */}
      <main className="flex-1 overflow-y-auto min-h-screen flex flex-col">
        {/* Cabeçalho do Painel */}
        <header className="px-6 py-4 border-b border-surface-border/80 bg-[#060a08]/90 backdrop-blur-md flex items-center justify-between">
          <div>
            <h1 className="font-display font-extrabold text-white text-lg sm:text-xl">
              {menuItems.find(m => m.id === activeTab)?.label || 'Dashboard'}
            </h1>
            <p className="text-xs text-gray-400">
              Gerencie todo o conteúdo de forma rápida sem editar código-fonte.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onReturnToStore}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-hover hover:bg-surface-border text-white text-xs font-bold transition-all"
            >
              <span>Ir para a Loja Pública</span>
              <ExternalLink size={13} className="text-lp-light" />
            </button>
          </div>
        </header>

        {/* Conteúdo Dinâmico */}
        <div className="p-6 flex-1 max-w-7xl w-full mx-auto">
          {renderContent()}
        </div>
      </main>

    </div>
  );
};
