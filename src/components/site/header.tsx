"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, navigation } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 glass border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label={`${site.doctor.name} — home`}
          >
            <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Activity className="size-5" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block font-[family-name:var(--font-display)] font-semibold text-[0.95rem] sm:text-base">
                {site.doctor.name}
              </span>
              <span className="block text-[0.7rem] sm:text-xs text-muted-foreground">
                {site.doctor.title} · {site.hospital.name}
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
                        "inline-flex h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors",
                        active
                          ? "text-accent bg-accent/10"
                          : "text-foreground/80 hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="emergency"
              size="cta"
              className="hidden sm:inline-flex"
              render={<a href={site.contact.phoneHref} />}
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
