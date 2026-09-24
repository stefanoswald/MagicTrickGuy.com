import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { Photo } from "@/data/photos";

export function PhotoGallery({ items }: { items: Photo[] }) {
  const [active, setActive] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(photo)}
            className="group aspect-square overflow-hidden border border-border bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`View larger: ${photo.alt}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: photo.focus ?? "50% 50%" }}
            />
          </button>
        ))}
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-5xl w-[calc(100vw-2rem)] border-border bg-background p-2 sm:rounded-none">
          <DialogTitle className="sr-only">{active?.alt ?? "Photo"}</DialogTitle>
          {active && (
            <img src={active.src} alt={active.alt} className="max-h-[85vh] w-full object-contain" />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
