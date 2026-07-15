export interface ClientRegisterInput {
  tenant_name: string;
  account_slug?: string;
  user_name: string;
  cpf: string;
  phone: string;    // Celular
  email: string;
  password: string;
  password_confirmation: string;
  plan_id?: number;
  firebase_id_token: string;
}

export type ClientRegisterFormData = Omit<ClientRegisterInput, "firebase_id_token">;

export interface ClientRegisterResponse {
  message: string;
  status: boolean;
  code: number;
  data: {
    user: {
      id: number;
      name: string;
      email: string;
      created_at: string;
      updated_at: string;
    };
    token: string;
  };
}
