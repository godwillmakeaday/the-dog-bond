export type PartnerCategory = {
  slug: string;
  title: string;
  cardTitle: string;
  summary: string;
  whoFor: string;
  whyMatters: string;
  responsiblePartnership: string;
  standards: string[];
  notSupport: string[];
  related: { title: string; href: string }[];
};

export const partnerCategories: PartnerCategory[] = [
  {
    "slug": "trainers",
    "title": "For Dog Trainers",
    "cardTitle": "Trainer Partner",
    "summary": "For trainers committed to humane training, obedience, leash control, socialization, owner education, and public safety.",
    "whoFor": "Dog trainers, obedience instructors, behaviour educators, and training schools that want to support responsible ownership.",
    "whyMatters": "Training shapes the relationship between dog, owner, household, visitors, neighbours, and public safety.",
    "responsiblePartnership": "Responsible trainers can help create education notes, owner checklists, training pathways, and public safety resources.",
    "standards": [
      "Humane training",
      "No cruelty-based claims",
      "Clear owner education",
      "Respect for professional limits",
      "Safety around children, visitors, and neighbours"
    ],
    "notSupport": [
      "Cruelty as training",
      "Attack culture",
      "Intimidation marketing",
      "Dangerous handling instruction",
      "Fake guarantees"
    ],
    "related": [
      {
        "title": "Training Without Cruelty",
        "href": "/topics/dog-training-without-cruelty"
      },
      {
        "title": "Training Routine Planner",
        "href": "/tools/training-routine-planner"
      },
      {
        "title": "Leash Control",
        "href": "/glossary/leash-control"
      }
    ]
  },
  {
    "slug": "vets",
    "title": "For Veterinarians and Clinics",
    "cardTitle": "Vet/Clinic Partner",
    "summary": "For veterinary professionals and clinics interested in health education, vaccination awareness, parasite control, and responsible referral.",
    "whoFor": "Veterinarians, clinics, animal health educators, vaccination teams, and public health partners.",
    "whyMatters": "Dog ownership without health awareness can become suffering, disease risk, cost shock, and public concern.",
    "responsiblePartnership": "Vet partners can support general education, vaccination awareness, parasite-control education, and referral pathways without fake online diagnosis.",
    "standards": [
      "No fake diagnosis online",
      "Respect veterinary limits",
      "Health education",
      "Transparent claims",
      "Emergency referral where needed"
    ],
    "notSupport": [
      "Medical misinformation",
      "False cure claims",
      "Pretending articles are vet-reviewed when they are not",
      "Selling fear",
      "Replacing clinic care"
    ],
    "related": [
      {
        "title": "Vaccination",
        "href": "/glossary/vaccination"
      },
      {
        "title": "Parasite Control",
        "href": "/glossary/parasite-control"
      },
      {
        "title": "Cost and Care",
        "href": "/topics/dog-cost-and-care"
      }
    ]
  },
  {
    "slug": "shelters",
    "title": "For Shelters and Rescue Groups",
    "cardTitle": "Shelter/Rescue Partner",
    "summary": "For shelters and rescue groups focused on adoption readiness, abandonment prevention, humane care, and public education.",
    "whoFor": "Shelters, rescue groups, foster networks, animal welfare educators, and adoption readiness advocates.",
    "whyMatters": "Abandonment often begins with poor ownership decisions before the dog is ever acquired.",
    "responsiblePartnership": "Shelter partners can support adoption readiness resources, abandonment prevention, and humane ownership education.",
    "standards": [
      "Adoption readiness",
      "Humane care",
      "Transparent placement",
      "Public education",
      "No shame-based manipulation"
    ],
    "notSupport": [
      "Abandonment",
      "Unsafe adoption pressure",
      "Hiding serious behaviour concerns",
      "Neglect",
      "Cruel handling"
    ],
    "related": [
      {
        "title": "Abandoning a Difficult Dog",
        "href": "/mistakes/abandoning-a-difficult-dog"
      },
      {
        "title": "Responsible Ownership",
        "href": "/glossary/responsible-dog-ownership"
      },
      {
        "title": "Readiness Checklist",
        "href": "/tools/readiness-checklist"
      }
    ]
  },
  {
    "slug": "breeders",
    "title": "For Responsible Breeders",
    "cardTitle": "Responsible Breeder Partner",
    "summary": "For breeders willing to prioritize suitability before sale, buyer education, health transparency, and responsible placement.",
    "whoFor": "Breeders who want buyers to understand breed suitability, owner capacity, health responsibility, and long-term care.",
    "whyMatters": "A dog sale without education can create suffering, abandonment, fear, and public risk.",
    "responsiblePartnership": "Responsible breeders can support buyer education, suitability checks, care notes, and breed-specific responsibility pages.",
    "standards": [
      "Suitability before sale",
      "Buyer education",
      "No reckless powerful-breed marketing",
      "Health transparency",
      "No intimidation culture"
    ],
    "notSupport": [
      "Irresponsible breeding",
      "Fake guarantees",
      "Selling powerful breeds as status weapons",
      "Hiding health concerns",
      "Pressure selling"
    ],
    "related": [
      {
        "title": "Breed Suitability",
        "href": "/topics/breed-suitability"
      },
      {
        "title": "Before Buying a Powerful Breed",
        "href": "/guides/before-buying-powerful-breed"
      },
      {
        "title": "Breed Comparison",
        "href": "/tools/breed-comparison"
      }
    ]
  },
  {
    "slug": "estate-managers",
    "title": "For Estate Managers and Shared Communities",
    "cardTitle": "Estate Safety Partner",
    "summary": "For estate managers and shared communities that need dog rules, public safety, neighbour peace, children safety, and visitor control.",
    "whoFor": "Estate associations, property managers, security committees, landlords, and shared communities.",
    "whyMatters": "Dogs in shared spaces affect children, neighbours, roads, visitors, guards, cleaners, and residents who may fear dogs.",
    "responsiblePartnership": "Estate partners can create education around leash rules, roaming, noise, waste, visitor safety, and responsible dog policies.",
    "standards": [
      "Public safety",
      "Neighbour respect",
      "Leash and roaming rules",
      "Child safety",
      "No reckless intimidation"
    ],
    "notSupport": [
      "Roaming dogs",
      "Noise neglect",
      "Using dogs to intimidate neighbours",
      "No-control security culture",
      "Ignoring child safety"
    ],
    "related": [
      {
        "title": "Estate Dogs",
        "href": "/african-dog-life/estate-dogs"
      },
      {
        "title": "Dogs and Neighbours",
        "href": "/guides/dogs-and-neighbours"
      },
      {
        "title": "Estate Dog Ownership",
        "href": "/glossary/estate-dog-ownership"
      }
    ]
  },
  {
    "slug": "brands",
    "title": "For Dog-Care Brands and Education Sponsors",
    "cardTitle": "Brand/Education Sponsor",
    "summary": "For dog-care brands that want transparent education sponsorship without fake claims or pressure selling.",
    "whoFor": "Dog-food brands, care brands, product makers, retailers, and education sponsors.",
    "whyMatters": "Brands can support public education, but trust must remain stronger than promotion.",
    "responsiblePartnership": "Brand partners can sponsor educational resources, public campaigns, and responsible ownership materials with transparent visibility.",
    "standards": [
      "Transparent sponsorship",
      "No fake medical claims",
      "No pressure selling",
      "No hidden influence",
      "Editorial independence"
    ],
    "notSupport": [
      "Fake claims",
      "Fear marketing",
      "Misleading guarantees",
      "Affiliate-heavy pressure",
      "Unsafe product advice"
    ],
    "related": [
      {
        "title": "Editorial Policy",
        "href": "/editorial-policy"
      },
      {
        "title": "Dog Cost and Care",
        "href": "/topics/dog-cost-and-care"
      },
      {
        "title": "Updates",
        "href": "/updates"
      }
    ]
  },
  {
    "slug": "schools",
    "title": "For Schools and Community Groups",
    "cardTitle": "School/Community Partner",
    "summary": "For schools and community groups interested in dog safety education, children, fear awareness, and responsible pet culture.",
    "whoFor": "Schools, youth groups, churches, community groups, civic groups, and public education organizers.",
    "whyMatters": "Children and communities need simple dog-safety education before fear, teasing, running, or rough handling creates risk.",
    "responsiblePartnership": "Schools and community groups can use Dog Bond resources for public education campaigns, safety talks, and responsible ownership culture.",
    "standards": [
      "Child safety",
      "Simple education",
      "No fear culture",
      "Humane treatment",
      "Clear professional referral"
    ],
    "notSupport": [
      "Dangerous demonstrations",
      "Dog fighting culture",
      "Mocking fear",
      "Unsafe child-dog contact",
      "False certainty"
    ],
    "related": [
      {
        "title": "Dogs Around Children",
        "href": "/topics/dogs-around-children"
      },
      {
        "title": "Dogs, Children, and Safety",
        "href": "/campaigns/dogs-children-and-safety"
      },
      {
        "title": "Bite Risk",
        "href": "/glossary/bite-risk"
      }
    ]
  }
];

export const partnerPrinciples = [
  "Responsible ownership remains the editorial center.",
  "Partnership must not weaken public safety, humane training, or health honesty.",
  "The Dog Bond will not support cruelty, dog fighting, fake medical claims, unsafe intimidation culture, or irresponsible breeding.",
  "Partner visibility must be transparent and trust-preserving."
];
