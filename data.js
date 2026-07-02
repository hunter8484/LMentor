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
  "kategorie": [
    {
      "nazwa": "Prawo finansowe",
      "ikona": "💰",
      "opis": "Prawo finansowe i finansów publicznych: zobowiązania podatkowe, odpowiedzialność, dyscyplina finansów publicznych, dług publiczny, poręczenia i gwarancje, procedura budżetowa. Po wybraniu odpowiedzi pokazuje się uzasadnienie.",
      "podkategorie": [
        {
          "nazwa": "Testy",
          "testy": [
            {
              "nazwa": "Prawo finansowe — baza (191 pytań)",
              "pytania": [
                {
                  "pytanie": "Za zobowiązania podatkowe fundacji odpowiada/odpowiadają:",
                  "odpowiedzi": [
                    "wyłącznie prezes zarządu fundacji",
                    "prezes fundacji",
                    "organ założycielski",
                    "rada fundacji",
                    "członkowie zarządu fundacji"
                  ],
                  "poprawna": 4,
                  "wyjasnienie": "Zgodnie z Ordynacją podatkową odpowiedzialność członków zarządu innych osób prawnych stosuje się odpowiednio także do fundacji, dlatego za jej zaległości podatkowe odpowiadają członkowie zarządu."
                },
                {
                  "pytanie": "Karalność czynów stanowiących naruszenie dyscypliny finansów publicznych ustaje, jeśli od ich popełnienia minęło:",
                  "odpowiedzi": [
                    "w zakresie dyscypliny finansów publicznych nie dochodzi do przedawnienia",
                    "3 lata",
                    "5 lat",
                    "1 rok",
                    "10 lat"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Karalność naruszenia dyscypliny finansów publicznych ustaje co do zasady po upływie 3 lat od popełnienia czynu."
                },
                {
                  "pytanie": "Zobowiązanie podatkowe przedawnia się z upływem 5 lat licząc od:",
                  "odpowiedzi": [
                    "dnia powstania obowiązku podatkowego",
                    "upływu terminu płatności podatku",
                    "końca roku kalendarzowego, w którym upłynął termin płatności",
                    "końca miesiąca, w którym upłynął termin płatności podatku",
                    "dnia następnego po dniu, w którym upłynął term złożenia deklaracji/zeznania podatkowego"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Ordynacja podatkowa przewiduje, że zobowiązanie podatkowe przedawnia się po 5 latach liczonych od końca roku kalendarzowego, w którym upłynął termin płatności podatku."
                },
                {
                  "pytanie": "Dniem wejścia w życie ustawy podatkowej jest",
                  "odpowiedzi": [
                    "dzień złożenia projektu ustawy przez jej wnioskodawców",
                    "dzień wskazany w ustawie",
                    "dzień podpisania ustawy przez Prezydenta RP",
                    "dzień uchwalenia przez Sejm RP",
                    "dzień opublikowania w ustawy w Dzienniku Ustaw"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "O wejściu w życie ustawy decyduje przepis końcowy samej ustawy, który wskazuje datę albo regułę jej wejścia w życie."
                },
                {
                  "pytanie": "Jednostki samorządu terytorialnego mają prawo ustalania wysokości podatków i opłat lokalnych",
                  "odpowiedzi": [
                    "bez ograniczeń",
                    "w zakresie określonym w ustawie",
                    "zgodnie z posiadanym zakresem władztwa podatkowego",
                    "na podstawie upoważnienia ministra finansów",
                    "dowolnie, zgodnie z posiadaną autonomią finansową"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Konstytucja RP przyznaje jednostkom samorządu terytorialnego prawo ustalania wysokości podatków i opłat lokalnych, ale tylko w granicach określonych ustawą."
                },
                {
                  "pytanie": "Zobowiązanie podatkowe wygasa w całości lub w części wskutek:",
                  "odpowiedzi": [
                    "przerzucenia ciężaru podatkowego",
                    "zaniechania poboru",
                    "przedawnienia terminu poboru podatku",
                    "potrącenia wierzytelności podatnika wobec państwowej jednostki budżetowej",
                    "rozłożenia płatności na raty"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zaniechanie poboru jest jednym z ustawowych sposobów wygaśnięcia zobowiązania podatkowego."
                },
                {
                  "pytanie": "Odpowiedzialność za naruszenie dyscypliny finansów publicznych wymaga stwierdzenia:",
                  "odpowiedzi": [
                    "przypisania winy konkretnej osobie/osobom",
                    "istotnej szkodliwości dla finansów publicznych",
                    "zawiadomienia właściwego rzecznika dyscypliny finansów publicznych przez podmiot wskazany w art. 93 ustawy",
                    "umyślności działania",
                    "dobrej znajomości przepisów prawa finansowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Odpowiedzialność za naruszenie dyscypliny finansów publicznych jest odpowiedzialnością osobistą i wymaga przypisania winy konkretnej osobie."
                },
                {
                  "pytanie": "Zgodnie z ustawą zasadniczą źródłami powszechnie obowiązującego prawa są na obszarze działania organów, które je ustanowiły:",
                  "odpowiedzi": [
                    "wyłącznie ustawy i rozporządzenia",
                    "umowy międzynarodowe",
                    "akty prawa miejscowego",
                    "orzeczenia sądów",
                    "ustawy i rozporządzenia"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Konstytucja RP wskazuje, że akty prawa miejscowego są źródłami prawa powszechnie obowiązującego na obszarze działania organów, które je ustanowiły."
                },
                {
                  "pytanie": "Przeniesienie przez podatnika własności rzeczy na rzecz Skarbu Państwa, będące szczególnym przypadkiem wygaśnięcia zobowiązania podatkowego, następuje na podstawie umowy zawartej:",
                  "odpowiedzi": [
                    "między podatnikiem a prezydentem miasta na prawach powiatu",
                    "między podatnikiem a naczelnikiem urzędu skarbowego",
                    "między podatnikiem a dyrektorem izby administracji skarbowej",
                    "między podatnikiem a płatnikiem",
                    "między podatnikiem a starostą"
                  ],
                  "poprawna": 4,
                  "wyjasnienie": "Przeniesienie własności rzeczy lub praw majątkowych na rzecz Skarbu Państwa następuje na podstawie umowy podatnika ze starostą wykonującym zadania z zakresu administracji rządowej."
                },
                {
                  "pytanie": "Członek zarządu spółki z ograniczoną odpowiedzialnością odpowiada za zaległości podatkowe spółki:",
                  "odpowiedzi": [
                    "jeżeli egzekucja z majątku spółki okazała się w całości lub w części bezskuteczna",
                    "całym swoim majątkiem",
                    "wyłącznie w okresie, gdy pełni/pełnił funkcje członka zarządu spółki",
                    "solidarnie ze spółką",
                    "jeśli wyrazi taką wolę"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Członek zarządu spółki z o.o. odpowiada za zaległości podatkowe spółki wtedy, gdy egzekucja z majątku spółki okazała się w całości lub w części bezskuteczna."
                },
                {
                  "pytanie": "Odpowiedzialność z tytułu naruszenia dyscypliny finansów publicznych dotyczy:",
                  "odpowiedzi": [
                    "ograniczona jest do zamkniętego katalogu określonego w art. 5-18c ustawy o odpowiedzialności za naruszenie dyscypliny finansów publicznych",
                    "dotyczy tylko zamówień publicznych",
                    "wszelkich nieprawidłowości w zakresie gromadzenia i wydatkowania środków publicznych",
                    "dotyczy tylko określonych nieprawidłowości w zakresie wydatkowania środków publicznych",
                    "dotyczy tylko nieprawidłowości w zakresie kontroli zarządczej w jednostkach sektora finansów publicznych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Odpowiedzialność z tytułu naruszenia dyscypliny finansów publicznych obejmuje tylko czyny wskazane w zamkniętym katalogu ustawy."
                },
                {
                  "pytanie": "Zobowiązanie podatkowe powstaje z dniem",
                  "odpowiedzi": [
                    "wydania decyzji organu podatkowego określającej wysokość zobowiązania podatkowego",
                    "1-go dnia każdego nowego roku",
                    "wysłania zawiadomienia przez organ podatkowy na adres zamieszkania lub siedziby podatnika",
                    "doręczenia decyzji organu podatkowego określającej wysokość zobowiązania podatkowego",
                    "zaistnienia zdarzenia, z którym ustawa wiąże powstanie zobowiązania podatkowego"
                  ],
                  "poprawna": 4,
                  "wyjasnienie": "Zobowiązanie podatkowe powstające z mocy prawa powstaje z dniem zaistnienia zdarzenia, z którym ustawa wiąże jego powstanie."
                },
                {
                  "pytanie": "Organami orzekającymi w sprawach naruszenia dyscypliny finansów publicznych są:",
                  "odpowiedzi": [
                    "międzyresortowe komisje orzekające",
                    "sądy powszechne",
                    "regionalne komisje orzekające",
                    "regionalne izby obrachunkowe",
                    "wspólna komisja orzekająca"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Regionalne komisje orzekające są organami orzekającymi w sprawach naruszenia dyscypliny finansów publicznych, zwłaszcza w sprawach dotyczących jednostek samorządowych."
                },
                {
                  "pytanie": "Zawiadomienie o ujawnieniu okoliczności wskazujących naruszenie dyscypliny finansów publicznych składa do właściwego rzecznika:",
                  "odpowiedzi": [
                    "każdy bez względu na miejsce zamieszkania",
                    "każdy radny",
                    "kierownik jednostki sektora finansów publicznych",
                    "każdy poseł",
                    "każda osoba fizyczna mająca miejsce zamieszkania na terytorium RP"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Kierownik jednostki sektora finansów publicznych ma obowiązek zawiadomić właściwego rzecznika o ujawnionych okolicznościach wskazujących na naruszenie dyscypliny finansów publicznych."
                },
                {
                  "pytanie": "Organ podatkowy, na wniosek podatnika, ogranicza pobór zaliczek na podatek, jeżeli:",
                  "odpowiedzi": [
                    "nie ma takiej możliwości prawnej",
                    "podatnik uprawdopodobni, że pobrane zaliczki obliczone wg zasad wynikających z ustaw podatkowych byłyby niewspółmiernie wysokie w stosunku do dochodu przewidzianego za dany rok podatkowy",
                    "przemawia za tym interes publiczny",
                    "przemawia za tym ważny interes podatnika",
                    "pobranie zaliczek spowodowałoby uszczerbek dla podatnika"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Organ podatkowy może ograniczyć pobór zaliczek, gdy podatnik uprawdopodobni, że zaliczki obliczone według ustawowych zasad byłyby niewspółmiernie wysokie do przewidywanego dochodu."
                },
                {
                  "pytanie": "Rozporządzenia ministra finansów są publikowane",
                  "odpowiedzi": [
                    "w Dzienniku Gazeta Prawna",
                    "w Monitorze Polskim",
                    "w Monitorze Skarbowym",
                    "Dzienniku Ustaw",
                    "na blogu ministra finansów"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Rozporządzenia jako akty powszechnie obowiązujące są publikowane w Dzienniku Ustaw."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP",
                  "odpowiedzi": [
                    "Minister Finansów może wprowadzić nowe podatki poprzez ogłoszenie na stronie gov.pl",
                    "nakładanie podatków i innych danin publicznych może nastąpić w drodze ustawy lub uchwały",
                    "Rada Ministrów może uznać uchwalony przez siebie projekt ustawy podatkowej za pilny, tym samym nadając moc prawnie wiążącą",
                    "nakładanie podatków i innych danin publicznych może nastąpić w drodze ustawy lub rozporządzenia",
                    "każdy jest obowiązany do ponoszenia ciężarów i świadczeń publicznych, w tym podatków, określonych w ustawie"
                  ],
                  "poprawna": 4,
                  "wyjasnienie": "Art. 84 Konstytucji RP stanowi, że każdy ma obowiązek ponoszenia ciężarów i świadczeń publicznych, w tym podatków, określonych w ustawie."
                },
                {
                  "pytanie": "Małżonkowie opodatkowani łącznie od sumy swoich dochodów:",
                  "odpowiedzi": [
                    "odpowiadają za zobowiązania podatkowe w proporcji ustalonej w intercyzie przedmałżeńskiej",
                    "odpowiadają za zobowiązania podatkowe w proporcji odpowiadającej wysokości ich dochodów",
                    "ponoszą solidarną odpowiedzialność za zobowiązanie podatkowe",
                    "odpowiadają za zobowiązania podatkowe tylko, jeśli w danym czasie przebywają na terytorium RP",
                    "są uprawnieni do zwrotu nadpłaty w częściach równych"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Małżonkowie opodatkowani łącznie odpowiadają solidarnie za zobowiązanie podatkowe wynikające ze wspólnego rozliczenia."
                },
                {
                  "pytanie": "Odpowiedzialność z tytułu naruszenia dyscypliny finansów publicznych ponoszą:",
                  "odpowiedzi": [
                    "kierownicy i pracownicy jednostek sektora finansów publicznych",
                    "wyłącznie pracownicy jednostek sektora finansów publicznych",
                    "wyłącznie rektorzy uczelni publicznych",
                    "tylko główny księgowy jednostki sektora finansów publicznych",
                    "rektorzy uczelni publicznych i niepublicznych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Odpowiedzialność za naruszenie dyscypliny finansów publicznych mogą ponosić kierownicy i pracownicy jednostek sektora finansów publicznych, jeżeli powierzono im określone obowiązki."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP podmiot podatku, jego przedmiot oraz stawka podatkowa, a także zasady przyznawania ulg i umorzeń oraz kategorie podmiotów zwolnionych od podatku powinny być regulowane",
                  "odpowiedzi": [
                    "w ustawie i rozporządzeniach",
                    "w rozporządzeniach",
                    "w uchwałach organów stanowiących jednostek samorządu terytorialnego",
                    "orzeczeniach sądów",
                    "w ustawie"
                  ],
                  "poprawna": 4,
                  "wyjasnienie": "Art. 217 Konstytucji RP wymaga ustawowej regulacji podstawowych elementów konstrukcji podatku, w tym podmiotu, przedmiotu, stawki, ulg, umorzeń i zwolnień."
                },
                {
                  "pytanie": "Zobowiązanie podatkowe podlega potrąceniu z wierzytelności podatnika wobec państwowej jednostki budżetowej",
                  "odpowiedzi": [
                    "wynika z usług wykonanych przez tego podatnika w trybie przepisów o zamówieniach publicznych",
                    "jeśli zwróci się z prośbą do kierownika państwowej jednostki budżetowej",
                    "nie ma takiej możliwości prawnej",
                    "pod warunkiem, że wierzytelność ta jest bezsporna, bezpośrednia i wymagalna",
                    "także jeśli wierzytelność została nabyta przez tego podatnika w drodze cesji"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Potrącenie zobowiązania podatkowego z wierzytelnością podatnika wymaga, aby wierzytelność była m.in. bezsporna, bezpośrednia i wymagalna."
                },
                {
                  "pytanie": "Spadkobiercy podatnika odpowiadają za zobowiązania podatkowe spadkodawcy:",
                  "odpowiedzi": [
                    "po dziale spadku odpowiadają jedynie do wysokości zobowiązania odpowiadającego ich udziału w spadku",
                    "w częściach ustalonych decyzją organu podatkowego orzekającą o odpowiedzialności podatkowej, jeżeli nie dokonano działu spadku",
                    "solidarnie do chwili działu spadku",
                    "w każdym przypadku jedynie do wysokości zobowiązania odpowiadającego ich udziałowi w spadku",
                    "w żadnym przypadku nie dotyczy ich odpowiedzialność podatkowa"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Do chwili działu spadku spadkobiercy odpowiadają za zobowiązania podatkowe spadkodawcy solidarnie; po dziale odpowiedzialność wiąże się z udziałem spadkowym."
                },
                {
                  "pytanie": "Państwowy dług publiczny obejmuje:",
                  "odpowiedzi": [
                    "wszystkie zobowiązania jednostek sektora finansów publicznych",
                    "in. zobowiązania udzielonych poręczeń Skarbu Państwa",
                    "zobowiązania z tytułu spłaty udzielonych przez Skarb Państwa kredytów i pożyczek",
                    "in. zobowiązania z tytułu przyjętych depozytów"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Państwowy dług publiczny obejmuje zobowiązania jednostek sektora finansów publicznych, w tym zobowiązania z tytułu przyjętych depozytów."
                },
                {
                  "pytanie": "Przez wartość nominalną zobowiązania zaliczonego do PDP rozumie się wartość nominalną:",
                  "odpowiedzi": [
                    "wyłącznie wyemitowanych państwowych papierów wartościowych",
                    "in. zaciągniętej pożyczki, kredytu lub innego zobowiązania",
                    "świadczenia głównego wraz z odsetkami",
                    "świadczenia należnego na koniec roku kalendarzowego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Wartość nominalna zobowiązania dłużnego oznacza wartość świadczenia głównego, m.in. z tytułu zaciągniętej pożyczki, kredytu lub innego zobowiązania."
                },
                {
                  "pytanie": "Kogo Minister Finansów informuje o nieprawidłowościach w zakresie przestrzegania zasady stanowiącej, że PDP/PKB <= 60%",
                  "odpowiedzi": [
                    "organy nadzoru nad działalnością j.s.f.p.",
                    "Komisję Nadzoru Finansowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Minister Finansów informuje właściwe organy nadzoru nad działalnością jednostek sektora finansów publicznych o nieprawidłowościach związanych z przestrzeganiem limitu długu."
                },
                {
                  "pytanie": "Kto opracowuje strategię zarządzania długiem Skarbu Państwa oraz oddziaływania na PDP?",
                  "odpowiedzi": [
                    "Skarb Państwa",
                    "Sejm i Senat",
                    "Minister Finansów",
                    "Rada Ministrów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Strategię zarządzania długiem Skarbu Państwa oraz oddziaływania na państwowy dług publiczny opracowuje Minister Finansów."
                },
                {
                  "pytanie": "Kto zatwierdza strategię zarządzania długiem Skarbu Państwa oraz oddziaływania na PDP?",
                  "odpowiedzi": [
                    "Minister Finansów",
                    "Rada Ministrów",
                    "Sejm i Senat",
                    "Trybunał Konstytucyjny"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Strategię zarządzania długiem zatwierdza Rada Ministrów po jej przygotowaniu przez Ministra Finansów."
                },
                {
                  "pytanie": "Jaki zakres czasowy obejmuje strategia zarządzania długiem Skarbu Państwa oraz oddziaływania na PDP?",
                  "odpowiedzi": [
                    "co najmniej rok budżetowy",
                    "rok budżetowy i cztery kolejne lata",
                    "cztery lata",
                    "pięć lat"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Strategia zarządzania długiem Skarbu Państwa oraz oddziaływania na państwowy dług publiczny obejmuje czteroletni horyzont czasowy."
                },
                {
                  "pytanie": "Rada Ministrów przedstawia Sejmowi ww. strategię wraz z:",
                  "odpowiedzi": [
                    "z uzasadnieniem ustawy budżetowej",
                    "z uzasadnieniem projektu budżetu państwa",
                    "z uzasadnieniem projektu uchwały budżetowej",
                    "z uzasadnieniem projektu ustawy budżetowej"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Rada Ministrów przedstawia strategię Sejmowi razem z uzasadnieniem projektu ustawy budżetowej."
                },
                {
                  "pytanie": "Poręczenia i gwarancje udzielane przez SP to:",
                  "odpowiedzi": [
                    "Poręczenia i gwarancje udzielane przez Ministra właściwego do sprawa Skarbu Państwa;",
                    "Poręczenia i gwarancje udzielane przez BGŻ;",
                    "Poręczenia i gwarancje udzielane przez Ministra właściwego ds. finansów publicznych."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poręczenia i gwarancje Skarbu Państwa są udzielane przez ministra właściwego do spraw finansów publicznych w zakresie przewidzianym ustawą."
                },
                {
                  "pytanie": "Udzielanie gwarancji i poręczeń finansowych przez państwo, w rozumieniu art. 216 Konstytucji RP następuje na zasadach i w trybie określonych:",
                  "odpowiedzi": [
                    "w zarządzeniach Ministra Finansów;",
                    "w rozporządzeniu Ministra Finansów;",
                    "w ustawie."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Konstytucja RP wymaga, aby zasady i tryb udzielania poręczeń oraz gwarancji finansowych przez państwo były określone w ustawie."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP, nie wolno udzielać gwarancji i poręczeń finansowych, w następstwie których PDP:",
                  "odpowiedzi": [
                    "przekroczy połowę wartości rocznego PKB;",
                    "przekroczy 3/5 wartości rocznego PKB;",
                    "przekroczy wartość rocznego PKB."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Konstytucja RP zakazuje udzielania gwarancji i poręczeń finansowych, jeżeli skutkowałoby to przekroczeniem przez państwowy dług publiczny 3/5 rocznego PKB."
                },
                {
                  "pytanie": "Poręczenia i gwarancje udzielane przez Radę Ministrów udzielane są w imieniu i na rachunek:",
                  "odpowiedzi": [
                    "Rady Ministrów;",
                    "Skarbu Państwa;",
                    "Jednostek samorządu terytorialnego."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Rada Ministrów, udzielając poręczeń i gwarancji, działa w imieniu i na rachunek Skarbu Państwa."
                },
                {
                  "pytanie": "Poręczenia udzielane przez SP to poręczenia:",
                  "odpowiedzi": [
                    "spłaty kredytów",
                    "wykonania zobowiązań wynikających z wszelkich skarbowych papierów wartościowych",
                    "wypłaty odszkodowań na podstawie ostatecznych decyzji administracyjnych oraz prawomocnych wyroków sądowych."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poręczenia Skarbu Państwa dotyczą m.in. spłaty kredytów."
                },
                {
                  "pytanie": "Gwarancje udzielane przez SP to gwarancje:",
                  "odpowiedzi": [
                    "spłaty pożyczek",
                    "wykonania zobowiązań wynikających z obligacji",
                    "wypłaty odszkodowania za zniszczone, uszkodzone lub skradzione eksponaty wystawowe."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Gwarancje Skarbu Państwa mogą dotyczyć wykonania zobowiązań wynikających z obligacji."
                },
                {
                  "pytanie": "Gwarancji w imieniu i na rachunek SP może udzielać:",
                  "odpowiedzi": [
                    "Rada Ministrów; Minister właściwy ds. finansów publicznych; Bank Gospodarstwa Krajowego;",
                    "Np. Prezes Rady Ministrów, Minister właściwy ds. Skarbu Państwa;",
                    "wyłącznie Bank Gospodarstwa Krajowego."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Ustawa przewiduje kompetencje Rady Ministrów, ministra właściwego do spraw finansów publicznych oraz Banku Gospodarstwa Krajowego w zakresie udzielania gwarancji w imieniu i na rachunek Skarbu Państwa."
                },
                {
                  "pytanie": "Bank Gospodarstwa Krajowego udziela poręczenia lub gwarancji, w imieniu i na rachunek Skarbu Państwa, powyżej kwoty stanowiącej równowartość 10 mln € i do równowartości 30 mln €, jeżeli:",
                  "odpowiedzi": [
                    "poręczenia lub gwarancje są udzielane do wysokości 90 % pozostającej do spłaty kwoty zobowiązania objętego poręczeniem lub gwarancją;",
                    "poręczenie lub gwarancja jest udzielone na cel związany z zaspokojeniem potrzeb publicznych i w granicach określonych przez ustawę o finansach publicznych;",
                    "poręczenie lub gwarancja są udzielane za wynagrodzeniem odpowiadającym wynagrodzeniu rynkowemu i poręczenie lub gwarancja są udzielane do wysokości 60 % pozostającej do spłaty kwoty zobowiązania objętego poręczeniem lub gwarancją wraz z 60 % należnych odsetek od tej kwoty i innych kosztów bezpośrednio związanych z tym zobowiązaniem."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "BGK może udzielać poręczeń lub gwarancji w określonym przedziale kwotowym przy spełnieniu ustawowych warunków rynkowego wynagrodzenia i limitu zaangażowania."
                },
                {
                  "pytanie": "Rada Ministrów udziela poręczenia lub gwarancji, jeżeli kwota poręczenia lub gwarancji przekracza:",
                  "odpowiedzi": [
                    "równowartość 30 mln €;",
                    "równowartość 30 mln $;",
                    "równowartość 30 mln zł."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Jeżeli kwota poręczenia lub gwarancji przekracza równowartość 30 mln euro, kompetencja należy do Rady Ministrów."
                },
                {
                  "pytanie": "Kwota poręczenia lub gwarancji Skarbu Państwa powinna przekraczać:",
                  "odpowiedzi": [
                    "10 mln €;",
                    "30 mln €;",
                    "10 mln zł."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "W tym zestawie progów ustawowych przyjęto, że kwota poręczenia lub gwarancji Skarbu Państwa powinna przekraczać równowartość 10 mln euro."
                },
                {
                  "pytanie": "W rozumieniu ustawy z dnia 8 maja 1997 r. poręczeń i gwarancji mogą udzielać niektóre osoby prawne np.:",
                  "odpowiedzi": [
                    "Bank;",
                    "Zakład ubezpieczeń;",
                    "Państwowa osoba prawna utworzona w drodze ustawy."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Ustawa o poręczeniach i gwarancjach dopuszcza, że uprawnienia do ich udzielania mogą mieć niektóre państwowe osoby prawne utworzone w drodze ustawy."
                },
                {
                  "pytanie": "Państwowe osoby prawne utworzone w drodze ustawy:",
                  "odpowiedzi": [
                    "Mogą być uprawnione na podstawie odrębnych przepisów do udzielania poręczeń lub gwarancji w ramach powierzonych im zadań publicznych;",
                    "Mogą być uprawnione na podstawie odrębnych przepisów do udzielania poręczeń lub gwarancji w zakresie działalności jednostek sektora finansów publicznych;",
                    "W każdym przypadku mogą udzielać poręczeń i gwarancji."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Państwowe osoby prawne utworzone ustawą mogą być uprawnione na podstawie odrębnych przepisów do udzielania poręczeń lub gwarancji w ramach powierzonych im zadań publicznych."
                },
                {
                  "pytanie": "Państwowa osoba prawna może udzielić poręczenia za zobowiązania:",
                  "odpowiedzi": [
                    "Co do zasady, w łącznej wysokości nie wyższej niż 60% wartości kapitału (określonego wg stanu na koniec roku obrotowego poprzedzającego udzielenie poręczenia lub gwarancji);",
                    "Co do zasady, do wysokości nie wyższej niż 30% wartości funduszu, gdy kwota poręczenia lub gwarancji udzielana jest za zobowiązania jednego podmiotu;",
                    "Co do zasady, w łącznej wysokości nie wyższej niż 20% wartości funduszu (określonego wg stanu na koniec roku obrotowego poprzedzającego udzielenie poręczenia lub gwarancji)."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z przepisami szczególnymi, państwowe osoby prawne mają ustawowy limit udzielania poręczeń i gwarancji powiązany z wartością ich kapitału własnego (właśnie do wysokości 60%)."
                },
                {
                  "pytanie": "Czy państwowa osoba prawna utworzona w drodze ustawy może udzielić poręczenia za zobowiązania podmiotu przekraczające 60% jej kapitału własnego?",
                  "odpowiedzi": [
                    "Nie, ustawowy nieprzekraczany próg wynosi 60% wartości kapitałów własnych w/w państwowej osoby prawnej;",
                    "Tak, za zgodą ministra właściwego ds. finansów publicznych;",
                    "Tak, za zgodą Rady Ministrów, ministra właściwego ds. finansów publicznych lub Banku Gospodarstwa Krajowego."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Przepisy dopuszczają wyjątek od sztywnego limitu 60%, jednak wymaga to bezwzględnej zgody Ministra Finansów."
                },
                {
                  "pytanie": "Jakie znaczenia ma forma prawna i struktura własności podmiotu ubiegającego się o udzielenie poręczenia lub gwarancji przez SP?",
                  "odpowiedzi": [
                    "o uzyskanie poręczenia lub gwarancji mogą ubiegać się podmioty będące państwową osobą prawną utworzoną na podstawie ustawy, w której połowa kapitałów własnych podmiotu stanowi własność SP;",
                    "o uzyskanie poręczenia lub gwarancji mogą ubiegać się podmioty bez względu na formę prawną oraz strukturę własności",
                    "o uzyskanie poręczenia lub gwarancji mogą ubiegać się podmioty o określonej w ustawie formie prawnej oraz strukturze własności."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Skarb Państwa może zabezpieczać zobowiązania różnych podmiotów rynkowych, o ile spełniają one kryteria zdolności finansowej i celowości wydatków."
                },
                {
                  "pytanie": "W przypadku ubiegania się o poręczenie/gwarancję udzielane przez Radę Ministrów, wniosek o udzielenie takiego poręczenia/gwarancji należy kierować do:",
                  "odpowiedzi": [
                    "Rady Ministrów;",
                    "Banku Gospodarstwa Krajowego;",
                    "Ministra Finansów."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Choć ostateczną decyzję podejmuje cała Rada Ministrów, to Minister Finansów jest organem operacyjnie odpowiedzialnym za obsługę, analizę i przyjmowanie wniosków."
                },
                {
                  "pytanie": "Poręczenia i gwarancje (wskaż twierdzenie w całości prawidłowe):",
                  "odpowiedzi": [
                    "są terminowe, udzielane do kwoty z góry oznaczonej (co do zasady)",
                    "wyjątkowo, gdy udzielane są międzynarodowej instytucji finansowej, której RP jest członkiem lub z którą podpisała umowę o współpracy nie muszą być udzielane do kwoty z góry oznaczonej, przy czym, to Rada Ministrów, na wniosek ministra właściwego do spraw finansów publicznych, może odstąpić od tego wymogu;",
                    "odpowiedź a) i b) jest właściwa."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poręczenia mają charakter terminowy i kwotowy (a), ale ustawa przewiduje wyjątek dla międzynarodowych instytucji finansowych, gdzie za zgodą RM można odstąpić od sztywnego limitu kwotowego (b)."
                },
                {
                  "pytanie": "Wskaż poręczenia i gwarancje zwolnione z opłaty prowizyjnej:",
                  "odpowiedzi": [
                    "zasilenie funduszy utworzonych w BGK, jeżeli środki przeznaczone na spłatę kredytu pochodzą ze źródeł innych niż budżet państwa, z wyłączeniem środków budżetu państwa, które zostały wydatkowane na dopłaty do kredytu objętego preferencyjnym oprocentowaniem, wspieranie eksportu polskich towarów i usług w ramach realizacji programów rządowych;",
                    "wspieranie importu polskich towarów i usług w ramach realizacji programów rządowych;",
                    "odpowiedź a) i b) jest właściwa."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Jest to dokładne brzmienie jednego z ustawowych zwolnień o charakterze podmiotowo-przedmiotowym w odniesieniu do funduszy obsługiwanych przez BGK."
                },
                {
                  "pytanie": "Co do zasady, skuteczność poręczenia lub gwarancji jest uzależniona od:",
                  "odpowiedzi": [
                    "struktury własności podmiotu, któremu udzielane jest poręczenie lub gwarancja;",
                    "wniesienia opłaty prowizyjnej od poręczenia lub gwarancji",
                    "formy prawnej podmiotu, któremu udzielane jest poręczenie lub gwarancja."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Udzielenie poręczenia przez Skarb Państwa staje się prawnie skuteczne dopiero po uiszczeniu należnej opłaty prowizyjnej przez beneficjenta."
                },
                {
                  "pytanie": "Po dokonaniu analizy finansowej przedsięwzięcia oraz analizy sytuacji ekonomiczno - finansowej podmiotu „A” stwierdzono, że podmiot „A”, którego zobowiązania mają być objęte gwarancją, nie będzie w stanie wykonać tych zobowiązań. W takiej sytuacji:",
                  "odpowiedzi": [
                    "Nie udziela się gwarancji;",
                    "Udziela się gwarancji do maksymalnej wysokości 60% kapitałów (funduszy) własnych podmiotu „A”;",
                    "Udziela się gwarancji do maksymalnej wysokości 20% kapitałów (funduszy) własnych podmiotu „A”."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Negatywna ocena wiarygodności finansowej dłużnika i ryzyka niewypłacalności bezwzględnie obliguje organy publiczne do odmowy udzielenia wsparcia (ochrona środków publicznych)."
                },
                {
                  "pytanie": "Opłata prowizyjna od poręczenia lub gwarancji jest wpłacana na rachunek:",
                  "odpowiedzi": [
                    "w NBP - na rachunek rezerw poręczeniowych i gwarancyjnych Skarbu Państwa;",
                    "w BGK - na rachunek rezerw poręczeniowych i gwarancyjnych Skarbu Państwa;",
                    "w MF - na rachunek rezerw poręczeniowych i gwarancyjnych Skarbu Państwa."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Rachunek ten jest prowadzony dla Ministra Finansów właśnie w Banku Gospodarstwa Krajowego (BGK)."
                },
                {
                  "pytanie": "Kapitał własny spółki SP wynosi 100 mln zł. Maksymalna kwota udzielonych poręczeń wyniesie:",
                  "odpowiedzi": [
                    "60 mln zł na rzecz wszystkich podmiotów",
                    "20 mln zł na rzecz wszystkich podmiotów",
                    "20 mln na rzecz jednego podmiotu",
                    "żadna z odpowiedzi nie jest właściwa"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Spółka Skarbu Państwa (spółka prawa handlowego) – mimo że jej właścicielem jest państwo – działa na zasadach prawa prywatnego i jest wyłączona z sektora finansów publicznych oraz definicji \"państwowej osoby prawnej\" podlegającej tym publicznoprawnym limitom."
                },
                {
                  "pytanie": "W państwowej osobie prawnej kapitał własny wynosi 200 mln zł. Wskaż właściwy wariant udzielenia poręczeń 3 podmiotom:",
                  "odpowiedzi": [
                    "występuje brak możliwości udzielenia poręczeń",
                    "60% kapitału własnego na rzecz każdego podmiotu",
                    "max po 40 mln na rzecz każdego podmiotu",
                    "po max 50 mln na rzecz każdego podmiotu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Łączny limit poręczeń wynosi 60% z 200 mln zł, czyli maksymalnie 120 mln zł. Dzieląc tę kwotę równomiernie na 3 podmioty, otrzymujemy dokładnie maks. 40 mln zł na każdy z nich."
                },
                {
                  "pytanie": "Równowartość udzielonej gwarancji wyniosła 10 000 000,00 zł (1€=4,20 zł). kto udziela gwarancji?",
                  "odpowiedzi": [
                    "Bank Gospodarstwa Krajowego",
                    "Minister Finansów",
                    "Rada Ministrów",
                    "występuje brak możliwości udzielenia gwarancji"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Ustawa nakłada minimalne progi kwotowe dla poszczególnych rodzajów procedur gwarancyjnych Skarbu Państwa (często wyrażone w milionach euro) i brak doprecyzowania celu lub niska kwota wyklucza standardowy tryb."
                },
                {
                  "pytanie": "Wasza grupa stworzyła spółkę prawa handlowego. Chcąc uzyskać od SP gwarancję spłaty kredytu o równowartości 11 mln €:",
                  "odpowiedzi": [
                    "Wasz kapitał własny musi wynosić co najmniej 100 mln zł",
                    "musicie przekształcić się w spółkę cywilną",
                    "możecie złożyć wniosek o udzielenie gwarancji do MF",
                    "możecie ubiegać się o gwarancję wyłącznie spłaty pożyczki"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Każdy uprawniony podmiot komercyjny wnioskuje o gwarancje Skarbu Państwa za pośrednictwem Ministra Finansów (MF)."
                },
                {
                  "pytanie": "MF udzielił poręczenia wykonania zobowiązań wynikających z bonów skarbowych w wysokości 42 mln zł (4,2 zł/€)",
                  "odpowiedzi": [
                    "prawda",
                    "fałsz"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Bony skarbowe to dłużne papiery wartościowe emitowane bezpośrednio przez Skarb Państwa (reprezentowany przez MF). Państwo jest tu głównym dłużnikiem, a podmiot nie może poręczać swojego własnego długu pierwotnego."
                },
                {
                  "pytanie": "Kwota udzielonego poręczenia wynosić ma 30 000 000,00 mln €. Który organ udzieli poręczenia?",
                  "odpowiedzi": [
                    "Rada Ministrów",
                    "tylko Minister Finansów",
                    "tylko BGK",
                    "BGK albo MF (gdyż brakuje niektórych danych)"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Kompetencja zależy od tego, czy poręczenie pochodzi z programu rządowego (wtedy często dystrybuuje je BGK), czy jest to klasyczne poręczenie systemowe (MF/RM)."
                },
                {
                  "pytanie": "Łączną kwotę, do wielkości której mogą być udzielane przez Skarb Państwa poręczenia i gwarancje, określono w:",
                  "odpowiedzi": [
                    "ustawie budżetowej",
                    "ustawie o poręczeniach i gwarancjach z 1998 r.",
                    "ustawie o finansach publicznych z 2009 r.",
                    "Konstytucji RP (max 60% PKB)"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Ustawa budżetowa na dany rok określa limity dłużne oraz maksymalne kwoty poręczeń i gwarancji, jakie państwo może wydać w danym roku."
                },
                {
                  "pytanie": "Bank Gospodarstwa Krajowego (BGK) udzielił poręczenia zabezpieczenia eksponatów wystawowych na kwotę 3 mln zł (4,2 zł/€):",
                  "odpowiedzi": [
                    "prawda",
                    "fałsz"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Gwarancje i poręczenia za eksponaty wystawowe leżą w wyłącznej kompetencji Rady Ministrów (na wniosek Ministra Kultury), a nie BGK (por. pytanie 70)."
                },
                {
                  "pytanie": "Poręczeń i gwarancji spłaty kredytów nie udziela się:",
                  "odpowiedzi": [
                    "Np. Kredytobiorcom;",
                    "Np. bankom, jeżeli taki bank udzielił kredytodawcy poręczenia lub gwarancji za kredytobiorcę;",
                    "Np. międzynarodowym instytucjom finansowym, jeżeli taka instytucja udzieliła kredytodawcy poręczenia lub gwarancji za kredytobiorcę oraz kredytodawcom."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poręczenia i gwarancji udziela się kredytodawcy (bankowi finansującemu), zabezpieczając jedynie spłatę długu, który zaciągnął kredytobiorca. Beneficjentem gwarancji jest bank udzielający kredytu."
                },
                {
                  "pytanie": "Poręczenia i gwarancje spłaty kredytów udzielane przez RM lub MF, co do zasady, mogą być udzielane:",
                  "odpowiedzi": [
                    "do wysokości 50 % pozostającej do spłaty kwoty kredytu objętego poręczeniem lub gwarancją wraz z 50 % należnych odsetek od tej kwoty i innych kosztów bezpośrednio związanych z tym kredytem;",
                    "do wysokości 60 % pozostającej do spłaty kwoty kredytu objętego poręczeniem lub gwarancją wraz z 60 % należnych odsetek od tej kwoty i innych kosztów bezpośrednio związanych z tym kredytem;",
                    "do wysokości 90 % pozostającej do spłaty kwoty kredytu objętego poręczeniem lub gwarancją wraz z 90 % należnych odsetek od tej kwoty i innych kosztów bezpośrednio związanych z tym kredytem."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Ogólna zasada ustawowa ogranicza standardowe zaangażowanie Skarbu Państwa do 50% kwoty głównej kredytu wraz z odsetkami, aby bank komercyjny również ponosił część ryzyka."
                },
                {
                  "pytanie": "Poręczenia i gwarancje wykonania zobowiązań wynikających z obligacji udziela:",
                  "odpowiedzi": [
                    "Np. Rada Ministrów, na wniosek ministra właściwego do spraw finansów publicznych oraz minister właściwy do spraw finansów publicznych;",
                    "NBP oraz Rada Polityki Pieniężnej;",
                    "Prezes Rady Ministrów oraz Prezydent RP."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Są to organy reprezentujące państwo w zakresie zaciągania i gwarantowania długu publicznego w randze obligacji."
                },
                {
                  "pytanie": "Poręczenia wypłaty odszkodowania za zniszczone, uszkodzone lub skradzione eksponaty wystawowe może udzielić:",
                  "odpowiedzi": [
                    "Minister właściwy do spraw kultury i ochrony dziedzictwa narodowego na wniosek Rady Ministrów;",
                    "Bank Gospodarstwa Krajowego;",
                    "Rada Ministrów na wniosek ministra właściwego do spraw kultury i ochrony dziedzictwa narodowego."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Jest to tzw. gwarancja rządowa dla wystaw narodowych i międzynarodowych o dużym znaczeniu kulturowym."
                },
                {
                  "pytanie": "Poręczenia wypłaty odszkodowania za zniszczone, uszkodzone lub skradzione eksponaty wystawowe można udzielić:",
                  "odpowiedzi": [
                    "Organizatorowi wystawy;",
                    "Rezydentom;",
                    "Nierezydentom."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Często eksponaty są wypożyczane od zagranicznych muzeów lub kolekcji prywatnych (nierezydentów), stąd zabezpieczenie kierowane jest bezpośrednio do nich jako właścicieli."
                },
                {
                  "pytanie": "Poręczenia wypłaty odszkodowania z tytułu zniszczenia, uszkodzenia lub kradzieży nieubezpieczonych eksponatów, których właścicielami lub uprawnionymi posiadaczami są te osoby, udziela się, jeżeli:",
                  "odpowiedzi": [
                    "eksponaty te składają się na wystawę artystyczną, organizowaną w Rzeczypospolitej Polskiej a łączna wartość eksponatów przekracza równowartość 500 tys. €;",
                    "łączna wartość eksponatów przekracza równowartość 10 mln €;",
                    "eksponaty te składają się na wystawę artystyczną organizowaną na terytorium któregokolwiek państwa członkowskiego UE."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przepisy precyzują minimalny próg wartości (500 tys. euro), od którego państwo zgadza się objąć wystawę darmowym lub uproszczonym poręczeniem publicznym."
                },
                {
                  "pytanie": "Zasób majątkowy Skarbu Państwa:",
                  "odpowiedzi": [
                    "środki uzyskane ze zbycia akcji (udziałów) składających się na zasób mogą być przeznaczone jedynie na zaspokojenie roszczeń z tytułu poręczeń i gwarancji udzielonych przez Radę Ministrów",
                    "stanowią środki zgromadzone na rachunkach bankowych wszystkich jednostek sektora finansów publicznych;",
                    "przeznaczony jest m.in. na zaspokojenie roszczeń z tytułu poręczeń i gwarancji udzielanych przez Skarb Państwa."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Potwierdza to wprost fragment książki: „zasady tworzenia zasobu majątkowego Skarbu Państwa z udziałów (akcji) w spółkach (...) na zaspokojenie roszczeń z tytułu poręczeń i gwarancji udzielanych przez Skarb Państwa”."
                },
                {
                  "pytanie": "Rachunek rezerw poręczeniowych i gwarancyjnych SP:",
                  "odpowiedzi": [
                    "Otwierany jest przez ministra właściwego do spraw finansów publicznych w Banku Gospodarstwa Krajowego.",
                    "Otwierany jest przez Radę Ministrów w Banku Gospodarstwa Krajowego.",
                    "Otwierany jest przez ministra właściwego do spraw finansów publicznych w NBP."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z systemem finansowym obsługę długu i funduszy gwarancyjnych Skarbu Państwa MF powierza państwowemu bankowi BGK."
                },
                {
                  "pytanie": "Na rachunku rezerw poręczeniowych i gwarancyjnych gromadzi się:",
                  "odpowiedzi": [
                    "odsetki z tytułu oprocentowania środków zgromadzonych na tym rachunku oraz opłaty prowizyjne od poręczeń i gwarancji",
                    "środki pochodzące z przychodów z ze sprzedaży skarbowych papierów wartościowych w roku poprzednim;",
                    "odpowiedź a) i b) jest właściwa."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Są to naturalne, ustawowe źródła zasilania tego funduszu celowego (prowizje od podmiotów oraz zyski z oprocentowania wolnego kapitału)."
                },
                {
                  "pytanie": "Wskaż twierdzenie prawdziwe: Środki gromadzone na rachunku rezerw poręczeniowych i gwarancyjnych:",
                  "odpowiedzi": [
                    "są przeznaczone na wykonywanie zobowiązań z tytułu poręczeń lub gwarancji udzielonych przez Skarb Państwa oraz są przeznaczane na pokrycie kosztów dochodzenia wierzytelności SP powstałych z tytułu wykonania umowy poręczenia lub gwarancji;",
                    "mogą być wykorzystywane na sfinansowanie potrzeb pożyczkowych budżetu państwa oraz w związku z zarządzaniem długiem Skarbu Państwa, przy czym podlegają one zwrotowi w wysokości i terminie umożliwiających ich przeznaczenie na cele ustawowe;",
                    "odpowiedź a) i b) jest właściwa."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Środki te służą pokrywaniu roszczeń wierzycieli oraz kosztów windykacji (a), ale ustawa pozwala także na ich czasowe, płynnościowe wykorzystanie na finansowanie potrzeb pożyczkowych państwa pod warunkiem ich terminowego zwrotu (b)."
                },
                {
                  "pytanie": "Łączną kwotę, do wysokości której mogą być udzielane przez Skarb Państwa poręczenia i gwarancje w 2021 r., określa:",
                  "odpowiedzi": [
                    "ustawa z dnia 8 maja 1997 r. o poręczeniach i gwarancjach udzielanych przez Skarb Państwa oraz niektóre osoby prawne;",
                    "ustawa budżetowa na 2021 r.;",
                    "ustawa z dnia 27 sierpnia 2009 r. o finansach publicznych."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Każda roczna ustawa budżetowa sztywno określa limit kwotowy dla poręczeń na dany rok budżetowy."
                },
                {
                  "pytanie": "W toku postępowania dotyczącego wierzytelności SP z tytułu wykonania umowy poręczenia lub gwarancji:",
                  "odpowiedzi": [
                    "Minister właściwy do spraw finansów publicznych, w sytuacji, gdy spełnione zostanie świadczenie z tytułu udzielonego poręczenia lub gwarancji Skarbu Państwa, ma obowiązek dochodzenia wypłaconych kwot od podmiotu, za którego zobowiązania udzielone zostało poręczenie lub gwarancja.",
                    "Minister właściwy do spraw finansów publicznych może sprzedać wierzytelność, zamienić wierzytelność w całości lub w części na akcje (udziały) dłużnika w spółce, rozłożyć wierzytelność w całości lub w części na raty (maksymalnie na 10 lat), zaś za zgodą Rady Ministrów może umorzyć wierzytelności w całości lub w części.",
                    "Minister właściwy do spraw finansów publicznych może, w celu windykacji ww. wierzytelności, wystawić wykonawczy tytuł egzekucyjny;",
                    "Każda z ww. odpowiedzi jest właściwa."
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Minister ma obowiązek dochodzenia zwrotu środków (a), szerokie uprawnienia restrukturyzacyjne, w tym zamianę na akcje lub rozłożenie na raty, a za zgodą RM – umorzenie (b), oraz może stosować uproszczone instrumenty egzekucyjne (c)."
                },
                {
                  "pytanie": "Zobowiązania z tytułu udzielonych przez Skarb Państwa poręczeń i gwarancji wykonuje:",
                  "odpowiedzi": [
                    "BGK",
                    "Minister właściwy do spraw finansów publicznych",
                    "Rada Ministrów."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "To Minister Finansów reprezentuje Skarb Państwa i technicznie wypłaca środki z rachunku rezerw w przypadku ziszczenia się ryzyka gwarancyjnego."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP nie wolno zaciągać pożyczek lub udzielać gwarancji i poręczeń finansowych, w następstwie których państwowy dług publiczny przekroczy:",
                  "odpowiedzi": [
                    "3/5 wartości rocznego produktu krajowego brutto.",
                    "3/5 wartości rocznego produktu krajowego netto.",
                    "3/5 wartości rocznego produktu narodowego brutto."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Tekst wprost cytuje art. 216 ust. 5 Konstytucji RP: „nie wolno zaciągać pożyczek lub udzielać gwarancji i poręczeń finansowych, w następstwie których państwowy dług publiczny przekroczy 3/5 wartości rocznego produktu krajowego brutto”."
                },
                {
                  "pytanie": "Klasyfikacja dochodów publicznych i wydatków publicznych dokonywana jest według:",
                  "odpowiedzi": [
                    "Części, działów i rozdziałów oraz paragrafów.",
                    "Części, działów oraz paragrafów.",
                    "Części, rozdziałów i paragrafów."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Choć fragment wymienia bezpośrednio „działy, rozdziały i paragrafy” , to z innych części tekstu wynika jednoznacznie istnienie „części budżetowych” (np. dysponenci części budżetowych), które są najwyższym szczeblem polskiej klasyfikacji budżetowej."
                },
                {
                  "pytanie": "Projekt budżetu państwa jest opiniowany przez:",
                  "odpowiedzi": [
                    "NIK.",
                    "NBP.",
                    "KRRiT."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Tekst stwierdza bezwzględnie: „Projekt budżetu państwa jest także opiniowany przez NBP; obowiązek przedłożenia takiej opinii wynika z ustawy (...) o Narodowym Banku Polskim”."
                },
                {
                  "pytanie": "Rada Ministrów przedkłada Sejmowi sprawozdanie z wykonania ustawy budżetowej wraz z informacją o stanie zadłużenia państwa:",
                  "odpowiedzi": [
                    "w ciągu 3 miesięcy od zakończenia roku budżetowego.",
                    "w ciągu 4 miesięcy od zakończenia roku budżetowego.",
                    "w ciągu 5 miesięcy od zakończenia roku budżetowego."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Potwierdzają to wielokrotnie źródła: „Rada Ministrów w ciągu 5 miesięcy od zakończenia roku budżetowego (do dnia 31 maja roku następnego) przedkłada Sejmowi sprawozdanie...”."
                },
                {
                  "pytanie": "Autopoprawki do projektu ustawy budżetowej wnosi:",
                  "odpowiedzi": [
                    "Minister Finansów.",
                    "Rada Ministrów.",
                    "Prezes Rady Ministrów."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Ponieważ wyłączność inicjatywy ustawodawczej w zakresie ustawy budżetowej przysługuje wyłącznie Radzie Ministrów jako całemu organowi, to również ten organ jako jedyny posiada prawo wnoszenia oficjalnych poprawek rządowych (autopoprawek) do własnego projektu przed jego uchwaleniem."
                },
                {
                  "pytanie": "W budżecie państwa najwyższym szczeblem klasyfikacji są:",
                  "odpowiedzi": [
                    "Części.",
                    "Działy.",
                    "Rozdziały"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Potwierdza to struktura zarządzania środkami, gdzie najwyższy poziom stanowią dysponenci „części budżetowych” (np. konkretne ministerstwa lub urzędy centralne)."
                },
                {
                  "pytanie": "Rada Ministrów przedstawia Sejmowi projekt ustawy budżetowej na rok następny:",
                  "odpowiedzi": [
                    "Do 30 września roku poprzedzającego rok budżetowy.",
                    "Do 30 października roku poprzedzającego rok budżetowy.",
                    "Do 30 listopada roku poprzedzającego rok budżetowy."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z tekstem: „Rada Ministrów uchwala projekt ustawy budżetowej i wraz z uzasadnieniem przedkłada go Sejmowi w terminie do dnia 30 września roku poprzedzającego rok budżetowy”."
                },
                {
                  "pytanie": "Procedurę uchwalania ustawy budżetowej kończy:",
                  "odpowiedzi": [
                    "Głosowanie w Sejmie nad poprawkami Senatu do projektu ustawy budżetowej.",
                    "Podpisanie jej przez Prezydenta RP.",
                    "Podpisanie jej przez Prezesa Rady Ministrów."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Tekst precyzuje: „Procedurę uchwalania ustawy budżetowej kończy podpisanie jej przez Prezydenta RP...”."
                },
                {
                  "pytanie": "Prezydent RP podpisuje ustawę budżetową albo ustawę o prowizorium budżetowym przedstawioną przez Marszałka Sejmu:",
                  "odpowiedzi": [
                    "30 dni",
                    "14 dni",
                    "7 dni."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Wprost z tekstu źródłowego: „Prezydent RP podpisuje ustawę budżetową albo ustawę o prowizorium budżetowym przedstawioną przez Marszałka Sejmu w ciągu 7 dni”."
                },
                {
                  "pytanie": "Kontrolę nad sektorem finansów publicznych w zakresie przestrzegania zasady stanowiącej, że PDP nie może przekroczyć 60 % wartości rocznego PKB sprawuje:",
                  "odpowiedzi": [
                    "Rada Ministrów.",
                    "Minister Finansów.",
                    "Prezes Rady Ministrów."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Potwierdza to tekst: „Kontrolę przestrzegania konstytucyjnego limitu państwowego długu publicznego sprawuje Minister Finansów”."
                },
                {
                  "pytanie": "Senat może uchwalić poprawki do ustawy budżetowej w ciągu:",
                  "odpowiedzi": [
                    "20 dni od dnia przekazania jej Senatowi.",
                    "21 dni od dnia przekazania jej Senatowi.",
                    "30 dni od dnia przekazania jej Senatowi."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Źródło podaje: „Senat może uchwalić poprawki do ustawy budżetowej w ciągu 20 dni od dnia przekazania ustawy do tej izby (art. 223 Konstytucji RP)”."
                },
                {
                  "pytanie": "Projekt budżetu państwa opracowuje:",
                  "odpowiedzi": [
                    "Minister Finansów.",
                    "Prezes Rady Ministrów.",
                    "Rada Ministrów."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Według tekstu: „Minister Finansów opracowuje następnie (...) projekt budżetu państwa” , a potem przekazuje go Radzie Ministrów do uchwalenia."
                },
                {
                  "pytanie": "Notę budżetową wydaje:",
                  "odpowiedzi": [
                    "Prezes Rady Ministrów.",
                    "Minister Finansów.",
                    "Rada Polityki Pieniężnej."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Materiały opracowuje się według formularzy określonych w tzw. nocie budżetowej , którą jako wytyczne dla dysponentów części wydaje Minister Finansów przygotowujący projekt budżetu."
                },
                {
                  "pytanie": "Prace w komisjach sejmowych nad projektem ustawy budżetowej rozpoczynają się:",
                  "odpowiedzi": [
                    "po pierwszym czytaniu projektu ustawy budżetowej na plenarnym posiedzeniu Sejmu.",
                    "po drugim czytaniu projektu ustawy budżetowej na plenarnym posiedzeniu Sejmu.",
                    "po wniesieniu poprawek do projektu ustawy budżetowej przez Senat."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Jest to standardowa procedura legislacyjna w Sejmie RP; po pierwszym czytaniu plenarnym projekt jest kierowany do Komisji Finansów Publicznych oraz komisji branżowych."
                },
                {
                  "pytanie": "Ustawa budżetowa jest publikowana:",
                  "odpowiedzi": [
                    "w Dzienniku Urzędowym Rzeczypospolitej Polskiej „Monitor Polski”.",
                    "w Dzienniku Ustaw.",
                    "w Dzienniku Urzędowym Unii Europejskiej."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Wszystkie ustawy powszechnie obowiązujące w Polsce są publikowane w Dzienniku Ustaw. W Monitorze Polskim publikuje się jedynie akty wewnętrzne lub plany, takie jak Wieloletni Plan Finansowy Państwa czy obwieszczenia."
                },
                {
                  "pytanie": "Kwotę PDP i jego relację do PKB ogłasza?",
                  "odpowiedzi": [
                    "Rada Ministrów",
                    "Minister Finansów",
                    "Prezes Rady Ministrów",
                    "Komisja Finansów Publicznych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Wynika wprost z tekstu: „Minister Finansów ogłasza w Monitorze Polskim (...) kwotę i relację do produktu krajowego brutto: państwowego długu publicznego...”."
                },
                {
                  "pytanie": "Relację niewymagalnych zobowiązań z tytułu poręczeń i gwarancji udzielonych przez jsfp do PKB ogłasza:",
                  "odpowiedzi": [
                    "nikt nie ogłasza",
                    "ogłasza Minister Sprawiedliwości",
                    "ogłasza Rada Ministrów",
                    "ogłasza aktualnie Minister Tadeusz Kościński"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zwróćmy uwagę na precyzję tekstu: Minister Finansów ogłasza kwotę i relację do PKB dla długu SP i PDP. Natomiast w przypadku jednostek sektora finansów publicznych (jsfp) ogłasza wyłącznie samą kwotę niewymagalnych zobowiązań, a nie ich relację do PKB. Stąd relacji tej nikt nie ogłasza."
                },
                {
                  "pytanie": "Minister Finansów ogłasza kwotę i relację do PKB długu Skarbu Państwa:",
                  "odpowiedzi": [
                    "wg stanu na 30 września danego roku sprawozdawczego",
                    "wg stanu na 31 maja kolejnego roku budżetowego",
                    "wg stanu na koniec roku budżetowego",
                    "MF nie ogłasza tej relacji, ogłasza tylko relację długu jst do PKB"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Tekst wprost wskazuje: „według stanu na koniec roku budżetowego” , natomiast samo ogłoszenie (techniczna publikacja) następuje później – do 31 maja roku następnego."
                },
                {
                  "pytanie": "Miejsce publikacji obwieszczenia MF to:",
                  "odpowiedzi": [
                    "Dziennik Urzędowy ministra Finansów „Monitor Finansowy”",
                    "Dziennik Ustaw",
                    "Ustawa budżetowa",
                    "Dziennik Urzędowy Rzeczypospolitej Polskiej „Monitor Polski”"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Tekst podaje literalnie: „Minister Finansów ogłasza w Monitorze Polskim następujące dane...”."
                },
                {
                  "pytanie": "Wskaż twierdzenie prawdziwe:",
                  "odpowiedzi": [
                    "dług SP obejmuje zadłużenie PDP",
                    "PDP jest zakresowo szerszy jak dług SP",
                    "PDP jest większy od EDP",
                    "dług SP obejmuje zobowiązania z tytułu udzielonych poręczeń SP"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Potwierdza to rozróżnienie zawarte w tekście: „długu Skarbu Państwa, który ogranicza się do długu państwowego oraz państwowego długu publicznego – czyli długu wszystkich jednostek sektora finansów publicznych”. Ponieważ PDP obejmuje cały sektor, jest pojęciem szerszym."
                },
                {
                  "pytanie": "Poręczenia i gwarancje SP:",
                  "odpowiedzi": [
                    "obejmują zobowiązania z tytułu udzielonych kredytów i pożyczek",
                    "są częścią poręczeń i gwarancji udzielanych przez jsfp",
                    "stanowią zobowiązania wymagalne",
                    "stanowią dług realny"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Skarb Państwa (oraz jego organy i jednostki budżetowe) stanowi integralną część sektora finansów publicznych (jsfp). Z tego względu poręczenia udzielane przez SP są podzbiorem (częścią) wszystkich poręczeń generowanych wewnątrz całego sektora."
                },
                {
                  "pytanie": "Do kiedy musi być opublikowane (w warunkach określonych w art. 38 ufp) obwieszczenie za 2020 r.?",
                  "odpowiedzi": [
                    "do końca 2020 r.",
                    "do końca maja 2021 r.",
                    "do 31 czerwca 2021 r.",
                    "do 31 maja 2022 r."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z art. 38 ustawy o finansach publicznych (ufp), Minister Finansów ogłasza w drodze obwieszczenia relację państwowego długu publicznego do PKB w terminie do 31 maja roku następnego. Dla danych za rok 2020 termin ten upływa dokładnie 31 maja 2021 r.."
                },
                {
                  "pytanie": "Projekt WPFP sporządza:",
                  "odpowiedzi": [
                    "Rada Ministrów;",
                    "Prezes Rady Ministrów",
                    "Minister Finansów."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Ustawa nakłada na Ministra Finansów obowiązek przygotowania i przedstawienia Radzie Ministrów projektu Wieloletniego Planu Finansowego Państwa."
                },
                {
                  "pytanie": "Ministrowie przedkładają Ministrowi Finansów informacje o realizacji WPFP, w terminie:",
                  "odpowiedzi": [
                    "do dnia 15 kwietnia",
                    "do dnia 31 maja",
                    "do dnia 30 czerwca."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Wynika to bezpośrednio z obowiązków informacyjnych nałożonych na dysponentów części budżetowych w celu umożliwienia MF corocznej aktualizacji kroczącego planu wieloletniego."
                },
                {
                  "pytanie": "WPFP stanowi podstawę przygotowywania:",
                  "odpowiedzi": [
                    "ustawy budżetowej na kolejny rok budżetowy",
                    "projektu ustawy budżetowej na kolejny rok budżetowy",
                    "uchwały budżetowej jst na kolejny rok budżetowy."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Materiały źródłowe wprost wskazują, że: „Wieloletni Plan Finansowy Państwa stanowi podstawę przygotowywania projektu ustawy budżetowej na kolejny rok budżetowy”."
                },
                {
                  "pytanie": "WPFP uchwala:",
                  "odpowiedzi": [
                    "Sejm",
                    "Rada Ministrów",
                    "Minister Finansów."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "WPFP nie jest prawem powszechnie obowiązującym i nie uchwala go Sejm; przyjmuje formę uchwały Rady Ministrów."
                },
                {
                  "pytanie": "WPFP sporządzany jest w układzie:",
                  "odpowiedzi": [
                    "kasowym",
                    "zadaniowym",
                    "memoriałowym."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Regulacje ufp silnie wiążą WPFP z celami, miernikami oraz strukturą funkcji państwa, czyli z metodologią budżetowania zadaniowego."
                },
                {
                  "pytanie": "Minister Finansów przedstawia (wskaż odpowiedź w całości prawidłową):",
                  "odpowiedzi": [
                    "Prezesowi Rady Ministrów założenia budżetu państwa na rok następny, uwzględniające ustalenia oraz kierunki działań zawarte w WPFP;",
                    "Radzie Polityki Pieniężnej założenia WPFP na kolejne 4 lata budżetowe, uwzględniając ustalenia oraz kierunki działań zawarte w projekcie ustawy budżetowej;",
                    "Radzie Ministrów założenia projektu budżetu państwa na rok następny, uwzględniające ustalenia oraz kierunki działań zawarte w WPFP."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z art. 138 ust. 1 ufp, Minister Finansów przedstawia Radzie Ministrów założenia projektu budżetu, które muszą uwzględniać kierunki określone w WPFP."
                },
                {
                  "pytanie": "Program konwergencji zawiera:",
                  "odpowiedzi": [
                    "in.: główne cele polityki społecznej i gospodarczej oraz planowane działania i ich wpływ na poziom dochodów i wydatków sektora instytucji rządowych i samorządowych, w tym na długookresową stabilność finansów publicznych;",
                    "in.: planowaną wstępną kwotę wydatków obliczoną zgodnie ze stabilizującą regułą wydatkową, jak i zmiany w zakresie podejmowanych działań i celów, w stosunku do poprzedniego Programu Konwergencji oraz wstępną prognozę podstawowych wielkości makroekonomicznych wraz z założeniami stanowiącymi podstawę jej opracowania",
                    "odpowiedź a i b jest prawidłowa."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "WPFP zawiera w sobie Program Konwergencji , który zgodnie z rozporządzeniami unijnymi musi opisywać cele społeczne, stabilność fiskalną (a) oraz wstępne kwoty wydatków i prognozy makroekonomiczne (b)."
                },
                {
                  "pytanie": "Informacja o wykonaniu wydatków w układzie zadaniowym (wskaż odpowiedź w całości prawdziwą):",
                  "odpowiedzi": [
                    "Minister Finansów przedstawia ww. informację Radzie Ministrów oraz Prezydentowi RP w terminie do 30 kwietnia roku następnego wraz z rocznym sprawozdaniem z wykonania WPFP;",
                    "Rada Ministrów przedstawia ww. informację Sejmowi i Senatowi, w terminie do 30 kwietnia roku następnego wraz z rocznym sprawozdaniem z wykonania uchwały budżetowej;",
                    "Rada Ministrów przedstawia ww. informację Sejmowi oraz NIK, w terminie do dnia 31 maja roku następnego wraz z rocznym sprawozdaniem z wykonania ustawy budżetowej;"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Sprawozdanie z wykonania ustawy budżetowej wraz z informacją o wydatkach zadaniowych składa się w konstytucyjnym terminie 5 miesięcy od zakończenia roku (do 31 maja)."
                },
                {
                  "pytanie": "Szczegółowy sposób, tryb i terminy opracowania materiałów do opracowania WPFP określa:",
                  "odpowiedzi": [
                    "Rada Ministrów w drodze rozporządzenia;",
                    "Minister Finansów w drodze rozporządzenia;",
                    "Rada Ministrów w drodze uchwały."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Upoważnienie ustawowe z ufp wskazuje Ministra Finansów jako organ wydający to rozporządzenie wykonawcze (analogicznie do noty budżetowej)."
                },
                {
                  "pytanie": "Budżet środków europejskich jest:",
                  "odpowiedzi": [
                    "rocznym planem dochodów i podlegających refundacji wydatków przeznaczonych na realizację programów finansowanych z udziałem środków europejskich, ze szczególnym uwzględnieniem środków przeznaczonych na realizację projektów pomocy technicznej",
                    "rocznym planem dochodów i niepodlegających refundacji wydatków przeznaczonych na realizację programów finansowanych z udziałem środków europejskich, z wyłączeniem środków przeznaczonych na realizację projektów pomocy technicznej",
                    "rocznym planem dochodów i podlegających refundacji wydatków przeznaczonych na realizację programów finansowanych z udziałem środków europejskich, z wyłączeniem środków przeznaczonych na realizację projektów pomocy technicznej."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Środki przeznaczone na pomoc techniczną w programach europejskich są wyłączone z klasycznego budżetu środków europejskich i ujęte w ramach tradycyjnych części budżetu państwa."
                },
                {
                  "pytanie": "W budżecie środków europejskich ujmuje się:",
                  "odpowiedzi": [
                    "dochody z tytułu realizacji programów finansowanych z udziałem środków europejskich",
                    "wydatki na realizację programów finansowanych z udziałem środków europejskich w części podlegającej refundacji",
                    "zarówno a) jak i b)."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Struktura tego budżetu ujmuje komplementarnie strumień dochodowy (np. refundacje z UE) oraz wydatki na realizację programów."
                },
                {
                  "pytanie": "Wskaż twierdzenie prawdziwe:",
                  "odpowiedzi": [
                    "różnica pomiędzy dochodami a wydatkami budżetu środków europejskich stanowi odpowiednio nadwyżkę budżetu środków europejskich albo deficyt budżetu środków europejskich",
                    "deficyt budżetu środków europejskich albo nadwyżka środków europejskich są wliczane do, odpowiednio, deficytu albo nadwyżki budżetu państwa",
                    "deficyt budżetu środków europejskich nie jest finansowany w ramach potrzeb pożyczkowych budżetu państwa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Jest to bezpośrednie, matematyczno-prawne ujęcie wyniku finansowego tego wyodrębnionego planu finansowego."
                },
                {
                  "pytanie": "Dochody budżetu środków europejskich ujmuje się w ustawie budżetowej według:",
                  "odpowiedzi": [
                    "części klasyfikacji budżetowej;",
                    "paragrafów klasyfikacji budżetowej;",
                    "programów finansowanych z udziałem środków europejskich;",
                    "odpowiedź a) oraz c) jest właściwa."
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Zgodnie z art. 119 ufp, podział następuje zarówno według tradycyjnych części klasyfikacji budżetowej, jak i w układzie poszczególnych programów unijnych."
                },
                {
                  "pytanie": "Wydatki budżetu środków europejskich ujmuje się w ustawie budżetowej w podziale na:",
                  "odpowiedzi": [
                    "programy finansowane z udziałem środków europejskich w ramach części i działów klasyfikacji wydatków",
                    "części i działy klasyfikacji wydatków;",
                    "części, działy, rozdziały i paragrafy wydatków",
                    "odpowiedź a) oraz b) jest właściwa"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Wydatki te dzieli się tradycyjnie na części i działy klasyfikacji wydatków, z jednoczesnym, obowiązkowym przypisaniem ich do konkretnych programów operacyjnych."
                },
                {
                  "pytanie": "Czy na wydatki związane z realizacją programów finansowych z udziałem środków europejskich można tworzyć rezerwę celową?",
                  "odpowiedzi": [
                    "tak, przy czym w budżecie środków europejskich ujmuje się taką rezerwę celową w zakresie, w jakim wydatki te podlegają refundacji",
                    "tak, przy czym w budżecie środków europejskich ujmuje się taka rezerwę celową w zakresie, w jakim wydatki te nie podlegają refundacji",
                    "nie, na wydatki związane z realizacją programów finansowych z udziałem środków europejskich nie można tworzyć rezerwy celowej."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Rezerwy celowe mogą służyć zabezpieczeniu finansowania projektów unijnych w części, która docelowo zostanie zrefundowana przez Komisję Europejską."
                },
                {
                  "pytanie": "Do środków własnych Unii Europejskiej zalicza się m.in.:",
                  "odpowiedzi": [
                    "udział we wpływach z ceł, opłat rolnych i cukrowych;",
                    "środki obliczone na podstawie wartości rocznego dochodu narodowego brutto",
                    "wszystkie odpowiedzi są prawidłowe."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Budżet UE zasilany jest z tradycyjnych środków własnych, do których zalicza się cła oraz wpłaty państw członkowskich skalkulowane na podstawie ich Dochodu Narodowego Brutto (DNB)."
                },
                {
                  "pytanie": "1.1. Katalog możliwych naruszeń dyscypliny finansów publicznych zawarty w ustawie o ndfp jest:",
                  "odpowiedzi": [
                    "Katalogiem otwartym",
                    "Katalogiem zamkniętym",
                    "Katalogiem przykładowym."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "W prawie odpowiedzialności represyjnej obowiązuje zasada *nullum crimen sine lege*. Ustawa o odpowiedzialności za naruszenie dyscypliny finansów publicznych (uondfp) zawiera ściśle wyliczony, zamknięty katalog czynów będących czynem zabronionym."
                },
                {
                  "pytanie": "2.4. Dyscyplina finansów publicznych to:",
                  "odpowiedzi": [
                    "obowiązek przestrzegania określonych prawem reguł związanych z dysponowaniem środkami prywatnymi, a także środkami pochodzącymi z zasobów prywatnych, przekazanymi jednostkom spoza sektora finansów publicznych.",
                    "obowiązek przestrzegania określonych prawem reguł związanych z dysponowaniem środkami publicznymi, a także środkami pochodzącymi z zasobów publicznych, przekazanymi jednostkom spoza sektora finansów publicznych.",
                    "obowiązek przestrzegania określonych prawem reguł związanych z dysponowaniem środkami publicznymi, a także środkami pochodzącymi z zasobów prywatnych, przekazanymi jednostkom spoza sektora finansów publicznych."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Jest to klasyczna materialnoprawna definicja tego pojęcia, akcentująca publiczny charakter zasobów finansowych."
                },
                {
                  "pytanie": "Kara za naruszenie dyscypliny finansów publicznych nie jest:",
                  "odpowiedzi": [
                    "Upomnienie.",
                    "Nawiązka",
                    "Kara pieniężna",
                    "Zakaz pełnienia funkcji związanych z dysponowaniem środkami publicznymi."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Art. 31 uondfp zawiera zamknięty katalog kar: upomnienie, nagana, kara pieniężna oraz zakaz pełnienia funkcji. Nawiązka to środek o charakterze stricte karnym/sądowym, niewystępujący w dyscyplinie budżetowej."
                },
                {
                  "pytanie": "Rejestr ukaranych na podstawie naruszeń dyscypliny finansów publicznych (ustawy o ondfp) prowadzi:",
                  "odpowiedzi": [
                    "Główna Komisja Orzekająca",
                    "Minister Sprawiedliwości",
                    "Minister Finansów."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Organem odpowiedzialnym za prowadzenie centralnego rejestru ukaranych jest Główna Komisja Orzekająca (GKO) działająca przy Ministrze Finansów."
                },
                {
                  "pytanie": "Zatarcie ukarania może nastąpić:",
                  "odpowiedzi": [
                    "Wyłącznie na wniosek",
                    "Wyłącznie z urzędu",
                    "Na wniosek lub z urzędu."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Podstawowym trybem jest zatarcie z urzędu (z mocy prawa po upływie czasu), jednak ustawa przewiduje też nadzwyczajną procedurę zatarcia na wniosek (np. ułaskawieniową)."
                },
                {
                  "pytanie": "Karę zakazu pełnienia funkcji związanych z dysponowaniem środkami publicznymi wymierza się na okres:",
                  "odpowiedzi": [
                    "od roku do 5 lat",
                    "od 2 lat do 5 lat",
                    "od 5 miesięcy do roku."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Wynika bezpośrednio z art. 34 ust. 1 uondfp."
                },
                {
                  "pytanie": "Naruszeniem dyscypliny finansów publicznych jest:",
                  "odpowiedzi": [
                    "niesprawowanie kontroli zarządczej nad audytorem wewnętrznym;",
                    "niewykonanie w terminie czynności audytowych;",
                    "ani a), ani b) nie jest właściwa."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Ani uchybienia terminowe technicznych czynności audytora, ani brak nadzoru zarządczego nad konkretną osobą nie są wprost stypizowanymi czynami zabronionymi w uondfp (karalne jest np. całkowite niewdrożenie audytu lub zaniechanie kontroli zarządczej skutkujące szkodą, a nie same uchybienia formalne wewnątrz procedury)."
                },
                {
                  "pytanie": "Dyrektor Zespołu Szkół Ogólnokształcących w dniach 4-9 stycznia 2010 r. przeznaczył dochody uzyskiwane przez jednostkę z tytułu wpłat rodziców za posiłki wydawane w stołówce szkolnej na wydatki na artykuły żywnościowe. Dyrektor szkoły uznał, że zapewnienie dzieciom wyżywienia, za które rodzice uczniów wnieśli do kasy szkoły należne opłaty było oczywistym obowiązkiem szkoły, a na początku 2010 r. szkoła nie posiadała środków budżetowych i nie posiadała też środków żywnościowych w magazynie, zaś przejściowe wykorzystanie środków wpłaconych przez rodziców na zakup artykułów żywnościowych na wyżywienie uczniów w pełni realizowało cel, dla którego rodzice dokonali wpłat. W takiej sytuacji:",
                  "odpowiedzi": [
                    "naruszono art. 11 ust. 1 u.f.p. w związku z czym uzasadniona jest o.n.df.p. z art. 7 u.o.n.d.f.p.",
                    "naruszono art. 7 u.o.n.d.f.p., ale sprawa powinna być umorzona 78 ust. 1 pkt 7 u.o.n.d.f.p. w zw. z art. 28 ust. 1 u.o.n.d.f.p.",
                    "nie naruszono dyscypliny finansów publicznych."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Dyrektor formalnie złamał zasadę budżetowania brutto z art. 11 ufp (wykorzystał dochód zamiast go odprowadzić), co stanowi naruszenie dyscypliny. Jednak z uwagi na działanie w celu wyższej konieczności (karmienie dzieci) i brak realnej szkody ekonomicznej, sprawa podlega umorzeniu ze względu na znikomy stopień szkodliwości czynu dla finansów publicznych."
                },
                {
                  "pytanie": "Janowi wymierzono karę pieniężną za n.d.f.p. Jan wykonał karę 1 stycznia 2019 r. Po upływie miesiąca Jan złożył do Ministra Finansów wniosek o zatarcie ukarania, ale bez jakiegokolwiek uzasadnienia. Minister uzyskał negatywną opinię Głównego Rzecznika Dyscypliny Finansów Publicznych, ale mimo to zatarł ukaranie. W takiej sytuacji:",
                  "odpowiedzi": [
                    "Działanie Ministra było niedopuszczalne. Opinia musi być pozytywna.",
                    "Działanie Ministra było uprawnione.",
                    "Działanie Ministra było niedopuszczalne, ponieważ nie minęły 2 lata od wykonania kary."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przy przedterminowym, nadzwyczajnym zatarciu ukarania na wniosek, przepisy prawa proceduralnego wymagają obligatoryjnego uzyskania pozytywnej opinii organu finansowego/rzecznika dyscypliny. Negatywna opinia stanowi prawną blokadę dla Ministra."
                },
                {
                  "pytanie": "21 maja 2020 r. komisja I instancji orzekła o o.n.d.f.p. przez Martynę C. i wymierzyła karę upomnienia. Martyna C. odwołała się od ww. orzeczenia, jednak GKO 12 grudnia 2020 r. utrzymała w mocy to rozstrzygnięcie. Kiedy nastąpi zatarcie ukarania?",
                  "odpowiedzi": [
                    "21 maja 2022 r.",
                    "12 grudnia 2022 r.",
                    "11 grudnia 2022 r."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zatarcie ukarania karą upomnienia następuje z mocy prawa po upływie 2 lat od dnia, w którym orzeczenie stało się prawomocne (czyli od wydania ostatecznego rozstrzygnięcia przez GKO w II instancji). 2 lata od 12.12.2020 to dokładnie 12.12.2022."
                },
                {
                  "pytanie": "Wieloletni Plan Finansowy Państwa:",
                  "odpowiedzi": [
                    "ustala górny limit przychodów z budżetu państwa;",
                    "obowiązuje przez 4 lata budżetowe (rok budżetowy i 3 kolejne lata);",
                    "stanowi podstawę przygotowania projektu ustawy budżetowej."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Tożsamość pojęciowa z pytaniem nr 104."
                },
                {
                  "pytanie": "Rada Ministrów przedstawia Sejmowi projekt ustawy budżetowej na rok następny:",
                  "odpowiedzi": [
                    "do 30 kwietnia roku poprzedzającego rok budżetowy:",
                    "do 31 maja roku poprzedzającego rok budżetowy",
                    "do 30 września roku poprzedzającego rok budżetowy."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Jest to sztywny termin wynikający z art. 141 ufp oraz art. 222 Konstytucji RP."
                },
                {
                  "pytanie": "W razie prawomocnego skazania za przestępstwo, będące równocześnie naruszeniem dyscypliny finansów publicznych, wszczęte postępowanie o n.d.f.p.:",
                  "odpowiedzi": [
                    "podlega zawieszeniu;",
                    "jest prowadzone, gdyż postępowanie to jest niezależne od innych postępowań;",
                    "podlega umorzeniu."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z ustawową zasadą eliminacji podwójnego karania za ten sam czyn (zasada *ne bis in idem*), prawomocny wyrok skazujący sądu karnego obliguje komisję orzekającą do umorzenia postępowania o naruszenie dyscypliny finansów publicznych."
                },
                {
                  "pytanie": "Zgodnie z konstytucją RP, nie wolno udzielać gwarancji i poręczeń finansowych, w następstwie których PDP:",
                  "odpowiedzi": [
                    "przekroczy połowę PKB;",
                    "przekroczy 3/5 wartości rocznego PKB;",
                    "przekroczy wartość rocznego PKB."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Jest to powtórzenie konstytucyjnego limitu długu publicznego: nie wolno udzielać gwarancji i poręczeń finansowych, jeżeli państwowy dług publiczny przekroczyłby 3/5 wartości rocznego PKB."
                },
                {
                  "pytanie": "Zatarcie ukarania następuje:",
                  "odpowiedzi": [
                    "W razie odstąpienia od wymierzenia kary zatarcie ukarania z mocy prawa następuje po upływie 2 lat od dnia wydania orzeczenia.",
                    "Np. na wniosek Ministra Finansów zaopiniowany przez Prezesa RM;",
                    "Z mocy prawa, jeżeli od dnia wykonania kary lub przedawnienia jej wykonania upłynęły 2 lata"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Potwierdzenie ogólnego terminu zatarcia z mocy prawa dla standardowych kar dyscyplinarnych (upomnienie, nagana, kara pieniężna)."
                },
                {
                  "pytanie": "Łączną kwotę, do wysokości której mogą być udzielane przez Skarb Państwa poręczenia i gwarancje, określa:",
                  "odpowiedzi": [
                    "ustawa z dnia 8 maja 1997 r. o poręczeniach i gwarancjach udzielanych przez Skarb Państwa oraz niektóre osoby prawne;",
                    "ustawa budżetowa;",
                    "ustawa z dnia 27 sierpnia 2009 r. o finansach publicznych."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Maksymalny roczny limit kwotowy dla operacji poręczeniowych państwa określa się w załącznikach lub postanowieniach rocznej ustawy budżetowej."
                },
                {
                  "pytanie": "Zbiór ilościowych i jakościowych reguł fiskalnych, których głównym celem jest ochrona sektora finansów publicznych przed konsekwencjami naruszenia konstytucyjnego limitu zadłużenia to:",
                  "odpowiedzi": [
                    "procedury konwergencji:",
                    "tytuły dłużne;",
                    "procedury ostrożnościowe i sanacyjne."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Naruszenie progów relacji długu do PKB skutkuje uruchomieniem procedur ostrożnościowych i sanacyjnych opisanych w ufp."
                },
                {
                  "pytanie": "Główną jednostką klasyfikacji zadaniowej, grupującą wydatki jednego obszaru działalności państwa jest:",
                  "odpowiedzi": [
                    "funkcja",
                    "zadanie",
                    "podzadanie."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Najwyższym szczeblem w układzie zadaniowym grupującym wydatki są funkcje państwa (obecnie wyróżnia się ich 22)."
                },
                {
                  "pytanie": "Poręczeń i gwarancji w imieniu i na rachunek Skarbu Państwa może udzielać:",
                  "odpowiedzi": [
                    "Prezes Rady Ministrów;",
                    "bank komercyjny:",
                    "Bank Gospodarstwa Krajowego."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "BGK pełni unikalną rolę państwowego banku rozwoju, realizując programy rządowe i posiadając ustawowe umocowanie do operacyjnego wystawiania gwarancji w imieniu i na rachunek Skarbu Państwa."
                },
                {
                  "pytanie": "Dyscyplina finansów publicznych to:",
                  "odpowiedzi": [
                    "gałąź prawa finansowego, która całościowo reguluje problematykę odpowiedzialności za naruszenie dyscypliny finansów publicznych",
                    "czyn (działanie lub zaniechanie) osoby o statusie wyznaczonym w ustawie określony w prawie, zawiniony i szkodliwy dla finansów publicznych;",
                    "obowiązek przestrzegania określonych prawem reguł związanych z dysponowaniem środkami publicznymi, a także środkami pochodzącymi z zasobów publicznych, przekazanymi jednostkom spoza sektora finansów publicznych."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Powtórzenie pytania nr 119."
                },
                {
                  "pytanie": "Których kar ogłaszano najwięcej w sprawach o naruszenie dyscypliny finansów publicznych (w 2019 r.)?",
                  "odpowiedzi": [
                    "nagan;",
                    "kar pieniężnych;",
                    "upomnień."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Oficjalne statystyki GKO potwierdzają, że upomnienie, jako najłagodniejsza kara, jest najchętniej stosowane przez składy orzekające przy drobnych przewinieniach formalnych."
                },
                {
                  "pytanie": "Karą za naruszenie dyscypliny finansów publicznych jest:",
                  "odpowiedzi": [
                    "Zakaz pełnienia funkcji związanych z dysponowaniem środkami publicznymi na okres od roku do 5 lat;",
                    "Upomnienie orzekane w przypadku stwierdzenia, że stopień szkodliwości naruszenia dyscypliny finansów publicznych nie jest znaczny;",
                    "Odpowiedź a) i b) jest właściwa."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zestawia prawidłowo ramowe przesłanki wymiaru kary zakazu pełnienia funkcji (a) oraz upomnienia przy niskiej szkodliwości czynu (b)."
                },
                {
                  "pytanie": "Bon skarbowy:",
                  "odpowiedzi": [
                    "jest długoterminowym papierem wartościowym;",
                    "może być emitowany m.in. przez NBP w imieniu Ministra Finansów;",
                    "może być nabywany przez rezydentów, jak i przez nierezydentów."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Bony skarbowe to instrumenty krótkoterminowe (co wyklucza opcję a). Są emitowane na rynku krajowym, ale dostęp do ich zakupu mają bez przeszkód zarówno podmioty krajowe (rezydenci), jak i inwestorzy zagraniczni (nierezydenci)."
                },
                {
                  "pytanie": "Klasyfikacja dochodów publicznych w budżecie państwa dokonywana jest według następujących podziałek klasyfikacyjnych:",
                  "odpowiedzi": [
                    "części, działów, rozdziałów oraz paragrafów;",
                    "części, funkcji, zadań, podzadań i paragrafów;",
                    "funkcji, celów i kodów dochodów."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "To kompletny zestaw tradycyjnych podziałek klasyfikacji budżetowej stosowanych w polskiej gospodarce finansowej."
                },
                {
                  "pytanie": "Obligacja skarbowa:",
                  "odpowiedzi": [
                    "sprzedawana jest na rynku pierwotnym wyłącznie z dyskontem;",
                    "to papier wartościowy oferowany do sprzedaży w kraju lub za granica, oprocentowany w postaci dyskonta lub odsetek;",
                    "może być emitowana przez Ministra właściwego do spraw Skarbu Państwa."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Jest to klasyczna, ustawowa definicja obligacji skarbowej jako dłużnego instrumentu finansowego Skarbu Państwa. --- ### Sekcja III: Odpowiedzialność za Naruszenie Dyscypliny Finansów Publicznych (Pytania 118–127, 130, 132, 137–139, 144)"
                },
                {
                  "pytanie": "Senat może uchwalić poprawki do ustawy budżetowej w ciągu:",
                  "odpowiedzi": [
                    "21 dni od dnia przekazania jej Senatowi.",
                    "30 dni od dnia przekazania jej Senatowi.",
                    "20 dni od dnia przekazania jej Senatowi."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Wynika bezpośrednio z art. 223 Konstytucji RP."
                },
                {
                  "pytanie": "Pozytywną przesłanką odpowiedzialności dyscyplinarnej są:",
                  "odpowiedzi": [
                    "zawinienie i szkodliwość czynu dla finansów publicznych;",
                    "zdarzenie losowe i upływ terminu karalności czynu;",
                    "nieumyślność popełnienia czynu oraz nieświadomość."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Konstrukcja odpowiedzialności wymaga łącznego zaistnienia bezprawności, przypisywalnej winy (zawinienia) oraz materialnej szkodliwości zachowania dla finansów publicznych. --- ### Sekcja IV: Prawo Podatkowe i Zasady Ogólne (Pytania 141, 148–159, 160–172, 173–187, 188–199)"
                },
                {
                  "pytanie": "Wybierz właściwą odpowiedź:",
                  "odpowiedzi": [
                    "MF przedstawia Prezesowi RM strategie zarzadzania długiem Skarbu Państwa i oddziaływania na państwowy dług publiczny",
                    "MF przedstawia RM strategię zarządzania długiem Skarbu Państwa i oddziaływania na państwowy dług publiczny",
                    "Prezes RM przedstawia Sejmowi strategię zarządzania długiem Skarbu Państwa wraz z ustawą budżetowa."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Minister Finansów przygotowuje ten 4-letni dokument i przedstawia go Radzie Ministrów do zatwierdzenia."
                },
                {
                  "pytanie": "W przypadku, gdy wartość relacji kwoty państwowego długu publicznego do produktu krajowego brutto, wynosi 59,6 % uruchamiana jest:",
                  "odpowiedzi": [
                    "pierwsza procedura sanacyjna",
                    "druga procedura sanacyjna",
                    "trzecia procedura sanacyjna."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Relacja 59,6% mieści się w przedziale 55%–60% — zgodnie z prezentacją to procedura ostrożnościowa Nr 2 (druga). Procedura Nr 3 uruchamiana jest dopiero przy relacji ≥ 60% PKB."
                },
                {
                  "pytanie": "Rezerwa ogólna:",
                  "odpowiedzi": [
                    "tworzenie jej w ustawie budżetowej jest obligatoryjne;",
                    "w ustawie budżetowej na 2021 r. nie zaplanowano rezerwy ogólnej;",
                    "wysokość rezerwy ogólnej nie może być wyższa niż 3% PKB."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 140 ufp, utworzenie rezerwy ogólnej w budżecie państwa ma charakter bezwzględnie obowiązkowy (limit wynosi maksymalnie 0,2% wydatków). --- ### Sekcja II: Budżet Środków Europejskich i Instrumenty Finansowe (Pytania 111–117, 133, 136, 140, 142)"
                },
                {
                  "pytanie": "Jaka jest podstawowa funkcja progresywnej skali podatkowej?",
                  "odpowiedzi": [
                    "alokacyjna",
                    "redystrybucyjna",
                    "represyjna"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Skala progresywna (wyższa stawka dla wyższych dochodów) służy ponownemu podziałowi PKB w celu niwelowania nierówności społecznych, co stanowi istotę funkcji redystrybucyjnej."
                },
                {
                  "pytanie": "w drodze dziedziczenia, zapisu zwykłego, zapisu windykacyjnego, dalszego zapisu, polecenia testamentowego, darowizny lub polecenia darczyńcy przez osoby zaliczane do I grupy podatkowej,(...) - nie wlicza się do podstawy opodatkowania ich czystej wartości do łącznej wysokości nieprzekraczającej 110 m2 powierzchni użytkowej budynku lub lokalu. W przypadku nabycia części (udziału) budynku mieszkalnego lub lokalu albo udziału w spółdzielczym prawie do budynku mieszkalnego lub lokalu ulga przysługuje stosownie do wielkości udziału. Niniejszy przepis przewiduje:",
                  "odpowiedzi": [
                    "Zwolnienie przedmiotowe",
                    "Zwolnienie podmiotowe",
                    "ulgę"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Przepis modyfikuje podstawę opodatkowania w konkretnej sytuacji, stanowiąc w nomenklaturze podatkowej klasyczną *ulgę*, a nie całkowite zwolnienie podmiotowe bądź przedmiotowe."
                },
                {
                  "pytanie": "Art. 1 ustawy o podatku dochodowym od osób fizycznych brzmi: Ustawa reguluje opodatkowanie podatkiem dochodowym dochodów osób fizycznych. Jakie elementy konstrukcji podatku przewiduje ten przepis:",
                  "odpowiedzi": [
                    "podmiot",
                    "przedmiot",
                    "podmiot i przedmiot"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Wskazuje na podmiot bierny (osoby fizyczne) oraz przedmiot opodatkowania (dochody)."
                },
                {
                  "pytanie": "Podstawa opodatkowania to skonkretyzowany co do kwoty przedmiot opodatkowania",
                  "odpowiedzi": [
                    "prawda",
                    "fałsz (co do wartości bądź ilości, a nie co do kwoty)"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Podstawa opodatkowania to ujęty ilościowo lub wartościowo przedmiot (np. litry paliwa w akcyzie, metry kwadratowe gruntu w podatku od nieruchomości), zatem określenie jej wyłącznie jako \"kwoty\" jest błędem metodologicznym."
                },
                {
                  "pytanie": "Gmina płacąca podatek od towarów i usług:",
                  "odpowiedzi": [
                    "jest podmiotem biernym tego podatku",
                    "jest podmiotem czynnym",
                    "jest inkasentem"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Podmiotem biernym jest podatnik, na którym ciąży dług podatkowy. Gmina, wykonując czynności o charakterze cywilnoprawnym, staje się pełnoprawnym podatnikiem VAT."
                },
                {
                  "pytanie": "Stawka podatkowa to:",
                  "odpowiedzi": [
                    "relacja określająca stosunek wielkości stawki do wielkości podatku",
                    "stosunek pomiędzy wielkością podstawy opodatkowania a wielkością podstawy jego wymiaru",
                    "stosunek pomiędzy wielkością podatku a wielkością podstawy opodatkowania"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Stawka podatkowa to relacja (stosunek) wielkości należnego podatku do podstawy opodatkowania (podatek ÷ podstawa)."
                },
                {
                  "pytanie": "Konsument w podatku od towarów i usług",
                  "odpowiedzi": [
                    "jest płatnikiem podatku",
                    "jest podatnikiem rzeczywistym",
                    "jest podatnikiem formalnym"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Z uwagi na zjawisko przerzucalności podatków obrotowych, to konsument ponosi ekonomiczny ciężar podatku zawartego w cenie (podatnik rzeczywisty), podczas gdy przedsiębiorca jest jedynie podatnikiem formalnym rozliczającym podatek z urzędem."
                },
                {
                  "pytanie": "Bezzwrotność daniny publicznej oznacza, iż podmiot uiszczający daninę nie otrzymuje nic w zamian.",
                  "odpowiedzi": [
                    "prawda",
                    "fałsz (opis odnosi się do nieodpłatności; bezzwrotność to coś innego)"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Brak świadczenia wzajemnego to *nieodpłatność*. *Bezzwrotność* oznacza natomiast, że prawidłowo zapłacone świadczenie przechodzi definitywnie na własność podmiotu publicznego i podatnik nie może żądać jego zwrotu."
                },
                {
                  "pytanie": "Która z niżej wymienionych danin nie jest odpłatna",
                  "odpowiedzi": [
                    "cło",
                    "składka",
                    "opłata publiczna"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Cło jest daniną nieodpłatną (podobnie jak podatek). Płacący cło nie dostaje od państwa żadnego ekwiwalentu. Opłata publiczna i składka dają określone, bezpośrednie prawa zwrotne (np. prawo do świadczeń medycznych, wydanie decyzji administracyjnej)."
                },
                {
                  "pytanie": "Cechą stałą odróżniającą opłatę od podatku jest",
                  "odpowiedzi": [
                    "bezzwrotność",
                    "odpłatność",
                    "celowość"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Podatek z definicji ustawowej jest *nieodpłatny*, a opłata ma charakter *odpłatny* (ekwiwalentny) – wnosi się ją za konkretną usługę ze strony państwa."
                },
                {
                  "pytanie": "Ponowny podział PKB dokonuje się za pośrednictwem funkcji:",
                  "odpowiedzi": [
                    "stabilizacyjnej",
                    "fiskalnej",
                    "redystrybucyjnej"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Powtórzenie mechanizmu opisanego w pytaniu nr 148."
                },
                {
                  "pytanie": "Opłata od posiadania psów stanowi dochód budżetu państwa",
                  "odpowiedzi": [
                    "prawda",
                    "fałsz (jako opłata lokalna stanowi dochód gminy, a nie budżetu państwa)"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Wpływy z tej opłaty lokalnej w całości zasilają budżet właściwej gminy, nie budżet centralny."
                },
                {
                  "pytanie": "Która z organizacyjnych form sektora finansów publicznych przełamuje zasadę zupełności budżetu:",
                  "odpowiedzi": [
                    "jednostka budżetowa",
                    "zakład budżetowy",
                    "państwowy fundusz celowy"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zasada zupełności wymaga objęcia całego planu finansowego państwa jednym budżetem. Fundusze celowe prowadzą gospodarkę pozabudżetową na podstawie odrębnych planów, co łamie tę zasadę."
                },
                {
                  "pytanie": "Zakłady budżetowe w celu wykonywania swoich zadań mogą prowadzić działalność gospodarczą.",
                  "odpowiedzi": [
                    "prawda",
                    "fałsz"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Materiał źródłowy wprost precyzuje: „zakłady budżetowe nie prowadzą działalności gospodarczej” – realizują wyłącznie zadania użyteczności publicznej."
                },
                {
                  "pytanie": "Budżet Państwa obejmuje:",
                  "odpowiedzi": [
                    "całość wydatków i dochodów samorządowego zakładu budżetowego",
                    "jedynie wynik finansowy samorządowego zakładu budżetowego (stratę bądź zysk)",
                    "samorządowy zakład budżetowy w żaden sposób nie rozlicza się z budżetem państwa"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Samorządowy zakład budżetowy rozlicza się metodą netto wyłącznie z budżetem właściwej JST (gminy, powiatu), która go utworzyła, a nie z budżetem centralnym."
                },
                {
                  "pytanie": "Przy metodzie budżetowania brutto jednostki sektora finansów publicznych:",
                  "odpowiedzi": [
                    "różnicę między bieżącymi wydatkami a dochodami odprowadzają do budżetu",
                    "wszystkie dochody uzyskane w toku swojej działalności odprowadzają na rachunek budżetu",
                    "50% dochodów uzyskanych w toku swojej działalności odprowadzają na rachunek budżetu"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Jest to klasyczna definicja metody brutto (zasada pełnego pokrywania wydatków z dotacji i całkowitego oddawania dochodów), stosowana wobec jednostek budżetowych."
                },
                {
                  "pytanie": "Która z organizacyjnych form sektora finansów publicznych posiada osobowość prawną:",
                  "odpowiedzi": [
                    "jednostka budżetowa",
                    "samorządowy zakład budżetowy",
                    "instytucja gospodarki budżetowej"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z ufp, instytucje gospodarki budżetowej posiadają osobowość prawną. Jednostki budżetowe oraz zakłady budżetowe jej nie posiadają."
                },
                {
                  "pytanie": "Przychody w rozumieniu, o którym mowa w ustawie o finansach publicznych:",
                  "odpowiedzi": [
                    "zwiększają deficyt sektora finansów publicznych",
                    "zmniejszają deficyt sektora finansów publicznych",
                    "nie mają wpływu na rozmiar deficytu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Deficyt to ujemna relacja dochodów do wydatków. Przychody (np. pożyczki, obligacje) pojawiają się dopiero w celu *sfinansowania* istniejącego deficytu, więc ich kwota nie modyfikuje jego pierwotnego rozmiaru."
                },
                {
                  "pytanie": "Senat może uchwalić poprawki do ustawy budżetowej:",
                  "odpowiedzi": [
                    "prawda",
                    "fałsz"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Uprawnienie to gwarantuje Senatowi art. 223 Konstytucji RP."
                },
                {
                  "pytanie": "Projekt ustawy wraz z uzasadnieniem tworzy:",
                  "odpowiedzi": [
                    "Minister Finansów (art. 139 ust. 1 ufp)",
                    "Rada Ministrów",
                    "Minister Gospodarki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Kompetencja redakcyjna przygotowania rządowego projektu budżetu leży po stronie Ministra Finansów."
                },
                {
                  "pytanie": "Wpływy uzyskane z prywatyzacji majątku Skarbu Państwa stanowią:",
                  "odpowiedzi": [
                    "rozchody publiczne",
                    "przychody publiczne",
                    "dochody publiczne"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z ustawą nie są to dochody publiczne, lecz przychody o charakterze zwrotnym/majątkowym, przeznaczone na finansowanie potrzeb pożyczkowych długu."
                },
                {
                  "pytanie": "Nota budżetowa to",
                  "odpowiedzi": [
                    "rozporządzenie Ministra Finansów określające szczegółowy tryb, sposób i terminy opracowania materiałów niezbędnych do stworzenia projektu ustawy budżetowej",
                    "informacje Ministra Finansów na temat stanu finansowego państwa",
                    "założenia projektu budżetu państwa na rok następny"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z definicją doktrynalną: nota budżetowa to potoczna nazwa tego rozporządzenia wykonawczego."
                },
                {
                  "pytanie": "W budżecie państwa subwencje ogólne dla JST ujęte są jako:",
                  "odpowiedzi": [
                    "przychód publiczny",
                    "dochód publicznych",
                    "wydatek publiczny"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Dla budżetu centralnego wypłata subwencji to transfer zewnętrzny, czyli wydatek publiczny. (Dla JST będzie to dochód)."
                },
                {
                  "pytanie": "Osobowość prawną posiada:",
                  "odpowiedzi": [
                    "państwowy fundusz celowy",
                    "instytucja gospodarki budżetowej",
                    "jednostka budżetowa"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Powtórzenie pytania nr 164."
                },
                {
                  "pytanie": "Wykup papierów wartościowych stanowi:",
                  "odpowiedzi": [
                    "wydatek publiczny",
                    "rozchód publiczny",
                    "przychód publiczny"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Spłata długu (wykup obligacji/bonów) to klasyczny rozchód budżetu."
                },
                {
                  "pytanie": "W prawie finansowym prymat posiada wykładnia:",
                  "odpowiedzi": [
                    "funkcjonalna",
                    "celowościowa",
                    "językowa"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Z uwagi na zasadę władztwa i pewności prawa daninowego (art. 217 Konstytucji), interpretacja przepisów finansowych musi opierać się restrykcyjnie na brzmieniu słownym tekstu prawnego (wykładnia językowa/literalna)."
                },
                {
                  "pytanie": "Do wykładni pozajęzykowych w prawie finansowym nie należy:",
                  "odpowiedzi": [
                    "wykładnia teleologiczna",
                    "wykładnia systemowa",
                    "wykładnia literalna"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Wykładnia literalna to inna nazwa wykładni językowej. Systemowa i celowościowa to wykładnie pozajęzykowe."
                },
                {
                  "pytanie": "Główne źródło podatkowych dochodów budżetu państwa stanowi:",
                  "odpowiedzi": [
                    "podatek dochodowy od osób fizycznych",
                    "podatek dochodowy od osób prawnych",
                    "podatek od towarów i usług"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Podatek VAT generuje największy, dominujący strumień wpływów finansowych do polskiego budżetu centralnego (ponad 40%)."
                },
                {
                  "pytanie": "Wykładnia celowościowa to:",
                  "odpowiedzi": [
                    "to samo co wykładnia teleologiczna",
                    "dokonywana jest ze względu na położenie danej normy w systemie prawa",
                    "jest rodzajem wykładni językowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Pojęcia te w metodologii prawa są stosowane jako synonimy (badanie celu ustanowienia normy)."
                },
                {
                  "pytanie": "Deficyt sektora finansów publicznych to:",
                  "odpowiedzi": [
                    "ujemna różnica między dochodami publicznymi a wydatkami publicznymi",
                    "ujemna różnica między dochodami publicznymi a wydatkami publicznymi po wyeliminowaniu wewnętrznych przepływów między jednostkami sektora finansów publicznych",
                    "ujemna różnica między dochodami a wydatkami budżetu państwa"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Obliczenie skonsolidowanego wyniku całego *sektora* (metodologia GG) bezwzględnie wymaga dokonania konsolidacji, czyli wyeliminowania transferów wewnętrznych (np. dotacji rządowej dla JST)."
                },
                {
                  "pytanie": "Samorządowe zakłady budżetowe:",
                  "odpowiedzi": [
                    "mogą otrzymywać z budżetu wyłącznie dotacje przedmiotowe",
                    "pokrywają koszty swojej działalności z przychodów własnych",
                    "zobowiązane są wszystkie uzyskane dochody odprowadzić na rachunek budżetu j.s.t."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Stanowi to istotę gospodarki metodą netto – dążenie do pełnego samofinansowania z wpłat od użytkowników."
                },
                {
                  "pytanie": "Wśród dochodów podatkowych budżetu państwa największy udział mają wpływy z:",
                  "odpowiedzi": [
                    "podatku dochodowego od nieruchomości",
                    "podatku dochodowego od gier hazardowych",
                    "żadne z powyższych"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Największy udział ma VAT i akcyza, które nie pojawiły się w opcjach (podatek od nieruchomości to wyłączny dochód gmin)."
                },
                {
                  "pytanie": "Uprawnienia i obowiązki prawnofinansowe podmiotów biernych prawa finansowego mają charakter:",
                  "odpowiedzi": [
                    "materialny lub proceduralny",
                    "abstrakcyjny",
                    "imperatywno - atrybutywny"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Podatnicy mają obowiązki materialne (zapłata kwoty) oraz proceduralne (deklaracje, terminy, księgowość)."
                },
                {
                  "pytanie": "Które zdanie jest prawdziwe:",
                  "odpowiedzi": [
                    "w prawie finansowym analogia nie jest dopuszczalna",
                    "w prawie finansowym analogia dopuszczalna jest tylko na korzyść podmiotów biernych",
                    "w prawie finansowym analogia dopuszczalna jest tylko na korzyść podmiotów czynnych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Analogia rozszerzająca obowiązki publicznoprawne (na niekorzyść obywatela) jest zakazana przez Konstytucję. Dopuszcza się ją wyjątkowo wyłącznie *in bonam partem* (na korzyść podmiotu biernego)."
                },
                {
                  "pytanie": "Nieprzekraczalnym limitem w budżecie państwa są:",
                  "odpowiedzi": [
                    "rozchody budżetowe",
                    "wydatki budżetowe",
                    "przychody budżetowe"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Ustawa wprost precyzuje, że w przeciwieństwie do szacunkowych dochodów, kwoty wydatków stanowią limit nieprzekraczalny."
                },
                {
                  "pytanie": "Wśród wydatków budżetu państwa największą pozycję stanowią:",
                  "odpowiedzi": [
                    "udzielane dotacje i subwencje",
                    "wydatki na obsługę długu publicznego",
                    "wydatki majątkowe"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Potwierdza to struktura polskiego budżetu (wielkie transfery do FUS na emerytury oraz subwencje ogólne dla samorządów)."
                },
                {
                  "pytanie": "Zasada w myśl której całość dochodów budżetowych pokrywa całość wydatków, bez przypisywania konkretnych źródeł dochodów do finansowania określonych celów, nosi nazwę zasady:",
                  "odpowiedzi": [
                    "jedności formalnej",
                    "jedności materialnej",
                    "zupełności budżetowej"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Jest to klasyczna definicja zasady jedności materialnej (powszechności) budżetu."
                },
                {
                  "pytanie": "Nieograniczony obowiązek podatkowy dotyczy osób fizycznych, które:",
                  "odpowiedzi": [
                    "w roku podatkowym przebywają na terytorium RP przez okres co najmniej 183 dni",
                    "w roku podatkowym przebywają na terytorium RP przez okres dłuższy niż 183 dni lub posiadają na terytorium RP ośrodek interesów życiowych lub gospodarczych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Dokładne przytoczenie warunków rezydencji podatkowej z ustawy o PIT (art. 3 ust. 1a)."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP: każdy jest obowiązany do ponoszenia ciężarów i świadczeń publicznych, w tym podatków, określonych w:",
                  "odpowiedzi": [
                    "Konstytucji",
                    "przepisach prawa",
                    "ustawie"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Cytat z art. 84 Konstytucji RP."
                },
                {
                  "pytanie": "Zobowiązanie podatkowe powstaje z dniem:",
                  "odpowiedzi": [
                    "doręczenia decyzji organu podatkowego określającej wysokość zobowiązania podatkowego",
                    "doręczenia decyzji organu podatkowego ustalającej wysokość zobowiązania podatkowego",
                    "wydania decyzji organu podatkowego ustalającej wysokość zobowiązania podatkowego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z art. 21 § 1 pkt 2 Ordynacji podatkowej, decyzja *ustalająca* (konstytutywna) tworzy zobowiązanie z dniem jej doręczenia dłużnikowi."
                },
                {
                  "pytanie": "Zgodnie z ustawą o podatku dochodowym od osób fizycznych, wysokość kosztów uzyskania przychodów ze stosunku pracy:",
                  "odpowiedzi": [
                    "zależy od tego, czy podatnik otrzymuje przychody z jednego czy z kilku zakładów pracy",
                    "jest określona procentowo przez wskazanie jaki procent przychodów stanowią koszty jego uzyskania",
                    "nie zależy od tego, czy podatnik mieszka blisko, czy daleko od zakładu pracy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Limity rocznych kosztów pracowniczych są wyższe dla osób pracujących wieloetatowo (w kilku zakładach pracy)."
                },
                {
                  "pytanie": "Zgodnie z Ordynacją podatkową, podatkiem jest świadczenie pieniężne o charakterze:",
                  "odpowiedzi": [
                    "odpłatnym, zwrotnym oraz ustalanym jednostronnie",
                    "nieodpłatnym, przymusowym oraz bezzwrotnym",
                    "odpłatnym, przymusowym oraz bezzwrotnym"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Dosłowne przytoczenie definicji legalnej z art. 6 Ordynacji podatkowej."
                },
                {
                  "pytanie": "Nadpłaty wraz z ich oprocentowaniem podlegają zaliczeniu z urzędu na poczet zaległości podatkowych wraz z odsetkami za zwłokę, odsetek za zwłokę od nieuregulowanych w terminie zaliczek na podatek, kosztów upomnienia oraz bieżących zobowiązań podatkowych",
                  "odpowiedzi": [
                    "Prawda",
                    "Fałsz"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z Ordynacją podatkową, organ ma ustawowy obowiązek zaliczenia nadpłaty na zaległości dłużnika z urzędu (zwrot następuje dopiero, gdy brak jest zaległości)."
                },
                {
                  "pytanie": "Małżonkowie nie mogą się razem rozliczać jeśli jedno z nich nie uzyskało dochodów w roku podatkowym za które następuje to rozliczenie",
                  "odpowiedzi": [
                    "Prawda",
                    "Fałsz"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Wspólne rozliczenie z małżonkiem, który nie uzyskał żadnego dochodu, jest w pełni dopuszczalne i sankcjonowane przez ustawę o PIT."
                },
                {
                  "pytanie": "Zobowiązanie podatkowe nie może powstać bez powstania obowiązku podatkowego",
                  "odpowiedzi": [
                    "Prawda",
                    "Fałsz"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Obowiązek podatkowy (stan abstrakcyjny) jest zawsze bazą i warunkiem koniecznym do przekształcenia się w zobowiązanie podatkowe (stan skonkretyzowany)."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP Prezydent RP ma obowiązek podpisać ustawę budżetową w terminie 3 dni od jej otrzymania.",
                  "odpowiedzi": [
                    "Prawda",
                    "Fałsz"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Konstytucja RP daje Prezydentowi termin 7 dni na podpisanie ustawy budżetowej."
                },
                {
                  "pytanie": "Organy stanowiące jednostek samorządu terytorialnego mogą decydować o wysokości stawek podatków lokalnych bez ograniczeń.",
                  "odpowiedzi": [
                    "Prawda",
                    "Fałsz"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Rady gmin są ściśle ograniczone górnymi limitami stawek kwotowych, które corocznie publikuje Minister Finansów w obwieszczeniu."
                },
                {
                  "pytanie": "Zasada nieobładowywania ustawy budżetowej oznacza, że ustawa budżetowa nie powinna być zbyt obszerna.",
                  "odpowiedzi": [
                    "Prawda",
                    "Fałsz"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zasada ta oznacza zakaz wnoszenia do ustawy budżetowej zmian przepisów innych ustaw merytorycznych. Nie ma związku z fizyczną objętością dokumentu."
                },
                {
                  "pytanie": "Wadą państwowych funduszy celowych jest brak kontroli Parlamentu nad zarządzanymi przez nie środkami publicznymi.",
                  "odpowiedzi": [
                    "Prawda",
                    "Fałsz"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Fałsz — wg wykładu wadą jest MNIEJSZY (słabszy) wpływ i kontrola Parlamentu niż w gospodarce budżetowej, a nie całkowity brak kontroli. Środki funduszy celowych nadal podlegają kontroli (Parlamentu, NIK), lecz słabszej niż w ramach budżetu."
                },
                {
                  "pytanie": "Zasada jedności formalej budżetu określana jest mianem zasady \"wspólnego kotła\".",
                  "odpowiedzi": [
                    "Prawda",
                    "Fałsz"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Pojęciem \"wspólnego kotła\" określa się zasadę jedności *materialnej* (por. pytanie nr 184)."
                },
                {
                  "pytanie": "Największy udział w wydatkach publicznych mają dotacje i subwencje.",
                  "odpowiedzi": [
                    "Prawda",
                    "Fałsz"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Powtórzenie pytania nr 183."
                },
                {
                  "pytanie": "Wykonaniem ustawy budżetowej kieruje Rada Ministrów.",
                  "odpowiedzi": [
                    "Prawda",
                    "Fałsz"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Wynika to wprost z art. 146 ust. 4 pkt 5 Konstytucji RP oraz założeń ufp."
                }
              ]
            },
            {
              "nazwa": "Pojęcia ogólne i konstrukcja podatku",
              "pytania": [
                {
                  "pytanie": "Jaka jest podstawowa funkcja progresywnej skali podatkowej?",
                  "odpowiedzi": [
                    "alokacyjna",
                    "redystrybucyjna",
                    "represyjna"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zastosowanie progresywnej skali podatkowej (gdzie stawka rośnie wraz ze wzrostem dochodu) prowadzi do zmiany proporcji dochodów po opodatkowaniu. Głównym celem tego mechanizmu jest funkcja redystrybucyjna na płaszczyźnie pionowej, czyli przenoszenie ciężaru podatkowego na osoby o wyższych dochodach i korygowanie nierówności dochodowych w społeczeństwie."
                },
                {
                  "pytanie": "Art. 16. 1. W przypadku nabycia własności (współwłasności) budynku mieszkalnego lub lokalu mieszkalnego stanowiącego odrębną nieruchomość, spółdzielczego własnościowego prawa do lokalu mieszkalnego lub udziału w takim prawie, spółdzielczego prawa do domu jednorodzinnego albo udziału w takim prawie: 1) w drodze dziedziczenia, zapisu zwykłego, zapisu windykacyjnego, dalszego zapisu, polecenia testamentowego, darowizny lub polecenia darczyńcy przez osoby zaliczane do I grupy podatkowej,(...) - nie wlicza się do podstawy opodatkowania ich czystej wartości do łącznej wysokości nieprzekraczającej 110 m2 powierzchni użytkowej budynku lub lokalu. W przypadku nabycia części (udziału) budynku mieszkalnego lub lokalu albo udziału w spółdzielczym prawie do budynku mieszkalnego lub lokalu ulga przysługuje stosownie do wielkości udziału. Niniejszy przepis przewiduje:",
                  "odpowiedzi": [
                    "Zwolnienie przedmiotowe",
                    "Zwolnienie podmiotowe",
                    "ulgę"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Przytoczony w pytaniu art. 16 ustawy o podatku od spadków i darowizn stanowi podstawę prawną dla tzw. ulgi mieszkaniowej. Przepis ten wskazuje, że do podstawy opodatkowania \"nie wlicza się\" wartości do 110 m2. Zgodnie z teorią prawa podatkowego, instytucja, która polega na pomniejszeniu samej podstawy opodatkowania (a nie na całkowitym wyłączeniu przedmiotu czy podmiotu z opodatkowania), jest właśnie ulgą podatkową."
                },
                {
                  "pytanie": "Art. 1 ustawy o podatku dochodowym od osób fizycznych brzmi: Ustawa reguluje opodatkowanie podatkiem dochodowym dochodów osób fizycznych. Jakie elementy konstrukcji podatku przewiduje ten przepis:",
                  "odpowiedzi": [
                    "podmiot",
                    "przedmiot",
                    "podmiot i przedmiot"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Przytoczony przepis określa dwa podstawowe elementy konstrukcji podatku. Wskazując na \"dochody\", ustawa definiuje przedmiot opodatkowania (czyli stan faktyczny, z którym wiąże się obowiązek zapłaty). Natomiast wskazując na \"osoby fizyczne\", ustawa określa podmiot opodatkowania, czyli podmiot bierny (podatnika) zobowiązany do zapłaty tego podatku."
                },
                {
                  "pytanie": "Gmina płacąca podatek od towarów i usług:",
                  "odpowiedzi": [
                    "jest podmiotem biernym tego podatku",
                    "jest podmiotem czynnym",
                    "jest inkasentem"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "W stosunku prawnopodatkowym wyróżnia się dwie strony. Podmiotem czynnym jest władza publiczna (państwo lub samorząd w roli wierzyciela żądającego zapłaty). Podmiotem biernym jest z kolei dłużnik (podatnik, płatnik), na którym ciąży obowiązek zapłaty. Gdy gmina występuje w roli podatnika i uiszcza podatek VAT, działa jako zwykły uczestnik obrotu gospodarczego obciążony obowiązkiem podatkowym, a zatem jest podmiotem biernym."
                },
                {
                  "pytanie": "Stawka podatkowa to:",
                  "odpowiedzi": [
                    "relacja określająca stosunek wielkości stawki do wielkości podatku",
                    "stosunek pomiędzy wielkością podstawy opodatkowania a wielkością podstawy jego wymiaru",
                    "stosunek pomiędzy wielkością podatku a wielkością podstawy opodatkowania"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Stawka podatkowa to relacja (stosunek) wielkości należnego podatku do podstawy opodatkowania (podatek ÷ podstawa)."
                },
                {
                  "pytanie": "Konsument w podatku od towarów i usług",
                  "odpowiedzi": [
                    "jest płatnikiem podatku",
                    "jest podatnikiem rzeczywistym",
                    "jest podatnikiem formalnym"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "W teorii prawa podatkowego konsument, na którego – dzięki mechanizmowi przerzucalności – ostatecznie spada ciężar ekonomiczny podatku VAT, nazywany jest podatnikiem materialnym (rzeczywistym). Z kolei przedsiębiorca, który wpłaca podatek do urzędu, pełni rolę wyłącznie podatnika formalnego."
                },
                {
                  "pytanie": "Która z niżej wymienionych danin nie jest odpłatna",
                  "odpowiedzi": [
                    "cło",
                    "składka",
                    "opłata publiczna"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z definicją daniny publicznej cła, tak samo jak podatki, mają charakter całkowicie nieodpłatny, co oznacza, że uiszczający je podmiot nie otrzymuje w zamian od państwa żadnego świadczenia wzajemnego. Z kolei opłaty publiczne uiszcza się w zamian za określoną czynność urzędową, a składki wiążą się z nabyciem prawa np. do ubezpieczenia zdrowotnego."
                },
                {
                  "pytanie": "Cechą stałą odróżniającą opłatę od podatku jest",
                  "odpowiedzi": [
                    "bezzwrotność",
                    "odpłatność",
                    "celowość"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Podstawową cechą, która odróżnia opłatę od klasycznego podatku, jest jej odpłatność (ekwiwalentność). Wnosząc opłatę (np. skarbową), obywatel uiszcza należność w związku z konkretną czynnością lub usługą świadczoną na jego rzecz przez administrację państwową, natomiast podatek zawsze opiera się na braku świadczenia wzajemnego."
                },
                {
                  "pytanie": "Ponowny podział PKB dokonuje się za pośrednictwem funkcji:",
                  "odpowiedzi": [
                    "stabilizacyjnej",
                    "fiskalnej",
                    "redystrybucyjnej"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Funkcja redystrybucyjna (rozdzielcza) polega właśnie na wtórnym, ponownym podziale wytworzonego w gospodarce Produktu Krajowego Brutto (PKB). Państwo poprzez podatki przejmuje część dochodów i za pośrednictwem budżetu przesuwa je m.in. na rzecz jednostek potrzebujących, samorządów czy innych sektorów."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nazwa": "Prawo finansów publicznych",
      "ikona": "🏛️",
      "opis": "Ustawa o finansach publicznych: sektor FP, budżet państwa, dług publiczny, poręczenia i gwarancje, dyscyplina FP. Jedna odpowiedź prawidłowa; po wybraniu wyświetla się uzasadnienie.",
      "podkategorie": [
        {
          "nazwa": "Testy",
          "testy": [
            {
              "nazwa": "Zagadnienia ogólne i wykładnia",
              "pytania": [
                {
                  "pytanie": "W prawie finansowym prymat posiada wykładnia",
                  "odpowiedzi": [
                    "funkcjonalna",
                    "celowościowa",
                    "językowa"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "W prawie finansowym (a szczególnie w prawie podatkowym) orzecznictwo i doktryna zgodnie wskazują, że prymat posiada wykładnia językowa (literalna). Oznacza to, że znaczenie słów i składni użytych w tekście prawnym wyznacza ścisłe granice interpretacji, a odejście od niej na rzecz innych metod jest możliwe tylko w wyjątkowych, skrajnych sytuacjach."
                },
                {
                  "pytanie": "Do wykładni pozajęzykowych w prawie finansowym nie należy",
                  "odpowiedzi": [
                    "wykładnia teleologiczna",
                    "wykładnia systemowa",
                    "wykładnia literalna"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Wykładnia literalna to po prostu inne określenie wykładni językowej, która opiera się wyłącznie na analizie semantycznej i gramatycznej tekstu prawnego. Do wykładni pozajęzykowych zalicza się natomiast wykładnię systemową oraz teleologiczną (celowościową)."
                },
                {
                  "pytanie": "Wykładnia celowościowa to",
                  "odpowiedzi": [
                    "to samo co wykładnia teleologiczna",
                    "dokonywana jest ze względu na położenie danej normy w systemie prawa",
                    "jest rodzajem wykładni językowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Pojęcia wykładnia celowościowa oraz wykładnia teleologiczna to w naukach prawnych synonimy. Metoda ta polega na powiązaniu bezpośredniego brzmienia przepisu z jego nadrzędnym sensem, celem oraz wolą ustawodawcy, w odróżnieniu od wykładni systemowej, która bada umiejscowienie normy w gałęziach prawa."
                },
                {
                  "pytanie": "Uprawnienia i obowiązki prawnofinansowe podmiotów biernych prawa finansowego mają charakter",
                  "odpowiedzi": [
                    "materialny lub proceduralny",
                    "abstrakcyjny",
                    "imperatywno – atrybutywny"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "W nauce prawa finansowego przyjmuje się, że choć to sama norma prawna posiada charakter dwustronny (imperatywno-atrybutywny), to wynikające z niej uprawnienia i obowiązki o charakterze instrumentalnym dzieli się na te o charakterze materialnym (odnoszące się bezpośrednio do materii świadczenia) oraz proceduralnym (związane z regułami i trybem postępowania)."
                },
                {
                  "pytanie": "Które zdanie jest prawdziwe",
                  "odpowiedzi": [
                    "w prawie finansowym analogia nie jest dopuszczalna",
                    "w prawie finansowym analogia dopuszczalna jest tylko na korzyść podmiotów biernych",
                    "w prawie finansowym analogia dopuszczalna jest tylko na korzyść podmiotów czynnych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "W prawie podatkowym (podatnik to tzw. podmiot bierny stosunku prawnego) obowiązuje rygorystyczna zasada nullum tributum sine lege. Trybunał Konstytucyjny oraz doktryna zakazują stosowania wykładni rozszerzającej oraz analogii na niekorzyść podatnika. Dopuszcza się natomiast stosowanie analogii wyłącznie na jego korzyść, w celu ochrony sprawiedliwości i usunięcia nierównego traktowania."
                },
                {
                  "pytanie": "Nieograniczony obowiązek podatkowy dotyczy osób fizycznych, które",
                  "odpowiedzi": [
                    "w roku podatkowym przebywają na terytorium RP przez okres co najmniej 183 dni",
                    "w roku podatkowym przebywają na terytorium RP przez okres dłuższy niż 183 dni lub posiadają na terytorium RP ośrodek interesów życiowych lub gospodarczych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z ustawą o podatku dochodowym od osób fizycznych, są to dwa alternatywne kryteria definiujące, czy dana osoba ma miejsce zamieszkania w Polsce (tzw. rezydencja podatkowa). Spełnienie któregokolwiek z nich skutkuje opodatkowaniem od całości światowych dochodów."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP: każdy jest obowiązany do ponoszenia ciężarów i świadczeń publicznych, w tym podatków, określonych w",
                  "odpowiedzi": [
                    "Konstytucji",
                    "przepisach prawa",
                    "ustawie"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Wynika to z fundamentalnej zasady władztwa daninowego (art. 84 oraz art. 217 Konstytucji RP). Nakładanie podatków i określanie ich konstrukcji musi nastąpić w drodze aktu o randze ustawy, co jest wyrazem ochrony własności i woli parlamentu."
                },
                {
                  "pytanie": "Do kiedy musi być opublikowane (w warunkach określonych w art. 38 ufp) obwieszczenie za 2020 r.?",
                  "odpowiedzi": [
                    "do końca 2020 r.",
                    "do końca maja 2021 r.",
                    "do 31 czerwca 2021 r.",
                    "do 31 maja 2022 r."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Przepisy określają sztywną datę graniczną na realizację tego obowiązku – Minister Finansów zobowiązany jest wydać obwieszczenie w terminie do dnia 31 maja roku następnego. Dla roku sprawozdawczego 2020 rokiem następnym jest rok 2021, co wyznacza datę 31 maja 2021 r."
                },
                {
                  "pytanie": "Ministrowie przedkładają Ministrowi Finansów informacje o realizacji WPFP, w terminie",
                  "odpowiedzi": [
                    "do dnia 15 kwietnia",
                    "do dnia 31 maja",
                    "do dnia 30 czerwca."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 108 ustawy o finansach publicznych, ministrowie odpowiedzialni za poszczególne działy administracji rządowej mają obowiązek corocznego rozliczenia się przed Ministrem Finansów i przedłożenia informacji o stopniu realizacji działań ujętych w WPFP w ściśle określonym terminie do dnia 15 kwietnia."
                },
                {
                  "pytanie": "WPFP sporządzany jest w układzie",
                  "odpowiedzi": [
                    "kasowym",
                    "zadaniowym",
                    "memoriałowym."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Nowoczesne planowanie wieloletnie na szczeblu państwowym opiera się ściśle na zintegrowanej strukturze celów, podzadań i mierzalnych wskaźników, co oznacza, że WPFP realizowany i sporządzany jest w nowoczesnym układzie zadaniowym."
                },
                {
                  "pytanie": "Zatarcie ukarania może nastąpić",
                  "odpowiedzi": [
                    "Wyłącznie na wniosek",
                    "Wyłącznie z urzędu",
                    "Na wniosek lub z urzędu."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zatarcie ukarania standardowo następuje z mocy prawa (z urzędu) po upływie określonego ustawowo okresu (np. 3 lata od wykonania kary). Jednakże przepisy (art. 40 u.o.n.d.f.p.) dopuszczają również możliwość wcześniejszego zatarcia ukarania przez Ministra Finansów na indywidualny wniosek ukaranego, uzasadniony nienaganną pracą."
                },
                {
                  "pytanie": "Karę zakazu pełnienia funkcji związanych z dysponowaniem środkami publicznymi wymierza się na okres",
                  "odpowiedzi": [
                    "od roku do 5 lat",
                    "od 2 lat do 5 lat",
                    "od 5 miesięcy do roku."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Wynika to bezpośrednio z ramowych granic terminowych przewidzianych przez ustawodawcę dla tego środka karnego – kara zakazu orzekana jest na czas określony wynoszący od roku do 5 lat od dnia uprawomocnienia się orzeczenia."
                },
                {
                  "pytanie": "21 maja 2020 r. komisja I instancji orzekła o o.n.d.f.p. przez Martynę C. i wymierzyła karę upomnienia. Martyna C. odwołała się od ww. orzeczenia, jednak GKO 12 grudnia 2020 r. utrzymała w mocy to rozstrzygnięcie. Kiedy nastąpi zatarcie ukarania?",
                  "odpowiedzi": [
                    "21 maja 2022 r.",
                    "12 grudnia 2022 r.",
                    "11 grudnia 2022 r."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "W przypadku wniesienia odwołania, orzeczenie staje się prawomocne i ostateczne z dniem wydania decyzji przez organ II instancji (GKO), czyli 12 grudnia 2020 r. Kara upomnienia, jako niewymagająca czynności egzekucyjnych, uznawana jest za wykonaną z dniem uprawomocnienia. Ustawowy bieg 2-letniego okresu potrzebnego do zatarcia z mocy prawa kończy się dokładnie z upływem rocznicy tego dnia, czyli 12 grudnia 2022 r."
                },
                {
                  "pytanie": "Bon skarbowy",
                  "odpowiedzi": [
                    "jest długoterminowym papierem wartościowym",
                    "może być emitowany m.in. przez NBP w imieniu Ministra Finansów",
                    "może być nabywany przez rezydentów, jak i przez nierezydentów."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Bony skarbowe są krótkoterminowymi skarbowymi papierami wartościowymi oferowanymi na rynku krajowym. Jako instrumenty dłużne Skarbu Państwa mogą być w pełni swobodnie nabywane i znajdować się w portfelach inwestycyjnych zarówno podmiotów krajowych (rezydentów), jak i zagranicznych (nierezydentów)."
                },
                {
                  "pytanie": "Obligacja skarbowa",
                  "odpowiedzi": [
                    "sprzedawana jest na rynku pierwotnym wyłącznie z dyskontem",
                    "to papier wartościowy oferowany do sprzedaży w kraju lub za granica, oprocentowany w postaci dyskonta lub odsetek",
                    "może być emitowana przez Ministra właściwego do spraw Skarbu Państwa."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Definicję obligacji skarbowej zawiera wprost art. 100 ust. 1 u.f.p., określając ją jako papier dłużny oferowany w kraju lub za granicą, którego oprocentowanie może przybierać formę odsetkową (stałą lub zmienną) bądź formę dyskontową. Jej emitentem jest zawsze Minister Finansów, a nie Minister Skarbu Państwa."
                },
                {
                  "pytanie": "Zobowiązanie podatkowe powstaje z dniem",
                  "odpowiedzi": [
                    "doręczenia decyzji organu podatkowego określającej wysokość zobowiązania podatkowego",
                    "doręczenia decyzji organu podatkowego ustalającej wysokość zobowiązania podatkowego",
                    "wydania decyzji organu podatkowego ustalającej wysokość zobowiązania podatkowego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Jeśli zobowiązanie nie powstaje z mocy samego prawa, powstaje ono na podstawie doręczenia decyzji ustalającej (a nie \"określającej\"). Decyzja ustalająca ma charakter konstytutywny – tworzy nową sytuację prawną, podczas gdy decyzja określająca jedynie deklaruje i koryguje już istniejące zobowiązanie."
                }
              ]
            },
            {
              "nazwa": "Sektor finansów publicznych i budżet państwa",
              "pytania": [
                {
                  "pytanie": "Osobowość prawną posiada",
                  "odpowiedzi": [
                    "państwowy fundusz celowy",
                    "instytucja gospodarki budżetowej",
                    "jednostka budżetowa"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Instytucja gospodarki budżetowej to jednostka powoływana do odpłatnego wykonywania wyodrębnionych zadań, która posiada osobowość prawną, uzyskiwaną z chwilą wpisu do Krajowego Rejestru Sądowego. Pozostałe z wymienionych podmiotów, czyli jednostki budżetowe oraz państwowe fundusze celowe, w świetle przepisów ustawy o finansach publicznych nie posiadają osobowości prawnej."
                },
                {
                  "pytanie": "Deficyt sektora finansów publicznych to",
                  "odpowiedzi": [
                    "ujemna różnica między dochodami publicznymi a wydatkami publicznymi",
                    "ujemna różnica między dochodami publicznymi a wydatkami publicznymi po wyeliminowaniu wewnętrznych przepływów między jednostkami sektora finansów publicznych",
                    "ujemna różnica między dochodami a wydatkami budżetu państwa"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z art. 7 ustawy o finansach publicznych, aby prawidłowo ustalić wynik całego sektora, niezbędne jest przeprowadzenie tzw. konsolidacji. Polega ona na wyeliminowaniu wszystkich wzajemnych transferów (przepływów finansowych) między różnymi jednostkami zaliczanymi do sektora finansów publicznych, co zapobiega sztucznemu dublowaniu tych samych środków w ewidencji."
                },
                {
                  "pytanie": "Samorządowe zakłady budżetowe",
                  "odpowiedzi": [
                    "mogą otrzymywać z budżetu wyłącznie dotacje przedmiotowe",
                    "pokrywają koszty swojej działalności z przychodów własnych",
                    "zobowiązane są wszystkie uzyskane dochody odprowadzić na rachunek budżetu j.s.t."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Samorządowe zakłady budżetowe opierają się na metodzie budżetowania netto (zasadzie samofinansowania). Odpłatnie wykonują one zadania z zakresu użyteczności publicznej i z tak uzyskanych przychodów muszą pokrywać własne koszty. Do budżetu samorządu oddają wyłącznie wypracowaną nadwyżkę (a nie wszystkie dochody), a wsparcie z budżetu mogą otrzymywać w formie dotacji celowych, przedmiotowych oraz podmiotowych."
                },
                {
                  "pytanie": "Wykup papierów wartościowych stanowi",
                  "odpowiedzi": [
                    "wydatek publiczny",
                    "rozchód publiczny",
                    "przychód publiczny"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z art. 6 ust. 2 ustawy o finansach publicznych, wykup wyemitowanych papierów wartościowych należy do ustawowego katalogu rozchodów publicznych. Jest to operacja, która nie finansuje bieżących zadań publicznych, lecz wiąże się ze zwrotnym transferem środków w celu spłaty i uregulowania wcześniej zaciągniętych zobowiązań państwa lub samorządu."
                },
                {
                  "pytanie": "Główne źródło podatkowych dochodów budżetu państwa stanowi",
                  "odpowiedzi": [
                    "podatek dochodowy od osób fizycznych",
                    "podatek dochodowy od osób prawnych",
                    "podatek od towarów i usług"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zdecydowanie najbardziej wydajnym źródłem dochodów polskiego budżetu jest podatek od towarów i usług (VAT), który generuje połowę (lub więcej) wszystkich wpływów z tytułu podatków dla państwa."
                },
                {
                  "pytanie": "Wśród dochodów podatkowych budżetu państwa największy udział mają wpływy z",
                  "odpowiedzi": [
                    "podatku dochodowego od nieruchomości",
                    "podatku dochodowego od gier hazardowych",
                    "żadne z powyższych"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Żadna z zaproponowanych odpowiedzi nie jest prawidłowa. Największy udział we wpływach budżetu państwa generuje podatek VAT. Podatek od nieruchomości jest wyłącznie dochodem lokalnym zasilającym budżety gmin (a nie budżet państwa), natomiast podatek od gier hazardowych stanowi zaledwie ułamek ogólnych wpływów państwa."
                },
                {
                  "pytanie": "Wpływy uzyskane z prywatyzacji majątku Skarbu Państwa stanowią",
                  "odpowiedzi": [
                    "rozchody publiczne",
                    "przychody publiczne",
                    "dochody publiczne"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Wpływy z prywatyzacji traktowane są przez ustawę o finansach publicznych jako operacje nadzwyczajne i jednorazowe, które pomagają sfinansować deficyt budżetowy. Dlatego prawo ściśle klasyfikuje je jako przychody, a nie regularne i definitywne dochody publiczne."
                },
                {
                  "pytanie": "Zasada w myśl której całość dochodów budżetowych pokrywa całość wydatków, bez przypisywania konkretnych źródeł dochodów do finansowania określonych celów, nosi nazwę zasady",
                  "odpowiedzi": [
                    "jedności formalnej",
                    "jedności materialnej",
                    "zupełności budżetowej"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zasada jedności materialnej (zwana też zasadą niefunduszowania) zakłada istnienie tzw. \"wspólnego kotła\". Oznacza to zakaz sztywnego powiązania danego dochodu z konkretnym, z góry imiennie określonym wydatkiem."
                },
                {
                  "pytanie": "Zgodnie z ustawą o podatku dochodowym od osób fizycznych, wysokość kosztów uzyskania przychodów ze stosunku pracy",
                  "odpowiedzi": [
                    "zależy od tego, czy podatnik otrzymuje przychody z jednego czy z kilku zakładów pracy",
                    "jest określona procentowo przez wskazanie jaki procent przychodów stanowią koszty jego uzyskania",
                    "nie zależy od tego, czy podatnik mieszka blisko, czy daleko od zakładu pracy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Koszty uzyskania przychodów z pracy na etacie (stosunku pracy) w PIT nie są odliczane na podstawie faktycznych wydatków ani z procentu, lecz ustala się je w sposób zryczałtowany – jako konkretne kwoty pieniężne (limity) określone w ustawie. Ich precyzyjna wysokość zależy bezpośrednio od faktu, czy podatnik dojeżdża z innej miejscowości oraz od tego, czy jest zatrudniony w jednym, czy w wielu zakładach pracy (wiedza spoza tekstu źródłowego – powszechne zasady prawa podatkowego)."
                },
                {
                  "pytanie": "Rada Ministrów przedstawia Sejmowi ww. strategię wraz z",
                  "odpowiedzi": [
                    "z uzasadnieniem ustawy budżetowej",
                    "z uzasadnieniem projektu budżetu państwa",
                    "z uzasadnieniem projektu uchwały budżetowej",
                    "z uzasadnieniem projektu ustawy budżetowej"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Zgodnie z art. 75 ust. 3 u.f.p. Rada Ministrów ma obowiązek przedłożyć zatwierdzoną strategię Sejmowi w terminie zbieżnym z procedurą budżetową, czyli dokładnie wraz z uzasadnieniem projektu ustawy budżetowej (do 30 września roku poprzedzającego rok budżetowy)."
                },
                {
                  "pytanie": "Klasyfikacja dochodów publicznych i wydatków publicznych dokonywana jest według",
                  "odpowiedzi": [
                    "Części, działów i rozdziałów oraz paragrafów.",
                    "Części, działów oraz paragrafów.",
                    "Części, rozdziałów i paragrafów."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 39 ust. 1 ustawy o finansach publicznych, klasyfikacja budżetowa ma charakter czterostopniowy. Środki publiczne są grupowane według kryterium podmiotowego i funkcjonalnego w części, działy, rozdziały oraz uzupełniające je paragrafy oznaczające ekonomiczny charakter wydatku."
                },
                {
                  "pytanie": "Projekt budżetu państwa jest opiniowany przez",
                  "odpowiedzi": [
                    "NIK.",
                    "NBP.",
                    "KRRiT."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z przepisami ustrojowymi i regulacjami prawa bankowego, Narodowy Bank Polski (w szczególności Rada Polityki Pieniężnej) ma ustawowy obowiązek opiniowania projektu ustawy budżetowej. NIK z kolei nie opiniuje samego projektu, lecz kontroluje już wykonanie uchwalonego budżetu."
                },
                {
                  "pytanie": "Autopoprawki do projektu ustawy budżetowej wnosi",
                  "odpowiedzi": [
                    "Minister Finansów.",
                    "Rada Ministrów.",
                    "Prezes Rady Ministrów."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Konstytucja RP przyznaje wyłączne prawo inicjatywy ustawodawczej w zakresie ustawy budżetowej całej Radzie Ministrów (rządowi jako organowi kolegialnemu). W związku z tym, wszelkie modyfikacje tego projektu w formie autopoprawki na etapie prac parlamentarnych również muszą pochodzić od Rady Ministrów."
                },
                {
                  "pytanie": "W budżecie państwa najwyższym szczeblem klasyfikacji są",
                  "odpowiedzi": [
                    "Części.",
                    "Działy.",
                    "Rozdziały"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Struktura klasyfikacji budżetowej dla budżetu państwa stawia na samym szczycie „części budżetowe”. Przypisywane są one konkretnym organom władzy państwowej, kontroli lub administracji rządowej (np. Część 14 – Ministerstwo Finansów, Część 09 – Sąd Najwyższy)."
                },
                {
                  "pytanie": "Rada Ministrów przedstawia Sejmowi projekt ustawy budżetowej na rok następny",
                  "odpowiedzi": [
                    "Do 30 września roku poprzedzającego rok budżetowy.",
                    "Do 30 października roku poprzedzającego rok budżetowy.",
                    "Do 30 listopada roku poprzedzającego rok budżetowy."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 222 Konstytucji RP oraz przepisami ustawy o finansach publicznych, Rada Ministrów ma konstytucyjny obowiązek przedłożenia Sejmowi gotowego projektu ustawy budżetowej najpóźniej na 3 miesiące przed rozpoczęciem roku budżetowego, co oznacza datę do 30 września."
                },
                {
                  "pytanie": "Procedurę uchwalania ustawy budżetowej kończy",
                  "odpowiedzi": [
                    "Głosowanie w Sejmie nad poprawkami Senatu do projektu ustawy budżetowej.",
                    "Podpisanie jej przez Prezydenta RP.",
                    "Podpisanie jej przez Prezesa Rady Ministrów."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Ustawa budżetowa przechodzi przez analogiczną procedurę legislacyjną jak każda inna ustawa powszechnie obowiązująca. Ostatnim, koniecznym etapem zamykającym procedurę jej powstawania i nadającym jej moc prawną jest podpisanie aktu przez Głowę Państwa (Prezydenta RP)."
                },
                {
                  "pytanie": "Prezydent RP podpisuje ustawę budżetową albo ustawę o prowizorium budżetowym przedstawioną przez Marszałka Sejmu",
                  "odpowiedzi": [
                    "30 dni.",
                    "14 dni.",
                    "7 dni."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Ustawa budżetowa charakteryzuje się przyspieszonym terminem rygorystycznym dla Prezydenta. W odróżnieniu od standardowych 21 dni dla zwykłych ustaw, na podpisanie ustawy budżetowej lub prowizorium Prezydent ma jedynie 7 dni od dnia jej przedstawienia."
                },
                {
                  "pytanie": "Senat może uchwalić poprawki do ustawy budżetowej w ciągu",
                  "odpowiedzi": [
                    "20 dni od dnia przekazania jej Senatowi.",
                    "C. 21 dni od dnia przekazania jej Senatowi.",
                    "30 dni od dnia przekazania jej Senatowi."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 223 Konstytucji RP, Senat ma skrócony czas na pracę nad ustawą budżetową. Wynosi on dokładnie 20 dni od dnia oficjalnego przekazania uchwalonej przez Sejm ustawy budżetowej."
                },
                {
                  "pytanie": "Projekt budżetu państwa opracowuje",
                  "odpowiedzi": [
                    "Minister Finansów.",
                    "Prezes Rady Ministrów.",
                    "Rada Ministrów."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Chociaż to cała Rada Ministrów formalnie uchwala i wnosi projekt do Sejmu, to merytoryczne i techniczne opracowanie projektu ustawy budżetowej (zbieranie materiałów od dysponentów, bilansowanie dochodów i wydatków) leży w wyłącznej kompetencji Ministra Finansów."
                },
                {
                  "pytanie": "Notę budżetową wydaje",
                  "odpowiedzi": [
                    "Prezes Rady Ministrów.",
                    "Minister Finansów.",
                    "Rada Polityki Pieniężnej."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Nota budżetowa jest oficjalnym rozporządzeniem wydawanym corocznie przez Ministra Finansów. Określa ona szczegółowe zasady, tryb oraz ostateczne terminy, w jakich dysponenci części budżetowych mają przekazać mu materiały do opracowania projektu budżetu."
                },
                {
                  "pytanie": "Prace w komisjach sejmowych nad projektem ustawy budżetowej rozpoczynają się",
                  "odpowiedzi": [
                    "po pierwszym czytaniu projektu ustawy budżetowej na plenarnym posiedzeniu Sejmu.",
                    "po drugim czytaniu projektu ustawy budżetowej na plenarnym posiedzeniu Sejmu.",
                    "po wniesieniu poprawek do projektu ustawy budżetowej przez Senat."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z procedurą parlamentarną, pierwsze czytanie projektu budżetu odbywa się na posiedzeniu plenarnym Sejmu i kończy się obowiązkowym skierowaniem projektu do szczegółowych prac w Komisji Finansów Publicznych oraz innych komisjach branżowych."
                },
                {
                  "pytanie": "Ustawa budżetowa jest publikowana",
                  "odpowiedzi": [
                    "w Dzienniku Urzędowym Rzeczypospolitej Polskiej „Monitor Polski”.",
                    "w Dzienniku Ustaw.",
                    "w Dzienniku Urzędowym Unii Europejskiej."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "W Dzienniku Ustaw (Dz.U.) publikuje się akty powszechnie obowiązujące rangi ustawowej, do których bezwzględnie zalicza się ustawa budżetowa. Monitor Polski służy natomiast do ogłaszania aktów o charakterze wewnętrznym (uchwały, zarządzenia) oraz danych obwieszczeniowych (np. kwoty długu)."
                },
                {
                  "pytanie": "Projekt WPFP sporządza",
                  "odpowiedzi": [
                    "Rada Ministrów",
                    "Prezes Rady Ministrów",
                    "Minister Finansów."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Choć ostateczny dokument jest przyjmowany kolegialnie przez rząd, to całościowe, merytoryczne przygotowanie i sporządzenie projektu Wieloletniego Planu Finansowego Państwa leży w wyłącznej gestii Ministra Finansów, który następnie koordynuje go z założeniami budżetowymi."
                },
                {
                  "pytanie": "WPFP stanowi podstawę przygotowywania",
                  "odpowiedzi": [
                    "ustawy budżetowej na kolejny rok budżetowy",
                    "projektu ustawy budżetowej na kolejny rok budżetowy",
                    "uchwały budżetowej jst na kolejny rok budżetowy."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Ustawa o finansach publicznych wprost definiuje hierarchię i rolę planowania wieloletniego, stanowiąc, że to właśnie ramy oraz limity finansowe przyjęte w WPFP służą jako obligatoryjna podstawa prawno-ekonomiczna do opracowania i zbilansowania projektu ustawy budżetowej na kolejny rok."
                },
                {
                  "pytanie": "WPFP uchwala",
                  "odpowiedzi": [
                    "Sejm",
                    "Rada Ministrów",
                    "Minister Finansów."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "W odróżnieniu od tradycyjnego budżetu (ustawy budżetowej), który przyjmuje Parlament, Wieloletni Plan Finansowy Państwa jest dokumentem o charakterze rządowym i jest uchwalany bezpośrednio przez Radę Ministrów w drodze uchwały."
                },
                {
                  "pytanie": "Minister Finansów przedstawia (wskaż odpowiedź w całości prawidłową)",
                  "odpowiedzi": [
                    "Prezesowi Rady Ministrów założenia budżetu państwa na rok następny, uwzględniające ustalenia oraz kierunki działań zawarte w WPFP",
                    "Radzie Polityki Pieniężnej założenia WPFP na kolejne 4 lata budżetowe, uwzględniająco ustalenia oraz kierunki działań zawarte w projekcie ustawy budżetowej",
                    "Radzie Ministrów założenia projektu budżetu państwa na rok następny, uwzględniające ustalenia oraz kierunki działań zawarte w WPFP."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z procedurą budżetową, w pierwszym etapie prac nad budżetem państwa Minister Finansów opracowuje wstępne założenia projektu budżetu i przedstawia je całemu składowi Rady Ministrów. Założenia te muszą obowiązkowo uwzględniać kierunki i priorytety wyznaczone wcześniej w WPFP."
                },
                {
                  "pytanie": "Program konwergencji zawiera",
                  "odpowiedzi": [
                    "m.in.: główne cele polityki społecznej i gospodarczej oraz planowane działania i ich wpływ na poziom dochodów i wydatków sektora instytucji rządowych i samorządowych, w tym na długookresową stabilność finansów publicznych",
                    "m.in.: planowaną wstępną kwotę wydatków obliczoną zgodnie ze stabilizującą regułą wydatkową, jak i zmiany w zakresie podejmowanych działań i celów, w stosunku do poprzedniego Programu Konwergencji oraz wstępną prognozę podstawowych wielkości makroekonomicznych wraz z założeniami stanowiącymi podstawę jej opracowania",
                    "odpowiedź a i b jest prawidłowa."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z art. 104 u.f.p. Program Konwergencji (stanowiący integralną, unijną część WPFP) łączy w sobie wymogi makroekonomiczne i fiskalne. Zawiera zarówno cele społecznogospodarcze (wariant a), jak i techniczne wyliczenia limitów wydatkowych oparte o stabilizującą regułę wydatkową oraz prognozy podstawowych wskaźników ekonomicznych (wariant b)."
                },
                {
                  "pytanie": "Informacja o wykonaniu wydatków w układzie zadaniowym (wskaż odpowiedź w całości prawdziwą)",
                  "odpowiedzi": [
                    "Minister Finansów przedstawia ww. informację Radzie Ministrów oraz Prezydentowi RP w terminie do 30 kwietnia roku następnego wraz z rocznym sprawozdaniem z wykonania WPFP",
                    "Rada Ministrów przedstawia ww. informację Sejmowi i Senatowi, w terminie do 30 kwietnia roku następnego wraz z rocznym sprawozdaniem z wykonania uchwały budżetowej",
                    "Rada Ministrów przedstawia ww. informację Sejmowi oraz NIK, w terminie do dnia 31 maja roku następnego wraz z rocznym sprawozdaniem z wykonania ustawy budżetowej"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Przepisy proceduralne art. 182 u.f.p. nakładają na Radę Ministrów obowiązek przedłożenia rocznego sprawozdania z wykonania budżetu w terminie 5 miesięcy od zakończenia roku (do 31 maja) Sejmowi oraz Najwyższej Izbie Kontroli. Ustawowym załącznikiem i elementem tego sprawozdania jest właśnie kompletna informacja o wykonaniu wydatków w układzie zadaniowym."
                },
                {
                  "pytanie": "Szczegółowy sposób, tryb i terminy opracowania materiałów do opracowania WPFP określa",
                  "odpowiedzi": [
                    "Rada Ministrów w drodze rozporządzenia",
                    "Minister Finansów w drodze rozporządzenia",
                    "Rada Ministrów w drodze uchwały."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z delegacją ustawową zawartą w art. 138 u.f.p. (tzw. nota budżetowa), to minister właściwy do spraw finansów publicznych (Minister Finansów) jest organem upoważnionym do wydania corocznego rozporządzeniaokreślającego szczegółowy tryb, metodykę i harmonogramy sporządzania materiałów do projektu budżetu oraz planów wieloletnich (WPFP)."
                },
                {
                  "pytanie": "Budżet środków europejskich jest",
                  "odpowiedzi": [
                    "rocznym planem dochodów i podlegających refundacji wydatków przeznaczonych na realizację programów finansowanych z udziałem środków europejskich, ze szczególnym uwzględnieniem środków przeznaczonych na realizację projektów pomocy technicznej",
                    "rocznym planem dochodów i niepodlegających refundacji wydatków przeznaczonych na realizację programów finansowanych z udziałem środków europejskich, z wyłączeniem środków przeznaczonych na realizację projektów pomocy technicznej",
                    "rocznym planem dochodów i podlegających refundacji wydatków przeznaczonych na realizację programów finansowanych z udziałem środków europejskich, z wyłączeniem środków przeznaczonych na realizację projektów pomocy technicznej."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z art. 117 ust. 1 ustawy o finansach publicznych (u.f.p.), budżet środków europejskich jest zdefiniowany jako roczny plan dochodów i podlegających refundacji wydatków przeznaczonych na realizację programów unijnych, z którego jednoznacznie wyłącza się środki przeznaczone na realizację projektów pomocy technicznej."
                },
                {
                  "pytanie": "W budżecie środków europejskich ujmuje się",
                  "odpowiedzi": [
                    "dochody z tytułu realizacji programów finansowanych z udziałem środków europejskich",
                    "wydatki na realizację programów finansowanych z udziałem środków europejskich w części podlegającej refundacji",
                    "zarówno a) jak i b)."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Wynika to bezpośrednio z art. 117 ust. 2 pkt 1 i 2 u.f.p. Konstrukcja tego budżetu zakłada jednoczesne ujmowanie w nim zarówno dochodów z tytułu realizacji programów, jak i powiązanych z nimi wydatków w części, w której podlegają one późniejszej refundacji."
                },
                {
                  "pytanie": "Wskaż twierdzenie prawdziwe",
                  "odpowiedzi": [
                    "różnica pomiędzy dochodami a wydatkami budżetu środków europejskich stanowi odpowiednio nadwyżkę budżetu środków europejskich albo deficyt budżetu środków europejskich",
                    "deficyt budżetu środków europejskich albo nadwyżka środków europejskich są wliczane do, odpowiednio, deficytu albo nadwyżki budżetu państwa",
                    "deficyt budżetu środków europejskich nie jest finansowany w ramach potrzeb pożyczkowych budżetu państwa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 118 ust. 1 u.f.p., różnica między dochodami a wydatkami tego budżetu tworzy jego samodzielny wynik (nadwyżkę lub deficyt). Warianty b i c są fałszywe, ponieważ art. 118 ust. 2 wprost wyłącza te wyniki z ogólnego salda budżetu państwa, a ust. 3 wskazuje, że deficyt ten jest finansowany w ramach potrzeb pożyczkowych budżetu państwa."
                },
                {
                  "pytanie": "Dochody budżetu środków europejskich ujmuje się w ustawie budżetowej według",
                  "odpowiedzi": [
                    "części klasyfikacji budżetowej",
                    "paragrafów klasyfikacji budżetowej",
                    "programów finansowanych z udziałem środków europejskich",
                    "odpowiedź a) oraz c) jest właściwa."
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Art. 119 ust. 1 u.f.p. precyzuje zasady techniki budżetowej i nakazuje ujmowanie tych dochodów w ustawie budżetowej w dwojakiej klasyfikacji: według części klasyfikacji budżetowej oraz według konkretnych programów finansowanych ze środków europejskich."
                },
                {
                  "pytanie": "Wydatki budżetu środków europejskich ujmuje się w ustawie budżetowej w podziale na",
                  "odpowiedzi": [
                    "programy finansowane z udziałem środków europejskich w ramach części i działów klasyfikacji wydatków",
                    "części i działy klasyfikacji wydatków",
                    "części, działy, rozdziały i paragrafy wydatków",
                    "odpowiedź a) oraz b) jest właściwa"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Zgodnie z dyspozycją art. 119 ust. 2 u.f.p., struktura wydatkowa budżetu środków europejskich w ustawie budżetowej opiera się na podziale na części i działy klasyfikacji wydatków oraz na programy realizowane w ich ramach. Odpowiedź d) w pełni wyczerpuje ten ustawowy katalog."
                },
                {
                  "pytanie": "Czy na wydatki związane z realizacją programów finansowych z udziałem środków europejskich można tworzyć rezerwę celową?",
                  "odpowiedzi": [
                    "tak, przy czym w budżecie środków europejskich ujmuje się taką rezerwę celową w zakresie, w jakim wydatki te podlegają refundacji",
                    "tak, przy czym w budżecie środków europejskich ujmuje się taka rezerwę celową w zakresie, w jakim wydatki te nie podlegają refundacji",
                    "nie, na wydatki związane z realizacją programów finansowych z udziałem środków europejskich nie można tworzyć rezerwy celowej."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Możliwość ta wynika wprost z art. 120 u.f.p. Ustawodawca dopuszcza tworzenie rezerw celowych na wydatki europejskie, z tym zastrzeżeniem, że w samym budżecie środków europejskich rezerwę tę ujmuje się wyłącznie w tej części, w której wydatki te będą podlegały późniejszej refundacji."
                },
                {
                  "pytanie": "Do środków własnych Unii Europejskiej zalicza się m.in.",
                  "odpowiedzi": [
                    "udział we wpływach z ceł, opłat rolnych i cukrowych",
                    "środki obliczone na podstawie wartości rocznego dochodu narodowego brutto",
                    "wszystkie odpowiedzi są prawidłowe."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z unijnym systemem finansowym opisanym w literaturze przedmiotu zawartej w materiałach, budżet UE zasilany jest z tzw. środków własnych. Należą do nich tradycyjne zasoby własne, czyli m.in. cła i opłaty (wariant a), zasoby oparte na podatku VAT oraz tzw. czwarty zasób, czyli wpłaty państw członkowskich obliczane na podstawie ich Dochodu Narodowego Brutto – DNB (wariant b)."
                },
                {
                  "pytanie": "Wieloletni Plan Finansowy Państwa",
                  "odpowiedzi": [
                    "ustala górny limit przychodów z budżetu państwa",
                    "obowiązuje przez 4 lata budżetowe (rok budżetowy i 3 kolejne lata)",
                    "stanowi podstawę przygotowania projektu ustawy budżetowej."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z art. 104 ust. 1 ustawy o finansach publicznych (u.f.p.) zawartym w materiałach, Wieloletni Plan Finansowy Państwa (WPFP) stanowi obligatoryjną podstawę do opracowania i zbilansowania projektu ustawy budżetowej na kolejny rok budżetowy."
                },
                {
                  "pytanie": "Rada Ministrów przedstawia Sejmowi projekt ustawy budżetowej na rok następny",
                  "odpowiedzi": [
                    "do 30 kwietnia roku poprzedzającego rok budżetowy:",
                    "do 31 maja roku poprzedzającego rok budżetowy",
                    "do 30 września roku poprzedzającego rok budżetowy."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Przepis art. 222 Konstytucji RP oraz art. 141 u.f.p. nakładają na Radę Ministrów sztywny termin na wniesienie projektu ustawy budżetowej do Sejmu – musi to nastąpić najpóźniej na 3 miesiące przed rozpoczęciem nowego roku, czyli właśnie do dnia 30 września."
                },
                {
                  "pytanie": "Główną jednostką klasyfikacji zadaniowej, grupującą wydatki jednego obszaru działalności państwa jest",
                  "odpowiedzi": [
                    "funkcja",
                    "zadanie",
                    "podzadanie."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "W strukturze budżetu zadaniowego (klasyfikacji zadaniowej) najwyższym poziomem grupującym i porządkującym wydatki publiczne wokół całych, szerokich obszarów polityki i działalności państwa (np. Obronność, Edukacja, Zdrowie) jest funkcja państwa."
                },
                {
                  "pytanie": "Klasyfikacja dochodów publicznych w budżecie państwa dokonywana jest według następujących podziałek klasyfikacyjnych",
                  "odpowiedzi": [
                    "części, działów, rozdziałów oraz paragrafów",
                    "części, funkcji, zadań, podzadań i paragrafów",
                    "funkcji, celów i kodów dochodów."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z dyspozycją art. 39 ust. 1 u.f.p., tradycyjna i podstawowa klasyfikacja dochodów oraz wydatków budżetu państwa jest dokonywana w oparciu o cztery sztywne szczeble: części, działy, rozdziały oraz paragrafy."
                },
                {
                  "pytanie": "Senat może uchwalić poprawki do ustawy budżetowej w ciągu",
                  "odpowiedzi": [
                    "21 dni od dnia przekazania jej Senatowi.",
                    "30 dni od dnia przekazania jej Senatowi.",
                    "20 dni od dnia przekazania jej Senatowi."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z art. 223 Konstytucji Rzeczypospolitej Polskiej, Izba Wyższa (Senat) dysponuje rygorystycznie skróconym terminem na wniesienie poprawek do uchwalonej przez Sejm ustawy budżetowej, który wynosi dokładnie 20 dni."
                }
              ]
            },
            {
              "nazwa": "Państwowy dług publiczny",
              "pytania": [
                {
                  "pytanie": "Wśród wydatków budżetu państwa największą pozycję stanowią",
                  "odpowiedzi": [
                    "udzielane dotacje i subwencje",
                    "wydatki na obsługę długu publicznego",
                    "wydatki majątkowe"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Statystyki wykonania budżetu państwa z ostatnich lat wykazują, że to właśnie dotacje (np. celowe dla samorządów) i subwencje (np. oświatowa) stanowią absolutnie największą pozycję – odpowiadają one za ponad połowę, a średnio ok. 43-55% całości wydatków budżetu państwa."
                },
                {
                  "pytanie": "Przez wartość nominalną zobowiązania zaliczonego do PDP rozumie się wartość nominalną",
                  "odpowiedzi": [
                    "wyłącznie wyemitowanych państwowych papierów wartościowych",
                    "m.in. zaciągniętej pożyczki, kredytu lub innego zobowiązania",
                    "świadczenia głównego wraz z odsetkami",
                    "świadczenia należnego na koniec roku kalendarzowego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Według art. 73 ust. 1 pkt 2 u.f.p. wartość nominalna zobowiązania zaliczonego do PDP to m.in. wartość nominalna zaciągniętej pożyczki, kredytu lub innego zobowiązania. Ustawa definiuje ją jako kwotę świadczenia głównego należną do zapłaty w dniu wymagalności, co automatycznie wyklucza naliczone odsetki oraz ograniczenie definicji wyłącznie do samych papierów wartościowych."
                },
                {
                  "pytanie": "Kogo Minister Finansów informuje o nieprawidłowościach w zakresie przestrzegania zasady stanowiącej, że PDP/PKB <= 60%",
                  "odpowiedzi": [
                    "organy nadzoru nad działalnością j.s.f.p.",
                    "Komisję Nadzoru Finansowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 74 ust. 5 ustawy o finansach publicznych, w przypadku stwierdzenia nieprawidłowości w realizacji obowiązków związanych z procedurami ostrożnościowymi i sanacyjnymi (które chronią przed przekroczeniem konstytucyjnego limitu zadłużenia 60% PKB), Minister Finansów informuje o tym właściwe organy nadzoru nad działalnością jednostek sektora finansów publicznych."
                },
                {
                  "pytanie": "Kto opracowuje strategię zarządzania długiem Skarbu Państwa oraz oddziaływania na PDP?",
                  "odpowiedzi": [
                    "Skarb Państwa",
                    "Sejm i Senat",
                    "Minister Finansów",
                    "Rada Ministrów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Przepisy prawa finansowego (art. 75 ust. 1 u.f.p.) jednoznacznie wskazują, że to Minister Finansów jest organem odpowiedzialnym za coroczne opracowywanie projektu strategii zarządzania długiem Skarbu Państwa oraz oddziaływania na państwowy dług publiczny."
                },
                {
                  "pytanie": "Kto zatwierdza strategię zarządzania długiem Skarbu Państwa oraz oddziaływania na PDP?",
                  "odpowiedzi": [
                    "Minister Finansów",
                    "Rada Ministrów",
                    "Sejm i Senat",
                    "Trybunał Konstytucyjny"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z art. 75 ust. 2 u.f.p. dokument strategii przygotowany przez Ministra Finansów musi zostać przedstawiony Radzie Ministrów (rządowi) i to właśnie ten organ kolegialny dokonuje jego formalnego zatwierdzenia."
                },
                {
                  "pytanie": "Jaki zakres czasowy obejmuje strategia zarządzania długiem Skarbu Państwa oraz oddziaływania na PDP?",
                  "odpowiedzi": [
                    "co najmniej rok budżetowy",
                    "rok budżetowy i cztery kolejne lata",
                    "cztery lata",
                    "pięć lat"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Art. 75 ust. 1 ustawy o finansach publicznych wprost określa ramy czasowe tego dokumentu planistycznego, nakazując Ministrowi Finansów opracowywanie strategii o charakterze czteroletnim."
                },
                {
                  "pytanie": "Rada Ministrów przedkłada Sejmowi sprawozdanie z wykonania ustawy budżetowej wraz z informacją o stanie zadłużenia państwa",
                  "odpowiedzi": [
                    "w ciągu 3 miesięcy od zakończenia roku budżetowego.",
                    "w ciągu 4 miesięcy od zakończenia roku budżetowego.",
                    "w ciągu 5 miesięcy od zakończenia roku budżetowego."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Wynika to bezpośrednio z procedury kontroli parlamentarnej. Rada Ministrów ma obowiązek przedstawić Sejmowi roczne sprawozdanie z wykonania budżetu państwa w nieprzekraczalnym terminie 5 miesięcy od dnia zakończenia roku budżetowego (czyli do 31 maja kolejnego roku)."
                },
                {
                  "pytanie": "Kontrolę nad sektorem finansów publiccznych w zakresie przestrzegania zasady stanowiącej, że PDP nie może przekroczyć 60 % wartości rocznego PKB sprawuje",
                  "odpowiedzi": [
                    "Rada Ministrów.",
                    "Minister Finansów.",
                    "Prezes Rady Ministrów."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Ustawa o finansach publicznych powierza Ministrowi Finansów kluczową rolę nadzorczą i kontrolną nad długiem publicznym. To on dokonuje oficjalnych przeliczeń, monitoruje stan zadłużenia i jest zobowiązany do reagowania oraz informowania organów nadzoru o nieprawidłowościach."
                },
                {
                  "pytanie": "Kwotę PDP i jego relację do PKB ogłasza?",
                  "odpowiedzi": [
                    "Rada Ministrów",
                    "Minister Finansów",
                    "Prezes Rady Ministrów",
                    "Komisja Finansów Publicznych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z art. 38 ustawy o finansach publicznych (u.f.p.), to Minister Finansów posiada ustawowy i wyłączny obowiązek ogłaszania w drodze obwieszczenia kwoty oraz relacji państwowego długu publicznego (PDP) do produktu krajowego brutto."
                },
                {
                  "pytanie": "Minister Finansów ogłasza kwotę i relację do PKB długu Skarbu Państwa",
                  "odpowiedzi": [
                    "wg stanu na 30 września danego roku sprawozdawczego",
                    "wg stanu na 31 maja kolejnego roku budżetowego",
                    "wg stanu na koniec roku budżetowego",
                    "MF nie ogłasza tej relacji, ogłasza tylko relację długu jst do PKB"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z literalnym brzmieniem art. 38 u.f.p. ujętym w materiałach, wszystkie wymienione tam wskaźniki zadłużenia, w tym dane dotyczące długu Skarbu Państwa, są ogłaszane obowiązkowo według stanu na koniec roku budżetowego."
                },
                {
                  "pytanie": "Miejsce publikacji obwieszczenia MF to",
                  "odpowiedzi": [
                    "Dziennik Urzędowy ministra Finansów „Monitor Finansowy”",
                    "Dziennik Ustaw",
                    "Ustawa budżetowa",
                    "Dziennik Urzędowy Rzeczypospolitej Polskiej „Monitor Polski”"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Zgodnie z art. 38 u.f.p. podstawowym, oficjalnym i obligatoryjnym miejscem publikacji obwieszczenia Ministra Finansów zawierającego roczne dane o zadłużeniu publicznym i PKB jest Dziennik Urzędowy RP „Monitor Polski”."
                },
                {
                  "pytanie": "Zbiór ilościowych i jakościowych reguł fiskalnych, których głównym celem jest ochrona sektora finansów publicznych przed konsekwencjami naruszenia konstytucyjnego limitu zadłużenia to",
                  "odpowiedzi": [
                    "procedury konwergencji:",
                    "tytuły dłużne",
                    "procedury ostrożnościowe i sanacyjne."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z ustawą o finansach publicznych, mechanizmy prawne, które aktywują się po przekroczeniu progów ostrożnościowych (np. relacji długu do PKB powyżej 55%), mające na celu zapobieżenie przekroczeniu konstytucyjnego limitu 60%, to oficjalnie procedury ostrożnościowe i sanacyjne."
                },
                {
                  "pytanie": "Wybierz właściwą odpowiedź",
                  "odpowiedzi": [
                    "MF przedstawia Prezesowi RM strategie zarzadzania długiem Skarbu Państwa i oddziaływania na państwowy dług publiczny",
                    "MF przedstawia RM strategię zarządzania długiem Skarbu Państwa i oddziaływania na państwowy dług publiczny",
                    "Prezes RM przedstawia Sejmowi strategię zarządzania długiem Skarbu Państwa wraz z ustawą budżetowa."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z art. 75 ust. 2 u.f.p., Minister Finansów (MF) jest organem opracowującym dokument strategii zadłużenia, który następnie oficjalnie przedstawia do zatwierdzenia całej Radie Ministrów (RM), czyli rządowi jako organowi kolegialnemu."
                },
                {
                  "pytanie": "W przypadku, gdy wartość relacji kwoty państwowego długu publicznego do produktu krajowego brutto, wynosi 59,6 % uruchamiana jest",
                  "odpowiedzi": [
                    "pierwsza procedura sanacyjna",
                    "druga procedura sanacyjna",
                    "trzecia procedura sanacyjna."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z systematyką ustawowych progów ostrożnościowych (wskaźników konwergencji), przedział relacji długu do PKB powyżej 55%, ale nieprzekraczający 60% (w pytaniu: 59,6%), obliguje do uruchomienia tzw. Procedury nr 2 (drugiej procedury ostrożnościowo-sanacyjnej) nakładającej m.in. zakaz wzrostu płac w sferze budżetowej i wymóg obniżenia relacji długu w nowym projekcie budżetu."
                },
                {
                  "pytanie": "Rezerwa ogólna",
                  "odpowiedzi": [
                    "tworzenie jej w ustawie budżetowej jest obligatoryjne",
                    "w ustawie budżetowej na 2021 r. nie zaplanowano rezerwy ogólnej",
                    "wysokość rezerwy ogólnej nie może być wyższa niż 3% PKB."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przepis art. 140 ust. 1 u.f.p. posługuje się kategorycznym sformułowaniem: \"W ustawie budżetowej tworzy się rezerwę ogólną...\", co oznacza, że jej ujęcie w planie finansowym państwa ma charakter bezwzględnie obligatoryjny(obowiązkowy), w odróżnieniu od rezerw celowych, które mają charakter fakultatywny."
                }
              ]
            },
            {
              "nazwa": "Poręczenia i gwarancje Skarbu Państwa",
              "pytania": [
                {
                  "pytanie": "Państwowy dług publiczny obejmuje",
                  "odpowiedzi": [
                    "wszystkie zobowiązania jednostek sektora finansów publicznych",
                    "m.in. zobowiązania udzielonych poręczeń Skarbu Państwa",
                    "zobowiązania z tytułu spłaty udzielonych przez Skarb Państwa kredytów i pożyczek",
                    "m.in. zobowiązania z tytułu przyjętych depozytów"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Zgodnie z art. 72 ust. 1 pkt 3 ustawy o finansach publicznych (u.f.p.), państwowy dług publiczny obejmuje zobowiązania sektora finansów publicznych z tytułu przyjętych depozytów. Pozostałe opcje są błędne: dług nie obejmuje wszystkich zobowiązań (ponieważ eliminuje się wzajemne zobowiązania jednostek sektora), udzielone poręczenia to zobowiązania niewymagalne (stają się długiem dopiero, gdy staną się wymagalne), a udzielone kredyty i pożyczki to należności (aktywa), podczas gdy dług tworzą pożyczki i kredyty zaciągnięte."
                },
                {
                  "pytanie": "Poręczenia i gwarancje udzielane przez SP to",
                  "odpowiedzi": [
                    "Poręczenia i gwarancje udzielane przez Ministra właściwego do sprawa Skarbu Państwa",
                    "Poręczenia i gwarancje udzielane przez BGŻ",
                    "Poręczenia i gwarancje udzielane przez Ministra właściwego ds. finansów publicznych."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z ustawą o poręczeniach i gwarancjach, to minister właściwy do spraw finansów publicznych (Minister Finansów) jest organem zasadniczo uprawnionym do reprezentowania Skarbu Państwa (SP) w zakresie udzielania tych form zabezpieczeń."
                },
                {
                  "pytanie": "Udzielanie gwarancji i poręczeń finansowych przez państwo, w rozumieniu art. 216 Konstytucji RP następuje na zasadach i w trybie określonych",
                  "odpowiedzi": [
                    "w zarządzeniach Ministra Finansów",
                    "w rozporządzeniu Ministra Finansów",
                    "w ustawie."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Artykuł 216 ust. 4 Konstytucji RP jednoznacznie wprowadza zasadę wyłączności ustawowej w tym zakresie, stanowiąc, że zaciąganie pożyczek oraz udzielanie gwarancji i poręczeń finansowych przez państwo następuje na zasadach i w trybie określonych w ustawie."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP, nie wolno udzielać gwarancji i poręczeń finansowych, w następstwie których PDP",
                  "odpowiedzi": [
                    "przekroczy połowę wartości rocznego PKB",
                    "przekroczy 3/5 wartości rocznego PKB",
                    "przekroczy wartość rocznego PKB."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Przepis art. 216 ust. 5 Konstytucji RP ustanawia nieprzekraczalny limit dla państwowego długu publicznego (PDP), zakazując działań (w tym udzielania poręczeń i gwarancji), w następstwie których dług ten przekroczy 3/5 (czyli 60%) wartości rocznego produktu krajowego brutto."
                },
                {
                  "pytanie": "Poręczenia i gwarancje udzielane przez Radę Ministrów udzielane są w imieniu i na rachunek",
                  "odpowiedzi": [
                    "Rady Ministrów",
                    "Skarbu Państwa",
                    "Jednostek samorządu terytorialnego."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Choć decyzję o udzieleniu poręczenia lub gwarancji podejmuje w określonych przypadkach Rada Ministrów jako organ władzy wykonawczej, to samo zobowiązanie majątkowe powstaje zawsze w imieniu i na rachunek Skarbu Państwa, który odpowiada za nie swoim majątkiem."
                },
                {
                  "pytanie": "Poręczenia udzielane przez SP to poręczenia",
                  "odpowiedzi": [
                    "spłaty kredytów",
                    "wykonania zobowiązań wynikających z wszelkich skarbowych papierów wartościowych",
                    "wypłaty odszkodowań na podstawie ostatecznych decyzji administracyjnych oraz prawomocnych wyroków sądowych."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Podstawowym i klasycznym przedmiotem poręczeń Skarbu Państwa regulowanym ustawowo jest zabezpieczenie spłaty zaciągniętych kredytów bankowych."
                },
                {
                  "pytanie": "Gwarancje udzielane przez SP to gwarancje",
                  "odpowiedzi": [
                    "spłaty pożyczek",
                    "wykonania zobowiązań wynikających z obligacji",
                    "wypłaty odszkodowania za zniszczone, uszkodzone lub skradzione eksponaty wystawowe."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z systematyką ustawy, przedmiotem gwarancji Skarbu Państwa może być wprost wykonanie zobowiązań wynikających z emisji obligacji. Dla porównania, kwestia wypłaty odszkodowań za eksponaty wystawowe stanowi z mocy prawa przedmiot poręczenia, a nie gwarancji."
                },
                {
                  "pytanie": "Gwarancji w imieniu i na rachunek SP może udzielać",
                  "odpowiedzi": [
                    "Rada Ministrów; Minister właściwy ds. finansów publicznych; Bank Gospodarstwa Krajowego",
                    "Np. Prezes Rady Ministrów, Minister właściwy ds. Skarbu Państwa",
                    "wyłącznie Bank Gospodarstwa Krajowego."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przepisy prawa finansowego dzielą kompetencje do działania w imieniu Skarbu Państwa pomiędzy Radę Ministrów, Ministra Finansów oraz BGK, w zależności od wysokości kwoty i spełnienia szczegółowych kryteriów ustawowych."
                },
                {
                  "pytanie": "Bank Gospodarstwa Krajowego udziela poręczenia lub gwarancji, w imieniu i na rachunek Skarbu Państwa, powyżej kwoty stanowiącej równowartość 10 mln € i do równowartości 30 mln €, jeżeli",
                  "odpowiedzi": [
                    "poręczenia lub gwarancje są udzielane do wysokości 90 % pozostającej do spłaty kwoty zobowiązania objętego poręczeniem lub gwarancją",
                    "poręczenie lub gwarancja jest udzielone na cel związany z zaspokojeniem potrzeb publicznych i w granicach określonych przez ustawę o finansach publicznych",
                    "poręczenie lub gwarancja są udzielane za wynagrodzeniem odpowiadającym wynagrodzeniu rynkowemu i poręczenie lub gwarancja są udzielane do wysokości 60 % pozostającej do spłaty kwoty zobowiązania objętego poręczeniem lub gwarancją wraz z 60 % należnych odsetek od tej kwoty i innych kosztów bezpośrednio związanych z tym zobowiązaniem."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Wynika to bezpośrednio z art. 3 ust. 6 ustawy o poręczeniach i gwarancjach (u.p.g.), który nakłada sztywne limity ostrożnościowe (do wysokości 60% świadczenia głównego i odsetek) na transakcje poręczeniowo-gwarancyjne realizowane przez BGK w tym przedziale kwotowym."
                },
                {
                  "pytanie": "Rada Ministrów udziela poręczenia lub gwarancji, jeżeli kwota poręczenia lub gwarancji przekracza",
                  "odpowiedzi": [
                    "równowartość 30 mln €",
                    "równowartość 30 mln $",
                    "równowartość 30 mln zł."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 3 ust. 5 ustawy o poręczeniach i gwarancjach przewiduje próg kompetencyjny dla najwyższego organu wykonawczego (Rady Ministrów) właśnie na poziomie przekraczającym równowartość 30 000 000 euro."
                },
                {
                  "pytanie": "Kwota poręczenia lub gwarancji Skarbu Państwa powinna przekraczać",
                  "odpowiedzi": [
                    "10 mln €",
                    "30 mln €",
                    "10 mln zł."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Standardowa procedura ubiegania się o rządowe wsparcie w postaci gwarancji lub poręczeń Skarbu Państwa wymaga, aby wnioskowana kwota zabezpieczenia była znacząca i przekraczała próg 10 mln euro. Kwoty poniżej tego progu zasadniczo nie kwalifikują się pod te procedury."
                },
                {
                  "pytanie": "W rozumieniu ustawy z dnia 8 maja 1997 r. poręczeń i gwarancji mogą udzielać niektóre osoby prawne np.",
                  "odpowiedzi": [
                    "Bank",
                    "Zakład ubezpieczeń",
                    "Państwowa osoba prawna utworzona w drodze ustawy."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z ustawową definicją, pod pojęciem „niektórych osób prawnych” rozumie się podmioty niebędące bankami ani zakładami ubezpieczeń (ponieważ te działają na podstawie odrębnych reżimów prawa bankowego i ubezpieczeniowego), które na mocy przepisów szczególnych realizują zadania publiczne – przykładem są państwowe osoby prawne tworzone ustawowo."
                },
                {
                  "pytanie": "Państwowe osoby prawne utworzone w drodze ustawy",
                  "odpowiedzi": [
                    "Mogą być uprawnione na podstawie odrębnych przepisów do udzielania poręczeń lub gwarancji w ramach powierzonych im zadań publicznych",
                    "c) Mogą być uprawnione na podstawie odrębnych przepisów do udzielania poręczeń lub gwarancji w zakresie działalności jednostek sektora finansów publicznych",
                    "W każdym przypadku mogą udzielać poręczeń i gwarancji."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 33 ust. 1 ustawy o poręczeniach i gwarancjach, państwowe osoby prawne powołane w drodze ustawy posiadają kompetencję do udzielania poręczeń lub gwarancji wyłącznie w ściśle określonych granicach – czyli w ramach powierzonych im ustawowo zadań publicznych, a nie w każdym przypadku."
                },
                {
                  "pytanie": "Państwowa osoba prawna może udzielić poręczenia za zobowiązania",
                  "odpowiedzi": [
                    "Co do zasady, w łącznej wysokości nie wyższej niż 60% wartości kapitału (określonego wg stanu na koniec roku obrotowego poprzedzającego udzielenie poręczenia lub gwarancji)",
                    "c) Co do zasady, do wysokości nie wyższej niż 30% wartości funduszu, gdy kwota poręczenia lub gwarancji udzielana jest za zobowiązania jednego podmiotu",
                    "Co do zasady, w łącznej wysokości nie wyższej niż 20% wartości funduszu (określonego wg stanu na koniec roku obrotowego poprzedzającego udzielenie poręczenia lub gwarancji)."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Standardowe limity ostrożnościowe dla tych podmiotów określają, że łączna kwota wszystkich udzielonych i niewygasłych poręczeń oraz gwarancji nie może przekroczyć 60% wartości ich kapitałów (funduszy) własnych. Jednocześnie limit za zobowiązania jednego, konkretnego podmiotu wynosi 20% kapitałów własnych, co wyklucza pozostałe warianty odpowiedzi."
                },
                {
                  "pytanie": "Czy państwowa osoba prawna utworzona w drodze ustawy może udzielić poręczenia za zobowiązania podmiotu przekraczające 60% jej kapitału własnego?",
                  "odpowiedzi": [
                    "Nie, ustawowy nieprzekraczany próg wynosi 60% wartości kapitałów własnych w/w państwowej osoby prawnej",
                    "Tak, za zgodą ministra właściwego ds. finansów publicznych",
                    "Tak, za zgodą Rady Ministrów, ministra właściwego ds. finansów publicznych lub Banku Gospodarstwa Krajowego."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Art. 33 ust. 2 ustawy przyznaje ministrowi właściwemu do spraw finansów publicznych (Ministrowi Finansów) prawo do wyrażenia zgody na udzielenie poręczeń lub gwarancji do wysokości wyższej niż standardowe limity (w tym próg 60%) lub ustalenia dopuszczalnego zaangażowania w inny sposób."
                },
                {
                  "pytanie": "Jakie znaczenia ma forma prawna i struktura własności podmiotu ubiegającego się o udzielenie poręczenia lub gwarancji przez SP?",
                  "odpowiedzi": [
                    "o uzyskanie poręczenia lub gwarancji mogą ubiegać się podmioty będące państwową osobą prawną utworzoną na podstawie ustawy, w której połowa kapitałów własnych podmiotu stanowi własność SP",
                    "o uzyskanie poręczenia lub gwarancji mogą ubiegać się podmioty bez względu na formę prawną oraz strukturę własności",
                    "o uzyskanie poręczenia lub gwarancji mogą ubiegać się podmioty o określonej w ustawie formie prawnej oraz strukturze własności."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Podstawowe założenia procedury gwarancyjnej Skarbu Państwa kładą nacisk na cel i charakter zabezpieczanego przedsięwzięcia (np. infrastruktura, eksport). O status ten mogą wnioskować podmioty krajowe (rezydenci) bez względu na ich formę prawno-organizacyjną oraz strukturę kapitałową."
                },
                {
                  "pytanie": "W przypadku ubiegania się o poręczenie/gwarancję udzielane przez Radę Ministrów, wniosek o udzielenie takiego poręczenia/gwarancji należy kierować do",
                  "odpowiedzi": [
                    "Rady Ministrów",
                    "Banku Gospodarstwa Krajowego",
                    "Ministra Finansów."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z oficjalnymi procedurami Ministerstwa Finansów, niezależnie od tego, czy ostateczną decyzję z racji wysokiej kwoty (powyżej 30 mln €) podejmuje cała Rada Ministrów, czy sam Minister Finansów, wniosek inicjujący procedurę i zawierający dokumentację ekonomiczną kieruje się zawsze bezpośrednio do Ministra Finansów celem dokonania analizy ryzyka."
                },
                {
                  "pytanie": "Poręczenia i gwarancje (wskaż twierdzenie w całości prawidłowe)",
                  "odpowiedzi": [
                    "są terminowe, udzielane do kwoty z góry oznaczonej (co do zasady)",
                    "wyjątkowo, gdy udzielane są międzynarodowej instytucji finansowej, której RP jest członkiem lub z którą podpisała umowę o współpracy nie muszą być udzielane do kwoty z góry oznaczonej, przy czym, to Rada Ministrów, na wniosek ministra właściwego do spraw finansów publicznych, może odstąpić od tego wymogu",
                    "odpowiedź a) i b) jest właściwa."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Art. 2b ust. 1 ustawy wskazuje, że poręczenia i gwarancje standardowo muszą mieć określony termin ważności oraz maksymalną kwotę odpowiedzialności. Ustęp 2 tego samego artykułu przewiduje precyzyjną ścieżkę odstępstwa od tego rygoru na rzecz międzynarodowych instytucji finansowych, powierzając tę decyzję Radzie Ministrów działającej na wniosek Ministra Finansów."
                },
                {
                  "pytanie": "Wskaż poręczenia i gwarancje zwolnione z opłaty prowizyjnej",
                  "odpowiedzi": [
                    "zasilenie funduszy utworzonych w BGK, jeżeli środki przeznaczone na spłatę kredytu pochodzą ze źródeł innych niż budżet państwa, z wyłączeniem środków budżetu państwa, które zostały wydatkowane na dopłaty do kredytu objętego preferencyjnym oprocentowaniem, wspieranie eksportu polskich towarów i usług w ramach realizacji programów rządowych",
                    "c) wspieranie importu polskich towarów i usług w ramach realizacji programów rządowych",
                    "odpowiedź a) i b) jest właściwa."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 2c ust. 4 ustawy precyzuje, że zwolnienie z opłaty prowizyjnej przysługuje zasileniom funduszy celowych BGK (na określonych warunkach) oraz wspieraniu eksportu polskich towarów i usług. Ponieważ wariant b) wymienia błędnie import, uniemożliwia to zaznaczenie odpowiedzi c). Całość poprawnych przesłanek zwolnienia zawiera wariant a)."
                },
                {
                  "pytanie": "Co do zasady, skuteczność poręczenia lub gwarancji jest uzależniona od",
                  "odpowiedzi": [
                    "struktury własności podmiotu, któremu udzielane jest poręczenie lub gwarancja",
                    "wniesienia opłaty prowizyjnej od poręczenia lub gwarancji",
                    "formy prawnej podmiotu, któremu udzielane jest poręczenie lub gwarancja."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Wynika to bezpośrednio z art. 2c ust. 1 ustawy o poręczeniach i gwarancjach, który wprost konstruuje zasadę, iż brak wniesienia wymaganej prawem opłaty prowizyjnej powoduje bezskuteczność udzielonego przez Skarb Państwa zabezpieczenia."
                },
                {
                  "pytanie": "Po dokonaniu analizy finansowej przedsięwzięcia oraz analizy sytuacji ekonomiczno – finansowej podmiotu „A” stwierdzono, że podmiot „A”, którego zobowiązania mają być objęte gwarancją, nie będzie w stanie wykonać tych zobowiązań. W takiej sytuacji",
                  "odpowiedzi": [
                    "Nie udziela się gwarancji",
                    "c) Udziela się gwarancji do maksymalnej wysokości 60% kapitałów (funduszy) własnych podmiotu „A”",
                    "Udziela się gwarancji do maksymalnej wysokości 20% kapitałów (funduszy) własnych podmiotu „A”."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z dyspozycją art. 2a ust. 2 ustawy, ustawodawca wprowadził bezwzględny zakaz udzielania poręczeń lub gwarancji w sytuacji, gdy obligatoryjna analiza ryzyka wykaże, że podmiot zobowiązany (dłużnik główny) nie będzie realnie zdolny do samodzielnego uregulowania długu."
                },
                {
                  "pytanie": "Opłata prowizyjna od poręczenia lub gwarancji jest wpłacana na rachunek",
                  "odpowiedzi": [
                    "w NBP - na rachunek rezerw poręczeniowych i gwarancyjnych Skarbu Państwa",
                    "w BGK - na rachunek rezerw poręczeniowych i gwarancyjnych Skarbu Państwa",
                    "w MF - na rachunek rezerw poręczeniowych i gwarancyjnych Skarbu Państwa."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z art. 30 ust. 1 w zw. z art. 2d ustawy, rachunek rezerw poręczeniowych i gwarancyjnych Skarbu Państwa, na który trafiają opłaty prowizyjne, jest prowadzony i prowadzony przez Ministra Finansów fizycznie w Banku Gospodarstwa Krajowego (BGK)."
                },
                {
                  "pytanie": "Kapitał własny spółki SP wynosi 100 mln zł. Maksymalna kwota udzielonych poręczeń wyniesie",
                  "odpowiedzi": [
                    "60 mln zł na rzecz wszystkich podmiotów",
                    "20 mln zł na rzecz wszystkich podmiotów",
                    "20 mln na rzecz jednego podmiotu",
                    "żadna z odpowiedzi nie jest właściwa"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Spółka Skarbu Państwa jest spółką prawa handlowego — działa na zasadach prawa prywatnego i jest wyłączona z sektora finansów publicznych oraz z definicji „państwowej osoby prawnej” objętej limitem 60% kapitału. Ustawowy limit poręczeń nie ma więc do niej zastosowania — żadna z podanych odpowiedzi nie jest właściwa."
                },
                {
                  "pytanie": "W państwowej osobie prawnej kapitał własny wynosi 200 mln zł. Wskaż właściwy wariant udzielenia poręczeń 3 podmiotom",
                  "odpowiedzi": [
                    "występuje brak możliwości udzielenia poręczeń",
                    "60% kapitału własnego na rzecz każdego podmiotu",
                    "max po 40 mln na rzecz każdego podmiotu",
                    "po max 50 mln na rzecz każdego podmiotu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Przepisy określają dwa sztywne limity dla państwowych osób prawnych: limit jednostkowy – maksymalnie 20% kapitału własnego na rzecz jednego podmiotu (20% z 200 mln = 40 mln zł) oraz limit globalny – maksymalnie 60% kapitału własnego łącznie (60% z 200 mln = 120 mln zł). Przy trzech podmiotach przyznanie im maksymalnie po 40 mln zł idealnie wyczerpuje łączny limit globalny (3 × 40 mln = 120 mln zł)."
                },
                {
                  "pytanie": "Równowartość udzielonej gwarancji wyniosła 10 000 000,00 zł (1€=4,20 zł). kto udziela gwarancji?",
                  "odpowiedzi": [
                    "Bank Gospodarstwa Krajowego",
                    "Minister Finansów",
                    "Rada Ministrów",
                    "występuje brak możliwości udzielenia gwarancji"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Aby Skarb Państwa mógł udzielić poręczenia lub gwarancji, kwota zabezpieczenia musi przekraczać równowartość 10 mln €. Kwota 10 000 000 zł przy kursie 4,20 zł/€ stanowi zaledwie około 2,38 mln €, co oznacza, że znajduje się daleko poniżej ustawowego progu minimalnego i taka gwarancja w tym trybie nie może zostać udzielona."
                },
                {
                  "pytanie": "Wasza grupa stworzyła spółkę prawa handlowego. Chcąc uzyskać od SP gwarancję spłaty kredytu o równowartości 11 mln €",
                  "odpowiedzi": [
                    "Wasz kapitał własny musi wynosić co najmniej 100 mln zł",
                    "musicie przekształcić się w spółkę cywilną",
                    "możecie złożyć wniosek o udzielenie gwarancji do MF",
                    "możecie ubiegać się o gwarancję wyłącznie spłaty pożyczki"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Spółki prawa handlowego (krajowi rezydenci) mogą ubiegać się o gwarancje Skarbu Państwa bez względu na swoją formę prawną czy strukturę własności, o ile kwota przekracza 10 mln € (tutaj wynosi 11 mln €). Cała procedura ubiegania się o takie wsparcie rozpoczyna się od złożenia obligatoryjnego wniosku wraz z analizą finansową do Ministra Finansów (MF)."
                },
                {
                  "pytanie": "Kwota udzielonego poręczenia wynosić ma 30 000 000,00 mln €. Który organ udzieli poręczenia?",
                  "odpowiedzi": [
                    "Rada Ministrów",
                    "tylko Minister Finansów",
                    "tylko BGK",
                    "BGK albo MF (gdyż brakuje niektórych danych)"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Kompetencja Rady Ministrów aktywuje się dopiero wtedy, gdy kwota poręczenia ściśle przekraczarównowartość 30 mln €. Dla kwoty równej dokładnie 30 mln € decyzję podejmuje Minister Finansów albo Bank Gospodarstwa Krajowego (BGK może działać w imieniu SP do progu 30 mln €, jeśli spełnione są dodatkowe kryteria rynkowe, celów publicznych i ograniczenia do 60% kwoty zobowiązania). Ponieważ w treści nie określono tych warunków, poprawnym wskazaniem jest wariant o braku niektórych danych."
                },
                {
                  "pytanie": "Łączną kwotę, do wielkości której mogą być udzielane przez Skarb Państwa poręczenia i gwarancje, określono w",
                  "odpowiedzi": [
                    "ustawie budżetowej",
                    "ustawie o poręczeniach i gwarancjach z 1998 r.",
                    "ustawie o finansach publicznych z 2009 r.",
                    "Konstytucji RP (max 60% PKB)"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z zasadami prawa finansowego, ogólny, maksymalny roczny limit kwotowy (pula), do wysokości którego Skarb Państwa może w danym roku budżetowym zaciągać zobowiązania z tytułu nowych poręczeń i gwarancji, jest każdorazowo autorytatywnie określany na dany rok w ustawie budżetowej."
                },
                {
                  "pytanie": "Poręczeń i gwarancji spłaty kredytów nie udziela się",
                  "odpowiedzi": [
                    "Np. Kredytobiorcom",
                    "c) Np. bankom, jeżeli taki bank udzielił kredytodawcy poręczenia lub gwarancji za kredytobiorcę",
                    "Np. międzynarodowym instytucjom finansowym, jeżeli taka instytucja udzieliła kredytodawcy poręczenia lub gwarancji za kredytobiorcę oraz kredytodawcom."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 3 ust. 1 i 3 ustawy, poręczenia i gwarancje spłaty kredytów są udzielane kredytodawcom(w celu zabezpieczenia spłaty długu) bądź bankom i międzynarodowym instytucjom finansowym, które same wcześniej poręczyły za dłużnika (reporęczenie). Skarb Państwa nie udziela gwarancji kredytobiorcy (dłużnikowi), gdyż jest on stroną, za której zobowiązania to zabezpieczenie jest ustanawiane."
                },
                {
                  "pytanie": "Poręczenia i gwarancje spłaty kredytów udzielane przez RM lub MF, co do zasady, mogą być udzielane",
                  "odpowiedzi": [
                    "do wysokości 50 % pozostającej do spłaty kwoty kredytu objętego poręczeniem lub gwarancją wraz z 50 % należnych odsetek od tej kwoty i innych kosztów bezpośrednio związanych z tym kredytem",
                    "do wysokości 60 % pozostającej do spłaty kwoty kredytu objętego poręczeniem lub gwarancją wraz z 60 % należnych odsetek od tej kwoty i innych kosztów bezpośrednio związanych z tym kredytem",
                    "do wysokości 90 % pozostającej do spłaty kwoty kredytu objętego poręczeniem lub gwarancją wraz z 90 % należnych odsetek od tej kwoty i innych kosztów bezpośrednio związanych z tym kredytem."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 5 ust. 1 ustawy, podstawowy, ostrożnościowy limit odpowiedzialności Skarbu Państwa (reprezentowanego przez Radę Ministrów lub Ministra Finansów) wynosi 50% kwoty niespłaconego kapitału kredytu wraz z proporcjonalną częścią odsetek i innych kosztów bezpośrednich. Wyższe limity są możliwe jedynie wyjątkowo w przypadkach określonych ustawą."
                },
                {
                  "pytanie": "Poręczenia i gwarancje wykonania zobowiązań wynikających z obligacji udziela",
                  "odpowiedzi": [
                    "Np. Rada Ministrów, na wniosek ministra właściwego do spraw finansów publicznych oraz minister właściwy do spraw finansów publicznych",
                    "c) NBP oraz Rada Polityki Pieniężnej",
                    "Prezes Rady Ministrów oraz Prezydent RP."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 12 ust. 1 ustawy, organami uprawnionymi do działania w imieniu Skarbu Państwa w zakresie zabezpieczania świadczeń z obligacji są wyłącznie Rada Ministrów oraz Minister Finansów (minister właściwy do spraw finansów publicznych). Ani NBP, ani Prezydent nie posiadają kompetencji do udzielania gwarancji rządowych."
                },
                {
                  "pytanie": "Poręczenia wypłaty odszkodowania za zniszczone, uszkodzone lub skradzione eksponaty wystawowe może udzielić",
                  "odpowiedzi": [
                    "Minister właściwy do spraw kultury i ochrony dziedzictwa narodowego na wniosek Rady Ministrów",
                    "Bank Gospodarstwa Krajowego",
                    "Rada Ministrów na wniosek ministra właściwego do spraw kultury i ochrony dziedzictwa narodowego."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z art. 23 ust. 1 ustawy, to Rada Ministrów jest organem właściwym do udzielenia w imieniu Skarbu Państwa tego specyficznego poręczenia, działając na oficjalny wniosek i rekomendację ministra właściwego do spraw kultury i ochrony dziedzictwa narodowego."
                },
                {
                  "pytanie": "Poręczenia wypłaty odszkodowania za zniszczone, uszkodzone lub skradzione eksponaty wystawowe można udzielić",
                  "odpowiedzi": [
                    "Organizatorowi wystawy",
                    "Rezydentom",
                    "Nierezydentom."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Litera prawa (art. 23 ust. 1) wprost wskazuje, że poręczeń wypłaty odszkodowań z tytułu zniszczenia, uszkodzenia lub kradzieży nieubezpieczonych eksponatów Skarb Państwa może udzielić nierezydentom (podmiotom zagranicznym, będącym właścicielami lub uprawnionymi posiadaczami tych dzieł). Organizator wystawy składa jedynie wniosek o udzielenie takiego poręczenia dla nierezydenta."
                },
                {
                  "pytanie": "Poręczenia wypłaty odszkodowania z tytułu zniszczenia, uszkodzenia lub kradzieży nieubezpieczonych eksponatów, których właścicielami lub uprawnionymi posiadaczami są te osoby, udziela się, jeżeli",
                  "odpowiedzi": [
                    "eksponaty te składają się na wystawę artystyczną, organizowaną w Rzeczypospolitej Polskiej a łączna wartość eksponatów przekracza równowartość 500 tys. €",
                    "c) łączna wartość eksponatów przekracza równowartość 10 mln €",
                    "eksponaty te składają się na wystawę artystyczną organizowaną na terytorium któregokolwiek państwa członkowskiego UE."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przesłanki te określa wprost art. 23 ust. 1 ustawy. Warunkiem koniecznym do uruchomienia procedury poręczeniowej dla dzieł sztuki jest organizacja wystawy artystycznej na obszarze RP oraz przekroczenie przez te eksponaty minimalnego progu wartości równego 500 000 euro."
                },
                {
                  "pytanie": "Zasób majątkowy Skarbu Państwa",
                  "odpowiedzi": [
                    "b) środki uzyskane ze zbycia akcji (udziałów) składających się na zasób mogą być przeznaczone jedynie na zaspokojenie roszczeń z tytułu poręczeń i gwarancji udzielonych przez Radę Ministrów",
                    "stanowią środki zgromadzone na rachunkach bankowych wszystkich jednostek sektora finansów publicznych",
                    "przeznaczony jest m.in. na zaspokojenie roszczeń z tytułu poręczeń i gwarancji udzielanych przez Skarb Państwa."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z art. 25 ust. 1 ustawy, zasób majątkowy Skarbu Państwa tworzy się w ściśle określonym celu – jest on dedykowany i bezpośrednio przeznaczony na zaspokojenie roszczeń wynikających z poręczeń i gwarancji udzielanych przez Skarb Państwa. Na zasób składają się wyodrębnione akcje i udziały, a nie rachunki bieżące wszystkich jednostek sektora."
                },
                {
                  "pytanie": "Rachunek rezerw poręczeniowych i gwarancyjnych SP",
                  "odpowiedzi": [
                    "Otwierany jest przez ministra właściwego do spraw finansów publicznych w Banku Gospodarstwa Krajowego.",
                    "c) Otwierany jest przez Radę Ministrów w Banku Gospodarstwa Krajowego.",
                    "Otwierany jest przez ministra właściwego do spraw finansów publicznych w NBP."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przepis art. 30 ust. 1 ustawy o poręczeniach i gwarancjach nakłada na Ministra Finansów (ministra właściwego ds. finansów publicznych) obligatoryjny obowiązek otwarcia tego rachunku rezerwowego fizycznie w Banku Gospodarstwa Krajowego (BGK)."
                },
                {
                  "pytanie": "Na rachunku rezerw poręczeniowych i gwarancyjnych gromadzi się",
                  "odpowiedzi": [
                    "odsetki z tytułu oprocentowania środków zgromadzonych na tym rachunku oraz opłaty prowizyjne od poręczeń i gwarancji",
                    "c) środki pochodzące z przychodów z ze sprzedaży skarbowych papierów wartościowych w roku poprzednim",
                    "odpowiedź a) i b) jest właściwa."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 30 ust. 2 ustawy, na tym rachunku gromadzi się wyłącznie: przychody ze sprzedaży akcji/udziałów wchodzących w skład zasobu, odsetki od środków na tym rachunku oraz wnoszone opłaty prowizyjne z tytułu poręczeń i gwarancji. Ustawa nie przewiduje gromadzenia tam wpływów z bieżącej emisji skarbowych papierów wartościowych, co wyklucza opcję b) i c)."
                },
                {
                  "pytanie": "Wskaż twierdzenie prawdziwe: Środki gromadzone na rachunku rezerw poręczeniowych i gwarancyjnych",
                  "odpowiedzi": [
                    "są przeznaczone na wykonywanie zobowiązań z tytułu poręczeń lub gwarancji udzielonych przez Skarb Państwa oraz są przeznaczane na pokrycie kosztów dochodzenia wierzytelności SP powstałych z tytułu wykonania umowy poręczenia lub gwarancji",
                    "mogą być wykorzystywane na sfinansowanie potrzeb pożyczkowych budżetu państwa oraz w związku z zarządzaniem długiem Skarbu Państwa, przy czym podlegają one zwrotowi w wysokości i terminie umożliwiających ich przeznaczenie na cele ustawowe",
                    "odpowiedź a) i b) jest właściwa."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Konstrukcja art. 30 ust. 3 i 4 ustawy zakłada, że podstawowym przeznaczeniem rezerw jest pokrywanie zobowiązań gwarancyjnych i kosztów windykacji (wariant a). Jednak ustawodawca zezwolił, aby w ramach płynności zarządczej, środki te mogły przejściowo finansować potrzeby pożyczkowe państwa pod warunkiem ich terminowego zwrotu (wariant b). Stąd wariant c) jest w pełni poprawny."
                },
                {
                  "pytanie": "Łączną kwotę, do wysokości której mogą być udzielane przez Skarb Państwa poręczenia i gwarancje w 2021 r., określa",
                  "odpowiedzi": [
                    "ustawa z dnia 8 maja 1997 r. o poręczeniach i gwarancjach udzielanych przez Skarb Państwa oraz niektóre osoby prawne",
                    "ustawa budżetowa na 2021 r.",
                    "ustawa z dnia 27 sierpnia 2009 r. o finansach publicznych."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Ustawa o poręczeniach i gwarancjach oraz ustawa o finansach publicznych tworzą jedynie ramy instytucjonalne. Natomiast konkretny, nieprzekraczalny limit kwotowy (pula) nowych poręczeń i gwarancji na dany, konkretny rok kalendarzowy (np. 2021) jest zapisywany i uchwalany corocznie w ustawie budżetowej na ten rok."
                },
                {
                  "pytanie": "W toku postępowania dotyczącego wierzytelności SP z tytułu wykonania umowy poręczenia lub gwarancji",
                  "odpowiedzi": [
                    "Minister właściwy do spraw finansów publicznych, w sytuacji, gdy spełnione zostanie świadczenie z tytułu udzielonego poręczenia lub gwarancji Skarbu Państwa, ma obowiązek dochodzenia wypłaconych kwot od podmiotu, za którego zobowiązania udzielone zostało poręczenie lub gwarancja.",
                    "Minister właściwy do spraw finansów publicznych może sprzedać wierzytelność, zamienić wierzytelność w całości lub w części na akcje (udziały) dłużnika w spółce, rozłożyć wierzytelność w całości lub w części na raty (maksymalnie na 10 lat), zaś za zgodą Rady Ministrów może umorzyć wierzytelności w całości lub w części.",
                    "Minister właściwy do spraw finansów publicznych może, w celu windykacji ww. wierzytelności, wystawić wykonawczy tytuł egzekucyjny",
                    "Każda z ww. odpowiedzi jest właściwa."
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Przepisy przyznają Ministrowi Finansów bardzo szerokie i zróżnicowane instrumenty prawne do zarządzania roszczeniami regresowymi. Obejmują one zarówno sztywny obowiązek windykacji i prawo wystawienia tytułu wykonawczego do egzekucji administracyjnej, jak i elastyczne opcje restrukturyzacji długu (sprzedaż, konwersja długu na akcje, raty do 10 lat czy umorzenie pod kontrolą Rady Ministrów)."
                },
                {
                  "pytanie": "Zobowiązania z tytułu udzielonych przez Skarb Państwa poręczeń i gwarancji wykonuje",
                  "odpowiedzi": [
                    "BGK",
                    "Minister właściwy do spraw finansów publicznych",
                    "Rada Ministrów."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Minister Finansów (minister właściwy do spraw finansów publicznych) jest kluczowym organem państwowym, który jednoosobowo i bezpośrednio odpowiada za dysponowanie środkami publicznymi przeznaczonymi na obsługę i faktyczne wykonywanie zaciągniętych zobowiązań z tytułu gwarancji rządowych. BGK pełni tu jedynie rolę banku prowadzącego rachunek."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP nie wolno zaciągać pożyczek lub udzielać gwarancji i poręczeń finansowych, w następstwie których państwowy dług publiczny przekroczy",
                  "odpowiedzi": [
                    "3/5 wartości rocznego produktu krajowego brutto.",
                    "C. 3/5 wartości rocznego produktu krajowego netto.",
                    "3/5 wartości rocznego produktu narodowego brutto."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 216 ust. 5 Konstytucji RP, podstawą obliczania konstytucyjnego limitu zadłużenia państwa jest produkt krajowy brutto (PKB). Maksymalny dopuszczalny pułap PDP wynosi 3/5 (czyli 60%) wartości rocznego PKB."
                },
                {
                  "pytanie": "Relację niewymagalnych zobowiązań z tytułu poręczeń i gwarancji udzielonych przez jsfp do PKB ogłasza",
                  "odpowiedzi": [
                    "nikt nie ogłasza",
                    "ogłasza Minister Sprawiedliwości",
                    "ogłasza Rada Ministrów",
                    "ogłasza aktualnie Minister Tadeusz Kościński"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przepisy prawa finansowego (art. 38 pkt 2 u.f.p.) nakazują Ministrowi Finansów ogłaszanie kwoty i relacji do PKB wyłącznie w odniesieniu do zobowiązań dłużnych oraz poręczeń i gwarancji Skarbu Państwa. W przypadku pozostałych jednostek sektora finansów publicznych (jsfp) ogłasza się wyłącznie samą kwotę tych zobowiązań, a nie ich relację do PKB. Stąd nikt takiej relacji nie ogłasza."
                },
                {
                  "pytanie": "Wskaż twierdzenie prawdziwe",
                  "odpowiedzi": [
                    "dług SP obejmuje zadłużenie PDP",
                    "PDP jest zakresowo szerszy jak dług SP",
                    "PDP jest większy od EDP",
                    "dług SP obejmuje zobowiązania z tytułu udzielonych poręczeń SP"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Państwowy dług publiczny (PDP) obejmuje łączne zadłużenie całego sektora finansów publicznych (w tym podsektora rządowego i samorządowego). Dług Skarbu Państwa odnosi się wyłącznie do podsektora rządowego i stanowi zazwyczaj około 90% całości PDP, co sprawia, że pojęcie PDP jest pojęciem znacznie szerszym zakresowo."
                },
                {
                  "pytanie": "Poręczenia i gwarancje SP",
                  "odpowiedzi": [
                    "obejmują zobowiązania z tytułu udzielonych kredytów i pożyczek",
                    "są częścią poręczeń i gwarancji udzielanych przez jsfp",
                    "stanowią zobowiązania wymagalne",
                    "stanowią dług realny"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Skarb Państwa w strukturze prawa jest jedną z jednostek sektora finansów publicznych (jsfp). W związku z tym, poręczenia i gwarancje udzielane przez SP automatycznie stanowią część składową globalnej puli poręczeń i gwarancji generowanych przez cały sektor jsfp. Zgodnie z art. 38 są to zobowiązania niewymagalne (potencjalne), a nie wymagalne czy realne."
                },
                {
                  "pytanie": "Zgodnie z konstytucją RP, nie wolno udzielać gwarancji i poręczeń finansowych, w następstwie których PDP",
                  "odpowiedzi": [
                    "przekroczy połowę PKB",
                    "przekroczy 3/5 wartości rocznego PKB",
                    "przekroczy wartość rocznego PKB."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Artykuł 216 ust. 5 Konstytucji Rzeczypospolitej Polskiej wyznacza nieprzekraczalną, nadrzędną barierę dla państwowego długu publicznego (PDP) na poziomie 3/5 (czyli 60%) wartości rocznego produktu krajowego brutto."
                },
                {
                  "pytanie": "Łączną kwotę, do wysokości której mogą być udzielane przez Skarb Państwa poręczenia i gwarancje, określa",
                  "odpowiedzi": [
                    "ustawa z dnia 8 maja 1997 r. o poręczeniach i gwarancjach udzielanych przez Skarb Państwa oraz niektóre osoby prawne",
                    "ustawa budżetowa",
                    "ustawa z dnia 27 sierpnia 2009 r. o finansach publicznych."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Chociaż zasady proceduralne regulują ustawy o finansach publicznych i o poręczeniach, to konkretny, maksymalny roczny limit finansowy (pula środków), do wysokości którego Skarb Państwa może w danym roku udzielać poręczeń i gwarancji, jest corocznie ustalany bezpośrednio w tekście ustawy budżetowej."
                },
                {
                  "pytanie": "Poręczeń i gwarancji w imieniu i na rachunek Skarbu Państwa może udzielać",
                  "odpowiedzi": [
                    "Prezes Rady Ministrów",
                    "bank komercyjny:",
                    "Bank Gospodarstwa Krajowego."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Ustawa o poręczeniach i gwarancjach Skarbu Państwa wprost upoważnia Bank Gospodarstwa Krajowego (BGK) do samodzielnego występowania i udzielania poręczeń lub gwarancji w imieniu i na rachunek Skarbu Państwa, w granicach kwotowych i na celach określonych przepisami prawa."
                }
              ]
            },
            {
              "nazwa": "Dyscyplina finansów publicznych",
              "pytania": [
                {
                  "pytanie": "Nieprzekraczalnym limitem w budżecie państwa są",
                  "odpowiedzi": [
                    "rozchody budżetowe",
                    "wydatki budżetowe",
                    "przychody budżetowe"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Zgodnie z prawną konstrukcją budżetu, strona dochodowa to jedynie prognoza. Natomiast strona wydatkowa ma charakter dyrektywny – ujęte w planie finansowym wydatki (a także łączne rozchody) stanowią nieprzekraczalny limit, zwany kredytem budżetowym, którego naruszenie wiąże się z odpowiedzialnością za złamanie dyscypliny finansów publicznych."
                },
                {
                  "pytanie": "Katalog możliwych naruszeń dyscypliny finansów publicznych zawarty w ustawie o ndfp jest",
                  "odpowiedzi": [
                    "Katalogiem otwartym",
                    "Katalogiem zamkniętym",
                    "Katalogiem przykładowym."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Reżim odpowiedzialności za naruszenie dyscypliny finansów publicznych opiera się na zasadzie jednoznaczności czynu (zbliżonej do zasady nullum crimen sine lege w prawie karnym). Wszystkie czyny stanowiące naruszenie zostały enumeratywnie ujęte w zamkniętym katalogu w art. 5–18a ustawy o odpowiedzialności za naruszenie dyscypliny finansów publicznych (u.o.n.d.f.p.)."
                },
                {
                  "pytanie": "Dyscyplina finansów publicznych to",
                  "odpowiedzi": [
                    "obowiązek przestrzegania określonych prawem reguł związanych z dysponowaniem środkami prywatnymi, a także środkami pochodzącymi z zasobów prywatnych, przekazanymi jednostkom spoza sektora finansów publicznych.",
                    "obowiązek przestrzegania określonych prawem reguł związanych z dysponowaniem środkami publicznymi, a także środkami pochodzącymi z zasobów publicznych, przekazanymi jednostkom spoza sektora finansów publicznych.",
                    "obowiązek przestrzegania określonych prawem reguł związanych z dysponowaniem środkami publicznymi, a także środkami pochodzącymi z zasobów prywatnych, przekazanymi jednostkom spoza sektora finansów publicznych."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Istotą dyscypliny finansów publicznych jest ochrona prawidłowości procesów gospodarowania środkami publicznymi. Zakresem tej odpowiedzialności objęte jest dysponowanie środkami publicznymi, w tym także sytuacje, gdy środki publiczne (np. w formie dotacji) zostały przekazane podmiotom spoza sektora finansów publicznych."
                },
                {
                  "pytanie": "Kara za naruszenie dyscypliny finansów publicznych nie jest",
                  "odpowiedzi": [
                    "Upomnienie.",
                    "Nawiązka",
                    "Kara pieniężna",
                    "Zakaz pełnienia funkcji związanych z dysponowaniem środkami publicznymi."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Ustawowy, zamknięty katalog kar za naruszenie dyscypliny finansów publicznych (art. 31 ust. 1 u.o.n.d.f.p.) przewiduje jedynie cztery sankcje: upomnienie, naganę, karę pieniężną oraz zakaz pełnienia funkcji związanych z dysponowaniem środkami publicznymi. Nawiązka jest instytucją prawa karnego i prawa wykroczeń, nie występuje w u.o.n.d.f.p."
                },
                {
                  "pytanie": "Rejestr ukaranych na podstawie naruszeń dyscypliny finansów publicznych (ustawy o ondfp) prowadzi",
                  "odpowiedzi": [
                    "Główna Komisja Orzekająca",
                    "Minister Sprawiedliwości",
                    "Minister Finansów."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Rejestr ukaranych za naruszenia dyscypliny finansów publicznych prowadzi Główna Komisja Orzekająca (art. 111 ustawy o odpowiedzialności za naruszenie dyscypliny finansów publicznych)."
                },
                {
                  "pytanie": "Naruszeniem dyscypliny finansów publicznych jest",
                  "odpowiedzi": [
                    "niesprawowanie kontroli zarządczej nad audytorem wewnętrznym",
                    "niewykonanie w terminie czynności audytowych",
                    "ani a), ani b) nie jest właściwa."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Przepis art. 18a u.o.n.d.f.p. penalizuje konkretne zaniedbania dotyczące audytu: nieprowadzenie go w jednostce do tego zobowiązanej, niewyznaczenie audytora lub niedopełnienie przez kierownika obowiązków w zakresie zapewnienia warunków do niezależnego audytu. Samo niesprawowanie kontroli nad audytorem lub niedotrzymanie przez audytora terminów operacyjnych nie stanowi czynu zabronionego podlegającego tej ustawie."
                },
                {
                  "pytanie": "Dyrektor Zespołu Szkół Ogólnokształcących w dniach 4-9 stycznia 2010 r. przeznaczył dochody uzyskiwane przez jednostkę z tytułu wpłat rodziców za posiłki wydawane w stołówce szkolnej na wydatki na artykuły żywnościowe...",
                  "odpowiedzi": [
                    "naruszono art. 11 ust. 1 u.f.p. w związku z czym uzasadniona jest o.n.df.p. z art. 7 u.o.n.d.f.p.",
                    "naruszono art. 7 u.o.n.d.f.p., ale sprawa powinna być umorzona 78 ust. 1 pkt 7 u.o.n.d.f.p. w zw. z art. 28 ust. 1 u.o.n.d.f.p.",
                    "nie naruszono dyscypliny finansów publicznych."
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Przeznaczając pobrane dochody bezpośrednio na wydatki, dyrektor naruszył zasadę budżetowania brutto jednostek budżetowych (art. 11 ust. 1 u.f.p.), co wyczerpuje znamiona czynu z art. 7 u.o.n.d.f.p.. Jednakże, z uwagi na brak środków budżetowych na początku roku oraz konieczność zapewnienia ciągłości dożywiania dzieci, stopień szkodliwości tego czynu dla finansów publicznych jest znikomy. Zgodnie z art. 28 ust. 1 u.o.n.d.f.p. znikoma szkodliwość wyłącza odpowiedzialność, co skutkuje obligatoryjnym umorzeniem postępowania na podstawie art. 78 ustawy."
                },
                {
                  "pytanie": "Janowi wymierzono karę pieniężną za n.d.f.p. Jan wykonał karę 1 stycznia 2019 r. Po upływie miesiąca Jan złożył do Ministra Finansów wniosek o zatarcie ukarania, ale bez jakiegokolwiek uzasadnienia. Minister uzyskał negatywną opinię Głównego Rzecznika Dyscypliny Finansów Publicznych, ale mimo to zatarł ukaranie. W takiej sytuacji",
                  "odpowiedzi": [
                    "Działanie Ministra było niedopuszczalne. Opinia musi być pozytywna.",
                    "Działanie Ministra było uprawnione.",
                    "Działanie Ministra było niedopuszczalne, ponieważ nie minęły 2 lata od wykonania kary."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z art. 40 ust. 2 u.o.n.d.f.p., wniosek o wcześniejsze zatarcie ukarania w przypadku wymierzenia kary pieniężnej może zostać złożony przez ukaranego nie wcześniej niż po upływie 2 lat od dnia wykonania tej kary. Ponieważ Jan złożył wniosek po upływie zaledwie miesiąca, Minister Finansów nie miał prawa podjąć decyzji o zatarciu."
                },
                {
                  "pytanie": "W razie prawomocnego skazania za przestępstwo, będące równocześnie naruszeniem dyscypliny finansów publicznych, wszczęte postępowanie o n.d.f.p.",
                  "odpowiedzi": [
                    "podlega zawieszeniu",
                    "jest prowadzone, gdyż postępowanie to jest niezależne od innych postępowań",
                    "podlega umorzeniu."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Przepisy określające zasady zbiegu odpowiedzialności (art. 25 ust. 3 ustawy o odpowiedzialności za naruszenie dyscypliny finansów publicznych) wprowadzają regułę subsydiarności. Jeśli obwiniony zostanie za ten sam czyn prawomocnie skazany w postępowaniu karnym lub karnym skarbowym, to trwające postępowanie o naruszenie dyscypliny finansowej musi obligatoryjnie zostać umorzone."
                },
                {
                  "pytanie": "Zatarcie ukarania następuje",
                  "odpowiedzi": [
                    "W razie odstąpienia od wymierzenia kary zatarcie ukarania z mocy prawa następuje po upływie 2 lat od dnia wydania orzeczenia.",
                    "Np. na wniosek Ministra Finansów zaopiniowany przez Prezesa RM",
                    "Z mocy prawa, jeżeli od dnia wykonania kary lub przedawnienia jej wykonania upłynęły 2 lata"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z art. 40 ust. 1 ustawy o odpowiedzialności za naruszenie dyscypliny finansów publicznych (u.o.n.d.f.p.), podstawowy termin zatarcia ukarania z mocy prawa (czyli automatycznie) wynosi dokładnie 2 lata, liczone od dnia faktycznego wykonania kary lub od dnia, w którym nastąpiło przedawnienie jej wykonania."
                },
                {
                  "pytanie": "Dyscyplina finansów publicznych to",
                  "odpowiedzi": [
                    "gałęź prawa finansowego, która całościowo reguluje problematykę odpowiedzialności za naruszenie dyscypliny finansów publicznych",
                    "czyn (działanie lub zaniechanie) osoby o statusie wyznaczonym w ustawie określony w prawie, zawiniony i szkodliwy dla finansów publicznych",
                    "obowiązek przestrzegania określonych prawem reguł związanych z dysponowaniem środkami publicznymi, a także środkami pochodzącymi z zasobów publicznych, przekazanymi jednostkom spoza sektora finansów publicznych."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Zgodnie z doktryną prawa finansowego ujętą w materiałach, pojęcie to definiuje się jako sformalizowany obowiązek prawny podmiotów gospodarujących do bezwzględnego przestrzegania reguł i zasad dysponowania środkami publicznymi (oraz zasobami przekazanymi podmiotom prywatnym na cele publiczne)."
                },
                {
                  "pytanie": "Których kar ogłaszano najwięcej w sprawach o naruszenie dyscypliny finansów publicznych (w 2019 r.)?",
                  "odpowiedzi": [
                    "nagan",
                    "kar pieniężnych",
                    "upomnień."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Oficjalne raporty statystyczne z działalności komisji orzekających (w tym dane za 2019 r.) wskazują, że najczęściej stosowaną sankcją jest kara upomnienia. Jako najłagodniejsza i niemająca dotkliwych skutków finansowych ani zawodowych, jest ona dominującym rozstrzygnięciem w strukturze skazań."
                },
                {
                  "pytanie": "Karą za naruszenie dyscypliny finansów publicznych jest",
                  "odpowiedzi": [
                    "Zakaz pełnienia funkcji związanych z dysponowaniem środkami publicznymi na okres od roku do 5 lat",
                    "Upomnienie orzekane w przypadku stwierdzenia, że stopień szkodliwości naruszenia dyscypliny finansów publicznych nie jest znaczny",
                    "Odpowiedź a) i b) jest właściwa."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Warianty a) i b) idealnie odzwierciedlają literalną treść przepisów ustawy o odpowiedzialności za naruszenie dyscypliny finansów publicznych. Art. 31 ust. 1 pkt 4 w zw. z art. 34 ust. 4 precyzuje czas trwania kary zakazu pełnienia funkcji (od roku do 5 lat), a art. 32 ust. 1 wprost łączy karę upomnienia z nieznacznym stopniem szkodliwości czynu."
                },
                {
                  "pytanie": "Pozytywną przesłanką odpowiedzialności dyscyplinarnej są",
                  "odpowiedzi": [
                    "zawinienie i szkodliwość czynu dla finansów publicznych",
                    "zdarzenie losowe i upływ terminu karalności czynu",
                    "nieumyślność popełnienia czynu oraz nieświadomość."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Aby pociągnąć podmiot do odpowiedzialności za naruszenie dyscypliny finansowej, oskarżyciel musi dowieść zaistnienia przesłanek pozytywnych: czyn musi być bezprawny, zawiniony (umyślnie lub nieumyślnie) oraz musi nieść ze sobą realną szkodliwość dla finansów publicznych. Zdarzenia losowe to przesłanki negatywne (wyłączające odpowiedzialność)."
                }
              ]
            },
            {
              "nazwa": "Budżet, sektor i przychody — uzupełnienie",
              "pytania": [
                {
                  "pytanie": "Która z organizacyjnych form sektora finansów publicznych przełamuje zasadę zupełności budżetu:",
                  "odpowiedzi": [
                    "jednostka budżetowa",
                    "zakład budżetowy",
                    "państwowy fundusz celowy"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Fundusze celowe (podobnie jak formy działające na zasadzie budżetowania netto) przełamują klasyczną zasadę zupełności (powszechności), ponieważ prowadzą wyodrębnioną gospodarkę pozabudżetową. Ich środki i operacje nie są uwzględniane w budżecie państwa w pełnej kwocie (brutto), lecz funkcjonują na niezależnych zasadach i wyodrębnionych rachunkach."
                },
                {
                  "pytanie": "Budżet Państwa obejmuje:",
                  "odpowiedzi": [
                    "całość wydatków i dochodów samorządowego zakładu budżetowego",
                    "jedynie wynik finansowy samorządowego zakładu budżetowego (stratę bądź zysk)",
                    "samorządowy zakład budżetowy w żaden sposób nie rozlicza się z budżetem państwa"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Samorządowe zakłady budżetowe (jak sama nazwa wskazuje) są ściśle powiązane wyłącznie z budżetami jednostek samorządu terytorialnego (JST), które je powołały. To do budżetu JST zakład odprowadza swoją nadwyżkę obrotową lub to z budżetu JST pobiera ewentualne dotacje."
                },
                {
                  "pytanie": "Przy metodzie budżetowania brutto jednostki sektora finansów publicznych:",
                  "odpowiedzi": [
                    "różnicę między bieżącymi wydatkami a dochodami odprowadzają do budżetu",
                    "wszystkie dochody uzyskane w toku swojej działalności odprowadzają na rachunek budżetu",
                    "50% dochodów uzyskanych w toku swojej działalności odprowadzają na rachunek budżetu",
                    "jednostka budżetowa",
                    "samorządowy zakład budżetowy",
                    "instytucja gospodarki budżetowej"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Metoda budżetowania brutto, stosowana przez klasyczne jednostki budżetowe (np. ministerstwa, sądy), polega na tym, że jednostka pobiera środki na swoje funkcjonowanie wprost z budżetu (w ramach przyznanego limitu), a zarazem nie może zatrzymać dla siebie żadnych zarobionych pieniędzy – wszelkie uzyskane dochody odprowadza do \"wspólnego kotła\".23) Która z organizacyjnych form sektora finansów publicznych posiada osobowość prawną:."
                },
                {
                  "pytanie": "Przychody w rozumieniu, o którym mowa w ustawie o finansach publicznych:",
                  "odpowiedzi": [
                    "zwiększają deficyt sektora finansów publicznych",
                    "zmniejszają deficyt sektora finansów publicznych",
                    "nie mają wpływu na rozmiar deficytu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "W prawie finansowym matematyczny wynik budżetu (w tym wielkość deficytu) stanowi wyłącznie różnicę między bieżącymi dochodami a ponoszonymi wydatkami. Przychody publiczne (np. wpływy z kredytów czy obligacji) służą finansowaniu (pokryciu) powstałego już deficytu, ale same w sobie nie zmniejszają ani nie zwiększają jego nominalnego rozmiaru wyliczonego z dochodów i wydatków."
                },
                {
                  "pytanie": "Projekt ustawy wraz z uzasadnieniem tworzy:",
                  "odpowiedzi": [
                    "Minister Finansów (art. 139 ust. 1 ufp)",
                    "Rada Ministrów",
                    "Minister Gospodarki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z art. 139 ust. 1 ustawy o finansach publicznych to do obowiązków Ministra Finansów należy faktyczne sporządzenie (opracowanie) samego projektu ustawy budżetowej wraz z wymaganym uzasadnieniem. Rada Ministrów jako ciało kolegialne zatwierdza ten gotowy projekt i jako dysponent inicjatywy ustawodawczej formalnie kieruje go pod obrady Sejmu."
                },
                {
                  "pytanie": "Wpływy uzyskane z prywatyzacji majątku Skarbu Państwa stanowią:",
                  "odpowiedzi": [
                    "rozchody publiczne",
                    "przychody publiczne",
                    "dochody publiczne"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Według ścisłej definicji ustawy o finansach publicznych wpływy z prywatyzacji majątku traktowane są jako zastrzyki o charakterze nadzwyczajnym, pozwalające zrównoważyć budżet bez podnoszenia stałych podatków. Dlatego też prawo kwalifikuje je jednoznacznie jako przychody, a nie regularne dochody budżetowe."
                },
                {
                  "pytanie": "Nota budżetowa to",
                  "odpowiedzi": [
                    "rozporządzenie Ministra Finansów określające szczegółowy tryb, sposób i terminy opracowania materiałów",
                    "informacje Ministra Finansów na temat stanu finansowego państwa",
                    "założenia projektu budżetu państwa na rok następny"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Tzw. \"nota budżetowa\" przyjmuje w prawie formę rozporządzenia wykonawczego. To za jej pomocą Minister Finansów narzuca innym resortom oraz dysponentom sztywne kalendarium, algorytmy i kwestionariusze, niezbędne do zebrania danych potrzebnych do zaplanowania budżetu na kolejny rok."
                },
                {
                  "pytanie": "W budżecie państwa subwencje ogólne dla JST ujęte są jako:",
                  "odpowiedzi": [
                    "przychód publiczny",
                    "dochód publicznych",
                    "wydatek publiczny"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Z perspektywy centralnego budżetu państwa, transfer środków finansowych do gmin czy powiatów w formie subwencji stanowi ubytek środków, a zatem jest kwalifikowany do ustawowego katalogu wydatków państwowych. Oczywiście z przeciwnej perspektywy – w budżecie danego samorządu – otrzymana subwencja zostanie zaksięgowana jako dochód."
                }
              ]
            },
            {
              "nazwa": "sztosy1",
              "pytania": [
                {
                  "pytanie": "Stawka opodatkowania przy dochodach z nieujawnionych źródeł wynosi:",
                  "odpowiedzi": [
                    "75%",
                    "32%",
                    "19%"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 75%."
                },
                {
                  "pytanie": "Źródłem obowiązku podatkowego może być wyłącznie:",
                  "odpowiedzi": [
                    "rozporządzenie Ministra Finansów",
                    "umowa międzynarodowa",
                    "ustawa"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: ustawa."
                },
                {
                  "pytanie": "Podmiot pośredniczący w rozliczeniach podatkowych między podatnikiem a wierzycielem podatkowym, obowiązany do obliczenia i pobrania podatku, to:",
                  "odpowiedzi": [
                    "płatnik",
                    "inkasent",
                    "pełnomocnik podatkowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: płatnik."
                },
                {
                  "pytanie": "Decyzja wymiarowa organu podatkowego, która nie powoduje powstania nowych praw i obowiązków podatnika, a jedynie stwierdza ich istnienie, to decyzja:",
                  "odpowiedzi": [
                    "określająca (deklaratoryjna)",
                    "ustalająca (konstytutywna)",
                    "ostateczna"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: określająca (deklaratoryjna)."
                },
                {
                  "pytanie": "Osoba fizyczna opodatkowana podatkiem liniowym traci przywilej:",
                  "odpowiedzi": [
                    "prawa do kwoty wolnej od podatku",
                    "odliczenia zapłaconych składek zdrowotnych",
                    "łącznego (wspólnego) opodatkowania małżonków"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: łącznego (wspólnego) opodatkowania małżonków."
                },
                {
                  "pytanie": "Który podatek ma jednolitą stawkę 19%?",
                  "odpowiedzi": [
                    "podatek od nieruchomości",
                    "podatek liniowy (PIT)",
                    "ryczałt od przychodów ewidencjonowanych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: podatek liniowy (PIT)."
                },
                {
                  "pytanie": "Przy którym rodzaju opodatkowania nie bierze się pod uwagę uzyskanego przychodu/dochodu?",
                  "odpowiedzi": [
                    "podatek liniowy",
                    "karta podatkowa",
                    "ryczałt od przychodów ewidencjonowanych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: karta podatkowa."
                },
                {
                  "pytanie": "Z jakiego rodzaju opodatkowania skorzysta ksiądz?",
                  "odpowiedzi": [
                    "ryczałt od przychodów osób duchownych",
                    "karta podatkowa",
                    "ryczałt od przychodów ewidencjonowanych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: ryczałt od przychodów osób duchownych."
                },
                {
                  "pytanie": "Obowiązek podatkowy to:",
                  "odpowiedzi": [
                    "wynikająca z ustaw podatkowych powinność przymusowego świadczenia pieniężnego w związku z zaistnieniem zdarzenia określonego w ustawie",
                    "zobowiązanie do zapłaty podatku w określonej wysokości, terminie i miejscu",
                    "skonkretyzowana kwota podatku wynikająca z decyzji organu podatkowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: wynikająca z ustaw podatkowych powinność przymusowego świadczenia pieniężnego w związku z zaistnieniem zdarzenia określonego w ustawie."
                },
                {
                  "pytanie": "Zobowiązanie podatkowe może powstać:",
                  "odpowiedzi": [
                    "z dniem zarejestrowania podatnika przez organ podatkowy",
                    "z chwilą złożenia zeznania podatkowego",
                    "poprzez doręczenie decyzji ustalającej zobowiązanie podatkowe"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: poprzez doręczenie decyzji ustalającej zobowiązanie podatkowe."
                },
                {
                  "pytanie": "Decyzja określająca zobowiązanie podatkowe:",
                  "odpowiedzi": [
                    "tworzy (konstytuuje) nowe zobowiązanie podatkowe",
                    "ustala wyłącznie wysokość zaliczek na podatek",
                    "stwierdza fakt istnienia tego zobowiązania"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: stwierdza fakt istnienia tego zobowiązania."
                },
                {
                  "pytanie": "Rozwiedziony małżonek:",
                  "odpowiedzi": [
                    "nie odpowiada za zaległości podatkowe powstałe w trakcie trwania małżeństwa",
                    "odpowiada solidarnie, bez żadnych ograniczeń kwotowych",
                    "odpowiada za zaległości podatkowe całym swoim majątkiem, lecz tylko do wysokości przypadającego mu udziału w majątku wspólnym"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: odpowiada za zaległości podatkowe całym swoim majątkiem, lecz tylko do wysokości przypadającego mu udziału w majątku wspólnym."
                },
                {
                  "pytanie": "Odwołanie od decyzji określającej zobowiązanie podatkowe wnosi się:",
                  "odpowiedzi": [
                    "w terminie 14 dni od dnia doręczenia decyzji stronie",
                    "w terminie 30 dni od dnia doręczenia decyzji stronie",
                    "w terminie 7 dni od dnia doręczenia decyzji stronie"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: w terminie 14 dni od dnia doręczenia decyzji stronie."
                },
                {
                  "pytanie": "Istotą efektywnego wygaśnięcia zobowiązania podatkowego jest to, że:",
                  "odpowiedzi": [
                    "wierzyciel uzyskuje należne świadczenie pieniężne",
                    "zobowiązanie wygasa bez zaspokojenia wierzyciela",
                    "podatnik zostaje zwolniony z obowiązku zapłaty"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: wierzyciel uzyskuje należne świadczenie pieniężne."
                },
                {
                  "pytanie": "Skutkiem wydania decyzji ustalającej zobowiązanie podatkowe jest:",
                  "odpowiedzi": [
                    "wygaśnięcie obowiązku podatkowego",
                    "przedawnienie zobowiązania podatkowego",
                    "powstanie zobowiązania podatkowego"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: powstanie zobowiązania podatkowego."
                },
                {
                  "pytanie": "Istnienie obowiązku podatkowego jest:",
                  "odpowiedzi": [
                    "warunkiem powstania zobowiązania podatkowego",
                    "skutkiem powstania zobowiązania podatkowego",
                    "tożsame z zobowiązaniem podatkowym"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: warunkiem powstania zobowiązania podatkowego."
                },
                {
                  "pytanie": "Umorzenie zaległości podatkowej to:",
                  "odpowiedzi": [
                    "nieefektywny sposób wygaśnięcia zobowiązania podatkowego",
                    "forma przedawnienia zobowiązania podatkowego",
                    "efektywny sposób wygaśnięcia zobowiązania podatkowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: nieefektywny sposób wygaśnięcia zobowiązania podatkowego."
                },
                {
                  "pytanie": "Zgodnie z art. 122 organy podatkowe w toku postępowania podejmują wszystkie niezbędne działania w celu dokładnego wyjaśnienia stanu faktycznego oraz załatwienia sprawy. Jest to:",
                  "odpowiedzi": [
                    "zasada legalizmu",
                    "zasada prawdy materialnej (obiektywnej)",
                    "zasada czynnego udziału strony"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: zasada prawdy materialnej (obiektywnej)."
                },
                {
                  "pytanie": "Organem odwoławczym od decyzji naczelnika urzędu skarbowego jest:",
                  "odpowiedzi": [
                    "samorządowe kolegium odwoławcze",
                    "dyrektor izby administracji skarbowej",
                    "Minister Finansów"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: dyrektor izby administracji skarbowej."
                },
                {
                  "pytanie": "Reguła, zgodnie z którą zobowiązanie nie powstanie, jeżeli decyzja ustalająca nie zostanie doręczona w okresie 3 lat liczonych od końca roku, w którym powstał obowiązek podatkowy, opisuje:",
                  "odpowiedzi": [
                    "przedawnienie prawa do poboru podatku",
                    "umorzenie zaległości podatkowej z urzędu",
                    "instytucję przedawnienia prawa do ustalenia (wymiaru) zobowiązania podatkowego"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: instytucję przedawnienia prawa do ustalenia (wymiaru) zobowiązania podatkowego."
                },
                {
                  "pytanie": "Zobowiązanie podatkowe przedawnia się z upływem:",
                  "odpowiedzi": [
                    "5 lat, licząc od końca roku kalendarzowego, w którym upłynął termin płatności podatku",
                    "3 lat, licząc od końca roku kalendarzowego, w którym powstał obowiązek podatkowy",
                    "10 lat, licząc od dnia wydania decyzji wymiarowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 5 lat, licząc od końca roku kalendarzowego, w którym upłynął termin płatności podatku."
                },
                {
                  "pytanie": "Decyzja ostateczna to taka:",
                  "odpowiedzi": [
                    "którą można jeszcze zaskarżyć do organu II instancji",
                    "która została doręczona stronie",
                    "od której nie służy odwołanie w postępowaniu podatkowym"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: od której nie służy odwołanie w postępowaniu podatkowym."
                },
                {
                  "pytanie": "Decyzja ustalająca zobowiązanie podatkowe ma charakter:",
                  "odpowiedzi": [
                    "wyłącznie informacyjny",
                    "deklaratoryjny",
                    "konstytutywny"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: konstytutywny."
                },
                {
                  "pytanie": "Pobrana przez płatnika należność podatkowa powoduje wygaśnięcie zobowiązania podatnika:",
                  "odpowiedzi": [
                    "nie, dopóki organ nie wyda odrębnej decyzji",
                    "tak, nawet wtedy, gdy płatnik ostatecznie nie przekaże pobranej kwoty wierzycielowi podatkowemu",
                    "tak, ale dopiero po przekazaniu pobranej kwoty organowi podatkowemu"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: tak, nawet wtedy, gdy płatnik ostatecznie nie przekaże pobranej kwoty wierzycielowi podatkowemu."
                },
                {
                  "pytanie": "Zwolnienie z obowiązku zapłaty podatku w następstwie zastosowania się podatnika do interpretacji podatkowej to:",
                  "odpowiedzi": [
                    "efektywny sposób wygasania zobowiązania podatkowego",
                    "nieefektywny sposób wygasania zobowiązania podatkowego",
                    "forma umorzenia zaległości na wniosek podatnika"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: nieefektywny sposób wygasania zobowiązania podatkowego."
                },
                {
                  "pytanie": "Odpowiedzialność osób trzecich za zobowiązania podatkowe powstaje:",
                  "odpowiedzi": [
                    "w drodze konstytutywnej decyzji organu podatkowego",
                    "z mocy prawa, z chwilą powstania zaległości podatkowej",
                    "automatycznie po upływie terminu płatności podatnika"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: w drodze konstytutywnej decyzji organu podatkowego."
                },
                {
                  "pytanie": "Solidarny charakter odpowiedzialności osób trzecich oznacza, że:",
                  "odpowiedzi": [
                    "do zapłaty całej kwoty zobowiązani są zarówno osoba trzecia, jak i podatnik, a wierzyciel może dochodzić całości lub części długu od wszystkich lub niektórych dłużników; zapłata przez jednego zwalnia pozostałych",
                    "każdy z dłużników odpowiada tylko za przypadającą na niego część długu",
                    "osoba trzecia odpowiada wyłącznie subsydiarnie, dopiero po bezskutecznej egzekucji wobec podatnika"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: do zapłaty całej kwoty zobowiązani są zarówno osoba trzecia, jak i podatnik, a wierzyciel może dochodzić całości lub części długu od wszystkich lub niektórych dłużników; zapłata przez jednego zwalnia pozostałych."
                },
                {
                  "pytanie": "Który z wymienionych podmiotów nie jest osobą trzecią w rozumieniu Ordynacji podatkowej?",
                  "odpowiedzi": [
                    "firmujący cudzą działalność gospodarczą",
                    "rozwiedziony małżonek podatnika",
                    "akcjonariusz spółki akcyjnej"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: akcjonariusz spółki akcyjnej."
                },
                {
                  "pytanie": "Zgodnie z ustawą o PIT, jeżeli koszty uzyskania przychodu przekroczą sumę przychodów, różnica jest:",
                  "odpowiedzi": [
                    "nadpłatą podatku",
                    "kosztem nieuzyskania przychodu",
                    "stratą ze źródła przychodów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: stratą ze źródła przychodów."
                },
                {
                  "pytanie": "Ograniczony obowiązek podatkowy w PIT:",
                  "odpowiedzi": [
                    "dotyczy wyłącznie cudzoziemców zatrudnionych na umowę o pracę",
                    "obejmuje osoby fizyczne, które nie mają w Polsce stałego miejsca zamieszkania",
                    "obejmuje osoby fizyczne mające miejsce zamieszkania w Polsce"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: obejmuje osoby fizyczne, które nie mają w Polsce stałego miejsca zamieszkania."
                },
                {
                  "pytanie": "Co do zasady skala w podatku dochodowym od osób fizycznych ma charakter:",
                  "odpowiedzi": [
                    "degresywny",
                    "progresywny (szczeblowany)",
                    "liniowy (proporcjonalny)"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: progresywny (szczeblowany)."
                },
                {
                  "pytanie": "W której ze zryczałtowanych form opodatkowania ustala się podstawę opodatkowania?",
                  "odpowiedzi": [
                    "ryczałt od przychodów ewidencjonowanych",
                    "ryczałt od przychodów osób duchownych",
                    "karta podatkowa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: ryczałt od przychodów ewidencjonowanych."
                },
                {
                  "pytanie": "Dochody uzyskane z najmu przez osobę fizyczną nie mogą być opodatkowane:",
                  "odpowiedzi": [
                    "ryczałtem od przychodów ewidencjonowanych",
                    "na zasadach ogólnych (skala podatkowa)",
                    "kartą podatkową"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: kartą podatkową."
                },
                {
                  "pytanie": "Dwie uproszczone formy opodatkowania dochodu/przychodu z działalności gospodarczej to:",
                  "odpowiedzi": [
                    "karta podatkowa i podatek tonażowy",
                    "podatek liniowy i skala podatkowa",
                    "ryczałt od przychodów ewidencjonowanych i karta podatkowa"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: ryczałt od przychodów ewidencjonowanych i karta podatkowa."
                },
                {
                  "pytanie": "Podział podatników na grupy podatkowe występuje w:",
                  "odpowiedzi": [
                    "podatku od spadków i darowizn",
                    "podatku dochodowym od osób fizycznych",
                    "podatku od czynności cywilnoprawnych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: podatku od spadków i darowizn."
                },
                {
                  "pytanie": "Organem właściwym w zakresie spraw dotyczących podatku od spadków i darowizn jest:",
                  "odpowiedzi": [
                    "starosta powiatu",
                    "wójt/burmistrz/prezydent miasta",
                    "naczelnik urzędu skarbowego"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Podatek od spadków i darowizn jest podatkiem państwowym administrowanym przez naczelnika urzędu skarbowego (mimo że jego wpływy zasilają budżet gminy). Wójt/burmistrz jest organem podatkowym w zakresie podatków i opłat lokalnych, a nie tego podatku."
                },
                {
                  "pytanie": "Brat/siostra w podatku od spadków i darowizn zaliczani są do:",
                  "odpowiedzi": [
                    "II grupy podatkowej",
                    "I grupy podatkowej",
                    "III grupy podatkowej"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: I grupy podatkowej."
                },
                {
                  "pytanie": "Stawki w PIT obowiązujące w ramach skali podatkowej mają charakter procentowy i wynoszą:",
                  "odpowiedzi": [
                    "17% i 32%",
                    "19% i 32%",
                    "18% i 32%"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: 18% i 32%."
                },
                {
                  "pytanie": "Podatnikami w podatku od spadków i darowizn są wyłącznie:",
                  "odpowiedzi": [
                    "osoby fizyczne i osoby prawne",
                    "osoby prawne i jednostki organizacyjne",
                    "osoby fizyczne"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: osoby fizyczne."
                },
                {
                  "pytanie": "W ramach ulgi mieszkaniowej w podatku od spadków i darowizn do podstawy opodatkowania nie wlicza się równowartości powierzchni użytkowej nabywanego budynku lub lokalu w wysokości:",
                  "odpowiedzi": [
                    "150 m²",
                    "110 m²",
                    "75 m²"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 110 m²."
                },
                {
                  "pytanie": "Co do zasady skala w podatku dochodowym od osób fizycznych ma charakter:",
                  "odpowiedzi": [
                    "regresywny",
                    "progresywny",
                    "proporcjonalny"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: progresywny."
                },
                {
                  "pytanie": "Wierzycielem podatkowym w polskim systemie podatkowym może być:",
                  "odpowiedzi": [
                    "wyłącznie Skarb Państwa",
                    "wyłącznie urząd skarbowy",
                    "Skarb Państwa lub gmina (jednostka samorządu terytorialnego)"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: Skarb Państwa lub gmina (jednostka samorządu terytorialnego)."
                },
                {
                  "pytanie": "W której formie opodatkowania dochodu podatnik nie ma prawa do odliczenia kosztów uzyskania przychodu?",
                  "odpowiedzi": [
                    "opodatkowanie na zasadach ogólnych (skala)",
                    "podatek liniowy",
                    "ryczałt od przychodów ewidencjonowanych"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: ryczałt od przychodów ewidencjonowanych."
                },
                {
                  "pytanie": "Które z poniższych źródeł przychodów nie może być opodatkowane ryczałtem od przychodów ewidencjonowanych?",
                  "odpowiedzi": [
                    "najem prywatny",
                    "pozarolnicza działalność gospodarcza",
                    "stosunek pracy"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: stosunek pracy."
                },
                {
                  "pytanie": "W której formie opodatkowania dochodu z działalności gospodarczej organ podatkowy ustala kwotę podatku w drodze decyzji ustalającej zobowiązanie podatkowe?",
                  "odpowiedzi": [
                    "ryczałt od przychodów ewidencjonowanych",
                    "karta podatkowa",
                    "podatek liniowy"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: karta podatkowa."
                },
                {
                  "pytanie": "Wysokość podatku płaconego w formie karty podatkowej zależy od:",
                  "odpowiedzi": [
                    "znamion zewnętrznych prowadzonej działalności gospodarczej",
                    "wysokości dochodu po odliczeniu kosztów",
                    "wysokości osiągniętego przychodu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: znamion zewnętrznych prowadzonej działalności gospodarczej."
                },
                {
                  "pytanie": "Zobowiązanie z tytułu PIT rozliczanego na zasadach ogólnych za 2015 r. ulegnie przedawnieniu:",
                  "odpowiedzi": [
                    "31 grudnia 2020 r.",
                    "1 stycznia 2021 r.",
                    "1 stycznia 2022 r."
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Termin płatności PIT za 2015 r. upłynął 30 kwietnia 2016 r. Bieg 5-letniego terminu liczy się od końca 2016 r. i upływa 31 grudnia 2021 r. — zobowiązanie jest przedawnione od 1 stycznia 2022 r. (uwaga: w kluczu wykładowcy widniało błędnie 2021 r.)."
                },
                {
                  "pytanie": "Podatnik (osoba fizyczna) rozliczający dochód uzyskany ze stosunku pracy może uwzględnić koszty:",
                  "odpowiedzi": [
                    "w wysokości 20% lub 50% przychodu",
                    "faktycznie poniesione, udokumentowane fakturami",
                    "ryczałtowe, tj. we wskazanej w ustawie kwocie"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: ryczałtowe, tj. we wskazanej w ustawie kwocie."
                },
                {
                  "pytanie": "Czy podatnik PIT uzyskujący przychody ze stosunku pracy może zaliczyć do kosztów uzyskania przychodu każdy wydatek służący uzyskaniu przychodu?",
                  "odpowiedzi": [
                    "tak, do wysokości 20% uzyskanego przychodu",
                    "tak, pod warunkiem odpowiedniego udokumentowania wydatku",
                    "nie, koszty te mają charakter ryczałtowy i wynikają z ustawy"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: nie, koszty te mają charakter ryczałtowy i wynikają z ustawy."
                },
                {
                  "pytanie": "Czy pożyczka stanowi przychód w rozumieniu ustawy o PIT?",
                  "odpowiedzi": [
                    "tak, ale wyłącznie w części odsetkowej",
                    "tak, w całości w dacie jej otrzymania",
                    "nie — pożyczka jest zwrotna i nie stanowi przychodu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: nie — pożyczka jest zwrotna i nie stanowi przychodu."
                },
                {
                  "pytanie": "Czy darowizna stanowi przychód w rozumieniu ustawy o podatku dochodowym od osób fizycznych?",
                  "odpowiedzi": [
                    "tak, stanowi przychód podatnika",
                    "nie, jest neutralna podatkowo, podobnie jak pożyczka",
                    "nie, podlega wyłącznie podatkowi od spadków i darowizn"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Art. 2 ust. 1 pkt 3 ustawy o PIT — przepisów ustawy nie stosuje się do przychodów podlegających przepisom o podatku od spadków i darowizn. Darowizna otrzymana przez osobę fizyczną podlega temu podatkowi, więc jest wyłączona spod PIT (nie jest przychodem w rozumieniu u.p.d.o.f.). (W kluczu wykładowcy była tu błędna odpowiedź „tak”.)"
                },
                {
                  "pytanie": "Odpowiedzialność osób trzecich za zobowiązania podatkowe:",
                  "odpowiedzi": [
                    "w niektórych przypadkach może być ograniczona kwotowo lub przedmiotowo",
                    "nigdy nie może być ograniczona przez ustawę",
                    "jest zawsze nieograniczona i obejmuje cały majątek"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: w niektórych przypadkach może być ograniczona kwotowo lub przedmiotowo."
                },
                {
                  "pytanie": "Czy konkubent może być osobą odpowiedzialną za zobowiązanie podatkowe podatnika?",
                  "odpowiedzi": [
                    "tak, zawsze odpowiada solidarnie, na takich samych zasadach jak małżonek",
                    "nie, konkubent nigdy nie odpowiada za cudze zobowiązania podatkowe",
                    "tak, ale tylko wtedy, gdy osiąga korzyść majątkową z działalności gospodarczej prowadzonej przez podatnika"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: tak, ale tylko wtedy, gdy osiąga korzyść majątkową z działalności gospodarczej prowadzonej przez podatnika."
                },
                {
                  "pytanie": "Zasadnicza regulacja postępowania podatkowego mieści się w:",
                  "odpowiedzi": [
                    "Ordynacji podatkowej",
                    "Kodeksie postępowania administracyjnego",
                    "ustawie o finansach publicznych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: Ordynacji podatkowej."
                },
                {
                  "pytanie": "Zaliczenie nadpłaty na poczet zobowiązań podatkowych stanowi:",
                  "odpowiedzi": [
                    "nieefektywny sposób wygasania zobowiązań podatkowych",
                    "efektywny sposób wygasania zobowiązań podatkowych",
                    "umorzenie zobowiązania z urzędu"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: efektywny sposób wygasania zobowiązań podatkowych."
                },
                {
                  "pytanie": "Katalog osób trzecich odpowiadających za zobowiązania podatkowe:",
                  "odpowiedzi": [
                    "jest otwarty — organ może go rozszerzyć w drodze decyzji",
                    "jest zamknięty — obejmuje wyłącznie osoby wskazane w ustawie",
                    "obejmuje każdą osobę powiązaną gospodarczo z podatnikiem"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: jest zamknięty — obejmuje wyłącznie osoby wskazane w ustawie."
                },
                {
                  "pytanie": "Potrącenie wierzytelności może nastąpić:",
                  "odpowiedzi": [
                    "wyłącznie z urzędu",
                    "wyłącznie na wniosek podatnika",
                    "zarówno na wniosek, jak i z urzędu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: zarówno na wniosek, jak i z urzędu."
                },
                {
                  "pytanie": "Wysokość ulgi prorodzinnej jest uzależniona od:",
                  "odpowiedzi": [
                    "formy opodatkowania podatnika",
                    "wieku najmłodszego dziecka",
                    "liczby (wychowywanych) dzieci"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: liczby (wychowywanych) dzieci."
                },
                {
                  "pytanie": "Podstawę opodatkowania dla budynku w podatku od nieruchomości stanowi:",
                  "odpowiedzi": [
                    "powierzchnia zabudowy działki",
                    "powierzchnia użytkowa (wyrażona w metrach kwadratowych)",
                    "wartość rynkowa budynku"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: powierzchnia użytkowa (wyrażona w metrach kwadratowych)."
                },
                {
                  "pytanie": "Osoba prawna, która uzyskała darowiznę, staje się podatnikiem:",
                  "odpowiedzi": [
                    "podatku dochodowego od osób prawnych (CIT)",
                    "podatku od spadków i darowizn",
                    "podatku od czynności cywilnoprawnych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: podatku dochodowego od osób prawnych (CIT)."
                },
                {
                  "pytanie": "Zasiedzenie stanowi przedmiot opodatkowania w:",
                  "odpowiedzi": [
                    "podatku od nieruchomości",
                    "podatku od czynności cywilnoprawnych",
                    "podatku od spadków i darowizn"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: podatku od spadków i darowizn."
                },
                {
                  "pytanie": "Stosunek zobowiązania podatkowego:",
                  "odpowiedzi": [
                    "określa m.in. wysokość podatku do zapłaty",
                    "nie wpływa na wysokość należnego podatku",
                    "określa wyłącznie termin płatności, a nie kwotę podatku"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: określa m.in. wysokość podatku do zapłaty."
                },
                {
                  "pytanie": "Podatnicy korzystający z uproszczonych (ryczałtowych) form opodatkowania:",
                  "odpowiedzi": [
                    "mogą odliczyć od podatku wyłącznie składki na ubezpieczenie społeczne",
                    "nie mają prawa do żadnych odliczeń od podatku",
                    "mogą pomniejszyć płacony podatek o zapłacone składki na ubezpieczenie zdrowotne (w ustawowym zakresie)"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: mogą pomniejszyć płacony podatek o zapłacone składki na ubezpieczenie zdrowotne (w ustawowym zakresie)."
                },
                {
                  "pytanie": "Osoby duchowne w Polsce:",
                  "odpowiedzi": [
                    "płacą wyłącznie podatek od nieruchomości",
                    "płacą podatek dochodowy, m.in. w formie ryczałtu od przychodów osób duchownych",
                    "są całkowicie zwolnione z podatku dochodowego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: płacą podatek dochodowy, m.in. w formie ryczałtu od przychodów osób duchownych."
                },
                {
                  "pytanie": "Elementy techniczne poszczególnych podatków (przedmiot, stawki itp.) uregulowane są:",
                  "odpowiedzi": [
                    "w Ordynacji podatkowej",
                    "w rozporządzeniach Ministra Finansów",
                    "w odrębnych ustawach regulujących dany podatek, a nie w Ordynacji podatkowej"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: w odrębnych ustawach regulujących dany podatek, a nie w Ordynacji podatkowej."
                },
                {
                  "pytanie": "Nadpłata jest zaliczana na poczet wymagalnych zobowiązań podatkowych:",
                  "odpowiedzi": [
                    "z urzędu",
                    "dopiero po wydaniu decyzji przez sąd",
                    "wyłącznie na wniosek podatnika"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: z urzędu."
                },
                {
                  "pytanie": "Podatnikami w podatku od spadków i darowizn są wyłącznie:",
                  "odpowiedzi": [
                    "osoby fizyczne",
                    "osoby fizyczne i osoby prawne",
                    "jednostki organizacyjne nieposiadające osobowości prawnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: osoby fizyczne."
                },
                {
                  "pytanie": "Jedyną jednostką samorządu terytorialnego, która posiada „własne” dochody, jest:",
                  "odpowiedzi": [
                    "powiat",
                    "gmina",
                    "województwo"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: gmina."
                },
                {
                  "pytanie": "Podatnik może pomniejszyć dochód do opodatkowania o kwotę przeznaczoną na korzystanie z sieci internetowej w wysokości:",
                  "odpowiedzi": [
                    "760 zł",
                    "1 000 zł",
                    "560 zł"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 760 zł."
                },
                {
                  "pytanie": "Podstawę opodatkowania w ryczałcie od przychodów ewidencjonowanych stanowi:",
                  "odpowiedzi": [
                    "przychód",
                    "przychód pomniejszony o składki ZUS",
                    "dochód (przychód pomniejszony o koszty)"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: przychód."
                },
                {
                  "pytanie": "Twierdzenie, że wadą państwowych funduszy celowych jest brak kontroli Parlamentu nad zarządzanymi środkami publicznymi, jest:",
                  "odpowiedzi": [
                    "prawdziwe wyłącznie wobec funduszy nieposiadających osobowości prawnej",
                    "prawdziwe — fundusze są w całości poza kontrolą Parlamentu",
                    "fałszywe — środki funduszy podlegają kontroli Parlamentu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: fałszywe — środki funduszy podlegają kontroli Parlamentu."
                },
                {
                  "pytanie": "Termin płatności zobowiązań podatkowych powstających z dniem skutecznego doręczenia decyzji wynosi:",
                  "odpowiedzi": [
                    "30 dni od dnia doręczenia tej decyzji",
                    "14 dni od dnia doręczenia tej decyzji",
                    "7 dni od dnia doręczenia tej decyzji"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 14 dni od dnia doręczenia tej decyzji."
                },
                {
                  "pytanie": "Sytuację faktyczną lub prawną, z którą prawo wiąże powstanie obowiązku podatkowego, określa się jako:",
                  "odpowiedzi": [
                    "podmiot opodatkowania",
                    "przedmiot opodatkowania",
                    "podstawę opodatkowania"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: przedmiot opodatkowania."
                },
                {
                  "pytanie": "Naczelnik urzędu skarbowego na wniosek podatnika przekazuje na rzecz wskazanej organizacji pożytku publicznego kwotę nieprzekraczającą:",
                  "odpowiedzi": [
                    "1,5% podatku należnego",
                    "1% podatku należnego",
                    "2% podatku należnego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 1% podatku należnego."
                },
                {
                  "pytanie": "Samorządowe zakłady budżetowe:",
                  "odpowiedzi": [
                    "nie mogą prowadzić cmentarzy — należy to wyłącznie do jednostek budżetowych",
                    "mogą prowadzić wyłącznie działalność oświatową",
                    "mogą wykonywać zadania m.in. z zakresu prowadzenia cmentarzy"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: mogą wykonywać zadania m.in. z zakresu prowadzenia cmentarzy."
                },
                {
                  "pytanie": "Państwowe jednostki budżetowe mogą być tworzone i likwidowane m.in. przez:",
                  "odpowiedzi": [
                    "wojewodów (a także ministrów i kierowników urzędów centralnych)",
                    "wyłącznie Ministra Finansów",
                    "wyłącznie Radę Ministrów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: wojewodów (a także ministrów i kierowników urzędów centralnych)."
                },
                {
                  "pytanie": "Wycofanie wniesionego projektu ustawy budżetowej przez projektodawcę jest możliwe:",
                  "odpowiedzi": [
                    "na każdym etapie prac, aż do podpisania ustawy",
                    "do czasu zakończenia drugiego czytania w Sejmie",
                    "wyłącznie przed pierwszym czytaniem"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: do czasu zakończenia drugiego czytania w Sejmie."
                },
                {
                  "pytanie": "Wykonaniem ustawy budżetowej kieruje:",
                  "odpowiedzi": [
                    "Sejm",
                    "Minister Finansów",
                    "Rada Ministrów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: Rada Ministrów."
                },
                {
                  "pytanie": "Koszty uzyskania przychodu ze stosunku służbowego, stosunku pracy oraz pracy nakładczej określane są w ustawie o PIT w sposób:",
                  "odpowiedzi": [
                    "indywidualny, na podstawie przedłożonych dokumentów",
                    "ryczałtowy",
                    "procentowy — w wysokości 20% przychodu"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: ryczałtowy."
                },
                {
                  "pytanie": "Skorzystanie z ulgi na dzieci niezależnie od kryterium dochodowego wymaga:",
                  "odpowiedzi": [
                    "wykonywania władzy rodzicielskiej nad więcej niż jednym dzieckiem przez co najmniej jeden dzień roku podatkowego",
                    "wychowywania dziecka przez cały rok podatkowy",
                    "nieprzekroczenia ustawowego limitu dochodu, niezależnie od liczby dzieci"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: wykonywania władzy rodzicielskiej nad więcej niż jednym dzieckiem przez co najmniej jeden dzień roku podatkowego."
                },
                {
                  "pytanie": "Zgodnie z Ordynacją podatkową płatnikiem jest:",
                  "odpowiedzi": [
                    "podmiot, na którym ciąży obowiązek podatkowy i który ponosi ekonomiczny ciężar podatku",
                    "podmiot obowiązany jedynie do pobrania i wpłacenia podatku, bez jego obliczania",
                    "osoba fizyczna, osoba prawna lub jednostka organizacyjna niemająca osobowości prawnej, obowiązana do obliczenia i pobrania od podatnika podatku oraz wpłacenia go we właściwym terminie organowi podatkowemu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: osoba fizyczna, osoba prawna lub jednostka organizacyjna niemająca osobowości prawnej, obowiązana do obliczenia i pobrania od podatnika podatku oraz wpłacenia go we właściwym terminie organowi podatkowemu."
                },
                {
                  "pytanie": "Czy z ulgi z tytułu wychowywania dzieci może skorzystać podatnik osiągający dochody z pozarolniczej działalności gospodarczej opodatkowanej podatkiem liniowym?",
                  "odpowiedzi": [
                    "nie, od dochodów opodatkowanych liniowo ulga nie przysługuje",
                    "tak, ale wyłącznie po przejściu na opodatkowanie według skali",
                    "tak, może skorzystać"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: tak, może skorzystać."
                },
                {
                  "pytanie": "Zobowiązanie podatkowe:",
                  "odpowiedzi": [
                    "powstaje zawsze równocześnie z obowiązkiem podatkowym",
                    "nie może powstać bez uprzedniego powstania obowiązku podatkowego",
                    "może powstać niezależnie od powstania obowiązku podatkowego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: nie może powstać bez uprzedniego powstania obowiązku podatkowego."
                },
                {
                  "pytanie": "Jeżeli w małżeństwie istniała rozdzielność majątkowa (intercyza), to po ustaniu małżeństwa rozwiedziony małżonek podatnika:",
                  "odpowiedzi": [
                    "nie może w ogóle odpowiadać za zaległości podatkowe byłego małżonka",
                    "może odpowiadać za zaległości podatkowe na zasadach przewidzianych dla członka rodziny podatnika",
                    "odpowiada całym swoim majątkiem, bez żadnych ograniczeń"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: może odpowiadać za zaległości podatkowe na zasadach przewidzianych dla członka rodziny podatnika."
                },
                {
                  "pytanie": "Instytucja gospodarki budżetowej może być tworzona tylko za zgodą:",
                  "odpowiedzi": [
                    "Rady Ministrów",
                    "Ministra Finansów",
                    "Sejmu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: Rady Ministrów."
                },
                {
                  "pytanie": "Podatkiem obciążającym posiadanie majątku jest:",
                  "odpowiedzi": [
                    "podatek od towarów i usług (VAT)",
                    "podatek dochodowy od osób fizycznych",
                    "podatek od nieruchomości, spadków, darowizn oraz środków transportu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: podatek od nieruchomości, spadków, darowizn oraz środków transportu."
                },
                {
                  "pytanie": "Podatek różni się od opłaty przede wszystkim tym, że:",
                  "odpowiedzi": [
                    "opłata zasila wyłącznie budżet państwa, a podatek budżety gmin",
                    "opłata jest zawsze związana ze świadczeniem (wzajemnym), a podatek ma charakter nieodpłatny",
                    "podatek jest dobrowolny, a opłata przymusowa"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: opłata jest zawsze związana ze świadczeniem (wzajemnym), a podatek ma charakter nieodpłatny."
                },
                {
                  "pytanie": "A. Smith sformułował następujące zasady podatkowe:",
                  "odpowiedzi": [
                    "powszechność, progresja, neutralność, prostota",
                    "równość, pewność, taniość, dogodność",
                    "wydajność, elastyczność, sprawiedliwość, jawność"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: równość, pewność, taniość, dogodność."
                },
                {
                  "pytanie": "Tradycyjna klasyfikacja budżetu państwa zawiera podział środków na:",
                  "odpowiedzi": [
                    "wyłącznie dochody i wydatki",
                    "aktywa, pasywa, dochody i koszty",
                    "przychody, rozchody, dochody oraz wydatki"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: przychody, rozchody, dochody oraz wydatki."
                },
                {
                  "pytanie": "Podstawę opodatkowania w ryczałcie od przychodów ewidencjonowanych stanowi:",
                  "odpowiedzi": [
                    "przychód",
                    "przychód pomniejszony o koszty jego uzyskania",
                    "dochód"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: przychód."
                },
                {
                  "pytanie": "Zgodnie z ustawą o PIT kwota składki na ubezpieczenie zdrowotne, o którą zmniejsza się podatek, nie może przekroczyć:",
                  "odpowiedzi": [
                    "7,75% podstawy wymiaru składki",
                    "9% podstawy wymiaru składki",
                    "7,75% należnego podatku"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 7,75% podstawy wymiaru składki."
                },
                {
                  "pytanie": "Wysokość podatku dochodowego w formie karty podatkowej wynika z:",
                  "odpowiedzi": [
                    "zeznania składanego przez podatnika po zakończeniu roku",
                    "ewidencji przychodów prowadzonej przez podatnika",
                    "decyzji organu podatkowego, wydawanej odrębnie na każdy rok podatkowy"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: decyzji organu podatkowego, wydawanej odrębnie na każdy rok podatkowy."
                },
                {
                  "pytanie": "Zabezpieczenia na majątku podatnika przed terminem płatności podatku można dokonać, jeżeli:",
                  "odpowiedzi": [
                    "upłynął ustawowy termin płatności podatku",
                    "podatnik trwale nie uiszcza wymagalnych zobowiązań o charakterze publicznoprawnym",
                    "podatnik złożył zeznanie podatkowe po terminie"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: podatnik trwale nie uiszcza wymagalnych zobowiązań o charakterze publicznoprawnym."
                },
                {
                  "pytanie": "Zgodnie z ustawą o PIT podatnicy obowiązani są złożyć urzędowi skarbowemu zeznanie roczne w terminie do:",
                  "odpowiedzi": [
                    "31 marca roku następującego po roku podatkowym",
                    "31 stycznia roku następującego po roku podatkowym",
                    "30 kwietnia roku następującego po roku podatkowym"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: 30 kwietnia roku następującego po roku podatkowym."
                },
                {
                  "pytanie": "Do obowiązków inkasenta podatkowego nie należy:",
                  "odpowiedzi": [
                    "wpłacenie pobranego podatku organowi podatkowemu",
                    "pobranie podatku od podatnika",
                    "obliczanie podatku"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: obliczanie podatku."
                },
                {
                  "pytanie": "Z opodatkowania w formie ryczałtu od przychodów ewidencjonowanych nie mogą skorzystać osoby, które:",
                  "odpowiedzi": [
                    "prowadzą działalność handlową lub gastronomiczną",
                    "prowadzą kantory, apteki oraz lombardy",
                    "uzyskują przychody z najmu prywatnego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: prowadzą kantory, apteki oraz lombardy."
                },
                {
                  "pytanie": "Zgodnie z ustawą o PIT wysokość kosztów uzyskania przychodów ze stosunku pracy zależy od:",
                  "odpowiedzi": [
                    "wysokości wynagrodzenia brutto podatnika",
                    "tego, czy podatnik otrzymuje przychody z jednego, czy z kilku zakładów pracy",
                    "stażu pracy podatnika"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: tego, czy podatnik otrzymuje przychody z jednego, czy z kilku zakładów pracy."
                },
                {
                  "pytanie": "Stawka podatku dochodowego obciążającego osoby fizyczne prowadzące działalność gospodarczą, które wybrały opodatkowanie liniowe, wynosi:",
                  "odpowiedzi": [
                    "18% podstawy obliczenia podatku",
                    "17% podstawy obliczenia podatku",
                    "19% podstawy obliczenia podatku"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: 19% podstawy obliczenia podatku."
                },
                {
                  "pytanie": "Nieograniczony obowiązek podatkowy dotyczy osób fizycznych, które:",
                  "odpowiedzi": [
                    "nie mają na terytorium RP miejsca zamieszkania",
                    "przebywają na terytorium RP dłużej niż 183 dni w roku podatkowym lub posiadają na terytorium RP ośrodek interesów życiowych lub gospodarczych",
                    "osiągają jakikolwiek dochód na terytorium RP, niezależnie od miejsca zamieszkania"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: przebywają na terytorium RP dłużej niż 183 dni w roku podatkowym lub posiadają na terytorium RP ośrodek interesów życiowych lub gospodarczych."
                },
                {
                  "pytanie": "Nieprzekraczalnym limitem w budżecie państwa nie są:",
                  "odpowiedzi": [
                    "przychody budżetowe",
                    "wydatki budżetowe",
                    "rozchody budżetowe"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: przychody budżetowe."
                },
                {
                  "pytanie": "Nieprzekraczalnym limitem w budżecie państwa są:",
                  "odpowiedzi": [
                    "rozchody oraz wydatki budżetowe",
                    "dochody oraz przychody budżetowe",
                    "wyłącznie dochody budżetowe"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: rozchody oraz wydatki budżetowe."
                },
                {
                  "pytanie": "Który ze sposobów finansowania deficytu budżetowego jest najważniejszy w warunkach polskich (daje najwyższe przychody)?",
                  "odpowiedzi": [
                    "wpływy z prywatyzacji majątku Skarbu Państwa",
                    "kredyt z banku centralnego (NBP)",
                    "emisja obligacji skarbowych"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: emisja obligacji skarbowych."
                },
                {
                  "pytanie": "Do sektora finansów publicznych nie zaliczamy:",
                  "odpowiedzi": [
                    "państwowych funduszy celowych",
                    "uczelni publicznych",
                    "fundacji"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: fundacji."
                },
                {
                  "pytanie": "Wykup papierów wartościowych stanowi:",
                  "odpowiedzi": [
                    "rozchód publiczny",
                    "przychód publiczny",
                    "wydatek publiczny"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: rozchód publiczny."
                },
                {
                  "pytanie": "Który z rodzajów danin publicznych nie stanowi dochodu budżetu państwa?",
                  "odpowiedzi": [
                    "cło",
                    "podatek",
                    "składka"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: składka."
                },
                {
                  "pytanie": "Zasada budżetowa postulująca, by cała materia budżetowa została ujęta w formie jednego aktu prawnego, nosi nazwę zasady:",
                  "odpowiedzi": [
                    "jedności formalnej",
                    "jedności materialnej",
                    "zupełności (powszechności)"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: jedności formalnej."
                },
                {
                  "pytanie": "Projekt ustawy budżetowej rząd przedkłada Sejmowi najpóźniej na:",
                  "odpowiedzi": [
                    "1 miesiąc przed rozpoczęciem roku budżetowego",
                    "3 miesiące przed rozpoczęciem roku budżetowego",
                    "30 września roku poprzedzającego rok budżetowy"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 3 miesiące przed rozpoczęciem roku budżetowego."
                },
                {
                  "pytanie": "Stawka opłaty prolongacyjnej:",
                  "odpowiedzi": [
                    "jest ustalana dowolnie przez organ podatkowy",
                    "jest równa podstawowej stawce odsetek za zwłokę",
                    "jest równa obniżonej stawce odsetek za zwłokę"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: jest równa obniżonej stawce odsetek za zwłokę."
                },
                {
                  "pytanie": "Wpływy uzyskane z prywatyzacji majątku Skarbu Państwa stanowią:",
                  "odpowiedzi": [
                    "dochody publiczne",
                    "przychody publiczne",
                    "rozchody publiczne"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: przychody publiczne."
                },
                {
                  "pytanie": "Podatnik za 2017 r. poniósł stratę na działalności gospodarczej w wysokości 10 tys. zł. Jaką maksymalną kwotę straty będzie mógł odliczyć od dochodów z działalności w 2018 r.?",
                  "odpowiedzi": [
                    "do 50% kwoty (5 000 zł) w jednym roku — stratę rozlicza się w ciągu najbliższych 5 lat (po ok. 20% rocznie)",
                    "całą stratę (10 000 zł) jednorazowo w 2018 r.",
                    "maksymalnie 10% straty rocznie przez 10 kolejnych lat"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: do 50% kwoty (5 000 zł) w jednym roku — stratę rozlicza się w ciągu najbliższych 5 lat (po ok. 20% rocznie)."
                },
                {
                  "pytanie": "Aby zobowiązanie mogło powstać, decyzja konstytutywna powinna być doręczona podatnikowi w okresie:",
                  "odpowiedzi": [
                    "5 lat od końca roku kalendarzowego, w którym powstał obowiązek podatkowy",
                    "3 lat od końca roku kalendarzowego, w którym powstał obowiązek podatkowy",
                    "1 roku od dnia powstania obowiązku podatkowego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 3 lat od końca roku kalendarzowego, w którym powstał obowiązek podatkowy."
                },
                {
                  "pytanie": "Maksymalna kwota ulgi na internet wynosi:",
                  "odpowiedzi": [
                    "760 zł",
                    "560 zł",
                    "1 000 zł"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 760 zł."
                },
                {
                  "pytanie": "Podstawowa funkcja podatków to funkcja:",
                  "odpowiedzi": [
                    "fiskalna",
                    "stymulacyjna",
                    "redystrybucyjna"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: fiskalna."
                },
                {
                  "pytanie": "Główna funkcja finansów publicznych polegająca na gromadzeniu odpowiedniej ilości środków pieniężnych za pomocą aparatu skarbowego to funkcja:",
                  "odpowiedzi": [
                    "fiskalna",
                    "redystrybucyjna",
                    "informacyjno-kontrolna"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: fiskalna."
                },
                {
                  "pytanie": "Do sektora finansów publicznych należy:",
                  "odpowiedzi": [
                    "spółki Skarbu Państwa",
                    "Narodowy Bank Polski",
                    "Trybunał Konstytucyjny"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: Trybunał Konstytucyjny."
                },
                {
                  "pytanie": "Podatki wspólne rządu i samorządu to:",
                  "odpowiedzi": [
                    "podatek od nieruchomości i podatek rolny",
                    "podatek od towarów i usług (VAT) i akcyza",
                    "podatek dochodowy od osób fizycznych i podatek dochodowy od osób prawnych"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: podatek dochodowy od osób fizycznych i podatek dochodowy od osób prawnych."
                },
                {
                  "pytanie": "Obsługę bankową budżetu państwa (bez jednostek zagranicznych) prowadzi:",
                  "odpowiedzi": [
                    "dowolny bank komercyjny wybrany w przetargu",
                    "wyłącznie Bank Gospodarstwa Krajowego",
                    "NBP lub BGK (po wejściu Polski do strefy euro)"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: NBP lub BGK (po wejściu Polski do strefy euro)."
                },
                {
                  "pytanie": "Do państwowych funduszy celowych nie zalicza się funduszy, których jedynym źródłem przychodów (z wyłączeniem odsetek i darowizn) jest:",
                  "odpowiedzi": [
                    "wpływy z prywatyzacji majątku Skarbu Państwa",
                    "dotacja z budżetu państwa",
                    "składka na ubezpieczenie społeczne"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: dotacja z budżetu państwa."
                },
                {
                  "pytanie": "Agencja wykonawcza jest:",
                  "odpowiedzi": [
                    "jednostką budżetową nieposiadającą osobowości prawnej",
                    "spółką prawa handlowego z udziałem Skarbu Państwa",
                    "państwową osobą prawną powoływaną na podstawie odrębnej ustawy w celu realizacji zadań państwa"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: państwową osobą prawną powoływaną na podstawie odrębnej ustawy w celu realizacji zadań państwa."
                },
                {
                  "pytanie": "Odrzucenie przez Sejm zgłoszonej przez Senat poprawki do projektu ustawy budżetowej wymaga:",
                  "odpowiedzi": [
                    "większości 2/3 głosów w obecności co najmniej połowy ustawowej liczby posłów",
                    "bezwzględnej większości głosów w obecności co najmniej połowy ustawowej liczby posłów",
                    "zwykłej większości głosów, bez wymogu kworum"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: bezwzględnej większości głosów w obecności co najmniej połowy ustawowej liczby posłów."
                },
                {
                  "pytanie": "Jaką funkcję pełni subwencja ogólna?",
                  "odpowiedzi": [
                    "stymulacyjną",
                    "fiskalną",
                    "redystrybucyjną"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: redystrybucyjną."
                },
                {
                  "pytanie": "Podatnicy karty podatkowej:",
                  "odpowiedzi": [
                    "wpłacają co miesiąc podatek w stałej wysokości wynikającej z decyzji, a nie zaliczki",
                    "rozliczają podatek jednorazowo po zakończeniu roku podatkowego",
                    "wpłacają miesięczne zaliczki obliczane od uzyskanego przychodu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: wpłacają co miesiąc podatek w stałej wysokości wynikającej z decyzji, a nie zaliczki."
                },
                {
                  "pytanie": "Dysponenci części budżetowych mogą dokonywać przeniesień wydatków:",
                  "odpowiedzi": [
                    "między działami i częściami bez żadnych ograniczeń",
                    "między rozdziałami i paragrafami, a jeżeli są dysponentami więcej niż jednej części — także między częściami w ramach jednego działu i rozdziału",
                    "wyłącznie za zgodą Sejmu wyrażoną w uchwale"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: między rozdziałami i paragrafami, a jeżeli są dysponentami więcej niż jednej części — także między częściami w ramach jednego działu i rozdziału."
                },
                {
                  "pytanie": "Samorządowy zakład budżetowy tworzy:",
                  "odpowiedzi": [
                    "wojewoda",
                    "organ stanowiący jednostki samorządu terytorialnego",
                    "organ wykonawczy jednostki samorządu terytorialnego (wójt/zarząd)"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: organ stanowiący jednostki samorządu terytorialnego."
                },
                {
                  "pytanie": "Agencja wykonawcza jest tworzona:",
                  "odpowiedzi": [
                    "na podstawie rozporządzenia Rady Ministrów",
                    "w drodze uchwały Sejmu",
                    "na podstawie odrębnej ustawy w celu realizacji zadań państwa"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: na podstawie odrębnej ustawy w celu realizacji zadań państwa."
                },
                {
                  "pytanie": "Państwowy dług publiczny zgodnie z Konstytucją RP nie może przekroczyć:",
                  "odpowiedzi": [
                    "50% PKB",
                    "55% PKB",
                    "60% PKB"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: 60% PKB."
                }
              ]
            },
            {
              "nazwa": "sztosy2",
              "pytania": [
                {
                  "pytanie": "Rozchodem publicznym jest:",
                  "odpowiedzi": [
                    "spłata wcześniej zaciągniętych kredytów i pożyczek oraz wykup papierów wartościowych",
                    "wpływ ze sprzedaży obligacji skarbowych",
                    "odsetki od środków zgromadzonych na rachunkach bankowych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: spłata wcześniej zaciągniętych kredytów i pożyczek oraz wykup papierów wartościowych."
                },
                {
                  "pytanie": "Wydatkiem publicznym jest:",
                  "odpowiedzi": [
                    "wpływ uzyskany z prywatyzacji majątku Skarbu Państwa",
                    "przeznaczenie środków na finansowanie zadań publicznych realizowanych przez państwo",
                    "spłata rat wcześniej zaciągniętych pożyczek i kredytów"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: przeznaczenie środków na finansowanie zadań publicznych realizowanych przez państwo."
                },
                {
                  "pytanie": "Jednostki samorządu terytorialnego wydające uchwały w sprawie podatków i opłat lokalnych:",
                  "odpowiedzi": [
                    "mają ograniczoną swobodę — ustalają stawki wyłącznie w granicach (do wysokości maksymalnych) określonych w ustawie",
                    "nie mają żadnego wpływu na stawki, które w całości określa ustawa",
                    "mają pełną dowolność w ustalaniu wysokości stawek"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: mają ograniczoną swobodę — ustalają stawki wyłącznie w granicach (do wysokości maksymalnych) określonych w ustawie."
                },
                {
                  "pytanie": "Do sektora finansów publicznych zaliczamy:",
                  "odpowiedzi": [
                    "jednostki budżetowe, samorządowe zakłady budżetowe oraz państwowe fundusze celowe",
                    "banki, instytuty badawcze oraz spółki prawa handlowego",
                    "stowarzyszenia, fundacje oraz przedsiębiorstwa państwowe"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: jednostki budżetowe, samorządowe zakłady budżetowe oraz państwowe fundusze celowe."
                },
                {
                  "pytanie": "Agencja wykonawcza jest:",
                  "odpowiedzi": [
                    "państwową osobą prawną powoływaną na podstawie odrębnej ustawy",
                    "jednostką budżetową nieposiadającą osobowości prawnej",
                    "samorządową osobą prawną tworzoną przez jednostkę samorządu terytorialnego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: państwową osobą prawną powoływaną na podstawie odrębnej ustawy."
                },
                {
                  "pytanie": "Funkcja fiskalna podatków (finansów publicznych) polega na:",
                  "odpowiedzi": [
                    "oddziaływaniu na zachowania podatników za pomocą ulg i obciążeń",
                    "podziale dochodów między poszczególne grupy społeczne",
                    "gromadzeniu środków pieniężnych niezbędnych do realizacji zadań państwa"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: gromadzeniu środków pieniężnych niezbędnych do realizacji zadań państwa."
                },
                {
                  "pytanie": "Prezydent RP może skrócić kadencję Sejmu, jeżeli:",
                  "odpowiedzi": [
                    "Senat zgłosi poprawki do projektu ustawy budżetowej",
                    "w ciągu 4 miesięcy od dnia przedłożenia Sejmowi projektu ustawy budżetowej nie zostanie ona przedstawiona Prezydentowi do podpisu",
                    "Sejm nie uchwali ustawy budżetowej w ciągu 2 miesięcy od złożenia projektu"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: w ciągu 4 miesięcy od dnia przedłożenia Sejmowi projektu ustawy budżetowej nie zostanie ona przedstawiona Prezydentowi do podpisu."
                },
                {
                  "pytanie": "Do obowiązków Rady Ministrów w zakresie materii budżetowej należy:",
                  "odpowiedzi": [
                    "podpisanie ustawy budżetowej i zarządzenie jej ogłoszenia",
                    "przedłożenie Sejmowi projektu ustawy budżetowej najpóźniej na 3 miesiące przed rozpoczęciem roku budżetowego",
                    "uchwalenie budżetu państwa w formie ustawy budżetowej"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: przedłożenie Sejmowi projektu ustawy budżetowej najpóźniej na 3 miesiące przed rozpoczęciem roku budżetowego."
                },
                {
                  "pytanie": "Sektor finansów publicznych tworzą m.in.:",
                  "odpowiedzi": [
                    "spółki Skarbu Państwa oraz banki komercyjne",
                    "fundacje, stowarzyszenia oraz partie polityczne",
                    "organy władzy publicznej, jednostki samorządu terytorialnego oraz jednostki budżetowe"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: organy władzy publicznej, jednostki samorządu terytorialnego oraz jednostki budżetowe."
                },
                {
                  "pytanie": "Agencje wykonawcze:",
                  "odpowiedzi": [
                    "są powoływane na podstawie odrębnej ustawy w celu realizacji zadań państwa",
                    "są tworzone w drodze rozporządzenia Ministra Finansów",
                    "nie mogą w żadnym przypadku otrzymywać dotacji z budżetu państwa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: są powoływane na podstawie odrębnej ustawy w celu realizacji zadań państwa."
                },
                {
                  "pytanie": "Budżetowanie brutto polega na tym, że jednostka:",
                  "odpowiedzi": [
                    "pokrywa swoje wydatki bezpośrednio z budżetu, a uzyskane dochody odprowadza w pełnej wysokości na rachunek budżetu",
                    "pokrywa swoje wydatki z dochodów własnych, a nadwyżkę odprowadza do budżetu",
                    "zatrzymuje całość uzyskanych dochodów i nie rozlicza się z budżetem"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: pokrywa swoje wydatki bezpośrednio z budżetu, a uzyskane dochody odprowadza w pełnej wysokości na rachunek budżetu."
                },
                {
                  "pytanie": "Budżetowanie netto polega na tym, że jednostka:",
                  "odpowiedzi": [
                    "pokrywa swoje wydatki bezpośrednio z budżetu, a dochody odprowadza w pełnej kwocie",
                    "pokrywa swoje wydatki z osiąganych dochodów własnych, a nadwyżkę odprowadza do budżetu",
                    "ujmuje wszystkie swoje dochody i wydatki w pełnych kwotach w budżecie"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: pokrywa swoje wydatki z osiąganych dochodów własnych, a nadwyżkę odprowadza do budżetu."
                },
                {
                  "pytanie": "Zasada pewności (zupełności) budżetu wiąże się z:",
                  "odpowiedzi": [
                    "uchwaleniem budżetu przed rozpoczęciem roku budżetowego",
                    "obowiązkiem pełnego pokrycia wydatków w planowanych dochodach",
                    "ujęciem wszystkich dochodów i wydatków jednostek budżetowych w budżecie (budżetowanie brutto)"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: ujęciem wszystkich dochodów i wydatków jednostek budżetowych w budżecie (budżetowanie brutto)."
                },
                {
                  "pytanie": "Zasada zupełności (kompleksowości, powszechności) budżetu postuluje, aby:",
                  "odpowiedzi": [
                    "wydatki były ujęte ze szczegółowością wynikającą z klasyfikacji budżetowej",
                    "cała materia budżetowa była ujęta w jednym akcie prawnym",
                    "budżet obejmował wszystkie dochody i wydatki państwa, bez tworzenia gospodarki pozabudżetowej"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: budżet obejmował wszystkie dochody i wydatki państwa, bez tworzenia gospodarki pozabudżetowej."
                },
                {
                  "pytanie": "Prowizorium budżetowe to:",
                  "odpowiedzi": [
                    "szczegółowy plan wykonawczy budżetu opracowywany po jego uchwaleniu",
                    "budżet uchwalany na okres dłuższy niż jeden rok budżetowy",
                    "budżet tymczasowy, uchwalany na okres krótszy niż rok, z ogólnie ustalonymi kwotami dochodów i wydatków"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: budżet tymczasowy, uchwalany na okres krótszy niż rok, z ogólnie ustalonymi kwotami dochodów i wydatków."
                },
                {
                  "pytanie": "Zasada jedności formalnej budżetu oznacza, że:",
                  "odpowiedzi": [
                    "wszystkie dochody i wydatki budżetowe ujęte są w jednym akcie prawnym — ustawie budżetowej",
                    "budżet jest uchwalany corocznie, na okres roku budżetowego",
                    "środki publiczne wpływające do budżetu tworzą jeden wspólny fundusz"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: wszystkie dochody i wydatki budżetowe ujęte są w jednym akcie prawnym — ustawie budżetowej."
                },
                {
                  "pytanie": "Zasada jedności materialnej budżetu oznacza, że:",
                  "odpowiedzi": [
                    "cała materia budżetowa ujęta jest w jednej ustawie budżetowej",
                    "każdy dochód jest z góry przypisany do konkretnego wydatku",
                    "środki publiczne wpływające do budżetu stanowią jeden wspólny fundusz przeznaczany na finansowanie wydatków (bez wiązania dochodów z konkretnymi wydatkami)"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: środki publiczne wpływające do budżetu stanowią jeden wspólny fundusz przeznaczany na finansowanie wydatków (bez wiązania dochodów z konkretnymi wydatkami)."
                },
                {
                  "pytanie": "Opinia NIK w sprawie absolutorium dla Rady Ministrów:",
                  "odpowiedzi": [
                    "nie jest wiążąca dla Sejmu",
                    "jest wiążąca dla Sejmu",
                    "zastępuje uchwałę Sejmu w sprawie absolutorium"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: nie jest wiążąca dla Sejmu."
                },
                {
                  "pytanie": "Jeżeli ustawa budżetowa ani ustawa o prowizorium budżetowym nie zostały ogłoszone przed 1 stycznia, podstawą gospodarki finansowej państwa jest:",
                  "odpowiedzi": [
                    "przedstawiony Sejmowi projekt ustawy budżetowej (lub projekt ustawy o prowizorium budżetowym)",
                    "ustawa budżetowa obowiązująca w roku poprzednim",
                    "rozporządzenie Rady Ministrów tymczasowo zastępujące budżet"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: przedstawiony Sejmowi projekt ustawy budżetowej (lub projekt ustawy o prowizorium budżetowym)."
                },
                {
                  "pytanie": "Budżet zadaniowy (w odróżnieniu od tradycyjnego) charakteryzuje się tym, że:",
                  "odpowiedzi": [
                    "utrwala resortowe podejście, utrudniając współpracę międzyresortową",
                    "uniemożliwia powiązanie wydatków z kategoriami skuteczności i efektywności",
                    "umożliwia powiązanie wydatków z celami i zadaniami rządu oraz ich wieloletnią (trzyletnią) projekcję"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: umożliwia powiązanie wydatków z celami i zadaniami rządu oraz ich wieloletnią (trzyletnią) projekcję."
                },
                {
                  "pytanie": "Dochody publiczne to:",
                  "odpowiedzi": [
                    "wpływy o charakterze jednorazowym i zwrotnym",
                    "środki przeznaczone na spłatę wcześniej zaciągniętych zobowiązań",
                    "wpływy do budżetu o charakterze stałym i bezzwrotnym (np. podatki)"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: wpływy do budżetu o charakterze stałym i bezzwrotnym (np. podatki)."
                },
                {
                  "pytanie": "Przychody publiczne to:",
                  "odpowiedzi": [
                    "wydatki na spłatę rat zaciągniętych kredytów i pożyczek",
                    "wpływy bezzwrotne i stałe, np. podatki i cła",
                    "wpływy o charakterze zwrotnym i jednorazowym, np. ze sprzedaży skarbowych papierów wartościowych"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: wpływy o charakterze zwrotnym i jednorazowym, np. ze sprzedaży skarbowych papierów wartościowych."
                },
                {
                  "pytanie": "Deficyt budżetowy to:",
                  "odpowiedzi": [
                    "dodatnia różnica między dochodami a wydatkami budżetowymi",
                    "całość zobowiązań władz publicznych z tytułu zaciągniętych pożyczek",
                    "ujemna różnica między dochodami a wydatkami budżetowymi ustalona dla okresu rozliczeniowego"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: ujemna różnica między dochodami a wydatkami budżetowymi ustalona dla okresu rozliczeniowego."
                },
                {
                  "pytanie": "Saldo (wynik) budżetowe to:",
                  "odpowiedzi": [
                    "różnica między dochodami a wydatkami budżetowymi — dodatnie stanowi nadwyżkę, ujemne deficyt",
                    "suma wszystkich zobowiązań Skarbu Państwa z tytułu zadłużenia",
                    "różnica między przychodami a rozchodami budżetu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: różnica między dochodami a wydatkami budżetowymi — dodatnie stanowi nadwyżkę, ujemne deficyt."
                },
                {
                  "pytanie": "Dług publiczny powstaje przede wszystkim w związku z:",
                  "odpowiedzi": [
                    "gromadzeniem nadwyżek budżetowych z lat poprzednich",
                    "bieżącym poborem podatków, ceł i opłat",
                    "finansowaniem (kumulacją) deficytów budżetowych z kolejnych lat"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: finansowaniem (kumulacją) deficytów budżetowych z kolejnych lat."
                },
                {
                  "pytanie": "Do przyczyn (źródeł) powstawania deficytu budżetowego należą m.in.:",
                  "odpowiedzi": [
                    "nadmierne wydatki socjalne oraz nieefektywnie pobierane podatki",
                    "ograniczanie funkcji socjalnych państwa",
                    "wysoka efektywność poboru podatków"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: nadmierne wydatki socjalne oraz nieefektywnie pobierane podatki."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP deficyt budżetowy:",
                  "odpowiedzi": [
                    "musi być finansowany wyłącznie z nadwyżek z lat ubiegłych",
                    "nie może być finansowany przez bank centralny w drodze emisji pieniądza",
                    "może zostać w całości pokryty emisją pieniądza przez NBP"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: nie może być finansowany przez bank centralny w drodze emisji pieniądza."
                },
                {
                  "pytanie": "Podstawowymi instrumentami finansowania deficytu budżetowego są:",
                  "odpowiedzi": [
                    "składki na ubezpieczenia społeczne i zdrowotne",
                    "dotacje i subwencje z budżetu Unii Europejskiej",
                    "bony skarbowe oraz obligacje skarbowe"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: bony skarbowe oraz obligacje skarbowe."
                },
                {
                  "pytanie": "Procedury ostrożnościowe (sanacyjne) uruchamiane są, gdy:",
                  "odpowiedzi": [
                    "relacja państwowego długu publicznego do PKB przekroczy określone progi (np. 55% i 60%)",
                    "nadwyżka budżetowa przekroczy 3% PKB",
                    "deficyt budżetowy przekroczy 1% PKB"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: relacja państwowego długu publicznego do PKB przekroczy określone progi (np. 55% i 60%)."
                },
                {
                  "pytanie": "Przekroczenie przez relację państwowego długu publicznego do PKB progu 60%:",
                  "odpowiedzi": [
                    "powoduje automatyczne rozwiązanie Sejmu z mocy prawa",
                    "oznacza naruszenie Konstytucji i m.in. zakaz udzielania nowych poręczeń i gwarancji",
                    "nie wywołuje żadnych skutków prawnych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: oznacza naruszenie Konstytucji i m.in. zakaz udzielania nowych poręczeń i gwarancji."
                },
                {
                  "pytanie": "Obligacje skarbowe to:",
                  "odpowiedzi": [
                    "krótkoterminowe papiery wartościowe o terminie wykupu do jednego roku",
                    "papiery wartościowe emitowane na okres dłuższy niż rok, zawierające zobowiązanie Skarbu Państwa do zapłaty wartości nominalnej wraz z oprocentowaniem",
                    "bezzwrotne dotacje przekazywane z budżetu państwa"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: papiery wartościowe emitowane na okres dłuższy niż rok, zawierające zobowiązanie Skarbu Państwa do zapłaty wartości nominalnej wraz z oprocentowaniem."
                },
                {
                  "pytanie": "Bony skarbowe to:",
                  "odpowiedzi": [
                    "papiery wartościowe emitowane na okres dłuższy niż rok",
                    "krótkoterminowe papiery wartościowe o terminie wykupu nieprzekraczającym roku, sprzedawane z dyskontem",
                    "obligacje oszczędnościowe adresowane wyłącznie do osób fizycznych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: krótkoterminowe papiery wartościowe o terminie wykupu nieprzekraczającym roku, sprzedawane z dyskontem."
                },
                {
                  "pytanie": "Nadzór nad działalnością banków sprawuje:",
                  "odpowiedzi": [
                    "Najwyższa Izba Kontroli",
                    "Komisja Nadzoru Finansowego",
                    "Rada Polityki Pieniężnej"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: Komisja Nadzoru Finansowego."
                },
                {
                  "pytanie": "Nadzór nad Komisją Nadzoru Finansowego sprawuje:",
                  "odpowiedzi": [
                    "Prezes NBP",
                    "Sejm",
                    "Rada Ministrów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: Rada Ministrów."
                },
                {
                  "pytanie": "Cechą podatku jest:",
                  "odpowiedzi": [
                    "odpłatność i dobrowolność świadczenia",
                    "zwrotność i ekwiwalentność świadczenia",
                    "nieodpłatność, przymusowość, bezzwrotność oraz jednostronność"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: nieodpłatność, przymusowość, bezzwrotność oraz jednostronność."
                },
                {
                  "pytanie": "Zgodnie z Ordynacją podatkową podatkiem jest:",
                  "odpowiedzi": [
                    "dobrowolne świadczenie pieniężne na rzecz organizacji pożytku publicznego",
                    "odpłatne świadczenie związane z konkretną usługą organu publicznego",
                    "publicznoprawne, nieodpłatne, przymusowe i bezzwrotne świadczenie pieniężne na rzecz Skarbu Państwa, województwa, powiatu lub gminy, wynikające z ustawy podatkowej"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: publicznoprawne, nieodpłatne, przymusowe i bezzwrotne świadczenie pieniężne na rzecz Skarbu Państwa, województwa, powiatu lub gminy, wynikające z ustawy podatkowej."
                },
                {
                  "pytanie": "Dotacja z budżetu państwa charakteryzuje się tym, że:",
                  "odpowiedzi": [
                    "ma ściśle określone przeznaczenie i wysokość, a podmiot ją otrzymujący musi ją wydać zgodnie z wolą podmiotu udzielającego",
                    "ma charakter ogólny i bezwarunkowy, a o przeznaczeniu decyduje samodzielnie beneficjent",
                    "jest wpływem o charakterze zwrotnym, podlegającym spłacie"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: ma ściśle określone przeznaczenie i wysokość, a podmiot ją otrzymujący musi ją wydać zgodnie z wolą podmiotu udzielającego."
                },
                {
                  "pytanie": "Subwencja ogólna dla jednostek samorządu terytorialnego:",
                  "odpowiedzi": [
                    "ma ściśle określone przeznaczenie wskazane przez podmiot udzielający",
                    "ma charakter ogólny, bezzwrotny i bezwarunkowy, a o sposobie jej wydatkowania decydują samodzielnie organy JST",
                    "jest świadczeniem zwrotnym, podlegającym spłacie do budżetu państwa"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: ma charakter ogólny, bezzwrotny i bezwarunkowy, a o sposobie jej wydatkowania decydują samodzielnie organy JST."
                },
                {
                  "pytanie": "Rezerwa ogólna budżetu państwa:",
                  "odpowiedzi": [
                    "jej dysponentem jest Sejm",
                    "nie może być wyższa niż 0,2% wydatków budżetu państwa, a jej dysponentem jest Rada Ministrów",
                    "nie może przekroczyć 5% wydatków budżetu państwa"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: nie może być wyższa niż 0,2% wydatków budżetu państwa, a jej dysponentem jest Rada Ministrów."
                },
                {
                  "pytanie": "Suma rezerw celowych w budżecie państwa:",
                  "odpowiedzi": [
                    "nie może przekroczyć 5% wydatków budżetu",
                    "nie może przekroczyć 0,2% wydatków budżetu",
                    "nie podlega żadnym ograniczeniom kwotowym"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: nie może przekroczyć 5% wydatków budżetu."
                },
                {
                  "pytanie": "Blokowanie planowanych wydatków budżetowych oznacza:",
                  "odpowiedzi": [
                    "swobodne przenoszenie wydatków między działami bez ograniczeń",
                    "trwałe umorzenie zobowiązań Skarbu Państwa",
                    "okresowy lub obowiązujący do końca roku zakaz dysponowania częścią lub całością planowanych wydatków"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: okresowy lub obowiązujący do końca roku zakaz dysponowania częścią lub całością planowanych wydatków."
                },
                {
                  "pytanie": "Wieloletni Plan Finansowy Państwa (WPFP) sporządzany jest na:",
                  "odpowiedzi": [
                    "10 lat budżetowych",
                    "4 lata budżetowe",
                    "1 rok budżetowy"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 4 lata budżetowe."
                },
                {
                  "pytanie": "Roczne sprawozdanie z wykonania budżetu państwa Rada Ministrów przedstawia Sejmowi i NIK w terminie do:",
                  "odpowiedzi": [
                    "30 września roku następnego po roku budżetowym",
                    "31 grudnia roku budżetowego",
                    "31 maja roku następującego po upływie roku budżetowego"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: 31 maja roku następującego po upływie roku budżetowego."
                },
                {
                  "pytanie": "Sejm na rozpatrzenie sprawozdania z wykonania budżetu i podjęcie uchwały w sprawie absolutorium ma:",
                  "odpowiedzi": [
                    "30 dni",
                    "90 dni",
                    "14 dni"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 90 dni."
                },
                {
                  "pytanie": "Daniny publiczne to:",
                  "odpowiedzi": [
                    "środki zwrotne pochodzące z emisji papierów wartościowych",
                    "podatki, cła, opłaty oraz inne świadczenia pieniężne wynikające z odrębnych ustaw — stanowią ok. 90% dochodów budżetu państwa",
                    "wyłącznie wpływy ze sprzedaży majątku Skarbu Państwa"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: podatki, cła, opłaty oraz inne świadczenia pieniężne wynikające z odrębnych ustaw — stanowią ok. 90% dochodów budżetu państwa."
                },
                {
                  "pytanie": "Transfery wewnętrzne w sektorze finansów publicznych:",
                  "odpowiedzi": [
                    "nie zwiększają łącznej sumy środków publicznych",
                    "zwiększają łączną sumę środków publicznych",
                    "są wpływem o charakterze zwrotnym, wymagającym spłaty"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: nie zwiększają łącznej sumy środków publicznych."
                },
                {
                  "pytanie": "Państwowy dług publiczny w relacji do długu Skarbu Państwa:",
                  "odpowiedzi": [
                    "jest pojęciem szerszym — obejmuje dług całego sektora finansów publicznych, łącznie z długiem jednostek samorządu terytorialnego",
                    "obejmuje wyłącznie zobowiązania jednostek samorządu terytorialnego",
                    "jest pojęciem węższym niż dług Skarbu Państwa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: jest pojęciem szerszym — obejmuje dług całego sektora finansów publicznych, łącznie z długiem jednostek samorządu terytorialnego."
                },
                {
                  "pytanie": "Do zaciągania zobowiązań w celu sfinansowania potrzeb pożyczkowych państwa oraz zarządzania długiem publicznym upoważniony jest:",
                  "odpowiedzi": [
                    "Minister Finansów",
                    "Marszałek Sejmu",
                    "Prezes NBP"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: Minister Finansów."
                },
                {
                  "pytanie": "Maksymalny limit deficytu wynikający z prawa Unii Europejskiej (procedura nadmiernego deficytu) wynosi:",
                  "odpowiedzi": [
                    "3% PKB",
                    "60% PKB",
                    "0,2% PKB"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 3% PKB."
                },
                {
                  "pytanie": "Wydatki na obsługę długu publicznego (np. odsetki od zaciągniętych zobowiązań) zalicza się do tzw.:",
                  "odpowiedzi": [
                    "wydatków majątkowych (inwestycyjnych)",
                    "wydatków sztywnych",
                    "rozchodów publicznych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: wydatków sztywnych."
                },
                {
                  "pytanie": "Organami NBP są:",
                  "odpowiedzi": [
                    "Prezes NBP, Rada Polityki Pieniężnej oraz Zarząd NBP",
                    "Rada Ministrów, Minister Finansów oraz Zarząd NBP",
                    "Prezes NBP, Komisja Nadzoru Finansowego oraz Sejm"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: Prezes NBP, Rada Polityki Pieniężnej oraz Zarząd NBP."
                },
                {
                  "pytanie": "Rada Polityki Pieniężnej składa się z:",
                  "odpowiedzi": [
                    "Prezesa NBP oraz 9 członków powoływanych przez Prezydenta, Sejm i Senat na 6-letnią kadencję",
                    "wyłącznie z członków powoływanych przez Radę Ministrów",
                    "Prezesa NBP oraz 15 członków powoływanych na 4-letnią kadencję"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: Prezesa NBP oraz 9 członków powoływanych przez Prezydenta, Sejm i Senat na 6-letnią kadencję."
                },
                {
                  "pytanie": "Płatnik w prawie podatkowym jest obowiązany do:",
                  "odpowiedzi": [
                    "wyłącznie pobrania podatku od podatnika i wpłacenia go organowi",
                    "obliczenia podatku, pobrania go od podatnika oraz wpłacenia we właściwym terminie organowi podatkowemu",
                    "wyłącznie obliczenia wysokości podatku należnego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: obliczenia podatku, pobrania go od podatnika oraz wpłacenia we właściwym terminie organowi podatkowemu."
                },
                {
                  "pytanie": "Inkasent w prawie podatkowym jest obowiązany do:",
                  "odpowiedzi": [
                    "ustalenia wysokości zobowiązania podatkowego w drodze decyzji",
                    "obliczenia, pobrania oraz wpłacenia podatku organowi",
                    "pobrania podatku od podatnika oraz wpłacenia go we właściwym terminie organowi podatkowemu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: pobrania podatku od podatnika oraz wpłacenia go we właściwym terminie organowi podatkowemu."
                },
                {
                  "pytanie": "Efektywnym sposobem wygaśnięcia zobowiązania podatkowego jest:",
                  "odpowiedzi": [
                    "umorzenie zaległości podatkowej",
                    "przedawnienie zobowiązania podatkowego",
                    "zapłata podatku"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: zapłata podatku."
                },
                {
                  "pytanie": "Nieefektywnym sposobem wygaśnięcia zobowiązania podatkowego jest:",
                  "odpowiedzi": [
                    "przeniesienie własności rzeczy lub praw majątkowych w zamian za zaległości",
                    "przedawnienie zobowiązania podatkowego",
                    "potrącenie wzajemnej wierzytelności"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: przedawnienie zobowiązania podatkowego."
                },
                {
                  "pytanie": "Zgodnie z art. 217 Konstytucji RP nakładanie podatków i określanie stawek następuje w drodze:",
                  "odpowiedzi": [
                    "ustawy (zasada nullum tributum sine lege)",
                    "uchwały Rady Ministrów",
                    "rozporządzenia Ministra Finansów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: ustawy (zasada nullum tributum sine lege)."
                },
                {
                  "pytanie": "Rada Ministrów projektu ustawy podatkowej:",
                  "odpowiedzi": [
                    "może uznać za pilny w każdym przypadku",
                    "może uznać za pilny wyłącznie za zgodą Senatu",
                    "nie może uznać za pilny"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: nie może uznać za pilny."
                },
                {
                  "pytanie": "Stosunek prawnopodatkowy:",
                  "odpowiedzi": [
                    "jest stosunkiem władczym i powstaje samoistnie, z mocy prawa",
                    "ma charakter cywilnoprawny i równorzędny",
                    "powstaje wyłącznie na podstawie umowy między podatnikiem a organem"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: jest stosunkiem władczym i powstaje samoistnie, z mocy prawa."
                },
                {
                  "pytanie": "Wydatki budżetu państwa o charakterze redystrybucyjnym (transferowym):",
                  "odpowiedzi": [
                    "są dokonywane na rzecz podmiotów spoza sektora publicznego i nie zasilają tego sektora",
                    "powodują zużycie elementów PKB poprzez zakup towarów i usług",
                    "zawsze zasilają jednostki sektora finansów publicznych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: są dokonywane na rzecz podmiotów spoza sektora publicznego i nie zasilają tego sektora."
                },
                {
                  "pytanie": "Senat na uchwalenie poprawek do ustawy budżetowej ma:",
                  "odpowiedzi": [
                    "20 dni od dnia jej otrzymania, przy czym nie może odrzucić ustawy w całości",
                    "30 dni od dnia jej otrzymania, z prawem odrzucenia ustawy w całości",
                    "7 dni od dnia jej otrzymania"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 20 dni od dnia jej otrzymania, przy czym nie może odrzucić ustawy w całości."
                },
                {
                  "pytanie": "Prezydent RP w stosunku do ustawy budżetowej:",
                  "odpowiedzi": [
                    "ma 21 dni na podpisanie ustawy budżetowej",
                    "może ją zawetować i skierować do Sejmu do ponownego rozpatrzenia",
                    "nie może odmówić jej podpisania ani skierować do Sejmu do ponownego rozpatrzenia — podpisuje ją w ciągu 7 dni lub kieruje do Trybunału Konstytucyjnego"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: nie może odmówić jej podpisania ani skierować do Sejmu do ponownego rozpatrzenia — podpisuje ją w ciągu 7 dni lub kieruje do Trybunału Konstytucyjnego."
                },
                {
                  "pytanie": "Prace nad projektem budżetu w Parlamencie, zgodnie z Konstytucją RP, nie mogą trwać dłużej niż:",
                  "odpowiedzi": [
                    "6 miesięcy",
                    "4 miesiące",
                    "3 miesiące"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 4 miesiące."
                },
                {
                  "pytanie": "Wydatki niewygasające z końcem roku budżetowego stanowią wyjątek od:",
                  "odpowiedzi": [
                    "zasady jawności budżetu",
                    "zasady jedności materialnej budżetu",
                    "zasady roczności budżetu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: zasady roczności budżetu."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nazwa": "Prawo finansowe — egzamin (100 przewidywanych pytań)",
      "ikona": "🎯",
      "opis": "100 najbardziej prawdopodobnych pytań egzaminacyjnych ułożonych na podstawie prezentacji wykładowej, w stylu prowadzącego (ABC, jedna odpowiedź poprawna; część pytań „przewrotnych” z przeczeniem). Po wybraniu odpowiedzi pokazuje się uzasadnienie.",
      "podkategorie": [
        {
          "nazwa": "Testy",
          "testy": [
            {
              "nazwa": "Pojęcie, cechy i funkcje finansów publicznych",
              "pytania": [
                {
                  "pytanie": "Legalna definicja finansów publicznych zawarta jest w:",
                  "odpowiedzi": [
                    "art. 3 ustawy o finansach publicznych",
                    "Konstytucji RP",
                    "ustawie o NBP"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Definicja z art. 3 u.f.p. (procesy gromadzenia i rozdysponowywania środków publicznych) jest jedyną definicją tego pojęcia w polskim systemie prawa."
                },
                {
                  "pytanie": "Do funkcji finansów publicznych NIE należy funkcja:",
                  "odpowiedzi": [
                    "represyjna",
                    "fiskalna (alimentacyjna)",
                    "redystrybucyjna (rozdzielcza)"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Wg prezentacji funkcje finansów publicznych to: fiskalna, redystrybucyjna, stymulacyjna oraz informacyjno-kontrolna. „Represyjna” nie jest wśród nich wymieniona."
                },
                {
                  "pytanie": "Funkcja polegająca na gromadzeniu środków pieniężnych niezbędnych do pokrycia potrzeb publicznych to funkcja:",
                  "odpowiedzi": [
                    "fiskalna (alimentacyjna)",
                    "stymulacyjna",
                    "informacyjno-kontrolna"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Funkcja fiskalna (alimentacyjna) polega na dostarczaniu (gromadzeniu) środków publicznych na realizację zadań publicznych."
                },
                {
                  "pytanie": "Oddziaływanie na podmioty za pomocą ulg podatkowych oraz dolegliwości finansowych to przejaw funkcji:",
                  "odpowiedzi": [
                    "stymulacyjnej (bodźcowej)",
                    "redystrybucyjnej",
                    "fiskalnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Funkcja stymulacyjna (bodźcowa, interwencyjna) polega na pobudzaniu lub zniechęcaniu do określonych zachowań przez korzyści (ulgi) lub dolegliwości finansowe."
                },
                {
                  "pytanie": "Funkcja redystrybucyjna finansów publicznych polega na:",
                  "odpowiedzi": [
                    "wtórnym podziale dochodu narodowego dokonywanym przez państwo",
                    "ewidencjonowaniu zjawisk finansowych",
                    "gromadzeniu środków na potrzeby publiczne"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Funkcja redystrybucyjna (rozdzielcza) to dokonywany przez państwo podział (redystrybucja) dochodu narodowego za pomocą gromadzenia i wydatkowania środków."
                },
                {
                  "pytanie": "Wskaż cechę odróżniającą finanse publiczne od prywatnych:",
                  "odpowiedzi": [
                    "są gromadzone na zasadzie przymusu i przeznaczone na potrzeby publiczne",
                    "służą realizacji zysków indywidualnych",
                    "ich skala jest węższa niż finansów prywatnych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Finanse publiczne gromadzone są przymusowo i przeznaczone na potrzeby publiczne; ich skala jest szersza niż prywatnych, na które rzutują finanse prywatne odwrotnie."
                },
                {
                  "pytanie": "Stosunki z zakresu finansów publicznych opierają się na zasadzie:",
                  "odpowiedzi": [
                    "władztwa i podporządkowania",
                    "równorzędności stron",
                    "swobody umów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Cechą finansów publicznych jest oparcie stosunków na zasadzie władztwa i podporządkowania oraz udział podmiotu wyposażonego we władzę publiczną."
                },
                {
                  "pytanie": "Zgodnie z art. 3 u.f.p. finanse publiczne to procesy obejmujące m.in.:",
                  "odpowiedzi": [
                    "gromadzenie i rozdysponowywanie środków publicznych",
                    "wyłącznie pobór podatków państwowych",
                    "wyłącznie wykonywanie budżetu państwa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 3 u.f.p. obejmuje gromadzenie dochodów i przychodów, wydatkowanie środków, finansowanie potrzeb pożyczkowych, zarządzanie środkami i długiem oraz rozliczenia z UE."
                }
              ]
            },
            {
              "nazwa": "Źródła prawa finansowego i Konstytucja",
              "pytania": [
                {
                  "pytanie": "Problematyka finansów publicznych uregulowana jest w Konstytucji RP przede wszystkim w:",
                  "odpowiedzi": [
                    "rozdziale X „Finanse publiczne”",
                    "rozdziale I „Rzeczpospolita”",
                    "rozdziale II „Wolności, prawa i obowiązki”"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Źródłem prawa finansów publicznych jest Konstytucja RP, w szczególności rozdział X „Finanse publiczne”."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP Rada Ministrów przedkłada Sejmowi projekt ustawy budżetowej najpóźniej:",
                  "odpowiedzi": [
                    "na 3 miesiące przed rozpoczęciem roku budżetowego",
                    "na miesiąc przed rozpoczęciem roku budżetowego",
                    "do 30 listopada"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Konstytucja nakłada na RM obowiązek przedłożenia Sejmowi projektu ustawy budżetowej najpóźniej na 3 miesiące przed rozpoczęciem roku budżetowego."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP nie wolno zaciągać pożyczek ani udzielać gwarancji, w następstwie których państwowy dług publiczny przekroczy:",
                  "odpowiedzi": [
                    "3/5 (60%) wartości rocznego PKB",
                    "połowy wartości rocznego PKB",
                    "wartości rocznego PKB"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 216 Konstytucji RP — zakaz przekroczenia przez PDP 3/5 (60%) rocznego PKB."
                },
                {
                  "pytanie": "Inicjatywa ustawodawcza w zakresie ustawy budżetowej przysługuje:",
                  "odpowiedzi": [
                    "wyłącznie Radzie Ministrów",
                    "grupie 15 posłów",
                    "Senatowi"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Konstytucja przyznaje wyłączną inicjatywę w zakresie projektu ustawy budżetowej Radzie Ministrów."
                },
                {
                  "pytanie": "Konstytucja RP zakazuje pokrywania (finansowania) deficytu budżetowego przez:",
                  "odpowiedzi": [
                    "centralny bank państwa (NBP)",
                    "sprzedaż obligacji skarbowych",
                    "Bank Gospodarstwa Krajowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Konstytucja zawiera zakaz finansowania deficytu przez bank centralny (w drodze emisji pieniądza)."
                },
                {
                  "pytanie": "Aktami prawa miejscowego w zakresie finansów publicznych są m.in.:",
                  "odpowiedzi": [
                    "uchwała budżetowa oraz uchwała rady gminy o stawkach podatku od nieruchomości",
                    "rozporządzenia Ministra Finansów",
                    "ustawy podatkowe"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Akty prawa miejscowego wydają organy j.s.t. na podstawie upoważnienia ustawowego — np. uchwała budżetowa, uchwała o stawkach podatku od nieruchomości; obowiązują na obszarze działania organu."
                },
                {
                  "pytanie": "Rozporządzenia w prawie finansowym mogą być wydawane:",
                  "odpowiedzi": [
                    "wyłącznie na podstawie szczegółowego upoważnienia ustawowego i w celu wykonania ustawy",
                    "samodzielnie, bez upoważnienia ustawowego",
                    "przez organy jednostek samorządu terytorialnego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Rozporządzenia wydaje się tylko na podstawie szczegółowego upoważnienia zawartego w ustawie i w celu jej wykonania (przez RM lub ministra finansów)."
                },
                {
                  "pytanie": "Ratyfikowana umowa międzynarodowa za uprzednią zgodą wyrażoną w ustawie:",
                  "odpowiedzi": [
                    "ma pierwszeństwo przed ustawą, jeżeli ustawy nie da się z nią pogodzić",
                    "nie jest źródłem prawa finansowego",
                    "może samodzielnie nakładać obowiązek podatkowy bez ustawy krajowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Taka umowa ma pierwszeństwo przed ustawą w razie kolizji; nie może jednak samodzielnie nakładać obowiązku podatkowego, jeśli nie przewiduje go ustawa krajowa."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP Prezydent w odniesieniu do ustawy budżetowej:",
                  "odpowiedzi": [
                    "nie może odmówić jej podpisania ani skierować do ponownego rozpatrzenia przez Sejm",
                    "może zawetować ustawę budżetową",
                    "może odmówić podpisu bez podania przyczyny"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 224 Konstytucji — Prezydent nie może odmówić podpisu ustawy budżetowej ani skierować jej do ponownego rozpatrzenia; może jedynie wystąpić do TK."
                }
              ]
            },
            {
              "nazwa": "Sektor finansów publicznych i jego jednostki",
              "pytania": [
                {
                  "pytanie": "Katalog jednostek sektora finansów publicznych zawiera:",
                  "odpowiedzi": [
                    "art. 9 ustawy o finansach publicznych",
                    "art. 3 ustawy o finansach publicznych",
                    "Konstytucja RP"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Sektor finansów publicznych tworzą jednostki wskazane w art. 9 u.f.p."
                },
                {
                  "pytanie": "Katalog podmiotów należących do sektora finansów publicznych ma charakter:",
                  "odpowiedzi": [
                    "zamknięty (zupełny)",
                    "otwarty",
                    "przykładowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Katalog jednostek sektora finansów publicznych jest zupełny (zamknięty)."
                },
                {
                  "pytanie": "Aby zaliczyć jednostkę do sektora finansów publicznych, musi ona spełniać łącznie kryteria — wskaż, które NIE jest takim kryterium:",
                  "odpowiedzi": [
                    "działalność nastawiona na zysk",
                    "utworzenie przez państwo lub j.s.t. na bazie majątku publicznego",
                    "otrzymywanie środków publicznych na działalność podstawową"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Jednym z trzech kryteriów jest właśnie BRAK celu zarobkowego w zakresie działalności podstawowej — nastawienie na zysk wyklucza zaliczenie do s.f.p."
                },
                {
                  "pytanie": "Wskaż podmiot, który NIE jest zaliczany do sektora finansów publicznych:",
                  "odpowiedzi": [
                    "spółka prawa handlowego utworzona przez j.s.t.",
                    "jednostka budżetowa",
                    "samorządowy zakład budżetowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Z s.f.p. wyłączono m.in. przedsiębiorstwa państwowe, instytuty badawcze, Sieć Łukasiewicz, banki państwowe oraz spółki prawa handlowego — mimo że należą do sektora publicznego."
                },
                {
                  "pytanie": "Do sektora finansów publicznych NIE zalicza się:",
                  "odpowiedzi": [
                    "banków państwowych",
                    "uczelni publicznych",
                    "samodzielnych publicznych zakładów opieki zdrowotnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Banki państwowe (obok przedsiębiorstw państwowych, instytutów badawczych, spółek prawa handlowego) są wyłączone z s.f.p."
                },
                {
                  "pytanie": "Jednostki budżetowe rozliczają się z budżetem na zasadzie:",
                  "odpowiedzi": [
                    "brutto",
                    "netto",
                    "mieszanej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Jednostka budżetowa pokrywa wydatki bezpośrednio z budżetu, a pobrane dochody odprowadza na rachunek budżetu — to budżetowanie brutto."
                },
                {
                  "pytanie": "Jednostka budżetowa:",
                  "odpowiedzi": [
                    "nie ma osobowości prawnej",
                    "ma osobowość prawną od chwili wpisu do KRS",
                    "jest ułomną osobą prawną"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Jednostka budżetowa nie ma osobowości prawnej — dysponuje wyodrębnioną częścią majątku Skarbu Państwa (statio fisci) lub j.s.t. (statio municipi)."
                },
                {
                  "pytanie": "W jednostce budżetowej:",
                  "odpowiedzi": [
                    "nie występuje deficyt ani nadwyżka",
                    "może powstać nadwyżka, którą zatrzymuje",
                    "poziom wydatków zależy od osiągniętych dochodów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poziom wydatków j.b. nie zależy od dochodów, dlatego nie ma wyniku finansowego — ani deficytu, ani nadwyżki."
                },
                {
                  "pytanie": "Państwowe jednostki budżetowe są tworzone i likwidowane przez:",
                  "odpowiedzi": [
                    "dysponentów części budżetowych (ministrów, kierowników urzędów centralnych, wojewodów)",
                    "organy stanowiące j.s.t.",
                    "Radę Ministrów w drodze rozporządzenia"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Państwowe j.b. tworzą/likwidują dysponenci części budżetowych; samorządowe — organy stanowiące j.s.t. (sejmik, rada powiatu, rada gminy)."
                },
                {
                  "pytanie": "Wskaż przykład samorządowej jednostki budżetowej:",
                  "odpowiedzi": [
                    "urząd gminy",
                    "areszt śledczy",
                    "park narodowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Samorządowe j.b. to np. urzędy gmin, gminne ośrodki pomocy społecznej, starostwa; areszty i parki narodowe to państwowe j.b."
                },
                {
                  "pytanie": "Samorządowy zakład budżetowy:",
                  "odpowiedzi": [
                    "jest tzw. ułomną osobą prawną",
                    "ma pełną osobowość prawną",
                    "nie ma żadnej zdolności prawnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Samorządowy zakład budżetowy działa samodzielnie w granicach pełnomocnictwa j.s.t., która ponosi odpowiedzialność za jego zobowiązania — to ułomna osoba prawna."
                },
                {
                  "pytanie": "Samorządowy zakład budżetowy może być tworzony:",
                  "odpowiedzi": [
                    "wyłącznie do zadań własnych j.s.t. o charakterze użyteczności publicznej",
                    "do dowolnych zadań państwa",
                    "wyłącznie do zadań zleconych z zakresu administracji rządowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zakład budżetowy tworzy organ stanowiący j.s.t. wyłącznie dla zadań własnych j.s.t. niewykraczających poza użyteczność publiczną (np. wodociągi, cmentarze)."
                },
                {
                  "pytanie": "Dotacje dla samorządowego zakładu budżetowego co do zasady nie mogą przekroczyć:",
                  "odpowiedzi": [
                    "50% kosztów jego działalności",
                    "30% kosztów jego działalności",
                    "100% kosztów jego działalności"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zakład budżetowy może otrzymywać dotacje, których wartość — z wyłączeniem dotacji na zadania finansowane ze środków UE/zagranicznych — nie może przekroczyć 50% kosztów jego działalności."
                },
                {
                  "pytanie": "Samorządowy zakład budżetowy rozlicza się z budżetem j.s.t. na zasadzie:",
                  "odpowiedzi": [
                    "netto",
                    "brutto",
                    "ryczałtu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zakład budżetowy pokrywa koszty z przychodów własnych, a nadwyżkę środków obrotowych wpłaca do budżetu j.s.t. — to budżetowanie netto."
                },
                {
                  "pytanie": "Agencja wykonawcza jest:",
                  "odpowiedzi": [
                    "państwową osobą prawną tworzoną na podstawie odrębnej ustawy",
                    "jednostką bez osobowości prawnej",
                    "ułomną osobą prawną"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Agencja wykonawcza to państwowa osoba prawna powoływana na podstawie odrębnej ustawy w celu realizacji zadań państwa; nadzór sprawuje minister."
                },
                {
                  "pytanie": "W planie finansowym agencji wykonawczej, co do zasady:",
                  "odpowiedzi": [
                    "wydatki nie mogą być wyższe niż planowane dochody",
                    "wydatki zawsze mogą przewyższać dochody",
                    "nie sporządza się planu finansowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Podstawą gospodarki agencji jest roczny plan finansowy, w którym wydatki nie mogą być wyższe niż dochody (wyjątkowo — za zgodą ministra w porozumieniu z MF)."
                },
                {
                  "pytanie": "Instytucja gospodarki budżetowej uzyskuje osobowość prawną z chwilą:",
                  "odpowiedzi": [
                    "wpisu do Krajowego Rejestru Sądowego",
                    "utworzenia przez ministra",
                    "wpisu do CEIDG"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Instytucja gospodarki budżetowej ma osobowość prawną, którą uzyskuje z chwilą wpisu do KRS; odpłatnie wykonuje zadania publiczne, pokrywając koszty z przychodów."
                },
                {
                  "pytanie": "Instytucja gospodarki budżetowej może być tworzona:",
                  "odpowiedzi": [
                    "wyłącznie jako jednostka państwowa",
                    "także jako jednostka samorządowa",
                    "wyłącznie przez Radę Ministrów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Instytucje gospodarki budżetowej mogą być powoływane tylko jako jednostki państwowe i wyłącznie do wykonywania zadań publicznych."
                },
                {
                  "pytanie": "Metoda funduszowania (przeznaczanie określonych dochodów na imiennie określone wydatki) jest charakterystyczna dla:",
                  "odpowiedzi": [
                    "państwowych funduszy celowych",
                    "jednostek budżetowych",
                    "agencji wykonawczych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Fundusz celowy polega na funduszowaniu — wyjątku od zasady jedności materialnej budżetu (przeznaczania całości dochodów na całość wydatków)."
                },
                {
                  "pytanie": "Państwowy fundusz celowy tworzony jest:",
                  "odpowiedzi": [
                    "wyłącznie w drodze ustawy (innej niż ustawa o finansach publicznych)",
                    "w drodze rozporządzenia Ministra Finansów",
                    "uchwałą Rady Ministrów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Państwowe fundusze celowe tworzy się wyłącznie w drodze ustawy (nie ustawy o finansach publicznych), która określa źródła przychodów, cel, dysponenta i zasady gospodarki."
                },
                {
                  "pytanie": "Fundusz Ubezpieczeń Społecznych (FUS):",
                  "odpowiedzi": [
                    "nie posiada osobowości prawnej, a jego środkami dysponuje ZUS",
                    "posiada osobowość prawną",
                    "jest jednostką budżetową"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "FUS jest państwowym funduszem celowym bez osobowości prawnej; jego środkami dysponuje ZUS (który osobowość prawną posiada)."
                },
                {
                  "pytanie": "Metoda funduszowania stanowi wyjątek od budżetowej zasady:",
                  "odpowiedzi": [
                    "jedności materialnej",
                    "roczności",
                    "jawności"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Funduszowanie (powiązanie określonych dochodów z określonymi wydatkami) jest wyjątkiem od zasady jedności materialnej budżetu."
                },
                {
                  "pytanie": "Wskaż zaletę tworzenia funduszy celowych:",
                  "odpowiedzi": [
                    "ciągłość finansowania określonych wydatków niezależnie od sytuacji budżetu",
                    "silniejsza kontrola parlamentu nad tymi środkami",
                    "większa przejrzystość deficytu budżetowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zaletą funduszy jest ciągłość i elastyczność finansowania; wadą — m.in. słabsza kontrola parlamentu i usztywnienie polityki budżetowej."
                }
              ]
            },
            {
              "nazwa": "Budżetowanie brutto/netto; środki, dochody, przychody i rozchody",
              "pytania": [
                {
                  "pytanie": "Budżetowanie brutto polega na tym, że jednostka:",
                  "odpowiedzi": [
                    "pokrywa wydatki bezpośrednio z budżetu, a dochody odprowadza do budżetu",
                    "pokrywa wydatki z dochodów własnych, a nadwyżkę odprowadza",
                    "nie rozlicza się z budżetem"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Budżetowanie brutto: pełne kwoty dochodów i wydatków ujęte są w budżecie; jednostka nie dysponuje własnymi dochodami (np. jednostki budżetowe)."
                },
                {
                  "pytanie": "Budżetowanie netto polega na tym, że w budżecie ujmuje się:",
                  "odpowiedzi": [
                    "saldo (wynik) przychodów i wydatków jednostki",
                    "pełne kwoty przychodów i wydatków",
                    "wyłącznie wydatki jednostki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przy budżetowaniu netto jednostka pokrywa wydatki z dochodów własnych, a w budżecie ujmuje się tylko saldo (nadwyżkę wpłaca, przy niedoborze otrzymuje dotację)."
                },
                {
                  "pytanie": "Ustawa o finansach publicznych wyróżnia rodzajów środków publicznych:",
                  "odpowiedzi": [
                    "pięć",
                    "trzy",
                    "siedem"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Wyróżnia się pięć rodzajów środków publicznych: dochody publiczne, środki z budżetu UE, środki zagraniczne bezzwrotne, przychody (m.in. ze sprzedaży papierów wartościowych, prywatyzacji), przychody jsfp z działalności."
                },
                {
                  "pytanie": "Dochody publiczne to wpływy o charakterze:",
                  "odpowiedzi": [
                    "stałym i bezzwrotnym",
                    "jednorazowym i zwrotnym",
                    "wyłącznie cywilnoprawnym"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Dochody publiczne — wpływy do budżetu o charakterze stałym i bezzwrotnym (w odróżnieniu od przychodów, które są jednorazowe i zwrotne)."
                },
                {
                  "pytanie": "Przychody publiczne to wpływy o charakterze:",
                  "odpowiedzi": [
                    "jednorazowym i zwrotnym (z operacji czasowych)",
                    "stałym i bezzwrotnym",
                    "wyłącznie podatkowym"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przychody publiczne pochodzą z operacji czasowych (sprzedaż papierów wartościowych, kredyty, pożyczki) — są jednorazowe i zwrotne."
                },
                {
                  "pytanie": "Wskaż, co stanowi przychód publiczny, a nie dochód publiczny:",
                  "odpowiedzi": [
                    "wpływy ze sprzedaży obligacji skarbowych",
                    "wpływy z podatku VAT",
                    "wpływy z opłaty skarbowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Wpływy ze sprzedaży skarbowych papierów wartościowych (bonów, obligacji) to przychody (zwrotne); podatki i opłaty to dochody."
                },
                {
                  "pytanie": "Wykup wcześniej wyemitowanych papierów wartościowych oraz spłata rat kredytów to:",
                  "odpowiedzi": [
                    "rozchody publiczne",
                    "wydatki publiczne",
                    "dochody publiczne"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Rozchody publiczne to spłata wcześniej zaciągniętych zobowiązań — raty kredytów i pożyczek oraz wykup papierów wartościowych."
                },
                {
                  "pytanie": "Daniny publiczne (podatki, cła, opłaty) stanowią ok.:",
                  "odpowiedzi": [
                    "90% wszystkich dochodów budżetu państwa",
                    "50% dochodów budżetu państwa",
                    "30% dochodów budżetu państwa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Wg prezentacji daniny publiczne stanowią ok. 90% wszystkich dochodów budżetu państwa."
                },
                {
                  "pytanie": "Największe wpływy podatkowe do budżetu państwa daje:",
                  "odpowiedzi": [
                    "podatek od towarów i usług (VAT)",
                    "podatek dochodowy od osób fizycznych",
                    "podatek akcyzowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Najbardziej wydajnym (najpowszechniejszym) źródłem dochodów podatkowych budżetu państwa jest VAT."
                },
                {
                  "pytanie": "Transfery wewnętrzne (np. dotacje i subwencje między jednostkami publicznymi):",
                  "odpowiedzi": [
                    "nie zwiększają łącznej sumy środków publicznych",
                    "zwiększają łączną sumę środków publicznych",
                    "są dochodami zwrotnymi"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Transfery wewnętrzne to środki przekazywane między instytucjami publicznymi — nie zwiększają łącznej sumy środków publicznych."
                },
                {
                  "pytanie": "Wskaż cechę odróżniającą subwencję od dotacji:",
                  "odpowiedzi": [
                    "subwencja ma charakter ogólny i jest określona procentowo",
                    "subwencja jest celowa i uznaniowa",
                    "subwencja jest zwrotna"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Subwencja jest ogólna, bezwarunkowa, obiektywnie określona i procentowa, dla j.s.t.; dotacja jest celowa, uwarunkowana, uznaniowa i określona kwotowo."
                },
                {
                  "pytanie": "Dochody publiczne o charakterze publicznoprawnym to przede wszystkim:",
                  "odpowiedzi": [
                    "podatki należne podmiotom s.f.p. z mocy prawa",
                    "czynsze z najmu nieruchomości",
                    "dywidendy ze spółek"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Dochody publicznoprawne są należne z mocy prawa (np. podatki); czynsze i dywidendy to dochody cywilnoprawne (z majątku)."
                }
              ]
            },
            {
              "nazwa": "Budżet państwa — pojęcie, cechy, zasady, klasyfikacja",
              "pytania": [
                {
                  "pytanie": "Budżet państwa to roczny plan:",
                  "odpowiedzi": [
                    "dochodów i wydatków oraz przychodów i rozchodów organów władzy publicznej",
                    "wyłącznie dochodów i wydatków budżetu państwa",
                    "wyłącznie wydatków i rozchodów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Budżet to roczny plan dochodów i wydatków oraz przychodów i rozchodów organów władzy publicznej."
                },
                {
                  "pytanie": "W budżecie państwa po stronie dochodów i przychodów ustala się:",
                  "odpowiedzi": [
                    "prognozy (mogą być przekroczone), a po stronie wydatków i rozchodów — nieprzekraczalny limit",
                    "nieprzekraczalny limit",
                    "wielkości sztywne, których nie wolno zmieniać"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Dochody i przychody to prognozy, natomiast wydatki i rozchody stanowią nieprzekraczalny limit."
                },
                {
                  "pytanie": "Rok budżetowy w Polsce:",
                  "odpowiedzi": [
                    "pokrywa się z rokiem kalendarzowym",
                    "trwa od 1 kwietnia do 31 marca",
                    "jest ustalany każdorazowo w ustawie budżetowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Budżet uchwalany jest na rok budżetowy, który pokrywa się z rokiem kalendarzowym."
                },
                {
                  "pytanie": "Zasada powszechności budżetu bywa utożsamiana z zasadą:",
                  "odpowiedzi": [
                    "zupełności (budżetowania brutto)",
                    "jawności",
                    "równowagi"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zasada powszechności rozumiana jest również jako zasada zupełności lub budżetowania brutto."
                },
                {
                  "pytanie": "Wyjątkiem od zasady roczności budżetu jest:",
                  "odpowiedzi": [
                    "prowizorium budżetowe",
                    "klasyfikacja budżetowa",
                    "rezerwa ogólna"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Wyjątkiem od zasady roczności (periodyczności) jest prowizorium budżetowe — budżet tymczasowy na część roku."
                },
                {
                  "pytanie": "Zasada jedności materialnej budżetu oznacza, że:",
                  "odpowiedzi": [
                    "środki wpływające do budżetu tworzą jeden wspólny fundusz na wydatki",
                    "wszystkie dochody i wydatki są w jednym akcie prawnym",
                    "budżet uchwala się przed rozpoczęciem roku"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Jedność materialna — środki publiczne tworzą jeden wspólny fundusz przeznaczany na wydatki; jedność formalna to ujęcie w jednym akcie (ustawie budżetowej)."
                },
                {
                  "pytanie": "Zasada równowagi budżetowej postuluje, aby:",
                  "odpowiedzi": [
                    "planowane wydatki znalazły pełne pokrycie w dochodach (brak deficytu)",
                    "budżet był jawny",
                    "wydatki były ujęte szczegółowo"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zasada równowagi — bilansowanie budżetu tak, aby nie generował deficytu."
                },
                {
                  "pytanie": "Szczegółowość budżetu osiągana jest dzięki:",
                  "odpowiedzi": [
                    "klasyfikacji budżetowej",
                    "prowizorium budżetowemu",
                    "rezerwie ogólnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zasada szczegółowości (specjalizacji) realizowana jest dzięki klasyfikacji budżetowej."
                },
                {
                  "pytanie": "Najwyższym (podmiotowo-przedmiotowym) szczeblem klasyfikacji w budżecie państwa są:",
                  "odpowiedzi": [
                    "części",
                    "działy",
                    "paragrafy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Budżet państwa dzieli się na części (charakter podmiotowo-przedmiotowy, tylko w budżecie państwa), działy, rozdziały i paragrafy."
                },
                {
                  "pytanie": "Częściami budżetu państwa dysponują:",
                  "odpowiedzi": [
                    "ministrowie, kierownicy urzędów i wojewodowie (dysponenci główni)",
                    "wyłącznie Minister Finansów",
                    "kierownicy jednostek budżetowych niższego stopnia"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Częściami budżetu dysponują dysponenci główni (dysponenci części budżetowych): ministrowie, kierownicy organów i wojewodowie."
                },
                {
                  "pytanie": "Ustawa budżetowa w stosunku do budżetu jest pojęciem:",
                  "odpowiedzi": [
                    "szerszym — budżet jest jednym z jej załączników",
                    "węższym",
                    "tożsamym"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Ustawa budżetowa jest pojęciem szerszym; budżet jest jednym, ale nie jedynym jej załącznikiem."
                }
              ]
            },
            {
              "nazwa": "Procedura budżetowa, prowizorium, WPFP i wykonanie budżetu",
              "pytania": [
                {
                  "pytanie": "Projekt ustawy budżetowej opracowuje:",
                  "odpowiedzi": [
                    "Minister Finansów",
                    "Prezes Rady Ministrów",
                    "Najwyższa Izba Kontroli"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Projekt ustawy budżetowej opracowuje Minister Finansów na podstawie projektów dysponentów części budżetowych, a uchwala go Rada Ministrów."
                },
                {
                  "pytanie": "Rada Ministrów przedstawia Sejmowi projekt ustawy budżetowej w terminie do:",
                  "odpowiedzi": [
                    "30 września roku poprzedzającego rok budżetowy",
                    "31 października roku poprzedzającego rok budżetowy",
                    "30 listopada roku poprzedzającego rok budżetowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "RM uchwala projekt ustawy budżetowej i przedstawia go Sejmowi do dnia 30 września roku poprzedzającego rok budżetowy."
                },
                {
                  "pytanie": "Notą budżetową jest:",
                  "odpowiedzi": [
                    "rozporządzenie Ministra Finansów o trybie i terminach opracowania materiałów do projektu budżetu",
                    "ustawa budżetowa",
                    "uchwała Rady Ministrów o przyjęciu projektu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Nota budżetowa to rozporządzenie Ministra Finansów określające harmonogram, formularze i zasady planowania dochodów i wydatków."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją prace nad budżetem w parlamencie nie mogą trwać dłużej niż:",
                  "odpowiedzi": [
                    "4 miesiące",
                    "2 miesiące",
                    "6 miesięcy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Prace nad budżetem w parlamencie nie mogą trwać dłużej niż 4 miesiące."
                },
                {
                  "pytanie": "Senat ma na uchwalenie poprawek do ustawy budżetowej:",
                  "odpowiedzi": [
                    "20 dni od dnia jej otrzymania",
                    "30 dni od dnia jej otrzymania",
                    "14 dni od dnia jej otrzymania"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Senat ma 20 dni na uchwalenie poprawek do ustawy budżetowej; nie może też zaproponować odrzucenia ustawy w całości."
                },
                {
                  "pytanie": "Prezydent podpisuje ustawę budżetową w ciągu:",
                  "odpowiedzi": [
                    "7 dni",
                    "14 dni",
                    "21 dni"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Prezydent podpisuje ustawę budżetową w ciągu 7 dni (albo kieruje ją do TK); nie może odmówić podpisu."
                },
                {
                  "pytanie": "Jeżeli w ciągu 4 miesięcy od przedłożenia Sejmowi projektu budżetu nie zostanie on przedstawiony Prezydentowi do podpisu, Prezydent może w ciągu 14 dni:",
                  "odpowiedzi": [
                    "zarządzić skrócenie kadencji Sejmu",
                    "rozwiązać Radę Ministrów",
                    "samodzielnie wprowadzić budżet"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "W takiej sytuacji Prezydent może w ciągu 14 dni zarządzić skrócenie kadencji Sejmu."
                },
                {
                  "pytanie": "Jeżeli ustawa budżetowa nie weszła w życie przed 1 stycznia, podstawą gospodarki finansowej państwa jest:",
                  "odpowiedzi": [
                    "przedłożony Sejmowi projekt ustawy budżetowej (lub o prowizorium)",
                    "budżet z roku poprzedniego",
                    "decyzja Ministra Finansów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Do czasu ogłoszenia ustawy podstawą gospodarki finansowej jest przedstawiony Sejmowi projekt ustawy budżetowej lub projekt ustawy o prowizorium budżetowym."
                },
                {
                  "pytanie": "Prowizorium budżetowe:",
                  "odpowiedzi": [
                    "obejmuje tylko część roku i traci moc z chwilą wejścia w życie ustawy budżetowej",
                    "obejmuje cały rok budżetowy",
                    "jest uchwalane zamiast ustawy budżetowej na stałe"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Prowizorium (art. 219 Konstytucji) to budżet tymczasowy na pierwszą część roku, tracący moc z chwilą wejścia w życie ustawy budżetowej."
                },
                {
                  "pytanie": "Wieloletni Plan Finansowy Państwa sporządzany jest na:",
                  "odpowiedzi": [
                    "4 lata budżetowe",
                    "2 lata budżetowe",
                    "10 lat budżetowych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "WPFP to plan dochodów i wydatków oraz przychodów i rozchodów budżetu państwa sporządzany na 4 lata budżetowe; uchwala go RM."
                },
                {
                  "pytanie": "Rezerwa ogólna budżetu państwa:",
                  "odpowiedzi": [
                    "jest obligatoryjna i nie może przekroczyć 0,2% wydatków budżetu",
                    "jest fakultatywna",
                    "nie może przekroczyć 5% wydatków budżetu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Rezerwa ogólna jest obligatoryjna, dysponuje nią RM, a jej wysokość nie może przekroczyć 0,2% wydatków budżetu państwa."
                },
                {
                  "pytanie": "Suma rezerw celowych nie może przekroczyć:",
                  "odpowiedzi": [
                    "5% wydatków budżetu",
                    "0,2% wydatków budżetu",
                    "10% wydatków budżetu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Rezerwy celowe są fakultatywne, a ich suma nie może przekroczyć 5% wydatków budżetu; podziału dokonuje MF do 15 października."
                },
                {
                  "pytanie": "Sprawozdanie z wykonania budżetu państwa Rada Ministrów przedstawia Sejmowi i NIK do:",
                  "odpowiedzi": [
                    "31 maja roku następującego po roku budżetowym",
                    "31 marca roku następnego",
                    "30 września roku następnego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "RM przedstawia roczne sprawozdanie z wykonania budżetu Sejmowi i NIK do 31 maja roku następnego; Sejm ma 90 dni na uchwałę w sprawie absolutorium."
                }
              ]
            },
            {
              "nazwa": "Deficyt budżetowy",
              "pytania": [
                {
                  "pytanie": "Deficyt budżetu państwa to:",
                  "odpowiedzi": [
                    "ujemna różnica między dochodami a wydatkami budżetowymi",
                    "ujemna różnica między wydatkami a rozchodami",
                    "nadwyżka przychodów nad rozchodami"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Deficyt budżetowy to ujemny wynik (saldo) — ujemna różnica między dochodami a wydatkami budżetowymi w okresie rozliczeniowym."
                },
                {
                  "pytanie": "Dodatni wynik finansowy budżetu (dochody > wydatki) stanowi:",
                  "odpowiedzi": [
                    "nadwyżkę budżetową",
                    "deficyt budżetowy",
                    "rozchód budżetowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Dodatni wynik to nadwyżka budżetowa, ujemny — deficyt budżetowy."
                },
                {
                  "pytanie": "Deficyt sektora finansów publicznych ustala się:",
                  "odpowiedzi": [
                    "po wyeliminowaniu wewnętrznych przepływów między jednostkami sektora",
                    "bez eliminowania przepływów wewnętrznych",
                    "wyłącznie dla budżetu państwa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Deficyt sektora f.p. to ujemna różnica między dochodami a wydatkami publicznymi po wyeliminowaniu (oczyszczeniu) wzajemnych przepływów między jednostkami sektora."
                },
                {
                  "pytanie": "Ustawa o finansach publicznych NIE wyróżnia deficytu:",
                  "odpowiedzi": [
                    "deficytu gospodarstw domowych",
                    "deficytu budżetu państwa",
                    "deficytu sektora finansów publicznych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "U.f.p. wyróżnia deficyt budżetu państwa, deficyt sektora finansów publicznych i deficyt budżetu środków europejskich — nie „gospodarstw domowych”."
                },
                {
                  "pytanie": "Wskaż źródło (przyczynę) powstawania deficytu budżetowego:",
                  "odpowiedzi": [
                    "nadmierne wydatki publiczne",
                    "nadwyżka dochodów nad wydatkami",
                    "spłata wcześniejszych kredytów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Źródłem deficytu są m.in. nadmierne wydatki (rozbudowane funkcje socjalne), nieefektywnie pobierane podatki, klęski żywiołowe."
                },
                {
                  "pytanie": "Deficyt budżetu państwa może być finansowany m.in.:",
                  "odpowiedzi": [
                    "przychodami ze sprzedaży skarbowych papierów wartościowych",
                    "emisją pieniądza przez NBP",
                    "podatkami bieżącego roku"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Deficyt finansuje się przychodami (sprzedaż papierów skarbowych, kredyty, pożyczki, prywatyzacja, nadwyżki z lat ubiegłych); finansowanie przez bank centralny jest zakazane."
                },
                {
                  "pytanie": "Maksymalny limit deficytu sektora wynikający z prawa UE (TFUE) wynosi:",
                  "odpowiedzi": [
                    "3% PKB",
                    "1% PKB",
                    "6% PKB"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "TFUE (art. 126 i Protokół nr 12) wyznacza maksymalny limit deficytu na poziomie 3% PKB."
                },
                {
                  "pytanie": "Bony skarbowe to papiery wartościowe:",
                  "odpowiedzi": [
                    "krótkoterminowe, o terminie wykupu nieprzekraczającym roku, sprzedawane z dyskontem",
                    "długoterminowe, emitowane na ponad rok",
                    "emitowane przez NBP we własnym imieniu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Bony skarbowe emituje Skarb Państwa na pokrycie bieżących potrzeb; termin wykupu ≤ 1 rok, sprzedawane z dyskontem (na przetargach NBP)."
                },
                {
                  "pytanie": "Obligacje skarbowe to papiery wartościowe emitowane na okres:",
                  "odpowiedzi": [
                    "dłuższy niż rok",
                    "nie dłuższy niż rok",
                    "wyłącznie roczny"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Obligacje skarbowe są emitowane na okres dłuższy niż rok i zawierają zobowiązanie SP do zapłaty wartości nominalnej wraz z oprocentowaniem."
                }
              ]
            },
            {
              "nazwa": "Dług publiczny i procedury ostrożnościowe",
              "pytania": [
                {
                  "pytanie": "Dług publiczny jest przede wszystkim wynikiem:",
                  "odpowiedzi": [
                    "skumulowanych deficytów z lat poprzednich",
                    "jednorazowego deficytu danego roku",
                    "nadwyżek budżetowych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Dług publiczny dotyczy okresu wieloletniego i powstaje przez nawarstwianie się zobowiązań — jest wynikiem skumulowanych deficytów z lat poprzednich."
                },
                {
                  "pytanie": "Ustawa o finansach publicznych wyróżnia kategorie długu:",
                  "odpowiedzi": [
                    "państwowy dług publiczny oraz dług Skarbu Państwa",
                    "dług bieżący oraz dług majątkowy",
                    "dług krajowy oraz dług gmin"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "U.f.p. wprowadza dwie kategorie: państwowy dług publiczny (całego sektora f.p.) oraz dług Skarbu Państwa (jego część rządowa)."
                },
                {
                  "pytanie": "Relacja między państwowym długiem publicznym a długiem Skarbu Państwa jest taka, że:",
                  "odpowiedzi": [
                    "dług Skarbu Państwa jest fragmentem (częścią) państwowego długu publicznego",
                    "są to pojęcia tożsame",
                    "PDP jest częścią długu Skarbu Państwa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "PDP obejmuje cały sektor f.p. (łącznie z długiem j.s.t.); dług Skarbu Państwa to jego fragment — dług sektora rządowego."
                },
                {
                  "pytanie": "Wskaż tytuł, z którego NIE składa się państwowy dług publiczny:",
                  "odpowiedzi": [
                    "należności z tytułu udzielonych przez Skarb Państwa pożyczek",
                    "zaciągnięte kredyty i pożyczki",
                    "przyjęte depozyty"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "PDP tworzą zobowiązania: wyemitowane papiery wartościowe, zaciągnięte kredyty i pożyczki, przyjęte depozyty, wymagalne zobowiązania. Udzielone pożyczki to należności (aktywa), nie dług."
                },
                {
                  "pytanie": "Organem upoważnionym do zarządzania długiem Skarbu Państwa jest:",
                  "odpowiedzi": [
                    "Minister Finansów",
                    "Rada Polityki Pieniężnej",
                    "Prezes NBP"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Do zaciągania zobowiązań i innych operacji związanych z zarządzaniem długiem upoważniony jest Minister Finansów."
                },
                {
                  "pytanie": "Procedury ostrożnościowe uruchamiane są, gdy relacja PDP do PKB:",
                  "odpowiedzi": [
                    "zbliża się do konstytucyjnej granicy 60% PKB",
                    "przekroczy 30% PKB",
                    "spadnie poniżej 40% PKB"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Procedury ostrożnościowe i sanacyjne obowiązują, gdy PDP zbliża się do konstytucyjnej granicy 60% PKB (progi 55% i 60%)."
                },
                {
                  "pytanie": "Procedura ostrożnościowa nr 2 dotyczy sytuacji, gdy relacja PDP do PKB jest:",
                  "odpowiedzi": [
                    "większa od 55%, a mniejsza od 60%",
                    "równa lub większa od 60%",
                    "mniejsza od 50%"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Procedura nr 2: PDP/PKB > 55% i < 60%; procedura nr 3: PDP/PKB ≥ 60%."
                },
                {
                  "pytanie": "Gdy relacja PDP do PKB jest równa lub większa od 60%, w projekcie ustawy budżetowej na kolejny rok:",
                  "odpowiedzi": [
                    "nie zawiera się deficytu budżetu państwa",
                    "można zwiększyć deficyt",
                    "zawiesza się wykonanie budżetu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przy PDP/PKB ≥ 60% (procedura nr 3) m.in. zakazuje się udzielania nowych poręczeń/gwarancji i nie zawiera się deficytu w projekcie ustawy budżetowej; jest to naruszenie Konstytucji."
                },
                {
                  "pytanie": "Przez potrzeby pożyczkowe budżetu państwa rozumie się środki na sfinansowanie m.in.:",
                  "odpowiedzi": [
                    "deficytu budżetu państwa i budżetu środków europejskich oraz rozchodów",
                    "wyłącznie wydatków bieżących",
                    "wyłącznie wynagrodzeń w sferze budżetowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Potrzeby pożyczkowe budżetu państwa to środki na sfinansowanie deficytu budżetu państwa, deficytu budżetu środków europejskich oraz rozchodów budżetu państwa."
                }
              ]
            },
            {
              "nazwa": "Dyscyplina finansów publicznych",
              "pytania": [
                {
                  "pytanie": "Katalog naruszeń dyscypliny finansów publicznych ma charakter:",
                  "odpowiedzi": [
                    "zamknięty",
                    "otwarty",
                    "przykładowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Katalog naruszeń (czynów z art. 5-18 ustawy o odpowiedzialności za naruszenie dyscypliny f.p.) jest zamknięty."
                },
                {
                  "pytanie": "Odpowiedzialność za naruszenie dyscypliny finansów publicznych ponoszą m.in.:",
                  "odpowiedzi": [
                    "kierownicy i pracownicy jednostek sektora finansów publicznych (z powierzonymi obowiązkami)",
                    "wyłącznie Minister Finansów",
                    "wyłącznie organy kolegialne jako całość"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Odpowiedzialność ponoszą konkretne osoby — m.in. kierownicy i pracownicy jsfp, którym powierzono obowiązki; nie można jej przypisać organowi jako całości."
                },
                {
                  "pytanie": "Karą za naruszenie dyscypliny finansów publicznych NIE jest:",
                  "odpowiedzi": [
                    "pozbawienie wolności",
                    "nagana",
                    "kara pieniężna"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Karami są: upomnienie, nagana, kara pieniężna oraz zakaz pełnienia funkcji związanych z dysponowaniem środkami publicznymi. Pozbawienie wolności nie jest karą za naruszenie dyscypliny f.p."
                },
                {
                  "pytanie": "Karalność naruszenia dyscypliny finansów publicznych przedawnia się po upływie:",
                  "odpowiedzi": [
                    "3 lat od popełnienia czynu",
                    "5 lat od popełnienia czynu",
                    "roku od popełnienia czynu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przedawnienie karalności następuje po 3 latach od popełnienia czynu (przedawnienie wykonania kary — po 2 latach)."
                },
                {
                  "pytanie": "Organem II instancji w sprawach o naruszenie dyscypliny finansów publicznych jest:",
                  "odpowiedzi": [
                    "Główna Komisja Orzekająca",
                    "regionalna izba obrachunkowa",
                    "sąd okręgowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Postępowanie jest dwuinstancyjne: I instancja — komisje orzekające, II instancja — Główna Komisja Orzekająca (GKO)."
                },
                {
                  "pytanie": "Na rozstrzygnięcia Głównej Komisji Orzekającej przysługuje:",
                  "odpowiedzi": [
                    "skarga do sądu administracyjnego",
                    "apelacja do sądu okręgowego",
                    "kasacja do Sądu Najwyższego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Na rozstrzygnięcia GKO służy skarga do sądu administracyjnego."
                }
              ]
            },
            {
              "nazwa": "testy 2",
              "pytania": [
                {
                  "pytanie": "Finanse w ujęciu definicyjnym to:",
                  "odpowiedzi": [
                    "stosunki społeczne związane z gromadzeniem i wydatkowaniem środków pieniężnych przez różne podmioty",
                    "zasób środków pieniężnych zgromadzonych na rachunkach Skarbu Państwa",
                    "wyłącznie ogół dochodów i wydatków budżetu państwa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: stosunki społeczne związane z gromadzeniem i wydatkowaniem środków pieniężnych przez różne podmioty."
                },
                {
                  "pytanie": "Funkcja fiskalna finansów publicznych polega na:",
                  "odpowiedzi": [
                    "świadomym wykorzystaniu systemu finansowego do rozdzielania środków między grupy społeczne",
                    "pobieraniu i gromadzeniu środków pieniężnych przez państwo w celu realizacji jego zadań",
                    "oddziaływaniu na podmioty za pomocą ulg i obciążeń, by pobudzać pożądane zachowania"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: pobieraniu i gromadzeniu środków pieniężnych przez państwo w celu realizacji jego zadań."
                },
                {
                  "pytanie": "Ratyfikowana umowa międzynarodowa (za uprzednią zgodą wyrażoną w ustawie):",
                  "odpowiedzi": [
                    "ma pierwszeństwo przed ustawą, jeżeli ustawy tej nie da się pogodzić z umową",
                    "może samodzielnie nałożyć na obywateli RP obowiązek podatkowy, którego nie przewiduje ustawa krajowa",
                    "ma zawsze pierwszeństwo przed Konstytucją RP"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: ma pierwszeństwo przed ustawą, jeżeli ustawy tej nie da się pogodzić z umową."
                },
                {
                  "pytanie": "Skład sektora finansów publicznych określa przede wszystkim:",
                  "odpowiedzi": [
                    "art. 9 ustawy o finansach publicznych",
                    "art. 216 Konstytucji RP",
                    "art. 9 Ordynacji podatkowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: art. 9 ustawy o finansach publicznych."
                },
                {
                  "pytanie": "Jednostki budżetowe rozliczają się z budżetem metodą:",
                  "odpowiedzi": [
                    "netto — pokrywają wydatki z dochodów własnych, a do budżetu odprowadzają tylko nadwyżkę",
                    "mieszaną — same decydują, którą część dochodów zatrzymać",
                    "brutto — pokrywają wydatki bezpośrednio z budżetu, a pobrane dochody odprowadzają na rachunek budżetu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: brutto — pokrywają wydatki bezpośrednio z budżetu, a pobrane dochody odprowadzają na rachunek budżetu."
                },
                {
                  "pytanie": "Która cecha trafnie opisuje jednostkę budżetową?",
                  "odpowiedzi": [
                    "nie posiada osobowości prawnej i działa na podstawie statutu oraz planu finansowego",
                    "posiada ułomną osobowość prawną i działa na podstawie pełnomocnictwa JST",
                    "posiada osobowość prawną uzyskiwaną z chwilą wpisu do KRS"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: nie posiada osobowości prawnej i działa na podstawie statutu oraz planu finansowego."
                },
                {
                  "pytanie": "Wykonanie budżetu przez jednostkę budżetową przebiega według zasady:",
                  "odpowiedzi": [
                    "funduszowej",
                    "memoriałowej",
                    "kasowej"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: kasowej."
                },
                {
                  "pytanie": "Państwowe jednostki budżetowe są tworzone i likwidowane przez:",
                  "odpowiedzi": [
                    "organy stanowiące JST — sejmik województwa, radę powiatu, radę gminy",
                    "wyłącznie Radę Ministrów w drodze rozporządzenia",
                    "dysponentów części budżetowych — ministrów, kierowników urzędów centralnych, wojewodów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: dysponentów części budżetowych — ministrów, kierowników urzędów centralnych, wojewodów."
                },
                {
                  "pytanie": "Samorządowe jednostki budżetowe są tworzone i likwidowane przez:",
                  "odpowiedzi": [
                    "wojewodów oraz kierowników urzędów centralnych",
                    "organy wykonawcze JST — wójta, zarząd powiatu, zarząd województwa",
                    "organy stanowiące JST — sejmik województwa, radę powiatu, radę gminy"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: organy stanowiące JST — sejmik województwa, radę powiatu, radę gminy."
                },
                {
                  "pytanie": "Samorządowy zakład budżetowy co do zasady:",
                  "odpowiedzi": [
                    "pokrywa wydatki bezpośrednio z budżetu JST, a całość dochodów odprowadza do tego budżetu",
                    "wykonuje zadania odpłatnie, pokrywając koszty działalności z przychodów własnych",
                    "realizuje zadania nieodpłatnie, finansując się wyłącznie z dotacji"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: wykonuje zadania odpłatnie, pokrywając koszty działalności z przychodów własnych."
                },
                {
                  "pytanie": "Dotacje dla samorządowego zakładu budżetowego (z wyłączeniami) nie mogą przekroczyć:",
                  "odpowiedzi": [
                    "50% kosztów jego działalności",
                    "50% przychodów własnych zakładu",
                    "30% kosztów jego działalności"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 50% kosztów jego działalności."
                },
                {
                  "pytanie": "Agencja wykonawcza to:",
                  "odpowiedzi": [
                    "samorządowa osoba prawna tworzona na podstawie uchwały organu stanowiącego JST",
                    "jednostka budżetowa nieposiadająca osobowości prawnej, tworzona przez Ministra Finansów",
                    "państwowa osoba prawna powoływana na podstawie odrębnej ustawy w celu realizacji zadań państwa"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: państwowa osoba prawna powoływana na podstawie odrębnej ustawy w celu realizacji zadań państwa."
                },
                {
                  "pytanie": "Planowane wydatki agencji wykonawczej mogą przekraczać planowane dochody:",
                  "odpowiedzi": [
                    "wyłącznie za zgodą Sejmu wyrażoną w ustawie budżetowej",
                    "bez żadnych ograniczeń, w granicach statutu agencji",
                    "tylko za zgodą ministra sprawującego nadzór nad agencją, wydaną w porozumieniu z Ministrem Finansów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: tylko za zgodą ministra sprawującego nadzór nad agencją, wydaną w porozumieniu z Ministrem Finansów."
                },
                {
                  "pytanie": "Spośród działających agencji wykonawczych jako jedyna nie może być dotowana z budżetu państwa:",
                  "odpowiedzi": [
                    "Agencja Nieruchomości Rolnych",
                    "Narodowe Centrum Badań i Rozwoju",
                    "Narodowe Centrum Nauki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: Agencja Nieruchomości Rolnych."
                },
                {
                  "pytanie": "Agencja wykonawcza na koniec roku:",
                  "odpowiedzi": [
                    "zatrzymuje całą nadwyżkę środków jako kapitał zapasowy",
                    "przekazuje nadwyżkę bezpośrednio jednostkom samorządu terytorialnego",
                    "wpłaca do budżetu państwa nadwyżkę środków finansowych ustaloną na koniec roku"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: wpłaca do budżetu państwa nadwyżkę środków finansowych ustaloną na koniec roku."
                },
                {
                  "pytanie": "Instytucja gospodarki budżetowej:",
                  "odpowiedzi": [
                    "odpłatnie wykonuje zadania publiczne, a koszty i zobowiązania pokrywa wyłącznie z uzyskanych przychodów; ma osobowość prawną od chwili wpisu do KRS",
                    "wykonuje zadania nieodpłatnie i nie posiada osobowości prawnej",
                    "pokrywa wydatki bezpośrednio z budżetu państwa metodą brutto"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: odpłatnie wykonuje zadania publiczne, a koszty i zobowiązania pokrywa wyłącznie z uzyskanych przychodów; ma osobowość prawną od chwili wpisu do KRS."
                },
                {
                  "pytanie": "Instytucję gospodarki budżetowej tworzy się m.in.:",
                  "odpowiedzi": [
                    "na mocy uchwały Sejmu podjętej bezwzględną większością głosów",
                    "na wniosek ministra lub Szefa Kancelarii Prezesa RM za zgodą Rady Ministrów",
                    "w drodze rozporządzenia Ministra Finansów bez zgody Rady Ministrów"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: na wniosek ministra lub Szefa Kancelarii Prezesa RM za zgodą Rady Ministrów."
                },
                {
                  "pytanie": "Rozporządzenie składnikami aktywów trwałych przez instytucję gospodarki budżetowej wymaga zgody ministra właściwego ds. Skarbu Państwa, gdy wartość rynkowa przedmiotu przekracza równowartość:",
                  "odpowiedzi": [
                    "100 000 euro",
                    "50 000 złotych",
                    "50 000 euro"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: 50 000 euro."
                },
                {
                  "pytanie": "Funkcjonowanie funduszu celowego opiera się na tzw. metodzie funduszowania, która polega na:",
                  "odpowiedzi": [
                    "ujmowaniu wszystkich dochodów i wydatków w jednym wspólnym funduszu budżetu",
                    "przeznaczaniu określonych dochodów na imiennie określone wydatki",
                    "pokrywaniu wydatków bezpośrednio z budżetu i odprowadzaniu dochodów na rachunek budżetu"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: przeznaczaniu określonych dochodów na imiennie określone wydatki."
                },
                {
                  "pytanie": "Państwowe fundusze celowe tworzone są:",
                  "odpowiedzi": [
                    "w drodze ustawy o finansach publicznych",
                    "w drodze rozporządzenia Rady Ministrów",
                    "wyłącznie w drodze ustawy (nie ustawy o finansach publicznych)"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: wyłącznie w drodze ustawy (nie ustawy o finansach publicznych)."
                },
                {
                  "pytanie": "Głównym źródłem dochodów Funduszu Ubezpieczeń Społecznych są:",
                  "odpowiedzi": [
                    "wpływy z prywatyzacji majątku Skarbu Państwa",
                    "dotacje celowe z budżetu Unii Europejskiej",
                    "składki na ubezpieczenia społeczne, które nie podlegają przekazaniu OFE"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: składki na ubezpieczenia społeczne, które nie podlegają przekazaniu OFE."
                },
                {
                  "pytanie": "Budżet państwa to:",
                  "odpowiedzi": [
                    "roczny plan wyłącznie dochodów i wydatków administracji rządowej",
                    "roczny plan dochodów i wydatków oraz przychodów i rozchodów organów władzy publicznej",
                    "wieloletni plan dochodów i wydatków sektora finansów publicznych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: roczny plan dochodów i wydatków oraz przychodów i rozchodów organów władzy publicznej."
                },
                {
                  "pytanie": "Inicjatywa ustawodawcza w zakresie projektu ustawy budżetowej przysługuje:",
                  "odpowiedzi": [
                    "Ministrowi Finansów oraz Prezydentowi RP",
                    "Radzie Ministrów oraz grupie co najmniej 15 posłów",
                    "wyłącznie Radzie Ministrów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: wyłącznie Radzie Ministrów."
                },
                {
                  "pytanie": "W ujęciu prawnym budżet państwa to:",
                  "odpowiedzi": [
                    "akt normatywny",
                    "ogół czynności związanych z gromadzeniem i wydatkowaniem środków",
                    "pewien fundusz pieniężny"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: akt normatywny."
                },
                {
                  "pytanie": "Prowizorium budżetowe to:",
                  "odpowiedzi": [
                    "szczegółowy podział kwot dochodów i wydatków sporządzany po uchwaleniu budżetu",
                    "budżet tymczasowy, uchwalany na okres krótszy niż rok, z ogólnie uchwalonymi kwotami dochodów i wydatków",
                    "wieloletni plan finansowy państwa sporządzany na 4 lata"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: budżet tymczasowy, uchwalany na okres krótszy niż rok, z ogólnie uchwalonymi kwotami dochodów i wydatków."
                },
                {
                  "pytanie": "Zasada jedności formalnej budżetu oznacza, że:",
                  "odpowiedzi": [
                    "wszystkie dochody i wydatki są ujęte w jednym akcie prawnym — ustawie budżetowej",
                    "środki wpływające do budżetu tworzą jeden wspólny fundusz bez wiązania dochodów z wydatkami",
                    "budżet jest uchwalany na jeden rok budżetowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: wszystkie dochody i wydatki są ujęte w jednym akcie prawnym — ustawie budżetowej."
                },
                {
                  "pytanie": "Zasada jedności materialnej budżetu oznacza, że:",
                  "odpowiedzi": [
                    "środki publiczne tworzą jeden wspólny fundusz, bez przypisywania konkretnych dochodów do konkretnych wydatków",
                    "każdy rodzaj dochodu jest z góry przeznaczony na ściśle wskazany wydatek",
                    "cała materia budżetowa jest ujęta w jednym akcie prawnym"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: środki publiczne tworzą jeden wspólny fundusz, bez przypisywania konkretnych dochodów do konkretnych wydatków."
                },
                {
                  "pytanie": "Zasada uprzedniości budżetu postuluje:",
                  "odpowiedzi": [
                    "uchwalenie budżetu przed rozpoczęciem roku budżetowego, którego dotyczy",
                    "maksymalną precyzję w planowaniu dochodów i wydatków",
                    "oszczędne i racjonalne wydatkowanie środków budżetowych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: uchwalenie budżetu przed rozpoczęciem roku budżetowego, którego dotyczy."
                },
                {
                  "pytanie": "Zasada realności budżetu (nieuznawana przez część doktryny) postuluje:",
                  "odpowiedzi": [
                    "uchwalenie budżetu przed rozpoczęciem roku budżetowego",
                    "maksymalną precyzję w planowaniu dochodów i wydatków",
                    "racjonalne i oszczędne wydatkowanie środków"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: maksymalną precyzję w planowaniu dochodów i wydatków."
                },
                {
                  "pytanie": "Klasyfikacja budżetowa to:",
                  "odpowiedzi": [
                    "szczegółowy wykaz zadań publicznych realizowanych przez dysponentów",
                    "plan finansowy sektora finansów publicznych jako całości",
                    "skonstruowany układ dochodów i wydatków oraz przychodów i rozchodów stosowany przy sporządzaniu, uchwalaniu i wykonywaniu budżetu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: skonstruowany układ dochodów i wydatków oraz przychodów i rozchodów stosowany przy sporządzaniu, uchwalaniu i wykonywaniu budżetu."
                },
                {
                  "pytanie": "Podział na części w klasyfikacji budżetowej:",
                  "odpowiedzi": [
                    "stosuje się wyłącznie w obrębie budżetu państwa",
                    "dotyczy wyłącznie przychodów i rozchodów",
                    "stosuje się zarówno w budżecie państwa, jak i w budżetach JST"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: stosuje się wyłącznie w obrębie budżetu państwa."
                },
                {
                  "pytanie": "Dysponentami części budżetowej (dysponentami głównymi) są:",
                  "odpowiedzi": [
                    "ministrowie, kierownicy organów oraz wojewodowie",
                    "organy stanowiące jednostek samorządu terytorialnego",
                    "wyłącznie Minister Finansów i Prezes Rady Ministrów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: ministrowie, kierownicy organów oraz wojewodowie."
                },
                {
                  "pytanie": "Przychody i rozchody w klasyfikacji budżetowej klasyfikowane są:",
                  "odpowiedzi": [
                    "według części, działów i rozdziałów",
                    "wyłącznie według działów",
                    "wyłącznie według paragrafów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: wyłącznie według paragrafów."
                },
                {
                  "pytanie": "Paragrafy klasyfikacji wydatków:",
                  "odpowiedzi": [
                    "podzielono na 7 grup i stosuje się je w układzie wykonawczym budżetu",
                    "nie podlegają dalszemu podziałowi i ujmowane są w ustawie budżetowej",
                    "podzielono na 5 grup i stosuje się je już w ustawie budżetowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: podzielono na 7 grup i stosuje się je w układzie wykonawczym budżetu."
                },
                {
                  "pytanie": "„Notą budżetową” nazywa się:",
                  "odpowiedzi": [
                    "rozporządzenie Ministra Finansów określające sposób, tryb i terminy opracowania materiałów do projektu ustawy budżetowej",
                    "sprawozdanie Komisji Finansów Publicznych o projekcie budżetu",
                    "uzasadnienie do projektu ustawy budżetowej przedkładane Sejmowi"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: rozporządzenie Ministra Finansów określające sposób, tryb i terminy opracowania materiałów do projektu ustawy budżetowej."
                },
                {
                  "pytanie": "Limity wydatków w procedurze budżetowej to:",
                  "odpowiedzi": [
                    "kwoty wydatków zatwierdzane samodzielnie przez poszczególnych dysponentów",
                    "minimalne kwoty wydatków, które dysponenci muszą obowiązkowo wykonać",
                    "określone przez Ministra Finansów kwoty będące nieprzekraczalnym, górnym ograniczeniem wydatków proponowanych przez dysponentów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: określone przez Ministra Finansów kwoty będące nieprzekraczalnym, górnym ograniczeniem wydatków proponowanych przez dysponentów."
                },
                {
                  "pytanie": "Rada Ministrów przedstawia Sejmowi projekt ustawy budżetowej w terminie do:",
                  "odpowiedzi": [
                    "30 września roku poprzedzającego rok budżetowy",
                    "30 października roku poprzedzającego rok budżetowy",
                    "31 grudnia roku poprzedzającego rok budżetowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 30 września roku poprzedzającego rok budżetowy."
                },
                {
                  "pytanie": "Zgodnie z Konstytucją RP prace nad budżetem w Parlamencie nie mogą trwać dłużej niż:",
                  "odpowiedzi": [
                    "4 miesiące",
                    "6 miesięcy",
                    "3 miesiące"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 4 miesiące."
                },
                {
                  "pytanie": "Uchwalenie ustawy budżetowej przez Sejm w III czytaniu następuje:",
                  "odpowiedzi": [
                    "większością 3/5 głosów",
                    "bezwzględną większością głosów",
                    "zwykłą większością głosów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: zwykłą większością głosów."
                },
                {
                  "pytanie": "Senat na uchwalenie poprawek do ustawy budżetowej ma:",
                  "odpowiedzi": [
                    "14 dni od dnia jej otrzymania",
                    "20 dni od dnia jej otrzymania, przy czym nie może odrzucić ustawy w całości",
                    "30 dni od dnia jej otrzymania, z prawem odrzucenia ustawy w całości"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 20 dni od dnia jej otrzymania, przy czym nie może odrzucić ustawy w całości."
                },
                {
                  "pytanie": "Odrzucenie poprawki Senatu do ustawy budżetowej następuje przez Sejm:",
                  "odpowiedzi": [
                    "większością 2/3 głosów",
                    "zwykłą większością głosów",
                    "bezwzględną większością głosów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: bezwzględną większością głosów."
                },
                {
                  "pytanie": "Prezydent RP po otrzymaniu ustawy budżetowej:",
                  "odpowiedzi": [
                    "ma 21 dni na jej podpisanie albo zwrócenie Sejmowi",
                    "podpisuje ją w ciągu 7 dni albo kieruje do Trybunału Konstytucyjnego — nie może odmówić podpisu ani skierować jej do ponownego rozpatrzenia",
                    "może ją zawetować i skierować do Sejmu do ponownego rozpatrzenia"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: podpisuje ją w ciągu 7 dni albo kieruje do Trybunału Konstytucyjnego — nie może odmówić podpisu ani skierować jej do ponownego rozpatrzenia."
                },
                {
                  "pytanie": "Trybunał Konstytucyjny orzeka w sprawie zgodności ustawy budżetowej z Konstytucją w terminie:",
                  "odpowiedzi": [
                    "nie później niż w ciągu 6 miesięcy od dnia złożenia wniosku",
                    "nie później niż w ciągu 14 dni od dnia złożenia wniosku",
                    "nie później niż w ciągu 2 miesięcy od dnia złożenia wniosku"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: nie później niż w ciągu 2 miesięcy od dnia złożenia wniosku."
                },
                {
                  "pytanie": "Prezydent RP może zarządzić skrócenie kadencji Sejmu, gdy ustawa budżetowa nie zostanie mu przedstawiona do podpisu w ciągu 4 miesięcy — decyzję podejmuje w ciągu:",
                  "odpowiedzi": [
                    "30 dni",
                    "7 dni",
                    "14 dni"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: 14 dni."
                },
                {
                  "pytanie": "Układ wykonawczy budżetu dysponenci części budżetowych przedstawiają Ministrowi Finansów:",
                  "odpowiedzi": [
                    "w ciągu 30 dni od dnia uchwalenia ustawy przez Sejm",
                    "w ciągu 14 dni od dnia podpisania ustawy przez Prezydenta",
                    "w ciągu 21 dni od dnia ogłoszenia ustawy budżetowej w Dzienniku Ustaw"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: w ciągu 21 dni od dnia ogłoszenia ustawy budżetowej w Dzienniku Ustaw."
                },
                {
                  "pytanie": "Przeniesienie wydatków polegające na zmianie wydatków majątkowych:",
                  "odpowiedzi": [
                    "wymaga zgody Ministra Finansów",
                    "nie wymaga żadnej zgody i należy do swobody dysponenta",
                    "wymaga zgody Rady Ministrów wyrażonej w rozporządzeniu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: wymaga zgody Ministra Finansów."
                },
                {
                  "pytanie": "Blokowanie planowanych wydatków budżetowych oznacza:",
                  "odpowiedzi": [
                    "trwałe umorzenie zaplanowanych wydatków budżetowych",
                    "okresowy lub obowiązujący do końca roku zakaz dysponowania częścią lub całością planowanych wydatków",
                    "przeniesienie wydatków do nowej rezerwy celowej"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: okresowy lub obowiązujący do końca roku zakaz dysponowania częścią lub całością planowanych wydatków."
                },
                {
                  "pytanie": "Decyzję Ministra Finansów o blokowaniu wydatków:",
                  "odpowiedzi": [
                    "może uchylić wyłącznie Sejm w drodze uchwały",
                    "może uchylić Rada Ministrów",
                    "może uchylić Prezydent RP w ciągu 7 dni"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: może uchylić Rada Ministrów."
                },
                {
                  "pytanie": "Wykaz wydatków niewygasających z końcem roku budżetowego ustala Rada Ministrów w drodze rozporządzenia nie później niż do:",
                  "odpowiedzi": [
                    "15 listopada roku budżetowego",
                    "15 grudnia roku budżetowego",
                    "31 grudnia roku budżetowego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 15 grudnia roku budżetowego."
                },
                {
                  "pytanie": "Ostateczny termin dokonania wydatków niewygasających nie może upłynąć później niż:",
                  "odpowiedzi": [
                    "31 marca roku następnego",
                    "30 marca roku następnego",
                    "30 kwietnia roku następnego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 30 marca roku następnego."
                },
                {
                  "pytanie": "Rezerwa ogólna budżetu państwa:",
                  "odpowiedzi": [
                    "jej dysponentem jest Minister Finansów, a limit wynosi 2% wydatków budżetu",
                    "jest fakultatywna i nie może przekroczyć 5% wydatków budżetu",
                    "jest obligatoryjna, jej dysponentem jest Rada Ministrów i nie może być wyższa niż 0,2% wydatków budżetu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: jest obligatoryjna, jej dysponentem jest Rada Ministrów i nie może być wyższa niż 0,2% wydatków budżetu."
                },
                {
                  "pytanie": "Suma rezerw celowych w budżecie państwa nie może przekroczyć:",
                  "odpowiedzi": [
                    "0,2% wydatków budżetu",
                    "10% wydatków budżetu",
                    "5% wydatków budżetu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: 5% wydatków budżetu."
                },
                {
                  "pytanie": "Podziału rezerw celowych dokonuje Minister Finansów (w porozumieniu z dysponentami) najpóźniej do:",
                  "odpowiedzi": [
                    "15 października",
                    "30 września",
                    "15 grudnia"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 15 października."
                },
                {
                  "pytanie": "Kontrola budżetowa prowadzona na etapie planowania, mająca charakter wstępny, to kontrola:",
                  "odpowiedzi": [
                    "ex ante (wstępna)",
                    "następcza (ex post)",
                    "bieżąca"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: ex ante (wstępna)."
                },
                {
                  "pytanie": "Roczne sprawozdanie z wykonania budżetu państwa Rada Ministrów przedstawia Sejmowi i NIK do:",
                  "odpowiedzi": [
                    "30 czerwca roku następującego po upływie roku budżetowego",
                    "31 maja roku następującego po upływie roku budżetowego",
                    "30 września roku następnego"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 31 maja roku następującego po upływie roku budżetowego."
                },
                {
                  "pytanie": "Sejm na rozpatrzenie sprawozdania i opinii NIK oraz podjęcie uchwały w sprawie absolutorium ma:",
                  "odpowiedzi": [
                    "30 dni",
                    "90 dni",
                    "60 dni"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 90 dni."
                },
                {
                  "pytanie": "Wieloletni Plan Finansowy Państwa sporządzany jest na:",
                  "odpowiedzi": [
                    "3 lata budżetowe",
                    "4 lata budżetowe",
                    "5 lat budżetowych"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 4 lata budżetowe."
                },
                {
                  "pytanie": "Transfery wewnętrzne w sektorze finansów publicznych:",
                  "odpowiedzi": [
                    "są wpływem o charakterze zwrotnym",
                    "zwiększają łączną sumę środków publicznych",
                    "nie zwiększają łącznej sumy środków publicznych"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: nie zwiększają łącznej sumy środków publicznych."
                },
                {
                  "pytanie": "Wydatki realne budżetu to wydatki:",
                  "odpowiedzi": [
                    "przeznaczone na przyrost majątku i budowę nowych przedsiębiorstw",
                    "dokonywane na rzecz podmiotów spoza sektora publicznego, niezasilające tego sektora",
                    "w wyniku których następuje zużycie elementów PKB przez zakup towarów i usług"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: w wyniku których następuje zużycie elementów PKB przez zakup towarów i usług."
                },
                {
                  "pytanie": "Wydatki redystrybucyjne budżetu:",
                  "odpowiedzi": [
                    "służą wyłącznie realizacji klasycznych funkcji zewnętrznych państwa",
                    "dokonywane są na rzecz innych podmiotów i nie zasilają sektora publicznego",
                    "powodują zużycie elementów PKB poprzez zakup towarów i usług"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: dokonywane są na rzecz innych podmiotów i nie zasilają sektora publicznego."
                },
                {
                  "pytanie": "Dotacje podmiotowe to środki budżetowe przeznaczone na:",
                  "odpowiedzi": [
                    "dopłaty do określonych wyrobów i usług w celu obniżenia ich cen",
                    "dofinansowanie działalności bieżącej ustawowo wskazanych podmiotów",
                    "realizację programów finansowanych ze środków funduszy strukturalnych UE"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: dofinansowanie działalności bieżącej ustawowo wskazanych podmiotów."
                },
                {
                  "pytanie": "Dotacje przedmiotowe związane są z:",
                  "odpowiedzi": [
                    "dofinansowaniem działalności bieżącej ustawowo wskazanych podmiotów",
                    "pierwszym wyposażeniem nowotworzonych zakładów budżetowych",
                    "dopłatami do określonych rodzajów wyrobów i usług w celu utrzymania lub obniżenia ich cen"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: dopłatami do określonych rodzajów wyrobów i usług w celu utrzymania lub obniżenia ich cen."
                },
                {
                  "pytanie": "Subwencja ogólna dla JST jest udzielana:",
                  "odpowiedzi": [
                    "na podstawie kryteriów obiektywnych, np. liczby mieszkańców",
                    "na ściśle określony cel wskazany przez podmiot udzielający",
                    "wyłącznie jako zwrotna pomoc finansowa wymagająca rozliczenia"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: na podstawie kryteriów obiektywnych, np. liczby mieszkańców."
                },
                {
                  "pytanie": "Subwencję na działalność statutową otrzymują partie, które w wyborach do Sejmu uzyskały co najmniej:",
                  "odpowiedzi": [
                    "3% głosów (a koalicje wyborcze — 6%)",
                    "6% głosów (a koalicje — 3%)",
                    "5% głosów (a koalicje — 8%)"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 3% głosów (a koalicje wyborcze — 6%)."
                },
                {
                  "pytanie": "Świadczenia na rzecz osób fizycznych z budżetu państwa to wydatki:",
                  "odpowiedzi": [
                    "stanowiące wynagrodzenia osób zatrudnionych w jednostkach budżetowych",
                    "obejmujące zakupy towarów i usług dla jednostek budżetowych",
                    "kierowane do osób fizycznych na podstawie odrębnych przepisów, niebędące wynagrodzeniem za pracę"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: kierowane do osób fizycznych na podstawie odrębnych przepisów, niebędące wynagrodzeniem za pracę."
                },
                {
                  "pytanie": "Dochody publiczne to wpływy do budżetu o charakterze:",
                  "odpowiedzi": [
                    "stałym i bezzwrotnym",
                    "czasowym i odpłatnym",
                    "jednorazowym i zwrotnym"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: stałym i bezzwrotnym."
                },
                {
                  "pytanie": "Przychody publiczne to wpływy pochodzące z operacji czasowych, o charakterze:",
                  "odpowiedzi": [
                    "jednorazowym i zwrotnym",
                    "stałym i nieodpłatnym",
                    "stałym i bezzwrotnym"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: jednorazowym i zwrotnym."
                },
                {
                  "pytanie": "Rozchody publiczne to:",
                  "odpowiedzi": [
                    "wpływy bezzwrotne, takie jak podatki i cła",
                    "środki przeznaczone na finansowanie zadań publicznych realizowanych przez państwo",
                    "zobowiązania powstałe wskutek sięgnięcia do czasowych przychodów — spłata rat kredytów i pożyczek oraz wykup papierów wartościowych"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: zobowiązania powstałe wskutek sięgnięcia do czasowych przychodów — spłata rat kredytów i pożyczek oraz wykup papierów wartościowych."
                },
                {
                  "pytanie": "Wynik (saldo) budżetowy, gdy jest ujemny, stanowi:",
                  "odpowiedzi": [
                    "państwowy dług publiczny",
                    "nadwyżkę budżetową",
                    "deficyt budżetowy"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: deficyt budżetowy."
                },
                {
                  "pytanie": "Konstytucja RP zawiera:",
                  "odpowiedzi": [
                    "zakaz emisji obligacji skarbowych na pokrycie deficytu",
                    "nakaz finansowania deficytu wyłącznie obligacjami skarbowymi",
                    "zakaz finansowania deficytu budżetowego przez bank centralny w drodze emisji pieniądza"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: zakaz finansowania deficytu budżetowego przez bank centralny w drodze emisji pieniądza."
                },
                {
                  "pytanie": "Maksymalny limit deficytu wynikający z Traktatu o funkcjonowaniu UE (procedura nadmiernego deficytu) wynosi:",
                  "odpowiedzi": [
                    "0,2% PKB",
                    "60% PKB",
                    "3% PKB"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: 3% PKB."
                },
                {
                  "pytanie": "Bony skarbowe to:",
                  "odpowiedzi": [
                    "krótkoterminowe papiery wartościowe o terminie wykupu nieprzekraczającym roku, sprzedawane z dyskontem",
                    "zdematerializowane obligacje oszczędnościowe dla osób fizycznych",
                    "papiery wartościowe emitowane na okres dłuższy niż rok"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: krótkoterminowe papiery wartościowe o terminie wykupu nieprzekraczającym roku, sprzedawane z dyskontem."
                },
                {
                  "pytanie": "Obligacje skarbowe są:",
                  "odpowiedzi": [
                    "zawsze materialne i wydawane nabywcy w formie dokumentu na okaziciela",
                    "zdematerializowane — fakt nabycia lub zbycia jest odnotowywany na rachunkach papierów wartościowych, a nabywca otrzymuje świadectwo depozytowe",
                    "emitowane wyłącznie na okres nieprzekraczający jednego roku"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: zdematerializowane — fakt nabycia lub zbycia jest odnotowywany na rachunkach papierów wartościowych, a nabywca otrzymuje świadectwo depozytowe."
                },
                {
                  "pytanie": "Dług publiczny:",
                  "odpowiedzi": [
                    "jest różnicą między dochodami a wydatkami danego roku",
                    "dotyczy jednego roku budżetowego i równa się rocznemu deficytowi",
                    "dotyczy okresu wieloletniego i jest wynikiem skumulowanych deficytów z lat poprzednich"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: dotyczy okresu wieloletniego i jest wynikiem skumulowanych deficytów z lat poprzednich."
                },
                {
                  "pytanie": "Relacja między pojęciami długu jest następująca:",
                  "odpowiedzi": [
                    "państwowy dług publiczny jest fragmentem długu Skarbu Państwa",
                    "dług Skarbu Państwa (rządowy) jest fragmentem państwowego długu publicznego, który obejmuje dług całego sektora f.p., łącznie z długiem JST",
                    "oba pojęcia są tożsame i obejmują wyłącznie dług rządowy"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: dług Skarbu Państwa (rządowy) jest fragmentem państwowego długu publicznego, który obejmuje dług całego sektora f.p., łącznie z długiem JST."
                },
                {
                  "pytanie": "Do zaciągania zobowiązań i przeprowadzania operacji związanych z zarządzaniem długiem publicznym upoważniony jest:",
                  "odpowiedzi": [
                    "Prezes Narodowego Banku Polskiego",
                    "Prezes Rady Ministrów",
                    "Minister Finansów"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: Minister Finansów."
                },
                {
                  "pytanie": "Zgodnie z art. 216 Konstytucji RP nie wolno zaciągać zobowiązań, w następstwie których państwowy dług publiczny przekroczy:",
                  "odpowiedzi": [
                    "2/3 wartości rocznego PKB",
                    "3/5 (60%) wartości rocznego PKB",
                    "1/2 (50%) wartości rocznego PKB"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: 3/5 (60%) wartości rocznego PKB."
                },
                {
                  "pytanie": "Procedura ostrożnościowa nr 2 uruchamiana jest, gdy relacja państwowego długu publicznego do PKB:",
                  "odpowiedzi": [
                    "jest większa od 50%, a mniejsza od 55%",
                    "jest większa od 55%, a mniejsza od 60%",
                    "jest równa lub większa od 60%"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: jest większa od 55%, a mniejsza od 60%."
                },
                {
                  "pytanie": "Procedura ostrożnościowa nr 3 (relacja PDP do PKB równa lub większa od 60%):",
                  "odpowiedzi": [
                    "oznacza naruszenie Konstytucji oraz powinna powodować podanie się Rady Ministrów do dymisji",
                    "nie wywołuje żadnych skutków prawnych, a jedynie obowiązek informacyjny",
                    "powoduje automatyczne skrócenie kadencji Sejmu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: oznacza naruszenie Konstytucji oraz powinna powodować podanie się Rady Ministrów do dymisji."
                },
                {
                  "pytanie": "Naruszeniem dyscypliny finansów publicznych jest:",
                  "odpowiedzi": [
                    "popełnienie czynu zabronionego przez prawo, w sposób umyślny lub nieumyślny",
                    "każde przekroczenie planu wydatków, niezależnie od winy",
                    "wyłącznie umyślne działanie sprawcy mające na celu uszczuplenie środków publicznych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: popełnienie czynu zabronionego przez prawo, w sposób umyślny lub nieumyślny."
                },
                {
                  "pytanie": "Odpowiedzialność za naruszenie dyscypliny finansów publicznych:",
                  "odpowiedzi": [
                    "ponosi wyłącznie kierownik jednostki, niezależnie od udziału innych osób",
                    "nie może być przypisana organowi — ponoszą ją konkretne osoby wchodzące w jego skład",
                    "ponosi organ jako całość, a nie poszczególne osoby"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Poprawna odpowiedź: nie może być przypisana organowi — ponoszą ją konkretne osoby wchodzące w jego skład."
                },
                {
                  "pytanie": "Organem II instancji w sprawach o naruszenie dyscypliny finansów publicznych jest:",
                  "odpowiedzi": [
                    "Główna Komisja Orzekająca w Sprawach o Naruszenie Dyscypliny Finansów Publicznych",
                    "resortowa komisja orzekająca przy właściwym ministrze",
                    "regionalna komisja orzekająca przy regionalnej izbie obrachunkowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: Główna Komisja Orzekająca w Sprawach o Naruszenie Dyscypliny Finansów Publicznych."
                },
                {
                  "pytanie": "Na rozstrzygnięcia Głównej Komisji Orzekającej przysługuje:",
                  "odpowiedzi": [
                    "skarga do sądu administracyjnego",
                    "odwołanie do Sądu Najwyższego",
                    "kasacja do Trybunału Konstytucyjnego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: skarga do sądu administracyjnego."
                },
                {
                  "pytanie": "Przedawnienie karalności za naruszenie dyscypliny finansów publicznych następuje po upływie:",
                  "odpowiedzi": [
                    "5 lat od momentu popełnienia czynu",
                    "2 lat od momentu popełnienia czynu",
                    "3 lat od momentu popełnienia czynu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: 3 lat od momentu popełnienia czynu."
                },
                {
                  "pytanie": "Zatarcie ukarania za naruszenie dyscypliny finansów publicznych następuje z mocy prawa po upływie:",
                  "odpowiedzi": [
                    "2 lat od wykonania kary lub przedawnienia jej wykonania",
                    "3 lat od wykonania kary",
                    "5 lat od uprawomocnienia się orzeczenia"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Poprawna odpowiedź: 2 lat od wykonania kary lub przedawnienia jej wykonania."
                },
                {
                  "pytanie": "Potrzeby pożyczkowe budżetu państwa w ujęciu netto, w odróżnieniu od ujęcia brutto:",
                  "odpowiedzi": [
                    "obejmują dodatkowo koszty obsługi całego długu publicznego",
                    "są zawsze wyższe od potrzeb pożyczkowych brutto",
                    "nie obejmują kwot przeznaczonych na spłatę (rolowanie) wcześniej zaciągniętego długu"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Poprawna odpowiedź: nie obejmują kwot przeznaczonych na spłatę (rolowanie) wcześniej zaciągniętego długu."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nazwa": "Prawo handlowe",
      "ikona": "⚖️",
      "opis": "Prawo spółek handlowych (KSH), KRS, CEIDG i Prawo przedsiębiorców. Jedna odpowiedź prawidłowa; po wybraniu wyświetla się uzasadnienie z konkretnym artykułem.",
      "podkategorie": [
        {
          "nazwa": "Testy",
          "testy": [
            {
              "nazwa": "Pojęcia ogólne (definicje KSH)",
              "pytania": [
                {
                  "pytanie": "Spółkami osobowymi są:",
                  "odpowiedzi": [
                    "spółka jawna, partnerska, komandytowa i komandytowo-akcyjna",
                    "spółka jawna, partnerska, cywilna i komandytowa",
                    "spółka jawna, partnerska i komandytowa",
                    "spółka jawna, prosta SA, komandytowo-akcyjna i komandytowa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 4 § 1 pkt 1 KSH — spółki osobowe to: jawna, partnerska, komandytowa i komandytowo-akcyjna. Spółka cywilna nie jest spółką handlową."
                },
                {
                  "pytanie": "Zgodnie z KSH, spółką osobową NIE jest:",
                  "odpowiedzi": [
                    "spółka cywilna",
                    "spółka komandytowa",
                    "spółka komandytowo-akcyjna",
                    "spółka partnerska"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 4 § 1 pkt 1 KSH — spółka cywilna jest umową prawa cywilnego (KC), a nie spółką handlową/osobową."
                },
                {
                  "pytanie": "Spółka osobowa:",
                  "odpowiedzi": [
                    "jest tzw. ułomną osobą prawną — nie ma osobowości prawnej, ale posiada zdolność prawną",
                    "z chwilą wpisu do rejestru uzyskuje osobowość prawną",
                    "nie posiada ani osobowości prawnej, ani zdolności prawnej",
                    "jest osobą prawną od chwili zawarcia umowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 8 § 1 KSH — spółka osobowa może we własnym imieniu nabywać prawa i zaciągać zobowiązania (ma zdolność prawną), lecz nie ma osobowości prawnej."
                },
                {
                  "pytanie": "Ogół praw i obowiązków wspólnika spółki osobowej:",
                  "odpowiedzi": [
                    "może być przeniesiony na inną osobę tylko wówczas, gdy umowa spółki tak stanowi",
                    "nigdy nie może być przeniesiony",
                    "może być przeniesiony za zgodą wszystkich wspólników, niezależnie od umowy",
                    "może być przeniesiony swobodnie"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 10 § 1 KSH — przeniesienie ogółu praw i obowiązków jest dopuszczalne tylko, gdy umowa spółki tak stanowi (i co do zasady za zgodą pozostałych wspólników — § 2)."
                },
                {
                  "pytanie": "W razie przeniesienia ogółu praw i obowiązków wspólnika spółki osobowej, za zobowiązania występującego wspólnika i zobowiązania spółki:",
                  "odpowiedzi": [
                    "odpowiadają solidarnie występujący wspólnik oraz wspólnik przystępujący",
                    "odpowiada jedynie występujący wspólnik",
                    "odpowiada jedynie wspólnik przystępujący",
                    "odpowiada wyłącznie spółka"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 10 § 3 KSH — za zobowiązania występującego wspólnika oraz zobowiązania spółki odpowiadają solidarnie wspólnik występujący i przystępujący."
                },
                {
                  "pytanie": "Czynność prawna dokonana bez zgody właściwego organu spółki kapitałowej, wymaganej wyłącznie przez umowę spółki albo statut, jest:",
                  "odpowiedzi": [
                    "ważna",
                    "nieważna",
                    "nieważna tylko gdy druga strona wiedziała o wymogu zgody albo jest to czynność jednostronna",
                    "względnie bezskuteczna"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 17 § 3 KSH — jeżeli zgody organu wymaga tylko umowa spółki albo statut (a nie ustawa), czynność dokonana bez zgody jest ważna (z możliwą odpowiedzialnością wewnętrzną)."
                },
                {
                  "pytanie": "Spółka kapitałowa w organizacji przed wpisem do rejestru przedsiębiorców:",
                  "odpowiedzi": [
                    "może podjąć działalność gospodarczą",
                    "nie może podjąć działalności gospodarczej",
                    "nie może, chyba że sąd rejestrowy wyrazi zgodę",
                    "może, chyba że sąd zgłosi sprzeciw w terminie 7 dni"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 11 § 1 KSH — spółki kapitałowe w organizacji mogą we własnym imieniu nabywać prawa i zaciągać zobowiązania, a więc prowadzić działalność."
                },
                {
                  "pytanie": "Rozporządzenie udziałem albo akcją dokonane przed wpisem spółki kapitałowej do rejestru przedsiębiorców jest:",
                  "odpowiedzi": [
                    "nieważne",
                    "ważne",
                    "ważne, ale wymaga potwierdzenia",
                    "bezskuteczne wobec spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 16 KSH — rozporządzenie udziałem albo akcją dokonane przed wpisem spółki kapitałowej do rejestru (albo przed zarejestrowaniem podwyższenia kapitału) jest nieważne."
                },
                {
                  "pytanie": "Spółka dominująca ma obowiązek zawiadomić spółkę kapitałową zależną o powstaniu stosunku dominacji w terminie dwóch tygodni; pod rygorem zawieszenia prawa głosu z udziałów (akcji) spółki dominującej reprezentujących:",
                  "odpowiedzi": [
                    "więcej niż 33% kapitału zakładowego spółki zależnej",
                    "więcej niż 33% kapitału zakładowego spółki dominującej",
                    "więcej niż 30% kapitału zakładowego spółki zależnej",
                    "więcej niż 25% kapitału zakładowego spółki zależnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 6 § 1 KSH — niedopełnienie zawiadomienia w terminie 2 tygodni powoduje zawieszenie wykonywania prawa głosu z udziałów/akcji spółki dominującej reprezentujących więcej niż 33% kapitału zakładowego spółki zależnej."
                },
                {
                  "pytanie": "Określenie „spółka jednoosobowa” oznacza:",
                  "odpowiedzi": [
                    "spółkę kapitałową, której wszystkie udziały albo akcje należą do jednego wspólnika albo akcjonariusza",
                    "spółkę osobową, której wszystkie udziały należą do jednego wspólnika",
                    "spółkę kapitałową o jednoosobowym zarządzie",
                    "spółkę zależną od spółki osobowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 4 § 1 pkt 3 KSH — spółka jednoosobowa to spółka kapitałowa, której wszystkie udziały (akcje) należą do jednego wspólnika (akcjonariusza)."
                },
                {
                  "pytanie": "Spółka powiązana to spółka kapitałowa, w której inna spółka handlowa albo spółdzielnia dysponuje:",
                  "odpowiedzi": [
                    "co najmniej 20% głosów na zgromadzeniu albo posiada bezpośrednio co najmniej 20% udziałów albo akcji",
                    "nie więcej niż 20% głosów albo udziałów/akcji",
                    "co najmniej 75% głosów albo udziałów/akcji",
                    "nie więcej niż 50% głosów albo udziałów/akcji"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 4 § 1 pkt 5 KSH — spółka powiązana to spółka, w której inna spółka/spółdzielnia dysponuje co najmniej 20% głosów albo posiada bezpośrednio co najmniej 20% udziałów albo akcji."
                }
              ]
            },
            {
              "nazwa": "Spółka cywilna",
              "pytania": [
                {
                  "pytanie": "Umowa spółki cywilnej powinna być zawarta w formie:",
                  "odpowiedzi": [
                    "pisemnej dla celów dowodowych",
                    "aktu notarialnego",
                    "pisemnej pod rygorem nieważności",
                    "ustnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 860 § 2 KC — umowa spółki cywilnej powinna być stwierdzona pismem (forma dla celów dowodowych, ad probationem)."
                },
                {
                  "pytanie": "Spółka cywilna:",
                  "odpowiedzi": [
                    "jest umową prawa cywilnego",
                    "jest osobową spółką handlową, jeżeli prowadzi działalność gospodarczą",
                    "jest odrębną od wspólników osobą prawną po wpisie do CEIDG",
                    "podlega wpisowi do KRS"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 860 KC — spółka cywilna to stosunek zobowiązaniowy (umowa) między wspólnikami; nie ma osobowości prawnej ani nie jest przedsiębiorcą."
                },
                {
                  "pytanie": "Które twierdzenie dotyczące wspólników spółki cywilnej jest NIEprawidłowe?",
                  "odpowiedzi": [
                    "wspólnikiem spółki cywilnej może być wyłącznie osoba fizyczna",
                    "wspólnikami mogą być osoby fizyczne i osoby prawne",
                    "wspólnikami mogą być jednostki organizacyjne mające zdolność prawną",
                    "wspólnikiem może być spółka kapitałowa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Wspólnikami spółki cywilnej (art. 860 KC) mogą być także osoby prawne i jednostki z zdolnością prawną, więc twierdzenie o „wyłącznie osobach fizycznych” jest błędne."
                },
                {
                  "pytanie": "Każdy wspólnik spółki cywilnej jest co do zasady uprawniony i zobowiązany do samodzielnego:",
                  "odpowiedzi": [
                    "prowadzenia spraw spółki w zakresie nieprzekraczającym zwykłych czynności spółki",
                    "prowadzenia wszystkich spraw, także przekraczających zwykły zarząd",
                    "zaciągania zobowiązań przekraczających zwykły zarząd",
                    "wyłączenia innego wspólnika od prowadzenia spraw"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 865 § 2 KC — każdy wspólnik może bez uprzedniej uchwały prowadzić sprawy nieprzekraczające zakresu zwykłych czynności spółki."
                },
                {
                  "pytanie": "Za zobowiązania spółki cywilnej wobec osób trzecich:",
                  "odpowiedzi": [
                    "odpowiadają wszyscy wspólnicy solidarnie",
                    "odpowiada sama spółka swoim majątkiem, a wspólnicy subsydiarnie",
                    "każdy wspólnik odpowiada proporcjonalnie do udziału w zyskach",
                    "odpowiada tylko wspólnik prowadzący sprawy spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 864 KC — za zobowiązania spółki cywilnej wspólnicy odpowiadają solidarnie (osobiście i całym majątkiem)."
                }
              ]
            },
            {
              "nazwa": "Spółka jawna",
              "pytania": [
                {
                  "pytanie": "Jeżeli umowa spółki jawnej nie stanowi inaczej, odwołać prokurę w spółce jawnej:",
                  "odpowiedzi": [
                    "mogą jedynie wszyscy wspólnicy działający łącznie",
                    "może osoba trzecia będąca wierzycielem spółki",
                    "może odwołać małżonek prokurenta",
                    "może każdy wspólnik mający prawo prowadzenia spraw spółki"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Art. 41 § 2 KSH — odwołać prokurę może każdy wspólnik mający prawo prowadzenia spraw spółki (ustanowienie prokury wymaga zgody wszystkich, ale odwołanie — jednego)."
                },
                {
                  "pytanie": "Umowa spółki jawnej może przewidywać:",
                  "odpowiedzi": [
                    "że wspólnik jest pozbawiony prawa reprezentowania spółki albo że jest uprawniony do jej reprezentowania tylko łącznie z innym wspólnikiem lub prokurentem",
                    "ograniczenie prawa wspólnika do osobistego zasięgania informacji o stanie majątku i interesów spółki",
                    "wyłączenie prawa wspólnika do żądania rozwiązania spółki przez sąd z ważnych powodów",
                    "ustanowienie zarządu spośród wspólników uprawnionych do reprezentowania spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 30 § 1 KSH — pozbawienie wspólnika prawa reprezentacji albo reprezentacja łączna może wynikać z umowy spółki. Prawa do informacji nie można ograniczyć (art. 38 § 2), nie można też wyłączyć żądania rozwiązania z ważnych powodów (art. 63 § 3), a spółka jawna nie ma zarządu."
                },
                {
                  "pytanie": "Osoba przystępująca do spółki jawnej:",
                  "odpowiedzi": [
                    "nie odpowiada za żadne zobowiązania spółki jawnej powstałe przed dniem jej przystąpienia",
                    "odpowiada za zobowiązania spółki jawnej powstałe przed dniem jej przystąpienia",
                    "nie odpowiada za zobowiązania powstałe przed przystąpieniem wynikające z czynności cywilnoprawnych",
                    "odpowiada za zobowiązania powstałe przed przystąpieniem tylko jeżeli wyrazi na to zgodę"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Art. 32 KSH — osoba przystępująca do spółki odpowiada za zobowiązania spółki powstałe przed dniem jej przystąpienia."
                },
                {
                  "pytanie": "Jeżeli spółkę jawną zawarto na czas nieoznaczony, a umowa nie stanowi inaczej, wspólnik może wypowiedzieć umowę spółki:",
                  "odpowiedzi": [
                    "na miesiąc przed końcem roku obrotowego",
                    "na trzy miesiące przed końcem roku obrotowego",
                    "na sześć miesięcy przed końcem roku obrotowego",
                    "bez zachowania terminu wypowiedzenia"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Art. 61 § 1 KSH — wspólnik może wypowiedzieć umowę spółki na sześć miesięcy przed końcem roku obrotowego."
                },
                {
                  "pytanie": "Dłużnik spółki jawnej:",
                  "odpowiedzi": [
                    "nie może przedstawić spółce do potrącenia wierzytelności, jaka mu służy wobec jednego ze wspólników",
                    "może przedstawić spółce do potrącenia wierzytelności, jaka mu służy wobec jednego ze wspólników",
                    "może przedstawić ją do potrącenia, ale tylko gdy sam jest wspólnikiem tej spółki",
                    "żadne z powyższych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 36 § 1 KSH — dłużnik spółki nie może przedstawić spółce do potrącenia wierzytelności, jaka mu służy wobec jednego ze wspólników."
                },
                {
                  "pytanie": "Każdy wspólnik spółki jawnej może z ważnych powodów żądać rozwiązania spółki przez sąd; przeciwne postanowienia umowy spółki są:",
                  "odpowiedzi": [
                    "bezskuteczne wobec tego wspólnika",
                    "nieważne",
                    "ważne",
                    "bezskuteczne wobec spółki"
                  ],
                  "poprawna": 1,
                  "wyjasnienie": "Art. 63 § 3 KSH — przeciwne postanowienia umowy (wyłączające żądanie rozwiązania z ważnych powodów) są nieważne."
                },
                {
                  "pytanie": "Powierzenie prowadzenia spraw spółki jawnej osobom trzecim, z wyłączeniem wspólników:",
                  "odpowiedzi": [
                    "jest dopuszczalne tylko wówczas, gdy umowa spółki tak stanowi",
                    "jest możliwe tylko w przypadku jednomyślnej uchwały wszystkich wspólników",
                    "nie jest dopuszczalne"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Art. 38 § 1 KSH — nie można powierzyć prowadzenia spraw spółki osobom trzecim z wyłączeniem wspólników."
                },
                {
                  "pytanie": "Wkładem wspólnika do spółki jawnej może być:",
                  "odpowiedzi": [
                    "przeniesienie lub obciążenie własności rzeczy lub innych praw, a także dokonanie innych świadczeń na rzecz spółki",
                    "wyłącznie przeniesienie lub obciążenie rzeczy lub innych praw",
                    "wyłącznie świadczenie pracy bądź usług na rzecz spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 48 § 2 KSH — wkład może polegać na przeniesieniu lub obciążeniu własności rzeczy lub innych praw, a także na dokonaniu innych świadczeń na rzecz spółki (w tym pracy/usług)."
                },
                {
                  "pytanie": "Jeżeli wspólnik spółki jawnej zobowiązał się wnieść tytułem wkładu rzeczy inne niż pieniądze na własność lub do używania, do jego obowiązku świadczenia i ryzyka przypadkowej utraty stosuje się odpowiednio przepisy o:",
                  "odpowiedzi": [
                    "przechowaniu",
                    "darowiźnie",
                    "pożyczce",
                    "sprzedaży lub o najmie"
                  ],
                  "poprawna": 3,
                  "wyjasnienie": "Art. 49 § 1 KSH — stosuje się odpowiednio przepisy o sprzedaży (gdy na własność) lub o najmie (gdy do używania)."
                },
                {
                  "pytanie": "Wspólnik spółki jawnej ma prawo żądać corocznej wypłaty odsetek w wysokości 5% od wniesionego wkładu (udziału kapitałowego):",
                  "odpowiedzi": [
                    "tylko jeśli spółka uzyskała w danym roku zysk",
                    "tylko jeśli spółka nie poniosła w danym roku strat",
                    "nawet jeśli spółka poniosła stratę"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Art. 53 KSH — wspólnik ma prawo żądać corocznie wypłacenia odsetek w wysokości 5% od swojego udziału kapitałowego, nawet gdy spółka poniosła stratę."
                },
                {
                  "pytanie": "Jeżeli z umowy spółki jawnej lub uchwały wspólników nie wynika inaczej, sprawy spółki:",
                  "odpowiedzi": [
                    "ma prawo i obowiązek prowadzić każdy wspólnik",
                    "prowadzi tylko wspólnik z prokurentem działający łącznie",
                    "prowadzą co najmniej dwie osoby trzecie, którym powierzono prowadzenie spraw"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 39 § 1 KSH — każdy wspólnik ma prawo i obowiązek prowadzenia spraw spółki."
                },
                {
                  "pytanie": "Majątek spółki jawnej stanowi:",
                  "odpowiedzi": [
                    "wszelkie mienie wniesione jako wkład lub nabyte przez spółkę w czasie jej istnienia",
                    "wyłącznie mienie wniesione jako wkład",
                    "wyłącznie suma wkładów wniesionych przy zawarciu umowy spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 28 KSH — majątek spółki stanowi wszelkie mienie wniesione jako wkład lub nabyte przez spółkę w czasie jej istnienia."
                },
                {
                  "pytanie": "Firma spółki jawnej powinna zawierać:",
                  "odpowiedzi": [
                    "nazwiska lub firmy (nazwy) wszystkich wspólników albo nazwisko albo firmę (nazwę) jednego albo kilku wspólników oraz dodatkowe oznaczenie „spółka jawna”",
                    "nazwiska lub firmy wszystkich wspólników",
                    "dowolną nazwę fantazyjną oraz obowiązkowo numer KRS"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 24 § 1 KSH — firma spółki jawnej zawiera nazwiska/firmy wspólników (lub jednego/kilku) oraz oznaczenie „spółka jawna”."
                },
                {
                  "pytanie": "Dopuszczalny skrót firmy spółki jawnej używany w obrocie to:",
                  "odpowiedzi": [
                    "„s.j.”",
                    "„sp. jaw.”",
                    "„sp. j.”",
                    "„s. jaw.”"
                  ],
                  "poprawna": 2,
                  "wyjasnienie": "Art. 24 § 1 KSH — dopuszczalne jest używanie w obrocie skrótu „sp. j.”."
                },
                {
                  "pytanie": "Za zobowiązania spółki jawnej zaciągnięte po jej zawiązaniu, a przed wpisem do rejestru, odpowiadają:",
                  "odpowiedzi": [
                    "solidarnie osoby, które działały w imieniu spółki",
                    "spółka jawna w organizacji jako odrębny podmiot prawa",
                    "wspólnicy według zasad dotyczących ich odpowiedzialności po powstaniu spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 25(1) § 2 KSH — osoby, które działały w imieniu spółki po jej zawiązaniu, a przed wpisem, odpowiadają solidarnie."
                },
                {
                  "pytanie": "Za prowadzenie spraw spółki jawnej wspólnik:",
                  "odpowiedzi": [
                    "nie otrzymuje wynagrodzenia, chyba że umowa spółki stanowi inaczej",
                    "otrzymuje wynagrodzenie, chyba że umowa spółki stanowi inaczej",
                    "otrzymuje wynagrodzenie, o ile jednocześnie reprezentuje spółkę"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 46 KSH — za prowadzenie spraw spółki wspólnik nie otrzymuje wynagrodzenia."
                },
                {
                  "pytanie": "Wspólnik spółki jawnej może żądać od wspólnika naruszającego zakaz konkurencji:",
                  "odpowiedzi": [
                    "wydania spółce korzyści, jakie osiągnął naruszając zakaz, lub naprawienia wyrządzonej szkody",
                    "wyłącznie zaniechania niedozwolonych działań",
                    "wyłączenia wydania spółce osiągniętych korzyści"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 57 § 1 KSH — spółka może żądać wydania korzyści osiągniętych z naruszenia zakazu konkurencji lub naprawienia szkody."
                },
                {
                  "pytanie": "Powierzenie prowadzenia spraw spółki komandytowej osobom trzecim, z wyłączeniem wspólników:",
                  "odpowiedzi": [
                    "nie jest dopuszczalne",
                    "jest dopuszczalne tylko gdy umowa spółki tak stanowi",
                    "jest możliwe tylko przez jednomyślną uchwałę wspólników",
                    "jest dopuszczalne bez ograniczeń"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 38 § 1 w zw. z art. 103 § 1 KSH — nie można powierzyć prowadzenia spraw spółki osobom trzecim z wyłączeniem wspólników."
                },
                {
                  "pytanie": "Spółka osobowa powstaje:",
                  "odpowiedzi": [
                    "z chwilą wpisu do rejestru przedsiębiorców KRS (wpis konstytutywny)",
                    "z chwilą zawarcia umowy spółki",
                    "z chwilą wniesienia wkładów przez wszystkich wspólników",
                    "z chwilą wpisu do CEIDG"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 25(1) § 1 KSH (i analogicznie pozostałe) — spółka osobowa powstaje z chwilą wpisu do rejestru; wpis ma charakter konstytutywny."
                },
                {
                  "pytanie": "Wpis spółki osobowej do rejestru przedsiębiorców KRS:",
                  "odpowiedzi": [
                    "ma zawsze charakter konstytutywny",
                    "ma zawsze charakter deklaratoryjny",
                    "charakter wpisu zależy od woli wspólników",
                    "jest fakultatywny"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 25(1) § 1 KSH — spółka osobowa powstaje dopiero z chwilą wpisu, więc wpis jest konstytutywny."
                },
                {
                  "pytanie": "Zasada jawności firmy oznacza:",
                  "odpowiedzi": [
                    "obowiązek ujawnienia firmy we właściwym rejestrze",
                    "obowiązek umieszczenia w firmie nazwisk wszystkich wspólników",
                    "zakaz umieszczania w firmie elementów wykraczających poza imię i nazwisko",
                    "obowiązek publikacji firmy w Monitorze"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 43(2) § 2 KC — firmę ujawnia się we właściwym rejestrze (zasada jawności firmy)."
                },
                {
                  "pytanie": "Jeżeli umowa spółki jawnej nie stanowi inaczej, udział w zysku:",
                  "odpowiedzi": [
                    "jest równy dla każdego wspólnika, bez względu na rodzaj i wartość wkładu",
                    "jest proporcjonalny do wartości wkładów",
                    "przysługuje tylko wspólnikom prowadzącym sprawy spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 51 § 1 KSH — każdy wspólnik ma prawo do równego udziału w zyskach, bez względu na rodzaj i wartość wkładu."
                },
                {
                  "pytanie": "Prawo reprezentowania spółki jawnej może zostać wspólnikowi odebrane:",
                  "odpowiedzi": [
                    "prawomocnym orzeczeniem sądu z ważnych powodów",
                    "uchwałą zwykłej większości wspólników",
                    "decyzją prokurenta spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 30 § 2 KSH — pozbawienie wspólnika prawa reprezentowania spółki może nastąpić tylko z ważnych powodów na mocy prawomocnego orzeczenia sądu."
                },
                {
                  "pytanie": "W sprawach nieprzekraczających zwykłych czynności spółki jawnej, gdy choćby jeden uprawniony wspólnik się sprzeciwi:",
                  "odpowiedzi": [
                    "wymagana jest uprzednia uchwała wspólników mających prawo prowadzenia spraw",
                    "decyduje wspólnik najstarszy wiekiem",
                    "sprzeciw jest bezskuteczny"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 40 § 1 KSH — jeżeli przed załatwieniem sprawy choćby jeden ze wspólników sprzeciwi się jej przeprowadzeniu, wymagana jest uprzednia uchwała wspólników."
                },
                {
                  "pytanie": "Odpowiedzialność wspólnika spółki jawnej za jej zobowiązania ma charakter subsydiarny, co oznacza, że:",
                  "odpowiedzi": [
                    "wierzyciel może prowadzić egzekucję z majątku wspólnika dopiero wtedy, gdy egzekucja z majątku spółki okaże się bezskuteczna",
                    "wierzyciel musi najpierw uzyskać odrębny tytuł egzekucyjny przeciwko wspólnikowi, zanim w ogóle pozwie spółkę",
                    "wspólnik odpowiada wyłącznie do wysokości wkładu wniesionego do spółki",
                    "wspólnik nie odpowiada za zobowiązania spółki tak długo, jak długo spółka istnieje"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 31 § 1 KSH — subsydiarność: wierzyciel może prowadzić egzekucję z majątku wspólnika, gdy egzekucja z majątku spółki okaże się bezskuteczna. Pułapka: art. 31 § 2 pozwala wnieść powództwo przeciw wspólnikowi jeszcze zanim egzekucja z majątku spółki okaże się bezskuteczna — subsydiarność dotyczy egzekucji, nie pozwu. Odpowiedzialność jest osobista i nieograniczona (nie „do wysokości wkładu\" — to komandytariusz)."
                },
                {
                  "pytanie": "Prawo reprezentowania spółki jawnej:",
                  "odpowiedzi": [
                    "przysługuje co do zasady każdemu wspólnikowi i dotyczy wszystkich czynności sądowych i pozasądowych spółki",
                    "można w umowie spółki skutecznie ograniczyć ze skutkiem wobec osób trzecich do czynności zwykłego zarządu",
                    "przysługuje wyłącznie wspólnikom wyraźnie wskazanym w umowie spółki",
                    "przysługuje każdemu wspólnikowi, ale wyłącznie w zakresie czynności nieprzekraczających zwykłego zarządu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 29 KSH — każdy wspólnik ma prawo reprezentować spółkę (§ 1); prawo to dotyczy wszystkich czynności sądowych i pozasądowych (§ 2) i nie można go ograniczyć ze skutkiem wobec osób trzecich (§ 3). Pułapka: ograniczenie działa tylko wewnętrznie; „zwykłego zarządu\" dotyczy prowadzenie spraw, a nie reprezentacja."
                }
              ]
            },
            {
              "nazwa": "Spółka partnerska",
              "pytania": [
                {
                  "pytanie": "Spółka partnerska powstaje z chwilą:",
                  "odpowiedzi": [
                    "wpisu do rejestru przedsiębiorców",
                    "zawarcia umowy spółki partnerskiej",
                    "złożenia wniosku do sądu rejestrowego",
                    "wpisu do CEIDG"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 94 KSH — spółka partnerska powstaje z chwilą wpisu do rejestru (wpis konstytutywny)."
                },
                {
                  "pytanie": "Wspólnikami (partnerami) spółki partnerskiej mogą być:",
                  "odpowiedzi": [
                    "wyłącznie osoby fizyczne uprawnione do wykonywania wolnego zawodu",
                    "osoby fizyczne, prawne i jednostki z zdolnością prawną",
                    "osoby fizyczne i spółki osobowe",
                    "osoby fizyczne i prawne wykonujące wolny zawód"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 87 § 1 KSH — partnerami mogą być wyłącznie osoby fizyczne uprawnione do wykonywania wolnych zawodów."
                },
                {
                  "pytanie": "Umowa spółki partnerskiej powinna być zawarta:",
                  "odpowiedzi": [
                    "na piśmie pod rygorem nieważności",
                    "w formie aktu notarialnego",
                    "w dowolnej formie wybranej przez partnerów",
                    "z podpisami notarialnie poświadczonymi"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 92 KSH — umowa spółki partnerskiej powinna być zawarta na piśmie pod rygorem nieważności."
                },
                {
                  "pytanie": "W przypadku utraty przez partnera uprawnień do wykonywania wolnego zawodu, powinien on wystąpić ze spółki najpóźniej:",
                  "odpowiedzi": [
                    "z końcem roku obrotowego, w którym utracił prawo wykonywania wolnego zawodu",
                    "na żądanie któregokolwiek z pozostałych partnerów",
                    "w terminie 3 miesięcy od dnia utraty uprawnień",
                    "z dniem zatwierdzenia sprawozdania finansowego za ten rok"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 100 § 1 KSH — partner powinien wystąpić ze spółki najpóźniej z końcem roku obrotowego, w którym utracił uprawnienia."
                },
                {
                  "pytanie": "Za zobowiązania spółki partnerskiej powstałe w związku z wykonywaniem przez pozostałych partnerów wolnego zawodu (gdy umowa nie stanowi inaczej) partner:",
                  "odpowiedzi": [
                    "nie ponosi odpowiedzialności",
                    "odpowiada solidarnie ze spółką i wszystkimi partnerami",
                    "odpowiada subsydiarnie do wysokości wkładu",
                    "odpowiada jak komandytariusz"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 95 § 1 KSH — partner nie odpowiada za zobowiązania spółki powstałe w związku z wykonywaniem wolnego zawodu przez pozostałych partnerów (ani za skutki ich błędów)."
                },
                {
                  "pytanie": "Za „zwykłe” zobowiązanie spółki partnerskiej (np. z tytułu ceny zakupionych materiałów budowlanych) odpowiada:",
                  "odpowiedzi": [
                    "spółka partnerska i wszyscy partnerzy solidarnie",
                    "jedynie spółka partnerska",
                    "tylko partner, który zawarł umowę",
                    "spółka solidarnie tylko z partnerem, który zawarł umowę"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Za zobowiązania niezwiązane z wykonywaniem wolnego zawodu partnerzy odpowiadają jak wspólnicy spółki jawnej — solidarnie ze spółką (art. 89 w zw. z art. 22 § 2 KSH); wyłączenie z art. 95 § 1 tu nie działa."
                },
                {
                  "pytanie": "Pozbawienie partnera prawa reprezentowania spółki partnerskiej może nastąpić tylko z ważnych powodów uchwałą powziętą większością:",
                  "odpowiedzi": [
                    "3/4 głosów w obecności co najmniej 2/3 ogólnej liczby partnerów",
                    "2/3 głosów w obecności co najmniej 3/4 ogólnej liczby partnerów",
                    "bezwzględną większością głosów wszystkich partnerów",
                    "jednomyślnie"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 96 § 2 KSH — pozbawienie partnera prawa reprezentowania wymaga uchwały większością 3/4 głosów w obecności co najmniej 2/3 ogólnej liczby partnerów."
                },
                {
                  "pytanie": "Wykonywanie wolnego zawodu przez partnera w spółce partnerskiej:",
                  "odpowiedzi": [
                    "może być uzależnione od spełnienia dodatkowych wymagań przewidzianych w odrębnej ustawie",
                    "zależy wyłącznie od wpisu spółki do KRS",
                    "nie może być uzależnione od żadnych dodatkowych wymagań",
                    "wymaga zgody zarządu spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 87 § 2 KSH — wykonywanie wolnego zawodu w spółce może być uzależnione od spełnienia dodatkowych wymagań przewidzianych w odrębnej ustawie."
                },
                {
                  "pytanie": "Partner spółki partnerskiej może ponosić odpowiedzialność za jej zobowiązania tak jak wspólnik spółki jawnej, gdy:",
                  "odpowiedzi": [
                    "umowa spółki partnerskiej tak stanowi",
                    "pozostali partnerzy tak postanowili w uchwale",
                    "zarząd spółki tak zadecydował",
                    "sąd rejestrowy tak orzeknie"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 95 § 2 KSH — umowa spółki może przewidywać, że jeden lub więcej partnerów godzą się na ponoszenie odpowiedzialności jak wspólnik spółki jawnej."
                },
                {
                  "pytanie": "Partnerami w spółce partnerskiej mogą być osoby uprawnione do wykonywania zawodu:",
                  "odpowiedzi": [
                    "aptekarza, doradcy podatkowego, tłumacza przysięgłego",
                    "nauczyciela, notariusza, lekarza dentysty",
                    "adwokata, biegłego rewidenta, policjanta",
                    "radcy prawnego, maklera giełd towarowych, lekarza dentysty"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 88 KSH — katalog wolnych zawodów obejmuje m.in. aptekarza, doradcę podatkowego i tłumacza przysięgłego; nauczyciel, policjant i „makler giełd towarowych” nie są w nim wymienieni."
                },
                {
                  "pytanie": "Spośród wskazanych — partnerem w spółce partnerskiej może być osoba uprawniona do wykonywania zawodu:",
                  "odpowiedzi": [
                    "inżyniera budownictwa",
                    "rzeczoznawcy samochodowego",
                    "doradcy restrukturyzacyjnego",
                    "pośrednika nieruchomości"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 88 KSH — inżynier budownictwa jest w katalogu wolnych zawodów; rzeczoznawca samochodowy i doradca restrukturyzacyjny nie są."
                },
                {
                  "pytanie": "Umowa spółki/statut może przewidywać organy w:",
                  "odpowiedzi": [
                    "spółce komandytowo-akcyjnej i spółce partnerskiej",
                    "spółce jawnej i spółce partnerskiej",
                    "spółce partnerskiej i spółce komandytowej",
                    "spółce jawnej i komandytowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Spółka partnerska może mieć zarząd (art. 97 KSH), a SKA — walne zgromadzenie i radę nadzorczą (art. 126, 140 KSH); pozostałe spółki osobowe organów nie mają."
                },
                {
                  "pytanie": "W przypadku powołania zarządu w spółce partnerskiej:",
                  "odpowiedzi": [
                    "członkami zarządu mogą być osoby trzecie, lecz co najmniej jeden partner musi być członkiem zarządu",
                    "członkami zarządu mogą być wyłącznie osoby trzecie",
                    "członkami zarządu muszą być wyłącznie partnerzy",
                    "zarządu w spółce partnerskiej powołać nie można"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 97 KSH — w spółce partnerskiej można powołać zarząd; przyjmuje się, że w jego składzie powinien być co najmniej jeden partner. (Warto zweryfikować z materiałami kursu / aktualnym brzmieniem.)"
                }
              ]
            },
            {
              "nazwa": "Spółka komandytowa",
              "pytania": [
                {
                  "pytanie": "Spółka komandytowa powstaje z chwilą:",
                  "odpowiedzi": [
                    "wpisu do rejestru przedsiębiorców",
                    "zawarcia umowy spółki przez wspólników",
                    "wniesienia wkładów przez wspólników",
                    "uzyskania osobowości prawnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 109 § 1 KSH — spółka komandytowa powstaje z chwilą wpisu do rejestru."
                },
                {
                  "pytanie": "Umowa spółki komandytowej powinna być zawarta:",
                  "odpowiedzi": [
                    "w formie aktu notarialnego",
                    "w zwykłej formie pisemnej dla celów dowodowych",
                    "z podpisami notarialnie poświadczonymi",
                    "w dowolnej formie"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 106 KSH — umowa spółki komandytowej powinna być zawarta w formie aktu notarialnego."
                },
                {
                  "pytanie": "Nazwisko (firma) komandytariusza zostało zamieszczone w firmie spółki komandytowej; w takim wypadku komandytariusz:",
                  "odpowiedzi": [
                    "odpowiada wobec osób trzecich tak jak komplementariusz",
                    "nie odpowiada wobec osób trzecich",
                    "przestaje być wspólnikiem spółki",
                    "odpowiada tylko do wysokości sumy komandytowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 104 § 4 KSH — komandytariusz, którego nazwisko/firmę zamieszczono w firmie spółki, odpowiada wobec osób trzecich tak jak komplementariusz (bez ograniczenia)."
                },
                {
                  "pytanie": "Osoby, które działały w imieniu spółki komandytowej po jej zawiązaniu, a przed wpisem do rejestru, za zobowiązania spółki:",
                  "odpowiedzi": [
                    "odpowiadają solidarnie",
                    "nie odpowiadają",
                    "odpowiadają solidarnie, tylko gdy umowa spółki tak stanowi",
                    "odpowiadają solidarnie z członkami zarządu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 109 § 2 KSH — osoby działające w imieniu spółki komandytowej przed wpisem odpowiadają solidarnie."
                },
                {
                  "pytanie": "Komplementariusz spółki komandytowej za zobowiązania spółki wobec wierzycieli odpowiada:",
                  "odpowiedzi": [
                    "bez ograniczenia",
                    "do wysokości sumy komandytowej",
                    "do wysokości wniesionego wkładu",
                    "komplementarnie z komandytariuszem"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 102 KSH — komplementariusz odpowiada za zobowiązania spółki bez ograniczenia."
                },
                {
                  "pytanie": "Suma komandytowa to:",
                  "odpowiedzi": [
                    "oznaczony kwotowo w umowie spółki zakres odpowiedzialności komandytariusza za zobowiązania spółki",
                    "kwotowy odpowiednik udziału kapitałowego komandytariusza",
                    "ustalony w umowie wkład komandytariusza do spółki",
                    "minimalny kapitał spółki komandytowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 102 KSH — suma komandytowa to oznaczona kwotowo granica odpowiedzialności komandytariusza wobec wierzycieli spółki."
                },
                {
                  "pytanie": "Komandytariusz:",
                  "odpowiedzi": [
                    "nie ma prawa ani obowiązku prowadzenia spraw spółki, chyba że umowa stanowi inaczej",
                    "ma prawo prowadzenia spraw w zakresie zwykłych czynności, ale nie ma obowiązku",
                    "ma takie samo prawo i obowiązek jak komplementariusz",
                    "prowadzi sprawy spółki tylko za zgodą sądu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 121 § 1 KSH — komandytariusz nie ma prawa ani obowiązku prowadzenia spraw spółki, chyba że umowa stanowi inaczej."
                },
                {
                  "pytanie": "W spółce komandytowej, w sprawach przekraczających zakres zwykłych czynności spółki:",
                  "odpowiedzi": [
                    "wymagana jest zgoda komandytariusza, chyba że umowa spółki stanowi inaczej",
                    "decydują wyłącznie komplementariusze",
                    "wymagana jest zgoda komandytariusza tylko gdy jego wkład równy jest sumie komandytowej",
                    "decyduje sąd rejestrowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 121 § 2 KSH — w sprawach przekraczających zwykły zarząd wymagana jest zgoda komandytariusza, chyba że umowa stanowi inaczej."
                },
                {
                  "pytanie": "Jeżeli umowa nie stanowi inaczej, wkład komandytariusza:",
                  "odpowiedzi": [
                    "może być wniesiony w wartości niższej niż suma komandytowa",
                    "zawsze musi być równy co najmniej sumie komandytowej",
                    "nie może być niższy niż połowa sumy komandytowej",
                    "musi być wyłącznie pieniężny"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 108 § 1 KSH — jeżeli umowa nie stanowi inaczej, wkład komandytariusza może być wniesiony w wartości niższej niż suma komandytowa."
                },
                {
                  "pytanie": "Jeżeli komplementariuszem jest spółka z o.o., a komandytariuszem wspólnik tej spółki z o.o., wkładu komandytariusza nie mogą stanowić:",
                  "odpowiedzi": [
                    "jego udziały w tej spółce z ograniczoną odpowiedzialnością",
                    "jego środki pieniężne uzyskane z zysku tej spółki",
                    "jego udziały w spółce zależnej od tej spółki",
                    "jego wierzytelności wobec tej spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 107 § 3 KSH — wkładu komandytariusza nie mogą stanowić jego udziały (akcje) w tej spółce kapitałowej będącej komplementariuszem."
                },
                {
                  "pytanie": "W sprawach nieuregulowanych w KSH do spółki komandytowej stosuje się odpowiednio przepisy:",
                  "odpowiedzi": [
                    "o spółce jawnej",
                    "o spółce partnerskiej",
                    "o spółce z ograniczoną odpowiedzialnością",
                    "o spółce komandytowo-akcyjnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 103 § 1 KSH — w sprawach nieuregulowanych stosuje się odpowiednio przepisy o spółce jawnej."
                },
                {
                  "pytanie": "Spółkę komandytową reprezentują:",
                  "odpowiedzi": [
                    "komplementariusze, których z mocy umowy spółki albo prawomocnego orzeczenia sądu nie pozbawiono prawa reprezentowania",
                    "wszyscy wspólnicy, w tym komandytariusze",
                    "komandytariusze w granicach sumy komandytowej",
                    "zarząd spółki komandytowej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 117 KSH — spółkę reprezentują komplementariusze nieпozbawieni prawa reprezentacji; komandytariusz może ją reprezentować jedynie jako pełnomocnik (art. 118)."
                },
                {
                  "pytanie": "Osoba przystępująca do spółki komandytowej w charakterze komandytariusza odpowiada:",
                  "odpowiedzi": [
                    "za zobowiązania spółki istniejące w chwili wpisania jej do rejestru",
                    "tylko za zobowiązania powstałe od dnia przystąpienia",
                    "wyłącznie za zobowiązania z czynności, w których reprezentowała spółkę",
                    "za zobowiązania powstałe po wniesieniu wkładu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 114 KSH — przystępujący komandytariusz odpowiada także za zobowiązania spółki istniejące w chwili wpisania go do rejestru."
                },
                {
                  "pytanie": "Prawo reprezentowania spółki komandytowej przez komplementariusza:",
                  "odpowiedzi": [
                    "może zostać wyłączone prawomocnym orzeczeniem sądu z ważnych powodów",
                    "jest całkowicie niewzruszalne",
                    "może odebrać komandytariusz"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 117 w zw. z art. 30 § 2 KSH — komplementariusza można pozbawić prawa reprezentowania spółki tylko z ważnych powodów na mocy prawomocnego orzeczenia sądu."
                },
                {
                  "pytanie": "Komandytariusz za zobowiązania spółki komandytowej wobec wierzycieli:",
                  "odpowiedzi": [
                    "odpowiada do wysokości sumy komandytowej, będąc jednocześnie wolnym od odpowiedzialności w granicach wartości wkładu wniesionego do spółki",
                    "odpowiada do wysokości sumy komandytowej niezależnie od tego, jaki wkład rzeczywiście wniósł",
                    "odpowiada całym swoim majątkiem bez ograniczeń, tak jak komplementariusz",
                    "nie odpowiada nigdy, ponieważ za zobowiązania spółki odpowiada wyłącznie komplementariusz"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 111 KSH — komandytariusz odpowiada do wysokości sumy komandytowej; art. 112 § 1 KSH — jest wolny od odpowiedzialności w granicach wartości wkładu wniesionego do spółki. Gdy wniósł wkład równy sumie komandytowej — osobista odpowiedzialność jest wyłączona. Pułapka: „niezależnie od wkładu\" pomija redukcję z art. 112."
                }
              ]
            },
            {
              "nazwa": "Spółka komandytowo-akcyjna (S.K.A.)",
              "pytania": [
                {
                  "pytanie": "Cechą charakterystyczną odróżniającą spółkę komandytowo-akcyjną od innych spółek osobowych jest:",
                  "odpowiedzi": [
                    "występowanie kapitału zakładowego",
                    "wymóg sporządzenia statutu w formie aktu notarialnego",
                    "posiadanie osobowości prawnej od chwili wpisu",
                    "brak komplementariuszy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 125–126 KSH — SKA jako jedyna spółka osobowa ma kapitał zakładowy (min. 50 000 zł) i akcjonariuszy."
                },
                {
                  "pytanie": "Kapitał zakładowy spółki komandytowo-akcyjnej powinien wynosić co najmniej:",
                  "odpowiedzi": [
                    "50 000 zł",
                    "5 000 zł",
                    "500 000 zł",
                    "100 000 zł"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 126 § 2 KSH — kapitał zakładowy SKA powinien wynosić co najmniej 50 000 zł."
                },
                {
                  "pytanie": "Nazwisko (firma) akcjonariusza w firmie spółki komandytowo-akcyjnej:",
                  "odpowiedzi": [
                    "w przypadku jego zamieszczenia rodzi odpowiedzialność akcjonariusza wobec osób trzecich tak jak komplementariusza",
                    "nie może być zamieszczane",
                    "w przypadku zamieszczenia nie wywołuje skutków prawnych",
                    "może być zamieszczane bez konsekwencji"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 127 § 4 KSH — akcjonariusz, którego nazwisko umieszczono w firmie spółki, odpowiada wobec osób trzecich tak jak komplementariusz."
                },
                {
                  "pytanie": "Spółkę komandytowo-akcyjną reprezentują:",
                  "odpowiedzi": [
                    "komplementariusze, których z mocy statutu lub prawomocnego orzeczenia sądu nie pozbawiono prawa reprezentowania",
                    "walne zgromadzenie",
                    "zarząd spółki",
                    "akcjonariusze"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 137 § 1 KSH — SKA reprezentują komplementariusze nieпozbawieni prawa reprezentacji."
                },
                {
                  "pytanie": "Jeżeli statut spółki komandytowo-akcyjnej dopuszcza przyjęcie nowego komplementariusza:",
                  "odpowiedzi": [
                    "może nim być zarówno dotychczasowy akcjonariusz, jak i osoba trzecia",
                    "może nim być wyłącznie dotychczasowy akcjonariusz",
                    "może nim być wyłącznie osoba trzecia",
                    "może nim być tylko obecny komplementariusz"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 136 § 1 KSH — nowym komplementariuszem może zostać dotychczasowy akcjonariusz albo osoba przystępująca do spółki (osoba trzecia)."
                },
                {
                  "pytanie": "Akcjonariusz w spółce komandytowo-akcyjnej za jej zobowiązania:",
                  "odpowiedzi": [
                    "w ogóle nie odpowiada",
                    "odpowiada do wysokości sumy komandytowej",
                    "odpowiada do wysokości wniesionego wkładu",
                    "odpowiada solidarnie z komplementariuszem"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 135 KSH — akcjonariusz nie odpowiada za zobowiązania spółki (ponosi jedynie ryzyko utraty wkładu)."
                },
                {
                  "pytanie": "Prawo wypowiedzenia statutu spółki komandytowo-akcyjnej przysługuje:",
                  "odpowiedzi": [
                    "wyłącznie komplementariuszom",
                    "wyłącznie akcjonariuszom",
                    "zarówno akcjonariuszom, jak i komplementariuszom",
                    "wyłącznie walnemu zgromadzeniu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 149 § 1 KSH — wypowiedzieć umowę (statut) spółki może komplementariusz; akcjonariuszowi prawo to nie przysługuje (§ 2)."
                },
                {
                  "pytanie": "W spółce komandytowo-akcyjnej reprezentacja i prowadzenie spraw powierzane są:",
                  "odpowiedzi": [
                    "komplementariuszom mającym prawo reprezentacji i prowadzenia spraw spółki",
                    "akcjonariuszom mającym prawo reprezentacji",
                    "zarządowi spółki",
                    "walnemu zgromadzeniu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 137 i 140 KSH — sprawy spółki prowadzą i reprezentują ją komplementariusze."
                }
              ]
            },
            {
              "nazwa": "Spółka z ograniczoną odpowiedzialnością",
              "pytania": [
                {
                  "pytanie": "Wartość nominalna udziału w spółce z ograniczoną odpowiedzialnością:",
                  "odpowiedzi": [
                    "nie może być niższa niż 50 złotych",
                    "nie może być niższa niż 100 złotych",
                    "powinna wynosić co najmniej 1 złoty",
                    "nie może być wyższa niż 50 złotych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 154 § 2 KSH — wartość nominalna udziału nie może być niższa niż 50 złotych."
                },
                {
                  "pytanie": "Spółka z ograniczoną odpowiedzialnością w organizacji powstaje z chwilą:",
                  "odpowiedzi": [
                    "zawarcia umowy spółki z ograniczoną odpowiedzialnością",
                    "zawarcia umowy spółki z ograniczoną odpowiedzialnością w organizacji",
                    "zgłoszenia spółki do rejestru przedsiębiorców",
                    "wpisu spółki do rejestru przedsiębiorców"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 161 § 1 KSH — z chwilą zawarcia umowy spółki z o.o. powstaje spółka z o.o. w organizacji."
                },
                {
                  "pytanie": "Wniosek o wpis spółki z o.o. o zarządzie wieloosobowym do rejestru przedsiębiorców:",
                  "odpowiedzi": [
                    "podpisują wszyscy członkowie zarządu",
                    "podpisuje co najmniej jeden członek zarządu",
                    "podpisują wszyscy wspólnicy",
                    "podpisują tylko członkowie zarządu uprawnieni do reprezentacji"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 164 § 1 KSH — wniosek o wpis spółki do rejestru podpisują wszyscy członkowie zarządu."
                },
                {
                  "pytanie": "W spółce z o.o. członek zarządu i pracownik spółki:",
                  "odpowiedzi": [
                    "nie mogą być pełnomocnikami na zgromadzeniu wspólników",
                    "mogą być pełnomocnikami na zgromadzeniu wspólników, chyba że umowa spółki stanowi inaczej",
                    "nie mogą być pełnomocnikami, chyba że umowa spółki stanowi inaczej",
                    "mogą być obecni podczas obrad z prawem głosu, jeżeli nie są wspólnikami"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 243 § 3 KSH — członek zarządu i pracownik spółki nie mogą być pełnomocnikami na zgromadzeniu wspólników (zakaz bezwzględny)."
                },
                {
                  "pytanie": "W spółce z ograniczoną odpowiedzialnością księgę udziałów:",
                  "odpowiedzi": [
                    "zarząd jest obowiązany prowadzić",
                    "prowadzi sąd rejestrowy",
                    "prowadzi podmiot zewnętrzny na podstawie umowy",
                    "nie trzeba prowadzić od 1 lutego 2023 r."
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 188 § 1 KSH — zarząd jest obowiązany prowadzić księgę udziałów."
                },
                {
                  "pytanie": "Uchwały wspólników spółki z o.o. wymaga rozporządzenie prawem lub zaciągnięcie zobowiązania do świadczenia o wartości:",
                  "odpowiedzi": [
                    "dwukrotnie przewyższającej wysokość kapitału zakładowego, chyba że umowa spółki stanowi inaczej",
                    "przewyższającej o połowę wysokość kapitału zakładowego",
                    "równej wysokości kapitału zakładowego",
                    "trzykrotnie przewyższającej wysokość kapitału zakładowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 230 KSH — rozporządzenie prawem lub zaciągnięcie zobowiązania do świadczenia o wartości dwukrotnie przewyższającej kapitał zakładowy wymaga uchwały wspólników, chyba że umowa stanowi inaczej."
                },
                {
                  "pytanie": "W okresie likwidacji spółki z ograniczoną odpowiedzialnością prokura:",
                  "odpowiedzi": [
                    "nie może być ustanowiona",
                    "może być ustanowiona tylko, jeżeli jest to niezbędne dla przeprowadzenia likwidacji",
                    "może być ustanowiona za zgodą sądu rejestrowego",
                    "może być ustanowiona za zgodą zgromadzenia wspólników"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 284 § 2 KSH — w okresie likwidacji nie może być ustanowiona prokura."
                },
                {
                  "pytanie": "Powództwo o uchylenie uchwały wspólników spółki z o.o. należy wnieść w terminie:",
                  "odpowiedzi": [
                    "miesiąca od dnia otrzymania wiadomości o uchwale, nie później jednak niż w terminie sześciu miesięcy od dnia powzięcia uchwały",
                    "miesiąca od otrzymania wiadomości, nie później niż dwunastu miesięcy od powzięcia uchwały",
                    "dwóch miesięcy od otrzymania wiadomości, nie później niż dwunastu miesięcy od powzięcia",
                    "sześciu miesięcy od dnia powzięcia uchwały"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 251 KSH — powództwo o uchylenie uchwały wnosi się w terminie miesiąca od otrzymania wiadomości o uchwale, nie później niż 6 miesięcy od dnia jej powzięcia."
                },
                {
                  "pytanie": "Przedmiotem wkładu do spółki z o.o. (także jednoosobowej) nie może być:",
                  "odpowiedzi": [
                    "prawo niezbywalne lub świadczenie pracy bądź usług",
                    "prawo własności przemysłowej",
                    "współwłasność nieruchomości",
                    "wierzytelność wspólnika"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 14 § 1 KSH — przedmiotem wkładu do spółki kapitałowej nie może być prawo niezbywalne lub świadczenie pracy bądź usług."
                },
                {
                  "pytanie": "Spółka z o.o. w organizacji (niebędąca jednoosobową) powstaje:",
                  "odpowiedzi": [
                    "z chwilą zawarcia umowy spółki z ograniczoną odpowiedzialnością",
                    "z chwilą wniesienia wkładów do spółki",
                    "z chwilą złożenia wniosku o wpis do rejestru",
                    "z chwilą wpisu do rejestru spółki w organizacji"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 161 § 1 KSH — spółka z o.o. w organizacji powstaje z chwilą zawarcia umowy spółki."
                },
                {
                  "pytanie": "Pełnomocnictwo do udziału w zgromadzeniu wspólników spółki z o.o. i wykonywania prawa głosu (jeżeli umowa nie stanowi inaczej) powinno być udzielone:",
                  "odpowiedzi": [
                    "na piśmie pod rygorem nieważności; dołącza się je do księgi protokołów",
                    "z podpisami notarialnie poświadczonymi",
                    "w formie aktu notarialnego",
                    "ustnie do protokołu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 243 § 2 KSH — pełnomocnictwo udziela się na piśmie pod rygorem nieważności i dołącza do księgi protokołów."
                },
                {
                  "pytanie": "Oświadczenie nowego wspólnika spółki z o.o. (nie zawartej przy wykorzystaniu wzorca) o przystąpieniu i objęciu udziałów:",
                  "odpowiedzi": [
                    "wymaga formy aktu notarialnego",
                    "wymaga formy pisemnej z podpisami notarialnie poświadczonymi",
                    "wymaga formy pisemnej z datą pewną",
                    "nie jest dopuszczalne"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 259 KSH — oświadczenie nowego wspólnika o przystąpieniu do spółki i objęciu udziałów wymaga formy aktu notarialnego."
                },
                {
                  "pytanie": "Jeżeli zarząd spółki z o.o. jest wieloosobowy, oświadczenia składane spółce oraz doręczenia pism mogą być dokonywane:",
                  "odpowiedzi": [
                    "wobec jednego członka zarządu lub prokurenta",
                    "zawsze wobec całego składu zarządu",
                    "wobec co najmniej dwóch członków zarządu łącznie",
                    "wyłącznie wobec prezesa zarządu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 205 § 2 KSH — oświadczenia składane spółce i doręczenia pism mogą być dokonywane wobec jednego członka zarządu lub prokurenta."
                },
                {
                  "pytanie": "Spółka z o.o. w organizacji z chwilą wpisu do rejestru przedsiębiorców:",
                  "odpowiedzi": [
                    "staje się spółką z ograniczoną odpowiedzialnością i uzyskuje osobowość prawną",
                    "pozostaje spółką w organizacji, ale uzyskuje osobowość prawną",
                    "przekształca się w spółkę akcyjną",
                    "dopiero wówczas może rozpocząć działalność gospodarczą"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 12 KSH — spółka z o.o. w organizacji z chwilą wpisu do rejestru staje się spółką z o.o. i uzyskuje osobowość prawną."
                },
                {
                  "pytanie": "Jeżeli umowa spółki z o.o. nie stanowi inaczej, do zarządu mogą być powołane:",
                  "odpowiedzi": [
                    "osoby spośród wspólników lub spoza ich grona",
                    "tylko osoby spośród wspólników",
                    "tylko osoby spoza grona wspólników",
                    "wyłącznie osoby wskazane przez radę nadzorczą"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 201 § 3 KSH — do zarządu mogą być powołane osoby spośród wspólników lub spoza ich grona."
                },
                {
                  "pytanie": "Wynagrodzenie likwidatorów spółki z o.o., których ustanowił sąd, określa:",
                  "odpowiedzi": [
                    "sąd, który ustanowił likwidatorów",
                    "uchwała wspólników",
                    "uchwała zarządu",
                    "umowa ze spółką w formie pisemnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 276 § 5 KSH — wysokość wynagrodzenia likwidatorów ustanowionych przez sąd określa sąd."
                },
                {
                  "pytanie": "Otwarcie likwidacji spółki z ograniczoną odpowiedzialnością:",
                  "odpowiedzi": [
                    "powoduje wygaśnięcie prokury wszystkich prokurentów",
                    "nie wpływa na udzieloną wcześniej prokurę",
                    "powoduje wygaśnięcie prokury, może ona jednak być ustanowiona ponownie",
                    "powoduje ograniczenie zdolności prokurenta do czynności prawnych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 284 § 1 KSH — otwarcie likwidacji powoduje wygaśnięcie prokury, a w okresie likwidacji nowej prokury ustanowić nie można (§ 2)."
                },
                {
                  "pytanie": "Jeżeli zarząd spółki z o.o. jest wieloosobowy, powołanie prokurenta wymaga zgody:",
                  "odpowiedzi": [
                    "wszystkich członków zarządu",
                    "większości członków zarządu",
                    "rady nadzorczej",
                    "wszystkich członków zarządu uprawnionych do reprezentacji"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 208 § 6 KSH — powołanie prokurenta wymaga zgody wszystkich członków zarządu."
                },
                {
                  "pytanie": "W spółce z o.o., gdy udział(y) objęte są wspólnością majątkową małżeńską, umowa spółki:",
                  "odpowiedzi": [
                    "może ograniczyć lub wyłączyć wstąpienie do spółki współmałżonka wspólnika",
                    "nie może ograniczyć ani wyłączyć wstąpienia współmałżonka",
                    "może to uczynić tylko za uprzednią zgodą współmałżonka",
                    "nie reguluje tej kwestii"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 183(1) KSH — umowa spółki może ograniczyć lub wyłączyć wstąpienie do spółki współmałżonka wspólnika, gdy udział objęty jest wspólnością majątkową."
                },
                {
                  "pytanie": "Spółka z o.o. w organizacji, wobec której zarząd dokonał likwidacji, ulega rozwiązaniu z dniem:",
                  "odpowiedzi": [
                    "zatwierdzenia przez zgromadzenie wspólników sprawozdania likwidacyjnego",
                    "ustanowienia likwidatora przez zgromadzenie wspólników",
                    "wykreślenia z rejestru przedsiębiorców",
                    "podjęcia uchwały o likwidacji"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 170 § 4 KSH — spółka w organizacji w likwidacji ulega rozwiązaniu z dniem zatwierdzenia sprawozdania likwidacyjnego (nie jest wpisana do rejestru, więc nie podlega „wykreśleniu”)."
                },
                {
                  "pytanie": "W spółce z o.o., jeżeli w wyniku rezygnacji członka zarządu żaden mandat nie byłby obsadzony, członek zarządu składa rezygnację:",
                  "odpowiedzi": [
                    "wspólnikom, zwołując jednocześnie zgromadzenie wspólników, chyba że umowa spółki stanowi inaczej",
                    "spółce, listem poleconym na jej adres",
                    "sądowi rejestrowemu",
                    "radzie nadzorczej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 202 § 6 KSH — w takim wypadku członek zarządu składa rezygnację wspólnikom, zwołując jednocześnie zgromadzenie wspólników."
                },
                {
                  "pytanie": "Jeżeli wspólnik spółki z o.o. może mieć więcej niż jeden udział, wszystkie udziały w kapitale zakładowym:",
                  "odpowiedzi": [
                    "powinny być równe i są niepodzielne",
                    "nie muszą być równe i są niepodzielne",
                    "powinny być równe i są podzielne",
                    "mogą być nierówne i są zbywalne"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 153 KSH — jeżeli wspólnik może mieć więcej niż jeden udział, wszystkie udziały powinny być równe i są niepodzielne."
                },
                {
                  "pytanie": "W spółce z o.o. udziały:",
                  "odpowiedzi": [
                    "nie mogą być obejmowane poniżej ich wartości nominalnej",
                    "mogą być obejmowane poniżej wartości nominalnej, gdy umowa tak stanowi",
                    "mogą być obejmowane poniżej wartości nominalnej",
                    "nie mogą być obejmowane powyżej wartości nominalnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 154 § 3 KSH — udziały nie mogą być obejmowane poniżej ich wartości nominalnej; nadwyżkę (agio) przelewa się na kapitał zapasowy."
                },
                {
                  "pytanie": "W jednoosobowej spółce z o.o. wszystkie uprawnienia przysługujące zgromadzeniu wspólników wykonuje:",
                  "odpowiedzi": [
                    "jedyny wspólnik",
                    "notariusz",
                    "pełnomocnik wspólnika",
                    "sąd rejestrowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 156 KSH — w spółce jednoosobowej jedyny wspólnik wykonuje wszystkie uprawnienia zgromadzenia wspólników."
                },
                {
                  "pytanie": "Umowa spółki z o.o. może nie określać:",
                  "odpowiedzi": [
                    "czasu trwania spółki, jeżeli jest nieoznaczony",
                    "wysokości kapitału zakładowego",
                    "siedziby spółki",
                    "czy wspólnik może mieć więcej niż jeden udział"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 157 § 1 pkt 6 KSH — umowa określa czas trwania spółki tylko, jeżeli jest oznaczony; pozostałe elementy (kapitał, siedziba, liczba udziałów) są obligatoryjne."
                },
                {
                  "pytanie": "W spółce z o.o. wspólnik wnoszący wkłady niepieniężne oraz członkowie zarządu, którzy wiedząc o tym zgłosili spółkę do rejestru, są obowiązani solidarnie wyrównać spółce brakującą wartość, jeżeli wartość wkładów niepieniężnych została znacznie zawyżona w stosunku do ich wartości:",
                  "odpowiedzi": [
                    "zbywczej w dniu zawarcia umowy spółki",
                    "nominalnej w dniu zawarcia umowy spółki",
                    "bilansowej na koniec pierwszego roku obrotowego",
                    "rynkowej w dniu wpisu do rejestru"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 175 § 1 KSH — obowiązek wyrównania powstaje, gdy wartość aportu znacznie zawyżono w stosunku do jego wartości zbywczej w dniu zawarcia umowy spółki."
                },
                {
                  "pytanie": "W spółce z o.o. wspólnicy za zobowiązania spółki:",
                  "odpowiedzi": [
                    "nie odpowiadają",
                    "odpowiadają do wysokości kapitału zakładowego",
                    "odpowiadają za zobowiązania podatkowe spółki",
                    "odpowiadają o wartości przekraczającej kapitał zakładowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 151 § 4 KSH — wspólnicy nie odpowiadają za zobowiązania spółki (ryzyko ograniczone do wniesionego wkładu)."
                },
                {
                  "pytanie": "W spółce z o.o. wspólnik:",
                  "odpowiedzi": [
                    "jest zobowiązany jedynie do świadczeń określonych w umowie spółki",
                    "jest zobowiązany do realizacji każdych świadczeń na żądanie spółki",
                    "odpowiada za zobowiązania spółki do wysokości kapitału zakładowego",
                    "jest zobowiązany do świadczeń określonych w umowie i innych zgłoszonych przez spółkę"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 151 § 3 KSH — wspólnik nie może być zobowiązany do innych świadczeń niż określone w umowie spółki."
                },
                {
                  "pytanie": "W spółce z o.o. wspólnicy mają równe prawa i obowiązki:",
                  "odpowiedzi": [
                    "chyba że ustawa lub umowa spółki stanowi inaczej",
                    "zawsze, bez wyjątków",
                    "chyba że wyłącznie umowa spółki stanowi inaczej",
                    "chyba że wyłącznie ustawa stanowi inaczej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 174 § 1 KSH — jeżeli ustawa lub umowa spółki nie stanowi inaczej, wspólnicy mają równe prawa i obowiązki."
                },
                {
                  "pytanie": "Spółka z ograniczoną odpowiedzialnością może być utworzona przez:",
                  "odpowiedzi": [
                    "jedną albo więcej osób",
                    "co najmniej jedną osobę fizyczną i prawną",
                    "jedną osobę fizyczną lub prawną",
                    "wyłącznie więcej niż jedną osobę"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 151 § 1 KSH — spółka z o.o. może być utworzona przez jedną albo więcej osób (nie może jej jednak zawiązać sama inna jednoosobowa spółka z o.o. — § 2)."
                },
                {
                  "pytanie": "Informacje na stronach internetowych spółki z o.o. nie muszą zawierać:",
                  "odpowiedzi": [
                    "statystycznego numeru identyfikacyjnego REGON",
                    "numeru identyfikacji podatkowej NIP",
                    "numeru wpisu do rejestru przedsiębiorców (KRS)",
                    "oznaczenia sądu rejestrowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 206 § 1 KSH — wymagane są m.in. firma, siedziba, sąd rejestrowy i nr KRS, NIP oraz kapitał zakładowy; REGON nie jest w tym katalogu."
                },
                {
                  "pytanie": "W przypadku gdy wspólnik spółki z o.o. wniósł wkład niepieniężny obciążony wadą (mający wady), jest zobowiązany:",
                  "odpowiedzi": [
                    "do wyrównania spółce różnicy między wartością przyjętą w umowie spółki a zbywczą wartością wkładu; umowa spółki może przewidywać, że spółce przysługują wówczas także inne uprawnienia",
                    "do wniesienia do spółki nowego, pozbawionego wad wkładu; umowa może przewidywać wyrównanie różnicy między wartością przyjętą a zbywczą",
                    "do wyrównania różnicy między wartością przyjętą a rzeczywistą wartością wkładu; umowa nie może przewidywać innych uprawnień",
                    "wyłącznie z tytułu rękojmi za wady"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 14 § 2 KSH — przy aporcie z wadami wspólnik wyrównuje spółce różnicę między wartością przyjętą w umowie a zbywczą wartością wkładu; umowa może przewidywać także inne uprawnienia spółki."
                },
                {
                  "pytanie": "Rozwiązanie spółki z ograniczoną odpowiedzialnością następuje:",
                  "odpowiedzi": [
                    "po przeprowadzeniu likwidacji, z chwilą wykreślenia spółki z rejestru",
                    "po przeprowadzeniu likwidacji, z chwilą wydania postanowienia o wykreśleniu spółki z rejestru",
                    "po przeprowadzeniu likwidacji, z chwilą określoną w postanowieniu o wykreśleniu spółki z rejestru",
                    "z chwilą podjęcia uchwały o rozwiązaniu spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 272 KSH — rozwiązanie spółki następuje po przeprowadzeniu likwidacji, z chwilą wykreślenia spółki z rejestru."
                },
                {
                  "pytanie": "Spółka z ograniczoną odpowiedzialnością NIE może być utworzona przez:",
                  "odpowiedzi": [
                    "wyłącznie inną jednoosobową spółkę z ograniczoną odpowiedzialnością",
                    "jednoosobową spółkę z o.o. i osoby fizyczne",
                    "wyłącznie osoby fizyczne",
                    "jednoosobową spółkę z o.o. i jednoosobową spółkę akcyjną"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 151 § 2 KSH — spółka z o.o. nie może być zawiązana wyłącznie przez inną jednoosobową spółkę z o.o. (z udziałem innych podmiotów jest to dopuszczalne)."
                },
                {
                  "pytanie": "Powództwo o uchylenie uchwały zgromadzenia wspólników spółki z o.o. wytacza się, gdy uchwała jest:",
                  "odpowiedzi": [
                    "sprzeczna z umową spółki bądź dobrymi obyczajami i godząca w interesy spółki lub mająca na celu pokrzywdzenie wspólnika",
                    "sprzeczna z ustawą lub umową spółki bądź dobrymi obyczajami i godząca w interesy spółki lub mająca na celu pokrzywdzenie wspólnika",
                    "sprzeczna z ustawą bądź dobrymi obyczajami i godząca w interesy spółki lub mająca na celu pokrzywdzenie wspólnika",
                    "sprzeczna z umową spółki oraz dobrymi obyczajami i godząca w interesy spółki oraz mająca na celu pokrzywdzenie wspólnika"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 249 § 1 KSH — powództwo o uchylenie dotyczy uchwały sprzecznej z umową spółki bądź dobrymi obyczajami i godzącej w interesy spółki lub mającej na celu pokrzywdzenie wspólnika. Sprzeczność z ustawą daje powództwo o stwierdzenie nieważności (art. 252)."
                },
                {
                  "pytanie": "Spółka z ograniczoną odpowiedzialnością może być utworzona przez jedną albo więcej osób:",
                  "odpowiedzi": [
                    "w każdym celu prawnie dopuszczalnym, chyba że ustawa stanowi inaczej",
                    "tylko w celu gospodarczym",
                    "tylko w celu prowadzenia działalności gospodarczej",
                    "wyłącznie w celu prowadzenia przedsiębiorstwa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 151 § 1 KSH — spółka z o.o. może być utworzona w każdym celu prawnie dopuszczalnym, chyba że ustawa stanowi inaczej (cel niekoniecznie gospodarczy)."
                },
                {
                  "pytanie": "Komisja rewizyjna (albo rada nadzorcza) powinna być ustanowiona w spółce z o.o., w której:",
                  "odpowiedzi": [
                    "kapitał zakładowy przewyższa 500 000 zł, a wspólników jest więcej niż dwudziestu pięciu",
                    "kapitał zakładowy przewyższa 250 000 zł, a wspólników jest więcej niż dziesięciu",
                    "kapitał zakładowy przewyższa 50 000 zł, a wspólników jest więcej niż dwudziestu pięciu",
                    "kapitał zakładowy przewyższa 1 000 000 zł, a wspólników jest więcej niż pięćdziesięciu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 213 § 2 KSH — gdy kapitał zakładowy przewyższa 500 000 zł, a wspólników jest więcej niż 25, powinna być ustanowiona rada nadzorcza lub komisja rewizyjna."
                },
                {
                  "pytanie": "Uchwała o istotnej zmianie przedmiotu działalności spółki z o.o. zapada większością:",
                  "odpowiedzi": [
                    "3/4 głosów",
                    "2/3 głosów",
                    "bezwzględną"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 246 § 1 KSH — uchwała dotycząca istotnej zmiany przedmiotu działalności spółki wymaga większości 3/4 głosów."
                },
                {
                  "pytanie": "Zmiana umowy spółki z o.o. (co do zasady) wymaga większości:",
                  "odpowiedzi": [
                    "2/3 głosów",
                    "bezwzględnej",
                    "3/4 głosów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 246 § 1 KSH — uchwały dotyczące zmiany umowy spółki zapadają większością 2/3 głosów (o ile umowa nie ustanawia surowszych warunków)."
                },
                {
                  "pytanie": "Członkowie rady nadzorczej spółki z o.o. mogą być odwołani:",
                  "odpowiedzi": [
                    "w każdym czasie uchwałą wspólników",
                    "tylko z ważnych powodów przez sąd",
                    "wyłącznie z końcem kadencji"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 215 § 1 KSH — członkowie rady nadzorczej są powoływani i odwoływani uchwałą wspólników (co do zasady w każdym czasie)."
                },
                {
                  "pytanie": "Członkiem rady nadzorczej spółki z o.o. NIE może być:",
                  "odpowiedzi": [
                    "prokurent spółki",
                    "wspólnik niebędący członkiem zarządu",
                    "osoba spoza grona wspólników"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 214 § 1 KSH — członkiem rady nadzorczej nie może być m.in. członek zarządu, prokurent, likwidator, kierownik oddziału lub zakładu czy zatrudniony główny księgowy."
                },
                {
                  "pytanie": "Członkiem zarządu spółki z o.o. może być:",
                  "odpowiedzi": [
                    "osoba fizyczna mająca pełną zdolność do czynności prawnych",
                    "wyłącznie wspólnik spółki",
                    "także osoba prawna"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 18 § 1 KSH — członkiem zarządu może być tylko osoba fizyczna mająca pełną zdolność do czynności prawnych."
                },
                {
                  "pytanie": "Zarząd spółki z o.o. powołany przez radę nadzorczą:",
                  "odpowiedzi": [
                    "może być odwołany także uchwałą zgromadzenia wspólników",
                    "może być odwołany wyłącznie przez radę nadzorczą",
                    "jest nieodwołalny w trakcie kadencji"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 203 § 1 KSH — członek zarządu może być w każdym czasie odwołany uchwałą wspólników, niezależnie od tego, kto go powołał (umowa może to ograniczyć do ważnych powodów)."
                },
                {
                  "pytanie": "Uprzywilejowanie udziału w spółce z o.o. co do głosu:",
                  "odpowiedzi": [
                    "jest dopuszczalne — nie więcej niż 3 głosy na jeden udział",
                    "jest niedopuszczalne",
                    "może wynosić maksymalnie 5 głosów na udział"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 174 § 4 KSH — uprzywilejowanie co do głosu nie może przyznawać więcej niż 3 głosy na jeden udział."
                },
                {
                  "pytanie": "Dopłaty w spółce z ograniczoną odpowiedzialnością:",
                  "odpowiedzi": [
                    "są nakładane równomiernie w stosunku do udziałów, w granicach liczbowo oznaczonej wysokości",
                    "mogą obciążać tylko wybranych wspólników",
                    "są zwrotne wyłącznie w naturze"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 177 § 1 KSH — dopłaty mogą być nakładane w granicach liczbowo oznaczonej wysokości w stosunku do udziału, równomiernie wobec wszystkich wspólników."
                },
                {
                  "pytanie": "Nałożenie dopłat w spółce z o.o.:",
                  "odpowiedzi": [
                    "wymaga uchwały wspólników (i przewidzenia dopłat w umowie spółki)",
                    "następuje decyzją zarządu",
                    "jest automatyczne po wpisie spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 178 § 1 KSH — wysokość i terminy dopłat oznaczane są uchwałą wspólników (dopłaty muszą wynikać z umowy spółki)."
                },
                {
                  "pytanie": "Kwota dywidendy w spółce z o.o.:",
                  "odpowiedzi": [
                    "nie może przekraczać zysku za ostatni rok obrotowy powiększonego o niepodzielone zyski i kwoty z kapitałów rezerwowych",
                    "jest dowolna",
                    "zawsze równa się wysokości kapitału zakładowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 192 KSH — kwota przeznaczona do podziału nie może przekraczać zysku za ostatni rok obrotowy, powiększonego o niepodzielone zyski i kwoty z kapitałów rezerwowych (pomniejszonego o straty i kwoty obowiązkowe)."
                },
                {
                  "pytanie": "Umorzenie udziału w spółce z o.o.:",
                  "odpowiedzi": [
                    "może być dobrowolne albo przymusowe, jeżeli umowa spółki tak stanowi",
                    "jest zawsze zakazane",
                    "nie wymaga podstawy w umowie spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 199 § 1 KSH — udział może być umorzony za zgodą wspólnika (dobrowolne) albo bez zgody (przymusowe), o ile umowa spółki tak przewiduje."
                },
                {
                  "pytanie": "Wynagrodzenie za udział umorzony przymusowo:",
                  "odpowiedzi": [
                    "nie może być niższe od wartości przypadających na udział aktywów netto",
                    "ustala dowolnie zarząd",
                    "zawsze równa się wartości nominalnej udziału"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 199 § 2 KSH — przy umorzeniu przymusowym wynagrodzenie nie może być niższe od wartości przypadających na udział aktywów netto wykazanych w sprawozdaniu finansowym."
                },
                {
                  "pytanie": "Uchwały rady nadzorczej spółki z o.o. w trybie pisemnym lub na odległość:",
                  "odpowiedzi": [
                    "są dopuszczalne, jeżeli umowa spółki tak przewiduje",
                    "są zawsze zakazane",
                    "wymagają zgody sądu rejestrowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 222 § 4 KSH — rada nadzorcza może podejmować uchwały w trybie pisemnym lub przy wykorzystaniu środków bezpośredniego porozumiewania się na odległość, jeżeli umowa spółki tak stanowi."
                },
                {
                  "pytanie": "Zgromadzenie wspólników spółki z o.o. zwołuje się:",
                  "odpowiedzi": [
                    "z podaniem porządku obrad",
                    "bez wskazywania porządku obrad",
                    "wyłącznie przez sąd rejestrowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 238 § 2 KSH — w zaproszeniu (zwołaniu) oznacza się dzień, godzinę, miejsce oraz szczegółowy porządek obrad."
                },
                {
                  "pytanie": "Uchwały zgromadzenia wspólników spółki z o.o. zapadają:",
                  "odpowiedzi": [
                    "bezwzględną większością głosów, chyba że ustawa lub umowa stanowi inaczej",
                    "zawsze jednomyślnie",
                    "większością 3/4 głosów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 245 KSH — uchwały zapadają bezwzględną większością głosów, jeżeli przepisy ustawy lub umowa spółki nie stanowią inaczej."
                },
                {
                  "pytanie": "Uchwały wspólników spółki z o.o.:",
                  "odpowiedzi": [
                    "wpisuje się do księgi protokołów, którą należy prowadzić",
                    "nie są nigdzie ewidencjonowane",
                    "wpisuje sąd rejestrowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 248 § 1 KSH — uchwały wspólników wpisuje się do księgi protokołów."
                },
                {
                  "pytanie": "Podwyższenie kapitału zakładowego spółki z o.o. następuje:",
                  "odpowiedzi": [
                    "z chwilą wpisu do rejestru (wpis konstytutywny)",
                    "z chwilą podjęcia uchwały",
                    "z chwilą wniesienia wkładów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 262 § 4 KSH — podwyższenie kapitału zakładowego następuje z chwilą wpisania do rejestru."
                },
                {
                  "pytanie": "Obniżenie kapitału zakładowego spółki z o.o.:",
                  "odpowiedzi": [
                    "wymaga przeprowadzenia postępowania konwokacyjnego (wezwania wierzycieli)",
                    "nie wymaga żadnych ogłoszeń",
                    "jest niedopuszczalne"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 264 § 1 KSH — o uchwalonym obniżeniu kapitału zarząd ogłasza, wzywając wierzycieli do zgłoszenia sprzeciwu (postępowanie konwokacyjne)."
                },
                {
                  "pytanie": "Zakaz konkurencji członka zarządu spółki z o.o. obejmuje udział w konkurencyjnej spółce kapitałowej:",
                  "odpowiedzi": [
                    "gdy posiada w niej co najmniej 10% udziałów albo akcji (lub prawo powołania członka zarządu)",
                    "niezależnie od wielkości udziału",
                    "tylko gdy posiada ponad 50% udziałów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 211 § 2 KSH — zakaz obejmuje m.in. udział w konkurencyjnej spółce kapitałowej w razie posiadania co najmniej 10% udziałów albo akcji bądź prawa powołania co najmniej jednego członka zarządu."
                },
                {
                  "pytanie": "Przy zawiązaniu spółki z o.o. przy wykorzystaniu wzorca umowy (tryb S24):",
                  "odpowiedzi": [
                    "na pokrycie kapitału można wnieść wyłącznie wkłady pieniężne",
                    "można wnieść aporty bez ograniczeń",
                    "nie trzeba pokrywać kapitału zakładowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 158 § 1¹ KSH — w spółce zawiązanej przy wykorzystaniu wzorca umowy na pokrycie kapitału zakładowego wnosi się wyłącznie wkłady pieniężne."
                },
                {
                  "pytanie": "Oświadczenie o wniesieniu wkładów na pokrycie kapitału zakładowego spółki z o.o.:",
                  "odpowiedzi": [
                    "podpisują wszyscy członkowie zarządu",
                    "podpisuje jeden członek zarządu",
                    "podpisuje prokurent"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 167 § 1 KSH — do zgłoszenia dołącza się oświadczenie wszystkich członków zarządu, że wkłady zostały w całości wniesione."
                },
                {
                  "pytanie": "Uchwały wspólników spółki z ograniczoną odpowiedzialnością wymaga — chyba że umowa spółki stanowi inaczej:",
                  "odpowiedzi": [
                    "nabycie i zbycie nieruchomości, użytkowania wieczystego lub udziału w nieruchomości",
                    "nabycie lub zbycie każdego składnika majątku o wartości przekraczającej dwukrotność kapitału zakładowego",
                    "ustanowienie prokury oraz powołanie pełnomocnika do zawarcia pojedynczej umowy",
                    "każda czynność zarządu przekraczająca zakres zwykłego zarządu przedsiębiorstwem spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 228 pkt 4 KSH — nabycie i zbycie nieruchomości, użytkowania wieczystego lub udziału w nieruchomości wymaga uchwały wspólników (chyba że umowa stanowi inaczej). Pułapka: powołanie prokurenta wymaga zgody wszystkich członków zarządu (art. 208 § 6), a nie uchwały wspólników; art. 230 (świadczenie > 2× kapitału) dotyczy zobowiązań do świadczeń, nie „każdego składnika majątku\"."
                },
                {
                  "pytanie": "Jeżeli zawiązania spółki z ograniczoną odpowiedzialnością nie zgłoszono do sądu rejestrowego w terminie sześciu miesięcy od dnia zawarcia umowy spółki:",
                  "odpowiedzi": [
                    "umowa spółki ulega rozwiązaniu",
                    "spółka mimo braku wpisu powstaje z mocy prawa jako spółka z o.o.",
                    "termin do zgłoszenia ulega automatycznemu przedłużeniu o kolejne sześć miesięcy",
                    "umowa pozostaje w mocy, a jedynie członkowie zarządu ponoszą grzywnę nakładaną przez sąd rejestrowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 169 § 1 KSH — jeżeli zawiązania spółki nie zgłoszono do sądu rejestrowego w terminie 6 miesięcy od zawarcia umowy albo postanowienie odmawiające rejestracji stało się prawomocne, umowa spółki ulega rozwiązaniu. Bez wpisu spółka nie powstaje (osobowość prawną daje dopiero wpis — art. 12)."
                },
                {
                  "pytanie": "Rada nadzorcza spółki z ograniczoną odpowiedzialnością w ramach sprawowanego nadzoru:",
                  "odpowiedzi": [
                    "może badać wszystkie dokumenty spółki, żądać od zarządu i pracowników sprawozdań i wyjaśnień oraz dokonywać rewizji stanu majątku spółki",
                    "może wydawać zarządowi wiążące polecenia dotyczące prowadzenia spraw spółki",
                    "reprezentuje spółkę w umowach i sporach z osobami trzecimi",
                    "może samodzielnie zbywać składniki majątku spółki w celu weryfikacji ich wartości"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 219 § 4 KSH — RN może badać wszystkie dokumenty spółki, żądać sprawozdań i wyjaśnień oraz dokonywać rewizji stanu majątku spółki. Pułapka: art. 219 § 2 zakazuje RN wydawania zarządowi wiążących poleceń co do prowadzenia spraw; reprezentacja należy do zarządu (art. 201)."
                },
                {
                  "pytanie": "Spółka z ograniczoną odpowiedzialnością w organizacji:",
                  "odpowiedzi": [
                    "jest jednostką organizacyjną nieposiadającą osobowości prawnej, której ustawa przyznaje zdolność prawną (tzw. ułomna osoba prawna) — może we własnym imieniu nabywać prawa i zaciągać zobowiązania",
                    "posiada pełną osobowość prawną już od chwili zawarcia umowy spółki",
                    "nie może we własnym imieniu nabywać praw ani zaciągać zobowiązań aż do wpisu do KRS",
                    "jest do chwili rejestracji traktowana jak spółka cywilna zawiązana między wspólnikami"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 11 § 1 KSH — spółki kapitałowe w organizacji mogą we własnym imieniu nabywać prawa, zaciągać zobowiązania, pozywać i być pozywane (ułomna osoba prawna, art. 33¹ KC). Osobowość prawną spółka z o.o. uzyskuje z chwilą wpisu do KRS (art. 12)."
                },
                {
                  "pytanie": "Zbycie przez spółkę z ograniczoną odpowiedzialnością jej przedsiębiorstwa albo jego zorganizowanej części:",
                  "odpowiedzi": [
                    "wymaga uchwały wspólników, która — o ile umowa spółki nie stanowi inaczej — zapada bezwzględną większością głosów",
                    "wymaga uchwały wspólników podjętej większością 3/4 głosów, tak jak zmiana umowy spółki",
                    "należy do wyłącznej kompetencji zarządu i nie wymaga żadnej uchwały wspólników",
                    "wymaga zgody wszystkich wspólników wyrażonej jednomyślnie"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 228 pkt 3 KSH — zbycie i wydzierżawienie przedsiębiorstwa lub jego zorganizowanej części wymaga uchwały wspólników; zapada ona bezwzględną większością głosów (art. 245), chyba że umowa stanowi inaczej. Pułapka: większość 3/4 dotyczy zmiany umowy spółki (art. 246 § 1), a nie tej czynności."
                },
                {
                  "pytanie": "Powołanie członków zarządu spółki z ograniczoną odpowiedzialnością:",
                  "odpowiedzi": [
                    "następuje uchwałą wspólników, chyba że umowa spółki stanowi inaczej",
                    "musi zostać dokonane bezpośrednio w umowie spółki, w przeciwnym razie jest bezskuteczne",
                    "w każdej spółce z o.o. należy do wyłącznej kompetencji rady nadzorczej",
                    "wywołuje skutek dopiero z chwilą konstytutywnego wpisu członka zarządu do KRS"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 201 § 4 KSH — członek zarządu jest powoływany i odwoływany uchwałą wspólników, chyba że umowa spółki stanowi inaczej. Pułapka: nie musi to następować w umowie spółki; wpis zarządu do KRS ma charakter deklaratoryjny, nie konstytutywny."
                },
                {
                  "pytanie": "Obowiązek złożenia do akt rejestrowych KRS wzorów podpisów członków zarządu spółki z o.o.:",
                  "odpowiedzi": [
                    "został zniesiony — obowiązujące przepisy nie wymagają już składania wzorów podpisów członków zarządu",
                    "istnieje nadal, a wzory podpisów muszą być poświadczone notarialnie",
                    "dotyczy wyłącznie spółek zawiązywanych przy wykorzystaniu wzorca umowy (tryb S24)",
                    "ciąży na radzie nadzorczej, a nie na członkach zarządu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Obowiązek składania wzorów podpisów członków zarządu został zniesiony (uchylony z dniem 15 marca 2018 r. wraz z elektronizacją postępowania rejestrowego). Dane członków zarządu ujawnia się w KRS bez wzorów podpisów. Uwaga: starsze bazy pytań wciąż podają nieaktualne „notarialne poświadczenie\" — jest ono błędne."
                },
                {
                  "pytanie": "Podjęcie przez radę nadzorczą spółki z ograniczoną odpowiedzialnością uchwały:",
                  "odpowiedzi": [
                    "może nastąpić w trybie pisemnym lub przy wykorzystaniu środków bezpośredniego porozumiewania się na odległość, jeżeli umowa spółki tak stanowi",
                    "zawsze wymaga zwołania i odbycia posiedzenia rady nadzorczej",
                    "w trybie na odległość jest dopuszczalne wyłącznie w sprawach nieprzekraczających zwykłego zarządu",
                    "w trybie pisemnym wymaga każdorazowo uprzedniej zgody wszystkich członków zarządu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 222 § 4 KSH — uchwały RN można podejmować w trybie pisemnym lub przy wykorzystaniu środków bezpośredniego porozumiewania się na odległość, jeżeli umowa spółki tak stanowi. Pułapka: to nie jest „zawsze posiedzenie\". Wyłączenia z art. 222 § 5 dotyczą m.in. wyboru przewodniczącego oraz powołania/odwołania/zawieszenia członków zarządu."
                }
              ]
            },
            {
              "nazwa": "Prosta spółka akcyjna (PSA)",
              "pytania": [
                {
                  "pytanie": "Akcje prostej spółki akcyjnej:",
                  "odpowiedzi": [
                    "nie mają wartości nominalnej (są beznominałowe)",
                    "mają wartość nominalną nie niższą niż 1 grosz",
                    "nie mogą być uprzywilejowane"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 300² § 1 KSH — akcje prostej spółki akcyjnej nie mają wartości nominalnej i nie stanowią części kapitału akcyjnego."
                },
                {
                  "pytanie": "Minimalny kapitał akcyjny prostej spółki akcyjnej wynosi:",
                  "odpowiedzi": [
                    "1 zł",
                    "5 000 zł",
                    "100 000 zł"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 300³ § 1 KSH — kapitał akcyjny prostej spółki akcyjnej powinien wynosić co najmniej 1 zł."
                }
              ]
            },
            {
              "nazwa": "Spółka akcyjna",
              "pytania": [
                {
                  "pytanie": "Minimalny kapitał zakładowy spółki akcyjnej wynosi:",
                  "odpowiedzi": [
                    "100 000 zł",
                    "50 000 zł",
                    "5 000 zł"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 308 § 1 KSH — kapitał zakładowy spółki akcyjnej powinien wynosić co najmniej 100 000 zł."
                },
                {
                  "pytanie": "Rada nadzorcza w niepublicznej spółce akcyjnej składa się:",
                  "odpowiedzi": [
                    "co najmniej z trzech członków",
                    "co najmniej z pięciu członków",
                    "z jednego członka"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 385 § 1 KSH — rada nadzorcza składa się co najmniej z trzech, a w spółkach publicznych co najmniej z pięciu członków."
                },
                {
                  "pytanie": "Uchwały zarządu spółki akcyjnej zapadają:",
                  "odpowiedzi": [
                    "bezwzględną większością głosów, chyba że statut stanowi inaczej",
                    "zawsze jednomyślnie",
                    "większością 2/3 głosów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 371 § 2 KSH — uchwały zarządu zapadają bezwzględną większością głosów, jeżeli statut nie stanowi inaczej."
                },
                {
                  "pytanie": "Uchwały zarządu spółki akcyjnej:",
                  "odpowiedzi": [
                    "są protokołowane",
                    "nie wymagają żadnej dokumentacji",
                    "wymagają formy aktu notarialnego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 376 KSH — uchwały zarządu spółki akcyjnej są protokołowane."
                },
                {
                  "pytanie": "Zmiana statutu spółki akcyjnej:",
                  "odpowiedzi": [
                    "wymaga uchwały walnego zgromadzenia i wpisu do rejestru",
                    "należy do kompetencji zarządu",
                    "następuje uchwałą rady nadzorczej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 430 § 1 KSH — zmiana statutu wymaga uchwały walnego zgromadzenia i wpisu do rejestru."
                },
                {
                  "pytanie": "Akcje spółki akcyjnej mogą być:",
                  "odpowiedzi": [
                    "imienne albo na okaziciela",
                    "wyłącznie imienne",
                    "wyłącznie na okaziciela"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 334 § 1 KSH — akcje mogą być imienne lub na okaziciela."
                },
                {
                  "pytanie": "Zamiana akcji imiennych na akcje na okaziciela (albo odwrotnie):",
                  "odpowiedzi": [
                    "jest dopuszczalna na żądanie akcjonariusza, jeżeli ustawa lub statut nie stanowi inaczej",
                    "jest zawsze zakazana",
                    "wymaga każdorazowo zgody sądu rejestrowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 334 § 2 KSH — zamiana akcji może być dokonana na żądanie akcjonariusza, jeżeli ustawa lub statut nie stanowi inaczej."
                },
                {
                  "pytanie": "Spółka akcyjna w organizacji z chwilą wpisu do rejestru:",
                  "odpowiedzi": [
                    "staje się spółką akcyjną i uzyskuje osobowość prawną",
                    "staje się spółką z ograniczoną odpowiedzialnością",
                    "pozostaje spółką w organizacji"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 12 KSH — spółka kapitałowa w organizacji z chwilą wpisu do rejestru staje się spółką właściwą i uzyskuje osobowość prawną."
                },
                {
                  "pytanie": "Imienne świadectwo tymczasowe wydaje się:",
                  "odpowiedzi": [
                    "na dowód częściowej wpłaty na akcję imienną (akcje niepokryte w pełni)",
                    "na akcje na okaziciela w pełni opłacone",
                    "zamiast statutu spółki akcyjnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 335 § 1 KSH — na akcje imienne niepokryte w pełni wydaje się imienne świadectwa tymczasowe (dokumenty akcji nie mogą być wydane przed pełną wpłatą)."
                }
              ]
            },
            {
              "nazwa": "KRS, CEIDG, Prawo przedsiębiorców",
              "pytania": [
                {
                  "pytanie": "Wskaż podmiot, który NIE jest przedsiębiorcą:",
                  "odpowiedzi": [
                    "spółka cywilna",
                    "spółka jawna",
                    "spółka partnerska",
                    "spółka komandytowa"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przedsiębiorcami są wspólnicy spółki cywilnej (art. 4 ust. 2 Prawa przedsiębiorców), a nie sama spółka; spółki handlowe są przedsiębiorcami."
                },
                {
                  "pytanie": "Przedsiębiorca będący osobą fizyczną, podejmujący działalność gospodarczą po raz pierwszy, nie podlega obowiązkowym ubezpieczeniom społecznym (ulga na start) przez okres:",
                  "odpowiedzi": [
                    "6 miesięcy od dnia podjęcia działalności gospodarczej",
                    "9 miesięcy od dnia podjęcia działalności",
                    "12 miesięcy od dnia podjęcia działalności",
                    "24 miesięcy od dnia podjęcia działalności"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 18 ust. 1 Prawa przedsiębiorców — „ulga na start”: brak obowiązkowych ubezpieczeń społecznych przez 6 miesięcy."
                },
                {
                  "pytanie": "Przedsiębiorca wpisany do rejestru przedsiębiorców KRS może zawiesić wykonywanie działalności gospodarczej maksymalnie na okres do:",
                  "odpowiedzi": [
                    "24 miesięcy",
                    "12 miesięcy",
                    "6 miesięcy",
                    "3 miesięcy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 23 ust. 1–2 Prawa przedsiębiorców — przedsiębiorca wpisany do KRS może zawiesić działalność na okres od 30 dni do 24 miesięcy."
                },
                {
                  "pytanie": "W okresie zawieszenia wykonywania działalności gospodarczej przedsiębiorca:",
                  "odpowiedzi": [
                    "może zbywać własne środki trwałe i wyposażenie",
                    "nie może być poddany kontroli",
                    "nie może przyjmować należności",
                    "nie może odwołać zarządcy sukcesyjnego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 25 ust. 2 Prawa przedsiębiorców — w okresie zawieszenia przedsiębiorca może m.in. zbywać własne środki trwałe i wyposażenie oraz przyjmować należności; może też być kontrolowany."
                },
                {
                  "pytanie": "Zgodnie z Prawem przedsiębiorców za przedsiębiorców uznaje się także:",
                  "odpowiedzi": [
                    "wspólników spółki cywilnej w zakresie wykonywanej przez nich działalności gospodarczej",
                    "spółki cywilne",
                    "wyłącznie wspólników spółki partnerskiej",
                    "jednostki organizacyjne bez zdolności prawnej"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 4 ust. 2 Prawa przedsiębiorców — przedsiębiorcami są wspólnicy spółki cywilnej w zakresie wykonywanej przez nich działalności gospodarczej."
                },
                {
                  "pytanie": "Wpis do Centralnej Ewidencji i Informacji o Działalności Gospodarczej (CEIDG) jest dokonywany:",
                  "odpowiedzi": [
                    "na wniosek, chyba że przepis szczególny przewiduje wpis z urzędu",
                    "wyłącznie na wniosek",
                    "wyłącznie z urzędu",
                    "wyłącznie przez sąd rejestrowy"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Ustawa o CEIDG — wpisy są dokonywane na wniosek, chyba że przepis szczególny przewiduje wpis z urzędu."
                },
                {
                  "pytanie": "Przedsiębiorca wpisany do CEIDG może opublikować za pośrednictwem systemu CEIDG informację o swoim:",
                  "odpowiedzi": [
                    "pełnomocniku lub prokurencie",
                    "pełnomocniku, ale nie o prokurencie",
                    "prokurencie, ale nie o pełnomocniku",
                    "wyłącznie o małżonku"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Ustawa o CEIDG — przedsiębiorca może opublikować w CEIDG informację o pełnomocniku lub prokurencie."
                },
                {
                  "pytanie": "Wraz z wnioskiem o wpis do CEIDG (poza wnioskiem o wykreślenie) składa się m.in. oświadczenie o posiadaniu:",
                  "odpowiedzi": [
                    "tytułu prawnego do nieruchomości, których adresy są wpisywane do CEIDG",
                    "ruchomości o wartości powyżej 20 000 zł",
                    "praw niemajątkowych służących działalności",
                    "kapitału zakładowego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Ustawa o CEIDG — do wniosku dołącza się oświadczenie o posiadaniu tytułu prawnego do nieruchomości, których adresy podlegają wpisowi do CEIDG."
                },
                {
                  "pytanie": "Wpisy do Krajowego Rejestru Sądowego podlegają obowiązkowi ogłoszenia:",
                  "odpowiedzi": [
                    "w Monitorze Sądowym i Gospodarczym, chyba że ustawa stanowi inaczej",
                    "na stronie internetowej sądu rejestrowego",
                    "na stronie internetowej Sądu Okręgowego w Warszawie",
                    "na stronie internetowej spółki"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 13 ust. 1 ustawy o KRS — wpisy do Rejestru podlegają obowiązkowi ogłoszenia w Monitorze Sądowym i Gospodarczym, chyba że ustawa stanowi inaczej."
                },
                {
                  "pytanie": "O ile przepis szczególny nie stanowi inaczej, wniosek o wpis do KRS powinien być złożony nie później niż w terminie:",
                  "odpowiedzi": [
                    "7 dni od dnia zdarzenia uzasadniającego dokonanie wpisu",
                    "3 dni od dnia zdarzenia",
                    "14 dni od dnia zdarzenia",
                    "30 dni od dnia zdarzenia"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 22 ustawy o KRS — wniosek o wpis powinien być złożony nie później niż w terminie 7 dni od dnia zdarzenia uzasadniającego wpis."
                },
                {
                  "pytanie": "Podmiot wpisany do KRS jest obowiązany umieszczać w oświadczeniach pisemnych kierowanych do oznaczonych osób m.in.:",
                  "odpowiedzi": [
                    "oznaczenie sądu rejestrowego, w którym przechowywane są akta, oraz numer podmiotu w Rejestrze",
                    "numer REGON nadany temu podmiotowi",
                    "imiona i nazwiska wszystkich wspólników",
                    "wysokość rocznego obrotu"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 34 ust. 1 ustawy o KRS — w oświadczeniach pisemnych podaje się m.in. firmę, formę prawną, siedzibę, NIP oraz oznaczenie sądu rejestrowego i numer KRS."
                },
                {
                  "pytanie": "Krajowy Rejestr Sądowy składa się m.in. z:",
                  "odpowiedzi": [
                    "rejestru dłużników niewypłacalnych",
                    "krajowego rejestru zadłużonych",
                    "centralnego rejestru beneficjentów rzeczywistych",
                    "rejestru zastawów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 1 ust. 2 ustawy o KRS — KRS obejmuje rejestr przedsiębiorców, rejestr stowarzyszeń/fundacji/SPZOZ oraz rejestr dłużników niewypłacalnych."
                },
                {
                  "pytanie": "Składnikiem Krajowego Rejestru Sądowego NIE jest:",
                  "odpowiedzi": [
                    "rejestr zastawów",
                    "rejestr dłużników niewypłacalnych",
                    "rejestr przedsiębiorców",
                    "rejestr stowarzyszeń, innych organizacji społecznych i zawodowych, fundacji oraz SPZOZ"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 1 ust. 2 ustawy o KRS — rejestr zastawów jest odrębnym rejestrem (ustawa o zastawie rejestrowym), nie jest częścią KRS."
                },
                {
                  "pytanie": "Opłata sądowa za wpis spółki jawnej do KRS (w trybie tradycyjnym) wynosi:",
                  "odpowiedzi": [
                    "500 zł (oraz 100 zł za ogłoszenie w Monitorze Sądowym i Gospodarczym)",
                    "250 zł",
                    "jest bezpłatna"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Opłata za wpis spółki do rejestru przedsiębiorców KRS wynosi 500 zł (250 zł w trybie S24) plus 100 zł za ogłoszenie w MSiG — ustawa o kosztach sądowych w sprawach cywilnych."
                },
                {
                  "pytanie": "Przedsiębiorca prowadzący działalność w formie spółki handlowej podlega rejestracji w:",
                  "odpowiedzi": [
                    "Krajowym Rejestrze Sądowym (KRS)",
                    "Centralnej Ewidencji i Informacji o Działalności Gospodarczej (CEIDG)",
                    "wyłącznie w Monitorze Sądowym i Gospodarczym"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Spółki handlowe podlegają wpisowi do rejestru przedsiębiorców KRS (ustawa o KRS); CEIDG dotyczy osób fizycznych."
                },
                {
                  "pytanie": "Osoba fizyczna prowadząca jednoosobową działalność gospodarczą podlega wpisowi do:",
                  "odpowiedzi": [
                    "CEIDG",
                    "KRS",
                    "rejestru REGON prowadzonego przez GUS"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Osoba fizyczna wykonująca działalność gospodarczą podlega wpisowi do CEIDG (Prawo przedsiębiorców / ustawa o CEIDG)."
                },
                {
                  "pytanie": "Sposób zawarcia umowy spółki (w formie aktu notarialnego albo przy wykorzystaniu wzorca w systemie S24):",
                  "odpowiedzi": [
                    "wpływa na koszty rejestracji — rejestracja spółki zawartej w trybie S24 (online) jest tańsza niż w trybie tradycyjnym",
                    "nie wpływa na koszty — opłata za wpis do KRS jest w obu trybach identyczna",
                    "nie ma znaczenia, ponieważ rejestracja spółki w KRS jest wolna od opłat sądowych",
                    "wpływa wyłącznie na czas rozpoznania wniosku, ale nie na wysokość opłat sądowych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Opłata sądowa za wpis spółki do KRS jest niższa w trybie S24 (wzorzec umowy) — 250 zł + 100 zł za ogłoszenie w MSiG — niż w trybie tradycyjnym (500 zł + 100 zł MSiG). Sposób zawarcia umowy realnie wpływa na koszty rejestracji (online taniej)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nazwa": "Prawo medyczne",
      "ikona": "🩺",
      "opis": "Prawa pacjenta, zgoda na zabieg, tajemnica lekarska, klauzula sumienia i przywilej terapeutyczny (na podstawie UZL i ustawy o prawach pacjenta).",
      "podkategorie": [
        {
          "nazwa": "Testy",
          "testy": [
            {
              "nazwa": "Prawo medyczne — test podstawowy",
              "pytania": [
                {
                  "pytanie": "Lekarz jest zobowiązany do wykonywania zawodu zgodnie z elementami standardu z art. 4 UZL, z WYJĄTKIEM:",
                  "odpowiedzi": [
                    "dbając o poszanowanie praw pacjenta",
                    "zgodnie ze wskazaniami aktualnej wiedzy medycznej",
                    "dostępnymi metodami i środkami zapobiegania, rozpoznawania i leczenia chorób",
                    "zgodnie z zasadami etyki zawodowej",
                    "z należytą starannością"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Art. 4 UZL wymienia: aktualną wiedzę medyczną, dostępne metody i środki, zasady etyki zawodowej oraz należytą staranność. „Poszanowanie praw pacjenta” to odrębny obowiązek (nie element standardu z art. 4)."
                },
                {
                  "pytanie": "Wskaż odpowiedź FAŁSZYWĄ. Lekarz może powstrzymać się od wykonania świadczeń niezgodnych z jego sumieniem (klauzula sumienia), pod warunkiem że:",
                  "odpowiedzi": [
                    "wskaże realne możliwości uzyskania tego świadczenia u innego lekarza lub w podmiocie leczniczym",
                    "pacjent nie wymaga niezwłocznej pomocy lekarskiej",
                    "odnotuje ten fakt w dokumentacji medycznej",
                    "dokona uprzedniego powiadomienia na piśmie przełożonego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Obowiązek „wskazania realnych możliwości” uzyskania świadczenia u innego lekarza został uznany za niekonstytucyjny (wyrok TK K 12/14 z 2015 r.) — to zdanie jest dziś fałszywe. (Warto zweryfikować z materiałami kursu.)"
                },
                {
                  "pytanie": "Prawo do uzyskania przystępnej informacji o stanie zdrowia, rozpoznaniu, metodach i rokowaniu przysługuje pacjentowi (w tym małoletniemu ≥16 lat) od:",
                  "odpowiedzi": [
                    "lekarza i felczera",
                    "pielęgniarki i położnej",
                    "farmaceuty i fizjoterapeuty",
                    "wszystkie powyższe prawdziwe",
                    "tylko A i B prawdziwe"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z kluczem testu poprawna jest odpowiedź „lekarza i felczera”."
                },
                {
                  "pytanie": "Przywilej terapeutyczny (ograniczenie informacji przekazywanej pacjentowi) może zastosować wobec pacjenta:",
                  "odpowiedzi": [
                    "lekarz",
                    "pielęgniarka i położna",
                    "ratownik medyczny i dietetyk",
                    "każda osoba wykonująca zawód medyczny",
                    "żadna z powyższych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przywilej terapeutyczny przysługuje lekarzowi (art. 31 ust. 4 UZL)."
                },
                {
                  "pytanie": "Stosując przywilej terapeutyczny, lekarz może ograniczyć informację o:",
                  "odpowiedzi": [
                    "stanie zdrowia i rokowaniu",
                    "stanie zdrowia i rozpoznaniu",
                    "rozpoznaniu i rokowaniu",
                    "dowolnych elementach obowiązku informacyjnego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Przywilej terapeutyczny dotyczy ograniczenia informacji o stanie zdrowia i o rokowaniu, gdy przemawia za tym dobro pacjenta (art. 31 ust. 4 UZL)."
                },
                {
                  "pytanie": "Zgoda osoby małoletniej powyżej 13. roku życia na zabieg lub inną czynność medyczną wymagana jest na podstawie ustawy:",
                  "odpowiedzi": [
                    "wszystkie powyższe",
                    "o zawodach lekarza i lekarza dentysty",
                    "o planowaniu rodziny, ochronie płodu ludzkiego i warunkach dopuszczalności przerywania ciąży",
                    "o leczeniu niepłodności",
                    "o pobieraniu, przechowywaniu i przeszczepianiu komórek, tkanek i narządów"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z kluczem testu poprawna jest odpowiedź „wszystkie powyższe” — każda z wymienionych ustaw przewiduje wymóg zgody małoletniego powyżej 13. roku życia."
                },
                {
                  "pytanie": "Lekarz może wykonać zabieg operacyjny bez zgody pacjenta niekompetentnego (po uzyskaniu zgody zastępczej przedstawiciela lub sądu), jednak gdy zwłoka groziłaby utratą życia / ciężkim uszkodzeniem ciała / ciężkim rozstrojem zdrowia, lekarz może przeprowadzić zabieg:",
                  "odpowiedzi": [
                    "wyłącznie za wiedzą sądu opiekuńczego (zawiadamiając sąd)",
                    "wyłącznie za zgodą sądu opiekuńczego",
                    "wyłącznie za zgodą przełożonego",
                    "wyłącznie za wiedzą przełożonego"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "W sytuacji nagłej lekarz działa bez zgody, ale ma obowiązek niezwłocznie zawiadomić (poinformować) sąd opiekuńczy / przedstawiciela ustawowego oraz, o ile to możliwe, zasięgnąć opinii drugiego lekarza (art. 34 ust. 7 UZL). (Warto zweryfikować z materiałami kursu.)"
                },
                {
                  "pytanie": "Jeśli nie spowoduje to niebezpieczeństwa utraty życia, ciężkiego uszkodzenia ciała lub ciężkiego rozstroju zdrowia, ratownik medyczny po ocenie stanu zdrowia pacjenta może:",
                  "odpowiedzi": [
                    "zarówno nie podjąć, jak i odstąpić od medycznych czynności ratunkowych albo udzielania świadczeń zdrowotnych",
                    "jedynie nie podjąć medycznych czynności ratunkowych, ale nie może od nich odstąpić",
                    "jedynie odstąpić od rozpoczętych czynności, ale nie może ich nie podjąć",
                    "ani nie podjąć, ani odstąpić od medycznych czynności ratunkowych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z kluczem testu prawdziwe są oba warianty — ratownik może zarówno nie podjąć, jak i odstąpić od medycznych czynności ratunkowych / udzielania świadczeń zdrowotnych."
                },
                {
                  "pytanie": "Wyjątek terapeutyczny to:",
                  "odpowiedzi": [
                    "żadne z powyższych",
                    "prawo lekarza do ograniczenia pacjentowi informacji w wyjątkowej sytuacji",
                    "prawo lekarza do wyboru metody terapii",
                    "możliwość zastosowania przez lekarza unikatowej metody leczniczej",
                    "prawo lekarza do zaniechania uporczywej terapii"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z kluczem testu poprawna jest odpowiedź „żadne z powyższych”. Uwaga: „wyjątek terapeutyczny” bywa odróżniany od „przywileju terapeutycznego” (ograniczenia informacji) — stąd taka odpowiedź w kluczu."
                },
                {
                  "pytanie": "Tajemnicą lekarską (medyczną) objęte są:",
                  "odpowiedzi": [
                    "informacje na temat pacjenta uzyskane przez lekarza w związku z wykonywaniem zawodu",
                    "informacje na temat pacjenta, które lekarz osobiście uzyskał w związku z jego leczeniem",
                    "tylko informacje na temat zdrowia pacjenta uzyskane przy udzielaniu świadczeń zdrowotnych",
                    "informacje o pacjencie z wyłączeniem preferencji światopoglądowych i seksualnych",
                    "informacje o pacjencie z wyłączeniem spraw majątkowych"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Tajemnica obejmuje wszystkie informacje związane z pacjentem, uzyskane w związku z wykonywaniem zawodu (art. 40 UZL) — bez zawężeń wskazanych w pozostałych odpowiedziach."
                },
                {
                  "pytanie": "Zgoda na zabieg podwyższonego ryzyka wymaga formy pisemnej. Jeśli formularz nie został podpisany, ale pacjent uprzednio ustnie zaakceptował ryzyko zabiegu, to zabieg został wykonany:",
                  "odpowiedzi": [
                    "legalnie, ale lekarz może mieć problem z udowodnieniem zakresu przekazanej informacji",
                    "bezprawnie — nie została spełniona przesłanka legalności zabiegu",
                    "bezprawnie, ale podpis pacjenta złożony po zabiegu zalegalizuje procedurę",
                    "legalnie, o ile nie doszło do powikłań"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Forma pisemna zgody jest zastrzeżona dla celów dowodowych (ad probationem), a nie pod rygorem nieważności — sama zgoda ustna nie czyni zabiegu bezprawnym, lecz utrudnia dowodzenie."
                },
                {
                  "pytanie": "Osobą bliską pacjentowi NIE jest:",
                  "odpowiedzi": [
                    "rodzeństwo małżonka",
                    "małżonek w trakcie rozwodu",
                    "teściowa",
                    "rodzeństwo pacjenta",
                    "wszyscy powyżsi"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z kluczem testu osobą bliską nie jest rodzeństwo małżonka. Definicja osoby bliskiej (ustawa o prawach pacjenta) obejmuje m.in. małżonka, krewnych do II stopnia oraz powinowatych w linii prostej (np. teściowa) — rodzeństwo małżonka się w niej nie mieści."
                },
                {
                  "pytanie": "Prawo do informacji o stanie zdrowia, rozpoznaniu, metodach i rokowaniu przysługuje pacjentowi od:",
                  "odpowiedzi": [
                    "każdej osoby wykonującej zawód medyczny — w zakresie udzielanych przez nią świadczeń i zgodnie z jej uprawnieniami",
                    "każdej osoby wykonującej zawód medyczny — w pełnym zakresie",
                    "tylko lekarza (felczera) w pełnym zakresie",
                    "tylko lekarza, pielęgniarki i położnej w ograniczonym zakresie"
                  ],
                  "poprawna": 0,
                  "wyjasnienie": "Zgodnie z ustawą o prawach pacjenta informacji udziela osoba wykonująca zawód medyczny, w zakresie udzielanych przez nią świadczeń i zgodnie z posiadanymi uprawnieniami."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
