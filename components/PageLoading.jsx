export default function PageLoading({ label = "page" }) {
  return (
    <section
      aria-label={`Loading ${label}`}
      aria-live="polite"
      className="min-h-[70vh] bg-[#090e11] px-6 py-24 md:px-12 lg:px-24"
      role="status"
    >
      <div className="mx-auto flex max-w-6xl flex-col justify-center">
        <div className="mb-10 flex items-center gap-4">
          <span
            aria-hidden="true"
            className="h-3 w-3 animate-pulse bg-brand-teal motion-reduce:animate-none"
          />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand-teal">
            Loading {label}
          </p>
        </div>

        <div aria-hidden="true" className="max-w-3xl space-y-4">
          <div className="h-12 w-4/5 animate-pulse bg-white/10 motion-reduce:animate-none md:h-16" />
          <div className="h-12 w-3/5 animate-pulse bg-white/5 motion-reduce:animate-none md:h-16" />
          <div className="mt-8 h-4 w-full max-w-xl animate-pulse bg-white/10 motion-reduce:animate-none" />
          <div className="h-4 w-4/5 max-w-lg animate-pulse bg-white/5 motion-reduce:animate-none" />
        </div>
      </div>
    </section>
  );
}
