import { Quote, Star } from "lucide-react";

const items = [
  { n: "Aarav Mehta", r: "Founder, Nebula Finance", q: "HyperNovix shipped our app faster than any agency we've worked with — and it actually felt premium." },
  { n: "Sophie Carter", r: "CMO, Aurora Retail", q: "Their AI brand visuals transformed our campaigns. Conversion lifted 38% in the first month." },
  { n: "Rohit Sharma", r: "CTO, Vertex SaaS", q: "World-class engineering. They architected a platform that scales effortlessly with us." },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Loved by <span className="text-gradient">ambitious teams</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={t.n}
              className="reveal glass glow-border relative overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-2"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <Quote className="h-8 w-8 text-neon-purple/70" />
              <p className="mt-4 text-foreground/90">"{t.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary font-semibold text-primary-foreground">
                  {t.n.split(" ").map(p => p[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-neon-cyan text-neon-cyan" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
