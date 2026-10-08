import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/corporate-magic", label: "Corporate" },
  { href: "/trade-show-magic", label: "Trade Shows" },
  { href: "/emcee-host", label: "Emcee" },
  { href: "/keynote-magic", label: "Keynote" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/videos", label: "Videos" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [location] = useLocation();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // While the phone menu is open: keep the page behind it still, and let Escape close it.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isMobileMenuOpen]);

  // If the window grows to desktop width, the phone menu has no reason to stay open.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) setIsMobileMenuOpen(false);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full border-b border-transparent transition-[background-color,border-color,box-shadow,padding] duration-300",
          // Above the phone menu while it's open, so the logo and the close button stay on top.
          isMobileMenuOpen ? "z-[60]" : "z-50",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-border py-4 shadow-sm"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-7xl">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2 group">
            <span className="font-serif text-2xl font-bold tracking-wide text-foreground group-hover:text-primary transition-colors">
              STEFAN OSWALD
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 rounded-none tracking-wide">
              <Link href="/contact">LET'S TALK</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/*
        Phone menu. It lives outside the header on purpose: once the page scrolls, the header gets a
        blur effect, and anything fixed inside a blurred element gets trapped in that element's box.
      */}
      {mounted &&
        createPortal(
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className={cn(
              "fixed inset-0 z-[55] overflow-y-auto overscroll-contain bg-background transition-[opacity,visibility] duration-300 lg:hidden",
              isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
            )}
          >
            <nav className="flex min-h-full flex-col items-center justify-center gap-7 px-6 pb-12 pt-28 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    "text-2xl font-serif tracking-wide transition-colors hover:text-primary",
                    location === link.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-12 rounded-none tracking-wide text-lg h-14">
                <Link href="/contact" onClick={closeMenu}>
                  TELL ME ABOUT YOUR EVENT
                </Link>
              </Button>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
