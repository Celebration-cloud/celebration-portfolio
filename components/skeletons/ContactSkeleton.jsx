const Shimmer = ({ className }) => (
  <div
    className={`animate-pulse bg-white/[0.06] motion-reduce:animate-none ${className}`}
  />
);

export default function ContactSkeleton() {
  return (
    <div
      aria-label="Loading contact"
      aria-live="polite"
      className="bg-[#090e11]"
      role="status"
    >
      {/* Hero */}
      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl space-y-6 max-w-3xl">
          <Shimmer className="h-3 w-36 rounded-none" />
          <Shimmer className="h-16 w-3/4 rounded-none md:h-20" />
          <Shimmer className="h-4 w-full max-w-lg rounded-none" />
          <Shimmer className="h-4 w-4/5 max-w-md rounded-none" />
        </div>
      </section>

      {/* Form + contact info */}
      <section className="px-6 py-8 md:px-12 lg:px-24 bg-[#050505] border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Shimmer className="h-3 w-16 rounded-none" />
                  <Shimmer className="h-12 w-full rounded-none" />
                </div>
                <div className="space-y-2">
                  <Shimmer className="h-3 w-20 rounded-none" />
                  <Shimmer className="h-12 w-full rounded-none" />
                </div>
              </div>
              <div className="space-y-2">
                <Shimmer className="h-3 w-24 rounded-none" />
                <Shimmer className="h-12 w-full rounded-none" />
              </div>
              <div className="space-y-2">
                <Shimmer className="h-3 w-20 rounded-none" />
                <Shimmer className="h-36 w-full rounded-none" />
              </div>
              <Shimmer className="h-12 w-48 rounded-none" />
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-5 space-y-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className="space-y-2">
                  <Shimmer className="h-3 w-24 rounded-none" />
                  <Shimmer className="h-5 w-40 rounded-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
