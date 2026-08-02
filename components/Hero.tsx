import { Badge } from "@/components/Badge";
import { VisualBlock } from "@/components/VisualBlock";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-earth-50">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-[-12rem] top-[-12rem] h-96 w-96 rounded-full bg-earth-200 blur-3xl" />
        <div className="absolute bottom-[-14rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-forest-100 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-9 px-5 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <Badge>Launch-ready dog ownership intelligence</Badge>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.94] tracking-[-0.04em] text-earth-950 md:mt-8 md:text-7xl lg:text-8xl">
            The Dog Bond
          </h1>
          <p className="mt-3 max-w-2xl text-2xl font-semibold leading-8 text-earth-900 md:mt-4 md:text-3xl md:leading-9">
            Understanding man’s most social friend.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-earth-800 sm:text-xl md:mt-7 md:text-2xl md:leading-9">
            A dog ownership intelligence platform helping African households choose, train, manage, and live responsibly with dogs.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-earth-700 sm:text-lg sm:leading-8 md:mt-6">
            For first-time owners, families, compound households, breed buyers, trainers, vets, estate managers, schools, and responsible partners.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <a href="/start-here" className="rounded-full bg-earth-900 px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.18em] text-earth-50 shadow-soft transition hover:-translate-y-1 hover:bg-forest-900 sm:px-7 sm:py-4 sm:text-sm">
              Start Here
            </a>
            <a href="/use-the-dog-bond" className="rounded-full border border-earth-300 bg-white/70 px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.18em] text-earth-900 transition hover:-translate-y-1 hover:border-earth-900 sm:px-7 sm:py-4 sm:text-sm">
              Use The Dog Bond
            </a>
            <a href="/search" className="rounded-full border border-earth-300 bg-white/70 px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.18em] text-earth-900 transition hover:-translate-y-1 hover:border-earth-900 sm:px-7 sm:py-4 sm:text-sm">
              Search the Library
            </a>
          </div>
        </div>
        <div>
          <VisualBlock
            src="/images/dog-bond/hero-human-dog-bond.jpg"
            title="A dog is not a toy, weapon, or status symbol. A dog is a living companion requiring care, control, training, and responsibility."
            eyebrow="The launch standard"
            className="h-full min-h-[27rem] sm:min-h-[32rem] lg:min-h-[36rem]"
          />
        </div>
      </div>
    </section>
  );
}
