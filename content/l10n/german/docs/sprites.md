---
title: "Sprites"
draft: false
next: "/docs/hintergruende"
nextTitle: "Hintergründe"
---

Sprites sind Grafikdaten welche das Aussehen von spielbaren und interaktiven Charakteren sowie Objekten bestimmen. Um Sprites dem Spiel hinzuzufügen, müssen die passenden PNG Bilddateien in das `assets/sprites` Unterverzeichnis abgelegt werden.

## Voraussetzungen

Die PNG Bilddateien für Sprites dürfen nur die folgenden vier Farben beinhalten:

<div><div class="Swatch" style="background:#071821;"></div><div class="SwatchLabel">#071821</div></div>
<div><div class="Swatch" style="background:#86c06c;"></div><div class="SwatchLabel">#86c06c</div></div>
<div><div class="Swatch" style="background:#e0f8cf;"></div><div class="SwatchLabel">#e0f8cf</div></div>
<div><div class="Swatch" style="background:#65ff00;"></div><div class="SwatchLabel">#65ff00</div></div>

<div class="InfoBox">
Downloade die GB Studio Palette Swatches für folgende Software:<br />
<a href="/assets/swatches/gb-studio-photoshop.aco">Adobe Photoshop</a><br />
<a href="/assets/swatches/gb-studio-aseprite.aseprite">Aseprite</a>
</div>

Die grellgrüne Farbe `#65ff00` wird verwendet um Transparenz darzustellen und wird aus diesem Grund nicht im Spiel sowie im _Welteditor_ dargestellt sondern bleibt durchsichtig.

Farben, welche nicht den vier hexadezimalen Farbcodes in der oberen Liste entsprechen, werden zur nächstunterstützten Farbe interpretiert. Im Gegensatz zu Hintergründen, kann die Farbe `#306850` nicht für Sprites verwendet werden.

Ein Sprite besteht aus eins oder mehreren quadratischen Frames mit einer Framegröße von je `16px` x `16px`. Mehrere Frames werden horizontal aneinandergereiht. Daher ist beispielsweise die Auflösung eines Sprites mit 3 Frames `48px` x `16px`.

## Statische Sprites

Ein Sprite mit nur einem einzigen Frame (beispielsweise bewegungsunfähige Objekte wie Schilder) benötigt nur eine PNG Bilddatei mit einer Auflösung von `16px` x `16px`.

<img src="/img/sprites/cat.png" class="HelpSprite" />

## Animierte Sprites

Falls erwünscht ist, dass das Sprite auch animierfähig ist, dann benötigt man eine PNG Bilddatei bestehend aus mindestens 2 Frames (Auflösung: `32px` x `16px`) und höchstens 25 Frames (`400px` x `16px`). Mithilfe dieses Sprites kann für Darsteller ein Startframe festgelegt werden und eine Animationsgeschwindigkeit. Es kann eingestellt werden, dass der Darsteller automatisch durch seine Frames des festgelegten Sprites wechselt (Stichwort: Daumenkino).

<img src="/img/sprites/fire.png" class="HelpSprite" />

## Darsteller

Damit ein Darsteller in der Lage ist sich in allen vier Himmelsrichtungen zu orientieren, benötigt das Sprite eine PNG Bilddatei mit einer Größe von `48px` x `16px`, d.h. drei Frames. Der Reihenfolge entsprechend orientiert sich das erste Frame nach vorne, das zweite Frame nach hinten und das dritte Frame nach rechts. Die nach links ausgerichtete Orientierung wird erreicht, indem das dritte Frame automatisch gespiegelt wird. Daher ist ein viertes Frame unnötig.

<img src="/img/sprites/npc001.png" class="HelpSprite" />

## Animierter Darsteller

Damit ein Darsteller in der Lage ist sich dynamisch zu bewegen oder als Spielcharakter fungieren zu können, benötigt das Sprite eine PNG Bilddatei mit einer Größe von `96px` x `16px`, d.h. sechs Frames. Der Reihenfolge entsprechend sind die ersten beiden Frames für die Bewegung in Südrichtung, der dritte und vierte Frame für die Bewegung in Nordrichtung und der fünfte und sechste Frame für die Bewegung in Ostrichtung zuständig.

Da es eine Framebeschränkung von 25 Frames pro Szene gibt, sollte man wenn möglich auf animierte Sprites verzichten, außer natürlich es ist für bestimmte Darsteller notwendig.

<img src="/img/sprites/player.png" class="HelpSprite" />
