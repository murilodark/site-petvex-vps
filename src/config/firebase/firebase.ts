import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import firebaseConfig from "./firebase_config.json";

function validateFirebaseConfig(): void {
  const requiredFields = [
    "apiKey",
    "authDomain",
    "projectId",
    "messagingSenderId",
    "appId",
  ] as const;

  for (const field of requiredFields) {
    const value = firebaseConfig[field as keyof typeof firebaseConfig];

    if (
      typeof value !== "string" ||
      value.trim() === "" ||
      value.includes("YOUR_") ||
      value === "..."
    ) {
      throw new Error(
        `Configuração Firebase inválida: o campo ${field} não foi configurado corretamente.`,
      );
    }
  }
}

validateFirebaseConfig();

export const firebaseApp =
  getApps().length > 0
    ? getApp()
    : initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
