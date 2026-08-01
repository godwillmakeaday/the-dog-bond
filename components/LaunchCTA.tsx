type LaunchCTAProps = {
  title?: string;
  text?: string;
  dark?: boolean;
};

export function LaunchCTA({
  title = "Ready to use The Dog Bond?",
  text = "Start with readiness, search the library, or explore the platform pathways.",
  dark = false
}: LaunchCTAProps) {
  const sectionClass = dark ? "bg-earth-950 text-earth-50" : "bg-earth-50 text-earth-950";
  const cardClass = dark ? "border-white/10 bg-white/10" : "border-earth-200 bg-white shadow-card";
  const secondaryClass = dark
    ? "border border-white/20 bg-white/10 text-earth-50"
    : "border border-earth-300 bg-white text-earth-800";

  return (
    <section className={`${sectionClass} px-5 py-16 lg:px-8`}>
      <div className={`mx-auto max-w-6xl rounded-[2.5rem] border p-8 md:p-10 ${cardClass}`}>
        <p className={dark ? "text-sm font-bold uppercase tracking-[0.28em] text-earth-300" : "text-sm font-bold uppercase tracking-[0.28em] text-earth-500"}>Launch pathway</p>
        <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">{title}</h2>
        <p className={dark ? "mt-5 max-w-3xl text-lg leading-8 text-earth-100" : "mt-5 max-w-3xl text-lg leading-8 text-earth-700"}>{text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/start-here" className="rounded-full bg-earth-900 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">Start Here</a>
          <a href="/use-the-dog-bond" className={`rounded-full px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] ${secondaryClass}`}>Use The Dog Bond</a>
          <a href="/search" className={`rounded-full px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] ${secondaryClass}`}>Search</a>
        </div>
      </div>
    </section>
  );
}
