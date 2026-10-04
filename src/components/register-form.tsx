import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { BRANCHES, COLLEGES, type BranchId } from "@/lib/campaign";
import { useSeats } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm({ defaultBranch }: { defaultBranch: BranchId }) {
  const navigate = useNavigate();
  const addSeat = useSeats((s) => s.addSeat);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [college, setCollege] = useState(COLLEGES[0]);
  const [branch, setBranch] = useState<BranchId>(defaultBranch);
  const [year, setYear] = useState<"7th" | "8th">("8th");
  const [err, setErr] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || whatsapp.replace(/\D/g, "").length < 10) {
      setErr("Name and a 10-digit WhatsApp number. That's the whole form.");
      return;
    }
    const invitedBy =
      typeof window === "undefined" ? undefined : new URLSearchParams(window.location.search).get("ref") ?? undefined;
    const seat = addSeat({
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      college,
      branch,
      year,
      invitedBy,
    });
    void navigate({ to: "/seat", search: { id: seat.id } });
  }

  return (
    <form id="register" onSubmit={onSubmit} className="rounded-xl border border-ink bg-ink p-5 text-paper sm:p-7">
      <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">Take a seat · 20 seconds</p>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Saturday is the workshop. This is the form.</h2>
      <p className="mt-2 text-sm text-paper/70">
        No login. WhatsApp is how the reminder arrives. Simulation — nothing is sent.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label className="text-paper/60">Full name</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Rishika Reddy"
            className="border-white/10 bg-paper text-ink"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-paper/60">WhatsApp</Label>
          <Input
            inputMode="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="98xxxxxxxx"
            className="border-white/10 bg-paper text-ink"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-paper/60">College</Label>
          <select
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            className="h-11 w-full rounded-md border border-white/10 bg-paper px-3 text-sm text-ink"
          >
            {COLLEGES.map((c) => (
              <option key={c}>{c}</option>
            ))}
            <option>Other college</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-paper/60">Branch</Label>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value as BranchId)}
            className="h-11 w-full rounded-md border border-white/10 bg-paper px-3 text-sm text-ink"
          >
            {BRANCHES.map((b) => (
              <option key={b.id} value={b.id}>
                {b.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {(["7th", "8th"] as const).map((y) => (
          <button
            key={y}
            type="button"
            onClick={() => setYear(y)}
            className={`h-10 rounded-sm px-4 text-sm ${
              year === y ? "bg-paper text-ink" : "bg-white/10 text-paper"
            }`}
          >
            {y} sem
          </button>
        ))}
      </div>

      {err ? <p className="mt-3 text-sm text-danger">{err}</p> : null}

      <Button type="submit" variant="accent" size="xl" className="mt-6 w-full sm:w-auto">
        Take my seat
      </Button>
    </form>
  );
}
