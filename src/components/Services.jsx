import {
  Smartphone, Globe, Brain, Sparkles, Camera, Palette, Bot, Code2, Layers, ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Smartphone, t: "Mobile App Development", d: "Native and cross-platform apps engineered for scale, speed and delight." },
  { icon: Globe, t: "Website Development", d: "High-performance, SEO-optimized websites built with modern stacks." },
  { icon: Brain, t: "AI Model Development", d: "Custom ML & deep learning models tailored to your business problem." },
  { icon: Sparkles, t: "AI Brand Visuals", d: "Generative visual systems and campaign assets that turn heads." },
  { icon: Camera, t: "AI Photoshoots", d: "Studio-grade AI photography for products, fashion and lifestyle brands.", href: "/ai-photoshoot" },
  { icon: Palette, t: "UI / UX Design", d: "Research-led product design with pixel-perfect, accessible interfaces." },
  { icon: Bot, t: "AI Automation", d: "Intelligent workflows and agents that compress hours into seconds." },
  { icon: Code2, t: "Custom Software", d: "Bespoke platforms, dashboards and integrations built end-to-end." },
  { icon: Layers, t: "Digital Transformation", d: "Re-architect legacy systems into modern, AI-native experiences." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Layers className="h-3.5 w-3.5 text-neon-cyan" />
            What We Do
          </div>
          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Services built for the <span className="text-gradient">AI-first era</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete creative and engineering arsenal — from idea to launch and beyond.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.t} className="reveal" style={{ transitionDelay: `${i * 40}ms` }}>
              {s.href ? (
                <Link
                  to={s.href}
                  className="group glass glow-border relative block overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-purple"
                >
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                      <s.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan">
                      View samples
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              ) : (
                <div className="group glass glow-border relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-purple">
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                      <s.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
