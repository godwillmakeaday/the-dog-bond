import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ReadinessChecklistTool } from "@/components/tools/ReadinessChecklistTool";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dog Readiness Checklist | The Dog Bond",
  description: "An interactive checklist for daily care, health responsibility, training, household safety, and long-term dog ownership commitment."
};

export default function ReadinessChecklistPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Readiness tool" title="Dog Readiness Checklist" text="Check whether the household is prepared for daily care, health responsibility, training, safety, and long-term commitment." />
      <ReadinessChecklistTool />
      <Footer />
    </main>
  );
}