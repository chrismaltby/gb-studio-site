---
title: "Skryptowanie (polecenia zdarzenia)"
draft: false
next: "/docs/custom-events"
nextTitle: "Własne zdarzenia"
---

Skrypty umożliwiają dynamiczne kontrolowanie części gry na podstawie interakcji gracza. Za ich pomocą można łączyć sceny, prowadzić dialogi z postaciami albo tworzyć scenki przerywnikowe.

Kiedy jest zaznaczona scena, aktor lub rozruch w _świecie gry_, to _boczny pasek_ programu będzie zawierał przycisk _dodaj polecenie_ w prawym dolnym rogu. Przy pomocy _dodaj polecenie_ można przypisać polecenia do wykonania. Jeśli polecenia są już wymienione w tym miejscu, są one przeprowadzane od góry do dołu, jedno po drugim.

Podczas ustalenia poleceń dla aktorów, trzeba pamiętać, że polecenia zostaną uruchomione w momencie gdy gracz stanie obok aktora i naciśnie przycisk interakcji. Polecenia w zdarzenia typu _rozruch_, zostaną uruchomione w momencie, gdy gracz stoi na danym polu rozruchu, co może okazać się przydatne podczas tworzenia drzwi między scenami. Polecenia, które są ustalane w scenach, są uruchamiane natychmiastowo po załadowaniu danej sceny. Opcja ta przydatna jest do konfiguracji sceny na podstawie wartości zmiennych lub do rozpoczęcia scenki przerywnikowej.

## Dodaj polecenie

Po naciśnięciu przycisku _dodaj polecenie_ zostanie wyświetlone rozwijana lista menu, zawierająca polecenia do dodania. W momencie pisania na klawiaturze nazwy polecenia, zostanie uruchomiony filtr i zostaną wyświetlone tylko te polecenia, które będą zawierały wprowadzone hasła kluczowe. Można też przewijać pełną listę w celu znalezienia odpowiedniego polecenia. W celu dodania polecenia do skryptu zdarzenia, należy je zaznaczyć za pomocą myszki lub podświetlić przy pomocy klawiatury i nacisnąć klawisz _Enter_.  

## Kopiuj / Wklej

Obok nazwy zdarzenia, po prawej stronie widnieje strzałka w dół. Jej rozwinięcie powoduje wyświetlenie menu kontekstowego, przy pomocy którego można skopiować polecenie do schowka. Kliknięcie strzałki w dół na innym poleceniu pozwoli wkleić polecenie ze schowka przed lub po wybranym poleceniu, lub po prostu pozwoli to na wklejenie wartości z pierwszego polecenia do drugiego.

<span class="new">Nowość od wer. 1.2.0</span>

Można także przytrzymać klawisz _Alt_, aby zmienić wszystkie przyciski _dodaj polecenie_ na _wklej polecenie_, co pozwala na łatwe wklejenie skopiowanych poleceń do poleceń kontrolnych z rozgałęzieniem.

## Polecenia tekstowe

- **Tekst: wiadomość**  
Polecenie wyświetla ramkę z dialogiem na dole ekranu. Jedna wiadomość maksymalnie może zawierać trzy wiersze, każdy wiersz mieści 18 znaków (czyli łącznie można mieć 52 znaki). Prawdopodobnie będzie to jedno z najczęstszych używanych poleceń skryptowych do interakcji z aktorami w grze.  
Gdy jest wyświetlony tekst, okno dialogowe jest wyświetlane od dołu do góry, po czym następuje wyświetlenie tekstu metodą literka po literce i po interakcji gracza okno dialogowe znika przesuwając się po prostu w dół.
  <img src="/img/events/display-dialogue.png" class="event-preview" />
  <img src="/img/events/display-dialogue-preview.png" class="event-preview" />
  <br />

  - Przy pomocy przycisku _+_ możesz utworzyć sekwencję dialogu, która zostanie zamknięta dopiero po wyświetleniu ostatniej wiadomości.  
    <span class="new">Newość od wer. 1.2.0</span>
  - Możesz wyświetlić wartość dowolnych zmiennych w polu tekstowym, używając identyfikatora zmiennej pokazanego w selektorze zmiennych (np. `$L0$` dla zmiennej lokalnej 0 i `$182$` dla zmiennej globalnej 182).
  - Możesz opcjonalnie wyświetlić grafikę (awatara) po lewej stronie okna dialogowego, klikając w opcję _dodaj grafikę (awatara)_ i wybierając obraz do użycia. Możesz wybrać dowolną grafikę z _obiektów_ w grze. Grafika musi zawierać tylko jedną klatkę (`16px` x` 16px`). Ustawienie awatara zmniejszy liczbę dostępnych znaków w linii do 16 we wszystkich liniach.

