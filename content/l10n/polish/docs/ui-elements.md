---
title: "Elementy interfejsu"
draft: false
next: "/docs/music"
nextTitle: "Muzyka"
---

Projekt zawiera wiele plików w folderze `assets/ui` ze sta³ymi nazwami plików, które definiuj¹ czêœci interfejsu u¿ytkownika twojej gry. Edycja tych plików pozwala zmieniæ domyœln¹ czcionkê, ustawiæ ramkê okna i zmodyfikowaæ kursor wyboru.

Jeœli usuniesz którykolwiek z plików w folderze interfejsu u¿ytkownika, zostan¹ one zast¹pione domyœlnymi zasobami przy nastêpnym tworzeniu gry, umo¿liwiaj¹c cofniêcie niepo¿¹danych zmian.

## ascii.png

Edytuj ten plik, aby zmieniæ czcionkê gry podczas rozmowy z aktorami w grze.

<img src="/img/ui/ascii.png" class="HelpSprite" style="width:384px; height:auto;"/>

## frame.png

Silnik gry u¿ywa [9-plasterkowego skalowania / 9-slice scaling] (https://en.wikipedia.org/wiki/9-slice_scaling) poni¿szego obrazu, aby utworzyæ ramkê dla pola tekstowego. Edycja tego obrazu pozwoli na zmianê ramki tekstu lub ustawiæ jednolity kolor dla tekstu.

<img src="/img/ui/frame.png" class="HelpSprite" style="width:72px; height:auto;"/>

## cursor.png

Ten obraz jest u¿ywany jako kursor wyboru podczas pokazywania opcji wielokrotnego wyboru w grze.

<img src="/img/ui/cursor.png" class="HelpSprite" style="width:24px; height:auto;"/>

## emotes.png

Obraz ten odpowiada za wyœwietlanie emotikonek w chmurce, które zostaj¹ wyœwietlane nad aktorami przy pomocy skryptów. Ka¿da chmurka posiada rozmiar `16px` x `16px` i ka¿da z chmurek reprezentuje nastêpuj¹ce emocje w kolejnoœci od lewej do prawej: _wykrzyknik(!)_, _pytanie(?)_, _serce_, _cisze_, _zdenerwowanie_, _pot_, _nutkê muzyczn¹_, _sen_.

<img src="/img/ui/emotes.png" class="HelpSprite" style="width:384px; height:auto;"/>

## Wymagania

Z wyj¹tkiem pliku `emotes.png`, który spe³nia standardowe wymagania sprite, plik PNG dla interfejsu u¿ytkownika musi zawieraæ tylko nastêpuj¹ce cztery kolory:

<div><div class="Swatch" style="background:#071821;"></div><div class="SwatchLabel">#071821</div></div>
<div><div class="Swatch" style="background:#306850;"></div><div class="SwatchLabel">#306850</div></div>
<div><div class="Swatch" style="background:#86c06c;"></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style="background:#e0f8cf;"></div><div class="SwatchLabel">#e0f8cf</div></div>

<div class="InfoBox">
Pobierz paletê kolorów GB Studio dla:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>
