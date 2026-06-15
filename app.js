/* =========================================================
   LEXMENTOR — logika aplikacji
   Struktura: kategorie -> podkategorie -> testy -> pytania
   Postęp zapisywany w localStorage przeglądarki.
   ========================================================= */

const LETTERS = ["A", "B", "C", "D", "E", "F"];

document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

const Store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem("lexm_" + k)) ?? d; } catch { return d; } },
  set(k, v) { localStorage.setItem("lexm_" + k, JSON.stringify(v)); }
};

function countTests(cat) {
  return cat.podkategorie.reduce((a, p) => a + p.testy.length, 0);
}
function getParam(name) { return new URLSearchParams(location.search).get(name); }

/* =========================================================
   STRONA GŁÓWNA
   ========================================================= */
function renderHome() {
  const grid = document.getElementById("cat-grid");
  if (grid) {
    LEX_DATA.kategorie.forEach((cat, i) => {
      const a = document.createElement("a");
      a.className = "cat-card rise d" + ((i % 4) + 1);
      a.href = "test.html?cat=" + i;
      a.innerHTML =
        '<span class="ic">' + (cat.ikona || "📚") + '</span>' +
        '<h3>' + cat.nazwa + '</h3>' +
        '<p>' + (cat.opis || "") + '</p>' +
        '<div class="meta"><span class="chip">' + countTests(cat) + ' ' + plural(countTests(cat), "test", "testy", "testów") + '</span>' +
        '<span class="go">Otwórz →</span></div>';
      grid.appendChild(a);
    });
  }

  const results = Store.get("results", []);
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set("stat-tests", results.length);
  set("stat-best", results.length ? Math.max(...results) + "%" : "—");
  set("stat-avg", results.length ? Math.round(results.reduce((a, b) => a + b, 0) / results.length) + "%" : "—");
  set("stat-cats", LEX_DATA.kategorie.length);
}

function plural(n, one, few, many) {
  if (n === 1) return one;
  const t = n % 10, h = n % 100;
  if (t >= 2 && t <= 4 && (h < 10 || h >= 20)) return few;
  return many;
}

/* =========================================================
   STRONA KATEGORII (przeglądanie + quiz)
   ========================================================= */
let CAT = null, activeTest = null;

function initCategory() {
  const idx = +(getParam("cat") || 0);
  CAT = LEX_DATA.kategorie[idx];
  if (!CAT) { document.getElementById("cat-title").textContent = "Nie znaleziono kategorii"; return; }

  document.getElementById("cat-title").textContent = CAT.nazwa;
  document.getElementById("cat-sub").textContent = CAT.opis || "";
  document.getElementById("crumbs").innerHTML =
    '<a href="index.html">Start</a><span>›</span><a href="index.html#kategorie">Kategorie</a><span>›</span>' + CAT.nazwa;

  renderBrowse(idx);
}

function renderBrowse(catIdx) {
  const box = document.getElementById("browse-view");
  box.innerHTML = "";
  CAT.podkategorie.forEach((sub, si) => {
    const wrap = document.createElement("div");
    wrap.className = "subcat rise d1";
    let html = "<h3>" + sub.nazwa + "</h3><div class='test-list'>";
    sub.testy.forEach((t, ti) => {
      html +=
        "<button class='test-row' onclick='startTest(" + si + "," + ti + ")'>" +
          "<div class='t-info'><h4>" + t.nazwa + "</h4>" +
          "<span>" + t.pytania.length + " " + plural(t.pytania.length, "pytanie", "pytania", "pytań") + "</span></div>" +
          "<span class='t-arrow'>→</span>" +
        "</button>";
    });
    html += "</div>";
    wrap.innerHTML = html;
    box.appendChild(wrap);
  });
}

/* =========================================================
   QUIZ
   ========================================================= */
let qIndex = 0, score = 0, answeredCount = 0, answered = false;
let activeQuestions = [];

// Tasowanie (Fisher–Yates)
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Buduje potasowaną listę pytań; tasuje też kolejność odpowiedzi
// i przelicza indeks poprawnej odpowiedzi.
function buildActiveQuestions(test) {
  const pytania = shuffle(test.pytania).map((q) => {
    if (!Array.isArray(q.odpowiedzi) || typeof q.poprawna !== "number") return Object.assign({}, q);
    const order = shuffle(q.odpowiedzi.map((_, i) => i));
    return Object.assign({}, q, {
      odpowiedzi: order.map((i) => q.odpowiedzi[i]),
      poprawna: order.indexOf(q.poprawna)
    });
  });
  return pytania;
}

