# About

A lightweight slide system built on [Reveal.js](https://revealjs.com/), hosted on GitHub Pages. Decks are written in Markdown, with swappable colour themes and layouts.

[View the code on GitHub](https://github.com/brynmrgn/slides)

## How it works

Each deck is a Markdown file in `decks/`. An HTML wrapper loads the Markdown and combines it with a colour theme and a layout. The same deck can be presented in different themes by changing the wrapper.

```
slides/
├── index.html              ← deck listing (loads index.md)
├── green.html              ← wrapper: green theme
├── purple.html             ← wrapper: purple theme
├── deck.html               ← wrapper: plain theme
├── decks/
│   ├── publication_tool.md ← deck content
│   └── sample.md
├── themes/
│   ├── base.css            ← shared typography, resets, components
│   ├── variants.js         ← applies theme backgrounds to slides
│   ├── fonts/              ← self-hosted Open Sans and Inter
│   ├── colors/
│   │   ├── green.css       ← House of Commons palette
│   │   ├── purple.css      ← UK Parliament palette
│   │   └── plain.css       ← minimal black and white
│   └── layouts/
│       ├── standard.css    ← default layout
│       └── agenda.css      ← sidebar navigation
└── images/
```

- Sample of a layout with [Agenda Sidebar](agenda-sample.html) — deck with persistent agenda tabs.
- [Sample Deck](sample.html) — a starter deck showing what's possible


## Themes

| | Options |
|---|---|
| **Colours** | green · purple · plain |
| **Layouts** | standard · agenda |

Mix any colour with any layout — they're independent.

## Slide variants

Three semantic variants work across all colour themes. The same Markdown produces different colours depending on which theme is loaded.

| Variant | Green | Purple | Plain |
|---|---|---|---|
| light (default) | warm grey / green | warm grey / purple | white / black |
| dark | HoC green / white | dark purple / white | black / white |
| feature | peach / green | mint / purple | soft yellow / black |

## Components

Reusable CSS classes that adapt to the active theme:

- **`class="overlay"`** — semi-transparent panel over background images
- **`class="flow"`** — horizontal process flow diagram with themed boxes
- **`class="fragment"`** — point-by-point reveal on click
- **`class="light-text"`** — white text for use over dark background images

## Sample deck

[View the sample deck](sample.html) to see the components and themes in action.

## Credits

Built on [Reveal.js](https://revealjs.com/) by [Hakim El Hattab](https://hakim.se/). Markdown rendering on index pages by [marked](https://marked.js.org/). Diagrams by [Mermaid](https://mermaid.js.org/). Fonts: [Open Sans](https://fonts.google.com/specimen/Open+Sans) and [Inter](https://fonts.google.com/specimen/Inter) (self-hosted).

[← Back to decks](index.html)
