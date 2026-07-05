import { trainingSteps } from "@/lib/site";
import { SectionHeader } from "@/components/SectionHeader";

export function TrainingDesk() {
  return (
    <section id="training" className="bg-earth-900 px-5 py-24 text-earth-50 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-earth-300">Training desk</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">Firm, humane, practical, responsible.</h2>
          <p className="mt-6 text-lg leading-8 text-earth-100">
            Training is the moral language between a dog and its owner. It should create attention, confidence, control, restraint, and relationship — not fear, confusion, or cruelty.
          </p>
          <div className="mt-8 rounded-[2rem] border border-earth-100/15 bg-white/10 p-6 backdrop-blur">
            <p className="font-display text-2xl">A dog learns fastest where the owner is consistent.</p>
            <p className="mt-3 leading-7 text-earth-100">
              The household must not give ten different rules to one dog. Conflicting signals create disobedience, anxiety, and sometimes aggression.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {trainingSteps.map((step, index) => (
            <div key={step} className="rounded-3xl border border-earth-100/15 bg-earth-50 p-6 text-earth-900 shadow-card">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-earth-500">Step {String(index + 1).padStart(2, "0")}</p>
              <p className="mt-4 text-lg font-semibold leading-7">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
