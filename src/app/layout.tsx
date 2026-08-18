import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SINOIRA GANG — Pokémon TCG & Gaming Club Torino",
  description: "Associazione ludico-culturale non competitiva a Torino. Mazzi Pokémon completi gratuiti ogni lunedì sera al Comala, tornei Super Smash Bros e serate di gioco.",
  keywords: ["Pokemon TCG", "Torino", "Comala", "Sinoira Gang", "Mazzi Pokémon Gratis", "Super Smash Bros"],
  openGraph: {
    title: "SINOIRA GANG — Pokémon TCG & Gaming Club Torino",
    description: "Mazzi Pokémon completi disponibili gratuitamente ogni lunedì sera al Comala di Torino.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <body
        className={`${cinzel.variable} ${jakarta.variable} ${spaceMono.variable} font-sans antialiased min-h-screen flex flex-col bg-[#101114] text-[#f1f2f6] selection:bg-[#d4af37] selection:text-black`}
      >
        <Providers>
          <div className="flex-grow flex flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
