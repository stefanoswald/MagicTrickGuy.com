import { useDocumentTitle } from "@/hooks/use-document-title";
import { testimonials } from "@/data/content";
import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  useDocumentTitle("Reviews & Testimonials | Stefan Oswald");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Corporate", "Trade Show", "Private Event", "Mastermind", "Keynote"];

  const filteredTestimonials = filter === "All" 
    ? testimonials 
    : testimonials.filter(t => t.eventType === filter);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 className="font-accent tracking-widest text-sm text-primary mb-4">SOCIAL PROOF</h1>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-muted-foreground">
            Read what event planners, executives, and attendees have to say about the Stefan Oswald experience.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant="outline"
                onClick={() => setFilter(category)}
                className={cn(
                  "rounded-none border-border font-medium tracking-wide",
                  filter === category 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "text-foreground hover:bg-card"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((t) => (
              <div key={t.id} className="bg-card p-8 border border-border flex flex-col h-full hover:border-primary transition-colors">
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-foreground text-lg font-serif italic mb-8 flex-grow">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.title}, {t.company}</p>
                  <div className="mt-4 inline-block px-3 py-1 bg-background border border-border text-xs font-accent tracking-widest text-foreground uppercase">
                    {t.eventType}
                  </div>
                </div>
              </div>
            ))}
            
            {filteredTestimonials.length === 0 && (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                No testimonials found for this category yet.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
