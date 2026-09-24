import { Link } from "wouter";
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { contact } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold tracking-wide text-foreground">
                STEFAN OSWALD
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed mb-6">
              World-class magic, comedy, and storytelling for corporate events, trade shows, keynotes, and private events. Based in Orlando, performing worldwide.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors mb-6"
            >
              <Mail className="w-4 h-4 text-primary" />
              {contact.email}
            </a>
            <div className="flex gap-4">
              {[
                { href: contact.instagram, label: "Instagram", Icon: Instagram },
                { href: contact.facebook, label: "Facebook", Icon: Facebook },
                { href: contact.youtube, label: "YouTube", Icon: Youtube },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-accent text-sm tracking-widest text-foreground mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/corporate-magic" className="text-sm text-muted-foreground hover:text-primary transition-colors">Corporate Events</Link>
              </li>
              <li>
                <Link href="/trade-show-magic" className="text-sm text-muted-foreground hover:text-primary transition-colors">Trade Shows</Link>
              </li>
              <li>
                <Link href="/keynote-magic" className="text-sm text-muted-foreground hover:text-primary transition-colors">Keynote Magic</Link>
              </li>
              <li>
                <Link href="/masterminds" className="text-sm text-muted-foreground hover:text-primary transition-colors">Masterminds</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-accent text-sm tracking-widest text-foreground mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Stefan</Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/videos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Videos</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Stefan Oswald. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
