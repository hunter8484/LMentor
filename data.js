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
                 { pytanie, odpowiedzi:[...], poprawna: indeks(0,1,2...), wyjasnienie }
             ]}
           ]
         }
       ]
     }
   ]
   ---------------------------------------------------------
   "poprawna" liczona jest od 0 (a=0, b=1, c=2, d=3).
   "wyjasnienie" pokazuje się po udzieleniu odpowiedzi (opcjonalne).
   ========================================================= */

const LEX_DATA = {

  kategorie: [

    /* ===================== PRAWO SPADKOWE ===================== */
    {
      nazwa: "Prawo spadkowe",
      ikona: "🪶",
      opis: "Dziedziczenie ustawowe i testamentowe, zachowek, przyjęcie i odrzucenie spadku.",
      podkategorie: [
        {
          nazwa: "Testy",
          // Pytania wczytywane z pliku pytania-spadkowe.js (wygenerowane z załączników).
          testy: (typeof SPADKOWE_TESTY !== "undefined") ? SPADKOWE_TESTY : []
        }
      ]
    },

    /* ================= PRAWO GOSPODARCZE UE ================= */
    {
      nazwa: "Prawo gospodarcze UE",
      ikona: "🇪🇺",
      opis: "Prawo konkurencji (art. 101–102 TFUE) oraz swobody rynku wewnętrznego.",
      podkategorie: [
        {
          nazwa: "Testy",
          testy: [

            /* ---- TEST 1: PRAWO KONKURENCJI ---- */
            {
              nazwa: "Prawo konkurencji (art. 101–102 TFUE)",
              pytania: [
                {
                  pytanie: "Adresatami art. 102 TFUE są:",
                  odpowiedzi: ["przedsiębiorstwa", "związki przedsiębiorstw", "państwa członkowskie"],
                  poprawna: 0,
                  wyjasnienie: "Art. 102 TFUE zakazuje nadużywania pozycji dominującej przez jedno lub większą liczbę przedsiębiorstw. Związki przedsiębiorstw są typowymi adresatami art. 101 TFUE."
                },
                {
                  pytanie: "Określenie, które z usług są usługami świadczonymi w ogólnym interesie gospodarczym (UOIG), należy do:",
                  odpowiedzi: ["Komisji Europejskiej", "państw członkowskich", "rzecznika ochrony praw konkurencji"],
                  poprawna: 1,
                  wyjasnienie: "Państwa członkowskie mają szeroki zakres swobody w definiowaniu UOIG; Komisja kontroluje jedynie oczywiste błędy w ocenie."
                },
                {
                  pytanie: "Za zgodną z rynkiem wewnętrznym MOŻE zostać uznana (art. 107 ust. 3 TFUE):",
                  odpowiedzi: [
                    "pomoc naprawiająca szkody spowodowane klęskami żywiołowymi lub zdarzeniami nadzwyczajnymi",
                    "pomoc przeznaczona na ułatwianie rozwoju niektórych działań lub regionów gospodarczych, o ile nie zmienia warunków wymiany handlowej sprzecznie ze wspólnym interesem",
                    "pomoc o charakterze socjalnym przyznawana indywidualnym konsumentom bez dyskryminacji co do pochodzenia produktów"
                  ],
                  poprawna: 1,
                  wyjasnienie: "Sformułowanie „może zostać uznana” odpowiada art. 107 ust. 3 lit. c) TFUE. Odpowiedzi a) i c) to pomoc, która z mocy art. 107 ust. 2 TFUE „jest zgodna” (automatycznie)."
                },
                {
                  pytanie: "Według której szkoły prawa konkurencji celem tego prawa jest dobrobyt konsumentów oraz ochrona małych i średnich przedsiębiorstw?",
                  odpowiedzi: ["chicagowskiej", "fryburskiej", "harwardzkiej"],
                  poprawna: 2,
                  wyjasnienie: "Szkoła harwardzka (strukturalizm) kładła nacisk na ochronę struktury konkurencji i drobnych przedsiębiorców. (Warto zweryfikować z materiałami kursu.)"
                },
                {
                  pytanie: "Zrzeszenie, które nie prowadzi działalności gospodarczej i oprócz przedsiębiorstw zrzesza również inne jednostki:",
                  odpowiedzi: [
                    "można uznać za związek przedsiębiorstw w rozumieniu art. 101 TFUE",
                    "nie można uznać za związek przedsiębiorstw w rozumieniu art. 101 TFUE"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Sam brak działalności gospodarczej i obecność innych członków nie wyklucza uznania za związek przedsiębiorstw — decyduje funkcja i wpływ na zachowania rynkowe członków."
                },
                {
                  pytanie: "Działalnością gospodarczą NIE jest:",
                  odpowiedzi: ["oferowanie towarów", "świadczenie usług", "działalność na rynku pracy (świadczenie pracy)"],
                  poprawna: 2,
                  wyjasnienie: "Działalność gospodarcza to oferowanie towarów lub usług na rynku. Świadczenie pracy przez pracownika nie jest samodzielną działalnością gospodarczą."
                },
                {
                  pytanie: "Rolnik dostarczający pszenicę, za którą opłatę otrzymuje w zależności od wielkości odsprzedaży zboża:",
                  odpowiedzi: [
                    "jest pracownikiem, bo wykonuje pracę i otrzymuje wynagrodzenie",
                    "nie jest pracownikiem, bo jego wynagrodzenie jest niepewne i niestabilne (ponosi ryzyko gospodarcze)"
                  ],
                  poprawna: 1,
                  wyjasnienie: "Uzależnienie zapłaty od wyniku odsprzedaży oznacza ponoszenie ryzyka gospodarczego — to cecha samodzielnego przedsiębiorcy, a nie pracownika."
                },
                {
                  pytanie: "Rybak dostarczający ryby, za które opłatę otrzymuje w zależności od wielkości odsprzedaży ryb:",
                  odpowiedzi: [
                    "jest pracownikiem, bo wykonuje pracę i otrzymuje wynagrodzenie",
                    "nie jest pracownikiem, bo jego wynagrodzenie jest niepewne i niestabilne (ponosi ryzyko gospodarcze)"
                  ],
                  poprawna: 1,
                  wyjasnienie: "Analogicznie jak rolnik — wynagrodzenie zależne od odsprzedaży świadczy o ponoszeniu ryzyka gospodarczego, więc nie jest to stosunek pracy."
                },
                {
                  pytanie: "Porozumienia między przedsiębiorstwami działającymi na różnych szczeblach obrotu (np. producent–dystrybutor) nazywamy:",
                  odpowiedzi: ["wertykalnymi", "horyzontalnymi", "abuzywnymi"],
                  poprawna: 0,
                  wyjasnienie: "Porozumienia wertykalne dotyczą podmiotów działających na różnych szczeblach łańcucha obrotu."
                },
                {
                  pytanie: "Porozumienie między przedsiębiorstwami działającymi na tym samym poziomie obrotu to porozumienie:",
                  odpowiedzi: ["horyzontalne", "wertykalne", "konglomeratywne"],
                  poprawna: 0,
                  wyjasnienie: "Porozumienia horyzontalne zawierane są przez konkurentów działających na tym samym szczeblu obrotu."
                },
                {
                  pytanie: "Zrzeszenia przedsiębiorstw NIE należy uważać za związek przedsiębiorstw w rozumieniu art. 101 TFUE, jeżeli:",
                  odpowiedzi: [
                    "w jego organach większość stanowią przedstawiciele władz publicznych (działający w interesie publicznym)",
                    "nie prowadzi działalności gospodarczej",
                    "zrzesza oprócz przedsiębiorstw również inne jednostki i osoby"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Decyduje rzeczywista funkcja: gdy w organach dominują przedstawiciele władz publicznych realizujący interes ogólny, zrzeszenie nie jest związkiem przedsiębiorstw. Sam brak działalności gospodarczej czy obecność innych członków tego nie przesądza."
                },
                {
                  pytanie: "Pojęcie handlu w rozumieniu art. 101 TFUE obejmuje:",
                  odpowiedzi: [
                    "tylko wymianę handlową między państwami członkowskimi",
                    "wymianę handlową między państwami członkowskimi lub eksport poza obszar UE"
                  ],
                  poprawna: 1,
                  wyjasnienie: "Pojęcie handlu jest interpretowane szeroko i może obejmować również obrót powiązany z eksportem poza UE, o ile wpływa na rynek wewnętrzny. (Warto zweryfikować z materiałami kursu.)"
                },
                {
                  pytanie: "Przestrzeń, w której oferowane są produkty lub usługi homogeniczne i w której dochodzi do konfrontacji popytu i podaży, to:",
                  odpowiedzi: ["rynek terytorialny", "rynek produktowy", "rynek właściwy"],
                  poprawna: 2,
                  wyjasnienie: "Rynek właściwy to rynek, na którym konfrontują się popyt i podaż produktów uznawanych za wzajemnie substytucyjne na danym obszarze. (Warto zweryfikować z materiałami kursu.)"
                },
                {
                  pytanie: "Według której szkoły prawa konkurencji celem prawa konkurencji jest ochrona dobrobytu ogólnego?",
                  odpowiedzi: ["fryburskiej", "harwardzkiej", "chicagowskiej"],
                  poprawna: 2,
                  wyjasnienie: "Szkoła chicagowska wiąże cel prawa konkurencji z efektywnością ekonomiczną i maksymalizacją dobrobytu (ogólnego). (Warto zweryfikować z materiałami kursu.)"
                },
                {
                  pytanie: "Art. 101 TFUE ma skutek:",
                  odpowiedzi: [
                    "bezpośredni i wertykalny",
                    "wertykalny i pośredni",
                    "horyzontalny, wertykalny i bezpośredni"
                  ],
                  poprawna: 2,
                  wyjasnienie: "Art. 101 TFUE wywołuje skutek bezpośredni, zarówno w relacjach wertykalnych (jednostka–państwo), jak i horyzontalnych (między jednostkami)."
                }
              ]
            },

            /* ---- TEST 2: SWOBODY RYNKU WEWNĘTRZNEGO ---- */
            {
              nazwa: "Swobody rynku wewnętrznego",
              pytania: [
                {
                  pytanie: "Strefa wolnego handlu to stadium integracji gospodarczej, które polega m.in. na:",
                  odpowiedzi: [
                    "prowadzeniu przez tworzące ją państwa wspólnej polityki handlowej wobec państw trzecich",
                    "ujednoliceniu stosowania ceł i ograniczeń przez wszystkie państwa wobec państw trzecich",
                    "stworzeniu swobodnego przepływu towarów, usług, kapitału i pracowników także wobec państw trzecich",
                    "zniesieniu ceł i ograniczeń w handlu między państwami strefy przy zachowaniu prawa do samodzielnego regulowania ceł wobec państw trzecich"
                  ],
                  poprawna: 3,
                  wyjasnienie: "W strefie wolnego handlu znosi się bariery wewnętrzne, ale każde państwo zachowuje własną, odrębną politykę celną wobec państw trzecich."
                },
                {
                  pytanie: "Porozumienie, w ramach którego kraje członkowskie znoszą cła w obrocie między sobą oraz ustalają wspólną zewnętrzną politykę handlową, to:",
                  odpowiedzi: ["unia celna", "strefa wolnego handlu", "wspólny rynek", "unia bankowa"],
                  poprawna: 0,
                  wyjasnienie: "Cechą unii celnej jest wspólna zewnętrzna taryfa celna (wspólna polityka handlowa) obok zniesienia ceł wewnętrznych."
                },
                {
                  pytanie: "Orzeczenie Keck dotyczyło:",
                  odpowiedzi: [
                    "sposobu, w jaki odbywa się handel towarami (tzw. sposobów sprzedaży)",
                    "ograniczeń o skutku równoważnym do ograniczeń ilościowych w swobodnym przepływie towarów",
                    "swobody świadczenia usług i wzajemnego uznawania zasad ich wykonywania",
                    "unii celnej"
                  ],
                  poprawna: 0,
                  wyjasnienie: "W sprawie Keck TS wyłączył niedyskryminujące „sposoby sprzedaży” spod zakresu zakazu z art. 34 TFUE."
                },
                {
                  pytanie: "Formuła Dassonville dotyczy:",
                  odpowiedzi: [
                    "sposobu, w jaki odbywa się handel towarami",
                    "ograniczeń o skutku równoważnym do ograniczeń ilościowych w swobodnym przepływie towarów",
                    "swobody świadczenia usług i wzajemnego uznawania zasad ich wykonywania",
                    "unii celnej"
                  ],
                  poprawna: 1,
                  wyjasnienie: "Formuła Dassonville definiuje środki o skutku równoważnym do ograniczeń ilościowych jako wszelkie regulacje mogące utrudnić handel wewnątrzunijny — bezpośrednio lub pośrednio, rzeczywiście lub potencjalnie."
                },
                {
                  pytanie: "Do celów unii gospodarczo-walutowej NIE zaliczamy:",
                  odpowiedzi: [
                    "ukończenia procesu urzeczywistniania rynku wewnętrznego",
                    "zapewnienia porównywalności kosztów i cen na terytorium UE",
                    "wyrównania płac pracowników w Unii Europejskiej",
                    "wzmocnienia stabilności walutowej UE"
                  ],
                  poprawna: 2,
                  wyjasnienie: "Unia gospodarczo-walutowa nie ma na celu wyrównywania płac pracowników w państwach członkowskich."
                },
                {
                  pytanie: "Pojęcie pracownika w prawie UE jest:",
                  odpowiedzi: [
                    "wprowadzone w TUE jako wspólna definicja dla wszystkich państw członkowskich",
                    "wprowadzone w TFUE jako wspólna definicja dla wszystkich państw członkowskich",
                    "przejęte do prawa UE z prawa państw członkowskich",
                    "wypracowane przez Trybunał Sprawiedliwości jako autonomiczne pojęcie prawa UE"
                  ],
                  poprawna: 3,
                  wyjasnienie: "Pojęcie pracownika jest autonomicznym pojęciem prawa UE wypracowanym w orzecznictwie TS (m.in. Lawrie-Blum)."
                },
                {
                  pytanie: "Celem wprowadzenia systemu uznawania kwalifikacji zawodowych jest:",
                  odpowiedzi: [
                    "zagwarantowanie osobom migrującym prawa do najwyższej możliwej emerytury",
                    "zagwarantowanie zachowania świadczeń ubezpieczeniowych przy korzystaniu ze swobody przepływu",
                    "zagwarantowanie osobom migrującym prawa do uznania ich kwalifikacji zawodowych przy korzystaniu ze swobody przepływu",
                    "żadne z powyższych"
                  ],
                  poprawna: 2,
                  wyjasnienie: "System uznawania kwalifikacji zawodowych służy temu, by kwalifikacje zdobyte w jednym państwie były uznawane w innym, ułatwiając korzystanie ze swobód."
                },
                {
                  pytanie: "Nabywanie nieruchomości w państwie członkowskim UE regulowane jest przepisami:",
                  odpowiedzi: [
                    "swobody przepływu towarów",
                    "swobody przepływu osób",
                    "swobody przepływu kapitału",
                    "swobody prowadzenia działalności gospodarczej"
                  ],
                  poprawna: 2,
                  wyjasnienie: "Inwestycje w nieruchomości zaliczane są do przepływu kapitału (zob. nomenklatura przepływów kapitału i orzecznictwo TS)."
                },
                {
                  pytanie: "Swoboda prowadzenia działalności gospodarczej (swoboda przedsiębiorczości):",
                  odpowiedzi: [
                    "dotyczy prawa prowadzenia w sposób trwały i nieprzerwany działalności na własny rachunek na terytorium innego państwa członkowskiego",
                    "dotyczy prawa czasowego prowadzenia działalności na własny rachunek na terytorium innego państwa członkowskiego",
                    "jest swobodą absolutną, której państwo nie może w żadnych okolicznościach ograniczyć",
                    "jest nieodróżnialna od swobody świadczenia usług"
                  ],
                  poprawna: 0,
                  wyjasnienie: "Swoboda przedsiębiorczości wiąże się z trwałym i nieprzerwanym prowadzeniem działalności, w odróżnieniu od czasowego (transgranicznego) charakteru świadczenia usług."
                },
                {
                  pytanie: "Który z interesów NIE mógłby uzasadniać ograniczenia swobody świadczenia usług jako „nadrzędny wzgląd interesu ogólnego”?",
                  odpowiedzi: [
                    "ochrona środowiska naturalnego",
                    "zagwarantowanie odpowiednio wysokich wpływów do budżetu (cel fiskalny)",
                    "ochrona konsumentów",
                    "ochrona zdrowia publicznego"
                  ],
                  poprawna: 1,
                  wyjasnienie: "Cele czysto gospodarcze/fiskalne (np. zwiększenie wpływów budżetowych) nie stanowią nadrzędnego względu interesu ogólnego mogącego uzasadnić ograniczenie swobody."
                },
                {
                  pytanie: "Czy udzielanie nieodpłatnych porad prawnych przez studenckie poradnie prawne mieści się w zakresie przepisów o swobodzie świadczenia usług?",
                  odpowiedzi: [
                    "tak, w każdym przypadku",
                    "tak, lecz tylko gdy chodzi o porady dla obywateli innych państw członkowskich",
                    "tak, lecz tylko gdy poradnia prowadzi zarejestrowaną działalność gospodarczą",
                    "nie, gdyż przepisy TFUE dotyczą wyłącznie świadczenia usług odpłatnych"
                  ],
                  poprawna: 3,
                  wyjasnienie: "Usługa w rozumieniu TFUE jest świadczona za wynagrodzeniem. Świadczenia nieodpłatne co do zasady nie są objęte swobodą świadczenia usług."
                }
              ]
            }
          ]
        }
      ]
    }

  ]
};
