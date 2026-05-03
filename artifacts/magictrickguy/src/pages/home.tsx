import { useDocumentTitle } from "@/hooks/use-document-title";
import { Placeholder } from "@/components/ui/placeholder";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookingForm } from "@/components/shared/booking-form";
import { services, testimonials } from "@/data/content";
import { Building, Presentation, Mic, Lightbulb, GlassWater, Megaphone, Star, Play, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  Building,
  Presentation,
  Mic,
  Lightbulb,
  GlassWater,
  Megaphone,
};

export default function Home() {
  useDocumentTitle("Orlando Magician & Corporate Entertainer");

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="absolute inset-0 z-0">
          <Placeholder text="[Replace with Stefan hero photo/video — landscape, dramatic lighting]" className="h-full w-full object-cover border-none" />
        </div>
        <div className="container relative z-20 mx-auto px-4 md:px-6 text-center max-w-4xl pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-6"
          >
            Magic That Makes Your Event <span className="text-primary italic">Impossible To Forget</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Stefan Oswald blends world-class sleight of hand, comedy, storytelling, and audience interaction to create moments your guests will talk about long after the event ends.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-12 rounded-none tracking-wide h-14 text-lg">
                BOOK STEFAN
              </Button>
            </Link>
            <Link href="/videos">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-foreground/20 text-foreground hover:bg-foreground/5 font-medium px-12 rounded-none tracking-wide h-14 text-lg">
                WATCH VIDEO
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Credibility Bar */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 text-center md:text-left">
            <div>
              <p className="font-accent tracking-widest text-sm text-primary mb-2">TRUSTED BY THE BEST</p>
              <p className="text-muted-foreground text-sm">Corporate • Trade Shows • Private Events • Theaters • Masterminds</p>
            </div>
            <div className="flex gap-8 text-center">
              <div>
                <p className="text-3xl font-serif text-foreground">1,000+</p>
                <p className="text-xs tracking-wider text-muted-foreground uppercase mt-1">Five-Star Reviews</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-foreground">500+</p>
                <p className="text-xs tracking-wider text-muted-foreground uppercase mt-1">Corporate Events</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-foreground">15+</p>
                <p className="text-xs tracking-wider text-muted-foreground uppercase mt-1">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Placeholder key={i} text={`[Logo ${i}]`} className="h-20 bg-transparent border-none" />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Cards */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">EXPERIENCES</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Tailored For Your Audience</h3>
            <p className="text-muted-foreground text-lg">From intimate VIP gatherings to arena-sized keynotes, Stefan adapts his performance to fit your exact needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Star;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={service.href}>
                    <div className="group h-full p-8 bg-card border border-border hover:border-primary transition-all duration-300 flex flex-col cursor-pointer">
                      <Icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="text-xl font-serif text-foreground mb-3">{service.title}</h4>
                      <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                      <div className="flex items-center text-sm font-medium tracking-wide text-foreground group-hover:text-primary transition-colors mt-auto uppercase">
                        Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Signature Video Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h2 className="font-accent tracking-widest text-sm text-primary mb-4">SEE IT IN ACTION</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-12">The Difference Is In The Details</h3>
          <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-2xl mb-12">
            <Placeholder text="[Signature Showreel Placeholder]" aspectRatio="video" className="bg-background/50 border-none" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-300">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
          <Link href="/videos">
            <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-none px-8 tracking-wide">
              VIEW MORE VIDEOS
            </Button>
          </Link>
        </div>
      </section>

      {/* 5. Why Book Stefan */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">THE ADVANTAGE</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-foreground">Why Event Planners Choose Stefan</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { title: "Funny & Professional", desc: "Corporate-clean humor that genuinely gets laughs without ever making anyone uncomfortable." },
              { title: "Fully Interactive", desc: "Guests aren't just watching a show; they are the stars of the show." },
              { title: "Easy to Work With", desc: "Low maintenance, highly communicative, and zero diva behavior." },
              { title: "Meaningful Message", desc: "Magic with a purpose. He can weave your core company message into the illusions." },
              { title: "Memorable Moments", desc: "Creating those 'did you see that?' moments that people talk about at the water cooler." },
              { title: "Highly Versatile", desc: "Equally comfortable performing for 10 VIPs or 1,000 conference attendees." }
            ].map((pillar, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-serif text-foreground mb-2">{pillar.title}</h4>
                  <p className="text-muted-foreground">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Masterminds Feature */}
      <section className="py-32 bg-secondary border-y border-border relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-accent tracking-widest text-sm text-primary mb-4">THE MAGIC MANSION</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6">A Mastermind Unlike Any Other</h3>
              <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
                Join an exclusive group of entrepreneurs, creators, and high-level thinkers for a 3-day immersive experience. Strategy, networking, and impossible magic, all under one roof.
              </p>
              <Link href="/masterminds">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 rounded-none tracking-wide h-12">
                  JOIN THE NEXT MASTERMIND
                </Button>
              </Link>
            </div>
            <div>
              <Placeholder text="[Magic Mansion Photo]" aspectRatio="square" className="border-border bg-background/20" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA + Booking Form */}
      <section className="py-24 bg-background" id="book">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">CHECK AVAILABILITY</h2>
            <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Let's Make Your Event Unforgettable</h3>
            <p className="text-muted-foreground text-lg">Fill out the form below and we will respond within 24 hours.</p>
          </div>
          <div className="bg-card p-6 md:p-10 border border-border">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
