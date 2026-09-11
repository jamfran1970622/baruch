# Engineering Constitution

Mandatory protocol: **root cause -> regression proof -> minimal implementation -> independent review -> integrated verification -> merge/deployment -> production verification**.

## Gates
1. **Root cause:** establish the failure with evidence, trace the affected path, and fix the earliest safe divergence rather than a downstream symptom.
2. **Regression (RED):** add/identify a failing automated regression test when practical; otherwise define deterministic pre-change verification.
3. **Minimal implementation (GREEN):** make the smallest correct change. Do not weaken tests, add unrelated refactors, duplicate existing systems, or bypass architecture.
4. **Independent review:** challenge diagnosis, regression proof, boundaries, edge cases, security, persistence, concurrency, and UX. Resolve findings before integration.
5. **Integrated verification:** use fresh checks appropriate to this repo: types, tests, build, lint/static analysis, migrations, API/runtime, browser/UI as applicable.
6. **Production verification:** confirm the intended commit is deployed and healthy; exercise the affected path where safe and inspect runtime evidence. Deployment alone is not done.

## Implementation ledger
Every non-trivial PR/task records **Observed, Root cause, Regression proof, Changed, Review, Integrated verification, Production verification, Remaining risk**. Never blur observed, inferred, changed, and verified.

## Continuous execution
Once authorized, continue through obvious dependent engineering steps without routine permission stops. Stop only for a genuine product decision, unavailable authorization, destructive/material risk, external blocker, or evidence the direction is unsafe/materially incorrect.

## Parallelization
Parallelize only genuinely independent work. Dependency order outranks speed.

## Repository-specific rule
Inspect this repository's architecture, tests, deployment platform, data model, and product boundaries before implementation. This constitution governs engineering method; it does not override repo-specific requirements and adds no external agent-framework runtime dependency.

## Definition of done
Every applicable gate above has fresh evidence. Anything earlier is progress, not completion.