- **Tekst: pokaż wybór**  
  Polecenie przedstawia dwie opcje, gracz może dokonać wyboru. Wybrana zmienna zostanie ustawiona na wartość _Prawda_, jeżeli zostanie wybrana pierwsza opcja, i na _Fałsz_, jeśli wybrana zostanie druga opcja.
  <img src="/img/events/display-multiple-choice.png" class="event-preview" />
  <img src="/img/events/display-multiple-choice-preview.png" class="event-preview" />

- **Tekst: wyświetl menu** <span class="new">Newość od wer. 1.2.0</span>  
  Polecenie wyświetla menu zawierające wiele opcji i ustawia określoną zmienną na wartość wybranej opcji. Maksymalna ilość znaków dla każdej pozycji menu, wynosi `6` znaków.
  Opcja ta pozwala na wybranie schematu wyboru, `Menu` (pokazane poniżej), wyświetla opcje jako pojedyncza kolumna po prawej stronie ekranu gry. `Dialog` wyświetla okno dialogowe na pełnej szerokości ekranu z dwoma kolumnami. Opcjonalnie można ustawić przycisk `B`, aby zamknąć menu, ustawiając zmienną na `0`, a także można sprawić, że ostatni element menu zwróci `0` po wybranej opcji.
  <img src="/img/events/menu.png" class="event-preview" />
  <img src="/img/events/menu-preview.png" class="event-preview" />

- **Text: szybkość animacji**  
  Polecenie odpowiada za ustawienia wyświetlanego tekstu. Należy ustawić szybkość wyświetlenia okna wiadomości, szybkość zniknięcia okna wiadomości, oraz szybkośc wyświetlania tekstu.
  <img src="/img/events/text-animation-speed.png" class="event-preview" />

## Polecenia sceny

- **Scena: zmień scenę (teleport)**  
  Przejście do nowej sceny, z określonymi współrzędnymi i kierunkiem dla gracza. Do zdarzenia zostanie dorysowana niebieska linia łącząca zdarzenie teleportu z jego miejscem docelowym, gdzie na końcu zostanie umieszczona ikona wraz z kierunkiem obrotu <img src="/img/screenshots/destination-end.png" style="height:12px"/>. Istnieje możliwość przeciągnięcia tej ikony między scenami w celu dokonania modyfikacji zdarzenia.
  <img src="/img/events/switch-scene.png" class="event-preview" />
  <img src="/img/events/switch-scene-preview.png" class="event-preview" />

- **Scena: zapisz scenę do pamięci**  
  Polecenie przechowuje aktualną scenę jak i położenie gracza w swojej pamięci. Opcja ta pozwala na późniejszy powrót do tej dokładnej lokalizacji za pomocą polecenia _scena: wczytaj scenę z pamięci_. Polecenie te będzie przydatne podczas tworzenia wszelkich systemów menu, które wymagają przejścia na inną scenę (scenę menu). Wypadało by przed poleceniem teleportu, wprowadzić właśnie polecenie do zapisania sceny do pamięci, po to, aby gracz mógł powrócić na swoje miejsce przy pomocy polecenia _wczytaj scenę z pamięci_.
  <img src="/img/events/scene-stack-push.png" class="event-preview" />

- **Scena: wczytaj scenę z pamięci**  
  Przejście do ostatniej zapisanej sceny, która znajduje się w pamięci przy użyciu określonej prędkości przenikania. Poprzednia scena zostanie następnie usunięta z pamięci, więc przy następnym użyciu tego zdarzenia nastąpi przejście do sceny wcześniejszej. 
  <img src="/img/events/scene-stack-pop.png" class="event-preview" />

