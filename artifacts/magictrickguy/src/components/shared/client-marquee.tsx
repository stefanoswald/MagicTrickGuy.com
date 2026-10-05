import { useEffect, useRef } from "react";
import { clients, type Client } from "@/data/content";
import { cn } from "@/lib/utils";

const CREAM = "#f5f5f0";
/** Drift speed in pixels per second, the same on phones and desktops. */
const SPEED = 40;
/** Enough copies of the logo row to keep even a very wide screen filled while it moves. */
const COPIES = 3;

function Logo({ c, hidden = false }: { c: Client; hidden?: boolean }) {
  return (
    <li className="flex shrink-0 items-center px-5 md:px-8">
      <img
        src={c.logo}
        alt={hidden ? "" : c.name}
        title={hidden ? undefined : c.name}
        width={c.width}
        height={c.intrinsicHeight}
        decoding="async"
        draggable={false}
        className="w-auto max-w-none select-none"
        style={{ height: `calc(${c.height}px * var(--logo-scale))` }}
      />
    </li>
  );
}

/**
 * Past clients: a title on the page, then a thin light band of full-color logos drifting left to right.
 *
 * The movement is measured in pixels from the real width of one logo row, so it loops seamlessly and
 * always starts with the band full. Logos load right away (no lazy loading), because a moving row never
 * gets scrolled into view, and some phones never fetch lazy images that only slide in. Pauses under a
 * mouse; people who prefer reduced motion get a still, wrapped row instead.
 */
export function ClientMarquee({ className }: { className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLUListElement>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const row = rowRef.current;
    if (!track || !row || typeof track.animate !== "function") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let distance = 0;

    const run = () => {
      const width = row.getBoundingClientRect().width;
      if (reduceMotion.matches || width === 0) {
        animationRef.current?.cancel();
        animationRef.current = null;
        distance = 0;
        return;
      }
      if (animationRef.current && Math.abs(width - distance) < 0.5) return;
      animationRef.current?.cancel();
      distance = width;
      // Start one row to the left and slide right by exactly one row: the end frame looks the same as the first.
      animationRef.current = track.animate(
        [{ transform: `translate3d(${-width}px, 0, 0)` }, { transform: "translate3d(0, 0, 0)" }],
        { duration: (width / SPEED) * 1000, iterations: Infinity, easing: "linear" },
      );
    };

    run();
    const resize = new ResizeObserver(run);
    resize.observe(row);
    reduceMotion.addEventListener("change", run);
    return () => {
      resize.disconnect();
      reduceMotion.removeEventListener("change", run);
      animationRef.current?.cancel();
      animationRef.current = null;
    };
  }, []);

  // Only a real mouse pauses it. On phones a tap would otherwise leave it stuck in "hover".
  const pause = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") animationRef.current?.pause();
  };
  const resume = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") animationRef.current?.play();
  };

  return (
    <section
      className={cn("bg-background pt-10 [--logo-scale:0.6] md:pt-12 md:[--logo-scale:0.8]", className)}
      aria-labelledby="past-clients-heading"
    >
      <h2
        id="past-clients-heading"
        className="mb-4 text-center font-accent text-sm font-normal tracking-[0.25em] text-primary md:mb-5"
      >
        PAST CLIENTS
      </h2>

      <div
        className="marquee relative overflow-hidden py-3 md:py-4"
        style={{ backgroundColor: CREAM }}
        onPointerEnter={pause}
        onPointerLeave={resume}
      >
        <div ref={trackRef} className="flex w-max will-change-transform">
          {Array.from({ length: COPIES }, (_, i) => (
            <ul
              key={i}
              ref={i === 0 ? rowRef : undefined}
              className="flex shrink-0 items-center"
              aria-hidden={i > 0 || undefined}
            >
              {clients.map((c) => (
                <Logo key={c.name} c={c} hidden={i > 0} />
              ))}
            </ul>
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-24"
          style={{ background: `linear-gradient(to right, ${CREAM}, transparent)` }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-24"
          style={{ background: `linear-gradient(to left, ${CREAM}, transparent)` }}
        />
      </div>

      <ul
        className="marquee-static flex-wrap items-center justify-center gap-y-3 px-4 py-3 md:py-4"
        style={{ backgroundColor: CREAM }}
      >
        {clients.map((c) => (
          <Logo key={`${c.name}-static`} c={c} />
        ))}
      </ul>
    </section>
  );
}
