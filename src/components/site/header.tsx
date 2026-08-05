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
    <header className="fixed top-0 left-0 right-0 z-50 w-full shadow-xl">
      {/* Top Bar (Email, Hours, Location, Helpline) */}
      <TopBar />

      {/* Main Navbar — Solid Royal Medical Blue #1D538E from reference image */}
      <div className="w-full bg-[#1D538E] border-b border-[#164273] shadow-md text-white">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 flex h-14 sm:h-16 lg:h-20 items-center justify-between gap-2 sm:gap-4">
          
          {/* Doctor Name & Branding Section */}
          <Link href="/#hero" onClick={(e) => handleNavClick(e, "/#hero")} className="flex flex-col shrink-0 justify-center group pr-4 sm:pr-6">
            <span className="font-[family-name:var(--font-display)] font-extrabold text-base sm:text-lg lg:text-xl text-white tracking-tight leading-tight group-hover:text-sky-200 transition-colors whitespace-nowrap">
              {site.doctor.name}
            </span>
            <span className="hidden lg:block text-[13px] lg:text-[14px] font-medium text-sky-100/90 tracking-tight leading-tight whitespace-nowrap">
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
                          "relative inline-flex h-10 items-center whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-all duration-200",
                          active
                            ? "bg-white/25 text-white shadow-inner"
                            : "text-white/90 hover:text-white hover:bg-white/15"
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
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-white text-[#1D538E] hover:bg-slate-100 px-6 text-xs sm:text-sm font-bold shadow-md transition-all duration-200 active:scale-95 whitespace-nowrap"
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
              className="grid size-10 sm:size-11 place-items-center rounded-full bg-white/15 border border-white/20 text-white hover:bg-white/25 transition-all active:scale-95"
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
            className="lg:hidden w-full border-t border-white/20 bg-[#1D538E] shadow-2xl"
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
                        "flex h-11 items-center rounded-full px-4 text-sm sm:text-base font-semibold transition-colors",
                        active
                          ? "bg-white/25 text-white"
                          : "text-white/90 hover:bg-white/15"
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
                  className="flex h-11 items-center justify-center gap-2 rounded-full bg-white text-[#1D538E] font-bold text-xs uppercase tracking-wider shadow-md"
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
