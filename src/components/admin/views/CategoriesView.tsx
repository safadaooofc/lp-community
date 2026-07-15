import React, { useState } from 'react';
import { CategoryItem, CategoryId } from '../../../types';
import { adminStore, FullStoreState } from '../../../services/adminStore';
import { Plus, Edit3, Trash2, FolderTree, X } from 'lucide-react';

interface CategoriesViewProps {
  storeState: FullStoreState;
  onShowToast: (msg: string) => void;
}

export const CategoriesView: React.FC<CategoriesViewProps> = ({ storeState, onShowToast }) => {
  const [editingCat, setEditingCat] = useState<CategoryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAdd = () => {
    setEditingCat({
      id: `cat-${Date.now().toString().slice(-4)}` as CategoryId,
      name: '',
      description: '',
      iconName: 'Package',
      count: 0
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (cat: CategoryItem) => {
    setEditingCat({ ...cat });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Excluir categoria "${name}"?`)) {
      adminStore.deleteCategory(id);
      onShowToast(`Categoria "${name}" removida!`);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCat) return;
    adminStore.saveCategory(editingCat);
    setIsModalOpen(false);
    onShowToast(`Categoria "${editingCat.name}" salva com sucesso!`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-5 rounded-2xl bg-[#060a08] border border-surface-border/80">
        <div>
          <h3 className="font-display font-bold text-white text-base flex items-center gap-2">
            <FolderTree size={16} className="text-lp-light" />
            <span>Gerenciar Categorias de Serviços</span>
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Crie ou edite as abas de filtragem do catálogo da LP Community.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-lp-medium hover:bg-lp-dark text-white font-bold text-xs shadow-md"
        >
          <Plus size={15} />
          <span>Nova Categoria</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {storeState.categories.map((cat) => (
          <div
            key={cat.id}
            className="p-5 rounded-2xl bg-[#060a08] border border-surface-border/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded bg-surface-hover text-[10px] font-bold uppercase text-gray-300">
                  ID: {cat.id}
                </span>
                <span className="text-xs font-bold text-lp-light">
                  {cat.count} itens
                </span>
              </div>

              <h4 className="font-display font-extrabold text-white text-base">
                {cat.name}
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                {cat.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-surface-border/50 flex justify-end gap-2">
              <button
                onClick={() => handleOpenEdit(cat)}
                className="px-3 py-1.5 rounded-lg bg-surface-hover hover:bg-lp-dark/40 text-gray-300 hover:text-white text-xs font-bold flex items-center gap-1"
              >
                <Edit3 size={13} />
                <span>Editar</span>
              </button>
              <button
                onClick={() => handleDelete(cat.id, cat.name)}
                className="px-3 py-1.5 rounded-lg bg-surface-hover hover:bg-red-950 text-gray-300 hover:text-red-400 text-xs font-bold flex items-center gap-1"
              >
                <Trash2 size={13} />
                <span>Excluir</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && editingCat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#060a08] border border-surface-border rounded-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>
            <h3 className="font-display font-extrabold text-white text-lg mb-4">
              {storeState.categories.some(c => c.id === editingCat.id) ? 'Editar Categoria' : 'Nova Categoria'}
            </h3>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-300 mb-1">Nome da Categoria *</label>
                <input
                  type="text"
                  required
                  value={editingCat.name}
                  onChange={(e) => setEditingCat({ ...editingCat, name: e.target.value })}
                  className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-300 mb-1">Descrição</label>
                <textarea
                  rows={2}
                  value={editingCat.description}
                  onChange={(e) => setEditingCat({ ...editingCat, description: e.target.value })}
                  className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-surface-border">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-surface-hover text-gray-300 font-bold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-lp-medium hover:bg-lp-dark text-white font-bold"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
