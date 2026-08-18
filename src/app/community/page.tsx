"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { BottomDock } from "@/components/BottomDock";
import { SCHEDULE_EVENTS } from "@/data/decks";
import { Users, MessageSquare, MapPin, Trophy, Calendar, Sparkles, ChevronRight } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col pb-28">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto w-full px-3.5 sm:px-6 py-4 space-y-6">
        
        {/* Header Hero */}
        <section className="binder-card rounded-3xl p-5 sm:p-8 space-y-3 gold-border gold-glow">
          <div className="flex items-center gap-2">
            <Users className="text-[#d4af37]" size={22} />
            <span className="text-[10px] font-mono gold-foil font-bold uppercase tracking-wider">
              Community & Ritrovi
            </span>
          </div>

          <h1 className="font-cinzel font-bold text-2xl sm:text-4xl text-white leading-tight">
            Unisciti a Sinoira Gang
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            Ci troviamo ogni settimana al <strong>Comala di Torino</strong>. Entra nei nostri canali social per chattare sui mazzi, organizzare sfide e ricevere gli annunci sui prossimi tornei e box break!
          </p>

          <div className="flex flex-wrap gap-2.5 pt-1">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-indigo-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg transition-all flex items-center gap-2 tap-press"
            >
              <MessageSquare size={14} />
              <span>Canale Discord Ufficiale</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg transition-all flex items-center gap-2 tap-press"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram @sinoiragang</span>
            </a>
          </div>
        </section>

        {/* Detailed Weekly Calendar */}
        <section className="binder-card rounded-2xl p-5 space-y-4 border border-[#d4af37]/30">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <Calendar className="text-[#d4af37]" size={18} />
              <h2 className="font-cinzel font-bold text-base sm:text-xl text-white">
                Programma Settimanale al Comala
              </h2>
            </div>
            <span className="text-xs font-mono text-amber-300">Corso Ferrucci 65/a</span>
          </div>

          <div className="space-y-3">
            {SCHEDULE_EVENTS.map((ev, idx) => (
              <div key={idx} className="bg-black/50 p-4 rounded-2xl border border-white/5 space-y-2">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="font-mono font-bold text-xs text-amber-300">{ev.day} • {ev.time}</span>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                    style={{ backgroundColor: `${ev.badgeColor}25`, color: ev.badgeColor, border: `1px solid ${ev.badgeColor}40` }}
                  >
                    {ev.badge}
                  </span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-white">{ev.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{ev.desc}</p>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 pt-1">
                  <MapPin size={12} className="text-[#d4af37]" />
                  <span>{ev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Super Smash Bros Spotlight */}
        <section className="binder-card rounded-2xl p-5 space-y-3 bg-gradient-to-br from-[#12141a] via-[#1a1214] to-[#12141a]">
          <div className="flex items-center gap-2 border-b border-white/10 pb-2">
            <Trophy className="text-red-400" size={18} />
            <h2 className="font-cinzel font-bold text-base sm:text-lg text-white">
              Mercoledì Super Smash Bros Ultimate
            </h2>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ogni mercoledì portiamo 3 setup completi di Nintendo Switch, monitor a 1ms e controller GameCube per partite 1v1 competitive e amichevoli a squadre. Vieni con il tuo controller o usane uno dei nostri!
          </p>
        </section>

      </main>

      <BottomDock />
    </div>
  );
}
