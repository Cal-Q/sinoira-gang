"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { ShieldCheck, User } from "lucide-react";

export function Header() {
  const { user, login, logout, isAdmin } = useAuth();

  const handleLogin = () => {
    const email = prompt("Inserisci la tua email socio per accedere:");
    if (email) login(email);
  };

  return (
    <>
      {/* Top Dynamic Island Live Status Banner */}
      <div className="sticky top-2 z-40 max-w-sm mx-auto px-4">
        <div className="binder-dock rounded-full py-1.5 px-4 shadow-2xl flex items-center justify-between text-xs gold-border gold-glow">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-cinzel font-bold text-white tracking-wide">Comala Live</span>
          </div>
          <span className="text-amber-300 font-mono font-bold text-[11px]">Lunedì 20:30 • Mazzi Free</span>
        </div>
      </div>

      {/* Main Brand Bar */}
      <header className="px-4 py-3 max-w-5xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-[#d4af37] via-amber-200 to-yellow-500 border border-[#d4af37]/40 shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform">
            <img src="/logo.jpg" alt="Sinoira Gang Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <span className="font-cinzel font-bold text-base md:text-lg tracking-wider text-white flex items-center gap-1.5 leading-none">
              <span>SINOIRA GANG</span>
              <span className="text-[9px] font-mono font-bold gold-foil uppercase border border-[#d4af37]/30 px-1.5 py-0.2 rounded">FOIL</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide">Torino Pokémon & Gaming Club</span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {isAdmin && (
            <Link
              href="/admin"
              className="flex items-center gap-1 bg-purple-950/80 text-purple-300 border border-purple-500/40 text-xs font-bold px-3 py-1.5 rounded-full hover:bg-purple-900 transition-all shadow-sm"
            >
              <ShieldCheck size={14} />
              <span className="hidden sm:inline">Admin</span>
            </Link>
          )}

          {user ? (
            <div className="flex items-center gap-2 binder-card px-3 py-1 rounded-full text-xs border border-[#d4af37]/30">
              <span className="text-amber-200 font-bold truncate max-w-[100px]">{user.email}</span>
              <button
                onClick={logout}
                className="text-red-400 hover:text-red-300 font-bold text-[10px] underline ml-1"
              >
                Esci
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="binder-dock hover:bg-white/10 text-amber-200 border border-[#d4af37]/30 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm tap-press"
            >
              <User size={13} className="text-[#d4af37]" />
              <span>Area Soci</span>
            </button>
          )}
        </div>
      </header>
    </>
  );
}
