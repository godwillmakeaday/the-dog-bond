type RelatedLink = {
  title: string;
  href: string;
  text?: string;
};

type RelatedLinksProps = {
  title?: string;
  links: RelatedLink[];
  dark?: boolean;
};

export function RelatedLinks({ title = "Related next steps", links, dark = false }: RelatedLinksProps) {
  const sectionClass = dark ? "bg-earth-900 text-earth-50" : "bg-earth-50 text-earth-950";
  const cardClass = dark
    ? "border-earth-100/15 bg-white/10 text-earth-50 hover:bg-white/[0.14]"
    : "border-earth-200 bg-white text-earth-950 hover:shadow-soft";

  return (
    <section className={`${sectionClass} px-5 py-16 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <p className={dark ? "text-sm font-bold uppercase tracking-[0.28em] text-earth-300" : "text-sm font-bold uppercase tracking-[0.28em] text-earth-600"}>
          Internal pathway
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <a key={link.href + link.title} href={link.href} className={`group rounded-[1.5rem] border p-6 transition hover:-translate-y-1 ${cardClass}`}>
              <h3 className="font-display text-2xl font-semibold leading-tight">{link.title}</h3>
              {link.text ? <p className={dark ? "mt-3 leading-7 text-earth-100" : "mt-3 leading-7 text-earth-700"}>{link.text}</p> : null}
              <span className={dark ? "mt-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-earth-200" : "mt-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-earth-700"}>
                Open →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
