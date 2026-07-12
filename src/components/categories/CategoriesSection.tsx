import React from 'react';
import { categoriesData } from '../../data/products';
import { CategoryId } from '../../types';
import { Icon } from '../common/Icon';
import { ArrowRight } from 'lucide-react';

interface CategoriesSectionProps {
  activeCategory: CategoryId | 'all';
  onSelectCategory: (category: CategoryId | 'all') => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  const handleCategoryClick = (id: CategoryId) => {
    onSelectCategory(id);
    const element = document.getElementById('catalogo-produtos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-surface-base border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Seção */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-lp-light">
              Nossas Especialidades
            </span>
            <h2 className="font-display font-extrabold text-2xl text-white tracking-tight mt-1">
              Categorias de Serviços GTA V
            </h2>
          </div>
          <button
            onClick={() => {
              onSelectCategory('all');
              document.getElementById('catalogo-produtos')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-lp-light hover:text-white inline-flex items-center gap-1 transition-colors self-start sm:self-auto"
          >
            <span>Ver Todos os Serviços</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Grade de Categorias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categoriesData.map((category) => {
            const isSelected = activeCategory === category.id;
            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`group cursor-pointer p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-lp-soft border-lp-medium shadow-sm'
                    : 'bg-surface-card border-surface-border/60 hover:border-lp-medium/40 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-lp-medium text-white'
                          : 'bg-surface-hover text-lp-light group-hover:bg-lp-medium group-hover:text-white'
                      }`}
                    >
                      <Icon name={category.iconName} size={18} />
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        isSelected
                          ? 'bg-lp-medium text-white'
                          : 'bg-surface-hover text-gray-400'
                      }`}
                    >
                      {category.count} itens
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-white text-sm group-hover:text-lp-light transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-1 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-surface-border/40 flex items-center justify-between text-[10px] font-semibold text-lp-light">
                  <span>Ver Opções</span>
                  <ArrowRight
                    size={13}
                    className="transform group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
