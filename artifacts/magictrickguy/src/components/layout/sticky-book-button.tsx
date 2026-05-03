import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function StickyBookButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border z-50 md:hidden flex justify-center">
      <Link href="/contact" className="w-full">
        <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-none tracking-wide h-14 text-lg shadow-lg">
          BOOK NOW
        </Button>
      </Link>
    </div>
  );
}
