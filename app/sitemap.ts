import type { MetadataRoute } from "next";
import { decisionGuides } from "@/lib/data";
import { breedPages } from "@/lib/breeds";
import { campaignPages } from "@/lib/campaigns";
import { site } from "@/lib/site";
import { topicPages } from "@/lib/topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticRoutes = [
    "",
    "/start-here",
    "/use-the-dog-bond",
    "/search",
    "/tools",
    "/knowledge-map",
    "/guides",
    "/topics",
    "/glossary",
    "/mistakes",
    "/breeds",
    "/intelligence-vault",
    "/suitability-engine",
    "/breed-dossiers",
    "/african-dog-life",
    "/african-dog-life/nigeria",
    "/african-dog-life/compound-dogs",
    "/african-dog-life/estate-dogs",
    "/ownership-standard",
    "/articles",
    "/about",
    "/editorial-policy",
    "/disclaimer",
    "/contact",
    "/partner-with-us",
    "/partners",
    "/share",
    "/campaigns",
    "/manifesto",
    "/press",
    "/tools/cost-estimator",
    "/tools/breed-comparison",
    "/tools/readiness-checklist",
    "/tools/guard-dog-checker",
    "/tools/training-routine-planner"
  ];

  const articleRoutes = [
    "/articles/why-dogs-understand-humans",
    "/articles/guard-dog-vs-dangerous-dog",
    "/articles/what-makes-a-dog-loyal",
    "/articles/train-without-breaking-spirit",
    "/articles/breed-character-before-buying",
    "/articles/african-household-dog",
    "/articles/powerful-dog-without-discipline",
    "/articles/dog-fear-aggression-human-ignorance",
    "/articles/local-african-dogs-respect",
    "/articles/first-time-dog-owner-reality-check"
  ];

  const guideRoutes = decisionGuides.map((guide) => `/guides/${guide.slug}`);
  const topicRoutes = topicPages.map((topic) => `/topics/${topic.slug}`);
  const indexedBreedSlugs = new Set(["rottweiler", "boerboel", "german-shepherd"]);
  const breedRoutes = breedPages
    .filter((breed) => indexedBreedSlugs.has(breed.slug))
    .map((breed) => `/breeds/${breed.slug}`);
  const campaignRoutes = campaignPages.map((campaign) => `/campaigns/${campaign.slug}`);

  return [...staticRoutes, ...articleRoutes, ...guideRoutes, ...topicRoutes, ...breedRoutes, ...campaignRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-07-06T15:55:27.561Z"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/use-the-dog-bond") || route.startsWith("/partners") || route.startsWith("/campaigns") || route.startsWith("/manifesto") || route.startsWith("/press") || route.startsWith("/guides") || route.startsWith("/topics") || route.startsWith("/tools") ? 0.85 : 0.7
  }));
}
