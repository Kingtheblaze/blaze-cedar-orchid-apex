import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, Copy, LoaderCircle } from "lucide-react";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { writeCaptainMessage } from "@/lib/ai";
import { BRANCHES, CLASSROOM_90S, COLLEGES, whatsappScript } from "@/lib/campaign";
import { leaderboard, useSeats } from "@/lib/store";

export const Route = createFileRoute("/captain")({ component: CaptainPage });

function CaptainPage() {
  const seats = useSeats((s) => s.seats);
  const name = useSeats((s) => s.captainName);
  const college = useSeats((s) => s.captainCollege);
  const setCaptain = useSeats((s) => s.setCaptain);
  const [branch, setBranch] = useState("ECE / EEE");
  const [lang, setLang] = useState<"en" | "hi" | "te">("en");
  const [ai, setAi] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [copied, setCopied] = useState(false);
  const board = leaderboard(seats);

  const fallback = useMemo(
    () =>
      whatsappScript({
        college,
        branch,
        lang,
        link: typeof window === "undefined" ? "https://ship60.app" : `${window.location.origin}/?ref=CAP-${college.slice(0, 4).toUpperCase()}`,
      }),
    [college, branch, lang],
  );
  const msg = ai || fallback;

  async function generate() {
    setBusy(true);
    setErr("");
    try {
      const res = await writeCaptainMessage({
        data: { college, branch, language: lang === "en" ? "English" : lang === "hi" ? "Hindi" : "Telugu" },
      });
      if (res.ok) setAi(res.text.replaceAll("LINK", typeof window !== "undefined" ? window.location.origin : "https://ship60.app"));
      else setErr(res.error);
    } catch {
      setErr("Could not reach AI. Use the locked script — it is the one we would ship anyway.");
    } finally {
      setBusy(false);
    }
  }

  async function copy() {
    await navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Shell>
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Campus captain kit</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        You are not promoting a workshop. You are filling a row.
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        Top 10 captains get ₹200 on UPI the day the workshop ends. Rank is public. Post at 8:30pm.
        One group. No stories, no Instagram.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>Your name</Label>
              <Input value={name} onChange={(e) => setCaptain(e.target.value, college)} placeholder="Captain" />
            </div>
            <div className="space-y-1.5">
              <Label>College</Label>
              <select
                value={college}
                onChange={(e) => setCaptain(name, e.target.value)}
                className="h-11 w-full rounded-md border border-line bg-paper px-3 text-sm"
              >
                {COLLEGES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <Label>Branch you are posting in</Label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="h-11 w-full rounded-md border border-line bg-paper px-3 text-sm"
              >
                {BRANCHES.map((b) => (
                  <option key={b.id}>{b.label}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <Label>Language</Label>
              <div className="flex h-11 gap-1">
                {(["en", "hi", "te"] as const).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => {
                      setLang(l);
                      setAi("");
                    }}
                    className={`flex-1 rounded-sm text-sm ${lang === l ? "bg-ink text-paper" : "bg-paper"}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-paper p-5">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-medium">Class-group message</p>
              <Button type="button" size="sm" variant="outline" onClick={generate} disabled={busy}>
                {busy ? <LoaderCircle className="animate-spin" /> : null}
                Rewrite with AI
              </Button>
            </div>
            {err ? <p className="mt-2 text-sm text-danger">{err}</p> : null}
            <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed">{msg}</pre>
            <Button type="button" className="mt-4" onClick={copy}>
              {copied ? <Check /> : <Copy />}
              Copy
            </Button>
            <p className="mt-3 text-xs text-faint">
              AI is optional. The locked script is the default we would actually send — Grok is for
              college-specific texture, not a new strategy.
            </p>
          </div>

          <div className="rounded-xl border border-line p-5">
            <p className="text-sm font-medium">90-second classroom interruption</p>
            <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted">
              {CLASSROOM_90S}
            </pre>
          </div>
        </div>

        <aside>
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Live board</p>
          <ol className="mt-4 space-y-2 text-sm">
            {board.slice(0, 12).map((row, i) => (
              <li key={row.college} className="flex justify-between gap-3">
                <span>
                  <span className="mr-2 font-mono text-xs text-faint">{i + 1}</span>
                  {row.college}
                </span>
                <span className="font-mono tabular-nums">{row.seats}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </Shell>
  );
}
