import { useState, useEffect } from "react";
import { PublicPlan } from "../types/site";

// Client-side simple caching variables at module level
let cachedPlans: PublicPlan[] | null = null;
let cachedError: Error | null = null;
let cachePromise: Promise<PublicPlan[]> | null = null;

export function fetchPublicPlans(): Promise<PublicPlan[]> {
  if (cachedPlans) {
    return Promise.resolve(cachedPlans);
  }
  if (cachePromise) {
    return cachePromise;
  }

  cachePromise = fetch("https://api.petvex.com.br/api/v1/public/plans")
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(`Erro na requisição dos planos (Status: ${res.status})`);
      }
      const json = await res.json();
      if (!json?.status || !json?.data?.data) {
        throw new Error("Formato de resposta inesperado da API.");
      }

      const rawPlans: PublicPlan[] = json.data.data;
      
      // Filter out active plans only (if API returns any inactive ones)
      const activePlans = rawPlans.filter((p) => p.is_active !== false);

      // Rule 6: Ordenar por display_order caso a API não retorne ordenado
      activePlans.sort((a, b) => (a.display_order || 0) - (b.display_order || 0));

      cachedPlans = activePlans;
      return activePlans;
    })
    .catch((err) => {
      cachedError = err instanceof Error ? err : new Error(String(err));
      cachePromise = null; // Reset promise to allow retrying on error
      throw cachedError;
    });

  return cachePromise;
}

export function usePublicPlans() {
  const [plans, setPlans] = useState<PublicPlan[] | null>(cachedPlans);
  const [loading, setLoading] = useState<boolean>(!cachedPlans);
  const [error, setError] = useState<string | null>(cachedError ? cachedError.message : null);

  useEffect(() => {
    let active = true;

    if (cachedPlans) {
      setPlans(cachedPlans);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetchPublicPlans()
      .then((data) => {
        if (active) {
          setPlans(data);
          setError(null);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message || "Não foi possível carregar os planos.");
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const refetch = () => {
    cachedPlans = null;
    cachedError = null;
    cachePromise = null;
    setLoading(true);
    fetchPublicPlans()
      .then((data) => {
        setPlans(data);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Não foi possível carregar os planos.");
        setLoading(false);
      });
  };

  return { plans, loading, error, refetch };
}
