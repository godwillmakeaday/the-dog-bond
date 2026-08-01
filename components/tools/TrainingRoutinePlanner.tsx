"use client";

import { useMemo, useState } from "react";

const baseRoutine = [
  ["Day 1", "Name recognition / attention"],
  ["Day 2", "Sit / stay / calm response"],
  ["Day 3", "Leash control"],
  ["Day 4", "Feeding discipline"],
  ["Day 5", "Socialization exposure"],
  ["Day 6", "Review and calm correction"],
  ["Day 7", "Rest, observation, bonding"]
];

export function TrainingRoutinePlanner() {
  const [age, setAge] = useState("young dog");
  const [experience, setExperience] = useState("beginner");
  const [goal, setGoal] = useState("obedience");
  const [time, setTime] = useState("20–45 minutes");

  const note = useMemo(() => {
    if (time === "under 20 minutes") return "Use short sessions and repeat calm basics. Do not rush progress.";
    if (goal === "calm visitor response") return "Focus on distance, calm observation, controlled introductions, and owner-led boundaries.";
    if (experience === "beginner") return "Keep the routine simple and consistent. Reward attention, calmness, and compliance.";
    return "You can add more repetitions, but humane control and clarity remain the foundation.";
  }, [time, goal, experience]);

  const Select = ({ label, value, setValue, options }: { label: string; value: string; setValue: (value: string) => void; options: string[] }) => (
    <label className="block rounded-2xl border border-earth-200 bg-white p-5">
      <span className="text-sm font-bold uppercase tracking-[0.18em] text-earth-500">{label}</span>
      <select value={value} onChange={(event) => setValue(event.target.value)} className="mt-3 w-full rounded-xl border border-earth-200 bg-earth-50 px-4 py-3 text-earth-900">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );

  return (
    <section className="bg-earth-50 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Select label="Dog age" value={age} setValue={setAge} options={["puppy", "young dog", "adult dog"]} />
          <Select label="Owner experience" value={experience} setValue={setExperience} options={["beginner", "intermediate", "experienced"]} />
          <Select label="Main goal" value={goal} setValue={setGoal} options={["obedience", "leash control", "feeding discipline", "socialization", "calm visitor response"]} />
          <Select label="Daily time available" value={time} setValue={setTime} options={["under 20 minutes", "20–45 minutes", "1 hour or more"]} />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-7">
          {baseRoutine.map(([day, task]) => (
            <div key={day} className="rounded-[1.5rem] border border-earth-200 bg-white p-5 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-earth-500">{day}</p>
              <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-earth-950">{task}</h2>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] bg-earth-950 p-8 text-earth-50 shadow-card">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-earth-300">Humane training principle</p>
          <p className="mt-4 text-xl leading-9">{note} Use short sessions, consistency, rewards for calm behaviour, and stop if fear escalates. Seek professional help for severe behaviour problems.</p>
        </div>
      </div>
    </section>
  );
}
