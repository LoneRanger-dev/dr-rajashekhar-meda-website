import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/lib/site";

/**
 * Persistent bottom action bar on mobile.
 * Persona 1 (trauma family searching at 2 AM) must reach the phone number
 * within seconds from any page, without scrolling.
 *
 * The chatbot widget sits above this bar — see the z-index scale:
 * header 40 · sticky CTA 30 · chatbot 50.
 */
export function StickyCta() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 glass border-t border-border pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 gap-2 p-2">
        <Button
          variant="emergency"
          size="cta"
          className="w-full"
          render={<a href={site.contact.phoneHref} />}
        >
          <Phone aria-hidden />
          Call
        </Button>
        <Button
          variant="accent"
          size="cta"
          className="w-full"
          render={
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" />
          }
        >
          <MessageCircle aria-hidden />
          WhatsApp
        </Button>
        <Button
          variant="outline"
          size="cta"
          className="w-full"
          render={<a href="/contact#appointment" />}
        >
          <CalendarCheck aria-hidden />
          Book
        </Button>
      </div>
    </div>
  );
}
