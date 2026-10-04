import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as TESTS, u as Shell } from "./shell-CT129E2e.mjs";
import { t as Button } from "./button-CNHmGOhC.mjs";
import { i as Check, r as Copy } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/submit-BKmRcuFr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PACK = [
	{
		field: "1. Growth Plan",
		hint: "Google Drive / Notion / Canva / PDF. Max 5 slides / 2 pages.",
		value: "Use the live Growth Plan page and the PDF on this site (2 pages). After you publish the app, paste that public URL here. Until then, download NxtWave-Growth-Plan-SHIP60.pdf from the Growth plan page and upload it to Drive as anyone-with-link."
	},
	{
		field: "2. Working Asset Link",
		hint: "Landing page / live page / prototype.",
		value: "This app is the working asset: SHIP60 — workshop landing + ResumeFit demo + seat ticket + WhatsApp referral loop + captain kit. After publish, paste the live URL. Reviewers should: pick a branch, score a resume, take a seat, copy the WhatsApp message."
	},
	{
		field: "3. Your 3 Tests",
		hint: "Hypothesis → what you would test → metric.",
		value: TESTS.map((t) => `${t.id} ${t.name}\nHypothesis: ${t.hypothesis}\nWhat I would test: ${t.test}\nMetric: ${t.metric}`).join("\n\n")
	},
	{
		field: "4. AI Worklog",
		hint: "Prompt → AI output → changed/rejected → final. URL or short answer.",
		value: "Live page: /worklog on this app, plus NxtWave-AI-Worklog-SHIP60.pdf.\n\n1) Asked how to get 500 regs in 7 days with ₹2,000. AI suggested ads + 12 channels + 'Learn AI' headline. Rejected: ₹4/seat math kills ads; brief said prioritise. Final: 50×10 flywheel.\n\n2) Asked for a persona. AI gave generic CSE Gen-Z. Rejected: CSE is over-workshopped. Final: Rishika, ECE, GRIET, 0 repos, Thursday placement talk.\n\n3) Asked what to build. AI suggested chatbot + Figma kit. Rejected: students open forwards, not new bots. Final: SHIP60 ticket + WhatsApp script as the salesforce."
	}
];
function CopyBlock({ title, hint, text }) {
	const [ok, setOk] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-line bg-paper p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-medium",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-faint",
				children: hint
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				size: "sm",
				variant: "outline",
				onClick: async () => {
					await navigator.clipboard.writeText(text);
					setOk(true);
					setTimeout(() => setOk(false), 1200);
				},
				children: [ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), "Copy"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted",
			children: text
		})]
	});
}
function SubmitPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] uppercase tracking-[0.2em] text-muted",
			children: "Google Form pack"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 font-display text-4xl font-semibold tracking-tight",
			children: "Copy into the submission form"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-sm text-muted",
			children: "Form: https://forms.gle/xEtJSgJfeqvnxv8q6 — 48-hour window. Strong submissions skip to the final Growth Interview. Paste these, attach the PDFs, record the 3-minute video from the script page."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 space-y-5",
			children: PACK.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopyBlock, {
				title: p.field,
				hint: p.hint,
				text: p.value
			}, p.field))
		})
	] });
}
//#endregion
export { SubmitPage as component };
