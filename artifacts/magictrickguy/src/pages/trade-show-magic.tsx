import { useDocumentTitle } from "@/hooks/use-document-title";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, testimonials } from "@/data/content";
import { photos } from "@/data/photos";
import { TestimonialCard } from "@/components/shared/testimonial-card";

export default function TradeShowMagic() {
  useDocumentTitle("Trade Show Magic | Stefan Oswald");

  const showTestimonials = testimonials.filter((t) => t.eventType === "Corporate");

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Trade Show Magic
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Stop traffic in the aisles, gather massive crowds, and seamlessly deliver your sales pitch through impossible magic.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 rounded-none tracking-wide h-14">
                  BOOK FOR YOUR BOOTH
                </Button>
              </Link>
            </div>
            <div>
              <img
                src={photos.closeUpCube.src}
                alt={photos.closeUpCube.alt}
                className="aspect-[4/5] max-h-[560px] w-full object-cover object-[50%_40%] border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">THE ROI</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">Why It Works</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-serif text-foreground mb-4">Maximum Foot Traffic</h4>
              <p className="text-muted-foreground">Trade show floors are chaotic. Stefan uses high-energy visual magic to physically stop attendees from walking past your booth.</p>
            </div>
            <div>
              <h4 className="text-xl font-serif text-foreground mb-4">Message Integration</h4>
              <p className="text-muted-foreground">Once the crowd is gathered, the magic transitions into a customized presentation highlighting your product's key benefits and differentiators.</p>
            </div>
            <div>
              <h4 className="text-xl font-serif text-foreground mb-4">Qualified Lead Handoff</h4>
              <p className="text-muted-foreground">After the 10-minute presentation, the fully primed crowd is seamlessly handed off to your sales team to scan badges and close deals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">THE PROCESS</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">How We Partner</h3>
          </div>
          <div className="space-y-8">
            {[
              { step: "01", title: "Product Immersion", desc: "Stefan learns your product inside and out, identifying the core messages to highlight." },
              { step: "02", title: "Script & Trick Development", desc: "Custom illusions are designed to visually demonstrate your product's features (e.g., speed, security, efficiency)." },
              { step: "03", title: "Show Execution", desc: "Performing 2-3 shows per hour, Stefan consistently packs your booth and feeds leads to your team." }
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
          <div className="text-center mb-12">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">CLIENT FEEDBACK</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">Built to Delight Your Customers</h3>
          </div>
          {showTestimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Dominate the Show Floor</h2>
          <p className="text-foreground/80 mb-8 text-lg">Turn your booth into the most talked-about attraction at the conference.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-12 rounded-none tracking-wide h-14 text-lg">
              GET A QUOTE
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
