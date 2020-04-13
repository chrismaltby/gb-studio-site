---
title: "Skryptowanie (polecenia zdarzenia)"
draft: false
next: "/docs/custom-events"
nextTitle: "W³asne zdarzenia"
---

Skrypty umo¿liwiaj¹ dynamiczne kontrolowanie czêœci gry na podstawie interakcji gracza. Za ich pomoc¹ mo¿na ³¹czyæ sceny, prowadziæ dialogi z postaciami albo tworzyæ scenki przerywnikowe.

Kiedy jest zaznaczona scena, aktor lub rozruch w _œwiecie gry_, to _boczny pasek_ programu bêdzie zawiera³ przycisk _dodaj polecenie_ w prawym dolnym rogu. Przy pomocy _dodaj polecenie_ mo¿na przypisaæ polecenia do wykonania. Jeœli polecenia s¹ ju¿ wymienione w tym miejscu, s¹ one przeprowadzane od góry do do³u, jedno po drugim.

Podczas ustalenia poleceñ dla aktorów, trzeba pamiêtaæ, ¿e polecenia zostan¹ uruchomione w momencie gdy gracz stanie obok aktora i naciœnie przycisk interakcji. Polecenia w zdarzenia typu _rozruch_, zostan¹ uruchomione w momencie, gdy gracz stoi na danym polu rozruchu, co mo¿e okazaæ siê przydatne podczas tworzenia drzwi miêdzy scenami. Polecenia, które s¹ ustalane w scenach, s¹ uruchamiane natychmiastowo po za³adowaniu danej sceny. Opcja ta przydatna jest do konfiguracji sceny na podstawie wartoœci zmiennych lub do rozpoczêcia scenki przerywnikowej.

## Dodaj polecenie

Po naciœniêciu przycisku _dodaj polecenie_ zostanie wyœwietlone rozwijana lista menu, zawieraj¹ca polecenia do dodania. W momencie pisania na klawiaturze nazwy polecenia, zostanie uruchomiony filtr i zostan¹ wyœwietlone tylko te polecenia, które bêd¹ zawiera³y wprowadzone has³a kluczowe. Mo¿na te¿ przewijaæ pe³n¹ listê w celu znalezienia odpowiedniego polecenia. W celu dodania polecenia do skryptu zdarzenia, nale¿y je zaznaczyæ za pomoc¹ myszki lub podœwietliæ przy pomocy klawiatury i nacisn¹æ klawisz _Enter_.  

## Kopiuj / Wklej

Obok nazwy zdarzenia, po prawej stronie widnieje strza³ka w dó³. Jej rozwiniêcie powoduje wyœwietlenie menu kontekstowego, przy pomocy którego mo¿na skopiowaæ polecenie do schowka. Klikniêcie strza³ki w dó³ na innym poleceniu pozwoli wkleiæ polecenie ze schowka przed lub po wybranym poleceniu, lub po prostu pozwoli to na wklejenie wartoœci z pierwszego polecenia do drugiego.

<span class="new">Nowoœæ od wer. 1.2.0</span>

Mo¿na tak¿e przytrzymaæ klawisz _Alt_, aby zmieniæ wszystkie przyciski _dodaj polecenie_ na _wklej polecenie_, co pozwala na ³atwe wklejenie skopiowanych poleceñ do poleceñ kontrolnych z rozga³êzieniem.

## Polecenia tekstowe

- **Tekst: wiadomoœæ**  
Polecenie wyœwietla ramkê z dialogiem na dole ekranu. Jedna wiadomoœæ maksymalnie mo¿e zawieraæ trzy wiersze, ka¿dy wiersz mieœci 18 znaków (czyli ³¹cznie mo¿na mieæ 52 znaki). Prawdopodobnie bêdzie to jedno z najczêstszych u¿ywanych poleceñ skryptowych do interakcji z aktorami w grze.  
Gdy jest wyœwietlony tekst, okno dialogowe jest wyœwietlane od do³u do góry, po czym nastêpuje wyœwietlenie tekstu metod¹ literka po literce i po interakcji gracza okno dialogowe znika przesuwaj¹c siê po prostu w dó³.
  <img src="/img/events/display-dialogue.png" class="event-preview" />
  <img src="/img/events/display-dialogue-preview.png" class="event-preview" />
  <br />

  - Przy pomocy przycisku _+_ mo¿esz utworzyæ sekwencjê dialogu, która zostanie zamkniêta dopiero po wyœwietleniu ostatniej wiadomoœci.  
    <span class="new">Newoœæ od wer. 1.2.0</span>
  - Mo¿esz wyœwietliæ wartoœæ dowolnych zmiennych w polu tekstowym, u¿ywaj¹c identyfikatora zmiennej pokazanego w selektorze zmiennych (np. `$L0$` dla zmiennej lokalnej 0 i `$182$` dla zmiennej globalnej 182).
  - Mo¿esz opcjonalnie wyœwietliæ grafikê (awatara) po lewej stronie okna dialogowego, klikaj¹c w opcjê _dodaj grafikê (awatara)_ i wybieraj¹c obraz do u¿ycia. Mo¿esz wybraæ dowoln¹ grafikê z _obiektów_ w grze. Grafika musi zawieraæ tylko jedn¹ klatkê (`16px` x` 16px`). Ustawienie awatara zmniejszy liczbê dostêpnych znaków w linii do 16 we wszystkich liniach.

