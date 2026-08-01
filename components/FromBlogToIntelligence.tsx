import { SectionHeader } from "@/components/SectionHeader";

export function FromBlogToIntelligence() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeader
          eyebrow="Strategic shift"
          title="From Dog Blog to Dog Intelligence"
          text="Most dog websites talk about pets in general. The Dog Bond studies the real bond: household, compound, child, guard post, farm, estate, first-time owner, powerful breed, local dog, and the responsibility that comes with keeping an animal that can love, learn, protect, and harm if mismanaged."
        />
        <div className="rounded-[2rem] border border-earth-200 bg-earth-50 p-8 shadow-card md:p-10">
          <p className="font-display text-3xl leading-tight text-earth-950 md:text-4xl">
            Helping African households understand, choose, train, manage, and live responsibly with dogs.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Choose", "Fit breed and temperament to capacity, not ego."],
              ["Train", "Build trust, obedience, control, and calm communication."],
              ["Protect", "Use protection ethically, safely, and under discipline."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-2xl font-semibold text-earth-900">{title}</h3>
                <p className="mt-3 leading-7 text-earth-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
