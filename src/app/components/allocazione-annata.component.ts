

import { Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

interface Annata {
  anno: string;
  vino: string;
  bottiglie: number;
  residue: number;
  stato: 'aperta' | 'in esaurimento' | 'chiusa';
}

@Component({
  selector: 'ga-allocazione-annata',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <div id="home_allocazione_annata" class="alloc">
      @for (a of annate; track a.anno + a.vino) {
        <article class="riga" gaReveal [class.chiusa]="a.stato === 'chiusa'">
          <div class="testa">
            <span class="anno">{{ a.anno }}</span>
            <div>
              <h4>{{ a.vino }}</h4>
              <span class="lot">{{ formatta(a.bottiglie) }} bottiglie prodotte · una sola volta</span>
            </div>
          </div>

          <div class="misura">
            <div class="tubo">
              <span class="liquido" [style.width.%]="percentuale(a)"></span>
            </div>
            <span class="val">{{ a.residue }} rimaste</span>
          </div>

          <span class="stato" [attr.data-stato]="a.stato">
            <i class="pallino"></i>{{ a.stato }}
          </span>
        </article>
      }
    </div>
  `,
  styles: [
    `
      .alloc { display: grid; gap: 1px; background: rgba(107, 63, 34, 0.22); border-top: 1px solid rgba(107, 63, 34, 0.22); }
      .riga {
        background: var(--calce);
        display: grid;
        gap: 1.4rem;
        padding: 2rem 1.4rem;
        align-items: center;
        transition: background 0.7s var(--ease);
      }
      @media (min-width: 900px) {
        .riga { grid-template-columns: 1.25fr 1.15fr 0.6fr; padding: 2.1rem 2rem; }
      }
      .riga:hover { background: #f5f0e6; }
      .riga.chiusa { opacity: 0.55; }

      .testa { display: flex; gap: 1.4rem; align-items: baseline; }
      .anno {
        font-family: 'Fraunces', serif;
        font-size: 2.6rem;
        color: var(--rovere);
        line-height: 1;
      }
      h4 { font-family: 'Fraunces', serif; font-weight: 200; font-size: 1.5rem; margin: 0 0 0.3rem; }
      .lot { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; opacity: 0.6; letter-spacing: 0.05em; }

      .misura { display: grid; gap: 0.6rem; }
      .tubo { height: 10px; background: rgba(107, 63, 34, 0.16); border-radius: 999px; overflow: hidden; }
      .liquido {
        display: block;
        height: 100%;
        background: linear-gradient(90deg, var(--vino), var(--vino-vivo));
        border-radius: 999px;
        animation: pulseGlow 4.5s var(--ease) infinite;
      }
      @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(122, 35, 51, 0.35); }
        50% { box-shadow: 0 0 14px 2px rgba(122, 35, 51, 0.4); }
      }
      .val { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; letter-spacing: 0.06em; }

      .stato {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 1.125rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-family: 'Spline Sans Mono', monospace;
        justify-self: start;
      }
      .pallino { width: 9px; height: 9px; border-radius: 999px; background: currentColor; }
      .stato[data-stato='aperta'] { color: var(--verderame); }
      .stato[data-stato='in esaurimento'] { color: var(--rovere); }
      .stato[data-stato='chiusa'] { color: var(--vino); }
    `
  ]
})
export class AllocazioneAnnataComponent {
  annate: Annata[] = [
    { anno: '2022', vino: 'Terza Botte · riserva', bottiglie: 2600, residue: 310, stato: 'in esaurimento' },
    { anno: '2023', vino: 'Muro a Secco · rosso di collina', bottiglie: 14000, residue: 5240, stato: 'aperta' },
    { anno: '2023', vino: 'Càlcina · bianco macerato', bottiglie: 4200, residue: 690, stato: 'in esaurimento' },
    { anno: '2021', vino: 'Terza Botte · riserva', bottiglie: 2400, residue: 0, stato: 'chiusa' }
  ];

  private readonly formatoNumero = new Intl.NumberFormat('it-IT');

  formatta(n: number): string {
    return this.formatoNumero.format(n);
  }

  percentuale(a: Annata): number {
    if (!a.bottiglie) return 0;
    return Math.max(1.5, (a.residue / a.bottiglie) * 100);
  }
}
