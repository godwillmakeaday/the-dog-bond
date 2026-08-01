import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { DirectoryPlaceholder } from "@/components/DirectoryPlaceholder";

export const metadata: Metadata = {
  title: "Dog Bond Directory",
  description: "Future directory placeholder for responsible trainers, vets, shelters, breeders, estate partners, and education partners."
};

export default function DirectoryPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Directory" title="Dog Bond Directory" text="Future directory placeholder for responsible trainers, vets, shelters, breeders, estate partners, and education partners." />
      <DirectoryPlaceholder />
      <Footer />
    </main>
  );
}
