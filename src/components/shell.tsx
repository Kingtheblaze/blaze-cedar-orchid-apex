import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { WORKSHOP } from "@/lib/campaign";
import { remainingSeats, useSeats } from "@/lib/store";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Workshop" },
  { to: "/captain", label: "Captain kit" },
  { to: "/hq", label: "Campaign HQ" },
  { to: "/plan", label: "Growth plan" },
  { to: "/worklog", label: "AI worklog" },
  { to: "/video", label: "Video script" },
  { to: "/submit", label: "Submit pack" },
] as const;

export function Shell({ children, bare = false }: { children: ReactNode; bare?: boolean }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const live = useSeats((s) => s.seats.length);
  const left = remainingSeats(live);

  return (
    <div className="min-h-dvh bg-bg">
      <header className="no-print sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Link to="/" className="flex items-baseline gap-2 shrink-0">
            <span className="font-display text-lg font-semibold tracking-tight">{WORKSHOP.asset}</span>
            <span className="hidden text-[11px] uppercase tracking-[0.16em] text-muted sm:inline">
              {WORKSHOP.brand}
            </span>
          </Link>
          <nav className="ml-auto flex max-w-[70%] items-center gap-0.5 overflow-x-auto text-[12px] sm:max-w-none sm:text-[13px]">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "rounded-sm px-2.5 py-2 whitespace-nowrap text-muted transition-colors hover:text-ink",
                  path === l.to && "bg-ink text-paper hover:text-paper",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="hidden shrink-0 font-mono text-[11px] text-danger md:block">
            {left} seats left
          </p>
        </div>
      </header>
      {bare ? children : <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">{children}</div>}
    </div>
  );
}
