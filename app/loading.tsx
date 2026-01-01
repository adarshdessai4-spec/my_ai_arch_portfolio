export default function Loading() {
  return (
    <div className="space-y-8">
      <div className="h-10 w-2/3 animate-pulse rounded-2xl bg-white/10" />
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/5"
          />
        ))}
      </div>
    </div>
  );
}
