export type ConversionPathway = {
  slug: string;
  title: string;
  summary: string;
  links: { title: string; href: string }[];
};

export const conversionPathways: ConversionPathway[] = [
  {
    "slug": "first-time-dog-owners",
    "title": "For first-time dog owners",
    "summary": "Begin with readiness, cost, household routine, and suitability before emotion takes over.",
    "links": [
      {
        "title": "Start Here",
        "href": "/start-here"
      },
      {
        "title": "Readiness Checklist",
        "href": "/tools/readiness-checklist"
      },
      {
        "title": "First-Time Dog Ownership",
        "href": "/topics/first-time-dog-ownership"
      },
      {
        "title": "Should I Get a Dog?",
        "href": "/guides/should-i-get-a-dog"
      }
    ]
  },
  {
    "slug": "families",
    "title": "For families",
    "summary": "Use child-safety, supervision, and breed-fit resources before bringing a dog into a family routine.",
    "links": [
      {
        "title": "Dogs Around Children",
        "href": "/topics/dogs-around-children"
      },
      {
        "title": "Dog Around Children Guide",
        "href": "/guides/dog-around-children"
      },
      {
        "title": "Choosing a Dog for Children",
        "href": "/guides/choosing-dog-for-children"
      },
      {
        "title": "Readiness Checklist",
        "href": "/tools/readiness-checklist"
      }
    ]
  },
  {
    "slug": "guard-dog-buyers",
    "title": "For people considering guard dogs",
    "summary": "Separate responsible protection from intimidation, fear, and public danger.",
    "links": [
      {
        "title": "Guard Dog Checker",
        "href": "/tools/guard-dog-checker"
      },
      {
        "title": "Guard Dogs and Public Safety",
        "href": "/topics/guard-dogs-public-safety"
      },
      {
        "title": "Before Buying a Powerful Breed",
        "href": "/guides/before-buying-powerful-breed"
      },
      {
        "title": "Ownership Standard",
        "href": "/ownership-standard"
      }
    ]
  },
  {
    "slug": "breed-buyers",
    "title": "For breed buyers",
    "summary": "Compare breeds by household fit, temperament, climate, training needs, and owner capacity.",
    "links": [
      {
        "title": "Breeds",
        "href": "/breeds"
      },
      {
        "title": "Breed Comparison",
        "href": "/tools/breed-comparison"
      },
      {
        "title": "Suitability Engine",
        "href": "/suitability-engine"
      },
      {
        "title": "Breed Suitability",
        "href": "/topics/breed-suitability"
      }
    ]
  },
  {
    "slug": "current-dog-owners",
    "title": "For current dog owners",
    "summary": "Improve training, avoid common mistakes, understand terms, and correct weak ownership patterns.",
    "links": [
      {
        "title": "Training Routine Planner",
        "href": "/tools/training-routine-planner"
      },
      {
        "title": "Mistake Library",
        "href": "/mistakes"
      },
      {
        "title": "Glossary",
        "href": "/glossary"
      },
      {
        "title": "Training Without Cruelty",
        "href": "/topics/dog-training-without-cruelty"
      }
    ]
  },
  {
    "slug": "african-households",
    "title": "For Nigerian/African households",
    "summary": "Explore compound, estate, local-dog, heat, visitor, neighbour, and public-safety realities.",
    "links": [
      {
        "title": "Dog Ownership in Nigeria",
        "href": "/african-dog-life/nigeria"
      },
      {
        "title": "Nigerian Compound Dogs",
        "href": "/african-dog-life/compound-dogs"
      },
      {
        "title": "Estate Dogs",
        "href": "/african-dog-life/estate-dogs"
      },
      {
        "title": "Local African Dogs",
        "href": "/topics/local-african-dogs"
      }
    ]
  },
  {
    "slug": "institutions-and-partners",
    "title": "For institutions and partners",
    "summary": "Understand standards before trainer, vet, shelter, breeder, estate, school, brand, or education collaboration.",
    "links": [
      {
        "title": "Partner With Us",
        "href": "/partner-with-us"
      },
      {
        "title": "Partners",
        "href": "/partners"
      },
      {
        "title": "Editorial Policy",
        "href": "/editorial-policy"
      },
      {
        "title": "Disclaimer",
        "href": "/disclaimer"
      }
    ]
  }
];
