---
title: "Zapisywanie i wczytanie"
draft: false
next: "/docs/project-editor"
nextTitle: "Edytor projektu"
---

## Zapisywanie

Aby zapisaæ projekt, wybierz z menu opcjê `Plik> Zapisz` lub przy pomocy skrótu z klawiatury Ctrl / Cmd + S. Jeœli spróbujesz zamkn¹æ projekt z niezapisanymi zmianami, to program powiadomi Ciê o tym. GB Studio wyœwietli odpowiedni komunikat, dziêki któremu bêdzie mo¿na najpierw zapisaæ projekt, a dopiero póŸniej bêdzie mo¿na wyjœæ z programu. W systemie macOS wszelkie niezapisane zmiany w projekcie bêd¹ reprezentowane przez kropkê na przycisku zamykania okna.

## Wczytanie (ponowne otwarcie projektu)

Aby wczytaæ projekt nad którym siê ju¿ pracowa³o to nale¿y u¿yæ przycisku _Otwórz_ w pocz¹tkowym oknie _Nowy projekt_, lub mo¿na te¿ otworzyæ projekt z menu g³ównego programu `Plik> Otwórz`, a nastêpnie nale¿y przejœæ do folderu projektu i wybraæ plik `.gbsproj`. 

## Kontrola wersji

Uk³ad folderu projektu jak i plik `.gbsproj` zosta³y zaprojektowane w taki sposób aby wspó³pracowa³y z systemami kontrolnymi wersji, takimi jak [Git](https://git-scm.com/). Systemu kontrolne wersji umo¿liwiaj¹ ³atwe œledzenie historii przy ka¿dej zmianie wprowadzanej przez aplikacjê w nowej linii w pliku danych. Jeœli chcesz u¿yæ kontroli wersji w swoim projekcie, mo¿esz po prostu utworzyæ repozytorium w folderze g³ównym projektu. 

Zaleca siê zignorowanie folderu kompilacji (folderu `build`) z repozytorium za pomoc¹ pliku `.gitignore` lub podobnego.

## Kopia zapasowa

Za ka¿dym razem, gdy zapisujesz projekt, poprzednia wersja jest zapisywana w folderze projektu z rozszerzeniem `.gbsproj.bak`. Jeœli kiedykolwiek zajdzie potrzeba przywrócenia poprzedniej wersji projektu, to wystarczy zmieniæ nazwê tego pliku, aby mieæ rozszerzenie `.gbsproj`, a nastêpnie otworzyæ ten plik.
