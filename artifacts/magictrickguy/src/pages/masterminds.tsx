import { useDocumentTitle } from "@/hooks/use-document-title";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/content";
import { photos } from "@/data/photos";
import { ExternalLink } from "lucide-react";

const pillars = [
  {
    title: "Perform, Get Notes, Repeat",
    desc: "This is not a convention. There's no dealers' room and nobody reads slides at you. Attendees perform their material, get direct notes, revise, and perform again.",
  },
  {
    title: "World-Class Mentors",
    desc: "Programs bring in respected names from magic and mentalism, such as Banachek (consultant to Penn & Teller, Criss Angel, and David Blaine) and Kent Axell.",
  },
  {
    title: "Small by Design",
    desc: "Seats are capped at around 20 performers, so everyone gets real stage time, real attention, and a clear plan for what to work on next.",
  },
];

export default function Masterminds() {
  useDocumentTitle("The Magic Mansion | Stefan Oswald");

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-24 bg-secondary border-b border-border relative overflow-hidden">
        <img
          src={photos.stageLevitation.src}
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover object-[50%_30%] opacity-20"
        />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
          <h1 className="font-accent tracking-widest text-primary mb-6">THE MAGIC MANSION</h1>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-8">
            Immersive Masterminds for Performers
          </h2>
          <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Stefan and his team host small-group, multi-day workshops in Orlando where magicians and mentalists put their material on its feet and develop it alongside world-class mentors.
          </p>
          <a href={contact.magicMansionUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-12 rounded-none tracking-wide h-14 text-lg">
              SEE UPCOMING PROGRAMS <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">THE CONCEPT</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Your Routine Becomes the Curriculum</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Each Magic Mansion program is a hands-on intensive. Performers arrive with a routine, an act that isn't connecting yet, or an idea that has never been staged, and leave with sharper scripting, staging, pacing, and character, plus a roadmap for what comes next.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="bg-card p-8 border border-border">
                <h4 className="font-serif text-foreground text-2xl mb-4">{p.title}</h4>
                <p className="text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Want In on the Next One?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Current dates, mentors, pricing, and seat availability live at The-Magic-Mansion.com.
          </p>
          <a href={contact.magicMansionUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-12 rounded-none tracking-wide h-14 text-lg">
              VISIT THE MAGIC MANSION <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
