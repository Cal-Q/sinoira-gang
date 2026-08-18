"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BottomDock } from "@/components/BottomDock";
import { DECKS, DeckData } from "@/data/decks";
import { Search, ChevronRight, Filter, Copy, Check } from "lucide-react";

export default function MazziPage() {
  const [search, setSearch] = useState("");
  const [activeElement, setActiveElement] = useState("all");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyCode = (deck: DeckData) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(deck.tcgLiveCode);
    }
    showToast(`Lista TCG Live per ${deck.title} copiata! 📋`);
  };

  const filteredDecks = DECKS.filter((deck) => {
    const matchesSearch =
      deck.title.toLowerCase().includes(search.toLowerCase()) ||
      deck.archetype.toLowerCase().includes(search.toLowerCase()) ||
      deck.type.toLowerCase().includes(search.toLowerCase());
    const matchesElement =
      activeElement === "all" || deck.element === activeElement;
    return matchesSearch && matchesElement;
  });

  return (
    <div className="min-h-screen flex flex-col pb-28">
      {/* Toast Notification */}
      <div
        className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-50 binder-dock text-amber-200 px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 transition-all duration-300 transform ${
          toastMessage
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-12 opacity-0 scale-95 pointer-events-none"
        } whitespace-nowrap gold-border`}
      >
        <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
        <span>{toastMessage}</span>
      </div>

      <Header />

      <main className="flex-grow max-w-4xl mx-auto w-full px-3.5 sm:px-6 py-4 space-y-5">
        
        {/* Top Header Card */}
        <section className="binder-card rounded-3xl p-5 sm:p-6 space-y-3 gold-border gold-glow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono gold-foil font-bold uppercase tracking-wider">
                Catalogo Ufficiale Mazzi Fisici
              </span>
              <h1 className="font-cinzel font-bold text-2xl sm:text-3xl text-white">
                Mazzi Pronti da Giocare
              </h1>
            </div>
            <span className="text-xs font-mono bg-black/50 border border-[#d4af37]/30 text-amber-300 px-3 py-1.5 rounded-xl self-start sm:self-auto">
              6 Mazzi Gratuiti @ Comala
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
            Tutti i mazzi sono protetti da bustine opache, completi di 60 carte conformi alla rotazione Standard [F][G][H] e forniti con segnalini danno e moneta di gioco.
          </p>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cerca mazzo per nome o archetipo (es. Charizard, Psico, Dusknoir)..."
              className="w-full bg-black/60 border border-white/15 focus:border-[#d4af37] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-all"
            />
          </div>
        </section>

        {/* Filter Pills */}
        <div className="flex gap-1.5 overflow-x-auto custom-scroll -mx-3.5 px-3.5 pb-1 text-xs">
          {[
            { id: "all", label: "Tutti (6)" },
            { id: "fuoco", label: "🔥 Fuoco" },
            { id: "psico", label: "👁️ Psico" },
            { id: "drago", label: "🐉 Drago" },
            { id: "antico", label: "🌿 Antico" },
            { id: "incolore", label: "🕊️ Incolore" },
            { id: "elettro", label: "⚡ Elettro" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveElement(btn.id)}
              className={`px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all tap-press ${
                activeElement === btn.id
                  ? "bg-gradient-to-r from-[#d4af37] to-amber-500 text-black font-cinzel shadow-md"
                  : "binder-card text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* 2-Column Responsive Deck Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filteredDecks.map((deck) => (
            <div
              key={deck.id}
              className="binder-card holo-sheen rounded-2xl p-3 sm:p-4 flex flex-col justify-between group gold-glow hover:border-[#d4af37] transition-all"
            >
              <div>
                <div className="aspect-[4/3] bg-black/60 rounded-xl p-2 flex items-center justify-center relative mb-2.5 border border-white/5 overflow-hidden">
                  <img
                    src={deck.coverImage}
                    alt={deck.title}
                    className="h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-1.5 left-1.5 bg-[#d4af37] text-black text-[8px] sm:text-[9px] font-mono font-black px-1.5 py-0.5 rounded shadow-sm">
                    {deck.foilNumber}
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-amber-400 font-bold uppercase block tracking-wider">
                  {deck.type} • {deck.tier}
                </span>
                <h3 className="font-cinzel font-bold text-xs sm:text-base text-white leading-tight mt-0.5 group-hover:text-amber-200 transition-colors">
                  {deck.title}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {deck.shortDesc}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono">
                  <span className="text-amber-300">
                    {"★".repeat(Math.floor(deck.stars))}
                  </span>
                  <span className="text-emerald-400 font-bold">{deck.status}</span>
                </div>

                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  <button
                    onClick={() => copyCode(deck)}
                    className="bg-black/50 hover:bg-black text-amber-300 border border-[#d4af37]/30 text-[10px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1 tap-press"
                  >
                    <Copy size={11} />
                    <span>TCG Live</span>
                  </button>

                  <Link
                    href={`/mazzi/${deck.id}`}
                    className="bg-gradient-to-r from-[#d4af37] to-amber-500 text-black text-[10px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1 font-cinzel tap-press"
                  >
                    <span>Scheda</span>
                    <ChevronRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

      </main>

      <BottomDock />
    </div>
  );
}