- **Tekst: poka¿ wybór**  
  Polecenie przedstawia dwie opcje, gracz mo¿e dokonaæ wyboru. Wybrana zmienna zostanie ustawiona na wartoœæ _Prawda_, je¿eli zostanie wybrana pierwsza opcja, i na _Fa³sz_, jeœli wybrana zostanie druga opcja.
  <img src="/img/events/display-multiple-choice.png" class="event-preview" />
  <img src="/img/events/display-multiple-choice-preview.png" class="event-preview" />

- **Tekst: wyœwietl menu** <span class="new">Newoœæ od wer. 1.2.0</span>  
  Polecenie wyœwietla menu zawieraj¹ce wiele opcji i ustawia okreœlon¹ zmienn¹ na wartoœæ wybranej opcji. Maksymalna iloœæ znaków dla ka¿dej pozycji menu, wynosi `6` znaków.
  Opcja ta pozwala na wybranie schematu wyboru, `Menu` (pokazane poni¿ej), wyœwietla opcje jako pojedyncza kolumna po prawej stronie ekranu gry. `Dialog` wyœwietla okno dialogowe na pe³nej szerokoœci ekranu z dwoma kolumnami. Opcjonalnie mo¿na ustawiæ przycisk `B`, aby zamkn¹æ menu, ustawiaj¹c zmienn¹ na `0`, a tak¿e mo¿na sprawiæ, ¿e ostatni element menu zwróci `0` po wybranej opcji.
  <img src="/img/events/menu.png" class="event-preview" />
  <img src="/img/events/menu-preview.png" class="event-preview" />

- **Text: szybkoœæ animacji**  
  Polecenie odpowiada za ustawienia wyœwietlanego tekstu. Nale¿y ustawiæ szybkoœæ wyœwietlenia okna wiadomoœci, szybkoœæ znikniêcia okna wiadomoœci, oraz szybkoœc wyœwietlania tekstu.
  <img src="/img/events/text-animation-speed.png" class="event-preview" />

## Polecenia sceny

- **Scena: zmieñ scenê (teleport)**  
  Przejœcie do nowej sceny, z okreœlonymi wspó³rzêdnymi i kierunkiem dla gracza. Do zdarzenia zostanie dorysowana niebieska linia ³¹cz¹ca zdarzenie teleportu z jego miejscem docelowym, gdzie na koñcu zostanie umieszczona ikona wraz z kierunkiem obrotu <img src="/img/screenshots/destination-end.png" style="height:12px"/>. Istnieje mo¿liwoœæ przeci¹gniêcia tej ikony miêdzy scenami w celu dokonania modyfikacji zdarzenia.
  <img src="/img/events/switch-scene.png" class="event-preview" />
  <img src="/img/events/switch-scene-preview.png" class="event-preview" />

- **Scena: zapisz scenê do pamiêci**  
  Polecenie przechowuje aktualn¹ scenê jak i po³o¿enie gracza w swojej pamiêci. Opcja ta pozwala na póŸniejszy powrót do tej dok³adnej lokalizacji za pomoc¹ polecenia _scena: wczytaj scenê z pamiêci_. Polecenie te bêdzie przydatne podczas tworzenia wszelkich systemów menu, które wymagaj¹ przejœcia na inn¹ scenê (scenê menu). Wypada³o by przed poleceniem teleportu, wprowadziæ w³aœnie polecenie do zapisania sceny do pamiêci, po to, aby gracz móg³ powróciæ na swoje miejsce przy pomocy polecenia _wczytaj scenê z pamiêci_.
  <img src="/img/events/scene-stack-push.png" class="event-preview" />

