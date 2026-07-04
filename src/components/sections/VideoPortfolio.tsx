import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X, ZoomIn, ZoomOut } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { REELS, type Reel } from "@/data/content";

export function VideoPortfolio() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Video portfolio" title={<>Selected <em className="italic text-gold-gradient">reels</em>.</>} sub="Click any tile to open the cinematic viewer — zoom, play with sound, swipe between reels." />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {REELS.map((r, i) => (
            <button key={r.src} onClick={() => setOpenIdx(i)}
              className="group relative aspect-[9/16] overflow-hidden rounded-3xl ring-1 ring-white/60 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition">
              <img src={r.poster} alt={`Reel ${i + 1} preview`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full glass ring-1 ring-white/70">
                  <Play className="h-5 w-5 translate-x-[1px] fill-current" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.2em] text-white/90">Reel 0{i + 1}</div>
            </button>
          ))}
        </div>
      </div>
      {openIdx !== null && (
        <VideoLightbox items={REELS} index={openIdx} onClose={() => setOpenIdx(null)} onIndex={setOpenIdx} />
      )}
    </section>
  );
}

function VideoLightbox({ items, index, onClose, onIndex }: {
  items: Reel[]; index: number; onClose: () => void; onIndex: (i: number) => void;
}) {
  const [zoom, setZoom] = useState(1);
  const touchX = useRef<number | null>(null);
  const prev = useCallback(() => { setZoom(1); onIndex((index - 1 + items.length) % items.length); }, [index, items.length, onIndex]);
  const next = useCallback(() => { setZoom(1); onIndex((index + 1) % items.length); }, [index, items.length, onIndex]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, prev, next]);
  return (
    <div className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-xl flex items-center justify-center animate-fade-up"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (dx > 50) prev(); else if (dx < -50) next();
        touchX.current = null;
      }}>
      <button onClick={onClose} aria-label="Close" className="absolute top-5 right-5 h-11 w-11 rounded-full glass flex items-center justify-center text-white"><X className="h-5 w-5" /></button>
      <div className="absolute top-5 left-5 flex gap-2">
        <button onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))} className="h-11 w-11 rounded-full glass flex items-center justify-center text-white" aria-label="Zoom in"><ZoomIn className="h-5 w-5" /></button>
        <button onClick={() => setZoom((z) => Math.max(1, z - 0.25))} className="h-11 w-11 rounded-full glass flex items-center justify-center text-white" aria-label="Zoom out"><ZoomOut className="h-5 w-5" /></button>
      </div>
      <button onClick={prev} aria-label="Previous" className="hidden sm:flex absolute left-6 h-12 w-12 rounded-full glass items-center justify-center text-white"><ChevronLeft className="h-6 w-6" /></button>
      <button onClick={next} aria-label="Next" className="hidden sm:flex absolute right-6 h-12 w-12 rounded-full glass items-center justify-center text-white"><ChevronRight className="h-6 w-6" /></button>
      <div className="relative h-[85vh] aspect-[9/16] max-w-[92vw] rounded-3xl overflow-hidden ring-1 ring-white/20 shadow-2xl transition-transform duration-500"
        style={{ transform: `scale(${zoom})` }}>
        <video key={items[index].src} src={items[index].src} controls autoPlay playsInline
          className="h-full w-full object-cover bg-black" />
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {items.map((_, i) => (
          <span key={i} className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-1.5 bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
}
