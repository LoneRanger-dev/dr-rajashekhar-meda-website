import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, ShieldAlert } from "lucide-react";
import { site, navigation, conditions } from "@/lib/site";
import { brandImages } from "@/lib/siteAssets";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-gradient-to-b from-[var(--navy-800)] to-[var(--navy-950)] text-primary-foreground shadow-[inset_0_1px_0_0_var(--glow-soft)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            {/* White-plated so the navy logo stays legible on the navy footer. */}
            <span className="inline-flex rounded-xl bg-white p-3">
              <Image
                src={brandImages.logo.src}
                alt={`${site.hospital.name} — Brain, Spine, Neuro`}
                width={brandImages.logo.width}
                height={brandImages.logo.height}
                className="h-11 w-auto"
              />
            </span>
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

          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              {site.hospital.name}
            </h2>
            <address className="not-italic space-y-3 text-sm text-primary-foreground/85">
              <span className="flex gap-2.5">
                <MapPin className="size-4 mt-0.5 shrink-0" aria-hidden />
                <span>
                  {site.hospital.addressFull}
                  <br />
                  <a
                    href={site.hospital.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 underline underline-offset-2 hover:text-white transition-colors"
                  >
                    Get directions
                  </a>
                </span>
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

          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md">
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
