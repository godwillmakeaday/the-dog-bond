import Link from "next/link";
import { StaticContactCTA } from "@/components/StaticContactCTA";

const futureCategories = [
  "Trainers",
  "Vets/clinics",
  "Shelters/rescue groups",
  "Responsible breeders",
  "Estate/community partners",
  "Education sponsors"
];

export function DirectoryPlaceholder() {
  return (
    <>
      <section className="bg-earth-50 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-earth-200 bg-white p-8 shadow-card md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-earth-500">No fake listings</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-earth-950">Directory coming soon</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-earth-700">
            The Dog Bond Directory will only make sense if standards come before visibility. No trainers, vets, shelters, breeders, brands, or institutions are listed here yet.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {futureCategories.map((item) => <div key={item} className="rounded-2xl bg-earth-50 p-5 text-sm font-bold leading-6 text-earth-800">{item}</div>)}
          </div>
          <section className="mt-10 rounded-[2rem] bg-earth-950 p-7 text-earth-50">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-earth-300">Standards before listing</p>
            <p className="mt-3 leading-8 text-earth-100">
              Future listings should be guided by humane care, honest claims, public safety, transparency, and respect for veterinary and training limits.
            </p>
          </section>
          <Link href="/partners" className="mt-8 inline-block rounded-full bg-earth-900 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-earth-50">See partner standards</Link>
        </div>
      </section>
      <StaticContactCTA title="Directory interest" text="Responsible trainers, vets, shelters, breeders, estate partners, and education partners can express interest before directory intake opens." email="partners@thedogbond.com" />
    </>
  );
}
