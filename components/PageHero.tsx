import { Badge } from "@/components/Badge";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  dark?: boolean;
};

export function PageHero({ eyebrow, title, text, dark = false }: PageHeroProps) {
  return (
    <section className={dark ? "bg-earth-900 px-5 py-20 text-earth-50 lg:px-8" : "bg-earth-50 px-5 py-20 lg:px-8"}>
      <div className="mx-auto max-w-7xl">
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-8 max-w-5xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] md:text-7xl">
          {title}
        </h1>
        <p className={dark ? "mt-7 max-w-3xl text-xl leading-9 text-earth-100" : "mt-7 max-w-3xl text-xl leading-9 text-earth-800"}>
          {text}
        </p>
      </div>
    </section>
  );
}
