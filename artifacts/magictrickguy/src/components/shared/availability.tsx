import { useEffect, useMemo, useState } from "react";
import { CalendarCheck, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/**
 * Stefan's availability, read live from his Google Calendar through /api/availability.
 * Visitors only see when he's free (11 AM to 11 PM Eastern), never what his events are.
 */

type DayStatus = "open" | "partial" | "booked";
type Day = { date: string; status: DayStatus; windows?: [number, number][] };
type Availability = {
  timeZone: string;
  dayStart: number;
  dayEnd: number;
  minWindow: number;
  updated: string;
  days: Day[];
};

let request: Promise<Availability> | null = null;

function loadAvailability(): Promise<Availability> {
  if (!request) {
    request = fetch("/api/availability", { headers: { accept: "application/json" } })
      .then((r) => {
        if (!r.ok) throw new Error(`availability ${r.status}`);
        return r.json() as Promise<Availability>;
      })
      .catch((error) => {
        request = null; // let the next open try again
        throw error;
      });
  }
  return request;
}

function useAvailability(enabled: boolean) {
  const [state, setState] = useState<{ data?: Availability; failed?: boolean }>({});
  useEffect(() => {
    if (!enabled) return;
    let alive = true;
    setState((s) => (s.data ? s : {}));
    loadAvailability().then(
      (data) => alive && setState({ data }),
      () => alive && setState({ failed: true }),
    );
    return () => {
      alive = false;
    };
  }, [enabled]);
  return state;
}

/** 660 -> "11 AM", 990 -> "4:30 PM" */
function clock(minutes: number) {
  const h24 = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}${m ? `:${String(m).padStart(2, "0")}` : ""} ${h24 < 12 ? "AM" : "PM"}`;
}

function describeWindows(windows: [number, number][]) {
  const parts = windows.map(([a, b]) => `${clock(a)} to ${clock(b)}`);
  if (parts.length <= 1) return parts[0] ?? "";
  return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}

function longDate(key: string) {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

/** A month grid of open and booked days. `onPick` receives YYYY-MM-DD. */
export function AvailabilityCalendar({
  onPick,
  pickLabel = "ASK ABOUT THIS DATE",
  active = true,
}: {
  onPick?: (date: string) => void;
  pickLabel?: string;
  active?: boolean;
}) {
  const { data, failed } = useAvailability(active);
  const byDate = useMemo(() => new Map((data?.days ?? []).map((d) => [d.date, d])), [data]);
  const first = data?.days[0]?.date;
  const last = data?.days[data.days.length - 1]?.date;

  const [month, setMonth] = useState<{ y: number; m: number } | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (first && !month) {
      const [y, m] = first.split("-").map(Number);
      setMonth({ y, m });
    }
  }, [first, month]);

  if (failed) {
    return (
      <p className="py-10 text-center text-muted-foreground">
        My calendar isn't loading right now. Put your date in the form and I'll check it myself.
      </p>
    );
  }

  if (!data || !month) {
    return (
      <p className="flex items-center justify-center gap-3 py-16 text-muted-foreground">
        <Loader2 className="h-5 w-5 animate-spin" /> Checking my calendar…
      </p>
    );
  }

  const [fy, fm] = first!.split("-").map(Number);
  const [ly, lm] = last!.split("-").map(Number);
  const canPrev = month.y > fy || (month.y === fy && month.m > fm);
  const canNext = month.y < ly || (month.y === ly && month.m < lm);
  const shift = (delta: number) => {
    const t = new Date(Date.UTC(month.y, month.m - 1 + delta, 1));
    setMonth({ y: t.getUTCFullYear(), m: t.getUTCMonth() + 1 });
  };

  const lead = new Date(Date.UTC(month.y, month.m - 1, 1)).getUTCDay();
  const length = new Date(Date.UTC(month.y, month.m, 0)).getUTCDate();
  const cells: (string | null)[] = Array.from({ length: lead }, () => null);
  for (let d = 1; d <= length; d++) {
    cells.push(`${month.y}-${String(month.m).padStart(2, "0")}-${String(d).padStart(2, "0")}`);
  }
  const monthName = new Date(Date.UTC(month.y, month.m - 1, 1)).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  const day = selected ? byDate.get(selected) : undefined;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => shift(-1)}
          disabled={!canPrev}
          aria-label="Previous month"
          className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-primary disabled:opacity-25"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="font-serif text-2xl text-foreground" aria-live="polite">
          {monthName}
        </p>
        <button
          type="button"
          onClick={() => shift(1)}
          disabled={!canNext}
          aria-label="Next month"
          className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-primary disabled:opacity-25"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center" role="grid" aria-label={`Availability for ${monthName}`}>
        {WEEKDAYS.map((w, i) => (
          <div key={i} className="pb-1 font-accent text-xs tracking-widest text-muted-foreground" aria-hidden="true">
            {w}
          </div>
        ))}
        {cells.map((key, i) => {
          if (!key) return <div key={`blank-${i}`} />;
          const info = byDate.get(key);
          const n = Number(key.slice(8));
          if (!info) {
            return (
              <div key={key} className="flex aspect-square items-center justify-center text-sm text-muted-foreground/30">
                {n}
              </div>
            );
          }
          const isSelected = key === selected;
          const label =
            info.status === "open" ? "open" : info.status === "partial" ? "some times open" : "booked";
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelected(key)}
              aria-pressed={isSelected}
              aria-label={`${longDate(key)}, ${label}`}
              className={cn(
                "relative flex aspect-square flex-col items-center justify-center border text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                info.status === "open" && "border-primary/60 text-foreground hover:bg-primary/10",
                info.status === "partial" && "border-border text-foreground hover:border-primary/60",
                info.status === "booked" && "border-transparent text-muted-foreground/50 line-through",
                isSelected && "border-primary bg-primary text-primary-foreground no-underline hover:bg-primary",
              )}
            >
              {n}
              {info.status !== "booked" && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute bottom-1 h-1.5 w-1.5 rounded-full",
                    isSelected ? "bg-primary-foreground" : "bg-primary",
                    info.status === "partial" && !isSelected && "bg-primary/50",
                  )}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" /> Open
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary/50" aria-hidden="true" /> Some times open
        </span>
        <span className="flex items-center gap-2">
          <span className="line-through">12</span> Booked
        </span>
      </div>

      <div className="mt-5 min-h-[7.5rem] border-t border-border pt-5" aria-live="polite">
        {!day ? (
          <p className="text-center text-muted-foreground">Pick a date to see when I'm free.</p>
        ) : (
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-foreground">
              <span className="font-serif text-xl">{longDate(day.date)}</span>
              <br />
              <span className="text-muted-foreground">
                {day.status === "open" && "I'm open all day, 11 AM to 11 PM."}
                {day.status === "partial" && `I'm open ${describeWindows(day.windows ?? [])}.`}
                {day.status === "booked" && "I'm booked that day. If your date can move, try another one."}
              </span>
            </p>
            {onPick && (
              <Button
                type="button"
                onClick={() => onPick(day.date)}
                variant={day.status === "booked" ? "outline" : "default"}
                className={cn(
                  "h-12 rounded-none px-8 tracking-wide",
                  day.status === "booked"
                    ? "border-primary text-primary hover:bg-primary/10 hover:text-primary"
                    : "bg-primary text-primary-foreground hover:bg-primary/90",
                )}
              >
                {day.status === "booked" ? "ASK ANYWAY" : pickLabel}
              </Button>
            )}
          </div>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Times are Eastern. I'll confirm your date when I reply.
      </p>
    </div>
  );
}

