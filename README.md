# bvetra-enterprise — Polished Next.js transfer platform (enterprise starter)
Generated: 2025-10-08T08:03:43.546557

Features:
- Mobile-first, polished UI with Tailwind and Framer Motion ready.
- Hero, gallery (uses your uploaded photos), multi-step booking widget.
- AI chat widget (OpenAI Responses API).
- API endpoints: /api/book (sends to Bitrix + Telegram), /api/ai, /api/contact, /api/telegram-webhook.
- i18n (ru/en) via Next.js.
- Two themes selectable (coffee and greygold).
- Replace/extend assets in public/photos; logo/photo used from your uploaded archive.

Setup:
1. Copy `.env.example` to `.env.local` and set keys: OPENAI_API_KEY, BITRIX_WEBHOOK_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID.
2. npm install
3. npm run dev

Notes:
- This is a starter "enterprise-style" template — you can extend components, add authentication, admin panel, payments, etc.