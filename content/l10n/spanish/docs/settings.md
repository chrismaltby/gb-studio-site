---
title: "Settings"
draft: false
---

<span class="new">Novedad en la versión 1.2.0</span>

Si haces clic en el _Project View Button_ seleccionas _Settings_ podrás ver una lista de configuraciones para tu proyecto.

## Opciones para GB Color

GB Studio tiene por el momento soporte limitado para GB Color cuando ejecutes el juego en hardware compatible o en algún emulador. Hay dos opciones disponibles:

- **Use Double Speed Mode** - Al activarlo el motor del juego hará un uso completo de la velocidad de la CPU de GB Color. Activar esta opción ayuda a prevenir errores de música en las transiciones entre escenas.

- **Use Custom Color Palette** - Al activarlo puedes reemplazar los cuatro colores de la paleta. Haz clic en el color que quieres reemplazar y selecciona los valores rojo, verde y azul. Si no introduces los valores hexadecimales correctos, Gb Studio aproximará el color al más cercano correcto.

<img title="Color Palette" src="/img/screenshots/color-palette.png" width="513">

<img title="Color Palette Edit" src="/img/screenshots/color-palette-edit.png" width="513">

¡Usar una paleta personalizada puede cambiar tu juego de forma drástica! Experimenta para ver que puedes crear. Si no te gusta lo que has hecho siempre puedes hacer clic en _Restore Default_ para volver a la paleta de colores original.

<img title="Color Game" src="/img/screenshots/color-game.png" width="592">

## Controles

La sección _Controls_ te permite sobreescribir los controles por defecto cuando juegues desde web o desde la _Play Window_.

Para editar los controles de un botón, haz clic en el cuadro y mientras la entrada está resaltada pulsa la tecla que quieres asignar. Para eliminar esa tecla asignada, usa la tecla _Backspace_.

Para que los controles vuelvan a ser los de por defecto pulsa el botón _Restore Default_.

<img title="Controls" src="/img/screenshots/controls.png" width="507">

## Tipo de cartucho

La sección _Cartridge Type_ te permite escoger que Memory Bank Controller quieres usar y si la batería se incluirá cuando exportes tu juego a un cartucho físico (si requiere hardware y software adicional).

Si no sabes que estás tocando es recomendable dejar esto con los valores por defecto MBC5+RAM+BATTERY haciendo clic en el botón _Restore Default_.

## Cabecera HTML personalizada

Puedes usar la sección _Custom HTML Header_ para añadir contenido a la etiqueta HTML '<head>' cuando exportas tu juego como página web. Puede valer para añadir una hoja de estilos personalizada o una biblioteca javascript adicional.
