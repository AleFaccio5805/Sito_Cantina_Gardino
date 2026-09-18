
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';
import { ParallaxDirective } from '../shared/parallax.directive';
import { SondaTerrenoComponent } from '../components/sonda-terreno.component';
import { AllocazioneAnnataComponent } from '../components/allocazione-annata.component';

@Component({
  selector: 'ga-home-page',
  standalone: true,
  imports: [RouterLink, RevealDirective, ParallaxDirective, SondaTerrenoComponent, AllocazioneAnnataComponent],
  template: `
    <div id="home_page_root">
      <!-- HOOK -->
      <section class="hero">
        <video
          class="hero-media"
          autoplay
          muted
          loop
          playsinline
          poster="https://content-studio.biela.dev/cover/3840x2160/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424546432.png/rows-of-old-vines-on-a-tuscan-hillside-at-golden-hour-warm-dust-in-the-air-low-sun-raking-across-the-rows-no-text-allow-only-white-person-european-3840x2160.webp?search_term=vineyard,hillside,golden,hour&img_prompt=Rows+of+old+vines+on+a+tuscan+hillside+at+golden+hour+warm+dust+in+the+air+low+sun+raking+across+the+rows+no+text&w=1920&h=1080&type=image"
          src="https://www.pexels.com/video/8629902/download?search_term=vineyard,rows,sunset,walking&img_prompt=Slow+camera+drift+along+rows+of+old+vines+on+a+hillside+at+golden+hour+two+full+figures+walking+between+the+rows+warm+dust+and+pollen+suspended+in+the+light&w=1920&h=1080&type=video"
        ></video>
        <div class="hero-veil"></div>

        <div class="wrap grid12 hero-copy">
          <div class="col-a">
            <span class="kicker">Val Marana · dal 1958 · 14 ettari</span>
            <h1 class="h-xl">
              <span class="w" style="animation-delay:.1s">Vino</span>
              <span class="w" style="animation-delay:.24s">fatto</span>
              <span class="w" style="animation-delay:.38s">da</span>
              <span class="w it" style="animation-delay:.52s">una</span>
              <span class="w" style="animation-delay:.66s">famiglia</span>
              <span class="w" style="animation-delay:.8s">sola.</span>
            </h1>
            <p class="lead">
              Gardino Armeligi: un cognome doppio, una collina, trentottomila bottiglie l’anno,
              nessun enologo di passaggio. Adesso cerchiamo chi lo racconti anche fuori da qui.
            </p>
            <div class="azioni">
              <a routerLink="/distribuzione" class="btn btn-solid">Diventare distributore <span aria-hidden="true">→</span></a>
              <a routerLink="/storia" class="btn ghost">La nostra storia</a>
            </div>
          </div>
        </div>

        <svg class="hero-arc" viewBox="0 0 1400 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,200 C380,40 1020,40 1400,200" class="draw-path" />
        </svg>
        <span class="edge-label hero-edge">lotto · ponente · 07</span>
      </section>

      <!-- ESTABLISH -->
      <section class="famiglie">
        <div class="wrap grid12">
          <div class="col-a" gaReveal>
            <span class="kicker">Chi siamo</span>
            <h2 class="h-lg">Un cognome doppio,<br />una famiglia sola.</h2>
            <p class="lead">
              Nel 1958 Ersilio e Marta Gardino Armeligi comprarono insieme il podere in fondo alla
              strada bianca: due nomi sul rogito, una cucina sola. Da allora in questa casa non ci
              si divide il lavoro, ci si dividono le stagioni — e il cognome resta intero, come lo
              scrisse il notaio.
            </p>
            <p>
              Siamo sette persone. In vendemmia diventiamo quindici, e sono sempre gli stessi da
              undici anni. Non abbiamo un ufficio marketing: chi risponde al telefono è chi ha
              potato quel filare.
            </p>
            <a routerLink="/storia" class="btn">Leggi la storia</a>
          </div>

          <div class="col-b media" gaReveal [revealDelay]="120">
            <div class="frame">
              <img
                gaParallax
                [parallaxScale]="1.7"
                src="https://content-studio.biela.dev/cover/1600x1200/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424544925.png/oak-barrels-stacked-against-a-rough-lime-plaster-wall-in-a-small-family-cellar-warm-low-light-shallow-depth-of-field-no-text-allow-only-white-person-european-1600x1200.webp?search_term=oak,barrels,cellar,lime,wall&img_prompt=Oak+barrels+stacked+against+a+rough+lime+plaster+wall+in+a+small+family+cellar+warm+low+light+shallow+depth+of+field+no+text&w=800&h=600&type=image"
                alt="Botti di rovere contro il muro a calce della cantina"
              />
            </div>
            <span class="muted-number">58</span>
          </div>
        </div>
      </section>

      <!-- PROVE -->
      <section class="terreno">
        <div class="wrap grid12">
          <div class="col-main">
            <div class="intro" gaReveal>
              <span class="kicker">Perché costa quello che costa</span>
              <h2 class="h-lg">La collina, letta<br />in verticale.</h2>
            </div>
            <ga-sonda-terreno></ga-sonda-terreno>
          </div>
        </div>
      </section>

      <!-- SHOWCASE -->
      <section class="vini">
        <div class="wrap grid12">
          <div class="col-main head" gaReveal>
            <span class="kicker">Quattro etichette, mai una di più</span>
            <h2 class="h-lg">I vini che facciamo<br />e quello che non facciamo.</h2>
          </div>
        </div>

        <div class="wrap griglia-vini">
          <article class="vino featured" gaReveal>
            <div class="img-wrap">
              <img
                gaParallax
                [parallaxScale]="1.6"
                src="https://content-studio.biela.dev/cover/2400x1800/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424544417.png/single-glass-of-deep-red-wine-on-a-worn-wooden-table-in-a-dim-cellar-warm-lamp-light-from-the-side-lime-wall-behind-no-text-allow-only-white-person-european-2400x1800.webp?search_term=red,wine,glass,cellar,tasting&img_prompt=Single+glass+of+deep+red+wine+on+a+worn+wooden+table+in+a+dim+cellar+warm+lamp+light+from+the+side+lime+wall+behind+no+text&w=1200&h=900&type=image"
                alt="Calice di rosso nella cantina"
              />
            </div>
            <div class="vino-testo">
              <span class="lot">riserva · 2.600 bottiglie</span>
              <h3 class="h-md">Terza Botte</h3>
              <p>
                Solo dalla terza botte della fila nord, quella che sta sotto lo spiraglio. Trenta
                mesi di rovere, nessuna filtrazione. Alcune annate non esistono.
              </p>
            </div>
          </article>

          <article class="vino" gaReveal [revealDelay]="80">
            <div class="img-wrap">
              <img
                src="https://content-studio.biela.dev/cover/1600x1200/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424543946.png/dark-grape-bunches-on-the-vine-at-harvest-warm-side-light-shallow-depth-of-field-green-leaves-behind-no-text-allow-only-white-person-european-1600x1200.webp?search_term=grapes,harvest,vine,hands&img_prompt=Dark+grape+bunches+on+the+vine+at+harvest+warm+side+light+shallow+depth+of+field+green+leaves+behind+no+text&w=800&h=600&type=image"
                alt="Uve al momento della vendemmia"
              />
            </div>
            <div class="vino-testo">
              <span class="lot">rosso di collina · 14.000 bottiglie</span>
              <h3>Muro a Secco</h3>
              <p>Il vino di tutti i giorni, quello che beviamo noi a pranzo. Acciaio e sei mesi di botte grande.</p>
            </div>
          </article>

          <article class="vino" gaReveal [revealDelay]="160">
            <div class="img-wrap">
              <img
                src="https://content-studio.biela.dev/cover/1600x1200/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424543557.png/bottle-of-white-wine-on-a-rough-stone-table-near-a-lime-washed-wall-warm-afternoon-light-soft-shadows-no-text-no-labels-allow-only-white-person-european-1600x1200.webp?search_term=white,wine,bottle,stone,table&img_prompt=Bottle+of+white+wine+on+a+rough+stone+table+near+a+lime+washed+wall+warm+afternoon+light+soft+shadows+no+text+no+labels&w=800&h=600&type=image"
                alt="Bottiglia di bianco sul tavolo di pietra"
              />
            </div>
            <div class="vino-testo">
              <span class="lot">bianco macerato · 4.200 bottiglie</span>
              <h3>Càlcina</h3>
              <p>Sei giorni sulle bucce. Prende il nome dal colore del muro della cantina vecchia.</p>
            </div>
          </article>

          <article class="vino" gaReveal [revealDelay]="240">
            <div class="img-wrap">
              <img
                src="https://content-studio.biela.dev/cover/1600x1200/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424543937.png/glass-of-pale-rose-wine-on-a-worn-wooden-table-outdoors-late-afternoon-light-dry-grass-blurred-behind-no-text-allow-only-white-person-european-1600x1200.webp?search_term=rose,wine,glass,summer,table&img_prompt=Glass+of+pale+rose+wine+on+a+worn+wooden+table+outdoors+late+afternoon+light+dry+grass+blurred+behind+no+text&w=800&h=600&type=image"
                alt="Calice di rosato sul tavolo"
              />
            </div>
            <div class="vino-testo">
              <span class="lot">rosato · 3.800 bottiglie</span>
              <h3>Vendemmia di Ponente</h3>
              <p>Uve raccolte all’alba sul versante che guarda il mare. Si fa solo se agosto è stato clemente.</p>
            </div>
          </article>
        </div>

        <div class="wrap grid12">
          <div class="col-main"><a routerLink="/vini" class="btn">Tutte le schede tecniche</a></div>
        </div>
      </section>

      <!-- PROVE -->
      <section class="allocazioni">
        <div class="wrap grid12">
          <div class="col-a" gaReveal>
            <span class="kicker">Allocazione annata</span>
            <h2 class="h-lg">Quello che resta<br />in cantina, oggi.</h2>
          </div>
          <div class="col-b" gaReveal [revealDelay]="120">
            <p class="lead">
              Non produciamo a richiesta: produciamo quello che la collina dà e poi lo dividiamo.
              Questo è il registro aggiornato — quando una riga si chiude, si riapre l’anno dopo.
            </p>
          </div>
          <div class="col-main tabella"><ga-allocazione-annata></ga-allocazione-annata></div>
        </div>
      </section>

      <!-- CONVERT -->
      <section class="convert">
        <img
          class="convert-bg"
          gaParallax
          [parallaxScale]="1.8"
          src="https://content-studio.biela.dev/cover/5120x2160/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424545540.png/wide-view-of-vineyard-hills-at-dawn-with-low-mist-between-the-rows-muted-warm-tones-generous-empty-sky-on-the-left-no-text-allow-only-white-person-european-5120x2160.webp?search_term=vineyard,hills,morning,mist&img_prompt=Wide+view+of+vineyard+hills+at+dawn+with+low+mist+between+the+rows+muted+warm+tones+generous+empty+sky+on+the+left+no+text&w=2560&h=1080&type=image"
          alt="Le colline della Val Marana all'alba"
        />
        <div class="convert-veil"></div>
        <div class="wrap grid12 convert-copy">
          <div class="col-a" gaReveal>
            <span class="kicker">Espansione 2025–2027</span>
            <h2 class="h-lg">Cerchiamo quattro<br />importatori. Non quaranta.</h2>
            <p class="lead">
              Nordics, costa ovest degli Stati Uniti, Giappone, Svizzera tedesca. Chiediamo
              continuità sulle annate, non volumi. In cambio: allocazione garantita, visite in
              cantina, e il nostro numero di telefono diretto.
            </p>
            <div class="azioni">
              <a routerLink="/distribuzione" class="btn btn-solid">Vedi il radar mercati</a>
              <a routerLink="/contatti" class="btn ghost">Parlare con noi</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .hero { min-height: 92vh; display: flex; align-items: flex-end; padding: 9rem 0 7rem; overflow: hidden; }
      .hero-media { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
      .hero-veil {
        position: absolute;
        inset: 0;
        background: linear-gradient(105deg, rgba(36, 28, 24, 0.9) 8%, rgba(59, 18, 32, 0.55) 48%, rgba(59, 18, 32, 0.15) 100%);
      }
      .hero-copy { position: relative; z-index: 3; color: var(--calce); width: 100%; }
      .hero-copy h1 { color: var(--calce); margin: 1.6rem 0 1.8rem; max-width: 16ch; }
      .hero-copy .kicker { color: var(--rovere); }
      .hero-copy p { color: rgba(239, 232, 218, 0.85); }
      .w { display: inline-block; opacity: 0; transform: translateY(0.4em); animation: heroWord 0.9s var(--ease) forwards; margin-right: 0.22em; }
      .w.it { font-style: italic; color: var(--rovere); }
      @keyframes heroWord { to { opacity: 1; transform: none; } }
      .azioni { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.4rem; }
      .ghost { border-color: rgba(239, 232, 218, 0.55); color: var(--calce); }
      .ghost:hover { background: rgba(239, 232, 218, 0.12); }
      .hero-arc { position: absolute; bottom: -2px; left: 0; width: 100%; height: 190px; fill: none; stroke: rgba(169, 113, 63, 0.55); stroke-width: 1; z-index: 2; }
      .hero-edge { right: 1.2rem; bottom: 10%; color: var(--calce); opacity: 0.2; }

      .famiglie { padding: 8rem 0 6rem; background: var(--calce); }
      .famiglie .media { position: relative; }
      .frame { overflow: hidden; border-radius: 6px; border-top-right-radius: 90px; }
      .frame img { width: 100%; height: clamp(320px, 46vw, 560px); object-fit: cover; display: block; }
      .famiglie .muted-number { position: absolute; left: -3rem; bottom: -3rem; color: var(--rovere-scuro); }

      .terreno {
        padding: 7rem 0 8rem;
        background: var(--vino);
        color: var(--calce);
        clip-path: polygon(0 3vw, 100% 0, 100% 100%, 0 100%);
        margin-top: -3vw;
      }
      .terreno h2 { color: var(--calce); }
      .terreno .intro { margin-bottom: 3.5rem; }
      .terreno .kicker { color: var(--rovere); }

      .vini { padding: 7rem 0; background: var(--calce); }
      .vini .head { margin-bottom: 3rem; }
      .vini .kicker { color: var(--rovere-scuro); }
      .griglia-vini {
        display: grid;
        gap: 1.6rem;
        grid-template-columns: 1fr;
        padding: 0 1.4rem;
        margin-bottom: 3rem;
      }
      @media (min-width: 900px) {
        .griglia-vini { grid-template-columns: repeat(3, 1fr); padding: 0 clamp(1.4rem, 5vw, 4.5rem); }
        .featured { grid-column: span 3; display: grid; grid-template-columns: 1.4fr 1fr; align-items: stretch; }
      }
      .vino { background: #f5f0e6; border: 1px solid rgba(107, 63, 34, 0.2); border-radius: 6px; border-top-right-radius: 34px; overflow: hidden; display: flex; flex-direction: column; }
      .img-wrap { overflow: hidden; }
      .vino .img-wrap img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; transition: transform 0.8s var(--ease); }
      .featured .img-wrap { height: 100%; }
      .featured .img-wrap img { aspect-ratio: auto; height: 100%; min-height: 360px; }
      .vino:hover .img-wrap img { transform: scale(1.04); }
      .vino-testo { padding: 1.8rem; display: flex; flex-direction: column; gap: 0.6rem; }
      .vino-testo h3 { font-family: 'Fraunces', serif; font-weight: 200; font-size: 1.85rem; }
      .featured .vino-testo { justify-content: center; }
      .lot { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; letter-spacing: 0.12em; color: var(--rovere-scuro); }

      .allocazioni { padding: 6rem 0 7rem; background: #e7dfd0; }
      .allocazioni .kicker { color: var(--rovere-scuro); }
      .tabella { grid-column: 1 / -1; padding: 0 1.4rem; margin-top: 3rem; }
      @media (min-width: 900px) { .tabella { grid-column: 2 / 12; padding: 0; } }

      .convert { position: relative; padding: 9rem 0; overflow: hidden; }
      .convert-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
      .convert-veil { position: absolute; inset: 0; background: linear-gradient(95deg, rgba(36, 28, 24, 0.92), rgba(59, 18, 32, 0.45)); }
      .convert-copy { position: relative; z-index: 2; color: var(--calce); }
      .convert h2 { color: var(--calce); }
      .convert p { color: rgba(239, 232, 218, 0.82); }
      .convert .kicker { color: var(--rovere); }
    `
  ]
})
export class HomePage {}