- **Scena: wczytaj scenê z pamiêci**  
  Przejœcie do ostatniej zapisanej sceny, która znajduje siê w pamiêci przy u¿yciu okreœlonej prêdkoœci przenikania. Poprzednia scena zostanie nastêpnie usuniêta z pamiêci, wiêc przy nastêpnym u¿yciu tego zdarzenia nast¹pi przejœcie do sceny wczeœniejszej. 
  <img src="/img/events/scene-stack-pop.png" class="event-preview" />

- **Scene: wczytaj pierwsz¹ z pamiêci**  
  Przejœcie do pierwszej sceny zapisanej w pamiêci, na przyk³ad jeœli masz wiele poziomów scen menu, mo¿esz u¿yæ jej, aby natychmiast powróciæ do sceny gry. To wydarzenie spowoduje opró¿nienie pamiêci z zapisanych scen.
  <img src="/img/events/scene-stack-pop-all.png" class="event-preview" />

- **Scena: wyczyœæ stan pamiêci**  
  Czyœci pamiêæ ze scen, aby nie mo¿na by³o przywróciæ do poprzednich scen.
  <img src="/img/events/scene-stack-clear.png" class="event-preview" />

## Polecenia zmiennej

Ka¿dy projekt posiada 512 zmiennych, które mo¿na wspó³dzieliæ we wszystkich skryptach w grze. <span class="new">Nowoœæ od wer. 1.2.0</span> Dodatkowo ka¿dy _aktor_, _rozruch_ i _scena_ posiadaj¹ 4 lokalne zmiennej, do których dostêp ma tylko ten konkretny byt (czyli tzw. zmienne w³asne). Zmienne lokalne (zmienne w³asne) s¹ przydatne do œledzenia stanu specyficznego tego zdarzenia, np. Ile razy odby³a siê rozmowa z dan¹ postaci¹, albo czy skrzynia jest otwarta lub zamkniêta.

- **Zmienna: ustaw na 'Prawda'**  
  Ustawienie wartoœci wybranej zmiennej na _Prawda_.  
  <img src="/img/events/variable-true.png" class="event-preview" />

- **Zmienna: ustaw na 'Fa³sz'**  
  Ustawienie wartoœci wybranej zmiennej na _Fa³sz_.  
  <img src="/img/events/variable-false.png" class="event-preview" />

- **Zmienna: ustaw wartoœæ**  
  Ustawienie wybranej zmiennej na konkretn¹ wartoœæ liczbow¹.  
  <img src="/img/events/variable-value.png" class="event-preview" />

- **Zmienna: zwiêksz o 1**  
  Polecenie zwiêkszy wartoœæ okreœlonej zmiennej o jeden, maksymalna wartoœæ wynosi _255_. Je¿eli poprzednia wartoœæ wynosi³a _Fa³sz_, to teraz bêdzie to _1_ (a tak¿e _Prawda_). Je¿eli poprzednia wartoœæ by³a _Prawda_, to teraz bêdzie _2_.
  <img src="/img/events/variable-increment.png" class="event-preview" />

- **Zmienna: zmniejsz o 1**  
  Polecenie zmniejszy wartoœæ okreœlonej zmiennej o jeden, minimalna wartoœæ wynosi _0_. Je¿eli poprzednia wartoœæ wynosi³a _prawda_, to teraz bêdzie to _0_ (a tak¿e _Fa³sz_).
  <img src="/img/events/variable-decrement.png" class="event-preview" />

- **Zmienna: funkcje matematyczne**  
  Polecenie umo¿liwia wykonanie ró¿nych funkcji matematycznych na zmiennej w celu manipulacji jej wartoœci¹. Mo¿na dodawaæ, odejmowaæ, mno¿yæ, dzieliæ, a tak¿e u¿yæ funkcji modulo (reszty z dzielenia). Jako wartoœæ mo¿e pos³u¿yæ siê konkretna liczba, liczba losowa, albo liczba zawarta w innej zmiennej.
  _Uwaga:_ Zasiêg wartoœci zmiennej wynosi: `0-255`. Je¿eli wartoœæ wyjdzie po za zasiêg, to wartoœæ zostaniê zapêtlona (np. `254,255,0,1,2[...]`).  
  <img src="/img/events/variable-math.png" class="event-preview" />

- **Zmienna: ustaw flagê** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Ustaw wartoœæ zmiennej, w³¹czaj¹c pojedyncze bity liczby 8-bitowej. Umo¿liwia zapisanie 8 wartoœci prawda / fa³sz w jednej zmiennej. Ustawienie flag zast¹pi poprzedni¹ wartoœæ zmiennej.
  <img src="/img/events/variable-flags-set.png" class="event-preview" />

