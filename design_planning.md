
# Gardino e Armeligi — design planning

## DNA
Cantina familiare di quattordici ettari in Val Marana: due cognomi sullo stesso cancello, 38.000
bottiglie l'anno, quattro etichette. Vuole crescere **in mercati, non in ettari**. Tono: sobrio,
concreto, artigiano; mai lusso patinato.

**Metafora visiva:** la doga e il cerchio della botte. La forma dell'arco/ellisse ricorre e si
evolve: archi del sito → cerchi che si allargano nell'entrance → ruota del calendario di vendemmia
→ radar dei mercati → colonna stratigrafica arrotondata della sonda del terreno → arco del footer.
**Materiale:** calce grezza del muro di cantina + rovere bagnato di vino.

## Palette (fonti reali della cantina)
| Ruolo | Hex | Fonte |
|---|---|---|
| Primario scuro | `#3B1220` | feccia sul fondo della botte |
| Accento caldo | `#7A2333` | vino nuovo controluce |
| Secondario | `#A9713F` / `#6B3F22` | doga di rovere tostatura media |
| Superficie | `#EFE8DA` / `#D9CEBB` | muro a calce, lato in ombra |
| Accento dato/stato | `#4F7A6B` | verderame sui tralci a maggio |
| Inchiostro | `#241C18` | registro di cantina a china |

## Tipografia
- Display: **Fraunces** 200–300 — grazie irregolari, stessa asimmetria di una doga piallata a mano.
- Testo: **Archivo** 200 — registro amministrativo leggibile, senza vezzi.
- Micro-etichette: **Spline Sans Mono** — numeri di lotto stampigliati sulle botti.
- Tutto il testo ≥ 18px, peso base 200.

## Motion
Carattere **organico**: `cubic-bezier(0.4, 0, 0.2, 1)`, 600–800 ms.
- Entrance cinematografica ≥ 4.4 s (cerchi di botte che si allargano, video di cantina che affiora,
  nome parola per parola). Scroll bloccato su `body` + `documentElement`, sbloccato in `onComplete`,
  `sessionStorage` + replay su hard reload (`performance.getEntriesByType('navigation')[0].type`).
- Moto a riposo: archi che respirano (≤1.02), scansione del radar, tracciato SVG che si disegna
  (`stroke-dashoffset`), pulsazione della punta della sonda, brand mark che ruota lentissimo.
- Hover: PRESS (translateY + ombra che si ritira) su bottoni e card recapito, SQUISH sui mesi del
  calendario, glow respirante sulle barre di allocazione.
- Scroll: sonda del terreno **scroll-controlled**, il resto trigger in viewport (IntersectionObserver).
- Parallax `simple-parallax-js` (scale 1.6–1.8, orientation down, overflow false) su 5 immagini.
- Cursore custom: punto a posizione diretta + alone in ritardo.

## Pagine e ruoli narrativi
1. **Home** — HOOK (hero video vigna, titolo parola per parola) → ESTABLISH (le due famiglie, 60/40)
   → PROVE (sonda del terreno, sezione tagliata in diagonale) → SHOWCASE (vini, un featured 2x +
   tre card di altezza uguale) → PROVE (registro di allocazione) → CONVERT (espansione).
2. **Storia** — hero asimmetrico con ritratto mascherato a doga, linea del tempo con filo SVG che si
   disegna, citazione su fondo vino con numero muto, calendario di vendemmia, CTA visita.
3. **Vini** — hero full-bleed su bottiglie a riposo, schede alternate sinistra/destra, CTA campioni.
4. **Distribuzione** — hero con cifre chiave, radar mercati su fondo vino, configuratore d'ordine,
   tre passi di pari importanza, CTA fotografica.
5. **Contatti** — hero con recapiti cliccabili, modulo reactive forms con errori inline custom e
   toast in alto al centro, colonna informazioni pratiche.
   I recapiti completi sono ripetuti nel footer di **ogni** pagina.

## Componenti custom (problema → comportamento)
- **SondaTerreno** — scroll-linked, scende in quattro strati: risponde a "perché costa di più".
- **AllocazioneAnnata** — bottiglie residue per annata con stato: rende visibile la scarsità.
- **CalendarioVendemmia** — ruota dei 12 mesi: dice quando venire e quando siamo irraggiungibili.
- **RadarMercati** — copertura vs. capienza per mercato: l'importatore capisce subito se c'è spazio.
- **ConfiguratoreOrdine** — cartoni, incoterm, sconti: dal listino confuso alla cifra esatta.

## Note tecniche
Angular 18 standalone, router con lazy loading e scroll restoration, direttive condivise
`gaReveal` e `gaParallax`. Avvio: `npm install` poi `npm run dev` (porta 4200).
