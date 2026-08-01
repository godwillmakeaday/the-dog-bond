export type CampaignPage = {
  slug: string;
  title: string;
  summary: string;
  whyItMatters: string;
  whoShouldRead: string;
  keyMessages: string[];
  links: { title: string; href: string }[];
  shareCopy: string;
};

export const campaignPages: CampaignPage[] = [
  {
    "slug": "readiness-before-ownership",
    "title": "Readiness Before Ownership",
    "summary": "A campaign encouraging people to check care, cost, time, space, training, and safety before getting a dog.",
    "whyItMatters": "Many dog problems begin before purchase. Readiness protects the dog, the household, visitors, neighbours, and public safety.",
    "whoShouldRead": "First-time dog owners, parents, breed buyers, young people, and anyone considering a dog.",
    "keyMessages": [
      "A dog is a responsibility, not a weekend excitement.",
      "Capacity comes before breed preference.",
      "Cost includes food, water, shelter, health care, training, and emergencies.",
      "Delay ownership if care and control are uncertain."
    ],
    "links": [
      {
        "title": "Readiness Checklist",
        "href": "/tools/readiness-checklist"
      },
      {
        "title": "Should I Get a Dog?",
        "href": "/guides/should-i-get-a-dog"
      },
      {
        "title": "First-Time Dog Ownership",
        "href": "/topics/first-time-dog-ownership"
      }
    ],
    "shareCopy": "Before you buy a dog, check readiness first."
  },
  {
    "slug": "training-without-cruelty",
    "title": "Training Without Cruelty",
    "summary": "A campaign for humane training, calm correction, consistency, socialization, and owner education.",
    "whyItMatters": "Cruelty can produce fear, confusion, and danger. Humane discipline builds trust, clarity, and safer households.",
    "whoShouldRead": "Dog owners, trainers, families, current owners, and anyone struggling with obedience.",
    "keyMessages": [
      "Fear is not trust.",
      "Training needs clarity, not violence.",
      "Consistency is stronger than shouting.",
      "Professional help is needed for serious behaviour risk."
    ],
    "links": [
      {
        "title": "Training Without Cruelty Topic",
        "href": "/topics/dog-training-without-cruelty"
      },
      {
        "title": "Training Routine Planner",
        "href": "/tools/training-routine-planner"
      },
      {
        "title": "Humane Training",
        "href": "/glossary/humane-training"
      }
    ],
    "shareCopy": "Train with clarity, not cruelty."
  },
  {
    "slug": "responsible-guard-dogs",
    "title": "Responsible Guard Dogs",
    "summary": "A campaign separating responsible protection from reckless intimidation and public danger.",
    "whyItMatters": "Protection without control can endanger children, visitors, neighbours, workers, and dogs.",
    "whoShouldRead": "Security-conscious homes, compounds, estates, farms, offices, and powerful-breed buyers.",
    "keyMessages": [
      "A guard dog is not a loose weapon.",
      "Control matters more than fear.",
      "Visitors and children must be considered.",
      "Owner capacity comes before breed power."
    ],
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
      }
    ],
    "shareCopy": "If you want a guard dog, start with responsibility first."
  },
  {
    "slug": "respect-local-african-dogs",
    "title": "Respect Local African Dogs",
    "summary": "A campaign against treating local African dogs as disposable or inferior.",
    "whyItMatters": "Local dogs can be resilient, intelligent, alert, and adaptive when they receive care, training, and respect.",
    "whoShouldRead": "African households, rural homes, compounds, owners of local dogs, and people comparing pedigree and local dogs.",
    "keyMessages": [
      "Local dogs deserve care and training.",
      "Adaptation is not inferiority.",
      "Every dog needs food, water, shelter, and health care.",
      "Respect begins with responsibility."
    ],
    "links": [
      {
        "title": "Local African Dogs Topic",
        "href": "/topics/local-african-dogs"
      },
      {
        "title": "Local African Dog Breed Page",
        "href": "/breeds/local-african-dog"
      },
      {
        "title": "Local African Dog Glossary",
        "href": "/glossary/local-african-dog"
      }
    ],
    "shareCopy": "Local African dogs deserve respect, care, and training."
  },
  {
    "slug": "dogs-children-and-safety",
    "title": "Dogs, Children, and Safety",
    "summary": "A campaign helping families teach supervision, boundaries, fear awareness, and safer dog-child routines.",
    "whyItMatters": "Children may not read dog signals, and dogs can be stressed by noise, rough handling, food interference, or surprise contact.",
    "whoShouldRead": "Parents, schools, guardians, churches, youth groups, and families with dogs.",
    "keyMessages": [
      "Supervision is not optional.",
      "Children need dog-safety education.",
      "Food, sleep, and stress signals must be respected.",
      "Seek help for repeated fear or dangerous behaviour."
    ],
    "links": [
      {
        "title": "Dogs Around Children",
        "href": "/topics/dogs-around-children"
      },
      {
        "title": "Choosing a Dog for Children",
        "href": "/guides/choosing-dog-for-children"
      },
      {
        "title": "Bite Risk",
        "href": "/glossary/bite-risk"
      }
    ],
    "shareCopy": "Children and dogs need supervision, education, and safety."
  }
];
