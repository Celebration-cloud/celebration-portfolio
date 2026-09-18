const Shimmer = ({ className }) => (
  <div
    className={`animate-pulse bg-white/[0.06] motion-reduce:animate-none ${className}`}
  />
);

function FeaturedCardSkeleton() {
  return (
    <div className="bg-[#050505] p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex gap-2 flex-wrap">
            <Shimmer className="h-6 w-20 rounded-none" />
            <Shimmer className="h-6 w-24 rounded-none" />
            <Shimmer className="h-6 w-16 rounded-none" />
          </div>
          <Shimmer className="h-8 w-3/4 rounded-none" />
          <div className="space-y-2">
            <Shimmer className="h-4 w-full rounded-none" />
            <Shimmer className="h-4 w-5/6 rounded-none" />
            <Shimmer className="h-4 w-4/5 rounded-none" />
          </div>
          <Shimmer className="h-4 w-32 rounded-none mt-4" />
        </div>
        {/* Right: image */}
        <div className="lg:col-span-7">
          <Shimmer className="aspect-[16/10] w-full rounded-none" />
        </div>
      </div>
    </div>
  );
}

function AdditionalCardSkeleton() {
  return (
    <div className="bg-[#050505] p-8 flex flex-col gap-4">
      <Shimmer className="aspect-[4/3] w-full rounded-none" />
      <Shimmer className="h-6 w-2/3 rounded-none" />
      <div className="flex gap-2">
        <Shimmer className="h-5 w-16 rounded-none" />
        <Shimmer className="h-5 w-20 rounded-none" />
      </div>
      <Shimmer className="h-4 w-full rounded-none" />
      <Shimmer className="h-4 w-4/5 rounded-none" />
    </div>
  );
}

export default function PortfolioSkeleton() {
  return (
    <div
      aria-label="Loading portfolio"
      aria-live="polite"
      className="bg-[#090e11]"
      role="status"
    >
      {/* Hero */}
      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl space-y-6">
            <Shimmer className="h-3 w-48 rounded-none" />
            <Shimmer className="h-16 w-3/4 rounded-none md:h-20" />
            <Shimmer className="h-10 w-1/2 rounded-none md:h-14" />
            <Shimmer className="h-4 w-full max-w-xl rounded-none" />
            <Shimmer className="h-4 w-4/5 max-w-lg rounded-none" />
            <Shimmer className="mt-4 h-12 w-40 rounded-none" />
          </div>
        </div>
      </section>

      {/* Featured section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <Shimmer className="h-3 w-40 rounded-none mb-8" />
            <div className="grid gap-px bg-white/10">
              {[0, 1, 2].map((i) => (
                <FeaturedCardSkeleton key={i} />
              ))}
            </div>
          </div>

          {/* Additional projects */}
          <div>
            <Shimmer className="h-3 w-44 rounded-none mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
              {[0, 1, 2, 3].map((i) => (
                <AdditionalCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
