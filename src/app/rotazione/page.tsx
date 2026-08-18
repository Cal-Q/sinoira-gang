export default function Rotazione() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-nunito font-extrabold text-[#c94c4c] mb-12 text-center tracking-wide">
        ROTAZIONE
      </h1>
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-lg text-gray-700 space-y-6 font-inter leading-relaxed">
        <p>
          Nel Gioco di Carte Collezionabili Pokémon, la <strong>rotazione</strong> è un evento annuale in cui le espansioni più vecchie vengono rimosse dal formato Standard per i tornei ufficiali.
        </p>
        <p>
          Questo processo aiuta a mantenere il gioco fresco, bilanciato e accessibile ai nuovi giocatori, impedendo che il numero di carte e strategie valide diventi troppo opprimente o stagnante.
        </p>
        <div className="bg-red-50 border-l-4 border-[#c94c4c] rounded-r-2xl p-6 mt-8 shadow-sm">
          <h2 className="font-bold text-xl text-[#c94c4c] mb-2">Come capire se una carta è valida?</h2>
          <p>
            Da qualche anno, le carte valide nel formato Standard sono identificate da una lettera (marchio di regolamentazione) posta nell'angolo in basso a sinistra della carta. Ad ogni rotazione annuale, la lettera più vecchia (es. "E") esce dal formato, lasciando spazio solo alle lettere più recenti (es. "F", "G", "H").
          </p>
        </div>
      </div>
    </div>
  );
}
