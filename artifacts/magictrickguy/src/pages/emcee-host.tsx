import { useDocumentTitle } from "@/hooks/use-document-title";
import { pickFaqs, testimonials } from "@/data/content";
import { photos } from "@/data/photos";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { ProofStrip } from "@/components/shared/proof-strip";
import {
  FaqSection,
  PageCta,
  ProcessSteps,
  PullQuote,
  SectionHeading,
  ServiceHero,
} from "@/components/shared/page-sections";

/** What a good emcee protects the planner from. */
const handled = [
  {
    worry: "Awkward gaps",
    desc: "Speaker running late? Slow walk to the stage for an award? I fill the space with something fun, so the room never goes flat.",
  },
  {
    worry: "Schedule changes",
    desc: "The run of show changed an hour ago? I adapt on the fly and keep everything on track, without the audience ever noticing.",
  },
  {
    worry: "Technical problems",
    desc: "The mic dies, the slides freeze, the video won't play. I keep the audience laughing while your AV team fixes it.",
  },
  {
    worry: "Low-energy transitions",
    desc: "Between dinner, awards, and speakers, I keep the momentum going so people stay with you instead of drifting to their phones.",
  },
  {
    worry: "Losing the room",
    desc: "I read the crowd and adjust in the moment. When I'm your emcee, the night keeps moving and the energy never drops.",
  },
  {
    worry: "The unexpected",
    desc: "After thousands of live shows, very little rattles me. Whatever happens, I handle it calmly and keep the night on track.",
  },
];

export default function EmceeHost() {
  useDocumentTitle("Event Emcee & Host in Orlando", {
    description:
      "Hand Stefan Oswald the mic and stop worrying. An event emcee who keeps your program on time, fills the gaps, handles surprises, and keeps the energy up. Orlando-based, available worldwide.",
    path: "/emcee-host",
  });

  const quote = testimonials.find((t) => t.eventType === "Corporate");

  return (
    <div className="flex min-h-screen flex-col pt-24">
      <ServiceHero
        eyebrow="EVENT EMCEE & HOST"
        title="Hand me the mic and stop worrying"
        intro={
          <>
            <p>
              A great emcee protects your event. While you're juggling vendors, VIPs, and a schedule that keeps
              changing, someone has to hold the room together.
            </p>
            <p>
              That's what I do. I keep your program on time, fill the gaps, handle the surprises, and keep the energy
              up, so you can stop watching the clock and enjoy the night.
            </p>
          </>
        }
        ctaLabel="TELL ME ABOUT YOUR PROGRAM"
        photo={photos.galaStage}
      />

      <ProofStrip className="border-t-0" />

      <section className="bg-background py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            eyebrow="WHAT I HANDLE"
            title="The stuff that keeps planners up at night"
            intro="Live events never go exactly to plan. Here's what I take care of so you don't have to."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {handled.map((h) => (
              <div key={h.worry} className="border border-border bg-card p-8">
                <h3 className="mb-3 font-serif text-2xl text-foreground">{h.worry}</h3>
                <p className="leading-relaxed text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PullQuote>You run the event. I'll run the room.</PullQuote>

      <ProcessSteps
        title="How it works"
        steps={[
          {
            title: "We walk through your run of show",
            desc: "Your agenda, the VIPs, the names that need to be pronounced right, and the moments that matter most to you.",
          },
          {
            title: "I prep with your team",
            desc: "I sync with your AV crew and stage manager before doors open and check every transition, so there are no surprises on stage.",
          },
          {
            title: "Show time",
            desc: "I keep things moving, introduce every speaker with energy, and fold in quick bits of magic where they help. You enjoy the night.",
          },
        ]}
      />

      {quote && (
        <section className="bg-background py-24">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <SectionHeading eyebrow="WHAT CLIENTS SAY" title="Don't just take my word for it" className="mb-12" />
            <TestimonialCard t={quote} />
          </div>
        </section>
      )}

      <FaqSection items={pickFaqs(["emcee", "changes", "babysit", "clean", "booking"])} />

      <PageCta
        title="Let's keep your program on track"
        body="Send me your agenda, or just the date and the basics. I'll reply within 24 hours. Hosting can be added to any booking."
        label="TELL ME ABOUT YOUR PROGRAM"
      />
    </div>
  );
}
