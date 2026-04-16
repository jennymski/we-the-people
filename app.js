// ===== We the People (and Winter) — Quiz App =====

const app = document.getElementById('app');

// ── Handcrafted hard distractors by question ID ──
const HARD_DISTRACTORS = {
  1:  ["the Bill of Rights", "the Declaration of Independence", "federal law"],
  2:  ["declares independence from Britain", "protects individual rights", "creates the military"],
  3:  ["America the Beautiful", "In God We Trust", "One Nation Under God"],
  4:  ["a new law passed by Congress", "a Supreme Court ruling", "a presidential executive order"],
  5:  ["the Preamble", "the Articles of Confederation", "the Amendments"],
  6:  ["the right to bear arms", "the right to a fair trial", "the right to vote"],
  7:  ["25", "33", "21"],
  8:  ["established the U.S. government", "ended the Civil War", "freed the slaves"],
  9:  ["equality and justice", "safety and prosperity", "peace and democracy"],
  10: ["You must attend a church every week.", "The government picks your religion.", "Only certain religions are allowed."],
  11: ["a socialist economy", "a communist economy", "a mixed economy"],
  12: ["The President decides what is fair.", "Only citizens must follow the law.", "The military enforces all rules."],
  13: ["the executive branch", "the judicial branch", "the military branch"],
  14: ["the Constitution", "the Bill of Rights", "the Supreme Court alone"],
  15: ["the Vice President", "the Speaker of the House", "the Chief Justice"],
  16: ["the President", "the Supreme Court", "the state governors"],
  17: ["the Senate and the Supreme Court", "the House and the Cabinet", "the Senate and the Cabinet"],
  18: ["50", "435", "75"],
  19: ["4", "2", "8"],
  20: ["Kyrsten Sinema", "John McCain", "Jeff Flake"],
  21: ["100", "500", "350"],
  22: ["4", "6", "3"],
  24: ["only people who voted for them", "only people in their district", "only citizens of the state"],
  25: ["because of the state\u2019s size", "because of the state\u2019s age", "because of the state\u2019s wealth"],
  26: ["6", "2", "8"],
  27: ["January", "October", "September"],
  28: ["Joe Biden", "Barack Obama", "JD Vance"],
  29: ["Mike Pence", "Kamala Harris", "Mike Johnson"],
  30: ["the Speaker of the House", "the Secretary of State", "the Chief Justice"],
  31: ["the Secretary of State", "the President pro tempore of the Senate", "the Chief Justice"],
  32: ["the Secretary of Defense", "the Chairman of the Joint Chiefs", "the Vice President"],
  33: ["the Vice President", "the Speaker of the House", "the Secretary of State"],
  34: ["Congress", "the Vice President", "the Supreme Court"],
  35: ["makes laws for the President", "runs the military", "votes on Supreme Court cases"],
  36: ["Surgeon General and Chief of Staff", "Secretary of Technology and Secretary of Science", "Ambassador to the UN and Press Secretary"],
  37: ["writes new laws", "enforces the laws", "advises the President"],
  38: ["the Court of Appeals", "the Federal District Court", "the Constitutional Court"],
  39: ["12", "7", "11"],
  40: ["Clarence Thomas", "Sonia Sotomayor", "Samuel Alito"],
  41: ["to issue driver\u2019s licenses", "to provide police departments", "to create local governments"],
  42: ["to print money", "to declare war", "to make treaties"],
  43: ["Doug Ducey", "Janet Napolitano", "Mark Kelly"],
  44: ["Tucson", "Flagstaff", "Scottsdale"],
  45: ["Republican and Libertarian", "Democratic and Independent", "Liberal and Conservative"],
  46: ["Democratic", "Independent", "Libertarian"],
  47: ["Kevin McCarthy", "Nancy Pelosi", "Hakeem Jeffries"],
  48: ["Only men can vote.", "You must own property to vote.", "Only people over 21 can vote."],
  49: ["pay taxes", "obey the law", "speak English"],
  50: ["freedom of speech", "freedom of religion", "the right to bear arms"],
  51: ["the right to free healthcare and the right to a guaranteed job", "the right to vote and the right to run for office", "the right to free education and the right to housing"],
  52: ["the President and the military", "the Constitution and the government", "the bald eagle and the anthem"],
  53: ["obey all American laws", "learn English immediately", "serve in the military"],
  54: ["21 and older", "16 and older", "25 and older"],
  55: ["pay taxes and serve on a jury", "own a gun and go to church", "join the military and learn English"],
  56: ["July 4", "March 15", "January 1"],
  57: ["between 16 and 21", "at age 21", "between 21 and 30"],
  58: ["to find gold", "to escape war in Europe", "to establish trade routes"],
  59: ["the British", "the Spanish", "the French"],
  60: ["Europeans", "Asians", "Native Americans"],
  61: ["because of religious differences", "because of land disputes", "because the British banned slavery"],
  62: ["Benjamin Franklin", "John Adams", "George Washington"],
  63: ["July 4, 1789", "July 4, 1774", "August 2, 1776"],
  64: ["California, Texas, and Florida", "Ohio, Illinois, and Michigan", "Oregon, Washington, and Nevada"],

  65: ["The Declaration of Independence was signed.", "The Bill of Rights was written.", "The Articles of Confederation were adopted."],
  66: ["1776", "1791", "1783"],
  67: ["Thomas Jefferson", "John Adams", "Benjamin Franklin"],
  68: ["He was the first President.", "He wrote the Declaration of Independence.", "He was a Supreme Court Justice."],
  69: ["Thomas Jefferson", "Abraham Lincoln", "Benjamin Franklin"],
  70: ["John Adams", "Thomas Jefferson", "Benjamin Franklin"],
  71: ["the Oregon Territory", "the Alaska Territory", "the Texas Territory"],
  72: ["the Revolutionary War", "the French and Indian War", "the Barbary Wars"],
  73: ["the Revolutionary War", "the War of 1812", "the Spanish-American War"],
  74: ["taxes", "religion", "foreign policy"],
  75: ["He wrote the Constitution.", "He was the first President.", "He purchased the Louisiana Territory."],
  76: ["It ended the Civil War.", "It freed all slaves everywhere.", "It gave former slaves the right to vote."],
  77: ["She was the first female President.", "She wrote the Bill of Rights.", "She was the first woman in Congress."],
  78: ["the Revolutionary War", "the War of 1812", "the French and Indian War"],
  79: ["Franklin Roosevelt", "Theodore Roosevelt", "Warren Harding"],
  80: ["Harry Truman", "Woodrow Wilson", "Herbert Hoover"],
  81: ["England, France, and Russia", "China, Korea, and Vietnam", "Germany, Russia, and Spain"],
  82: ["the Korean War", "the Vietnam War", "the Revolutionary War"],
  83: ["terrorism", "nuclear war with China", "economic collapse"],
  84: ["the women\u2019s suffrage movement", "the labor movement", "the abolitionist movement"],
  85: ["He was the first Black President.", "He ended the Vietnam War.", "He wrote the Civil Rights Act."],
  86: ["There was a massive earthquake.", "A hurricane destroyed New Orleans.", "The stock market crashed."],
  87: ["Aztec", "Maya", "Inca"],
  88: ["the Colorado River", "the Ohio River", "the Rio Grande"],
  89: ["the Atlantic Ocean", "the Indian Ocean", "the Arctic Ocean"],
  90: ["the Pacific Ocean", "the Indian Ocean", "the Arctic Ocean"],
  91: ["Hawaii", "Washington, D.C.", "the Philippines"],
  92: ["Texas", "Florida", "Oregon"],
  93: ["Nevada", "Utah", "Colorado"],
  94: ["New York City", "Philadelphia", "Boston"],
  95: ["Washington, D.C.", "Boston Harbor", "Philadelphia"],
  96: ["because there are 13 amendments", "because there were 13 Presidents", "because there are 13 states now"],
  97: ["because there are 50 counties", "because there were 50 signers of the Constitution", "because there are 50 amendments"],
  98: ["America the Beautiful", "God Bless America", "My Country, \u2019Tis of Thee"],
  99: ["July 14", "June 4", "August 4"],
  100: ["Easter and St. Patrick\u2019s Day", "Super Bowl Sunday and Valentine\u2019s Day", "Groundhog Day and Flag Day"]
};

