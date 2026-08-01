import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { RelatedLinks } from "@/components/RelatedLinks";
import { StaticContactCTA } from "@/components/StaticContactCTA";

export const metadata: Metadata = {
  title: "Partner With Us",
  description: "The original partnership entry point, now connected to the wider Dog Bond partnership system."
};

export default function PartnerWithUsPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Partnership entry" title="Partner With Us" text="This page is now part of the wider Dog Bond partnership system for responsible trainers, vets, shelters, breeders, estate managers, schools, brands, and education partners." />
      <RelatedLinks title="Partnership system" links={[
        { title: "Partners", href: "/partners", text: "Read the full partnership philosophy and standards." },
        { title: "For Trainers", href: "/partners/trainers", text: "Humane training, obedience, leash control, socialization, and public safety." },
        { title: "For Vets", href: "/partners/vets", text: "Health education, vaccination awareness, parasite control, and responsible referral." },
        { title: "For Breeders", href: "/partners/breeders", text: "Suitability before sale, buyer education, and health transparency." },
        { title: "For Estate Managers", href: "/partners/estate-managers", text: "Leash rules, neighbour peace, roaming, waste, and visitor safety." },
        { title: "Directory", href: "/directory", text: "Future directory for responsible partners after standards come first." }
      ]} />
      <RelatedLinks title="Trust documents" links={[
        { title: "Editorial Policy", href: "/editorial-policy", text: "How The Dog Bond protects responsible education." },
        { title: "Disclaimer", href: "/disclaimer", text: "Limits of the platform and professional referral." },
        { title: "Use The Dog Bond", href: "/use-the-dog-bond", text: "See user and partner pathways." }
      ]} dark />
      <StaticContactCTA title="Partner interest" text="Dedicated partner intake forms are coming soon. For now, email a short note about your category and responsible dog ownership interest." email="partners@thedogbond.com" />
      <Footer />
    </main>
  );
}
