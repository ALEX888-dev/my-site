import { SectionTitle } from "@/components/common/SectionTitle";
import { WHY } from "@/data/content";

export function WhyMe() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Why clients choose me" title={<>The details that make it <em className="italic text-gold-gradient">feel expensive</em>.</>} />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {WHY.map(({ icon: Icon, t }) => (
            <div key={t} className="group relative rounded-3xl glass p-6 text-center shadow-[var(--shadow-soft)] hover:-translate-y-1 transition">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blush to-champagne">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-4 text-sm font-medium">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
