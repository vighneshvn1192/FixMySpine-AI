# Contributing to SpineErectaAI

Thank you for your interest in contributing! This document covers everything you need to get started.

## What we're looking for

Contributions are especially welcome in these areas:

- **Language translations** — adding or improving one of the 7 supported languages, or proposing a new one (Tamil, Malayalam, and Japanese are on the roadmap)
- **Therapeutic pose protocols** — evidence-based additions to the approved pose library (GR3) with citations
- **Accessibility** — screen reader support, high-contrast mode, keyboard navigation improvements
- **Backend integrations** — example connector code for Supabase, PocketBase, or other backends
- **Documentation** — fixing errors, adding examples, translating the README

## What we're NOT looking for

To keep the product safe, the following PRs will not be merged without a medical review panel sign-off:

- Any change that weakens or bypasses a guardrail (GR1–GR14)
- Adding diagnostic language to any AI output
- Removing the medical disclaimer from any alert or response
- Reducing the inversion timer cap below 10 seconds

## Getting started

The entire app is a single HTML file — there is no build step.

```bash
git clone https://github.com/your-org/spineerecta.git
cd spineerecta

# Open directly in browser
open SpineErectaAI_v14.html

# Or serve locally for camera access over localhost
python3 -m http.server 8080
# → http://localhost:8080/SpineErectaAI_v14.html
```

## How to add a translation

All user-facing strings live in the `LANGS` object inside the HTML file. Each language is a top-level key (`en`, `zh`, `es`, `de`, `fr`, `hi`, `ar`).

1. Copy the `en` block as your starting point
2. Create a new key for your language code (e.g. `ta` for Tamil)
3. Translate every string in the block — **do not skip any keys**
4. Add your language to the `<select id="f-lang">` dropdown in the onboarding wizard
5. Add a `nav-lang-bar` button for the language
6. Test voice output: set `speechSynthesis.lang` to your locale code and verify it reads aloud correctly
7. If your language is RTL, add `dir="rtl"` handling to `rebuildUI()`

### Translation rules
- Guardrail messages (keys starting with `gr_`, `em_`, `cw_`) must preserve the safety intent exactly — do not soften emergency language
- The GR1 no-diagnosis disclaimer must appear in the translated output — add it to the `GR_NoDiagnosis.DISCLAIMER` object
- Keep voice text (keys ending in `_v`) short and calm in tone

## Submitting a pull request

1. Fork the repo and create a feature branch: `git checkout -b feat/tamil-translation`
2. Make your changes
3. Test in Chrome (primary), then Safari and Firefox
4. Update `CHANGELOG.md` under `[Unreleased]`
5. Open a PR with a clear description of what changed and why
6. For pose library additions, include a citation (PubMed link, textbook reference, or physiotherapy guideline)

## Code style

- The app is intentionally vanilla JS — no TypeScript, no frameworks, no npm
- Use `const` and `let`; avoid `var`
- Guardrail module pattern: IIFE returning a public API object — follow existing patterns
- CSS: add new design tokens to the `:root` block; avoid magic numbers inline
- Strings: **never** hardcode user-facing copy in HTML or JS — always use `L('key')` or `LANGS[lang].key`

## Reporting a safety issue

If you discover a way to bypass a medical guardrail or trigger unsafe AI output, please **do not open a public issue**. Email `hello@spineerectaai.com` with subject line `[SECURITY] Guardrail bypass` and we will respond within 48 hours.

## Code of conduct

Be kind, be constructive, be patient. This project serves users who may be managing real health conditions — contributions should reflect that responsibility.
