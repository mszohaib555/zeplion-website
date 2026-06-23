import { Star } from "lucide-react";

export function TrustpilotBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm ${className}`}
    >
      <div className="mb-2 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-[#00B67A] text-xs font-bold text-white">
          T
        </div>
        <span className="text-sm font-semibold">Trustpilot</span>
        <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
          Coming Soon
        </span>
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-[#00B67A]/40 text-[#00B67A]/40"
          />
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        Reviews coming soon — verified client feedback on Trustpilot.
      </p>
    </div>
  );
}
