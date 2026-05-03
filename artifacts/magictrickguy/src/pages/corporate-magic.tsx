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

export default function CorporateMagic() {
  useDocumentTitle("Corporate Event Magic | Stefan Oswald");

  const corpTestimonials = testimonials.filter(t => t.eventType === "Corporate").slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Corporate Events
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Elevate your next gala, holiday party, or corporate retreat with sophisticated entertainment that leaves your team spellbound and connected.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 rounded-none tracking-wide h-14">
                  CHECK AVAILABILITY
                </Button>
              </Link>
            </div>
            <div>
              <Placeholder text="[Corporate Event Photo]" aspectRatio="video" />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">THE EXPERIENCE</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">What To Expect</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-serif text-foreground mb-4">Customized Comedy</h4>
              <p className="text-muted-foreground">Clean, sharp humor tailored to your industry. We don't just tell jokes; we make your people the stars of the show in a way that respects everyone.</p>
            </div>
            <div>
              <h4 className="text-xl font-serif text-foreground mb-4">Mind-Blowing Magic</h4>
              <p className="text-muted-foreground">World-class sleight of hand and psychological illusions that will have your smartest executives questioning reality.</p>
            </div>
            <div>
              <h4 className="text-xl font-serif text-foreground mb-4">Seamless Flow</h4>
              <p className="text-muted-foreground">From the moment he walks on stage to the final standing ovation, Stefan controls the room's energy perfectly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">THE PROCESS</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">How It Works</h3>
          </div>
          <div className="space-y-8">
            {[
              { step: "01", title: "Discovery Call", desc: "We discuss your event goals, audience demographics, and logistics to ensure Stefan is the perfect fit." },
              { step: "02", title: "Customization", desc: "Stefan works with your team to integrate specific company messaging, inside jokes, or VIPs into the performance." },
              { step: "03", title: "The Performance", desc: "Stefan arrives early, coordinates seamlessly with your AV team, and delivers an unforgettable show." }
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

      {/* Testimonials Subset */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {corpTestimonials.map((t) => (
              <div key={t.id} className="bg-card p-8 border border-border">
                <div className="flex gap-1 mb-4 text-primary">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-foreground text-lg font-serif italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.title}, {t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">QUESTIONS</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">Frequently Asked</h3>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Ready to Book?</h2>
          <p className="text-foreground/80 mb-8 text-lg">Don't settle for another boring corporate dinner. Give your team an experience they'll talk about for years.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-12 rounded-none tracking-wide h-14 text-lg">
              SECURE YOUR DATE
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
