
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ga-site-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer id="global_site_footer" class="foot">
      <svg class="foot-arc" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,120 C320,10 880,10 1200,120 Z" />
      </svg>

      <div class="wrap grid12 inner">
        <div class="col-a">
          <span class="kicker">Cantina Gardino e Armeligi</span>
          <h3 class="h-md">Il cancello è aperto <br />dal lunedì al sabato.</h3>
          <p class="lead">
            Ci trovate in fondo alla strada bianca, dove la collina si gira a ponente. Se venite,
            telefonate prima: in vendemmia siamo tra i filari.
          </p>
          <a routerLink="/contatti" class="btn">Scrivici <span aria-hidden="true">→</span></a>
        </div>

        <div class="col-b recap">
          <dl>
            <dt>Indirizzo</dt>
            <dd>Via delle Botti 12<br />53013 Poggio Marana (SI), Italia</dd>
            <dt>Telefono</dt>
            <dd><a href="tel:+390577000120">+39 0577 000 120</a></dd>
            <dt>Email commerciale</dt>
            <dd><a href="mailto:export@gardinoarmeligi.it">export&#64;gardinoarmeligi.it</a></dd>
            <dt>Email cantina</dt>
            <dd><a href="mailto:info@gardinoarmeligi.it">info&#64;gardinoarmeligi.it</a></dd>
            <dt>Orari</dt>
            <dd>Lun–Ven 9:00–17:30 · Sab 10:00–13:00<br />Visite su appuntamento</dd>
          </dl>
        </div>
      </div>

      <div class="wrap grid12">
        <div class="col-main bottom">
          <nav class="fnav">
            <a routerLink="/">Cantina</a>
            <a routerLink="/storia">Storia</a>
            <a routerLink="/vini">Vini</a>
            <a routerLink="/distribuzione">Distribuzione</a>
            <a routerLink="/contatti">Contatti</a>
          </nav>
          <span class="lot">P.IVA 01234560524 · Azienda agricola dal 1958 · Bere responsabilmente</span>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .foot {
        background: var(--vino);
        color: var(--calce);
        padding: 8.5rem 0 3rem;
        position: relative;
        margin-top: -1px;
      }
      .foot-arc {
        position: absolute;
        top: -1px;
        left: 0;
        width: 100%;
        height: 120px;
        fill: none;
        stroke: rgba(169, 113, 63, 0.4);
        stroke-width: 1;
      }
      .inner { margin-bottom: 4rem; row-gap: 3rem; }
      .kicker { color: var(--rovere); margin-bottom: 1.4rem; display: inline-flex; }
      h3 { margin: 0 0 1.2rem; }
      p { color: rgba(239, 232, 218, 0.78); }
      .btn { border-color: rgba(239, 232, 218, 0.5); }
      .btn:hover { background: var(--calce); color: var(--vino); }

      .recap dl { margin: 0; display: grid; gap: 0.2rem; }
      .recap dt {
        font-family: 'Spline Sans Mono', monospace;
        font-size: 1.125rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--rovere);
        margin-top: 1.35rem;
      }
      .recap dd { margin: 0; color: rgba(239, 232, 218, 0.86); line-height: 1.55; }
      .recap a { border-bottom: 1px solid rgba(169, 113, 63, 0.6); }

      .bottom {
        border-top: 1px solid rgba(239, 232, 218, 0.16);
        padding-top: 1.8rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1.4rem;
        justify-content: space-between;
        align-items: center;
      }
      .fnav { display: flex; flex-wrap: wrap; gap: 1.6rem; }
      .fnav a { opacity: 0.8; transition: opacity 0.6s var(--ease); font-size: 1.125rem; }
      .fnav a:hover { opacity: 1; color: var(--rovere); }
      .lot {
        font-family: 'Spline Sans Mono', monospace;
        font-size: 1.125rem;
        letter-spacing: 0.08em;
        opacity: 0.55;
      }
    `
  ]
})
export class SiteFooterComponent {}
