
import { Component } from '@angular/core';

interface Mese {
  m: string;
  vigna: string;
  cantina: string;
  visite: 'aperte' | 'ridotte' | 'chiuse';
}

@Component({
  selector: 'ga-calendario-vendemmia',
  standalone: true,
  template: `
    <div id="storia_calendario_vendemmia" class="cal">
      <div class="ruota">
        <svg viewBox="0 0 320 320" aria-hidden="true">
          <circle cx="160" cy="160" r="150" class="cerchio arc-breathe" />
          <circle cx="160" cy="160" r="112" class="cerchio" />
          @for (m of mesi; track m.m; let i = $index) {
            <line
              [attr.x1]="160 + 112 * cos(i)"
              [attr.y1]="160 + 112 * sin(i)"
              [attr.x2]="160 + 150 * cos(i)"
              [attr.y2]="160 + 150 * sin(i)"
              [class.on]="i === indice"
              class="tacca"
            />
          }
          <line
            class="lancetta"
            x1="160"
            y1="160"
            [attr.x2]="160 + 132 * cos(indice)"
            [attr.y2]="160 + 132 * sin(indice)"
          />
          <circle cx="160" cy="160" r="6" class="perno" />
        </svg>

        <div class="mesi">
          @for (m of mesi; track m.m; let i = $index) {
            <button
              type="button"
              [class.on]="i === indice"
              (click)="indice = i"
              [style.left.%]="50 + 41 * cos(i)"
              [style.top.%]="50 + 41 * sin(i)"
            >
              {{ m.m }}
            </button>
          }
        </div>
      </div>

      <div class="scheda">
        <span class="kicker">Calendario di cantina</span>
        <h3 class="h-md">{{ mesi[indice].m }}</h3>
        <dl>
          <dt>In vigna</dt>
          <dd>{{ mesi[indice].vigna }}</dd>
          <dt>In cantina</dt>
          <dd>{{ mesi[indice].cantina }}</dd>
          <dt>Visite</dt>
          <dd class="stato" [attr.data-v]="mesi[indice].visite">
            <i></i>{{ mesi[indice].visite }}
          </dd>
        </dl>
      </div>
    </div>
  `,
  styles: [
    `
      .cal { display: grid; gap: 3rem; }
      @media (min-width: 900px) { .cal { grid-template-columns: 0.95fr 1.05fr; align-items: center; gap: 4.5rem; } }

      .ruota { position: relative; width: min(100%, 460px); aspect-ratio: 1; margin: 0 auto; }
      svg { width: 100%; height: 100%; }
      .cerchio { fill: none; stroke: rgba(107, 63, 34, 0.35); stroke-width: 1; transform-origin: 160px 160px; }
      .tacca { stroke: rgba(107, 63, 34, 0.4); stroke-width: 1; transition: stroke 0.7s var(--ease); }
      .tacca.on { stroke: var(--vino-vivo); stroke-width: 2; }
      .lancetta { stroke: var(--vino); stroke-width: 1.5; transition: all 0.75s var(--ease); }
      .perno { fill: var(--vino); }

      .mesi { position: absolute; inset: 0; }
      .mesi button {
        position: absolute;
        transform: translate(-50%, -50%);
        background: none;
        border: 1px solid transparent;
        border-radius: 999px;
        padding: 0.45rem 0.8rem;
        cursor: pointer;
        font-family: 'Spline Sans Mono', monospace;
        font-size: 1.125rem;
        color: var(--inchiostro);
        opacity: 0.6;
        transition: transform 0.6s var(--ease), opacity 0.6s var(--ease), border-color 0.6s var(--ease);
      }
      .mesi button:hover { transform: translate(-50%, -50%) scaleY(0.88) scaleX(1.06); opacity: 1; }
      .mesi button.on { opacity: 1; border-color: var(--vino-vivo); color: var(--vino-vivo); }

      .kicker { color: var(--rovere); margin-bottom: 1.1rem; }
      h3 { margin-bottom: 1.4rem; }
      dl { display: grid; gap: 0.35rem; margin: 0; }
      dt {
        font-family: 'Spline Sans Mono', monospace;
        font-size: 1.125rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--rovere);
        margin-top: 1.3rem;
      }
      dd { margin: 0; max-width: 46ch; }
      .stato { display: inline-flex; align-items: center; gap: 0.6rem; text-transform: uppercase; letter-spacing: 0.12em; font-family: 'Spline Sans Mono', monospace; }
      .stato i { width: 9px; height: 9px; border-radius: 999px; background: currentColor; }
      .stato[data-v='aperte'] { color: var(--verderame); }
      .stato[data-v='ridotte'] { color: var(--rovere); }
      .stato[data-v='chiuse'] { color: var(--vino); }
    `
  ]
})
export class CalendarioVendemmiaComponent {
  indice = 8;

  mesi: Mese[] = [
    { m: 'GEN', vigna: 'Potatura secca, filare per filare, a mano.', cantina: 'Travasi e assaggi dalle botti di rovere.', visite: 'ridotte' },
    { m: 'FEB', vigna: 'Si finisce la potatura, si brucia il sarmento.', cantina: 'Assemblaggio delle masse del rosso.', visite: 'ridotte' },
    { m: 'MAR', vigna: 'Legatura dei tralci, semina del sovescio.', cantina: 'Imbottigliamento del Càlcina.', visite: 'aperte' },
    { m: 'APR', vigna: 'Germogliamento: si trema per le gelate.', cantina: 'Riposo dei vini in bottiglia.', visite: 'aperte' },
    { m: 'MAG', vigna: 'Spollonatura e primo verderame sui tralci.', cantina: 'Preparazione delle botti nuove.', visite: 'aperte' },
    { m: 'GIU', vigna: 'Fioritura, palizzatura, sfogliatura a ponente.', cantina: 'Etichettatura manuale dei lotti.', visite: 'aperte' },
    { m: 'LUG', vigna: 'Invaiatura, diradamento dei grappoli.', cantina: 'Pulizia, lavaggi, si affilano le forbici.', visite: 'aperte' },
    { m: 'AGO', vigna: 'Assaggio quotidiano degli acini.', cantina: 'Si prepara la pigiatrice, tutto fermo.', visite: 'ridotte' },
    { m: 'SET', vigna: 'Vendemmia. Si comincia all’alba, si finisce col buio.', cantina: 'Pigiatura, fermentazioni, rimontaggi.', visite: 'chiuse' },
    { m: 'OTT', vigna: 'Ultime uve tardive del Ponente.', cantina: 'Svinature e riempimento delle botti.', visite: 'chiuse' },
    { m: 'NOV', vigna: 'Si raccolgono le foglie, si concima col letame.', cantina: 'Malolattica, cantina a 16 gradi.', visite: 'ridotte' },
    { m: 'DIC', vigna: 'Riposo, si guarda la collina da lontano.', cantina: 'Degustazioni e spedizioni di fine anno.', visite: 'aperte' }
  ];

  cos(i: number): number {
    return Math.cos((i / 12) * Math.PI * 2 - Math.PI / 2);
  }
  sin(i: number): number {
    return Math.sin((i / 12) * Math.PI * 2 - Math.PI / 2);
  }
}
