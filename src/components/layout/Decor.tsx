import decorSilk from "@/assets/decor-silk.jpg.asset.json";
import decorFlorals from "@/assets/decor-florals.jpg.asset.json";
import decorMarble from "@/assets/decor-marble.jpg.asset.json";

export function Decor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <img src={decorSilk.url} alt="" className="absolute -top-32 -left-40 h-[70vh] w-[70vh] object-cover rounded-full opacity-40 mix-blend-multiply animate-float-slow" />
      <img src={decorFlorals.url} alt="" className="absolute top-[35%] -right-40 h-[75vh] w-[75vh] object-cover rounded-full opacity-30 mix-blend-multiply animate-float-slow" style={{ animationDelay: "-3s" }} />
      <img src={decorMarble.url} alt="" className="absolute bottom-[-20%] left-1/4 h-[70vh] w-[70vh] object-cover rounded-full opacity-25 mix-blend-multiply animate-float-slow" style={{ animationDelay: "-6s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-background)_100%)]" />
    </div>
  );
}
