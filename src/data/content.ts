import {
  Instagram, Camera, Film, PenLine, LayoutGrid, CalendarCheck, Lightbulb,
  Gauge, Workflow, Heart, Award, MessageCircle, Clock, Sparkles,
} from "lucide-react";

export const REELS = [
{ src: "/videos/reel-1.mov", poster: "/images/reel-1-poster.png" },
{ src: "/videos/reel-2.mov", poster: "/images/reel-2-poster.png" },
{ src: "/videos/reel-3.mp4", poster: "/images/reel-3-poster.png" },
{ src: "/videos/reel-4.mp4", poster: "/images/reel-4-poster.png" },
];
export type Reel = (typeof REELS)[number];

export const CLIENTS = [
  {
    name: "little garden",
    handle: "@littlegarden_fi",
    tag: "Café & Restaurant",
    note: "Built the visual identity from day one — cohesive editorial feed, on-brand reels, warm color story.",
    shots: ["/images/littlegarden-1.jpg", "/images/littlegarden-2.jpg"],
  },
  {
    name: "oishii",
    handle: "@oishii_wiener",
    tag: "Japanese Kitchen",
    note: "Long-term partner from launch — art-directed grid, cinematic food reels, elevated Japanese aesthetic.",
    shots: ["/images/oishii-1.jpg", "/images/oishii-2.jpg"],
  },
];

export const BEFORE_AFTER = [
  { before: "/images/ba-realestate-before.jpg", after: "/images/ba-realestate-after.jpg", title: "Real Estate Brand", note: "From scattered listings to a cohesive editorial feed." },
  { before: "/images/ba-auto-before.jpg", after: "/images/ba-auto-after.jpg", title: "Automotive Showroom", note: "Chaotic grid restructured into a premium visual story." },
  { before: "/images/ba-lifestyle-before.jpg", after: "/images/ba-lifestyle-after.jpg", title: "Lifestyle Personal Brand", note: "A curated aesthetic with consistent tone and color." },
];

export const CERTIFICATES = [
  { src: "/images/cert-producer.jpeg", title: "Producer Certificate", issuer: "Department of Aesthetics — Polina Podpletennaya", date: "12.12.2022" },
  { src: "/images/cert-content-creator.jpeg", title: "Content Creator Certificate", issuer: "Department of Aesthetics — Polina Podpletennaya", date: "12.12.2022" },
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
