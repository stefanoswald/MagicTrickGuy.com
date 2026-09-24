import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * Click-to-play YouTube embed. Shows the video thumbnail first so the page
 * stays fast, then swaps in the real player when the visitor clicks.
 */
export function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={cn("relative aspect-video w-full overflow-hidden bg-black", className)}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            loading="lazy"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-300 group-hover:bg-black/10">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary pl-1 transition-transform duration-300 group-hover:scale-110">
              <Play className="h-8 w-8 text-primary-foreground" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
