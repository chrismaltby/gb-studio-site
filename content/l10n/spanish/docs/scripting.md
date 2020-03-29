---
title: "Scripting Events"
draft: false
next: "/docs/custom-events"
nextTitle: "Custom Events"
---

Los scripts de eventos te permiten controlar de forma dinámica partes del juego basadas en interacciones del jugador. Utilízalos, por ejemplo, para conectar escenas, dar diálogos a personajes o crear otras escenas.

Cuando se selecciona una escena, un actor o un trigger en el _World Editor_, en el _Editor Sidebar_ existirá un botón _Add Event_ en la zona inferior derecha. Haz clic allí para añadir eventos. Si ya existen eventos serán listados en esta zona siendo el primero en ejecutarse el que más arriba esté.

Cuando añades eventos a actores, estos se ejecutarán cuando el personaje esté junto a ellos y pulses el botón de interacción. Los eventos en triggers se ejecutarán cuando el jugador esté sobre ellos. Un uso común, por ejemplo, es usar un trigger para cambiar la escena como si fueran puertas. Como los eventos de las escenas se ejecutan tan pronto como se carga esa escena, es útil configurar la escena en función de variables o para iniciar una escena cinemática.

## Añadir eventos

Después de hacer clic en el botón _Add Event_, un menú te permitirá seleccionar que evento quieres añadir. Si empiezas a escribir puedes filtrar los resultados o puedes desplazarte con el scroll para encontrar el evento que quieres usar. Haz clic en el evento o pulsa la tecla _Enter_ del teclado para añadir el evento que esté seleccionado.

## Copiar / Pegar

¿Ves la flecha apuntando hacia abajo al lado del nombre del evento? Si haces clic en esa flecha puedes seleccionar la opción de copiar. Si después pulsas en la flecha de otro eventos puedes pegarlo antes o después del evento seleccionado.

<span class="new">Novedad en la versión 1.2.0</span>

Puedes pulsar la tecla _Alt_ del teclado para convertir todos los botones de _Add Event_ en _Paste Event_ permitiendo pegar eventos en un flujo agrupados.

## Eventos de texto

