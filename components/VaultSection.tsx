import { VisualBlock } from "@/components/VisualBlock";

type VaultLink = {
  title: string;
  text: string;
  href: string;
  category: string;
};

type VaultSectionProps = {
  title: string;
  label: string;
  text: string;
  image: string;
  links: VaultLink[];
};

export function VaultSection({ title, label, text, image, links }: VaultSectionProps) {
  return (
    <section className="border-t border-earth-200 bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <VisualBlock src={image} title={title} eyebrow={label} />
          <p className="mt-6 text-lg leading-8 text-earth-700">{text}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <a key={link.href + link.title} href={link.href} className="group flex min-h-52 flex-col justify-between rounded-[1.75rem] border border-earth-200 bg-earth-50 p-6 shadow-card transition hover:-translate-y-1 hover:bg-white hover:shadow-soft">
              <div>
                <span className="rounded-full bg-earth-900 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">{link.category}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-earth-950">{link.title}</h3>
                <p className="mt-3 leading-7 text-earth-700">{link.text}</p>
              </div>
              <span className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-earth-700 group-hover:text-forest-700">Open →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
