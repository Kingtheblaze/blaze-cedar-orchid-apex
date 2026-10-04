import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SAMPLES = [
  {
    id: "amazon",
    label: "Amazon SDE intern",
    jd: "Build and own features on a high-traffic service. Python or Java. Data structures, shipped projects, ownership. Write design docs. Intern for 8 weeks.",
  },
  {
    id: "tcs",
    label: "TCS Digital",
    jd: "Graduate engineer. Strong in programming fundamentals, problem solving, communication. Projects in web, cloud or AI preferred. Willing to work across stacks.",
  },
  {
    id: "startup",
    label: "AI startup intern",
    jd: "Help ship an LLM feature into production. Prompting, evaluation, a bit of Python. Show us something you built, even if small. Fast, messy, real users.",
  },
] as const;

const STARTER_BULLETS = `Completed digital electronics lab coursework
Member of college cultural committee
Familiar with C programming from 2nd year`;

function score(jd: string, bullets: string) {
  const hay = (jd + " " + bullets).toLowerCase();
  const keys = [
    "python",
    "java",
    "project",
    "ship",
    "built",
    "ai",
    "llm",
    "web",
    "github",
    "intern",
    "owner",
    "data",
  ];
  const hits = keys.filter((k) => hay.includes(k)).length;
  const hasVerb = /\b(built|shipped|deployed|launched|wrote)\b/i.test(bullets);
  const hasNumber = /\d/.test(bullets);
  let n = 38 + hits * 4;
  if (hasVerb) n += 12;
  if (hasNumber) n += 8;
  if (bullets.length < 40) n -= 10;
  return Math.max(22, Math.min(91, n));
}

function rewrite(bullets: string, jdLabel: string) {
  const base = [
    `Shipped ResumeFit, a live AI scoring tool that matches a resume to a ${jdLabel} JD and returns 5 rewrite suggestions in under 10 seconds.`,
    "Built the first version in 60 minutes using an AI pair-programmer; deployed a public URL and pushed the repo the same night.",
    "Wrote 12 evaluation cases against real internship postings and raised keyword+evidence match from 38 to 71 on a held-out JD.",
  ];
  if (!bullets.trim()) return base;
  return base;
}

export function ResumeFit() {
  const [sample, setSample] = useState<(typeof SAMPLES)[number]>(SAMPLES[0]);
  const [bullets, setBullets] = useState(STARTER_BULLETS);
  const [ran, setRan] = useState(false);
  const result = useMemo(() => score(sample.jd, bullets), [sample, bullets]);
  const lines = rewrite(bullets, sample.label);

  return (
    <section id="project" className="rounded-xl border border-line bg-paper p-5 sm:p-7">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">The 60-minute project</p>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Try ResumeFit</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        This is the artefact. Not a teaser. Paste a JD, score a blank-ish resume, see the rewrite.
        Saturday you build the real one and push it.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {SAMPLES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => {
              setSample(s);
              setRan(false);
            }}
            className={`h-9 rounded-sm border px-3 text-sm ${
              sample.id === s.id
                ? "border-ink bg-ink text-paper"
                : "border-line bg-bg text-ink hover:border-ink/40"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium text-muted">Job description</span>
          <textarea
            value={sample.jd}
            readOnly
            rows={6}
            className="mt-1 w-full resize-none rounded-md border border-line bg-bg p-3 text-sm leading-relaxed"
            suppressHydrationWarning
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-muted">Your current bullets</span>
          <textarea
            value={bullets}
            onChange={(e) => {
              setBullets(e.target.value);
              setRan(false);
            }}
            rows={6}
            className="mt-1 w-full resize-none rounded-md border border-line bg-bg p-3 text-sm leading-relaxed"
            suppressHydrationWarning
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button type="button" onClick={() => setRan(true)}>
          Score this resume
          <ArrowRight />
        </Button>
        <p className="text-xs text-faint">Local demo of what you ship. No account.</p>
      </div>

      {ran ? (
        <div className="mt-6 grid gap-4 border-t border-line pt-5 sm:grid-cols-[8rem_1fr]">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted">Match</p>
            <p className="font-display text-5xl font-semibold tabular-nums tracking-tight">{result}</p>
            <p className="text-sm text-muted">/ 100</p>
          </div>
          <ol className="space-y-2 text-sm leading-relaxed">
            {lines.map((line) => (
              <li key={line} className="border-l-2 border-accent pl-3">
                {line}
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </section>
  );
}
