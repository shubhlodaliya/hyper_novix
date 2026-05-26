import { useEffect, useRef, useState } from "react";
import { Target, Rocket, Sparkles, Zap } from "lucide-react";

function Counter({ to, suffix = "" }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const step = (t) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return (
    <div ref={ref} className="text-4xl font-bold text-gradient-static sm:text-5xl">
      {n}{suffix}
    </div>
  );
}

const stats = [
  { v: 120, s: "+", l: "Projects Delivered" },
  { v: 98, s: "%", l: "Client Satisfaction" },
  { v: 35, s: "+", l: "Technologies Used" },
  { v: 200, s: "+", l: "Creative Solutions" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
              About HyperNovix
            </div>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              An innovation studio engineering <span className="text-gradient">the next era</span> of digital.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We're a multidisciplinary team of engineers, designers and AI researchers
              building scalable products for ambitious brands. From mobile experiences
              to bespoke AI systems, we obsess over craft, performance and impact.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-2xl p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                  <Target className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-semibold">Our Mission</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Empower brands with intelligent, beautifully engineered digital products.
                </p>
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                  <Rocket className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-semibold">Our Vision</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Become a global standard for AI-powered creative engineering.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-5">
            {stats.map((st) => (
              <div
                key={st.l}
                className="glass glow-border group relative overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
                <Zap className="h-6 w-6 text-neon-cyan" />
                <Counter to={st.v} suffix={st.s} />
                <div className="mt-2 text-sm text-muted-foreground">{st.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
