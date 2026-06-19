/* =========================================================
   LEXMENTOR — dane portalu
   ---------------------------------------------------------
   STRUKTURA:
   kategorie: [
     {
       nazwa, opis, ikona,
       podkategorie: [
         {
           nazwa,
           testy: [
             { nazwa, pytania: [
                 // pytanie zamknięte (jednokrotny wybór / prawda-fałsz):
                 { pytanie, odpowiedzi:[...], poprawna: indeks(0,1,2...), wyjasnienie }
                 // pytanie z luką (uzupełnianie):
                 { typ:"luka", pytanie:"... __________ ...", luki:["odp1","odp2"], wyjasnienie }
             ]}
           ]
         }
       ]
     }
   ]
   ---------------------------------------------------------
   "poprawna" liczona jest od 0 (a=0, b=1, c=2, d=3).
   "wyjasnienie" pokazuje się po udzieleniu odpowiedzi (opcjonalne).
   Pytanie z luką: typ "luka", a "luki" to lista akceptowanych odpowiedzi
   (porównanie bez uwzględniania wielkości liter i spacji).
   ========================================================= */

const LEX_DATA = {

  kategorie: [

    /* ===================== PRAWO FINANSOWE ===================== */
    {
      nazwa: "Prawo finansowe",
      ikona: "💰",
      opis: "Prawo podatkowe i finansów publicznych: zobowiązania podatkowe, odpowiedzialność, formy opodatkowania, budżet. Pytania jednokrotnego wyboru, prawda/fałsz oraz uzupełnianie luk.",
      podkategorie: [
        {
          nazwa: "Testy",
          testy: [

            /* ---- TEST 1: JEDNA ODPOWIEDŹ PRAWIDŁOWA ---- */
            {
              nazwa: "Jedna odpowiedź prawidłowa",
              pytania: [
                {
                  pytanie: "Decyzja ustalająca zobowiązanie podatkowe:",
                  odpowiedzi: ["ma charakter konstytutywny", "ma charakter deklaratoryjny", "ma charakter mieszany"],
                  poprawna: 0,
                  wyjasnienie: "Decyzja ustalająca tworzy (konstytuuje) zobowiązanie podatkowe — powstaje ono dopiero z chwilą jej doręczenia. Decyzja określająca jest deklaratoryjna."
                },
                {
                  pytanie: "Zaznacz prawidłowe zdanie:",
                  odpowiedzi: [
                    "istnienie obowiązku podatkowego jest warunkiem powstania zobowiązania podatkowego",
                    "istnienie zobowiązania podatkowego jest warunkiem powstania obowiązku podatkowego",
                    "obowiązek podatkowy i zobowiązanie podatkowe to byty od siebie niezależne"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Obowiązek podatkowy jest pierwotny — z niego dopiero może powstać (skonkretyzować się) zobowiązanie podatkowe."
                },
                {
                  pytanie: "Wynikająca z ustaw, nieskonkretyzowana powinność przymusowego świadczenia pieniężnego w związku z zaistnieniem określonego zdarzenia to:",
                  odpowiedzi: ["obowiązek podatkowy", "zobowiązanie podatkowe", "podstawa opodatkowania"],
                  poprawna: 0,
                  wyjasnienie: "To ustawowa definicja obowiązku podatkowego (art. 4 Ordynacji podatkowej) — jest nieskonkretyzowany, w odróżnieniu od zobowiązania."
                },
                {
                  pytanie: "Organem odwoławczym od decyzji naczelnika urzędu skarbowego jest:",
                  odpowiedzi: ["dyrektor izby administracji skarbowej", "dyrektor izby skarbowej", "Samorządowe Kolegium Odwoławcze"],
                  poprawna: 0,
                  wyjasnienie: "Po reformie KAS organem odwoławczym jest dyrektor izby administracji skarbowej (izby skarbowe już nie istnieją)."
                },
                {
                  pytanie: "Zobowiązanie podatkowe powstaje:",
                  odpowiedzi: [
                    "z chwilą doręczenia decyzji ustalającej zobowiązanie podatkowe",
                    "z chwilą wydania decyzji ustalającej zobowiązanie podatkowe",
                    "z chwilą doręczenia decyzji określającej zobowiązanie podatkowe"
                  ],
                  poprawna: 0,
                  wyjasnienie: "W przypadku decyzji konstytutywnej zobowiązanie powstaje z chwilą jej DORĘCZENIA (nie wydania)."
                },
                {
                  pytanie: "Zobowiązanie podatkowe w przypadku podatku od spadków i darowizn powstaje:",
                  odpowiedzi: [
                    "w dniu doręczenia decyzji ustalającej zobowiązanie podatkowe",
                    "w dniu otwarcia spadku",
                    "w dniu doręczenia decyzji określającej zobowiązanie podatkowe"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Podatek od spadków i darowizn powstaje z chwilą doręczenia decyzji ustalającej (decyzja konstytutywna)."
                },
                {
                  pytanie: "Dłużnikiem w stosunku zobowiązania podatkowego jest:",
                  odpowiedzi: ["podatnik", "wierzyciel podatkowy", "organ podatkowy"],
                  poprawna: 0,
                  wyjasnienie: "W stosunku zobowiązaniowym podatnik jest dłużnikiem, a Skarb Państwa / jednostka samorządu — wierzycielem podatkowym."
                },
                {
                  pytanie: "Wskaż podmiot, w którego kompetencjach NIE znajduje się obowiązek obliczenia podatku:",
                  odpowiedzi: ["inkasent", "organ podatkowy", "płatnik"],
                  poprawna: 0,
                  wyjasnienie: "Inkasent jedynie pobiera i wpłaca podatek. Obliczenia dokonuje płatnik (oraz organ w decyzji)."
                },
                {
                  pytanie: "Umorzenie zaległości podatkowej to:",
                  odpowiedzi: [
                    "nieefektywny sposób wygaśnięcia zobowiązania podatkowego",
                    "efektywny sposób wygaśnięcia zobowiązania podatkowego",
                    "nieefektywny sposób wygaśnięcia obowiązku podatkowego"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Przy umorzeniu wierzyciel podatkowy nie otrzymuje świadczenia — to nieefektywny sposób wygaśnięcia zobowiązania."
                },
                {
                  pytanie: "Która z form opodatkowania dochodu wyklucza możliwość rozliczenia kosztów uzyskania przychodu?",
                  odpowiedzi: [
                    "ryczałt od przychodów ewidencjonowanych",
                    "zasady ogólne (skala podatkowa)",
                    "podatek liniowy 19% od dochodu z działalności gospodarczej"
                  ],
                  poprawna: 0,
                  wyjasnienie: "W ryczałcie podstawą jest przychód — kosztów uzyskania przychodu się nie rozlicza."
                },
                {
                  pytanie: "Który z podatków posiada w swojej konstrukcji podstawę opodatkowania?",
                  odpowiedzi: ["ryczałt od przychodów ewidencjonowanych", "karta podatkowa", "ryczałt dla osób duchownych"],
                  poprawna: 0,
                  wyjasnienie: "W ryczałcie ewidencjonowanym podstawą jest przychód. Karta podatkowa i ryczałt dla osób duchownych mają kwoty ustalane bez klasycznej podstawy opodatkowania."
                },
                {
                  pytanie: "W ryczałcie od przychodów ewidencjonowanych podstawą opodatkowania jest:",
                  odpowiedzi: ["przychód", "dochód", "poniesiony koszt"],
                  poprawna: 0,
                  wyjasnienie: "Ryczałt liczony jest od przychodu, bez pomniejszania o koszty."
                },
                {
                  pytanie: "Forma opodatkowania, w której organ podatkowy ustala kwotę podatku w drodze decyzji ustalającej, to:",
                  odpowiedzi: ["karta podatkowa", "ryczałt od przychodów ewidencjonowanych", "zasady ogólne (skala podatkowa)"],
                  poprawna: 0,
                  wyjasnienie: "W karcie podatkowej wysokość podatku wynika z decyzji organu (decyzja ustalająca). Ryczałt i zasady ogólne — z mocy prawa."
                },
                {
                  pytanie: "Wysokość podatku płaconego w formie karty podatkowej wynika z:",
                  odpowiedzi: ["decyzji organu podatkowego", "postanowienia organu podatkowego", "samoobliczenia podatku przez podatnika"],
                  poprawna: 0,
                  wyjasnienie: "Stawkę karty podatkowej ustala naczelnik urzędu skarbowego w drodze decyzji."
                },
                {
                  pytanie: "Podatnik, którego dochody opodatkowane są kartą podatkową:",
                  odpowiedzi: [
                    "składa deklarację, w której wykazana jest wysokość zapłaconych składek na ubezpieczenie zdrowotne",
                    "ma obowiązek złożyć roczne zeznanie o osiągniętych dochodach",
                    "nie składa żadnej deklaracji ani zeznania"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Podatnik karty nie składa zeznania rocznego, ale składa deklarację (PIT-16A) o wysokości zapłaconej składki zdrowotnej."
                },
                {
                  pytanie: "Stawka podatku liniowego (proporcjonalnego) dla osób fizycznych prowadzących działalność gospodarczą wynosi:",
                  odpowiedzi: ["19% podstawy obliczenia podatku", "19% osiągniętego przychodu", "15% osiągniętego dochodu"],
                  poprawna: 0,
                  wyjasnienie: "Podstawą jest dochód, a stawka wynosi 19% podstawy obliczenia podatku."
                },
                {
                  pytanie: "Która z form opodatkowania NIE może być wykorzystana do opodatkowania dochodów uzyskanych przez osoby duchowne?",
                  odpowiedzi: [
                    "ryczałt od przychodów ewidencjonowanych",
                    "zasady ogólne (skala podatkowa)",
                    "zryczałtowany podatek dochodowy od przychodów osób duchownych"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Osoby duchowne mogą rozliczać się ryczałtem dla osób duchownych albo na zasadach ogólnych — nie ryczałtem ewidencjonowanym."
                },
                {
                  pytanie: "Osoba fizyczna, która została obdarowana, staje się podatnikiem:",
                  odpowiedzi: ["podatku od spadków i darowizn", "podatku dochodowego od osób fizycznych", "podatku od darowizn"],
                  poprawna: 0,
                  wyjasnienie: "Nabycie tytułem darowizny podlega podatkowi od spadków i darowizn (nie ma odrębnego „podatku od darowizn”)."
                },
                {
                  pytanie: "Podatek od spadków i darowizn:",
                  odpowiedzi: ["stanowi dochód jednostki samorządu terytorialnego", "stanowi dochód budżetu państwa", "jest dzielony po połowie między państwo a gminę"],
                  poprawna: 0,
                  wyjasnienie: "Wpływy z podatku od spadków i darowizn zasilają budżet gminy."
                },
                {
                  pytanie: "Podział podatników na grupy podatkowe występuje w:",
                  odpowiedzi: ["żadnym z wymienionych (jest w podatku od spadków i darowizn)", "podatku dochodowym od osób fizycznych", "ryczałcie od przychodów ewidencjonowanych"],
                  poprawna: 0,
                  wyjasnienie: "Grupy podatkowe (zależne od pokrewieństwa) charakterystyczne są dla podatku od spadków i darowizn."
                },
                {
                  pytanie: "Darowizny na cele kultu religijnego pomniejszają:",
                  odpowiedzi: ["dochód do opodatkowania", "kwotę podatku", "stawkę podatkową"],
                  poprawna: 0,
                  wyjasnienie: "To ulga odliczana od dochodu (w granicach ustawowego limitu)."
                },
                {
                  pytanie: "Podatnik (osoba fizyczna) rozliczający dochód ze stosunku pracy może uwzględnić koszty:",
                  odpowiedzi: [
                    "ryczałtowe, tj. w kwocie wskazanej w ustawie",
                    "poniesione w kwocie rzeczywistej",
                    "według własnego wyboru: rzeczywiste albo ryczałtowe"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Koszty uzyskania przychodu ze stosunku pracy są zryczałtowane — określone kwotowo w ustawie o PIT."
                },
                {
                  pytanie: "Nieodpłatność podatku oznacza, że:",
                  odpowiedzi: [
                    "podatnik za zapłacony podatek nie otrzymuje nic w zamian",
                    "zapłacony we właściwej wysokości podatek nie podlega zwrotowi",
                    "podatnik jest objęty zwolnieniem podatkowym"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Cechą podatku jest nieodpłatność — brak bezpośredniego, ekwiwalentnego świadczenia wzajemnego ze strony państwa."
                },
                {
                  pytanie: "Zobowiązania podatkowe ulegają przedawnieniu z upływem:",
                  odpowiedzi: ["pięciu lat", "trzech lat", "roku"],
                  poprawna: 0,
                  wyjasnienie: "Zasada ogólna: 5 lat, licząc od końca roku kalendarzowego, w którym upłynął termin płatności podatku (art. 70 Ordynacji podatkowej)."
                },
                {
                  pytanie: "Zobowiązanie podatkowe z tytułu PIT (zasady ogólne) za 2015 r. uległo przedawnieniu:",
                  odpowiedzi: ["1 stycznia 2022 r.", "1 stycznia 2023 r.", "1 stycznia 2020 r."],
                  poprawna: 0,
                  wyjasnienie: "Termin płatności przypadał na 30 kwietnia 2016 r. Bieg liczymy od końca 2016 r.; po 5 latach (koniec 2021 r.) przedawnienie następuje z dniem 1 stycznia 2022 r."
                },
                {
                  pytanie: "Które kryterium NIE decyduje o rezydencji podatkowej osoby fizycznej w Polsce?",
                  odpowiedzi: ["obywatelstwo polskie", "przebywanie na terytorium RP co najmniej 183 dni w roku", "centrum interesów życiowych"],
                  poprawna: 0,
                  wyjasnienie: "O rezydencji decyduje centrum interesów życiowych lub pobyt powyżej 183 dni — nie obywatelstwo."
                },
                {
                  pytanie: "Firmujący to:",
                  odpowiedzi: [
                    "podmiot, który w celu zatajenia prowadzenia działalności gospodarczej posługuje się imieniem i nazwiskiem, nazwą lub firmą innej osoby",
                    "osoba prowadząca działalność gospodarczą odpowiedzialna za swoje zobowiązania podatkowe",
                    "osoba, za zgodą której podatnik posługuje się jej imieniem i nazwiskiem"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Firmujący posługuje się cudzymi danymi dla zatajenia działalności. Osoba, która na to zezwala, to firmowany (odpowiada jako osoba trzecia)."
                },
                {
                  pytanie: "Czy konkubent może być osobą odpowiedzialną za zobowiązania podatkowe podatnika?",
                  odpowiedzi: [
                    "tak, ale tylko wtedy, gdy osiąga korzyść majątkową z działalności gospodarczej prowadzonej przez podatnika",
                    "nie — konkubent nie jest członkiem rodziny, więc nie odpowiada",
                    "tak, ale tylko wtedy, gdy istnieje między nim a podatnikiem wspólność majątkowa"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Osoba pozostająca w faktycznym pożyciu odpowiada jak członek rodziny — gdy stale współdziała w działalności i osiąga z niej korzyści majątkowe."
                },
                {
                  pytanie: "Które źródło przychodów NIE może być opodatkowane ryczałtem od przychodów ewidencjonowanych?",
                  odpowiedzi: ["stosunek pracy", "najem prywatny", "działalność gospodarcza"],
                  poprawna: 0,
                  wyjasnienie: "Przychody ze stosunku pracy rozliczane są na zasadach ogólnych (skala) — nie podlegają ryczałtowi."
                },
                {
                  pytanie: "Nadpłata jest zaliczana na poczet wymagalnych zobowiązań podatkowych:",
                  odpowiedzi: ["z urzędu", "na wniosek podatnika", "w trybie umowy"],
                  poprawna: 0,
                  wyjasnienie: "Organ zalicza nadpłatę na poczet zaległości i bieżących zobowiązań z urzędu."
                },
                {
                  pytanie: "Oprócz małżonków z preferencyjnego (łącznego) opodatkowania dochodów w PIT może skorzystać:",
                  odpowiedzi: ["osoba samotnie wychowująca dzieci", "cudzoziemiec z prawem stałego pobytu", "emeryci i renciści"],
                  poprawna: 0,
                  wyjasnienie: "Z preferencyjnego rozliczenia (obliczenie podatku w podwójnej wysokości od połowy dochodów) korzysta także osoba samotnie wychowująca dzieci."
                },
                {
                  pytanie: "Która przesłanka wyklucza wspólne opodatkowanie małżonków w PIT?",
                  odpowiedzi: ["ustanie wspólności majątkowej w wyniku separacji", "brak dochodów po stronie jednego z małżonków", "śmierć małżonka w trakcie roku podatkowego"],
                  poprawna: 0,
                  wyjasnienie: "Orzeczenie separacji (i ustanie wspólności) wyłącza wspólne rozliczenie. Brak dochodów jednego z małżonków oraz wdowieństwo nie wykluczają wspólnego opodatkowania."
                },
                {
                  pytanie: "Przy obliczaniu podstawy podatku dochodowego od osób fizycznych odliczeniu NIE podlegają:",
                  odpowiedzi: ["składki z tytułu ubezpieczenia zdrowotnego", "darowizny przekazane na cele kultu religijnego", "wydatki na korzystanie z Internetu (ulga internetowa)"],
                  poprawna: 0,
                  wyjasnienie: "Składki zdrowotnej nie odlicza się od podstawy (dochodu). Darowizny na kult i ulga internetowa są odliczane od dochodu."
                },
                {
                  pytanie: "Zgodnie z Konstytucją RP każdy jest obowiązany do ponoszenia ciężarów i świadczeń publicznych, w tym podatków, określonych w:",
                  odpowiedzi: ["ustawie", "Konstytucji", "przepisach prawa"],
                  poprawna: 0,
                  wyjasnienie: "Art. 84 i 217 Konstytucji — nakładanie podatków następuje w drodze ustawy."
                },
                {
                  pytanie: "Podstawę opodatkowania dla budynku w podatku od nieruchomości stanowi:",
                  odpowiedzi: ["powierzchnia użytkowa (w m²)", "wartość rynkowa budynku", "liczba kondygnacji"],
                  poprawna: 0,
                  wyjasnienie: "Dla budynków lub ich części podstawą jest powierzchnia użytkowa wyrażona w metrach kwadratowych."
                },
                {
                  pytanie: "Wyłącznie do budżetu państwa trafiają wpływy z podatku:",
                  odpowiedzi: ["akcyzowego", "od nieruchomości", "rolnego"],
                  poprawna: 0,
                  wyjasnienie: "Akcyza jest dochodem budżetu państwa. Podatek od nieruchomości i rolny zasilają budżety gmin."
                },
                {
                  pytanie: "Reguły sankcyjne (procedury ostrożnościowe) z ustawy o finansach publicznych stosuje się, gdy relacja państwowego długu publicznego do PKB przekroczy:",
                  odpowiedzi: ["55%", "45%", "70%"],
                  poprawna: 0,
                  wyjasnienie: "Pierwszy próg ostrożnościowy uruchamiający ograniczenia to 55% relacji długu do PKB. (Warto zweryfikować z materiałami kursu.)"
                }
              ]
            },

            /* ---- TEST 2: PRAWDA / FAŁSZ ---- */
            {
              nazwa: "Prawda / Fałsz",
              pytania: [
                {
                  pytanie: "Odpowiedzialność podatkowa osób trzecich ma charakter osobisty.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 0,
                  wyjasnienie: "Osoba trzecia odpowiada całym swoim majątkiem — jest to odpowiedzialność osobista (choć solidarna z podatnikiem i subsydiarna)."
                },
                {
                  pytanie: "Odpowiedzialność osób trzecich za zobowiązania podatkowe powstaje z mocy prawa.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — powstaje dopiero w drodze konstytutywnej decyzji organu podatkowego o odpowiedzialności konkretnej osoby trzeciej."
                },
                {
                  pytanie: "Odpowiedzialność podatkowa osób trzecich dotyczy zamkniętego katalogu podmiotów.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 0,
                  wyjasnienie: "Prawda — Ordynacja podatkowa wymienia zamknięty (enumeratywny) katalog osób trzecich."
                },
                {
                  pytanie: "W niektórych przypadkach odpowiedzialność osób trzecich może być ograniczona kwotowo lub przedmiotowo.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 0,
                  wyjasnienie: "Prawda — np. nabywca przedsiębiorstwa odpowiada do wartości nabytego majątku, a rozwiedziony małżonek do wysokości udziału w majątku wspólnym."
                },
                {
                  pytanie: "Rozwiedziony małżonek odpowiada za zaległości podatkowe z okresu małżeństwa całym swoim majątkiem, lecz tylko do wysokości przypadającego mu udziału w majątku wspólnym.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 0,
                  wyjasnienie: "Prawda — to ograniczenie kwotowe odpowiedzialności rozwiedzionego małżonka (art. 110 Ordynacji podatkowej)."
                },
                {
                  pytanie: "Nabywca przedsiębiorstwa odpowiada jako osoba trzecia za zaległości zbywcy z tytułu podatku od spadków i darowizn.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — odpowiedzialność nabywcy obejmuje zaległości związane z prowadzeniem przedsiębiorstwa; osobisty podatek od spadków i darowizn zbywcy nie jest nią objęty."
                },
                {
                  pytanie: "Zgodnie z Ordynacją podatkową wyłącznie podatnik odpowiada za zapłatę należności podatkowej.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — odpowiadać mogą także płatnik, inkasent oraz osoby trzecie."
                },
                {
                  pytanie: "Pożyczka jest przychodem w rozumieniu ustawy o podatku dochodowym od osób fizycznych.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — pożyczka jest zwrotna, nie stanowi definitywnego przysporzenia, więc nie jest przychodem."
                },
                {
                  pytanie: "Podatnik opodatkowany stałą 19% stawką (liniową) może skorzystać z kwoty wolnej od podatku.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — kwota wolna od podatku przysługuje przy rozliczeniu według skali podatkowej, nie przy podatku liniowym."
                },
                {
                  pytanie: "Powstanie obowiązku podatkowego oznacza, że podatnik zawsze będzie musiał zapłacić podatek.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — obowiązek podatkowy to dopiero stan abstrakcyjny; konkretne zobowiązanie (i zapłata) może nie powstać, np. z uwagi na ulgi czy brak podstawy opodatkowania."
                },
                {
                  pytanie: "Członek zarządu spółki z o.o. w żadnym wypadku nie odpowiada za zobowiązania podatkowe tej spółki.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — członek zarządu odpowiada subsydiarnie jako osoba trzecia (art. 116 Ordynacji podatkowej), jeśli egzekucja z majątku spółki jest bezskuteczna."
                },
                {
                  pytanie: "W Ordynacji podatkowej podatnik znajdzie regulacje dotyczące konstrukcji poszczególnych podatków (np. stawek PIT).",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — Ordynacja zawiera część ogólną prawa podatkowego; konstrukcje poszczególnych podatków regulują ustawy szczególne."
                },
                {
                  pytanie: "Podatnik PIT uzyskujący przychody ze stosunku pracy może zaliczyć do kosztów uzyskania przychodu każdy wydatek służący uzyskaniu przychodu.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — koszty ze stosunku pracy są ryczałtowe (kwotowo określone w ustawie), a nie ustalane indywidualnie."
                },
                {
                  pytanie: "Osoby duchowne nie płacą w Polsce podatku dochodowego.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — osoby duchowne płacą zryczałtowany podatek dochodowy od przychodów osób duchownych (albo rozliczają się na zasadach ogólnych)."
                },
                {
                  pytanie: "Podatnik prowadzący działalność opodatkowaną ryczałtem od przychodów ewidencjonowanych może kwotę podatku pomniejszyć o zapłacone składki na ubezpieczenie zdrowotne.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — ryczałtowiec nie odlicza składki zdrowotnej od kwoty podatku; może jedynie pomniejszyć przychód o 50% zapłaconych składek zdrowotnych."
                },
                {
                  pytanie: "Źródłem obowiązku podatkowego może być wyłącznie ustawa.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 0,
                  wyjasnienie: "Prawda — podatki nakłada się wyłącznie w drodze ustawy (art. 217 Konstytucji)."
                },
                {
                  pytanie: "Zapłata podatku może zostać dokonana przez inną osobę niż podatnik.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 0,
                  wyjasnienie: "Prawda — np. małżonek lub najbliższa rodzina bez ograniczeń, a inny podmiot, gdy kwota podatku nie przekracza 1000 zł."
                },
                {
                  pytanie: "Co do zasady skala w podatku dochodowym od osób fizycznych ma charakter progresywny.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 0,
                  wyjasnienie: "Prawda — wraz ze wzrostem podstawy rośnie stawka (skala 12% i 32%)."
                },
                {
                  pytanie: "Podatek płacony w formie karty podatkowej zasila budżet gminy.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 0,
                  wyjasnienie: "Prawda — wpływy z karty podatkowej są dochodem gminy (mimo że organem właściwym jest naczelnik US)."
                },
                {
                  pytanie: "Stawka opłaty prolongacyjnej jest równa obniżonej stawce odsetek za zwłokę.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 0,
                  wyjasnienie: "Prawda — opłata prolongacyjna odpowiada obniżonej (połowie) stawce odsetek za zwłokę."
                },
                {
                  pytanie: "Podatnicy karty podatkowej wpłacają podatek w formie miesięcznych zaliczek.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — płacą stałą miesięczną kwotę podatku wynikającą z decyzji, a nie zaliczki liczone od dochodu."
                },
                {
                  pytanie: "Do obowiązków inkasenta należy obliczanie wysokości podatku.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 1,
                  wyjasnienie: "Fałsz — inkasent jedynie pobiera i wpłaca podatek; obliczenia dokonuje płatnik lub organ."
                },
                {
                  pytanie: "Prawo do zwrotu nadpłaty podatku wygasa po upływie 5 lat, licząc od końca roku, w którym upłynął termin jej zwrotu.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 0,
                  wyjasnienie: "Prawda — to ogólny 5-letni termin z Ordynacji podatkowej."
                },
                {
                  pytanie: "Wieloletni plan finansowy państwa stanowi podstawę przygotowania projektu ustawy budżetowej na kolejny rok.",
                  odpowiedzi: ["Prawda", "Fałsz"],
                  poprawna: 0,
                  wyjasnienie: "Prawda — wieloletni plan finansowy państwa jest punktem odniesienia dla projektu ustawy budżetowej."
                }
              ]
            },

            /* ---- TEST 3: UZUPEŁNIANIE LUK ---- */
            {
              nazwa: "Uzupełnianie luk",
              pytania: [
                {
                  typ: "luka",
                  pytanie: "Podmiot, który ma obowiązek obliczyć, pobrać i wpłacić podatek, to __________.",
                  luki: ["płatnik", "platnik"],
                  wyjasnienie: "To definicja płatnika (art. 8 Ordynacji podatkowej)."
                },
                {
                  typ: "luka",
                  pytanie: "W podatku dochodowym od osób fizycznych __________ obowiązek podatkowy obejmuje osoby fizyczne, które nie mają w Polsce miejsca zamieszkania.",
                  luki: ["ograniczony"],
                  wyjasnienie: "Nierezydenci podlegają ograniczonemu obowiązkowi podatkowemu — tylko od dochodów osiągniętych w Polsce."
                },
                {
                  typ: "luka",
                  pytanie: "Decyzja organu podatkowego, która nie powoduje powstania nowych praw i obowiązków podatnika, a jedynie stwierdza ich istnienie, to decyzja __________.",
                  luki: ["określająca", "okreslajaca", "deklaratoryjna"],
                  wyjasnienie: "Decyzja określająca ma charakter deklaratoryjny — potwierdza zobowiązanie, które powstało z mocy prawa."
                },
                {
                  typ: "luka",
                  pytanie: "Decyzja powodująca powstanie zobowiązania podatkowego to decyzja __________.",
                  luki: ["ustalająca", "ustalajaca", "konstytutywna"],
                  wyjasnienie: "Decyzja ustalająca ma charakter konstytutywny — z chwilą jej doręczenia powstaje zobowiązanie podatkowe."
                },
                {
                  typ: "luka",
                  pytanie: "Zobowiązania podatkowe ulegają przedawnieniu z upływem __________ lat (wpisz cyfrę).",
                  luki: ["5", "pięciu", "pieciu"],
                  wyjasnienie: "Zasada ogólna z art. 70 Ordynacji podatkowej — 5 lat."
                },
                {
                  typ: "luka",
                  pytanie: "Odpowiedzialność osób trzecich za zobowiązania podatkowe ma charakter __________, co oznacza, że do zapłaty całej kwoty zobowiązana jest zarówno osoba trzecia, jak i podatnik.",
                  luki: ["solidarny", "solidarna", "solidarnej"],
                  wyjasnienie: "Odpowiedzialność solidarna — wierzyciel może dochodzić całości lub części długu od każdego z dłużników."
                },
                {
                  typ: "luka",
                  pytanie: "Odpowiedzialność podatkowa osób trzecich ma charakter __________, co oznacza, że jest uwarunkowana brakiem skuteczności egzekucji prowadzonej z majątku podatnika.",
                  luki: ["subsydiarny", "subsydiarna", "posiłkowy"],
                  wyjasnienie: "Subsydiarność — osoba trzecia odpowiada dopiero, gdy egzekucja z majątku podatnika okaże się bezskuteczna."
                },
                {
                  typ: "luka",
                  pytanie: "Jedyną jednostką samorządu terytorialnego, która posiada „własne” podatki, jest __________.",
                  luki: ["gmina"],
                  wyjasnienie: "Tylko gmina ma własne podatki (np. od nieruchomości, rolny, leśny, od środków transportowych)."
                },
                {
                  typ: "luka",
                  pytanie: "Wierzycielem podatkowym w polskim systemie podatkowym może być Skarb Państwa bądź __________.",
                  luki: ["gmina", "jednostka samorządu terytorialnego", "jednostka samorzadu terytorialnego"],
                  wyjasnienie: "Wierzycielem podatkowym jest Skarb Państwa albo jednostka samorządu terytorialnego (gmina)."
                },
                {
                  typ: "luka",
                  pytanie: "Zdarzenie faktyczne bądź prawne, z którym prawo wiąże powstanie obowiązku podatkowego, to __________ opodatkowania (element konstrukcji podatku).",
                  luki: ["przedmiot"],
                  wyjasnienie: "To przedmiot opodatkowania — sytuacja faktyczna lub prawna rodząca obowiązek podatkowy."
                },
                {
                  typ: "luka",
                  pytanie: "Podstawę opodatkowania w ryczałcie od przychodów ewidencjonowanych stanowi __________.",
                  luki: ["przychód", "przychod"],
                  wyjasnienie: "W ryczałcie podstawą jest przychód, bez pomniejszania o koszty."
                },
                {
                  typ: "luka",
                  pytanie: "Ulga prorodzinna polega na odliczeniu określonej kwoty od __________.",
                  luki: ["podatku"],
                  wyjasnienie: "Ulga prorodzinna (na dzieci) jest odliczana od podatku, a nie od dochodu."
                },
                {
                  typ: "luka",
                  pytanie: "Stawki w podatku dochodowym od osób fizycznych w ramach skali podatkowej wynoszą 12 i __________ procent.",
                  luki: ["32"],
                  wyjasnienie: "Aktualna skala PIT to dwie stawki: 12% i 32%."
                },
                {
                  typ: "luka",
                  pytanie: "Podstawowa stawka w podatku od towarów i usług (VAT) wynosi __________ procent.",
                  luki: ["23"],
                  wyjasnienie: "Podstawowa stawka VAT w Polsce wynosi 23%."
                },
                {
                  typ: "luka",
                  pytanie: "Adam Smith sformułował cztery klasyczne zasady podatkowe: równość, pewność, taniość oraz __________.",
                  luki: ["dogodność", "dogodnosc"],
                  wyjasnienie: "Czwarta zasada to dogodność (poboru) podatku."
                },
                {
                  typ: "luka",
                  pytanie: "Podatek do zapłaty w podatku od towarów i usług to różnica między podatkiem należnym a podatkiem __________.",
                  luki: ["naliczonym", "naliczony"],
                  wyjasnienie: "VAT do zapłaty = podatek należny − podatek naliczony."
                },
                {
                  typ: "otwarte",
                  pytanie: "Małżonkowie rozliczają się wspólnie. Jeden z nich osiągnął w roku podatkowym dochód 200 000 zł, drugi nie uzyskał żadnego dochodu (0 zł). Ile wyniesie ich podatek dochodowy (PIT) przy wspólnym rozliczeniu według skali podatkowej?",
                  polecenie: "Policz podatek i wpisz wynik wraz z obliczeniami, a następnie kliknij „Pokaż odpowiedź wzorcową”.",
                  wzor: "<b>16 800 zł.</b> Przy wspólnym rozliczeniu podatek liczy się w podwójnej wysokości od połowy łącznych dochodów małżonków. Połowa = 200 000 / 2 = 100 000 zł. Kwota 100 000 zł mieści się w I progu skali (do 120 000 zł), więc podatek od niej: 12% × 100 000 − 3 600 (kwota zmniejszająca podatek) = 12 000 − 3 600 = 8 400 zł. Podatek łączny = 2 × 8 400 = <b>16 800 zł</b>.<br><br>Dla porównania: gdyby osoba zarabiająca 200 000 zł rozliczała się samodzielnie, weszłaby w II próg i zapłaciła 10 800 + 32% × (200 000 − 120 000) = 10 800 + 25 600 = 36 400 zł. Wspólne rozliczenie daje tu więc dużą oszczędność. (Założenie upraszczające: dochód = podstawa opodatkowania, bez składek i ulg.)",
                  wyjasnienie: "Mechanizm wspólnego opodatkowania: podatek = 2 × podatek obliczony od (łączny dochód ÷ 2)."
                }
              ]
            }
          ]
        }
      ]
    },

    /* ===================== PRAWO MEDYCZNE ===================== */
    {
      nazwa: "Prawo medyczne",
      ikona: "🩺",
      opis: "Prawa pacjenta, zgoda na zabieg, tajemnica lekarska, klauzula sumienia i przywilej terapeutyczny (na podstawie UZL i ustawy o prawach pacjenta).",
      podkategorie: [
        {
          nazwa: "Testy",
          testy: [
            {
              nazwa: "Prawo medyczne — test podstawowy",
              pytania: [
                {
                  pytanie: "Lekarz jest zobowiązany do wykonywania zawodu zgodnie z elementami standardu z art. 4 UZL, z WYJĄTKIEM:",
                  odpowiedzi: [
                    "dbając o poszanowanie praw pacjenta",
                    "zgodnie ze wskazaniami aktualnej wiedzy medycznej",
                    "dostępnymi metodami i środkami zapobiegania, rozpoznawania i leczenia chorób",
                    "zgodnie z zasadami etyki zawodowej",
                    "z należytą starannością"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Art. 4 UZL wymienia: aktualną wiedzę medyczną, dostępne metody i środki, zasady etyki zawodowej oraz należytą staranność. „Poszanowanie praw pacjenta” to odrębny obowiązek (nie element standardu z art. 4)."
                },
                {
                  pytanie: "Wskaż odpowiedź FAŁSZYWĄ. Lekarz może powstrzymać się od wykonania świadczeń niezgodnych z jego sumieniem (klauzula sumienia), pod warunkiem że:",
                  odpowiedzi: [
                    "wskaże realne możliwości uzyskania tego świadczenia u innego lekarza lub w podmiocie leczniczym",
                    "pacjent nie wymaga niezwłocznej pomocy lekarskiej",
                    "odnotuje ten fakt w dokumentacji medycznej",
                    "dokona uprzedniego powiadomienia na piśmie przełożonego"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Obowiązek „wskazania realnych możliwości” uzyskania świadczenia u innego lekarza został uznany za niekonstytucyjny (wyrok TK K 12/14 z 2015 r.) — to zdanie jest dziś fałszywe. (Warto zweryfikować z materiałami kursu.)"
                },
                {
                  pytanie: "Prawo do uzyskania przystępnej informacji o stanie zdrowia, rozpoznaniu, metodach i rokowaniu przysługuje pacjentowi (w tym małoletniemu ≥16 lat) od:",
                  odpowiedzi: [
                    "lekarza i felczera",
                    "pielęgniarki i położnej",
                    "farmaceuty i fizjoterapeuty",
                    "wszystkie powyższe prawdziwe",
                    "tylko A i B prawdziwe"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Zgodnie z kluczem testu poprawna jest odpowiedź „lekarza i felczera”."
                },
                {
                  pytanie: "Przywilej terapeutyczny (ograniczenie informacji przekazywanej pacjentowi) może zastosować wobec pacjenta:",
                  odpowiedzi: [
                    "lekarz",
                    "pielęgniarka i położna",
                    "ratownik medyczny i dietetyk",
                    "każda osoba wykonująca zawód medyczny",
                    "żadna z powyższych"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Przywilej terapeutyczny przysługuje lekarzowi (art. 31 ust. 4 UZL)."
                },
                {
                  pytanie: "Stosując przywilej terapeutyczny, lekarz może ograniczyć informację o:",
                  odpowiedzi: [
                    "stanie zdrowia i rokowaniu",
                    "stanie zdrowia i rozpoznaniu",
                    "rozpoznaniu i rokowaniu",
                    "dowolnych elementach obowiązku informacyjnego"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Przywilej terapeutyczny dotyczy ograniczenia informacji o stanie zdrowia i o rokowaniu, gdy przemawia za tym dobro pacjenta (art. 31 ust. 4 UZL)."
                },
                {
                  pytanie: "Zgoda osoby małoletniej powyżej 13. roku życia na zabieg lub inną czynność medyczną wymagana jest na podstawie ustawy:",
                  odpowiedzi: [
                    "wszystkie powyższe",
                    "o zawodach lekarza i lekarza dentysty",
                    "o planowaniu rodziny, ochronie płodu ludzkiego i warunkach dopuszczalności przerywania ciąży",
                    "o leczeniu niepłodności",
                    "o pobieraniu, przechowywaniu i przeszczepianiu komórek, tkanek i narządów"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Zgodnie z kluczem testu poprawna jest odpowiedź „wszystkie powyższe” — każda z wymienionych ustaw przewiduje wymóg zgody małoletniego powyżej 13. roku życia."
                },
                {
                  pytanie: "Lekarz może wykonać zabieg operacyjny bez zgody pacjenta niekompetentnego (po uzyskaniu zgody zastępczej przedstawiciela lub sądu), jednak gdy zwłoka groziłaby utratą życia / ciężkim uszkodzeniem ciała / ciężkim rozstrojem zdrowia, lekarz może przeprowadzić zabieg:",
                  odpowiedzi: [
                    "wyłącznie za wiedzą sądu opiekuńczego (zawiadamiając sąd)",
                    "wyłącznie za zgodą sądu opiekuńczego",
                    "wyłącznie za zgodą przełożonego",
                    "wyłącznie za wiedzą przełożonego"
                  ],
                  poprawna: 0,
                  wyjasnienie: "W sytuacji nagłej lekarz działa bez zgody, ale ma obowiązek niezwłocznie zawiadomić (poinformować) sąd opiekuńczy / przedstawiciela ustawowego oraz, o ile to możliwe, zasięgnąć opinii drugiego lekarza (art. 34 ust. 7 UZL). (Warto zweryfikować z materiałami kursu.)"
                },
                {
                  pytanie: "Jeśli nie spowoduje to niebezpieczeństwa utraty życia, ciężkiego uszkodzenia ciała lub ciężkiego rozstroju zdrowia, ratownik medyczny po ocenie stanu zdrowia pacjenta może:",
                  odpowiedzi: [
                    "zarówno nie podjąć, jak i odstąpić od medycznych czynności ratunkowych albo udzielania świadczeń zdrowotnych",
                    "jedynie nie podjąć medycznych czynności ratunkowych, ale nie może od nich odstąpić",
                    "jedynie odstąpić od rozpoczętych czynności, ale nie może ich nie podjąć",
                    "ani nie podjąć, ani odstąpić od medycznych czynności ratunkowych"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Zgodnie z kluczem testu prawdziwe są oba warianty — ratownik może zarówno nie podjąć, jak i odstąpić od medycznych czynności ratunkowych / udzielania świadczeń zdrowotnych."
                },
                {
                  pytanie: "Wyjątek terapeutyczny to:",
                  odpowiedzi: [
                    "żadne z powyższych",
                    "prawo lekarza do ograniczenia pacjentowi informacji w wyjątkowej sytuacji",
                    "prawo lekarza do wyboru metody terapii",
                    "możliwość zastosowania przez lekarza unikatowej metody leczniczej",
                    "prawo lekarza do zaniechania uporczywej terapii"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Zgodnie z kluczem testu poprawna jest odpowiedź „żadne z powyższych”. Uwaga: „wyjątek terapeutyczny” bywa odróżniany od „przywileju terapeutycznego” (ograniczenia informacji) — stąd taka odpowiedź w kluczu."
                },
                {
                  pytanie: "Tajemnicą lekarską (medyczną) objęte są:",
                  odpowiedzi: [
                    "informacje na temat pacjenta uzyskane przez lekarza w związku z wykonywaniem zawodu",
                    "informacje na temat pacjenta, które lekarz osobiście uzyskał w związku z jego leczeniem",
                    "tylko informacje na temat zdrowia pacjenta uzyskane przy udzielaniu świadczeń zdrowotnych",
                    "informacje o pacjencie z wyłączeniem preferencji światopoglądowych i seksualnych",
                    "informacje o pacjencie z wyłączeniem spraw majątkowych"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Tajemnica obejmuje wszystkie informacje związane z pacjentem, uzyskane w związku z wykonywaniem zawodu (art. 40 UZL) — bez zawężeń wskazanych w pozostałych odpowiedziach."
                },
                {
                  pytanie: "Zgoda na zabieg podwyższonego ryzyka wymaga formy pisemnej. Jeśli formularz nie został podpisany, ale pacjent uprzednio ustnie zaakceptował ryzyko zabiegu, to zabieg został wykonany:",
                  odpowiedzi: [
                    "legalnie, ale lekarz może mieć problem z udowodnieniem zakresu przekazanej informacji",
                    "bezprawnie — nie została spełniona przesłanka legalności zabiegu",
                    "bezprawnie, ale podpis pacjenta złożony po zabiegu zalegalizuje procedurę",
                    "legalnie, o ile nie doszło do powikłań"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Forma pisemna zgody jest zastrzeżona dla celów dowodowych (ad probationem), a nie pod rygorem nieważności — sama zgoda ustna nie czyni zabiegu bezprawnym, lecz utrudnia dowodzenie."
                },
                {
                  pytanie: "Osobą bliską pacjentowi NIE jest:",
                  odpowiedzi: [
                    "rodzeństwo małżonka",
                    "małżonek w trakcie rozwodu",
                    "teściowa",
                    "rodzeństwo pacjenta",
                    "wszyscy powyżsi"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Zgodnie z kluczem testu osobą bliską nie jest rodzeństwo małżonka. Definicja osoby bliskiej (ustawa o prawach pacjenta) obejmuje m.in. małżonka, krewnych do II stopnia oraz powinowatych w linii prostej (np. teściowa) — rodzeństwo małżonka się w niej nie mieści."
                },
                {
                  pytanie: "Prawo do informacji o stanie zdrowia, rozpoznaniu, metodach i rokowaniu przysługuje pacjentowi od:",
                  odpowiedzi: [
                    "każdej osoby wykonującej zawód medyczny — w zakresie udzielanych przez nią świadczeń i zgodnie z jej uprawnieniami",
                    "każdej osoby wykonującej zawód medyczny — w pełnym zakresie",
                    "tylko lekarza (felczera) w pełnym zakresie",
                    "tylko lekarza, pielęgniarki i położnej w ograniczonym zakresie"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Zgodnie z ustawą o prawach pacjenta informacji udziela osoba wykonująca zawód medyczny, w zakresie udzielanych przez nią świadczeń i zgodnie z posiadanymi uprawnieniami."
                }
              ]
            }
          ]
        }
      ]
    }

  ]
};