- **Scene: wczytaj pierwszą z pamięci**  
  Przejście do pierwszej sceny zapisanej w pamięci, na przykład jeśli masz wiele poziomów scen menu, możesz użyć jej, aby natychmiast powrócić do sceny gry. To wydarzenie spowoduje opróżnienie pamięci z zapisanych scen.
  <img src="/img/events/scene-stack-pop-all.png" class="event-preview" />

- **Scena: wyczyść stan pamięci**  
  Czyści pamięć ze scen, aby nie można było przywrócić do poprzednich scen.
  <img src="/img/events/scene-stack-clear.png" class="event-preview" />

## Polecenia zmiennej

Każdy projekt posiada 512 zmiennych, które można współdzielić we wszystkich skryptach w grze. <span class="new">Nowość od wer. 1.2.0</span> Dodatkowo każdy _aktor_, _rozruch_ i _scena_ posiadają 4 lokalne zmiennej, do których dostęp ma tylko ten konkretny byt (czyli tzw. zmienne własne). Zmienne lokalne (zmienne własne) są przydatne do śledzenia stanu specyficznego tego zdarzenia, np. Ile razy odbyła się rozmowa z daną postacią, albo czy skrzynia jest otwarta lub zamknięta.

- **Zmienna: ustaw na 'Prawda'**  
  Ustawienie wartości wybranej zmiennej na _Prawda_.  
  <img src="/img/events/variable-true.png" class="event-preview" />

- **Zmienna: ustaw na 'Fałsz'**  
  Ustawienie wartości wybranej zmiennej na _Fałsz_.  
  <img src="/img/events/variable-false.png" class="event-preview" />

- **Zmienna: ustaw wartość**  
  Ustawienie wybranej zmiennej na konkretną wartość liczbową.  
  <img src="/img/events/variable-value.png" class="event-preview" />

- **Zmienna: zwiększ o 1**  
  Polecenie zwiększy wartość określonej zmiennej o jeden, maksymalna wartość wynosi _255_. Jeżeli poprzednia wartość wynosiła _Fałsz_, to teraz będzie to _1_ (a także _Prawda_). Jeżeli poprzednia wartość była _Prawda_, to teraz będzie _2_.
  <img src="/img/events/variable-increment.png" class="event-preview" />

- **Zmienna: zmniejsz o 1**  
  Polecenie zmniejszy wartość określonej zmiennej o jeden, minimalna wartość wynosi _0_. Jeżeli poprzednia wartość wynosiła _prawda_, to teraz będzie to _0_ (a także _Fałsz_).
  <img src="/img/events/variable-decrement.png" class="event-preview" />

- **Zmienna: funkcje matematyczne**  
  Polecenie umożliwia wykonanie różnych funkcji matematycznych na zmiennej w celu manipulacji jej wartością. Można dodawać, odejmować, mnożyć, dzielić, a także użyć funkcji modulo (reszty z dzielenia). Jako wartość może posłużyć się konkretna liczba, liczba losowa, albo liczba zawarta w innej zmiennej.
  _Uwaga:_ Zasięg wartości zmiennej wynosi: `0-255`. Jeżeli wartość wyjdzie po za zasięg, to wartość zostanię zapętlona (np. `254,255,0,1,2[...]`).  
  <img src="/img/events/variable-math.png" class="event-preview" />

- **Zmienna: ustaw flagę** <span class="new">Nowość od wer. 1.2.0</span>  
  Ustaw wartość zmiennej, włączając pojedyncze bity liczby 8-bitowej. Umożliwia zapisanie 8 wartości prawda / fałsz w jednej zmiennej. Ustawienie flag zastąpi poprzednią wartość zmiennej.
  <img src="/img/events/variable-flags-set.png" class="event-preview" />

- **Zmienna: dodaj flagę** <span class="new">Nowość od wer. 1.2.0</span>  
  Polecenie ustawia zaznaczone flagi jako _Prawda_ na wybranej zmiennej. Wszystkie flagi, które są nie zaznaczone, będą przetrzymywały dalej swoją poprzednią ustaloną wartość.
  <img src="/img/events/variable-flags-add.png" class="event-preview" />

- **Zmienna: czyść flagi** <span class="new">Nowość od wer. 1.2.0</span>  
  Polecenie ustawia zaznaczone flagi jako _Fałsz_ na wybranej zmiennej. Wszystkie flagi, które są nie zaznaczone, będą przetrzymywały dalej swoją poprzednią ustaloną wartość.
  <img src="/img/events/variable-flags-clear.png" class="event-preview" />

