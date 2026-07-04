import { ArrowUpRight, Instagram, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { EMAIL, EMAIL_HREF, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE, PHONE_HREF } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] glass p-10 sm:p-14 shadow-[var(--shadow-glow)]">
          <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/45 to-white/75" />
          <div aria-hidden className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blush-deep/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blush/50 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Let's create</p>
              <h2 className="mt-4 font-serif text-5xl leading-tight">Ready to make your brand <em className="italic text-gold-gradient">unforgettable</em>?</h2>
              <p className="mt-5 text-muted-foreground flex items-center gap-2"><MapPin className="h-4 w-4" /> Based in Vienna · Available across Europe</p>
            </div>
            <div className="grid gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl bg-primary px-6 py-4 text-primary-foreground hover:opacity-90 transition">
                <span className="flex items-center gap-3"><Instagram className="h-5 w-5" /> Book on Instagram</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href={PHONE_HREF} className="group flex items-center justify-between rounded-2xl glass px-6 py-4 hover:bg-white transition">
                <span className="flex items-center gap-3"><Phone className="h-5 w-5" /> {PHONE}</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href={EMAIL_HREF} className="group flex items-center justify-between rounded-2xl glass px-6 py-4 hover:bg-white transition">
                <span className="flex items-center gap-3"><Mail className="h-5 w-5" /> {EMAIL}</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl glass px-6 py-4 hover:bg-white transition">
                <span className="flex items-center gap-3"><Instagram className="h-5 w-5" /> {INSTAGRAM_HANDLE}</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <p className="relative mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5" /> Discreet · Reliable · Premium communication
          </p>
        </div>
      </div>
    </section>
  );
}
