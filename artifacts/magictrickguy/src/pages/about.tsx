import { useDocumentTitle } from "@/hooks/use-document-title";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PhotoGallery } from "@/components/shared/photo-gallery";
import { CtaButton, PageCta, SectionHeading } from "@/components/shared/page-sections";
import { galleryPhotos, photos } from "@/data/photos";

export default function About() {
  useDocumentTitle("About Stefan Oswald | Orlando Magician & Emcee", {
    description:
      "Stefan Oswald is an Orlando-based magician and emcee with thousands of shows in 43 countries, an America's Got Talent appearance, and 1,000+ five-star reviews. His job: the room.",
    path: "/about",
  });

  return (
    <div className="flex min-h-screen flex-col pt-24">
      <section className="border-b border-border bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <img
                src={photos.portrait.src}
                alt={photos.portrait.alt}
                className="aspect-[3/4] w-full border border-border object-cover"
              />
            </div>
            <div>
              <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl">
                <span className="mb-4 block font-accent text-sm font-normal tracking-widest text-primary">
                  MEET STEFAN
                </span>
                Not your average magician.
              </h1>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm Stefan Oswald, an Orlando-based magician and emcee. I've performed thousands of shows in 43
                  countries, stood on the America's Got Talent stage, and appeared on FOX, NBC, and ABC. Live audiences
                  have left me more than 1,000 five-star reviews.
                </p>
                <p>
                  But the thing clients thank me for most isn't a trick. It's what happens to the room. People drop
                  their guard, laugh, feel like a kid again, and start talking to each other. One client liked it so
                  much they made my official title <span className="text-foreground">CEO of Vibe</span>.
                </p>
                <p>
                  Nearly 20 years in, my philosophy is simple: magic is a vehicle for connection. I keep it clean and
                  classy, I tailor it to your crowd, and I take care of the details so you don't have to.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <CtaButton label="LET'S TALK" />
                <Button
                  asChild
                  variant="outline"
                  className="h-14 w-full rounded-none border-primary px-8 tracking-wide text-primary hover:bg-primary/10 sm:w-auto"
                >
                  <Link href="/videos">WATCH THE VIDEO</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading eyebrow="THE JOURNEY" title="What thousands of shows taught me" />

          <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="mb-4 font-serif text-2xl text-foreground">How to read a room</h3>
              <p className="leading-relaxed text-muted-foreground">
                As a resident magician at The Great Magic Hall in Old Town Kissimmee, I performed show after show for
                families, couples, and visitors from all over the world. Every crowd is different. You learn fast what
                makes people lean in, what makes them laugh, and when to change the pace.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={photos.stageLevitation.src}
                alt={photos.stageLevitation.alt}
                className="aspect-[3/2] w-full border border-border object-cover object-[50%_20%]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
            <div>
              <img
                src={photos.outdoorLevitation.src}
                alt={photos.outdoorLevitation.alt}
                className="aspect-[3/2] w-full border border-border object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="mb-4 font-serif text-2xl text-foreground">Big stages, small rooms</h3>
              <p className="leading-relaxed text-muted-foreground">
                I've performed on the America's Got Talent stage, on stage in Las Vegas, and live on FOX 35 in
                Orlando. I've also worked trade show booths, company parties, and cocktail hours. The room changes.
                The goal doesn't: entertainment shouldn't be an afterthought. It should help your event do its job.
              </p>
            </div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="mb-4 font-serif text-2xl text-foreground">Off stage</h3>
              <p className="leading-relaxed text-muted-foreground">
                When I'm not performing, I'm usually flying drones, traveling, writing, or making videos. With my team,
                I also host The Magic Mansion in Orlando: small-group masterminds where magicians and mentalists sharpen
                their acts alongside respected mentors.
              </p>
              <Link
                href="/masterminds"
                className="mt-6 inline-flex items-center text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-primary"
              >
                The Magic Mansion (for magicians) <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={photos.closeUpCube.src}
                alt={photos.closeUpCube.alt}
                className="aspect-[3/2] w-full border border-border object-cover object-[50%_35%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <SectionHeading eyebrow="GALLERY" title="Behind the magic" className="mb-12" />
          <PhotoGallery items={galleryPhotos} />
        </div>
      </section>

      <PageCta
        title="Let's talk about your event"
        body="Tell me what you're planning and what success looks like. I'll reply within 24 hours with ideas and availability."
      />
    </div>
  );
}
