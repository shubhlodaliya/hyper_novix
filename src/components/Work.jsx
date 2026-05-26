import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  { t: "Nebula Banking App", c: "FinTech · Mobile", tag: "iOS / Android", grad: "from-neon-blue/40 to-neon-purple/40" },
  { t: "Aurora E-Commerce", c: "Retail · Web Platform", tag: "Next.js", grad: "from-neon-purple/40 to-neon-cyan/40" },
  { t: "Lumen AI Brand Suite", c: "AI · Brand Visuals", tag: "Generative", grad: "from-neon-cyan/40 to-neon-blue/40" },
  { t: "Vertex Analytics", c: "SaaS · Dashboard", tag: "Custom Software", grad: "from-neon-blue/30 to-neon-purple/50" },
  { t: "Glow Studio Shoot", c: "AI Photoshoot · Fashion", tag: "Visual AI", grad: "from-neon-purple/40 to-neon-blue/30" },
  { t: "Atlas Automation", c: "AI Agents · Workflow", tag: "Automation", grad: "from-neon-cyan/40 to-neon-purple/40" },
];

export function Work() {
  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
              Selected Work
            </div>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Crafted with <span className="text-gradient">obsession</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A glimpse into recent products and visual systems we've shipped for clients across the globe.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.t}
              className="reveal group relative aspect-[4/5] overflow-hidden rounded-3xl glass glow-border transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.grad} opacity-80`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.15),transparent_50%)]" />
              {/* mock content */}
              <div className="absolute inset-6 rounded-2xl border border-white/10 bg-background/30 backdrop-blur-md p-5 transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-neon-cyan" />
                  <div className="h-2 w-2 rounded-full bg-neon-purple" />
                  <div className="h-2 w-2 rounded-full bg-neon-blue" />
                </div>
                <div className="mt-6 space-y-2">
                  <div className="h-2 w-3/4 rounded bg-white/20" />
                  <div className="h-2 w-1/2 rounded bg-white/15" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="h-12 rounded-lg bg-white/10" />
                  <div className="h-12 rounded-lg bg-gradient-primary opacity-80" />
                  <div className="h-12 rounded-lg bg-white/10" />
                </div>
                <div className="mt-4 h-20 rounded-lg bg-white/5" />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/70">{p.tag}</div>
                  <div className="mt-1 text-lg font-semibold text-white">{p.t}</div>
                  <div className="text-sm text-white/70">{p.c}</div>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full glass-strong transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5 text-foreground" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
