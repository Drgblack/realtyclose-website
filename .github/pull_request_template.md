## Summary
<!-- What does this PR do in one or two sentences? -->

- Issue / task link:
- Target branch: `stable/site-v1`

## Type
- [ ] feat (new)
- [ ] fix (bug)
- [ ] chore (infra)
- [ ] docs
- [ ] style/refactor

## Screens / Demos
- **Prod preview URL:** 
- **Before / After screenshots:** (attach)
- **Loom (optional):** 

## Acceptance Criteria
- [ ] One clear benefit in hero; one primary CTA
- [ ] Voice matches CLAUDE.md (no em dashes, short sentences)
- [ ] Color used with intent (80/20 neutral-to-accent)
- [ ] Copy truthfulness (no unshipped promises)
- [ ] Gmail-first visuals for product shots

## Accessibility
- [ ] Keyboard focus visible on all interactive elements
- [ ] Text contrast ≥ 4.5:1 (body) / 3:1 (large)
- [ ] Reduced-motion respected
- [ ] Meaningful alt text and aria labels

## Performance & SEO
- [ ] LCP ≤ 2.5s (on preview), CLS < 0.1
- [ ] Images optimized (`next/image`), lazy below fold
- [ ] One H1, descriptive H2s, meta title/description set
- [ ] No layout shift from fonts/assets

## Technical
- [ ] UTF-8 file encoding
- [ ] `"use client"` on components with events/state
- [ ] Tailwind classes not purged (in content paths)
- [ ] No console errors in DevTools

## Risk / Rollback
- Rollback plan: revert to previous Prod deployment via Vercel if needed
- Areas to watch after deploy:

## Checklist
- [ ] I've tested in latest Chrome, Safari, Firefox (desktop)
- [ ] I've tested on iOS Safari + Android Chrome (phone)
- [ ] I've run a lighthouse quick pass (perf ≥ 90, a11y ≥ 95)