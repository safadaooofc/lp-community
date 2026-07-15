import React from 'react';
import { FullStoreState } from '../../../services/adminStore';
import { Package, Tag, Star, HelpCircle, TrendingUp, ShieldCheck, Zap, DollarSign, PlusCircle } from 'lucide-react';

interface OverviewViewProps {
  storeState: FullStoreState;
  onNavigateTab: (tab: string) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ storeState, onNavigateTab }) => {
  const totalProducts = storeState.products.length;
  const promoProducts = storeState.products.filter(p => p.category === 'promocoes' || !!p.oldPrice).length;
  const totalCategories = storeState.categories.length;
  const totalReviews = storeState.reviews.length;
  const avgRating = (storeState.reviews.reduce((a, r) => a + r.rating, 0) / (totalReviews || 1)).toFixed(1);

  const kpis = [
    {
      label: 'Total de Produtos',
      value: totalProducts,
      desc: 'Ativos no catálogo público',
      icon: Package,
      color: 'text-lp-light bg-lp-dark/20 border-lp-dark/40',
      tab: 'products'
    },
    {
      label: 'Promoções & Destaques',
      value: promoProducts,
      desc: 'Ofertas com desconto ativo',
      icon: Tag,
      color: 'text-emerald-400 bg-emerald-950/30 border-emerald-800/40',
      tab: 'promotions'
    },
    {
      label: 'Categorias do Site',
      value: totalCategories,
      desc: 'Seções organizadas',
      icon: TrendingUp,
      color: 'text-blue-400 bg-blue-950/30 border-blue-800/40',
      tab: 'categories'
    },
    {
      label: 'Avaliações Verificadas',
      value: `${totalReviews} (${avgRating}★)`,
      desc: 'Média de satisfação 5 estrelas',
      icon: Star,
      color: 'text-amber-400 bg-amber-950/30 border-amber-800/40',
      tab: 'reviews'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Top Welcome Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0a1e14] via-[#091710] to-[#040706] border border-lp-dark/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-lp-dark/40 text-lp-light text-[10px] font-extrabold uppercase tracking-wider mb-2">
            <ShieldCheck size={12} />
            <span>Sistema Administrativo Conectado</span>
          </div>
          <h2 className="font-display font-extrabold text-white text-xl sm:text-2xl">
            Painel Geral — {storeState.config.companyName}
          </h2>
          <p className="text-xs text-gray-400 mt-1 max-w-xl">
            Todas as alterações realizadas aqui são persistidas e atualizadas em tempo real no site público sem necessidade de mexer no código-fonte.
          </p>
        </div>

        <button
          onClick={() => onNavigateTab('products')}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-lp-medium hover:bg-lp-dark text-white font-bold text-xs shadow-md transition-all shrink-0"
        >
          <PlusCircle size={15} />
          <span>Adicionar Novo Produto</span>
        </button>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => {
          const IconComp = kpi.icon;
          return (
            <div
              key={idx}
              onClick={() => onNavigateTab(kpi.tab)}
              className="p-5 rounded-2xl bg-[#060a08] border border-surface-border/80 hover:border-lp-medium/50 cursor-pointer transition-all shadow-sm group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-400 group-hover:text-gray-200">
                  {kpi.label}
                </span>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${kpi.color}`}>
                  <IconComp size={18} />
                </div>
              </div>
              <div className="font-display font-extrabold text-2xl text-white">
                {kpi.value}
              </div>
              <p className="text-[11px] text-gray-500 mt-1">
                {kpi.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Ações Rápidas */}
      <div className="p-6 rounded-2xl bg-[#060a08] border border-surface-border/80">
        <h3 className="font-display font-bold text-white text-base mb-4 flex items-center gap-2">
          <Zap size={16} className="text-lp-light" />
          <span>Atalhos & Áreas de Administração</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            { label: 'Gerenciar Produtos', tab: 'products' },
            { label: 'Categorias do Site', tab: 'categories' },
            { label: 'Campanhas & Promos', tab: 'promotions' },
            { label: 'Cores & Visual', tab: 'colors' },
            { label: 'Banner & Hero', tab: 'hero' },
            { label: 'Depoimentos', tab: 'reviews' },
            { label: 'Perguntas FAQ', tab: 'faq' },
            { label: 'Redes & Contatos', tab: 'social' },
            { label: 'SEO & Meta Tags', tab: 'seo' },
            { label: 'Backup de Dados', tab: 'settings' }
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => onNavigateTab(item.tab)}
              className="p-3.5 rounded-xl bg-surface-hover/60 hover:bg-lp-dark/30 border border-surface-border/60 hover:border-lp-medium text-left text-xs font-semibold text-gray-300 hover:text-white transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Últimos Produtos Adicionados */}
      <div className="p-6 rounded-2xl bg-[#060a08] border border-surface-border/80">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold text-white text-base">
            Últimos Produtos Cadastrados
          </h3>
          <button
            onClick={() => onNavigateTab('products')}
            className="text-xs text-lp-light hover:underline font-bold"
          >
            Ver Catálogo ({totalProducts})
          </button>
        </div>
        <div className="divide-y divide-surface-border/50">
          {storeState.products.slice(0, 5).map((prod) => (
            <div key={prod.id} className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-10 h-10 rounded-lg object-cover bg-black"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{prod.name}</h4>
                  <span className="text-[11px] text-gray-400">Categoria: {prod.category}</span>
                </div>
              </div>
              <span className="font-bold text-lp-light text-sm">
                R$ {prod.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