- **Zmienna: dodaj flagê** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Polecenie ustawia zaznaczone flagi jako _Prawda_ na wybranej zmiennej. Wszystkie flagi, które s¹ nie zaznaczone, bêd¹ przetrzymywa³y dalej swoj¹ poprzedni¹ ustalon¹ wartoœæ.
  <img src="/img/events/variable-flags-add.png" class="event-preview" />

- **Zmienna: czyœæ flagi** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Polecenie ustawia zaznaczone flagi jako _Fa³sz_ na wybranej zmiennej. Wszystkie flagi, które s¹ nie zaznaczone, bêd¹ przetrzymywa³y dalej swoj¹ poprzedni¹ ustalon¹ wartoœæ.
  <img src="/img/events/variable-flags-clear.png" class="event-preview" />

- **Zmienna: resetuj wszystkie zmienne do 'Fa³sz'**  
  Polecenie resetuje wszystkie zmienne, które zosta³y u¿yte w projekcie i ustawia je na wartoœæ _Fa³sz_.  
  <img src="/img/events/variable-reset-all.png" class="event-preview" />

## Polecenia warrunku (kontrolne)

- **Warunek: zmienna jest 'Prawda'**  
  Polecenie warunkowe, które wykona polecenie znajduj¹ce siê wewn¹trz skryptu, je¿eli podana zmienna jest ustawiona jako _Prawda_.
  <img src="/img/events/if-true.png" class="event-preview" />

- **Warunek: zmienna jest 'Fa³sz'**  
  Polecenie warunkowe, które wykona polecenie znajduj¹ce siê wewn¹trz skryptu, je¿eli podana zmienna jest ustawiona jako _Fa³sz_.
  <img src="/img/events/if-false.png" class="event-preview" />

- **Warunek: zmienna porównuje siê do wartoœci**  
  Polecenie warunkowe, które wykona polecenie znajduj¹ce siê wewn¹trz skryptu, je¿eli podana zmienna spe³nia zasadê tak¹ jak "jest równa", "wiêksza", "mniejsza" itp. do podanej wartoœci.
  <img src="/img/events/if-variable-value.png" class="event-preview" />

- **Warunek: zmienna porównuje siê do zmiennej**  
  Polecenie warunkowe, które wykona polecenie znajduj¹ce siê wewn¹trz skryptu, je¿eli podana zmienna spe³nia zasadê tak¹ jak "jest równa", "wiêksza", "mniejsza" itp. do podanej zmiennej.
  <img src="/img/events/if-variable-variable.png" class="event-preview" />

- **Warunek: zmienna ma flagê** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Polecenie warunkowe, które wykona polecenie znajduj¹ce siê wewn¹trz skryptu, je¿eli flaga wybranej zmiennej jest ustawiona jako _Prawda_.
  <img src="/img/events/if-variable-flag.png" class="event-preview" />

- **Warunek: wciœniêty przycisk joypada**  
  Polecenie warunkowe, które wykona polecenie znajduj¹ce siê wewn¹trz skryptu, je¿eli w danym momencie wykonywalnego skryptu zostan¹ naciœniête podane klawisze. _Uwaga_: Polecenie te nie czeka na wciœniêcie przez u¿ytkownika, skrypt jest po prostu wykonywalny. Je¿eli skrypt ma poczekaæ na wciœniêcie przycisku, to nale¿y u¿yæ polecenia _Przycisk Joypad: czekaj na przycisk_. Mimo tego, skrypt jest wykonany tylko raz. Je¿eli chcesz uzyskaæ efekt, by skrypt zosta³ uruchamiany za ka¿dym razem, to zalecane jest zastosowanie polecenia _Przycisk Joypad: przypisz zdarzenie_. Conditionally execute part of the script if the specified joypad input is currently pressed. Will not wait for user input so use directly after a _Joypad Input: Pause Script Until Pressed_ event if waiting is required. Event will only execute once, if you wish to run a script every time a button is pressed use _Joypad Input: Attach Script To Button_ instead.
  <img src="/img/events/if-joypad-input.png" class="event-preview" />

- **Warunek: wspó³rzêdne aktora**  
  Polecenie warunkowe, które wykona polecenie znajduj¹ce siê wewn¹trz skryptu, je¿eli wskazany aktor znajdzie siê w okreœlonej pozycji (X i Y) na scenie.
  <img src="/img/events/if-actor-position.png" class="event-preview" />

- **Warunek: kierunek obrotu aktora**  
  Polecenie warunkowe, które wykona polecenie znajduj¹ce siê wewn¹trz skryptu, je¿eli wskazany aktor bêdzie zwrócony w danym kierunku. 
  <img src="/img/events/if-actor-direction.png" class="event-preview" />

