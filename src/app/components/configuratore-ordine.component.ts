
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Etichetta {
  id: string;
  nome: string;
  tipologia: string;
}

@Component({
  selector: 'ga-configuratore-ordine',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div id="distribuzione_configuratore_ordine" class="conf">
      <div class="scelte">
        <span class="kicker">Configuratore di richiesta · listino riservato</span>
        <h3 class="h-md">Dite a noi cosa vi serve.</h3>

        <label class="campo">
          <span>Etichetta</span>
          <select [(ngModel)]="etichettaId">
            @for (e of etichette; track e.id) {
              <option [value]="e.id">{{ e.nome }} — {{ e.tipologia }}</option>
            }
          </select>
        </label>

        <label class="campo">
          <span>Cartoni da 6 bottiglie: {{ cartoni }}</span>
          <input type="range" min="5" max="120" step="5" [(ngModel)]="cartoni" />
          <span class="lot">minimo 5 cartoni · un pallet = 100 cartoni</span>
        </label>

        <div class="toggle">
          @for (t of termini; track t) {
            <button type="button" [class.on]="termine === t" (click)="termine = t">{{ t }}</button>
          }
        </div>
      </div>

      <div class="conto">
        <div class="voce">
          <span>Etichetta</span>
          <strong>{{ etichetta.nome }}</strong>
        </div>
        <div class="voce">
          <span>Cartoni</span>
          <strong>{{ cartoni }}</strong>
        </div>
        <div class="voce">
          <span>Bottiglie</span>
          <strong>{{ bottiglie }}</strong>
        </div>
        <div class="voce">
          <span>Resa logistica</span>
          <strong>{{ formato }}</strong>
        </div>
        <div class="voce">
          <span>Trasporto ({{ termine }})</span>
          <strong>{{ trasporto }}</strong>
        </div>
        <div class="totale">
          <span>La vostra richiesta</span>
          <strong>{{ cartoni }} cartoni</strong>
        </div>
        <p class="nota">
          {{ nota }}
        </p>
        <a class="btn btn-solid" [href]="mailto">
          Richiedi il preventivo <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  `,
  styles: [
    `
      .conf { display: grid; gap: 2.5rem; }
      @media (min-width: 900px) { .conf { grid-template-columns: 1.1fr 0.9fr; gap: 4rem; align-items: start; } }

      .kicker { color: var(--rovere); margin-bottom: 1.1rem; }
      h3 { margin-bottom: 2rem; }

      .campo { display: grid; gap: 0.7rem; margin-bottom: 2rem; }
      .campo > span { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; letter-spacing: 0.1em; text-transform: uppercase; opacity: 0.75; }
      select {
        appearance: none;
        background: transparent;
        border: 0;
        border-bottom: 1px solid rgba(107, 63, 34, 0.45);
        padding: 0.85rem 0.2rem;
        color: inherit;
        font-weight: 200;
      }
      input[type='range'] { accent-color: var(--vino); width: 100%; }
      .lot { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; opacity: 0.55; }

      .toggle { display: flex; flex-wrap: wrap; gap: 0.7rem; }
      .toggle button {
        border: 1px solid rgba(107, 63, 34, 0.4);
        background: transparent;
        border-radius: 999px;
        padding: 0.65rem 1.35rem;
        cursor: pointer;
        transition: background 0.65s var(--ease), color 0.65s var(--ease), transform 0.65s var(--ease);
        font-weight: 200;
      }
      .toggle button:hover { transform: translateY(3px); }
      .toggle button.on { background: var(--vino); color: var(--calce); border-color: var(--vino); }

      .conto {
        background: var(--calce);
        border: 1px solid rgba(107, 63, 34, 0.25);
        border-radius: 6px;
        border-top-right-radius: 34px;
        padding: 2.2rem;
      }
      .voce, .totale { display: flex; justify-content: space-between; gap: 1.4rem; padding: 0.75rem 0; border-bottom: 1px dotted rgba(107, 63, 34, 0.3); }
      .voce span, .totale span { opacity: 0.75; }
      .voce strong, .totale strong { font-weight: 300; font-family: 'Spline Sans Mono', monospace; text-align: right; }
      .totale { border-bottom: 0; margin-top: 0.8rem; align-items: baseline; }
      .totale strong { font-family: 'Fraunces', serif; font-size: 2.2rem; color: var(--vino); }
      .nota { font-size: 1.125rem; opacity: 0.75; margin: 1rem 0 1.6rem; }
    `
  ]
})
export class ConfiguratoreOrdineComponent {
  etichette: Etichetta[] = [
    { id: 'muro', nome: 'Muro a Secco', tipologia: 'rosso di collina' },
    { id: 'calcina', nome: 'Càlcina', tipologia: 'bianco macerato' },
    { id: 'ponente', nome: 'Vendemmia di Ponente', tipologia: 'rosato' },
    { id: 'terza', nome: 'Terza Botte', tipologia: 'riserva, allocata' }
  ];
  termini: string[] = ['Franco cantina', 'Franco destino IT', 'EXW export'];

  etichettaId = 'muro';
  cartoni = 25;
  termine = 'Franco cantina';

  get etichetta(): Etichetta {
    return this.etichette.find((e) => e.id === this.etichettaId) ?? this.etichette[0];
  }
  get bottiglie(): number {
    return this.cartoni * 6;
  }
  get formato(): string {
    if (this.cartoni >= 100) return 'pallet intero';
    if (this.cartoni >= 50) return 'mezzo pallet';
    if (this.cartoni >= 20) return 'bancale misto';
    return 'spedizione singola';
  }
  get trasporto(): string {
    if (this.termine === 'EXW export') return 'a cura del vostro spedizioniere';
    if (this.termine === 'Franco cantina') return 'ritiro in Val Marana';
    return this.cartoni >= 50 ? 'organizzato da noi' : 'da concordare insieme';
  }

  get nota(): string {
    if (this.cartoni >= 100) return 'Un pallet intero: la spedizione la organizziamo noi, con il nostro spedizioniere di fiducia.';
    if (this.etichettaId === 'terza') return 'La Terza Botte è allocata annata per annata: vi diciamo subito quante bottiglie possiamo tenervi da parte.';
    if (this.termine === 'Franco destino IT' && this.cartoni < 50) return 'Sopra i 50 cartoni la logistica in Italia la seguiamo direttamente noi.';
    return 'Il listino riservato agli operatori professionali ve lo mandiamo via mail, insieme alle schede tecniche e all’allocazione disponibile.';
  }

  get mailto(): string {
    const corpo = [
      'Buongiorno,',
      '',
      'vorremmo ricevere il listino riservato e la disponibilità per:',
      '- Etichetta: ' + this.etichetta.nome + ' (' + this.etichetta.tipologia + ')',
      '- Cartoni da 6: ' + this.cartoni + ' (' + this.bottiglie + ' bottiglie)',
      '- Resa: ' + this.termine,
      '',
      'Azienda:',
      'Mercato di destinazione:',
      '',
      'Grazie.'
    ].join('\n');
    return (
      'mailto:export@gardinoarmeligi.it?subject=' +
      encodeURIComponent('Richiesta preventivo · ' + this.etichetta.nome) +
      '&body=' +
      encodeURIComponent(corpo)
    );
  }
}
