
# Gardino e Armeligi — sito cantina (Angular 18)

## Dove sono i file
Tutto il codice è nell'albero a sinistra dell'editor:

```
src/
  index.html            pagina base + favicon + font
  main.ts               bootstrap dell'app
  styles.css            palette (feccia, rovere, calce) e stili globali
  app/
    app.component.ts    shell: nav + router-outlet + footer
    app.routes.ts       rotte lazy: /, /storia, /vini, /distribuzione, /contatti
    pages/              home, storia, vini, distribuzione, contatti
    components/         nav, footer, hero-entrance, sonda-terreno,
                        allocazione-annata, calendario-vendemmia,
                        radar-mercati, configuratore-ordine
    shared/             reveal.directive.ts, parallax.directive.ts
angular.json            configurazione build/serve
package.json            dipendenze e script
```

## Come scaricare il progetto
Tre strade, in ordine di comodità:

1. **Download / Export dall'IDE** — nella barra degli strumenti dell'editor c'è il
   comando di download del workspace: genera uno `.zip` con tutta la cartella di
   progetto (`node_modules` escluso).
2. **Deploy** — dal pulsante di deploy pubblichi il sito e ottieni l'URL pubblico;
   il `vercel.json` in root è già pronto per il rewrite SPA.
3. **Copia manuale** — apri i file dall'albero e copiali; sono in tutto 26 file di
   sorgente, nessun asset binario locale (le immagini sono remote).

## Far girare il progetto in locale
Serve solo Node 18+:

```bash
npm install
npm run dev
```

Poi apri `http://localhost:4200`.

Gli script di `package.json` invocano direttamente il binario locale della CLI
(`node ./node_modules/@angular/cli/bin/ng.js`), quindi non serve installare
`@angular/cli` a livello globale né usare `corepack`.

Build di produzione:

```bash
npm run build      # output in dist/gardino-armeligi
npm run preview
```

## Contenuti da personalizzare
- Recapiti (telefono, email, indirizzo): `src/app/components/site-footer.component.ts`
  e `src/app/pages/contatti.page.ts`.
- Listino e sconti del configuratore: array `etichette` e getter `sconto` in
  `src/app/components/configuratore-ordine.component.ts`.
- Annate e bottiglie allocate: array in
  `src/app/components/allocazione-annata.component.ts`.
- Mercati e volumi export: `src/app/components/radar-mercati.component.ts`.
