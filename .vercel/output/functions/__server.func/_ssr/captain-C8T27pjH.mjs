import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { h as leaderboard, i as COLLEGES, r as CLASSROOM_90S, t as BRANCHES, u as Shell, v as useSeats, y as whatsappScript } from "./shell-CT129E2e.mjs";
import { t as Button } from "./button-CNHmGOhC.mjs";
import { n as Label, t as Input } from "./label-DsYBlT3b.mjs";
import { i as Check, n as LoaderCircle, r as Copy } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/captain-C8T27pjH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var writeCaptainMessage = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("dd51cde4e2b1f1541a800921e4dfd376d0839f5dbcefb0f9658948f93d8b84b2"));
function CaptainPage() {
	const seats = useSeats((s) => s.seats);
	const name = useSeats((s) => s.captainName);
	const college = useSeats((s) => s.captainCollege);
	const setCaptain = useSeats((s) => s.setCaptain);
	const [branch, setBranch] = (0, import_react.useState)("ECE / EEE");
	const [lang, setLang] = (0, import_react.useState)("en");
	const [ai, setAi] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const board = leaderboard(seats);
	const fallback = (0, import_react.useMemo)(() => whatsappScript({
		college,
		branch,
		lang,
		link: typeof window === "undefined" ? "https://ship60.app" : `${window.location.origin}/?ref=CAP-${college.slice(0, 4).toUpperCase()}`
	}), [
		college,
		branch,
		lang
	]);
	const msg = ai || fallback;
	async function generate() {
		setBusy(true);
		setErr("");
		try {
			const res = await writeCaptainMessage({ data: {
				college,
				branch,
				language: lang === "en" ? "English" : lang === "hi" ? "Hindi" : "Telugu"
			} });
			if (res.ok) setAi(res.text.replaceAll("LINK", typeof window !== "undefined" ? window.location.origin : "https://ship60.app"));
			else setErr(res.error);
		} catch {
			setErr("Could not reach AI. Use the locked script — it is the one we would ship anyway.");
		} finally {
			setBusy(false);
		}
	}
	async function copy() {
		await navigator.clipboard.writeText(msg);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] uppercase tracking-[0.2em] text-muted",
			children: "Campus captain kit"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl",
			children: "You are not promoting a workshop. You are filling a row."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-muted",
			children: "Top 10 captains get ₹200 on UPI the day the workshop ends. Rank is public. Post at 8:30pm. One group. No stories, no Instagram."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-8 lg:grid-cols-[1fr_20rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Your name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: name,
									onChange: (e) => setCaptain(e.target.value, college),
									placeholder: "Captain"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "College" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: college,
									onChange: (e) => setCaptain(name, e.target.value),
									className: "h-11 w-full rounded-md border border-line bg-paper px-3 text-sm",
									children: COLLEGES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Branch you are posting in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: branch,
									onChange: (e) => setBranch(e.target.value),
									className: "h-11 w-full rounded-md border border-line bg-paper px-3 text-sm",
									children: BRANCHES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: b.label }, b.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Language" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-11 gap-1",
									children: [
										"en",
										"hi",
										"te"
									].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											setLang(l);
											setAi("");
										},
										className: `flex-1 rounded-sm text-sm ${lang === l ? "bg-ink text-paper" : "bg-paper"}`,
										children: l.toUpperCase()
									}, l))
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-paper p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: "Class-group message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									size: "sm",
									variant: "outline",
									onClick: generate,
									disabled: busy,
									children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : null, "Rewrite with AI"]
								})]
							}),
							err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-danger",
								children: err
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "mt-4 whitespace-pre-wrap font-sans text-sm leading-relaxed",
								children: msg
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								className: "mt-4",
								onClick: copy,
								children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), "Copy"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-faint",
								children: "AI is optional. The locked script is the default we would actually send — Grok is for college-specific texture, not a new strategy."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "90-second classroom interruption"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted",
							children: CLASSROOM_90S
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.18em] text-muted",
				children: "Live board"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 space-y-2 text-sm",
				children: board.slice(0, 12).map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mr-2 font-mono text-xs text-faint",
						children: i + 1
					}), row.college] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono tabular-nums",
						children: row.seats
					})]
				}, row.college))
			})] })]
		})
	] });
}
//#endregion
export { CaptainPage as component };
