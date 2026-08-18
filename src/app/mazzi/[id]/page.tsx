"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { BottomDock } from "@/components/BottomDock";
import { DECKS, DeckData } from "@/data/decks";
import { Copy, Check, ArrowLeft, Shield, Sparkles, BookOpen, Layers } from "lucide-react";

export default function DeckDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const deck = DECKS.find((d) => d.id === resolvedParams.id);

  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!deck) {
    return notFound();
  }

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyCode = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(deck.tcgLiveCode);
    }
    setCopied(true);
    showToast("Codice TCG Live copiato negli appunti! 📋");
    setTimeout(() => setCopied(false), 2000);
  };

  const totalPokemon = deck.cardList.pokemon.reduce((acc, curr) => acc + curr.count, 0);
  const totalTrainers = deck.cardList.trainers.reduce((acc, curr) => acc + curr.count, 0);
  const totalEnergies = deck.cardList.energies.reduce((acc, curr) => acc + curr.count, 0);

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

      <main className="flex-grow max-w-4xl mx-auto w-full px-3.5 sm:px-6 py-4 space-y-6">
        
        {/* Back Link */}
        <Link
          href="/mazzi"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Torna al Catalogo Mazzi</span>
        </Link>

        {/* Deck Header Card */}
        <section className="binder-card rounded-3xl p-5 sm:p-8 gold-glow relative overflow-hidden space-y-4">
          <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
            <div className="w-36 sm:w-44 aspect-[3/4] bg-black/70 rounded-2xl p-2 border border-[#d4af37]/40 flex-shrink-0 flex items-center justify-center shadow-xl">
              <img
                src={deck.coverImage}
                alt={deck.title}
                className="h-full object-contain drop-shadow-2xl"
              />
            </div>

            <div className="space-y-2.5 flex-grow text-center sm:text-left">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start items-center">
                <span className="bg-[#d4af37] text-black font-mono font-black text-[10px] px-2 py-0.5 rounded">
                  {deck.foilNumber}
                </span>
                <span className="bg-black/60 text-amber-300 border border-[#d4af37]/30 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  {deck.tier}
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  {deck.status}
                </span>
              </div>

              <h1 className="font-cinzel font-bold text-2xl sm:text-3xl text-white leading-tight">
                {deck.title}
              </h1>

              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {deck.fullDesc}
              </p>

              {/* Stats Badges */}
              <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-xs text-center">
                <div className="bg-black/50 p-2 rounded-xl border border-white/5">
                  <span className="text-[10px] text-slate-400 block">Consistenza</span>
                  <span className="text-amber-300 font-bold">{deck.stats.consistency}/5.0</span>
                </div>
                <div className="bg-black/50 p-2 rounded-xl border border-white/5">
                  <span className="text-[10px] text-slate-400 block">Early Game</span>
                  <span className="text-amber-300 font-bold">{deck.stats.earlyGame}/5.0</span>
                </div>
                <div className="bg-black/50 p-2 rounded-xl border border-white/5">
                  <span className="text-[10px] text-slate-400 block">Difficoltà</span>
                  <span className="text-emerald-400 font-bold">{deck.stats.difficulty}</span>
                </div>
              </div>

              {/* Quick Copy TCG Live Button */}
              <div className="pt-2">
                <button
                  onClick={copyCode}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#d4af37] via-amber-400 to-[#aa820a] hover:from-amber-300 hover:to-amber-500 text-black font-bold text-xs px-6 py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider font-cinzel tap-press"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copied ? "Lista Copiata!" : "Copia Stringa per Pokémon TCG Live"}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Strategy Guide */}
        <section className="binder-card rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 border-b border-white/10 pb-2">
            <BookOpen className="text-[#d4af37]" size={18} />
            <h2 className="font-cinzel font-bold text-base sm:text-lg text-white">
              Guida Strategica al Mazzo
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 space-y-1">
              <span className="font-mono text-amber-300 font-bold text-[11px] block">
                {deck.strategySteps.step1.title}
              </span>
              <p className="text-slate-300 leading-relaxed">
                {deck.strategySteps.step1.desc}
              </p>
            </div>
            <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 space-y-1">
              <span className="font-mono text-amber-300 font-bold text-[11px] block">
                {deck.strategySteps.step2.title}
              </span>
              <p className="text-slate-300 leading-relaxed">
                {deck.strategySteps.step2.desc}
              </p>
            </div>
            <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 space-y-1">
              <span className="font-mono text-amber-300 font-bold text-[11px] block">
                {deck.strategySteps.step3.title}
              </span>
              <p className="text-slate-300 leading-relaxed">
                {deck.strategySteps.step3.desc}
              </p>
            </div>
          </div>
        </section>

        {/* Full 60-Card List Breakdown */}
        <section className="binder-card rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <Layers className="text-[#d4af37]" size={18} />
              <h2 className="font-cinzel font-bold text-base sm:text-lg text-white">
                Lista Completa 60 Carte
              </h2>
            </div>
            <span className="text-xs font-mono text-amber-300">
              {totalPokemon + totalTrainers + totalEnergies}/60 Carte
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            {/* Pokémon */}
            <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-amber-300 font-bold border-b border-white/10 pb-1">
                <span>POKÉMON</span>
                <span>{totalPokemon}</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                {deck.cardList.pokemon.map((c, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{c.name}</span>
                    <span className="text-amber-300/80 font-bold">x{c.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Allenatori */}
            <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-amber-300 font-bold border-b border-white/10 pb-1">
                <span>ALLENATORI</span>
                <span>{totalTrainers}</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                {deck.cardList.trainers.map((c, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{c.name}</span>
                    <span className="text-amber-300/80 font-bold">x{c.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Energie */}
            <div className="bg-black/50 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-amber-300 font-bold border-b border-white/10 pb-1">
                <span>ENERGIE</span>
                <span>{totalEnergies}</span>
              </div>
              <ul className="space-y-1 text-slate-300">
                {deck.cardList.energies.map((c, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{c.name}</span>
                    <span className="text-amber-300/80 font-bold">x{c.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </main>

      <BottomDock />
    </div>
  );
}
