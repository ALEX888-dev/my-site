const alina1 = { url: "/images/alina-1.jpg" };
const alina3 = { url: "/images/alina-3.jpg" };
import { SectionTitle } from "@/components/common/SectionTitle";

const TAGS = ["Vienna, Austria", "29", "3 yrs professional", "6+ yrs total"];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="About" title={<>A quiet obsession with <em className="italic text-gold-gradient">beautiful detail</em>.</>} />

        <div className="mt-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative animate-fade-up">
            <div className="relative aspect-[4/5] max-w-[440px] mx-auto lg:mx-0">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blush/70 via-nude/50 to-blush-deep/40 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] ring-1 ring-white/60 shadow-[var(--shadow-glow)]">
                <img src={alina1.url} alt="Alina in Vienna" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-8 glass rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)]">
                <p className="font-serif text-xl">Alina Kaplia</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Vienna · Content Creator</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/85 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="font-serif text-2xl text-foreground">Hi, I'm <em className="italic text-gold-gradient">Alina</em>.</p>
            <p>I'm 29, based in Vienna, and I've been officially working as a Social Media Manager and Content Creator for the past 3 years — with over 6 years of overall experience behind the lens.</p>
            <p>I create high-quality content using both smartphone and professional camera, working with businesses, beauty professionals, restaurants, and personal brands to build premium social media that converts followers into clients.</p>
            <p className="text-muted-foreground">Online across Europe. Offline in Vienna. Other European locations available upon request.</p>
            <div className="flex flex-wrap gap-2 pt-3">
              {TAGS.map((t) => (
                <span key={t} className="rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <figure className="mt-20 max-w-md mx-auto animate-fade-up">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/60 shadow-[var(--shadow-soft)]">
            <img src={alina3.url} alt="Portrait" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <figcaption className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center">Portrait · 2025</figcaption>
        </figure>
      </div>
    </section>
  );
}
