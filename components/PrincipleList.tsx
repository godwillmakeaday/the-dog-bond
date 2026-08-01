export function PrincipleList({ principles, title = "Practical principles" }: { principles: string[]; title?: string }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-3xl font-semibold text-earth-950">{title}</h2>
      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {principles.map((principle) => (
          <li key={principle} className="rounded-2xl bg-forest-100 p-4 text-sm font-semibold leading-6 text-forest-950">
            {principle}
          </li>
        ))}
      </ul>
    </section>
  );
}
