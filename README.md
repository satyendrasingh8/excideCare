# Hanumat Battery Service — Website

Official website for **Hanumat Battery Service**, an Exide battery dealer in
Tulsi Nagar, Kasahai Road, Karwi, Chitrakoot Dham, Uttar Pradesh 210205.

Built with Next.js (App Router), React and Tailwind CSS. SEO-optimized with
per-page metadata, a `LocalBusiness` JSON-LD schema, an auto-generated
sitemap/robots file, and a mobile-first layout with always-visible Call and
WhatsApp buttons.

## Editing content (no coding needed for most changes)

Almost everything on the site — business name, phone numbers, address,
opening hours, services, trust points and gallery photos — lives in **one
file**:

```
src/content/site.js
```

Open it, change the text between the quotes, save, and (if deployed on
Vercel through GitHub) push the change — the live site rebuilds
automatically in about a minute.

### Changing a phone number
Edit the `phones` array and `primaryPhone` / `whatsappNumber` fields near the
top of `src/content/site.js`.

### Adding or replacing a photo
1. Drop the new image file into `public/images/`.
2. Add or edit an entry in the `gallery` array in `src/content/site.js`,
   pointing `src` at `/images/your-file-name.webp` and writing a short,
   descriptive `alt` text (this helps Google Image search too).

### Changing services, hours, or address
Edit the `services`, `hoursDisplay`, or `address` fields in the same file.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying for free on Vercel

1. Push this project to a GitHub repository (see commands below).
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**,
   and import this repository. Vercel auto-detects Next.js — no config needed.
3. Click **Deploy**. You'll get a free URL like `https://your-project.vercel.app`.
4. Open `src/content/site.js` and set `siteUrl` to that exact URL (needed for
   correct SEO tags and sitemap), commit, and push — Vercel redeploys
   automatically.
5. Optional: in Vercel project settings you can attach a free `.vercel.app`
   subdomain of your choice, or connect a custom domain later.

```bash
git init
git add .
git commit -m "Initial website for Hanumat Battery Service"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

## After going live: help Google find you

- Create/claim your **Google Business Profile** for Hanumat Battery Service
  using the exact address in this site, and link to the live website —
  this matters more for local ranking than anything on the website itself.
- Submit the site to Google Search Console (https://search.google.com/search-console)
  and submit `https://your-domain/sitemap.xml`.
- Ask a few real customers to leave Google reviews — genuine reviews are one
  of the strongest local-SEO signals.
