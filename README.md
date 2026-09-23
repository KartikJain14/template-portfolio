# Portfolio Template

A one-page portfolio website you can make your own **without knowing how to code**.

You edit one file. The website updates itself.

> Used at **PFE** by **[MPSTME ACM](https://mpstmeacm.com)**.
> Built by [Kartik](https://jkartik.in) · [KartikJain14/template-portfolio](https://github.com/KartikJain14/template-portfolio)

---

## The checklist

Work down this list. Everything is explained in detail further below — the links
jump straight to the right part.

### Get it running

- [ ] Install [Node.js](https://nodejs.org) (the big green "LTS" button)
- [ ] Run `npm install` once — [how](#1-get-it-running-once)
- [ ] Run `npm run dev` and open the link it prints

### Fill in your details — all in `src/data/portfolio.js`

- [ ] **1. Colours** — pick your accent colour — [example](#block-1--colours)
- [ ] **2. Who you are** — name, course, campus, photo — [example](#block-2--who-you-are)
- [ ] **3. About me** — your paragraphs and quick facts — [example](#block-3--about-me)
- [ ] **4. Qualities** — three or four words that describe you — [example](#block-4--qualities)
- [ ] **5. Experience** — committees, clubs, internships — [example](#block-5--experience)
- [ ] **6. Achievements** — hackathons, ranks, certifications — [example](#block-6--achievements)
- [ ] **7. Projects** — things you have built — [example](#block-7--projects)
- [ ] **8. Skills** — what you actually work with — [example](#block-8--skills)
- [ ] **9. Contact** — your email and social links — [example](#block-9--contact)
- [ ] **10. Browser tab** — page title and description — [example](#block-10--browser-tab-and-link-previews)
- [ ] **11. Section headings** — reword any heading you like

### Add your files

- [ ] Put your photo in `public/` and point `photo:` at it — [how](#adding-your-photo-or-resume)
- [ ] Put your resume PDF in `public/` and point `resume:` at it
- [ ] *(optional)* Replace `public/og.png` with your own link preview image

### Delete what you do not have

- [ ] Empty any section you cannot fill yet — [how](#hiding-a-section-you-do-not-need)

### Put it online with GitHub Pages

- [ ] Push your code to a GitHub repository — [how](#3-put-it-online-github-pages)
- [ ] Turn on Pages: **Settings → Pages → Source → GitHub Actions**
- [ ] Set `url:` in `src/data/portfolio.js` to your live address
- [ ] Set `base:` in `src/data/portfolio.js` — **this one catches everybody**, [read it](#the-base-setting-important)
- [ ] Push again and wait for the green tick in the **Actions** tab

### Before you send the link to anyone

- [ ] Open it on your phone as well as your laptop
- [ ] Click every link — make sure none of them still say `https://github.com/`
- [ ] Paste the link into WhatsApp to yourself and check the preview card
- [ ] Read your own text out loud once. Typos are very visible on a portfolio.

---

## 1. Get it running (once)

You need [Node.js](https://nodejs.org) installed — download the "LTS" version and click
through the installer.

Then open a terminal in this folder and run these two commands:

```
npm install
npm run dev
```

The second command prints a link like `http://localhost:4321`. Open it in your browser.
Leave that terminal open while you work — every time you save a file, the page in your
browser updates by itself.

To stop it, click the terminal and press `Ctrl + C`.

---

## 2. Make it yours

Open **`src/data/portfolio.js`**. That is the only file you need. It is one long list of
your details, split into numbered blocks with instructions above each one.

### Three rules

1. Keep the `"quotes"` around every piece of text.
2. Keep the commas `,` at the end of each line.
3. To use a double quote inside your text, write it as `\"`.

If the page goes blank, you almost certainly deleted a quote, a comma or a bracket.
Press `Ctrl + Z` to undo until it comes back.

---

### Block 1 — Colours

One line. Everything on the site follows it: buttons, links, highlights, the tab icon.

```js
export const theme = {
  accent: "#2F7A5B",       // light mode
  accentDark: "#4FD196",   // a brighter version for dark mode
};
```

Copy-paste options: Coral `#E8542E` · Forest `#2F7A5B` · Indigo `#4F5BD5` ·
Plum `#8B3A62` · Ocean `#1D6F8C` · Gold `#B8860B`

### Block 2 — Who you are

```js
export const profile = {
  name: "Riya Sharma",
  shortName: "Riya",                                  // shown in the menu
  role: "Computer Engineering Undergraduate",
  tagline: "I build small web things and I am usually the one who fixes the messy part.",
  course: "B.Tech, Computer Engineering",
  college: "MPSTME",
  campus: "Mumbai Campus",
  batch: "2024 — 2028",
  location: "Mumbai, India",
  status: "Open to internships",                      // "" hides the green pill
  photo: "/riya.jpg",                                 // "" shows your initials instead
  resume: "/riya-resume.pdf",                         // "" hides the button
};
```

Any line you set to `""` simply disappears from the page.

### Block 3 — About me

Write like you talk. Three short paragraphs beat one long one.

```js
export const about = {
  paragraphs: [
    "I got into programming by building a scrappy website for my school fest.",
    "Since then I have spent most of my free time building side projects and breaking them.",
  ],
  facts: [
    { label: "Course", value: "B.Tech CE" },
    { label: "Year", value: "2nd Year" },
  ],
};
```

### Block 4 — Qualities

Keep the `title` to one word — those words also scroll across the strip under your name.

```js
export const qualities = [
  { title: "Curious", text: "I open the docs before I open Stack Overflow. Usually." },
  { title: "Reliable", text: "If I say Friday, it is ready by Friday." },
];
```

### Block 5 — Experience

Clubs and committees count. Newest at the top. `current: true` adds a "Now" badge.

```js
export const experience = [
  {
    role: "Technical Head",
    org: "MPSTME ACM Student Chapter",
    department: "Web Development",
    period: "2025 — Present",
    current: true,
    points: [
      "Lead a team of six on the chapter website and event portals.",
      "Ran four beginner workshops on Git and HTML for first years.",
    ],
  },
];
```

Bullets are stronger with a number in them. "Handled registrations" is weak;
"Handled 1,200 registrations across three days" is not.

### Block 6 — Achievements

```js
export const achievements = [
  {
    title: "1st Place — Inter-College Hackathon",
    detail: "Built a campus lost-and-found app in 24 hours with a team of four.",
    year: "2025",
    tag: "Hackathon",
  },
];
```

### Block 7 — Projects

Two finished projects beat six abandoned ones. Put your best first.

```js
export const projects = [
  {
    title: "Attendance Buddy",
    blurb: "Tells you how many classes you can skip before attendance drops below 75%.",
    tags: ["JavaScript", "Local Storage"],
    year: "2025",
    link: "https://attendance-buddy.vercel.app",   // "" if it is not live
    code: "https://github.com/riya/attendance-buddy",
    image: "/attendance-buddy.png",                // "" gives a clean designed panel
  },
];
```

### Block 8 — Skills

Be honest. You will be asked about everything on this list in an interview.

```js
export const skills = [
  { group: "Languages", items: ["JavaScript", "Python", "C++"] },
  { group: "Frontend", items: ["HTML", "CSS", "React"] },
];
```

### Block 9 — Contact

Any website works — it is not limited to the ones shown.

```js
export const contact = {
  email: "riya.sharma@example.com",
  note: "If you have an internship or just want to talk about something you are building, say hello.",
};

export const socials = [
  { label: "GitHub", handle: "@riyasharma", url: "https://github.com/riyasharma" },
  { label: "LinkedIn", handle: "in/riyasharma", url: "https://linkedin.com/in/riyasharma" },
];
```

### Block 10 — Browser tab and link previews

```js
export const site = {
  url: "https://riyasharma.github.io",   // fill in AFTER you deploy
  base: "/portfolio",                    // see the base setting below
  title: "Riya Sharma — Computer Engineering Undergraduate",
  description: "Portfolio of Riya Sharma, a B.Tech student at MPSTME. Projects, experience and achievements.",
  ogImage: "/og.png",
  language: "en",
};
```

`url` is worth coming back for. It switches on the sitemap, the canonical link and the
preview card that WhatsApp and LinkedIn show when someone shares your site.

---

### Hiding a section you do not need

Empty the list. For example, if you have no projects yet:

```js
export const projects = [];
```

The Projects section disappears from the page **and** from the menu, the remaining
sections renumber themselves, and the button in the hero retargets. Nothing else to do.

### Adding your photo or resume

Drop the file into the **`public`** folder, then point at it with a `/` in front:

```js
photo: "/my-photo.jpg",
resume: "/resume.pdf",
```

Leave `photo: ""` and you get a clean card with your initials instead — it looks
deliberate, so there is no rush to add one.

---

## 3. Put it online (GitHub Pages)

Free, and it redeploys itself every time you push.

1. **Create a repository on GitHub** and push this folder to it, on the `main` branch.
2. On GitHub go to **Settings → Pages → Build and deployment → Source** and choose
   **GitHub Actions**. (Not "Deploy from a branch".)
3. Open `src/data/portfolio.js`, scroll to block 10, and set `url` and `base`.
4. Commit and push. Go to the **Actions** tab and watch it build. Green tick means live.

The workflow that does this is already in `.github/workflows/deploy.yml` — you do not
need to touch it.

### The `base` setting (important)

This is the one that trips everyone up. If your site loads as unstyled black text on
white, this is why.

| Your repository is named | `url` | `base` |
| --- | --- | --- |
| `riyasharma.github.io` | `"https://riyasharma.github.io"` | `""` |
| anything else, e.g. `portfolio` | `"https://riyasharma.github.io"` | `"/portfolio"` |

`base` is the repository name with a slash in front, and **no slash at the end**.

One caveat worth knowing: search engines only read `robots.txt` from the very top of a
domain, so on a project repository yours sits at `/portfolio/robots.txt` and is ignored.
Nothing breaks — your pages are still indexed through the sitemap and the canonical tag.
If you want it honoured, use a `username.github.io` repository or a custom domain.

These two lines feed `astro.config.mjs` automatically, so `src/data/portfolio.js` stays
the only file you edit:

```js
// astro.config.mjs — already set up, shown here so you know what is happening
site: site.url || undefined,
base: site.base || undefined,
```

### Using your own domain

Put a file named `CNAME` in `public/` containing just your domain
(`riyasharma.com`), set `url` to `"https://riyasharma.com"`, set `base` back to `""`,
and add the domain under **Settings → Pages → Custom domain**.

---

## What is where

You will probably never need these, but just in case:

```
src/
  data/portfolio.js          <-- everything you edit lives here
  pages/index.astro              the order of the sections on the page
  pages/404.astro                the "page not found" page
  pages/robots.txt.ts            generated for search engines
  pages/sitemap.xml.ts           generated for search engines
  pages/favicon.svg.ts           tab icon, drawn from your initial + accent colour
  pages/manifest.webmanifest.ts  name and icons when saved to a phone
  pages/.well-known/             security.txt (how to report a problem)
  components/                    one file per section
  layouts/Base.astro             page shell, meta tags, fonts, dark mode
  styles/global.css              colours, type sizes, shared bits
public/                          your photo, resume, icons, preview image
.github/workflows/deploy.yml     publishes to GitHub Pages on every push
```

To **reorder sections**, move the blocks around in `src/pages/index.astro`.

To **change the fonts**, edit the Google Fonts link in `src/layouts/Base.astro` and the
`--font-*` lines near the top of `src/styles/global.css`.

---

## Good to know

- **Your tab icon is automatic.** It is drawn from your first initial and your accent
  colour, so it updates when you do. The app icons in `public/` (`icon-192.png` and
  friends) are a neutral default — replace them only if you want to.
- **Dark mode** is built in, remembered between visits, and follows the visitor's
  system setting the first time.
- **Social previews** are handled: Open Graph and Twitter card tags, plus structured
  data so Google can show you as a person rather than just a page. They switch on once
  `url` is filled in.
- **Phones are handled.** Everything reflows down to small screens.
- **Animations** turn themselves off for anyone who has "reduce motion" enabled.
- **Printing** the page gives you a tidy one-page CV.

---

## Licence

MIT — see [LICENSE](LICENSE). Use it, change it, ship it.

Made at PFE by [MPSTME ACM](https://mpstmeacm.com) · built by [Kartik](https://jkartik.in).
If you keep the small credit line in the footer, thank you — it is the only thing the
template asks for.
