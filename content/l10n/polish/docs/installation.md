---
title: "Instalacja"
date: 2018-01-28T14:14:44Z
draft: false
next: "/docs/getting-started"
nextTitle: "Rozpoczêcie pracy"
---

Najnowsz¹ wersjê programu mo¿na znaleŸæ na [na stronie Itch.io w sekcji Download](https://chrismaltby.itch.io/gb-studio) lub mo¿esz pobraæ [starsze wersje programu z tej strony](/downloads/older-versions).
## Windows

Dostêpne s¹ dwa pakiety instalacyjne programu GB Studio dla systemu Windows.

(1) Wersja _Squirrel Installer_ zawiera prosty instalator. Wystarczy plik rozpakowaæ, uruchomiæ aplikacjê i poczekaæ chwilkê a¿ instalator zainstaluje aplikacje na twój komputer (na dysk C:\ ). Kiedy instalacja dobiegnie koñca, instalator automatycznie utworzy do programu skrót na pulpicie i program GB Studio zostanie uruchomiony.
Program zostanie zainstalowany do `%LocalAppData%\gb_studio`, je¿eli potrzebujesz zainstalowaæ program w innym miejscu, to zaleca siê u¿yæ wersji manualnej. 

(2) Wersja _Manual_ to jest skompresowany plik zip, który posiada wszystkie pliki potrzebne dla programu. Plik zip nale¿y rozpakowaæ w dowolnym miejscu, a nastêpnie wystarczy uruchomiæ plik `gb-studio.exe`, aby rozpocz¹æ pracê w programie.

## macOS

Dla systemy macOS nale¿y rozpakowaæ pobrany plik, a nastêpnie przenieœæ `GB Studio.app` do folderu aplikacji (_Applications_). 

Je¿eli wyst¹pi¹ problemy podczas kompilacji lub uruchomienia twojej gry, byæ mo¿e zajdzie potrzeba zainstalowania Narzêdzia wiersza poleceñ Apple (_Apple's Command Line Tools_). W tym celu nale¿y otworzyæ `Aplikacje / Terminal.app`  (_`Applications/Terminal.app`_) i wprowadzaj¹c nastêpuj¹ce polecenie.
```
xcode-select --install
```

## Ubuntu / Linuksy oparte na Debianie

W przypadku dystrybucji Linuksa opartych na Debianie, pobierz wersjê .deb i uruchom nastêpuj¹ce polecenia (Testowane na Ubuntu 18.10).

```
> sudo apt-get update
> sudo apt-get install build-essential
> sudo dpkg -i gb-studio_1.0.0_amd64.deb
> gb-studio
```

## Fedora / Linuksy oparte na RPM

W przypadku dystrybucji Linuksa opartych na RPM, pobierz wersjê .rpm i uruchom nastêpuj¹ce polecenia (Testowane na Fedorze 29).

```
> sudo yum install libXScrnSaver make lsb
> sudo rpm --ignoreos -i gb-studio-1.0.0.x86_64.rpm
> gb-studio
```
