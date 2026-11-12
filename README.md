# Mystic Roots Healing

Marketing website for Mystic Roots Healing, a traditional spell casting service.
Built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

- `src/lib/site.ts`: name, caster persona, contact details, nav. **Replace the placeholder values here before launch.**
- `src/lib/spells.ts`: the eight service categories and the thirty-two service pages.
- `src/lib/content.ts`: how-it-works steps, FAQ, sample testimonials, blog posts.
- `src/app/`: routes. Spell pages are generated from the data files.
- `public/images/`: photography from Unsplash (free to use under the Unsplash License).

## Deploy

Any Next.js host works. Vercel: import the GitHub repo and deploy with defaults.

## SEO and indexing

- Every page sets a canonical URL, Open Graph and Twitter cards through `pageMeta()` in `src/lib/seo.ts`.
- Structured data (JSON-LD) is emitted per page: WebSite and Organization on every page, LocalBusiness and FAQ on the home page, Service on each spell page, ItemList on category pages, FAQPage on the FAQ, BlogPosting on posts, Person on About, BreadcrumbList where relevant.
- `sitemap.xml` and `robots.txt` are generated from the data files.
- After each deploy, the `indexnow` workflow job submits every sitemap URL to IndexNow (Bing, Yandex and partners). The key file lives in `public/`.
- Google does not use IndexNow. Verify the site once in Google Search Console, paste the code into `site.verification.google` in `src/lib/site.ts`, and submit `https://mysticrootshealing.org/sitemap.xml`. Bing Webmaster Tools can import the property from Search Console.