function startTest(si, ti) {
  activeTest = CAT.podkategorie[si].testy[ti];
  document.getElementById("browse-view").classList.add("hidden");
  document.getElementById("result-view").classList.add("hidden");
  document.getElementById("quiz-view").classList.remove("hidden");
  restartTest();
}

function restartTest() {
  qIndex = 0; score = 0; answeredCount = 0; answered = false;
  activeQuestions = buildActiveQuestions(activeTest); // nowa losowa kolejność za każdym razem
  document.getElementById("result-view").classList.add("hidden");
  document.getElementById("quiz-view").classList.remove("hidden");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const q = activeQuestions[qIndex];
  answered = false;

  document.getElementById("q-progress").textContent =
    "Pytanie " + (qIndex + 1) + " / " + activeQuestions.length;
  document.getElementById("q-score").textContent = "Poprawne: " + score;
  document.getElementById("q-text").textContent = q.pytanie;
  document.getElementById("quiz-progress").style.width =
    Math.round((qIndex / activeQuestions.length) * 100) + "%";

  const fb = document.getElementById("feedback");
  fb.textContent = "";
  const ex = document.getElementById("q-explain");
  ex.classList.add("hidden"); ex.innerHTML = "";
  document.getElementById("next-btn").classList.add("hidden");

  // budowa odpowiedzi (jednokrotny wybór / prawda-fałsz)
  const box = document.getElementById("q-options");
  box.innerHTML = "";
  q.odpowiedzi.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = '<span class="letter">' + LETTERS[i] + '</span><span>' + ans + '</span>';
    btn.onclick = () => answer(i, btn);
    box.appendChild(btn);
  });

  // pytanie kazusowe (otwarte) — pole na odpowiedź + wzorcowa odpowiedź
  const open = document.getElementById("open-area");
  if (q.otwarte) {
    document.getElementById("open-polecenie").textContent =
      q.polecenie || "Uzasadnij swoją odpowiedź, wskazując podstawę prawną.";
    document.getElementById("open-input").value = "";
    const model = document.getElementById("open-model");
    model.classList.add("hidden"); model.innerHTML = "";
    document.getElementById("reveal-btn").classList.remove("hidden");
    open.classList.remove("hidden");
  } else {
    open.classList.add("hidden");
  }
}

function answer(choice, btn) {
  if (answered) return;
  answered = true;
  answeredCount++;
  const q = activeQuestions[qIndex];
  const buttons = document.querySelectorAll("#q-options .option");

  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.poprawna) b.classList.add("correct");
  });

  const fb = document.getElementById("feedback");
  if (choice === q.poprawna) {
    score++;
    fb.textContent = "✓ Poprawnie";
    fb.style.color = "var(--green)";
  } else {
    btn.classList.add("wrong");
    fb.textContent = "✕ Niepoprawnie";
    fb.style.color = "var(--red)";
  }
  document.getElementById("q-score").textContent = "Poprawne: " + score;

  // przy pytaniach zamkniętych wyjaśnienie pokazujemy od razu;
  // przy kazusach pełna odpowiedź jest pod przyciskiem "Pokaż wzorcową odpowiedź".
  if (q.wyjasnienie && !q.otwarte) {
    const ex = document.getElementById("q-explain");
    ex.innerHTML = "<b>Wyjaśnienie:</b> " + q.wyjasnienie;
    ex.classList.remove("hidden");
  }

  const nb = document.getElementById("next-btn");
  nb.classList.remove("hidden");
  nb.textContent = (qIndex + 1 < activeQuestions.length) ? "Dalej →" : "Zobacz wynik →";
}

function revealModel() {
  const q = activeQuestions[qIndex];
  const model = document.getElementById("open-model");
  const correct = (typeof q.poprawna === "number") ? (LETTERS[q.poprawna] + ") " + q.odpowiedzi[q.poprawna]) : "";
  model.innerHTML =
    (correct ? "<b>Prawidłowa odpowiedź:</b> " + correct + "<br><br>" : "") +
    (q.wyjasnienie ? "<b>Wzorzec:</b> " + q.wyjasnienie : "");
  model.classList.remove("hidden");
  document.getElementById("reveal-btn").classList.add("hidden");
}

