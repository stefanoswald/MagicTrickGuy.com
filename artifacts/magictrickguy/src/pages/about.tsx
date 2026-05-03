import { useDocumentTitle } from "@/hooks/use-document-title";
import { Placeholder } from "@/components/ui/placeholder";
import { Button } from "@/components/ui/button";

export default function About() {
  useDocumentTitle("About Stefan Oswald | Magician");

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Placeholder text="[Stefan Oswald Portrait]" aspectRatio="portrait" />
            </div>
            <div>
              <h1 className="font-accent tracking-widest text-sm text-primary mb-4">MEET STEFAN</h1>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Not Your Average Magician.
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Stefan Oswald has spent over 15 years perfecting the art of astonishment. From his early days performing close-up magic to headlining corporate galas across the country, his philosophy remains the same: magic is just a vehicle for connection.
                </p>
                <p>
                  Based in Orlando, Florida, Stefan combines elite sleight of hand with sharp, corporate-clean comedy. He doesn't just fool audiences—he engages them, ensuring that every guest feels like an active participant rather than a passive observer.
                </p>
                <p>
                  When he's not on stage, Stefan hosts the highly exclusive Magic Mansion Masterminds, bringing together entrepreneurs and creators to share strategies for success.
                </p>
              </div>
              <div className="mt-10">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-none px-8 tracking-wide">
                  DOWNLOAD EPK (MEDIA KIT)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">THE JOURNEY</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">From Cards to Corporate</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <h4 className="text-2xl font-serif text-foreground mb-4">The Origin</h4>
              <p className="text-muted-foreground leading-relaxed">
                Like many magicians, Stefan's obsession started with a simple deck of cards. But while others focused entirely on the mechanics of the tricks, Stefan became fascinated with the psychology behind them. How do you direct attention? How do you build tension? How do you craft a narrative that makes a simple trick feel like a miracle?
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Placeholder text="[Early Performance Photo]" aspectRatio="video" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Placeholder text="[Stage Performance Photo]" aspectRatio="video" />
            </div>
            <div>
              <h4 className="text-2xl font-serif text-foreground mb-4">The Philosophy</h4>
              <p className="text-muted-foreground leading-relaxed">
                Today, Stefan's performances are built on the belief that corporate entertainment shouldn't be an afterthought. It should be the highlight of the event. By combining world-class magic with sophisticated humor and genuine audience interaction, Stefan delivers an experience that respects the intelligence of his audience while completely blowing their minds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-accent tracking-widest text-sm text-primary mb-4">GALLERY</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground">Behind the Magic</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Placeholder key={i} text={`[Gallery Photo ${i}]`} aspectRatio="square" className="hover:opacity-80 transition-opacity cursor-pointer" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
