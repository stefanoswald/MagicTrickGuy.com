import { useDocumentTitle } from "@/hooks/use-document-title";
import { pickFaqs, testimonials } from "@/data/content";
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

export default function TradeShowMagic() {
  useDocumentTitle("Trade Show Magician & Booth Entertainment", {
    description:
      "Trade show entertainment that stops traffic, draws a crowd to your booth, and starts conversations your sales team can use. Stefan Oswald is based in Orlando and travels nationwide.",
    path: "/trade-show-magic",
  });

  const showTestimonials = testimonials.filter((t) => t.eventType === "Corporate");

  return (
    <div className="flex min-h-screen flex-col pt-24">
      <ServiceHero
        eyebrow="TRADE SHOW ENTERTAINMENT"
        title="Make your booth impossible to walk past"
        intro={
          <>
            <p>
              Trade show floors are loud, crowded, and full of people trying not to make eye contact. You've invested
              in the space, the booth, and the team. Now you need people to actually stop.
            </p>
            <p>
              I stop traffic in the aisles, draw a crowd, and turn curiosity into conversations your sales team can
              use.
            </p>
          </>
        }
        ctaLabel="TELL ME ABOUT YOUR SHOW"
        photo={photos.boothCrowd}
        imageClassName="aspect-[4/5] max-h-[600px]"
      />

      <ProofStrip className="border-t-0" />
      <ClientMarquee />

      <FeatureGrid
        eyebrow="WHAT YOUR BOOTH GETS"
        title="Built around your booth goals"
        intro="From the PGA Show in Orlando to your next expo, the goal is the same: more of the right people in your booth, talking to your team."
        items={[
          {
            title: "Traffic that stops",
            desc: "High-energy visual magic pulls people out of the aisle and into your space. And a crowd draws a crowd.",
          },
          {
            title: "Your message, front and center",
            desc: "Once the crowd gathers, the magic turns into a short, customized presentation of your product's key benefits and what sets you apart.",
          },
          {
            title: "Warm conversations for your team",
            desc: "After each show, I hand a curious, smiling crowd to your sales team, ready to scan badges and start real conversations.",
          },
          {
            title: "A booth people remember",
            desc: "Attendees walk past hundreds of booths. They remember the one where something impossible happened, and the company it happened with.",
          },
        ]}
      />

      <PullQuote>The magic earns attention. Your business goal decides what we do with it.</PullQuote>

      <PhotoRow
        items={[
          { ...photos.cardRevealCrowd, ratio: 0.8 },
          { ...photos.boothLaughing, ratio: 0.8 },
          { ...photos.demoDayReaction, ratio: 0.8 },
        ]}
      />

      <ProcessSteps
        eyebrow="THE PROCESS"
        title="How we partner"
        steps={[
          {
            title: "Your goals and your product",
            desc: "Who do you want to meet, and what should they remember? I learn your product and the core messages to highlight.",
          },
          {
            title: "Magic built for your pitch",
            desc: "I design routines that show off what matters about your product (speed, security, simplicity, whatever it is), so the trick makes your point.",
          },
          {
            title: "Show days",
            desc: "Short shows throughout the day keep your booth full and keep sending people to your team. You focus on the conversations.",
          },
        ]}
      />

      <section className="bg-background py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading eyebrow="CLIENT FEEDBACK" title="Built to delight your customers" className="mb-12" />
          {showTestimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </section>

      <InvestmentSection ids={["tradeShow"]} />

      <FaqSection items={pickFaqs(["message", "manage", "travel", "tech", "booking"])} />

      <PageCta
        title="Let's fill your booth"
        body="Tell me about your show, your booth, and who you want to meet. I'll reply within 24 hours with ideas."
        label="TELL ME ABOUT YOUR SHOW"
      />
    </div>
  );
}
