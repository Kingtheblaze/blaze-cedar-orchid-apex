import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { FUNNEL, PERSONA, TESTS, WORKSHOP } from "@/lib/campaign";

export const Route = createFileRoute("/plan")({ component: PlanPage });

function PlanPage() {
  return (
    <Shell bare>
      <div className="no-print mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <p className="text-sm text-muted">Growth plan · 2 pages · print or download PDF</p>
        <Button asChild size="sm">
          <a href="/deliverables/NxtWave-Growth-Plan-SHIP60.pdf" download>
            Download PDF
          </a>
        </Button>
      </div>

      <div className="mx-auto max-w-[210mm] space-y-6 px-4 pb-16">
        <article className="print-page print-sheet rounded-xl border border-line p-8 sm:p-10">
          <header className="flex items-start justify-between gap-4 border-b border-line pb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                {WORKSHOP.brand} Growth Intern · Working plan
              </p>
              <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                The 50×10 flywheel
              </h1>
            </div>
            <p className="text-right font-mono text-xs text-muted">
              7 days
              <br />₹{WORKSHOP.budget.toLocaleString("en-IN")}
              <br />
              {WORKSHOP.seats} seats
            </p>
          </header>

          <section className="mt-6">
            <h2 className="text-[11px] uppercase tracking-[0.18em] text-muted">1. The student</h2>
            <p className="mt-2 font-display text-2xl font-semibold leading-tight">
              Not “final-year engineers”. {PERSONA.name}, {PERSONA.branch}, {PERSONA.year},{" "}
              {PERSONA.college}.
            </p>
            <div className="mt-4 grid gap-4 text-sm leading-relaxed sm:grid-cols-3">
              <p>
                <span className="block text-[11px] uppercase tracking-wider text-faint">Who</span>
                GitHub-empty 8th-sem at a Tier-2 college. Lives in a 70-person class WhatsApp. Phone
                is the computer. Placement talk this week.
              </p>
              <p>
                <span className="block text-[11px] uppercase tracking-wider text-faint">Why care</span>
                Interviews ask for a project. She has lab records. She does not want a course. She
                wants a sentence and a screenshot for tonight.
              </p>
              <p>
                <span className="block text-[11px] uppercase tracking-wider text-faint">Why register</span>
                A classmate forwarded it. The project is named (ResumeFit). 20 seconds, no login.
                Her college is on a public board. Saturday 6pm, free.
              </p>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-[11px] uppercase tracking-[0.18em] text-muted">2. The plan — one idea</h2>
            <p className="mt-2 text-sm leading-relaxed">
              ₹4 per seat. Ads are impossible. 50 campus captains × ~10 classmates = 500. Entire
              budget is 10 × ₹200 data packs for the top captains. Channel: class WhatsApp at
              8:30pm, one TPO message, NxtWave's existing college graph as Day 1 seed. Not email.
              Not Instagram. Not twenty ideas.
            </p>
            <ol className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              {FUNNEL.map((f) => (
                <li key={f.step} className="rounded-md border border-line p-3">
                  <p className="font-display text-2xl tabular-nums">{f.n}</p>
                  <p className="mt-1 text-xs text-muted">{f.step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-6">
            <h2 className="text-[11px] uppercase tracking-[0.18em] text-muted">3. The asset</h2>
            <p className="mt-2 text-sm leading-relaxed">
              SHIP60 is a seat machine. Branch-native pitch. ResumeFit tryable on the page. 20-second
              form. After register: a ticket + a WhatsApp message in English / Hindi / Telugu. The
              landing page is the salesforce. Thank-you pages that do not recruit are decoration.
            </p>
          </section>
        </article>

        <article className="print-page print-sheet rounded-xl border border-line p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold">Page 2 — tests, week, refusals</h2>
          <div className="mt-5 space-y-4">
            {TESTS.map((t) => (
              <div key={t.id} className="grid gap-1 border-b border-line pb-4 text-sm sm:grid-cols-[6rem_1fr]">
                <p className="font-mono text-xs text-accent">
                  {t.id} {t.name}
                </p>
                <p>
                  <strong>H — </strong>
                  {t.hypothesis} <strong>Test — </strong>
                  {t.test} <strong>Metric — </strong>
                  {t.metric}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
            <p>
              <span className="block text-[11px] uppercase tracking-wider text-faint">Week</span>
              D1 seed captains from NxtWave graph. D2 class posts at 8:30pm. D3 fill holes + 10 TPOs.
              D4–5 leaderboard FOMO. D6 remaining inventory. D7 lock and pay captains the same day.
            </p>
            <p>
              <span className="block text-[11px] uppercase tracking-wider text-faint">Refused</span>
              Meta ads (math). 12-channel spray (a list). CSE-only (wrong pond). Chatbot asset
              (wrong surface). Judgment is what did not ship.
            </p>
          </div>
          <p className="mt-8 text-xs text-faint">
            Workshop: {WORKSHOP.title}. Simulation only. No students were contacted.
          </p>
        </article>
      </div>
    </Shell>
  );
}
