import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, ShieldAlert } from "lucide-react";
import { site, navigation, conditions } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-gradient-to-b from-[var(--navy-800)] to-[var(--navy-950)] text-primary-foreground shadow-[inset_0_1px_0_0_var(--glow-soft)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2.5">
            <span className="inline-flex rounded-xl bg-white p-2.5 shrink-0 shadow-lg">
              <Image
                src="/brand/dr-rajashekhar-logo-footer.png"
                alt={`${site.doctor.name} — Laparoscopic, Endoscopic & Laser Surgery`}
                width={480}
                height={320}
                className="h-16 w-auto object-contain"
              />
            </span>
            <p className="font-[family-name:var(--font-display)] text-base font-bold text-white pt-1">
              {site.doctor.name}
            </p>
            <p className="text-xs text-sky-300 font-semibold">
              {site.doctor.credentials}
            </p>
            <p className="text-xs text-primary-foreground/75 leading-relaxed">
              {site.doctor.title}
            </p>
          </div>

          <div className="h-fit rounded-2xl border border-white/10 bg-white/[0.06] p-4.5 backdrop-blur-md space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-accent">
              {site.hospital.name}
            </h2>
            <address className="not-italic space-y-2 text-xs sm:text-sm text-primary-foreground/85">
              <span className="flex gap-2">
                <MapPin className="size-4 mt-0.5 shrink-0 text-accent" aria-hidden />
                <span>
                  {site.hospital.addressFull}
                  <br />
                  <a
                    href={site.hospital.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 font-semibold text-accent underline underline-offset-2 hover:text-white transition-colors"
                  >
                    Get directions
                  </a>
                </span>
              </span>
              <a
                href={site.contact.phoneHref}
                className="flex gap-2 font-semibold hover:text-white transition-colors pt-0.5"
              >
                <Phone className="size-4 mt-0.5 shrink-0 text-accent" aria-hidden />
                <span className="tnum">{site.contact.phoneDisplay}</span>
              </a>
            </address>
          </div>

          <div className="h-fit rounded-2xl border border-white/10 bg-white/[0.06] p-4.5 backdrop-blur-md space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-accent">
              Consulting Hours
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-primary-foreground/85">
              <li className="flex gap-2">
                <Clock className="size-4 mt-0.5 shrink-0 text-accent" aria-hidden />
                <span>
                  {site.hours.weekday}
                  <br />
                  {site.hours.sunday}
                </span>
              </li>
              <li className="flex gap-2 font-semibold pt-0.5 text-emergency">
                <ShieldAlert className="size-4 mt-0.5 shrink-0" aria-hidden />
                <span>{site.hours.emergency}</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/60">
                Explore
              </h2>
              <ul className="space-y-1.5 text-xs">
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
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/60">
                Treatments
              </h2>
              <ul className="space-y-1.5 text-xs">
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

        <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
          <p className="text-[11px] leading-relaxed text-primary-foreground/70 max-w-4xl">
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
          <p className="text-[11px] text-primary-foreground/60">
            © {new Date().getFullYear()} {site.doctor.name} · {site.hospital.name},{" "}
            {site.hospital.city}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
