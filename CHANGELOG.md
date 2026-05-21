# Changelog

All notable changes to SpineErectaAI are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versions are single-file releases — each entry corresponds to a new `SpineErectaAI_vN.html` file.

---

## [Unreleased]

### Planned
- Tamil (`ta`) and Malayalam (`ml`) language support
- PWA service worker for offline detection
- Supabase integration example

---

## [v14] — Current Release

### Added
- **GR14 Anxiety Language Filter** — words like "severe", "critical", "dangerous" replaced with clinically neutral equivalents across all UI, voice, and AI output
- **Arabic (`ar`) language support** — full UI, voice alerts, and AI responses; RTL layout
- **SPINA inline agent** — AI Q&A bar embedded directly below camera, no panel switch required; supports voice input
- **Gemini 2.5 Flash integration** — optional AI model upgrade for complex Q&A; local engine remains primary
- **MoveScore metric** — composite posture quality score displayed in metrics grid
- **GR13 Confidence Gate** — responses below 85% confidence route to HITL rather than generating potentially wrong answers
- **Symptom reporter FAB** — floating red button for self-reporting chest pain, breathlessness, dizziness, palpitations, neck pain
- **Microsoft Store / PWA meta tags** — `ms-age-rating`, `ms-content-id`, PEGI-3 rating
- **Camera snapshot for AI Q&A** — attaches current frame to every AI call for visual context
- **Correction chips** — clickable suggested corrections inside AI response bubbles

### Changed
- Alert queue now dequeues in strict 4-level priority: 1=BP/Inversion, 2=Spine, 3=Breath, 4=Metabolic
- HITL cooldown increased from 20s to 30s
- Voice alert text rewritten for all 6 original languages to comply with GR14 tone requirements
- Consent wall redesigned with collapsible sections and DISHA-specific health-data disclosure
- Emergency overlay re-engineered as `position:fixed; z-index:10000` to survive all stacking contexts

### Fixed
- Confidence overlay on camera canvas now shows detected *what* (GR13 fix) — previously showed only percentage
- Arabic UI now properly uses `dir="rtl"` for flex container reversal
- Inversion timer no longer triggers for seated forward bends that briefly look like Uttanasana
- `rebuildUI()` no longer resets partially-filled wizard fields on language switch

---

## [v13]

### Added
- German (`de`) language support
- Guardrails status bar (developer/transparency mode) — shows all 13 GRs with ACTIVE/FIRED status
- GR12 AI Transparency badge on every AI message
- GR11 DISHA Compliance module — audit log, on-device-only enforcement
- HITL escalation card in AI Q&A panel

### Changed
- Moved from inline `alert()` calls to priority-queued banner system
- Health wizard step 4 now includes breathing condition flags (asthma, COPD, anxiety-breathing)
- BlazePose detection throttled to every 2nd frame on 60Hz displays (GR performance fix)

### Fixed
- Pregnancy flag not applying gentle voice language in Spanish and French
- `GR_PoseLibrary.filterPoses()` silently blocked all poses when called with an empty array

---

## [v12]

### Added
- French (`fr`) language support
- Metabolic / diabetes coaching: post-exercise breath stabilisation protocol
- GR9 Inactivity Timeout — session pauses on inactivity, re-asks camera permission
- GR10 Minor Guard — under-16 age gate

### Changed
- Personal calibration baseline extended from 20 to 40 frames for higher accuracy
- HITL question phrasing made more specific ("Are you breathing from your belly?" vs generic confirm)

---

## [v11]

### Added
- Hindi (`hi`) language support — first non-Latin script
- GR8 Bias Disclosure badge
- 10-second inversion cap for cardiovascular-flagged users (hard stop)
- Pranayama ratio tracker (1:2 inhale:exhale) in metrics grid

### Changed
- Health wizard step 2 expanded to include all cardiovascular and metabolic conditions
- Spine calibration now stores per-session baseline (reset on new session)

---

## [v10]

### Added
- Spanish (`es`) language support
- Downward Dog, Triangle, Prasarita Padottanasana added to inversion-flagged list
- GR7 Protected Groups — elderly (65+) and pregnant flags
- Expert booking via WhatsApp CTA with pre-filled health context

---

## [v9]

### Added
- GR5 Rate Limiter
- GR6 XSS Sanitizer
- Breath intelligence engine (shoulder Y-axis stdDev analysis)
- Diaphragmatic vs clavicular breath classification

---

## [v8]

### Added
- Mandarin Chinese (`zh`) language support
- GDPR/CCPA consent wall
- GR3 Approved Pose Library — locked Set of ~60 approved poses
- GR4 Disclaimer Footer strip on all alerts

---

## [v7]

### Added
- Health intake wizard (3 steps)
- GR1 No-Diagnosis wrapper
- GR2 Emergency Stop overlay
- Priority alert queue (2-level)
- Calendly booking integration

---

## [v1–v6]

Initial development iterations: BlazePose integration, basic skeleton overlay, single-language (English) UI, basic spinal deviation alerts. Not publicly distributed.

---

[Unreleased]: https://github.com/your-org/spineerecta/compare/v14...HEAD
[v14]: https://github.com/your-org/spineerecta/releases/tag/v14
[v13]: https://github.com/your-org/spineerecta/releases/tag/v13
