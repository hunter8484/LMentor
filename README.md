# LexMentor — portal do nauki prawa

Statyczna strona (HTML + CSS + JavaScript). Bez bazy, bez logowania.
Postęp zapisuje się lokalnie w przeglądarce (`localStorage`).

## Struktura treści

Wszystko jest w pliku **`data.js`**, w układzie:

```
Kategoria  →  Podkategoria  →  Test  →  Pytania
```

Przykładowo:
- **Prawo spadkowe** → Testy → „Podstawy prawa spadkowego"
- **Prawo gospodarcze UE** → Testy → „Prawo konkurencji (101–102 TFUE)", „Swobody rynku wewnętrznego"

## Pliki

| Plik | Rola |
|------|------|
| `index.html` | Strona główna z kategoriami i statystykami |
| `test.html`  | Przeglądanie testów w kategorii + rozwiązywanie quizu |
| `fiszki.html`| Tryb fiszek (generowany automatycznie z pytań testowych) |
| `style.css`  | Wygląd (nowoczesny motyw prawniczy) |
| `app.js`     | Logika |
| `data.js`    | **Treści — kategorie, testy i pytania** |
| `pytania-spadkowe.js` | Pytania z prawa spadkowego (wczytywane przez `data.js`) |

> Pytania zamknięte: po wybraniu odpowiedzi pojawia się wyjaśnienie.
> Pytania kazusowe (otwarte): dostępne jest pole do wpisania odpowiedzi, a przycisk
> „Pokaż wzorcową odpowiedź" odsłania prawidłowe rozwiązanie z podstawą prawną.

## Jak uruchomić

Kliknij dwukrotnie `index.html` — otworzy się w przeglądarce i wszystko działa od razu.

## Jak dodać własny test

W `data.js` dopisz test w wybranej podkategorii. `poprawna` to numer poprawnej
odpowiedzi liczony od 0 (a=0, b=1, c=2, d=3). Pole `wyjasnienie` jest opcjonalne
i pokazuje się po udzieleniu odpowiedzi.

```js
{
  nazwa: "Nazwa testu",
  pytania: [
    {
      pytanie: "Treść pytania?",
      odpowiedzi: ["odpowiedź A", "odpowiedź B", "odpowiedź C"],
      poprawna: 1,
      wyjasnienie: "Dlaczego B jest poprawne."
    }
  ]
}
```

Aby dodać nową kategorię, skopiuj cały blok kategorii w `data.js` i zmień nazwę,
ikonę, opis oraz testy.

---

## Publikacja (GitHub + Azure + nazwa.pl)

### 1. GitHub
```bash
cd lexmentor
git init
git add .
git commit -m "LexMentor — pierwsza wersja"
git remote add origin https://github.com/TWOJ_LOGIN/lexmentor.git
git branch -M main
git push -u origin main
```

### 2. Azure Static Web Apps (darmowy plan)
1. portal.azure.com → **Create a resource** → **Static Web App** → **Create**.
2. Subskrypcja: Azure for Students. Plan type: **Free**.
3. Source: **GitHub** → wskaż repozytorium i branch `main`.
4. Build details: **App location** = `/`, **Api location** = puste, **Output location** = puste.
5. **Review + create** → **Create**.

Azure doda do repo workflow GitHub Actions — od teraz każdy `git push` automatycznie
aktualizuje stronę. Otrzymasz adres `https://...azurestaticapps.net`.

### 3. Domena z nazwa.pl
1. Static Web App → **Custom domains** → **Add** → wpisz domenę (np. `lexmentor.twojadomena.pl`).
2. Azure poda rekord do dodania.
3. Panel **nazwa.pl** → DNS domeny → dodaj wskazany rekord:
   - subdomena → **CNAME** na adres `...azurestaticapps.net`,
   - domena główna → **TXT** do weryfikacji (zgodnie z instrukcją Azure).
4. W Azure kliknij **Validate**. Po propagacji DNS domena działa z darmowym HTTPS.
