const Shimmer = ({ className }) => (
  <div
    className={`animate-pulse bg-white/[0.06] motion-reduce:animate-none ${className}`}
  />
);

export default function AboutSkeleton() {
  return (
    <div
      aria-label="Loading about"
      aria-live="polite"
      className="bg-[#090e11]"
      role="status"
    >
      {/* Hero */}
      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: text */}
            <div className="lg:col-span-7 space-y-6">
              <Shimmer className="h-3 w-36 rounded-none" />
              <Shimmer className="h-16 w-4/5 rounded-none md:h-20" />
              <Shimmer className="h-10 w-1/2 rounded-none md:h-14" />
              <div className="space-y-3 pt-4">
                <Shimmer className="h-4 w-full rounded-none" />
                <Shimmer className="h-4 w-5/6 rounded-none" />
                <Shimmer className="h-4 w-4/5 rounded-none" />
              </div>
              <Shimmer className="h-12 w-40 rounded-none mt-4" />
            </div>
            {/* Right: photo placeholder */}
            <div className="lg:col-span-5">
              <Shimmer className="aspect-[3/4] w-full rounded-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 bg-[#050505] border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <Shimmer className="h-3 w-32 rounded-none mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-[#050505] p-8 space-y-4">
                <Shimmer className="h-5 w-40 rounded-none" />
                <div className="flex flex-wrap gap-2 pt-2">
                  {[60, 80, 56, 70, 64].map((w, j) => (
                    <Shimmer
                      key={j}
                      className={`h-6 rounded-none`}
                      style={{ width: `${w}px` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
