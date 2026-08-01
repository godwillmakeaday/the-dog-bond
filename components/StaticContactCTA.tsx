type StaticContactCTAProps = {
  title?: string;
  text?: string;
  email?: string;
  dark?: boolean;
};

export function StaticContactCTA({
  title = "Start the conversation",
  text = "Dedicated intake forms are coming soon. For now, use the email pathway.",
  email = "partners@thedogbond.com",
  dark = false
}: StaticContactCTAProps) {
  const section = dark ? "bg-earth-950 text-earth-50" : "bg-earth-50 text-earth-950";
  const card = dark ? "border-white/10 bg-white/10" : "border-earth-200 bg-white shadow-card";
  return (
    <section className={`${section} px-5 py-16 lg:px-8`}>
      <div className={`mx-auto max-w-5xl rounded-[2rem] border p-8 md:p-10 ${card}`}>
        <p className={dark ? "text-sm font-bold uppercase tracking-[0.24em] text-earth-300" : "text-sm font-bold uppercase tracking-[0.24em] text-earth-500"}>Static contact pathway</p>
        <h2 className="mt-4 font-display text-4xl font-semibold">{title}</h2>
        <p className={dark ? "mt-4 max-w-3xl leading-8 text-earth-100" : "mt-4 max-w-3xl leading-8 text-earth-700"}>{text}</p>
        <a href={`mailto:${email}`} className={dark ? "mt-7 inline-block rounded-full bg-earth-50 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-earth-950" : "mt-7 inline-block rounded-full bg-earth-900 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-earth-50"}>
          {email}
        </a>
      </div>
    </section>
  );
}
