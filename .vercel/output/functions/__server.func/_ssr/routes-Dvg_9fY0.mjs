import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { C as require_jsx_runtime, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as remainingSeats, c as PROJECTS, h as leaderboard, i as COLLEGES, p as WORKSHOP, s as PERSONA, t as BRANCHES, u as Shell, v as useSeats } from "./shell-CT129E2e.mjs";
import { t as Button } from "./button-CNHmGOhC.mjs";
import { n as Label, t as Input } from "./label-DsYBlT3b.mjs";
import { a as ArrowRight, o as ArrowDown } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dvg_9fY0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SAMPLES = [
	{
		id: "amazon",
		label: "Amazon SDE intern",
		jd: "Build and own features on a high-traffic service. Python or Java. Data structures, shipped projects, ownership. Write design docs. Intern for 8 weeks."
	},
	{
		id: "tcs",
		label: "TCS Digital",
		jd: "Graduate engineer. Strong in programming fundamentals, problem solving, communication. Projects in web, cloud or AI preferred. Willing to work across stacks."
	},
	{
		id: "startup",
		label: "AI startup intern",
		jd: "Help ship an LLM feature into production. Prompting, evaluation, a bit of Python. Show us something you built, even if small. Fast, messy, real users."
	}
];
var STARTER_BULLETS = `Completed digital electronics lab coursework
Member of college cultural committee
Familiar with C programming from 2nd year`;
function score(jd, bullets) {
	const hay = (jd + " " + bullets).toLowerCase();
	const hits = [
		"python",
		"java",
		"project",
		"ship",
		"built",
		"ai",
		"llm",
		"web",
		"github",
		"intern",
		"owner",
		"data"
	].filter((k) => hay.includes(k)).length;
	const hasVerb = /\b(built|shipped|deployed|launched|wrote)\b/i.test(bullets);
	const hasNumber = /\d/.test(bullets);
	let n = 38 + hits * 4;
	if (hasVerb) n += 12;
	if (hasNumber) n += 8;
	if (bullets.length < 40) n -= 10;
	return Math.max(22, Math.min(91, n));
}
function rewrite(bullets, jdLabel) {
	const base = [
		`Shipped ResumeFit, a live AI scoring tool that matches a resume to a ${jdLabel} JD and returns 5 rewrite suggestions in under 10 seconds.`,
		"Built the first version in 60 minutes using an AI pair-programmer; deployed a public URL and pushed the repo the same night.",
		"Wrote 12 evaluation cases against real internship postings and raised keyword+evidence match from 38 to 71 on a held-out JD."
	];
	if (!bullets.trim()) return base;
	return base;
}
function ResumeFit() {
	const [sample, setSample] = (0, import_react.useState)(SAMPLES[0]);
	const [bullets, setBullets] = (0, import_react.useState)(STARTER_BULLETS);
	const [ran, setRan] = (0, import_react.useState)(false);
	const result = (0, import_react.useMemo)(() => score(sample.jd, bullets), [sample, bullets]);
	const lines = rewrite(bullets, sample.label);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "project",
		className: "rounded-xl border border-line bg-paper p-5 sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-muted",
				children: "The 60-minute project"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl font-semibold tracking-tight",
				children: "Try ResumeFit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
				children: "This is the artefact. Not a teaser. Paste a JD, score a blank-ish resume, see the rewrite. Saturday you build the real one and push it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: SAMPLES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setSample(s);
						setRan(false);
					},
					className: `h-9 rounded-sm border px-3 text-sm ${sample.id === s.id ? "border-ink bg-ink text-paper" : "border-line bg-bg text-ink hover:border-ink/40"}`,
					children: s.label
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-muted",
						children: "Job description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: sample.jd,
						readOnly: true,
						rows: 6,
						className: "mt-1 w-full resize-none rounded-md border border-line bg-bg p-3 text-sm leading-relaxed",
						suppressHydrationWarning: true
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-muted",
						children: "Your current bullets"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: bullets,
						onChange: (e) => {
							setBullets(e.target.value);
							setRan(false);
						},
						rows: 6,
						className: "mt-1 w-full resize-none rounded-md border border-line bg-bg p-3 text-sm leading-relaxed",
						suppressHydrationWarning: true
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					onClick: () => setRan(true),
					children: ["Score this resume", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-faint",
					children: "Local demo of what you ship. No account."
				})]
			}),
			ran ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 border-t border-line pt-5 sm:grid-cols-[8rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-wider text-muted",
						children: "Match"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-5xl font-semibold tabular-nums tracking-tight",
						children: result
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "/ 100"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-2 text-sm leading-relaxed",
					children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-l-2 border-accent pl-3",
						children: line
					}, line))
				})]
			}) : null
		]
	});
}
function RegisterForm({ defaultBranch }) {
	const navigate = useNavigate();
	const addSeat = useSeats((s) => s.addSeat);
	const [name, setName] = (0, import_react.useState)("");
	const [whatsapp, setWhatsapp] = (0, import_react.useState)("");
	const [college, setCollege] = (0, import_react.useState)(COLLEGES[0]);
	const [branch, setBranch] = (0, import_react.useState)(defaultBranch);
	const [year, setYear] = (0, import_react.useState)("8th");
	const [err, setErr] = (0, import_react.useState)("");
	function onSubmit(e) {
		e.preventDefault();
		if (!name.trim() || whatsapp.replace(/\D/g, "").length < 10) {
			setErr("Name and a 10-digit WhatsApp number. That's the whole form.");
			return;
		}
		const invitedBy = typeof window === "undefined" ? void 0 : new URLSearchParams(window.location.search).get("ref") ?? void 0;
		const seat = addSeat({
			name: name.trim(),
			whatsapp: whatsapp.trim(),
			college,
			branch,
			year,
			invitedBy
		});
		navigate({
			to: "/seat",
			search: { id: seat.id }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		id: "register",
		onSubmit,
		className: "rounded-xl border border-ink bg-ink p-5 text-paper sm:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-[0.2em] text-paper/50",
				children: "Take a seat · 20 seconds"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl font-semibold tracking-tight",
				children: "Saturday is the workshop. This is the form."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-paper/70",
				children: "No login. WhatsApp is how the reminder arrives. Simulation — nothing is sent."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-paper/60",
							children: "Full name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "Rishika Reddy",
							className: "border-white/10 bg-paper text-ink"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-paper/60",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							inputMode: "tel",
							value: whatsapp,
							onChange: (e) => setWhatsapp(e.target.value),
							placeholder: "98xxxxxxxx",
							className: "border-white/10 bg-paper text-ink"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-paper/60",
							children: "College"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: college,
							onChange: (e) => setCollege(e.target.value),
							className: "h-11 w-full rounded-md border border-white/10 bg-paper px-3 text-sm text-ink",
							children: [COLLEGES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Other college" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-paper/60",
							children: "Branch"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: branch,
							onChange: (e) => setBranch(e.target.value),
							className: "h-11 w-full rounded-md border border-white/10 bg-paper px-3 text-sm text-ink",
							children: BRANCHES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: b.id,
								children: b.label
							}, b.id))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-2",
				children: ["7th", "8th"].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setYear(y),
					className: `h-10 rounded-sm px-4 text-sm ${year === y ? "bg-paper text-ink" : "bg-white/10 text-paper"}`,
					children: [y, " sem"]
				}, y))
			}),
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-danger",
				children: err
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				variant: "accent",
				size: "xl",
				className: "mt-6 w-full sm:w-auto",
				children: "Take my seat"
			})
		]
	});
}
function Home() {
	const [branch, setBranch] = (0, import_react.useState)("ece");
	const project = PROJECTS[branch];
	const seats = useSeats((s) => s.seats);
	const board = leaderboard(seats).slice(0, 8);
	const left = remainingSeats(seats.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		bare: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise-in",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] uppercase tracking-[0.22em] text-muted",
								children: [
									WORKSHOP.brand,
									" · Free workshop · ",
									WORKSHOP.when
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-4 font-display text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-6xl",
								children: ["Your GitHub is empty.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-accent",
									children: "Interviews are not."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
								children: [WORKSHOP.title, ". One hour. You leave with a public repo, a working tool, and a LinkedIn post — not a certificate nobody opens."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#register",
										children: ["Take a seat", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#project",
										children: ["Try the project first", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "rounded-xl border border-line bg-paper p-5 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] uppercase tracking-widest text-danger",
								children: [
									left,
									" of ",
									WORKSHOP.seats,
									" seats open"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-4 grid grid-cols-2 gap-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "Length"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 font-medium",
										children: WORKSHOP.length
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "Price"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 font-medium",
										children: "₹0"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "Who"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 font-medium",
										children: "7th / 8th sem, any branch"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-faint",
										children: "Where"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 font-medium",
										children: "Phone is enough"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted",
								children: "This page is the working asset for the Growth Intern challenge — a seat machine, not a poster."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.2em] text-muted",
						children: "Pick your branch. The pitch changes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: BRANCHES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setBranch(b.id),
							className: `h-11 rounded-sm border px-4 text-sm ${branch === b.id ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink hover:border-ink/40"}`,
							children: b.label
						}, b.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-6 lg:grid-cols-[1fr_20rem]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-semibold tracking-tight sm:text-4xl",
								children: project.line
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-2xl text-muted",
								children: project.why
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2 text-sm",
								children: project.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-accent" }), b]
								}, b))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "rounded-lg border border-line bg-ticket p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "text-[11px] uppercase tracking-[0.18em] text-muted",
									children: "The person, not a segment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-2xl font-semibold",
									children: PERSONA.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										PERSONA.age,
										" · ",
										PERSONA.branch,
										" · ",
										PERSONA.year
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed",
									children: PERSONA.fear
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: PERSONA.want
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-4 pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeFit, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-line bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.2em] text-muted",
						children: "60 minutes, four blocks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 space-y-5",
						children: [
							["0–8 min", "The job. Open a blank repo. Name it. You are already building."],
							["8–35 min", "AI pair-programmer writes ResumeFit with you. You decide what stays."],
							["35–50 min", "Deploy a public URL. Push. Copy the LinkedIn post template."],
							["50–60 min", "Five people demo. You leave with a screenshot, not a feeling."]
						].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[6.5rem_1fr] gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-accent",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm leading-relaxed",
								children: d
							})]
						}, t))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.2em] text-muted",
							children: "College board"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl font-semibold",
							children: "Seats by campus"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-5 space-y-2",
							children: board.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-baseline justify-between gap-4 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-3 font-mono text-xs text-faint",
									children: i + 1
								}), row.college] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono tabular-nums",
									children: row.seats
								})]
							}, row.college))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-faint",
							children: "Simulated seed + live registrations from this page. Captains hunt rank, not likes."
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterForm, { defaultBranch: branch }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-3",
					children: [
						["I don't know coding", "Neither does half the room. AI writes the first version. You keep the decisions."],
						["Is this a sales pitch?", "The workshop is free and ends. No 'enrol now' slide. Captains are paid from ₹2,000, not from your fee."],
						["I'm mechanical", "The artefact is a resume tool. You need it this month regardless of branch."]
					].map(([q, a]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium",
						children: q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: a
					})] }, q))
				})]
			})
		] })
	});
}
//#endregion
export { Home as component };
