# Security Policy

## Scope

This security policy covers the `SpineErectaAI_vN.html` app and the configuration/supporting files in this repository.

## Supported Versions

Only the latest version (`v14` at time of writing) receives security fixes. Older versions are not patched.

## Reporting a Vulnerability

### Guardrail bypasses (highest priority)

If you discover a way to:
- Bypass or disable any of the 14 medical guardrails (GR1–GR14)
- Cause the AI to output diagnostic language
- Suppress the emergency stop (GR2) for real emergency symptoms
- Expose a user's health condition flags to an external server

**Do NOT open a public GitHub issue.** Please email:

**`hello@spineerectaai.com`**

Subject line: `[SECURITY] Guardrail bypass — <brief description>`

We will respond within **48 hours** and aim to ship a patched version within 7 days.

### Other security issues

For XSS, injection, API key exposure, or other web security vulnerabilities, please also use the private email channel above.

## What to include in your report

- A clear description of the vulnerability
- Steps to reproduce (browser, OS, version)
- Expected vs. actual behaviour
- Whether a user's health data or safety is directly at risk

## Recognition

Responsible disclosers will be acknowledged in the relevant `CHANGELOG.md` entry (name or handle, at your preference). We don't currently have a bug bounty programme.

## Out of scope

- Theoretical attacks requiring physical access to the user's unlocked device
- Social engineering of the app operator
- Issues in third-party libraries (BlazePose, Gemini API) — please report those upstream
- "The app doesn't work in browser X" — that's a compatibility issue, not a security issue
