import {
  Instagram, Camera, Film, PenLine, LayoutGrid, CalendarCheck, Lightbulb,
  Gauge, Workflow, Heart, Award, MessageCircle, Clock, Sparkles,
} from "lucide-react";

import reel1 from "@/assets/reel-1.mov.asset.json";
import reel2 from "@/assets/reel-2.mov.asset.json";
import reel3 from "@/assets/reel-3.mp4.asset.json";
import reel4 from "@/assets/reel-4.mp4.asset.json";
import reel1p from "@/assets/reel-1-poster.jpg.asset.json";
import reel2p from "@/assets/reel-2-poster.jpg.asset.json";
import reel3p from "@/assets/reel-3-poster.jpg.asset.json";
import reel4p from "@/assets/reel-4-poster.jpg.asset.json";
import clientLg1 from "@/assets/client-littlegarden-1.jpg.asset.json";
import clientLg2 from "@/assets/client-littlegarden-2.jpg.asset.json";
import clientOi1 from "@/assets/client-oishii-1.jpg.asset.json";
import clientOi2 from "@/assets/client-oishii-2.jpg.asset.json";
import ba1b from "@/assets/ba1-before.jpg.asset.json";
import ba1a from "@/assets/ba1-after.jpg.asset.json";
import ba2b from "@/assets/ba2-before.jpg.asset.json";
import ba2a from "@/assets/ba2-after.jpg.asset.json";
import ba3b from "@/assets/ba3-before.jpg.asset.json";
import ba3a from "@/assets/ba3-after.jpg.asset.json";
import certProducer from "@/assets/cert-producer.jpeg.asset.json";
import certCreator from "@/assets/cert-content-creator.jpeg.asset.json";

export const REELS = [
  { src: reel1.url, poster: reel1p.url },
  { src: reel2.url, poster: reel2p.url },
  { src: reel3.url, poster: reel3p.url },
  { src: reel4.url, poster: reel4p.url },
];
export type Reel = (typeof REELS)[number];

export const CLIENTS = [
  {
    name: "little garden",
    handle: "@littlegarden_fi",
    tag: "Café & Restaurant",
    note: "Built the visual identity from day one — cohesive editorial feed, on-brand reels, warm color story.",
    shots: [clientLg1.url, clientLg2.url],
  },
  {
    name: "oishii",
    handle: "@oishii_wiener",
    tag: "Japanese Kitchen",
    note: "Long-term partner from launch — art-directed grid, cinematic food reels, elevated Japanese aesthetic.",
    shots: [clientOi1.url, clientOi2.url],
  },
];

export const BEFORE_AFTER = [
  { before: ba1b.url, after: ba1a.url, title: "Real Estate Brand", note: "From scattered listings to a cohesive editorial feed." },
  { before: ba2b.url, after: ba2a.url, title: "Automotive Showroom", note: "Chaotic grid restructured into a premium visual story." },
  { before: ba3b.url, after: ba3a.url, title: "Lifestyle Personal Brand", note: "A curated aesthetic with consistent tone and color." },
];

export const CERTIFICATES = [
  { src: certProducer.url, title: "Producer Certificate", issuer: "Department of Aesthetics — Polina Podpletennaya", date: "12.12.2022" },
  { src: certCreator.url, title: "Content Creator Certificate", issuer: "Department of Aesthetics — Polina Podpletennaya", date: "12.12.2022" },
];

export const SERVICES = [
  { icon: Instagram, title: "Social Media Management", desc: "Instagram & TikTok, curated end-to-end." },
  { icon: LayoutGrid, title: "Feed Design", desc: "Cohesive, editorial grids that feel like a magazine." },
  { icon: CalendarCheck, title: "Content Planning", desc: "Monthly plans mapped to your brand goals." },
  { icon: Camera, title: "Content Shooting", desc: "Smartphone & professional camera on location." },
  { icon: Film, title: "Reels Production", desc: "Concept, shoot and edit — beginning to end." },
  { icon: Sparkles, title: "Story Creation", desc: "Daily stories that build a real audience." },
  { icon: PenLine, title: "Copywriting", desc: "Captions and hooks written to convert." },
  { icon: Workflow, title: "Content Strategy", desc: "Positioning, pillars, calendars, KPIs." },
  { icon: Lightbulb, title: "Creative Ideation", desc: "Fresh, on-brand ideas — never templated." },
];

export const WHY = [
  { icon: Gauge, t: "Speed of work" },
  { icon: Workflow, t: "Structured workflow" },
  { icon: Heart, t: "Personal approach" },
  { icon: Lightbulb, t: "Creative ideas" },
  { icon: Award, t: "Professional quality" },
  { icon: Sparkles, t: "Attention to detail" },
  { icon: MessageCircle, t: "Premium communication" },
  { icon: Clock, t: "Reliable deadlines" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Thank you for bringing a fresh perspective to our social media. Your aesthetic vision, attention to detail, and ability to create stylish, elegant content make every reel stand out. We're especially grateful for our latest reel reaching over 2 million views. It's been a pleasure working with you, and we truly appreciate your creativity and professionalism!",
    author: "Mein Kaviar Team",
    role: "Client",
  },
  {
    quote:
      "What truly sets Alina apart is her innate aesthetic sense and her ability to instantly understand how a personal brand, company, or product should be visually presented. She has a rare talent for creating visuals that perfectly reflect the essence and personality of a brand. I wholeheartedly recommend Alina to anyone looking to build a personal brand, develop a company's visual identity, or promote products in a beautiful and authentic way. Any client would be fortunate to work with her.",
    author: "Marina Wilson",
    role: "Client",
  },
  {
    quote:
      "Alina is a kind, responsive, and highly professional person — a true expert in her field. She always approached her work with great dedication and seriousness, met every deadline, and often delivered projects even earlier than agreed. During the entire time we worked together, I never experienced any issues or disappointments. If Alina promised something, it was always done — and done exceptionally well.",
    author: "Client",
    role: "Long-term collaboration",
  },
];

export const PLANS = [
  {
    name: "Light", price: 550, tag: "Entry",
    items: ["Content shooting — 1 day per month (2–3 hours)", "Feed creation from existing content", "5 Reels including editing", "1–2 Stories every day"],
  },
  {
    name: "Pro Aesthetic", price: 750, tag: "Most Popular", highlight: true,
    items: ["Content shooting twice a month (2–3 hours)", "Feed creation for the month", "2–3 Stories every day", "Up to 10 Reels per month"],
  },
  {
    name: "All Inclusive Aesthetic", price: 1000, tag: "Signature",
    items: ["Content shooting 3 times per month", "Feed creation", "Stories 4 times daily", "Up to 15 Reels including editing"],
  },
];
