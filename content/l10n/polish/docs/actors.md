---
title: "Aktorzy"
draft: false
next: "/docs/triggers"
nextTitle: "Rozruchy"
---

Aktorami w programie nazywa siê postacie jak i obiekty, które mog¹ byæ naniesione na scenê i z którymi gracz mo¿e wchodziæ w interakcje.

## Dodanie aktora

Aby dodaæ aktora na scenê, to nale¿y nacisn¹æ przycisk _**+**_ na pasku _narzêdzi_, a nastêpnie wybraæ pozycjê _aktor_ (lub przy pomocy skróty z klawiatury, nacisn¹æ klawisz **A**). Po tym, wystarczy wskazaæ scenê i miejsce dla aktora.
<img src="/img/screenshots/add-actor.gif" style="width:300px"/>

_Boczny pasek_ programu wyœwietla ustawienia dla wybranego obiektu. Je¿eli aktor zostanie zaznaczony to _boczny pasek_ programy wyœwietli ustawienia dla wybranego aktora. Przy pomocy ustawieñ mo¿na aktorowi nadaæ nazwê, zmieniæ jego po³o¿enie (co równie¿ mo¿na osi¹gn¹æ przy pomocy przeci¹gniêcia i upuszczenia), wybraæ grafikê z arkusza [obiektów] (/ docs / sprites), pocz¹tkowy kierunek, rodzaj ruchu oraz skrypt - odtwarzane polecenia, gdy gracz wejdzie w interakcjê z wybranym zdarzeniem.

## Rodzaj ruchu

Istnieje kilka ró¿nych rodzajów ruchów do wyboru. Rodzaj ruchu nale¿y wybraæ w zale¿noœci od tego jak dane zdarzenie (aktor) ma siê zachowywaæ, gdy gracz chodzi po scenie i wchodzi w interakcjê z zdarzeniem.

- **Brak** - Zdarzenie (aktor) wyœwietli pojedyncz¹ klatkê z arkusza graficznego.  
  Je¿eli arkusz obiektów zawiera wiêcej ni¿ jedn¹ klatkê, to u¿ytkownik bêdzie mia³ mo¿liwoœæ wyboru, któr¹ klatkê program ma wyœwietliæ. Istnieje mo¿liwoœæ póŸniejszej modyfikacji za pomoc¹ polecenia _Aktor: klatka animacji_. Arkusz obiektów z wieloma klatkami umo¿liwia tak¿e animacjê aktora poprzez cykliczne odtwarzanie ka¿dej klatki z okreœlon¹ prêdkoœci¹, któr¹ mo¿na modyfikowaæ za pomoc¹ polecenia _Aktor: szybkoœæ animacji_.\
  \
  Zdarzenie bêdzie zwrócone tylko w pocz¹tkowym, ustalonym kierunku (chyba, ¿e kierunek zostanie póŸniej zmodyfikowany za pomoc¹ skryptu). Je¿eli gracz wejdzie w interakcjê z tym zdarzeniem, to ono nie zmieni kierunku. Opcja ta jest przydatna dla np. Tabliczek albo innych nieruchomych przedmiotów.

- **Obrót twarz¹** - Zdarzenie jest ustawione w pocz¹tkowym kierunku, natomiast w momencie gdy gracz wejdzie w interakcjê z aktorem, zdarzenie obróci siê w stronê gracza, przed odtworzeniem skryptu. Funkcja ta sprawdza siê dla prostych postaci (np. NPC), które maj¹ byæ bardziej wra¿liwe na dzia³ania gracza. 

- **Losowy obrót** - Zdarzenie jest ustawione w pocz¹tkowym kierunku, ale w ustalonych odstêpach czasu zdarzenie owy kierunek zmienia wykonuj¹c obrót (oczywiœcie w losowym kierunku). Funkcja ta sprawdza siê postaci, które rozgl¹daj¹ siê po otoczeniu.

- **Losowy krok** - Zdarzenie losowo zmienia kierunek i porusza siê po scenie w ustalonych odstêpach czasu. Funkcja ta jest przydatna dla postaci, które przeszukuj¹ dany obszar. Uwaga: aktorzy, którzy posiadaj¹ _losowy krok_ s¹ w stanie zablokowaæ ruch gracza, zatem nie zaleca siê stosowania tego rodzaju ruchu w ciasnych miejscach, gdzie gracz mo¿e utkn¹æ, czekaj¹c, a¿ aktor zejdzie z drogi.

_Uwaga_ Je¿eli dla zdarzenie zastosowano brak ruchu (czyli z arkusza obiektów bêdzie u¿ywa³o tylko jedn¹ klatkê animacji), wówczas jedynym dostêpnym rodzajem ruchu bêdzie jedna statyczna klatka i nie zostan¹ wyœwietlone ustawienia do wyboru rodzaju ruchu i kierunku pocz¹tkowego. 

## Limit klatek

Ze wzglêdu na ograniczenia sprzêtowe, aktorom w ka¿dej scenie mo¿na przypisaæ **tylko 25 unikatowych klatek** animacji. Gdzie tylko jest mo¿liwe, zaleca siê stosowanie braku ruchu lub nie animowanych obiektów, aby zmniejszyæ liczbê u¿ywanych klatek. Innym sposobem na zmniejszenie liczby klatek jest ponowne u¿ycie tego samego obiektu dla wielu aktorów na scenie. Ponowne u¿ycie tej samej grafiki z arkusza obiektów nie bêdzie wliczane do ca³kowitej liczby klatek sceny.

## Skryptowanie

Dla ka¿dego aktora istnieje mo¿liwoœæ zdefiniowania dwóch skryptów do wykonania: 
_Skrypt (naciœniêcie przycisku)_ oraz _Skrypt (auto start)_. Program umo¿liwia prze³¹czenie miêdzy skryptami przy pomocy zak³adki. Kiedy aktor jest zaznaczony i na bocznym pasku zostanie wyœwietlone ustawienia aktora, to wystarczy zaznaczyæ jedn¹ z dostêpnych zak³adek skryptu (_skrypt (naciœniêcie przycisku)_ lub _skrypt (auto start)_).

Skrypt typu _Skrypt (naciœniêcie przycisku)_ zostanie uruchomiony w momencie, gdy gracz bêdzie obok danego zdarzenia i zostanie naciœniêty przycisk _A_.

Skrypt typu _Skrypt (auto start)_ zostanie uruchomiony automatycznie jak tylko scena zostanie wczytana. Skrypty _skrypt (auto start)_ aktorów posiadaj¹ pierwszeñstwo ni¿eli skrypty _skrypt (auto start)_ sceny.

Kiedy zdarzenie jest zaznaczone to na _bocznym pasku_ zostaj¹ wyœwietlone ustawienia dla tego zdarzenia. Wystarczy wybraæ przycisk _Dodaj polecenie_, aby otworzyæ menu z dostêpn¹ list¹ poleceñ, za pomoc¹ których mo¿na stworzyæ w³asny skrypt dla zdarzenia.

Wiêcej informacji na temat skryptowania mo¿na znaleŸæ w temacie [Skryptowanie (polecenia zdarzenia)](/docs/scripting).
