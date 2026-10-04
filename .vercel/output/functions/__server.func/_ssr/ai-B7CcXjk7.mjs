import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-B7CcXjk7.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var writeCaptainMessage_createServerFn_handler = createServerRpc({
	id: "dd51cde4e2b1f1541a800921e4dfd376d0839f5dbcefb0f9658948f93d8b84b2",
	name: "writeCaptainMessage",
	filename: "src/lib/ai.ts"
}, (opts) => writeCaptainMessage.__executeServer(opts));
var writeCaptainMessage = createServerFn({ method: "POST" }).validator((input) => input).handler(writeCaptainMessage_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "AI is not available in this environment"
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 280,
			temperature: .7,
			messages: [{
				role: "system",
				content: "You write WhatsApp messages that a final-year Indian engineering student would actually forward in a class group. Sound like a classmate, never a brand, never a growth marketer. No emoji. No hashtags. No 'excited to announce'. 70-110 words. Include the workshop name Build Your First AI Project in 60 Minutes, that it is free, Saturday 6pm, and they leave with a GitHub repo. End with a placeholder LINK. Output only the message."
			}, {
				role: "user",
				content: `College: ${data.college}. Branch: ${data.branch}. Language: ${data.language}. Write the message in that language (English, Hindi, or Telugu).`
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `xAI API error ${res.status}`
	};
	return {
		ok: true,
		text: (await res.json()).choices[0]?.message.content ?? ""
	};
});
//#endregion
export { writeCaptainMessage_createServerFn_handler };
