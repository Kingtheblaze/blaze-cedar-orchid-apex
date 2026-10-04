import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { CHANNELS, DAYS, FUNNEL, REJECTED, TESTS, WORKSHOP } from "@/lib/campaign";

export const Route = createFileRoute("/hq")({ component: HqPage });

function HqPage() {
  const seeded = FUNNEL.reduce((a, b) => a + b.n, 0);

  return (
    <Shell>
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Campaign HQ · simulation</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        ₹{WORKSHOP.budget.toLocaleString("en-IN")} cannot buy 500 seats. A flywheel can.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Unit economics first. ₹{WORKSHOP.budget} ÷ {WORKSHOP.seats} = ₹4 per registration. Edtech CPC
        in India is ₹12–40. Paid social is not a channel. It is a rounding error with extra steps.
      </p>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">How 500 comes in</h2>
        <ol className="mt-6 divide-y divide-line border-y border-line">
          {FUNNEL.map((row) => (
            <li key={row.step} className="grid gap-3 py-5 sm:grid-cols-[10rem_5rem_1fr]">
              <p className="font-medium">{row.step}</p>
              <p className="font-display text-3xl tabular-nums">{row.n}</p>
              <p className="text-sm leading-relaxed text-muted">{row.how}</p>
            </li>
          ))}
          <li className="grid gap-3 py-5 sm:grid-cols-[10rem_5rem_1fr]">
            <p className="font-medium">Total</p>
            <p className="font-display text-3xl tabular-nums text-accent">{seeded}</p>
            <p className="text-sm text-muted">Buffer above 500 on purpose. Class groups overlap.</p>
          </li>
        </ol>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold">Where the ₹2,000 goes</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            ₹0 on ads. ₹2,000 = 10 × ₹200 data packs for the top 10 captains, paid UPI the day the
            workshop ends. Tournament, not participation trophy. Status (public board) is the real
            incentive; rupees make the contract feel adult.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            The actual distribution asset is NxtWave's college graph. Pretending we are a cold
            startup would be leaving the unfair advantage on the table.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold">Channels — four, not twenty</h2>
          <ul className="mt-3 space-y-3">
            {CHANNELS.map((c) => (
              <li key={c.channel}>
                <p className="text-sm font-medium">{c.channel}</p>
                <p className="text-sm text-muted">{c.role} {c.why}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">7 days</h2>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {DAYS.map((d) => (
            <li key={d.day} className="rounded-lg border border-line bg-paper p-4">
              <p className="font-mono text-xs text-accent">{d.day}</p>
              <p className="mt-1 font-medium">{d.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d.do}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">Three tests, each with a kill number</h2>
        <div className="mt-6 space-y-4">
          {TESTS.map((t) => (
            <article key={t.id} className="rounded-xl border border-line p-5">
              <p className="font-mono text-xs text-muted">
                {t.id} · {t.name}
              </p>
              <p className="mt-2 text-sm">
                <span className="text-faint">Hypothesis — </span>
                {t.hypothesis}
              </p>
              <p className="mt-2 text-sm">
                <span className="text-faint">Test — </span>
                {t.test}
              </p>
              <p className="mt-2 text-sm">
                <span className="text-faint">Metric — </span>
                {t.metric}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold">What I refused</h2>
        <ul className="mt-4 space-y-4">
          {REJECTED.map((r) => (
            <li key={r.idea} className="border-l-2 border-danger pl-4">
              <p className="font-medium">{r.idea}</p>
              <p className="mt-1 text-sm text-muted">{r.why}</p>
            </li>
          ))}
        </ul>
        <Link to="/plan" className="mt-8 inline-block text-sm text-accent underline-offset-4 hover:underline">
          Open the 2-page growth plan →
        </Link>
      </section>
    </Shell>
  );
}
