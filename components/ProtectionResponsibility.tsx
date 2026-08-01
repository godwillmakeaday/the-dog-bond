import { SectionHeader } from "@/components/SectionHeader";

export function ProtectionResponsibility() {
  return (
    <section id="responsibility" className="bg-earth-900 px-5 py-24 text-earth-50 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeader
            eyebrow="Protection & responsibility"
            title="A protective dog is not a weapon."
            text="A dog that protects without discipline can become a danger. Protection must be governed by training, restraint, and responsible ownership."
            theme="dark"
          />
          <div className="rounded-[2rem] border border-earth-100/15 bg-white/10 p-8 backdrop-blur md:p-10">
            <p className="font-display text-3xl leading-tight">Public safety is part of ownership.</p>
            <p className="mt-5 leading-8 text-earth-100">
              The owner is responsible not only for loving the dog, but for protecting children, neighbours, visitors, workers, passersby, and the dog itself from preventable harm.
            </p>
            <a href="/ownership-standard" className="mt-8 inline-flex rounded-full bg-earth-50 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-earth-950 transition hover:-translate-y-1">
              Read Ownership Standard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
