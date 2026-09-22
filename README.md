# Your Portfolio

A one-page portfolio website you can make your own **without knowing how to code**.

You edit one file. The website updates itself.

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
Leave that terminal window open while you work — every time you save a file, the page
in your browser updates by itself.

To stop it, click the terminal and press `Ctrl + C`.

---

## 2. Make it yours

Open **`src/data/portfolio.js`**.

That is the only file you need. It is one long list of your details, split into
numbered blocks with instructions above each one:

| Block | What goes in it |
| --- | --- |
| 1. Colours | Your accent colour |
| 2. Who you are | Name, course, campus, photo, resume |
| 3. About me | Your paragraphs and quick facts |
| 4. What you are like | Three or four qualities |
| 5. Experience | Committees, clubs, internships |
| 6. Achievements | Hackathons, ranks, certifications |
| 7. Projects | Things you have built |
| 8. Skills | What you work with |
| 9. Contact | Email and social links |
| 10. Browser tab | Page title and Google preview |
| 11. Section headings | The wording of each heading |

Change the text between the `"quotes"`. Save. Look at your browser.

### Three rules

1. Keep the `"quotes"` around every piece of text.
2. Keep the commas `,` at the end of each line.
3. To use a double quote inside your text, write it as `\"`.

If the page goes blank, you almost certainly deleted a quote, a comma or a bracket.
Press `Ctrl + Z` to undo until it comes back.

### Hiding a section you do not need

Empty the list. For example, if you have no projects yet:

```js
export const projects = [];
```

The Projects section disappears from the page **and** from the menu, and the remaining
sections renumber themselves. Nothing else to do.

### Adding your photo or resume

Drop the file into the **`public`** folder, then point at it with a `/` in front:

```js
photo: "/my-photo.jpg",
resume: "/resume.pdf",
```

Leave `photo: ""` and you get a clean card with your initials instead — it looks
deliberate, so there is no rush to add one.

---

## 3. Put it on the internet (free)

1. Push this folder to a GitHub repository.
2. Make an account at [netlify.com](https://netlify.com) or [vercel.com](https://vercel.com).
3. Choose "Import from GitHub" and pick your repository.
4. Accept the settings it suggests and click deploy.

You get a live link in about a minute. Every time you push a change, it updates.

---

## What is where

You will probably never need these, but just in case:

```
src/
  data/portfolio.js     <-- everything you edit lives here
  pages/index.astro         the order of the sections on the page
  components/               one file per section
  layouts/Base.astro        the page shell, fonts, dark mode
  styles/global.css         colours, type sizes, shared bits
public/                     your photo, resume, favicon
```

To **reorder sections**, move the blocks around in `src/pages/index.astro`.

To **change the fonts**, edit the Google Fonts link in `src/layouts/Base.astro` and the
`--font-*` lines near the top of `src/styles/global.css`.

---

## Good to know

- **Dark mode** is built in. The sun/moon button switches it, and the choice is
  remembered. It also follows your visitor's system setting on first visit.
- **Phones are handled.** Everything reflows down to small screens.
- **Animations** fade in as you scroll, and are switched off automatically for anyone
  who has "reduce motion" turned on in their system settings.
- **Printing** the page gives you a tidy one-page CV.
