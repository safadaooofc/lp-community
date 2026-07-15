import React, { useState } from 'react';
import { adminStore, FullStoreState } from '../../../services/adminStore';
import { LayoutTemplate, Check, Upload } from 'lucide-react';

interface HeroViewProps {
  storeState: FullStoreState;
  onShowToast: (msg: string) => void;
}

export const HeroView: React.FC<HeroViewProps> = ({ storeState, onShowToast }) => {
  const [heroConfig, setHeroConfig] = useState({ ...storeState.config.hero });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    adminStore.updateConfig({ hero: heroConfig });
    onShowToast('Seção Hero & Banner atualizada com sucesso!');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeroConfig({ ...heroConfig, backgroundImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-[#060a08] border border-surface-border/80">
        <h3 className="font-display font-extrabold text-white text-lg flex items-center gap-2 mb-1">
          <LayoutTemplate className="text-lp-light" size={18} />
          <span>Editor do Hero & Banner Principal</span>
        </h3>
        <p className="text-xs text-gray-400 mb-6">
          Personalize as manchetes principais, subtítulo e botões de ação que aparecem no topo da LP Community.
        </p>

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-gray-300 mb-1">Selo Superior (Badge)</label>
            <input
              type="text"
              value={heroConfig.badge}
              onChange={(e) => setHeroConfig({ ...heroConfig, badge: e.target.value })}
              className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-300 mb-1">Título Linha 1 (Branco)</label>
              <input
                type="text"
                value={heroConfig.titleLine1}
                onChange={(e) => setHeroConfig({ ...heroConfig, titleLine1: e.target.value })}
                className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-300 mb-1">Título Linha 2 (Verde Destaque)</label>
              <input
                type="text"
                value={heroConfig.titleLine2Green}
                onChange={(e) => setHeroConfig({ ...heroConfig, titleLine2Green: e.target.value })}
                className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-gray-300 mb-1">Subtítulo Explicativo</label>
            <textarea
              rows={3}
              value={heroConfig.subtitle}
              onChange={(e) => setHeroConfig({ ...heroConfig, subtitle: e.target.value })}
              className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-300 mb-1">Texto Botão Primário</label>
              <input
                type="text"
                value={heroConfig.primaryButtonText}
                onChange={(e) => setHeroConfig({ ...heroConfig, primaryButtonText: e.target.value })}
                className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-300 mb-1">Texto Botão Secundário</label>
              <input
                type="text"
                value={heroConfig.secondaryButtonText}
                onChange={(e) => setHeroConfig({ ...heroConfig, secondaryButtonText: e.target.value })}
                className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-gray-300 mb-1">Imagem de Fundo (URL ou Upload)</label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={heroConfig.backgroundImage}
                onChange={(e) => setHeroConfig({ ...heroConfig, backgroundImage: e.target.value })}
                className="flex-1 bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
              />
              <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-hover border border-surface-border text-xs cursor-pointer hover:bg-surface-border/60">
                <Upload size={13} />
                <span>Upload</span>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-surface-border">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lp-medium hover:bg-lp-dark text-white font-bold shadow-md"
            >
              <Check size={14} />
              <span>Salvar Hero & Banner</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
