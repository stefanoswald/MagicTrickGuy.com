import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Terms() {
  useDocumentTitle("Terms of Service", {
    description:
      "Website terms for MagicTrickGuy.com, including booking inquiry expectations and site usage.",
    path: "/terms",
  });

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <p className="font-accent tracking-widest text-sm text-primary mb-4">
            SITE TERMS
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            These terms describe the basic expectations for using
            MagicTrickGuy.com and submitting booking inquiries.
          </p>

          <div className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <h2>Website Use</h2>
            <p>
              The content on this website is provided for general information
              about Stefan Oswald's performances, speaking, and event services.
              You agree not to misuse the site or attempt to interfere with its
              operation.
            </p>

            <h2>Booking Inquiries</h2>
            <p>
              Submitting a form does not create a confirmed booking. Dates,
              pricing, travel, technical needs, and performance details are
              confirmed separately in writing.
            </p>

            <h2>Content</h2>
            <p>
              Website text, images, branding, and design elements may not be
              copied or reused without permission, except where allowed by law.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to
              StefanPaulOswald@gmail.com.
            </p>
          </div>

          <div className="mt-12">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 rounded-none tracking-wide h-12">
                CHECK AVAILABILITY
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
