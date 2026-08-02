export type AuthorityProfile = {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  profilePath?: string;
  credentials?: string[];
};

export type ReviewDiscipline =
  | "editorial"
  | "legal-public-responsibility"
  | "veterinary-medicine"
  | "animal-behaviour"
  | "dog-training"
  | "animal-welfare";

export const publisher = {
  name: "The Dog Bond",
  legalPublisher: "Pollymaggs Limited",
  description:
    "An African dog-ownership intelligence platform focused on responsible ownership, household suitability, public safety, training, and humane care.",
  editorialEmail: "Godwillmakeaday@gmail.com",
};

export const paulMagaji: AuthorityProfile = {
  id: "paul-magaji",
  name: "Paul Ajeh Magaji",
  role: "Founder, Publisher and Legal Editor",
  expertise: [
    "Responsible dog ownership",
    "Legal and public responsibility",
    "Institutional policy",
    "African household realities",
    "Consumer decision-making",
  ],
  credentials: [
    "Barrister and Solicitor of the Supreme Court of Nigeria",
  ],
  bio:
    "Paul Ajeh Magaji is a Nigerian barrister and institutional publisher. At The Dog Bond, his work concerns responsible ownership, household decision-making, public safety, contracts, evidence, institutional policy, and the legal consequences of living with dogs. He does not present himself as a veterinarian.",
  profilePath: "/about/paul-magaji",
};

export const editorialStandards = {
  purpose:
    "The Dog Bond publishes educational material to help readers make more responsible dog-ownership decisions.",
  evidence:
    "Claims should be proportionate to the available evidence, distinguish general guidance from professional assessment, and identify uncertainty where it matters.",
  corrections:
    "Material errors should be corrected transparently. Significant corrections should include a visible editorial note.",
  review:
    "Legal and public-responsibility material may receive legal editorial review. Veterinary, behavioural, training, or welfare claims should not be described as professionally reviewed unless a suitably qualified reviewer is expressly identified.",
  conflicts:
    "Commercial relationships, sponsorships, affiliate links, and paid directory placement must be disclosed and must not purchase editorial conclusions.",
};

export const defaultArticleAuthority = {
  author: paulMagaji,
  disciplines: [
    "editorial",
    "legal-public-responsibility",
  ] as ReviewDiscipline[],
  veterinaryReviewStatus: "Not represented as veterinary-reviewed",
  purpose: "Educational guidance",
  editorialPolicyPath: "/editorial-policy",
  disclaimerPath: "/disclaimer",
};

export function formatAuthorityDate(value?: string) {
  if (!value) return "Publication date being standardized";

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}
