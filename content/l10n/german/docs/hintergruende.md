---
title: "Hintergründe"
draft: false
next: "/docs/ui-elemente"
nextTitle: "UI Elemente"
---

Jede Szene benötigt ein Hintergrundbild welches das Aussehen der Szene bestimmt. Man kann Hintergründe dem Spiel hinzufügen indem man Bilderdateien im PNG Format im `assets/backgrounds` Ordner des Projekts einfügt.

## Voraussetzungen

Hintergrundbilder dürfen nur die folgenden vier Farben verwenden:

<div><div class="Swatch" style="background:#071821;"></div><div class="SwatchLabel">#071821</div></div>
<div><div class="Swatch" style="background:#306850;"></div><div class="SwatchLabel">#306850</div></div>
<div><div class="Swatch" style="background:#86c06c;"></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style="background:#e0f8cf;"></div><div class="SwatchLabel">#e0f8cf</div></div>

<div class="InfoBox">
Downloade die GB Studio Palette Swatches für folgende Software:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>

Farben, welche nicht den vier hexadezimalen Farbcodes in der oberen Liste entsprechen, werden zur nächstunterstützten Farbe interpretiert. Im Gegensatz zu Sprites wird das grellgrün `#65ff00` nicht für Hintergründe unterstützt.

Hintergründe bestehen aus `8px` x `8px` Kacheln und die Gesamtpixelhöhe und Gesamtpixelbreite muss ein vielfaches von `8px` entsprechen. Ein Hintergrundbild hat eine Minimalauflösung von `160px` x `144px` (die Gameboy Bildschirmauflösung) und eine derzeitige Maximalauflösung von `256px` x `256px`. Größere und kleinere Hintergrundbilder werden nicht unterstützt und führen zum Fehler während des Bauprozesses.

Ein Hintergrundbild kann aufgrund von Speichereinschränkungen nicht aus mehr als **192** einzigartigen `8px` x `8px` Kacheln bestehen. Das bedeutet, dass auch die kleinste Hintergrundauflösung nur möglich ist, wenn in etwa die Hälfte der Kacheln sich im Bild wiederholen. Es ist ratsam Kacheln wenn möglich einheitlich zu gestalten um diese Einschränkungen nicht zu überschreiten und gleichzeitig Speicher zu sparen. Es ist empfohlen einen Kacheleditor wie [Tiled](https://www.mapeditor.org/) zu verwenden damit man sicher ist, dass der Hintergrund auch konform mit dem vorgegebenen Pixel- und Kachelraster ist.
