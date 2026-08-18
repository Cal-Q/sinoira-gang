"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { BottomDock } from "@/components/BottomDock";
import { DECKS, DeckData, SEALED_PRODUCTS, SCHEDULE_EVENTS } from "@/data/decks";
import { useAuth } from "@/contexts/AuthContext";
import { ChevronRight, Copy, Check, ShoppingBag, Calendar, MapPin } from "lucide-react";

export default function HomePage() {
  const { isAssociated } = useAuth();
  const [selectedDeck, setSelectedDeck] = useState<DeckData | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2200);
  };

  const copyBinderCode = (deck: DeckData) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(deck.tcgLiveCode);
    }
    setCopied(true);
    showToast("LISTA SALVATA NEL RACCOGLITORE!");
    setTimeout(() => {
      setCopied(false);
      setSelectedDeck(null);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col pb-24 selection:bg-[#d4af37] selection:text-black">
      {/* Mobile Toast */}
      <div
        className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#101114] border border-[#d4af37] text-[#f3e5ab] px-5 py-2 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 transition-all duration-200 transform ${
          toastMessage
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-12 opacity-0 scale-95 pointer-events-none"
        } whitespace-nowrap`}
      >
        <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
        <span>{toastMessage}</span>
      </div>

      <Header />

      <main className="flex-grow max-w-md mx-auto w-full px-3.5 py-3.5 space-y-4">
        
        {/* Binder Hero Card (Pure Bozza 6) */}
        <section className="bg-[#18191f] border border-[#d4af37]/30 p-4 rounded-2xl space-y-2 relative overflow-hidden shadow-lg">
          <div className="inline-flex items-center gap-1.5 bg-white/5 border border-[#d4af37]/30 px-2.5 py-0.5 rounded-full text-[10px] font-mono gold-foil uppercase">
            <span>★</span> 100% MAZZI FISICI GRATUITI
          </div>

          <h1 className="font-cinzel font-bold text-xl text-white leading-snug">
            Il Raccoglitore di <span className="gold-foil">Sinoira Gang</span>
          </h1>

          <p className="text-xs text-slate-300 leading-relaxed">
            Scegli il tuo mazzo per stasera. Nessun costo, nessuna spesa: prendi una custodia e gioca al Comala!
          </p>

          <div className="bg-black/40 p-2 rounded-xl border border-white/5 flex justify-between items-center text-[11px] font-mono">
            <span className="text-slate-300">📍 Comala, C.so Ferrucci</span>
            <span className="text-[#d4af37] font-bold">Lunedì 20:30</span>
          </div>
        </section>

        {/* 2-COLUMN STRICT MOBILE GRID HEADER */}
        <div className="flex justify-between items-center pt-1">
          <h2 className="font-cinzel font-bold text-sm text-white uppercase">6 Pocket Decks</h2>
          <span className="text-[10px] font-mono gold-foil">Tocca per sleeve</span>
        </div>

        {/* 2-COLUMN STRICT MOBILE GRID (Bozza 6) */}
        <section className="grid grid-cols-2 gap-2.5">
          {DECKS.map((deck) => (
            <div
              key={deck.id}
              onClick={() => setSelectedDeck(deck)}
              className="bg-[#18191f] border border-[#d4af37]/30 hover:border-[#d4af37] p-2.5 rounded-xl cursor-pointer flex flex-col justify-between group active:scale-95 transition-transform shadow-md"
            >
              <div>
                <div className="aspect-[4/3] bg-black/60 rounded-lg p-1.5 flex items-center justify-center relative mb-2 border border-white/5 overflow-hidden">
                  <img
                    src={deck.coverImage}
                    alt={deck.title}
                    className="h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                  />
                  <span
                    className="absolute top-1 left-1 text-[7px] font-black px-1.5 py-0.2 rounded"
                    style={{
                      backgroundColor: deck.element === "fuoco" ? "#d4af37" : deck.element === "psico" ? "#a855f7" : deck.element === "drago" ? "#14b8a6" : deck.element === "antico" ? "#f59e0b" : deck.element === "incolore" ? "#3b82f6" : "#eab308",
                      color: deck.element === "psico" || deck.element === "incolore" ? "#ffffff" : "#000000"
                    }}
                  >
                    {deck.foilNumber}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-amber-400 font-bold uppercase block">
                  {deck.type} • {deck.tier.split(" ")[0]}
                </span>
                <h3 className="font-cinzel font-bold text-xs text-white leading-tight mt-0.5 group-hover:text-amber-200 transition-colors line-clamp-1">
                  {deck.title}
                </h3>
              </div>

              <div className="mt-2 pt-1.5 border-t border-white/10 flex justify-between items-center text-[10px] font-mono">
                <span className="text-[#d4af37]">
                  {"★".repeat(Math.floor(deck.stars))}
                </span>
                <span className="text-slate-400 group-hover:text-amber-300 font-bold">Apri ➔</span>
              </div>
            </div>
          ))}
        </section>

        {/* Schedule Preview Section in Bozza 6 Style */}
        <section className="bg-[#18191f] border border-[#d4af37]/30 p-3.5 rounded-2xl space-y-2.5 shadow-md">
          <div className="flex justify-between items-center border-b border-white/10 pb-1.5">
            <span className="font-cinzel font-bold text-xs text-white uppercase">Incontri Settimanali</span>
            <Link href="/community" className="text-[10px] font-mono gold-foil font-bold">
              Tutti gli orari ➔
            </Link>
          </div>

          <div className="space-y-2 text-xs">
            {SCHEDULE_EVENTS.slice(0, 2).map((ev, i) => (
              <div key={i} className="bg-black/40 p-2.5 rounded-xl border border-white/5 space-y-0.5">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-amber-300 font-bold">{ev.day}</span>
                  <span className="text-slate-400">{ev.time}</span>
                </div>
                <h4 className="font-bold text-white text-xs">{ev.title}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Sealed Products Section in Bozza 6 Style */}
        <section className="bg-[#18191f] border border-[#d4af37]/30 p-3.5 rounded-2xl space-y-2.5 shadow-md">
          <div className="flex justify-between items-center border-b border-white/10 pb-1.5">
            <span className="font-cinzel font-bold text-xs text-white uppercase">Vetrina Prodotti Soci</span>
            <span className="text-[10px] font-mono text-emerald-400 font-bold">Prezzo di Costo</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {SEALED_PRODUCTS.slice(0, 2).map((prod) => (
              <div key={prod.id} className="bg-black/40 p-2 rounded-xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-1.5 bg-black">
                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-[11px] text-white leading-tight line-clamp-1">{prod.name}</h4>
                </div>
                <div className="mt-2 pt-1 border-t border-white/10 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-400 line-through text-[9px]">{prod.priceRetail}</span>
                  <span className="text-[#d4af37] font-bold text-xs">{prod.priceMember}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Binder Slide-up Drawer Modal (Pure Bozza 6) */}
      {selectedDeck && (
        <>
          <div
            onClick={() => setSelectedDeck(null)}
            className="fixed inset-0 z-50 bg-black/80 transition-opacity duration-200"
          />

          <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#18191f] border-t-2 border-[#d4af37] max-w-md mx-auto p-4 space-y-3.5 bottom-sheet sheet-open shadow-2xl rounded-t-2xl">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-mono text-[9px] gold-foil font-bold uppercase">
                {selectedDeck.foilNumber} • {selectedDeck.tier}
              </span>
              <button
                onClick={() => setSelectedDeck(null)}
                className="bg-[#d4af37] text-black font-cinzel font-bold text-xs px-2.5 py-0.5 rounded tap-press"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={selectedDeck.coverImage}
                alt={selectedDeck.title}
                className="w-16 bg-black p-1 rounded border border-[#d4af37]/30 flex-shrink-0"
              />
              <div>
                <h3 className="font-cinzel font-bold text-sm text-white leading-tight">
                  {selectedDeck.title}
                </h3>
                <p className="text-[11px] text-slate-300 font-sans mt-1 leading-snug">
                  {selectedDeck.shortDesc}
                </p>
                <div className="mt-1 flex items-center gap-2 font-mono text-[10px]">
                  <span className="text-[#d4af37]">
                    {"★".repeat(Math.floor(selectedDeck.stars))}
                  </span>
                  <span className="text-emerald-400 font-bold">{selectedDeck.status}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <button
                onClick={() => copyBinderCode(selectedDeck)}
                className="w-full bg-gradient-to-r from-[#d4af37] to-amber-500 text-black font-bold text-xs py-3 rounded-xl shadow-md uppercase tracking-wider font-cinzel flex items-center justify-center gap-2 tap-press"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span>{copied ? "Lista Salvata!" : "📋 Copia Codice TCG Live"}</span>
              </button>

              <Link
                href={`/mazzi/${selectedDeck.id}`}
                className="w-full bg-black/50 hover:bg-black text-white text-[11px] font-bold py-2 rounded-xl border border-white/10 text-center block transition-colors"
              >
                Vedi Scheda & 60 Carte ➔
              </Link>
            </div>
          </div>
        </>
      )}

      <BottomDock />
    </div>
  );
}
