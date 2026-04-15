# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Junior Art Academy — an interactive step-by-step drawing tutorial app for kids. Kids pick a character, watch an animated drawing tutorial, then paint it themselves with guided steps. Built as a static site (vanilla HTML/CSS/JS with ES modules), deployed on Vercel.

## Development

```bash
npm run dev        # serves on localhost with npx serve
```

No build step, no bundler, no framework. Open `index.html` directly or use the dev server.

## Architecture

**Four screens** managed by showing/hiding DOM elements in `js/app.js`:
1. **Menu** — category filter pills + character card grid
2. **Game (Tutorial)** — animated step-by-step drawing on canvas, with voice narration
3. **Completion** — confetti celebration, options to paint or restart
4. **Paint** — guided paint mode (draw phase → color phase → free paint) with toolbar

**Module structure** (`js/` — all ES modules loaded via `<script type="module">`):
- `app.js` — screen management, event wiring, state machine for paint phases (`draw` → `color` → `free`)
- `renderer.js` — tutorial animation engine; draws steps progressively using `requestAnimationFrame` with eased `t` parameter (0→1)
- `painter.js` — freehand painting engine with pointer events (mouse+touch), undo stack, eraser, guide layer, download-as-PNG
- `speech.js` — Web Speech API wrapper, sound toggle persisted in localStorage
- `characters/index.js` — character registry and category filtering
- `characters/{animals,vehicles,fantasy}.js` — character definitions

**Character data model** — each character has:
```js
{ id, name, emoji, category, steps: [{ text, voice, draw(ctx, t) }], paintSteps?: [{ text, voice, color }] }
```
The `draw(ctx, t)` function renders directly to a Canvas 2D context where `t` animates 0→1. `paintSteps` (optional) define the color phase with suggested colors.

**Canvas setup**: 500x400 internal resolution, CSS-scaled to fill container. Paint mode uses two stacked canvases: `guideCanvas` (underneath, pointer-events: none) and `paintCanvas` (on top, interactive).

## Adding a New Character

1. Add the character object to the appropriate file in `js/characters/` (or create a new category file)
2. If new category file: import and spread into `allCharacters` in `js/characters/index.js`, add category to the `categories` array
3. Each step's `draw(ctx, t)` must use `t` for progressive animation (multiply radii, lengths by `t`)

## Deployment

Deployed on Vercel as a static site (`vercel.json` sets `outputDirectory: "."`). No build command needed.
