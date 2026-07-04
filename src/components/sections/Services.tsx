import { SectionTitle } from "@/components/common/SectionTitle";
import { SERVICES } from "@/data/content";

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Services" title={<>Everything your brand needs, <em className="italic text-gold-gradient">beautifully done</em>.</>} />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group relative overflow-hidden rounded-3xl glass p-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blush to-champagne text-primary shadow-inner">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="mt-6 h-px hairline opacity-60" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
