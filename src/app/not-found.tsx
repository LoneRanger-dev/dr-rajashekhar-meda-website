import Link from "next/link";
import { Phone, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main id="main" className="brand-wash flex-1 grid place-items-center px-4 py-24">
      <div className="text-center space-y-6 max-w-lg">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          404
        </p>
        <h1 className="type-h1">This page could not be found</h1>
        <p className="text-muted-foreground">
          The page you are looking for may have moved. If you need to reach the
          clinic, the phone number below is answered 24/7 for emergencies.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="accent" size="cta" render={<Link href="/" />}>
            <Home aria-hidden />
            Back to home
          </Button>
          <Button
            variant="emergency"
            size="cta"
            render={<a href={site.contact.phoneHref} />}
          >
            <Phone aria-hidden />
            <span className="tnum">{site.contact.phoneDisplay}</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
