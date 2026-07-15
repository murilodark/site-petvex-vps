import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { X, ArrowRight, ShieldCheck, Phone, AlertCircle, RefreshCw, ArrowLeft } from "lucide-react";

export interface PhoneVerificationModalProps {
  isOpen: boolean;
  phone: string;
  onConfirm: (code: string) => Promise<void>;
  onResend: () => Promise<void>;
  onBack: () => void;
  onClose: () => void;
}

export const PhoneVerificationModal: React.FC<PhoneVerificationModalProps> = ({
  isOpen,
  phone,
  onConfirm,
  onResend,
  onBack,
  onClose,
}) => {
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(60);
  const [resendSuccess, setResendSuccess] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
      setCode("");
      setError(null);
      setResendCooldown(60);
      setResendSuccess(false);
    }
  }, [isOpen]);

  // Cooldown timer
  useEffect(() => {
    if (resendCooldown <= 0) return;

    const timer = setInterval(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [resendCooldown]);

  if (!isOpen) return null;

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCode(value);
    setError(null);
    setResendSuccess(false);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    setCode(pastedData);
  };

  const handleConfirm = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (code.length < 6) {
      setError("O código de verificação deve ter 6 dígitos.");
      return;
    }

    setIsVerifying(true);
    setError(null);
    setResendSuccess(false);

    try {
      await onConfirm(code);
    } catch (err: any) {
      setError(err.message || "Erro ao confirmar código. Verifique se digitou corretamente.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendClick = async () => {
    if (resendCooldown > 0 || isResending) return;

    setIsResending(true);
    setError(null);
    setResendSuccess(false);

    try {
      await onResend();
      setResendSuccess(true);
      setResendCooldown(60);
    } catch (err: any) {
      setError(err.message || "Não foi possível reenviar o SMS. Tente novamente.");
    } finally {
      setIsResending(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div
        onClick={isVerifying ? undefined : onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
      />

      {/* Modal content box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 z-10 my-auto flex flex-col overflow-hidden p-6 sm:p-8"
      >
        {/* Header Close Button */}
        {!isVerifying && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition focus:outline-none z-20 cursor-pointer"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        )}

        {/* Header visual */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 border border-emerald-100 shadow-sm">
            <Phone size={22} className="stroke-[2.5]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 tracking-tight leading-none">
            Verifique seu celular
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            Enviamos um código de verificação via SMS para o número:
            <strong className="block text-slate-700 mt-0.5">{phone}</strong>
          </p>
        </div>

        {/* Error/Success alerts */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-rose-50 border border-rose-100 rounded-2xl text-rose-700 text-xs flex items-start gap-2.5 font-medium"
          >
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <div className="flex-1">{error}</div>
          </motion.div>
        )}

        {resendSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-700 text-xs flex items-start gap-2.5 font-medium"
          >
            <ShieldCheck size={16} className="shrink-0 mt-0.5" />
            <div className="flex-1">Código reenviado com sucesso via SMS!</div>
          </motion.div>
        )}

        {/* Verification Form */}
        <form onSubmit={handleConfirm} className="space-y-5">
          <div>
            <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2 text-center">
              Código de 6 dígitos
            </label>
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="one-time-code"
              value={code}
              onChange={handleCodeChange}
              onPaste={handlePaste}
              placeholder="000000"
              disabled={isVerifying}
              className="w-full text-center tracking-[0.5em] text-2xl font-mono font-bold py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-900 placeholder:text-slate-300"
            />
          </div>

          {/* Confirm Button */}
          <button
            type="submit"
            disabled={code.length < 6 || isVerifying}
            className="w-full bg-slate-900 text-white font-display font-extrabold text-sm py-3.5 px-6 rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-950/10 disabled:opacity-50 cursor-pointer"
          >
            {isVerifying ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Confirmar código
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Cooldown/Resend & Back Actions */}
        <div className="mt-6 flex flex-col items-center gap-3 border-t border-slate-100 pt-5">
          <button
            type="button"
            onClick={handleResendClick}
            disabled={resendCooldown > 0 || isResending || isVerifying}
            className="text-xs font-bold text-emerald-600 hover:text-emerald-500 hover:underline disabled:text-slate-400 disabled:no-underline flex items-center gap-1.5 transition cursor-pointer"
          >
            <RefreshCw size={12} className={isResending ? "animate-spin" : ""} />
            {resendCooldown > 0
              ? `Reenviar código em ${formatTime(resendCooldown)}`
              : "Reenviar código"}
          </button>

          <button
            type="button"
            onClick={onBack}
            disabled={isVerifying}
            className="text-xs font-bold text-slate-500 hover:text-slate-700 flex items-center gap-1 transition cursor-pointer mt-1"
          >
            <ArrowLeft size={12} />
            Alterar número de celular
          </button>
        </div>

        {/* Footer info */}
        <div className="mt-5 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-medium">
          <ShieldCheck size={13} className="text-emerald-600" />
          <span>Autenticação de telefone protegida por Firebase.</span>
        </div>
      </motion.div>
    </div>
  );
};
