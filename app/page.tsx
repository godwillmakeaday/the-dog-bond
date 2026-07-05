import { AboutSection } from "@/components/AboutSection";
import { AfricanDogLife } from "@/components/AfricanDogLife";
import { ArticleLibrary } from "@/components/ArticleLibrary";
import { BreedPreview } from "@/components/BreedPreview";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PhilosophySection } from "@/components/PhilosophySection";
import { Pillars } from "@/components/Pillars";
import { ProtectionResponsibility } from "@/components/ProtectionResponsibility";
import { TrainingDesk } from "@/components/TrainingDesk";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PhilosophySection />
      <Pillars />
      <BreedPreview />
      <TrainingDesk />
      <ProtectionResponsibility />
      <AfricanDogLife />
      <ArticleLibrary />
      <AboutSection />
      <Footer />
    </main>
  );
}
