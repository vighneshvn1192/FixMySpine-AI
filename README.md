# FixMySpine-AI
Free AI posture coach — runs entirely in your browser. BlazePose tracks 33 body landmarks at 30fps. Personalised alerts for 12 health conditions including BP, diabetes &amp; spine disorders. Voice coaching, breath analysis &amp; inversion cap. No signup. No data uploaded.
<div align="center">

**Clinical-grade posture and breath intelligence — on your device, in your browser.**

<img width="964" height="638" alt="image" src="https://github.com/user-attachments/assets/1856edee-23cf-4287-8243-80f2e3c96463" />

<img width="621" height="484" alt="image" src="https://github.com/user-attachments/assets/1339e478-8955-4468-a1ad-e6b31c95e38a" />

<img width="965" height="592" alt="image" src="https://github.com/user-attachments/assets/b95a60ec-ccdd-4e13-a0b2-8fc03ca80791" />


<img width="588" height="576" alt="image" src="https://github.com/user-attachments/assets/c9474613-3ea7-40e3-8e64-3ded9d426fa3" />


<img width="472" height="555" alt="image" src="https://github.com/user-attachments/assets/48b65b50-d139-4aca-bad8-5d37014c809e" />


<img width="507" height="525" alt="image" src="https://github.com/user-attachments/assets/d32e2a72-def1-40d3-9c53-94529ff255fa" />


<img width="1008" height="599" alt="image" src="https://github.com/user-attachments/assets/da382525-aec6-4b8a-baa9-0481d05cf36c" />


<img width="1007" height="460" alt="image" src="https://github.com/user-attachments/assets/c4206507-91dd-4d42-b496-e4fc26af1fb9" />


<img width="1010" height="494" alt="image" src="https://github.com/user-attachments/assets/c2046407-1ed3-42f0-bf58-dfec0652798a" />

*Zero video upload · Zero subscriptions · Zero tracking · Runs entirely in your browser*

</div>

---

## What is SpineErectaAI?

SpineErectaAI (branded **FixMySpine AI**) is a single-file progressive web app that turns your device camera into a real-time clinical posture coach. It runs **entirely on-device** using WebGL-accelerated BlazePose — no video is ever uploaded, stored, or transmitted.

Designed for yoga practitioners, desk workers, gym-goers, and rehabilitation patients, it combines computer-vision pose detection with an AI reasoning engine and 14 hard-coded medical safety guardrails to deliver actionable posture feedback without replacing professional care.

---

## Screenshots

<div align="center">
<table>
<tr>
<td align="center">
<img src="docs/screenshots/screen-analysis.svg" width="200" alt="Live Analysis"/>
<br/><b>Live Pose Analysis</b><br/>
<sub>BlazePose skeleton · Confidence bar · Priority alerts</sub>
</td>
<td align="center">
<img src="docs/screenshots/screen-onboarding.svg" width="200" alt="Health Onboarding"/>
<br/><b>Health Profile Wizard</b><br/>
<sub>4-step health intake · Practice type · Language</sub>
</td>
<td align="center">
<img src="docs/screenshots/screen-ai-qa.svg" width="200" alt="AI Q&A Chat"/>
<br/><b>Live AI Q&A (SPINA)</b><br/>
<sub>Gemini 2.5 Flash · HITL escalation · Voice input</sub>
</td>
<td align="center">
<img src="docs/screenshots/screen-guardrails.svg" width="200" alt="Guardrails & Emergency"/>
<br/><b>Medical Guardrails</b><br/>
<sub>Emergency stop · GR dashboard · DISHA compliance</sub>
</td>
</tr>
</table>
</div>

---

## Key Features

### 🎯 BlazePose On-Device Detection
33 body landmarks tracked at ~30 fps via WebGL. All inference runs in the browser — no video frame ever leaves your device. Works on phones, tablets, and laptops.

### 📐 Personal Spine Calibration
The app learns *your* neutral spine in the first 40 frames. All deviation alerts are relative to your personal baseline — not a population average — so it works across body types and practice styles.

### ❤️ Blood-Pressure-Aware Safety
Inversion poses (Downward Dog, Shoulderstand, Headstand, etc.) are automatically detected and capped at **10 seconds** for users with cardiovascular or hypertension flags. Timer counts down on-screen with a voice alert at exit.

