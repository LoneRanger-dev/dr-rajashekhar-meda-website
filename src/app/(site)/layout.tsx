import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { StickyCta } from "@/components/site/sticky-cta";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {/* pb-24 on mobile keeps content clear of the fixed bottom CTA bar */}
      <main id="main" className="flex-1 pb-24 lg:pb-0">
        {children}
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
