import { articles, decisionGuides } from "@/lib/data";
import { breedPages } from "@/lib/breeds";
import { campaignPages } from "@/lib/campaigns";
import { glossaryTerms } from "@/lib/glossary";
import { ownerMistakes } from "@/lib/mistakes";
import { partnerCategories } from "@/lib/partners";
import { dogTools } from "@/lib/tools";
import { topicPages } from "@/lib/topics";

export type SearchItem = {
  title: string;
  type: "Guide" | "Tool" | "Article" | "Page" | "Topic" | "Glossary" | "Mistake" | "Breed" | "Partner" | "Campaign" | "Launch";
  category: string;
  description: string;
  href: string;
  keywords: string[];
};

const pages: SearchItem[] = [
  { title: "Start Here", type: "Page", category: "Pathway", description: "Choose your pathway: getting a dog, protection dog, breed comparison, or current ownership.", href: "/start-here", keywords: ["start", "begin", "new owner", "pathway"] },
  { title: "Use The Dog Bond", type: "Page", category: "Conversion", description: "Different pathways for owners, families, guard-dog buyers, breed buyers, African households, institutions, and partners.", href: "/use-the-dog-bond", keywords: ["use", "pathway", "conversion", "owner", "partner"] },
  { title: "About The Dog Bond", type: "Page", category: "Authority", description: "Mission, scope, principles, and what the platform does not do.", href: "/about", keywords: ["about", "mission", "trust", "platform"] },
  { title: "Editorial Policy", type: "Page", category: "Trust", description: "Content standards, humane training, public safety, African context, and partner independence.", href: "/editorial-policy", keywords: ["editorial", "policy", "trust", "standards"] },
  { title: "Educational Disclaimer", type: "Page", category: "Safety", description: "Limits of the platform and when to seek qualified professional help.", href: "/disclaimer", keywords: ["disclaimer", "veterinary", "legal", "emergency", "aggression"] },
  { title: "Contact The Dog Bond", type: "Page", category: "Contact", description: "General inquiries, feedback, corrections, and future partnership interest.", href: "/contact", keywords: ["contact", "feedback", "correction", "partnership"] },
  { title: "Knowledge Map", type: "Page", category: "Knowledge", description: "A structured map of dog decisions, responsibilities, risks, and ownership realities.", href: "/knowledge-map", keywords: ["knowledge", "map", "decision", "clusters"] },
  { title: "Dog Ownership Topics", type: "Page", category: "Topics", description: "Major topic areas for dog ownership, safety, training, breed suitability, and African dog life.", href: "/topics", keywords: ["topics", "seo", "categories", "learning"] },
  { title: "Dog Ownership Glossary", type: "Page", category: "Glossary", description: "Definitions of dog ownership, training, safety, and African dog-life terms.", href: "/glossary", keywords: ["glossary", "terms", "definitions"] },
  { title: "Dog Owner Mistake Library", type: "Page", category: "Mistakes", description: "Common dog ownership mistakes and safer alternatives.", href: "/mistakes", keywords: ["mistakes", "neglect", "abandonment", "cruelty"] },
  { title: "Dog Breed Authority Pages", type: "Page", category: "Breeds", description: "Breed-specific pages for suitability, owner readiness, and African household fit.", href: "/breeds", keywords: ["breeds", "rottweiler", "boerboel", "german shepherd"] },
  { title: "Dog Ownership in Nigeria", type: "Page", category: "African Dog Life", description: "Nigerian dog ownership realities: compounds, estates, security dogs, heat, feeding, and public safety.", href: "/african-dog-life/nigeria", keywords: ["Nigeria", "Nigerian dogs", "compound dogs", "estate dogs"] },
  { title: "Dogs in Nigerian Compounds", type: "Page", category: "African Dog Life", description: "Gate control, visitors, children, feeding discipline, barking, neighbours, shelter, and shade.", href: "/african-dog-life/compound-dogs", keywords: ["compound dog", "gate", "visitors", "Nigeria"] },
  { title: "Dogs in Estates and Shared Spaces", type: "Page", category: "African Dog Life", description: "Leash control, noise, roaming, neighbours, children, shared roads, and responsible estate ownership.", href: "/african-dog-life/estate-dogs", keywords: ["estate dog", "apartment dog", "shared spaces", "neighbours"] },
  { title: "Partner With The Dog Bond", type: "Partner", category: "Partnership", description: "Partnership standards for trainers, vets, shelters, breeders, brands, estate managers, schools, and institutions.", href: "/partners", keywords: ["partner with dog bond", "dog trainer partner", "vet partner", "responsible breeder", "estate dogs"] },
  { title: "Share The Dog Bond", type: "Page", category: "Distribution", description: "Share responsible dog ownership pathways with buyers, families, guard-dog owners, compounds, estates, and beginners.", href: "/share", keywords: ["share dog bond", "public distribution", "share"] },
  { title: "Get Dog Bond Updates", type: "Page", category: "Updates", description: "Future newsletter and community update pathway for Dog Bond resources.", href: "/updates", keywords: ["updates", "newsletter", "new guides"] },
  { title: "Dog Bond Public Education Campaigns", type: "Campaign", category: "Campaigns", description: "Campaign hub for public education around readiness, humane training, responsible guard dogs, local dogs, and children safety.", href: "/campaigns", keywords: ["dog ownership campaign", "public education", "campaign"] },
  { title: "Dog Bond Directory", type: "Page", category: "Directory", description: "Future directory placeholder for responsible trainers, vets, shelters, breeders, estate partners, and education partners.", href: "/directory", keywords: ["dog directory", "trainer directory", "vet directory", "breeder directory"] },

  { title: "The Dog Bond Manifesto", type: "Launch", category: "Manifesto", description: "The public launch doctrine behind The Dog Bond: responsibility before breed power, humane training, African reality, and public safety.", href: "/manifesto", keywords: ["manifesto", "launch", "responsibility before breed power", "doctrine"] },
  { title: "Press & Media", type: "Launch", category: "Media", description: "Public-facing media information for journalists, bloggers, partners, schools, trainers, institutions, and community educators.", href: "/press", keywords: ["press", "media", "journalists", "story angles"] },
  { title: "Public Launch Checklist", type: "Launch", category: "Launch", description: "A static launch readiness checklist covering platform, trust, SEO, distribution, and domain readiness.", href: "/launch-checklist", keywords: ["launch", "checklist", "public launch", "readiness"] },
  { title: "First 30 Days Launch Plan", type: "Launch", category: "Launch Plan", description: "A static first 30-day content and distribution plan for launching The Dog Bond slowly and responsibly.", href: "/launch-plan", keywords: ["30 day plan", "launch plan", "public launch", "distribution"] },
  { title: "Domain Migration Guide", type: "Launch", category: "Domain", description: "A static guide for moving from the Vercel subdomain to a custom domain later.", href: "/domain-guide", keywords: ["domain", "custom domain", "migration", "canonical", "Vercel"] },
  { title: "Platform Status", type: "Launch", category: "Status", description: "A static transparency page showing what exists, what is coming later, and what is not active yet.", href: "/status", keywords: ["status", "platform status", "coming later", "not active"] }
];

