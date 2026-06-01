import { createFileRoute } from "@tanstack/react-router";
import { articles } from "@/lib/articles";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const stats = [
    { label: "Published articles", value: articles.length.toString() },
    { label: "Drafts", value: "0" },
    { label: "Subscribers", value: "—" },
    { label: "Pageviews (7d)", value: "—" },
  ];

  return (
    <div className="space-y-10">
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-border bg-card p-5"
          >
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {s.label}
            </p>
            <p className="mt-2 font-serif text-3xl">{s.value}</p>
          </div>
        ))}
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between border-b border-border pb-3">
          <h2 className="font-serif text-2xl">Recent articles</h2>
          <span className="text-xs text-muted-foreground">
            Placeholder · publishing UI coming soon
          </span>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Author</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a) => (
                <tr key={a.slug} className="border-t border-border bg-card">
                  <td className="px-4 py-3 font-medium">{a.title}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a.category}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a.author}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a.date}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex rounded-full bg-secondary px-2 py-0.5 text-xs">
                      Published
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
