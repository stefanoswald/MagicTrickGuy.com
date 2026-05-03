import { useDocumentTitle } from "@/hooks/use-document-title";
import { BookingForm } from "@/components/shared/booking-form";

export default function Contact() {
  useDocumentTitle("Contact & Booking | Stefan Oswald");

  return (
    <div className="flex flex-col min-h-screen pt-24">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <h1 className="font-accent tracking-widest text-sm text-primary mb-4">GET IN TOUCH</h1>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Book Stefan
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Ready to make your next event impossible to forget? Fill out the form with as many details as possible. 
                <strong className="text-foreground block mt-4">We promise a response within 24 hours.</strong>
              </p>
              
              <div className="p-8 bg-card border border-border mt-12">
                <h3 className="font-serif text-2xl text-foreground mb-4">Direct Contact</h3>
                <p className="text-muted-foreground mb-2">booking@magictrickguy.com</p>
                <p className="text-muted-foreground">(555) 123-4567</p>
                <p className="text-muted-foreground mt-4 text-sm">Based in Orlando, FL. Available Worldwide.</p>
              </div>
            </div>
            
            <div className="lg:col-span-7 bg-card p-6 md:p-10 border border-border shadow-xl">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
