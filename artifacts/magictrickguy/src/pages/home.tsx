import { useDocumentTitle } from "@/hooks/use-document-title";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, GlassWater, Megaphone, Mic, Presentation, Quote, Star, Users, Zap } from "lucide-react";
import { BookingForm } from "@/components/shared/booking-form";
import { BookCallBar } from "@/components/shared/book-call";
import { ClientMarquee } from "@/components/shared/client-marquee";
import { PromoVideo } from "@/components/shared/promo-video";
import { ProofStrip } from "@/components/shared/proof-strip";
import { ProcessSteps, SectionHeading } from "@/components/shared/page-sections";
import { outcomes, proof, testimonials } from "@/data/content";
import { photos, type Photo } from "@/data/photos";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Zap,
  Presentation,
  Megaphone,
  Mic,
  GlassWater,
};

/** The room, not the trick: each outcome card shows guests getting the result the planner wants. */
const outcomePhotos: Record<string, Photo> = {
  connection: { ...photos.guestsLaughingTogether, focus: "50% 35%" },
  energy: { ...photos.groupReacting, focus: "50% 45%" },
  booth: { ...photos.boothCrowd, focus: "50% 45%" },
  smooth: { ...photos.emceeOnStage, focus: "30% 40%" },
  message: { ...photos.roomLaughing, focus: "40% 50%" },
  story: { ...photos.sharedMoment, focus: "50% 55%" },
};

const trustPhotos = [
  { ...photos.agtStage, caption: "On the America's Got Talent stage" },
  { ...photos.holidayStage, caption: "A holiday stage show at a JW Marriott" },
  { ...photos.fox35Stage, caption: "Live on FOX 35 Orlando" },
];

/** What planners worry about, and how Stefan takes it off their plate. */
const worries = [
  {
    worry: "Everyone's going to stay in their little groups.",
    lead: "I start with the quiet tables.",
    relief: "A little magic gives strangers something to share, and before long they're calling coworkers over to see.",
  },
  {
    worry: "The energy is going to die after dinner.",
    lead: "I keep the energy up.",
    relief: "I read the room and change the pace when it needs it: a big laugh, a quick interactive moment, whatever brings people back.",
  },
  {
    worry: "What if the material doesn't fit our crowd?",
    lead: "Clean, classy, and right for your crowd.",
    relief: "I tailor everything to your audience. Nobody gets embarrassed, including the boss.",
  },
  {
    worry: "The schedule will change. Something technical will break.",
    lead: "Very little rattles me.",
    relief: "After thousands of live shows, I adjust in the moment and keep the room with me while things get sorted.",
  },
  {
    worry: "I don't have time to manage one more vendor.",
    lead: "You're in excellent hands.",
    relief: "I arrive early, sync with your AV team, and take care of every detail on my end, so you can focus on everything else.",
  },
  {
    worry: "We'll spend the money and nobody will remember it.",
    lead: "People leave with a story.",
    relief: "They retell it for weeks. And when they tell you what a great event it was, you get to take the credit.",
  },
];

