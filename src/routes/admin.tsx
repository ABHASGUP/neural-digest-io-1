import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { SignaMark } from "@/components/brand-logo";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Signa" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="hidden w-60 shrink-0 border-r border-border bg-sidebar md:block">
          <div className="flex h-16 items-center gap-2 border-b border-border px-5">
            <SignaMark className="h-5 w-5 text-accent" />
            <span className="font-serif text-base">Signa Admin</span>
          </div>
          <nav className="flex flex-col gap-1 p-3 text-sm">
            <AdminLink to="/admin">Dashboard</AdminLink>
            <AdminLink to="/admin/articles">Articles</AdminLink>
            <AdminLink to="/admin/subscribers">Subscribers</AdminLink>
            <AdminLink to="/admin/settings">Settings</AdminLink>
          </nav>
        </aside>

        <main className="flex-1">
          <header className="flex h-16 items-center justify-between border-b border-border px-6">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                ← Back to site
              </Link>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Admin
                </p>
                <h1 className="font-serif text-xl">Content management</h1>
              </div>
            </div>
            <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90">
              + New article
            </button>
          </header>
          <div className="p-6 sm:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

function AdminLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: true }}
      className="rounded-md px-3 py-2 text-muted-foreground hover:bg-accent/5 hover:text-foreground"
      activeProps={{ className: "bg-secondary text-foreground font-medium" }}
    >
      {children}
    </Link>
  );
}
