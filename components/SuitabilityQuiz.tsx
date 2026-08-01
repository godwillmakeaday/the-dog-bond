"use client";

import { useMemo, useState } from "react";

type Answers = {
  environment: string;
  reason: string;
  children: string;
  space: string;
  time: string;
  firstTime: string;
  confidence: string;
  budget: string;
};

type Question = {
  id: keyof Answers;
  label: string;
  options: string[];
};

const questions: Question[] = [
  {
    id: "environment",
    label: "What is your living environment?",
    options: ["Flat/apartment", "Family house", "Compound", "Estate", "Farm", "Security post"]
  },
  {
    id: "reason",
    label: "What is your main reason for wanting a dog?",
    options: ["Companionship", "Family pet", "Protection", "Alertness", "Farm support", "Training interest"]
  },
  {
    id: "children",
    label: "Are there children in the home?",
    options: ["Yes", "No", "Sometimes"]
  },
  {
    id: "space",
    label: "How much space do you have?",
    options: ["Limited", "Moderate", "Large"]
  },
  {
    id: "time",
    label: "How much daily time can you give to training/exercise?",
    options: ["Under 20 minutes", "20–45 minutes", "1 hour or more"]
  },
  {
    id: "firstTime",
    label: "Are you a first-time dog owner?",
    options: ["Yes", "No", "I have some experience"]
  },
  {
    id: "confidence",
    label: "What is your confidence level with powerful dogs?",
    options: ["Low", "Moderate", "High"]
  },
  {
    id: "budget",
    label: "Can you afford feeding, vaccination, shelter, and emergency care?",
    options: ["Not sure", "Basic level", "Yes"]
  }
];

const initialAnswers: Answers = {
  environment: "",
  reason: "",
  children: "",
  space: "",
  time: "",
  firstTime: "",
  confidence: "",
  budget: ""
};

function getResult(answers: Answers) {
  const risk =
    (answers.budget === "Not sure" ? 3 : 0) +
    (answers.time === "Under 20 minutes" ? 2 : 0) +
    (answers.firstTime === "Yes" ? 1 : 0) +
    (answers.confidence === "Low" ? 2 : 0) +
    (answers.reason === "Protection" && answers.confidence !== "High" ? 2 : 0);

  if (risk >= 6) {
    return {
      title: "High-Risk Unprepared Owner",
      readiness: "Delay ownership or start with education first",
      fit: "Education-first household",
      consider: "Dog-care learning, trainer consultation, calm low-risk dogs only after preparation",
      avoid: "Rottweiler, Boerboel, Caucasian Shepherd, Belgian Malinois, and any powerful guard breed for now",
      priority: "Budget, containment, humane care, time routine, and basic obedience education",
      warning: "Dog ownership requires cost, time, control, and humane care. A powerful dog should never be used to cover an unprepared household.",
      article: "The First-Time Dog Owner’s Reality Check"
    };
  }

  if (answers.environment === "Farm" || answers.reason === "Farm support" || answers.space === "Large") {
    return {
      title: "Farm / Space-Rich Household",
      readiness: "Good potential if care and control are consistent",
      fit: "Energetic working or resilient local dogs",
      consider: "Local African dogs, German Shepherd, Labrador-type dogs, mixed breeds with stable temperament",
      avoid: "Heavy-coated or highly territorial dogs without proper shelter, handler control, and socialization",
      priority: "Shade, water, parasite control, recall, boundaries, and livestock-safe routines",
      warning: "Space does not replace training. A roaming, hungry, or unmanaged dog can create problems for neighbours, livestock, and visitors.",
      article: "The African Household Dog: Security, Companionship, and Responsibility"
    };
  }

  if (answers.reason === "Protection" || answers.reason === "Alertness" || answers.environment === "Compound" || answers.environment === "Security post") {
    return {
      title: "Security-Conscious Compound",
      readiness: "Moderate to strong, depending on discipline",
      fit: "Alert dogs with clear human control",
      consider: "German Shepherd, trained local alert dog, Boerboel only with experienced handling and space",
      avoid: "Caucasian Shepherd or Belgian Malinois unless you have serious experience and trainer support",
      priority: "Recall, visitor control, gate discipline, feeding schedule, restraint, and socialization",
      warning: "Protection without control becomes danger. A dog that cannot be stopped is not a protection asset; it is a liability.",
      article: "The Difference Between a Guard Dog and a Dangerous Dog"
    };
  }

  return {
    title: "First-Time Companion Home",
    readiness: "Good if the household is consistent",
    fit: "Calm companion or family-friendly dog",
    consider: "Labrador-type dog, stable local mixed breed, calm family dog, older assessed dog",
    avoid: "Highly powerful guard breeds without trainer support, serious working breeds, status-driven purchases",
    priority: "Name recognition, feeding discipline, gentle socialization, leash control, and daily exercise",
    warning: "Even a friendly dog needs structure. Love without boundaries can become confusion, noise, and unsafe behaviour.",
    article: "Why Breed Character Matters Before Buying a Dog"
  };
}

