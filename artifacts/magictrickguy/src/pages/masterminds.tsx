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
    desc: "Each program is led by respected names in magic and mentalism, from two-time FISM award winner Gregory Wilson to Banachek and Kent Axell.",
  },
  {
    title: "Small by Design",
    desc: "Groups stay small, capped between 7 and 20 performers, so everyone gets real stage time, real attention, and a clear plan for what to work on next.",
  },
];

const pastPrograms = [
  {
    when: "November 2025",
    title: "The Magic Mansion Mastermind",
    mentors: "with Gregory Wilson",
    desc: "A five-day retreat for up to seven magicians: daily workshops, one-on-one coaching, and a polished set of signature pieces with the two-time FISM award winner.",
    href: "https://the-magic-mansion.com/Greg-Wilson",
  },
  {
    when: "August 2026",
    title: "The Mentalism Bootcamp",
    mentors: "with Banachek & Kent Axell",
    desc: "Three days of hands-on act direction for up to 20 performers, led by the mentalist who has consulted for Penn & Teller, Criss Angel, and David Blaine, alongside Kent Axell.",
    href: "https://the-magic-mansion.com",
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
            Stefan and his team host small-group, multi-day masterminds in Orlando where magicians and mentalists put their material on its feet and develop it alongside world-class mentors.
          </p>
          <a href={contact.magicMansionUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-12 rounded-none tracking-wide h-14 text-lg">
              VISIT THE MAGIC MANSION <ExternalLink className="ml-2 h-5 w-5" />
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

      {/* Past programs */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">PAST MASTERMINDS</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">Two Programs and Counting</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pastPrograms.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-background p-8 border border-border hover:border-primary transition-colors"
              >
                <p className="font-accent text-xs tracking-widest text-primary mb-3">{p.when.toUpperCase()}</p>
                <h4 className="font-serif text-2xl text-foreground">{p.title}</h4>
                <p className="font-serif italic text-lg text-foreground/80 mb-4">{p.mentors}</p>
                <p className="text-muted-foreground mb-6">{p.desc}</p>
                <span className="inline-flex items-center text-sm font-medium tracking-wide text-foreground group-hover:text-primary transition-colors uppercase">
                  Learn more <ExternalLink className="ml-2 h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Want In on the Next One?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Future dates, mentors, pricing, and seat availability will be posted at The-Magic-Mansion.com.
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
