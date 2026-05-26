import { MessageSquare, Map, Palette, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  { n: "01", t: "Discussion", d: "We listen, ask hard questions and align on outcomes.", Icon: MessageSquare, stat: "Kickoff in 48h" },
  { n: "02", t: "Planning", d: "Scope, architecture and roadmap mapped end-to-end.", Icon: Map, stat: "Clear roadmap" },
  { n: "03", t: "Design", d: "Pixel-perfect, accessible interfaces and brand systems.", Icon: Palette, stat: "Figma · Design System" },
  { n: "04", t: "Development", d: "Clean, scalable code shipped in tight iterations.", Icon: Code2, stat: "Weekly releases" },
  { n: "05", t: "Testing", d: "QA, performance and security baked into every release.", Icon: ShieldCheck, stat: "99.9% uptime" },
  { n: "06", t: "Launch", d: "Go-live with monitoring, support and iteration plans.", Icon: Rocket, stat: "24/7 support" },
];

export function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">
            A process that <span className="text-gradient">moves</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six precise stages, each one engineered for momentum.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neon-purple/50 to-transparent md:block" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`reveal relative grid items-center gap-6 md:grid-cols-2 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}>
                  <div className="text-sm font-mono text-neon-cyan">{s.n}</div>
                  <h3 className="mt-2 text-2xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-primary shadow-glow md:block" />
                  <div className="glass glow-border group mx-auto h-40 max-w-sm overflow-hidden rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1">
                    <div className="relative flex h-full items-center gap-4 rounded-xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 p-5">
                      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
                      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow transition-transform duration-500 group-hover:scale-110">
                        <s.Icon className="h-8 w-8 text-white" strokeWidth={1.6} />
                      </div>
                      <div className="relative">
                        <div className="text-xs font-mono uppercase tracking-widest text-neon-cyan">Stage {s.n}</div>
                        <div className="mt-1 text-lg font-semibold">{s.t}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{s.stat}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
