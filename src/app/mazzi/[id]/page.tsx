"use client";

import { useState } from "react";
import { Edit3, Copy, Plus, Trash2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function DeckPage({ params }: { params: { id: string } }) {
  const { isAdmin } = useAuth();
  const [isEditorMode, setIsEditorMode] = useState(false);

  // Mock data for the deck
  const deck = {
    id: params.id,
    name: "Charizard ex",
    stats: {
      difficolta: "Media",
      stile: "Aggro",
      tier: "S",
    },
    lists: [
      { id: '1', name: 'Standard List', code: 'Pokémon: 15\n3 Charmander MEW 4\n1 Charmeleon MEW 5\n3 Charizard ex OBF 125\n... ' },
      { id: '2', name: 'Pidgeot Variant', code: 'Pokémon: 17\n...' }
    ],
    strategy: [
      { id: 's1', title: 'Setup Iniziale', description: 'Cerca di mettere giù più Charmander possibili al primo turno utilizzando Poffin della Lotta o Nest Ball.', image: '/banner.jpg' },
      { id: 's2', title: 'Evoluzione Rapida', description: 'Utilizza le Caramelle Rare per evolvere direttamente in Charizard ex e caricare le energie usando la sua abilità Cuore Infernale.', image: '/banner.jpg' }
    ]
  };

  return (
    <>
      {/* Full width banner - scaled down to ~40% (12vh-16vh) */}
      <div className="w-full h-[12vh] md:h-[16vh] relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banner.jpg" alt={deck.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex justify-end mb-8">
          {isAdmin && (
            <button 
              onClick={() => setIsEditorMode(!isEditorMode)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all shadow-sm ${
                isEditorMode 
                  ? 'bg-orange-500 text-white shadow-orange-200' 
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Edit3 size={18} /> {isEditorMode ? 'Editor Mode: ON' : 'Editor Mode: OFF'}
            </button>
          )}
        </div>

        {/* Deck Header: Image Left, Stats Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
          <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/banner.jpg" alt={deck.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-nunito font-extrabold text-[#2d3748] mb-6">{deck.name}</h1>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-500 w-24">Difficoltà:</span>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full font-bold">{deck.stats.difficolta}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-500 w-24">Stile:</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-bold">{deck.stats.stile}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-500 w-24">Tier:</span>
                <span className="bg-red-100 text-red-800 px-4 py-1 rounded-full font-bold">{deck.stats.tier}</span>
              </div>
            </div>

            <button className="flex items-center justify-center gap-2 bg-[#c94c4c] hover:bg-red-700 text-white px-6 py-4 rounded-full font-bold transition-all shadow-md active:scale-95 text-lg">
              <Copy size={20} /> Copia mazzo per TCG Live
            </button>
          </div>
        </div>

        {/* Alternative Lists */}
        <div className="mb-20">
          <h2 className="text-3xl font-nunito font-bold text-[#c94c4c] mb-8">Altre liste</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deck.lists.map((list) => (
              <div key={list.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-[#2d3748] mb-4">{list.name}</h3>
                <button className="flex items-center justify-center gap-2 bg-white border-2 border-[#c94c4c] text-[#c94c4c] hover:bg-red-50 px-4 py-3 rounded-xl font-bold transition-colors w-full">
                  <Copy size={18} /> Copia mazzo per TCG Live
                </button>
              </div>
            ))}
            {isEditorMode && (
              <div className="bg-orange-50 rounded-2xl border-2 border-dashed border-orange-300 flex flex-col items-center justify-center p-6 text-orange-500 hover:bg-orange-100 transition-colors cursor-pointer">
                <Plus size={32} className="mb-2" />
                <span className="font-bold">Aggiungi lista</span>
              </div>
            )}
          </div>
        </div>

        {/* Strategy Sections */}
        <div>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-nunito font-bold text-[#2d3748]">Strategia</h2>
            {isEditorMode && (
              <button className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold hover:bg-orange-200 transition-colors">
                <Plus size={18} /> Aggiungi Sezione
              </button>
            )}
          </div>

          <div className="space-y-16">
            {deck.strategy.map((section, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={section.id} className={`flex flex-col md:flex-row gap-12 items-center relative group`}>
                  
                  {isEditorMode && (
                    <button className="absolute -top-4 -right-4 bg-red-100 text-red-600 p-2 rounded-full hover:bg-red-200 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <Trash2 size={20} />
                    </button>
                  )}

                  <div className={`w-full md:w-1/2 aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-sm ${!isEven ? 'md:order-2' : ''}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                  </div>
                  <div className={`w-full md:w-1/2 ${!isEven ? 'md:order-1' : ''}`}>
                    <h3 className="text-3xl font-nunito font-bold text-[#c94c4c] mb-6">{section.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed font-inter">
                      {section.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </>
  );
}
