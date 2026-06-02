// Signa brand mark — a dot with two radiating arcs, suggesting a signal.
// Geometric, monochrome, legible at favicon scale.
export function SignaMark({
  className = "h-5 w-5",
  title = "Signa",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      className={className}
      aria-label={title}
      role="img"
    >
      <circle cx="7" cy="17" r="1.6" fill="currentColor" stroke="none" />
      <path d="M7 12.5 A 4.5 4.5 0 0 1 11.5 17" />
      <path d="M7 8 A 9 9 0 0 1 16 17" />
    </svg>
  );
}

export function SignaLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <SignaMark className="h-5 w-5 text-accent" />
      <span className="font-serif text-xl tracking-tight">Signa</span>
    </span>
  );
}
