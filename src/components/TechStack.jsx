import { Cpu } from "lucide-react";

const techs = [
  "Flutter", "React", "Next.js", "Node.js", "Spring Boot", "Firebase",
  "MongoDB", "Python", "TensorFlow", "PyTorch", "Figma", "PostgreSQL",
  "TypeScript", "Docker", "AWS", "OpenAI",
];

export function TechStack() {
  return (
    <section id="tech" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Cpu className="h-3.5 w-3.5 text-neon-cyan" />
            Our Stack
          </div>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Powered by a <span className="text-gradient">modern stack</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            The frameworks, languages and AI tools that fuel our craft.
          </p>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent"
        />
        <div className="flex w-max gap-4" style={{ animation: "marquee 40s linear infinite" }}>
          {[...techs, ...techs].map((t, i) => (
            <div
              key={i}
              className="glass glow-border whitespace-nowrap rounded-2xl px-7 py-4 text-lg font-medium text-foreground/90"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
