const cards = [
  { title: "Start Here", href: "/start-here", text: "Choose the right pathway before buying or managing a dog." },
  { title: "Use the Tools", href: "/tools", text: "Check readiness, cost, breed fit, guard-dog responsibility, and training routines." },
  { title: "Search the Library", href: "/search", text: "Find guides, glossary terms, topics, mistakes, breeds, and pages." },
  { title: "Explore Breeds", href: "/breeds", text: "Review breed fit, owner readiness, climate notes, and common mistakes." },
  { title: "Avoid Common Mistakes", href: "/mistakes", text: "Learn the ownership mistakes that create suffering, conflict, and risk." },
  { title: "Partner With Us", href: "/partners", text: "Explore responsible trainer, vet, shelter, breeder, estate, brand, and school partnerships." }
];

export function HomeConversionSection() {
  return (
    <section className="bg-earth-50 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-earth-500">Conversion pathway</p>
        <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight text-earth-950 md:text-6xl">How to Use The Dog Bond</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-earth-700">
          Before you buy, train, feed, manage, or partner around dogs, check The Dog Bond.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card transition hover:-translate-y-1">
              <h3 className="font-display text-3xl font-semibold text-earth-950">{card.title}</h3>
              <p className="mt-4 leading-7 text-earth-700">{card.text}</p>
              <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-earth-700">Open →</span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/use-the-dog-bond" className="rounded-full bg-earth-900 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">Use The Dog Bond</a>
          <a href="/search" className="rounded-full border border-earth-300 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-earth-800">Search the Library</a>
          <Link href="/partners" className="rounded-full border border-earth-300 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-earth-800">Partner With Us</Link>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
