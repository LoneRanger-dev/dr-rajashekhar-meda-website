import Link from "next/link";
import { MapPin, Phone, Clock, ShieldAlert } from "lucide-react";
import { site, navigation, conditions } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold">
              {site.doctor.name}
            </p>
            <p className="text-sm text-primary-foreground/75">
              {site.doctor.credentials}
            </p>
            <p className="text-sm text-primary-foreground/75">
              {site.doctor.title}
              <br />
              {site.doctor.academicRole}
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              {site.hospital.name}
            </h2>
            <address className="not-italic space-y-3 text-sm text-primary-foreground/85">
              <span className="flex gap-2.5">
                <MapPin className="size-4 mt-0.5 shrink-0" aria-hidden />
                <span>{site.hospital.addressFull}</span>
              </span>
              <a
                href={site.contact.phoneHref}
                className="flex gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="size-4 mt-0.5 shrink-0" aria-hidden />
                <span className="tnum">{site.contact.phoneDisplay}</span>
              </a>
            </address>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Consulting Hours
            </h2>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              <li className="flex gap-2.5">
                <Clock className="size-4 mt-0.5 shrink-0" aria-hidden />
                <span>
                  {site.hours.weekday}
                  <br />
                  {site.hours.sunday}
                </span>
              </li>
              <li className="flex gap-2.5 font-medium">
                <ShieldAlert className="size-4 mt-0.5 shrink-0" aria-hidden />
                <span>{site.hours.emergency}</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-1">
            <div className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
                Explore
              </h2>
              <ul className="space-y-2 text-sm">
                {navigation.slice(1).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-primary-foreground/85 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
                Treatments
              </h2>
              <ul className="space-y-2 text-sm">
                {conditions.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/conditions/${c.slug}`}
                      className="text-primary-foreground/85 hover:text-white transition-colors"
                    >
                      {c.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 space-y-4">
          <p className="text-xs leading-relaxed text-primary-foreground/70 max-w-4xl">
            <strong className="font-semibold text-primary-foreground/90">
              Medical disclaimer:
            </strong>{" "}
            The information on this website is for general education only and is not
            medical advice, diagnosis or treatment. It is no substitute for consultation
            with a qualified doctor. If you are experiencing a medical emergency, call{" "}
            <a href={site.contact.phoneHref} className="underline tnum">
              {site.contact.phoneDisplay}
            </a>{" "}
            or go to your nearest emergency department immediately.
          </p>
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} {site.doctor.name} · {site.hospital.name},{" "}
            {site.hospital.city}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
