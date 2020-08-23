---
title: "Tła"
draft: false
next: "/docs/ui-elements"
nextTitle: "Elementy interfejsu"
---

Każda scena wymaga obrazu tła, który określa jej wygląd. Można dodać tło do gry, poprzez umieszczenie pliku tła (PNG) do folderu projektu `assets/backgrounds`.

## Wymagania

Pliki tła, muszą być w formacie PNG oraz muszą zawierać następujące cztery kolory:

<div><div class="Swatch" style="background:#071821;"></div><div class="SwatchLabel">#071821</div></div>
<div><div class="Swatch" style="background:#306850;"></div><div class="SwatchLabel">#306850</div></div>
<div><div class="Swatch" style="background:#86c06c;"></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style="background:#e0f8cf;"></div><div class="SwatchLabel">#e0f8cf</div></div>

<div class="InfoBox">
Pobierz paletę kolorów GB Studio dla:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>

Kolory, które nie są jednym z powyższych kodów szesnastkowych, zostaną dopasowane do najbliższego koloru. W przeciwieństwie do obiektów, koloru `# 65ff00` nie można używać na tle.

Tła są podzielone na zestawy kafelków `8px` x `8px`, więc całkowity rozmiar obrazu musi być wielokrotnością `8px` zarówno pod względem szerokości, jak i wysokości. Tło ma minimalny rozmiar `160px` x `144px` (rozmiar ekranu), a obecnie tło nie może być większe niż `256px` x `256px`.

Obraz może zawierać jednocześnie nie więcej niż ** 192 ** unikalnych kafelków `8px` x `8px` ze względu na ograniczenia pamięci. Oznacza to, że nawet przy użyciu najmniejszego możliwego rozmiaru tła musisz powtórzyć około połowy swoich płytek. Tam, gdzie to możliwe, powtarzaj kafelki między obrazami, ponieważ zostaną one zgrupowane, oszczędzając całkowity rozmiar gry. Zaleca się użycie edytora map kafelków, takiego jak [Tiled](https://www.mapeditor.org/), aby zapewnić zgodność tła z siatką pikseli.
