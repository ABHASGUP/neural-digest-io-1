import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { SubscribeForm } from "@/components/subscribe-form";
import { getArticle, articles } from "@/lib/articles";

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — Signa` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:image", content: loaderData.article.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-serif text-5xl">Article not found</h1>
        <p className="mt-4 text-muted-foreground">
          We couldn't find what you were looking for.
        </p>
        <Link to="/" className="mt-8 inline-block text-accent hover:underline">
          ← Back to homepage
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl">Something went wrong</h1>
        <button
          onClick={reset}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-20">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← All stories
        </Link>

        <div className="mt-8">
          <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-medium uppercase tracking-wider text-accent">
              {article.category}
            </span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl leading-[1.12] text-foreground sm:text-5xl md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {article.excerpt}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">By {article.author}</p>
        </div>

        <div className="my-10 aspect-[16/9] overflow-hidden rounded-lg bg-muted">
          <img
            src={article.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="article-prose">
          {article.content.map((block: string, i: number) =>
            block.startsWith("## ") ? (
              <h2 key={i} className="font-serif">
                {block.slice(3)}
              </h2>
            ) : (
              <p key={i}>{block}</p>
            ),
          )}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-card p-8">
          <h3 className="font-serif text-2xl">Stay ahead of AI</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Get our daily brief — the stories that matter, in five minutes.
          </p>
          <div className="mt-5">
            <SubscribeForm />
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-6xl border-t border-border px-4 py-16 sm:px-6">
        <h2 className="mb-8 font-serif text-2xl">Keep reading</h2>
        <div className="grid gap-12 sm:grid-cols-3">
          {related.map((a) => (
            <Link
              key={a.slug}
              to="/article/$slug"
              params={{ slug: a.slug }}
              className="group block"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-muted">
                <img
                  src={a.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-accent">
                {a.category}
              </p>
              <h3 className="mt-2 font-serif text-lg leading-snug group-hover:text-accent">
                {a.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
