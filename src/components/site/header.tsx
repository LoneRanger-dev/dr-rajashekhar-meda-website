"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site, navigation } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 border-b border-sky-500/40 shadow-xl backdrop-blur-xl text-white">
      {/* Full-width Rectangle Ribbon Bar with Mobile Fluid Padding & Height */}
      <div className="w-full px-3 sm:px-6 lg:px-8 flex h-14 sm:h-16 lg:h-20 items-center justify-between gap-2 sm:gap-4">
        
        {/* Doctor Name & Credentials — Responsive Fluid Typography */}
        <Link href="/" className="flex flex-col min-w-0 shrink justify-center group pr-2">
          <span className="font-[family-name:var(--font-display)] font-extrabold text-sm sm:text-base lg:text-xl text-white tracking-tight leading-tight group-hover:text-sky-300 transition-colors truncate">
            {site.doctor.name}
          </span>
          <span className="text-[10px] sm:text-xs lg:text-sm text-sky-300 font-semibold tracking-wide truncate">
            {site.doctor.credentials} · {site.doctor.title}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative inline-flex h-11 items-center whitespace-nowrap rounded-none px-3.5 xl:px-4 text-sm font-semibold transition-all duration-300",
                      active
                        ? "bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.short}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle Button */}
        <div className="flex items-center gap-2 shrink-0 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 sm:size-11 place-items-center rounded-none bg-sky-500/20 border border-sky-400/30 text-white hover:bg-sky-500/30 transition-all active:scale-95"
          >
            {open ? <X className="size-5 sm:size-6" /> : <Menu className="size-5 sm:size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="lg:hidden w-full border-t border-sky-500/30 bg-slate-950/98 shadow-2xl"
        >
          <ul className="p-3 space-y-1 text-white">
            {navigation.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex h-11 items-center rounded-none px-4 text-sm sm:text-base font-semibold transition-colors",
                      active
                        ? "bg-sky-500/25 text-sky-300 border border-sky-400/40"
                        : "text-slate-200 hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
