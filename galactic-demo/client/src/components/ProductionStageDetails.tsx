import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import {
  Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle,
} from "@/components/ui/dialog";

/** Describes this project's recorded production workflow, not provider capabilities or a live API. */
export const PRODUCTION_STAGES = [
  {
    stage: "seedance", name: "Seedance", role: "Cinematic hero motion", number: "01",
    summary: "The opening scene uses a pre-generated Seedance clip to bring the small explorers and deep-space composition to life.",
    output: "An optimized, muted video behind the hero headline.",
    presentation: "The clip appears on desktop in dark mode. Mobile, light mode and reduced-motion views use still artwork so the headline remains readable.",
    steps: [
      "A Nano Banana reference frame established the explorers, starfield and clear space for the headline.",
      "Seedance animated the reference into a short opening shot.",
      "The clip was compressed for the web and deployed as a static asset, separate from the global soundtrack.",
    ],
  },
  {
    stage: "higgsfield", name: "Higgsfield", role: "Narrative motion", number: "02",
    summary: "The storytelling backdrop uses a pre-generated Higgsfield clip to add restrained motion behind the word-by-word narrative.",
    output: "An optimized, muted video behind the storytelling text.",
    presentation: "The desktop dark-mode scene uses a low-opacity backdrop and contrast overlays. The words follow scroll position; the background does not replace the reading sequence.",
    steps: [
      "Higgsfield supplied a complementary shot for the narrative scene.",
      "The generated footage was reviewed and compressed before being added to the site.",
      "Light mode uses bright still artwork, and reduced-motion views hide the moving video.",
    ],
  },
  {
    stage: "ai-studio", name: "Google AI Studio", role: "Visual review in production", number: "03",
    summary: "Google AI Studio / Gemini supports the production review of rendered screenshots, rather than generating content inside this public page.",
    output: "Screenshot-based observations used during visual quality review.",
    presentation: "The review considers the hero, typography and light/dark compositions. Its observations are checked against browser measurements and visual inspection; an AI opinion alone is not a functional or accessibility test.",
    steps: [
      "Rendered screenshots are captured from the actual experience.",
      "A production-side Gemini tool reviews those images using a private credential outside the public frontend.",
      "The review is checked against real browser tests for layout, scroll, media and reduced-motion behavior.",
    ],
  },
] as const;

type Stage = (typeof PRODUCTION_STAGES)[number];

export default function ProductionStageDetails({ tool }: { tool: Stage }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    window.dispatchEvent(new CustomEvent("cinematic-modal-state", { detail: { open: true } }));
    return () => {
      window.dispatchEvent(new CustomEvent("cinematic-modal-state", { detail: { open: false } }));
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        className="media-workflow-trigger absolute inset-0 z-20 rounded-xl"
        aria-label={`Explore ${tool.name}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span className="absolute bottom-5 right-5"><ArrowUpRight size={17} aria-hidden="true" /></span>
      </button>
      <DialogContent
        className="media-stage-dialog"
        overlayClassName="media-stage-overlay"
        showCloseButton={false}
        data-media-dialog={tool.stage}
        data-lenis-prevent
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          document.querySelector<HTMLElement>(`[data-media-dialog="${tool.stage}"] [data-stage-close]`)?.focus({ preventScroll: true });
        }}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          document.querySelector<HTMLElement>(`[data-media-stage="${tool.stage}"] .media-workflow-trigger`)?.focus({ preventScroll: true });
        }}
      >
        <header className="media-stage-header">
          <p className="media-stage-eyebrow">Creative process / {tool.number}</p>
          <DialogTitle className="media-stage-title">{tool.name}</DialogTitle>
          <p className="media-stage-role">{tool.role}</p>
          <DialogClose asChild>
            <button type="button" data-stage-close className="media-stage-close" aria-label={`Close ${tool.name} details`}>
              <X size={20} aria-hidden="true" />
            </button>
          </DialogClose>
        </header>
        <DialogDescription className="media-stage-summary">{tool.summary}</DialogDescription>
        <dl className="media-stage-facts">
          <div><dt>What it contributes</dt><dd>{tool.output}</dd></div>
          <div><dt>How it appears here</dt><dd>{tool.presentation}</dd></div>
        </dl>
        <details className="media-stage-process">
          <summary>How it was integrated <ChevronDown size={17} aria-hidden="true" /></summary>
          <ol>{tool.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </details>
        <p className="media-stage-note">These tools were used during production. This website displays prepared assets and does not run live media generation or expose provider API keys.</p>
        <DialogClose asChild>
          <button type="button" className="media-stage-return">Back to the experience</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
