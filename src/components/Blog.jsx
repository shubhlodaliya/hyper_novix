import { Link } from "react-router-dom";
import posts from "@/data/posts";

export function Blog() {
  return (
    <div className="relative min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Blog
          </div>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Insights & Articles</h1>
          <p className="mt-4 text-muted-foreground">Thoughts on product design, AI and creative engineering.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="glass glow-border group relative overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/60 to-transparent" />
              <div className="text-xs text-muted-foreground">{p.date}</div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <div className="mt-5">
                <Link to={`/blog/${p.slug}`} className="text-sm font-semibold text-neon-cyan">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
