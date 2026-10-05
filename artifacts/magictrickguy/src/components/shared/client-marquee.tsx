import { clients, type Client } from "@/data/content";
import { cn } from "@/lib/utils";

const CREAM = "#f5f5f0";

function Logo({ c, hidden = false }: { c: Client; hidden?: boolean }) {
  return (
    <li className="flex shrink-0 items-center px-6 md:px-10" aria-hidden={hidden || undefined}>
      <img
        src={c.logo}
        alt={hidden ? "" : c.name}
        title={hidden ? undefined : c.name}
        loading="lazy"
        decoding="async"
        className="w-auto max-w-none select-none"
        style={{ height: `calc(${c.height}px * var(--logo-scale))` }}
        draggable={false}
      />
    </li>
  );
}

/**
 * Past clients as a light band of full-color logos drifting left to right.
 * Pauses on hover; people who prefer reduced motion get a still, wrapped grid instead.
 */
export function ClientMarquee({ className }: { className?: string }) {
  return (
    <section
      className={cn("py-8 [--logo-scale:0.72] md:py-10 md:[--logo-scale:1]", className)}
      style={{ backgroundColor: CREAM }}
      aria-labelledby="past-clients-heading"
    >
      <h2
        id="past-clients-heading"
        className="mb-6 text-center font-accent text-xs font-normal tracking-[0.25em] text-[#7a6427] md:mb-8"
      >
        PAST CLIENTS
      </h2>

      <div className="marquee relative overflow-hidden">
        <ul className="marquee-track flex w-max items-center">
          {clients.map((c) => (
            <Logo key={c.name} c={c} />
          ))}
          {clients.map((c) => (
            <Logo key={`${c.name}-copy`} c={c} hidden />
          ))}
        </ul>
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32"
          style={{ background: `linear-gradient(to right, ${CREAM}, transparent)` }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32"
          style={{ background: `linear-gradient(to left, ${CREAM}, transparent)` }}
        />
      </div>

      <ul className="marquee-static mx-auto max-w-6xl flex-wrap items-center justify-center gap-y-6 px-4">
        {clients.map((c) => (
          <Logo key={`${c.name}-static`} c={c} />
        ))}
      </ul>
    </section>
  );
}
