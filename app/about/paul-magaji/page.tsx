import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { paulMagaji, publisher } from "@/lib/authority";

export const metadata: Metadata = {
  title: "Paul Magaji — Author and Publisher",
  description:
    "Meet Paul Magaji, author and publisher of The Dog Bond, and learn about his professional background, editorial role, areas of competence, and publishing limits.",
};

const expertise = [
  {
    title: "Law and public responsibility",
    text:
      "Paul Magaji is a Nigerian lawyer. His work informs the publication&apos;s treatment of ownership duties, contracts, neighbourhood responsibility, institutional policy, public safety, and the legal consequences of decisions involving dogs.",
  },
  {
    title: "Responsible ownership systems",
    text:
      "His editorial focus includes household readiness, breed suitability, supervision, confinement, training discipline, acquisition decisions, long-term costs, and the responsibilities created by living with a dog.",
  },
  {
    title: "Institutional and editorial design",
    text:
      "He develops frameworks that help readers, families, organisations, breeders, trainers, and public institutions make clearer and more accountable decisions.",
  },
];

const limitations = [
  "He is not presented as a veterinarian.",
  "He is not presented as a certified veterinary behaviourist.",
  "He does not diagnose illness or prescribe veterinary treatment.",
  "General legal information on the site is not a substitute for formal legal advice based on a particular case and jurisdiction.",
  "Training and behavioural materials do not replace direct assessment by a suitably qualified professional.",
];

const editorialProcess = [
  {
    step: "1",
    title: "Define the practical question",
    text:
      "Each substantial article begins with a real ownership, welfare, safety, household, or institutional decision.",
  },
  {
    step: "2",
    title: "Separate fact from judgment",
    text:
      "The publication distinguishes established information, professional guidance, editorial interpretation, and unresolved uncertainty.",
  },
  {
    step: "3",
    title: "Check professional boundaries",
    text:
      "Medical, behavioural, training, legal, and emergency subjects are reviewed for wording that could create false confidence or imply expertise that has not been established.",
  },
  {
    step: "4",
    title: "Correct and improve",
    text:
      "Credible corrections, stronger evidence, and material changes in guidance should be reflected transparently in the relevant page.",
  },
];

export default function PaulMagajiPage() {
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="Author and publisher"
        title={paulMagaji.name}
        text={`Author, editor, and accountable publisher of ${publisher.name}.`}
      />

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-600">
              Professional profile
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold text-earth-950 md:text-5xl">
              Building a more responsible culture of dog ownership
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-earth-700">
              <p>
                {paulMagaji.name} is a Nigerian lawyer, writer, institutional
                thinker, and publisher. He founded {publisher.name} to examine
                dog ownership as more than affection, fashion, security, or
                breed preference.
              </p>

              <p>
                His central concern is responsibility: whether a household is
                prepared, whether a dog is suitable for its environment,
                whether ownership decisions protect neighbours and visitors,
                and whether institutions can encourage humane and accountable
                practice.
              </p>

              <p>
                The platform is published by {publisher.legalPublisher}. Paul
                carries editorial responsibility for the publication&apos;s
                direction, standards, corrections, professional boundaries,
                and public-interest commitments.
              </p>
            </div>
          </div>

          <aside className="rounded-[2.5rem] border border-earth-200 bg-earth-50 p-8 shadow-card">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-600">
              Editorial role
            </p>

            <dl className="mt-6 space-y-6">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-earth-500">
                  Author
                </dt>
                <dd className="mt-1 text-lg font-semibold text-earth-950">
                  {paulMagaji.name}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-earth-500">
                  Publication
                </dt>
                <dd className="mt-1 text-lg font-semibold text-earth-950">
                  {publisher.name}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-earth-500">
                  Legal publisher
                </dt>
                <dd className="mt-1 text-lg font-semibold text-earth-950">
                  {publisher.legalPublisher}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-earth-500">
                  Editorial purpose
                </dt>
                <dd className="mt-1 leading-7 text-earth-700">
                  Responsible dog ownership education grounded in welfare,
                  household reality, public safety, and institutional
                  accountability.
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-600">
              Areas of contribution
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold text-earth-950 md:text-5xl">
              What informs his work
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {expertise.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-earth-200 bg-white p-7 shadow-card"
              >
                <h3 className="font-display text-2xl font-semibold text-earth-950">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-earth-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-earth-950 px-5 py-16 text-earth-50 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-300">
              Professional boundaries
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
              What this profile does not claim
            </h2>

            <p className="mt-5 text-lg leading-8 text-earth-100">
              Trust requires more than listing qualifications. It also requires
              stating clearly where those qualifications stop.
            </p>
          </div>

          <ul className="space-y-4">
            {limitations.map((limitation) => (
              <li
                key={limitation}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 leading-7 text-earth-100"
              >
                {limitation}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-600">
              Editorial method
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold text-earth-950 md:text-5xl">
              How substantial material is developed
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {editorialProcess.map((item) => (
              <article
                key={item.step}
                className="rounded-[2rem] border border-earth-200 bg-earth-50 p-7"
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-600">
                  Step {item.step}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-earth-950">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-earth-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-600">
            Corrections and accountability
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold text-earth-950">
            Readers can challenge the work
          </h2>

          <p className="mt-5 text-lg leading-8 text-earth-700">
            Readers, professionals, organisations, and institutions may report
            factual errors, outdated guidance, missing context, conflicts,
            unsafe wording, or evidence that materially changes an article&apos;s
            conclusion.
          </p>

          <p className="mt-5 leading-8 text-earth-700">
            Serious corrections should identify the relevant page, the
            disputed statement, and the strongest available supporting
            material. Submissions can be made through the contact page.
          </p>
        </div>
      </section>

      <RelatedLinks
        title="Author accountability"
        links={[
          {
            title: "Editorial Policy",
            href: "/editorial-policy",
            text: "Read the standards governing evidence, review, conflicts, and corrections.",
          },
          {
            title: "Educational Disclaimer",
            href: "/disclaimer",
            text: "Understand the limits of the publication and its professional boundaries.",
          },
          {
            title: "Contact",
            href: "/contact",
            text: "Report an error, submit evidence, or raise an editorial concern.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
