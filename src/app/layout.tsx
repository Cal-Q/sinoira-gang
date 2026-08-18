import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "SINOIRA GANG - Pokémon TCG & Gaming Community",
  description: "Associazione ludico-culturale non competitiva. Pokémon TCG e molto altro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${nunito.variable} ${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <main className="flex-grow">
            {children}
          </main>


        <footer className="bg-white border-t border-gray-100 py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-500 mb-4">© 2026 SINOIRA GANG. Tutti i diritti riservati.</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-[#c94c4c] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#c94c4c] transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-[#c94c4c] transition-colors">Discord</a>
            </div>
          </div>
        </footer>
        </Providers>
      </body>
    </html>
  );
}
