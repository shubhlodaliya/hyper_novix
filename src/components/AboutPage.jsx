import { About } from "@/components/About";
import { Link } from "react-router-dom";
import { Sparkles, Smartphone, Globe, Brain, Palette, Cpu, Layers } from "lucide-react";

export function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28">
        <div className="reveal max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
            About HyperNovix
          </div>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Our Journey</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Founded with a passion for craft and impact, HyperNovix builds AI-first
            products, visual systems and design-led engineering for modern brands.
            We combine research, design and software to ship polished, production-ready
            solutions.
          </p>
        </div>

        <section className="mt-10 rounded-2xl bg-gradient-primary/10 p-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-semibold text-white">Our Journey</h2>
            <p className="mt-4 text-muted-foreground">
              From a small, focused team to a multidisciplinary studio, our growth
              is driven by curiosity, craft and client outcomes. We partner closely
              with product teams to turn ideas into measurable results.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <div className="reveal mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold">Our Expertise</h2>
            <p className="mt-3 text-muted-foreground">Services and capabilities we deliver end-to-end.</p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="glass rounded-2xl p-6">
              <div className="inline-flex items-center gap-3">
                <div className="rounded-lg bg-gradient-primary p-3"><Layers className="h-5 w-5 text-primary-foreground" /></div>
                <h3 className="text-lg font-semibold">Product Strategy</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Roadmaps, discovery and product design that align teams and accelerate outcomes.</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="inline-flex items-center gap-3">
                <div className="rounded-lg bg-gradient-primary p-3"><Smartphone className="h-5 w-5 text-primary-foreground" /></div>
                <h3 className="text-lg font-semibold">Mobile & Web Apps</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">High-performance, accessible applications for web and mobile.</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="inline-flex items-center gap-3">
                <div className="rounded-lg bg-gradient-primary p-3"><Globe className="h-5 w-5 text-primary-foreground" /></div>
                <h3 className="text-lg font-semibold">Web Platforms</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Scalable sites, e-commerce and SaaS platforms with strong UX and performance.</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="inline-flex items-center gap-3">
                <div className="rounded-lg bg-gradient-primary p-3"><Palette className="h-5 w-5 text-primary-foreground" /></div>
                <h3 className="text-lg font-semibold">UI / UX Design</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Design systems, interaction design and prototypes that scale with your brand.</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="inline-flex items-center gap-3">
                <div className="rounded-lg bg-gradient-primary p-3"><Cpu className="h-5 w-5 text-primary-foreground" /></div>
                <h3 className="text-lg font-semibold">AI & ML</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Applied machine learning and generative systems for automation and visuals.</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="inline-flex items-center gap-3">
                <div className="rounded-lg bg-gradient-primary p-3"><Brain className="h-5 w-5 text-primary-foreground" /></div>
                <h3 className="text-lg font-semibold">Cloud & Infrastructure</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Secure, scalable cloud architectures and integrations.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground">Empower brands with elegant, reliable technology and creative systems that move markets.</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground">Be the partner of choice for companies building AI-native products and immersive visuals.</p>
          </div>
        </section>

        <section className="mt-12">
          <div className="reveal text-center">
            <h2 className="text-2xl font-semibold">Our Clients & Work</h2>
            <p className="mt-2 text-sm text-muted-foreground">Selected case studies and partners we've worked with.</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="glass rounded-2xl p-6 text-center">Client Logo</div>
            <div className="glass rounded-2xl p-6 text-center">Client Logo</div>
            <div className="glass rounded-2xl p-6 text-center">Client Logo</div>
          </div>

          <div className="mt-6 text-center">
            <Link to="/" className="rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              View portfolio
            </Link>
          </div>
        </section>
      </div>

      <About />
    </div>
  );
}
