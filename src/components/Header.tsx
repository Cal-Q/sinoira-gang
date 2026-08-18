"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { ShieldCheck } from "lucide-react";

export function Header() {
  const { user, login, logout, isAdmin } = useAuth();

  const handleLogin = () => {
    const email = prompt("Inserisci la tua email socio:");
    if (email) login(email);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#101114]/95 backdrop-blur-md border-b border-[#d4af37]/20 px-3.5 py-2.5">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg p-0.5 bg-gradient-to-tr from-[#d4af37] to-amber-200 flex-shrink-0 group-hover:scale-105 transition-transform">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <span className="font-cinzel font-bold text-sm text-white block leading-none">
              SINOIRA GANG
            </span>
            <span className="text-[9px] font-mono gold-foil font-bold uppercase tracking-wider">
              CARD BINDER • TORINO
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {isAdmin && (
            <Link
              href="/admin"
              className="bg-purple-950/80 text-purple-300 border border-purple-500/40 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg flex items-center gap-1"
            >
              <ShieldCheck size={12} />
              <span>Admin</span>
            </Link>
          )}

          {user ? (
            <div className="flex items-center gap-1.5 bg-[#18191f] border border-[#d4af37]/30 px-2.5 py-1 rounded-lg text-xs font-mono">
              <span className="text-amber-200 font-bold truncate max-w-[80px]">{user.email}</span>
              <button
                onClick={logout}
                className="text-red-400 hover:text-red-300 font-bold text-[10px] ml-1"
              >
                Esci
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-gradient-to-r from-[#d4af37] to-amber-500 text-black font-bold text-[11px] px-3.5 py-1.5 rounded-lg shadow-sm font-cinzel tap-press"
            >
              Soci
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
