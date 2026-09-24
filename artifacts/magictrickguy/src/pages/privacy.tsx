import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Privacy() {
  useDocumentTitle("Privacy Policy", {
    description:
      "Privacy policy for MagicTrickGuy.com, including how booking inquiries and event details are handled.",
    path: "/privacy",
  });

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <p className="font-accent tracking-widest text-sm text-primary mb-4">
            SITE POLICY
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            MagicTrickGuy.com collects only the information needed to respond to
            booking inquiries, plan events, and improve the website experience.
          </p>

          <div className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <h2>Information We Collect</h2>
            <p>
              When you submit a booking inquiry, we may collect your name, email
              address, phone number, event date, event location, guest count,
              budget range, and any details you choose to include in your
              message.
            </p>

            <h2>How Information Is Used</h2>
            <p>
              Inquiry details are used to respond to your request, check
              availability, prepare event recommendations, and coordinate
              booking conversations. Booking form submissions are delivered to
              Stefan's email inbox through FormSubmit (formsubmit.co), a
              form-forwarding service. We do not sell personal information.
            </p>

            <h2>Website Data</h2>
            <p>
              The site may use basic analytics or hosting logs to understand
              performance, traffic sources, and technical issues. These tools
              help keep the website reliable and useful.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about this policy or your information, contact
              StefanPaulOswald@gmail.com.
            </p>
          </div>

          <div className="mt-12">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 rounded-none tracking-wide h-12">
                CONTACT STEFAN
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
