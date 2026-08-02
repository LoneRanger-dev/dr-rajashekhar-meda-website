"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ShieldAlert } from "lucide-react";
import { site, navigation } from "@/lib/site";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 border-b border-sky-500/40 shadow-xl backdrop-blur-xl text-white">
      {/* Full-width Rectangle Ribbon Bar */}
      <div className="w-full px-4 sm:px-8 flex h-16 lg:h-20 items-center justify-between gap-4">
        
        {/* Doctor Name & Credentials (NO image logo inside ribbon) */}
        <Link href="/" className="flex flex-col shrink-0 justify-center group">
          <span className="font-[family-name:var(--font-display)] font-extrabold text-base sm:text-lg lg:text-xl text-white tracking-tight leading-tight group-hover:text-sky-300 transition-colors">
            {site.doctor.name}
          </span>
          <span className="text-xs sm:text-sm text-sky-300 font-semibold tracking-wide">
            {site.doctor.credentials} · {site.doctor.title}
          </span>
        </Link>

        {/* Navigation Links */}
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
                      "relative inline-flex h-11 items-center whitespace-nowrap rounded-lg px-3.5 xl:px-4 text-sm font-semibold transition-all duration-300",
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

        {/* Right Call CTA & Mobile Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={site.contact.phoneHref}
            onClick={() => track("call_click", { source: "header" })}
            className="hidden sm:inline-flex items-center justify-center gap-2.5 rounded-lg bg-emergency text-white px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-emergency-hover hover:-translate-y-0.5 transition-all duration-300 active:scale-95 border border-white/20"
          >
            <ShieldAlert className="size-4 animate-pulse" aria-hidden />
            <span className="tnum">24/7 Call: {site.contact.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden grid size-11 place-items-center rounded-lg bg-sky-500/20 border border-sky-400/30 text-white hover:bg-sky-500/30 transition-all"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="lg:hidden w-full border-t border-sky-500/30 bg-slate-950/95"
        >
          <ul className="p-3 space-y-1.5 text-white">
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
                      "flex h-12 items-center rounded-lg px-4 text-base font-semibold transition-colors",
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
