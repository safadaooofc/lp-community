import React, { useState } from 'react';
import { Testimonial } from '../../../types';
import { adminStore, FullStoreState } from '../../../services/adminStore';
import { Plus, Edit3, Trash2, Star, MessageSquareQuote, X } from 'lucide-react';

interface ReviewsViewProps {
  storeState: FullStoreState;
  onShowToast: (msg: string) => void;
}

export const ReviewsView: React.FC<ReviewsViewProps> = ({ storeState, onShowToast }) => {
  const [editingRev, setEditingRev] = useState<Testimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAdd = () => {
    setEditingRev({
      id: `rev-${Date.now().toString().slice(-4)}`,
      author: '',
      platform: 'PC',
      date: 'Hoje',
      rating: 5,
      comment: '',
      verifiedPurchase: true,
      productBought: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (rev: Testimonial) => {
    setEditingRev({ ...rev });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, author: string) => {
    if (confirm(`Excluir depoimento de "${author}"?`)) {
      adminStore.deleteReview(id);
      onShowToast('Depoimento removido!');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRev) return;
    adminStore.saveReview(editingRev);
    setIsModalOpen(false);
    onShowToast('Depoimento salvo com sucesso!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-5 rounded-2xl bg-[#060a08] border border-surface-border/80">
        <div>
          <h3 className="font-display font-bold text-white text-base flex items-center gap-2">
            <MessageSquareQuote size={16} className="text-lp-light" />
            <span>Gerenciar Avaliações & Depoimentos</span>
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Adicione ou edite os depoimentos de clientes que aparecem no carrossel de confiança.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-lp-medium hover:bg-lp-dark text-white font-bold text-xs shadow-md"
        >
          <Plus size={15} />
          <span>Novo Depoimento</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {storeState.reviews.map((rev) => (
          <div
            key={rev.id}
            className="p-5 rounded-2xl bg-[#060a08] border border-surface-border/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white">{rev.author}</span>
                <span className="px-2 py-0.5 rounded bg-surface-hover text-[10px] text-gray-300 font-bold">
                  {rev.platform}
                </span>
              </div>

              <div className="flex items-center gap-1 text-amber-500 mb-2">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
                <span className="text-[10px] text-gray-400 ml-1">{rev.date}</span>
              </div>

              <p className="text-xs text-gray-300 italic">"{rev.comment}"</p>
              <div className="mt-2 text-[10px] text-gray-400">
                Produto: <strong className="text-lp-light">{rev.productBought}</strong>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-surface-border/50 flex justify-end gap-2">
              <button
                onClick={() => handleOpenEdit(rev)}
                className="px-3 py-1.5 rounded-lg bg-surface-hover hover:bg-lp-dark/40 text-gray-300 hover:text-white text-xs font-bold flex items-center gap-1"
              >
                <Edit3 size={13} />
                <span>Editar</span>
              </button>
              <button
                onClick={() => handleDelete(rev.id, rev.author)}
                className="px-3 py-1.5 rounded-lg bg-surface-hover hover:bg-red-950 text-gray-300 hover:text-red-400 text-xs font-bold flex items-center gap-1"
              >
                <Trash2 size={13} />
                <span>Excluir</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && editingRev && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#060a08] border border-surface-border rounded-2xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>
            <h3 className="font-display font-extrabold text-white text-lg mb-4">
              {storeState.reviews.some(r => r.id === editingRev.id) ? 'Editar Avaliação' : 'Nova Avaliação'}
            </h3>

            <form onSubmit={handleSave} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-300 mb-1">Autor / Cliente *</label>
                  <input
                    type="text"
                    required
                    value={editingRev.author}
                    onChange={(e) => setEditingRev({ ...editingRev, author: e.target.value })}
                    className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-300 mb-1">Plataforma</label>
                  <select
                    value={editingRev.platform}
                    onChange={(e) => setEditingRev({ ...editingRev, platform: e.target.value as 'PC' | 'PS5' | 'Xbox' })}
                    className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                  >
                    <option value="PC">PC</option>
                    <option value="PS5">PS5</option>
                    <option value="Xbox">Xbox</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-300 mb-1">Produto Contratado</label>
                <input
                  type="text"
                  value={editingRev.productBought}
                  onChange={(e) => setEditingRev({ ...editingRev, productBought: e.target.value })}
                  className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-300 mb-1">Comentário / Depoimento *</label>
                <textarea
                  rows={3}
                  required
                  value={editingRev.comment}
                  onChange={(e) => setEditingRev({ ...editingRev, comment: e.target.value })}
                  className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-surface-border">
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
