/**
 * SpineErectaAI — Configuration Template
 * =========================================
 * Copy the CONFIG block below and replace the value at the top of
 * SpineErectaAI_vN.html (look for the "CONFIGURATION" comment section).
 *
 * Fields marked [REQUIRED] must be set before going live.
 * Fields marked [OPTIONAL] are off by default.
 *
 * ⚠️  SECURITY WARNING
 * Never expose GEMINI_API_KEY in a client-side HTML file in production.
 * Use a backend proxy (see proxy-example/ folder) so the key is never
 * visible in the browser source code.
 */

const CONFIG = {

  // ── App identity ──────────────────────────────────────────────────────
  FREE_MODE: true,                         // Keep true for zero-cost open access
  BUSINESS_NAME: 'FixMySpine AI',          // [REQUIRED] Shown in nav and CTAs
  BUSINESS_EMAIL: 'hello@example.com',     // [REQUIRED] Shown in footer

  // ── Expert booking CTAs ──────────────────────────────────────────────
  CALENDLY_URL: 'https://calendly.com/your-link/consultation',  // [REQUIRED] Your Calendly URL
  SUPPORT_WA:   '919400000000',            // [REQUIRED] WhatsApp number: country code + number, no +
  PRIVACY_URL:  '#privacy-modal',          // Keep as-is to use inline modal; or set an external URL

  // ── Storage option 1: Google Sheets (Apps Script webhook) ─────────────
  // Receives POST: { event, userId, profile, conditions, consent, ts }
  // Useful for lead capture and analytics without a backend.
  // How to set up:
  //   1. Create a Google Sheet
  //   2. Extensions → Apps Script → paste the handler from scripts/sheets-handler.gs
  //   3. Deploy as web app → Copy the /exec URL → paste below
  SHEETS_WEBHOOK: 'https://script.google.com/macros/s/REPLACE_WITH_SCRIPT_ID/exec',

  // ── Storage option 2: Firebase Firestore ──────────────────────────────
  // Enables cross-device sync and optional user accounts.
  // How to set up:
  //   1. Create a Firebase project at https://console.firebase.google.com
  //   2. Enable Firestore in Native mode
  //   3. Copy your project config below and set enabled: true
  FIREBASE: {
    enabled:           false,              // [OPTIONAL] Set true after adding your values
    apiKey:            'REPLACE_apiKey',
    authDomain:        'REPLACE.firebaseapp.com',
    projectId:         'REPLACE_projectId',
    storageBucket:     'REPLACE.appspot.com',
    messagingSenderId: 'REPLACE_messagingSenderId',
    appId:             'REPLACE_appId',
  },

  // ── Storage option 3: REST API ────────────────────────────────────────
  // POST receives JSON: { event, userId, profile, conditions, consent, ts }
  // Compatible with: FlutterFlow, WordPress (WP REST API), Supabase Edge Functions,
  //                  Directus, PocketBase, any custom backend
  REST_API: {
    enabled:  false,                       // [OPTIONAL] Set true after adding your values
    endpoint: 'https://your-app.com/api/spineerecta/user',
    apiKey:   'REPLACE_YOUR_API_KEY',      // Sent as x-api-key header
  },

  // ── AI model (Gemini 2.5 Flash) ───────────────────────────────────────
  // The local engine handles most queries without Gemini.
  // Add a Gemini key to unlock enhanced, context-aware AI Q&A.
  //
  // Getting a FREE key (takes 5 minutes, no credit card needed):
  //   1. Go to: https://aistudio.google.com/app/apikey
  //   2. Sign in with any Google account
  //   3. Click "Create API Key" → copy (starts with AIzaSy…)
  //   4. Paste below
  //
  // Free tier limits: 15 requests/min · 1,500 requests/day · 1M token context
  //
  // ⚠️  For production: proxy through your backend!
  //     If you expose this key in client-side HTML, anyone can use your quota.
  //     See proxy-example/gemini-proxy.js for a 20-line Node.js proxy.
  GEMINI_API_KEY:        'REPLACE_YOUR_GEMINI_KEY',  // [OPTIONAL] Leave as-is to use local engine only
  AI_MODEL:             'gemini-2.5-flash',
  AI_MAX_TOKENS:         800,
  AI_CONFIDENCE_THRESHOLD: 85,  // Below this % → HITL escalation instead of direct answer

};

/*
 * ── Deployment checklist ────────────────────────────────────────────────
 *
 * Minimum (no backend):
 *   [x] Set BUSINESS_NAME, BUSINESS_EMAIL
 *   [x] Set CALENDLY_URL with your actual booking link
 *   [x] Set SUPPORT_WA with your WhatsApp number
 *   [x] Host the HTML file over HTTPS (required for camera access)
 *
 * With AI Q&A:
 *   [ ] Create a backend proxy for GEMINI_API_KEY
 *   [ ] Update GEMINI_API_KEY or proxy endpoint
 *
 * With lead capture:
 *   [ ] Create Google Sheets Apps Script → set SHEETS_WEBHOOK
 *     OR
 *   [ ] Set up Firebase → enable FIREBASE block
 *
 * PWA (optional, for home screen install):
 *   [ ] Add manifest.json (template in pwa/)
 *   [ ] Add service-worker.js (template in pwa/)
 *   [ ] Reference them in the <head> of the HTML file
 *
 * Testing checklist:
 *   [ ] Camera permission prompt appears and works
 *   [ ] Pose detection begins within 5 seconds
 *   [ ] Inversion timer triggers and caps at 10s (use Downward Dog)
 *   [ ] Emergency overlay appears when "chest pain" is reported
 *   [ ] Language switching works in nav bar
 *   [ ] AI Q&A responds (local engine, no Gemini key needed)
 *   [ ] Consent wall appears on first load; not shown on refresh
 *   [ ] Mobile layout works on iPhone Safari and Chrome Android
 */
