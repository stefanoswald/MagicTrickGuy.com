import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { contact } from "@/data/content";
import { AvailabilityButton } from "@/components/shared/availability";
import { cn } from "@/lib/utils";

/**
 * "Book a call": opens Stefan's Google Calendar booking page (Mon and Wed, 4-6 pm Eastern).
 * Google shows only open times, so anything already on his calendar is never offered.
 */
export function BookCallButton({
  className,
  label = "BOOK A CALL",
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className={cn(
            "h-14 w-full rounded-none border-primary px-8 text-base font-medium tracking-wide text-primary hover:bg-primary/10 hover:text-primary sm:w-auto",
            className,
          )}
        >
          <CalendarDays className="mr-2 h-5 w-5" />
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="flex h-[calc(100dvh-2rem)] max-h-[860px] w-[calc(100vw-1.5rem)] max-w-3xl flex-col gap-0 overflow-hidden border-border bg-background p-0 sm:rounded-none">
        <div className="border-b border-border p-5 pr-12">
          <DialogTitle className="font-serif text-2xl text-foreground">Book a 15-minute call</DialogTitle>
          <DialogDescription className="mt-1 text-muted-foreground">
            Mondays and Wednesdays, 4–6 pm Eastern. Pick any open time. Video or phone, your choice.
          </DialogDescription>
        </div>
        <div className="flex-1 bg-white">
          {open && (
            <iframe
              src={contact.bookingEmbedUrl}
              title="Book a call with Stefan Oswald"
              className="h-full w-full border-0"
            />
          )}
        </div>
        <p className="border-t border-border p-3 text-center text-xs text-muted-foreground">
          Trouble seeing times?{" "}
          <a
            href={contact.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-2 hover:text-primary"
          >
            Open the booking page in a new tab
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
}

/** Check the date or talk it through: shown above the form under the Let's Talk heading. */
export function BookCallBar({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <p className="text-center text-foreground/80">
        Check your date first, or talk it through.{" "}
        <span className="text-muted-foreground">Calls are 15 minutes, Mondays and Wednesdays.</span>
      </p>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <AvailabilityButton />
        <BookCallButton />
      </div>
    </div>
  );
}
