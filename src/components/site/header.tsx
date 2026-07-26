"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, navigation } from "@/lib/site";
import { brandImages } from "@/lib/siteAssets";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-3">
        <div className="glass-strong rounded-2xl px-3 sm:px-4 flex h-14 lg:h-16 items-center justify-between gap-4">
          {/* No aria-label here: the visible text is already a complete,
              accurate name. An aria-label that omits part of the visible
              text fails WCAG 2.5.3 (Label in Name). */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0">
            <Image
              src={brandImages.logo.src}
              alt={`${site.hospital.name} — Brain, Spine, Neuro`}
              width={brandImages.logo.width}
              height={brandImages.logo.height}
              priority
              className="h-8 sm:h-9 lg:h-10 w-auto"
            />
            {/* Shown on small screens (no nav) and again from 2xl, where
                there is room. In between it competes with the nav and pushes
                the phone CTA off-screen. */}
            <span className="leading-tight hidden sm:block lg:hidden 2xl:block border-l border-border/70 pl-2.5 sm:pl-3 min-w-0">
              <span className="block font-[family-name:var(--font-display)] font-semibold text-[clamp(0.85rem,0.8rem+0.3vw,0.95rem)] truncate">
                {site.doctor.name}
              </span>
              <span className="block text-[0.7rem] text-muted-foreground truncate">
                {site.doctor.title}
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
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
                        "relative inline-flex h-10 items-center whitespace-nowrap rounded-lg px-2.5 xl:px-3 text-[0.8rem] xl:text-sm font-medium transition-colors",
                        "after:absolute after:bottom-1.5 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-accent after:shadow-[0_0_8px_var(--glow-color)] after:origin-left after:transition-transform after:duration-[var(--dur-base)] after:ease-[var(--ease-out)]",
                        active
                          ? "text-accent after:scale-x-100"
                          : "text-foreground/80 hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
                      )}
                    >
                      {item.short}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="emergency"
              size="cta"
              className="hidden sm:inline-flex shrink-0"
              render={<a href={site.contact.phoneHref} onClick={() => track("call_click", { source: "header" })} />}
            >
              <Phone aria-hidden />
              <span className="tnum">{site.contact.phoneDisplay}</span>
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="btn-premium lg:hidden grid size-11 place-items-center rounded-xl glass"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="lg:hidden mx-auto max-w-7xl px-4 sm:px-6 mt-2"
        >
          <ul className="glass-strong rounded-2xl p-2 space-y-1">
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
                      "flex h-12 items-center rounded-xl px-4 text-[0.95rem] font-medium transition-colors",
                      active
                        ? "bg-accent/10 text-accent"
                        : "hover:bg-white/40 dark:hover:bg-white/10"
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
