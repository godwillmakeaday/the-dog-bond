import Image from "next/image";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-earth-200/70 bg-earth-50/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="The Dog Bond home">
          <Image src="/mark.svg" alt="The Dog Bond mark" width={44} height={44} className="rounded-2xl" priority />
          <div>
            <p className="font-display text-xl font-bold tracking-tight text-earth-900">{site.name}</p>
            <p className="hidden text-xs font-medium text-earth-600 sm:block">{site.tagline}</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-earth-700 transition hover:text-earth-950">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#responsibility"
          className="rounded-full bg-earth-900 px-5 py-3 text-sm font-bold text-earth-50 shadow-card transition hover:-translate-y-0.5 hover:bg-forest-900"
        >
          Ownership Code
        </a>
      </div>
    </header>
  );
}
