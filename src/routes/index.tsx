import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Shell } from "@/components/shell";
import { ResumeFit } from "@/components/resume-fit";
import { RegisterForm } from "@/components/register-form";
import { BRANCHES, PERSONA, PROJECTS, WORKSHOP, type BranchId } from "@/lib/campaign";
import { leaderboard, remainingSeats, useSeats } from "@/lib/store";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [branch, setBranch] = useState<BranchId>("ece");
  const project = PROJECTS[branch];
  const seats = useSeats((s) => s.seats);
  const board = leaderboard(seats).slice(0, 8);
  const left = remainingSeats(seats.length);

  return (
    <Shell bare>
      <main>
        <section className="border-b border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="rise-in">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                {WORKSHOP.brand} · Free workshop · {WORKSHOP.when}
              </p>
              <h1 className="mt-4 font-display text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-6xl">
                Your GitHub is empty.
                <span className="block text-accent">Interviews are not.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {WORKSHOP.title}. One hour. You leave with a public repo, a working tool, and a
                LinkedIn post — not a certificate nobody opens.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="xl">
                  <a href="#register">
                    Take a seat
                    <ArrowRight />
                  </a>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <a href="#project">
                    Try the project first
                    <ArrowDown />
                  </a>
                </Button>
              </div>
            </div>
            <aside className="rounded-xl border border-line bg-paper p-5 sm:p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-danger">
                {left} of {WORKSHOP.seats} seats open
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-faint">Length</dt>
                  <dd className="mt-1 font-medium">{WORKSHOP.length}</dd>
                </div>
                <div>
                  <dt className="text-faint">Price</dt>
                  <dd className="mt-1 font-medium">₹0</dd>
                </div>
                <div>
                  <dt className="text-faint">Who</dt>
                  <dd className="mt-1 font-medium">7th / 8th sem, any branch</dd>
                </div>
                <div>
                  <dt className="text-faint">Where</dt>
                  <dd className="mt-1 font-medium">Phone is enough</dd>
                </div>
              </dl>
              <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                This page is the working asset for the Growth Intern challenge — a seat machine,
                not a poster.
              </p>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Pick your branch. The pitch changes.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {BRANCHES.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setBranch(b.id)}
                className={`h-11 rounded-sm border px-4 text-sm ${
                  branch === b.id
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper text-ink hover:border-ink/40"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_20rem]">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {project.line}
              </h2>
              <p className="mt-3 max-w-2xl text-muted">{project.why}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {project.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="rounded-lg border border-line bg-ticket p-5">
              <figcaption className="text-[11px] uppercase tracking-[0.18em] text-muted">
                The person, not a segment
              </figcaption>
              <p className="mt-3 font-display text-2xl font-semibold">{PERSONA.name}</p>
              <p className="text-sm text-muted">
                {PERSONA.age} · {PERSONA.branch} · {PERSONA.year}
              </p>
              <p className="mt-4 text-sm leading-relaxed">{PERSONA.fear}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{PERSONA.want}</p>
            </figure>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-12">
          <ResumeFit />
        </section>

        <section className="border-y border-line bg-paper">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">60 minutes, four blocks</p>
              <ol className="mt-6 space-y-5">
                {[
                  ["0–8 min", "The job. Open a blank repo. Name it. You are already building."],
                  ["8–35 min", "AI pair-programmer writes ResumeFit with you. You decide what stays."],
                  ["35–50 min", "Deploy a public URL. Push. Copy the LinkedIn post template."],
                  ["50–60 min", "Five people demo. You leave with a screenshot, not a feeling."],
                ].map(([t, d]) => (
                  <li key={t} className="grid grid-cols-[6.5rem_1fr] gap-4">
                    <span className="font-mono text-xs text-accent">{t}</span>
                    <span className="text-sm leading-relaxed">{d}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">College board</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">Seats by campus</h3>
              <ol className="mt-5 space-y-2">
                {board.map((row, i) => (
                  <li key={row.college} className="flex items-baseline justify-between gap-4 text-sm">
                    <span>
                      <span className="mr-3 font-mono text-xs text-faint">{i + 1}</span>
                      {row.college}
                    </span>
                    <span className="font-mono tabular-nums">{row.seats}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-faint">
                Simulated seed + live registrations from this page. Captains hunt rank, not likes.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <RegisterForm defaultBranch={branch} />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              ["I don't know coding", "Neither does half the room. AI writes the first version. You keep the decisions."],
              ["Is this a sales pitch?", "The workshop is free and ends. No 'enrol now' slide. Captains are paid from ₹2,000, not from your fee."],
              ["I'm mechanical", "The artefact is a resume tool. You need it this month regardless of branch."],
            ].map(([q, a]) => (
              <article key={q}>
                <h3 className="font-medium">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  );
}