// ── Funny answer pools by category ──
const FUNNY_ANSWERS = {
  person: [
    "Beyonce", "SpongeBob SquarePants", "my mom when she's mad",
    "Baby Yoda", "Taylor Swift", "Shrek", "a random guy named Dave",
    "Dora the Explorer", "the TikTok algorithm", "my dog"
  ],
  number: [
    "a bajillion", "42 (the meaning of life)", "over 9,000",
    "like a million probably", "eleventy-seven", "infinity and beyond",
    "zero, on a good day", "approximately vibes", "sixty-twelve",
    "however many stars are in the sky"
  ],
  date: [
    "last Tuesday", "when pigs fly", "taco Tuesday",
    "the day WiFi was invented", "next Thursday probably",
    "sometime in the dinosaur era", "my birthday", "never o'clock",
    "the 32nd of Octember", "when my homework is done"
  ],
  place: [
    "the Bat Cave", "Narnia", "my grandma's house",
    "Hogwarts", "the moon", "Wakanda", "a Taco Bell parking lot",
    "Area 51", "the upside-down", "Bikini Bottom"
  ],
  "document-law": [
    "the Terms and Conditions nobody reads", "a really long group text",
    "my diary (no peeking)", "a fortune cookie", "the school dress code",
    "a TikTok comment section", "a sticky note on the fridge",
    "the WiFi password agreement", "a napkin from Denny's"
  ],
  "group-body": [
    "the Avengers", "a group chat with too many people",
    "the Teenage Mutant Ninja Turtles", "the Scooby-Doo gang",
    "a book club that never reads", "the Minions",
    "a squad of confused pigeons", "the lunch table crew",
    "the Kardashians", "three raccoons in a trenchcoat"
  ],
  concept: [
    "a really big pizza party", "vibes", "the WiFi password",
    "main character energy", "no homework forever",
    "unlimited screen time", "free tacos for everyone",
    "nap time for adults", "good hair days", "the power of friendship"
  ],
  "event-war": [
    "the Great Pillow Fight of 2019", "the Battle of Who Gets the TV Remote",
    "the War on Homework", "the Great TikTok Debate",
    "the Cereal Wars of breakfast", "the Battle of the Last Slice",
    "the WiFi Password Conflict", "the Sibling Rivalry of all time"
  ],
  "action-description": [
    "invented the weekend", "discovered that pizza is the best food",
    "taught a bear to ride a bicycle", "won a hot dog eating contest",
    "started a viral TikTok dance", "napped professionally",
    "convinced everyone to take a snow day", "petted every dog in town",
    "made the world's longest sandwich", "figured out how to pause online games"
  ]
};

