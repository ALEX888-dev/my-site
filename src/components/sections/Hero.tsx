import { ArrowUpRight, Camera, Film, Instagram, Phone, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg-luxury.jpg.asset.json";
import { INSTAGRAM_URL } from "@/data/site";

const STATS = [["6+", "Years exp."], ["3", "Years pro"], ["EU", "Available"]] as const;

export function Hero() {
  return (
    <section id="top" className="relative pt-40 sm:pt-48 pb-24 sm:pb-36 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 flex items-center justify-center">
        <img src={heroBg.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center animate-fade-up relative">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5" />
          Vienna · Europe
        </div>
        <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
          Luxury <em className="italic text-gold-gradient">Social Media</em> Management
          <span className="block">& Content Creation</span>
        </h1>
        <p className="mt-7 mx-auto max-w-xl text-lg text-muted-foreground text-balance">
          Helping brands grow through aesthetic content, strategy and creative storytelling.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 relative">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition">
            <Instagram className="h-4 w-4" /> Book via Instagram
          </a>
          <a href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm text-foreground hover:bg-white transition">
            View Portfolio <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 relative">
          <div className="flex items-center justify-center gap-4 mb-6 text-muted-foreground/60">
            <Phone className="h-4 w-4" />
            <span className="h-px w-8 hairline" />
            <Camera className="h-4 w-4" />
            <span className="h-px w-8 hairline" />
            <Film className="h-4 w-4" />
          </div>
          <dl className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {STATS.map(([k, v]) => (
              <div key={v}>
                <dt className="font-serif text-3xl text-gold-gradient">{k}</dt>
                <dd className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
