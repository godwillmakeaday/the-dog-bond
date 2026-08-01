import { AboutSection } from "@/components/AboutSection";
import { AfricanDogLife } from "@/components/AfricanDogLife";
import { ArticleLibrary } from "@/components/ArticleLibrary";
import { AuthoritySystems } from "@/components/AuthoritySystems";
import { BreedPreview } from "@/components/BreedPreview";
import { Footer } from "@/components/Footer";
import { HomeConversionSection } from "@/components/HomeConversionSection";
import { HomeLaunchSections } from "@/components/HomeLaunchSections";
import { FromBlogToIntelligence } from "@/components/FromBlogToIntelligence";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeUtilityPathways } from "@/components/HomeUtilityPathways";
import { GuideFeatureSection } from "@/components/GuideFeatureSection";
import { Pillars } from "@/components/Pillars";
import { ProtectionResponsibility } from "@/components/ProtectionResponsibility";
import { ReadinessBriefCTA } from "@/components/ReadinessBriefCTA";
import { RelatedLinks } from "@/components/RelatedLinks";
import { TrainingDesk } from "@/components/TrainingDesk";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HomeLaunchSections />
      <HomeConversionSection />
      <RelatedLinks title="Find the right path quickly" links={[{ title: "Start Here", href: "/start-here", text: "Choose the right pathway for your dog situation." }, { title: "Find Guides and Tools", href: "/search", text: "Search the platform by question or topic." }, { title: "Dog Ownership Topics", href: "/topics", text: "Browse organized topic pages for discovery." }]} />
      <FromBlogToIntelligence />
      <AuthoritySystems />
      <GuideFeatureSection />
      <HomeUtilityPathways />
      <RelatedLinks
        title="Start with the system, not random reading."
        links={[
          { title: "Dog Ownership Intelligence Vault", href: "/intelligence-vault", text: "Use the new control room to navigate the whole site." },
          { title: "Dog Suitability Engine", href: "/suitability-engine", text: "Test whether your household is ready for the kind of dog you want." },
          { title: "First-Time Reality Check", href: "/articles/first-time-dog-owner-reality-check", text: "Read this before buying your first dog." }
        ]}
      />
      <Pillars />
      <BreedPreview />
      <TrainingDesk />
      <ProtectionResponsibility />
      <AfricanDogLife />
      <ArticleLibrary />
      <ReadinessBriefCTA />
      <AboutSection />
      <Footer />
    </main>
  );
}
