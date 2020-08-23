---
title: "Gracz"
draft: false
next: "/docs/actors"
nextTitle: "Aktorzy"
---

## Pozycja startowa gracza

Pozycja startowa gracza jest widoczna w trybie _Świat gry_ za pomocą ikony <img src = "/ img / screenshots / player-start.png" style = "height: 12px" />. 

Kliknięcie tła między scenami spowoduje wyświetlenie w _bocznym pasku_ informacji o projekcie, gdzie będzie możliwość ustawienia pozycji startowej gracza, obrót jak i grafikę gracza, którą można wybrać z arkusza dostępnych [obiektów](/docs/sprites).

Można zmienić pozycję startową gracza, poprzez złapanie i przeciągnięcie ikony <img src="/img/screenshots/player-start.png" style="height:12px"/> w odpowiednie (nowe) miejsce. Ikonę pozycji startowej gracza można przeciągać między scenami.


## Skryptowanie

Większość skryptów dla zdarzeń Aktora mogą zostać zastosowane do gracza. Dodatkowo można użyć polecenia _zmień grafikę gracza_, aby zmienić grafikę gracza podczas gry. Za pomocą tej metody, gracz będzie posiadał nową grafikę nawet w czasie przechodzenia między scenami. Jeżeli zmiana grafiki jest tymczasowa, to należy pamiętać o przywróceniu grafiki gracza do pierwotnego wizerunku.

Podczas przełączania między scenami gracz zawsze będzie widoczny w miejscu rozpoczęcia sceny, niezależnie od jego poprzednich opcji widoczności. Aby uzyskać efekt, gdzie gracz jest ukryty podczas uruchomienia sceny, np. Wyświetlając ekran tytułowy lub przerywnik scenowy, to należy dodać polecenie _Schowaj (Aktor: schowaj)_ i wskazać na gracza, przy skrypcie _uruchomienia (auto start)_. 
