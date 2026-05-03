import { useDocumentTitle } from "@/hooks/use-document-title";
import { Placeholder } from "@/components/ui/placeholder";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { testimonials } from "@/data/content";
import { Star } from "lucide-react";

export default function Masterminds() {
  useDocumentTitle("Magic Mansion Mastermind | Stefan Oswald");

  const mastermindTestimonials = testimonials.filter(t => t.eventType === "Mastermind");

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-24 bg-secondary border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Placeholder text="[Mansion Background]" className="h-full w-full object-cover border-none" />
        </div>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
          <h1 className="font-accent tracking-widest text-primary mb-6">THE MAGIC MANSION</h1>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-8">
            An Immersive Mastermind Experience
          </h2>
          <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Three days of high-level strategy, deep networking, and impossible magic for entrepreneurs and creators ready to scale their businesses.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-12 rounded-none tracking-wide h-14 text-lg">
              APPLY TO JOIN
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-accent tracking-widest text-sm text-primary mb-4">THE CONCEPT</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6">What Is It?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                The Magic Mansion Mastermind isn't just a conference—it's an experience. Hosted in a luxury private estate, this exclusive gathering is strictly limited to 15 attendees to ensure deep connections and personalized attention.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                You'll spend three days workshopping your business with other high-level thinkers, guided by Stefan's unique insights on perception, audience engagement, and building a memorable brand.
              </p>
            </div>
            <div>
              <Placeholder text="[Mastermind Group Photo]" aspectRatio="video" />
            </div>
          </div>

          <div className="text-center mb-16 mt-24">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">THE BREAKDOWN</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">3 Days of Transformation</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 border border-border">
              <h4 className="font-accent text-primary text-xl mb-4">DAY 1: Perception</h4>
              <p className="text-muted-foreground">We deconstruct how your audience perceives your brand, using principles of magic to analyze attention, focus, and messaging.</p>
            </div>
            <div className="bg-card p-8 border border-border">
              <h4 className="font-accent text-primary text-xl mb-4">DAY 2: Strategy</h4>
              <p className="text-muted-foreground">Deep dive hot-seats. Every attendee gets the floor to break down their biggest business bottlenecks and receive actionable feedback from the group.</p>
            </div>
            <div className="bg-card p-8 border border-border">
              <h4 className="font-accent text-primary text-xl mb-4">DAY 3: Execution</h4>
              <p className="text-muted-foreground">Finalizing action plans and networking. The retreat concludes with a private, VIP close-up magic performance by Stefan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">ALUMNI</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">What Past Attendees Say</h3>
          </div>
          <div className="space-y-8">
            {mastermindTestimonials.length > 0 ? mastermindTestimonials.map((t) => (
              <div key={t.id} className="bg-background p-8 border border-border">
                <div className="flex gap-1 mb-4 text-primary">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-foreground text-xl font-serif italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.title}, {t.company}</p>
                </div>
              </div>
            )) : (
              <Placeholder text="[Mastermind Testimonial Placeholder]" />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Secure Your Spot</h2>
          <p className="text-muted-foreground mb-8 text-lg">Spaces are extremely limited and application-only to ensure the highest caliber of attendees.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-12 rounded-none tracking-wide h-14 text-lg">
              APPLY NOW
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
