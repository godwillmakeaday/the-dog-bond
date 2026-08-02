const doesCards = [
  "Helps people decide before buying a dog",
  "Explains breed suitability and owner capacity",
  "Promotes humane training and public safety",
  "Documents Nigerian/African dog ownership realities",
  "Helps households avoid common ownership mistakes",
  "Prepares responsible partnership pathways"
];

const standardPrinciples = [
  "readiness before ownership",
  "training before protection",
  "humane care before control",
  "suitability before status",
  "public safety before intimidation",
  "African reality before generic advice"
];

const launchPathways = [
  { title: "Start Here", href: "/start-here", text: "Begin with the correct decision pathway." },
  { title: "Tools", href: "/tools", text: "Use readiness, cost, breed, guard-dog, and training tools." },
  { title: "Topics", href: "/topics", text: "Explore organized dog ownership topic hubs." },
  { title: "Breeds", href: "/breeds", text: "Review breed fit and owner readiness." },
  { title: "Mistake Library", href: "/mistakes", text: "Avoid the failures that create suffering and risk." },
  { title: "Partners", href: "/partners", text: "See standards for responsible partnerships." },
  { title: "Campaigns", href: "/campaigns", text: "Share public education campaigns." },
  { title: "Share", href: "/share", text: "Help others find responsible dog ownership guidance." }
];

export function HomeLaunchSections() {
  return (
    <>
      <section className="bg-white px-5 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-500">Institutional front door</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight text-earth-950 md:text-6xl">What The Dog Bond Does</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {doesCards.map((item) => (
              <div key={item} className="rounded-[2rem] border border-earth-200 bg-earth-50 p-7 shadow-card">
                <p className="text-lg font-semibold leading-8 text-earth-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-earth-950 px-5 py-14 text-earth-50 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-300">The Dog Bond Standard</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">Responsibility before breed power.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-earth-100">
            The Dog Bond treats dog ownership as a structured household responsibility, not a status decision, fear reaction, or careless purchase.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {standardPrinciples.map((item) => (
              <div key={item} className="rounded-[2rem] bg-white/10 p-6 text-sm font-bold uppercase tracking-[0.12em] text-earth-50">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-earth-50 px-5 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-500">Launch-ready pathways</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight text-earth-950 md:text-6xl">Move through the platform with purpose.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {launchPathways.map((item) => (
              <a key={item.href} href={item.href} className="rounded-[2rem] border border-earth-200 bg-white p-6 shadow-card transition hover:-translate-y-1">
                <h3 className="font-display text-2xl font-semibold text-earth-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-earth-700">{item.text}</p>
                <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.18em] text-earth-600">Open →</span>
              </a>
            ))}
          </div>
          <div className="mt-12 rounded-[2.5rem] bg-earth-900 p-8 text-earth-50 shadow-card md:p-10">
            <h2 className="font-display text-4xl font-semibold">Before you buy, train, feed, manage, or partner around dogs, check The Dog Bond.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/start-here" className="rounded-full bg-earth-50 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-earth-950">Start Here</a>
              <a href="/use-the-dog-bond" className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">Use The Dog Bond</a>
              <a href="/search" className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">Search the Library</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
