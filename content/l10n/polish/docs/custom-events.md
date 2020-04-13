---
title: "W³asne zdarzenia"
draft: false
next: "/docs/assets"
nextTitle: "Zasoby"
---

<span class="new">Nowoœæ od wer. 1.2.0</span>

_W³asne zdarzenia_ pozwalaj¹ tworzyæ procedury wielokrotnego u¿ytku w grze, które mog¹ byæ u¿ywane w dowolnym skrypcie.

Klikniêcie w t³o miêdzy scenami spowoduje na bocznym pasku programu uruchomienie _edytora projektu_, który wyœwietla listê _w³asnych zdarzeñ_ znajduj¹cych siê w twoim projekcie, a tak¿e przycisk _dodaj w³asne zdarzenie_.

W pierwszej kolejnoœci _w³asne zdarzenie_ musi zostaæ nazwane, a nastêpnie mo¿na rozpocz¹æ tworzenie skryptu w taki sam sposób jak w przypadku _aktorów_, _rozruchów_ i _scen_.

## Parametry

Ilekroæ zostanie dodane zdarzenie, które odczytuje _zmienn¹_, to zostanie to dodane do listy parametrów wejœciowych dla _w³asnego zdarzenia_, gdzie mo¿na nadaæ temu wejœciu konkretn¹ nazwê. Polecenia, które wp³ywaj¹ na _aktorów_, domyœlnie bêd¹ dotyczyæ gracza, ale je¿eli zostanie wybrany konkretny aktor przy pomocy selektora, to istnieje mo¿liwoœæ ustawienia tego zdarzenia by odczytywa³o wartoœæ _aktora_ z parametru wejœciowego.

Dla przyk³adu, poni¿sze w³asne zdarzenie sprawi by `Aktor A` krêci³ siê w kó³ko.

<img src="/img/screenshots/custom-event-dance.png" class="event-preview" />

To _w³asne zdarzenie_ mo¿e zostaæ wykorzystane na _aktorach_, _rozruchach_, _scenach_ i bêdzie to wygl¹daæ w nastêpuj¹cy sposób.

<img src="/img/events/custom-event.png" class="event-preview" />

Je¿eli kiedykolwiek zajdzie potrzeba edytowania _w³asnego zdarzenia_, to mo¿na do niego powróciæ przy pomocy u¿yciu listy w³asnych zdarzeñ, które wyœwietlaj¹ siê w _edytorze projektu_ lub te¿ przez wybranie _edytuj w³asne zdarzenie_ z menu rozwijanego zdarzenia.

<img src="/img/screenshots/custom-event-edit.png" class="event-preview" />
