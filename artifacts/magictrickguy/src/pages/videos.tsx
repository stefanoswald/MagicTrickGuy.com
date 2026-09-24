import { useDocumentTitle } from "@/hooks/use-document-title";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { YouTubeEmbed } from "@/components/shared/youtube-embed";
import { contact } from "@/data/content";
import { photos } from "@/data/photos";
import { Youtube } from "lucide-react";

export default function Videos() {
  useDocumentTitle("Video Gallery | Stefan Oswald");

  const tvStills = [
    { ...photos.fox35Stage, caption: "Live on FOX 35 Orlando" },
    { ...photos.fox35Fire, caption: "A fiery interview on FOX 35 Orlando" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h1 className="font-accent tracking-widest text-sm text-primary mb-4">SHOWREEL</h1>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-12">
            Watch Stefan In Action
          </h2>
          <div className="w-full max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden border border-border">
            <YouTubeEmbed videoId={contact.showreelYouTubeId} title="Stefan Oswald, Magician" />
          </div>
          <a href={contact.youtube} target="_blank" rel="noopener noreferrer" className="inline-block mt-10">
            <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-none px-8 tracking-wide">
              <Youtube className="mr-2 h-5 w-5" /> MORE ON YOUTUBE
            </Button>
          </a>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">AS SEEN ON TV</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">Featured on FOX 35 Orlando</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {tvStills.map((still) => (
              <figure key={still.src}>
                <img
                  src={still.src}
                  alt={still.alt}
                  loading="lazy"
                  className="aspect-video w-full object-cover border border-border"
                />
                <figcaption className="mt-4 font-serif text-xl text-foreground">{still.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Imagine This at Your Event</h2>
          <p className="text-foreground/80 mb-8 text-lg">Tell Stefan about your audience and he'll recommend the right format for your program.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-12 rounded-none tracking-wide h-14 text-lg">
              CHECK AVAILABILITY
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
