"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomDock() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Binder", icon: "📖" },
    { href: "/community", label: "Comala", icon: "🏛️" },
    { href: "/rotazione", label: "Rotazione", icon: "🔄" },
    { href: "/chi-siamo", label: "Club", icon: "👥" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#101114]/95 backdrop-blur-md border-t border-[#d4af37]/20 py-2 px-6">
      <div className="max-w-md mx-auto flex items-center justify-between text-xs font-cinzel font-bold">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 transition-all tap-press ${
                isActive
                  ? "text-[#d4af37]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span className="text-base leading-none">{item.icon}</span>
              <span className="text-[9px] font-cinzel tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
