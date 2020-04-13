---
title: "Music"
draft: false
next: "/docs/sound-effects"
nextTitle: "DŸwiêk"
---

# Wprowadzenie

GB Studio wewnêtrznie korzysta z [GBT Player] (https://github.com/AntonioND/gbt-player), sterownika, który pobiera pliki .MOD i konwertuje je na format zrozumia³y dla Gameboy. Mo¿na u¿yæ takiego oprogramowania jak [**OpenMPT**](https://openmpt.org/) (g³ównie dla systemu Windows, ale dzia³a równie dobrze przy pomocy Wine na innych systemach) lub [**MilkyTracker**](https://milkytracker.titandemo.org/)(dzia³a natywnie na wielu systemach), w celu utworzenia muzyki trackera .MOD. Oczywiœcie mo¿na korzystaæ z innego oprogramowania, które jest w stanie edytowaæ pliki .MOD, takie jak [**BassoonTracker**](https://www.stef.be/bassoontracker/) (program przegl¹darkowy), [**ProTracker**](https://16-bits.org/pt.php), oraz wiele innych.

# Rozpoczêcie pracy, pierwsze kroki

1. Utwórz pusty projekt GB Studio, znajdŸ plik `resources/music/template.mod` i otwórz go za pomoc¹ wybranego programu (trackera) do obs³ugi plików MOD.
   - **Zaleca siê edytowaæ ten plik, aby uzyskaæ dok³adn¹ reprezentacjê instrumentów, których mo¿na u¿yæ.**
   - U¿ytkownicy MilkyTracker powinni zapisaæ ten plik jako plik `.XM`. Zapisanie pliku .mod w MilkyTracker spowoduje jego uszkodzenie. Eksportuj utwór jako plik .mod za ka¿dym razem, gdy chcesz przetestowaæ utwór w grze.
2. Mo¿esz usun¹æ przyk³adowy utwór, ale ** MUSISZ ** zachowywaæ nienaruszone instrumenty/dŸwiêki/przyk³ady.
3. U¿yj listy instrumentów pokazanej w dalszej czêœci tego dokumentu, aby wybraæ ¿¹dane dŸwiêki. Zmiana próbek w trackerze ** nie ** wp³ynie na to, jak brzmi¹ w grze.

Po zakoñczeniu, dodaj pliki .mod do folderu `resources/music` w swoim projekcie. ** Czêsto testuj swoj¹ piosenkê w grze, aby œledziæ wszelkie s³yszalne ró¿nice w grze. ** (W grze, podczas gry. NIE w podgl¹dzie!)

Nale¿y jednak pamiêtaæ, ¿e nadal mamy do czynienia z trackerem. Poni¿ej zamieszczono krótkie podsumowanie/omówienie, jak program typu tracker funkcjonuje:

```
C-5 01 v64 ...
--- -- --- ---
 |   |  |   |
 |   |  |   +-- Kolumna efektów (zmiany g³oœnoœci, akord, panoramowanie itp.)
 |   |  +------ Wartoœæ g³oœnoœci, dla plików .MOD to nie ma znaczenia (wiêkszoœæ przyk³adów tutaj
 |   |          pomija to i zamiast tego wyœwietla trzy kropki na swoim miejscu).
 |   +--------- Instrument
 +------------- Nuta i oktawa (nuta C w 5 oktawie. Myœlnik mo¿e byæ znakiem #, co oznacza ostr¹ nutê, np. C#, D#)
```

Kana³y sk³adaj¹ siê w³aœnie z tego typu wierszy. Rzêdy mog¹ byæ puste lub mog¹ byæ czêœciowo wype³nione (np. Tylko efektem). W sumie melodie (dla GB) sk³adaj¹ siê z 4 takich kolumn. 

Dokumentacja ta zawiera bloki kodu, zaczynaj¹ce siê od `ModPlug Tracker MOD`. Ca³y ten blok mo¿na skopiowaæ do programu OpenMPT. Wszelkie dane skopiowane z OpenMPT wygl¹daj¹ tak po wklejeniu do dowolnej aplikacji tekstowej.

# Wa¿ne ograniczenia

Plik .MOD mo¿e zawieraæ ** TYLKO ** 4 kana³y. W przypadku innej iloœci (mniej, albo wiêcej) melodie nie bêd¹ poprawnie konwertowane.

** Ograniczenie te jest narzucone przez sam¹ konsolê Gameboy, która przez ca³y czas ma 4 kana³y polifonii.**

Ponadto mo¿na u¿ywaæ tylko niektórych instrumentów na niektórych kana³ach. Na dole znajduje siê tabela, w której opisuje gdzie powinny siê znaleŸæ instrumenty. Dzieje siê tak równie¿ dlatego, ¿e Gameboy przypisuje instrumenty na podstawie kana³u, który jest wbudowany w bardzo krzemowy uk³ad i nie mo¿na go zmieniæ.

| Kana³ #     | Rodzaj dŸwiêku    | Zakres nut<sup>1</sup> | Instrumenty | Efekty                |
| ----------- | ----------------  | ---------------------- | ----------- | --------------------- |
| Kana³ 1 & 2 | Impulsy (Pulses)  | C3 do B8               | 1-4         | 0, B, C, D, E8, EC, F |
| Kana³ 3     | Przebieg(Waveform)| C3 do B8               | 8-15        | 0, E8 i EC            |
| Kana³ 4     | Szum    (Noise)   | Tylko C5               | 16-31       | B, C, D, E8, EC, F    |

*<sup>1</sup> ten zakres nut jest przeznaczony dla trackerów, które wyœwietlaj¹ swoje nuty w zakresie od C1 do C8, podobnie jak OpenMPT. Jeœli u¿ywasz trackera, który mo¿e spaœæ nawet do C0 (jak MilkyTracker), wówczas zakresy nut s¹ o jedn¹ oktawê (liczbê) ni¿sze (na przyk³ad C3 do B8 w MPT brzmi tak samo jak C2 do B7 w MilkuTracker). *

# Ograniczenia g³oœnoœci

Kana³y 1, 2 i 4 maj¹ tylko jedn¹ czwart¹ zakresu g³oœnoœci obs³ugiwanego przez modu³y trackera (czyli od 0h do 40h). Obs³ugiwane g³oœnoœci s¹ nastêpuj¹ce:

`00, 04, 08, 0C, 10, 14, 18, 1C, 20, 24, 28, 2C, 30, 34, 38, 3C`

Wszelkie inne g³oœnoœci zostan¹ po prostu ograniczone do najbli¿szej obs³ugiwanej wartoœci. (np. C40, domyœlna wartoœæ g³oœnoœci, zostaje ograniczona do C3C)

**G³oœnoœci powy¿ej C40 nie s¹ obs³ugiwane i po konwersji bêd¹ zachowywaæ siê nienormalnie.**

Podczas gdy w module trackera g³oœnoœæ resetuje siê przy ka¿dej nowej nucie, nie zmienia siê ona po konwersji. Za³ó¿my nastêpuj¹cy scenariusz:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C..|
|...........|
|E-502......|
```

W trackerze nuta E-5 wznawia siê przy pe³nej g³oœnoœci po efekcie C00.

W grze nie us³yszysz nuty E-5. Wynika to z faktu, ¿e C00 utrzymuje siê do momentu ustawienia innego efektu `Cxx`. Zasadniczo musisz wykonaæ nastêpuj¹ce czynnoœci:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C..|
|...........|
|E-502...C40|
```

To dotyczy ka¿dej wystêpuj¹cej g³oœnoœci. Jeœli masz nutê na C24, która stopniowo spada do, powiedzmy C18, to nadal musisz zresetowaæ ka¿d¹ now¹ nutê do C24 (lub wy¿szej, lub ni¿szej, w zale¿noœci od tego, co chcesz osi¹gn¹æ).

Tymczasem kana³ 3 otrzymuje tylko æwieræ **tego**, z zakresem g³oœnoœci `00, 10, 20, 40`. Poza tym bêdziesz musia³ wprowadziæ instrument i nutê, aby zmiana g³oœnoœci mog³a przynieœæ jakikolwiek efekt, chyba ¿e jest to efekt g³oœnoœci `C00`. Na przyk³ad ponownie:

```
ModPlug Tracker MOD
|C-511...C40|
|...........|
|...........|
|...........|
|........C20|
|...........|
|G-511...C40|

```

Nie us³yszysz ¿adnej zmiany g³oœnoœci C20 podczas gry, wiêc nale¿y dodaæ nutê, aby zarejestrowaæ zmianê g³oœnoœci.

```
ModPlug Tracker MOD
|C-511...C40|
|...........|
|...........|
|...........|
|C-511...C20|
|...........|
|G-511...C40|
```


# Dostêpne instrumenty

Liczby na tej liœcie reprezentuj¹ podstawowe 10 liczb, które ka¿de z tych instrumentów u¿ywa w OpenMPT. Obok tych liczb (w nawiasach) znajduje siê podstawowy odpowiednik dla nich (base16) dla u¿ytkowników MilkyTracker.

Kana³y impulsowe posiadaj¹ 4 instrumenty (od 1 do 4):

1. 25% impulsu
2. 50% impulsu (fala prostok¹tna)
3. 75% impulsu (odwrócony impuls 25%)
4. 12.5% impulsu

Instrumenty od 5 do 7 s¹ celowo pozostawiono puste.

Kana³y z przebiegiem (wave) posiadaj¹ 8 instrumentów (od 8 do 15):

8. Buzzy (Kod Ÿród³owy nazywa to "losowym :P")
9. Ringy (przydatne dla SFX)
10. (A) Sync Saw
11. (B) Ring Saw
12. (C) Octave Pulse + Triangle
13. (D) Sawtooth
14. (E) Square
15. (F) Sine

Kana³y szumów otrzymuj¹ najwiêcej instrumentów, czêœciowo ze wzglêdu na to, jak szum dzia³a na Gameboyu. Instrumenty od 16 do 23 u¿ywaj¹ okresowego (zapêtlonego) szumu na ró¿nych wysokoœciach, podczas gdy instrumenty od 24 do 32 u¿ywaj¹ szumów pseudolosowych na ró¿nych wysokoœciach.

Pseudonimy i opisy obok tych instrumentów nie s¹ oficjalne dla GBT Player, maj¹ na celu pomóc w identyfikacji tych instrumentów akustycznych na pierwszy rzut oka.

Okresowe szumy:

16. (10) "j¹kanie" - Kwadratowy impuls oraz impuls o losowej szerokoœci
17. (11) "rumble" - To samo co przebieg (waveform) tylko ¿e szybszy
18. (12) "silnik" - To samo co przebieg (waveform) ale znacznie szybszy
19. (13) "niski ton" - Brzmi podobnie jak D5
20. (14) "subharmonia" - Brzmi jak E5 + po³owa dodatkowego wzrostu
21. (15) "œredni ton" - Brzmi jak B5 + po³owa dodatkowego wzrostu
22. (16) "wydziêk" - Brzmi jak D6 + po³owa dodatkowego wzrostu
23. (17) "wysoki ton" - Brzmi jak D7

Pseudolosowe szumy:

24. (18) "trzêsienie ziemi" - kwadrat z cienkim pulsem o losowych szerokoœciach impulsu
25. (19) "statek kosmiczny" - To samo co przebieg (waveform) tylko ¿e szybszy
26. (1A) "ocean" - To samo co przebieg (waveform) ale znacznie szybszy
27. (1B) "draœniêcie" - (komentarz autora: chyba wiesz o co chodzi)
28. (1C) "glitch" - Doœæ czysta próbka szumu bia³ego, niezwi¹zana z innymi instrumentami
29. (1D) "wulkan" - Impuls o szybko zmieniaj¹cej siê szerokoœci impulsu
30. (1E) "krzyk" - To samo co przebieg (waveform) tylko ¿e szybszy
31. (1F) "static" - To samo co przebieg (waveform) ale znacznie szybszy

Nie ma instrumentów czytelnych dla GBT poza 31.

# Efekty

| EFEKT   |     NAZWA        | NOTATKI                                                      |
| :-----: | :-----------:    | :----------------------------------------------------------- |
| **0xy** |     Akord        | Gdzie `x` = druga nuta, `y` trzecia nuta w pó³tonach. Podczas korzystania z tego efektu nale¿y ustawiæ instrument. |
| **Bxx** |     Skok         | PrzejdŸ do okreœlonej pozycji w utworze, `xx`.               |
| **Cxx** |    Goœnoœæ       | Ustawienie g³oœnoœci na xx. Zobacz **ograniczenia g³oœnoœci**, by dowiedzieæ siê wiêcej. |
| **Dxx** | Przerwanie wzoru | Wczesne przejœcie do nastêpnego wzoru, gdzie `xx` oznacza rz¹d, do którego powinien przejœæ w nastêpnym wzorze. U¿ycie tego w ostatnim wzorze spowoduje uszkodzenie utworu poprzez odczytanie œmieciowych danych poza utworem. |
| **E8x** |  Panoramowanie   | Ustawienie panoramowania na `x`. `0-3` = w lewo,` 4-B` = œrodek, `C-F` = w prawo |
| **ECx** |   Wytnij nutê    | Wyciêcie nuty po `x` przejœciach. `0 < x < szybkoœæ-1`              |
| **Fxx** |  Ustaw szybkoœæ  | Ustawia prêdkoœæ utworu na `xx`. Prawid³owe wartoœci to od `01` do `1F`. Wartoœæ reprezentuje, ile ramek utwór powinien poczekaæ przed przejœciem do innego wiersza. Ustawienie prêdkoœci BPM nie ma wp³ywu na konwersjê. |

## Tabela szybkoœci

| Fxx wartoœæ (w trackerze) | BPM (w trackerze) | BPM (w grze) |
| ---------------------- | ---------------- | ------------- |
| **F01<sup>1</sup>**    | 750 BPM          | 900 BPM       |
| **F02<sup>1</sup>**    | 375 BPM          | 450 BPM       |
| **F03<sup>1</sup>**    | 250 BPM          | 300 BPM       |
| **F04<sup>1</sup>**    | 187.5 BPM        | 225 BPM       |
| F05                    | 150 BPM          | 150 BPM       |
| F06                    | 125 BPM          | 128.57 BPM    |
| F07                    | 107.14 BPM       | 112.50 BPM    |
| F08                    | 93.75 BPM        | 100 BPM       |
| F09                    | 83.33 BPM        | 90 BPM        |
| F0A                    | 75 BPM           | 81.82 BPM     |

To nie jest pe³na tabela, to tylko kilka najwy¿szych prêdkoœci. S³u¿y tutaj do podkreœlenia niektórych rozbie¿noœci prêdkoœci, choæ niewielkich, aby nie by³y bardzo zauwa¿alne, z wyj¹tkiem wartoœci oznaczonych 1.

Mo¿na zauwa¿yæ, ¿e wartoœæ efektu F po przeliczeniu na dziesiêtne jest tylko dzielnikiem prêdkoœci. Na przyk³ad F03 dzieli BPM przez 3 („750/3 = 250” lub „900/3 = 300”).

Ze wzglêdu na konfiguracjê GB Studio, efekt F05 60 Hz, który da³by 180 BPM w grze, jest tutaj niemo¿liwy.

* Podczas gdy nie jest w GB Studio, GBT ma flagê o nazwie `-speed`, która bêdzie obs³ugiwaæ BPM inaczej, co wymaga³oby efektów F96 dla ka¿dej prêdkoœci, poniewa¿ nie bêdzie obs³ugiwaæ ¿adnych wewnêtrznych konwersji, aby zbli¿yæ prêdkoœæ. To jest powód, dla którego F01 do F04 wymagaj¹ F96 w obu trybach, nie ma odpowiednika w szybkoœci œledzenia. *

**1. Wartoœci oznaczone 1 wymagaj¹ dodatkowego efektu F96, aby utwór brzmia³ bli¿ej prêdkoœci po przekonwertowaniu lub ustawienie BPM utworu na 150. ** Ten efekt F96 mo¿na usun¹æ, gdy skoñczysz z utworem i nie bêdzie jakakolwiek ró¿nica, poniewa¿ GBT ignoruje to - to jest tylko tutaj, aby ustawiæ BPM na coœ bli¿szego wersji w grze.

# Porady i triki

W tej sekcji zostanie omówione kilka sztuczek, których mo¿na u¿ywaæ z GBT, aby utwór brzmia³ lepiej ni¿ powinien.

### **1. Wysoka szybkoœæ**

U¿ywaj¹c F01 do F04, mo¿esz osi¹gn¹æ znacznie wiêksz¹ ziarnistoœæ, jeœli chodzi o zmianê g³oœnoœci i tworzenie ró¿nego rodzaju dŸwiêków. Oznacza to, ¿e przy wystarczaj¹co du¿ej prêdkoœci mo¿esz tworzyæ bardziej zró¿nicowane cia³a dla dŸwiêków, z rodzajami obwiedni lub wyszukanymi efektami (jak echa 1-kana³owe, które omówiê tutaj za chwilê).

Ta sztuczka oznacza, ¿e przechodzisz od perkusji, która brzmi s³abo i prymitywnie, do czegoœ bardziej imponuj¹cego.

Oto przyk³ad perkusji przy prêdkoœci F02, który mo¿e brzmieæ dla ciebie dobrze.

```
ModPlug Tracker MOD
|C-526...C40
|C-527...C28
|........C20
|........C18
|........C10
|........C08
|........C04
|........C..
(to jest na kanale1 szumu)
```

Jeœli jest d³u¿szy ni¿ potrzebujesz, po prostu przytnij go, zaczynaj¹c od do³u.

Mo¿esz go równie¿ u¿yæ do dŸwiêków i innych rzeczy, takich jak krótkie nuty staccato lub zanikaj¹ce flety.

**Jeœli to zrobisz, pamiêtaj, ¿e sprzêt GB Sound ma irytuj¹cy b³¹d, który resetuje fazê ka¿dej fali na zestawie g³oœnoœci, co oznacza, ¿e mo¿esz uzyskaæ drapliwy szum w kilku emulatorach, a tak¿e prawdziwej konsoli GB.**

### **2. Echo w jednym kanale**

Dzia³a to na wiêkszoœci prêdkoœci. Jest to przydatne, gdy potrzebujesz melodii na tle powtarzaj¹cego siê echa, frazy lub cokolwiek innego.

Aby to zilustrowaæ, spróbujê to zilustrowaæ w ten sposób, zamiast u¿ywaæ uk³adu trackera:

```
A _ B _ C _ E _ G _ E _ C _ B _ 
Bez 1kana³u Echo

    +-----+ +-----+ +-----+
A _ B a C b E c G e E g C e B c 
+-----+ +-----+ +-----+ +-----+
     
Z 1kana³em Echo (nuty posiadaj¹ce ma³e litery s¹ echami)
```

Zauwa¿, jak ka¿da ma³a litera ma postaæ 3 kroków za g³oœniejszym kuzynem? Tak dzia³a sztuczka. Maj¹c krótsze nuty, które na ka¿dym kroku maj¹ kolejn¹ cichsz¹ nutê, która jest daleko w tyle, uzyskujesz fajny efekt echa.

Nie potrafiê tego dobrze wyjaœniæ za pomoc¹ tekstu, wiêc polecam sprawdziæ ten film przez **explod2a03** opisuj¹cy, jak ta sztuczka dzia³a z lepszym przyk³adem i faktycznym dŸwiêkiem:  https://www.youtube.com/watch?v=6GI9gngTn_Y

Najlepszym sposobem, aby to zrobiæ w module trackera, jest skorzystanie z kana³u, którego nie u¿ywasz tymczasowo, skopiowanie sekwencji nutek, opóŸnienie go o 3 (lub tyle potrzebnych) rzêdów, a nastêpnie klikniêcie prawym przyciskiem myszy zaznaczenia i klikniêcie ''Wzmocnienie...'' i ustawienie amplitudy na wartoœæ ni¿sz¹ ni¿ 50%.

After that, you should have both channels "alternate". Select the entirety of the channel with the echoes (from top to bottom), go to the channel you want to merge the echoes with, right click, go to "Paste special", then click "Mix paste" (This should have a shortcut, might want to learn it as it can be fairly useful).Nastêpnie oba kana³y powinny byæ ''alternatywne''. Wybierz ca³y kana³ z echami (od góry do do³u), przejdŸ do kana³u, z którym chcesz scaliæ echo, kliknij prawym przyciskiem myszy, przejdŸ do ''Wklej specjalnie'', a nastêpnie kliknij ''Wklej mix'' (ta opcja raczej posiada skrót , mo¿esz siê tego nauczyæ, poniewa¿ mo¿e byæ doœæ przydatne).

### 3. Szybkie koperty g³oœnoœci

Œpieszysz siê? Nie ma problemu, ta prosta sztuczka stworzy koperty liniowe:

1. Wybierz dwie wartoœci g³oœnoœci / wartoœæ C dwóch oddzielnych nut (w tym samym kanale) i wszystko pomiêdzy
2. Kliknij prawym przyciskiem myszy i najedŸ kursorem na ''Interpoluj'' (Interpolate)
3. Kliknij ''Kolumnê efektów'' (Effect column)
4. Gotowe!

Mo¿esz siê zastanawiaæ, jak to zabrzmi w grze; có¿, zabrzmi to tak blisko, jak to mo¿liwe. G³oœnoœci, których nie mo¿e odtworzyæ, po prostu ogranicz¹ go do najbli¿szych, które mog¹ odtwarzaæ.

# Czêsto zadawane pytania

**Q: Czy mogê u¿yæ plików mp3s?**

A: Nie.

**Q: Czy mogê u¿yæ tego pliku .MOD, znalezionego w internecie?**

A: Najprawdopodobniej nie. Twój plik .MOD musi byæ specjalnie sformatowany w ramach tego, co otrzymujesz w `template.mod`, z wy¿ej wymienionymi ograniczeniami.

**Q: Jak zatrzymaæ odtwarzanie nuty?**

A: Albo ca³kowicie u¿yj innej nuty, albo jeœli chcesz j¹ wyciszyæ, u¿yj efektu `C00`.

**Q: Mój utwór brzmi ca³kowicie Ÿle po zbudowaniu! Dlaczego?**

A: Jest wiele powodów, dla których mo¿e tak byæ. **Upewnij siê, ¿e twój utwór jest zgodny ze wszystkim powy¿szymi zasadami** (w szczególnoœci upewnij siê, ¿e u¿ywasz tylko obs³ugiwanych efektów, przestrzegasz przydzia³ów kana³ów i nie przekraczasz okreœlonych czêstotliwoœci).

Jeœli u¿ywasz ** MilkyTracker **, pamiêtaj, ¿e mo¿e to uszkodziæ dŸwiêk pliku .mod. Aby obejœæ ten problem, zapisz jako `.XM`, jego natywnie obs³ugiwany format, a kiedy skoñczysz z utworem, wyeksportuj go jako utwór .mod i wypróbuj w GB Studio.

**Q: Szybkoœæ mojego utworu jest nieprawid³owa! Jest znacznie szybsza w grze ni¿ w trackerze!**

A: Jeœli u¿ywasz efektu `Fxx` o wartoœci ** wy¿szej ni¿ `F05` **, musisz pamiêtaæ o konwersjach od 50 Hz do 60 Hz. Format .mod zosta³ pierwotnie opracowany dla komputerów europejskich, które dzia³a³y z czêstotliwoœci¹ 50 Hz, a Gameboy - z czêstotliwoœci¹ 60.** Aby to z³agodziæ, ustaw BPM na 150 zamiast na 125. **Jeœli u¿ywasz OpenMPT ( który nie mo¿e ustawiæ BPM z jakiegokolwiek powodu), efekt `F96` w utworze za³atwi sprawê (choæ zastosuj go jak najwczeœniej).

**Q:Czy mogê odtworzyæ ten klip g³osowy/efekt dŸwiêkowy/cokolwiek innego?**

A: Nie, nie na GBT. 

LSDj i bardziej zaawansowane sterowniki dŸwiêku dostêpne dla Gameboy obs³uguj¹ odtwarzanie próbek, ale zrobienie tego wymaga przeniesienia du¿ej iloœci danych w krótkim czasie (oznacza to, ¿e w tym czasie mo¿na odtwarzaæ tylko muzykê).

**Q: Czy mogê u¿yæ innego narzêdzia do pisania muzyki?**

A: Jeœli narzêdzie mo¿e natywnie eksportowaæ do .mod, spróbuj! Jeœli nie, musisz przepisaæ to, co napisa³eœ do modu³u trackera, który mo¿e zapisaæ pliki .mod.

**Q: Czy mogê u¿yæ pliki MIDI?**

A: OpenMPT mo¿e otwieraæ pliki MIDI, ale bêdziesz musia³ ciê¿ko pracowaæ, aby przyci¹æ go do zaledwie 4 kana³ów, z ograniczonymi tonami. Czêsto ³atwiej jest po prostu wprowadziæ dane rêcznie, poniewa¿ masz du¿o wiêksz¹ kontrolê nad wszystkim i masz lepszy obraz wszystkiego, co siê dzieje, jeœli to zrobisz.

**Q: To trochê k³opotliwe. Jakie mam alternatywy?**

A: Na dzieñ ukoñczenia tego dokumentu, nie znam. Mo¿liwe, ¿e w przysz³oœci ludzie bêd¹ mogli tworzyæ niestandardowe trackery lub narzêdzia dla GB Studio, ale do tego czasu jest to jedyny sposób, w jaki mo¿emy tworzyæ muzykê dla gier GB Studio.

Mo¿esz zacz¹æ tworzyæ utwór w zupe³nie innym formacie ni¿ GB za pomoc¹ OpenMPT lub swojego trackera, poniewa¿ to lepiej nauczy ciê, co tak naprawdê robi tracker, przynajmniej moim zdaniem...

W sekcji Porady znajduje siê link, jak rozpocz¹æ korzystanie z OpenMPT, sugerujê przeczytanie go!

**Q: U¿y³em efektu D00 na moim ostatnim wzorze, aby powróciæ do pierwszego, ale podczas gry odgrywa b³¹d po tym, jak raz zapêtli siê?**

A: U¿yj efektu `Bxx`. U¿ycie efektu D00 na ostatniej klatce spowoduje, ¿e GBT pomyœli, ¿e poza utworem jest wiêcej danych, co spowoduje, ¿e odczyta œmieciowe dane.

**Q: Korzystam z OpenMPT, a niektóre nuty s¹ czerwone i brzmi¹ znacznie wy¿ej/ni¿ej ni¿ powinny!**

A: PrzejdŸ do zak³adki ''Ogólne'' pod przyciskami Nowy plik, Otwórz i Zapisz. Kliknij du¿y przycisk obok pola ''Nazwa'' z napisem ''MOD (ProTracker), 4 kana³y''. Gdy ju¿ tam bêdziesz, wy³¹cz zarówno ** Tryb ProTracker 1/2 (MOD) **, jak i ** Granice czêstotliwoœci Amigi. ** Jest tak dlatego, ¿e format tutaj jest przeznaczony do u¿ytku z lini¹ komputerów Amiga (tam w³aœnie by³ wykorzystany), który ma ograniczenia czêstotliwoœci.

**Q: Utwór zaczyna siê od jakiœ œmieci.**

A: Jeœli nie u¿ywasz dwóch pierwszych kana³ów, wycisz je z efektem `C00`.

**Q: Czy mogê odtwarzaæ efekty dŸwiêkowe?**

A: Jeszcze nie. Jedynym sposobem, w jaki mo¿esz odtwarzaæ efekty dŸwiêkowe, jest odtwarzanie go jako pliku muzycznego, ale to zabije bie¿¹c¹ muzykê i bêdziesz musia³ j¹ ponownie uruchomiæ po zakoñczeniu odtwarzania efektu dŸwiêkowego.

## Porady

- **Pamiêtaj, aby czêsto zapisywaæ, a tak¿e tworzyæ kopie zapasowe plików.** Jest to wa¿ne we wszystkim, co robisz i warto o tym wspomnieæ.
- [**jeœli utkniesz, poproœ o pomoc na serwerze Discord, w `# music-help`. **] (https://discord.gg/v9xAJCJ) Zwykle jest kilka osób, które chêtnie pomog¹ w wiêkszoœci przypadków.
- **Czêsto wypróbuj swoj¹ muzykê w swojej grze. ** Rzeczy nie brzmi¹ 1: 1, a wbudowany podgl¹d po prostu odtwarza plik .mod zamiast budowaæ muzykê i wyœwietlaæ jej podgl¹d.
- **Trzymaj siê prostoty!** Nie wskakuj do tego, próbuj¹c naœladowaæ to, co zrobi³o kilku artystów z LSDj lub jakimkolwiek innym narzêdziem, po prostu utkniesz.
- **Nie bój siê pora¿ki. ** Rozumiem, ¿e to rodzaj nieodpowiedniej wskazówki, ale to wa¿ne. Twoja pierwsza piosenka nie bêdzie dobra i to jest w porz¹dku. Oczywiœcie, nie uda ci siê, ale zdobêdziesz tak¿e wiedzê na temat tego, co mog³eœ zrobiæ Ÿle lub jak chcesz kontynuowaæ swoj¹ przygodê.
- **OpenMPT ma instrukcjê, która pomo¿e Ci zacz¹æ. ** [Oto link] (https://wiki.openmpt.org/Tutorial:_Getting_Started), przeczytaj, jeœli utkniesz (lub po prostu poproœ o pomoc)
- [**Rzuæ okiem, albo przeczytaj dokumentacjê odtwarzacza GBT. **] (https://github.com/AntonioND/gbt-player)