/** Tell the booking form on this page which date the visitor picked. */
export function pickEventDate(date: string) {
  window.dispatchEvent(new CustomEvent("mtg:event-date", { detail: date }));
}

/** A button that opens the calendar in a dialog. Picking a date fills in the booking form. */
export function AvailabilityButton({
  className,
  label = "CHECK MY AVAILABILITY",
  variant = "button",
  onPick = pickEventDate,
}: {
  className?: string;
  label?: string;
  variant?: "button" | "link";
  onPick?: (date: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {variant === "link" ? (
          <button
            type="button"
            className={cn(
              "inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 transition-colors hover:underline",
              className,
            )}
          >
            <CalendarCheck className="h-4 w-4" />
            {label}
          </button>
        ) : (
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "h-14 w-full rounded-none border-primary px-8 text-base font-medium tracking-wide text-primary hover:bg-primary/10 hover:text-primary sm:w-auto",
              className,
            )}
          >
            <CalendarCheck className="mr-2 h-5 w-5" />
            {label}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-2rem)] w-[calc(100vw-1.5rem)] max-w-md overflow-y-auto border-border bg-background p-5 sm:rounded-none sm:p-6">
        <DialogTitle className="pr-8 font-serif text-2xl text-foreground">Is your date open?</DialogTitle>
        <DialogDescription className="-mt-2 text-muted-foreground">
          Live from my calendar. Pick a date to see when I'm free.
        </DialogDescription>
        <AvailabilityCalendar
          active={open}
          onPick={(date) => {
            setOpen(false);
            onPick(date);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
