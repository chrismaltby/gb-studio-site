---
title: "Sceny"
draft: false
next: "/docs/player"
nextTitle: "Gracz"
---

Scena to pojedynczy ekran twojej gry (mo¿na powiedzieæ plansza, albo mapa wyœwietlana na ekranie), która mo¿e sk³adaæ siê z wielu [aktorów](/docs/actors) jak i [rozruchów](/docs/triggers). W zasadzie, gra sk³ada siê z uk³adu wielu scen, które s¹ ze sob¹ po³¹czone przy pomocy _rozruchów_ zawieraj¹cymi polecenia zdarzenia _zmieñ scenê (teleport)_.

## Dodanie nowej sceny

Aby dodaæ now¹ scenê do uk³adu scen, to nale¿y nacisn¹æ przycisk _ ** + **_ w _narzêdziach_ a nastêpnie wybranie opcji _Scena_ z menu (mo¿na pos³u¿yæ siê skrótem z klawiatury, przycisk ** S **). W dowolne puste miejsce na _obszarze roboczym projektu_ (_Project Viewport_), nale¿y klikn¹æ aby nowa scena zosta³a wyœwietlona.

<img src="/img/screenshots/add-scene.gif" style="width:300px"/>

W momencie kiedy nowa scena zosta³a dodana, na _bocznym pasku_ (_Editor Sidebar_) mo¿na zmodyfikowaæ informacje, takie jak nazwa, albo jakie t³o z projektu ma zostaæ zastosowane dla wybranej sceny. Wiêcej informacji na temat dodawania obrazów t³a mo¿na znaleŸæ w dokumentacji w temacie [t³a](/docs/backgrounds).

## Skryptowanie

Sceny posiadaj¹ zdarzenia _skrypt (auto start)_, które mog¹ zostaæ u¿yte do uruchamiania zdarzeñ, gdy tylko scena zostanie wyœwietlona na ekranie. Po wybraniu sceny, na _bocznym pasku_ wystarczy zaznaczyæ zak³adkê _skrypt (auto start)_, a nastêpnie wybraæ przycisk _Dodaj polecenie_, aby otworzyæ menu zdarzeñ i rozpocz¹æ tworzenie skryptu.  

Je¿eli jakiekolwiek zdarzenie (Aktor) posiada wprowadzony skrypt _skrypt (auto start)_, to program sugeruje siê zasad¹: Aktorzy posiadaj¹ pierwszeñstwo uruchomienia auto start. Gdy skrypt Aktorów dobiegnie koñca, wtenczas program uruchomi skrypt auto start od sceny. 

Po wiêcej informacji zajrzyj do dokumentacji, dzia³u [Skryptowanie (polecenia zdarzenia)](/docs/scripting).
