---
title: "Ustawienia"
draft: false
---

<span class="new">Nowość od wer. 1.2.0</span>

W pasku _nawigacyjnym projektu_ w momencie wybrania menu _ustawienia_ spowoduje przejście do listy ustawień projektu.

## Opcje dla GB Color

GB Studio ma ograniczoną obsługę GB Color, gdy gra działa na kompatybilnym sprzęcie lub emulatorach. Obecnie dostępne są dwie opcje:

- **Tryb podwójnej prędkości** - Gdy ta opcja jest włączona, silnik gry może w pełni wykorzystać zwiększoną szybkość procesora GB Color. Włączenie tej opcji zapobiega przeskakiwaniu muzyki podczas przechodzenia między scenami.

- **Własna paleta kolorów** - Po włączeniu tej opcji, możliwe będzie zastąpienie czterech kolorów z palety kolorów gry. Należy wybrać kolor, który ma zostać zastąpiony, a następnie należy wprowadzić wartości dla koloru czerwony, zielony i niebieski lub wprowadź wartość koloru heksadecymalnego. Przycisk _zamień na heks_ dopasowuje najbliższy dostępny kolor.

<img title="Color Palette" src="/img/screenshots/color-palette.png" width="513">

<img title="Color Palette Edit" src="/img/screenshots/color-palette-edit.png" width="513">

Korzystając z własnej palety kolorów, można stworzyć drastycznie inny odcień swojej gry! Spróbuj eksperymentować, aby zobaczyć, jakie ciekawe efekty możesz wykonać. Jeśli nie podoba Ci się ustawiona paleta kolorów, zawsze możesz kliknąć przycisk _przywróć domyślne_, aby ponownie przywrócić oryginalną paletę kolorów.

<img title="Color Game" src="/img/screenshots/color-game.png" width="592">

## Sterowanie

Sekcja _sterowanie_ pozwala na nadpisanie domyślnych ustawień dotyczących elementów sterujących używanych podczas gry z kompilacji internetowej i okna _uruchom_.

Aby edytować elementy sterujące przycisku, należy zaznaczyć pole wprowadzania. W momencie gdy pole jest podświetlone, należy nacisnąć przycisk, który chcesz przypisać. Aby usunąć wszystkie przypisane klawisze, należy zaznaczyć pole, a następnie nacisnąć klawisz _backspace_ na klawiaturze.

W celu przywrócenia domyślnych ustawień dla sterowania, należy nacisnąć przycisk _przywróć domyślne_.

<img title="Controls" src="/img/screenshots/controls.png" width="507">

## Rodzaj kardridżu

Sekcja _rodzaj kartridżu_ pozwala na określenie kontrolera banku pamięci, którego chcesz użyć i czy bateria zostanie dołączona podczas eksportowania gry do fizycznego kardridżu (wymaga dodatkowego sprzętu i oprogramowania).

Jeśli nie wiesz, co oznaczają te ustawienia, to najlepiej pozostaw je jako domyślne (MBC5 + RAM + BATERIA). Ustawienia domyślne można przywrócić za pomocą przycisku _przywróć domyślne_.

## Własny nagłówek (Header dla wersji Web)

Istnieje możliwość użycia sekcji _własny nagłówek_, aby dodać zawartość do HTML `<head>` podczas generowania kompilacji dla wersji Web. Możesz użyć tego, aby dodać dowolny niestandardowy CSS lub JavaScript do strony HTML wersji Web twojej gry.
