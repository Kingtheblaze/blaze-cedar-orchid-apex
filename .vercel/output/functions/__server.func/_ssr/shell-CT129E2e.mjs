import { C as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-CT129E2e.js
var import_jsx_runtime = require_jsx_runtime();
var WORKSHOP = {
	brand: "NxtWave",
	title: "Build Your First AI Project in 60 Minutes",
	asset: "SHIP60",
	duration: "7 days",
	budget: 2e3,
	seats: 500,
	when: "Saturday, 6:00 PM IST",
	length: "60 minutes"
};
var BRANCHES = [
	{
		id: "ece",
		label: "ECE / EEE",
		short: "ECE"
	},
	{
		id: "cse",
		label: "CSE / IT",
		short: "CSE"
	},
	{
		id: "mech",
		label: "Mechanical / Civil",
		short: "Mech"
	},
	{
		id: "other",
		label: "Other branch",
		short: "Other"
	}
];
var PROJECTS = {
	ece: {
		name: "ResumeFit",
		line: "Paste a job description. Get a match score and 5 bullets you can actually use.",
		why: "You don't need to become a software engineer this week. You need one shipped project before Thursday's placement talk.",
		bullets: [
			"Works for core + software roles",
			"You leave with a GitHub repo, not notes",
			"Built with AI — no DSA required to start"
		]
	},
	cse: {
		name: "ResumeFit",
		line: "A live scoring tool recruiters' ATS actually understands — shipped in one hour.",
		why: "Every CSE student has a Udemy certificate. Almost none have a repo a recruiter can click.",
		bullets: [
			"Public URL + GitHub in 60 minutes",
			"LinkedIn post written before you log off",
			"Something you can talk about in interviews tomorrow"
		]
	},
	mech: {
		name: "ResumeFit",
		line: "Turn a blank resume into a project you can point at — even if you have never written production code.",
		why: "Mechanical interviews still ask 'tell me about a project'. Blank GitHub is the actual problem.",
		bullets: [
			"No prior coding internship needed",
			"AI writes the first version with you",
			"You explain the decisions, not the syntax"
		]
	},
	other: {
		name: "ResumeFit",
		line: "One working AI project, one repo, one post. Any branch.",
		why: "The workshop is not an AI course. It is a 60-minute close on the project gap.",
		bullets: [
			"Branch-agnostic on purpose",
			"Screenshot for LinkedIn the same night",
			"Free. No funnel-to-paid in the room."
		]
	}
};
var PERSONA = {
	name: "Rishika",
	age: 22,
	year: "8th semester",
	branch: "ECE",
	college: "GRIET, Hyderabad",
	github: "0 public repos",
	phone: "A 4GB Android. That is the computer.",
	group: "Class WhatsApp, 74 members, most active 8:20–10:40pm",
	fear: "Thursday placement talk. 'Tell me about a project you've built.' She has lab records.",
	want: "A screenshot, a link, a sentence she can say out loud.",
	not: "A 12-week AI course, a webinar, a certificate with no artefact."
};
var FUNNEL = [
	{
		step: "Day 1 seed",
		n: 120,
		how: "15 NxtWave internal groups + 50 captains confirmed. Brand graph, not ads."
	},
	{
		step: "Class-group posts",
		n: 210,
		how: "50 captains × ~70 members × 12% tap × 50% register. Posted at 8:30pm, not 11am."
	},
	{
		step: "Referral hop",
		n: 100,
		how: "Every seat opens a 'bring 2 classmates' ticket. 35% send. 40% of invited register."
	},
	{
		step: "TPO + leaderboard",
		n: 70,
		how: "10 placement cells forward once. Public college board creates the only FOMO that works."
	}
];
var DAYS = [
	{
		day: "D0",
		title: "Freeze the asset",
		do: "Landing, 3 WhatsApp variants, captain brief, leaderboard live. No more creative."
	},
	{
		day: "D1",
		title: "Seed captains",
		do: "DM 80 students from NxtWave's college graph. Offer: top 10 captains get ₹200 same week. Target: 50 yes."
	},
	{
		day: "D2",
		title: "First posts",
		do: "Captains post in class groups at 8:30pm. We reply with live college counts. Target +180."
	},
	{
		day: "D3",
		title: "Fill holes",
		do: "Colleges with <3 seats get a replacement captain. 10 TPOs get one WhatsApp, not a deck."
	},
	{
		day: "D4–5",
		title: "Leaderboard",
		do: "Screenshot 'CBIT 41 · GRIET 38' into groups. Referral prompt on every ticket."
	},
	{
		day: "D6",
		title: "Shortage",
		do: "Remaining seats, remaining colleges. No new copy. Inventory is the message."
	},
	{
		day: "D7",
		title: "Lock",
		do: "Calendar invite, 6pm reminder, pay top 10 captains on UPI the same day."
	}
];
var TESTS = [
	{
		id: "T1",
		name: "Headline",
		hypothesis: "A GitHub/project frame converts at least 2× a 'learn AI' frame, because the job-to-be-done is a resume artefact, not education.",
		test: "50/50 split on the landing hero for 48 hours. A: 'Learn AI in 60 minutes'. B: 'Walk out with a GitHub project tonight'.",
		metric: "Register CVR (seats / unique landing sessions). Kill A if B ≥ 1.6× after 400 sessions.",
		why: "If 'learn AI' wins, the whole campaign voice is wrong and we rewrite captain scripts before Day 2 posts."
	},
	{
		id: "T2",
		name: "Share loop",
		hypothesis: "A post-register ticket with a one-tap WhatsApp message produces k ≥ 0.6. A thank-you page without a share object produces k ≈ 0.1.",
		test: "After seat 1–150, show the ticket + copy-ready class message. Measure invites sent and 2nd-degree seats.",
		metric: "k-factor = (invite taps × invitee CVR) / registrants. Kill the loop if k < 0.3 by end of Day 3 and switch to more captains.",
		why: "₹2,000 cannot buy the second wave. If the product does not recruit, the plan is dead."
	},
	{
		id: "T3",
		name: "Branch-native project",
		hypothesis: "ECE/Mech students convert when the project is named for their week (placement, not 'ML pipeline'). CSE is already over-workshopped.",
		test: "Landing branch picker changes the proof line. Compare ECE+Mech CVR vs CSE CVR vs a generic control in 3 captain groups.",
		metric: "CVR by branch. Success: non-CSE CVR within 20% of CSE. Fail: non-CSE < half of CSE — then we were still talking like a coding bootcamp.",
		why: "500 seats cannot come from CSE alone without paying for attention we don't have."
	}
];
var CHANNELS = [
	{
		channel: "Class WhatsApp groups",
		role: "Primary. The only feed they actually read.",
		why: "74 classmates, one admin, one forward. Trust sits next to them in the lab."
	},
	{
		channel: "Campus captains",
		role: "The salesforce. 50 people, not a page.",
		why: "A captain is a distribution node with a name. A poster is not."
	},
	{
		channel: "Placement cell (TPO) WhatsApp",
		role: "One message, 10 colleges, Day 3 only.",
		why: "Highest-trust sender in a final-year phone. Used once so it does not feel like spam."
	},
	{
		channel: "NxtWave existing student graph",
		role: "Day 1 seed. Unfair advantage.",
		why: "2L+ learners, 3000 colleges. Pretending we are a cold startup would be leaving the actual asset on the table."
	}
];
var REJECTED = [
	{
		idea: "Spend ₹2,000 on Meta / Instagram ads",
		why: "₹2,000 ÷ 500 = ₹4 per seat. Edtech CPC in India is ₹12–40. The math is not tight. It is impossible."
	},
	{
		idea: "12-channel spray: email, LinkedIn, Instagram, Telegram, clubs, YouTube, fests",
		why: "The brief said prioritise. Twelve channels is a list, not a plan. One loop, one hour-of-day, one incentive."
	},
	{
		idea: "Target only CSE",
		why: "CSE is over-workshopped. ECE/EEE is ~40% of engineering seats and has the project gap. 500 cannot be fished from the noisiest pond."
	},
	{
		idea: "Build a chatbot as the working asset",
		why: "Students will not open a new bot. They will open a forward. The asset has to live inside WhatsApp, not next to it."
	}
];
var COLLEGES = [
	"GRIET Hyderabad",
	"CBIT Hyderabad",
	"VNR VJIET",
	"Vasavi CE",
	"KMIT",
	"CVR College",
	"Sreenidhi",
	"MVSR",
	"JNTUH CE",
	"Osmania CE",
	"VRSEC Vijayawada",
	"KL University",
	"SRM AP",
	"VIT AP",
	"PES Bengaluru",
	"BMSCE",
	"PSG Coimbatore",
	"CIT Coimbatore",
	"PICT Pune",
	"VIT Pune"
];
var SEED_LEADERBOARD = [
	{
		college: "CBIT Hyderabad",
		seats: 41
	},
	{
		college: "GRIET Hyderabad",
		seats: 38
	},
	{
		college: "VNR VJIET",
		seats: 33
	},
	{
		college: "KMIT",
		seats: 29
	},
	{
		college: "Vasavi CE",
		seats: 24
	},
	{
		college: "PSG Coimbatore",
		seats: 21
	},
	{
		college: "PES Bengaluru",
		seats: 19
	},
	{
		college: "VRSEC Vijayawada",
		seats: 17
	},
	{
		college: "CVR College",
		seats: 14
	},
	{
		college: "PICT Pune",
		seats: 12
	}
];
function whatsappScript(opts) {
	const { college, branch, link, lang } = opts;
	if (lang === "hi") return `Class ke log — Saturday 6 baje, 60 minute, free.

NxtWave ka workshop: Build Your First AI Project. End mein GitHub repo milta hai, certificate ka PDF nahi.

Main register ho gaya/gayi. ${college} ${branch} se seats aa rahi hain.

Link: ${link}

Agar 10 log class se aaye to college board pe naam aata hai. Baad mein mat poochna.`;
	if (lang === "te") return `Class, Saturday 6pm, 60 minutes, free.

NxtWave workshop: Build Your First AI Project. Certificate kaadu — GitHub repo vastundi.

Nenu register ayya. ${college} ${branch} nunchi seats vastunnaayi.

Link: ${link}

Maa class nunchi 10 mandi vaste college board meeda manam. Taruvaata adagakandi.`;
	return `Class — Saturday 6pm. 60 minutes. Free.

NxtWave is running Build Your First AI Project. You leave with a GitHub repo, not a certificate PDF.

I already took a seat. ${college} ${branch} is on the board.

${link}

If 10 people from this group join, we show up on the college leaderboard. Don't ask me for notes after.`;
}
var CLASSROOM_90S = `I am not selling a course. Saturday 6pm, 60 minutes, free, from your phone.

You will build ResumeFit: paste a job description, get a match score, ship it to GitHub.

If you have zero repos, this is the hour. If you already have projects, skip it.

I need 10 people from this class. Link is in the group. That's it.`;
var VIDEO_SCRIPT = [
	{
		t: "0:00–0:25",
		say: "The brief is 500 final-year engineers in 7 days with ₹2,000. I started with the unit economics, not the poster. ₹2,000 divided by 500 is ₹4 a seat. Meta CPC for edtech in India is ₹12 to ₹40. Ads are not 'expensive'. They are impossible. So the plan cannot be media. It has to be a loop."
	},
	{
		t: "0:25–1:05",
		say: "The student is not 'final-year engineers'. She is Rishika, ECE, 8th sem, GRIET. Zero GitHub repos. Placement talk on Thursday. She does not want to learn AI. She wants a sentence she can say in an interview. CSE is already drowning in workshops. ECE and Mechanical still have the project gap — and they are most of the seats. That is who the landing page talks to."
	},
	{
		t: "1:05–1:50",
		say: "The campaign is one idea: the 50×10 flywheel. Fifty campus captains, each bringing about ten classmates. Captains are paid with a tournament — the entire ₹2,000 is ten ₹200 data packs for the top ten, paid on UPI the same week. Distribution is class WhatsApp at 8:30pm, plus one TPO message, plus NxtWave's existing college graph as Day 1 seed. I killed email, Instagram, LinkedIn and clubs. Those are lists. This is a channel they already live in."
	},
	{
		t: "1:50–2:35",
		say: "The working asset is SHIP60. It is not a pretty landing page. After you take a seat, you get a ticket and a WhatsApp message written in your class's language. The page is the salesforce. I also put ResumeFit on the page — the actual 60-minute project — so the promise is tryable in 20 seconds. If they don't believe 60 minutes, they should not have to take it on faith."
	},
	{
		t: "2:35–3:00",
		say: "Three tests, each with a kill number. Headline: project versus learn-AI. Share loop: k-factor of 0.6 or we hire more captains. Branch-native copy: if ECE converts at half of CSE, we were still talking like a bootcamp. I used AI to draft. I rejected ads, a 12-channel spray, CSE-only targeting, and a chatbot. Judgment is what I did not ship."
	}
];
function codeFor(n) {
	return `NW-${String(WORKSHOP.seats - n + 1).padStart(3, "0")}`;
}
function id() {
	return Math.random().toString(36).slice(2, 9);
}
var useSeats = create()(persist((set, get) => ({
	seats: [],
	captainName: "",
	captainCollege: COLLEGES[0],
	addSeat: (input) => {
		const seat = {
			...input,
			id: id(),
			code: codeFor(get().seats.length + 1),
			at: Date.now()
		};
		set({ seats: [seat, ...get().seats] });
		return seat;
	},
	setCaptain: (name, college) => set({
		captainName: name,
		captainCollege: college
	}),
	resetDemo: () => set({ seats: [] })
}), { name: "ship60-seats" }));
function remainingSeats(liveCount) {
	const seed = SEED_LEADERBOARD.reduce((a, b) => a + b.seats, 0);
	return Math.max(0, WORKSHOP.seats - seed - liveCount);
}
function leaderboard(live) {
	const map = /* @__PURE__ */ new Map();
	for (const row of SEED_LEADERBOARD) map.set(row.college, row.seats);
	for (const s of live) map.set(s.college, (map.get(s.college) ?? 0) + 1);
	return [...map.entries()].map(([college, seats]) => ({
		college,
		seats
	})).sort((a, b) => b.seats - a.seats);
}
function referralLink(code) {
	if (typeof window === "undefined") return `/?ref=${code}`;
	const url = new URL(window.location.origin);
	url.searchParams.set("ref", code);
	return url.toString();
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var LINKS = [
	{
		to: "/",
		label: "Workshop"
	},
	{
		to: "/captain",
		label: "Captain kit"
	},
	{
		to: "/hq",
		label: "Campaign HQ"
	},
	{
		to: "/plan",
		label: "Growth plan"
	},
	{
		to: "/worklog",
		label: "AI worklog"
	},
	{
		to: "/video",
		label: "Video script"
	},
	{
		to: "/submit",
		label: "Submit pack"
	}
];
function Shell({ children, bare = false }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const left = remainingSeats(useSeats((s) => s.seats.length));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "no-print sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-baseline gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-semibold tracking-tight",
							children: WORKSHOP.asset
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-[11px] uppercase tracking-[0.16em] text-muted sm:inline",
							children: WORKSHOP.brand
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-auto flex max-w-[70%] items-center gap-0.5 overflow-x-auto text-[12px] sm:max-w-none sm:text-[13px]",
						children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: cn("rounded-sm px-2.5 py-2 whitespace-nowrap text-muted transition-colors hover:text-ink", path === l.to && "bg-ink text-paper hover:text-paper"),
							children: l.label
						}, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hidden shrink-0 font-mono text-[11px] text-danger md:block",
						children: [left, " seats left"]
					})
				]
			})
		}), bare ? children : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:py-12",
			children
		})]
	});
}
//#endregion
export { remainingSeats as _, DAYS as a, PROJECTS as c, TESTS as d, VIDEO_SCRIPT as f, referralLink as g, leaderboard as h, COLLEGES as i, REJECTED as l, cn as m, CHANNELS as n, FUNNEL as o, WORKSHOP as p, CLASSROOM_90S as r, PERSONA as s, BRANCHES as t, Shell as u, useSeats as v, whatsappScript as y };