// ── Encouraging feedback messages ──
const CORRECT_MESSAGES = [
  "Nice work! That's right!",
  "You got it! Way to go!",
  "Correct! You're on fire!",
  "Nailed it!",
  "Exactly right! Keep it up!",
  "Boom! That's the one!",
  "Yes! You really know your stuff!"
];

const WRONG_MESSAGES = [
  "Not quite!",
  "Oops, close one!",
  "Not this time!",
  "Almost!",
  "Good try!"
];

// ── Utility ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ── Check if a string matches any fullAnswer (case-insensitive, flexible) ──
function isAcceptableAnswer(text, fullAnswers) {
  const norm = s => s.toLowerCase().replace(/[().,]/g, '').replace(/\s+/g, ' ').trim();
  const chosen = norm(text);
  if (!chosen) return false;
  return fullAnswers.some(fa => {
    const acceptable = norm(fa);
    if (!acceptable) return false;
    return chosen === acceptable || chosen.includes(acceptable) || acceptable.includes(chosen);
  });
}

// ── Build deduplicated answer pools by category (fallback) ──
function buildAnswerPools(questions) {
  const byCat = {};
  const allAnswers = new Set();

  questions.forEach(q => {
    allAnswers.add(q.answer);
    if (!byCat[q.category]) byCat[q.category] = new Set();
    byCat[q.category].add(q.answer);
  });

  const pools = {};
  for (const cat in byCat) {
    pools[cat] = [...byCat[cat]];
  }
  pools._all = [...allAnswers];

  return pools;
}

