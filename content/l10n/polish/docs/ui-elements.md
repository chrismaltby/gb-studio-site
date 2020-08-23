---
title: "Elementy interfejsu"
draft: false
next: "/docs/music"
nextTitle: "Muzyka"
---

Projekt zawiera wiele plików w folderze `assets/ui` ze stałymi nazwami plików, które definiują części interfejsu użytkownika twojej gry. Edycja tych plików pozwala zmienić domyślną czcionkę, ustawić ramkę okna i zmodyfikować kursor wyboru.

Jeśli usuniesz którykolwiek z plików w folderze interfejsu użytkownika, zostaną one zastąpione domyślnymi zasobami przy następnym tworzeniu gry, umożliwiając cofnięcie niepożądanych zmian.

## ascii.png

Edytuj ten plik, aby zmienić czcionkę gry podczas rozmowy z aktorami w grze.

<img src="/img/ui/ascii.png" class="HelpSprite" style="width:384px; height:auto;"/>

## frame.png

Silnik gry używa [9-plasterkowego skalowania / 9-slice scaling] (https://en.wikipedia.org/wiki/9-slice_scaling) poniższego obrazu, aby utworzyć ramkę dla pola tekstowego. Edycja tego obrazu pozwoli na zmianę ramki tekstu lub ustawić jednolity kolor dla tekstu.

<img src="/img/ui/frame.png" class="HelpSprite" style="width:72px; height:auto;"/>

## cursor.png

Ten obraz jest używany jako kursor wyboru podczas pokazywania opcji wielokrotnego wyboru w grze.

<img src="/img/ui/cursor.png" class="HelpSprite" style="width:24px; height:auto;"/>

## emotes.png

Obraz ten odpowiada za wyświetlanie emotikonek w chmurce, które zostają wyświetlane nad aktorami przy pomocy skryptów. Każda chmurka posiada rozmiar `16px` x `16px` i każda z chmurek reprezentuje następujące emocje w kolejności od lewej do prawej: _wykrzyknik(!)_, _pytanie(?)_, _serce_, _cisze_, _zdenerwowanie_, _pot_, _nutkę muzyczną_, _sen_.

<img src="/img/ui/emotes.png" class="HelpSprite" style="width:384px; height:auto;"/>

## Wymagania

Z wyjątkiem pliku `emotes.png`, który spełnia standardowe wymagania sprite, plik PNG dla interfejsu użytkownika musi zawierać tylko następujące cztery kolory:

<div><div class="Swatch" style="background:#071821;"></div><div class="SwatchLabel">#071821</div></div>
<div><div class="Swatch" style="background:#306850;"></div><div class="SwatchLabel">#306850</div></div>
<div><div class="Swatch" style="background:#86c06c;"></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style="background:#e0f8cf;"></div><div class="SwatchLabel">#e0f8cf</div></div>

<div class="InfoBox">
Pobierz paletę kolorów GB Studio dla:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>
