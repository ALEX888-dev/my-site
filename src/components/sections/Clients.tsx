import { SectionTitle } from "@/components/common/SectionTitle";
import { CLIENTS } from "@/data/content";

function ClientCard({ name, handle, tag, note, shots }: {
  name: string; handle: string; tag: string; note: string; shots: string[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {shots.map((s, i) => (
          <figure key={i} className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-white/60 shadow-[var(--shadow-soft)] bg-muted">
            <img src={s} alt={`${name} — feed ${i + 1}`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </figure>
        ))}
      </div>
      <div className="px-1">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{tag}</p>
        <h3 className="mt-1 font-serif text-2xl">{name} <span className="text-sm text-muted-foreground font-sans not-italic">{handle}</span></h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{note}</p>
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="Selected clients"
          title={<>Built from <em className="italic text-gold-gradient">day one</em>.</>}
          sub="Long-term collaborations where I shaped the visual identity from the very start."
        />
        <div className="mt-14 grid sm:grid-cols-2 gap-10 lg:gap-12">
          {CLIENTS.map((c) => (
            <ClientCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
