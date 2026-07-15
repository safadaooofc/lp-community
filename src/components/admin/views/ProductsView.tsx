import React, { useState } from 'react';
import { Product, CategoryId, ProductType } from '../../../types';
import { adminStore, FullStoreState } from '../../../services/adminStore';
import { Plus, Edit3, Trash2, Copy, Search, Eye, Sparkles, Check, X, Upload } from 'lucide-react';

interface ProductsViewProps {
  storeState: FullStoreState;
  onShowToast: (msg: string) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ storeState, onShowToast }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryId | 'all'>('all');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = storeState.products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = categoryFilter === 'all' || p.category === categoryFilter;
    return matchSearch && matchCategory;
  });

  const handleOpenAdd = () => {
    setEditingProduct({
      id: `pkg-${Date.now().toString().slice(-5)}`,
      name: '',
      category: 'up-de-conta',
      price: 19.9,
      image: '/imagens/fotosgta/fotogta.jpg',
      badge: 'POPULAR',
      description: '',
      features: ['Entrega em até 15 min', 'Suporte VIP Discord', 'Garantia Antiban 30 Dias'],
      type: 'standard',
      deliveryTime: '15 minutos',
      warranty: '30 Dias Integral'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (product: Product) => {
    setEditingProduct({ ...product });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Tem certeza que deseja excluir "${name}"?`)) {
      adminStore.deleteProduct(id);
      onShowToast(`Produto "${name}" removido com sucesso!`);
    }
  };

  const handleDuplicate = (id: string, name: string) => {
    adminStore.duplicateProduct(id);
    onShowToast(`Produto "${name}" duplicado!`);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    if (!editingProduct.name.trim()) {
      alert('Informe o nome do produto.');
      return;
    }
    adminStore.saveProduct(editingProduct);
    setIsModalOpen(false);
    onShowToast(`Produto "${editingProduct.name}" salvo no banco com sucesso!`);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingProduct) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingProduct({
          ...editingProduct,
          image: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Barra de Busca e Botão Adicionar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#060a08] border border-surface-border/80">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3.5 top-3 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome ou descrição..."
              className="w-full bg-surface-hover border border-surface-border rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-lp-medium"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as CategoryId | 'all')}
            className="bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
          >
            <option value="all">Todas as categorias ({storeState.products.length})</option>
            <option value="up-de-conta">Serviços de Up & Rank</option>
            <option value="dinheiro">Dinheiro GTA$</option>
            <option value="itens">Itens & Modificações</option>
            <option value="servicos">Serviços de Conta</option>
            <option value="promocoes">Promoções & Combos</option>
          </select>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-lp-medium hover:bg-lp-dark text-white font-bold text-xs shadow-md transition-all shrink-0"
        >
          <Plus size={15} />
          <span>Novo Produto</span>
        </button>
      </div>

      {/* Tabela de Produtos */}
      <div className="overflow-x-auto rounded-2xl border border-surface-border/80 bg-[#060a08]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-surface-border/80 bg-surface-darkCard text-[11px] uppercase font-bold text-gray-400 tracking-wider">
              <th className="p-4">Produto</th>
              <th className="p-4">Categoria</th>
              <th className="p-4">Preço (R$)</th>
              <th className="p-4">Tipo</th>
              <th className="p-4">Entrega</th>
              <th className="p-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-border/50 text-xs">
            {filteredProducts.map((p) => (
              <tr key={p.id} className="hover:bg-surface-hover/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-11 h-11 rounded-lg object-cover bg-black border border-surface-border/60 shrink-0"
                    />
                    <div>
                      <div className="font-bold text-white text-sm">{p.name}</div>
                      {p.badge && (
                        <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded bg-lp-dark/40 text-lp-light text-[9px] font-bold">
                          {p.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="p-4 uppercase font-semibold text-gray-300">
                  {p.category}
                </td>
                <td className="p-4">
                  <div className="font-extrabold text-lp-light text-sm">
                    R$ {p.price.toFixed(2).replace('.', ',')}
                  </div>
                  {p.oldPrice && (
                    <div className="line-through text-gray-500 text-[10px]">
                      R$ {p.oldPrice.toFixed(2).replace('.', ',')}
                    </div>
                  )}
                </td>
                <td className="p-4 text-gray-300">
                  {p.type === 'calculator-money' ? 'Calculadora GTA$' : p.type === 'calculator-qty' ? 'Calculadora Qtd' : 'Padrão'}
                </td>
                <td className="p-4 text-gray-300">
                  {p.deliveryTime}
                </td>
                <td className="p-4 text-right space-x-1">
                  <button
                    onClick={() => handleOpenEdit(p)}
                    className="p-2 rounded-lg bg-surface-hover hover:bg-lp-dark/50 text-gray-300 hover:text-white transition-colors"
                    title="Editar"
                  >
                    <Edit3 size={14} />
                  </button>
                  <button
                    onClick={() => handleDuplicate(p.id, p.name)}
                    className="p-2 rounded-lg bg-surface-hover hover:bg-blue-900/50 text-gray-300 hover:text-blue-300 transition-colors"
                    title="Duplicar"
                  >
                    <Copy size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(p.id, p.name)}
                    className="p-2 rounded-lg bg-surface-hover hover:bg-red-950 text-gray-300 hover:text-red-400 transition-colors"
                    title="Excluir"
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Adicionar/Editar Produto */}
      {isModalOpen && editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-[#060a08] border border-surface-border rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>
            <h3 className="font-display font-extrabold text-white text-lg mb-4">
              {storeState.products.some(p => p.id === editingProduct.id) ? 'Editar Produto' : 'Cadastrar Novo Produto'}
            </h3>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-300 mb-1">Nome do Produto *</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                    placeholder="Ex: Pacote Diamante GTA V"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-300 mb-1">Categoria *</label>
                  <select
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value as CategoryId })}
                    className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                  >
                    <option value="up-de-conta">Serviços de Up & Rank</option>
                    <option value="dinheiro">Dinheiro GTA$</option>
                    <option value="itens">Itens & Modificações</option>
                    <option value="servicos">Serviços de Conta</option>
                    <option value="promocoes">Promoções & Combos</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-gray-300 mb-1">Preço Atual (R$) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) || 0 })}
                    className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-300 mb-1">Preço Antigo (Promocional)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={editingProduct.oldPrice || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, oldPrice: e.target.value ? parseFloat(e.target.value) : undefined })}
                    className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                    placeholder="Opcional"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-300 mb-1">Destaque / Badge</label>
                  <input
                    type="text"
                    value={editingProduct.badge || ''}
                    onChange={(e) => setEditingProduct({ ...editingProduct, badge: e.target.value })}
                    className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                    placeholder="Ex: MAIS VENDIDO"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-300 mb-1">Tipo de Produto</label>
                  <select
                    value={editingProduct.type}
                    onChange={(e) => setEditingProduct({ ...editingProduct, type: e.target.value as ProductType })}
                    className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                  >
                    <option value="standard">Padrão</option>
                    <option value="calculator-money">Calculadora de Milhões GTA$</option>
                    <option value="calculator-qty">Calculadora por Quantidade</option>
                  </select>
                </div>

                {editingProduct.type === 'calculator-money' && (
                  <div>
                    <label className="block font-bold text-gray-300 mb-1">Preço por cada Milhão GTA$ (R$)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={editingProduct.pricePerMillion || 0.15}
                      onChange={(e) => setEditingProduct({ ...editingProduct, pricePerMillion: parseFloat(e.target.value) || 0.15 })}
                      className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block font-bold text-gray-300 mb-1">Descrição Curta *</label>
                <textarea
                  rows={2}
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-300 mb-1">
                  Características (Separe por vírgula)
                </label>
                <input
                  type="text"
                  value={editingProduct.features.join(', ')}
                  onChange={(e) => setEditingProduct({
                    ...editingProduct,
                    features: e.target.value.split(',').map(f => f.trim()).filter(Boolean)
                  })}
                  className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-300 mb-1">URL da Imagem ou Upload</label>
                  <input
                    type="text"
                    value={editingProduct.image}
                    onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                    className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white mb-2"
                  />
                  <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-hover border border-surface-border text-xs cursor-pointer hover:bg-surface-border/60">
                    <Upload size={13} />
                    <span>Carregar Arquivo Local</span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                </div>
                {editingProduct.image && (
                  <div className="flex items-center gap-3">
                    <img src={editingProduct.image} alt="Preview" className="w-16 h-16 rounded-lg object-cover bg-black border border-surface-border" />
                    <span className="text-gray-400 text-[11px]">Preview da Imagem do Produto</span>
                  </div>
                )}
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
                  className="px-5 py-2 rounded-xl bg-lp-medium hover:bg-lp-dark text-white font-bold shadow-md"
                >
                  Salvar Produto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