- **Zmienna: resetuj wszystkie zmienne do 'Fałsz'**  
  Polecenie resetuje wszystkie zmienne, które zostały użyte w projekcie i ustawia je na wartość _Fałsz_.  
  <img src="/img/events/variable-reset-all.png" class="event-preview" />

## Polecenia warrunku (kontrolne)

- **Warunek: zmienna jest 'Prawda'**  
  Polecenie warunkowe, które wykona polecenie znajdujące się wewnątrz skryptu, jeżeli podana zmienna jest ustawiona jako _Prawda_.
  <img src="/img/events/if-true.png" class="event-preview" />

- **Warunek: zmienna jest 'Fałsz'**  
  Polecenie warunkowe, które wykona polecenie znajdujące się wewnątrz skryptu, jeżeli podana zmienna jest ustawiona jako _Fałsz_.
  <img src="/img/events/if-false.png" class="event-preview" />

- **Warunek: zmienna porównuje się do wartości**  
  Polecenie warunkowe, które wykona polecenie znajdujące się wewnątrz skryptu, jeżeli podana zmienna spełnia zasadę taką jak "jest równa", "większa", "mniejsza" itp. do podanej wartości.
  <img src="/img/events/if-variable-value.png" class="event-preview" />

- **Warunek: zmienna porównuje się do zmiennej**  
  Polecenie warunkowe, które wykona polecenie znajdujące się wewnątrz skryptu, jeżeli podana zmienna spełnia zasadę taką jak "jest równa", "większa", "mniejsza" itp. do podanej zmiennej.
  <img src="/img/events/if-variable-variable.png" class="event-preview" />

- **Warunek: zmienna ma flagę** <span class="new">Nowość od wer. 1.2.0</span>  
  Polecenie warunkowe, które wykona polecenie znajdujące się wewnątrz skryptu, jeżeli flaga wybranej zmiennej jest ustawiona jako _Prawda_.
  <img src="/img/events/if-variable-flag.png" class="event-preview" />

- **Warunek: wciśnięty przycisk joypada**  
  Polecenie warunkowe, które wykona polecenie znajdujące się wewnątrz skryptu, jeżeli w danym momencie wykonywalnego skryptu zostaną naciśnięte podane klawisze. _Uwaga_: Polecenie te nie czeka na wciśnięcie przez użytkownika, skrypt jest po prostu wykonywalny. Jeżeli skrypt ma poczekać na wciśnięcie przycisku, to należy użyć polecenia _Przycisk Joypad: czekaj na przycisk_. Mimo tego, skrypt jest wykonany tylko raz. Jeżeli chcesz uzyskać efekt, by skrypt został uruchamiany za każdym razem, to zalecane jest zastosowanie polecenia _Przycisk Joypad: przypisz zdarzenie_. Conditionally execute part of the script if the specified joypad input is currently pressed. Will not wait for user input so use directly after a _Joypad Input: Pause Script Until Pressed_ event if waiting is required. Event will only execute once, if you wish to run a script every time a button is pressed use _Joypad Input: Attach Script To Button_ instead.
  <img src="/img/events/if-joypad-input.png" class="event-preview" />

- **Warunek: współrzędne aktora**  
  Polecenie warunkowe, które wykona polecenie znajdujące się wewnątrz skryptu, jeżeli wskazany aktor znajdzie się w określonej pozycji (X i Y) na scenie.
  <img src="/img/events/if-actor-position.png" class="event-preview" />

- **Warunek: kierunek obrotu aktora**  
  Polecenie warunkowe, które wykona polecenie znajdujące się wewnątrz skryptu, jeżeli wskazany aktor będzie zwrócony w danym kierunku. 
  <img src="/img/events/if-actor-direction.png" class="event-preview" />

- **Warunek: stan gry zapisano**  
  Polecenie warunkowe, które wykona polecenie znajdujące się wewnątrz skryptu, jeżeli istnieje zapisany stan gry.
  <img src="/img/events/if-game-saved.png" class="event-preview" />

