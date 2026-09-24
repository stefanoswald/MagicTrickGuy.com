import { Star } from "lucide-react";
import type { Testimonial } from "@/data/content";
import { cn } from "@/lib/utils";

export function TestimonialCard({ t, className, showType = false }: { t: Testimonial; className?: string; showType?: boolean }) {
  const byline = [t.title, t.company].filter(Boolean).join(", ");
  return (
    <div className={cn("bg-card p-8 border border-border flex flex-col h-full", className)}>
      <div className="flex gap-1 mb-6 text-primary" aria-label={`${t.rating} out of 5 stars`}>
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
      <p className="text-foreground text-lg font-serif italic mb-8 flex-grow">"{t.quote}"</p>
      <div>
        <p className="font-bold text-foreground">{t.name}</p>
        {byline && <p className="text-sm text-muted-foreground">{byline}</p>}
        {showType && (
          <div className="mt-4 inline-block px-3 py-1 bg-background border border-border text-xs font-accent tracking-widest text-foreground uppercase">
            {t.eventType}
          </div>
        )}
      </div>
    </div>
  );
}
