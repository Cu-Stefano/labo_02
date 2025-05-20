# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Versioni

* OS: ubuntu-latest-version
* node: latest
* jest: 29.7.0

## Installazione e Avvio
 * installare le dipendenze con : npm install
 * eeguire il programma con : npm run
 * eseguire i test con : npm jest

 ## CI
 * on push su main le actions copiano la repository con actions/checkout@v4, buildano il progetto, eseguono i test, e pubblicano la coverage 