- **Warunek: stan gry zapisano**  
  Polecenie warunkowe, które wykona polecenie znajduj¹ce siê wewn¹trz skryptu, je¿eli istnieje zapisany stan gry.
  <img src="/img/events/if-game-saved.png" class="event-preview" />

- **Prze³¹cznik** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Polecenie warunkowe zawieraj¹ce wiele opcji w zale¿noœci od wartoœci okreœlonej zmiennej. Najpierw nale¿y wybraæ ile opcji ma zostaæ porównane do zmiennej, a nastêpnie ustawiæ wartoœæ do porównania i jakie polecenia maj¹ zostaæ wykonane po dopasowanej wartoœci.
  <img src="/img/events/switch.png" class="event-preview" />

- **Pêtla**  
  Polecenie pêtli, to skrypt powtarzaj¹cy w kó³ko podan¹ czêœæ kodu (st¹d te¿ pêtla). Nale¿y pamiêtaæ, aby zastosowaæ jakieœ wyjœcie z pêtli, gdy¿ w przeciwnym wypadku gracz utknie w danym momencie (i gra siê zawiesi). W celu zatrzymania pêtli mo¿na u¿yæ polecenia _skrypt: zatrzymaj zdarzenie_ albo _scena: zmieñ scenê (teleport)_.
  <img src="/img/events/loop.png" class="event-preview" />

- **Etykieta: okreœl / Etykieta: skocz do** <span class="new">Nowœæ od wer. 1.2.0</span>  
  Polecenie _Etykieta: okreœl_ definiuje pewne miejsce w kodzie skryptu, do którego mo¿na wróciæ przy pomocy polecenia _Etykieta: skocz do_.
  _Uwaga:_ nazwa etykiety musi byæ identyczna (przy poleceniach okreœlenia jak i skocz do) by polecenia mog³y dzia³aæ. **Zalecana ostro¿noœæ!**
  <img src="/img/events/label-goto.png" class="event-preview" />

- **Grupa poleceñ**  
  Owe polecenie nie jest kodem wykonywalnym, który mo¿na odczuæ w grze, ale pozwala na zgrupowanie sekwencji poleceñ w celu nadania im etykiety (strza³eczka w dó³ po prawej stronie i z menu _zmieñ nazwê polecenia_). Pozwala to zwin¹æ polecenia w jeden blok.
  <img src="/img/events/event-group.png" class="event-preview" />

- **Skrypt: zatrzymaj zdarzenie (stop)**  
  Polecenie zatrzymuje wykonywanie obecnego zdarzenia.
  <img src="/img/events/script-stop.png" class="event-preview" />

- **Disable Else** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Jeœli nie potrzebujesz dodatkowej opcji _w innym wypadku_ sprawdzaj¹cej co siê stanie, je¿eli warunek nie zostanie spe³niony to mo¿na tê opcjê wy³¹czyæ. Wystarczy z menu polecenia (po prawej stronie, strza³ka w dó³) wybraæ opcjê z menu _wy³¹cz opcjê inny wypadek_. To samo menu mo¿e byæ u¿yte do przywrócenia opcji _w innym wypadku_, jeœli zajdzie taka potrzeba w póŸniejszym czasie.
  <img src="/img/events/disable-else.png" class="event-preview" />

## Polecenia ekranu (kamery/punktu skupienia)

- **Ekran: przesuñ**  
  Polecenie przesuwa punkt skupienia ekranu w inne, wyznaczone miejsce.
  <img src="/img/events/camera-move-to.png" class="event-preview" />

- **Ekran: powrót do gracza**  
  Polecenie przywraca punkt skupienia na œrodku gracza, blokuj¹c dan¹ pozycjê, by gracz by³ zawsze w centrum.
  <img src="/img/events/camera-lock-to-player.png" class="event-preview" />

- **Ekran: wstrz¹s**  
  Polecenie wywo³uje efekt wstrz¹su ekranu, który mo¿e trwaæ 10 sekund.  
  <img src="/img/events/camera-shake.png" class="event-preview" />


## Polecenia ekranu (jako ca³oœci)

- **Ekran: wyczyszczenie**  
  Ekran zostaje wyczyszczony do bia³ego koloru (jest to rodzaj przejœcia).
  <img src="/img/events/screen-fade-in.png" class="event-preview" />

- **Ekran: pojawienie**  
  Ekran zostaje wyœwietlony ponownie, efekt powrotu z bia³ego wyczyszczenia. 
  <img src="/img/events/screen-fade-out.png" class="event-preview" />

