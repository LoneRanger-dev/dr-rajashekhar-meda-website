import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ChatWidget } from "@/components/chatbot/chat-widget";
import { FloatingBar } from "@/components/site/floating-bar";
import { AmbientBackground } from "@/components/site/ambient-background";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-background">
      <AmbientBackground />
      <Header />
      <main id="main" className="flex-1 w-full max-w-full overflow-x-hidden pb-16 lg:pb-0">
        {children}
      </main>
      <Footer />
      <ChatWidget />
      <FloatingBar />
    </div>
  );
}
