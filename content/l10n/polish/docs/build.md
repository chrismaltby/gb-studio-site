---
title: "Buduj swoj¹ grê"
draft: false
next: "/docs/settings"
nextTitle: "Ustawienia"
---

## Gra

Po klikniêciu przycisku _Uruchom_ (w prawym górnym rogu okna _edytora projektu_, przycisk play), program rozpocznie komplilacjê gry, a po jej zakoñczeniu otworzy okno, w którym mo¿na graæ w aktualny projekt. Zobacz temat [Klawiatura - skróty klawiszy](/docs/keyboard-shortcuts), aby uzyskaæ szczegó³owe informacje na temat poruszania siê (patrz na dzia³ _sterowanie podczas gry_).

## Terminal

W _nawigatorze projektu_ przejdŸ do menu _zbuduj i uruchom_, spowoduje to wyœwietlenie _terminalu_, gdzie zostanie wyœwietlony dziennik (log) kompilacji projektu. Mo¿na przejœæ do tego ekranu tak¿e poprzez naciœniêcie _uruchom_ podczas kompilacji. Ten ekran pokazuje, czy w kompilacji wystêpuj¹ b³êdy, które mog¹ pomóc w ich poprawieniu.

## Eksportuj jako ROM

Klikniêcie w przycisk _eksportuj jako ROM_ i program rozpocznie proces utworzenia pliku ROM w folderze projektu `$ PROJECT_ROOT / build / rom / game.gb`. Plik ROM jest to plik gry, któr¹ mo¿na otworzyæ na dowolnym emulatorze obs³uguj¹cym konsolê Nintendo Gam Boy, takim jak [OpenEMU] (https://openemu.org/) lub [KiGB] (http://kigb.emuunlim.com/downloads.htm). 

## Eksportuj jako wersja Web

Mo¿esz przes³aæ ten folder na dowolny serwer sieciowy i przejœæ do pliku `index.html`, aby zagraæ w grê w przegl¹darce internetowej. Jeœli korzystasz z przegl¹darki internetowej na telefonie komórkowym lub tablecie, gra bêdzie równie¿ zawieraæ dotykowe elementy steruj¹ce.

Jeœli spakujesz folder `build / web`, mo¿esz przes³aæ go do [Itch.io] (https://itch.io) jako gra HTML. W takim przypadku zalecany rozmiar okienka ekranu to `480px` x `432px`.

## Rozwi¹zywanie problemów

W systemie macOS, jeœli masz problemy z budowaniem lub uruchomieniem gry, mo¿e byæ równie¿ konieczne zainstalowanie narzêdzi wiersza polecenia Apple, otwieraj¹c `Applications / Terminal.app` i wprowadzaj¹c nastêpuj¹ce polecenie.

```
xcode-select --install
```

W systemie Windows konieczne mo¿e byæ dodanie aplikacji do bia³ej listy/listy zaufanych programów w oprogramowaniu antywirusowym, aby wykonaæ kompilacjê.
