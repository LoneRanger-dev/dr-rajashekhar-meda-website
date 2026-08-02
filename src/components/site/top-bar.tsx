import { Mail, Clock, Phone, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function TopBar() {
  return (
    <div className="w-full bg-slate-950 border-b border-white/10 text-slate-300 text-xs py-2 px-3 sm:px-6 lg:px-8 hidden sm:block">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
        {/* Left: Contact Info & Emergency Hours */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={site.contact.emailHref}
            className="inline-flex items-center gap-1.5 hover:text-sky-300 transition-colors"
          >
            <Mail className="size-3.5 text-accent" />
            <span>{site.contact.email}</span>
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5 text-emergency" />
            <span>24/7 Emergency Care</span>
          </span>
          <span className="inline-flex items-center gap-1.5 hidden md:inline-flex">
            <MapPin className="size-3.5 text-accent" />
            <span>Suraksha Hospital, Wyra Road, Khammam</span>
          </span>
        </div>

        {/* Right: Quick Action Helpline */}
        <div className="flex items-center gap-4">
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center gap-1.5 font-bold text-white hover:text-sky-300 transition-colors"
          >
            <Phone className="size-3.5 text-accent" />
            <span>Emergency Helpline</span>
          </a>
        </div>
      </div>
    </div>
  );
}
