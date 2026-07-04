import { createFileRoute } from "@tanstack/react-router";
import alina1 from "@/assets/alina-1.jpg.asset.json";

import { Decor } from "@/components/layout/Decor";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FloatingBookButton } from "@/components/layout/FloatingBookButton";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyMe } from "@/components/sections/WhyMe";
import { VideoPortfolio } from "@/components/sections/VideoPortfolio";
import { Clients } from "@/components/sections/Clients";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { Certificates } from "@/components/sections/Certificates";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Alina Kaplia — Luxury Social Media Manager, Vienna" },
      { name: "description", content: "Premium social media management, content creation, reels and feed design for beauty, lifestyle and personal brands in Vienna and across Europe." },
      { property: "og:title", content: "Alina Kaplia — Luxury Social Media Manager, Vienna" },
      { property: "og:description", content: "Aesthetic content that converts. Vienna based, working across Europe." },
      { property: "og:image", content: alina1.url },
      { name: "twitter:image", content: alina1.url },
    ],
  }),
});

function HomePage() {
  return (
    <main className="relative min-h-screen surface-blush overflow-x-hidden text-foreground">
      <Decor />
      <Nav />
      <Hero />
      <About />
      <Services />
      <WhyMe />
      <VideoPortfolio />
      <Clients />
      <BeforeAfter />
      <Testimonials />
      <Certificates />
      <Pricing />
      <Contact />
      <Footer />
      <FloatingBookButton />
    </main>
  );
}
