import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as referralLink, m as cn, p as WORKSHOP, u as Shell, v as useSeats, y as whatsappScript } from "./shell-CT129E2e.mjs";
import { t as Button } from "./button-CNHmGOhC.mjs";
import { i as Check, r as Copy } from "../_libs/lucide-react.mjs";
import { n as Route$3 } from "./router-BiUGu-9f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seat-B87n4GRZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Ticket({ seat, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: cn("ticket-perf relative overflow-hidden rounded-xl border border-ink/10 bg-ticket shadow-ticket", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-0 sm:grid-cols-[1fr_7.5rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.22em] text-muted",
						children: WORKSHOP.brand
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-xl font-semibold leading-tight tracking-tight sm:text-2xl",
						children: WORKSHOP.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 grid grid-cols-2 gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] uppercase tracking-wider text-faint",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 font-medium",
								children: seat.name
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] uppercase tracking-wider text-faint",
								children: "College"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 font-medium",
								children: seat.college
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] uppercase tracking-wider text-faint",
								children: "When"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 font-medium",
								children: WORKSHOP.when
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] uppercase tracking-wider text-faint",
								children: "Length"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-0.5 font-medium",
								children: [WORKSHOP.length, " · Free"]
							})] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-t border-dashed border-ink/20 px-5 py-4 sm:flex-col sm:border-l sm:border-t-0 sm:px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-widest text-muted",
						children: "Seat"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold tracking-tight",
						children: seat.code
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-wider text-accent",
						children: seat.branch
					})
				]
			})]
		})
	});
}
function SeatPage() {
	const { id } = Route$3.useSearch();
	const seat = useSeats((s) => s.seats.find((x) => x.id === id));
	const [lang, setLang] = (0, import_react.useState)("en");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const link = seat ? referralLink(seat.code) : "";
	const msg = (0, import_react.useMemo)(() => {
		if (!seat) return "";
		return whatsappScript({
			college: seat.college,
			branch: seat.branch,
			link,
			lang
		});
	}, [
		seat,
		lang,
		link
	]);
	if (!seat) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "No ticket on this device. Take a seat first."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		className: "mt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			children: "Workshop"
		})
	})] });
	async function copy() {
		await navigator.clipboard.writeText(msg);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] uppercase tracking-[0.2em] text-accent",
			children: "You're in. The job is not finished."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl",
			children: "Two classmates. That's how 500 happens."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: "Ads cannot buy this seat. A forward can. Paste the message in your class group — 8:30pm, not now if the group is dead."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 max-w-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, { seat })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-6 lg:grid-cols-[1fr_18rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-paper p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							"en",
							"hi",
							"te"
						].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLang(l),
							className: `h-9 rounded-sm px-3 text-sm ${lang === l ? "bg-ink text-paper" : "bg-bg text-ink"}`,
							children: l === "en" ? "English" : l === "hi" ? "Hindi" : "Telugu"
						}, l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed",
						children: msg
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						className: "mt-4",
						onClick: copy,
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), copied ? "Copied" : "Copy for WhatsApp"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-xl border border-line p-5 text-sm leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-ink",
						children: "Why this screen exists"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "Most landing pages die at thank you. This one turns every registrant into a captain whether they asked for the job or not."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 font-mono text-xs text-faint",
						children: ["Ref code ", seat.code]
					})
				]
			})]
		})
	] });
}
//#endregion
export { SeatPage as component };
