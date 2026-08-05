"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { site, navigation } from "@/lib/site";
import { cn } from "@/lib/utils";
import { TopBar } from "./top-bar";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#") && pathname === "/") {
      const targetId = href.split("#")[1];
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-xl">
      {/* Top Bar (Email, Hours, Location, Helpline) */}
      <TopBar />

      {/* Main Navbar */}
      <div className="w-full bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 border-b border-sky-500/40 backdrop-blur-xl text-white">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 flex h-14 sm:h-16 lg:h-20 items-center justify-between gap-2 sm:gap-4">
          
          {/* Doctor Name & Branding Section */}
          <Link href="/#hero" onClick={(e) => handleNavClick(e, "/#hero")} className="flex flex-col shrink-0 justify-center group pr-4 sm:pr-6">
            <span className="font-[family-name:var(--font-display)] font-extrabold text-base sm:text-lg lg:text-xl text-white tracking-tight leading-tight group-hover:text-sky-300 transition-colors whitespace-nowrap">
              {site.doctor.name}
            </span>
            <span className="hidden lg:block text-[14px] lg:text-[15px] font-medium text-sky-300 tracking-tight leading-tight whitespace-nowrap">
              {site.doctor.headerSubtitle}
            </span>
          </Link>

          {/* Desktop Navigation Links + Book Appointment CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <nav aria-label="Main Navigation">
              <ul className="flex items-center gap-1 xl:gap-2">
                {navigation.map((item) => {
                  const hrefStr = item.href as string;
                  const targetBase = hrefStr.split("#")[0] || "/";
                  const active =
                    hrefStr === "/#hero" || hrefStr === "/"
                      ? pathname === "/"
                      : targetBase !== "/" && pathname.startsWith(targetBase);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
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

            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-none bg-accent text-accent-foreground px-5 text-xs font-bold uppercase tracking-wider shadow-md hover:bg-accent/90 transition-all duration-300 active:scale-95 whitespace-nowrap"
            >
              <CalendarCheck className="size-4" aria-hidden />
              <span>Book Appointment</span>
            </Link>
          </div>

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
                const hrefStr = item.href as string;
                const targetBase = hrefStr.split("#")[0] || "/";
                const active =
                  hrefStr === "/#hero" || hrefStr === "/"
                    ? pathname === "/"
                    : targetBase !== "/" && pathname.startsWith(targetBase);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
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
              <li className="pt-2">
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="flex h-11 items-center justify-center gap-2 rounded-none bg-accent text-accent-foreground font-bold text-xs uppercase tracking-wider"
                >
                  <CalendarCheck className="size-4" />
                  <span>Book Appointment</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
