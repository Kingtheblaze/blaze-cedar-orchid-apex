import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { VIDEO_SCRIPT } from "@/lib/campaign";

export const Route = createFileRoute("/video")({ component: VideoPage });

function VideoPage() {
  const words = VIDEO_SCRIPT.reduce((n, b) => n + b.say.split(/\s+/).length, 0);

  return (
    <Shell>
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">3-minute video · read this to camera</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">Talking script</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        About {words} words · ~3:00 at a calm pace. Phone landscape, your face, SHIP60 on a laptop
        behind you. Do not read the rejected-ads sentence like a punchline — it is the argument.
      </p>
      <div className="mt-4 flex gap-3">
        <Button asChild variant="outline" size="sm">
          <a href="/deliverables/NxtWave-Video-Script-SHIP60.pdf" download>
            Download script PDF
          </a>
        </Button>
      </div>
      <ol className="mt-10 space-y-8">
        {VIDEO_SCRIPT.map((b) => (
          <li key={b.t} className="grid gap-3 sm:grid-cols-[7.5rem_1fr]">
            <p className="font-mono text-xs text-accent">{b.t}</p>
            <p className="text-base leading-relaxed">{b.say}</p>
          </li>
        ))}
      </ol>
      <p className="mt-10 text-sm text-muted">
        Close on screen: the ticket, then the college board. Last line, if you have 5 seconds: "I
        used AI to draft. I got the internship by deleting."
      </p>
    </Shell>
  );
}