// ── Build choices for a question ──
function buildChoices(question, pools) {
  const cat = question.category;
  const fullAnswers = question.fullAnswer || [question.answer];

  // Randomly pick which acceptable answer to display as the correct choice
  const displayedCorrect = pick(fullAnswers);

  // Filter: a distractor must NOT match any acceptable answer
  function isValidDistractor(text) {
    return text !== displayedCorrect && !isAcceptableAnswer(text, fullAnswers);
  }

  // Pick 2 plausible distractors — prefer handcrafted hard ones
  const plausible = [];
  let hardPool = HARD_DISTRACTORS[question.id];

  // For state-specific questions, generate distractors from other states
  if (typeof STATE_DATA !== 'undefined' && appData.userState) {
    const otherStates = shuffle(Object.keys(STATE_DATA).filter(s => s !== appData.userState));
    if (question.id === 20) {
      // Senator — pick senators from other states
      hardPool = otherStates.slice(0, 6).map(s => pick(STATE_DATA[s].senators));
    } else if (question.id === 43) {
      // Governor — pick governors from other states
      hardPool = otherStates.slice(0, 6).map(s => STATE_DATA[s].governor);
    } else if (question.id === 44) {
      // Capital — pick capitals from other states
      hardPool = otherStates.slice(0, 6).map(s => STATE_DATA[s].capital);
    }
  }

  if (hardPool) {
    const shuffledHard = shuffle(hardPool);
    for (const a of shuffledHard) {
      if (plausible.length >= 2) break;
      if (isValidDistractor(a) && !plausible.includes(a)) plausible.push(a);
    }
  }

  // Fall back to category pool if needed
  if (plausible.length < 2) {
    const catPool = (pools[cat] || []).filter(a => isValidDistractor(a) && !plausible.includes(a));
    const shuffledCat = shuffle(catPool);
    for (const a of shuffledCat) {
      if (plausible.length >= 2) break;
      plausible.push(a);
    }
  }

  // Last resort: full pool
  if (plausible.length < 2) {
    const allPool = pools._all.filter(a => isValidDistractor(a) && !plausible.includes(a));
    const shuffledAll = shuffle(allPool);
    for (const a of shuffledAll) {
      if (plausible.length >= 2) break;
      plausible.push(a);
    }
  }

  // Pick 1 funny answer
  const funnyPool = FUNNY_ANSWERS[cat] || FUNNY_ANSWERS.concept;
  let funny = pick(funnyPool);
  let tries = 0;
  while (isAcceptableAnswer(funny, fullAnswers) && tries < 10) {
    funny = pick(funnyPool);
    tries++;
  }

  const choices = shuffle([
    { text: displayedCorrect, type: 'correct' },
    { text: plausible[0], type: 'distractor' },
    { text: plausible[1], type: 'distractor' },
    { text: funny, type: 'funny' }
  ]);

  return choices;
}

// ── Persistence ──
const STORAGE_KEY = 'weThePeopleWinter';

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : {};
    // Ensure all fields exist (backward compat)
    return {
      userName: data.userName || '',
      userState: data.userState || 'Arizona',
      history: data.history || [],
      masteredIds: data.masteredIds || [],   // question IDs answered correctly at least once
      missedIds: data.missedIds || []        // question IDs answered wrong and not yet re-answered correctly
    };
  } catch (e) {
    return { userName: '', userState: 'Arizona', history: [], masteredIds: [], missedIds: [] };
  }
}

function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) { /* localStorage unavailable */ }
}

// Get question IDs asked in the last 4 sessions
function getRecentQuestionIds(data) {
  const recent = data.history.slice(-4);
  const ids = new Set();
  recent.forEach(session => {
    (session.questionIds || []).forEach(id => ids.add(id));
  });
  return ids;
}

// Check if all questions have been mastered
function allMastered(data) {
  const mastered = new Set(data.masteredIds);
  return QUESTIONS.every(q => mastered.has(q.id));
}

// ── Quiz State ──
let sessionQuestions = [];
let sessionChoices = [];
let currentIndex = 0;
let score = 0;
let answers = [];
let appData = loadData();

// ── Override state-specific questions based on user's state ──
function applyStateOverrides() {
  const st = STATE_DATA[appData.userState];
  if (!st) return;

  QUESTIONS.forEach(q => {
    if (q.id === 20) {
      // U.S. Senator
      q.answer = st.senators[0];
      q.fullAnswer = [...st.senators];
    } else if (q.id === 43) {
      // Governor
      q.answer = st.governor;
      q.fullAnswer = [st.governor];
    } else if (q.id === 44) {
      // State capital
      q.answer = st.capital;
      q.fullAnswer = [st.capital];
    }
  });
}

