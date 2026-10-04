import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as VIDEO_SCRIPT, u as Shell } from "./shell-CT129E2e.mjs";
import { t as Button } from "./button-CNHmGOhC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/video-BgQLwUL_.js
var import_jsx_runtime = require_jsx_runtime();
function VideoPage() {
	const words = VIDEO_SCRIPT.reduce((n, b) => n + b.say.split(/\s+/).length, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] uppercase tracking-[0.2em] text-muted",
			children: "3-minute video · read this to camera"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 font-display text-4xl font-semibold tracking-tight",
			children: "Talking script"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 max-w-2xl text-sm text-muted",
			children: [
				"About ",
				words,
				" words · ~3:00 at a calm pace. Phone landscape, your face, SHIP60 on a laptop behind you. Do not read the rejected-ads sentence like a punchline — it is the argument."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex gap-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				size: "sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/deliverables/NxtWave-Video-Script-SHIP60.pdf",
					download: true,
					children: "Download script PDF"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-10 space-y-8",
			children: VIDEO_SCRIPT.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid gap-3 sm:grid-cols-[7.5rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-accent",
					children: b.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed",
					children: b.say
				})]
			}, b.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-10 text-sm text-muted",
			children: "Close on screen: the ticket, then the college board. Last line, if you have 5 seconds: \"I used AI to draft. I got the internship by deleting.\""
		})
	] });
}
//#endregion
export { VideoPage as component };
