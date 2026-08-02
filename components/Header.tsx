import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <>
      <header className="relative z-40 border-b border-earth-200/70 bg-earth-50/92 backdrop-blur-xl lg:sticky lg:top-0 lg:z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="The Dog Bond home"
          >
            <Image
              src="/mark.svg"
              alt="The Dog Bond mark"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-xl sm:h-11 sm:w-11 sm:rounded-2xl"
              priority
            />

            <div className="min-w-0">
              <p className="font-display text-base font-bold tracking-tight text-earth-900 sm:text-xl">
                {site.name}
              </p>
              <p className="hidden text-xs font-medium text-earth-600 sm:block">
                {site.tagline}
              </p>
            </div>
          </Link>

          <nav
            className="hidden items-center gap-4 lg:flex"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold text-earth-700 transition hover:text-earth-950 xl:text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="/start-here"
            className="shrink-0 rounded-full bg-earth-900 px-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-earth-50 shadow-card transition hover:-translate-y-0.5 hover:bg-forest-900 sm:px-5 sm:py-3 sm:text-sm"
          >
            Start Here
          </a>
        </div>
      </header>

      <nav
        className="sticky top-0 z-50 border-b border-earth-200/70 bg-earth-50/95 backdrop-blur-xl lg:hidden"
        aria-label="Mobile navigation"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2.5 sm:gap-3 sm:px-5 sm:py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-earth-200 bg-white/70 px-3.5 py-2 text-xs font-bold text-earth-700 sm:px-4"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
