# Rithwik Reddy — Portfolio

A personal portfolio website for **Sandi Rithwik Reddy**, Associate Software Engineer.
Built as a lightweight static site with vanilla HTML, CSS, and JavaScript — no build step required.

## Tech

- **HTML** — single `index.html` shell
- **CSS** — `style.css` (main theme) + `cosmos.css` (animated hero: grid, starfield, nebula)
- **JavaScript** — `script.js` renders the whole page from the content in `data.js`

All page content (name, roles, experience, projects, education, contact) lives in **`data.js`**.
To update the site, edit that one file.

## Project structure

```
.
├── index.html      # page shell, loads the CSS + JS
├── style.css       # main styles / theme
├── cosmos.css      # hero cosmos effects (grid + stars + nebula)
├── data.js         # all portfolio content (edit this to update)
├── script.js       # renders the page from data.js
└── Images/         # profile and background images
```

## Run locally

No tooling needed. Either:

- Double-click `index.html` to open it in your browser, or
- Serve it with any static server, e.g. VS Code "Live Server" extension.

## Update workflow

1. Edit content in `data.js` (or styles in the CSS files).
2. Commit and push:

   ```bash
   git add .
   git commit -m "Describe your change"
   git push
   ```

3. If connected to a host (Netlify / Vercel / GitHub Pages), the live site redeploys automatically.

## Deployment

- **Netlify / Vercel** — connect this repo; works even while the repo stays **private**. Auto-deploys on every push.
- **GitHub Pages** — free, but the repo must be **public**.