## Polecenia aktora

- **Actor: ustaw kierunek (obrót)**  
  Polecenie s³u¿y do ustawienia konkretnego aktora w wybranym kierunku.  
  <img src="/img/events/actor-set-direction.png" class="event-preview" />
  <img src="/img/events/actor-set-direction-preview.png" class="event-preview" />

- **Aktor: ustaw kierunek (obrót) ze zmiennej** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Polecenie s³u¿y do ustawienia konkretnego aktora w wybranym kierunku przy pomocy wartoœci zmiennej.
  <img src="/img/events/actor-direction-variables.png" class="event-preview" />

- **Aktor: ustaw po³o¿enie**  
  Polecenie pozwala na zmianê po³o¿enia aktora na scenie, poprzez wskazanie nowych wspó³rzêdnych.  
  <img src="/img/events/actor-position.png" class="event-preview" />

- **Aktor: ustaw po³o¿enie ze zmiennej**  
  Polecenie pozwala na zmianê po³o¿enia aktora na scenie przy pomocy wartoœci zmiennych.  
  <img src="/img/events/actor-position-variables.png" class="event-preview" />

- **Aktor: ustaw po³o¿enie (wzglêdnie)**  
  Polecenie s³u¿y do ustawienia nowego po³o¿enia dla wybranego aktora. Set the position in the scene of the specified actor relative to their current position.  
  <img src="/img/events/actor-relative-position.png" class="event-preview" />

- **Aktor: przesuñ**  
  Polecenie sprawi by wybrany aktor poszed³ do okreœlonej pozycji na scenie. Aktor zignoruje wszystkie kolizje na œcie¿ce, zatem aby unikn¹æ przeszkód na scenie, nale¿y po³¹czyæ wiele poleceñ (_aktor: przesuñ_), w celu okreœlenia dok³adnej œcie¿ki.
  <img src="/img/events/actor-move-to.png" class="event-preview" />

- **Aktor: przesuñ (wzglêdnie)**  
  Polecenie sprawy by wybrany aktor poszed³ do okreœlonej pozycji na scenie (wzglêdnie).
  <img src="/img/events/actor-relative-move.png" class="event-preview" />

- **Aktor: przesuñ ze zmiennej**  
  Polecenie sprawy by wybrany aktor poszed³ do okreœlonej pozycji na scenie przy pomocy wartoœci wskazanych zmiennych.  
  <img src="/img/events/actor-move-to-variables.png" class="event-preview" />

- **Aktor: zapisz po³o¿enie do zmiennych**  
  Polecenie zapisuje aktualne po³o¿enie wybranego aktora do dwóch wskazanych zmiennych.  
  <img src="/img/events/actor-store-position.png" class="event-preview" />

- **Aktor: zapisz obrót w zmiennej** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Polecenie zapisuje aktualny kierunek (obrót) aktora do wskazanej zmiennej.  
  <img src="/img/events/actor-store-direction.png" class="event-preview" />

- **Aktor: odepchnij od gracza**  
  Polecenie odpycha aktualnego aktora od gracza o jedno pole. Istnieje mo¿liwoœæ wykonania odepchniêcia, a¿ do momentu napotkania przeszkody.
  <img src="/img/events/actor-push.png" class="event-preview" />

