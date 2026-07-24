import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("py-16 sm:py-20 lg:py-24", className)} {...props}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "space-y-3 max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          Tag === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl"
        )}
      >
        {title}
      </Tag>
      {lead && (
        <p className="text-lg text-muted-foreground leading-relaxed">{lead}</p>
      )}
    </div>
  );
}

/**
 * Renders an explicit, visible placeholder wherever the clinic still has to
 * supply real content. Deliberately obvious — it must never be mistaken for
 * finished copy or quietly ship to production.
 */
export function ConfirmWithClient({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="note"
      className="rounded-xl border-2 border-dashed border-emergency/50 bg-emergency/5 p-5 flex gap-3"
    >
      <AlertCircle className="size-5 text-emergency shrink-0 mt-0.5" aria-hidden />
      <div className="space-y-1 text-sm">
        <p className="font-semibold text-emergency">[CONFIRM WITH CLIENT]</p>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="space-y-1">
      <p className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-semibold text-primary dark:text-accent tnum">
        {value}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
