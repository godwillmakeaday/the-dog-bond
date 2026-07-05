import { SectionHeader } from "@/components/SectionHeader";

export function PhilosophySection() {
  return (
    <section id="bond" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          eyebrow="Why dogs matter"
          title="Why the dog became man’s social friend"
          text="Dogs are not closest to humans because of physical similarity. They are close because of social adaptation: they read our routines, voices, movements, moods, fears, and boundaries."
        />
        <div className="rounded-[2rem] border border-earth-200 bg-earth-50 p-8 shadow-card md:p-10">
          <p className="font-display text-3xl leading-tight text-earth-950 md:text-4xl">
            The bond is built on repetition, trust, correction, reward, memory, presence, and loyalty.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              ["The dog learns the household", "It notices arrival patterns, feeding time, tone of voice, footsteps, visitors, threat, and affection."],
              ["The owner learns the dog", "A serious owner reads posture, stress, curiosity, fear, drive, play, and warning signals."],
              ["Trust becomes language", "A command is not just a word. It is memory, relationship, consequence, and confidence."],
              ["Loyalty needs structure", "A loved dog without boundaries can become anxious, confused, or dangerous."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-earth-900">{title}</h3>
                <p className="mt-3 leading-7 text-earth-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