- **Przełącznik** <span class="new">Nowość od wer. 1.2.0</span>  
  Polecenie warunkowe zawierające wiele opcji w zależności od wartości określonej zmiennej. Najpierw należy wybrać ile opcji ma zostać porównane do zmiennej, a następnie ustawić wartość do porównania i jakie polecenia mają zostać wykonane po dopasowanej wartości.
  <img src="/img/events/switch.png" class="event-preview" />

- **Pętla**  
  Polecenie pętli, to skrypt powtarzający w kółko podaną część kodu (stąd też pętla). Należy pamiętać, aby zastosować jakieś wyjście z pętli, gdyż w przeciwnym wypadku gracz utknie w danym momencie (i gra się zawiesi). W celu zatrzymania pętli można użyć polecenia _skrypt: zatrzymaj zdarzenie_ albo _scena: zmień scenę (teleport)_.
  <img src="/img/events/loop.png" class="event-preview" />

- **Etykieta: określ / Etykieta: skocz do** <span class="new">Nowść od wer. 1.2.0</span>  
  Polecenie _Etykieta: określ_ definiuje pewne miejsce w kodzie skryptu, do którego można wrócić przy pomocy polecenia _Etykieta: skocz do_.
  _Uwaga:_ nazwa etykiety musi być identyczna (przy poleceniach określenia jak i skocz do) by polecenia mogły działać. **Zalecana ostrożność!**
  <img src="/img/events/label-goto.png" class="event-preview" />

- **Grupa poleceń**  
  Owe polecenie nie jest kodem wykonywalnym, który można odczuć w grze, ale pozwala na zgrupowanie sekwencji poleceń w celu nadania im etykiety (strzałeczka w dół po prawej stronie i z menu _zmień nazwę polecenia_). Pozwala to zwinąć polecenia w jeden blok.
  <img src="/img/events/event-group.png" class="event-preview" />

- **Skrypt: zatrzymaj zdarzenie (stop)**  
  Polecenie zatrzymuje wykonywanie obecnego zdarzenia.
  <img src="/img/events/script-stop.png" class="event-preview" />

- **Disable Else** <span class="new">Nowość od wer. 1.2.0</span>  
  Jeśli nie potrzebujesz dodatkowej opcji _w innym wypadku_ sprawdzającej co się stanie, jeżeli warunek nie zostanie spełniony to można tę opcję wyłączyć. Wystarczy z menu polecenia (po prawej stronie, strzałka w dół) wybrać opcję z menu _wyłącz opcję inny wypadek_. To samo menu może być użyte do przywrócenia opcji _w innym wypadku_, jeśli zajdzie taka potrzeba w późniejszym czasie.
  <img src="/img/events/disable-else.png" class="event-preview" />

## Polecenia ekranu (kamery/punktu skupienia)

- **Ekran: przesuń**  
  Polecenie przesuwa punkt skupienia ekranu w inne, wyznaczone miejsce.
  <img src="/img/events/camera-move-to.png" class="event-preview" />

- **Ekran: powrót do gracza**  
  Polecenie przywraca punkt skupienia na środku gracza, blokując daną pozycję, by gracz był zawsze w centrum.
  <img src="/img/events/camera-lock-to-player.png" class="event-preview" />

- **Ekran: wstrząs**  
  Polecenie wywołuje efekt wstrząsu ekranu, który może trwać 10 sekund.  
  <img src="/img/events/camera-shake.png" class="event-preview" />


## Polecenia ekranu (jako całości)

- **Ekran: wyczyszczenie**  
  Ekran zostaje wyczyszczony do białego koloru (jest to rodzaj przejścia).
  <img src="/img/events/screen-fade-in.png" class="event-preview" />

- **Ekran: pojawienie**  
  Ekran zostaje wyświetlony ponownie, efekt powrotu z białego wyczyszczenia. 
  <img src="/img/events/screen-fade-out.png" class="event-preview" />

## Polecenia aktora

- **Actor: ustaw kierunek (obrót)**  
  Polecenie służy do ustawienia konkretnego aktora w wybranym kierunku.  
  <img src="/img/events/actor-set-direction.png" class="event-preview" />
  <img src="/img/events/actor-set-direction-preview.png" class="event-preview" />

