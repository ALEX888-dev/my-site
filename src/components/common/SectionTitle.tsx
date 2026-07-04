import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">{eyebrow}</p>
      <div className="mx-auto mt-3 h-px w-24 hairline" />
      <h2 className="mt-6 font-serif text-4xl sm:text-5xl text-balance">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-balance">{sub}</p>}
    </div>
  );
}
