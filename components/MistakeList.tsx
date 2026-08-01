export function MistakeList({ mistakes, title = "Common mistakes" }: { mistakes: string[]; title?: string }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-3xl font-semibold text-earth-950">{title}</h2>
      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {mistakes.map((mistake) => (
          <li key={mistake} className="rounded-2xl border border-earth-200 bg-earth-50 p-4 text-sm leading-6 text-earth-700">
            <span className="font-bold text-earth-950">Avoid:</span> {mistake}
          </li>
        ))}
      </ul>
    </section>
  );
}
