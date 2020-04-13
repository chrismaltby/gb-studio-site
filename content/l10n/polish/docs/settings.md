---
title: "Ustawienia"
draft: false
---

<span class="new">Nowoœæ od wer. 1.2.0</span>

W pasku _nawigacyjnym projektu_ w momencie wybrania menu _ustawienia_ spowoduje przejœcie do listy ustawieñ projektu.

## Opcje dla GB Color

GB Studio ma ograniczon¹ obs³ugê GB Color, gdy gra dzia³a na kompatybilnym sprzêcie lub emulatorach. Obecnie dostêpne s¹ dwie opcje:

- **Tryb podwójnej prêdkoœci** - Gdy ta opcja jest w³¹czona, silnik gry mo¿e w pe³ni wykorzystaæ zwiêkszon¹ szybkoœæ procesora GB Color. W³¹czenie tej opcji zapobiega przeskakiwaniu muzyki podczas przechodzenia miêdzy scenami.

- **W³asna paleta kolorów** - Po w³¹czeniu tej opcji, mo¿liwe bêdzie zast¹pienie czterech kolorów z palety kolorów gry. Nale¿y wybraæ kolor, który ma zostaæ zast¹piony, a nastêpnie nale¿y wprowadziæ wartoœci dla koloru czerwony, zielony i niebieski lub wprowadŸ wartoœæ koloru heksadecymalnego. Przycisk _zamieñ na heks_ dopasowuje najbli¿szy dostêpny kolor.

<img title="Color Palette" src="/img/screenshots/color-palette.png" width="513">

<img title="Color Palette Edit" src="/img/screenshots/color-palette-edit.png" width="513">

Korzystaj¹c z w³asnej palety kolorów, mo¿na stworzyæ drastycznie inny odcieñ swojej gry! Spróbuj eksperymentowaæ, aby zobaczyæ, jakie ciekawe efekty mo¿esz wykonaæ. Jeœli nie podoba Ci siê ustawiona paleta kolorów, zawsze mo¿esz klikn¹æ przycisk _przywróæ domyœlne_, aby ponownie przywróciæ oryginaln¹ paletê kolorów.

<img title="Color Game" src="/img/screenshots/color-game.png" width="592">

## Sterowanie

Sekcja _sterowanie_ pozwala na nadpisanie domyœlnych ustawieñ dotycz¹cych elementów steruj¹cych u¿ywanych podczas gry z kompilacji internetowej i okna _uruchom_.

Aby edytowaæ elementy steruj¹ce przycisku, nale¿y zaznaczyæ pole wprowadzania. W momencie gdy pole jest podœwietlone, nale¿y nacisn¹æ przycisk, który chcesz przypisaæ. Aby usun¹æ wszystkie przypisane klawisze, nale¿y zaznaczyæ pole, a nastêpnie nacisn¹æ klawisz _backspace_ na klawiaturze.

W celu przywrócenia domyœlnych ustawieñ dla sterowania, nale¿y nacisn¹æ przycisk _przywróæ domyœlne_.

<img title="Controls" src="/img/screenshots/controls.png" width="507">

## Rodzaj kardrid¿u

Sekcja _rodzaj kartrid¿u_ pozwala na okreœlenie kontrolera banku pamiêci, którego chcesz u¿yæ i czy bateria zostanie do³¹czona podczas eksportowania gry do fizycznego kardrid¿u (wymaga dodatkowego sprzêtu i oprogramowania).

Jeœli nie wiesz, co oznaczaj¹ te ustawienia, to najlepiej pozostaw je jako domyœlne (MBC5 + RAM + BATERIA). Ustawienia domyœlne mo¿na przywróciæ za pomoc¹ przycisku _przywróæ domyœlne_.

## W³asny nag³ówek (Header dla wersji Web)

Istnieje mo¿liwoœæ u¿ycia sekcji _w³asny nag³ówek_, aby dodaæ zawartoœæ do HTML `<head>` podczas generowania kompilacji dla wersji Web. Mo¿esz u¿yæ tego, aby dodaæ dowolny niestandardowy CSS lub JavaScript do strony HTML wersji Web twojej gry.
