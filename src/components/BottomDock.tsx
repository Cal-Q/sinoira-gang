"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomDock() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Raccoglitore", icon: "📖", tag: "home" },
    { href: "/mazzi", label: "Mazzi (6)", icon: "🎴", tag: "mazzi" },
    { href: "/community", label: "Comala", icon: "🏛️", tag: "comala" },
    { href: "/rotazione", label: "Rotazione", icon: "🔄", tag: "meta" },
    { href: "/chi-siamo", label: "Club", icon: "👥", tag: "club" },
  ];

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 binder-dock rounded-full px-5 py-2 shadow-2xl flex items-center gap-5 text-xs font-bold gold-border gold-glow max-w-sm w-[92%] justify-around">
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
                ? "text-amber-300 scale-105"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="text-base leading-none">{item.icon}</span>
            <span className="text-[9px] font-cinzel font-bold tracking-tight">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
