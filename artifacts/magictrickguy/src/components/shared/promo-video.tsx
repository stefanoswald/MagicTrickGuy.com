import { useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Stefan's booking promo (v9, the final website cut). Self-hosted so it starts fast.
 * The video ends on a "Click Below!" card with an arrow, so the call to action
 * is built in directly under the player and lights up when the video ends.
 * Phones get the 720p file; larger screens get 1080p.
 */
export const PROMO = {
  src1080: "/videos/stefan-oswald-promo.mp4",
  src720: "/videos/stefan-oswald-promo-720.mp4",
  poster: "/videos/stefan-oswald-promo-poster.jpg",
  captions: "/videos/stefan-oswald-promo.vtt",
  title: "Stefan Oswald: what a win looks like for your event (1 minute 27 seconds)",
};

type PromoVideoProps = {
  className?: string;
  /** Show the call-to-action button directly under the video (the video's end card points at it). */
  cta?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PromoVideo({
  className,
  cta = true,
  ctaHref = "/contact",
  ctaLabel = "TELL ME WHAT YOU'RE PLANNING",
}: PromoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);

  const play = () => {
    setStarted(true);
    setEnded(false);
    const v = ref.current;
    if (v) {
      if (v.ended) v.currentTime = 0;
      void v.play();
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="relative aspect-video w-full overflow-hidden border border-border bg-black shadow-2xl">
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full"
          poster={PROMO.poster}
          preload="metadata"
          playsInline
          controls={started}
          onPlay={() => {
            setStarted(true);
            setEnded(false);
          }}
          onEnded={() => setEnded(true)}
          aria-label={PROMO.title}
        >
          <source src={PROMO.src720} type="video/mp4" media="(max-width: 767px)" />
          <source src={PROMO.src1080} type="video/mp4" />
          <track kind="captions" src={PROMO.captions} srcLang="en" label="English" />
        </video>

        {!started && (
          // Play control sits bottom-left so it doesn't cover Stefan's face on the poster.
          <button
            type="button"
            onClick={play}
            className="group absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/75 via-black/0 to-transparent p-4 text-left md:p-6"
            aria-label={`Play video: ${PROMO.title}`}
          >
            <span className="flex items-center gap-4">
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary pl-1 shadow-2xl transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
                <Play className="h-6 w-6 text-primary-foreground md:h-7 md:w-7" />
              </span>
              <span className="font-accent text-xs uppercase tracking-widest text-white md:text-sm">
                Press play · 1:27
              </span>
            </span>
          </button>
        )}
      </div>

      {cta && (
        <Link
          href={ctaHref}
          className={cn(
            "group flex min-h-14 w-full items-center justify-center gap-2 bg-primary px-6 py-3 text-center font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:bg-primary/90",
            ended && "ring-4 ring-accent ring-offset-2 ring-offset-background",
          )}
        >
          {ctaLabel}
          <ArrowRight className="h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
