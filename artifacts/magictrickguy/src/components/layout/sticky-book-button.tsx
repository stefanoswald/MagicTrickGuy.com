import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyBookButton() {
  const [location] = useLocation();
  const [visible, setVisible] = useState(false);

  // Appear once the visitor scrolls past the hero, so it doesn't double up with the hero's own button.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  // The contact page is already the form, so the bar would only cover it.
  if (location === "/contact") return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 flex justify-center border-t border-border bg-background/95 p-4 backdrop-blur-sm transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <Button
        asChild
        size="lg"
        className="h-14 w-full rounded-none bg-primary text-base font-medium tracking-wide text-primary-foreground shadow-lg hover:bg-primary/90"
      >
        <Link href="/contact" tabIndex={visible ? 0 : -1}>
          TELL ME ABOUT YOUR EVENT
        </Link>
      </Button>
    </div>
  );
}
