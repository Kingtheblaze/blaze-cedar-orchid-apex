import { WORKSHOP } from "@/lib/campaign";
import type { Seat } from "@/lib/store";
import { cn } from "@/lib/utils";

export function Ticket({
  seat,
  className,
}: {
  seat: Pick<Seat, "name" | "college" | "branch" | "code">;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "ticket-perf relative overflow-hidden rounded-xl border border-ink/10 bg-ticket shadow-ticket",
        className,
      )}
    >
      <div className="grid gap-0 sm:grid-cols-[1fr_7.5rem]">
        <div className="p-5 sm:p-6">
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted">{WORKSHOP.brand}</p>
          <h3 className="mt-2 font-display text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
            {WORKSHOP.title}
          </h3>
          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-faint">Name</dt>
              <dd className="mt-0.5 font-medium">{seat.name}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-faint">College</dt>
              <dd className="mt-0.5 font-medium">{seat.college}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-faint">When</dt>
              <dd className="mt-0.5 font-medium">{WORKSHOP.when}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-faint">Length</dt>
              <dd className="mt-0.5 font-medium">{WORKSHOP.length} · Free</dd>
            </div>
          </dl>
        </div>
        <div className="flex items-center justify-between border-t border-dashed border-ink/20 px-5 py-4 sm:flex-col sm:border-l sm:border-t-0 sm:px-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Seat</p>
          <p className="font-display text-2xl font-semibold tracking-tight">{seat.code}</p>
          <p className="text-[11px] uppercase tracking-wider text-accent">{seat.branch}</p>
        </div>
      </div>
    </article>
  );
}
