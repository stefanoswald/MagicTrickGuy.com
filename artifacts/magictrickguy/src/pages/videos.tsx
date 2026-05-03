import { useDocumentTitle } from "@/hooks/use-document-title";
import { Placeholder } from "@/components/ui/placeholder";

export default function Videos() {
  useDocumentTitle("Video Gallery | Stefan Oswald");

  const categories = [
    { title: "Corporate Stage Shows", count: 3 },
    { title: "Trade Show & Close-up", count: 2 },
    { title: "Behind The Scenes & Masterminds", count: 2 }
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
            <Placeholder text="[Replace with Stefan's showreel YouTube embed ID]" aspectRatio="video" className="bg-background/50 border-none" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-24">
          
          {categories.map((category, idx) => (
            <div key={idx}>
              <div className="border-b border-border pb-4 mb-8">
                <h3 className="text-2xl font-serif text-foreground">{category.title}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[...Array(category.count)].map((_, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-sm border border-border mb-4">
                      <Placeholder text={`[${category.title} Video ${i + 1}]`} aspectRatio="video" className="border-none transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h4 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">Performance Clip {i + 1}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
