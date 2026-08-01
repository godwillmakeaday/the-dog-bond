import { trainingSteps } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

export function TrainingDesk() {
  return (
    <section id="training" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Training desk"
          title="Training is the language of trust."
          text="A dog should not be corrected for failing to understand what the owner never taught clearly. Training must be firm, humane, repetitive, and consistent across the household."
        />
        <div className="rounded-[2rem] border border-earth-200 bg-earth-50 p-8 shadow-card md:p-10">
          <div className="grid gap-4 md:grid-cols-2">
            {trainingSteps.map((step, index) => (
              <div key={step} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-earth-500">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-earth-900">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-3xl bg-earth-900 p-6 leading-8 text-earth-50">
            Correction without cruelty. Reward without bribery. Control without fear. Discipline without breaking the dog’s spirit.
          </p>
        </div>
      </div>
    </section>
  );
}
