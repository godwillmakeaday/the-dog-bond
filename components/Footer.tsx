import Image from "next/image";

const links = [
  ["About", "#about"],
  ["Training Desk", "#training"],
  ["Breed Guides", "#breeds"],
  ["Responsible Ownership", "#responsibility"],
  ["African Dog Life", "#african-dog-life"],
  ["Contact", "#contact"]
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-earth-200 bg-earth-50 px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/mark.svg" alt="The Dog Bond mark" width={46} height={46} />
              <div>
                <p className="font-display text-2xl font-bold text-earth-950">The Dog Bond</p>
                <p className="text-sm text-earth-600">Understanding man’s most social friend.</p>
              </div>
            </div>
            <p className="mt-6 max-w-2xl leading-8 text-earth-700">
              Educational content about dog behaviour, ownership, and training. Not a substitute for veterinary care, professional behavioural assessment, or local legal advice.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="rounded-2xl border border-earth-200 bg-white px-5 py-4 font-semibold text-earth-800 transition hover:border-earth-900 hover:text-earth-950">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-earth-200 pt-8 text-sm text-earth-600 md:flex-row">
          <p>© {new Date().getFullYear()} The Dog Bond. All rights reserved.</p>
          <p>Built as a premium authority platform, not a generic pet blog.</p>
        </div>
      </div>
    </footer>
  );
}
