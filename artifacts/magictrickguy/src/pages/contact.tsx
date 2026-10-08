import { useDocumentTitle } from "@/hooks/use-document-title";
import { BookingForm } from "@/components/shared/booking-form";
import { BookCallButton } from "@/components/shared/book-call";
import { AvailabilityButton } from "@/components/shared/availability";
import { contact } from "@/data/content";
import { Mail } from "lucide-react";

const nextSteps = [
  "I read your note and reply within 24 hours.",
  "We talk through your goals, your guests, and the schedule.",
  "I send ideas, the right format for your event, and a quote.",
];

export default function Contact() {
  useDocumentTitle("Contact & Booking", {
    description:
      "Tell Stefan Oswald what you're planning and what success looks like for your event. Orlando-based corporate magician and emcee, available worldwide. Replies within 24 hours.",
    path: "/contact",
  });

  return (
    <div className="flex min-h-screen flex-col pt-24">
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          {/* On phones the form comes right after the intro; on desktop it sits beside everything else. */}
          <div className="grid gap-12 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-24 lg:gap-y-10">
            <div className="lg:col-span-5">
              <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl">
                <span className="mb-4 block font-accent text-sm font-normal tracking-widest text-primary">
                  LET'S TALK
                </span>
                Tell me what you're planning
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The more you share about your guests, your goals, and what success looks like, the better the ideas I
                can bring you.
                <strong className="mt-4 block text-foreground">I reply within 24 hours.</strong>
              </p>

              <div className="mt-8 border border-border bg-card p-6">
                <h2 className="mb-2 font-serif text-2xl text-foreground">Is your date open?</h2>
                <p className="mb-5 text-muted-foreground">
                  See my open dates, live from my calendar. Pick one and it goes straight into the form.
                </p>
                <AvailabilityButton />
              </div>

              <div className="mt-4 border border-border bg-card p-6">
                <h2 className="mb-2 font-serif text-2xl text-foreground">Rather talk it through?</h2>
                <p className="mb-5 text-muted-foreground">
                  Book a 15-minute call. I'm available Mondays and Wednesdays, 4–6 pm Eastern. Video or phone, your
                  choice.
                </p>
                <BookCallButton />
              </div>
            </div>

            <div className="border border-border bg-card p-6 shadow-xl md:p-10 lg:col-span-7 lg:row-span-2 lg:self-start">
              <BookingForm />
            </div>

            <div className="lg:col-span-5">
              <h2 className="mb-4 font-accent text-sm tracking-widest text-primary">WHAT HAPPENS NEXT</h2>
              <ol className="mb-10 space-y-3">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-4 text-foreground/90">
                    <span className="font-accent text-primary">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div className="border border-border bg-card p-8">
                <h2 className="mb-4 font-serif text-2xl text-foreground">Prefer email?</h2>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-3 break-all text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                  {contact.email}
                </a>
                <p className="mt-4 text-sm text-muted-foreground">Based in Orlando, FL. Available worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
