import { useState } from "react";

export function SubscribeForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("ok");
    setEmail("");
  }

  if (status === "ok") {
    return (
      <p className="text-sm text-muted-foreground">
        Thanks — you're on the list. Look out for our next briefing.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex w-full gap-2 ${compact ? "" : "max-w-md"} flex-col sm:flex-row`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="h-11 flex-1 rounded-md border border-input bg-card px-4 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
      />
      <button
        type="submit"
        className="h-11 rounded-md bg-accent px-5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
      >
        Subscribe
      </button>
    </form>
  );
}
