# Wedding Invitation (Next.js)

## Run locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Dynamic invite code flow (Telegram Mini App)

The app now supports dynamic invite routing from Telegram Mini App entry points.

### What is supported

On the landing page (`/`), the app resolves an invite code from:

1. `Telegram.WebApp.initDataUnsafe.start_param` (highest priority)
2. Query params fallback:
   - `?code=G001`
   - `?invite=G001`
   - `?startapp=G001`
   - `?tgWebAppStartParam=G001`
3. Hash params fallback (for clients that put launch params in hash):
   - `#code=G001`
   - `#invite=G001`
   - `#startapp=G001`
   - `#tgWebAppStartParam=G001`

If a code is found, the app automatically redirects to `/invite/<CODE>`.

### Telegram bot deep link setup

Use a Telegram bot URL like:

```text
https://t.me/<YOUR_BOT_USERNAME>/<YOUR_MINI_APP_SHORTNAME>?startapp=G001
```

Telegram passes `startapp` into Mini App launch data; the client reads it and opens:

```text
/invite/G001
```

### Dynamic code strategy

For per-user invites, generate the code server-side (from your CRM, Google Sheet, or DB), then send each user a unique deep link:

```text
https://t.me/<YOUR_BOT_USERNAME>/<YOUR_MINI_APP_SHORTNAME>?startapp=<INVITE_CODE>
```

The invite page validates the code against `app/data/guests.json` via `getGuestByInviteId`.

If the code is unknown, `/invite/[id]` returns `404`.

## Notes

- Invite IDs are normalized to uppercase and trimmed.
- URL-encoded values are supported.
