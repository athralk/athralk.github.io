# athralk.github.io

Personal portfolio. Plain HTML/CSS/JS, no build step — deploys automatically via GitHub Pages on push to `main`.

## Structure

- `index.html` — page markup (Projects / About / Connect sections)
- `style.css` — all styling (CSS variables at the top control color/font/spacing)
- `script.js` — nav scroll state + scroll-reveal animation

## Adding a project

Duplicate an `<article class="card">` block in the Projects section of `index.html` and edit its title, description, stat line, tags, and repo link.

## Adding writing / blog posts

The Connect section currently shows a single muted line since there's nothing published yet. Once you have a post, replace the `<p class="writing">` line with a small list of links (title + date), same pattern as the tags list.

## Local preview

Open `index.html` directly in a browser, or run a local server from this folder:

```
python -m http.server 8000
```

then visit `http://localhost:8000`.