- **Aktor: ustaw kierunek (obrót) ze zmiennej** <span class="new">Nowość od wer. 1.2.0</span>  
  Polecenie służy do ustawienia konkretnego aktora w wybranym kierunku przy pomocy wartości zmiennej.
  <img src="/img/events/actor-direction-variables.png" class="event-preview" />

- **Aktor: ustaw położenie**  
  Polecenie pozwala na zmianę położenia aktora na scenie, poprzez wskazanie nowych współrzędnych.  
  <img src="/img/events/actor-position.png" class="event-preview" />

- **Aktor: ustaw położenie ze zmiennej**  
  Polecenie pozwala na zmianę położenia aktora na scenie przy pomocy wartości zmiennych.  
  <img src="/img/events/actor-position-variables.png" class="event-preview" />

- **Aktor: ustaw położenie (względnie)**  
  Polecenie służy do ustawienia nowego położenia dla wybranego aktora. Set the position in the scene of the specified actor relative to their current position.  
  <img src="/img/events/actor-relative-position.png" class="event-preview" />

- **Aktor: przesuń**  
  Polecenie sprawi by wybrany aktor poszedł do określonej pozycji na scenie. Aktor zignoruje wszystkie kolizje na ścieżce, zatem aby uniknąć przeszkód na scenie, należy połączyć wiele poleceń (_aktor: przesuń_), w celu określenia dokładnej ścieżki.
  <img src="/img/events/actor-move-to.png" class="event-preview" />

- **Aktor: przesuń (względnie)**  
  Polecenie sprawy by wybrany aktor poszedł do określonej pozycji na scenie (względnie).
  <img src="/img/events/actor-relative-move.png" class="event-preview" />

- **Aktor: przesuń ze zmiennej**  
  Polecenie sprawy by wybrany aktor poszedł do określonej pozycji na scenie przy pomocy wartości wskazanych zmiennych.  
  <img src="/img/events/actor-move-to-variables.png" class="event-preview" />

- **Aktor: zapisz położenie do zmiennych**  
  Polecenie zapisuje aktualne położenie wybranego aktora do dwóch wskazanych zmiennych.  
  <img src="/img/events/actor-store-position.png" class="event-preview" />

- **Aktor: zapisz obrót w zmiennej** <span class="new">Nowość od wer. 1.2.0</span>  
  Polecenie zapisuje aktualny kierunek (obrót) aktora do wskazanej zmiennej.  
  <img src="/img/events/actor-store-direction.png" class="event-preview" />

- **Aktor: odepchnij od gracza**  
  Polecenie odpycha aktualnego aktora od gracza o jedno pole. Istnieje możliwość wykonania odepchnięcia, aż do momentu napotkania przeszkody.
  <img src="/img/events/actor-push.png" class="event-preview" />

