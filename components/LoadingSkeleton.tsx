export function PageSkeleton() {
  return (
    <div className="animate-pulse px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="mx-auto h-10 w-64 rounded-lg bg-muted" />
        <div className="mx-auto h-4 w-96 max-w-full rounded bg-muted" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-48 rounded-2xl bg-muted/60" />
          ))}
        </div>
      </div>
    </div>
  );
}
