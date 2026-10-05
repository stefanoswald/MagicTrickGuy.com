import { useDocumentTitle } from "@/hooks/use-document-title";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { PromoVideo } from "@/components/shared/promo-video";
import { PageCta, SectionHeading } from "@/components/shared/page-sections";
import { contact } from "@/data/content";
import { photos } from "@/data/photos";

export default function Videos() {
  useDocumentTitle("Videos | Corporate Magician & Emcee", {
    description:
      "Watch Orlando corporate magician and emcee Stefan Oswald explain what a win looks like for your event, plus clips from live TV on FOX 35 Orlando.",
    path: "/videos",
  });

  const tvStills = [
    { ...photos.fox35Stage, caption: "Live on FOX 35 Orlando" },
    { ...photos.fox35Fire, caption: "A fiery interview on FOX 35 Orlando" },
  ];

  return (
    <div className="flex min-h-screen flex-col pt-24">
      <section className="border-b border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl">
            <span className="mb-4 block font-accent text-sm font-normal tracking-widest text-primary">VIDEO</span>
            What a win looks like for your event
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            87 seconds on how I help planners create events people talk about, and what I'm really there to do.
          </p>
          <div className="mx-auto w-full max-w-4xl">
            <PromoVideo />
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-10 rounded-none border-foreground/20 px-8 tracking-wide text-foreground hover:bg-foreground/5"
          >
            <a href={contact.youtube} target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-5 w-5" /> MORE ON YOUTUBE
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading eyebrow="AS SEEN ON TV" title="Featured on FOX 35 Orlando" className="mb-12" />
          <div className="grid gap-8 md:grid-cols-2">
            {tvStills.map((still) => (
              <figure key={still.src}>
                <img
                  src={still.src}
                  alt={still.alt}
                  loading="lazy"
                  className="aspect-video w-full border border-border object-cover"
                />
                <figcaption className="mt-4 font-serif text-xl text-foreground">{still.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Picture this in your room"
        body="Tell me about your audience and what success looks like, and I'll recommend the right format for your program."
      />
    </div>
  );
}
