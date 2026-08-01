import Image from "next/image";
import { site } from "@/lib/site";

const groups = [
  { title: "Platform", links: [{ title: "Start Here", href: "/start-here" }, { title: "Use The Dog Bond", href: "/use-the-dog-bond" }, { title: "Search", href: "/search" }, { title: "Tools", href: "/tools" }, { title: "Guides", href: "/guides" }] },
  { title: "Deep Libraries", links: [{ title: "Topics", href: "/topics" }, { title: "Glossary", href: "/glossary" }, { title: "Mistake Library", href: "/mistakes" }, { title: "Breeds", href: "/breeds" }, { title: "Articles", href: "/articles" }] },
  { title: "African Dog Life", links: [{ title: "Dog Ownership in Nigeria", href: "/african-dog-life/nigeria" }, { title: "Nigerian Compound Dogs", href: "/african-dog-life/compound-dogs" }, { title: "Estate Dogs", href: "/african-dog-life/estate-dogs" }, { title: "Local African Dogs", href: "/topics/local-african-dogs" }] },
  { title: "Partnership", links: [{ title: "Partner With Us", href: "/partner-with-us" }, { title: "Partners", href: "/partners" }, { title: "For Trainers", href: "/partners/trainers" }, { title: "For Vets", href: "/partners/vets" }, { title: "For Breeders", href: "/partners/breeders" }, { title: "Directory", href: "/directory" }] },
  { title: "Public Distribution", links: [{ title: "Share The Dog Bond", href: "/share" }, { title: "Updates", href: "/updates" }, { title: "Campaigns", href: "/campaigns" }, { title: "Readiness Before Ownership", href: "/campaigns/readiness-before-ownership" }, { title: "Responsible Guard Dogs", href: "/campaigns/responsible-guard-dogs" }] },
  { title: "Authority", links: [{ title: "Manifesto", href: "/manifesto" }, { title: "Press", href: "/press" }] },
  { title: "Trust", links: [{ title: "About", href: "/about" }, { title: "Editorial Policy", href: "/editorial-policy" }, { title: "Disclaimer", href: "/disclaimer" }, { title: "Contact", href: "/contact" }] }
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-earth-200 bg-earth-50 px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/mark.svg" alt="The Dog Bond mark" width={46} height={46} />
              <div>
                <p className="font-display text-2xl font-bold text-earth-950">{site.name}</p>
                <p className="text-sm text-earth-600">{site.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-2xl leading-8 text-earth-700">
              The Dog Bond provides educational dog ownership information. It is not a substitute for veterinary care, professional training, behavioural assessment, or legal guidance.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-7">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-earth-500">{group.title}</h2>
                <div className="mt-4 grid gap-2">
                  {group.links.map((link) => (
                    <a key={link.href + link.title} href={link.href} className="text-sm font-semibold leading-6 text-earth-700 transition hover:text-earth-950">{link.title}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-12 border-t border-earth-200 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-earth-500">
          © {new Date().getFullYear()} {site.name}. Educational platform for responsible dog ownership.
        </p>
      </div>
    </footer>
  );
}
