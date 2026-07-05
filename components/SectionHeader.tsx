type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, text, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-earth-500">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-earth-900 md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-earth-700">{text}</p> : null}
    </div>
  );
}
