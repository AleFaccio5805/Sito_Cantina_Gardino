
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';
import { ParallaxDirective } from '../shared/parallax.directive';

@Component({
  selector: 'ga-vini-page',
  standalone: true,
  imports: [RouterLink, RevealDirective, ParallaxDirective],
  template: `
    <div id="vini_page_root">
      <section class="v-hero">
        <img
          class="v-bg"
          gaParallax
          [parallaxScale]="1.8"
          src="https://content-studio.biela.dev/cover/5120x2160/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424545422.png/dark-cellar-shelf-with-unlabelled-wine-bottles-resting-on-their-side-warm-single-lamp-light-rough-stone-wall-generous-dark-space-on-the-right-no-text-allow-only-white-person-european-5120x2160.webp?search_term=wine,bottles,cellar,shelf&img_prompt=Dark+cellar+shelf+with+unlabelled+wine+bottles+resting+on+their+side+warm+single+lamp+light+rough+stone+wall+generous+dark+space+on+the+right+no+text&w=2560&h=1080&type=image"
          alt="Bottiglie a riposo in cantina"
        />
        <div class="v-veil"></div>
        <div class="wrap grid12 v-copy">
          <div class="col-a">
            <span class="kicker">Schede tecniche</span>
            <h1 class="h-xl">Quattro vini.<br />Nessun secondo fine.</h1>
            <p class="lead">
              Nessuna linea entry level, nessuna edizione limitata inventata a tavolino. Se
              un’annata non regge, quella bottiglia quell’anno non esce.
            </p>
          </div>
        </div>
      </section>

      <section class="schede">
        <div class="wrap grid12">
          <div class="col-main">
            @for (v of vini; track v.nome; let i = $index) {
              <article class="scheda" gaReveal [class.flip]="i % 2 === 1">
                <div class="img">
                  <img [src]="v.img" [alt]="v.alt" />
                  <span class="tag">{{ v.tipo }}</span>
                </div>
                <div class="txt">
                  <h2 class="h-md">{{ v.nome }}</h2>
                  <p class="lead">{{ v.descrizione }}</p>
                  <dl>
                    <div><dt>Uve</dt><dd>{{ v.uve }}</dd></div>
                    <div><dt>Affinamento</dt><dd>{{ v.affinamento }}</dd></div>
                    <div><dt>Bottiglie</dt><dd>{{ v.bottiglie }}</dd></div>
                    <div><dt>Servire a</dt><dd>{{ v.servizio }}</dd></div>
                  </dl>
                </div>
              </article>
            }
          </div>
        </div>
      </section>

      <section class="v-cta">
        <div class="wrap grid12">
          <div class="col-a" gaReveal>
            <h2 class="h-lg">Vi servono i campioni?</h2>
            <p class="lead">
              Spediamo kit di tre bottiglie agli operatori professionali, con le schede tecniche e
              le analisi dell’annata in corso. Basta scriverci due righe.
            </p>
            <a routerLink="/contatti" class="btn btn-solid">Richiedi i campioni</a>
          </div>
          <div class="col-b" gaReveal [revealDelay]="120">
            <span class="muted-number">04</span>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .v-hero { position: relative; padding: 13rem 0 7rem; overflow: hidden; }
      .v-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
      .v-veil { position: absolute; inset: 0; background: linear-gradient(100deg, rgba(36, 28, 24, 0.94), rgba(59, 18, 32, 0.5)); }
      .v-copy { position: relative; z-index: 2; color: var(--calce); }
      .v-copy h1 { color: var(--calce); margin: 1.4rem 0 1.4rem; }
      .v-copy .kicker { color: var(--rovere); }
      .v-copy p { color: rgba(239, 232, 218, 0.82); }

      .schede { padding: 6rem 0; background: var(--calce); }
      .scheda { display: grid; gap: 2rem; padding: 3rem 0; border-bottom: 1px solid rgba(107, 63, 34, 0.2); }
      @media (min-width: 900px) { .scheda { grid-template-columns: 0.95fr 1.05fr; gap: 3.5rem; align-items: center; } .scheda.flip .img { order: 2; } }
      .img { position: relative; overflow: hidden; border-radius: 6px; border-top-right-radius: 60px; }
      .img img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; transition: transform 0.8s var(--ease); }
      .scheda:hover .img img { transform: scale(1.03); }
      .tag {
        position: absolute;
        left: 1rem;
        bottom: 1rem;
        background: var(--calce);
        color: var(--vino);
        font-family: 'Spline Sans Mono', monospace;
        font-size: 1.125rem;
        letter-spacing: 0.14em;
        padding: 0.45rem 1rem;
        border-radius: 999px;
        transform: rotate(-3deg);
      }
      .txt h2 { margin-bottom: 1rem; }
      dl { display: grid; gap: 0.9rem; margin: 1.6rem 0 0; }
      @media (min-width: 620px) { dl { grid-template-columns: 1fr 1fr; } }
      dt { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--rovere-scuro); }
      dd { margin: 0.2rem 0 0; }

      .v-cta { padding: 6rem 0 8rem; background: #e7dfd0; position: relative; overflow: hidden; }
      .v-cta .muted-number { color: var(--vino); display: block; text-align: right; }
      .v-cta h2 { margin-bottom: 1.2rem; }
    `
  ]
})
export class ViniPage {
  vini = [
    {
      nome: 'Terza Botte',
      tipo: 'riserva',
      uve: 'Sangiovese 92%, Colorino 8%',
      affinamento: '30 mesi in botte grande di rovere, 12 in bottiglia',
      bottiglie: '2.600 · solo nelle annate che lo meritano',
      servizio: '17 °C, caraffa un’ora prima',
      descrizione:
        'Nasce da una sola botte, la terza della fila nord, quella sotto lo spiraglio dove la temperatura scende di due gradi. Nessuna filtrazione, nessuna chiarifica: il fondo fa parte del vino.',
      img: 'https://content-studio.biela.dev/cover/1600x1200/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424543561.png/glass-of-deep-red-wine-on-a-worn-wooden-cellar-table-warm-lamp-light-from-the-side-rough-lime-wall-behind-shallow-depth-no-text-allow-only-white-person-european-1600x1200.webp?search_term=red,wine,glass,cellar,tasting&img_prompt=Glass+of+deep+red+wine+on+a+worn+wooden+cellar+table+warm+lamp+light+from+the+side+rough+lime+wall+behind+shallow+depth+no+text&w=800&h=600&type=image',
      alt: 'Calice di riserva in cantina'
    },
    {
      nome: 'Muro a Secco',
      tipo: 'rosso di collina',
      uve: 'Sangiovese 80%, Canaiolo 20%',
      affinamento: '6 mesi in acciaio, 6 in botte grande',
      bottiglie: '14.000 · ogni anno',
      servizio: '15 °C, anche con un po’ di fresco',
      descrizione:
        'Il vino che beviamo a pranzo, prende il nome dai muretti che tengono su le terrazze basse. Succoso, teso, senza legno invadente: fatto per essere finito, non per essere conservato.',
      img: 'https://content-studio.biela.dev/cover/1600x1200/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424543508.png/dark-grape-bunches-on-the-vine-at-harvest-warm-side-light-shallow-depth-of-field-green-leaves-behind-no-text-allow-only-white-person-european-1600x1200.webp?search_term=grapes,vine,harvest,leaves&img_prompt=Dark+grape+bunches+on+the+vine+at+harvest+warm+side+light+shallow+depth+of+field+green+leaves+behind+no+text&w=800&h=600&type=image',
      alt: 'Uve di sangiovese sul filare'
    },
    {
      nome: 'Càlcina',
      tipo: 'bianco macerato',
      uve: 'Trebbiano 70%, Malvasia 30%',
      affinamento: '6 giorni sulle bucce, 8 mesi in anfora e acciaio',
      bottiglie: '4.200 · in esaurimento ogni primavera',
      servizio: '12 °C, in bicchiere largo',
      descrizione:
        'Prende il nome dal colore del muro della cantina vecchia, lo stesso della sua buccia dopo la macerazione. Sapido, con un amaro finale di scorza che chiede cibo grasso.',
      img: 'https://content-studio.biela.dev/cover/1600x1200/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424543495.png/bottle-of-white-wine-on-a-rough-stone-table-near-a-lime-washed-wall-warm-afternoon-light-soft-shadows-no-labels-no-text-allow-only-white-person-european-1600x1200.webp?search_term=white,wine,bottle,stone&img_prompt=Bottle+of+white+wine+on+a+rough+stone+table+near+a+lime+washed+wall+warm+afternoon+light+soft+shadows+no+labels+no+text&w=800&h=600&type=image',
      alt: 'Bottiglia di bianco macerato'
    },
    {
      nome: 'Vendemmia di Ponente',
      tipo: 'rosato',
      uve: 'Sangiovese in pressatura diretta',
      affinamento: '4 mesi in acciaio sui lieviti fini',
      bottiglie: '3.800 · solo se agosto è stato clemente',
      servizio: '10 °C, appena stappato',
      descrizione:
        'Uve raccolte all’alba sul versante che guarda il mare, in cassette piccole, portate in cantina ancora fredde. Pallido, secco, con la salinità che in quel versante non manca mai.',
      img: 'https://content-studio.biela.dev/cover/1600x1200/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424543505.png/glass-of-pale-rose-wine-on-a-worn-wooden-table-outdoors-late-afternoon-light-dry-grass-blurred-in-the-background-no-text-allow-only-white-person-european-1600x1200.webp?search_term=rose,wine,glass,table,summer&img_prompt=Glass+of+pale+rose+wine+on+a+worn+wooden+table+outdoors+late+afternoon+light+dry+grass+blurred+in+the+background+no+text&w=800&h=600&type=image',
      alt: 'Calice di rosato al tramonto'
    }
  ];
}
