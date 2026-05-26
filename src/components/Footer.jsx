import { Sparkles, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border/50 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">
              Hyper<span className="text-gradient-static">Novix</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A digital innovation studio building future-ready apps, AI systems and brand experiences.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Linkedin, Instagram, Github].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="glass glow-border flex h-10 w-10 items-center justify-center rounded-xl transition-transform hover:-translate-y-1 hover:shadow-glow"
              >
                <I className="h-4 w-4 text-foreground" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Company</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#work" className="hover:text-foreground">Work</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Shubh Lodaliya · +91 76220 20224</li>
            <li>Kunj Virani · +91 93284 58858</li>
            <li>hello@hypernovix.com</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} HyperNovix. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
