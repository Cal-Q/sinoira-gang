"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { BottomDock } from "@/components/BottomDock";
import { Shield, Heart, Users, MapPin, Sparkles, HelpCircle, ChevronRight } from "lucide-react";

export default function ChiSiamoPage() {
  const faqs = [
    {
      q: "Non ho mai giocato a carte Pokémon, posso venire lo stesso?",
      a: "Assolutamente sì! La missione di Sinoira Gang è accogliere principianti di qualsiasi livello. Ti assegneremo un mazzo pronto e uno dei nostri soci ti spiegherà le regole passo-passo."
    },
    {
      q: "Devo pagare per giocare o noleggiare i mazzi?",
      a: "No, i 6 mazzi dell'associazione sono disponibili gratuitamente durante ogni nostro ritrovo del lunedì sera al Comala."
    },
    {
      q: "Come posso tesserarmi o supportare l'associazione?",
      a: "Il tesseramento annuale è facoltativo e costa una cifra simbolica (10€/anno), dando accesso agli sconti sui box sigillati a prezzo di costo e al prestito dei mazzi a casa."
    },
    {
      q: "Giocate solo a Pokémon TCG?",
      a: "Pokémon TCG è la nostra attività principale del lunedì, ma ogni mercoledì organizziamo serate di Super Smash Bros Ultimate su Nintendo Switch, oltre a tornei di giochi da tavolo e boardgame."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col pb-28">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto w-full px-3.5 sm:px-6 py-4 space-y-6">
        
        {/* Hero Card */}
        <section className="binder-card rounded-3xl p-5 sm:p-8 space-y-3 gold-border gold-glow">
          <div className="flex items-center gap-2">
            <Users className="text-[#d4af37]" size={22} />
            <span className="text-[10px] font-mono gold-foil font-bold uppercase tracking-wider">
              Associazione Ludico-Culturale
            </span>
          </div>

          <h1 className="font-cinzel font-bold text-2xl sm:text-4xl text-white leading-tight">
            Il Nostro Manifesto
          </h1>

          <p className="text-sm sm:text-base text-amber-200/90 font-serif italic leading-relaxed">
            "A Torino giochiamo insieme, non contro il portafoglio."
          </p>

          <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
            Sinoira Gang è nata dalla convinzione che i giochi di carte collezionabili debbano tornare a essere uno strumento di aggregazione sociale, svago e divertimento autentico. Abbiamo abbattuto ogni barriera economica: mettiamo a disposizione gratuitamente 6 mazzi completi da torneo ogni settimana per permettere a chiunque di sedersi e giocare a pari livello.
          </p>
        </section>

        {/* 3 Core Values Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="binder-card p-4 rounded-2xl space-y-2 border border-white/10">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-[#d4af37] flex items-center justify-center font-bold">
              ★
            </div>
            <h3 className="font-cinzel font-bold text-sm text-white">Accesso Gratuito</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mazzi fisici completi in bustine protettive sempre pronti e sanificati per i partecipanti.
            </p>
          </div>

          <div className="binder-card p-4 rounded-2xl space-y-2 border border-white/10">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              ♥
            </div>
            <h3 className="font-cinzel font-bold text-sm text-white">Zero Tossicità</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ambiente accogliente, inclusivo e rilassato. Aiutiamo i neofiti e valorizziamo il fair play.
            </p>
          </div>

          <div className="binder-card p-4 rounded-2xl space-y-2 border border-white/10">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              🏛️
            </div>
            <h3 className="font-cinzel font-bold text-sm text-white">Radicati a Torino</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Incontri fissi settimanali negli spazi sociali di Comala, cuore culturale e studentesco della città.
            </p>
          </div>
        </section>

        {/* Location & Directions */}
        <section className="binder-card rounded-2xl p-5 space-y-3 border border-[#d4af37]/30">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <MapPin className="text-[#d4af37]" size={18} />
              <h2 className="font-cinzel font-bold text-base sm:text-lg text-white">Dove Ci Troviamo</h2>
            </div>
            <span className="text-xs font-mono text-amber-300">Torino, C.so Ferrucci 65/a</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-xs text-slate-300 leading-relaxed">
              Presso la struttura di <strong>Comala</strong> (vicino al Politecnico di Torino). Disponiamo sia di tavoli all’aperto nel parco che della saletta interna riscaldata nei mesi invernali.
            </p>
            <a
              href="https://maps.google.com/?q=Comala+Corso+Ferrucci+65+Torino"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#d4af37] to-amber-500 text-black font-bold text-xs px-5 py-2.5 rounded-xl font-cinzel whitespace-nowrap shadow-md tap-press flex-shrink-0"
            >
              Apri su Google Maps ➔
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="binder-card rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 border-b border-white/10 pb-2">
            <HelpCircle className="text-[#d4af37]" size={18} />
            <h2 className="font-cinzel font-bold text-base sm:text-lg text-white">Domande Frequenti (FAQ)</h2>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-black/50 p-3.5 rounded-xl border border-white/5 space-y-1">
                <h4 className="font-bold text-xs sm:text-sm text-amber-200">{faq.q}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <BottomDock />
    </div>
  );
}
