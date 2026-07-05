export function ProtectionResponsibility() {
  return (
    <section id="responsibility" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-earth-200 bg-earth-50 shadow-soft">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-[linear-gradient(145deg,#1e1812,#3f5f45)] p-8 text-earth-50 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-earth-200">Protection & responsibility</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">A protective dog is not a weapon.</h2>
            <p className="mt-6 text-lg leading-8 text-earth-100">
              Ownership requires control, training, restraint, safety, humane treatment, and social responsibility.
            </p>
          </div>
          <div className="p-8 md:p-12">
            <h3 className="font-display text-3xl font-semibold text-earth-950">The warning</h3>
            <p className="mt-5 text-xl leading-9 text-earth-800">
              A dog that protects without discipline can become a danger. Protection must be governed by training, restraint, and responsible ownership.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                ["Control", "The owner must be able to interrupt, recall, redirect, and restrain the dog."],
                ["Clarity", "The dog must know what is allowed, forbidden, rewarded, and corrected."],
                ["Safety", "Children, visitors, neighbours, and public spaces must be protected from careless ownership."],
                ["Care", "A neglected dog cannot be expected to behave like a secure companion."]
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-earth-200 bg-white p-6">
                  <h4 className="font-display text-xl font-semibold text-earth-900">{title}</h4>
                  <p className="mt-3 leading-7 text-earth-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