export default function Home() {
  useDocumentTitle("Stefan Oswald | Orlando Magician & Emcee for Corporate Events", {
    description:
      "Orlando corporate magician and emcee Stefan Oswald builds the entertainment around your event's goals: connection, energy, booth traffic, and a program that runs smoothly.",
    path: "/",
  });

  const featured = testimonials.find((t) => t.eventType === "Corporate");
  const mediaQuotes = testimonials.filter((t) => t.eventType === "Media");

  const trust = [
    {
      value: `${proof.shows} live shows`,
      desc: "Thousands of performances taught me how to read a room, adapt quickly, and keep an event on track.",
    },
    {
      value: `${proof.countries} countries`,
      desc: "Different cultures, ages, and crowds. Whoever is in your room, I'll meet them where they are.",
    },
    {
      value: "America's Got Talent & network TV",
      desc: "FOX, NBC, CBS, ABC, and the reality series The Blox. Live TV has no second takes, and neither does your event. I'm used to getting it right the first time.",
    },
    {
      value: `${proof.reviews} five-star reviews`,
      desc: "From real audiences who left happy, at shows big and small.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* 1. Hero: the planner's world first, the video right there */}
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <img
          src={photos.galaStage.src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        <div className="container relative z-20 mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-serif font-bold leading-tight text-foreground">
                <span className="mb-5 block font-accent text-xs font-normal tracking-widest text-primary md:text-sm">
                  ORLANDO CORPORATE MAGICIAN &amp; EMCEE
                </span>
                <span className="block text-4xl md:text-6xl">
                  You plan the event. <span className="italic text-primary">I'll bring the room together.</span>
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                You've put a lot into this event. The entertainment should help it succeed, not give you one more
                thing to worry about. I build what I do around what you want your guests to feel, do, and remember.
              </p>
              <a
                href="#how-it-works"
                className="mt-6 hidden items-center text-sm font-medium uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary lg:inline-flex"
              >
                See how it works <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <PromoVideo />
              <p className="mt-3 text-center text-sm text-muted-foreground">
                I reply within 24 hours with ideas and availability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Proof, as reassurance */}
      <ProofStrip />
      <ClientMarquee />

      {/* 3. Outcomes before services */}
      <section className="bg-background py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="WHAT DOES A WIN LOOK LIKE?"
            title="Tell me what success looks like. I'll build around it."
            intro="Great event entertainment starts with your goal, not a list of tricks. Here are the goals I hear most often."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((o, index) => {
              const Icon = iconMap[o.icon] || Star;
              const photo = outcomePhotos[o.id];
              return (
                <motion.div
                  key={o.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    href={o.href}
                    className="group flex h-full flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary"
                  >
                    {photo && (
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          style={{ objectPosition: photo.focus }}
                        />
                      </div>
                    )}
                    <div className="flex flex-grow flex-col p-7">
                      <div className="mb-3 flex items-center gap-3">
                        <Icon className="h-6 w-6 flex-shrink-0 text-primary" />
                        <h3 className="font-serif text-2xl text-foreground">{o.title}</h3>
                      </div>
                      <p className="mb-6 flex-grow text-muted-foreground">{o.description}</p>
                      <span className="mt-auto flex items-center text-sm font-medium uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">
                        {o.linkLabel}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <p className="mt-12 text-center text-lg text-muted-foreground">
            Not sure which fits?{" "}
            <Link href="/contact" className="text-foreground underline decoration-primary underline-offset-4 hover:text-primary">
              That's what our first conversation is for.
            </Link>
          </p>
        </div>
      </section>

      {/* 4. Planner worries, answered quickly */}
      <section className="border-y border-border bg-card py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <SectionHeading
            eyebrow="ONE LESS THING TO WORRY ABOUT"
            title="The stuff planners worry about? I've got it covered."
            intro="You're the one people ask about the event on Monday. Here's how I take the usual worries off your plate."
          />
          <div className="divide-y divide-border border-y border-border">
            {worries.map((w) => (
              <div key={w.lead} className="grid gap-3 py-7 md:grid-cols-[2fr_3fr] md:gap-10">
                <p className="font-serif text-xl italic text-foreground/70 md:text-2xl">“{w.worry}”</p>
                <p className="leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">{w.lead}</span> {w.relief}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What happens to the room */}
      <section className="bg-background py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 font-accent text-sm tracking-widest text-primary">WHAT HAPPENS TO THE ROOM</p>
              <h2 className="mb-6 font-serif text-3xl text-foreground md:text-5xl">Give me five minutes in a room.</h2>
              <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
                <p>
                  Sometimes the guests don't even know I'm a magician at first. I'm just another person at the party
                  who happens to do things nobody can explain.
                </p>
                <p>
                  Within five minutes, the energy shifts. People drop their guard. They laugh. They feel like a kid
                  again. And they start talking to each other.
                </p>
                <p>
                  That's why one client made my official title <span className="text-primary">CEO of Vibe</span>.
                  It's still the best description of my job: make the room a happier place to be.
                </p>
              </div>
            </div>
            <div>
              <img
                src={photos.privateCloseUp.src}
                alt={photos.privateCloseUp.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full border border-border object-cover"
                style={{ objectPosition: "42% 50%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5b. The tool and the goal, side by side */}
      <section className="border-t border-border bg-card py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="mb-10 text-center font-serif text-3xl text-foreground md:mb-14 md:text-5xl">
            The magic is the tool. <span className="italic text-primary">The room is the goal.</span>
          </h2>
          <div className="grid grid-cols-2 gap-3 md:gap-8">
            {[
              { photo: photos.cube, label: "THE TOOL" },
              { photo: photos.demoDayAmazed, label: "THE GOAL" },
            ].map(({ photo, label }) => (
              <figure key={label}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full border border-border object-cover"
                />
                <figcaption className="mt-3 text-center font-accent text-xs tracking-widest text-primary md:mt-4 md:text-sm">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How it works */}
      <ProcessSteps
        id="how-it-works"
        title="Simple for you, from the first call to the last guest"
        photo={photos.listening}
        steps={[
          {
            title: "Tell me what a win looks like",
            desc: "A quick call about your guests, your goals, and your schedule. More connection? More energy? A packed booth? A program that runs on time? We start there.",
          },
          {
            title: "I build the entertainment around it",
            desc: "I pick the format and material that fit your crowd: strolling close-up, a stage show, emceeing, or a mix. Want your theme, your product, or a few VIPs worked in? Done.",
          },
          {
            title: "You enjoy your own event",
            desc: "I arrive early, coordinate with your AV team, and take care of the room. You get to relax and watch your guests have a great time.",
          },
        ]}
      />

      {/* 7. Proof: can I trust him with my event? */}
      <section className="bg-background py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            eyebrow="WHY PLANNERS TRUST ME"
            title="You're putting your reputation on the line. Here's why you can relax."
          />
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {trustPhotos.map((p) => (
              <figure key={p.src}>
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full border border-border object-cover"
                />
                <figcaption className="mt-2 text-sm text-muted-foreground">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t) => (
              <div key={t.value} className="border border-border bg-card p-6">
                <p className="mb-3 font-serif text-2xl leading-snug text-primary">{t.value}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            {featured && (
              <figure className="border border-border bg-card p-8 md:p-10 lg:col-span-3">
                <div className="mb-6 flex gap-1 text-primary" aria-label={`${featured.rating} out of 5 stars`}>
                  {[...Array(featured.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
                  "{featured.quote}"
                </blockquote>
                <figcaption className="mt-6">
                  <span className="font-bold text-foreground">{featured.name}</span>
                  {featured.company && <span className="text-muted-foreground">, {featured.company}</span>}
                </figcaption>
              </figure>
            )}
            <div className="flex flex-col gap-6 lg:col-span-2">
              {mediaQuotes.map((t) => (
                <figure key={t.id} className="flex flex-1 items-start gap-4 border border-border bg-card p-6">
                  <Quote className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <blockquote className="font-serif text-2xl italic leading-snug text-foreground">"{t.quote}"</blockquote>
                    <figcaption className="mt-3 font-accent text-xs uppercase tracking-widest text-muted-foreground">
                      {t.name}, {t.company}
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-primary"
            >
              Read more reviews <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Let's talk */}
      <section className="scroll-mt-24 border-t border-border bg-card py-24" id="book">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading
            eyebrow="LET'S TALK"
            title="Let's make your event a win"
            intro="Tell me what you're planning and what success looks like. I'll reply within 24 hours with ideas and availability."
            className="mb-8"
          />
          <BookCallBar className="mb-12" />
          <div className="grid items-start gap-10 lg:grid-cols-[2fr_3fr]">
            <figure className="hidden lg:block">
              <img
                src={photos.portrait.src}
                alt={photos.portrait.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full border border-border object-cover"
                style={{ objectPosition: photos.portrait.focus }}
              />
              <figcaption className="mt-3 text-sm text-muted-foreground">
                You'll talk with me directly, not an agency.
              </figcaption>
            </figure>
            <div className="border border-border bg-background p-6 md:p-10">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
