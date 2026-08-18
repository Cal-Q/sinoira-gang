export default function ChiSiamo() {
  return (
    <>
      {/* Full width banner - scaled down to ~40% (16vh-20vh) */}
      <div className="w-full h-[16vh] md:h-[20vh] relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/banner.jpg" alt="Sinoira Gang al Comala" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-nunito font-extrabold text-[#c94c4c] mb-12 tracking-wide">
          CHI SIAMO
        </h1>
        
        <div className="text-lg md:text-xl text-gray-700 space-y-6 font-inter leading-relaxed text-left">
          <p>
            Siamo un'organizzazione <strong>no-profit</strong> e associazione ludico-culturale dedicata a creare uno spazio sicuro e inclusivo per tutti gli appassionati.
          </p>
          <p>
            Facciamo giocare a Pokémon TCG offrendo <strong>mazzi gratuiti di prova</strong> per chi vuole avvicinarsi a questo fantastico mondo senza alcuna barriera all'ingresso. Non serve possedere carte costose per divertirsi con noi!
          </p>
          <p>
            Ma non siamo solo Pokémon! Siamo una vera e propria <strong>community inclusiva e non competitiva</strong> che segue e supporta con passione anche altri giochi, come <em>Super Smash Bros</em> e molto altro, dove lo stare insieme viene sempre prima del risultato agonistico.
          </p>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-red-100 rounded-3xl p-8 mt-12 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-[#c94c4c] mb-4">Unisciti a noi!</h2>
            <p className="text-xl">
              Vieni a conoscerci ogni <strong>Lunedì sera</strong> al <strong>Comala</strong>. <br/>Ti aspettiamo a braccia aperte per giocare insieme!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
