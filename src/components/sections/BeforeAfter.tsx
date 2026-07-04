import { SectionTitle } from "@/components/common/SectionTitle";
import { BEFORE_AFTER } from "@/data/content";

function BeforeAfterCard({ before, after, title, note }: {
  before: string; after: string; title: string; note: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <figure className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-white/60 shadow-[var(--shadow-soft)] bg-muted">
          <img src={before} alt={`${title} — before`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <figcaption className="absolute top-3 left-3 rounded-full bg-black/55 text-white backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.25em]">Before</figcaption>
        </figure>
        <figure className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-white/60 shadow-[var(--shadow-glow)] bg-muted">
          <img src={after} alt={`${title} — after`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <figcaption className="absolute top-3 left-3 rounded-full bg-white/85 text-primary backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.25em]">After</figcaption>
        </figure>
      </div>
      <div className="px-1">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Case study</p>
        <h3 className="mt-1 font-serif text-2xl">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{note}</p>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Before / After"
          title={<>The <em className="italic text-gold-gradient">transformation</em>.</>}
          sub="Left: how it looked. Right: how it feels now."
        />
        <div className="mt-14 grid sm:grid-cols-2 gap-10 lg:gap-12">
          {BEFORE_AFTER.map((c) => (
            <BeforeAfterCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
