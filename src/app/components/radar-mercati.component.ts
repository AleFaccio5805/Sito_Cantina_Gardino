
import { Component } from '@angular/core';

interface Mercato {
  nome: string;
  copertura: number;
  capienza: number;
  nota: string;
  stato: 'coperto' | 'parziale' | 'cercasi';
}

@Component({
  selector: 'ga-radar-mercati',
  standalone: true,
  template: `
    <div id="distribuzione_radar_mercati" class="radar">
      <div class="plot">
        <svg viewBox="0 0 360 360" aria-hidden="true">
          @for (r of [60, 105, 150]; track r) {
            <circle cx="180" cy="180" [attr.r]="r" class="griglia" />
          }
          @for (m of mercati; track m.nome; let i = $index) {
            <line x1="180" y1="180" [attr.x2]="px(i, 150)" [attr.y2]="py(i, 150)" class="raggio" />
          }
          <polygon [attr.points]="poligonoCapienza" class="capienza" />
          <polygon [attr.points]="poligonoCopertura" class="copertura draw-fill" />
          @for (m of mercati; track m.nome; let i = $index) {
            <circle
              [attr.cx]="px(i, 150 * (m.copertura / 100))"
              [attr.cy]="py(i, 150 * (m.copertura / 100))"
              r="5"
              class="nodo"
              [class.on]="i === attivo"
            />
          }
          <circle cx="180" cy="180" r="150" class="scan" />
        </svg>

        <div class="etichette">
          @for (m of mercati; track m.nome; let i = $index) {
            <button
              type="button"
              (click)="attivo = i"
              [class.on]="i === attivo"
              [style.left.%]="50 + 47 * cos(i)"
              [style.top.%]="50 + 47 * sin(i)"
            >
              {{ m.nome }}
            </button>
          }
        </div>
      </div>

      <div class="dettaglio">
        <span class="kicker">Radar mercati · aggiornato a marzo</span>
        <h3 class="h-md">{{ mercati[attivo].nome }}</h3>
        <p class="lead">{{ mercati[attivo].nota }}</p>
        <div class="dati">
          <div>
            <span class="num">{{ mercati[attivo].copertura }}%</span>
            <span class="lab">copertura attuale</span>
          </div>
          <div>
            <span class="num">{{ mercati[attivo].capienza - mercati[attivo].copertura }}%</span>
            <span class="lab">spazio disponibile</span>
          </div>
          <div>
            <span class="stato" [attr.data-s]="mercati[attivo].stato"><i></i>{{ mercati[attivo].stato }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .radar { display: grid; gap: 3rem; }
      @media (min-width: 900px) { .radar { grid-template-columns: 1.05fr 0.95fr; align-items: center; gap: 4rem; } }

      .plot { position: relative; width: min(100%, 480px); aspect-ratio: 1; margin: 0 auto; }
      svg { width: 100%; height: 100%; overflow: visible; }
      .griglia { fill: none; stroke: rgba(239, 232, 218, 0.22); stroke-width: 1; }
      .raggio { stroke: rgba(239, 232, 218, 0.16); stroke-width: 1; }
      .capienza { fill: rgba(169, 113, 63, 0.16); stroke: rgba(169, 113, 63, 0.55); stroke-width: 1; stroke-dasharray: 4 6; }
      .copertura { fill: rgba(122, 35, 51, 0.5); stroke: #efe8da; stroke-width: 1.4; transition: all 0.75s var(--ease); }
      .nodo { fill: #efe8da; transition: r 0.6s var(--ease), fill 0.6s var(--ease); }
      .nodo.on { fill: var(--rovere); r: 8; }
      .scan {
        fill: none;
        stroke: rgba(79, 122, 107, 0.65);
        stroke-width: 1;
        stroke-dasharray: 6 940;
        animation: scanning 7s linear infinite;
      }
      @keyframes scanning { to { stroke-dashoffset: -946; } }

      .etichette { position: absolute; inset: 0; }
      .etichette button {
        position: absolute;
        transform: translate(-50%, -50%);
        background: none;
        border: 1px solid transparent;
        color: rgba(239, 232, 218, 0.7);
        font-family: 'Spline Sans Mono', monospace;
        font-size: 1.125rem;
        letter-spacing: 0.08em;
        padding: 0.35rem 0.7rem;
        border-radius: 999px;
        cursor: pointer;
        transition: color 0.6s var(--ease), border-color 0.6s var(--ease), transform 0.6s var(--ease);
      }
      .etichette button:hover { transform: translate(-50%, -50%) translateY(3px); color: #efe8da; }
      .etichette button.on { color: var(--rovere); border-color: rgba(169, 113, 63, 0.7); }

      .kicker { color: var(--rovere); margin-bottom: 1.1rem; }
      h3, p { color: var(--calce); }
      p { color: rgba(239, 232, 218, 0.78); }
      .dati { display: flex; flex-wrap: wrap; gap: 2.4rem; margin-top: 2rem; align-items: center; }
      .num { display: block; font-family: 'Fraunces', serif; font-size: 2.6rem; color: var(--calce); line-height: 1; }
      .lab { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; color: rgba(239, 232, 218, 0.6); letter-spacing: 0.1em; }
      .stato { display: inline-flex; align-items: center; gap: 0.6rem; font-family: 'Spline Sans Mono', monospace; text-transform: uppercase; letter-spacing: 0.14em; }
      .stato i { width: 9px; height: 9px; border-radius: 999px; background: currentColor; }
      .stato[data-s='coperto'] { color: var(--verderame); }
      .stato[data-s='parziale'] { color: var(--rovere); }
      .stato[data-s='cercasi'] { color: #e2a0ad; }
    `
  ]
})
export class RadarMercatiComponent {
  attivo = 2;

