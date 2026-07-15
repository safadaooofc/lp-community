import React, { useState } from 'react';
import { adminStore, FullStoreState, applyLiveColors } from '../../../services/adminStore';
import { Palette, Check, RefreshCw, Eye } from 'lucide-react';

interface ColorsViewProps {
  storeState: FullStoreState;
  onShowToast: (msg: string) => void;
}

export const ColorsView: React.FC<ColorsViewProps> = ({ storeState, onShowToast }) => {
  const [colors, setColors] = useState({ ...storeState.config.colors });

  const handleColorChange = (key: keyof typeof colors, val: string) => {
    const updated = { ...colors, [key]: val };
    setColors(updated);
    applyLiveColors(updated);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    adminStore.updateConfig({ colors });
    onShowToast('Cores da identidade visual aplicadas no site!');
  };

  const handleReset = () => {
    const defaultColors = {
      primaryGreen: '#0D5C3B',
      mediumGreen: '#1F8A4D',
      lightGreen: '#22C55E',
      backgroundColor: '#000000',
      cardBackgroundColor: '#060A08',
      borderColor: '#16281E'
    };
    setColors(defaultColors);
    applyLiveColors(defaultColors);
    adminStore.updateConfig({ colors: defaultColors });
    onShowToast('Cores restauradas para o verde institucional e fundo preto puro.');
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-[#060a08] border border-surface-border/80">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-display font-extrabold text-white text-lg flex items-center gap-2">
              <Palette className="text-lp-light" size={18} />
              <span>Editor Visual de Cores & Identidade LP Community</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Altere os tons de verde, fundo preto e contraste. As alterações refletem instantaneamente nas variáveis CSS do site.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-hover hover:bg-surface-border text-gray-300 text-xs font-bold transition-all"
          >
            <RefreshCw size={13} />
            <span>Padrão Oficial</span>
          </button>
        </div>

        <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="space-y-4">
            <div>
              <label className="block font-bold text-gray-300 mb-1">Verde Escuro Principal (Bordas / Destaques)</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={colors.primaryGreen}
                  onChange={(e) => handleColorChange('primaryGreen', e.target.value)}
                  className="w-12 h-10 rounded-lg bg-transparent cursor-pointer border border-surface-border"
                />
                <input
                  type="text"
                  value={colors.primaryGreen}
                  onChange={(e) => handleColorChange('primaryGreen', e.target.value)}
                  className="flex-1 bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-gray-300 mb-1">Verde Médio (Botões de Ação / Destaques)</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={colors.mediumGreen}
                  onChange={(e) => handleColorChange('mediumGreen', e.target.value)}
                  className="w-12 h-10 rounded-lg bg-transparent cursor-pointer border border-surface-border"
                />
                <input
                  type="text"
                  value={colors.mediumGreen}
                  onChange={(e) => handleColorChange('mediumGreen', e.target.value)}
                  className="flex-1 bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-gray-300 mb-1">Verde Claro (Badges / Ações Secundárias)</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={colors.lightGreen}
                  onChange={(e) => handleColorChange('lightGreen', e.target.value)}
                  className="w-12 h-10 rounded-lg bg-transparent cursor-pointer border border-surface-border"
                />
                <input
                  type="text"
                  value={colors.lightGreen}
                  onChange={(e) => handleColorChange('lightGreen', e.target.value)}
                  className="flex-1 bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block font-bold text-gray-300 mb-1">Cor de Fundo Principal (Sempre Preto #000000)</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={colors.backgroundColor}
                  onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
                  className="w-12 h-10 rounded-lg bg-transparent cursor-pointer border border-surface-border"
                />
                <input
                  type="text"
                  value={colors.backgroundColor}
                  onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
                  className="flex-1 bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-gray-300 mb-1">Fundo de Cards & Modais</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={colors.cardBackgroundColor}
                  onChange={(e) => handleColorChange('cardBackgroundColor', e.target.value)}
                  className="w-12 h-10 rounded-lg bg-transparent cursor-pointer border border-surface-border"
                />
                <input
                  type="text"
                  value={colors.cardBackgroundColor}
                  onChange={(e) => handleColorChange('cardBackgroundColor', e.target.value)}
                  className="flex-1 bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-gray-300 mb-1">Cor das Bordas dos Cards</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={colors.borderColor}
                  onChange={(e) => handleColorChange('borderColor', e.target.value)}
                  className="w-12 h-10 rounded-lg bg-transparent cursor-pointer border border-surface-border"
                />
                <input
                  type="text"
                  value={colors.borderColor}
                  onChange={(e) => handleColorChange('borderColor', e.target.value)}
                  className="flex-1 bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-end gap-3 pt-4 border-t border-surface-border">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lp-medium hover:bg-lp-dark text-white font-bold shadow-md"
            >
              <Check size={14} />
              <span>Salvar & Aplicar Cores no Site</span>
            </button>
          </div>
        </form>
      </div>

      {/* Box de Preview da Identidade */}
      <div
        className="p-6 rounded-2xl border"
        style={{
          backgroundColor: colors.cardBackgroundColor,
          borderColor: colors.primaryGreen
        }}
      >
        <h4 className="font-display font-extrabold text-white text-base mb-2">
          Preview Instantâneo do Card com sua Paleta
        </h4>
        <p className="text-xs text-gray-400 mb-4">
          Veja abaixo como um card ou botão se comporta com a combinação escolhida:
        </p>
        <div className="flex items-center gap-4">
          <button
            style={{ backgroundColor: colors.mediumGreen }}
            className="px-4 py-2 rounded-xl text-white font-bold text-xs shadow-md"
          >
            Botão de Ação Primária
          </button>
          <span
            style={{ color: colors.lightGreen, borderColor: colors.primaryGreen }}
            className="px-3 py-1 rounded-full border text-xs font-bold"
          >
            Selo de Garantia LP
          </span>
        </div>
      </div>
    </div>
  );
};
