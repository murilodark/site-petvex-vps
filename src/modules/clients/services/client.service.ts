import { ClientRegisterInput, ClientRegisterResponse } from "../types/client";

const API_BASE_URL = "https://api.petvex.com.br/api/v1";

export async function registerClient(input: ClientRegisterInput): Promise<ClientRegisterResponse> {
  const cleanCpf = input.cpf.replace(/\D/g, "");
  const cleanPhone = input.phone.replace(/\D/g, "");
  
  // Sanitizar account_slug: lowercase, sem acentos, sem espaços, sem caracteres especiais
  const cleanSlug = (input.account_slug || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

  const payload: any = {
    tenant_name: input.tenant_name,
    account_slug: cleanSlug,
    user_name: input.user_name,
    cpf: cleanCpf,
    phone: cleanPhone,
    email: input.email,
    password: input.password,
    password_confirmation: input.password_confirmation,
    plan_id: input.plan_id
  };

  const response = await fetch(`${API_BASE_URL}/public/new-client`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    // If the API returns a validation error (e.g. status 422), we throw it
    const errorMessage = data.message || "Erro ao realizar o cadastro. Por favor, verifique os dados.";
    const error = new Error(errorMessage);
    (error as any).status = response.status;
    (error as any).errors = data.data?.errors || data.errors || null;
    throw error;
  }

  return data as ClientRegisterResponse;
}
