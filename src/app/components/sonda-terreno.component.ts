
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

interface Strato {
  nome: string;
  profondita: string;
  nota: string;
  colore: string;
}

@Component({
  selector: 'ga-sonda-terreno',
  standalone: true,
  template: `
    <div id="home_sonda_terreno" class="sonda" #host>
      <div class="colonna">
        <div class="strati">
          @for (s of strati; track s.nome; let i = $index) {
            <div class="strato" [style.background]="s.colore" [class.attivo]="i <= indiceAttivo">
              <span class="prof">{{ s.profondita }}</span>
            </div>
          }
        </div>
        <div class="sonda-asta" [style.height.%]="progresso * 100">
          <span class="punta"></span>
        </div>
      </div>

      <div class="lettura">
        <span class="kicker">Sonda pedologica · parcella Ponente</span>
        <h3 class="h-md">{{ attivo.nome }}</h3>
        <p class="lead">{{ attivo.nota }}</p>
        <div class="barra">
          <span [style.width.%]="progresso * 100"></span>
        </div>
        <span class="lot">profondità raggiunta {{ attivo.profondita }} · scorri per scendere</span>
      </div>
    </div>
  `,
  styles: [
    `
      .sonda { display: grid; gap: 2.5rem; grid-template-columns: 1fr; }
      @media (min-width: 900px) { .sonda { grid-template-columns: 0.85fr 1.15fr; gap: 4rem; align-items: center; } }

      .colonna { position: relative; border-radius: 6px 6px 120px 120px; overflow: hidden; }
      .strati { display: grid; }
      .strato {
        height: 118px;
        position: relative;
        filter: saturate(0.55) brightness(0.72);
        transition: filter 0.8s var(--ease);
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
      }
      .strato.attivo { filter: none; }
      .prof {
        font-family: 'Spline Sans Mono', monospace;
        font-size: 1.125rem;
        color: rgba(239, 232, 218, 0.82);
        padding: 0.7rem 1rem;
        letter-spacing: 0.12em;
      }
      .sonda-asta {
        position: absolute;
        top: 0;
        left: 22%;
        width: 3px;
        background: linear-gradient(to bottom, rgba(239, 232, 218, 0.15), #efe8da);
        transition: height 0.7s var(--ease);
      }
      .punta {
        position: absolute;
        bottom: -9px;
        left: 50%;
        width: 15px;
        height: 15px;
        margin-left: -7.5px;
        background: var(--calce);
        border-radius: 999px;
        box-shadow: 0 0 0 0 rgba(239, 232, 218, 0.6);
        animation: puls 3.2s var(--ease) infinite;
      }
      @keyframes puls {
        0%, 100% { box-shadow: 0 0 0 0 rgba(239, 232, 218, 0.55); }
        60% { box-shadow: 0 0 0 16px rgba(239, 232, 218, 0); }
      }

      .kicker { color: var(--rovere); margin-bottom: 1.2rem; }
      h3 { margin-bottom: 1rem; }
      .barra {
        height: 1px;
        background: rgba(107, 63, 34, 0.25);
        margin: 1.8rem 0 0.9rem;
      }
      .barra span { display: block; height: 1px; background: var(--verderame); transition: width 0.7s var(--ease); }
      .lot { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; letter-spacing: 0.1em; opacity: 0.6; }
    `
  ]
})
export class SondaTerrenoComponent {
  @ViewChild('host') host?: ElementRef<HTMLElement>;
  progresso = 0.1;

  strati: Strato[] = [
    {
      nome: 'Cotico e terra di lavoro',
      profondita: '0–30 cm',
      nota: 'Sotto l’erba spontanea lavoriamo solo con il ripuntatore: nessuna aratura, il suolo resta intero e trattiene l’acqua di marzo.',
      colore: '#6b3f22'
    },
    {
      nome: 'Galestro sfaldato',
      profondita: '30–80 cm',
      nota: 'La roccia si apre in scaglie: la radice ci passa dentro e l’acqua non ristagna mai. È qui che nasce il nerbo dei nostri rossi.',
      colore: '#7f5a36'
    },
    {
      nome: 'Argilla grigia con calcare',
      profondita: '80–160 cm',
      nota: 'La riserva d’acqua per agosto. Dà polpa e sale, e tiene la vigna viva anche nelle annate che non piove da giugno.',
      colore: '#8a7458'
    },
    {
      nome: 'Tufo compatto',
      profondita: '160–240 cm',
      nota: 'Il fondo. Le viti vecchie del 1971 arrivano fin qui: sono le uniche che in vendemmia non chiedono niente.',
      colore: '#a08a6a'
    }
  ];

  get indiceAttivo(): number {
    return Math.min(this.strati.length - 1, Math.floor(this.progresso * this.strati.length));
  }

  get attivo(): Strato {
    return this.strati[this.indiceAttivo];
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const el = this.host?.nativeElement;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const raw = (vh * 0.85 - r.top) / (r.height + vh * 0.5);
    this.progresso = Math.max(0.08, Math.min(1, raw));
  }
}
