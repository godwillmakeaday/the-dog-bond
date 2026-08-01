import { toolForGuide } from "@/lib/tools";

export function guideDepthFor(guide: { slug: string; title: string; category: string; question: string }) {
  const tool = toolForGuide(guide.category, guide.slug);

  return {
    quickVerdict: `Use this guide as a decision brief before acting on ${guide.title.toLowerCase()}. The safest path is to test capacity, avoid the common mistake, and use the related tool before choosing or changing anything.`,
    decisionFactors: [
      "Household space, gates, neighbours, children, and visitor patterns.",
      "Daily feeding, water, shade, shelter, exercise, and health-care capacity.",
      "Owner time for basic obedience, leash control, socialization, and calm routines.",
      "Whether the dog choice is being driven by responsibility or by status, fear, or pressure.",
      "Whether professional help is needed because the situation involves severe fear, repeated aggression, illness, or danger."
    ],
    faqs: [
      {
        question: "What is the first decision this guide should help me make?",
        answer: guide.question
      },
      {
        question: "Should I act immediately after reading this?",
        answer: "Use the guide to slow the decision down. If care, control, safety, or cost is uncertain, prepare first before acting."
      },
      {
        question: "Which tool should I use with this guide?",
        answer: tool ? `Use the ${tool.title} because it connects this guide to a practical decision step.` : "Start with the Suitability Engine and Readiness Checklist."
      },
      {
        question: "Does this replace professional help?",
        answer: "No. Veterinary problems, severe fear, repeated aggression, bite risk, injury, poisoning, heat distress, or dangerous behaviour require qualified professional help."
      }
    ],
    relatedTopics: relatedTopicsFor(guide.category),
    relatedTool: tool
  };
}

function relatedTopicsFor(category: string) {
  if (category.includes("Breed")) return ["breed-suitability", "first-time-dog-ownership", "ownership-mistakes"];
  if (category.includes("Protection")) return ["guard-dogs-public-safety", "ownership-mistakes", "dogs-around-children"];
  if (category.includes("Training")) return ["dog-training-without-cruelty", "ownership-mistakes"];
  if (category.includes("African")) return ["african-dog-life", "local-african-dogs", "heat-water-shelter"];
  if (category.includes("Children") || category.includes("Family")) return ["dogs-around-children", "public-safety", "ownership-mistakes"];
  if (category.includes("Cost") || category.includes("Health")) return ["dog-cost-and-care", "heat-water-shelter", "ownership-mistakes"];
  return ["first-time-dog-ownership", "ownership-mistakes"];
}
