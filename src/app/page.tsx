"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BottomDock } from "@/components/BottomDock";
import { DECKS, DeckData, SEALED_PRODUCTS, SCHEDULE_EVENTS } from "@/data/decks";
import { useAuth } from "@/contexts/AuthContext";
import { Sparkles, Copy, Check, ChevronRight, MapPin, Shield, HelpCircle, ShoppingBag } from "lucide-react";

export default function HomePage() {
  const { isAssociated } = useAuth();
  const [selectedDeck, setSelectedDeck] = useState<DeckData | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyDeckCode = (deck: DeckData) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(deck.tcgLiveCode);
    }
    setCopied(true);
    showToast(`Lista TCG Live per ${deck.title} copiata! 📋`);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredDecks = activeFilter === "all"
    ? DECKS
    : DECKS.filter(d => d.element === activeFilter);

  return (
    <div className="min-h-screen flex flex-col pb-24">
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

      <main className="flex-grow max-w-4xl mx-auto w-full px-3.5 sm:px-6 py-4 space-y-6">

        {/* Binder Leather Cover Hero */}
        <section className="binder-card rounded-3xl p-5 sm:p-8 gold-glow relative overflow-hidden space-y-4">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 bg-black/40 border border-[#d4af37]/30 px-3 py-1 rounded-full text-xs font-mono gold-foil uppercase tracking-wider">
              <span>★</span> 100% MAZZI FISICI DISPONIBILI GRATIS
            </div>

            <h1 className="font-cinzel font-bold text-2xl sm:text-4xl text-white leading-tight">
              Il Grande Raccoglitore di <span className="gold-foil">Sinoira Gang</span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Nessun costo di iscrizione, nessun obbligo di possedere carte. Apri il nostro raccoglitore al <strong>Comala</strong> ogni lunedì sera, scegli il tuo mazzo preferito tra i meta tier attuali e siediti a giocare con noi!
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <Link
                href="/mazzi"
                className="bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#aa820a] hover:from-amber-300 hover:to-amber-500 text-black font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg transition-all flex items-center gap-1.5 tap-press font-cinzel"
              >
                <span>Sfoglia Tutti i Mazzi</span>
                <ChevronRight size={14} />
              </Link>
              <Link
                href="/community"
                className="binder-dock hover:bg-white/10 text-white font-bold text-xs px-4 py-2.5 rounded-xl border border-[#d4af37]/30 transition-all flex items-center gap-1.5 tap-press"
              >
                <MapPin size={13} className="text-[#d4af37]" />
                <span>Ritrovo Lunedì @ Comala</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Filter Bar by Archetype / Element */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-cinzel font-bold text-base sm:text-xl text-white flex items-center gap-2">
              <span>Pocket Sleeves Deck</span>
              <span className="text-xs font-mono gold-foil font-bold">(6 Mazzi)</span>
            </h2>
            <span className="text-[11px] font-mono text-slate-400">Tocca per sleeve</span>
          </div>

          <div className="flex gap-1.5 overflow-x-auto custom-scroll -mx-3.5 px-3.5 pb-1 text-xs">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all tap-press ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-[#d4af37] to-amber-500 text-black font-cinzel shadow-md"
                  : "binder-card text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              Tutti (6)
            </button>
            <button
              onClick={() => setActiveFilter("fuoco")}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all tap-press ${
                activeFilter === "fuoco"
                  ? "bg-red-500 text-white shadow-md"
                  : "binder-card text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              🔥 Fuoco
            </button>
            <button
              onClick={() => setActiveFilter("psico")}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all tap-press ${
                activeFilter === "psico"
                  ? "bg-purple-600 text-white shadow-md"
                  : "binder-card text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              👁️ Psico
            </button>
            <button
              onClick={() => setActiveFilter("drago")}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all tap-press ${
                activeFilter === "drago"
                  ? "bg-teal-500 text-black shadow-md"
                  : "binder-card text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              🐉 Drago
            </button>
            <button
              onClick={() => setActiveFilter("antico")}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all tap-press ${
                activeFilter === "antico"
                  ? "bg-amber-500 text-black shadow-md"
                  : "binder-card text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              🌿 Antico
            </button>
            <button
              onClick={() => setActiveFilter("incolore")}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all tap-press ${
                activeFilter === "incolore"
                  ? "bg-blue-500 text-white shadow-md"
                  : "binder-card text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              🕊️ Incolore
            </button>
            <button
              onClick={() => setActiveFilter("elettro")}
              className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all tap-press ${
                activeFilter === "elettro"
                  ? "bg-yellow-400 text-black shadow-md"
                  : "binder-card text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              ⚡ Elettro
            </button>
          </div>
        </section>

        {/* 2-COLUMN STRICT MOBILE-FIRST GRID (Pocket Card Sleeves) */}
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filteredDecks.map((deck) => (
            <div
              key={deck.id}
              onClick={() => setSelectedDeck(deck)}
              className="binder-card holo-sheen rounded-2xl p-2.5 sm:p-4 cursor-pointer flex flex-col justify-between group active:scale-95 transition-transform hover:border-[#d4af37] gold-glow"
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
                <h3 className="font-cinzel font-bold text-xs sm:text-base text-white leading-tight mt-0.5 group-hover:text-amber-200 transition-colors line-clamp-2">
                  {deck.title}
                </h3>
              </div>

              <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs font-mono">
                <span className="text-amber-300">
                  {"★".repeat(Math.floor(deck.stars))}
                  {deck.stars % 1 !== 0 ? "½" : ""}
                </span>
                <span className="text-slate-400 group-hover:text-amber-300 font-bold flex items-center gap-0.5">
                  <span>Esamina</span>
                  <ChevronRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Weekly Schedule Preview Banner */}
        <section className="binder-card rounded-2xl p-4 sm:p-6 space-y-3.5 border border-[#d4af37]/30">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div>
              <span className="text-[10px] font-mono gold-foil font-bold uppercase">Ritrovi Ufficiali</span>
              <h3 className="font-cinzel font-bold text-base sm:text-xl text-white">Agenda Incontri Comala</h3>
            </div>
            <Link
              href="/community"
              className="text-xs font-mono text-amber-300 hover:text-white font-bold flex items-center gap-1"
            >
              <span>Vedi Mappa</span>
              <ChevronRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
            {SCHEDULE_EVENTS.map((ev, idx) => (
              <div key={idx} className="bg-black/50 p-3 rounded-xl border border-white/5 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold text-[10px] text-amber-300">{ev.day}</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-slate-300">{ev.badge}</span>
                </div>
                <h4 className="font-bold text-white text-xs sm:text-sm">{ev.title}</h4>
                <p className="text-[11px] text-slate-400 line-clamp-2">{ev.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sealed Products Showcase (Special Prices for Members) */}
        <section className="binder-card rounded-2xl p-4 sm:p-6 space-y-3.5 border border-[#d4af37]/30">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-[#d4af37]" size={18} />
              <div>
                <span className="text-[10px] font-mono gold-foil font-bold uppercase">Prodotti Sigillati</span>
                <h3 className="font-cinzel font-bold text-base sm:text-xl text-white">Box Pool & Bustine per i Soci</h3>
              </div>
            </div>
            {!isAssociated && (
              <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded">
                Prezzi Soci Attivi
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SEALED_PRODUCTS.map((prod) => (
              <div key={prod.id} className="bg-black/50 p-3 rounded-xl border border-white/5 flex flex-col justify-between space-y-2">
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-2 bg-black">
                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase">{prod.type}</span>
                  <h4 className="font-bold text-xs text-white leading-snug">{prod.name}</h4>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 line-through text-[10px] mr-1">{prod.priceRetail}</span>
                    <span className="text-amber-300 font-bold font-mono text-sm">{prod.priceMember}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">{prod.stock}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Slide-Up Bottom Sheet Deck Inspector Modal */}
      {selectedDeck && (
        <>
          <div
            onClick={() => setSelectedDeck(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-200"
          />

          <div className="fixed bottom-0 left-0 right-0 z-50 binder-dock rounded-t-3xl max-w-md mx-auto p-5 space-y-4 max-h-[85vh] overflow-y-auto custom-scroll border-t-2 border-[#d4af37] bottom-sheet sheet-open shadow-2xl">
            {/* Top Drag Handle */}
            <div className="w-10 h-1 bg-[#d4af37]/40 rounded-full mx-auto mb-1" />

            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={selectedDeck.coverImage}
                  alt={selectedDeck.title}
                  className="w-16 h-20 object-contain bg-black/60 rounded-xl p-1 border border-[#d4af37]/40 flex-shrink-0"
                />
                <div>
                  <span className="font-mono text-[9px] gold-foil font-bold uppercase border border-[#d4af37]/30 px-2 py-0.5 rounded-full">
                    {selectedDeck.foilNumber} • {selectedDeck.tier}
                  </span>
                  <h3 className="font-cinzel font-bold text-base text-white mt-1 leading-tight">
                    {selectedDeck.title}
                  </h3>
                  <span className="text-xs text-amber-300 font-bold font-mono">
                    {"★".repeat(Math.floor(selectedDeck.stars))}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedDeck(null)}
                className="bg-white/10 text-white w-7 h-7 rounded-full font-bold flex items-center justify-center tap-press"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed bg-black/40 p-3 rounded-xl border border-white/5">
              {selectedDeck.fullDesc}
            </p>

            {/* 3-Step Strategy Guide */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono gold-foil font-bold uppercase tracking-wider block">
                Strategia di Gioco in 3 Step:
              </span>
              <div className="grid grid-cols-3 gap-1.5 text-[10px]">
                <div className="bg-black/50 p-2 rounded-xl border border-white/5 text-center space-y-0.5">
                  <span className="font-bold text-amber-300 block">1. Setup</span>
                  <p className="text-slate-400 text-[9px] leading-tight">
                    {selectedDeck.strategySteps.step1.desc}
                  </p>
                </div>
                <div className="bg-black/50 p-2 rounded-xl border border-white/5 text-center space-y-0.5">
                  <span className="font-bold text-amber-300 block">2. Pressione</span>
                  <p className="text-slate-400 text-[9px] leading-tight">
                    {selectedDeck.strategySteps.step2.desc}
                  </p>
                </div>
                <div className="bg-black/50 p-2 rounded-xl border border-white/5 text-center space-y-0.5">
                  <span className="font-bold text-amber-300 block">3. Chiusura</span>
                  <p className="text-slate-400 text-[9px] leading-tight">
                    {selectedDeck.strategySteps.step3.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions: Copy String or Open Full Deck Page */}
            <div className="space-y-2 pt-1">
              <button
                onClick={() => copyDeckCode(selectedDeck)}
                className="w-full bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#aa820a] hover:from-amber-300 hover:to-amber-500 text-black font-bold text-xs py-3 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider tap-press font-cinzel"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? "Copiato Negli Appunti!" : "Copia Codice per TCG Live"}</span>
              </button>

              <Link
                href={`/mazzi/${selectedDeck.id}`}
                className="w-full binder-card hover:bg-white/10 text-white font-bold text-xs py-2.5 rounded-2xl transition-all flex items-center justify-center gap-1.5 border border-[#d4af37]/30 text-center block"
              >
                <span>Visualizza Scheda & Lista Carte Completa</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </>
      )}

      <BottomDock />
    </div>
  );
}
