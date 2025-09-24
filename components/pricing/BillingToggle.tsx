"use client";
import { useState, createContext, useContext } from "react";

type Billing = "monthly" | "annual";
const BillingCtx = createContext<{ billing: Billing; setBilling: (b: Billing) => void } | null>(null);

export function BillingProvider({ children }: { children: React.ReactNode }) {
  const [billing, setBilling] = useState<Billing>("monthly");
  return <BillingCtx.Provider value={{ billing, setBilling }}>{children}</BillingCtx.Provider>;
}

export function useBilling() {
  const ctx = useContext(BillingCtx);
  if (!ctx) throw new Error("useBilling must be used within BillingProvider");
  return ctx;
}

export default function BillingToggle() {
  const { billing, setBilling } = useBilling();
  return (
    <div className="mx-auto mb-6 flex max-w-md items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1">
      <button
        id="pricing-billing-monthly"
        onClick={() => setBilling("monthly")}
        className={`w-1/2 rounded-lg px-4 py-2 text-sm font-semibold ${billing === "monthly" ? "bg-white text-slate-900" : "text-white/80"}`}
        aria-pressed={billing === "monthly"}
      >
        Monthly
      </button>
      <button
        id="pricing-billing-annual"
        onClick={() => setBilling("annual")}
        className={`relative w-1/2 rounded-lg px-4 py-2 text-sm font-semibold ${billing === "annual" ? "bg-white text-slate-900" : "text-white/80"}`}
        aria-pressed={billing === "annual"}
      >
        Annual <span className="ml-2 rounded-md bg-emerald-400/20 px-2 py-0.5 text-xs font-bold text-emerald-300">Save 20%</span>
      </button>
    </div>
  );
}