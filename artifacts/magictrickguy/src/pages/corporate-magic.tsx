import { useDocumentTitle } from "@/hooks/use-document-title";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { faqs, testimonials } from "@/data/content";
import { photos } from "@/data/photos";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { ProofStrip } from "@/components/shared/proof-strip";
import { ClientMarquee } from "@/components/shared/client-marquee";
import { InvestmentSection } from "@/components/shared/pricing";
import {
  FaqSection,
  FeatureGrid,
  PageCta,
  PhotoRow,
  ProcessSteps,
  PullQuote,
  SectionHeading,
  ServiceHero,
} from "@/components/shared/page-sections";

const formats = [
  {
    title: "Strolling close-up",
    desc: "I move through cocktail hour and from table to table. It's the fastest way to break the ice and get groups mixing.",
  },
  {
    title: "Undercover guest",
    desc: "I start out as just another guest who happens to do things nobody can explain. By the time people figure it out, they're already talking.",
  },
  {
    title: "Stage show",
    desc: "A clean, interactive show where your coworkers become the stars. Great after dinner or as the centerpiece of the night.",
  },
  {
    title: "Emcee + magic",
    desc: "I host your program and fold quick bits of magic into the transitions, so the night keeps moving.",
    href: "/emcee-host",
  },
];

export default function CorporateMagic() {
  useDocumentTitle("Corporate Magician for Company Events", {
    description:
      "Corporate entertainment that gets your people talking. Orlando corporate magician Stefan Oswald gives your guests a reason to mix, laugh, and connect at galas, holiday parties, and retreats.",
    path: "/corporate-magic",
  });

  const corpTestimonials = [
    ...testimonials.filter((t) => t.eventType === "Corporate"),
    ...testimonials.filter((t) => t.eventType === "Media"),
  ].slice(0, 2);

  return (
    <div className="flex min-h-screen flex-col pt-24">
      <ServiceHero
        eyebrow="CORPORATE EVENTS"
        title="Corporate entertainment that gets your people talking"
        intro={
          <>
            <p>
              You've booked the venue, the food, and the program. The real question is how to get people actually
              interacting, not just standing with the same three coworkers all night.
            </p>
            <p>
              That's my job. Magic gives your guests a reason to gather, laugh, call coworkers over, and start
              conversations they wouldn't have had otherwise, at your gala, holiday party, or retreat.
            </p>
          </>
        }
        ctaLabel="TELL ME ABOUT YOUR EVENT"
        photo={photos.hangarGuestAmazed}
        imageClassName="aspect-[4/5] max-h-[600px]"
      />

      <ProofStrip className="border-t-0" />
      <ClientMarquee />

      <FeatureGrid
        eyebrow="WHAT CHANGES IN THE ROOM"
        title="What I'm really there to do"
        items={[
          {
            title: "Groups start mixing",
            desc: "People stick with who they know. A shared moment of \"how did he do that?\" opens the circle. Sales meets engineering. The new hire ends up talking to the VP.",
          },
          {
            title: "The energy comes up",
            desc: "Within minutes, the room gets louder in the best way. I read the crowd and keep the pace right, from cocktail hour to the last toast.",
          },
          {
            title: "It feels like your event",
            desc: "Clean, sharp humor tailored to your industry. I can work in your theme, your company message, inside jokes, or VIPs, so it feels made for this room.",
          },
        ]}
      />

      <PhotoRow
        className="pt-0 md:pt-0"
        items={[
          { ...photos.hangarGuestSmiling, ratio: 0.8 },
          { ...photos.roomLaughing, ratio: 16 / 9 },
        ]}
      />

      <PullQuote>“The magic is the tool. The real goal is what happens to the room because of it.”</PullQuote>

      <section className="bg-background py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            eyebrow="FORMATS"
            title="Pick a format, or let me suggest one"
            intro="Tell me about your guests and your run of show, and I'll recommend what will work best. Many events use a mix."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {formats.map((f) => (
              <div key={f.title} className="border border-border bg-card p-8">
                <h3 className="mb-3 font-serif text-2xl text-foreground">{f.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{f.desc}</p>
                {f.href && (
                  <Link
                    href={f.href}
                    className="mt-4 inline-flex items-center text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-primary"
                  >
                    About hosting <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps
        title="How it works"
        steps={[
          {
            title: "We talk about your goals",
            desc: "Your audience, the logistics, and the big question: what should your people feel, do, and remember? That tells me exactly what to bring.",
          },
          {
            title: "I customize it",
            desc: "I build the set around your goals and work in your company message, inside jokes, or VIPs when it helps.",
          },
          {
            title: "You enjoy your own event",
            desc: "I arrive early, coordinate with your AV team, and take care of the room. All you have to do is enjoy it.",
          },
        ]}
      />

      <section className="bg-background py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading eyebrow="WHAT CLIENTS SAY" title="Don't just take my word for it" className="mb-12" />
          <div className="grid gap-8 md:grid-cols-2">
            {corpTestimonials.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>

      <InvestmentSection ids={["strolling", "stage"]} />

      <FaqSection items={faqs} />

      <PageCta
        title="Let's make your next company event the one people talk about"
        body="Tell me what you're planning and what success looks like. I'll reply within 24 hours with ideas and availability."
      />
    </div>
  );
}