function startSession() {
  applyStateOverrides();
  const pools = buildAnswerPools(QUESTIONS);
  const recentIds = getRecentQuestionIds(appData);
  const missedSet = new Set(appData.missedIds);
  const masteredSet = new Set(appData.masteredIds);

  // Priority 1: questions previously answered wrong (need review)
  const missed = QUESTIONS.filter(q => missedSet.has(q.id));
  // Priority 2: questions never seen before
  const unseen = QUESTIONS.filter(q => !masteredSet.has(q.id) && !missedSet.has(q.id));
  // Priority 3: questions not asked in last 4 sessions (already mastered)
  const freshMastered = QUESTIONS.filter(q => masteredSet.has(q.id) && !missedSet.has(q.id) && !recentIds.has(q.id));
  // Priority 4: everything else
  const rest = QUESTIONS.filter(q => masteredSet.has(q.id) && !missedSet.has(q.id) && recentIds.has(q.id));

  // Build the 20-question pool in priority order
  const ordered = [
    ...shuffle(missed),
    ...shuffle(unseen),
    ...shuffle(freshMastered),
    ...shuffle(rest)
  ];
  sessionQuestions = ordered.slice(0, 20);

  sessionChoices = sessionQuestions.map(q => buildChoices(q, pools));
  currentIndex = 0;
  score = 0;
  answers = [];

  showWelcome();
}

// ── Render helper ──
function render(html) {
  app.innerHTML = html;
}

// ── Screen: Welcome ──
function showWelcome() {
  const stateOptions = Object.keys(STATE_DATA).map(s =>
    `<option value="${escapeHtml(s)}"${s === appData.userState ? ' selected' : ''}>${escapeHtml(s)}</option>`
  ).join('');

  render(`
    <div class="card welcome">
      <div class="welcome-icon" aria-hidden="true">&#x1F3DB;&#xFE0F;</div>
      <h1>We the People<br>(and Winter)</h1>
      <p>20 random questions to help you study for the GED civics test. You've got this!</p>
      <div class="name-input-row">
        <label for="name-input" class="name-label">First name:</label>
        <input type="text" id="name-input" class="name-input" placeholder="Enter your first name" value="${escapeHtml(appData.userName)}" autocomplete="off">
      </div>
      <div class="name-input-row">
        <label for="state-select" class="name-label">Your state:</label>
        <select id="state-select" class="name-input">${stateOptions}</select>
      </div>
      <button class="btn btn-primary" id="start-btn">Start Quiz</button>
      ${appData.history.length > 0 ? '<button class="btn btn-outline" id="history-btn" style="margin-top: 0.5rem;">View Past Results</button>' : ''}
    </div>
  `);

  document.getElementById('start-btn').addEventListener('click', () => {
    const name = document.getElementById('name-input').value.trim();
    if (!name) {
      document.getElementById('name-input').focus();
      document.getElementById('name-input').style.borderColor = '#ef4444';
      return;
    }
    appData.userName = name;
    appData.userState = document.getElementById('state-select').value;
    saveData(appData);
    applyStateOverrides();
    showQuestion();
  });

  const histBtn = document.getElementById('history-btn');
  if (histBtn) {
    histBtn.addEventListener('click', () => showHistory());
  }
}

// ── Screen: Question ──
function showQuestion() {
  const q = sessionQuestions[currentIndex];
  const choices = sessionChoices[currentIndex];
  const num = currentIndex + 1;
  const progress = (num / 20) * 100;
  const letters = ['A', 'B', 'C', 'D'];

  render(`
    <div class="card">
      <div class="quiz-header">
        <span class="quiz-progress">Question ${num} of 20</span>
        <span class="quiz-score">Score: ${score} / ${currentIndex}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${progress}%"></div>
      </div>
      <div class="question-text">${escapeHtml(q.question)}</div>
      <div class="choices" id="choices">
        ${choices.map((c, i) => `
          <button class="choice-btn" data-index="${i}" aria-label="Choice ${letters[i]}: ${escapeHtml(c.text)}">
            <span class="choice-letter">${letters[i]}</span>
            <span class="choice-text">${escapeHtml(c.text)}</span>
          </button>
        `).join('')}
      </div>
      <div id="feedback-area"></div>
    </div>
  `);

  document.querySelectorAll('#choices .choice-btn').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(btn, choices, q), { once: true });
  });
}

