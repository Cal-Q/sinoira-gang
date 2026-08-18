export interface CardItem {
  count: number;
  name: string;
  setNumber?: string;
  rarity?: string;
}

export interface DeckData {
  id: string;
  foilNumber: string;
  title: string;
  archetype: string;
  type: string;
  element: "fuoco" | "psico" | "drago" | "antico" | "incolore" | "elettro";
  tier: string;
  badgeColor: string;
  stars: number;
  shortDesc: string;
  fullDesc: string;
  coverImage: string;
  stats: {
    consistency: number;
    earlyGame: number;
    lateGame: number;
    difficulty: string;
  };
  strategySteps: {
    step1: { title: string; desc: string };
    step2: { title: string; desc: string };
    step3: { title: string; desc: string };
  };
  keyCards: { name: string; role: string }[];
  cardList: {
    pokemon: CardItem[];
    trainers: CardItem[];
    energies: CardItem[];
  };
  tcgLiveCode: string;
  status: "Disponibile" | "In Prestito" | "In Manutenzione";
}

export const DECKS: DeckData[] = [
  {
    id: "charizard",
    foilNumber: "FOIL #01",
    title: "Charizard ex / Pidgeot",
    archetype: "Evoluzione • Ricerca Universale",
    type: "Fuoco / Oscurità",
    element: "fuoco",
    tier: "Tier 1 Meta",
    badgeColor: "#ff4757",
    stars: 5,
    shortDesc: "Il mazzo più affidabile e potente del formato standard. Pidgeot cerca qualsiasi risorsa a ogni turno e Charizard scala fino a 330 danni.",
    fullDesc: "Charizard ex è la spina dorsale del gioco competitivo contemporaneo. Grazie all'abilità 'Infernal Reign' accelera fino a 3 energie Fuoco non appena si evolve, caricando istantaneamente se stesso o gli alleati. Pidgeot ex con 'Quick Search' garantisce di avere sempre in mano la carta perfetta al momento giusto.",
    coverImage: "https://images.pokemontcg.io/sv3pt5/6_hires.png",
    stats: {
      consistency: 5.0,
      earlyGame: 4.8,
      lateGame: 5.0,
      difficulty: "Intermedio"
    },
    strategySteps: {
      step1: { title: "Setup Turno 1", desc: "Usa Buddy-Buddy Poffin per schierare subito Charmander e Pidgey in panchina." },
      step2: { title: "Carica & Ricerca", desc: "Usa Rare Candy per evolvere Charizard ex e Pidgeot ex. Cerca le risorse chiave con Quick Search." },
      step3: { title: "Chiusura Premi", desc: "Burning Darkness infligge 180 + 30 danni per ogni premio avversario preso, superando i 330 danni per KO su qualsiasi ex nemico." }
    },
    keyCards: [
      { name: "Charizard ex (MEW 006)", role: "Attaccante Principale & Acceleratore Energie" },
      { name: "Pidgeot ex (OBF 164)", role: "Motore di Ricerca Libera (Quick Search)" },
      { name: "Buddy-Buddy Poffin", role: "Schieramento Immediato Panchina" },
      { name: "Rare Candy", role: "Salto evolutivo diretto a Fase 2" }
    ],
    cardList: {
      pokemon: [
        { count: 3, name: "Charmander", setNumber: "MEW 004" },
        { count: 1, name: "Charmeleon", setNumber: "PAF 008" },
        { count: 3, name: "Charizard ex", setNumber: "MEW 006" },
        { count: 2, name: "Pidgey", setNumber: "OBF 162" },
        { count: 2, name: "Pidgeot ex", setNumber: "OBF 164" },
        { count: 1, name: "Lumineon V", setNumber: "BRS 040" },
        { count: 1, name: "Rotom V", setNumber: "CRZ 045" },
        { count: 1, name: "Radiant Charizard", setNumber: "CRZ 020" },
        { count: 1, name: "Manaphy", setNumber: "BRS 041" }
      ],
      trainers: [
        { count: 4, name: "Buddy-Buddy Poffin" },
        { count: 4, name: "Ultra Ball" },
        { count: 4, name: "Rare Candy" },
        { count: 2, name: "Nest Ball" },
        { count: 2, name: "Super Rod" },
        { count: 1, name: "Prime Catcher (ACE SPEC)" },
        { count: 3, name: "Iono" },
        { count: 3, name: "Professor's Research" },
        { count: 2, name: "Boss's Orders" },
        { count: 2, name: "Arven" },
        { count: 1, name: "Lost Vacuum" },
        { count: 2, name: "Forest Seal Stone" }
      ],
      energies: [
        { count: 6, name: "Basic Fire Energy" },
        { count: 2, name: "Double Turbo Energy" }
      ]
    },
    tcgLiveCode: `Pokémon: 9
3 Charmander MEW 4
1 Charmeleon PAF 8
3 Charizard ex MEW 6
2 Pidgey OBF 162
2 Pidgeot ex OBF 164
1 Lumineon V BRS 40
1 Rotom V CRZ 45
1 Radiant Charizard CRZ 20
1 Manaphy BRS 41

Trainer: 12
4 Buddy-Buddy Poffin TEF 144
4 Ultra Ball SVI 196
4 Rare Candy SVI 191
2 Nest Ball SVI 181
2 Super Rod PAL 188
1 Prime Catcher TEF 157
3 Iono PAL 185
3 Professor's Research SVI 189
2 Boss's Orders PAL 172
2 Arven SVI 166
1 Lost Vacuum CRZ 135
2 Forest Seal Stone SIT 156

Energy: 2
6 Basic Fire Energy SVE 2
2 Double Turbo Energy BRS 151`,
    status: "Disponibile"
  },
  {
    id: "gardevoir",
    foilNumber: "FOIL #02",
    title: "Gardevoir ex / Drifloon",
    archetype: "Combo Psichica • Manipolazione Cimitero",
    type: "Psico",
    element: "psico",
    tier: "Tier 1 Control",
    badgeColor: "#bf5af2",
    stars: 5,
    shortDesc: "Riciclo infinito di energie dalla pila degli scarti. Drifloon e Scream Tail colpiscono con danni enormi proporzionali ai segnalini.",
    fullDesc: "Gardevoir ex sfrutta l'abilità 'Psychic Embrace' per assegnare quante energie Psico desideri dalla pila degli scarti ai tuoi Pokémon Psico. Combinata con Drifloon (che infligge 30 danni per ogni segnalino presente su di esso) e Bravery Charm, permette di infliggere fino a 360 danni in un singolo colpo spendendo una sola carta non-ex.",
    coverImage: "https://images.pokemontcg.io/sv1/86_hires.png",
    stats: {
      consistency: 4.8,
      earlyGame: 4.5,
      lateGame: 5.0,
      difficulty: "Avanzato"
    },
    strategySteps: {
      step1: { title: "Riempi la Pila Scarti", desc: "Scarta energie Psico con Kirlia (Refinement) e Ultra Ball mentre prepari i Ralts." },
      step2: { title: "Psychic Embrace", desc: "Evolvi Gardevoir ex e carica Drifloon o Scream Tail riassegnando le energie dal cimitero." },
      step3: { title: "One-Shot Devastanti", desc: "Equipaggia Bravery Charm su Drifloon per assorbire fino a 12 segnalini e infliggere 360 danni." }
    },
    keyCards: [
      { name: "Gardevoir ex (SVI 086)", role: "Motore di Rianimazione Energie (Psychic Embrace)" },
      { name: "Kirlia (SIT 068)", role: "Pesca & Scarto Continuo (Refinement)" },
      { name: "Drifloon (SVI 089)", role: "Attaccante Letale da 360 Danni" },
      { name: "Bravery Charm", role: "Incrementa HP a 120 per accumulare più danno" }
    ],
    cardList: {
      pokemon: [
        { count: 4, name: "Ralts", setNumber: "SVI 084" },
        { count: 4, name: "Kirlia", setNumber: "SIT 068" },
        { count: 2, name: "Gardevoir ex", setNumber: "SVI 086" },
        { count: 2, name: "Drifloon", setNumber: "SVI 089" },
        { count: 1, name: "Scream Tail", setNumber: "PAR 086" },
        { count: 1, name: "Munkidori", setNumber: "TWM 095" },
        { count: 1, name: "Radiant Greninja", setNumber: "ASR 046" }
      ],
      trainers: [
        { count: 4, name: "Buddy-Buddy Poffin" },
        { count: 4, name: "Ultra Ball" },
        { count: 3, name: "Level Ball" },
        { count: 2, name: "Super Rod" },
        { count: 3, name: "Bravery Charm" },
        { count: 1, name: "Unfair Stamp (ACE SPEC)" },
        { count: 4, name: "Iono" },
        { count: 3, name: "Arven" },
        { count: 2, name: "Boss's Orders" },
        { count: 2, name: "Artazon" }
      ],
      energies: [
        { count: 9, name: "Basic Psychic Energy" },
        { count: 2, name: "Basic Darkness Energy" }
      ]
    },
    tcgLiveCode: `Pokémon: 7
4 Ralts SVI 84
4 Kirlia SIT 68
2 Gardevoir ex SVI 86
2 Drifloon SVI 89
1 Scream Tail PAR 86
1 Munkidori TWM 95
1 Radiant Greninja ASR 46

Trainer: 10
4 Buddy-Buddy Poffin TEF 144
4 Ultra Ball SVI 196
2 Super Rod PAL 188
3 Bravery Charm PAL 173
1 Unfair Stamp TWM 165
4 Iono PAL 185
3 Arven SVI 166
2 Boss's Orders PAL 172
2 Artazon PAL 171

Energy: 2
9 Basic Psychic Energy SVE 5
2 Basic Darkness Energy SVE 7`,
    status: "Disponibile"
  },
  {
    id: "dragapult",
    foilNumber: "FOIL #03",
    title: "Dragapult ex / Dusknoir",
    archetype: "Spread Danni • Cecchinaggio Panchina",
    type: "Drago",
    element: "drago",
    tier: "Tier 1 Meta",
    badgeColor: "#00f5d4",
    stars: 5,
    shortDesc: "200 danni sul Pokémon attivo e 60 danni cecchino a piacere sulla panchina ogni singolo turno. Dusknoir completa i KO con Cursed Blast.",
    fullDesc: "Dragapult ex domina la pressione sul tavolo con 'Phantom Dive'. Non solo demolisce l'attaccante avversario, ma indebolisce o mette KO i supporti nemici in panchina come Charmander, Pidgey o Ralts prima che possano evolversi. Con la linea di Dusknoir, puoi sacrificare un fantasma per piazzare istantaneamente 130 danni su qualsiasi bersaglio.",
    coverImage: "https://images.pokemontcg.io/sv6/130_hires.png",
    stats: {
      consistency: 4.9,
      earlyGame: 4.7,
      lateGame: 5.0,
      difficulty: "Intermedio"
    },
    strategySteps: {
      step1: { title: "Drakloak Recon", desc: "Usa l'abilità di Drakloak per guardare le prime 2 carte e pescare la migliore ogni turno." },
      step2: { title: "Phantom Dive", desc: "Attacca con 1 Energia Fuoco e 1 Psico per 200 danni + 60 danni divisi a piacimento in panchina." },
      step3: { title: "Esplosione Dusknoir", desc: "Attiva Cursed Blast di Dusknoir per 130 danni a sorpresa senza sprecare l'attacco del turno." }
    },
    keyCards: [
      { name: "Dragapult ex (TWM 130)", role: "Attaccante e Cecchino Letale (Phantom Dive)" },
      { name: "Drakloak (TWM 129)", role: "Motore di Pesca Integrato (Recon Directive)" },
      { name: "Dusknoir (SFA 020)", role: "130 Danni Immediati con Cursed Blast" },
      { name: "Sparkling Crystal", role: "Riduce di 1 energia il costo di attacco" }
    ],
    cardList: {
      pokemon: [
        { count: 4, name: "Dreepy", setNumber: "TWM 128" },
        { count: 3, name: "Drakloak", setNumber: "TWM 129" },
        { count: 3, name: "Dragapult ex", setNumber: "TWM 130" },
        { count: 2, name: "Duskull", setNumber: "SFA 018" },
        { count: 1, name: "Dusclops", setNumber: "SFA 019" },
        { count: 1, name: "Dusknoir", setNumber: "SFA 020" },
        { count: 1, name: "Radiant Alakazam", setNumber: "SIT 059" },
        { count: 1, name: "Rotom V", setNumber: "CRZ 045" }
      ],
      trainers: [
        { count: 4, name: "Buddy-Buddy Poffin" },
        { count: 4, name: "Ultra Ball" },
        { count: 3, name: "Rare Candy" },
        { count: 2, name: "Super Rod" },
        { count: 1, name: "Sparkling Crystal (ACE SPEC)" },
        { count: 3, name: "Iono" },
        { count: 3, name: "Arven" },
        { count: 2, name: "Boss's Orders" },
        { count: 2, name: "Counter Catcher" }
      ],
      energies: [
        { count: 4, name: "Basic Fire Energy" },
        { count: 4, name: "Basic Psychic Energy" },
        { count: 2, name: "Neo Upper Energy" }
      ]
    },
    tcgLiveCode: `Pokémon: 8
4 Dreepy TWM 128
3 Drakloak TWM 129
3 Dragapult ex TWM 130
2 Duskull SFA 18
1 Dusclops SFA 19
1 Dusknoir SFA 20
1 Radiant Alakazam SIT 59
1 Rotom V CRZ 45

Trainer: 9
4 Buddy-Buddy Poffin TEF 144
4 Ultra Ball SVI 196
3 Rare Candy SVI 191
2 Super Rod PAL 188
1 Sparkling Crystal SCR 142
3 Iono PAL 185
3 Arven SVI 166
2 Boss's Orders PAL 172
2 Counter Catcher PAR 160

Energy: 3
4 Basic Fire Energy SVE 2
4 Basic Psychic Energy SVE 5
2 Neo Upper Energy TEF 162`,
    status: "Disponibile"
  },
  {
    id: "ragingbolt",
    foilNumber: "FOIL #04",
    title: "Raging Bolt / Ogerpon",
    archetype: "Antico Turbo • Aggressività Immediata",
    type: "Drago / Erba",
    element: "antico",
    tier: "Tier 1 Turbo",
    badgeColor: "#ffa502",
    stars: 5,
    shortDesc: "Aggressività pura fin dal primo turno. Teal Mask Ogerpon carica le energie ed eccita il campo mentre Raging Bolt scarta per KO istantanei.",
    fullDesc: "Raging Bolt ex è il mazzo più veloce ed esplosivo dell'era Scarlatto & Violetto. Scartando qualsiasi numero di energie Base presenti sui tuoi Pokémon sul campo, infligge 70 danni per ogni energia rimossa. Questo significa che con 4 energie scartate infligge 280 danni, sufficienti a distruggere quasi qualsiasi Pokémon VSTAR o ex Base.",
    coverImage: "https://images.pokemontcg.io/sv5/123_hires.png",
    stats: {
      consistency: 4.9,
      earlyGame: 5.0,
      lateGame: 4.7,
      difficulty: "Facile"
    },
    strategySteps: {
      step1: { title: "Teal Dance Acceleration", desc: "Attiva l'abilità di Teal Mask Ogerpon ex per assegnare energie Erba e pescare carte extra." },
      step2: { title: "Professor Sada's Vitality", desc: "Assegna 2 energie dal cimitero a 2 Pokémon Antichi e pesca 3 carte ogni turno." },
      step3: { title: "Bellowing Thunder", desc: "Scarta tutte le energie sul campo per fare 70x danni e mandare KO l'attaccante nemico." }
    },
    keyCards: [
      { name: "Raging Bolt ex (TEF 123)", role: "Attaccante Primario (Bellowing Thunder 70x)" },
      { name: "Teal Mask Ogerpon ex (TWM 025)", role: "Accelerazione Energia & Pesca (Teal Dance)" },
      { name: "Professor Sada's Vitality", role: "Ricarica 2 energie e pesca 3 carte" },
      { name: "Prime Catcher", role: "Cambio tattico istantaneo" }
    ],
    cardList: {
      pokemon: [
        { count: 3, name: "Raging Bolt ex", setNumber: "TEF 123" },
        { count: 3, name: "Teal Mask Ogerpon ex", setNumber: "TWM 025" },
        { count: 1, name: "Sandy Shocks", setNumber: "TEF 098" },
        { count: 1, name: "Radiant Greninja", setNumber: "ASR 046" },
        { count: 1, name: "Squawkabilly ex", setNumber: "PAL 169" },
        { count: 1, name: "Fezandipiti ex", setNumber: "SFA 038" }
      ],
      trainers: [
        { count: 4, name: "Nest Ball" },
        { count: 4, name: "Ultra Ball" },
        { count: 4, name: "Earthen Vessel" },
        { count: 3, name: "Energy Retrieval" },
        { count: 1, name: "Prime Catcher (ACE SPEC)" },
        { count: 4, name: "Professor Sada's Vitality" },
        { count: 2, name: "Boss's Orders" },
        { count: 2, name: "Iono" },
        { count: 3, name: "Pokégear 3.0" }
      ],
      energies: [
        { count: 6, name: "Basic Grass Energy" },
        { count: 4, name: "Basic Lightning Energy" },
        { count: 3, name: "Basic Fighting Energy" }
      ]
    },
    tcgLiveCode: `Pokémon: 6
3 Raging Bolt ex TEF 123
3 Teal Mask Ogerpon ex TWM 25
1 Sandy Shocks TEF 98
1 Radiant Greninja ASR 46
1 Squawkabilly ex PAL 169
1 Fezandipiti ex SFA 38

Trainer: 9
4 Nest Ball SVI 181
4 Ultra Ball SVI 196
4 Earthen Vessel PAR 163
3 Energy Retrieval SVI 171
1 Prime Catcher TEF 157
4 Professor Sada's Vitality PAR 170
2 Boss's Orders PAL 172
2 Iono PAL 185
3 Pokégear 3.0 SVI 186

Energy: 3
6 Basic Grass Energy SVE 1
4 Basic Lightning Energy SVE 4
3 Basic Fighting Energy SVE 6`,
    status: "Disponibile"
  },
  {
    id: "lugia",
    foilNumber: "FOIL #05",
    title: "Lugia VSTAR / Turbo Archeops",
    archetype: "Energia Speciale • Potere Incolore",
    type: "Incolore",
    element: "incolore",
    tier: "Tier 1.5 Special",
    badgeColor: "#0a84ff",
    stars: 4.5,
    shortDesc: "Evoca 2 Archeops dal cimitero con il potere VSTAR 'Summoning Star' e assegna 4 energie speciali in un secondo.",
    fullDesc: "Lugia VSTAR si affida alla potenza grezza di Summoning Star per resuscitare Archeops saltando ogni fase fossile. Gli Archeops usano 'Primal Turbo' per equipaggiare energie Jet Energy, Gift Energy, Mist Energy e Double Turbo a qualsiasi attaccante sul terreno, garantendo massima mobilità e pesca continua.",
    coverImage: "https://images.pokemontcg.io/swsh12/139_hires.png",
    stats: {
      consistency: 4.6,
      earlyGame: 4.8,
      lateGame: 4.5,
      difficulty: "Facile"
    },
    strategySteps: {
      step1: { title: "Scarta Archeops", desc: "Usa Professor Burnet, Ultra Ball o Carmine per inviare subito 2 Archeops nella pila scarti." },
      step2: { title: "Summoning Star VSTAR", desc: "Attiva il potere VSTAR di Lugia per mettere i 2 Archeops direttamente in panchina." },
      step3: { title: "Primal Turbo", desc: "Assegna 4 energie speciali a turno a Lugia, Cinccino o Iron Hands per colpire a piena potenza." }
    },
    keyCards: [
      { name: "Lugia VSTAR (SIT 139)", role: "Potere VSTAR Summoning Star & Attaccante" },
      { name: "Archeops (SIT 147)", role: "Acceleratore di 2 Energie Speciali a Turno" },
      { name: "Cinccino (TEF 137)", role: "Danni illimitati da 70x per energia speciale" },
      { name: "Legacy Energy", role: "Ruba 1 premio in meno all'avversario" }
    ],
    cardList: {
      pokemon: [
        { count: 3, name: "Lugia V", setNumber: "SIT 138" },
        { count: 3, name: "Lugia VSTAR", setNumber: "SIT 139" },
        { count: 4, name: "Archeops", setNumber: "SIT 147" },
        { count: 2, name: "Minccino", setNumber: "TEF 136" },
        { count: 2, name: "Cinccino", setNumber: "TEF 137" },
        { count: 1, name: "Lumineon V", setNumber: "BRS 040" },
        { count: 1, name: "Iron Hands ex", setNumber: "PAR 070" }
      ],
      trainers: [
        { count: 4, name: "Ultra Ball" },
        { count: 4, name: "Capturing Aroma" },
        { count: 4, name: "Professor's Research" },
        { count: 3, name: "Boss's Orders" },
        { count: 2, name: "Iono" },
        { count: 2, name: "Carmine" },
        { count: 1, name: "Legacy Energy (ACE SPEC)" }
      ],
      energies: [
        { count: 4, name: "Jet Energy" },
        { count: 4, name: "Double Turbo Energy" },
        { count: 4, name: "Gift Energy" },
        { count: 3, name: "Mist Energy" }
      ]
    },
    tcgLiveCode: `Pokémon: 7
3 Lugia V SIT 138
3 Lugia VSTAR SIT 139
4 Archeops SIT 147
2 Minccino TEF 136
2 Cinccino TEF 137
1 Lumineon V BRS 40
1 Iron Hands ex PAR 70

Trainer: 7
4 Ultra Ball SVI 196
4 Capturing Aroma SIT 153
4 Professor's Research SVI 189
3 Boss's Orders PAL 172
2 Iono PAL 185
2 Carmine TWM 145
1 Legacy Energy TWM 167

Energy: 4
4 Jet Energy PAL 190
4 Double Turbo Energy BRS 151
4 Gift Energy LOR 171
3 Mist Energy TEF 161`,
    status: "Disponibile"
  },
  {
    id: "miraidon",
    foilNumber: "FOIL #06",
    title: "Miraidon ex / Iron Hands",
    archetype: "Generatore Elettrico • Raddoppio Premi",
    type: "Elettro",
    element: "elettro",
    tier: "Tier 1 Speed",
    badgeColor: "#f1c40f",
    stars: 4.8,
    shortDesc: "Tandem Unit popola la panchina in un istante. Electric Generator carica le energie in tempo zero e Iron Hands ruba 2 premi sui Pokémon base.",
    fullDesc: "Miraidon ex con 'Tandem Unit' cerca 2 Pokémon Elettro Base e li mette direttamente in panchina senza spendere carte allenatore. Electric Generator guarda le prime 5 carte del mazzo e assegna fino a 2 energie Lampo. Iron Hands ex chiude le partite in fretta incassando 2 carte premio persino dai Pokémon non-ex con 'Amp You Very Much'.",
    coverImage: "https://images.pokemontcg.io/sv1/81_hires.png",
    stats: {
      consistency: 4.8,
      earlyGame: 5.0,
      lateGame: 4.5,
      difficulty: "Facile"
    },
    strategySteps: {
      step1: { title: "Tandem Unit Turno 1", desc: "Attiva l'abilità di Miraidon per chiamare subito Iron Hands, Raikou o Mew ex in panchina." },
      step2: { title: "Electric Generator", desc: "Gioca 2 o 3 Electric Generator per caricare istantaneamente 4 o più energie Lampo." },
      step3: { title: "Amp You Very Much", desc: "Colpisci i Pokémon base avversari per prendere 2 premi invece di 1 e vincere in 3 attacchi." }
    },
    keyCards: [
      { name: "Miraidon ex (SVI 081)", role: "Schieramento Panchina Istantaneo (Tandem Unit)" },
      { name: "Iron Hands ex (PAR 070)", role: "Raddoppio Premi (Amp You Very Much)" },
      { name: "Electric Generator", role: "Accelerazione fino a 2 energie Lampo per copia" },
      { name: "Prime Catcher", role: "Isola i Pokémon fragili in panchina" }
    ],
    cardList: {
      pokemon: [
        { count: 3, name: "Miraidon ex", setNumber: "SVI 081" },
        { count: 2, name: "Iron Hands ex", setNumber: "PAR 070" },
        { count: 2, name: "Raikou V", setNumber: "BRS 048" },
        { count: 1, name: "Iron Crown ex", setNumber: "TEF 081" },
        { count: 1, name: "Mew ex", setNumber: "MEW 151" },
        { count: 1, name: "Squawkabilly ex", setNumber: "PAL 169" },
        { count: 1, name: "Fezandipiti ex", setNumber: "SFA 038" }
      ],
      trainers: [
        { count: 4, name: "Electric Generator" },
        { count: 4, name: "Ultra Ball" },
        { count: 4, name: "Nest Ball" },
        { count: 1, name: "Prime Catcher (ACE SPEC)" },
        { count: 4, name: "Professor's Research" },
        { count: 3, name: "Boss's Orders" },
        { count: 3, name: "Arven" },
        { count: 2, name: "Iono" },
        { count: 2, name: "Bravery Charm" }
      ],
      energies: [
        { count: 14, name: "Basic Lightning Energy" },
        { count: 2, name: "Basic Psychic Energy" }
      ]
    },
    tcgLiveCode: `Pokémon: 7
3 Miraidon ex SVI 81
2 Iron Hands ex PAR 70
2 Raikou V BRS 48
1 Iron Crown ex TEF 81
1 Mew ex MEW 151
1 Squawkabilly ex PAL 169
1 Fezandipiti ex SFA 38

Trainer: 9
4 Electric Generator SVI 170
4 Ultra Ball SVI 196
4 Nest Ball SVI 181
1 Prime Catcher TEF 157
4 Professor's Research SVI 189
3 Boss's Orders PAL 172
3 Arven SVI 166
2 Iono PAL 185
2 Bravery Charm PAL 173

Energy: 2
14 Basic Lightning Energy SVE 4
2 Basic Psychic Energy SVE 5`,
    status: "Disponibile"
  }
];

