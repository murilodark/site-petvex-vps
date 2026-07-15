import { 
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  ConfirmationResult 
} from "firebase/auth";
import { firebaseAuth } from "../../../config/firebase/firebase";

let recaptchaVerifier: RecaptchaVerifier | null = null;
let confirmationResult: ConfirmationResult | null = null;

/**
 * Formats a Brazilian phone number into E.164 format.
 * Examples: 
 * (11) 99999-9999 -> +5511999999999
 * +55 (11) 99999-9999 -> +5511999999999
 */
export function formatPhoneForFirebase(phone: string): string {
  const clean = phone.replace(/\D/g, "");
  
  if (clean.startsWith("55") && (clean.length === 12 || clean.length === 13)) {
    return `+${clean}`;
  }
  
  return `+55${clean}`;
}

/**
 * Maps Firebase Auth error codes to friendly user-facing messages.
 */
export function mapFirebaseError(error: any): string {
  const code = error?.code || error?.message || "";
  
  if (code.includes("auth/invalid-phone-number")) {
    return "Informe um número de celular válido com DDD.";
  }
  if (code.includes("auth/missing-phone-number")) {
    return "Informe o número do celular.";
  }
  if (code.includes("auth/too-many-requests")) {
    return "Muitas tentativas foram realizadas. Aguarde alguns minutos antes de tentar novamente.";
  }
  if (code.includes("auth/quota-exceeded")) {
    return "Não foi possível enviar o código neste momento. Tente novamente mais tarde.";
  }
  if (code.includes("auth/captcha-check-failed")) {
    return "Não foi possível validar a segurança da solicitação. Tente novamente.";
  }
  if (code.includes("auth/invalid-verification-code")) {
    return "O código informado é inválido.";
  }
  if (code.includes("auth/code-expired")) {
    return "O código expirou. Solicite um novo código.";
  }
  if (code.includes("auth/session-expired")) {
    return "A sessão de verificação expirou. Solicite um novo código.";
  }
  if (code.includes("auth/network-request-failed")) {
    return "Não foi possível conectar ao serviço de verificação. Verifique sua conexão.";
  }
  
  return "Não foi possível validar o celular. Tente novamente.";
}

/**
 * Cleans up the reCAPTCHA widget and container.
 */
export function cleanupRecaptcha() {
  if (recaptchaVerifier) {
    try {
      recaptchaVerifier.clear();
    } catch (e) {
      console.warn("Error clearing RecaptchaVerifier:", e);
    }
    recaptchaVerifier = null;
  }
  
  const container = document.getElementById("firebase-recaptcha-container");
  if (container) {
    container.innerHTML = "";
  }
}

/**
 * Cleans up the entire phone verification session (reCAPTCHA and authentication).
 */
export function cleanupSession() {
  cleanupRecaptcha();
  confirmationResult = null;
  
  firebaseAuth.signOut().catch((e) => {
    console.warn("Error signing out temporary user:", e);
  });
}

/**
 * Sends a verification code SMS to the provided phone number.
 */
export async function sendVerificationCode(phone: string, containerId: string): Promise<void> {
  if (typeof window === "undefined" || typeof document === "undefined") {
    throw new Error("A autenticação por telefone só pode ser realizada no navegador.");
  }

  const container = document.getElementById(containerId);
  if (!container) {
    throw new Error(`Elemento de segurança reCAPTCHA (${containerId}) não encontrado no DOM.`);
  }

  const formattedPhone = formatPhoneForFirebase(phone);
  
  // Clean up any existing verifier to avoid duplication
  cleanupRecaptcha();
  
  try {
    recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, containerId, {
      size: "invisible",
      callback: () => {
        // reCAPTCHA solved
      },
    });

    await recaptchaVerifier.render();

    confirmationResult = await signInWithPhoneNumber(firebaseAuth, formattedPhone, recaptchaVerifier);
  } catch (err: any) {
    cleanupRecaptcha();
    throw new Error(mapFirebaseError(err));
  }
}

/**
 * Confirms the SMS code entered by the user and returns the Firebase ID Token.
 */
export async function confirmCode(code: string): Promise<string> {
  if (!confirmationResult) {
    throw new Error("Sessão de verificação expirou ou não foi iniciada. Solicite um novo código.");
  }
  
  try {
    const userCredential = await confirmationResult.confirm(code);
    const user = userCredential.user;
    if (!user) {
      throw new Error("Erro de autenticação no Firebase.");
    }
    const token = await user.getIdToken();
    if (!token) {
      throw new Error("Não foi possível gerar o token de segurança.");
    }
    return token;
  } catch (err: any) {
    throw new Error(mapFirebaseError(err));
  }
}
