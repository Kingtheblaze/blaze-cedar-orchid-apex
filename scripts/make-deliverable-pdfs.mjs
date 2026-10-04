import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const origin = process.argv[2] || "http://127.0.0.1:8080";
const outDir = "/workspace/public/deliverables";

const jobs = [
  { path: "/plan", file: "NxtWave-Growth-Plan-SHIP60.pdf" },
  { path: "/worklog", file: "NxtWave-AI-Worklog-SHIP60.pdf" },
  { path: "/video", file: "NxtWave-Video-Script-SHIP60.pdf" },
  { path: "/submit", file: "NxtWave-Form-Answers-SHIP60.pdf" },
  { path: "/hq", file: "NxtWave-Campaign-HQ-SHIP60.pdf" },
];

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 1600 } });

for (const job of jobs) {
  await page.goto(origin + job.path, { waitUntil: "networkidle", timeout: 60000 });
  await page.addStyleTag({
    content: `.no-print{display:none !important} body{background:white}`,
  });
  const dest = `${outDir}/${job.file}`;
  await page.pdf({
    path: dest,
    format: "A4",
    printBackground: true,
    margin: { top: "12mm", right: "12mm", bottom: "14mm", left: "12mm" },
  });
  console.log("wrote", dest);
}

await browser.close();