function nextQuestion() {
  qIndex++;
  if (qIndex < activeQuestions.length) renderQuestion();
  else showResult();
}

function finishEarly() {
  if (answeredCount === 0) { backToBrowse(); return; }
  showResult();
}

function showResult() {
  const total = (qIndex + 1 >= activeQuestions.length && answered)
    ? activeQuestions.length
    : Math.max(answeredCount, 1);
  const pct = Math.round((score / total) * 100);
  const results = Store.get("results", []);
  results.push(pct);
  Store.set("results", results);

  document.getElementById("quiz-view").classList.add("hidden");
  const view = document.getElementById("result-view");
  view.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });

  document.getElementById("result-score").textContent = pct + "%";
  const color = pct >= 80 ? "var(--green)" : pct >= 50 ? "var(--gold)" : "var(--red)";
  const ring = document.getElementById("result-ring");
  ring.style.background = "conic-gradient(" + color + " " + (pct * 3.6) + "deg, rgba(255,255,255,0.08) 0deg)";

  document.getElementById("result-title").textContent =
    pct >= 80 ? "Znakomicie!" : pct >= 50 ? "Niezły wynik" : "Jeszcze popracuj";
  document.getElementById("result-text").textContent =
    "Poprawne odpowiedzi: " + score + " z " + total + " (odpowiedzi udzielone).";
}