  mercati: Mercato[] = [
    { nome: 'ITALIA', copertura: 72, capienza: 80, nota: 'Enoteche e ristoranti fra Toscana, Emilia e Lombardia. Serviamo direttamente, con agenti nostri: qui lo spazio residuo è poco e lo teniamo per i locali storici.', stato: 'coperto' },
    { nome: 'DACH', copertura: 48, capienza: 85, nota: 'Un importatore in Baviera dal 2019. Cerchiamo un partner per Austria e Svizzera tedesca, meglio se lavora piccole aziende e fa formazione in sala.', stato: 'parziale' },
    { nome: 'NORDICS', copertura: 12, capienza: 70, nota: 'Solo qualche pallet in Danimarca. Monopoli e privati: qui vogliamo crescere davvero, con chi accetta allocazioni contenute e continuità sulle annate.', stato: 'cercasi' },
    { nome: 'USA', copertura: 24, capienza: 90, nota: 'New York e Illinois via un importatore con portfolio artigianale. Manca tutta la costa ovest: cerchiamo un secondo partner senza sovrapposizioni.', stato: 'cercasi' },
    { nome: 'UK', copertura: 35, capienza: 65, nota: 'Londra coperta da un merchant indipendente. Spazio nelle contee e nel canale on-trade regionale, con volumi da due pallet a stagione.', stato: 'parziale' },
    { nome: 'JAPAN', copertura: 18, capienza: 60, nota: 'Tokyo, tre ristoranti storici. Vogliamo un importatore che tratti il Terza Botte come vino da carta, non da scaffale.', stato: 'cercasi' }
  ];

  cos(i: number): number {
    return Math.cos((i / this.mercati.length) * Math.PI * 2 - Math.PI / 2);
  }
  sin(i: number): number {
    return Math.sin((i / this.mercati.length) * Math.PI * 2 - Math.PI / 2);
  }
  px(i: number, r: number): number {
    return 180 + r * this.cos(i);
  }
  py(i: number, r: number): number {
    return 180 + r * this.sin(i);
  }

  get poligonoCopertura(): string {
    return this.mercati
      .map((m, i) => `${this.px(i, 150 * (m.copertura / 100))},${this.py(i, 150 * (m.copertura / 100))}`)
      .join(' ');
  }
  get poligonoCapienza(): string {
    return this.mercati
      .map((m, i) => `${this.px(i, 150 * (m.capienza / 100))},${this.py(i, 150 * (m.capienza / 100))}`)
      .join(' ');
  }
}
