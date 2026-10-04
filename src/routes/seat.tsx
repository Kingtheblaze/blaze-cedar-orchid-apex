import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Shell } from "@/components/shell";
import { Ticket } from "@/components/ticket";
import { Button } from "@/components/ui/button";
import { whatsappScript } from "@/lib/campaign";
import { referralLink, useSeats } from "@/lib/store";

export const Route = createFileRoute("/seat")({
  validateSearch: (s: Record<string, unknown>) => ({
    id: typeof s.id === "string" ? s.id : "",
  }),
  component: SeatPage,
});

function SeatPage() {
  const { id } = Route.useSearch();
  const seat = useSeats((s) => s.seats.find((x) => x.id === id));
  const [lang, setLang] = useState<"en" | "hi" | "te">("en");
  const [copied, setCopied] = useState(false);

  const link = seat ? referralLink(seat.code) : "";
  const msg = useMemo(() => {
    if (!seat) return "";
    return whatsappScript({
      college: seat.college,
      branch: seat.branch,
      link,
      lang,
    });
  }, [seat, lang, link]);

  if (!seat) {
    return (
      <Shell>
        <p className="text-muted">No ticket on this device. Take a seat first.</p>
        <Button asChild className="mt-4">
          <Link to="/">Workshop</Link>
        </Button>
      </Shell>
    );
  }

  async function copy() {
    await navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Shell>
      <p className="text-[11px] uppercase tracking-[0.2em] text-accent">You're in. The job is not finished.</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Two classmates. That's how 500 happens.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Ads cannot buy this seat. A forward can. Paste the message in your class group — 8:30pm, not now
        if the group is dead.
      </p>

      <div className="mt-8 max-w-2xl">
        <Ticket seat={seat} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_18rem]">
        <div className="rounded-xl border border-line bg-paper p-5">
          <div className="flex flex-wrap gap-2">
            {(["en", "hi", "te"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`h-9 rounded-sm px-3 text-sm ${
                  lang === l ? "bg-ink text-paper" : "bg-bg text-ink"
                }`}
              >
                {l === "en" ? "English" : l === "hi" ? "Hindi" : "Telugu"}
              </button>
            ))}
          </div>
          <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed">{msg}</pre>
          <Button type="button" className="mt-4" onClick={copy}>
            {copied ? <Check /> : <Copy />}
            {copied ? "Copied" : "Copy for WhatsApp"}
          </Button>
        </div>
        <aside className="rounded-xl border border-line p-5 text-sm leading-relaxed text-muted">
          <p className="font-medium text-ink">Why this screen exists</p>
          <p className="mt-2">
            Most landing pages die at thank you. This one turns every registrant into a captain
            whether they asked for the job or not.
          </p>
          <p className="mt-3 font-mono text-xs text-faint">Ref code {seat.code}</p>
        </aside>
      </div>
    </Shell>
  );
}
