export type DogTool = {
  slug: string;
  title: string;
  purpose: string;
  forWhom: string;
  decision: string;
  href: string;
  status: "Live";
};

export const dogTools: DogTool[] = [
  {
    slug: "suitability-engine",
    title: "Dog Suitability Engine",
    purpose: "Test whether your household, space, time, budget, and experience fit the kind of dog you want.",
    forWhom: "First-time owners, families, compound households, and breed buyers.",
    decision: "Should I get this kind of dog?",
    href: "/suitability-engine",
    status: "Live"
  },
  {
    slug: "cost-estimator",
    title: "Dog Ownership Cost Estimator",
    purpose: "Understand the burden behind food, water, shelter, training, health care, and emergency readiness.",
    forWhom: "Budget-conscious owners and anyone tempted to calculate only the purchase price.",
    decision: "Can I afford this responsibility?",
    href: "/tools/cost-estimator",
    status: "Live"
  },
  {
    slug: "breed-comparison",
    title: "Breed Comparison Tool",
    purpose: "Compare breed suitability, training difficulty, protection instinct, family fit, climate notes, and warnings.",
    forWhom: "People choosing between popular, powerful, local, family, and working dogs.",
    decision: "Which breed fits my household best?",
    href: "/tools/breed-comparison",
    status: "Live"
  },
  {
    slug: "readiness-checklist",
    title: "Dog Readiness Checklist",
    purpose: "Check daily care, health responsibility, training, household safety, and long-term commitment before ownership.",
    forWhom: "Families, first-time owners, and anyone preparing for a dog.",
    decision: "Am I ready enough to begin?",
    href: "/tools/readiness-checklist",
    status: "Live"
  },
  {
    slug: "guard-dog-checker",
    title: "Guard Dog Responsibility Checker",
    purpose: "Separate responsible protection from risk before choosing a powerful or protective dog.",
    forWhom: "Security-conscious compounds, estates, farms, offices, and households with visitors or children.",
    decision: "Am I ready for a protection dog?",
    href: "/tools/guard-dog-checker",
    status: "Live"
  },
  {
    slug: "training-routine-planner",
    title: "Training Routine Planner",
    purpose: "Generate a simple humane weekly training routine based on dog age, owner experience, goal, and available time.",
    forWhom: "Owners who need structure without cruelty, shouting, or confusion.",
    decision: "What should I train this week?",
    href: "/tools/training-routine-planner",
    status: "Live"
  }
];

export function toolForGuide(category: string, slug: string) {
  if (category.includes("Cost") || slug.includes("cost") || slug.includes("heat") || slug.includes("neglect")) {
    return dogTools.find((tool) => tool.slug === "cost-estimator");
  }
  if (category.includes("Breed") || slug.includes("breed") || slug.includes("rottweiler") || slug.includes("boerboel") || slug.includes("german-shepherd")) {
    return dogTools.find((tool) => tool.slug === "breed-comparison");
  }
  if (category.includes("Protection") || slug.includes("guard") || slug.includes("visitor") || slug.includes("powerful")) {
    return dogTools.find((tool) => tool.slug === "guard-dog-checker");
  }
  if (category.includes("Training") || slug.includes("training") || slug.includes("leash") || slug.includes("feeding") || slug.includes("socialization")) {
    return dogTools.find((tool) => tool.slug === "training-routine-planner");
  }
  if (category.includes("Before") || slug.includes("first-time") || slug.includes("should-i")) {
    return dogTools.find((tool) => tool.slug === "readiness-checklist");
  }
  return dogTools.find((tool) => tool.slug === "suitability-engine");
}
