import { create } from "zustand";
import { persist } from "zustand/middleware";
import { COLLEGES, SEED_LEADERBOARD, WORKSHOP, type BranchId } from "@/lib/campaign";

export type Seat = {
  id: string;
  name: string;
  whatsapp: string;
  college: string;
  branch: BranchId;
  year: "7th" | "8th";
  code: string;
  invitedBy?: string;
  at: number;
};

type State = {
  seats: Seat[];
  captainName: string;
  captainCollege: string;
  addSeat: (seat: Omit<Seat, "id" | "code" | "at">) => Seat;
  setCaptain: (name: string, college: string) => void;
  resetDemo: () => void;
};

function codeFor(n: number) {
  return `NW-${String(WORKSHOP.seats - n + 1).padStart(3, "0")}`;
}

function id() {
  return Math.random().toString(36).slice(2, 9);
}

export const useSeats = create<State>()(
  persist(
    (set, get) => ({
      seats: [],
      captainName: "",
      captainCollege: COLLEGES[0],
      addSeat: (input) => {
        const seat: Seat = {
          ...input,
          id: id(),
          code: codeFor(get().seats.length + 1),
          at: Date.now(),
        };
        set({ seats: [seat, ...get().seats] });
        return seat;
      },
      setCaptain: (name, college) => set({ captainName: name, captainCollege: college }),
      resetDemo: () => set({ seats: [] }),
    }),
    { name: "ship60-seats" },
  ),
);

export function remainingSeats(liveCount: number) {
  const seed = SEED_LEADERBOARD.reduce((a, b) => a + b.seats, 0);
  return Math.max(0, WORKSHOP.seats - seed - liveCount);
}

export function leaderboard(live: Seat[]) {
  const map = new Map<string, number>();
  for (const row of SEED_LEADERBOARD) map.set(row.college, row.seats);
  for (const s of live) map.set(s.college, (map.get(s.college) ?? 0) + 1);
  return [...map.entries()]
    .map(([college, seats]) => ({ college, seats }))
    .sort((a, b) => b.seats - a.seats);
}

export function referralLink(code: string) {
  if (typeof window === "undefined") return `/?ref=${code}`;
  const url = new URL(window.location.origin);
  url.searchParams.set("ref", code);
  return url.toString();
}
