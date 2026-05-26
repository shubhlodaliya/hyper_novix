import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroOrb from "@/assets/hero-orb.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/4 h-[500px] w-[500px] rounded-full bg-neon-purple/30 blur-[120px] animate-glow-pulse" />
        <div
          className="absolute top-40 right-10 h-[400px] w-[400px] rounded-full bg-neon-blue/25 blur-[120px] animate-glow-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-0 left-10 h-[350px] w-[350px] rounded-full bg-neon-cyan/20 blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
            Next-Gen Digital & AI Studio
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Building <span className="text-gradient">Future-Ready</span>{" "}
            Digital Experiences
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            HyperNovix crafts powerful apps, websites, AI models and brand
            visuals that move modern companies forward — engineered with
            precision, designed with soul.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="glow-border inline-flex items-center gap-2 rounded-xl glass px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              <Play className="h-4 w-4 text-neon-cyan" />
              View Our Work
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "120+", l: "Projects" },
              { v: "98%", l: "Satisfaction" },
              { v: "40+", l: "Brands" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold text-gradient-static">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-square mx-auto max-w-[560px]">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-glow-pulse" />
            <div className="absolute inset-4 rounded-full border border-neon-blue/20 animate-spin-slow" />
            <div
              className="absolute inset-12 rounded-full border border-neon-purple/20"
              style={{ animation: "spin 30s linear infinite reverse" }}
            />
            <img
              src={heroOrb}
              alt="HyperNovix AI neural sphere"
              width={1536}
              height={1536}
              className="relative z-10 h-full w-full rounded-full object-cover animate-float"
              style={{ filter: "drop-shadow(0 0 80px oklch(0.6 0.25 295 / 0.5))" }}
            />
            {/* floating chips */}
            <div className="absolute -left-4 top-10 glass rounded-2xl px-4 py-3 animate-float">
              <div className="text-xs text-muted-foreground">AI Model</div>
              <div className="text-sm font-semibold text-foreground">99.4% accuracy</div>
            </div>
            <div
              className="absolute -right-4 bottom-16 glass rounded-2xl px-4 py-3 animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-xs text-muted-foreground">Latency</div>
              <div className="text-sm font-semibold text-foreground">42 ms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
