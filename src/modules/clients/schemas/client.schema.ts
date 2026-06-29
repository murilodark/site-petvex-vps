import { ClientRegisterInput } from "../types/client";

export interface ValidationError {
  name?: string;
  document?: string;
  cpf?: string;
  cnpj?: string;
  phone?: string;
  email?: string;
  password?: string;
  terms?: string;
}

// CPF validation logic
export function isValidCPF(cpf: string): boolean {
  const cleanCpf = cpf.replace(/[^\d]+/g, "");
  if (cleanCpf.length !== 11) return false;

  // Reject common invalid sequences like 111.111.111-11
  if (/^(\d)\1{10}$/.test(cleanCpf)) return false;

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanCpf.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanCpf.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCpf.substring(10, 11))) return false;

  return true;
}

// CNPJ validation logic
export function isValidCNPJ(cnpj: string): boolean {
  const cleanCnpj = cnpj.replace(/[^\d]+/g, "");
  if (cleanCnpj.length !== 14) return false;

  // Reject common invalid sequences
  if (/^(\d)\1{13}$/.test(cleanCnpj)) return false;

  let length = cleanCnpj.length - 2;
  let numbers = cleanCnpj.substring(0, length);
  const digits = cleanCnpj.substring(length);
  let sum = 0;
  let pos = length - 7;

  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;

  length = length + 1;
  numbers = cleanCnpj.substring(0, length);
  sum = 0;
  pos = length - 7;

  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) return false;

  return true;
}

// Formats document input (CPF or CNPJ) as user types
export function formatDocument(value: string): string {
  const cleanValue = value.replace(/\D/g, "");
  if (cleanValue.length <= 11) {
    // Format as CPF: 999.999.999-99
    return cleanValue
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    // Format as CNPJ: 99.999.999/9999-99
    return cleanValue
      .slice(0, 14)
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
}

// Formats phone input (Celular) as user types
export function formatPhone(value: string): string {
  const cleanValue = value.replace(/\D/g, "");
  if (cleanValue.length <= 10) {
    // Format as (99) 9999-9999
    return cleanValue
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{4})(\d)/g, "$1-$2");
  } else {
    // Format as (99) 99999-9999
    return cleanValue
      .slice(0, 11)
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d)/g, "$1-$2");
  }
}

export function formatCPF(value: string): string {
  const cleanValue = value.replace(/\D/g, "").slice(0, 11);
  return cleanValue
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function formatCNPJ(value: string): string {
  const cleanValue = value.replace(/\D/g, "").slice(0, 14);
  return cleanValue
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
}

// Schema validation runner
export function validateClientRegister(data: Partial<ClientRegisterInput>, isEmpresa: boolean): ValidationError {
  const errors: ValidationError = {};

  if (!data.name || data.name.trim().length < 3) {
    errors.name = isEmpresa
      ? "Razão Social / Nome da Empresa deve ter pelo menos 3 caracteres."
      : "Nome completo deve ter pelo menos 3 caracteres.";
  }

  // CPF is always required
  const cleanCpf = (data.cpf || "").replace(/\D/g, "");
  if (!cleanCpf) {
    errors.cpf = isEmpresa ? "O CPF do responsável é obrigatório." : "O CPF é obrigatório.";
  } else if (cleanCpf.length !== 11) {
    errors.cpf = "CPF deve conter exatamente 11 dígitos.";
  } else if (!isValidCPF(cleanCpf)) {
    errors.cpf = "CPF inválido.";
  }

  // CNPJ is optional (only for Company)
  if (isEmpresa && data.cnpj) {
    const cleanCnpj = data.cnpj.replace(/\D/g, "");
    if (cleanCnpj && cleanCnpj.length !== 14) {
      errors.cnpj = "CNPJ deve conter exatamente 14 dígitos.";
    } else if (cleanCnpj && !isValidCNPJ(cleanCnpj)) {
      errors.cnpj = "CNPJ inválido.";
    }
  }

  const cleanPhone = (data.phone || "").replace(/\D/g, "");
  if (!cleanPhone) {
    errors.phone = "O telefone celular é obrigatório.";
  } else if (cleanPhone.length < 10 || cleanPhone.length > 11) {
    errors.phone = "Celular inválido (deve conter DDD e o número).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email) {
    errors.email = "O e-mail é obrigatório.";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Insira um endereço de e-mail válido.";
  }

  if (!data.password || data.password.length < 6) {
    errors.password = "A senha deve conter pelo menos 6 caracteres.";
  }

  return errors;
}
