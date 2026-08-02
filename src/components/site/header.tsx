"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ShieldAlert } from "lucide-react";
import { site, navigation } from "@/lib/site";
import { brandImages } from "@/lib/siteAssets";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 pt-2 sm:pt-3">
        {/* Prominent Deep Clinical Blue Ribbon Navbar */}
        <div className="relative rounded-2xl px-4 sm:px-6 flex h-16 lg:h-20 items-center justify-between gap-4 bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 border border-sky-500/40 shadow-[0_10px_35px_rgba(2,132,199,0.3)] backdrop-blur-xl text-white">
          
          {/* Logo & Doctor Title */}
          <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0">
            <span className="inline-flex rounded-xl bg-white p-1.5 shrink-0 shadow-md">
              <Image
                src={brandImages.logo.src}
                alt={`${site.hospital.name} — Laparoscopic & General Surgery`}
                width={brandImages.logo.width}
                height={brandImages.logo.height}
                priority
                className="h-8 sm:h-10 lg:h-11 w-auto object-contain"
              />
            </span>
            <span className="leading-tight hidden sm:block lg:hidden 2xl:block border-l border-sky-500/30 pl-3 min-w-0">
              <span className="block font-[family-name:var(--font-display)] font-bold text-sm sm:text-base text-white truncate">
                {site.doctor.name}
              </span>
              <span className="block text-xs text-sky-300 truncate font-medium">
                {site.doctor.credentials}
              </span>
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
                        "relative inline-flex h-11 items-center whitespace-nowrap rounded-xl px-3.5 xl:px-4 text-sm font-semibold transition-all duration-300",
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
              className="lg:hidden grid size-11 place-items-center rounded-xl bg-sky-500/20 border border-sky-400/30 text-white hover:bg-sky-500/30 transition-all"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile Navigation"
          className="lg:hidden mx-auto max-w-7xl px-3 sm:px-6 mt-2"
        >
          <ul className="rounded-2xl p-2.5 space-y-1.5 bg-slate-950/95 border border-sky-500/30 shadow-2xl backdrop-blur-xl text-white">
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
                      "flex h-12 items-center rounded-xl px-4 text-base font-semibold transition-colors",
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
