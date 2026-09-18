
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';
import { ParallaxDirective } from '../shared/parallax.directive';
import { CalendarioVendemmiaComponent } from '../components/calendario-vendemmia.component';

@Component({
  selector: 'ga-storia-page',
  standalone: true,
  imports: [RouterLink, RevealDirective, ParallaxDirective, CalendarioVendemmiaComponent],
  template: `
    <div id="storia_page_root">
      <section class="s-hero">
        <div class="wrap grid12">
          <div class="col-a testo">
            <span class="kicker">1958 → oggi</span>
            <h1 class="h-xl">
              <span class="w" style="animation-delay:.1s">Sessantasei</span>
              <span class="w it" style="animation-delay:.25s">vendemmie</span>
              <span class="w" style="animation-delay:.4s">di</span>
              <span class="w" style="animation-delay:.55s">seguito.</span>
            </h1>
            <p class="lead">
              Nessuna di queste annate somiglia a un’altra. È l’unico vanto che ci permettiamo.
            </p>
          </div>
          <div class="col-b img-col">
            <img
              gaParallax
              [parallaxScale]="1.7"
              class="mask-doga"
              src="https://content-studio.biela.dev/cover/1600x2000/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424544318.png/two-winemakers-working-together-in-a-small-cellar-checking-a-barrel-warm-lamp-light-rough-lime-walls-documentary-style-full-figures-no-text-allow-only-white-person-european-1600x2000.webp?search_term=winemaker,cellar,work,hands&img_prompt=Two+winemakers+working+together+in+a+small+cellar+checking+a+barrel+warm+lamp+light+rough+lime+walls+documentary+style+full+figures+no+text&w=800&h=1000&type=image"
              alt="Due vignaioli al lavoro in cantina"
            />
          </div>
        </div>
        <span class="edge-label">archivio · cantina vecchia</span>
      </section>

      <section class="linea">
        <div class="wrap grid12">
          <div class="col-main">
            <svg class="filo" viewBox="0 0 40 900" preserveAspectRatio="none" aria-hidden="true">
              <path d="M20,0 C40,180 0,320 20,480 C40,640 0,760 20,900" class="draw-path" />
            </svg>

            @for (t of tappe; track t.anno) {
              <article class="tappa" gaReveal>
                <span class="anno">{{ t.anno }}</span>
                <div>
                  <h3 class="h-md">{{ t.titolo }}</h3>
                  <p class="lead">{{ t.testo }}</p>
                </div>
              </article>
            }
          </div>
        </div>
      </section>

      <section class="citazione">
        <div class="wrap grid12">
          <div class="col-b ritratto" gaReveal>
            <img
              gaParallax
              [parallaxScale]="1.6"
              src="https://content-studio.biela.dev/cover/1600x2000/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424544215.png/full-figure-of-a-vineyard-worker-pruning-old-vines-on-a-hillside-in-winter-light-muted-earth-tones-documentary-style-no-text-allow-only-white-person-european-1600x2000.webp?search_term=vineyard,worker,pruning,winter&img_prompt=Full+figure+of+a+vineyard+worker+pruning+old+vines+on+a+hillside+in+winter+light+muted+earth+tones+documentary+style+no+text&w=800&h=1000&type=image"
              alt="Potatura invernale nei filari vecchi"
            />
          </div>
          <div class="col-a quote" gaReveal [revealDelay]="120">
            <span class="muted-number">71</span>
            <blockquote>
              <p class="h-md">
                “Le viti del ’71 non le tocchiamo. Danno poco e ci fanno perdere tempo. Ma è da lì
                che esce l’unico vino che mio padre avrebbe riconosciuto.”
              </p>
              <cite>Nadia Gardino Armeligi · cantina</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section class="calendario">
        <div class="wrap grid12">
          <div class="col-main">
            <div class="intro" gaReveal>
              <span class="kicker">Un anno di lavoro</span>
              <h2 class="h-lg">Dodici mesi,<br />un solo raccolto.</h2>
            </div>
            <ga-calendario-vendemmia></ga-calendario-vendemmia>
          </div>
        </div>
      </section>

      <section class="s-cta">
        <div class="wrap grid12">
          <div class="col-main" gaReveal>
            <h2 class="h-lg">Il resto ve lo raccontiamo<br />con un bicchiere in mano.</h2>
            <div class="azioni">
              <a routerLink="/contatti" class="btn btn-solid">Prenota una visita</a>
              <a routerLink="/vini" class="btn">Guarda i vini</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .s-hero { padding: 12rem 0 6rem; background: linear-gradient(180deg, #e7dfd0, var(--calce)); overflow: hidden; }
      .s-hero .kicker { color: var(--rovere-scuro); }
      .s-hero h1 { margin: 1.5rem 0 1.4rem; max-width: 14ch; }
      .w { display: inline-block; opacity: 0; transform: translateY(0.35em); animation: sw 0.9s var(--ease) forwards; margin-right: 0.2em; }
      .w.it { font-style: italic; color: var(--vino-vivo); }
      @keyframes sw { to { opacity: 1; transform: none; } }
      .img-col img { width: 100%; height: clamp(380px, 48vw, 640px); object-fit: cover; border-radius: 6px; }
      .edge-label { left: 1.2rem; top: 30%; }

      .linea { padding: 5rem 0 6rem; background: var(--calce); position: relative; }
      .filo { position: absolute; left: -3rem; top: 0; width: 40px; height: 100%; fill: none; stroke: rgba(169, 113, 63, 0.5); stroke-width: 1; display: none; }
      @media (min-width: 1100px) { .filo { display: block; } }
      .tappa { display: grid; gap: 1rem; padding: 2.6rem 0; border-bottom: 1px solid rgba(107, 63, 34, 0.2); }
      @media (min-width: 800px) { .tappa { grid-template-columns: 0.3fr 1fr; gap: 3rem; align-items: start; } }
      .anno { font-family: 'Fraunces', serif; font-size: clamp(2.4rem, 4vw, 3.4rem); color: var(--rovere); line-height: 1; }
      .tappa h3 { margin-bottom: 0.7rem; }

      .citazione { padding: 6rem 0 7rem; background: var(--vino); color: var(--calce); clip-path: polygon(0 2.5vw, 100% 0, 100% 100%, 0 100%); margin-top: -2.5vw; }
      .citazione .ritratto { order: 2; }
      @media (min-width: 900px) { .citazione .ritratto { order: 0; grid-column: 8 / 12; } .citazione .quote { grid-column: 2 / 8; } }
      .ritratto img { width: 100%; height: clamp(340px, 42vw, 560px); object-fit: cover; border-radius: 6px; border-bottom-left-radius: 90px; }
      .quote { position: relative; display: flex; flex-direction: column; justify-content: center; }
      .quote .muted-number { position: absolute; right: 0; top: -4rem; color: var(--rovere); }
      blockquote { margin: 0; position: relative; z-index: 2; }
      blockquote p { color: var(--calce); font-family: 'Fraunces', serif; font-weight: 200; }
      cite { font-family: 'Spline Sans Mono', monospace; font-style: normal; font-size: 1.125rem; letter-spacing: 0.14em; color: var(--rovere); }

      .calendario { padding: 7rem 0; background: #e7dfd0; }
      .calendario .intro { margin-bottom: 3.4rem; }
      .calendario .kicker { color: var(--rovere-scuro); }

      .s-cta { padding: 7rem 0 8rem; background: var(--calce); text-align: left; }
      .azioni { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; }
    `
  ]
})
export class StoriaPage {
  tappe = [
    {
      anno: '1958',
      titolo: 'Il podere in fondo alla strada bianca',
      testo:
        'Ersilio e Marta Gardino Armeligi comprano insieme quattro ettari e una casa con la cantina interrata. Il primo vino lo vendono sfuso ai fiaschettai della valle, in damigiane che tornano indietro vuote ogni lunedì.'
    },
    {
      anno: '1979',
      titolo: 'Il versante di ponente',
      testo:
        'La seconda generazione aggiunge la collina a ponente, con le viti piantate a maggiolino, e un trattore che si accende a mano. Un solo registro di cantina, come dal primo giorno: le decisioni si prendono in cucina, mai in ufficio.'
    },
    {
      anno: '1994',
      titolo: 'La prima bottiglia con l’etichetta',
      testo:
        'Millequattrocento bottiglie di Muro a Secco, etichettate a mano sul tavolo della sala. Sono ancora in cantina tre bottiglie di quell’annata: non si aprono, si guardano.'
    },
    {
      anno: '2011',
      titolo: 'Si smette di comprare uva',
      testo:
        'Da questa vendemmia in azienda entra solo ciò che nasce sui nostri quattordici ettari. La produzione scende del quaranta per cento e non risale mai più. È la scelta che ci definisce.'
    },
    {
      anno: '2019',
      titolo: 'Il primo pallet oltre confine',
      testo:
        'Un importatore bavarese passa per caso, resta due giorni, torna a settembre a vendemmiare. Da allora esportiamo, ma solo verso persone che sono state qui.'
    },
    {
      anno: 'oggi',
      titolo: 'Crescere senza diventare grandi',
      testo:
        'Trentottomila bottiglie, quattro etichette, sette persone dello stesso cognome. Vogliamo aggiungere quattro mercati e nemmeno un ettaro. La collina è quella: più di così non dà.'
    }
  ];
}
