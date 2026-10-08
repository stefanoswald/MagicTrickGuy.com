import { useLocation } from "wouter";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { prices } from "@/data/content";
import { ProofStrip } from "@/components/shared/proof-strip";
import { PriceCard, PriceTerms } from "@/components/shared/pricing";
import { AvailabilityButton } from "@/components/shared/availability";
import { PageCta } from "@/components/shared/page-sections";
import { cn } from "@/lib/utils";

const order = ["strolling", "tradeShow", "stage", "emcee", "keynote"] as const;

export default function Pricing() {
  useDocumentTitle("Pricing | Orlando Corporate Magician & Emcee", {
    description:
      "Starting prices for Orlando corporate magician and emcee Stefan Oswald: strolling magic from $2,500, trade show days from $3,500, emcee from $3,500, stage shows from $5,000, keynotes $10,000 to $15,000.",
    path: "/pricing",
  });

  const [, navigate] = useLocation();

  return (
    <div className="flex min-h-screen flex-col pt-24">
      <section className="bg-background pb-16 pt-16 md:pt-20">
        <div className="container mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="mb-4 font-accent text-sm tracking-widest text-primary">INVESTMENT</p>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl">What it costs</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Every event is different, so these are starting points. Tell me about your date, your guests, and what
            success looks like, and I'll send you an exact quote within 24 hours.
          </p>
          <div className="mt-8 flex justify-center">
            <AvailabilityButton onPick={(date) => navigate(`/contact?date=${date}`)} />
          </div>
        </div>
      </section>

      <ProofStrip />

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          {/* Three across, then the last two centered underneath. */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {order.map((id, i) => (
              <PriceCard
                key={id}
                p={prices[id]}
                showLink
                className={cn(
                  "lg:col-span-2",
                  i === 3 && "lg:col-start-2",
                  i === order.length - 1 &&
                    "md:col-span-2 md:mx-auto md:w-full md:max-w-[calc(50%-0.75rem)] lg:col-span-2 lg:mx-0 lg:max-w-none",
                )}
              />
            ))}
          </div>
          <PriceTerms className="mx-auto mt-10 max-w-2xl" />
        </div>
      </section>

      <PageCta
        title="Let's find the right fit"
        body="Tell me what you're planning and what success looks like. I'll reply within 24 hours with ideas and an exact quote."
      />
    </div>
  );
}
