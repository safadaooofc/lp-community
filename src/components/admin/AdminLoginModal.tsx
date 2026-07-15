import React, { useState } from 'react';
import { adminStore } from '../../services/adminStore';
import { Lock, ShieldCheck, KeyRound, X, AlertCircle } from 'lucide-react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = adminStore.login(password);
    if (ok) {
      setError('');
      setPassword('');
      onSuccess();
    } else {
      setError('Senha incorreta. Verifique a variável de ambiente ou a senha configurada.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#060a08] border border-surface-border rounded-2xl max-w-sm w-full p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-lp-dark/40 border border-lp-dark text-lp-light mx-auto flex items-center justify-center mb-3 shadow-inner">
            <Lock size={22} />
          </div>
          <h3 className="font-display font-extrabold text-white text-lg tracking-tight">
            Acesso Restrito ao Painel
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Painel de controle administrativo LP Community. Informe sua chave de segurança.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-950/60 border border-red-800/60 text-red-300 text-xs flex items-start gap-2">
            <AlertCircle size={15} className="shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-gray-300 mb-1.5">
              Senha Administrativa
            </label>
            <div className="relative">
              <KeyRound size={15} className="absolute left-3.5 top-3 text-gray-400" />
              <input
                type="password"
                required
                autoFocus
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha administrativa..."
                className="w-full bg-surface-hover border border-surface-border rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-lp-medium"
              />
            </div>
            <p className="text-[10px] text-gray-500 mt-1">
              Dica Padrão de Acesso: <code className="text-gray-300">admin123</code> ou <code className="text-gray-300">import.meta.env.VITE_ADMIN_PASSWORD</code>
            </p>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-lp-medium hover:bg-lp-dark text-white font-extrabold text-xs shadow-md transition-all"
          >
            <ShieldCheck size={15} />
            <span>Autenticar no Sistema</span>
          </button>
        </form>
      </div>
    </div>
  );
};
