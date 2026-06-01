import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-serif text-lg">
            P
          </div>
          <span className="font-serif text-xl tracking-tight">Prism AI</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
          <Link to="/" className="hover:text-foreground transition-colors">
            Latest
          </Link>
          <a href="/#subscribe" className="hover:text-foreground transition-colors">
            Subscribe
          </a>
          <Link to="/admin" className="hover:text-foreground transition-colors">
            Admin
          </Link>
        </nav>
        <a
          href="/#subscribe"
          className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Subscribe
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-6">
        <p className="font-serif text-base text-foreground">Prism AI</p>
        <p>© {new Date().getFullYear()} Prism AI. Signal over noise.</p>
      </div>
    </footer>
  );
}
