# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A static civics GED study app for a teen student (Winter, in Arizona). It quizzes with multiple-choice questions from the USCIS 100-question naturalization civics test. No build tools, no server, no npm — just open `index.html` in a browser.

## Running and Testing

- **Run the app:** Double-click `index.html` (works from `file://`, no server needed)
- **Run tests:** Double-click `test.html` — runs ~40 assertions against question bank integrity, choice builder logic, persistence, and priority selection

## Architecture

Four files, loaded in order via `<script>` tags:

1. **`questions.js`** — Declares global `const QUESTIONS = [...]` with 99 entries (Q23 omitted — district-specific). Each entry: `{ id, question, answer, fullAnswer[], category }`. The `answer` field is the single best answer for display; `fullAnswer` lists ALL USCIS-acceptable answers (any counts as correct). Categories: `person`, `number`, `date`, `place`, `document-law`, `group-body`, `concept`, `event-war`, `action-description`.

2. **`app.js`** — Quiz engine. Key globals and functions:
   - `HARD_DISTRACTORS` — Object keyed by question ID, each with 3 handcrafted plausible-but-wrong answers
   - `FUNNY_ANSWERS` — Object keyed by category, ~10 goofy joke answers each
   - `buildChoices(question, pools)` — Builds 4 shuffled choices: 1 correct (randomly picked from `fullAnswer`), 2 hard distractors (handcrafted first, category pool fallback), 1 funny
   - `isAcceptableAnswer(text, fullAnswers)` — Normalized string matching; any `fullAnswer` entry counts as correct
   - `startSession()` — Priority-based question selection: missed → unseen → fresh mastered → rest. Picks 20.
   - Persistence via `localStorage` key `weThePeopleWinter`: userName, history[], masteredIds[], missedIds[]
   - Screens: `showWelcome()` → `showQuestion()` → `handleAnswer()` → `showResults()` / `showHistory()`
   - `launchConfetti()` — Canvas particle animation when all 99 questions mastered

3. **`styles.css`** — CSS custom properties theming. Mobile-first (16px base → 18px desktop). Card-based layout.

4. **`index.html`** — Minimal shell: loads CSS, provides `<div id="app">`, loads scripts.

## Key Design Decisions

- **No fetch()** — `questions.js` is loaded via `<script>` tag to avoid `file://` CORS blocking
- **Multiple correct answers** — `fullAnswer[]` arrays can have 1–22 entries; `isAcceptableAnswer()` checks all of them; `buildChoices` rotates which one is displayed
- **Distractor filtering** — Distractors are validated against ALL `fullAnswer` entries so a valid alternative answer never appears as "wrong"
- **State-specific** — Arizona officials and geography are baked into `questions.js`. To change state, edit that file only.
- **Official Q&A shown after every answer** (correct or wrong) in a distinct amber/gold card with USCIS badge

## Updating Content

- **Officials change:** Edit entries in `questions.js` (answer + fullAnswer fields). No code changes needed.
- **Adding questions:** Add to `QUESTIONS` array in `questions.js`, add matching entry in `HARD_DISTRACTORS` in `app.js`, ensure the category has entries in `FUNNY_ANSWERS`.
- **Changing state:** Update Arizona-specific entries in `questions.js` (governor Q43, capital Q44, senator Q20).
