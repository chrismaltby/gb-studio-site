---
title: "Gracz"
draft: false
next: "/docs/actors"
nextTitle: "Aktorzy"
---

## Pozycja startowa gracza

Pozycja startowa gracza jest widoczna w trybie _Œwiat gry_ za pomoc¹ ikony <img src = "/ img / screenshots / player-start.png" style = "height: 12px" />. 

Klikniêcie t³a miêdzy scenami spowoduje wyœwietlenie w _bocznym pasku_ informacji o projekcie, gdzie bêdzie mo¿liwoœæ ustawienia pozycji startowej gracza, obrót jak i grafikê gracza, któr¹ mo¿na wybraæ z arkusza dostêpnych [obiektów](/docs/sprites).

Mo¿na zmieniæ pozycjê startow¹ gracza, poprzez z³apanie i przeci¹gniêcie ikony <img src="/img/screenshots/player-start.png" style="height:12px"/> w odpowiednie (nowe) miejsce. Ikonê pozycji startowej gracza mo¿na przeci¹gaæ miêdzy scenami.


## Skryptowanie

Wiêkszoœæ skryptów dla zdarzeñ Aktora mog¹ zostaæ zastosowane do gracza. Dodatkowo mo¿na u¿yæ polecenia _zmieñ grafikê gracza_, aby zmieniæ grafikê gracza podczas gry. Za pomoc¹ tej metody, gracz bêdzie posiada³ now¹ grafikê nawet w czasie przechodzenia miêdzy scenami. Je¿eli zmiana grafiki jest tymczasowa, to nale¿y pamiêtaæ o przywróceniu grafiki gracza do pierwotnego wizerunku.

Podczas prze³¹czania miêdzy scenami gracz zawsze bêdzie widoczny w miejscu rozpoczêcia sceny, niezale¿nie od jego poprzednich opcji widocznoœci. Aby uzyskaæ efekt, gdzie gracz jest ukryty podczas uruchomienia sceny, np. Wyœwietlaj¹c ekran tytu³owy lub przerywnik scenowy, to nale¿y dodaæ polecenie _Schowaj (Aktor: schowaj)_ i wskazaæ na gracza, przy skrypcie _uruchomienia (auto start)_. 
