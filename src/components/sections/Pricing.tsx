import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PLANS } from "@/data/content";
import { INSTAGRAM_URL } from "@/data/site";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Investment" title={<>Packages crafted for <em className="italic text-gold-gradient">every stage</em>.</>} sub="Monthly retainers, in Euro. Custom packages available on request." />
        <div className="mt-16 grid lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-[2rem] p-8 shadow-[var(--shadow-soft)] transition ${p.highlight ? "bg-primary text-primary-foreground scale-[1.02] shadow-[var(--shadow-glow)] ring-1 ring-blush-deep/40" : "glass"}`}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blush-deep via-nude to-blush-deep px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-primary shadow">
                  Most Popular
                </div>
              )}
              <p className={`text-xs uppercase tracking-[0.3em] ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.tag}</p>
              <h3 className="mt-3 font-serif text-3xl">{p.name}</h3>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-6xl">€{p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/ month</span>
              </div>
              <ul className={`mt-8 space-y-3 text-sm ${p.highlight ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                {p.items.map((it) => (
                  <li key={it} className="flex gap-3"><span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${p.highlight ? "bg-white/80" : "bg-blush-deep"}`} />{it}</li>
                ))}
              </ul>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
                className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm transition ${p.highlight ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-primary-foreground hover:opacity-90"}`}>
                Book Now <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
