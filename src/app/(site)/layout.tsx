import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ChatWidget } from "@/components/chatbot/chat-widget";
import { FloatingBar } from "@/components/site/floating-bar";
import { AmbientBackground } from "@/components/site/ambient-background";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AmbientBackground />
      <Header />
      {/* pb-24 on mobile keeps content clear of the fixed bottom CTA bar */}
      <main id="main" className="flex-1 pb-24 lg:pb-0">
        {children}
      </main>
      <Footer />
      <ChatWidget />
      <FloatingBar />
    </>
  );
}
