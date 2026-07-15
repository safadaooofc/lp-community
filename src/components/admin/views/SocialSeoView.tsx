import React, { useState } from 'react';
import { adminStore, FullStoreState } from '../../../services/adminStore';
import { Share2, Globe, Check, Download, Upload, RefreshCw, Lock } from 'lucide-react';

interface SocialSeoViewProps {
  storeState: FullStoreState;
  onShowToast: (msg: string) => void;
}

export const SocialSeoView: React.FC<SocialSeoViewProps> = ({ storeState, onShowToast }) => {
  const [social, setSocial] = useState({ ...storeState.config.social });
  const [seo, setSeo] = useState({ ...storeState.config.seo });
  const [importJsonText, setImportJsonText] = useState('');

  const handleSaveSocial = (e: React.FormEvent) => {
    e.preventDefault();
    adminStore.updateConfig({ social });
    onShowToast('Canais e links sociais atualizados no site!');
  };

  const handleSaveSeo = (e: React.FormEvent) => {
    e.preventDefault();
    adminStore.updateConfig({ seo });
    onShowToast('Meta tags SEO & Open Graph atualizadas com sucesso!');
  };

  const handleExportBackup = () => {
    const backupStr = adminStore.exportBackup();
    const blob = new Blob([backupStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lp-community-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    onShowToast('Backup JSON exportado com sucesso!');
  };

  const handleImportBackup = () => {
    if (!importJsonText.trim()) return;
    const ok = adminStore.importBackup(importJsonText);
    if (ok) {
      onShowToast('Banco de dados restaurado com sucesso do backup!');
      setImportJsonText('');
    } else {
      alert('Arquivo JSON inválido.');
    }
  };

  const handleFactoryReset = () => {
    if (confirm('Atenção: Deseja restaurar todos os produtos e configurações originais da loja?')) {
      adminStore.resetToDefault();
      onShowToast('Painel restaurado aos valores originais de fábrica!');
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Redes Sociais */}
      <div className="p-6 rounded-2xl bg-[#060a08] border border-surface-border/80">
        <h3 className="font-display font-extrabold text-white text-lg flex items-center gap-2 mb-1">
          <Share2 className="text-lp-light" size={18} />
          <span>Configuração de Redes & Comunidade Discord</span>
        </h3>
        <p className="text-xs text-gray-400 mb-6">
          Os links abaixo são sincronizados automaticamente na aba de Canais de Atendimento e Rodapé.
        </p>

        <form onSubmit={handleSaveSocial} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-bold text-gray-300 mb-1">Convite Servidor Discord Geral</label>
              <input
                type="url"
                value={social.discordServerUrl}
                onChange={(e) => setSocial({ ...social, discordServerUrl: e.target.value })}
                className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-300 mb-1">Link Suporte & Tickets VIP</label>
              <input
                type="url"
                value={social.discordSupportUrl}
                onChange={(e) => setSocial({ ...social, discordSupportUrl: e.target.value })}
                className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-300 mb-1">Canal de Feedbacks & Entregas</label>
              <input
                type="url"
                value={social.discordFeedbacksUrl}
                onChange={(e) => setSocial({ ...social, discordFeedbacksUrl: e.target.value })}
                className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
              />
            </div>
          </div>

          <div className="flex justify-end pt-3 border-t border-surface-border">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lp-medium hover:bg-lp-dark text-white font-bold shadow-md"
            >
              <Check size={14} />
              <span>Salvar Canais</span>
            </button>
          </div>
        </form>
      </div>

      {/* Configurações SEO */}
      <div className="p-6 rounded-2xl bg-[#060a08] border border-surface-border/80">
        <h3 className="font-display font-extrabold text-white text-lg flex items-center gap-2 mb-1">
          <Globe className="text-lp-light" size={18} />
          <span>Meta Tags, SEO & Compartilhamento (Open Graph)</span>
        </h3>
        <p className="text-xs text-gray-400 mb-6">
          Otimize o ranqueamento do site no Google e como ele aparece ao compartilhar links.
        </p>

        <form onSubmit={handleSaveSeo} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-gray-300 mb-1">Meta Title do Site</label>
            <input
              type="text"
              value={seo.metaTitle}
              onChange={(e) => setSeo({ ...seo, metaTitle: e.target.value })}
              className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
            />
          </div>

          <div>
            <label className="block font-bold text-gray-300 mb-1">Meta Description</label>
            <textarea
              rows={2}
              value={seo.metaDescription}
              onChange={(e) => setSeo({ ...seo, metaDescription: e.target.value })}
              className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
            />
          </div>

          <div>
            <label className="block font-bold text-gray-300 mb-1">Keywords / Palavras-Chave</label>
            <input
              type="text"
              value={seo.metaKeywords}
              onChange={(e) => setSeo({ ...seo, metaKeywords: e.target.value })}
              className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-300 mb-1">OG Title</label>
              <input
                type="text"
                value={seo.ogTitle}
                onChange={(e) => setSeo({ ...seo, ogTitle: e.target.value })}
                className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-300 mb-1">Imagem de Compartilhamento (OG Image)</label>
              <input
                type="text"
                value={seo.ogImage}
                onChange={(e) => setSeo({ ...seo, ogImage: e.target.value })}
                className="w-full bg-surface-hover border border-surface-border rounded-xl px-3 py-2 text-white"
              />
            </div>
          </div>

          <div className="flex justify-end pt-3 border-t border-surface-border">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lp-medium hover:bg-lp-dark text-white font-bold shadow-md"
            >
              <Check size={14} />
              <span>Salvar SEO</span>
            </button>
          </div>
        </form>
      </div>

      {/* Backup & Restauração */}
      <div className="p-6 rounded-2xl bg-[#060a08] border border-surface-border/80">
        <h3 className="font-display font-extrabold text-white text-lg flex items-center gap-2 mb-1">
          <Download className="text-lp-light" size={18} />
          <span>Persistência, Exportação de Backup & Restauração</span>
        </h3>
        <p className="text-xs text-gray-400 mb-6">
          Exporte todo o seu catálogo e configurações em JSON ou importe um arquivo de backup.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="p-4 rounded-xl bg-surface-hover/50 border border-surface-border space-y-3">
            <h4 className="font-bold text-white text-sm">Exportar Banco do Site</h4>
            <p className="text-gray-400 text-xs">
              Baixe todos os produtos, preços e customizações em um arquivo JSON.
            </p>
            <button
              onClick={handleExportBackup}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-lp-dark hover:bg-lp-medium text-white font-bold"
            >
              <Download size={14} />
              <span>Baixar Backup (.JSON)</span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-surface-hover/50 border border-surface-border space-y-3">
            <h4 className="font-bold text-white text-sm">Importar ou Colar Backup JSON</h4>
            <textarea
              rows={3}
              value={importJsonText}
              onChange={(e) => setImportJsonText(e.target.value)}
              placeholder="Cole aqui o conteúdo JSON do backup..."
              className="w-full bg-black border border-surface-border rounded-xl p-2 text-white font-mono text-[11px]"
            />
            <div className="flex items-center justify-between">
              <button
                onClick={handleFactoryReset}
                className="text-red-400 hover:text-red-300 text-xs font-bold flex items-center gap-1"
              >
                <RefreshCw size={13} />
                <span>Restaurar Fábrica</span>
              </button>
              <button
                onClick={handleImportBackup}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold"
              >
                <Upload size={14} />
                <span>Importar Dados</span>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
