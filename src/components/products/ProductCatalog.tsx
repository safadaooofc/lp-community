import React, { useState, useMemo } from 'react';
import { productsData, categoriesData } from '../../data/products';
import { Product, CategoryId } from '../../types';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';

interface ProductCatalogProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: CategoryId | 'all';
  onSelectCategory: (cat: CategoryId | 'all') => void;
  onAddToCart: (product: Product, quantity?: number, customValue?: number) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onSelectCategory,
  onAddToCart,
  onViewDetails
}) => {
  const [sortBy, setSortBy] = useState<'relevance' | 'price-asc' | 'price-desc'>('relevance');

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((product) => {
        if (activeCategory !== 'all' && product.category !== activeCategory) {
          return false;
        }
        if (searchQuery.trim() !== '') {
          const query = searchQuery.toLowerCase();
          const matchesName = product.name.toLowerCase().includes(query);
          const matchesDesc = product.description.toLowerCase().includes(query);
          const matchesFeatures = product.features.some(f => f.toLowerCase().includes(query));
          return matchesName || matchesDesc || matchesFeatures;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') {
          return a.price - b.price;
        }
        if (sortBy === 'price-desc') {
          return b.price - a.price;
        }
        return 0;
      });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="catalogo-produtos" className="py-14 bg-surface-base min-h-screen border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho do Catálogo */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] font-bold uppercase tracking-wider text-lp-light">
            Catálogo Oficial LP Community
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mt-1">
            Serviços e Melhorias para GTA V
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Escolha o pacote ideal para a sua conta ou adquira saldo e modificações exclusivas com entrega garantida de até 48 horas.
          </p>
        </div>

        {/* Barra de Filtros e Categorias */}
        <div className="bg-surface-card rounded-2xl border border-surface-border/60 p-3 shadow-sm mb-6">
          
          {/* Abas de Categoria */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 border-b border-surface-border/40 no-scrollbar">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-lp-medium text-white shadow-sm'
                  : 'bg-surface-hover text-gray-300 hover:bg-surface-hover/80'
              }`}
            >
              Todos ({productsData.length})
            </button>

            {categoriesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-lp-medium text-white shadow-sm'
                    : 'bg-surface-hover text-gray-300 hover:bg-surface-hover/80'
              }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Busca e Ordenação */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Input de Busca */}
            <div className="relative w-full sm:w-72">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar por nome ou valor..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-surface-hover border border-surface-border/50 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-lp-medium transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Ordenação */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-semibold shrink-0">
                <ArrowUpDown size={12} />
                <span>Ordenar:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-surface-hover border border-surface-border/60 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-white focus:outline-none focus:border-lp-medium cursor-pointer"
              >
                <option value="relevance">Em Destaque</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
            </div>

          </div>

        </div>

        {/* Quantidade de Resultados */}
        <div className="flex items-center justify-between text-xs text-gray-400 font-medium mb-4 px-1">
          <span>
            Exibindo <strong className="text-white">{filteredProducts.length}</strong> serviço(s)
          </span>
          {activeCategory !== 'all' && (
            <button
              onClick={() => onSelectCategory('all')}
              className="text-lp-light hover:underline font-semibold"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {/* Grade de Produtos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-surface-card rounded-2xl border border-surface-border/60">
            <SlidersHorizontal size={30} className="mx-auto text-gray-500 mb-2" />
            <h3 className="font-display font-bold text-white text-base">
              Nenhum serviço encontrado
            </h3>
            <p className="text-xs text-gray-400 mt-1 max-w-sm mx-auto">
              Não encontramos nenhum serviço que corresponda aos filtros atuais.
            </p>
            <button
              onClick={() => {
                onSearchChange('');
                onSelectCategory('all');
              }}
              className="mt-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-lp-medium text-white font-bold text-xs"
            >
              Limpar Filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
