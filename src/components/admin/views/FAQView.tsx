import React, { useState } from 'react';
import { FAQItem } from '../../../types';
import { adminStore, FullStoreState } from '../../../services/adminStore';
import { Plus, Edit3, Trash2, HelpCircle, X } from 'lucide-react';

interface FAQViewProps {
  storeState: FullStoreState;
  onShowToast: (msg: string) => void;
}

export const FAQView: React.FC<FAQViewProps> = ({ storeState, onShowToast }) => {
  const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAdd = () => {
    setEditingFaq({
      id: `faq-${Date.now().toString().slice(-4)}`,
      question: '',
      answer: '',
      category: 'Geral'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (faq: FAQItem) => {
    setEditingFaq({ ...faq });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, q: string) => {
    if (confirm(`Excluir pergunta "${q}"?`)) {
      adminStore.deleteFAQ(id);
      onShowToast('Pergunta FAQ removida!');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFaq) return;
    adminStore.saveFAQ(editingFaq);
    setIsModalOpen(false);
    onShowToast('Pergunta FAQ salva com sucesso!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-5 rounded-2xl bg-[#060a08] border border-surface-border/80">
        <div>
          <h3 className="font-display font-bold text-white text-base flex items-center gap-2">
            <HelpCircle size={16} className="text-lp-light" />
            <span>Gerenciar Perguntas Frequentes (FAQ)</span>
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Mantenha suas dúvidas e garantias sempre claras para aumentar a conversão.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-lp-medium hover:bg-lp-dark text-white font-bold text-xs shadow-md"
        >
          <Plus size={15} />
          <span>Nova Pergunta</span>
        </button>
      </div>

      <div className="space-y-3">
        {storeState.faq.map((f) => (
          <div
            key={f.id}
            className="p-5 rounded-2xl bg-[#060a08] border border-surface-border/80 flex items-start justify-between gap-4"
          >
            <div>
              <h4 className="font-display font-bold text-white text-sm">
                {f.question}
              </h4>
              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                {f.answer}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleOpenEdit(f)}
                className="p-2 rounded-lg bg-surface-hover hover:bg-lp-dark/40 text-gray-300 hover:text-white"
                title="Editar"
              >
                <Edit3 size={14} />
              </button>
              <button
                onClick={() => handleDelete(f.id, f.question)}
                className="p-2 rounded-lg bg-surface-hover hover:bg-red-950 text-gray-300 hover:text-red-400"
                title="Excluir"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && editingFaq && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#060a08] border border-surface-border rounded-2xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={18} />
            </button>
            <h3 className="font-display font-extrabold text-white text-lg mb-4">
              {storeState.faq.some(f => f.id === editingFaq.id) ? 'Editar Pergunta FAQ' : 'Nova Pergunta FAQ'}
            </h3>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-300 mb-1">Pergunta *</label>
                <input
                  type="text"
                  required
                  value={editingFaq.question}
                  onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                  className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-300 mb-1">Resposta Detalhada *</label>
                <textarea
                  rows={4}
                  required
                  value={editingFaq.answer}
                  onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
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
