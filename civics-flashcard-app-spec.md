# We the People (and Winter) — Build Specification

A civics GED flashcard web app for Winter.

A specification for Claude Code to build a flashcard-style web app that helps Winter prepare for the civics portion of the GED test.

## 1. Overview

Build a single-page web app that quizzes the user with multiple-choice questions drawn from a bank of ~99 civics questions (the official USCIS 100-question naturalization civics test, with one district-specific question omitted). Each session shows 20 randomly selected questions in a randomized order, tracks the score in real time, and shows a results summary at the end. No accounts, no server, no persistent storage — opening the page (or clicking "Start over") begins a fresh session.

The data file is provided pre-built as `questions.js` (see Section 4), with state-specific answers tailored for Arizona and current officeholders baked in (President, VP, Speaker, Chief Justice as of April 2026).

The intended user is a teenage student studying for the GED. The look and feel should be friendly, colorful, and encouraging.

## 2. Goals and non-goals

**Goals**
- Make studying feel light and rewarding, not test-like.
- Work on a phone, tablet, or laptop in any modern browser.
- Be trivially easy to share — a single file or folder the user can open by double-clicking, or host as a static page.
- Reshuffle questions and answer choices on every session so repeated practice doesn't memorize position.

**Non-goals**
- No login, accounts, or cloud sync.
- No long-term progress tracking across sessions (intentional — fresh start each time).
- No spaced repetition or adaptive difficulty in v1.
- No backend or build step required.

## 3. Tech stack

- **Single static web app**: one `index.html`, plus separate `styles.css` and `app.js` if it helps readability. No build tools, no npm install required to run.
- **Vanilla HTML/CSS/JavaScript**. A small CSS framework via CDN is acceptable if it improves the visual quality (e.g., Tailwind via CDN), but no bundlers.
- **Question data** lives in `questions.js`, loaded via `<script src="questions.js"></script>` before `app.js`. This avoids the `file://` CORS issue that would block `fetch()`. The question bank can be edited without touching code.
- Must run by simply opening `index.html` in a browser — no local server required.

## 4. Question bank

The question bank is provided as `questions.js` and is already built — Claude Code does not need to re-parse the source document. The file declares a global `const QUESTIONS = [...]` array (loaded via `<script src="questions.js"></script>` before `app.js`). This avoids the `file://` CORS issue that would block `fetch("questions.json")` when Winter just double-clicks `index.html`.

**Data file shape:**

```js
const QUESTIONS = [
  { id: 1, question: "What is the supreme law of the land?", answer: "the Constitution" },
  { id: 2, question: "What does the Constitution do?", answer: "sets up the government" }
  // ... ~99 entries total
];
```

