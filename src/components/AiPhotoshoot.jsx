import { useMemo, useState } from "react";
import { Camera, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/use-reveal";

const img = (name) => new URL(`../assets/img/${name}`, import.meta.url).href;

const jewelryImages = [
  "a1.jpeg",
  "a3.jpeg",
  "a4.jpeg",
  "a5.jpeg",
  "a6.jpeg",
  "b1.jpeg",
  "b2.jpeg",
  "b4.jpeg",
  "b5.jpeg",
  "b6.jpeg",
  "b8.jpeg",
  "b9.jpeg",
  "c1.jpeg",
  "c2.jpeg",
  "c3.jpeg",
  "d1.jpeg",
  "d6.jpeg",
  "d8.jpeg",
  "e1.jpeg",
  "e3.jpeg",
].map(img);

const realEstateImages = [
  "demo 200.png",
  "demo 201.png",
  "demo 202.png",
  "demo 203.png",
  "demo 204.png",
  "demo 205.png",
  "demo 206.png",
].map(img);

const fashionImages = [
  "WhatsApp Image 2026-05-26 at 12.28.36 PM.jpeg",
  "WhatsApp Image 2026-05-26 at 12.28.37 PM.jpeg",
  "WhatsApp Image 2026-05-26 at 12.28.38 PM.jpeg",
  "WhatsApp Image 2026-05-26 at 12.28.39 PM.jpeg",
  "WhatsApp Image 2026-05-26 at 12.28.40 PM.jpeg",
  "WhatsApp Image 2026-05-26 at 12.28.41 PM.jpeg",
].map(img);

const beautyImages = [
  "WhatsApp Image 2026-05-26 at 12.28.42 PM.jpeg",
  "WhatsApp Image 2026-05-26 at 12.28.43 PM.jpeg",
  "WhatsApp Image 2026-05-26 at 12.28.44 PM.jpeg",
  "WhatsApp Image 2026-05-26 at 12.28.45 PM.jpeg",
  "WhatsApp Image 2026-05-26 at 12.28.46 PM.jpeg",
  "WhatsApp Image 2026-05-26 at 12.28.47 PM.jpeg",
].map(img);

const fields = [
  {
    id: "jewelry",
    label: "Jewelry",
    caption: "Luxury product shots with cinematic light and premium detail.",
    images: jewelryImages,
  },
  {
    id: "real-estate",
    label: "Real Estate",
    caption: "Architectural scenes that sell the space before the tour.",
    images: realEstateImages,
  },
  {
    id: "fashion",
    label: "Fashion",
    caption: "Editorial looks, high-contrast styling, and bold compositions.",
    images: fashionImages,
  },
  {
    id: "beauty",
    label: "Cosmetics",
    caption: "Texture-forward beauty shots with glowing, refined skin tones.",
    images: beautyImages,
  },
];

export function AiPhotoshoot() {
  useReveal();
  const [activeField, setActiveField] = useState(fields[0].id);
  const active = useMemo(
    () => fields.find((field) => field.id === activeField) ?? fields[0],
    [activeField]
  );

  return (
    <section className="relative overflow-hidden pb-28 pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,oklch(0.6_0.25_295/0.18),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,oklch(0.78_0.2_230/0.2),transparent_45%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Camera className="h-3.5 w-3.5 text-neon-cyan" />
              AI Photoshoot Samples
            </div>
            <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
              Product imagery that feels <span className="text-gradient">studio-perfect</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore curated samples across categories. Each set is designed to match
              the HyperNovix color language while spotlighting premium, AI-crafted visuals.
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-4">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured</div>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-base font-semibold">Jewelry Campaigns</div>
                <div className="text-sm text-muted-foreground">20 premium samples ready</div>
              </div>
            </div>
            <Link
              to="/"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>

        <div className="reveal mt-12 flex flex-wrap gap-3">
          {fields.map((field) => (
            <button
              key={field.id}
              type="button"
              onClick={() => setActiveField(field.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                activeField === field.id
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {field.label}
            </button>
          ))}
        </div>

        <div className="reveal mt-10 rounded-3xl glass glow-border p-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">{active.label} Samples</h2>
              <p className="mt-2 text-sm text-muted-foreground">{active.caption}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
              <span className="text-neon-cyan">{active.images.length}</span>
              <span className="text-muted-foreground">images in this set</span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {active.images.map((src, index) => (
              <article
                key={`${active.id}-${index}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-background/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <img
                  src={src}
                  alt={`${active.label} sample ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 text-xs uppercase tracking-widest text-white/80">
                  <span>{active.label}</span>
                  <span>AI</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
