import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, Phone, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/ui-bits";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { articles } from "@/lib/articles";
import { BLUR_DATA_URL } from "@/lib/siteAssets";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.description },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <section className="brand-wash">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blog" className="hover:text-foreground">
                  Health Education
                </Link>
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 text-xs mb-5">
            <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Clock className="size-3.5" aria-hidden />
              <span className="tnum">{article.readingMinutes} min read</span>
            </span>
          </div>

          <h1 className="type-h1">{article.title}</h1>
          <p className="mt-5 type-lead text-muted-foreground">
            {article.description}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        {article.image && (
          <div className="relative glow-halo glass rounded-2xl p-3 mb-10">
            <Image
              src={article.image.src}
              alt={article.image.alt}
              width={1067}
              height={1280}
              sizes="(max-width: 768px) 100vw, 768px"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="rounded-xl w-full h-auto"
            />
          </div>
        )}

        <div className="space-y-6">
          {article.body.map((block, i) =>
            block.type === "heading" ? (
              <h2 key={i} className="type-h2 pt-4">
                {block.text}
              </h2>
            ) : block.type === "list" ? (
              <ul key={i} className="space-y-2.5 pl-1">
                {block.items?.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="size-1.5 rounded-full bg-accent shrink-0 mt-2.5"
                      aria-hidden
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p key={i} className="text-muted-foreground text-[1.05rem]">
                {block.text}
              </p>
            )
          )}
        </div>

        {/* Safety block — every article ends by routing urgency to the phone. */}
        <aside className="mt-12 rounded-2xl border-2 border-emergency/40 bg-emergency/5 p-7 space-y-4">
          <div className="flex gap-3">
            <AlertTriangle className="size-6 text-emergency shrink-0" aria-hidden />
            <h2 className="type-h3 text-emergency">Seek help immediately if</h2>
          </div>
          <ul className="space-y-2.5">
            {article.seekHelp.map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <span
                  className="size-1.5 rounded-full bg-emergency shrink-0 mt-2"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button
            variant="emergency"
            size="cta"
            render={<a href={site.contact.phoneHref} />}
          >
            <Phone aria-hidden />
            <span className="tnum">Call {site.contact.phoneDisplay}</span>
          </Button>
        </aside>

        <p className="mt-8 text-xs text-muted-foreground leading-relaxed">
          This article is general health information, not medical advice. It cannot
          account for your individual circumstances and is not a substitute for
          assessment by a qualified doctor. Written and reviewed by the
          neurosurgery team at {site.hospital.name}, {site.hospital.city}.
        </p>
      </article>

      <Section className="bg-muted/60">
        <h2 className="type-h2 mb-8">Continue reading</h2>
        <RevealGroup as="ul" className="grid sm:grid-cols-2 gap-5">
          {related.map((a) => (
            <RevealItem key={a.slug} as="li">
              <Link
                href={`/blog/${a.slug}`}
                className="group glass lift rounded-2xl p-6 h-full flex flex-col gap-2"
              >
                <span className="text-xs font-semibold text-accent">{a.category}</span>
                <h3 className="type-h3">{a.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{a.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Read article
                  <ArrowRight
                    className="size-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
