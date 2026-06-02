import { Link } from "@tanstack/react-router";
import { SignaMark } from "@/components/brand-logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Signa — home">
          <SignaMark className="h-5 w-5 text-accent" />
          <span className="font-serif text-xl tracking-tight">Signa</span>
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
        <div className="flex items-center gap-2 text-foreground">
          <SignaMark className="h-4 w-4 text-accent" />
          <p className="font-serif text-base">Signa</p>
        </div>
        <p>© {new Date().getFullYear()} Signa. Signal over noise.</p>
      </div>
    </footer>
  );
}