export const SEALED_PRODUCTS = [
  {
    id: "box-paldea",
    name: "Display Box - Evoluzioni a Paldea",
    type: "Box 36 Buste",
    image: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=500&auto=format&fit=crop&q=80",
    priceRetail: "155.00€",
    priceMember: "128.00€",
    stock: "3 Disponibili",
    description: "Espansione fondamentale con Iono, Chien-Pao ex, Ting-Lu ex e Super Rod."
  },
  {
    id: "box-fiamme",
    name: "Display Box - Fiamme Ossidiane",
    type: "Box 36 Buste",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80",
    priceRetail: "150.00€",
    priceMember: "124.00€",
    stock: "2 Disponibili",
    description: "Contiene Charizard ex Tera Buio, Pidgeot ex e Cleffa."
  },
  {
    id: "etb-crepuscolo",
    name: "Elite Trainer Box - Crepuscolo Mascherato",
    type: "Set Allenatore Fuoriclasse",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=80",
    priceRetail: "54.90€",
    priceMember: "44.00€",
    stock: "5 Disponibili",
    description: "9 bustine, promo Ogerpon Maschera Turchese, bustine protettive e dadi segnadanno."
  }
];

export const SCHEDULE_EVENTS = [
  {
    day: "OGNI LUNEDÌ SERA",
    time: "20:30 - 23:30",
    title: "Pokémon TCG Free Play & Consegna Mazzi",
    location: "Comala, Corso Ferrucci 65/a, Torino",
    desc: "Distribuzione gratuita dei 6 mazzi completi da torneo, amichevoli libere e spiegazione regole da zero per neofiti.",
    badge: "Ingresso Libero",
    badgeColor: "#2ed573"
  },
  {
    day: "OGNI MERCOLEDÌ SERA",
    time: "21:00 - 23:30",
    title: "Super Smash Bros Ultimate Night",
    location: "Saletta Comala, Corso Ferrucci 65/a",
    desc: "Postazioni dedicate su Nintendo Switch con monitor a bassa latenza, sfide 1v1 e mini tornei casual amichevoli.",
    badge: "3 Postazioni",
    badgeColor: "#0a84ff"
  },
  {
    day: "ULTIMO LUNEDÌ DEL MESE",
    time: "20:45",
    title: "Torneo Svizzera Friendly",
    location: "Comala, Salone Principale",
    desc: "3 turni rilassati senza eliminazione diretta. Bustine promo e carte speciali garantite per tutti i partecipanti.",
    badge: "Promo per Tutti",
    badgeColor: "#d4af37"
  }
];
