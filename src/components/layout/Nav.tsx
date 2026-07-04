import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { INSTAGRAM_URL } from "@/data/site";

const LINKS = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  ["Pricing", "#pricing"],
  ["Contact", "#contact"],
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 sm:px-7 py-3 transition-all ${scrolled ? "glass shadow-[var(--shadow-soft)] mx-4 sm:mx-auto" : ""}`}>
        <a href="#top" className="font-serif text-lg tracking-wide">
          Alina<span className="text-gold-gradient"> Kaplia</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-foreground transition-colors">{label}</a>
          ))}
        </nav>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs uppercase tracking-[0.15em] text-primary-foreground hover:opacity-90 transition">
          Book <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}
