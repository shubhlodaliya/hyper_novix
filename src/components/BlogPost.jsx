import { useParams, Link } from "react-router-dom";
import posts from "@/data/posts";

export function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Post not found</h2>
          <div className="mt-4">
            <Link to="/blog" className="text-neon-cyan">Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Blog Article
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.6fr_0.8fr] lg:items-start">
            <article className="glass glow-border rounded-3xl p-7 sm:p-8">
              <div className="text-xs uppercase tracking-[0.25em] text-neon-cyan">{post.date}</div>
              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{post.title}</h1>
              <p className="mt-4 text-muted-foreground">
                Premium insights, practical recommendations and a polished reading
                experience aligned with the HyperNovix brand.
              </p>

              <div
                className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-8 rounded-2xl bg-gradient-primary/10 p-5">
                <h2 className="text-lg font-semibold">Why this matters</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Strong content improves authority, keeps users engaged and makes
                  the whole website feel more premium and complete.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/blog" className="text-neon-cyan">← Back to articles</Link>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="glass rounded-3xl p-6">
                <h3 className="text-lg font-semibold">Quick Summary</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Concise, structured content for readers who want the key takeaways fast.
                </p>
              </div>

              <div className="glass rounded-3xl p-6">
                <h3 className="text-lg font-semibold">Topics Covered</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Strategy and best practices</li>
                  <li>• Premium UI/UX guidance</li>
                  <li>• Scalable implementation tips</li>
                </ul>
              </div>

              <div className="glass rounded-3xl p-6">
                <h3 className="text-lg font-semibold">Need something similar?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We can create a similar article for your brand, services or case study.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