Notes on the bundled bank:
- Source: the official USCIS 100-question civics test (rev. 01/19).
- For questions where USCIS lists multiple acceptable answers, the bank uses the most canonical/common one as the single correct answer.
- State-specific answers are filled in for **Arizona** (Governor: Katie Hobbs; state capital: Phoenix; one U.S. Senator: Mark Kelly).
- Current officeholders as of April 2026 are baked in (President: Donald Trump; VP: JD Vance; Speaker: Mike Johnson; Chief Justice: John Roberts; Justices: 9; President's party: Republican).
- Question 23 ("Name your U.S. Representative") is omitted because it depends on Winter's specific congressional district.

## 5. Quiz behavior

**Session setup (on page load and on "Start over")**
- Shuffle the full bank of ~99 questions.
- Pick the first 20 for this session.
- For each of those 20, build a multiple-choice list with 4 options:
  - 1 correct answer (from the question itself).
  - 2 plausible distractors, drawn from same-category answers (see below).
  - 1 funny/silly answer, drawn from a per-category pool of humorous options (light, goofy humor — obviously wrong but entertaining for a teen).
  - The position of all 4 options (correct, distractors, funny) is randomized.

**Answer categories and distractor logic**

Each question's answer is tagged with a category so distractors are plausible (not obviously wrong types). Categories:

| Category | Examples |
|---|---|
| person | George Washington, Thomas Jefferson, Mark Kelly |
| number | twenty-seven (27), one hundred (100), nine (9) |
| date | July 4, 1776; November; 1787 |
| place | Phoenix, Washington D.C., New York Harbor |
| document-law | the Constitution, the Bill of Rights |
| group-body | Congress, the Senate and the House of Representatives |
| concept | checks and balances, freedom of speech, slavery |
| event-war | the Civil War, World War II |
| action-description | longer answers like "He freed the slaves..." |

Rules:
- The distractor pool is built from **unique** answer strings across the full bank (deduplicated — e.g., "the President" appears only once in the pool even though it's the answer to multiple questions).
- Plausible distractors are drawn from answers in the **same category** as the correct answer. If fewer than 2 same-category distractors are available, fall back to the full pool.
- The funny answer comes from a built-in pool of ~5–10 humorous options per category, randomly selected each time. Examples of the tone:
  - person: "Beyonce", "My mom when she's mad", "SpongeBob SquarePants"
  - place: "the Bat Cave", "Narnia", "my grandma's house"
  - concept: "No phones at the dinner table", "a really big pizza party"
- Funny answers should be clearly jokes so Winter is never confused about which answers are real.

**Per-question flow**
- Show the question text prominently at the top.
- Show the 4 answer choices as large, tappable buttons (A / B / C / D labels are fine but optional).
- When the user picks an answer:
  - Lock the choices (no changing the answer).
  - Highlight the chosen button green if correct, red if wrong.
  - If wrong, also highlight the correct answer in green so Winter learns the right answer.
  - Show a short, friendly message ("Nice work!" / "Not quite — the answer is…").
  - Show a "Next question" button.
- Show progress as "Question 7 of 20" and a progress bar.
- Keep a running score visible (e.g., "Score: 5 / 7 so far").

**End of session**
- Show a results screen with: final score (e.g., "17 / 20"), a percentage, and a friendly message that scales with the score (e.g., "Amazing!" at 90%+, "Great job!" at 70%+, "Keep practicing!" below).
- List any missed questions with the question, the answer Winter chose, and the correct answer, so she can review.
- Big "Start over" button that reshuffles and starts a brand-new 20-question session.

## 6. Look and feel

- Friendly and colorful, suitable for a teen. Think soft gradients, rounded corners, generous spacing, large readable type.
- Use a warm, encouraging color palette (suggested: indigo/purple primary, with green for correct and a soft red/coral for incorrect).
- Animations should be subtle — a small bounce or fade when answers are revealed; nothing distracting.
- Mobile-first responsive layout: the app should look great on a phone in portrait, and scale up cleanly to tablet and desktop. Buttons should be at least 48px tall for easy tapping.
- Accessible: high color contrast, font size 18px+ for body, clear focus styles for keyboard navigation, semantic HTML.

## 7. Screens

1. **Welcome screen** (very brief — this can also be the first question screen)
   - App title: **"We the People (and Winter)"**
   - One-line description: "20 random questions to help you study for the GED civics test."
   - "Start quiz" button.
2. **Quiz screen** — single question with 4 choices, progress, running score.
3. **Results screen** — final score, encouraging message, list of missed questions, "Start over" button.

## 8. Acceptance checklist

- [ ] Opens by double-clicking `index.html`, no server required.
- [ ] Loads all ~99 questions from the data file (`questions.js`).
- [ ] Each session presents 20 random questions in random order.
- [ ] Each question has 4 answer choices (1 correct, 2 plausible, 1 funny) in a random position.
- [ ] Plausible distractors are from the same answer category and never duplicate the correct answer.
- [ ] Each question includes one funny/silly answer that is obviously a joke.
- [ ] Distractor pool is deduplicated (identical answer strings appear only once).
- [ ] Wrong answers reveal the correct answer immediately.
- [ ] Score updates as Winter goes and shows total at the end.
- [ ] Missed questions are listed on the results screen.
- [ ] "Start over" produces a different set of 20 questions and different answer ordering.
- [ ] Layout works on a phone and a laptop.
- [ ] No data is saved between sessions.

## 9. Deliverables

When Claude Code finishes, the project folder should contain:

- `index.html` — the app entry point.
- `styles.css` — styling (or inlined in `index.html` if simpler).
- `app.js` — quiz logic.
- `questions.js` — the pre-built ~99-question data file (already provided alongside this spec).
- `README.md` — one short page explaining how to open the app and how to edit `questions.js` to change the questions later.

## 10. Notes for the developer

- The `questions.js` file is provided pre-built; do not regenerate from the source PDF.
- App title is confirmed as **"We the People (and Winter)"**.
- When officeholders change (next presidential election, new Speaker, etc.) or if Winter moves states, just edit the relevant entries in `questions.js` — no code changes needed.
