type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeader({ eyebrow, title, text, align = "left", theme = "light" }: SectionHeaderProps) {
  const isDark = theme === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={isDark ? "text-sm font-semibold uppercase tracking-[0.28em] text-earth-300" : "text-sm font-semibold uppercase tracking-[0.28em] text-earth-500"}>{eyebrow}</p>
      <h2 className={isDark ? "mt-4 font-display text-3xl font-semibold leading-tight text-earth-50 md:text-5xl" : "mt-4 font-display text-3xl font-semibold leading-tight text-earth-900 md:text-5xl"}>{title}</h2>
      {text ? <p className={isDark ? "mt-5 text-lg leading-8 text-earth-100" : "mt-5 text-lg leading-8 text-earth-700"}>{text}</p> : null}
    </div>
  );
}
