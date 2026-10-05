import { useDocumentTitle } from "@/hooks/use-document-title";
import { pickFaqs, testimonials } from "@/data/content";
import { photos } from "@/data/photos";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { ProofStrip } from "@/components/shared/proof-strip";
import { ClientMarquee } from "@/components/shared/client-marquee";
import {
  FaqSection,
  FeatureGrid,
  PageCta,
  ProcessSteps,
  SectionHeading,
  ServiceHero,
} from "@/components/shared/page-sections";

export default function KeynoteMagic() {
  useDocumentTitle("Keynote Speaker & Magician", {
    description:
      "A keynote your audience actually remembers. Stefan Oswald uses interactive magic to make your conference theme visual, so the message sticks long after the slides are forgotten.",
    path: "/keynote-magic",
  });

  const mediaQuotes = testimonials.filter((t) => t.eventType === "Media");

  return (
    <div className="flex min-h-screen flex-col pt-24">
      <ServiceHero
        eyebrow="KEYNOTES"
        title="A keynote your audience actually remembers"
        intro={
          <>
            <p>
              You need a message that lands and an audience that's awake for it. Not another talk people half-watch
              while checking email.
            </p>
            <p>
              I build a custom presentation around your theme and use interactive magic to make the idea visual, so
              it sticks long after the slides are forgotten.
            </p>
          </>
        }
        ctaLabel="TELL ME ABOUT YOUR AUDIENCE"
        photo={{ ...photos.crowdCheering, focus: "62% 50%" }}
      />

      <ProofStrip className="border-t-0" />
      <ClientMarquee />

      <FeatureGrid
        eyebrow="WHAT IT DOES FOR YOUR EVENT"
        title="A message people take back to work"
        items={[
          {
            title: "Attention from the first minute",
            desc: "Standard keynotes can be dry. Interactive magic hooks the audience early and keeps them with you for the entire presentation.",
          },
          {
            title: "Your message, made visual",
            desc: "Abstract ideas like innovation, trust, or perspective come to life in something people see with their own eyes. That's what makes the message stick.",
          },
          {
            title: "Takeaways people use",
            desc: "The magic isn't just for show. Each piece underlines a takeaway your audience can apply to their work right away.",
          },
        ]}
      />

      <ProcessSteps
        eyebrow="THE PROCESS"
        title="Building your keynote"
        steps={[
          {
            title: "Theme alignment",
            desc: "We identify the theme of your conference and the specific takeaways you want the audience to leave with.",
          },
          {
            title: "Script integration",
            desc: "I write a custom presentation that blends your message with magic chosen to make each point land.",
          },
          {
            title: "The delivery",
            desc: "An energetic, polished presentation, sized to fit your agenda, that sets the tone for the rest of your event.",
          },
        ]}
      />

      <section className="bg-background py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            eyebrow="ON LIVE TV"
            title="Comfortable where there are no second takes"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {mediaQuotes.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={pickFaqs(["message", "travel", "tech", "booking"])} />

      <PageCta
        title="Let's make your message stick"
        body="Tell me about your audience, your theme, and what you want people to walk away with. I'll reply within 24 hours with ideas."
      />
    </div>
  );
}
