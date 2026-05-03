import { useDocumentTitle } from "@/hooks/use-document-title";
import { Placeholder } from "@/components/ui/placeholder";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, testimonials } from "@/data/content";
import { Star } from "lucide-react";

export default function KeynoteMagic() {
  useDocumentTitle("Keynote Magic | Stefan Oswald");

  const keynoteTestimonials = testimonials.filter(t => t.eventType === "Keynote");

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Keynote Magic
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A customized presentation blending world-class magic with your company's core message. Inspire your team while blowing their minds.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 rounded-none tracking-wide h-14">
                  DISCUSS YOUR EVENT
                </Button>
              </Link>
            </div>
            <div>
              <Placeholder text="[Keynote Speaking Photo]" aspectRatio="video" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">THE IMPACT</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">A Presentation They Won't Forget</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-serif text-foreground mb-4">Unprecedented Engagement</h4>
              <p className="text-muted-foreground">Standard keynotes can be dry. Stefan uses interactive magic to instantly hook the audience and keep their attention dialed in for the entire presentation.</p>
            </div>
            <div>
              <h4 className="text-xl font-serif text-foreground mb-4">Visual Metaphors</h4>
              <p className="text-muted-foreground">Abstract concepts like 'innovation', 'trust', or 'perspective' are brought to life visually through impossible illusions, making the message stick.</p>
            </div>
            <div>
              <h4 className="text-xl font-serif text-foreground mb-4">Powerful Takeaways</h4>
              <p className="text-muted-foreground">The magic isn't just for show. It serves to underline actionable takeaways that the audience can apply to their work and life immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">THE PROCESS</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">Crafting Your Keynote</h3>
          </div>
          <div className="space-y-8">
            {[
              { step: "01", title: "Theme Alignment", desc: "We identify the overarching theme of your conference and the specific takeaways you want the audience to leave with." },
              { step: "02", title: "Script Integration", desc: "Stefan writes a custom presentation that seamlessly blends your messaging with relevant, high-impact magic routines." },
              { step: "03", title: "The Delivery", desc: "An energetic, polished, and unforgettable 45-60 minute presentation that sets the tone for your entire event." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start bg-background p-8 border border-border">
                <div className="font-accent text-3xl text-primary opacity-50">{item.step}</div>
                <div>
                  <h4 className="text-xl font-serif text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {keynoteTestimonials.length > 0 ? keynoteTestimonials.map((t) => (
            <div key={t.id} className="bg-card p-8 border border-border">
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
            <Placeholder text="[Keynote Testimonial Placeholder]" aspectRatio="auto" />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Elevate Your Next Conference</h2>
          <p className="text-foreground/80 mb-8 text-lg">Give your attendees a keynote presentation they will be talking about long after the event ends.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-12 rounded-none tracking-wide h-14 text-lg">
              BOOK STEFAN TO SPEAK
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
