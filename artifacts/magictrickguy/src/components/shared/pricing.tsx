import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { partnerNote, priceTerms, prices, type Price } from "@/data/content";
import { SectionHeading } from "@/components/shared/page-sections";
import { cn } from "@/lib/utils";

/** One service's starting price, in a card. */
export function PriceCard({ p, showLink = false, className }: { p: Price; showLink?: boolean; className?: string }) {
  return (
    <div className={cn("flex flex-col border border-border bg-card p-8", className)}>
      <h3 className="mb-4 font-accent text-sm tracking-widest text-primary">{p.title.toUpperCase()}</h3>
      <p className="mb-1 text-foreground">
        {p.prefix && <span className="mr-2 text-muted-foreground">{p.prefix}</span>}
        <span className="font-serif text-4xl">{p.price}</span>
      </p>
      {p.unit && <p className="mb-5 text-sm uppercase tracking-wider text-muted-foreground">{p.unit}</p>}
      <p className="leading-relaxed text-foreground/85">{p.description}</p>
      {p.extra && <p className="mt-3 leading-relaxed text-muted-foreground">{p.extra}</p>}
      {showLink && (
        <Link
          href={p.href}
          className="mt-auto inline-flex items-center pt-6 text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-primary"
        >
          {p.linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

/** Deposit, travel, and partner terms, shown under prices. */
export function PriceTerms({ className, showAllLink = false }: { className?: string; showAllLink?: boolean }) {
  return (
    <div className={cn("space-y-2 text-center text-sm leading-relaxed text-muted-foreground", className)}>
      <p>{priceTerms}</p>
      <p>{partnerNote}</p>
      {showAllLink && (
        <p>
          <Link href="/pricing" className="text-foreground underline underline-offset-4 transition-colors hover:text-primary">
            See all prices
          </Link>
        </p>
      )}
    </div>
  );
}

/** "Investment" section for a service page: the relevant starting prices, after the outcomes and proof. */
export function InvestmentSection({
  ids,
  title = "What it costs",
  intro = "Every event is different, so these are starting points. Tell me about yours and I'll send an exact quote within 24 hours.",
}: {
  ids: Price["id"][];
  title?: string;
  intro?: string;
}) {
  const items = ids.map((id) => prices[id]);
  return (
    <section className="bg-background py-24" aria-labelledby="investment-heading">
      <div className={cn("container mx-auto px-4 md:px-6", items.length > 1 ? "max-w-5xl" : "max-w-2xl")}>
        <SectionHeading eyebrow="INVESTMENT" title={<span id="investment-heading">{title}</span>} intro={intro} />
        <div className={cn("grid gap-6", items.length > 1 && "md:grid-cols-2")}>
          {items.map((p) => (
            <PriceCard key={p.id} p={p} />
          ))}
        </div>
        <PriceTerms className="mt-8" showAllLink />
      </div>
    </section>
  );
}
