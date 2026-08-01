export type SharePathway = {
  slug: string;
  title: string;
  summary: string;
  href: string;
  shareText: string;
};

export const sharePathways: SharePathway[] = [
  {
    "slug": "first-time-owner",
    "title": "First-Time Owner Pathway",
    "summary": "For someone excited about getting a dog but unsure about cost, time, training, and household fit.",
    "href": "/start-here",
    "shareText": "Before you buy a dog, check The Dog Bond’s first-time owner pathway."
  },
  {
    "slug": "guard-dog-responsibility",
    "title": "Guard Dog Responsibility Pathway",
    "summary": "For anyone thinking about protection, security, or powerful breeds.",
    "href": "/tools/guard-dog-checker",
    "shareText": "If you want a guard dog, start with responsibility first."
  },
  {
    "slug": "breed-suitability",
    "title": "Breed Suitability Pathway",
    "summary": "For someone choosing between Rottweiler, Boerboel, German Shepherd, local dog, or another breed.",
    "href": "/breeds",
    "shareText": "Before choosing a breed, check suitability, training needs, and owner capacity."
  },
  {
    "slug": "nigerian-compound-dog",
    "title": "Nigerian Compound Dog Pathway",
    "summary": "For households with gates, visitors, children, neighbours, and security expectations.",
    "href": "/african-dog-life/compound-dogs",
    "shareText": "This helps explain dogs in Nigerian compounds."
  },
  {
    "slug": "estate-dog-responsibility",
    "title": "Estate Dog Responsibility Pathway",
    "summary": "For estates, apartments, shared roads, neighbours, leash control, noise, and roaming concerns.",
    "href": "/african-dog-life/estate-dogs",
    "shareText": "Dog ownership in estates needs public safety and neighbour respect."
  },
  {
    "slug": "mistake-library",
    "title": "Dog Owner Mistake Library",
    "summary": "For anyone who needs to see what usually goes wrong before a dog suffers or becomes risky.",
    "href": "/mistakes",
    "shareText": "This mistake library may save many dogs and households."
  },
  {
    "slug": "glossary-for-beginners",
    "title": "Glossary for Beginners",
    "summary": "For people who need simple definitions of dog ownership, training, protection, care, and safety terms.",
    "href": "/glossary",
    "shareText": "This glossary explains common dog ownership terms clearly."
  }
];

export const suggestedShareMessages = [
  "Before you buy a dog, check this readiness guide.",
  "If you want a guard dog, start with responsibility first.",
  "This helps explain dogs in Nigerian compounds.",
  "This mistake library may save many dogs and households."
];