function backToBrowse() {
  document.getElementById("result-view").classList.add("hidden");
  document.getElementById("quiz-view").classList.add("hidden");
  document.getElementById("browse-view").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   FISZKI — powtórki rozłożone w czasie (SRS)
   ---------------------------------------------------------
   Stan karty: { ef, reps, interval(dni), due(timestamp) }
   Oceny: again / hard / good / easy. Postęp w localStorage.
   ========================================================= */
const DAY = 86400000;
let fcDecks = [], fcDeck = null, fcQueue = [], fcCurrent = -1, fcRevealed = false;

function escapeHtml(s) {
  return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildFcDecks() {
  fcDecks = [];
  // Główna talia: Prawo zobowiązań (gotowe fiszki przód/tył)
  if (typeof ZOBOWIAZANIA_FISZKI !== "undefined") {
    fcDecks.push({ id: "zobowiazania", nazwa: "Prawo zobowiązań", karty: ZOBOWIAZANIA_FISZKI });
  }
  // Dodatkowe talie generowane z pytań testowych
  if (typeof LEX_DATA !== "undefined") {
    LEX_DATA.kategorie.forEach((cat, ci) => {
      const karty = [];
      cat.podkategorie.forEach(sub => sub.testy.forEach(t => t.pytania.forEach(q => {
        if (Array.isArray(q.odpowiedzi) && typeof q.poprawna === "number") {
          karty.push({
            przod: q.pytanie,
            tyl: "<p class='fc-h'>Prawidłowa odpowiedź:</p><p>" + escapeHtml(q.odpowiedzi[q.poprawna]) + "</p>" +
                 (q.wyjasnienie ? "<p>" + escapeHtml(q.wyjasnienie) + "</p>" : "")
          });
        }
      })));
      if (karty.length) fcDecks.push({ id: "cat" + ci, nazwa: cat.nazwa, karty });
    });
  }
}

function srsAll() { return Store.get("srs", {}); }
function srsDeck() { return srsAll()[fcDeck.id] || {}; }
function setCardState(idx, st) {
  const all = srsAll();
  (all[fcDeck.id] = all[fcDeck.id] || {})[idx] = st;
  Store.set("srs", all);
}

function initFlashcards() {
  buildFcDecks();
  const select = document.getElementById("deck-select");
  fcDecks.forEach((d, i) => {
    const o = document.createElement("option");
    o.value = i; o.textContent = d.nazwa + " (" + d.karty.length + ")";
    select.appendChild(o);
  });
  let start = 0;
  const want = getParam("deck");
  if (want) { const i = fcDecks.findIndex(d => d.id === want); if (i >= 0) start = i; }
  select.value = start;
  select.addEventListener("change", () => startDeck(+select.value));

  // skróty klawiaturowe: spacja = pokaż, 1-4 = oceny
  document.addEventListener("keydown", (e) => {
    if (document.getElementById("fc-card").classList.contains("hidden")) return;
    if (!fcRevealed && (e.code === "Space" || e.code === "Enter")) { e.preventDefault(); revealFc(); }
    else if (fcRevealed) {
      if (e.key === "1") rateFc("again");
      else if (e.key === "2") rateFc("hard");
      else if (e.key === "3") rateFc("good");
      else if (e.key === "4") rateFc("easy");
    }
  });

  startDeck(start);
}

function startDeck(i) {
  fcDeck = fcDecks[i];
  buildQueue();
  renderFc();
}

function buildQueue() {
  const now = Date.now();
  const s = srsDeck();
  const due = [];
  fcDeck.karty.forEach((_, idx) => {
    const st = s[idx];
    if (!st || (st.due || 0) <= now) due.push(idx);
  });
  fcQueue = shuffle(due);
}

function nextState(st, grade) {
  let ef = st.ef || 2.5, reps = st.reps || 0, interval = st.interval || 0;
  const now = Date.now();
  if (grade === "again") { ef = Math.max(1.3, ef - 0.2); return { ef, reps: 0, interval: 0, due: now }; }
  if (grade === "hard") { ef = Math.max(1.3, ef - 0.15); interval = interval < 1 ? 1 : Math.max(1, Math.round(interval * 1.2)); }
  else if (grade === "good") { interval = interval < 1 ? 1 : Math.round(interval * ef); reps++; }
  else if (grade === "easy") { ef = ef + 0.15; interval = interval < 1 ? 4 : Math.round(interval * ef * 1.3); reps++; }
  return { ef, reps, interval, due: now + interval * DAY };
}

function ivLabel(grade) {
  if (grade === "again") return "<1 dz";
  const st = srsDeck()[fcCurrent] || {};
  const n = nextState(st, grade).interval;
  return n + (n === 1 ? " dzień" : " dni");
}

function renderFc() {
  const card = document.getElementById("fc-card");
  const done = document.getElementById("fc-done");
  const actions = document.getElementById("fc-actions");

  document.getElementById("fc-count").textContent =
    "Do powtórki: " + fcQueue.length + " / " + fcDeck.karty.length;

  if (fcQueue.length === 0) {
    card.classList.add("hidden"); actions.classList.add("hidden");
    done.classList.remove("hidden");
    return;
  }
  done.classList.add("hidden");
  card.classList.remove("hidden"); actions.classList.remove("hidden");

  fcCurrent = fcQueue[0];
  fcRevealed = false;
  const c = fcDeck.karty[fcCurrent];
  document.getElementById("fc-front").innerHTML = "<p>" + escapeHtml(c.przod) + "</p>";
  document.getElementById("fc-back").innerHTML = c.tyl;
  document.getElementById("fc-back").classList.add("hidden");
  document.getElementById("fc-divider").classList.add("hidden");
  document.getElementById("fc-reveal").classList.remove("hidden");
  document.getElementById("fc-rate").classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function revealFc() {
  if (fcRevealed || fcQueue.length === 0) return;
  fcRevealed = true;
  document.getElementById("fc-back").classList.remove("hidden");
  document.getElementById("fc-divider").classList.remove("hidden");
  document.getElementById("fc-reveal").classList.add("hidden");
  document.getElementById("fc-rate").classList.remove("hidden");
  document.getElementById("iv-again").textContent = ivLabel("again");
  document.getElementById("iv-hard").textContent = ivLabel("hard");
  document.getElementById("iv-good").textContent = ivLabel("good");
  document.getElementById("iv-easy").textContent = ivLabel("easy");
}

function rateFc(grade) {
  if (!fcRevealed) return;
  const idx = fcCurrent;
  const prev = srsDeck()[idx] || { ef: 2.5, reps: 0, interval: 0 };
  setCardState(idx, nextState(prev, grade));
  fcQueue.shift();
  if (grade === "again") fcQueue.push(idx); // wraca do puli (koniec kolejki sesji)
  renderFc();
}

// Powtórka wszystkich kart, niezależnie od harmonogramu
function studyAll() {
  fcQueue = shuffle(fcDeck.karty.map((_, i) => i));
  renderFc();
}

// Wyzerowanie postępu bieżącej talii
function resetDeck() {
  const all = srsAll();
  delete all[fcDeck.id];
  Store.set("srs", all);
  buildQueue();
  renderFc();
}
