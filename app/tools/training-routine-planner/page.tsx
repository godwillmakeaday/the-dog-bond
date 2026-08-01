import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TrainingRoutinePlanner } from "@/components/tools/TrainingRoutinePlanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Training Routine Planner",
  description: "A humane weekly dog training routine planner for obedience, leash control, feeding discipline, socialization, and calm visitor response."
};

export default function TrainingRoutinePlannerPage() {
  return (
    <main>
      <Header />
      <PageHero eyebrow="Training utility" title="Training Routine Planner" text="Create a simple humane weekly training routine based on dog age, owner experience, goal, and daily time." />
      <TrainingRoutinePlanner />
      <Footer />
    </main>
  );
}