- **Text: Display Dialogue**  
  Muestra un cuadro de dialogo distribuido en tres líneas con 18 carácteres por línea (52 caráscteres en total), en la parte inferior de la pantalla. Este será el evento que más se utilice para interactuar con actores en el juego.  
  El cuadro con el texto aparecerá desde abajo y desaparecerá hacia abajo.  
  <img src="/img/events/display-dialogue.png" class="event-preview" />
  <img src="/img/events/display-dialogue-preview.png" class="event-preview" />
  <br />

  - Si utilizas el bóton _+_ puedes crear secuencias de diálogo y solo desaparecerá el cuadro de texto con el último diálogo.  
    <span class="new">Novedad en la versión 1.2.0</span>
  - Puedes mostrar el valor de cualquier variable usando el identificador de dicha variable (por ejemplo '$L0$' sería la variable local 0 y `'182$' sería la variable global 182).
  - Puedes mostrar si quieres un avatar en la parte izquierda del cuadro de diálogo haciendo clic en el botón _Add Avatar_. Puedes seleccionar cualquier sprite que tenga un único frame (`16px` x `16px`). Usar un avatar reducirá la cantidad de caracteres por línea a 16 en cada línea.

- **Text: Display Multiple Choice**  
  Muestra una selección de dos opciones, haciendo que una variable específica sea_true_ si se selecciona la primera opción y _false_ si se selecciona la segunda.  
  <img src="/img/events/display-multiple-choice.png" class="event-preview" />
  <img src="/img/events/display-multiple-choice-preview.png" class="event-preview" />

- **Text: Display Menu** <span class="new">Novedad en la versión 1.2.0</span>  
  Muestra un menú con varias opciones, haciendo que una variable específica reciba el valor de la opción seleccionada. Cada elemento tiene una longitud máxima de '6' caracteres.  
  Se proporcionan varios diseños. El 'Menú' (que se muestra a continuación) sería una sola columna en el lado derecho de la pantalla y el 'Diálogo' muestra un cuadro de diálogo de ancho completo con dos columnas. Puedes configurar el botón 'B' para cerrar el menú y la variable pasará al valor '0' y también puede hacer que el último elemento del menú también sea '0'.
  <img src="/img/events/menu.png" class="event-preview" />
  <img src="/img/events/menu-preview.png" class="event-preview" />

* **Text: Set Animation Speed**  
  Configura la velocidad con la que aparece y desaparece un cuadro de dialogo y lo rápido que el texto aparecerá dentro.
  <img src="/img/events/text-animation-speed.png" class="event-preview" />

## Eventos sobre escenas

- **Scene: Change Scene**  
  Es la transición a una nueva escena configurando al jugador en una posición y una dirección específica. Se dibujará una línea que conecta el evento con la escena de destino y un icono como el siguiente <img src="/img/screenshots/destination-end.png" style="height:12px"/>. Es posible arrastrar el icono entre escenas para modificar el evento.  
  <img src="/img/events/switch-scene.png" class="event-preview" />
  <img src="/img/events/switch-scene-preview.png" class="event-preview" />

- **Scene: Store Current On Stack**  
  Almacena la escena actual y el estado del jugador en una pila de escenas. Esto te permite regresar a ese punto exacto usando el evento _Scene Restore_. Se puede usar, por ejemplo, para incluir un script justo antes de un evento _Change Scene_ para abrir un menú, donde esperar a que el jugador interactue y regresar con el evento _Restore Previous From Stack_.  
  <img src="/img/events/scene-stack-push.png" class="event-preview" />

- **Scene: Restore Previous From Stack**  
  Es una transición a la última escena almacenada de la pila de escenas, especificando una velocidad.
  <img src="/img/events/scene-stack-pop.png" class="event-preview" />

- **Scene: Restore First From Stack**  
  Es una transición a la primera escena almacenada de la pila de escenas. Por ejemplo si tienes varios niveles de escenas de menú podrías usar este evento para volver al juego. Este evento vaciará la pila de escenas.  
  <img src="/img/events/scene-stack-pop-all.png" class="event-preview" />

- **Scene: Empty Scene Stack**  
  Limpia la pila de escenas y ninguna escena podrá ser restaurada.  
  <img src="/img/events/scene-stack-clear.png" class="event-preview" />

## Eventos sobre variables

Tu juego tiene 512 variables que pueden ser compartidas por todos los scripts. 
<span class="new">Novedad en la versión 1.2.0</span> Además cada _Actor_, _Trigger_ y _Scene_ tiene 4 variables locales únicas.

- **Variable: Set To 'True'**  
  Da el valor _true_ a una variable.  
  <img src="/img/events/variable-true.png" class="event-preview" />

- **Variable: Set To 'False'**  
  Da el valor _false_ a una variable.  
  <img src="/img/events/variable-false.png" class="event-preview" />

- **Variable: Set To Value**  
  Da el valor a una variable.  
  <img src="/img/events/variable-value.png" class="event-preview" />

- **Variable: Increment By 1**  
  Incrementa el valor de una variable en uno, como máximo hasta _255_. Si el valor era _false_ se convertirá en _1_ (o _true_), y si antes era _true_ ya se convertirá en _2_ y será numérico sucesivo.  
  <img src="/img/events/variable-increment.png" class="event-preview" />

- **Variable: Decrement By 1**  
  Decrementa el valor de una variable en uno, como mínimo hasta _0_. Si el valor era _true_ se convertirá en _0_ (o _false_).  
  <img src="/img/events/variable-decrement.png" class="event-preview" />

- **Variable: Math Functions**  
  Te permite realizar varias operaciones matemáticas con variables.
  _Nota:_ Las variables tienen un valor máximo de 255 y mínimo de 0. Si se supera el máximo se quedará en 255 y si cae por debajo de 0 se quedará en 0.
  <img src="/img/events/variable-math.png" class="event-preview" />

- **Variable: Set Flags** <span class="new">Novedad en la versión 1.2.0</span>  
  Permite establecer 8 valores individuales verdadero/falso en una sola variable. Si se configura así, cualquier valor anterior de la variable se perderá.  
  <img src="/img/events/variable-flags-set.png" class="event-preview" />

- **Variable: Add Flags** <span class="new">Novedad en la versión 1.2.0</span>  
  Convierte los flags seleccionados de una variable a verdadero. Los flags no seleccionados mantendrán su valor anterior.
  <img src="/img/events/variable-flags-add.png" class="event-preview" />

- **Variable: Clear Flags** <span class="new">Novedad en la versión 1.2.0</span>  
  Convierte los flags seleccionados de una variable a falso. Los flags no seleccionados mantendrán su valor anterior.
  <img src="/img/events/variable-flags-clear.png" class="event-preview" />

- **Variable: Reset All Variables To 'False'**  
  Resetea todas las variables de tu proyecto a _false_.  
  <img src="/img/events/variable-reset-all.png" class="event-preview" />

## Eventos de control de flujo

- **If Variable Is 'True'**  
  Condicional que ejecuta una parte del script si la variable especificada es _verdadera_.
  <img src="/img/events/if-true.png" class="event-preview" />

- **If Variable Is 'False'**  
  Condicional que ejecuta una parte del script si la variable especificada es _falsa_.
  <img src="/img/events/if-false.png" class="event-preview" />

- **If Variable Compare With Value**  
  Condicional que ejecuta una parte del script si la variable especificada coincide con una comparación con otro valor que puede ser "Igual a", "Mayor que" o "Menor que" ella.  
  <img src="/img/events/if-variable-value.png" class="event-preview" />

- **If Variable Compare With Variable**  
  Condicional que ejecuta una parte del script si la variable especificada coincide con una comparación con otra variable que puede ser "Igual a", "Mayor que" o "Menor que" ella.  
  <img src="/img/events/if-variable-variable.png" class="event-preview" />

- **If Variable Has Flag** <span class="new">Novedad en la versión 1.2.0</span>  
  Condicional que ejecuta una parte del script si la variable especificada tiene un flag específico como verdadero.  
  <img src="/img/events/if-variable-flag.png" class="event-preview" />

- **If Joypad Input Pressed**  
  Condicional que ejecuta una parte del script si se pulsa un botón específico. No funciona con la pulsación del jugador y se debe usar inmediatamente después del evento _Joypad Input: Pause Script Until Pressed_ si se necesita un tiempo de espera. Este evento solo se ejecutará una vez, por lo que si necesitas que se ejecute cada vez que se pulse un botón específico debes usar el evento _Joypad Input: Attach Script To Button_.
  <img src="/img/events/if-joypad-input.png" class="event-preview" />

- **If Actor At Position**  
  Condicional que ejecuta una parte del script si el actor está en una posición específica.
  <img src="/img/events/if-actor-position.png" class="event-preview" />

- **If Actor Facing Direction**  
  Condicional que ejecuta una parte del script si el actor está mirando hacia una dirección específica.
  <img src="/img/events/if-actor-direction.png" class="event-preview" />

- **If Game Data Saved**  
  Condicional que ejecuta una parte del script si hay disponible un juego guardado.  
  <img src="/img/events/if-game-saved.png" class="event-preview" />

- **Switch** <span class="new">Novedad en la versión 1.2.0</span>  
  Condicional que ejecuta una parte del script dependiendo del valor de una variable entre varias opciones. Primero elegimos cuántas opciones vamos a tener y luego establecemos los valores para comparar y que script ejecutar cuando el valor coincida.
  <img src="/img/events/switch.png" class="event-preview" />

- **Loop Forever**  
  Ejecuta una parte del script en bucle. Recuerda romper el bucle con los eventos Stop Script o Switch Scene o el juego podría no continuar.
  <img src="/img/events/loop.png" class="event-preview" />

- **Label: Define / Label: Goto** <span class="new">Novedad en la versión 1.2.0</span>  
  Crea marcadores en tu script usando _Label: Define_ dando nombres a esos marcadores y saltando a ellos con _Label: Goto_.  
  _Nota:_ El nombre debe coincidir exacto para que funcione. **¡Úsalo con cuidado!**
  <img src="/img/events/label-goto.png" class="event-preview" />

- **Event Group**  
  Permite agrupar eventos bajo una etiqueta y organizarlos en un único bloque.
  <img src="/img/events/event-group.png" class="event-preview" />

- **Script: Stop**  
  Detiene la ejecución de un script.  
  <img src="/img/events/script-stop.png" class="event-preview" />

- **Disable Else** <span class="new">Novedad en la versión 1.2.0</span>  
  Si no necesitas un bloque _Else_ en las estructuras de control de flujo, ahora puedes deshabilitarlas directamente seleccionando _Disable Else_ del menú desplegable del evento. De la misma manera puedes volver a habilitarlo si lo necesitas más tarde.
  <img src="/img/events/disable-else.png" class="event-preview" />

## Eventos de cámara

- **Camera: Move To**  
  Mueve la cámara a una posición específica de la escena.  
  <img src="/img/events/camera-move-to.png" class="event-preview" />

- **Camera: Lock To Player**  
  Mueve la cámara usando como punto central la posición del player. La cámara se mueve también cuando lo hace el player.  
  <img src="/img/events/camera-lock-to-player.png" class="event-preview" />

- **Camera: Shake**  
  Crea un efecto de sacudida de hasta 10 segundos.
  <img src="/img/events/camera-shake.png" class="event-preview" />

## Eventos de pantalla

- **Screen: Fade In**  
  Funde la escena a color blanco.
  <img src="/img/events/screen-fade-in.png" class="event-preview" />

- **Screen: Fade Out**  
  Funde la escena desde color blanco a su imagen original. 
  <img src="/img/events/screen-fade-out.png" class="event-preview" />

## Eventos de actores

- **Actor: Set Direction**  
  Establece la dirección donde mira un actor.
  <img src="/img/events/actor-set-direction.png" class="event-preview" />
  <img src="/img/events/actor-set-direction-preview.png" class="event-preview" />

- **Actor: Set Direction Using Variable** <span class="new">Novedad en la versión 1.2.0</span>  
  Establece la dirección donde mira un actor tomando como referencia el valor de una variable.  
  <img src="/img/events/actor-direction-variables.png" class="event-preview" />

- **Actor: Set Position**  
  Establece la posición en la escena de un actor.
  <img src="/img/events/actor-position.png" class="event-preview" />

- **Actor: Set Position Using Variables**  
  Establece la posición en la escena de un actor usando como valores dos variables.
  <img src="/img/events/actor-position-variables.png" class="event-preview" />

- **Actor: Set Relative Position**  
  Establece la posición en la escena de un actor respecto a su posición actual.
  <img src="/img/events/actor-relative-position.png" class="event-preview" />

- **Actor: Move To**  
  Hace que un actor camine hasta una determinada posición. Se ignorarán las colisiones, por lo que se necesitan varios eventos agrupados para que el actor siga un camino específico simulándolas.  
  <img src="/img/events/actor-move-to.png" class="event-preview" />

- **Actor: Move Relative**  
  Hace que un actor camine hasta una determinada posición respecto a su posición actual.
  <img src="/img/events/actor-relative-move.png" class="event-preview" />

- **Actor: Move To Using Variables**  
  Hace que un actor camine hasta una determinada posición usando como valores dos variables.
  <img src="/img/events/actor-move-to-variables.png" class="event-preview" />

- **Actor: Store Position In Variables**  
  Almacena la posición actual de un actor en dos variables.
  <img src="/img/events/actor-store-position.png" class="event-preview" />

- **Actor: Store Direction In Variable** <span class="new">Novedad en la versión 1.2.0</span>  
  Almacena la dirección donde mira un actor en una variable.
  <img src="/img/events/actor-store-direction.png" class="event-preview" />

- **Actor: Push Away From Player**  
  Empuja a un actor en la dirección donde esté mirando el que empuja. Por defecto se mueve una posición, pero se puede activar que se empuje hasta encontrar una colisión.
  <img src="/img/events/actor-push.png" class="event-preview" />

- **Actor: Emote Bubble**  
  Muestra una burbuja sobre un actor con los estados emocionales: _Shock_, _Question_, _Love_, _Pause_, _Anger_, _Sweat_, _Music_ y _Sleep_. Puedes cambiar los gráficos de estas emociones editando los [UI Elements](/docs/ui-elements#emotes-png) de tu juego.  
  <img src="/img/events/actor-emote.png" class="event-preview" />
  <img src="/img/events/actor-emote-preview.png" class="event-preview" />

- **Actor: Set Animation Frame**  
  Establece el frame de un actor.
  <img src="/img/events/actor-set-frame.png" class="event-preview" />

- **Actor: Set Animation Frame Using Variable** <span class="new">Novedad en la versión 1.2.0</span>  
  Establece el frame de un actor tomando el valor de una variable.
  <img src="/img/events/actor-set-frame-variable.png" class="event-preview" />

- **Actor: Set Animation Speed**  
  Establece la velocidad de animación de un actor.
  <img src="/img/events/actor-animation-speed.png" class="event-preview" />

- **Actor: Set Movement Speed**  
  Establece la velocidad de movimiento de un actor.
  <img src="/img/events/actor-movement-speed.png" class="event-preview" />

- **Actor: Set Player Sprite Sheet**  
  Cambia la sprite sheet del player. Los cambios serán permanentes entre las escenas, así que debes asegurarte de volver a cambiarla.  
  <img src="/img/events/actor-player-spritesheet.png" class="event-preview" />

- **Actor: Collisions Disable** <span class="new">Novedad en la versión 1.2.0</span>  
  Evita que las colisiones afecten a un actor y el jugador podrá atravesarlo. Si se selecciona al jugador, es él que que podrá atravesar a todos los actores.  
  _Nota:_ Aunque las colisiones estén deshabilitadas todavía se podrá interactuar con los actores.  
  <img src="/img/events/actor-collisions-disable.png" class="event-preview" />

- **Actor: Collisions Enable** <span class="new">Novedad en la versión 1.2.0</span>  
  Habilita las colisiones del actor seleccionado.  
  <img src="/img/events/actor-collisions-enable.png" class="event-preview" />

- **Actor: Invoke Script**  
  Ejecuta un script en otro actor de la escena como si el player hubiera interactuado con él.
  <img src="/img/events/actor-invoke.png" class="event-preview" />

- **Actor: Hide**  
  Oculta a un actor. Los actores ocultos no causarán colisión ni se podrá interactuar con ellos. Por ejemplo, puedes ocultar al player si quieres hacer una escena de menú o de título.
  <img src="/img/events/actor-hide.png" class="event-preview" />

- **Actor: Show**  
  Muestra a un actor oculto.
  <img src="/img/events/actor-show.png" class="event-preview" />

## Eventos de sprite

- **Sprites: Hide All**  
  Oculta todos los sprites de una escena. Puede ser útil, por ejemplo, para ocultar lo que no haga falta si haces una escena intermedia o una cutscene.  
  <img src="/img/events/sprites-hide.png" class="event-preview" />

- **Sprites: Show All**  
  Muestra todos los sprites de una escena previamente ocultos.
  <img src="/img/events/sprites-show.png" class="event-preview" />

## Eventos de superposición

- **Overlay: Show**  
  Muestra una ventana blanca o negra por encima de la pantalla del juego actual. Puede usarse para ocultar y luego revelar partes del fondo de la escena, por ejemplo, en la pantalla de título.
  <img src="/img/events/overlay-show.png" class="event-preview" />

- **Overlay: Hide**  
  Oculta una ventana superpuesta.
  <img src="/img/events/overlay-hide.png" class="event-preview" />

- **Overlay: Move To**  
  Mueve una ventana superpuesta a una nueva posición de la pantalla.
  <img src="/img/events/overlay-move-to.png" class="event-preview" />

## Eventos de pulsación

- **Joypad Input: Pause Script Until Pressed**  
  Detiene el script hasta que se pulse un botón.
  <img src="/img/events/joypad-pause.png" class="event-preview" />

- **Joypad Input: Attach Script To Button**  
  Asocia un script cuando se pulsa un botón. Si usas este evento con las fleches de dirección o el botón A, se sobrescribirán las acciones por defecto del juego.
  <img src="/img/events/joypad-attach.png" class="event-preview" />

- **Joypad Input: Remove Attached Script**  
  Elimina un script asociado a un botón restaurando su comportamiento por defecto.
  <img src="/img/events/joypad-attach.png" class="event-preview" />

## Eventos de música

- **Music: Play Track**  
  Reproduce un fichero de sonido, pudiendo configurar que se repita cuando termine.
  <img src="/img/events/music-play.png" class="event-preview" />

- **Music: Stop**  
  Detiene cualquier sonido que esté sonando.
  <img src="/img/events/music-stop.png" class="event-preview" />

## Eventos de sonido

- **Sound: Play Effect** <span class="new">Novedad en la versión 1.2.0</span>  
  Reproduce un efecto de sonido, que puede ser un pitido o un tono con una frecuencia determinada o un choque de timbales. Usando [Custom Events](/docs/custom-events) puedes combinar varios efectos para hacer musiquillas.  
  <img src="/img/events/sound-tone.png" class="event-preview" />
  <img src="/img/events/sound-beep.png" class="event-preview" />
  <img src="/img/events/sound-crash.png" class="event-preview" />

## Eventos de control de tiempo

- **Wait**  
  Detiene el script hasta un máximo de 10 segundos.
  <img src="/img/events/wait.png" class="event-preview" />

- **Timer: Set Timer Script** <span class="new">Novedad en la versión 1.2.0</span>  
  Ejecuta un script repetidamente después de un intervalo de tiempo. El script se mantendrá en segundo plano hasta que se llame al evento _Disable Timer Script_ o se use el evento _Change Scene_.
  <img src="/img/events/timer-set.png" class="event-preview" />

- **Timer: Restart Timer** <span class="new">Novedad en la versión 1.2.0</span>  
  Resetea la cuenta atrás a 0. El script volverá a repetirse las veces que estaba configurado de forma inicial.  
  <img src="/img/events/timer-restart.png" class="event-preview" />

- **Timer: Disable Timer Script** <span class="new">Novedad en la versión 1.2.0</span>  
  Deshabilita el script para que no se pueda volver a ejecutar.  
  <img src="/img/events/timer-disable.png" class="event-preview" />

## Eventos de datos

- **Game Data: Save**  
  Guarda los datos del juego.
  <img src="/img/events/data-save.png" class="event-preview" />

- **Game Data: Load**  
  Carga los datos del juego guardados previamente.
  <img src="/img/events/data-load.png" class="event-preview" />

- **Game Data: Clear**  
  Elimina cualquier dato del juego guardado previamente.
  <img src="/img/events/data-clear.png" class="event-preview" />

## Eventos de miscelanea

- **Comment** <span class="new">Novedad en la versión 1.2.0</span>  
  No tiene funcionalidad en el juego pero te permite dejar comentarios en los scripts. El texto que escribas se coloca automáticamente en el título del evento para que puedas contraer el comentario y seguir leyendo su contenido.
  <img src="/img/events/comment.png" class="event-preview" />  
  También puedes usar el menú desplegable de eventos para deshabilitar y volver a habilitar cualquier evento.
  Los eventos deshabilitados se omitirán cuando se ejecute en el juego.
  <img src="/img/events/event-disable-menu.png" class="event-preview" />
  <img src="/img/events/event-disabled.png" class="event-preview" />
