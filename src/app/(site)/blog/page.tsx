import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/ui-bits";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { articles } from "@/lib/articles";
import { BLUR_DATA_URL } from "@/lib/siteAssets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Health Education — Brain, Spine & Epilepsy Guides",
  description: "Plain-language patient education on brain, spine and epilepsy conditions from Dr. GRK Reddy, Consultant Brain & Spine Surgeon in Khammam.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="brand-wash">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <SectionHeading
            as="h1"
            eyebrow="Health education"
            title="Understanding your condition"
            lead="Clear, jargon-free guides to the brain and spine conditions patients ask about most — written to help you have a better conversation with your doctor, not to replace one."
          />
        </div>
      </section>

      <Section>
        <RevealGroup as="ul" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <RevealItem key={article.slug} as="li">
              <Link
                href={`/blog/${article.slug}`}
                className="group glass lift rounded-2xl overflow-hidden h-full flex flex-col"
              >
                {article.image ? (
                  <Image
                    src={article.image.src}
                    alt={article.image.alt}
                    width={900}
                    height={600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className="w-full h-44 object-cover object-top"
                  />
                ) : (
                  <div className="h-44 brand-wash" aria-hidden />
                )}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="size-3.5" aria-hidden />
                      <span className="tnum">{article.readingMinutes} min read</span>
                    </span>
                  </div>
                  <h2 className="type-h3">{article.title}</h2>
                  <p className="text-sm text-muted-foreground flex-1">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Read article
                    <ArrowRight
                      className="size-4 transition-transform duration-[var(--dur-base)] group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
    </>
  );
}
