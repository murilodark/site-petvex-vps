import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, ShieldCheck, User, CreditCard, Phone, Mail, Lock, AlertCircle } from "lucide-react";
import { ClientRegisterInput } from "../types/client";
import { validateClientRegister, formatCPF, formatCNPJ, formatPhone, ValidationError } from "../schemas/client.schema";
import { registerClient } from "../services/client.service";
import { TermsOfServiceContent } from "../../../components/shared/TermsOfServiceContent";

interface ClientSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: {
    id: number;
    name: string;
    slug: string;
    monthly_price: number;
    yearly_price: number;
    color: string;
  } | null;
}

export const ClientSignupModal: React.FC<ClientSignupModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
}) => {
  const [isEmpresa, setIsEmpresa] = useState(false);
  const [formData, setFormData] = useState<Partial<ClientRegisterInput>>({
    name: "",
    cpf: "",
    cnpj: "",
    phone: "",
    email: "",
    password: "",
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const [errors, setErrors] = useState<ValidationError>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !selectedPlan) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cpf") {
      formattedValue = formatCPF(value);
    } else if (name === "cnpj") {
      formattedValue = formatCNPJ(value);
    } else if (name === "phone") {
      formattedValue = formatPhone(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    // Clear validation error when typing
    if (errors[name as keyof ValidationError]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
    setApiError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    const validationErrors = validateClientRegister(formData, isEmpresa);
    if (!acceptedTerms) {
      validationErrors.terms = "Você precisa aceitar os Termos de Serviço para continuar.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      await registerClient({
        name: formData.name!,
        cpf: formData.cpf!.replace(/\D/g, ""),
        cnpj: isEmpresa && formData.cnpj ? formData.cnpj.replace(/\D/g, "") : null,
        phone: formData.phone!.replace(/\D/g, ""),
        email: formData.email!,
        password: formData.password!,
        plan_id: selectedPlan.id,
      });

      setIsSuccess(true);
    } catch (err: any) {
      console.error("Signup error:", err);
      if (err.errors) {
        // Map API field errors
        const newErrors: ValidationError = {};
        Object.keys(err.errors).forEach((key) => {
          const messages = err.errors[key];
          if (Array.isArray(messages) && messages.length > 0) {
            newErrors[key as keyof ValidationError] = messages[0];
          }
        });
        setErrors(newErrors);
      }
      setApiError(err.message || "Erro de conexão com o servidor. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoToClientArea = () => {
    window.location.href = "https://app.petvex.com.br";
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={isLoading ? undefined : onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
        />

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 z-10 my-auto max-h-[calc(100dvh-2rem)] flex flex-col overflow-hidden"
        >
          {/* Header Close Button */}
          {!isLoading && (
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition focus:outline-none z-20"
              aria-label="Fechar"
            >
              <X size={18} />
            </button>
          )}

          {!isSuccess ? (
            /* --- REGISTRATION FORM --- */
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 pb-16 sm:pb-8 scrollbar-thin">
              {/* Header metadata */}
              <div className="mb-6">
                <span
                  style={{ color: selectedPlan.color, backgroundColor: `${selectedPlan.color}10` }}
                  className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full"
                >
                  Plano Selecionado: {selectedPlan.name}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 mt-2 tracking-tight">
                  Simplifique a gestão do seu negócio
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  Crie sua conta em segundos para acessar nossa plataforma corporativa de forma imediata.
                </p>
              </div>

              {/* API error alert */}
              {apiError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 p-3.5 bg-rose-50 border border-rose-100 rounded-2xl text-rose-700 text-xs flex items-start gap-2.5"
                >
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <div className="flex-1 font-medium">{apiError}</div>
                </motion.div>
              )}

              {/* Form elements */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nome completo ou Razão Social */}
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                    {isEmpresa ? "Razão Social / Nome da Empresa" : "Nome Completo"}
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                      <User size={16} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name || ""}
                      onChange={handleInputChange}
                      placeholder={isEmpresa ? "Ex: Pet Shop Amigo Fiel Ltda" : "Ex: Carlos Alberto Silva"}
                      disabled={isLoading}
                      className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-2xl text-sm placeholder:text-slate-400/80 font-sans focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-rose-350 focus:ring-rose-500/20 text-rose-900"
                          : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10 text-slate-900"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Tipo de Cadastro (Segmented Control) */}
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Tipo de Cadastro
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-2xl border border-slate-200/50">
                    <button
                      type="button"
                      disabled={isLoading}
                      onClick={() => {
                        setIsEmpresa(false);
                        setErrors((prev) => ({ ...prev, cpf: undefined, cnpj: undefined }));
                      }}
                      className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        !isEmpresa
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Pessoa Física
                    </button>
                    <button
                      type="button"
                      disabled={isLoading}
                      onClick={() => {
                        setIsEmpresa(true);
                        setErrors((prev) => ({ ...prev, cpf: undefined, cnpj: undefined }));
                      }}
                      className={`py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        isEmpresa
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Empresa
                    </button>
                  </div>
                </div>

                {/* CNPJ (only for Empresa, optional) */}
                {isEmpresa && (
                  <div>
                    <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                      CNPJ (Opcional)
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <CreditCard size={16} />
                      </span>
                      <input
                        type="text"
                        name="cnpj"
                        value={formData.cnpj || ""}
                        onChange={handleInputChange}
                        placeholder="00.000.000/0000-00"
                        disabled={isLoading}
                        className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-2xl text-sm placeholder:text-slate-400/80 font-sans focus:outline-none focus:ring-2 transition-all ${
                          errors.cnpj
                            ? "border-rose-350 focus:ring-rose-500/20 text-rose-900"
                            : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10 text-slate-900"
                        }`}
                      />
                    </div>
                    {errors.cnpj && (
                      <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.cnpj}
                      </p>
                    )}
                    <p className="text-[10px] text-slate-400 font-medium mt-1 leading-normal">
                      Informe o CNPJ da empresa, se possuir. Caso não informe, o sistema utilizará o CPF do responsável como documento principal da empresa.
                    </p>
                  </div>
                )}

                {/* CPF (for both, but has different labels) */}
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                    {isEmpresa ? "CPF do responsável" : "CPF"}
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                      <CreditCard size={16} />
                    </span>
                    <input
                      type="text"
                      name="cpf"
                      value={formData.cpf || ""}
                      onChange={handleInputChange}
                      placeholder="000.000.000-00"
                      disabled={isLoading}
                      className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-2xl text-sm placeholder:text-slate-400/80 font-sans focus:outline-none focus:ring-2 transition-all ${
                        errors.cpf
                          ? "border-rose-350 focus:ring-rose-500/20 text-rose-900"
                          : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10 text-slate-900"
                      }`}
                    />
                  </div>
                  {errors.cpf && (
                    <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.cpf}
                    </p>
                  )}
                  {!isEmpresa && (
                    <p className="text-[10px] text-slate-400 font-medium mt-1 leading-normal">
                      Seu CPF será utilizado como documento principal do cadastro.
                    </p>
                  )}
                </div>

                {/* WhatsApp / Celular */}
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                    WhatsApp (Celular)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                      <Phone size={16} />
                    </span>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone || ""}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      disabled={isLoading}
                      className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-2xl text-sm placeholder:text-slate-400/80 font-sans focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? "border-rose-350 focus:ring-rose-500/20 text-rose-900"
                          : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10 text-slate-900"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* E-mail */}
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                    E-mail Comercial
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                      <Mail size={16} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email || ""}
                      onChange={handleInputChange}
                      placeholder="exemplo@petvex.com.br"
                      disabled={isLoading}
                      className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-2xl text-sm placeholder:text-slate-400/80 font-sans focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-rose-350 focus:ring-rose-500/20 text-rose-900"
                          : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10 text-slate-900"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Senha */}
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                    Senha de Acesso
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                      <Lock size={16} />
                    </span>
                    <input
                      type="password"
                      name="password"
                      value={formData.password || ""}
                      onChange={handleInputChange}
                      placeholder="Mínimo de 6 caracteres"
                      disabled={isLoading}
                      className={`w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border rounded-2xl text-sm placeholder:text-slate-400/80 font-sans focus:outline-none focus:ring-2 transition-all ${
                        errors.password
                          ? "border-rose-350 focus:ring-rose-500/20 text-rose-900"
                          : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10 text-slate-900"
                      }`}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.password}
                    </p>
                  )}
                </div>

                {/* Checkbox de Aceite dos Termos */}
                <div className="pt-2 select-none">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => {
                        setAcceptedTerms(e.target.checked);
                        if (e.target.checked && errors.terms) {
                          setErrors((prev) => ({ ...prev, terms: undefined }));
                        }
                      }}
                      disabled={isLoading}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-550/20 focus:ring-2 cursor-pointer transition"
                    />
                    <span className="text-xs text-slate-600 leading-normal">
                      Li e aceito os{" "}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setShowTermsModal(true);
                        }}
                        className="text-emerald-600 font-bold hover:underline bg-transparent border-none p-0 inline focus:outline-none cursor-pointer align-baseline"
                      >
                        Termos de Serviço
                      </button>
                      .
                    </span>
                  </label>
                  {errors.terms && (
                    <p className="text-[10px] text-rose-600 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.terms}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 bg-slate-900 text-white font-display font-extrabold text-sm py-3.5 px-6 rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-950/10 disabled:opacity-50 cursor-pointer"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Contratar Agora
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>

              {/* Safety notice */}
              <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-450 font-medium">
                <ShieldCheck size={13} className="text-emerald-600" />
                <span>Dados de conexão criptografados e protegidos por TLS.</span>
              </div>
            </div>
          ) : (
            /* --- SUCCESS CONFIRMATION SCREEN --- */
            <div className="p-6 sm:p-8 text-center flex flex-col items-center overflow-y-auto flex-1 pb-16 sm:pb-8 scrollbar-thin">
              {/* Checkmark animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 border border-emerald-100"
              >
                <Check size={32} className="stroke-[3]" />
              </motion.div>

              {/* Title & desc */}
              <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight leading-none mb-3">
                Cadastro realizado com sucesso!
              </h3>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-8">
                Parabéns! Sua conta corporativa foi provisionada no sistema. Agora você pode prosseguir para a área do cliente e configurar o seu pagamento.
              </p>

              {/* Checklist details */}
              <div className="w-full text-left bg-slate-50 rounded-2xl border border-slate-100 p-4 mb-8 space-y-3 font-sans">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-1">
                  Próximos Passos
                </span>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="text-xs text-slate-700 leading-tight">
                    <strong>Acesse a Área do Cliente</strong> no painel web do Petvex.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="text-xs text-slate-700 leading-tight">
                    <strong>Conclua a configuração de pagamento</strong> segura e libere todos os módulos de agendamento e financeiro.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="text-xs text-slate-700 leading-tight">
                    <strong>Comece a gerenciar</strong> seus clientes, pets e comissões de forma integrada!
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleGoToClientArea}
                className="w-full bg-emerald-600 text-white font-display font-extrabold text-sm py-4 px-6 rounded-2xl hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                Acessar Área do Cliente
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* Nested Terms of Service Modal */}
          <AnimatePresence>
            {showTermsModal && (
              <div className="absolute inset-0 z-40 flex items-center justify-center p-2 sm:p-4 bg-slate-950/40 backdrop-blur-xs rounded-3xl overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ type: "spring", duration: 0.4 }}
                  className="relative w-full h-full bg-white rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-slate-100"
                >
                  {/* Modal Header */}
                  <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 shrink-0">
                    <span className="font-display font-black text-base text-slate-900">
                      Termos de Serviço
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowTermsModal(false)}
                      className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition focus:outline-none"
                      aria-label="Fechar Termos"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6 overflow-y-auto flex-1 scrollbar-thin pb-12">
                    <TermsOfServiceContent />
                  </div>

                  {/* Modal Footer */}
                  <div className="p-4 border-t border-slate-100 flex justify-end bg-slate-50/50 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setAcceptedTerms(true);
                        setShowTermsModal(false);
                        if (errors.terms) {
                          setErrors((prev) => ({ ...prev, terms: undefined }));
                        }
                      }}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs py-2.5 px-5 rounded-xl transition-all shadow-md shadow-emerald-600/10 cursor-pointer"
                    >
                      Aceitar Termos
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ClientSignupModal;
