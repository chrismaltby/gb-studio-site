---
title: "Music"
draft: false
next: "/docs/sound-effects"
nextTitle: "Dźwięk"
---

# Wprowadzenie

GB Studio wewnętrznie korzysta z [GBT Player] (https://github.com/AntonioND/gbt-player), sterownika, który pobiera pliki .MOD i konwertuje je na format zrozumiały dla Gameboy. Można użyć takiego oprogramowania jak [**OpenMPT**](https://openmpt.org/) (głównie dla systemu Windows, ale działa równie dobrze przy pomocy Wine na innych systemach) lub [**MilkyTracker**](https://milkytracker.titandemo.org/)(działa natywnie na wielu systemach), w celu utworzenia muzyki trackera .MOD. Oczywiście można korzystać z innego oprogramowania, które jest w stanie edytować pliki .MOD, takie jak [**BassoonTracker**](https://www.stef.be/bassoontracker/) (program przeglądarkowy), [**ProTracker**](https://16-bits.org/pt.php), oraz wiele innych.

# Rozpoczęcie pracy, pierwsze kroki

1. Utwórz pusty projekt GB Studio, znajdź plik `resources/music/template.mod` i otwórz go za pomocą wybranego programu (trackera) do obsługi plików MOD.
   - **Zaleca się edytować ten plik, aby uzyskać dokładną reprezentację instrumentów, których można użyć.**
   - Użytkownicy MilkyTracker powinni zapisać ten plik jako plik `.XM`. Zapisanie pliku .mod w MilkyTracker spowoduje jego uszkodzenie. Eksportuj utwór jako plik .mod za każdym razem, gdy chcesz przetestować utwór w grze.
2. Możesz usunąć przykładowy utwór, ale ** MUSISZ ** zachowywać nienaruszone instrumenty/dźwięki/przykłady.
3. Użyj listy instrumentów pokazanej w dalszej części tego dokumentu, aby wybrać żądane dźwięki. Zmiana próbek w trackerze ** nie ** wpłynie na to, jak brzmią w grze.

Po zakończeniu, dodaj pliki .mod do folderu `resources/music` w swoim projekcie. ** Często testuj swoją piosenkę w grze, aby śledzić wszelkie słyszalne różnice w grze. ** (W grze, podczas gry. NIE w podglądzie!)

Należy jednak pamiętać, że nadal mamy do czynienia z trackerem. Poniżej zamieszczono krótkie podsumowanie/omówienie, jak program typu tracker funkcjonuje:

```
C-5 01 v64 ...
--- -- --- ---
 |   |  |   |
 |   |  |   +-- Kolumna efektów (zmiany głośności, akord, panoramowanie itp.)
 |   |  +------ Wartość głośności, dla plików .MOD to nie ma znaczenia (większość przykładów tutaj
 |   |          pomija to i zamiast tego wyświetla trzy kropki na swoim miejscu).
 |   +--------- Instrument
 +------------- Nuta i oktawa (nuta C w 5 oktawie. Myślnik może być znakiem #, co oznacza ostrą nutę, np. C#, D#)
```

Kanały składają się właśnie z tego typu wierszy. Rzędy mogą być puste lub mogą być częściowo wypełnione (np. Tylko efektem). W sumie melodie (dla GB) składają się z 4 takich kolumn. 

Dokumentacja ta zawiera bloki kodu, zaczynające się od `ModPlug Tracker MOD`. Cały ten blok można skopiować do programu OpenMPT. Wszelkie dane skopiowane z OpenMPT wyglądają tak po wklejeniu do dowolnej aplikacji tekstowej.

# Ważne ograniczenia

Plik .MOD może zawierać ** TYLKO ** 4 kanały. W przypadku innej ilości (mniej, albo więcej) melodie nie będą poprawnie konwertowane.

** Ograniczenie te jest narzucone przez samą konsolę Gameboy, która przez cały czas ma 4 kanały polifonii.**

Ponadto można używać tylko niektórych instrumentów na niektórych kanałach. Na dole znajduje się tabela, w której opisuje gdzie powinny się znaleźć instrumenty. Dzieje się tak również dlatego, że Gameboy przypisuje instrumenty na podstawie kanału, który jest wbudowany w bardzo krzemowy układ i nie można go zmienić.

| Kanał #     | Rodzaj dźwięku    | Zakres nut<sup>1</sup> | Instrumenty | Efekty                |
| ----------- | ----------------  | ---------------------- | ----------- | --------------------- |
| Kanał 1 & 2 | Impulsy (Pulses)  | C3 do B8               | 1-4         | 0, B, C, D, E8, EC, F |
| Kanał 3     | Przebieg(Waveform)| C3 do B8               | 8-15        | 0, E8 i EC            |
| Kanał 4     | Szum    (Noise)   | Tylko C5               | 16-31       | B, C, D, E8, EC, F    |

*<sup>1</sup> ten zakres nut jest przeznaczony dla trackerów, które wyświetlają swoje nuty w zakresie od C1 do C8, podobnie jak OpenMPT. Jeśli używasz trackera, który może spaść nawet do C0 (jak MilkyTracker), wówczas zakresy nut są o jedną oktawę (liczbę) niższe (na przykład C3 do B8 w MPT brzmi tak samo jak C2 do B7 w MilkuTracker). *

# Ograniczenia głośności

Kanały 1, 2 i 4 mają tylko jedną czwartą zakresu głośności obsługiwanego przez moduły trackera (czyli od 0h do 40h). Obsługiwane głośności są następujące:

`00, 04, 08, 0C, 10, 14, 18, 1C, 20, 24, 28, 2C, 30, 34, 38, 3C`

Wszelkie inne głośności zostaną po prostu ograniczone do najbliższej obsługiwanej wartości. (np. C40, domyślna wartość głośności, zostaje ograniczona do C3C)

**Głośności powyżej C40 nie są obsługiwane i po konwersji będą zachowywać się nienormalnie.**

Podczas gdy w module trackera głośność resetuje się przy każdej nowej nucie, nie zmienia się ona po konwersji. Załóżmy następujący scenariusz:

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

W trackerze nuta E-5 wznawia się przy pełnej głośności po efekcie C00.

W grze nie usłyszysz nuty E-5. Wynika to z faktu, że C00 utrzymuje się do momentu ustawienia innego efektu `Cxx`. Zasadniczo musisz wykonać następujące czynności:

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

To dotyczy każdej występującej głośności. Jeśli masz nutę na C24, która stopniowo spada do, powiedzmy C18, to nadal musisz zresetować każdą nową nutę do C24 (lub wyższej, lub niższej, w zależności od tego, co chcesz osiągnąć).

Tymczasem kanał 3 otrzymuje tylko ćwierć **tego**, z zakresem głośności `00, 10, 20, 40`. Poza tym będziesz musiał wprowadzić instrument i nutę, aby zmiana głośności mogła przynieść jakikolwiek efekt, chyba że jest to efekt głośności `C00`. Na przykład ponownie:

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

Nie usłyszysz żadnej zmiany głośności C20 podczas gry, więc należy dodać nutę, aby zarejestrować zmianę głośności.

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


# Dostępne instrumenty

Liczby na tej liście reprezentują podstawowe 10 liczb, które każde z tych instrumentów używa w OpenMPT. Obok tych liczb (w nawiasach) znajduje się podstawowy odpowiednik dla nich (base16) dla użytkowników MilkyTracker.

Kanały impulsowe posiadają 4 instrumenty (od 1 do 4):

1. 25% impulsu
2. 50% impulsu (fala prostokątna)
3. 75% impulsu (odwrócony impuls 25%)
4. 12.5% impulsu

Instrumenty od 5 do 7 są celowo pozostawiono puste.

Kanały z przebiegiem (wave) posiadają 8 instrumentów (od 8 do 15):

8. Buzzy (Kod źródłowy nazywa to "losowym :P")
9. Ringy (przydatne dla SFX)
10. (A) Sync Saw
11. (B) Ring Saw
12. (C) Octave Pulse + Triangle
13. (D) Sawtooth
14. (E) Square
15. (F) Sine

Kanały szumów otrzymują najwięcej instrumentów, częściowo ze względu na to, jak szum działa na Gameboyu. Instrumenty od 16 do 23 używają okresowego (zapętlonego) szumu na różnych wysokościach, podczas gdy instrumenty od 24 do 32 używają szumów pseudolosowych na różnych wysokościach.

Pseudonimy i opisy obok tych instrumentów nie są oficjalne dla GBT Player, mają na celu pomóc w identyfikacji tych instrumentów akustycznych na pierwszy rzut oka.

Okresowe szumy:

16. (10) "jąkanie" - Kwadratowy impuls oraz impuls o losowej szerokości
17. (11) "rumble" - To samo co przebieg (waveform) tylko że szybszy
18. (12) "silnik" - To samo co przebieg (waveform) ale znacznie szybszy
19. (13) "niski ton" - Brzmi podobnie jak D5
20. (14) "subharmonia" - Brzmi jak E5 + połowa dodatkowego wzrostu
21. (15) "średni ton" - Brzmi jak B5 + połowa dodatkowego wzrostu
22. (16) "wydzięk" - Brzmi jak D6 + połowa dodatkowego wzrostu
23. (17) "wysoki ton" - Brzmi jak D7

Pseudolosowe szumy:

24. (18) "trzęsienie ziemi" - kwadrat z cienkim pulsem o losowych szerokościach impulsu
25. (19) "statek kosmiczny" - To samo co przebieg (waveform) tylko że szybszy
26. (1A) "ocean" - To samo co przebieg (waveform) ale znacznie szybszy
27. (1B) "draśnięcie" - (komentarz autora: chyba wiesz o co chodzi)
28. (1C) "glitch" - Dość czysta próbka szumu białego, niezwiązana z innymi instrumentami
29. (1D) "wulkan" - Impuls o szybko zmieniającej się szerokości impulsu
30. (1E) "krzyk" - To samo co przebieg (waveform) tylko że szybszy
31. (1F) "static" - To samo co przebieg (waveform) ale znacznie szybszy

Nie ma instrumentów czytelnych dla GBT poza 31.

# Efekty

| EFEKT   |     NAZWA        | NOTATKI                                                      |
| :-----: | :-----------:    | :----------------------------------------------------------- |
| **0xy** |     Akord        | Gdzie `x` = druga nuta, `y` trzecia nuta w półtonach. Podczas korzystania z tego efektu należy ustawić instrument. |
| **Bxx** |     Skok         | Przejdź do określonej pozycji w utworze, `xx`.               |
| **Cxx** |    Gośność       | Ustawienie głośności na xx. Zobacz **ograniczenia głośności**, by dowiedzieć się więcej. |
| **Dxx** | Przerwanie wzoru | Wczesne przejście do następnego wzoru, gdzie `xx` oznacza rząd, do którego powinien przejść w następnym wzorze. Użycie tego w ostatnim wzorze spowoduje uszkodzenie utworu poprzez odczytanie śmieciowych danych poza utworem. |
| **E8x** |  Panoramowanie   | Ustawienie panoramowania na `x`. `0-3` = w lewo,` 4-B` = środek, `C-F` = w prawo |
| **ECx** |   Wytnij nutę    | Wycięcie nuty po `x` przejściach. `0 < x < szybkość-1`              |
| **Fxx** |  Ustaw szybkość  | Ustawia prędkość utworu na `xx`. Prawidłowe wartości to od `01` do `1F`. Wartość reprezentuje, ile ramek utwór powinien poczekać przed przejściem do innego wiersza. Ustawienie prędkości BPM nie ma wpływu na konwersję. |

## Tabela szybkości

| Fxx wartość (w trackerze) | BPM (w trackerze) | BPM (w grze) |
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

To nie jest pełna tabela, to tylko kilka najwyższych prędkości. Służy tutaj do podkreślenia niektórych rozbieżności prędkości, choć niewielkich, aby nie były bardzo zauważalne, z wyjątkiem wartości oznaczonych 1.

Można zauważyć, że wartość efektu F po przeliczeniu na dziesiętne jest tylko dzielnikiem prędkości. Na przykład F03 dzieli BPM przez 3 („750/3 = 250” lub „900/3 = 300”).

Ze względu na konfigurację GB Studio, efekt F05 60 Hz, który dałby 180 BPM w grze, jest tutaj niemożliwy.

* Podczas gdy nie jest w GB Studio, GBT ma flagę o nazwie `-speed`, która będzie obsługiwać BPM inaczej, co wymagałoby efektów F96 dla każdej prędkości, ponieważ nie będzie obsługiwać żadnych wewnętrznych konwersji, aby zbliżyć prędkość. To jest powód, dla którego F01 do F04 wymagają F96 w obu trybach, nie ma odpowiednika w szybkości śledzenia. *

**1. Wartości oznaczone 1 wymagają dodatkowego efektu F96, aby utwór brzmiał bliżej prędkości po przekonwertowaniu lub ustawienie BPM utworu na 150. ** Ten efekt F96 można usunąć, gdy skończysz z utworem i nie będzie jakakolwiek różnica, ponieważ GBT ignoruje to - to jest tylko tutaj, aby ustawić BPM na coś bliższego wersji w grze.

# Porady i triki

W tej sekcji zostanie omówione kilka sztuczek, których można używać z GBT, aby utwór brzmiał lepiej niż powinien.

### **1. Wysoka szybkość**

Używając F01 do F04, możesz osiągnąć znacznie większą ziarnistość, jeśli chodzi o zmianę głośności i tworzenie różnego rodzaju dźwięków. Oznacza to, że przy wystarczająco dużej prędkości możesz tworzyć bardziej zróżnicowane ciała dla dźwięków, z rodzajami obwiedni lub wyszukanymi efektami (jak echa 1-kanałowe, które omówię tutaj za chwilę).

Ta sztuczka oznacza, że przechodzisz od perkusji, która brzmi słabo i prymitywnie, do czegoś bardziej imponującego.

Oto przykład perkusji przy prędkości F02, który może brzmieć dla ciebie dobrze.

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

Jeśli jest dłuższy niż potrzebujesz, po prostu przytnij go, zaczynając od dołu.

Możesz go również użyć do dźwięków i innych rzeczy, takich jak krótkie nuty staccato lub zanikające flety.

**Jeśli to zrobisz, pamiętaj, że sprzęt GB Sound ma irytujący błąd, który resetuje fazę każdej fali na zestawie głośności, co oznacza, że możesz uzyskać drapliwy szum w kilku emulatorach, a także prawdziwej konsoli GB.**

### **2. Echo w jednym kanale**

Działa to na większości prędkości. Jest to przydatne, gdy potrzebujesz melodii na tle powtarzającego się echa, frazy lub cokolwiek innego.

Aby to zilustrować, spróbuję to zilustrować w ten sposób, zamiast używać układu trackera:

```
A _ B _ C _ E _ G _ E _ C _ B _ 
Bez 1kanału Echo

    +-----+ +-----+ +-----+
A _ B a C b E c G e E g C e B c 
+-----+ +-----+ +-----+ +-----+
     
Z 1kanałem Echo (nuty posiadające małe litery są echami)
```

Zauważ, jak każda mała litera ma postać 3 kroków za głośniejszym kuzynem? Tak działa sztuczka. Mając krótsze nuty, które na każdym kroku mają kolejną cichszą nutę, która jest daleko w tyle, uzyskujesz fajny efekt echa.

Nie potrafię tego dobrze wyjaśnić za pomocą tekstu, więc polecam sprawdzić ten film przez **explod2a03** opisujący, jak ta sztuczka działa z lepszym przykładem i faktycznym dźwiękiem:  https://www.youtube.com/watch?v=6GI9gngTn_Y

Najlepszym sposobem, aby to zrobić w module trackera, jest skorzystanie z kanału, którego nie używasz tymczasowo, skopiowanie sekwencji nutek, opóźnienie go o 3 (lub tyle potrzebnych) rzędów, a następnie kliknięcie prawym przyciskiem myszy zaznaczenia i kliknięcie ''Wzmocnienie...'' i ustawienie amplitudy na wartość niższą niż 50%.

After that, you should have both channels "alternate". Select the entirety of the channel with the echoes (from top to bottom), go to the channel you want to merge the echoes with, right click, go to "Paste special", then click "Mix paste" (This should have a shortcut, might want to learn it as it can be fairly useful).Następnie oba kanały powinny być ''alternatywne''. Wybierz cały kanał z echami (od góry do dołu), przejdź do kanału, z którym chcesz scalić echo, kliknij prawym przyciskiem myszy, przejdź do ''Wklej specjalnie'', a następnie kliknij ''Wklej mix'' (ta opcja raczej posiada skrót , możesz się tego nauczyć, ponieważ może być dość przydatne).

### 3. Szybkie koperty głośności

Śpieszysz się? Nie ma problemu, ta prosta sztuczka stworzy koperty liniowe:

1. Wybierz dwie wartości głośności / wartość C dwóch oddzielnych nut (w tym samym kanale) i wszystko pomiędzy
2. Kliknij prawym przyciskiem myszy i najedź kursorem na ''Interpoluj'' (Interpolate)
3. Kliknij ''Kolumnę efektów'' (Effect column)
4. Gotowe!

Możesz się zastanawiać, jak to zabrzmi w grze; cóż, zabrzmi to tak blisko, jak to możliwe. Głośności, których nie może odtworzyć, po prostu ograniczą go do najbliższych, które mogą odtwarzać.

# Często zadawane pytania

**Q: Czy mogę użyć plików mp3s?**

A: Nie.

**Q: Czy mogę użyć tego pliku .MOD, znalezionego w internecie?**

A: Najprawdopodobniej nie. Twój plik .MOD musi być specjalnie sformatowany w ramach tego, co otrzymujesz w `template.mod`, z wyżej wymienionymi ograniczeniami.

**Q: Jak zatrzymać odtwarzanie nuty?**

A: Albo całkowicie użyj innej nuty, albo jeśli chcesz ją wyciszyć, użyj efektu `C00`.

**Q: Mój utwór brzmi całkowicie źle po zbudowaniu! Dlaczego?**

A: Jest wiele powodów, dla których może tak być. **Upewnij się, że twój utwór jest zgodny ze wszystkim powyższymi zasadami** (w szczególności upewnij się, że używasz tylko obsługiwanych efektów, przestrzegasz przydziałów kanałów i nie przekraczasz określonych częstotliwości).

Jeśli używasz ** MilkyTracker **, pamiętaj, że może to uszkodzić dźwięk pliku .mod. Aby obejść ten problem, zapisz jako `.XM`, jego natywnie obsługiwany format, a kiedy skończysz z utworem, wyeksportuj go jako utwór .mod i wypróbuj w GB Studio.

**Q: Szybkość mojego utworu jest nieprawidłowa! Jest znacznie szybsza w grze niż w trackerze!**

A: Jeśli używasz efektu `Fxx` o wartości ** wyższej niż `F05` **, musisz pamiętać o konwersjach od 50 Hz do 60 Hz. Format .mod został pierwotnie opracowany dla komputerów europejskich, które działały z częstotliwością 50 Hz, a Gameboy - z częstotliwością 60.** Aby to złagodzić, ustaw BPM na 150 zamiast na 125. **Jeśli używasz OpenMPT ( który nie może ustawić BPM z jakiegokolwiek powodu), efekt `F96` w utworze załatwi sprawę (choć zastosuj go jak najwcześniej).

**Q:Czy mogę odtworzyć ten klip głosowy/efekt dźwiękowy/cokolwiek innego?**

A: Nie, nie na GBT. 

LSDj i bardziej zaawansowane sterowniki dźwięku dostępne dla Gameboy obsługują odtwarzanie próbek, ale zrobienie tego wymaga przeniesienia dużej ilości danych w krótkim czasie (oznacza to, że w tym czasie można odtwarzać tylko muzykę).

**Q: Czy mogę użyć innego narzędzia do pisania muzyki?**

A: Jeśli narzędzie może natywnie eksportować do .mod, spróbuj! Jeśli nie, musisz przepisać to, co napisałeś do modułu trackera, który może zapisać pliki .mod.

**Q: Czy mogę użyć pliki MIDI?**

A: OpenMPT może otwierać pliki MIDI, ale będziesz musiał ciężko pracować, aby przyciąć go do zaledwie 4 kanałów, z ograniczonymi tonami. Często łatwiej jest po prostu wprowadzić dane ręcznie, ponieważ masz dużo większą kontrolę nad wszystkim i masz lepszy obraz wszystkiego, co się dzieje, jeśli to zrobisz.

**Q: To trochę kłopotliwe. Jakie mam alternatywy?**

A: Na dzień ukończenia tego dokumentu, nie znam. Możliwe, że w przyszłości ludzie będą mogli tworzyć niestandardowe trackery lub narzędzia dla GB Studio, ale do tego czasu jest to jedyny sposób, w jaki możemy tworzyć muzykę dla gier GB Studio.

Możesz zacząć tworzyć utwór w zupełnie innym formacie niż GB za pomocą OpenMPT lub swojego trackera, ponieważ to lepiej nauczy cię, co tak naprawdę robi tracker, przynajmniej moim zdaniem...

W sekcji Porady znajduje się link, jak rozpocząć korzystanie z OpenMPT, sugeruję przeczytanie go!

**Q: Użyłem efektu D00 na moim ostatnim wzorze, aby powrócić do pierwszego, ale podczas gry odgrywa błąd po tym, jak raz zapętli się?**

A: Użyj efektu `Bxx`. Użycie efektu D00 na ostatniej klatce spowoduje, że GBT pomyśli, że poza utworem jest więcej danych, co spowoduje, że odczyta śmieciowe dane.

**Q: Korzystam z OpenMPT, a niektóre nuty są czerwone i brzmią znacznie wyżej/niżej niż powinny!**

A: Przejdź do zakładki ''Ogólne'' pod przyciskami Nowy plik, Otwórz i Zapisz. Kliknij duży przycisk obok pola ''Nazwa'' z napisem ''MOD (ProTracker), 4 kanały''. Gdy już tam będziesz, wyłącz zarówno ** Tryb ProTracker 1/2 (MOD) **, jak i ** Granice częstotliwości Amigi. ** Jest tak dlatego, że format tutaj jest przeznaczony do użytku z linią komputerów Amiga (tam właśnie był wykorzystany), który ma ograniczenia częstotliwości.

**Q: Utwór zaczyna się od jakiś śmieci.**

A: Jeśli nie używasz dwóch pierwszych kanałów, wycisz je z efektem `C00`.

**Q: Czy mogę odtwarzać efekty dźwiękowe?**

A: Jeszcze nie. Jedynym sposobem, w jaki możesz odtwarzać efekty dźwiękowe, jest odtwarzanie go jako pliku muzycznego, ale to zabije bieżącą muzykę i będziesz musiał ją ponownie uruchomić po zakończeniu odtwarzania efektu dźwiękowego.

## Porady

- **Pamiętaj, aby często zapisywać, a także tworzyć kopie zapasowe plików.** Jest to ważne we wszystkim, co robisz i warto o tym wspomnieć.
- [**jeśli utkniesz, poproś o pomoc na serwerze Discord, w `# music-help`. **] (https://discord.gg/v9xAJCJ) Zwykle jest kilka osób, które chętnie pomogą w większości przypadków.
- **Często wypróbuj swoją muzykę w swojej grze. ** Rzeczy nie brzmią 1: 1, a wbudowany podgląd po prostu odtwarza plik .mod zamiast budować muzykę i wyświetlać jej podgląd.
- **Trzymaj się prostoty!** Nie wskakuj do tego, próbując naśladować to, co zrobiło kilku artystów z LSDj lub jakimkolwiek innym narzędziem, po prostu utkniesz.
- **Nie bój się porażki. ** Rozumiem, że to rodzaj nieodpowiedniej wskazówki, ale to ważne. Twoja pierwsza piosenka nie będzie dobra i to jest w porządku. Oczywiście, nie uda ci się, ale zdobędziesz także wiedzę na temat tego, co mogłeś zrobić źle lub jak chcesz kontynuować swoją przygodę.
- **OpenMPT ma instrukcję, która pomoże Ci zacząć. ** [Oto link] (https://wiki.openmpt.org/Tutorial:_Getting_Started), przeczytaj, jeśli utkniesz (lub po prostu poproś o pomoc)
- [**Rzuć okiem, albo przeczytaj dokumentację odtwarzacza GBT. **] (https://github.com/AntonioND/gbt-player)
