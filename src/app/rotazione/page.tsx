"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BottomDock } from "@/components/BottomDock";
import { ShieldCheck, Search, AlertCircle, CheckCircle2, XCircle, ChevronRight } from "lucide-react";

export default function RotazionePage() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState<{ name: string; legal: boolean; mark: string; reason: string } | null>(null);

  const checkCard = () => {
    if (!query.trim()) return;
    const q = query.toLowerCase();
    
    // Sample legality database
    if (q.includes("charizard") || q.includes("pidgeot") || q.includes("arven") || q.includes("iono") || q.includes("poffin") || q.includes("dragapult") || q.includes("gardevoir") || q.includes("raging bolt") || q.includes("miraidon")) {
      setSearchResult({
        name: query,
        legal: true,
        mark: "[G] o [H]",
        reason: "Carta pienamente legale nel Formato Standard 2026. Ammessa in tutti i tornei Sinoira Gang."
      });
    } else if (q.includes("marnie") || q.includes("quick ball") || q.includes("path to the peak") || q.includes("battle vip pass") || q.includes("mew vmax")) {
      setSearchResult({
        name: query,
        legal: false,
        mark: "[D] o [E]",
        reason: "Carta ruotata fuori dallo Standard. Non ammessa nei tornei ufficiali Standard."
      });
    } else {
      setSearchResult({
        name: query,
        legal: true,
        mark: "[F] / [G] / [H]",
        reason: "Se la carta possiede la lettera di regolamento [F], [G] o [H] stampata in basso a sinistra, è legale al 100%."
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-28">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto w-full px-3.5 sm:px-6 py-4 space-y-6">
        
        {/* Header Card */}
        <section className="binder-card rounded-3xl p-5 sm:p-8 space-y-3 gold-border gold-glow">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-[#d4af37]" size={24} />
            <span className="text-[10px] font-mono gold-foil font-bold uppercase tracking-wider">
              Regolamento Ufficiale 2026
            </span>
          </div>

          <h1 className="font-cinzel font-bold text-2xl sm:text-4xl text-white leading-tight">
            Rotazione Formato Standard
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            Tutti i tornei e i mazzi gratuiti di <strong>Sinoira Gang</strong> seguono scrupolosamente il formato Standard ufficiale Pokémon TCG internazionale.
          </p>

          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-xl font-bold">
              Regulation Mark Validi: [F] [G] [H]
            </span>
            <span className="bg-red-500/20 text-red-300 border border-red-500/30 px-3 py-1 rounded-xl font-bold">
              Ruotati: [D] [E]
            </span>
          </div>
        </section>

        {/* Card Legality Checker Tool */}
        <section className="binder-card rounded-2xl p-5 space-y-3.5 border border-[#d4af37]/30">
          <div>
            <h2 className="font-cinzel font-bold text-base sm:text-lg text-white">
              Verificatore Legalità Carte
            </h2>
            <p className="text-xs text-slate-400">
              Digita il nome di una carta per verificare se puoi giocarla nei nostri mazzi:
            </p>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkCard()}
              placeholder="Es. Buddy-Buddy Poffin, Path to the Peak, Charizard ex..."
              className="flex-grow bg-black/60 border border-white/15 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              onClick={checkCard}
              className="bg-gradient-to-r from-[#d4af37] to-amber-500 text-black font-bold text-xs px-5 py-2.5 rounded-xl font-cinzel tap-press flex-shrink-0"
            >
              Verifica
            </button>
          </div>

          {searchResult && (
            <div
              className={`p-3.5 rounded-xl border flex items-start gap-3 text-xs ${
                searchResult.legal
                  ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-200"
                  : "bg-red-950/40 border-red-500/40 text-red-200"
              }`}
            >
              {searchResult.legal ? (
                <CheckCircle2 className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
              ) : (
                <XCircle className="text-red-400 flex-shrink-0 mt-0.5" size={18} />
              )}
              <div className="space-y-1">
                <div className="font-bold text-sm">
                  {searchResult.name}: {searchResult.legal ? "LEGALE IN STANDARD" : "NON LEGALE (RUOTATA)"}
                </div>
                <p className="text-[11px] opacity-90 leading-relaxed">
                  {searchResult.reason}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Legal Expansions List */}
        <section className="binder-card rounded-2xl p-5 space-y-3">
          <h2 className="font-cinzel font-bold text-base sm:text-lg text-white border-b border-white/10 pb-2">
            Set ed Espansioni Ammesse
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
            <div className="bg-black/50 p-3 rounded-xl border border-white/5 space-y-1">
              <span className="text-amber-300 font-bold">Scarlatto & Violetto (Serie Principale)</span>
              <p className="text-slate-400 text-[11px]">SVI, Evoluzioni a Paldea, Fiamme Ossidiane, 151, Paradosso Temporale</p>
            </div>
            <div className="bg-black/50 p-3 rounded-xl border border-white/5 space-y-1">
              <span className="text-amber-300 font-bold">Espansioni 2024 / 2025</span>
              <p className="text-slate-400 text-[11px]">Cronoforze, Crepuscolo Mascherato, Segreto Fiabesco, Corona Astrale, Scintille Folgoranti</p>
            </div>
            <div className="bg-black/50 p-3 rounded-xl border border-white/5 space-y-1">
              <span className="text-amber-300 font-bold">Spada & Scudo (Ultime Espansioni Mark F)</span>
              <p className="text-slate-400 text-[11px]">Lucentezza Siderale, Origine Perduta, Tempesta Argentata, Zenit Regale</p>
            </div>
            <div className="bg-black/50 p-3 rounded-xl border border-white/5 space-y-1">
              <span className="text-amber-300 font-bold">Carte Promozionali Black Star</span>
              <p className="text-slate-400 text-[11px]">Tutte le promo con lettera di regolamento valida [F], [G] o [H]</p>
            </div>
          </div>
        </section>

      </main>

      <BottomDock />
    </div>
  );
}
