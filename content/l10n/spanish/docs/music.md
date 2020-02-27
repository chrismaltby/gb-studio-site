---
title: "Music"
draft: false
next: "/docs/sound-effects"
nextTitle: "Sound Effects"
---

# Introducción

GB Studio usa de forma nativa [GBT Player](https://github.com/AntonioND/gbt-player), un driver que coge ficheros .MOD y los convierte a un formato que Gameboy puede entender. Puedes usar aplicaciones como [**OpenMPT**](https://openmpt.org/), [**MilkyTracker**](https://milkytracker.titandemo.org/), [**BassoonTracker**](https://www.stef.be/bassoontracker/), [**ProTracker**](https://16-bits.org/pt.php), etc.

# Empezando a crear sonidos

1. Crea un proyecto vacío de GB Studio, busca el fichero 'assets/music/template.mod' y ábrelo con tu aplicación favorita.
   - **Debes editar este fichero para conseguir una representación precisa del instrumento que quieres usar.**
   - Los usuarios de MilkyTracker deberían guardar este fichero como .XM porque si lo guardas como .mod se corrompe. Exporta tu sonido a .mod cada vez que quieras probarlo.
2. Puedes eliminar el fichero de ejemplo, pero **DEBES** mantener instruments/sounds/samples intacto.
3. Usa los instrumentos que se muestran más adelante en este document para elegir los sonidos que quieras. Cambiar las muestras en tu aplicación **no** afectará a los sonidos en el juego.

Cuando termines, añade tu fichero .mod al directorio 'assets/music' de tu proyecto. **Prueba el sonido en el juego para notar las diferencias reales.** ¡No uses la vista previa!

Aún estamos trabajando en un tracker, así que intentaremos hacer un resumen rápido de cómo funciona:

```
C-5 01 v64 ...
--- -- --- ---
 |   |  |   |
 |   |  |   +-- Efectos (Cambios de volumen, arpeggios, panning, etc.)
 |   |  +------ Valor del columen, irrelevante en ficheros .MOD. (La mayoría de ejemplos aquí lo omiten
				y muestran tres puntos en su lugar)
 |   +--------- Instrumento
 +------------- Nota y octava (Una nota C en la 5th octava. El guión puede ser una #, que significa una nota aguda. C#, D#)
```

Esto es lo que forma una fila de un canal. Las filas pueden estar vacías o pueden llenarse parcialmente (con solo un efecto, por ejemplo). Hay 4 de esas columnas en total.

Cualquier parte de esta documentación donde vea datos que comienzan con ModPlug Tracker MOD, puedes copiarlos en bloque en OpenMPT. Cualquier dato copiado de OpenMPT se ve así cuando lo pegas en cualquier aplicación de texto.

# Limitaciones importantes

Debe haber **SOLO** 4 canales en tu fichero .MOD. Uno más o uno menos y no funcionará como debe.

**Esta es una limitación impuesta por la propia Gameboy, que tiene 4 canales de polifonía en todo momento.**

Además, solo se pueden usar ciertos instrumentos en ciertos canales. Aquí hay una tabla que documenta dónde deben ir los instrumentos. También se debe a que Gameboy asigna instrumentos basados en el canal. Esto está conectado directamente al silicio del chip y no se puede cambiar.

| Canal #       | Tipo de sonido | Rango de Nota<sup>1</sup> | Instrumentos | Efectos               |
| ------------- | -------------- | ------------------------- | ------------ | --------------------- |
| Canal 1 y 2   | Pulsos         | C3 a B8                   | 1-4          | 0, B, C, D, E8, EC, F |
| Canal 3       | Ondas          | C3 a B8                   | 8-15         | 0, E8 y EC            |
| Canal 4       | Ruidos         | Solo C5                   | 16-31        | B, C, D, E8, EC, F    |

*<sup>1</sup> Este rango de notas es para trackers que muestran sus notas en un rango de C1 a C8, como lo hace OpenMPT. Si está utilizando un tracker que puede llegar tan bajo como a C0 (como MilkyTracker), los rangos de notas son una octava (número) más bajos (por ejemplo, C3 a B8 en MPT suena igual que C2 a B7 en Milky).*

# Limitaciones de volumen

Los canales 1, 2 y 4 solo tienen una cuarta parte del rango del volumen que admiten los trackers (que es de 0h a 40h). Los volúmenes admitidos son:

'00, 04, 08, 0C, 10, 14, 18, 1C, 20, 24, 28, 2C, 30, 34, 38, 3C'

Cualquier otro volumen se cambiará por el más cercano soportado. Por ejemplo C40 pasaría a ser C3C.

**Los volúmenes por encima de C40 no son soportados y se convertirán de forma errónea.**

Mientras que en un tracker el volume se restablece con cada nota, esto no será así en la conversión. Digamos que tenemos esto:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C..|
|...........|
|E-502......|
```

En el tracker, la nota E-5 se reanudará a todo volumen después del efecto C00.

En el juego, no escucharás la nota E-5. Esto se debe a que C00 persiste hasta que se establezca otro efecto Cxx. Debes hacer lo siguiente:

```
ModPlug Tracker MOD
|C-502...C40|
|...........|
|...........|
|...........|
|........C..|
|...........|
|E-502...C40|
```

Esto se aplica a cualquier instancia de volumen. Si tienes una nota en C24 que poco a poco disminuye, por decir a C18, necesitas restablecer cada nota a C24 (o superior o inferior, dependiendo de lo que quieras conseguir).

Mientras tanto, el Canal 3 solo obtiene una cuarta parte de eso, con un rango de volumen de 00, 10, 20, 40. Y más allá de eso, tendrás que introducir el instrumento y tener en cuenta para que el cambio de volumen tenga algún efecto, a menos que sea un efecto de volumen C00. Por ejemplo:

```
ModPlug Tracker MOD
|C-511...C40|
|...........|
|...........|
|...........|
|........C20|
|...........|
|G-511...C40|

```

No escucharás ningún cambio de volumen desde el C20 en el juego, así que lo que tenemos que hacer es agregar una nota allí para registrar el cambio de volumen.

```
ModPlug Tracker MOD
|C-511...C40|
|...........|
|...........|
|...........|
|C-511...C20|
|...........|
|G-511...C40|
```

# Instrumentos disponibles

Los números de esta lista representan números en base 10 que cada instrumento usa en OpenMPT. Al lado de estos números (entre paréntesis) se encuentra el equivalente en base 16 de estos números para los usuarios de MilkyTracker.

Los canals de pulso tienen 4 instrumentos (del 1 a 4):

1. 25% de pulso
2. 50% de pulso (a veces llamado onda cuadrada)
3. 75% de pulso (25% de pulso pero invertido)
4. 12.5% de pulso

Los instrumentos de 5 a 7 se dejan en blanco de forma intencionada.

El canal de onda tiene 8 instrumentos (del 8 al 15):

8. Zumbido (El código fuente lo llama ‘random :P’)
9. Resonancia (útil para SFX)
10. Sierra de sincronización
11. Sierra circular
12. Pulso de octava + Triángulo
13. Dientes de sierra
14. Cuadrado
15. Seno

Los instrumentos del 16 a 23 usan Ruido Periódico (bucle) y varios tonos, mientras que los instrumentos del 24 a 32 usan ruido pseudoaleatorio en varios tonos.

Los canals de ruido tienes la mayoría de los instrumentos, pero se debe en parte a como trata la Gameboy los ruidos.

Los apodos y las descripciones junto a estos instrumentos no son oficiales para GBT Player. Están destinados a ayudar a identificar estos instrumentos de ruido de un vistazo.

Ruido Periódico:

16. (10) "tartamudeo" - Un cuadrado más un pulso en anchos de pulso aleatorios
17. (11) "retumbo" - La misma forma de onda pero más rápida
18. (12) "motor" - La misma forma de onda pero aún más rápido
19. (13) "tono bajo" - Suena como D5
20. (14) "matiz" - Suena como E5 + 50cents
21. (15) "tono medio" - Suena como B5 + 50cents
22. (16) "sobretono" - Suena como D6 + 50cents
23. (17) "tono alto" - Suena como D7

Ruido Pseudo Aleatorio

24. (18) "terremoto" - Un cuadrado con un pulso delgado con anchos de pulso aleatorios
25. (19) "nave espacial" - La misma forma de onda pero más rápida
26. (1A) "océano" - La misma forma de onda pero aún más rápido
27. (1B) "scratch" - Te haces una idea de lo que es
28. (1C) "glitch" - Una muestra de ruido blanco bastante limpia, no relacionada con otros instrumentos
29. (1D) "volcán" - Un pulso con un ancho de pulso que cambia rápidamente
30. (1E) "grito" - La misma forma de onda pero más rápido
31. (1F) "estática" - La misma forma de onda pero aún más rápido

No hay más instrumentos más allá de 31.

# Efectos

| EFECTO  |          NOMBRE      | NOTAS                                                                                      |
| :-----: | :------------------: | :----------------------------------------------------------------------------------------- |
| **0xy** |         Arpeggio     | Donde x = 2nd nota, y = 3rd nota, en semitonos. Debes configurar el instrumento antes de usar este efecto.  |
| **Bxx** |           Jump       | Salto a una posición específica de la canción, 'xx.'                                       |
| **Cxx** |         Volumen      | Establece el volumen a xx. Lee la sección de Limitaciones de volumen para más información. |
| **Dxx** |    Salto de patrón   | Salta al siguiente patrón, donde xx es la fila donde debería saltar en el siguiente patrón. Usar esto en el ultimo patrón corromperá la canción al leer datos basura más allá de la propia canción. |
| **E8x** |           Pan        | Establece el panning a x. 0-3 = Izquierda, 4-B = Centro, C-F = Derecha                     |
| **ECx** |     Corte de Nota    | Corta la nota después de x ticks. 0 < x < velocidad-1                                      |
| **Fxx** | Establecer velocidad | Establece la velocidad de la canción a xx. Los valores van de 01 a 1F. El valor representa cuanto frames debe esperar la canción antes de cambiar de fila. Cambiar la velocidad BPM no tiene efecto sobre la conversión. |

## Tabla de velocidades

| Valor Fxx (en el tracker) | BPM (en el tracker) | BPM (en el juego) |
| ------------------------- | ------------------- | ----------------- |
| **F01<sup>1</sup>**       | 750 BPM             | 900 BPM           |
| **F02<sup>1</sup>**       | 375 BPM             | 450 BPM           |
| **F03<sup>1</sup>**       | 250 BPM             | 300 BPM           |
| **F04<sup>1</sup>**       | 187.5 BPM           | 225 BPM           |
| F05                       | 150 BPM             | 150 BPM           |
| F06                       | 125 BPM             | 128.57 BPM        |
| F07                       | 107.14 BPM          | 112.50 BPM        |
| F08                       | 93.75 BPM           | 100 BPM           |
| F09                       | 83.33 BPM           | 90 BPM            |
| F0A                       | 75 BPM              | 81.82 BPM         |

Esta tabla no es una tabla completa, pero sirve para mostrar algunos ejemplos. Cabe destacar algunas discrepancias, aunque son pequeñas para notarlas, a excepción de los valores marcados con 1.

Se puede notar que el valor del efecto F, cuando es convertido a decimal, es solo el divisor de velocidad. Por ejemplo, F03 divide los BPM entre 3 (750/3 = 250, o 900/3 = 300).

Debido a como está configurado GB Studio, un efecto F05 a 60hz, que daría como resultado 180 BPM en el juego, aquí es imposible.

*Aunque no está presente en GB Studio, GBT tiene un flag llamado -velocidad que hará que los BPM se comporten de manera diferente, lo que requeriría efectos F96 para cada velocidad, ya que no habrá ninguna conversión interna para aproximar la velocidad. Esta es la razón por la cual F01 a F04 requieren F96 en ambos modos, no hay un equivalente en la velocidad del tracker.*

**1. Los valores marcados con 1 requieren un efecto F96 adicional para que la canción se aproxime a la velocidad más cercana cuando se convierta, o establecer el BPM de la canción en 150. Este efecto F96 se puede eliminar una vez que hayas terminado la canción. No habrá diferencia ya que GBT lo ignora. Solo está aquí para configurar el BPM algo más parecido a como quedaría en la versión del juego.**

# Trucos

Esta sección mostrará algunos trucos de cómo usar GBT para realizar mejores sonidos.

### **1. Alta velocidad**

Al usar F01 a F04, se puede lograr una granularidad (nivel de detalle) mucho mayor cuando se trata de cambiar volúmenes y crear sonidos. Esto significa que con una velocidad lo suficientemente alta, puede crear cuerpos más variados para sonidos, con una especie de efectos envolventes o más elaborados (como los ecos, que explicaré en un momento).

Este truco significa que convertimos una bacteria endeble y plana a una bacteria en condiciones. 

Aquí tenemos un ejemplo de una Snare Drum, a velocidad F02.

```
ModPlug Tracker MOD
|C-526...C40
|C-527...C28
|........C20
|........C18
|........C10
|........C08
|........C04
|........C..
(esto está en el canal de ruido)
```

Si es más largo de lo que necesitas, solo tienes que coger desde abajo lo que quieras.

También puedes usar esto para tonos y otros sonidos, como notas cortas de staccato o flautas que se desvanecen.

**Si haces esto, recuerda que el hardware de sonido de Gameboy tiene un molesto error que resetea la fase de cada onda con volumen, por lo que podemos obtener un ruido rasposo en algunos emuladores y en la Gameboy real.**

### **2. Ecos de canal**

Funciona en la mayoría de velocidades. Es útil cuando necesitas una melodía por encima de algún eco ostinato, frase o cualquier otra cosa.

Para mostrarlo, voy a intentar representarlo de forma sencilla en vez de como en un tracker:

```
A _ B _ C _ E _ G _ E _ C _ B _ 
Sin eco de canal 1

    +-----+ +-----+ +-----+
A _ B a C b E c G e E g C e B c 
+-----+ +-----+ +-----+ +-----+
     
Con eco de canal 1 (las minúsculas son los ecos)
```

¿Ves cómo cada letra minúscula está por detrás de una mayúscula? Así es como funciona el truco. Al tener notas más cortas que, en cada paso, tienen otra nota más silenciosa que está por detrás, obtienes un efecto de eco.

No se puede explicar demasiado bien a través de texto, pero si miras el video de **explod2a03** explicando este truco lo entenderás mucho mejor: https://www.youtube.com/watch?v=6GI9gngTn_Y

La mejor manera de hacer esto en un tracker es usar un canal de forma temporal, copiando tu secuencia de notas en él, retrasarlo en 3 (o lo que necesites) filas, y hacer clic derecho y seleccionar ‘Amplificar…’. Después estableces la amplitud en algo menos del 50%.

Después de eso, debe tener ambos canales "alternativos". Seleccione la totalidad del canal con los ecos (de arriba a abajo), vete al canal con el que desea fusionar los ecos, haz clic derecho y selecciona "Pegado especial", luego haz clic en "Mezclar pegado" (Debería tener un acceso directo, así que si lo aprendes puede ser bastante útil).

### 3. Volumen envolvente

¿Tienes prisa? No hay problema, con un sencillo truco crearás sonidos envolventes lineales:

1. Selecciona dos valores de volvumen / C de dos notas separadas (dentro del mismo canal), y todo el resto
2. Haz clic derecho y selecciona "Interpolate"
3. Haz clic en "Effect column"
4. ¡Hecho!

Quizás te preguntes cómo va a sonar en el juego. Bueno, sonará lo más parecido posible. Los volúmenes que no se pueden reproducir se ajustarán a los más cercanos.

# Frequently Asked Questions

**Q: ¿Puedo usar ficheros .mp3?**

A: No.

**Q: ¿Puedo usar ficheros .mod que encuentre en internet?**

A: La mayoría de ellos no. Los ficheros .mod tienen que estar hechos de una forma específica como template.mod, y tienen limitaciones.

**Q: ¿Cómo se detiene la reproducción de una nota?**

A: Puedes usar otra nota directamente, o si quieres silenciarla, usa un efecto C00.

**Q: ¡Mi canción suena fatal ¿Qué pasa?**

A: Hay varias razones por lo que puede estar pasando. Tienes que asegurarte de cumplir todo lo que hemos explicado anteriormente (en particular, asegúrate de usar solo los efectos compatibles, que cumples las asignaciones de canales, y que estás usando las frecuencias correctas).

Si estás usando **MilkyTracker**, ten en cuenta que se puede corromper el fichero .mod. Para evitar eso, guarda siempre con formato .XM, que es el formato nativo y exporta cada cambio a formato .mod, pero sin perder el fichero original.

**Q: ¡La velocidad de la canción está mal! ¡Es más rápida en el juego que en el tracker!**

A: Si usas un efecto Fxx superior a F05, deberás tener en cuenta pasar de 50hz a 60hz. El formato .mod en sus orígenes está desarrollado para equipos europeos, que funcionan a 50hz, mientras que la Gameboy funciona 60hz. Una forma de reducir este problema es establecer los BPM a 150 en vez de a 125. Si estás usando OpenMPT (donde no puedes modificar los BPM), un efecto F96 podría valer.

**Q: ¿Puedo reproducir una voz, un clip de sonido o cualquier otra cosa?**

A: No, no en GBT.

LSDj y drivers de sonido más avanzados para Gameboy pueden llegar a hacerlo, pero requiere procesar muchos datos en poco tiempo (nos lleva a que solo se puede reproducir música en ese momento).

**Q: ¿Puedo usar otra herramienta para programar mi música?**

A: ¡Si puedes exportar de forma nativa a formato .mod, adelante! Si no, a la fuerza deberás transcribirlo a un tracker que guarde en formato .mod.

**Q: ¿Puedo usar ficheros .mid?**

A: OpenMPT puede abrir fichero .mid, pero te será complicado reducirlo a 4 canales y aplicar las limitaciones que hacen falta. Te resultará incluso más sencillo meter las cosas a mano y así poder controlar todo lo que pasa, y por supuesto, así saber identificar errores.

**Q: Menudo follón. ¿Qué otras alternativas tengo?**

A: Ahora mismo (Octubre de 2019), ninguna que yo sepa. Es posible que más adelante la gente pueda crear trackers más sencillo u otras herramientas para GB Studio, pero hasta entonces esto es lo que hay.

Es posible comenzar con OpenMPT, a crear una canción normal que no sea para Gameboy, ya que podrás ver mejor lo que realmente hace el tracker, al menos en mi opinión.

Hay un enlace en la sección de consejos sobre cómo comenzar a usar OpenMPT. ¡Te sugiero que lo leas!

**Q: Usé un efecto D00 en mi último patrón para regresar al primero de nuevo, pero la música se cuelga después de la primera reproducción.**

A: Usa un efecto Bxx. Si usas un efecto D00 en el último frame hará que GBT crea que hay más datos más allá de la canción, haciendo que lea datos basura.

**Q: Estoy usando OpenMPT, y algunas notas aparecen en rojo y suenan más altas o más bajas de lo que se supone que deberían sonar.**

A: Ve a la pestaña “General” debajo de los botones New File, Open y Save. Haz clic en el botón grande cerca del campo “Name” que dice “MOD (ProTracker), 4 channels”. Una vez allí, desactiva ProTracker 1⁄2 Mode (MOD) y Amiga Frequency Limits. Esto te pasa porque este format está destinado a ordenadores Amiga y tiene límites de frecuencia.

**Q: La canción comienza con ruido.**

A: Si no estás usando los dos primeros canales, silencialos con un efecto C00.

**Q: ¿Puedo reproducir efectos de sonido?**

A: Todavía no. La única forma de reproducir efectos de sonido es reproducirlo como un archivo de música, pero eso detendrá la música actual y tendrá que reiniciarla después de que el efecto de sonido termine.

## Consejos

- **Guarda los cambios a menudo y haz copias de seguridad.** Siempre es importante hacerlo y no viene mal recordarlo.
- [**Si te atascas, pide ayuda en el canal de Discord, en #music-help.**](https://discord.gg/v9xAJCJ) Suele haber unos cuantos usuarios dispuestos a ayudar la mayoría de las veces.
- **Prueba la música de vez en cuando en el juego.** La música no es una copia identica 1:1, y la vista previa tampoco es una representación real de como se oye en el juego.
- **¡Hazlo fácil!** No te mates intentando ser major que gente que lleva tiempo manejando estas herramientas como LSD. Solo conseguirás quedarte atascado.
- **No tengas miedo a hacerlo mal.** Entiendo que no es un consejo del todo bueno, pero es importante para avanzar. Tu primera composición no será buena, y eso es lo normal. Lo harás mal, pero ganarás experiencia y conocerás tus errores para corregirlos más adelante y mejorar.
- **OpenMPT tiene un manual para empezar a usarlo.** [Link](https://wiki.openmpt.org/Tutorial:_Getting_Started), Léelo si te atascas (o vuelve a pedir más ayuda).
- [**Echa un vistazo a la documentación de GBT Player.**](https://github.com/AntonioND/gbt-player) 
