import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { CERTIFICATES } from "@/data/content";

export function Certificates() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + CERTIFICATES.length) % CERTIFICATES.length)), []);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % CERTIFICATES.length)), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Certificates" title={<>Continuing <em className="italic">education</em>.</>} sub="Officially certified by the Department of Aesthetics." />
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {CERTIFICATES.map((c, i) => (
            <button
              key={c.src}
              onClick={() => setOpen(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl glass shadow-[var(--shadow-soft)] text-left"
            >
              <img src={c.src} alt={c.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.28em] opacity-80">{c.date}</p>
                <p className="mt-1 font-serif text-xl sm:text-2xl">{c.title}</p>
                <p className="text-xs opacity-85">{c.issuer}</p>
              </div>
              <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/85 backdrop-blur flex items-center justify-center text-foreground">
                <ZoomIn className="h-4 w-4" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          <button onClick={close} aria-label="Close" className="absolute top-5 right-5 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
            <X className="h-5 w-5" />
          </button>
          {CERTIFICATES.length > 1 && (
            <>
              <button onClick={prev} aria-label="Previous" className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} aria-label="Next" className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center">
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
          <figure className="max-w-[95vw] max-h-[90vh] flex flex-col items-center">
            <img src={CERTIFICATES[open].src} alt={CERTIFICATES[open].title} className="max-w-[95vw] max-h-[80vh] object-contain rounded-lg shadow-2xl" />
            <figcaption className="mt-4 text-center text-white/85">
              <p className="font-serif text-lg">{CERTIFICATES[open].title}</p>
              <p className="text-xs uppercase tracking-[0.24em] opacity-70 mt-1">{CERTIFICATES[open].issuer} · {CERTIFICATES[open].date}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
