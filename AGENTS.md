<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Homepage architecture
- Keep the marketing homepage at `/`, with reusable presentation and product-illustration modules under `src/components/inlay`; section anchors preserve the explicitly requested single scrolling experience.
- Use informational dialogs for unavailable registration and sign-in destinations; never simulate account creation or add a backend for marketing CTAs.
- Keep colors, typography, dimensions, and motion fallback styling in the global design system; reuse Button and Dialog for accessible controls.
- GSAP animations initialize after hydration inside a cleaned-up context and skip reduced-motion users; essential content remains visible without animation.
