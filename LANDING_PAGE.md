# Current ePAC landing page

The repository-root index.html is the cinematic ePAC landing page built on 10-18-2026. Editable React/TypeScript source, build instructions, content provenance and QA are in epac-landing/.

The page uses all nine interaction techniques from the requested reference, existing Seedance and Higgsfield media, and production-side Gemini screenshot review. Motion can be paused; sound starts only on explicit user activation. Mobile and reduced-motion views retain lighter readable content.

The existing e-pac.ai CNAME and Pages main-root configuration are unchanged. Historical landing/, experience/, galactic-demo/, 404.html and hashed assets are preserved. The replacement uses a normal Git commit; prior versions remain in history.

Rebuild from epac-landing/ with the pinned pnpm package manager, run pnpm check and pnpm build, then copy its dist/ contents to the repository root without destructive deletion.
