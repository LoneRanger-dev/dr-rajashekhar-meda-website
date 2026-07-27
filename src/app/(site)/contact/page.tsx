import type { Metadata } from "next";
import { Phone, MapPin, Clock, MessageCircle, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/ui-bits";
import { AppointmentForm } from "@/components/site/appointment-form";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment — Khammam",
  description:
    "Book an appointment with Dr. GRK Reddy at Suraksha Hospital, Nehru Nagar, Khammam. Call 7075 447 449 — a neurosurgeon is available 24/7 for emergencies.",
};

export default function ContactPage() {
  return (
    <>
      <section className="brand-wash">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Book an appointment"
            lead="Call the clinic directly, message on WhatsApp, or send a request and the team will call you back to confirm a time."
          />
        </div>
      </section>

      {/* Emergency routing sits above the form on purpose — anyone in an
          urgent situation should never have to scroll past a form first. */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-2xl border-2 border-emergency/40 bg-emergency/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
          <div className="flex gap-4">
            <ShieldAlert className="size-7 text-emergency shrink-0" aria-hidden />
            <div>
              <h2 className="text-lg font-semibold text-emergency">
                Is this an emergency?
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                For head injury, sudden weakness, seizures or severe symptoms, call
                now instead of using the form. A neurosurgeon is available 24/7.
              </p>
            </div>
          </div>
          <Button
            variant="emergency"
            size="cta-lg"
            className="shrink-0"
            render={<a href={site.contact.phoneHref} />}
          >
            <Phone aria-hidden />
            <span className="tnum">{site.contact.phoneDisplay}</span>
          </Button>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
          <div id="appointment" className="scroll-mt-24">
            <AppointmentForm />
          </div>

          <div className="space-y-6">
            <div className="glass lift rounded-2xl p-7 space-y-5">
              <h2 className="type-h3">Clinic details</h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <Phone className="size-5 text-accent shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <h3 className="font-semibold text-sm">Phone</h3>
                    <a
                      href={site.contact.phoneHref}
                      className="text-muted-foreground hover:text-accent transition-colors tnum"
                    >
                      {site.contact.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <MapPin className="size-5 text-accent shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <h3 className="font-semibold text-sm">
                      {site.hospital.name}
                    </h3>
                    <address className="not-italic text-sm text-muted-foreground mt-0.5">
                      {site.hospital.addressFull}
                    </address>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="size-5 text-accent shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <h3 className="font-semibold text-sm">Consulting hours</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {site.hours.weekday}
                      <br />
                      {site.hours.sunday}
                    </p>
                    <p className="text-sm font-medium text-emergency mt-1">
                      {site.hours.emergency}
                    </p>
                  </div>
                </li>
              </ul>
              <Button
                variant="accent"
                size="cta"
                className="w-full"
                render={
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" />
                }
              >
                <MessageCircle aria-hidden />
                Message on WhatsApp
              </Button>
            </div>

            <div className="relative glow-halo">
              <div className="glass rounded-3xl p-3 elev-2 overflow-hidden">
                <iframe
                  title={`Map to ${site.hospital.name}, ${site.hospital.city}`}
                  src={site.hospital.maps.embedUrl}
                  className="w-full h-[280px] rounded-2xl border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
            <Button
              variant="glass"
              size="cta"
              className="w-full"
              render={
                <a
                  href={site.hospital.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MapPin aria-hidden />
              Get directions
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