- **Aktor: chmurka z ikon¹**  
  Polecenie wyœwietla chmurkê, która wyœwietla drobn¹ ikonê nad wybranym aktorem. Zazwyczaj mo¿na wyœwietliæ emocje jak np _Wykrzyknik(!)_, _Zapytanie(?)_, _Serduszko_, _Przerwê(...)_, _Zdenerwowanie_, _Pot_, _Muzyczn¹ nutê_ oraz _sen_. Istnieje mo¿liwoœæ zast¹pienia tych grafik, jak i innych podstawowych grafik. Na ten temat mo¿na poczytaæ w dziale [Elementy interfejsu](/docs/ui-elements#emotes-png).  
  <img src="/img/events/actor-emote.png" class="event-preview" />
  <img src="/img/events/actor-emote-preview.png" class="event-preview" />

- **Aktor: klatka animacji**  
  Ustawienie konkretnej klatki animacji dla wybranego aktora.  
  <img src="/img/events/actor-set-frame.png" class="event-preview" />

- **Aktor: klatka animacji ze zmiennej** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Ustawienie konkretnej klatki animacji dla wybranego aktora przy pomocy wartoœci zmiennej.
  <img src="/img/events/actor-set-frame-variable.png" class="event-preview" />

- **Aktor: szybkoœæ animacji**  
  Ustawienie szybkoœci animacji dla wybranego aktora.  
  <img src="/img/events/actor-animation-speed.png" class="event-preview" />

- **Aktor: szybkoœæ ruchu**  
  Ustawienie szybkoœci ruchu dla wybranego aktora.   
  <img src="/img/events/actor-movement-speed.png" class="event-preview" />

- **Aktor: zmieñ grafikê gracza**  
  Polecenie zmienia ustalon¹ grafikê dla gracza, która zosta³a ustalona w _edytorze projektu_. Zmiana grafik gracza jest przydzielona na sta³e i nawet bêdzie siê utrzymywaæ przy zmianie scen i przejœcia. Je¿eli zmiana grafiki ma byæ tylko tymczasowa, to nale¿y pamiêtaæ, aby ponownie u¿yæ tego polecenia w celu przywrócenia w³aœciwej grafiki.  
  <img src="/img/events/actor-player-spritesheet.png" class="event-preview" />

- **Aktor: wy³¹cz kolizjê** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Polecenie wy³¹cza ustawienia kolizji na wybranym aktorze. Je¿eli zostanie wybrany aktor to gracz bêdzie móg³ przez niego przejœæ. Je¿eli zostanie wybrany gracz, to gracz bêdzie w stanie przechodziæ przez wszystko (i aktorów i kolizje na scenie).
  _Uwaga:_ Nawet je¿eli kolizja zostaje wy³¹czona, to istnieje nadal mo¿liwoœæ interakcji z aktorami.
  <img src="/img/events/actor-collisions-disable.png" class="event-preview" />

- **Aktor: w³¹cz kolizjê** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Polecenie uruchamia (w³¹cza) ustawienia kolizji na wybranym aktorze.
  <img src="/img/events/actor-collisions-enable.png" class="event-preview" />

- **Aktor: wywo³aj zdarzenie**  
  Polecenie wywo³uje skrypt wskazanego aktora, tzw. na zawo³anie. Dzia³a to na zasadzie, jakby dosz³o do interakcji miêdzy graczem, a wybranym zdarzeniem.
  <img src="/img/events/actor-invoke.png" class="event-preview" />

- **Aktor: schowaj (niewidzialny)**  
  Polecenie chowa wybranego aktora, by ten nie by³ ju¿ widoczny na scenie. Ukryci aktorzy nie bêd¹ powodowali kolizji i te¿ nie mo¿na z nimi wchodziæ w interakcje. Mo¿na ukryæ aktorów (jak np. Gracza), po to by w skrypcie uruchomienia sceny mo¿na by³o tworzyæ ekran menu czy tytu³ gry.
  <img src="/img/events/actor-hide.png" class="event-preview" />

- **Actor: poka¿ (widzialny)**  
  Polecenie wyœwietla wybranego aktora, powoduj¹c, ¿e bêdzie znowu widoczny na scenie i mo¿na by³o z nim wchodziæ w interakcje.  
  <img src="/img/events/actor-show.png" class="event-preview" />

## Polecenie obiektów

- **Obiekty: schowaj wszystkie**  
  Polecenie ukrywa wszystkie obiekty na scenie. Polecenie mo¿e okazaæ siê przydatne podczas tworzenia scenki przerywnikowej, gdzie gracz nie powinien byæ widoczny poprzez dodanie do scenariusza pocz¹tkowego sceny.
  <img src="/img/events/sprites-hide.png" class="event-preview" />

- **Obiekty: wyœwietl wszystkie**  
  Polecenie wyœwietla wszystkie obiekty na scenie, które zosta³y wczeœniej schowane.  
  <img src="/img/events/sprites-show.png" class="event-preview" />

## Polecenia narzuty

- **Narzuta: poka¿ (widzialna)**  
  Polecenie wyœwietla czarne b¹dŸ bia³e okno ekranu gry. Mo¿na u¿yæ jako rodzaj zaciemnienia, a nastêpnie ods³oniêcia czêœci t³a sceny, np. ekranu z logo dla projektu.
  <img src="/img/events/overlay-show.png" class="event-preview" />

- **Narzuta: schowaj (niewidzialna)**  
  Polecenie sprawia, ¿e narzuta staje siê niewidzalna.
  <img src="/img/events/overlay-hide.png" class="event-preview" />

- **Narzuta: przesuñ**  
  Polecenie przenosi narzutê w nowe miejsce na ekranie.
  <img src="/img/events/overlay-move-to.png" class="event-preview" />

## Polecenia przycisku Joypada

- **Przycisk Joypad: czekaj na przycisk**  
  Wykonywalny skrypt jest wstrzymany i czeka na wciœniêcie okreœlonego przycisku z Joypada (jak np. góra, dó³, A/B).
  <img src="/img/events/joypad-pause.png" class="event-preview" />

- **Przycisk Joypad: przypisz zdarzenie**  
  Wykonanie okreœlonego skryptu za ka¿dym razem, gdy zostanie naciœniêty okreœlony przycisk joypada. Je¿eli skrypt zostanie przypisany do kierunku lub przycisku _A_, to ten skrypt zast¹pi domyœlne dzia³anie w grze.
  <img src="/img/events/joypad-attach.png" class="event-preview" />

- **Przycisk Joypad: usuñ przypisane zdarzenie**  
  Polecenie usuwa przypisany skrypt z przycisku joypada. Polecenie to przywraca domyœln¹ funkcjê dla danego przycisku.
  <img src="/img/events/joypad-attach.png" class="event-preview" />

## Polecenia muzyki

- **Muzyka: odegraj utwór**  
  Odtwarza plik muzyczny, opcjonalnie zapêtla plik po zakoñczeniu.  
  <img src="/img/events/music-play.png" class="event-preview" />

- **Muzyka: stop**  
  Wstrzymuje aktualny odtwarzany plik muzyczny.  
  <img src="/img/events/music-stop.png" class="event-preview" />

## Sound Events

- **Sound: Play Effect** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Play a sound effect, choose from playing a beep with a given pitch, a tone with a given frequency or cymbal crash. Using [Custom Events](/docs/custom-events) you can combine multiple effects into a single reusable event to make jingles.  
  <img src="/img/events/sound-tone.png" class="event-preview" />
  <img src="/img/events/sound-beep.png" class="event-preview" />
  <img src="/img/events/sound-crash.png" class="event-preview" />

## Polecenia czasowe

- **Czekaj**  
  Wstrzymanie wykonywalnego skryptu, wstrzymanie mo¿e trwaæ do 10 sekund.  
  <img src="/img/events/wait.png" class="event-preview" />

- **Stoper: ustaw stoper** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Polecenie uruchamia niewidoczny stoper i w momencie kiedy dobiegnie koniec czasu, zostaje uruchomiony skrypt. Nale¿y pamiêtaæ, ¿e stoper dzia³a we tle non stop i nawet jak dobiegnie do koñca, to zostanie odtworzony na nowo. W celu przerwania stopera nale¿y u¿yæ polecenia _stoper: usuñ stoper_ albo po prostu zmieniæ scenê przy pomocy teleportu.
  <img src="/img/events/timer-set.png" class="event-preview" />

- **Stoper: resetuj stoper** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Polecenie zresetuje licznik z powrotem do zera. Skrypt zostanie wywo³any ponownie po pierwotnie okreœlonym czasie.
  <img src="/img/events/timer-restart.png" class="event-preview" />

- **Stoper: usuñ stoper** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Polecenie wstrzyma i usunie wykonywanie stopera.
  <img src="/img/events/timer-disable.png" class="event-preview" />

## Polecenia stanu gry

- **Stan gry: zapisz**  
  Polecenie zapisuje aktualny stan gry.
  <img src="/img/events/data-save.png" class="event-preview" />

- **Stan gry: wczytaj**  
  Polecenie wczytuje poprzedni stan gry. 
  <img src="/img/events/data-load.png" class="event-preview" />

- **Stan gry: czyœæ**  
  Polecenie usuwa wszelakie wczeœniejsze zapisane stany gry.
  <img src="/img/events/data-clear.png" class="event-preview" />

## Polecenia inne

- **Komentarz** <span class="new">Nowoœæ od wer. 1.2.0</span>  
  Polecenie nie zapewnia ¿adnej funkcji w grze, ale umo¿liwia pozostawienie notatek w skryptach. Wpisany tekst jest automatycznie ustawiany w tytule zdarzenia, dziêki czemu mo¿na zwin¹æ komentarz i nadal czytaæ jego treœæ.
  <img src="/img/events/comment.png" class="event-preview" />  
  Zawsze mo¿na przy pomocy menu (po prawej stronie polecenia, strza³ka w dó³) wybraæ opcjê _wy³¹cz polecenie_, aby ono nie by³o brane pod uwagê. Mo¿na _wy³¹czaæ_ i _w³¹czaæ_ dowolne polecenia. 
  Zdarzenia wy³¹czone zostan¹ pominiête podczas uruchamiania w grze.
  <img src="/img/events/event-disable-menu.png" class="event-preview" />
  <img src="/img/events/event-disabled.png" class="event-preview" />
