"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BottomDock } from "@/components/BottomDock";
import { DECKS, DeckData, SEALED_PRODUCTS } from "@/data/decks";
import { useAuth } from "@/contexts/AuthContext";
import { ShieldCheck, UserCheck, Package, RefreshCw, CheckCircle2, ArrowLeft } from "lucide-react";

export default function AdminPage() {
  const { isAdmin } = useAuth();
  const [deckStatuses, setDeckStatuses] = useState<{ [id: string]: string }>({
    charizard: "Disponibile",
    gardevoir: "Disponibile",
    dragapult: "In Prestito",
    ragingbolt: "Disponibile",
    lugia: "Disponibile",
    miraidon: "Disponibile",
  });

  const toggleStatus = (id: string) => {
    const current = deckStatuses[id] || "Disponibile";
    const next =
      current === "Disponibile"
        ? "In Prestito"
        : current === "In Prestito"
        ? "In Manutenzione"
        : "Disponibile";
    setDeckStatuses((prev) => ({ ...prev, [id]: next }));
  };

  return (
    <div className="min-h-screen flex flex-col pb-28">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto w-full px-3.5 sm:px-6 py-4 space-y-6">
        
        {/* Top Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Torna alla Home</span>
        </Link>

        {/* Header Hero */}
        <section className="binder-card rounded-3xl p-5 sm:p-8 space-y-3 gold-border gold-glow">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-purple-400" size={24} />
            <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">
              Pannello Gestione Associazione
            </span>
          </div>

          <h1 className="font-cinzel font-bold text-2xl sm:text-4xl text-white leading-tight">
            Deck & Member Manager
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Monitora lo stato di prestito dei 6 mazzi fisici durante le serate al Comala, le presenze dei soci e le scorte di prodotti sigillati.
          </p>
        </section>

        {/* Live Deck Loan Status Tracker */}
        <section className="binder-card rounded-2xl p-5 space-y-4 border border-[#d4af37]/30">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <h2 className="font-cinzel font-bold text-base sm:text-lg text-white">
              Stato Mazzi Fisici al Bancone
            </h2>
            <span className="text-xs font-mono text-slate-400">Clicca per cambiare stato</span>
          </div>

          <div className="space-y-2.5">
            {DECKS.map((deck) => {
              const status = deckStatuses[deck.id] || "Disponibile";
              const isAvailable = status === "Disponibile";
              const isLoaned = status === "In Prestito";

              return (
                <div
                  key={deck.id}
                  className="bg-black/50 p-3.5 rounded-xl border border-white/5 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-amber-300 font-bold">{deck.foilNumber}</span>
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-sm">{deck.title}</h4>
                      <span className="text-[10px] text-slate-400 font-mono">{deck.type}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleStatus(deck.id)}
                    className={`font-mono text-xs font-bold px-3 py-1.5 rounded-lg border transition-all tap-press ${
                      isAvailable
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30"
                        : isLoaned
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30"
                        : "bg-red-500/20 text-red-300 border-red-500/30 hover:bg-red-500/30"
                    }`}
                  >
                    {status} ⟳
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Sealed Products Stock Tracker */}
        <section className="binder-card rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 border-b border-white/10 pb-2">
            <Package className="text-[#d4af37]" size={18} />
            <h2 className="font-cinzel font-bold text-base sm:text-lg text-white">
              Giacenza Box & Bustine per Soci
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {SEALED_PRODUCTS.map((prod) => (
              <div key={prod.id} className="bg-black/50 p-3 rounded-xl border border-white/5 space-y-1">
                <h4 className="font-bold text-white text-xs">{prod.name}</h4>
                <div className="flex justify-between text-slate-400 font-mono text-[11px] pt-1">
                  <span>Prezzo Socio: <strong className="text-amber-300">{prod.priceMember}</strong></span>
                  <span className="text-emerald-400 font-bold">{prod.stock}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <BottomDock />
    </div>
  );
}
