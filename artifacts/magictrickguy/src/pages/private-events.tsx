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
  PhotoRow,
  SectionHeading,
  ServiceHero,
} from "@/components/shared/page-sections";

const formats = [
  {
    title: "Strolling close-up",
    desc: "I move between groups during cocktails or dinner, so every guest gets a moment up close.",
  },
  {
    title: "Undercover guest",
    desc: "I arrive as just another guest who happens to do things nobody can explain. The reveal becomes part of the story.",
  },
  {
    title: "Parlor show",
    desc: "A short, intimate show where your guests become the stars, perfect after dinner or for the big toast.",
  },
];

export default function PrivateEvents() {
  useDocumentTitle("Magician for Private Events & Parties", {
    description:
      "Birthdays, anniversaries, weddings, and VIP dinners. Orlando magician Stefan Oswald builds the entertainment around what you want your guests to feel, so they leave with a story.",
    path: "/private-events",
  });

  const reviews = testimonials.filter((t) => [4, 7, 13].includes(t.id));

  return (
    <div className="flex min-h-screen flex-col pt-24">
      <ServiceHero
        eyebrow="PRIVATE EVENTS"
        title="Give your guests something to talk about"
        intro={
          <>
            <p>
              Birthdays, anniversaries, weddings, VIP dinners. Whatever you're celebrating, it starts with one
              question: what do you want your guests to experience?
            </p>
            <p>
              Maybe it's two families finally mixing, or your guest of honor feeling like a star. I build the
              entertainment around that.
            </p>
          </>
        }
        ctaLabel="TELL ME WHAT YOU'RE CELEBRATING"
        photo={photos.privateClapping}
      />

      <ProofStrip className="border-t-0" />
      <ClientMarquee />

      <FeatureGrid
        eyebrow="WHAT YOUR GUESTS GET"
        title="More than a magic show"
        items={[
          {
            title: "A reason to mingle",
            desc: "Friends of the bride meet friends of the groom. Neighbors meet coworkers. Magic gives everyone something to share and talk about.",
          },
          {
            title: "A star of the night",
            desc: "I make your guest of honor the hero of the moment, in a way they'll love and never at their expense.",
          },
          {
            title: "A story they'll retell",
            desc: "The next morning, people are still trying to figure out what happened. That's the story they'll tell about your party.",
          },
        ]}
      />

      <PhotoRow
        className="pt-0 md:pt-0"
        items={[
          { ...photos.privateCloseUp, ratio: 16 / 9 },
          { ...photos.holidayStage, ratio: 16 / 9 },
        ]}
      />

      <section className="border-y border-border bg-card py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            eyebrow="FORMATS"
            title="Up close, undercover, or center stage"
            intro="Tell me about your guests and the flow of the evening, and I'll suggest what fits."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {formats.map((f) => (
              <div key={f.title} className="border border-border bg-background p-8">
                <h3 className="mb-3 font-serif text-2xl text-foreground">{f.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="FROM LIVE AUDIENCES"
            title="What guests say"
            intro="More than 1,000 five-star reviews from live audiences. A few favorites:"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={pickFaqs(["clean", "booking", "travel", "tech"])} />

      <PageCta
        title="Let's plan the fun part"
        body="Tell me what you're celebrating and who's coming. I'll reply within 24 hours with ideas and availability."
        label="TELL ME WHAT YOU'RE CELEBRATING"
      />
    </div>
  );
}