function handleAnswer(btn, choices, q) {
  const chosenIdx = parseInt(btn.dataset.index);
  const chosen = choices[chosenIdx];
  const correctIdx = choices.findIndex(c => c.type === 'correct');
  const fullAnswers = q.fullAnswer || [q.answer];

  // Check against ALL acceptable answers
  const isCorrect = chosen.type === 'correct' || isAcceptableAnswer(chosen.text, fullAnswers);

  if (isCorrect) score++;

  answers.push({
    question: q,
    chosen: chosen.text,
    correct: q.answer,
    wasRight: isCorrect
  });

  // Lock all buttons
  document.querySelectorAll('#choices .choice-btn').forEach(b => {
    b.classList.add('locked');
    const clone = b.cloneNode(true);
    clone.classList.add('locked');
    b.parentNode.replaceChild(clone, b);
  });

  // Highlight chosen and correct
  const allBtns = document.querySelectorAll('#choices .choice-btn');
  if (isCorrect) {
    allBtns[chosenIdx].classList.add('correct');
  } else {
    allBtns[chosenIdx].classList.add('wrong');
    allBtns[correctIdx].classList.add('correct');
  }

  // Build feedback + official Q&A
  const feedbackArea = document.getElementById('feedback-area');
  const isLast = currentIndex >= 19;

  let feedbackHtml;
  if (isCorrect) {
    feedbackHtml = `
      <div class="feedback feedback-correct">
        <span class="feedback-icon">&#x2705;</span>
        <span>${escapeHtml(pick(CORRECT_MESSAGES))}</span>
      </div>
    `;
  } else {
    feedbackHtml = `
      <div class="feedback feedback-wrong">
        <span class="feedback-icon">&#x274C;</span>
        <span>${escapeHtml(pick(WRONG_MESSAGES))} The answer is <strong>${escapeHtml(q.answer)}</strong>.</span>
      </div>
    `;
  }

  // Always show official Q&A with all acceptable answers
  feedbackHtml += `
    <div class="official-inline">
      <span class="official-badge">USCIS Official \u2014 Question ${q.id}</span>
      <span class="official-q">${escapeHtml(q.question)}</span>
      <ul class="official-a-list">
        ${fullAnswers.map(a => `<li>${escapeHtml(a)}</li>`).join('')}
      </ul>
    </div>
  `;

  feedbackHtml += `
    <div class="next-row">
      <button class="btn btn-primary" id="next-btn">${isLast ? 'See Results' : 'Next Question &rarr;'}</button>
    </div>
  `;

  feedbackArea.innerHTML = feedbackHtml;

  document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= 20) {
      showResults();
    } else {
      showQuestion();
    }
  });
}

