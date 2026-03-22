# Slides

Markdown slide decks presented with Reveal.js, hosted on GitHub Pages. No build step, no dependencies.

## Setup

1. Create a new GitHub repo (e.g. `slides`)
2. Copy the contents of this folder into the repo
3. Enable GitHub Pages in repo settings (Settings → Pages → Source: deploy from branch, select `main`, folder `/ (root)`)
4. Your decks will be available at `https://yourusername.github.io/slides/`

## Adding a new deck

1. Create a new `.md` file in `decks/`, e.g. `decks/my-talk.md`
2. Write your slides using Markdown, separated by `---` for horizontal slides and `--` for vertical slides
3. Add a link in `index.html`:
   ```html
   <li>
     <a href="deck.html?deck=my-talk">My Talk Title</a>
     <span class="date">— March 2026</span>
   </li>
   ```
4. Push to GitHub

## Slide syntax

```markdown
# Slide One Title

Content here

---

## Slide Two

- Bullet points
- Work as normal

Note: Speaker notes go after "Note:" — press S to view them

---

## Vertical Slides

Use -- to nest slides vertically

--

### Nested Slide

This is below the previous slide

---

## Fragments

- Appears first <!-- .element: class="fragment" -->
- Appears second <!-- .element: class="fragment" -->
```

## Changing the theme

Edit `deck.html` and change the theme CSS link. Available themes: `white`, `black`, `league`, `beige`, `sky`, `night`, `serif`, `simple`, `solarized`, `moon`, `dracula`.

## Presenting locally

Open `deck.html?deck=sample` in any browser. For the markdown loading to work locally, you'll need a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/deck.html?deck=sample`.

## Keyboard shortcuts

- **→ / ← / ↑ / ↓** — navigate slides
- **S** — speaker notes
- **O** — overview mode
- **F** — fullscreen
- **Esc** — exit overview/fullscreen
