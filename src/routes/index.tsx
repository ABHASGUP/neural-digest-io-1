import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { SubscribeForm } from "@/components/subscribe-form";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/articles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Signa — The daily briefing on artificial intelligence" },
      {
        name: "description",
        content:
          "Fast, trustworthy AI news. One place for the model launches, policy shifts, and research that actually matter.",
      },
      { property: "og:title", content: "Signa — The daily AI briefing" },
      {
        property: "og:description",
        content:
          "Fast, trustworthy AI news. One place for the model launches, policy shifts, and research that actually matter.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== featured.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              The daily AI briefing
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
              What matters in AI. Nothing else.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Skip the noise of twenty tabs. Signa distills the most important
              model launches, research, and policy moves into one focused brief —
              every morning.
            </p>
            <div className="mt-10">
              <SubscribeForm />
              <p className="mt-3 text-xs text-muted-foreground">
                Free. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 flex items-end justify-between border-b border-border pb-4">
          <h2 className="font-serif text-3xl">Today's lead story</h2>
        </div>
        <Link
          to="/article/$slug"
          params={{ slug: featured.slug }}
          className="group grid gap-8 md:grid-cols-2 md:gap-12"
        >
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
            <img
              src={featured.image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-medium uppercase tracking-wider text-accent">
                {featured.category}
              </span>
              <span>·</span>
              <span>{featured.date}</span>
            </div>
            <h3 className="font-serif text-3xl leading-tight text-foreground transition-colors group-hover:text-accent sm:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              By {featured.author} · {featured.readTime}
            </p>
          </div>
        </Link>
      </section>

      {/* Latest */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-10 flex items-end justify-between border-b border-border pb-4">
          <h2 className="font-serif text-3xl">Latest</h2>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            Updated daily
          </span>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* Subscribe block */}
      <section id="subscribe" className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl text-primary-foreground sm:text-5xl">
              Get the brief in your inbox.
            </h2>
            <p className="mt-4 text-base leading-relaxed opacity-80">
              Five minutes. Once a day. Everything worth knowing in AI.
            </p>
            <div className="mt-8 flex justify-center">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
