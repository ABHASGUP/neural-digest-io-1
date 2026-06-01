import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to="/article/$slug"
      params={{ slug: article.slug }}
      className="group block"
    >
      <article className="flex flex-col gap-6">
        <div className="aspect-[16/10] overflow-hidden rounded-lg bg-muted">
          <img
            src={article.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="font-medium uppercase tracking-wider text-accent">
            {article.category}
          </span>
          <span>·</span>
          <span>{article.date}</span>
        </div>
        <h3 className="font-serif text-2xl leading-tight text-foreground transition-colors group-hover:text-accent">
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <p className="text-xs text-muted-foreground">
          By {article.author} · {article.readTime}
        </p>
      </article>
    </Link>
  );
}
