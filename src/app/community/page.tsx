"use client";

import { motion } from "framer-motion";
import { MessageCircle, Camera, Send } from "lucide-react";

const DUMMY_PHOTOS = [
  "https://images.unsplash.com/photo-1611996575749-79a3a250f5b5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
];

export default function Community() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-nunito font-extrabold text-[#2d3748] mb-4">La Nostra Famiglia</h1>
        <p className="text-xl text-gray-600 font-inter leading-relaxed">
          SINOIRA GANG non è solo un gruppo di gioco, è una famiglia. Ci troviamo ogni lunedì sera al Comala per scambiare carte, imparare nuove strategie e divertirci insieme.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <a href="#" className="bg-gradient-to-br from-[#5865F2] to-[#4752C4] text-white rounded-3xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-lg">
          <MessageCircle size={48} className="mb-4" />
          <h3 className="font-nunito font-bold text-2xl mb-2">Discord</h3>
          <p className="opacity-90">Entra nel server per chiacchierare tutti i giorni.</p>
        </a>
        <a href="#" className="bg-gradient-to-br from-[#E1306C] to-[#C13584] text-white rounded-3xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-lg">
          <Camera size={48} className="mb-4" />
          <h3 className="font-nunito font-bold text-2xl mb-2">Instagram</h3>
          <p className="opacity-90">Guarda le foto dei nostri tornei e ritrovi.</p>
        </a>
        <a href="#" className="bg-gradient-to-br from-[#0088cc] to-[#0077b5] text-white rounded-3xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform shadow-lg">
          <Send size={48} className="mb-4" />
          <h3 className="font-nunito font-bold text-2xl mb-2">Telegram</h3>
          <p className="opacity-90">Unisciti al gruppo per aggiornamenti rapidi.</p>
        </a>
      </div>

      <h2 className="text-3xl font-nunito font-bold text-[#c94c4c] mb-8 text-center">Galleria Ricordi</h2>
      
      {/* Masonry Layout Approximation for MVP */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {DUMMY_PHOTOS.map((photo, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={photo} 
              alt={`Community ${idx}`}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-nunito font-bold text-lg">❤️ SINOIRA GANG</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
