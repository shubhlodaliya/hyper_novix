import { Cpu, Gauge, Wand2, LayoutGrid, TrendingUp, Headphones } from "lucide-react";

const items = [
  { i: Cpu, t: "Modern Technologies", d: "We ship on the latest, battle-tested stacks." },
  { i: Gauge, t: "Fast Development", d: "Velocity without sacrificing quality." },
  { i: Wand2, t: "AI-Powered Creativity", d: "Generative tooling baked into every workflow." },
  { i: LayoutGrid, t: "Professional UI/UX", d: "Design systems that scale with your brand." },
  { i: TrendingUp, t: "Scalable Solutions", d: "Architecture built for tomorrow's load." },
  { i: Headphones, t: "Dedicated Support", d: "A real team, on call when you need them." },
];

export function WhyUs() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Why teams <span className="text-gradient">choose HyperNovix</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            The right blend of engineering rigor, design taste and AI fluency.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="reveal glass relative overflow-hidden rounded-3xl p-7 transition-all hover:shadow-glow"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl glass-strong">
                  <it.i className="h-5 w-5 text-neon-cyan" />
                </div>
                <h3 className="text-lg font-semibold">{it.t}</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
