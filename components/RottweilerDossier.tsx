import Image from "next/image";
import Link from "next/link";

const readiness = [
  ["Time", "Daily training, exercise, supervision and calm household integration"],
  ["Control", "Secure gates, reliable leash handling and a visitor-arrival routine"],
  ["Climate", "Permanent shade, fresh water, airflow and cooler exercise windows"],
  ["Children", "Active adult supervision and a dog-only retreat children cannot enter"],
  ["Money", "Food, preventive care, emergencies, equipment and skilled support"],
  ["Continuity", "A named adult who can maintain the routine when you are absent"]
];

const modules = [
  { id: "household", n: "01", title: "Household fit", text: "A Rottweiler is not a security appliance. It needs stable routines, humane social learning, space to withdraw and adults able to manage a strong dog without intimidation.", lenses: ["Behaviour", "Family systems", "Property design"] },
  { id: "children", n: "02", title: "Children and vulnerable people", text: "No breed label guarantees safety. Separate during food, sleep, rough play and excited arrivals. Teach children not to climb on, corner or disturb the dog; an attentive adult remains responsible.", lenses: ["Canine behaviour", "Child safety", "Environmental safety"] },
  { id: "public", n: "03", title: "Visitors and public space", text: "Plan before the gate opens: secure first, admit visitors second. Use sound fencing, identification, leash skills and controlled introductions. Do not encourage uncontrolled suspicion or aggression.", lenses: ["Training", "Property security", "Estate management"] },
  { id: "acquisition", n: "04", title: "Breeder due diligence", text: "Ask for verifiable parent identity, health-screening records, veterinary history, living-condition access and a written return policy. Photographs, size claims and payment receipts are not health evidence.", lenses: ["Breed expertise", "Veterinary genetics", "Consumer protection"] },
  { id: "training", n: "05", title: "Humane training pathway", text: "Begin with name response, recall foundations, handling, settling, leash skills, leave-it and place work. Reward calm behaviour. Escalating fear or punishment can make behaviour less predictable; seek qualified help early.", lenses: ["Learning theory", "Humane training", "Veterinary behaviour"] },
  { id: "records", n: "06", title: "Evidence and continuity", text: "Keep vaccination and veterinary records, identification details, acquisition documents, training notes, household rules and incident observations. Records turn memory into responsible follow-through.", lenses: ["Veterinary records", "Insurance", "Law and evidence"] }
];

const expertDisciplines = [
  ["Breed", "Development, structure, inherited concerns and breed-specific tendencies"],
  ["Veterinary", "Health, pain, development, prevention and climate-related welfare"],
  ["Behaviour", "Stress signals, learning, assessment and humane intervention"],
  ["Child safety", "Supervision, developmental risk and household separation systems"],
  ["Property", "Gates, boundaries, retreat space and safe visitor movement"],
  ["Responsibility", "Records, insurance, estate rules and legal questions"]
];

const professionalQuestions = [
  { title: "Ask the breeder", questions: ["Which original health-screening reports can I verify?", "How were the puppy and parents assessed in ordinary home conditions?", "What support and return terms are provided in writing?"] },
  { title: "Ask the veterinarian", questions: ["Which screening and preventive-care plan fits this individual dog?", "Could pain or illness be affecting behaviour?", "How should exercise and heat exposure change for this dog?"] },
  { title: "Ask the behaviour or training professional", questions: ["What qualifications and humane methods guide your work?", "Can you observe the dog in the environment where the problem occurs?", "What should the household change, measure and record?"] },
  { title: "Ask the property or estate professional", questions: ["Where can gates, handovers or visitor movement fail?", "Is there a reliable separation space before a visitor enters?", "Which estate rules, notices or records apply?"] }
];

const pauseSignals = [
  "The main reason is prestige, intimidation or an untrained guard role.",
  "Gates, fencing or visitor routines are unreliable.",
  "No adult can supervise interactions with children.",
  "Food and veterinary costs would regularly compete with essentials.",
  "The dog would spend most of its life chained, isolated or without shade.",
  "Nobody in the household can safely handle a powerful adult dog."
];

