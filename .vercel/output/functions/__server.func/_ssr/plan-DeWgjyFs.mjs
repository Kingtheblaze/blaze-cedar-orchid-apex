import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as TESTS, o as FUNNEL, p as WORKSHOP, s as PERSONA, u as Shell } from "./shell-CT129E2e.mjs";
import { t as Button } from "./button-CNHmGOhC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plan-DeWgjyFs.js
var import_jsx_runtime = require_jsx_runtime();
function PlanPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		bare: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "no-print mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Growth plan · 2 pages · print or download PDF"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/deliverables/NxtWave-Growth-Plan-SHIP60.pdf",
					download: true,
					children: "Download PDF"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[210mm] space-y-6 px-4 pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "print-page print-sheet rounded-xl border border-line p-8 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-start justify-between gap-4 border-b border-line pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] uppercase tracking-[0.2em] text-muted",
							children: [WORKSHOP.brand, " Growth Intern · Working plan"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-3xl font-semibold tracking-tight",
							children: "The 50×10 flywheel"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-right font-mono text-xs text-muted",
							children: [
								"7 days",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"₹",
								WORKSHOP.budget.toLocaleString("en-IN"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								WORKSHOP.seats,
								" seats"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[11px] uppercase tracking-[0.18em] text-muted",
								children: "1. The student"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-display text-2xl font-semibold leading-tight",
								children: [
									"Not “final-year engineers”. ",
									PERSONA.name,
									", ",
									PERSONA.branch,
									", ",
									PERSONA.year,
									",",
									" ",
									PERSONA.college,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid gap-4 text-sm leading-relaxed sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[11px] uppercase tracking-wider text-faint",
										children: "Who"
									}), "GitHub-empty 8th-sem at a Tier-2 college. Lives in a 70-person class WhatsApp. Phone is the computer. Placement talk this week."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[11px] uppercase tracking-wider text-faint",
										children: "Why care"
									}), "Interviews ask for a project. She has lab records. She does not want a course. She wants a sentence and a screenshot for tonight."] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[11px] uppercase tracking-wider text-faint",
										children: "Why register"
									}), "A classmate forwarded it. The project is named (ResumeFit). 20 seconds, no login. Her college is on a public board. Saturday 6pm, free."] })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[11px] uppercase tracking-[0.18em] text-muted",
								children: "2. The plan — one idea"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed",
								children: "₹4 per seat. Ads are impossible. 50 campus captains × ~10 classmates = 500. Entire budget is 10 × ₹200 data packs for the top captains. Channel: class WhatsApp at 8:30pm, one TPO message, NxtWave's existing college graph as Day 1 seed. Not email. Not Instagram. Not twenty ideas."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4",
								children: FUNNEL.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-md border border-line p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl tabular-nums",
										children: f.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted",
										children: f.step
									})]
								}, f.step))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[11px] uppercase tracking-[0.18em] text-muted",
							children: "3. The asset"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed",
							children: "SHIP60 is a seat machine. Branch-native pitch. ResumeFit tryable on the page. 20-second form. After register: a ticket + a WhatsApp message in English / Hindi / Telugu. The landing page is the salesforce. Thank-you pages that do not recruit are decoration."
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "print-page print-sheet rounded-xl border border-line p-8 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "Page 2 — tests, week, refusals"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-4",
						children: TESTS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-1 border-b border-line pb-4 text-sm sm:grid-cols-[6rem_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs text-accent",
								children: [
									t.id,
									" ",
									t.name
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "H — " }),
								t.hypothesis,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Test — " }),
								t.test,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Metric — " }),
								t.metric
							] })]
						}, t.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 text-sm sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] uppercase tracking-wider text-faint",
							children: "Week"
						}), "D1 seed captains from NxtWave graph. D2 class posts at 8:30pm. D3 fill holes + 10 TPOs. D4–5 leaderboard FOMO. D6 remaining inventory. D7 lock and pay captains the same day."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] uppercase tracking-wider text-faint",
							children: "Refused"
						}), "Meta ads (math). 12-channel spray (a list). CSE-only (wrong pond). Chatbot asset (wrong surface). Judgment is what did not ship."] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-xs text-faint",
						children: [
							"Workshop: ",
							WORKSHOP.title,
							". Simulation only. No students were contacted."
						]
					})
				]
			})]
		})]
	});
}
//#endregion
export { PlanPage as component };
