"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Sparkles, Maximize2, X, ShoppingBag, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const { user, login, logout, isAdmin, isAssociated } = useAuth();
  
  const handleLogin = () => {
    const email = prompt("Inserisci la tua email Google per accedere:");
    if (email) login(email);
  };

  return (
    <>
      <section className="w-full bg-gradient-to-b from-red-200/50 to-red-50 text-[#2d3748] py-6 border-b border-red-100 shadow-sm">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Logo and Curved Text - Scaled down to ~40% */}
            <div className="relative w-[120px] h-[100px] flex items-center justify-center">
              {/* The curved text */}
              <svg viewBox="0 0 120 100" className="absolute top-0 left-0 w-[120px] h-[100px] overflow-visible">
                <path id="curve" d="M 15 65 A 45 45 0 0 1 105 65" fill="transparent" />
                <text className="font-nunito font-extrabold text-[14px] fill-[#c94c4c] tracking-widest uppercase" style={{ textTransform: 'uppercase' }}>
                  <textPath href="#curve" startOffset="50%" textAnchor="middle">
                    Sinoria Gang
                  </textPath>
                </text>
              </svg>
              {/* The logo (60px round) */}
              <div className="absolute top-[35px] w-[60px] h-[60px] rounded-full overflow-hidden border-[3px] border-white shadow-md z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.jpg" alt="Sinoria Gang Logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex justify-end mb-6 gap-4">
          {isAdmin && (
            <Link href="/admin" className="flex items-center gap-2 bg-purple-100 text-purple-700 px-6 py-3 rounded-full font-bold hover:bg-purple-200 transition-colors shadow-sm">
              <ShieldCheck size={20} /> Admin Panel
            </Link>
          )}
          {user ? (
            <div className="flex items-center gap-4 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm">
              <span className="text-gray-700 font-bold">{user.email}</span>
              <button onClick={logout} className="text-red-500 hover:text-red-700 font-bold text-sm">Esci</button>
            </div>
          ) : (
            <button onClick={handleLogin} className="flex items-center gap-3 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-bold hover:bg-gray-50 hover:shadow-md transition-all shadow-sm">
              <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                <path d="M1 1h22v22H1z" fill="none"/>
              </svg>
              Accedi con Google
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <Link href="/chi-siamo" className="bg-[#2d3748] hover:bg-[#1a202c] text-white rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center transition-transform hover:scale-105 shadow-xl aspect-square md:aspect-video">
            <span className="font-nunito font-extrabold text-2xl md:text-5xl">Chi siamo</span>
          </Link>
          <Link href="/mazzi" className="bg-gradient-to-br from-[#c94c4c] to-orange-500 text-white rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center transition-transform hover:scale-105 shadow-xl aspect-square md:aspect-video">
            <span className="font-nunito font-extrabold text-2xl md:text-5xl">Mazzi disponibili</span>
          </Link>
          <Link href="/rotazione" className="bg-gradient-to-br from-orange-400 to-[#c94c4c] text-white rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center transition-transform hover:scale-105 shadow-xl aspect-square md:aspect-video">
            <span className="font-nunito font-extrabold text-2xl md:text-5xl">Rotazione</span>
          </Link>
          <Link href="/community" className="bg-[#2d3748] hover:bg-[#1a202c] text-white rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center transition-transform hover:scale-105 shadow-xl aspect-square md:aspect-video">
            <span className="font-nunito font-extrabold text-2xl md:text-5xl">Community</span>
          </Link>
        </div>

        {/* Prodotti Sigillati Section */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <ShoppingBag className="text-blue-500" size={32} />
            <h2 className="text-3xl font-nunito font-bold text-[#2d3748]">Prodotti Sigillati</h2>
          </div>
          {isAssociated ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <div className="aspect-square bg-gray-100 rounded-xl mb-4"></div>
                <h3 className="font-bold text-lg mb-2">Box Evoluzioni a Paldea</h3>
                <p className="text-blue-600 font-bold text-xl mt-auto">€120.00</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                <div className="aspect-square bg-gray-100 rounded-xl mb-4"></div>
                <h3 className="font-bold text-lg mb-2">ETB Scarlatto e Violetto</h3>
                <p className="text-blue-600 font-bold text-xl mt-auto">€45.00</p>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <p className="text-xl text-gray-500 font-medium">Questa sezione è riservata esclusivamente ai soci dell'associazione.</p>
              <p className="text-gray-400 mt-2">Effettua l'accesso con un account associato per visualizzare i prodotti sigillati.</p>
            </div>
          )}
        </div>

        {/* Calendar and Events Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Calendar */}
          <div 
            className="md:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow group flex flex-col"
            onClick={() => setIsCalendarOpen(true)}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-nunito font-bold text-[#c94c4c] flex items-center gap-2">
                <Calendar size={28} /> Calendario
              </h2>
              <Maximize2 className="text-gray-400 group-hover:text-[#c94c4c] transition-colors" size={20} />
            </div>
            
            <div className="flex-grow flex items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 min-h-[300px]">
              <div className="text-center p-8">
                <Calendar className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500 font-medium">Clicca per aprire il calendario a tutto schermo.</p>
              </div>
            </div>
          </div>

          {/* Highlighted Events */}
          <div className="md:col-span-5 bg-white rounded-3xl p-8 shadow-sm border border-orange-100 flex flex-col">
            <h2 className="text-2xl font-nunito font-bold text-orange-500 mb-6 flex items-center gap-2">
              <Sparkles size={28} /> Eventi in evidenza
            </h2>
            <div className="space-y-4 flex-grow">
              <div className="p-5 bg-orange-50 rounded-2xl border border-orange-100 transition-all hover:bg-orange-100/50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#2d3748] text-lg">Lunedì sera Free Play @ Comala</h3>
                  <span className="bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap ml-2">Ogni Lunedì</span>
                </div>
                <p className="text-sm text-gray-600">Distribuzione mazzi gratuiti e sfide amichevoli aperte a tutti.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Fullscreen Modal */}
      <AnimatePresence>
        {isCalendarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full h-full max-w-7xl max-h-full rounded-3xl flex flex-col overflow-hidden shadow-2xl"
            >
              <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h2 className="text-2xl font-nunito font-bold text-[#2d3748] flex items-center gap-2">
                  <Calendar className="text-[#c94c4c]" size={28} /> Calendario Completo
                </h2>
                <button 
                  onClick={() => setIsCalendarOpen(false)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
              <div className="flex-grow p-4 md:p-8 flex flex-col items-center justify-center bg-white">
                <Calendar className="text-gray-200 mb-6" size={80} />
                <p className="text-gray-500 text-xl font-medium text-center">Il calendario dettagliato e interattivo verrà implementato qui.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