- **Aktor: chmurka z ikoną**  
  Polecenie wyświetla chmurkę, która wyświetla drobną ikonę nad wybranym aktorem. Zazwyczaj można wyświetlić emocje jak np _Wykrzyknik(!)_, _Zapytanie(?)_, _Serduszko_, _Przerwę(...)_, _Zdenerwowanie_, _Pot_, _Muzyczną nutę_ oraz _sen_. Istnieje możliwość zastąpienia tych grafik, jak i innych podstawowych grafik. Na ten temat można poczytać w dziale [Elementy interfejsu](/docs/ui-elements#emotes-png).  
  <img src="/img/events/actor-emote.png" class="event-preview" />
  <img src="/img/events/actor-emote-preview.png" class="event-preview" />

- **Aktor: klatka animacji**  
  Ustawienie konkretnej klatki animacji dla wybranego aktora.  
  <img src="/img/events/actor-set-frame.png" class="event-preview" />

- **Aktor: klatka animacji ze zmiennej** <span class="new">Nowość od wer. 1.2.0</span>  
  Ustawienie konkretnej klatki animacji dla wybranego aktora przy pomocy wartości zmiennej.
  <img src="/img/events/actor-set-frame-variable.png" class="event-preview" />

- **Aktor: szybkość animacji**  
  Ustawienie szybkości animacji dla wybranego aktora.  
  <img src="/img/events/actor-animation-speed.png" class="event-preview" />

- **Aktor: szybkość ruchu**  
  Ustawienie szybkości ruchu dla wybranego aktora.   
  <img src="/img/events/actor-movement-speed.png" class="event-preview" />

- **Aktor: zmień grafikę gracza**  
  Polecenie zmienia ustaloną grafikę dla gracza, która została ustalona w _edytorze projektu_. Zmiana grafik gracza jest przydzielona na stałe i nawet będzie się utrzymywać przy zmianie scen i przejścia. Jeżeli zmiana grafiki ma być tylko tymczasowa, to należy pamiętać, aby ponownie użyć tego polecenia w celu przywrócenia właściwej grafiki.  
  <img src="/img/events/actor-player-spritesheet.png" class="event-preview" />

- **Aktor: wyłącz kolizję** <span class="new">Nowość od wer. 1.2.0</span>  
  Polecenie wyłącza ustawienia kolizji na wybranym aktorze. Jeżeli zostanie wybrany aktor to gracz będzie mógł przez niego przejść. Jeżeli zostanie wybrany gracz, to gracz będzie w stanie przechodzić przez wszystko (i aktorów i kolizje na scenie).
  _Uwaga:_ Nawet jeżeli kolizja zostaje wyłączona, to istnieje nadal możliwość interakcji z aktorami.
  <img src="/img/events/actor-collisions-disable.png" class="event-preview" />

- **Aktor: włącz kolizję** <span class="new">Nowość od wer. 1.2.0</span>  
  Polecenie uruchamia (włącza) ustawienia kolizji na wybranym aktorze.
  <img src="/img/events/actor-collisions-enable.png" class="event-preview" />

- **Aktor: wywołaj zdarzenie**  
  Polecenie wywołuje skrypt wskazanego aktora, tzw. na zawołanie. Działa to na zasadzie, jakby doszło do interakcji między graczem, a wybranym zdarzeniem.
  <img src="/img/events/actor-invoke.png" class="event-preview" />

- **Aktor: schowaj (niewidzialny)**  
  Polecenie chowa wybranego aktora, by ten nie był już widoczny na scenie. Ukryci aktorzy nie będą powodowali kolizji i też nie można z nimi wchodzić w interakcje. Można ukryć aktorów (jak np. Gracza), po to by w skrypcie uruchomienia sceny można było tworzyć ekran menu czy tytuł gry.
  <img src="/img/events/actor-hide.png" class="event-preview" />

- **Actor: pokaż (widzialny)**  
  Polecenie wyświetla wybranego aktora, powodując, że będzie znowu widoczny na scenie i można było z nim wchodzić w interakcje.  
  <img src="/img/events/actor-show.png" class="event-preview" />

## Polecenie obiektów

- **Obiekty: schowaj wszystkie**  
  Polecenie ukrywa wszystkie obiekty na scenie. Polecenie może okazać się przydatne podczas tworzenia scenki przerywnikowej, gdzie gracz nie powinien być widoczny poprzez dodanie do scenariusza początkowego sceny.
  <img src="/img/events/sprites-hide.png" class="event-preview" />

- **Obiekty: wyświetl wszystkie**  
  Polecenie wyświetla wszystkie obiekty na scenie, które zostały wcześniej schowane.  
  <img src="/img/events/sprites-show.png" class="event-preview" />

## Polecenia narzuty

- **Narzuta: pokaż (widzialna)**  
  Polecenie wyświetla czarne bądź białe okno ekranu gry. Można użyć jako rodzaj zaciemnienia, a następnie odsłonięcia części tła sceny, np. ekranu z logo dla projektu.
  <img src="/img/events/overlay-show.png" class="event-preview" />

- **Narzuta: schowaj (niewidzialna)**  
  Polecenie sprawia, że narzuta staje się niewidzalna.
  <img src="/img/events/overlay-hide.png" class="event-preview" />

- **Narzuta: przesuń**  
  Polecenie przenosi narzutę w nowe miejsce na ekranie.
  <img src="/img/events/overlay-move-to.png" class="event-preview" />

## Polecenia przycisku Joypada

- **Przycisk Joypad: czekaj na przycisk**  
  Wykonywalny skrypt jest wstrzymany i czeka na wciśnięcie określonego przycisku z Joypada (jak np. góra, dół, A/B).
  <img src="/img/events/joypad-pause.png" class="event-preview" />

- **Przycisk Joypad: przypisz zdarzenie**  
  Wykonanie określonego skryptu za każdym razem, gdy zostanie naciśnięty określony przycisk joypada. Jeżeli skrypt zostanie przypisany do kierunku lub przycisku _A_, to ten skrypt zastąpi domyślne działanie w grze.
  <img src="/img/events/joypad-attach.png" class="event-preview" />

- **Przycisk Joypad: usuń przypisane zdarzenie**  
  Polecenie usuwa przypisany skrypt z przycisku joypada. Polecenie to przywraca domyślną funkcję dla danego przycisku.
  <img src="/img/events/joypad-attach.png" class="event-preview" />

## Polecenia muzyki

- **Muzyka: odegraj utwór**  
  Odtwarza plik muzyczny, opcjonalnie zapętla plik po zakończeniu.  
  <img src="/img/events/music-play.png" class="event-preview" />

- **Muzyka: stop**  
  Wstrzymuje aktualny odtwarzany plik muzyczny.  
  <img src="/img/events/music-stop.png" class="event-preview" />

## Sound Events

- **Sound: Play Effect** <span class="new">Nowość od wer. 1.2.0</span>  
  Play a sound effect, choose from playing a beep with a given pitch, a tone with a given frequency or cymbal crash. Using [Custom Events](/docs/custom-events) you can combine multiple effects into a single reusable event to make jingles.  
  <img src="/img/events/sound-tone.png" class="event-preview" />
  <img src="/img/events/sound-beep.png" class="event-preview" />
  <img src="/img/events/sound-crash.png" class="event-preview" />

## Polecenia czasowe

- **Czekaj**  
  Wstrzymanie wykonywalnego skryptu, wstrzymanie może trwać do 10 sekund.  
  <img src="/img/events/wait.png" class="event-preview" />

- **Stoper: ustaw stoper** <span class="new">Nowość od wer. 1.2.0</span>  
  Polecenie uruchamia niewidoczny stoper i w momencie kiedy dobiegnie koniec czasu, zostaje uruchomiony skrypt. Należy pamiętać, że stoper działa we tle non stop i nawet jak dobiegnie do końca, to zostanie odtworzony na nowo. W celu przerwania stopera należy użyć polecenia _stoper: usuń stoper_ albo po prostu zmienić scenę przy pomocy teleportu.
  <img src="/img/events/timer-set.png" class="event-preview" />

- **Stoper: resetuj stoper** <span class="new">Nowość od wer. 1.2.0</span>  
  Polecenie zresetuje licznik z powrotem do zera. Skrypt zostanie wywołany ponownie po pierwotnie określonym czasie.
  <img src="/img/events/timer-restart.png" class="event-preview" />

- **Stoper: usuń stoper** <span class="new">Nowość od wer. 1.2.0</span>  
  Polecenie wstrzyma i usunie wykonywanie stopera.
  <img src="/img/events/timer-disable.png" class="event-preview" />

## Polecenia stanu gry

- **Stan gry: zapisz**  
  Polecenie zapisuje aktualny stan gry.
  <img src="/img/events/data-save.png" class="event-preview" />

- **Stan gry: wczytaj**  
  Polecenie wczytuje poprzedni stan gry. 
  <img src="/img/events/data-load.png" class="event-preview" />

- **Stan gry: czyść**  
  Polecenie usuwa wszelakie wcześniejsze zapisane stany gry.
  <img src="/img/events/data-clear.png" class="event-preview" />

## Polecenia inne

- **Komentarz** <span class="new">Nowość od wer. 1.2.0</span>  
  Polecenie nie zapewnia żadnej funkcji w grze, ale umożliwia pozostawienie notatek w skryptach. Wpisany tekst jest automatycznie ustawiany w tytule zdarzenia, dzięki czemu można zwinąć komentarz i nadal czytać jego treść.
  <img src="/img/events/comment.png" class="event-preview" />  
  Zawsze można przy pomocy menu (po prawej stronie polecenia, strzałka w dół) wybrać opcję _wyłącz polecenie_, aby ono nie było brane pod uwagę. Można _wyłączać_ i _włączać_ dowolne polecenia. 
  Zdarzenia wyłączone zostaną pominięte podczas uruchamiania w grze.
  <img src="/img/events/event-disable-menu.png" class="event-preview" />
  <img src="/img/events/event-disabled.png" class="event-preview" />