export const searchIndex: SearchItem[] = [
  ...pages,
  ...decisionGuides.map((guide) => ({
    title: guide.title,
    type: "Guide" as const,
    category: guide.category,
    description: guide.question,
    href: `/guides/${guide.slug}`,
    keywords: [guide.slug, guide.category, guide.question, guide.audience]
  })),
  ...dogTools.map((tool) => ({
    title: tool.title,
    type: "Tool" as const,
    category: "Tool",
    description: tool.purpose,
    href: tool.href,
    keywords: [tool.slug, tool.forWhom, tool.decision]
  })),
  ...articles.map((article) => ({
    title: article.title,
    type: "Article" as const,
    category: article.category,
    description: article.excerpt,
    href: `/articles/${article.slug}`,
    keywords: [article.slug, article.category, article.excerpt]
  })),
  ...topicPages.map((topic) => ({
    title: topic.title,
    type: "Topic" as const,
    category: "Topic",
    description: topic.description,
    href: `/topics/${topic.slug}`,
    keywords: [topic.slug, ...topic.keyQuestions, ...topic.guideSlugs, ...topic.glossaryTerms]
  })),
  ...glossaryTerms.map((term) => ({
    title: term.term,
    type: "Glossary" as const,
    category: term.category,
    description: term.shortDefinition,
    href: `/glossary/${term.slug}`,
    keywords: [term.slug, term.category, term.shortDefinition]
  })),
  ...ownerMistakes.map((mistake) => ({
    title: mistake.title,
    type: "Mistake" as const,
    category: mistake.category,
    description: mistake.shortDescription,
    href: `/mistakes/${mistake.slug}`,
    keywords: [mistake.slug, mistake.category, mistake.shortDescription, ...mistake.warningSignals]
  })),
  ...breedPages.map((breed) => ({
    title: breed.name,
    type: "Breed" as const,
    category: "Breed",
    description: breed.summary,
    href: `/breeds/${breed.slug}`,
    keywords: [breed.slug, breed.name, breed.summary, breed.bestFit, breed.notIdealFor]
  })),
  ...partnerCategories.map((category) => ({
    title: category.title,
    type: "Partner" as const,
    category: "Partner",
    description: category.summary,
    href: `/partners/${category.slug}`,
    keywords: [category.slug, category.cardTitle, category.summary, ...category.standards]
  })),
  ...campaignPages.map((campaign) => ({
    title: campaign.title,
    type: "Campaign" as const,
    category: "Campaign",
    description: campaign.summary,
    href: `/campaigns/${campaign.slug}`,
    keywords: [campaign.slug, campaign.summary, campaign.shareCopy, ...campaign.keyMessages]
  }))
];

export const popularSearches = [
  "first-time dog owner",
  "guard dog",
  "Rottweiler",
  "German Shepherd",
  "Boerboel",
  "local African dog",
  "compound dog",
  "dog in Nigeria",
  "dog around children",
  "dog cost",
  "dog heat shade water",
  "training without cruelty",
  "dog neglect",
  "dog socialization",
  "partner with dog bond",
  "dog trainer partner",
  "vet partner",
  "responsible breeder",
  "estate dogs",
  "share dog bond",
  "dog ownership campaign",
  "dog directory",
  "readiness before ownership",
  "launch",
  "manifesto",
  "press",
  "media",
  "domain",
  "status",
  "30 day plan",
  "public launch",
  "platform status"
];