export function RottweilerDossier() {
  return <>
    <section className="relative overflow-hidden bg-earth-950 text-earth-50">
      <div className="absolute inset-0 opacity-35"><Image src="/images/dog-bond/breed-dossier-editorial.jpg" alt="Rottweiler ownership dossier" fill priority className="object-cover" /></div>
      <div className="absolute inset-0 bg-gradient-to-r from-earth-950 via-earth-950/90 to-earth-950/35" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-earth-300">Flagship ownership intelligence dossier</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">Rottweiler: power made answerable.</h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-earth-200">A decision system for households considering a strong, loyal and physically capable dog in African conditions. The central question is not whether you admire the breed. It is whether your household can carry the responsibility.</p>
        <div className="mt-9 flex flex-wrap gap-3"><a href="#readiness" className="rounded-full bg-earth-50 px-6 py-3 text-sm font-bold text-earth-950">Check your readiness</a><Link href="/tools/cost-estimator" className="rounded-full border border-earth-500 px-6 py-3 text-sm font-bold text-earth-50">Plan ownership cost</Link></div>
      </div>
    </section>

    <section className="bg-earth-50 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr]">
          <div className="rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-forest-800">The ownership decision</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-earth-950">Suitable only when capacity is stronger than desire.</h2>
            <p className="mt-5 text-lg leading-8 text-earth-700">Rottweilers are often described as confident, devoted and watchful. Those tendencies do not arrive as a finished safety system. Genetics, early experience, health, social learning, training and daily management shape the individual dog.</p>
          </div>
          <aside className="rounded-[2.5rem] bg-forest-950 p-8 text-earth-50">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-forest-200">Responsibility status</p>
            <p className="mt-5 font-display text-3xl font-semibold">Proceed only with a complete household plan.</p>
            <p className="mt-4 leading-7 text-forest-100">A first-time owner is not automatically disqualified, but inexperience must be offset by preparation, secure management and skilled support.</p>
          </aside>
        </div>

        <section id="readiness" className="scroll-mt-24 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-500">African conditions check</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-earth-950">Six conditions that must be real—not promised later.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{readiness.map(([title, text]) => <div key={title} className="rounded-[2rem] border border-earth-200 bg-white p-6"><p className="font-display text-2xl font-semibold text-earth-950">{title}</p><p className="mt-3 leading-7 text-earth-700">{text}</p></div>)}</div>
          <div className="mt-6 rounded-[2rem] border border-amber-300 bg-amber-50 p-6 text-earth-900"><strong>Readiness rule:</strong> a serious gap in one safety-critical condition is a reason to pause acquisition, not average the problem away with strengths elsewhere.</div>
        </section>

        <section className="rounded-[2.5rem] bg-earth-950 p-8 text-earth-50 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-300">Heat, shelter and exercise</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-2"><h2 className="font-display text-4xl font-semibold">A Nigerian compound is not automatically a suitable climate system.</h2><div className="space-y-4 leading-7 text-earth-200"><p>Provide continuous clean water, deep shade and ventilated resting space. Move structured exercise to cooler parts of the day and check ground heat before walking.</p><p>Heavy panting, weakness, confusion or collapse can signal an emergency. Stop exertion, move the dog to a cooler place and contact a veterinarian urgently. Do not use this page as a diagnosis.</p></div></div>
        </section>

        <section className="py-16">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-forest-800">Through the expert lens</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-earth-950">No single profession sees the whole ownership system.</h2>
              <p className="mt-5 leading-7 text-earth-700">The Dog Bond connects breed-specific knowledge, wider dog expertise and disciplines outside the dog world. The purpose is not to make every professional a Rottweiler specialist. It is to put the right question before the right expert, then interpret the answer within the household as a whole.</p>
              <div className="mt-6 rounded-2xl border border-forest-200 bg-forest-50 p-5 text-sm leading-6 text-forest-950"><strong>Editorial rule:</strong> credentials establish relevant competence; they do not turn every opinion into fact. Scope, evidence, disagreement and conflicts still matter.</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">{expertDisciplines.map(([title, text]) => <article key={title} className="rounded-[2rem] border border-earth-200 bg-white p-6"><p className="font-display text-2xl font-semibold text-earth-950">{title}</p><p className="mt-3 text-sm leading-6 text-earth-700">{text}</p></article>)}</div>
          </div>
        </section>

        <section className="py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-500">Responsibility modules</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">{modules.map(m => <article id={m.id} key={m.id} className="rounded-[2rem] border border-earth-200 bg-white p-7"><p className="text-sm font-bold text-forest-800">{m.n}</p><h2 className="mt-3 font-display text-3xl font-semibold text-earth-950">{m.title}</h2><p className="mt-4 leading-7 text-earth-700">{m.text}</p><div className="mt-6 flex flex-wrap gap-2" aria-label={`Professional lenses for ${m.title}`}>{m.lenses.map(lens => <span key={lens} className="rounded-full bg-earth-100 px-3 py-1.5 text-xs font-bold text-earth-700">{lens} lens</span>)}</div></article>)}</div>
        </section>

        <section className="grid gap-7 lg:grid-cols-2">
          <div className="rounded-[2.5rem] border border-red-200 bg-red-50 p-8"><p className="text-sm font-bold uppercase tracking-[0.22em] text-red-800">Pause signals</p><h2 className="mt-4 font-display text-3xl font-semibold text-earth-950">Do not acquire yet if…</h2><ul className="mt-6 space-y-4">{pauseSignals.map(x => <li key={x} className="flex gap-3 leading-7 text-earth-800"><span aria-hidden>—</span><span>{x}</span></li>)}</ul></div>
          <div className="rounded-[2.5rem] border border-earth-200 bg-white p-8"><p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-500">Cost architecture</p><h2 className="mt-4 font-display text-3xl font-semibold text-earth-950">Budget by obligations, not a false universal price.</h2><p className="mt-5 leading-7 text-earth-700">Local prices change quickly. Build your own current budget for acquisition, secure setup, food, routine veterinary care, parasite prevention, training, replacement equipment, transport and an emergency reserve.</p><Link href="/tools/cost-estimator" className="mt-7 inline-block rounded-full bg-forest-900 px-6 py-3 text-sm font-bold text-white">Open the cost estimator</Link></div>
        </section>

        <section className="py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-500">Questions to take to a professional</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-earth-950">Expertise becomes valuable when it changes the questions you ask.</h2>
          <p className="mt-5 max-w-3xl leading-7 text-earth-700">Use these as starting points, then give the professional accurate records and enough context to examine your individual dog and household.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">{professionalQuestions.map(item => <article key={item.title} className="rounded-[2rem] border border-earth-200 bg-white p-7"><h3 className="font-display text-2xl font-semibold text-earth-950">{item.title}</h3><ul className="mt-5 space-y-3">{item.questions.map(question => <li key={question} className="flex gap-3 text-sm leading-6 text-earth-700"><span aria-hidden className="text-forest-700">→</span><span>{question}</span></li>)}</ul></article>)}</div>
        </section>

        <section className="py-16">
          <div className="rounded-[2.5rem] border border-earth-200 bg-white p-8 md:p-10"><p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-500">Evidence record</p><h2 className="mt-4 font-display text-4xl font-semibold text-earth-950">Claims should be inspectable.</h2><p className="mt-5 max-w-4xl leading-7 text-earth-700">This dossier uses cautious decision guidance and avoids invented breed statistics. Breed descriptions are not predictions about an individual dog. Health screening should be verified through original reports and discussed with a veterinarian; safety depends on supervision and management, not breed reputation alone.</p><dl className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><div className="rounded-2xl bg-earth-50 p-4"><dt className="text-xs font-bold uppercase tracking-wider text-earth-500">Current status</dt><dd className="mt-2 font-semibold text-earth-900">Editorial synthesis</dd></div><div className="rounded-2xl bg-earth-50 p-4"><dt className="text-xs font-bold uppercase tracking-wider text-earth-500">External review</dt><dd className="mt-2 font-semibold text-earth-900">Not yet completed</dd></div><div className="rounded-2xl bg-earth-50 p-4"><dt className="text-xs font-bold uppercase tracking-wider text-earth-500">Claim language</dt><dd className="mt-2 font-semibold text-earth-900">Qualified, not predictive</dd></div><div className="rounded-2xl bg-earth-50 p-4"><dt className="text-xs font-bold uppercase tracking-wider text-earth-500">Corrections</dt><dd className="mt-2 font-semibold text-earth-900"><Link className="underline decoration-earth-300 underline-offset-4" href="/contact">Submit evidence</Link></dd></div></dl><div className="mt-7 rounded-2xl border border-earth-200 p-5"><p className="text-sm font-bold text-earth-900">How statements are classified</p><p className="mt-2 text-sm leading-6 text-earth-600">Evidence-supported · professional consensus · expert judgment · field observation · disputed · unknown. Future expert contributions will be labelled rather than silently blended into fact.</p></div><div className="mt-7 grid gap-3 md:grid-cols-2"><a className="rounded-2xl bg-earth-50 p-4 font-bold text-earth-800" href="https://ofa.org/chic-programs/browse-by-breed/">OFA breed health-screening records ↗</a><a className="rounded-2xl bg-earth-50 p-4 font-bold text-earth-800" href="https://www.rspca.org.uk/adviceandwelfare/seasonal/summer/dogs">RSPCA hot-weather dog guidance ↗</a></div><p className="mt-6 text-sm leading-6 text-earth-500">Educational information only. It does not replace veterinary assessment, a qualified behaviour professional or jurisdiction-specific legal advice.</p></div>
        </section>

        <section className="pb-16"><div className="rounded-[2.5rem] bg-forest-100 p-8 md:flex md:items-center md:justify-between md:gap-8"><div><p className="text-sm font-bold uppercase tracking-[0.22em] text-forest-800">Next decision</p><h2 className="mt-3 font-display text-3xl font-semibold text-forest-950">Test the household before choosing the dog.</h2></div><div className="mt-6 flex flex-wrap gap-3 md:mt-0"><Link href="/tools/readiness-checklist" className="rounded-full bg-forest-950 px-6 py-3 text-sm font-bold text-white">Readiness checklist</Link><Link href="/guides/before-buying-powerful-breed" className="rounded-full border border-forest-800 px-6 py-3 text-sm font-bold text-forest-950">Buyer due diligence</Link></div></div></section>
      </div>
    </section>
  </>;
}
