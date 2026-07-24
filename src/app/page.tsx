import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const features = [
  {
    title: "Fast by default",
    description: "Next.js App Router with Turbopack — instant hot reload, server components, and zero config.",
  },
  {
    title: "Beautiful components",
    description: "shadcn/ui + Tailwind CSS v4. Copy-paste components you own and can restyle freely.",
  },
  {
    title: "Ready to ship",
    description: "TypeScript, ESLint, and a production build one command away. Deploy anywhere Node runs.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Nav */}
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-lg font-semibold tracking-tight">YourBrand</span>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <Button size="sm">Get started</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Launch your next idea faster
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          A clean starting point built with Next.js, Tailwind, and shadcn/ui.
          Replace this copy with your value proposition.
        </p>
        <div className="flex gap-3">
          <Button size="lg">Start free</Button>
          <Button size="lg" variant="outline">View demo</Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-24 sm:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title}>
            <CardHeader>
              <CardTitle>{f.title}</CardTitle>
              <CardDescription>{f.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      {/* Email CTA */}
      <section id="contact" className="border-t bg-muted/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Stay in the loop</h2>
          <p className="text-muted-foreground">No spam — just launch updates.</p>
          <form className="flex w-full max-w-sm gap-2">
            <Input type="email" placeholder="you@example.com" aria-label="Email address" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} YourBrand</span>
          <span>Built with Next.js + shadcn/ui</span>
        </div>
      </footer>
    </div>
  );
}
