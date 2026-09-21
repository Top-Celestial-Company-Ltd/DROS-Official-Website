# DROS Official Website Public Copy Guidelines

This document defines the public-facing writing rules for the DROS / VajraClaw official website.
All agents, editors, reviewers, and collaborators who touch marketing, product, docs, FAQ, pricing, trust, or comparison pages should follow it.

## 1. Core Positioning

- DROS is an execution-governance substrate, not a general-purpose AI security suite.
- C-ABI is the primary defense path.
- Enterprise, Swarm, Trust, and Pricing pages may describe reinforcement layers, but they must not imply universal protection.
- Public copy must stay aligned with the current whitepaper evidence status.

## 1.1 Workflow Order

All new tests, experiments, and results must follow this publication order:

1. Align with the whitepaper first.
2. Map the result into the relevant product page or tier.
3. Publish to the official website only after the wording is bounded and public-safe.

This order prevents the website or product copy from outrunning the whitepaper evidence state.

## 2. Writing Principles

### 2.1 Avoid absolute claims
Do not use wording that implies certainty beyond the documented boundary.

Avoid:
- 100%
- absolute
- always
- never
- guaranteed / guarantee
- flawless
- complete / completely
- universal
- zero liability
- perfect / perfectly
- cannot fail
- self-destruct
- all-in-one

Prefer:
- bounded
- documented
- within the documented boundary
- materially reduce
- supports / helps
- can be prevented
- not expected
- stable under the stated conditions
- reduced
- lower / low

### 2.2 Keep claims bounded
Any performance, coverage, or security claim should include at least one of:
- deployment condition
- test context
- artifact reference
- boundary statement
- scope qualifier

Examples:
- Good: "Reduces exposure within the documented boundary."
- Good: "Validated in local tests under the stated workload."
- Bad: "Eliminates the risk."
- Bad: "Guarantees safety."

### 2.3 Numbers need context
Do not publish raw numbers as universal conclusions.
Every number should be tied to:
- benchmark type
- sample size
- hardware or environment
- artifact / report reference
- boundary or caveat

If the evidence is still pending, label it as Pending.

### 2.4 Keep Chinese and English aligned
- The Chinese and English versions must carry the same strength of claim.
- Do not make English stronger than Chinese, or vice versa.
- If one language uses bounded phrasing, the other must do the same.

### 2.5 Prefer infrastructure language
Use product language that sounds like infrastructure, governance, or systems engineering.
Avoid hype-heavy sales language.

Preferred terms:
- governance substrate
- execution boundary
- reinforcement layer
- bounded protection
- artifact-backed
- documented boundary
- on-premise validation
- local enforcement

## 3. Page-Specific Guidance

### Home
- Hero and stat cards should avoid hard percentages unless they come from a current, cited benchmark.
- Use bounded, documented, or reviewed language.

### Enterprise
- Do not say "zero downtime", "zero impact", or "100% air-gapped" unless there is a specific, cited test context.
- Use "air-gapped capable", "offline-supported", or "low-bypass-risk within the documented boundary".

### Swarm / Physical AI
- Do not claim impossible kinetic guarantees.
- Use "reduces risk", "limits propagation", or "targets near-zero breach margin within the boundary".
- Keep flight / robotics wording cautious and test-aware.

### Trust
- Benchmark mockups should look like evidence, not product promises.
- Terminal-style output should not imply finalized certification unless a real artifact exists.
- Prefer "PASS", "bounded", or "reviewed" only when the underlying evidence is actually present.

### Docs / FAQ / Pricing
- These pages are the most sensitive for overclaiming.
- Avoid broad claims like "fully prevents", "always blocks", or "never leaks".
- Explain how the boundary works instead of promising perfection.

## 4. Evidence Language

Use these tiers:
- Pending: evidence is not yet complete or not yet published.
- Stated: the claim exists in a README, draft, or internal note.
- Reviewed: a human has reviewed the artifact.
- Verified: the claim is backed by the actual raw artifact and context.

Do not label something Verified unless the raw artifact, hash, and scope are available.

## 5. Safe Rewriting Pattern

When a sentence feels too strong, rewrite it using this pattern:

- Original: "DROS guarantees zero bypass."
- Safer: "DROS is designed to reduce bypass risk within the documented enforcement boundary."

- Original: "The system is completely air-gapped."
- Safer: "The system supports air-gapped deployment modes."

- Original: "This eliminates privilege escalation."
- Safer: "This materially reduces privilege escalation risk under the stated deployment model."

## 6. Review Checklist

Before publishing, ask:
- Does this sentence imply universal safety?
- Does it outpace the current evidence status?
- Does it preserve the C-ABI primary defense narrative?
- Does it match the English and Chinese versions?
- Could a skeptical reader call this an overclaim?

If yes, soften it.

## 7. Default Principle

When in doubt:
- lower the claim strength
- add the boundary
- cite the context
- keep the wording boring and precise

This is official website copy, not internal hype.
