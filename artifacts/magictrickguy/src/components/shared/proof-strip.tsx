import { proof } from "@/data/content";
import { cn } from "@/lib/utils";

/**
 * Credentials as reassurance. Sits just under a hero so a planner can answer
 * "can I trust this person with my event?" at a glance.
 */
export function ProofStrip({ className }: { className?: string }) {
  const stats = [
    { value: proof.shows, label: "Live shows" },
    { value: proof.countries, label: "Countries" },
    { value: proof.reviews, label: "Five-star reviews" },
  ];

  return (
    <section className={cn("border-y border-border bg-card", className)} aria-label="Credentials">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.6fr]">
          <div className="text-center lg:text-left">
            <p className="mb-2 font-accent text-xs tracking-widest text-primary">AS SEEN ON</p>
            <p className="font-serif text-xl text-foreground md:text-2xl">{proof.asSeenOn.join(" · ")}</p>
          </div>
          <dl className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</dt>
                <dd className="font-serif text-3xl text-foreground">{s.value}</dd>
              </div>
            ))}
            <div className="flex flex-col-reverse">
              <dt className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Past clients</dt>
              <dd className="font-serif text-2xl leading-9 text-foreground">{proof.clients.join(" · ")}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
