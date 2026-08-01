import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GuardDogChecker } from "@/components/tools/GuardDogChecker";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Guard Dog Responsibility Checker",
  description: "A responsible-protection checker for households considering guard dogs or powerful dog breeds."
};

export default function GuardDogCheckerPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Protection responsibility" title="Guard Dog Responsibility Checker" text="A protective dog is not a weapon. Check whether the household is ready for control, training, visitor safety, and public responsibility." />
      <GuardDogChecker />
      <Footer />
    </main>
  );
}