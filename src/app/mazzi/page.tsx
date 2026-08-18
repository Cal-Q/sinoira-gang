"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Edit3 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function Mazzi() {
  const { isAdmin } = useAuth();
  const [isEditorMode, setIsEditorMode] = useState(false);

  // Mock data for initial presentation
  const mazzi = [
    { id: 'charizard-ex', name: 'Charizard ex', image: '/banner.jpg' },
    { id: 'chien-pao', name: 'Chien-Pao ex', image: '/banner.jpg' },
    { id: 'gardevoir', name: 'Gardevoir ex', image: '/banner.jpg' },
    { id: 'lost-box', name: 'Lost Zone Box', image: '/banner.jpg' },
  ];

  return (
    <>
      {/* Full width banner - scaled down to ~40% (12vh-16vh) */}
      <div className="w-full h-[12vh] md:h-[16vh] relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banner.jpg" alt="Mazzi Sinoira Gang" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
          <h1 className="text-4xl md:text-5xl font-nunito font-extrabold text-[#c94c4c] tracking-wide">
            MAZZI DISPONIBILI
          </h1>
          
          {isAdmin && (
            <button 
              onClick={() => setIsEditorMode(!isEditorMode)}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all shadow-sm w-full md:w-auto ${
                isEditorMode 
                  ? 'bg-orange-500 text-white shadow-orange-200' 
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Edit3 size={18} /> {isEditorMode ? 'Editor Mode: ON' : 'Editor Mode: OFF'}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mazzi.map((mazzo) => (
            <Link key={mazzo.id} href={`/mazzi/${mazzo.id}`}>
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 group relative">
                <div className="aspect-video relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={mazzo.image} alt={mazzo.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h2 className="absolute bottom-6 left-6 text-3xl font-extrabold font-nunito text-white drop-shadow-md">{mazzo.name}</h2>
                </div>
              </div>
            </Link>
          ))}

          {isEditorMode && (
            <div className="bg-orange-50 rounded-[2rem] border-2 border-dashed border-orange-300 flex flex-col items-center justify-center min-h-[250px] text-orange-500 hover:bg-orange-100 transition-colors cursor-pointer aspect-video md:aspect-auto">
              <Plus size={48} className="mb-4" />
              <span className="font-bold text-xl">Aggiungi nuovo mazzo</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
