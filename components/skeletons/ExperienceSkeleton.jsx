const Shimmer = ({ className }) => (
  <div
    className={`animate-pulse bg-white/[0.06] motion-reduce:animate-none ${className}`}
  />
);

function TimelineItemSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-white/5">
      <div className="lg:col-span-3 space-y-2">
        <Shimmer className="h-4 w-32 rounded-none" />
        <Shimmer className="h-3 w-24 rounded-none" />
      </div>
      <div className="lg:col-span-9 space-y-4">
        <Shimmer className="h-6 w-48 rounded-none" />
        <Shimmer className="h-4 w-36 rounded-none" />
        <div className="space-y-2 pt-2">
          <Shimmer className="h-3 w-full rounded-none" />
          <Shimmer className="h-3 w-5/6 rounded-none" />
          <Shimmer className="h-3 w-4/5 rounded-none" />
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSkeleton() {
  return (
    <div
      aria-label="Loading experience"
      aria-live="polite"
      className="bg-[#090e11]"
      role="status"
    >
      {/* Hero */}
      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl space-y-6">
          <Shimmer className="h-3 w-40 rounded-none" />
          <Shimmer className="h-16 w-3/4 rounded-none md:h-20" />
          <Shimmer className="h-4 w-full max-w-lg rounded-none" />
          <Shimmer className="h-4 w-4/5 max-w-md rounded-none" />
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-8 md:px-12 lg:px-24 bg-[#050505] border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <Shimmer className="h-3 w-32 rounded-none mb-4" />
          {[0, 1, 2].map((i) => (
            <TimelineItemSkeleton key={i} />
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <Shimmer className="h-3 w-28 rounded-none mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {[0, 1].map((i) => (
              <div key={i} className="bg-[#050505] p-8 space-y-3">
                <Shimmer className="h-5 w-3/4 rounded-none" />
                <Shimmer className="h-4 w-1/2 rounded-none" />
                <Shimmer className="h-3 w-24 rounded-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
