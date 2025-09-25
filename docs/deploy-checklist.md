# Deployment Checklist – Production (stable/site-v1)

- [ ] On branch `stable/site-v1` and up to date
- [ ] PR merged and preview verified
- [ ] UTF-8 files; no server components with event handlers
- [ ] Lighthouse quick pass: perf ≥ 90, a11y ≥ 95
- [ ] Keyboard focus visible; reduced-motion respected
- [ ] Meta title/description updated
- [ ] Vercel: Redeploy without cache (if CSS stale)
- [ ] Post-deploy smoke test (hero CTA, nav, forms)
- [ ] Rollback plan noted (previous deployment id)