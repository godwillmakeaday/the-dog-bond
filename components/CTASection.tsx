type CTASectionProps = {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({ title, text, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: CTASectionProps) {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto rounded-[2.5rem] bg-earth-900 p-8 text-earth-50 shadow-soft md:p-12 lg:max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-300">Next action</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-earth-100">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={primaryHref} className="rounded-full bg-earth-50 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-earth-950 transition hover:-translate-y-1">
              {primaryLabel}
            </a>
            {secondaryLabel && secondaryHref ? (
              <a href={secondaryHref} className="rounded-full border border-earth-100/25 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-earth-50 transition hover:-translate-y-1 hover:bg-white/10">
                {secondaryLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