export function SuitabilityQuiz() {
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const answeredCount = Object.values(answers).filter(Boolean).length;
  const complete = answeredCount === questions.length;
  const result = useMemo(() => (complete ? getResult(answers) : null), [answers, complete]);

  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="rounded-[2rem] border border-earth-200 bg-earth-50 p-6 shadow-card md:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-earth-200 pb-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-earth-500">Interactive tool</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-earth-950">Dog Readiness & Fit Quiz</h2>
            </div>
            <span className="rounded-full bg-earth-900 px-4 py-2 text-sm font-bold text-earth-50">{answeredCount}/{questions.length}</span>
          </div>
          <div className="mt-8 grid gap-6">
            {questions.map((question) => (
              <fieldset key={question.id} className="rounded-3xl border border-earth-200 bg-white p-5">
                <legend className="font-display text-xl font-semibold text-earth-950">{question.label}</legend>
                <div className="mt-4 flex flex-wrap gap-3">
                  {question.options.map((option) => {
                    const selected = answers[question.id] === option;
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setAnswers((current) => ({ ...current, [question.id]: option }))}
                        className={selected ? "rounded-full bg-earth-900 px-4 py-2 text-sm font-bold text-earth-50" : "rounded-full border border-earth-200 bg-earth-50 px-4 py-2 text-sm font-semibold text-earth-700 transition hover:border-earth-900"}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>
        </div>

        <aside className="sticky top-32 rounded-[2rem] bg-earth-900 p-7 text-earth-50 shadow-soft md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-earth-300">Recommendation profile</p>
          {result ? (
            <div className="mt-6">
              <h3 className="font-display text-4xl font-semibold leading-tight">{result.title}</h3>
              <dl className="mt-8 grid gap-5">
                {[
                  ["Ownership readiness", result.readiness],
                  ["Best dog type fit", result.fit],
                  ["Dogs to consider", result.consider],
                  ["Dogs to avoid for now", result.avoid],
                  ["Training priority", result.priority],
                  ["Next recommended article", result.article]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-3xl border border-earth-100/15 bg-white/10 p-5">
                    <dt className="text-xs font-bold uppercase tracking-[0.22em] text-earth-300">{label}</dt>
                    <dd className="mt-2 leading-7 text-earth-50">{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 rounded-3xl border border-amber-200/25 bg-amber-100/10 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-100">Safety warning</p>
                <p className="mt-3 leading-7 text-earth-100">{result.warning}</p>
              </div>
              <button
                type="button"
                onClick={() => setAnswers(initialAnswers)}
                className="mt-6 w-full rounded-full bg-earth-50 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-earth-950 transition hover:-translate-y-1"
              >
                Start Again
              </button>
            </div>
          ) : (
            <div className="mt-6 rounded-3xl border border-earth-100/15 bg-white/10 p-6">
              <h3 className="font-display text-3xl font-semibold">Answer all questions.</h3>
              <p className="mt-4 leading-8 text-earth-100">
                The result will show readiness level, best dog type fit, dogs to consider, dogs to avoid, training priority, safety warning, and next reading path.
              </p>
            </div>
          )}
          <p className="mt-6 text-sm leading-6 text-earth-200">
            This tool is educational. It does not replace a veterinarian, professional trainer, behavioural specialist, or local legal guidance.
          </p>
        </aside>
      </div>
    </section>
  );
}