// ── Screen: Results ──
function showResults() {
  const percent = Math.round((score / 20) * 100);
  const name = appData.userName || 'Winter';

  // Update mastered/missed tracking
  const masteredSet = new Set(appData.masteredIds);
  const missedSet = new Set(appData.missedIds);

  answers.forEach(a => {
    if (a.wasRight) {
      masteredSet.add(a.question.id);
      missedSet.delete(a.question.id); // they got it right — remove from missed
    } else {
      missedSet.add(a.question.id);
    }
  });

  appData.masteredIds = [...masteredSet];
  appData.missedIds = [...missedSet];

  // Save session to history
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  appData.history.push({
    userName: appData.userName,
    date: dateStr,
    score: score,
    total: 20,
    questionIds: sessionQuestions.map(q => q.id)
  });
  saveData(appData);

  // Check for full mastery!
  const justMasteredAll = allMastered(appData);

  let icon, message;
  if (justMasteredAll) {
    icon = '&#x1F3C6;';
    message = `${name}, you've mastered ALL ${QUESTIONS.length} questions! You're ready for the test!`;
  } else if (percent >= 90) {
    icon = '&#x1F929;';
    message = `Amazing, ${name}! You're a civics superstar!`;
  } else if (percent >= 70) {
    icon = '&#x1F389;';
    message = `Great job, ${name}! Keep it up!`;
  } else if (percent >= 50) {
    icon = '&#x1F4AA;';
    message = `Good effort, ${name}! A little more practice and you'll crush it!`;
  } else {
    icon = '&#x1F49C;';
    message = `Keep practicing, ${name}! You're learning more every time!`;
  }

  const missed = answers.filter(a => !a.wasRight).length;
  const totalMastered = masteredSet.size;
  const totalQuestions = QUESTIONS.length;

  let progressNote;
  if (justMasteredAll) {
    progressNote = `<p class="results-hint mastery-complete">You've correctly answered every single question at least once!</p>`;
  } else {
    progressNote = `<p class="results-hint">Mastered ${totalMastered} of ${totalQuestions} questions so far.${missed > 0 ? ` You missed ${missed} this round — they'll come back next time!` : ' Perfect round!'}</p>`;
  }

  render(`
    <div class="card results">
      ${justMasteredAll ? '<canvas id="confetti-canvas"></canvas>' : ''}
      <div class="results-icon" aria-hidden="true">${icon}</div>
      <h2>${justMasteredAll ? 'FULL MASTERY!' : 'Quiz Complete!'}</h2>
      <div class="results-score">${score} / 20</div>
      <div class="results-percent">${percent}%</div>
      <div class="results-message">${escapeHtml(message)}</div>
      ${progressNote}
      <div class="mastery-bar-container">
        <div class="mastery-bar">
          <div class="mastery-fill" style="width: ${Math.round((totalMastered / totalQuestions) * 100)}%"></div>
        </div>
        <div class="mastery-label">${totalMastered} / ${totalQuestions} mastered</div>
      </div>
      <button class="btn btn-primary" id="restart-btn">${justMasteredAll ? 'Keep Practicing' : 'Next Quiz'}</button>
      ${justMasteredAll ? '<button class="btn btn-outline" id="reset-btn" style="margin-top: 0.5rem;">Reset All Progress</button>' : ''}
      <button class="btn btn-outline" id="history-btn" style="margin-top: 0.5rem;">View Past Results</button>
    </div>
  `);

  if (justMasteredAll) {
    launchConfetti();
  }

  document.getElementById('restart-btn').addEventListener('click', () => startSession());
  document.getElementById('history-btn').addEventListener('click', () => showHistory());

  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm(`Reset all progress for ${name}? This clears mastery tracking, missed questions, and history. You\u2019ll start completely fresh.`)) {
        appData.history = [];
        appData.masteredIds = [];
        appData.missedIds = [];
        saveData(appData);
        startSession();
      }
    });
  }
}

// ── Confetti animation ──
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const card = canvas.parentElement;
  canvas.width = card.offsetWidth;
  canvas.height = card.offsetHeight;

  const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#22c55e', '#06b6d4', '#ef4444'];
  const particles = [];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 8 + 4,
      h: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 3 + 2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let frame = 0;
  const maxFrames = 180;

  function animate() {
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (frame > maxFrames * 0.6) {
      // Start fading out
      const fadeProgress = (frame - maxFrames * 0.6) / (maxFrames * 0.4);
      particles.forEach(p => p.opacity = Math.max(0, 1 - fadeProgress));
    }

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05; // gravity
      p.rotation += p.rotationSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (frame < maxFrames) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  requestAnimationFrame(animate);
}

// ── Screen: History ──
function showHistory() {
  const rows = [...appData.history].reverse();

  render(`
    <div class="card">
      <h2 class="history-title">Past Results</h2>
      ${rows.length === 0 ? '<p class="history-empty">No quizzes taken yet!</p>' : `
        <div class="history-list">
          ${rows.map((r, i) => {
            const pct = Math.round((r.score / r.total) * 100);
            return `
              <div class="history-row">
                <div class="history-name">${escapeHtml(r.userName)}</div>
                <div class="history-date">${escapeHtml(r.date)}</div>
                <div class="history-score-val">${r.score} / ${r.total} <span class="history-pct">(${pct}%)</span></div>
              </div>
            `;
          }).join('')}
        </div>
      `}
      <div class="next-row" style="margin-top: 1.25rem; gap: 0.5rem; flex-wrap: wrap;">
        <button class="btn btn-primary" id="back-btn">Start New Quiz</button>
        <button class="btn btn-outline" id="clear-btn">Clear History</button>
      </div>
    </div>
  `);

  document.getElementById('back-btn').addEventListener('click', () => startSession());
  document.getElementById('clear-btn').addEventListener('click', () => {
    if (confirm('Clear all past results?')) {
      appData.history = [];
      saveData(appData);
      showHistory();
    }
  });
}

// ── Boot ──
startSession();
