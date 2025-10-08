
BVETRA — polished Next.js starter (release)
- Tailwind + Framer Motion UI (minimalist + smooth interactions)
- Email OTP passwordless auth (SMTP required)
- Booking, Profile, Orders, AI Chat
- Bitrix + Telegram integrations via env variables
- Replace public/logo.png and /public/photos/* with your assets if desired
- Usage: npm install && npm run dev


---
## How to use authorization (OTP) — explanation

The project includes passwordless email OTP authentication. How it works:
1. Go to `/login` and enter your email. The backend will generate a 6-digit code and attempt to send it via SMTP.
2. If SMTP is configured (set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` in `.env.local`), you'll receive the code by email.
3. Go to `/verify`, enter the same email and the 6-digit code — the server will verify it.
4. On success a secure `HttpOnly` cookie `token` is set and you are redirected to `/profile`.
5. If SMTP is not configured, you can still test: the code is stored in `data/otps.json` on the server (for local testing only).

If the included OTP flow does not work for your environment, I can implement alternate OTP delivery:
- SMS via Twilio (requires Twilio credentials), or
- Telegram login via bot (requires bot + user interaction).

---
## Language & Theme controls

Per your request, language auto-detection is enabled, but users can control both language and theme manually in the UI.

Where to change them in code:
- Language selection UI: `components/LanguageSwitcher.js` (added). Changing the language updates `next/router` locale and persists in `localStorage`.
- Theme selection UI: `components/ThemeSwitcher.js` (added). The theme is persisted to `localStorage` and applied via `data-theme` attribute on `document.documentElement`.
- The app ships with your two themes already (Coffee and GreyGold). I did not add new themes.

---
## Assets used
- User photos (from your archive) have been placed under `public/photos/photo_user*.jpg`.
- Template images extracted (if any) are in `public/photos/tpl_photo*.jpg`.
- Logo replaced with your uploaded image `public/logo.png`.
