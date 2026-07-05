import { Badge } from "@/components/Badge";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-earth-50">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-[-12rem] top-[-12rem] h-96 w-96 rounded-full bg-earth-200 blur-3xl" />
        <div className="absolute bottom-[-14rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-forest-100 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <Badge>Companionship · Training · Protection · Behaviour</Badge>
          <h1 className="mt-8 font-display text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-earth-950 md:text-7xl lg:text-8xl">
            The Dog Bond
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-earth-800 md:text-2xl">
            Understanding man’s most social friend — through loyalty, training, protection, behaviour, companionship, and responsible ownership.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-earth-700">
            The dog is not just an animal in the house. It is a companion, a learner, a protector, a witness, and one of humanity’s oldest social partners.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#bond" className="rounded-full bg-earth-900 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-earth-50 shadow-soft transition hover:-translate-y-1 hover:bg-forest-900">
              Explore the Bond
            </a>
            <a href="#training" className="rounded-full border border-earth-300 bg-white/70 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-earth-900 transition hover:-translate-y-1 hover:border-earth-900">
              Learn Ownership
            </a>
          </div>
        </div>
        <div className="relative min-h-[34rem] rounded-[2.5rem] border border-earth-200 bg-earth-900 p-5 shadow-soft">
          <div className="absolute inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_35%_20%,rgba(241,232,213,0.38),transparent_36%),linear-gradient(150deg,#1e1812_0%,#34271a_48%,#17231b_100%)]" />
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-earth-100/15 p-8 text-earth-50">
            <div className="max-w-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-earth-200">The central idea</p>
              <p className="mt-5 font-display text-3xl leading-tight md:text-4xl">
                The gorilla may be closer to man in build. The dog is closer in social covenant.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-earth-100/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-4xl font-semibold">01</p>
                <p className="mt-3 text-sm leading-6 text-earth-100">It entered the human home.</p>
              </div>
              <div className="rounded-3xl border border-earth-100/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-4xl font-semibold">02</p>
                <p className="mt-3 text-sm leading-6 text-earth-100">It learned mood, command, danger, and affection.</p>
              </div>
              <div className="rounded-3xl border border-earth-100/15 bg-white/10 p-5 backdrop-blur md:col-span-2">
                <p className="font-display text-2xl">A good owner does not merely keep a dog. A good owner becomes intelligible to the dog.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
