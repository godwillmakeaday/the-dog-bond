import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CostEstimator } from "@/components/tools/CostEstimator";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dog Ownership Cost Estimator | The Dog Bond",
  description: "Estimate the responsibility burden behind food, health care, training, shelter, and long-term dog ownership."
};

export default function CostEstimatorPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Planning tool" title="Dog Ownership Cost Estimator" text="The cost of owning a dog is not just purchase price. Use this tool to think through the burden of food, care, training, shelter, and health responsibility." />
      <CostEstimator />
      <Footer />
    </main>
  );
}