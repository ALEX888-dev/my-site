import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/data/site";

export function FloatingBookButton() {
  return (
    <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.03] transition">
      <Instagram className="h-4 w-4" /> Book
    </a>
  );
}
