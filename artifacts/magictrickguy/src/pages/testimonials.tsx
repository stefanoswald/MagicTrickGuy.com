import { useDocumentTitle } from "@/hooks/use-document-title";
import { testimonials, reviewPlatforms } from "@/data/content";
import { Star, ExternalLink } from "lucide-react";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  useDocumentTitle("Reviews & Testimonials | Stefan Oswald");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Corporate", "Media", "Live Show"];

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
            Stefan has earned more than 1,000 five-star reviews from live audiences. Here are a few favorites, along with what clients and TV hosts have said.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <p className="text-center font-accent tracking-widest text-xs text-primary mb-8">
            THE GREAT MAGIC HALL, OLD TOWN KISSIMMEE, WHERE STEFAN WAS A RESIDENT MAGICIAN
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {reviewPlatforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card border border-border hover:border-primary transition-colors p-6 text-center"
              >
                <p className="font-accent tracking-widest text-sm text-foreground mb-3">{p.name.toUpperCase()}</p>
                <p className="flex items-center justify-center gap-2 text-4xl font-serif text-foreground">
                  {p.rating.toFixed(1)} <Star className="w-6 h-6 text-primary fill-current" />
                </p>
                <p className="text-sm text-muted-foreground mt-2">{p.reviews.toLocaleString()} reviews</p>
                {p.namedStefan ? (
                  <p className="text-sm text-foreground mt-3">
                    <span className="text-primary font-semibold">{p.namedStefan}</span> mention Stefan by name
                  </p>
                ) : null}
                <span className="mt-4 inline-flex items-center text-xs font-medium tracking-wide text-muted-foreground group-hover:text-primary transition-colors uppercase">
                  Read reviews <ExternalLink className="ml-2 h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
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
              <TestimonialCard key={t.id} t={t} showType className="hover:border-primary transition-colors" />
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
