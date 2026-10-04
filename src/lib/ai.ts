import { createServerFn } from "@tanstack/react-start";

export const writeCaptainMessage = createServerFn({ method: "POST" })
  .validator((input: { college: string; branch: string; language: string }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "AI is not available in this environment" };
    }

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 280,
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content:
              "You write WhatsApp messages that a final-year Indian engineering student would actually forward in a class group. Sound like a classmate, never a brand, never a growth marketer. No emoji. No hashtags. No 'excited to announce'. 70-110 words. Include the workshop name Build Your First AI Project in 60 Minutes, that it is free, Saturday 6pm, and they leave with a GitHub repo. End with a placeholder LINK. Output only the message.",
          },
          {
            role: "user",
            content: `College: ${data.college}. Branch: ${data.branch}. Language: ${data.language}. Write the message in that language (English, Hindi, or Telugu).`,
          },
        ],
      }),
    });

    if (!res.ok) {
      return { ok: false as const, error: `xAI API error ${res.status}` };
    }

    const body = (await res.json()) as {
      choices: { message: { content: string } }[];
    };
    return { ok: true as const, text: body.choices[0]?.message.content ?? "" };
  });
