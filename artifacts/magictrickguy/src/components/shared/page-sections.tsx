import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/data/content";
import type { Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

/** The main call to action. Conversational on purpose: the planner tells Stefan about the event. */
export function CtaButton({
  label = "TELL ME WHAT YOU'RE PLANNING",
  href = "/contact",
  className,
}: {
  label?: string;
  href?: string;
  className?: string;
}) {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "group h-auto min-h-14 w-full whitespace-normal rounded-none bg-primary px-8 py-3 text-base font-medium tracking-wide text-primary-foreground hover:bg-primary/90 sm:w-auto",
        className,
      )}
    >
      <Link href={href}>
        {label}
        <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto mb-16 max-w-3xl text-center", className)}>
      <p className="mb-4 font-accent text-sm tracking-widest text-primary">{eyebrow}</p>
      <h2 className="font-serif text-3xl text-foreground md:text-5xl">{title}</h2>
      {intro && <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

/** Hero for the service pages: the planner's goal first, then how Stefan helps. */
export function ServiceHero({
  eyebrow,
  title,
  intro,
  ctaLabel,
  photo,
  imageClassName,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  ctaLabel?: string;
  photo: Photo;
  imageClassName?: string;
}) {
  return (
    <section className="border-b border-border bg-card py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-accent text-sm tracking-widest text-primary">{eyebrow}</p>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl">{title}</h1>
            <div className="mb-8 space-y-4 text-lg leading-relaxed text-muted-foreground">{intro}</div>
            <CtaButton label={ctaLabel} />
          </div>
          <div>
            <img
              src={photo.src}
              alt={photo.alt}
              className={cn("aspect-[3/2] w-full border border-border object-cover", imageClassName)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export type Feature = { title: string; desc: ReactNode };

export function FeatureGrid({
  eyebrow,
  title,
  intro,
  items,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  items: Feature[];
  className?: string;
}) {
  const cols = items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2";
  return (
    <section className={cn("bg-background py-24", className)}>
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <div className={cn("grid gap-x-12 gap-y-12 md:grid-cols-2", cols)}>
          {items.map((item) => (
            <div key={item.title} className="border-l-2 border-primary/60 pl-6">
              <h3 className="mb-3 font-serif text-2xl text-foreground">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export type Step = { title: string; desc: ReactNode };

export function ProcessSteps({
  eyebrow = "HOW IT WORKS",
  title,
  steps,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  steps: Step[];
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-y border-border bg-card py-24">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ol className="space-y-6">
          {steps.map((item, i) => (
            <li key={item.title} className="flex items-start gap-6 border border-border bg-background p-6 md:p-8">
              <span className="font-accent text-3xl text-primary/60" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-2 font-serif text-xl text-foreground md:text-2xl">{item.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function FaqSection({
  items,
  title = "Questions planners ask",
}: {
  items: Faq[];
  title?: ReactNode;
}) {
  return (
    <section className="border-y border-border bg-card py-24">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading eyebrow="QUESTIONS" title={title} className="mb-12" />
        <Accordion type="single" collapsible className="w-full">
          {items.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-border">
              <AccordionTrigger className="text-left font-serif text-lg text-foreground transition-colors hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/** Closing section on each page. */
export function PageCta({
  title,
  body,
  label,
}: {
  title: ReactNode;
  body: ReactNode;
  label?: string;
}) {
  return (
    <section className="bg-secondary py-24 text-center">
      <div className="container mx-auto max-w-2xl px-4 md:px-6">
        <h2 className="mb-6 font-serif text-3xl text-foreground md:text-5xl">{title}</h2>
        <p className="mb-8 text-lg text-foreground/80">{body}</p>
        <CtaButton label={label} />
      </div>
    </section>
  );
}

/** A short line in Stefan's voice, set large. */
export function PullQuote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={cn("border-y border-border bg-secondary py-16", className)}>
      <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
        <p className="font-serif text-3xl italic leading-snug text-foreground md:text-4xl">{children}</p>
      </div>
    </section>
  );
}
