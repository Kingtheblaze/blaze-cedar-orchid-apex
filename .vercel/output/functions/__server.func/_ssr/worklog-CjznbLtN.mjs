import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as Shell } from "./shell-CT129E2e.mjs";
import { t as Button } from "./button-CNHmGOhC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/worklog-CjznbLtN.js
var import_jsx_runtime = require_jsx_runtime();
var LOGS = [
	{
		n: "01",
		asked: "How do I get 500 final-year engineering students to register for a free 60-minute AI workshop in 7 days with a ₹2,000 budget?",
		suggested: "Run Instagram + Meta ads, post on LinkedIn, email placement cells, hit college clubs, Telegram, YouTube shorts, and a chatbot that answers FAQs. Suggested headline: 'Learn AI in 60 Minutes — Limited Seats!' Plus a Canva landing page with a purple gradient.",
		changed: "Killed ads on unit economics (₹4/seat vs ₹12–40 CPC). Killed the 12-channel list — the brief said prioritise. Killed 'learn AI' because the job-to-be-done is a GitHub artefact, not education. Killed purple SaaS chrome. Kept one loop: captains × class WhatsApp × ticket that forwards.",
		final: "50×10 flywheel. Entire ₹2,000 as a captain tournament. SHIP60 as the working asset — register, ticket, WhatsApp script. Headline: 'Your GitHub is empty. Interviews are not.'"
	},
	{
		n: "02",
		asked: "Who exactly should we target? Write a student persona for this workshop.",
		suggested: "A generic 'tech-savvy Gen-Z CSE student in India who loves AI, follows influencers, and wants to upskill for a high-paying software job.' Recommended targeting metro CSE only, because they convert on AI content.",
		changed: "CSE is the noisiest pond and already workshop-fatigued. 500 seats cannot come from people who already have three Udemy certificates. ECE/EEE/Mech at Tier-2 colleges have the project gap and sit in dense class groups. Persona has a name, a college, a group size, and a Thursday placement talk — or it is not a persona.",
		final: "Rishika, 22, ECE 8th sem, GRIET. 0 repos. Class WhatsApp of 74, active 8:20–10:40pm. She registers because a classmate forwarded a named project, not because she 'loves AI'."
	},
	{
		n: "03",
		asked: "What working asset should I build? Landing page, Figma, bot, or automation?",
		suggested: "An AI chatbot that counsels students toward the workshop, plus a 12-screen Figma marketing kit, plus Instagram story templates. Optional: WhatsApp Business API chatbot with a 40-intent tree.",
		changed: "Students will not open a new bot. They will open a forward from the person on their left. A Figma kit is not a working asset — it cannot take a seat. WhatsApp Business API in 7 days with ₹2,000 is theatre. The asset has to live inside the channel: a page that issues a ticket and a paste-ready class message.",
		final: "SHIP60. Branch picker, ResumeFit demo (the 60-minute project, tryable), 20-second form, post-register ticket + EN/HI/TE script, captain kit, public college board. AI rewrite is optional seasoning on a locked script — never the strategy."
	}
];
function WorklogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-muted",
				children: "AI + learning notes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold tracking-tight",
				children: "Prompt → suggestion → what I refused → what shipped"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				size: "sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/deliverables/NxtWave-AI-Worklog-SHIP60.pdf",
					download: true,
					children: "Download PDF"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: "The brief asked for judgment with AI in the room. The useful trail is not what Grok drafted. It is what did not survive contact with ₹4-per-seat math."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 space-y-10",
			children: LOGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border-t border-line pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs text-accent",
					children: ["Example ", l.n]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-5 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[11px] uppercase tracking-[0.16em] text-faint",
							children: "What I asked"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: l.asked
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-[11px] uppercase tracking-[0.16em] text-faint",
							children: "What AI suggested"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: l.suggested
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[11px] uppercase tracking-[0.16em] text-faint",
							children: "What I changed / rejected"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: l.changed
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-[11px] uppercase tracking-[0.16em] text-faint",
							children: "Final"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: l.final
						})
					] })]
				})]
			}, l.n))
		})
	] });
}
//#endregion
export { WorklogPage as component };
