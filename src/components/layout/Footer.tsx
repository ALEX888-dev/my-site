import { Instagram, Mail, Phone } from "lucide-react";
import { EMAIL, EMAIL_HREF, INSTAGRAM_URL, PHONE, PHONE_HREF } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Alina — Social Media Manager & Content Creator</p>
        <p>Based in Vienna, Austria · Available across Europe</p>
        <div className="flex items-center gap-3">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-white transition"><Instagram className="h-4 w-4" /></a>
          <a href={EMAIL_HREF} aria-label={`Email ${EMAIL}`} className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-white transition"><Mail className="h-4 w-4" /></a>
          <a href={PHONE_HREF} aria-label={`Call ${PHONE}`} className="h-9 w-9 rounded-full glass flex items-center justify-center hover:bg-white transition"><Phone className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
