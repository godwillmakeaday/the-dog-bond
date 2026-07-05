export function AboutSection() {
  return (
    <section id="about" className="bg-earth-900 px-5 py-24 text-earth-50 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-earth-300">About the platform</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
            For people who believe dogs deserve more than casual ownership.
          </h2>
          <p className="mt-6 text-lg leading-8 text-earth-100">
            The Dog Bond exists for owners, trainers, families, security-conscious households, and dog lovers who want to understand the animal behind the loyalty.
          </p>
        </div>
        <div className="rounded-[2rem] border border-earth-100/15 bg-white/10 p-8 backdrop-blur md:p-10">
          <p className="font-display text-3xl leading-tight">The public promise</p>
          <p className="mt-6 text-lg leading-8 text-earth-100">
            We will treat the dog as a social being: capable of learning, bonding, protecting, fearing, remembering, trusting, and responding to human order or human confusion.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Warm", "Responsible", "Intelligent"].map((word) => (
              <div key={word} className="rounded-2xl bg-earth-50 p-5 text-center font-bold text-earth-900">
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
