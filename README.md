# Portfolio

React + TypeScript + Vite. Minimal dark/white theme with a light/dark toggle in the top bar.

## Run it

```
npm install
npm run dev
```

Then open the printed localhost link. To build for deployment:

```
npm run build
```

This outputs static files to `dist/` — upload that folder to Vercel, Netlify, GitHub Pages, etc.

## Where to change things

**Almost everything you'll want to edit lives in one file:**
`src/data/profile.ts`

- `profile` — your name, role, tagline, location, email, social links, about text
- `skills` — grouped skill tags (edit group names and items)
- `experience` — your timeline entries (role, company, period, description)
- `projects` — your project cards (title, description, tags, links)

Just edit the text inside that file and save — no need to touch anything else for content.

## Where things live if you want to go further

- `src/pages/` — one file per page (Home, Projects, Skills, Experience, Contact)
- `src/pages/pages.css` — styling for all page content
- `src/components/Layout.tsx` — the top nav bar and footer
- `src/components/layout.css` — styling for the nav bar and footer
- `src/styles/index.css` — global colors, fonts, and the dark/light theme variables (edit `--bg`, `--ink`, `--accent` etc. to change the color palette)
- `index.html` — the page title and fonts loaded (currently Fraunces + Inter from Google Fonts)

## Adding a photo/logo

Drop an image into the `public/` folder, then reference it in any page as `/yourfile.png`.
