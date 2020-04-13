---
title: "T³a"
draft: false
next: "/docs/ui-elements"
nextTitle: "Elementy interfejsu"
---

Ka¿da scena wymaga obrazu t³a, który okreœla jej wygl¹d. Mo¿na dodaæ t³o do gry, poprzez umieszczenie pliku t³a (PNG) do folderu projektu `assets/backgrounds`.

## Wymagania

Pliki t³a, musz¹ byæ w formacie PNG oraz musz¹ zawieraæ nastêpuj¹ce cztery kolory:

<div><div class="Swatch" style="background:#071821;"></div><div class="SwatchLabel">#071821</div></div>
<div><div class="Swatch" style="background:#306850;"></div><div class="SwatchLabel">#306850</div></div>
<div><div class="Swatch" style="background:#86c06c;"></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style="background:#e0f8cf;"></div><div class="SwatchLabel">#e0f8cf</div></div>

<div class="InfoBox">
Pobierz paletê kolorów GB Studio dla:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>

Kolory, które nie s¹ jednym z powy¿szych kodów szesnastkowych, zostan¹ dopasowane do najbli¿szego koloru. W przeciwieñstwie do obiektów, koloru `# 65ff00` nie mo¿na u¿ywaæ na tle.

T³a s¹ podzielone na zestawy kafelków `8px` x `8px`, wiêc ca³kowity rozmiar obrazu musi byæ wielokrotnoœci¹ `8px` zarówno pod wzglêdem szerokoœci, jak i wysokoœci. T³o ma minimalny rozmiar `160px` x `144px` (rozmiar ekranu), a obecnie t³o nie mo¿e byæ wiêksze ni¿ `256px` x `256px`.

Obraz mo¿e zawieraæ jednoczeœnie nie wiêcej ni¿ ** 192 ** unikalnych kafelków `8px` x `8px` ze wzglêdu na ograniczenia pamiêci. Oznacza to, ¿e nawet przy u¿yciu najmniejszego mo¿liwego rozmiaru t³a musisz powtórzyæ oko³o po³owy swoich p³ytek. Tam, gdzie to mo¿liwe, powtarzaj kafelki miêdzy obrazami, poniewa¿ zostan¹ one zgrupowane, oszczêdzaj¹c ca³kowity rozmiar gry. Zaleca siê u¿ycie edytora map kafelków, takiego jak [Tiled](https://www.mapeditor.org/), aby zapewniæ zgodnoœæ t³a z siatk¹ pikseli.
