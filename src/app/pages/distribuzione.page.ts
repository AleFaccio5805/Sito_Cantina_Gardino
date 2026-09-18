
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';
import { ParallaxDirective } from '../shared/parallax.directive';
import { RadarMercatiComponent } from '../components/radar-mercati.component';
import { ConfiguratoreOrdineComponent } from '../components/configuratore-ordine.component';

@Component({
  selector: 'ga-distribuzione-page',
  standalone: true,
  imports: [RouterLink, RevealDirective, ParallaxDirective, RadarMercatiComponent, ConfiguratoreOrdineComponent],
  template: `
    <div id="distribuzione_page_root">
      <section class="d-hero">
        <div class="wrap grid12">
          <div class="col-a">
            <span class="kicker">Per importatori, agenti, enoteche</span>
            <h1 class="h-xl">
              <span class="w" style="animation-delay:.1s">Cerchiamo</span>
              <span class="w" style="animation-delay:.24s">poche</span>
              <span class="w it" style="animation-delay:.38s">mani</span>
              <span class="w" style="animation-delay:.52s">giuste.</span>
            </h1>
            <p class="lead">
              Trentottomila bottiglie non si spargono ovunque. Preferiamo quattro partner che
              vengano a vendemmiare, piuttosto che quaranta che chiedono solo il listino.
            </p>
            <a href="mailto:export@gardinoarmeligi.it" class="btn btn-solid">export&#64;gardinoarmeligi.it</a>
          </div>
          <div class="col-b cifre">
            <div class="cifra" gaReveal><strong>38.000</strong><span>bottiglie l’anno, totali</span></div>
            <div class="cifra" gaReveal [revealDelay]="100"><strong>6</strong><span>mercati attivi</span></div>
            <div class="cifra" gaReveal [revealDelay]="200"><strong>5</strong><span>cartoni ordine minimo</span></div>
          </div>
        </div>
        <span class="edge-label">export · lotto 07 · val marana</span>
      </section>

      <section class="radar">
        <div class="wrap grid12">
          <div class="col-main">
            <div class="intro" gaReveal>
              <span class="kicker">Dove siamo, dove no</span>
              <h2 class="h-lg">Il radar dei mercati,<br />senza giri di parole.</h2>
            </div>
            <ga-radar-mercati></ga-radar-mercati>
          </div>
        </div>
      </section>

      <section class="conf-sec">
        <div class="wrap grid12">
          <div class="col-main"><ga-configuratore-ordine></ga-configuratore-ordine></div>
        </div>
      </section>

      <section class="modo">
        <div class="wrap grid12">
          <div class="col-main head" gaReveal>
            <span class="kicker">Come lavoriamo insieme</span>
            <h2 class="h-lg">Tre passaggi,<br />nessun contratto capestro.</h2>
          </div>
          <div class="col-main passi">
            <article class="card" gaReveal>
              <span class="n">01</span>
              <h3>Ci si conosce</h3>
              <p>Una call e, se possibile, una visita. Vogliamo sapere a chi venderete, non quanto.</p>
            </article>
            <article class="card" gaReveal [revealDelay]="90">
              <span class="n">02</span>
              <h3>Campioni e allocazione</h3>
              <p>Tre bottiglie con analisi e schede. Se ci intendiamo, fissiamo l’allocazione annuale per etichetta.</p>
            </article>
            <article class="card" gaReveal [revealDelay]="180">
              <span class="n">03</span>
              <h3>Continuità</h3>
              <p>Due spedizioni l’anno, condizioni concordate una volta e mantenute, esclusiva sulla zona se la si merita.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="d-cta">
        <img
          class="cta-bg"
          gaParallax
          [parallaxScale]="1.7"
          src="https://content-studio.biela.dev/cover/5120x2160/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424545444.png/long-rows-of-vines-on-a-gentle-hill-in-late-afternoon-light-warm-earth-tones-wide-empty-sky-on-the-right-side-no-text-allow-only-white-person-european-5120x2160.webp?search_term=vineyard,rows,hills,afternoon&img_prompt=Long+rows+of+vines+on+a+gentle+hill+in+late+afternoon+light+warm+earth+tones+wide+empty+sky+on+the+right+side+no+text&w=2560&h=1080&type=image"
          alt="Filari sulla collina nel pomeriggio"
        />
        <div class="cta-veil"></div>
        <div class="wrap grid12 cta-copy">
          <div class="col-a" gaReveal>
            <h2 class="h-lg">Scriveteci prima<br />della vendemmia.</h2>
            <p class="lead">
              Da settembre a ottobre siamo tra i filari e rispondiamo poco. Il resto dell’anno, in
              genere entro due giorni.
            </p>
            <a routerLink="/contatti" class="btn btn-solid">Vai ai contatti</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .d-hero { padding: 13rem 0 6rem; background: linear-gradient(170deg, #e7dfd0, var(--calce)); position: relative; overflow: hidden; }
      .d-hero .kicker { color: var(--rovere-scuro); }
      .d-hero h1 { margin: 1.4rem 0 1.4rem; max-width: 13ch; }
      .w { display: inline-block; opacity: 0; transform: translateY(0.4em); animation: dw 0.9s var(--ease) forwards; margin-right: 0.2em; }
      .w.it { font-style: italic; color: var(--vino-vivo); }
      @keyframes dw { to { opacity: 1; transform: none; } }
      .cifre { display: grid; gap: 1.6rem; align-content: end; }
      .cifra { border-left: 1px solid rgba(107, 63, 34, 0.35); padding-left: 1.2rem; }
      .cifra strong { display: block; font-family: 'Fraunces', serif; font-weight: 200; font-size: clamp(2.4rem, 4vw, 3.4rem); color: var(--vino); line-height: 1; }
      .cifra span { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; letter-spacing: 0.1em; opacity: 0.7; }
      .edge-label { right: 1.2rem; top: 34%; }

      .radar { padding: 7rem 0 8rem; background: var(--vino); color: var(--calce); clip-path: polygon(0 3vw, 100% 0, 100% 100%, 0 100%); margin-top: -3vw; }
      .radar h2 { color: var(--calce); }
      .radar .kicker { color: var(--rovere); }
      .radar .intro { margin-bottom: 3.4rem; }

      .conf-sec { padding: 6.5rem 0; background: #e7dfd0; }

      .modo { padding: 6rem 0 7rem; background: var(--calce); }
      .modo .head { margin-bottom: 3rem; }
      .modo .kicker { color: var(--rovere-scuro); }
      .passi { display: grid; gap: 1.5rem; }
      @media (min-width: 860px) { .passi { grid-template-columns: repeat(3, 1fr); } }
      .card .n { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; letter-spacing: 0.2em; color: var(--rovere); }
      .card h3 { font-family: 'Fraunces', serif; font-weight: 200; font-size: 1.7rem; margin: 0.7rem 0 0.6rem; }
      .card p { margin: 0; }

      .d-cta { position: relative; padding: 9rem 0; overflow: hidden; }
      .cta-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
      .cta-veil { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(36, 28, 24, 0.9), rgba(107, 63, 34, 0.35)); }
      .cta-copy { position: relative; z-index: 2; color: var(--calce); }
      .d-cta h2 { color: var(--calce); }
      .d-cta p { color: rgba(239, 232, 218, 0.82); }
    `
  ]
})
export class DistribuzionePage {}
