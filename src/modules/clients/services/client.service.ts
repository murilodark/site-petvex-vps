import { ClientRegisterInput, ClientRegisterResponse } from "../types/client";

const API_BASE_URL = "https://api.petvex.com.br/api/v1";

export async function registerClient(input: ClientRegisterInput): Promise<ClientRegisterResponse> {
  // Map fields to match the new /public/new-client API requirements
  const payload: any = {
    name: input.name,
    email: input.email,
    phone: input.phone,
    cpf: input.cpf,
    password: input.password,
    password_confirmation: input.password_confirmation || input.password,
    plan_id: input.plan_id
  };

  // Only send CNPJ if it is provided
  if (input.cnpj) {
    payload.cnpj = input.cnpj;
  }

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
