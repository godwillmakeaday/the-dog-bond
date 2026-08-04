import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const pathways = [
  {
    number: "01",
    title: "Should I own a dog?",
    text: "Test your time, household, budget and long-term capacity before choosing a breed.",
    href: "/tools/readiness-checklist",
    action: "Check your readiness"
  },
  {
    number: "02",
    title: "Which dog fits my life?",
    text: "Compare temperament, space, climate, experience and family realities—not appearance alone.",
    href: "/tools/breed-comparison",
    action: "Compare breeds"
  },
  {
    number: "03",
    title: "Can I manage protection responsibly?",
    text: "Understand the control, training and welfare standards powerful dogs demand.",
    href: "/tools/guard-dog-checker",
    action: "Assess suitability"
  }
];

const intelligence = [
  {
    eyebrow: "Breed intelligence",
    title: "Rottweiler ownership is a responsibility system—not a purchase.",
    text: "A practical dossier for households considering strength, protection, children, climate and control.",
    href: "/breeds/rottweiler",
    image: "/images/dog-bond/breed-dossier-editorial.jpg"
  },
  {
    eyebrow: "Family safety",
    title: "Children and dogs need structure, supervision and respect.",
    text: "Build safer routines without teaching fear or pretending any dog is automatically safe.",
    href: "/topics/dogs-around-children",
    image: "/images/dog-bond/family-dog-safety.jpg"
  },
  {
    eyebrow: "African dog life",
    title: "Heat, shelter and water are ownership essentials.",
    text: "Care guidance designed around African weather, compounds, power realities and daily life.",
    href: "/african-dog-life",
    image: "/images/dog-bond/farm-dog-heat-shelter.jpg"
  }
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-earth-50">
      <Header />

      <section className="relative border-b border-earth-200 bg-earth-950 text-earth-50">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_15%_20%,#c7a670_0,transparent_30%),radial-gradient(circle_at_85%_75%,#4e7554_0,transparent_32%)]" />
        <div className="relative mx-auto grid min-h-[42rem] max-w-[90rem] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="flex flex-col justify-between px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-20">
            <p className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-earth-300">
              <span className="h-px w-10 bg-earth-400" />
              Dog ownership intelligence
            </p>
            <div className="my-16 max-w-3xl lg:my-24">
              <h1 className="text-balance font-display text-[3.35rem] font-semibold leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[5.7rem] xl:text-[6.6rem]">
                Choose the life.<br />Not just the dog.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-earth-100/80 sm:text-xl sm:leading-9">
                Clear, responsible guidance for choosing, raising and living with dogs—built for African realities and useful everywhere.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/start-here" className="rounded-full bg-earth-200 px-7 py-4 text-center text-sm font-bold text-earth-950 transition hover:-translate-y-0.5 hover:bg-earth-50">
                  Start with your decision
                </Link>
                <Link href="/search" className="rounded-full border border-earth-50/25 px-7 py-4 text-center text-sm font-bold text-earth-50 transition hover:border-earth-200 hover:bg-earth-50/5">
                  Search the intelligence library
                </Link>
              </div>
            </div>
            <p className="max-w-xl border-l border-earth-400 pl-4 text-sm leading-6 text-earth-100/65">
              Responsibility before breed power. Welfare before status. Evidence before assumption.
            </p>
          </div>

          <div className="relative min-h-[31rem] overflow-hidden border-t border-earth-50/10 lg:min-h-full lg:border-l lg:border-t-0">
            <Image src="/images/dog-bond/hero-human-dog-bond.jpg" alt="A person walking calmly with a dog outdoors" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-earth-950/20 lg:via-transparent lg:to-transparent" />
            <div className="absolute bottom-6 left-5 right-5 rounded-2xl border border-white/15 bg-earth-950/55 p-5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-earth-300">The ownership standard</p>
              <p className="mt-3 max-w-xl font-display text-xl leading-7 text-white sm:text-2xl sm:leading-8">A dog is a living responsibility requiring care, control, training and respect.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-8 border-b border-earth-200 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-earth-500">Begin with the question</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight tracking-[-0.035em] text-earth-950 sm:text-5xl">Better ownership starts before the dog arrives.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-earth-700 lg:justify-self-end">The right first step is not browsing powerful breeds. It is understanding the life, cost, risk and duty you are prepared to accept.</p>
        </div>

        <div className="grid lg:grid-cols-3">
          {pathways.map((item) => (
            <Link key={item.number} href={item.href} className="group border-b border-earth-200 py-9 lg:border-b-0 lg:border-r lg:px-8 lg:py-12 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0">
              <p className="font-display text-xl italic text-earth-400">{item.number}</p>
              <h3 className="mt-8 font-display text-3xl font-semibold tracking-[-0.025em] text-earth-950">{item.title}</h3>
              <p className="mt-4 min-h-24 leading-7 text-earth-700">{item.text}</p>
              <span className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-forest-700">
                {item.action}<span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#e8dfcd] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-earth-600">Featured intelligence</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] text-earth-950 sm:text-5xl">Decisions deserve depth.</h2>
            </div>
            <Link href="/intelligence-vault" className="text-sm font-bold text-earth-800 underline decoration-earth-400 underline-offset-8">Explore the intelligence vault</Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {intelligence.map((item) => (
              <Link key={item.title} href={item.href} className="group overflow-hidden rounded-[1.75rem] bg-earth-50 shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={item.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.035]" />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-earth-500">{item.eyebrow}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold leading-8 tracking-[-0.02em] text-earth-950">{item.title}</h3>
                  <p className="mt-4 leading-7 text-earth-700">{item.text}</p>
                  <span className="mt-6 inline-block text-sm font-bold text-forest-700">Read the guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-950 px-5 py-20 text-earth-50 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-forest-200">Built from African reality</p>
            <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">Dog advice changes when the climate, compound and community change.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2">
            {["Heat, water & shelter", "Compounds & shared spaces", "Guard-dog responsibility", "Local African dogs"].map((title, index) => (
              <Link key={title} href={index === 3 ? "/topics/local-african-dogs" : "/african-dog-life"} className="group bg-forest-900 p-7 transition hover:bg-forest-800 sm:p-9">
                <p className="text-xs font-bold text-forest-300">0{index + 1}</p>
                <h3 className="mt-10 font-display text-2xl font-semibold">{title}</h3>
                <span className="mt-5 inline-block text-sm text-forest-200 transition group-hover:translate-x-1">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="rounded-[2rem] border border-earth-200 bg-white px-6 py-10 shadow-card sm:px-10 sm:py-14 lg:grid lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16 lg:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-earth-500">Trust is part of the product</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] text-earth-950">Clear standards. Honest limits.</h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:mt-0">
            {[
              ["Evidence-conscious", "Claims are framed carefully and sources are made visible."],
              ["Humane by design", "Welfare and responsible control guide every recommendation."],
              ["No false certainty", "Education never pretends to replace veterinary or professional assessment."]
            ].map(([title, text]) => (
              <div key={title} className="border-t border-earth-300 pt-5">
                <h3 className="font-bold text-earth-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-earth-600">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 lg:col-span-2">
            <Link href="/editorial-policy" className="text-sm font-bold text-earth-700 underline decoration-earth-300 underline-offset-4">Editorial policy</Link>
            <Link href="/manifesto" className="text-sm font-bold text-earth-700 underline decoration-earth-300 underline-offset-4">Responsibility manifesto</Link>
            <Link href="/disclaimer" className="text-sm font-bold text-earth-700 underline decoration-earth-300 underline-offset-4">Educational limits</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-earth-200 px-5 py-20 text-center sm:px-8 sm:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-earth-500">Your next decision can be better</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-earth-950 sm:text-7xl">Start with readiness.<br />Then choose responsibly.</h2>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/start-here" className="rounded-full bg-earth-950 px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-forest-900">Start here</Link>
          <Link href="/tools" className="rounded-full border border-earth-300 px-8 py-4 text-sm font-bold text-earth-900 transition hover:border-earth-900">Use the decision tools</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
