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

function startTest(si, ti) {
  activeTest = CAT.podkategorie[si].testy[ti];
  document.getElementById("browse-view").classList.add("hidden");
  document.getElementById("result-view").classList.add("hidden");
  document.getElementById("quiz-view").classList.remove("hidden");
  restartTest();
}

function restartTest() {
  qIndex = 0; score = 0; answeredCount = 0; answered = false;
  document.getElementById("result-view").classList.add("hidden");
  document.getElementById("quiz-view").classList.remove("hidden");
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const q = activeTest.pytania[qIndex];
  answered = false;

  document.getElementById("q-progress").textContent =
    "Pytanie " + (qIndex + 1) + " / " + activeTest.pytania.length;
  document.getElementById("q-score").textContent = "Poprawne: " + score;
  document.getElementById("q-text").textContent = q.pytanie;
  document.getElementById("quiz-progress").style.width =
    Math.round((qIndex / activeTest.pytania.length) * 100) + "%";

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
  const q = activeTest.pytania[qIndex];
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
  nb.textContent = (qIndex + 1 < activeTest.pytania.length) ? "Dalej →" : "Zobacz wynik →";
}

function revealModel() {
  const q = activeTest.pytania[qIndex];
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
  if (qIndex < activeTest.pytania.length) renderQuestion();
  else showResult();
}

function finishEarly() {
  if (answeredCount === 0) { backToBrowse(); return; }
  showResult();
}

function showResult() {
  const total = (qIndex + 1 >= activeTest.pytania.length && answered)
    ? activeTest.pytania.length
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
   FISZKI (generowane z pytań testowych)
   ========================================================= */
let decks = [], deckIdx = 0, cardIdx = 0, flipped = false;

function buildDecks() {
  decks = [];
  LEX_DATA.kategorie.forEach(cat => {
    const karty = [];
    cat.podkategorie.forEach(sub => sub.testy.forEach(t => {
      t.pytania.forEach(q => {
        karty.push({
          przod: q.pytanie,
          tyl: q.odpowiedzi[q.poprawna],
          src: q.wyjasnienie || ""
        });
      });
    }));
    if (karty.length) decks.push({ nazwa: cat.nazwa, karty });
  });
}

function initFlashcards() {
  buildDecks();
  const select = document.getElementById("deck-select");
  decks.forEach((d, i) => {
    const opt = document.createElement("option");
    opt.value = i; opt.textContent = d.nazwa + " (" + d.karty.length + ")";
    select.appendChild(opt);
  });
  select.addEventListener("change", () => { deckIdx = +select.value; cardIdx = 0; renderCard(); });
  renderCard();
}

function renderCard() {
  if (!decks.length) return;
  const deck = decks[deckIdx];
  const card = deck.karty[cardIdx];
  const el = document.getElementById("flashcard");
  el.classList.remove("flipped"); flipped = false;
  document.getElementById("card-front").textContent = card.przod;
  document.getElementById("card-back").textContent = "✓ " + card.tyl;
  document.getElementById("card-src").textContent = card.src;
  document.getElementById("card-counter").textContent = (cardIdx + 1) + " / " + deck.karty.length;
  document.getElementById("flash-progress").style.width =
    Math.round(((cardIdx + 1) / deck.karty.length) * 100) + "%";
}

function flipCard() {
  flipped = !flipped;
  document.getElementById("flashcard").classList.toggle("flipped", flipped);
}
function nextCard() { const d = decks[deckIdx]; cardIdx = (cardIdx + 1) % d.karty.length; renderCard(); }
function prevCard() { const d = decks[deckIdx]; cardIdx = (cardIdx - 1 + d.karty.length) % d.karty.length; renderCard(); }
