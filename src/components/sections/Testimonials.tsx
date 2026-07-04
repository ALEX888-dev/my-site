import { SectionTitle } from "@/components/common/SectionTitle";
import { TESTIMONIALS } from "@/data/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Kind words"
          title={<>What clients <em className="italic text-gold-gradient">say</em>.</>}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="relative rounded-3xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-[0_20px_60px_-30px_rgba(80,20,40,0.25)] p-8 flex flex-col"
            >
              <span aria-hidden className="absolute -top-4 left-6 text-6xl leading-none font-serif text-blush-deep/40 select-none">“</span>
              <blockquote className="text-[15px] leading-relaxed text-foreground/85 flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-blush-deep/15">
                <div className="font-serif text-lg text-accent-gradient">{t.author}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/60 mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