### 🫁 Breath Intelligence Engine
Tracks the Y-axis standard deviation of shoulder landmarks frame-over-frame to distinguish **diaphragmatic** from **clavicular (chest) breathing** — without any separate sensor. Alerts you with a non-anxious, clinically approved voice cue.

### 🤝 Human-in-the-Loop AI (HITL)
When detection confidence falls below 85%, SPINA asks you a simple confirmation question rather than guessing. Your answer updates the model in real time. 30-second cooldown prevents alert fatigue.

### 💬 Priority Alert Queue
Only one alert shows at a time, dequeued in strict clinical priority order:
1. Blood pressure / inversion risk
2. Spinal deviation
3. Breath pattern
4. Diabetes / metabolic coaching

No overlapping alerts. No alarm fatigue.

### 🛡️ 14 Medical Guardrails
Hard-coded safety rules that cannot be disabled at runtime. See the [full list below](#-14-medical-guardrails).

### 🌐 7 Languages
Full UI, voice alerts, and AI responses in English, Mandarin Chinese, Spanish, German, French, Hindi, and Arabic.

### ✦ SPINA — Inline AI Agent
Ask posture and breath questions by text or voice directly below the camera view. SPINA combines the live camera snapshot with your question and sends it to the Gemini 2.5 Flash API (optional; the local engine handles most queries). Answers appear inline — no panel switch required.

---

## 🛡️ 14 Medical Guardrails

| # | Name | Behaviour |
|---|------|-----------|
| GR1 | **No-Diagnosis** | All outputs wrapped in "AI suggestion only" language. Words like "You are diagnosed" and "You have disc herniation" are rewritten in real time. |
| GR2 | **Emergency Stop** | Chest pain, breathlessness, dizziness, palpitations trigger a full-screen overlay with emergency numbers and immediate session halt. |
| GR3 | **Approved Pose Library** | Only the curated list of ~60 poses can be recommended. Any AI-hallucinated or unapproved pose name is silently blocked. |
| GR4 | **Disclaimer Footer** | Every alert banner includes a mono-font disclaimer strip referencing the limitation of AI. |
| GR5 | **Rate Limiter** | Prevents brute-force or abuse of the AI Q&A endpoint. Per-key throttle with console warning. |
| GR6 | **XSS Sanitizer** | All user-provided text is sanitised through an allowlist (`b, strong, em, i, br, span`) before injection into the DOM. |
| GR7 | **Protected Groups** | Elderly (65+), pregnant, and minor users trigger modified thresholds, gentler voice language, and escalation paths automatically. |
| GR8 | **Bias Disclosure** | A disclosure badge notes that pose detection accuracy varies by skin tone, clothing, and lighting. |
| GR9 | **Inactivity Timeout** | Session pauses after inactivity to prevent unattended camera access. |
| GR10 | **Minor Guard** | Under-18 age gate modifies content scope and locks certain advanced alerts. |
| GR11 | **DISHA Compliance** | Health condition flags are stored on-device only. Anonymised patterns for AI improvement are not linked to identifiable data. Complies with India's DPDPA 2023. |
| GR12 | **AI Transparency** | Every AI-generated message carries a visible badge: model name, confidence score, and "not a medical diagnosis" label. |
| GR13 | **Confidence Gate** | Below 85% confidence, SPINA escalates to HITL rather than generating a potentially wrong answer. |
| GR14 | **Anxiety Language** | Words like "severe", "critical", "you have", "dangerous" are replaced with clinically neutral equivalents before display or voice output. |

---

## 🏥 Practice Modes

| Mode | Description |
|------|-------------|
| 🧘 Yoga | Full approved pose library with inversion timers and entry/exit cues |
| 🌬️ Pranayama | Breath ratio tracking (1:2 inhale:exhale), Nadi Shodhana, Bhramari coaching |
| 💻 Office / Desk | Forward-head posture, screen ergonomics, 20-20-20 eye-break reminders, break nudges |
| 🏋️ Gym | Deadlift/squat spine alignment, post-exercise breath stabilisation for diabetic users |
| 🩹 Rehabilitation | Therapeutic pose subset only, conservative alert thresholds, physiotherapist escalation |
| 🧘 Meditation | Minimal alerts, subtle cues, long-hold detection |
| 🏃 Sports | Dynamic movement tracking, proprioception cues |

---

## 🌐 Multilingual Support

| Language | Code | UI | Voice Alerts | AI Responses |
|----------|------|----|-------------|--------------|
| 🇬🇧 English | `en` | ✅ | ✅ | ✅ |
| 🇨🇳 Mandarin Chinese | `zh` | ✅ | ✅ | ✅ |
| 🇪🇸 Spanish | `es` | ✅ | ✅ | ✅ |
| 🇩🇪 German | `de` | ✅ | ✅ | ✅ |
| 🇫🇷 French | `fr` | ✅ | ✅ | ✅ |
| 🇮🇳 Hindi | `hi` | ✅ | ✅ | ✅ |
| 🇸🇦 Arabic | `ar` | ✅ | ✅ | ✅ |

Language is selected during onboarding and can be changed live via the nav bar language switcher.

---

## Installation

### Option 1 — Open directly in browser (no install)
```bash
# Download the single HTML file
curl -O https://raw.githubusercontent.com/your-org/spineerecta/main/SpineErectaAI_v14.html
# Open in any modern browser
open SpineErectaAI_v14.html
```

### Option 2 — Serve locally
```bash
# Python
python3 -m http.server 8080
# Then open http://localhost:8080/SpineErectaAI_v14.html

# Node
npx serve .
```

### Option 3 — Deploy to the web
The app is a single self-contained HTML file. Drop it on any static host:
- **GitHub Pages** — push to `gh-pages` branch
- **Netlify** — drag-and-drop the file
- **Vercel** — `vercel --prod`
- **Firebase Hosting** — `firebase deploy`

> **Camera permission** is required for pose detection. The browser will prompt on first use. No frames are ever uploaded.

---

## Configuration

Before going live, edit the `CONFIG` block at the top of `SpineErectaAI_v14.html`:

```js
const CONFIG = {
  FREE_MODE: true,                          // Keep true for open-access
  BUSINESS_NAME: 'FixMySpine AI',
  BUSINESS_EMAIL: 'hello@spineerectaai.com',
  CALENDLY_URL: 'https://calendly.com/...',  // Your booking link
  SUPPORT_WA:   '91XXXXXXXXXX',             // WhatsApp number (country code + number)

  // Optional: Google Sheets webhook for lead capture
  SHEETS_WEBHOOK: 'https://script.google.com/macros/s/REPLACE/exec',

  // Optional: Firebase for cross-device sync
  FIREBASE: {
    enabled: false,
    apiKey: 'REPLACE_apiKey',
    // ...other Firebase config
  },

  // Optional: Gemini 2.5 Flash for enhanced AI Q&A
  // Free key at https://aistudio.google.com/app/apikey
  // WARNING: For production, proxy through your backend
  GEMINI_API_KEY: 'REPLACE_YOUR_GEMINI_KEY',
  AI_CONFIDENCE_THRESHOLD: 85,  // Below this → HITL escalation
};
```

A full configuration template with comments is available at [`config-template.js`](config-template.js).

---

## Architecture

```
SpineErectaAI_v14.html  (single file, ~445KB)
│
├── CONFIG block          — all runtime settings, no build step needed
├── CSS design tokens     — dark theme, CSS variables, responsive
│
├── Consent Wall          — GDPR/DPDPA-compliant, runs once, stored in localStorage
├── Health Wizard         — 4-step intake: language → cardiovascular → spine → breathing
│
├── Analysis Section
│   ├── WebGL camera feed — BlazePose landmark overlay
│   ├── Confidence overlay — detected pose + score
│   ├── Alert queue        — priority-dequeued single banner
│   ├── Metrics grid       — inversion timer, breath pattern, MoveScore
│   └── SPINA agent bar    — inline AI text/voice Q&A
│
├── Features Section      — capability cards (01–07)
│
├── AI Q&A Panel          — floating chat, Gemini 2.5 Flash, camera snapshot
│
└── Guardrail Modules (GR1–GR14)
    ├── GR_Sanitize       — XSS allowlist
    ├── GR_RateLimit      — per-key throttle
    ├── GR_DISHA          — on-device only logging
    ├── GR_NoDiagnosis    — language wrapper
    ├── GR_PoseLibrary    — approved-pose Set (~60 poses)
    ├── GR_ProtectedGroups — age/pregnancy flags
    └── GR_Emergency      — symptom reporter + overlay
```

**Technology stack:**

| Component | Technology |
|-----------|-----------|
| Pose detection | Google BlazePose via WebGL |
| AI Q&A | Gemini 2.5 Flash API (optional) + local rule engine |
| Voice output | Web Speech API (SpeechSynthesis) |
| Voice input | Web Speech API (SpeechRecognition) |
| Storage | `localStorage` (on-device, default) · Firebase · Google Sheets · REST API |
| Rendering | Single HTML file, zero build step, zero npm install |
| Compliance | DPDPA 2023, GDPR, CCPA, PIPEDA, PDPA |

---

## Privacy & Compliance

- **No video upload.** Camera frames are processed in-browser via WebGL and immediately discarded.
- **No identifiable data transmitted.** Health condition flags are stored in `localStorage` only.
- **Anonymised patterns** for AI improvement require explicit opt-in consent during onboarding.
- **Gemini API calls** (optional AI Q&A) send the user's text question and a single JPEG snapshot — no health profile data.
- Compliant with **DPDPA 2023** (India), **GDPR** (EU), **CCPA** (California), **PIPEDA** (Canada), **PDPA** (Thailand/Singapore).

See the inline privacy modal (accessible from the consent wall) for the full data handling disclosure.

---

## Browser Compatibility

| Browser | Pose Detection | Voice Alerts | Voice Input | AI Q&A |
|---------|---------------|-------------|-------------|--------|
| Chrome 110+ | ✅ | ✅ | ✅ | ✅ |
| Edge 110+ | ✅ | ✅ | ✅ | ✅ |
| Safari 16.4+ | ✅ | ✅ | ⚠️ Limited | ✅ |
| Firefox 115+ | ✅ | ✅ | ❌ | ✅ |
| Chrome Android | ✅ | ✅ | ✅ | ✅ |
| Safari iOS | ✅ | ✅ | ⚠️ Limited | ✅ |

> Requires HTTPS for camera access when hosted remotely (localhost is exempt).

---

## Approved Yoga Pose Library (GR3)

The following poses are in the locked approved library. Any pose not on this list is silently blocked from AI recommendations.

**Standing:** Tadasana, Vrikshasana, Trikonasana, Virabhadrasana I/II/III, Utkatasana, Garudasana, Uttanasana, Ardha Uttanasana, Prasarita Padottanasana

**Seated:** Dandasana, Paschimottanasana, Baddha Konasana, Sukhasana, Padmasana, Vajrasana, Virasana, Ardha Matsyendrasana, Janu Sirsasana

**Supine:** Savasana, Supta Baddha Konasana, Supta Matsyendrasana, Pavanamuktasana, Setu Bandhasana, Matsyasana

**Prone:** Bhujangasana, Salabhasana, Dhanurasana, Makarasana

**Inversions (BP-flagged):** Adho Mukha Svanasana, Sarvangasana, Halasana, Sirsasana, Viparita Karani

**Pranayama:** Nadi Shodhana, Kapalabhati, Bhramari, Dirga Pranayama, Ujjayi

**Therapeutic:** Cat-Cow, Balasana, Sphinx Pose, Chin Tuck, Shoulder Rolls, Neck Side Stretch, Pelvic Tilts

---

## Contributing

Contributions are welcome — particularly for:
- Additional language translations
- Expanded therapeutic pose protocols
- Accessibility improvements (screen reader, high contrast)
- Backend integration examples (Firebase, Supabase, REST)

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a full version history.

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

## Disclaimer

FixMySpine AI is a **wellness and fitness application**, not a licensed medical device. It does not provide medical diagnosis, clinical assessment, or treatment recommendations. All outputs are informational suggestions only. Always consult a qualified healthcare professional for medical concerns. Stop using the app immediately if you experience pain, dizziness, breathlessness, or any adverse symptoms.

---

<div align="center">
<sub>Free forever · On-device AI · No tracking · DPDPA 2023 · GDPR · CCPA · PIPEDA · PDPA</sub><br/>
<sub>v14.0 · © 2024 FixMySpine AI · hello@spineerectaai.com</sub>
</div>
