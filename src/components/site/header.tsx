"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, navigation } from "@/lib/site";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 glass border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          {/* No aria-label here: the visible text is already a complete,
              accurate name. An aria-label that omits part of the visible
              text fails WCAG 2.5.3 (Label in Name). */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/brand/suraksha-logo.png"
              alt="Suraksha Hospital — Brain, Spine, Neuro"
              width={1774}
              height={887}
              priority
              className="h-9 lg:h-11 w-auto"
            />
            {/* Shown on small screens (no nav) and again from 2xl, where
                there is room. In between it competes with the nav and pushes
                the phone CTA off-screen. */}
            <span className="leading-tight hidden sm:block lg:hidden 2xl:block border-l border-border pl-3">
              <span className="block font-[family-name:var(--font-display)] font-semibold text-[0.95rem]">
                {site.doctor.name}
              </span>
              <span className="block text-[0.7rem] text-muted-foreground">
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
                        "inline-flex h-11 items-center whitespace-nowrap rounded-lg px-2.5 xl:px-3 text-[0.8rem] xl:text-sm font-medium transition-colors",
                        active
                          ? "text-accent bg-accent/10"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted"
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
              className="lg:hidden grid size-11 place-items-center rounded-xl border border-border bg-background"
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
          className="lg:hidden border-t border-border bg-background"
        >
          <ul className="mx-auto max-w-7xl px-4 py-3 space-y-1">
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
                      "flex h-12 items-center rounded-xl px-4 text-[0.95rem] font-medium",
                      active ? "bg-accent/10 text-accent" : "hover:bg-muted"
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
