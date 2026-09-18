
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../shared/reveal.directive';
import { ParallaxDirective } from '../shared/parallax.directive';

@Component({
  selector: 'ga-contatti-page',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective, ParallaxDirective],
  template: `
    <div id="contatti_page_root">
      <section class="c-hero">
        <div class="wrap grid12">
          <div class="col-a">
            <span class="kicker">Via delle Botti 12 · Poggio Marana</span>
            <h1 class="h-xl">
              <span class="w" style="animation-delay:.1s">Il</span>
              <span class="w" style="animation-delay:.22s">telefono</span>
              <span class="w" style="animation-delay:.34s">lo</span>
              <span class="w it" style="animation-delay:.46s">alziamo</span>
              <span class="w" style="animation-delay:.58s">noi.</span>
            </h1>
            <p class="lead">
              Non c’è un centralino. Chi risponde è chi ha potato quel filare — per questo in
              vendemmia ci mettiamo qualche giorno in più.
            </p>
          </div>
          <div class="col-b recapiti">
            <a class="rec" href="tel:+390577000120" gaReveal>
              <span>Telefono</span><strong>+39 0577 000 120</strong>
            </a>
            <a class="rec" href="mailto:info@gardinoarmeligi.it" gaReveal [revealDelay]="90">
              <span>Cantina</span><strong>info&#64;gardinoarmeligi.it</strong>
            </a>
            <a class="rec" href="mailto:export@gardinoarmeligi.it" gaReveal [revealDelay]="180">
              <span>Commerciale ed export</span><strong>export&#64;gardinoarmeligi.it</strong>
            </a>
          </div>
        </div>
      </section>

      <section class="modulo">
        <div class="wrap grid12">
          <div class="col-a form-col" gaReveal>
            <span class="kicker">Scrivici</span>
            <h2 class="h-lg">Due righe bastano.</h2>

            <form [formGroup]="form" (ngSubmit)="invia()" novalidate>
              <div class="campo" [class.err]="errore('nome')">
                <label for="nome">Nome e cognome</label>
                <input id="nome" type="text" formControlName="nome" autocomplete="name" />
                @if (errore('nome')) { <span class="msg">Scriveteci almeno come vi chiamate.</span> }
              </div>

              <div class="campo" [class.err]="errore('email')">
                <label for="email">Email</label>
                <input id="email" type="text" formControlName="email" autocomplete="email" />
                @if (errore('email')) { <span class="msg">Serve un indirizzo email valido per risponderti.</span> }
              </div>

              <div class="campo">
                <label for="motivo">Di cosa si tratta</label>
                <select id="motivo" formControlName="motivo">
                  <option value="Distribuzione">Distribuzione e import</option>
                  <option value="Visita">Visita in cantina</option>
                  <option value="Acquisto">Acquisto privato</option>
                  <option value="Altro">Altro</option>
                </select>
              </div>

              <div class="campo" [class.err]="errore('messaggio')">
                <label for="messaggio">Messaggio</label>
                <textarea id="messaggio" rows="5" formControlName="messaggio"></textarea>
                @if (errore('messaggio')) { <span class="msg">Raccontaci qualcosa in più, almeno venti caratteri.</span> }
              </div>

              <button type="submit" class="btn btn-solid">Invia il messaggio <span aria-hidden="true">→</span></button>
            </form>
          </div>

          <div class="col-b lato" gaReveal [revealDelay]="120">
            <div class="frame">
              <img
                gaParallax
                [parallaxScale]="1.7"
                src="https://content-studio.biela.dev/cover/1600x2000/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424544920.png/small-cellar-interior-with-oak-barrels-along-a-rough-lime-plaster-wall-warm-lamp-light-quiet-documentary-atmosphere-no-text-allow-only-white-person-european-1600x2000.webp?search_term=cellar,barrels,lime,wall,lamp&img_prompt=Small+cellar+interior+with+oak+barrels+along+a+rough+lime+plaster+wall+warm+lamp+light+quiet+documentary+atmosphere+no+text&w=800&h=1000&type=image"
                alt="La cantina di Gardino e Armeligi"
              />
            </div>
            <dl class="info">
              <dt>Indirizzo</dt>
              <dd>Via delle Botti 12<br />53013 Poggio Marana (SI), Italia</dd>
              <dt>Orari ufficio</dt>
              <dd>Lun–Ven 9:00–17:30 · Sab 10:00–13:00</dd>
              <dt>Visite</dt>
              <dd>Su appuntamento, anche di sabato. Chiuse in vendemmia (metà settembre – metà ottobre).</dd>
              <dt>Come arrivare</dt>
              <dd>Uscita Poggio Marana, poi strada bianca per 1,8 km. Il cancello verde è l’ultimo.</dd>
            </dl>
          </div>
        </div>
      </section>

      @if (inviato) {
        <div class="toast" role="status">
          Messaggio registrato. Vi rispondiamo dalla cantina, di solito entro due giorni.
        </div>
      }
    </div>
  `,
  styles: [
    `
      .c-hero { padding: 13rem 0 5rem; background: linear-gradient(180deg, #e7dfd0, var(--calce)); }
      .c-hero .kicker { color: var(--rovere-scuro); }
      .c-hero h1 { margin: 1.4rem 0 1.3rem; max-width: 13ch; }
      .w { display: inline-block; opacity: 0; transform: translateY(0.4em); animation: cw 0.9s var(--ease) forwards; margin-right: 0.2em; }
      .w.it { font-style: italic; color: var(--vino-vivo); }
      @keyframes cw { to { opacity: 1; transform: none; } }

      .recapiti { display: grid; gap: 1rem; align-content: end; }
      .rec {
        display: grid;
        gap: 0.2rem;
        padding: 1.2rem 1.4rem;
        border: 1px solid rgba(107, 63, 34, 0.28);
        border-radius: 6px;
        border-top-right-radius: 26px;
        transition: transform 0.65s var(--ease), background 0.65s var(--ease);
      }
      .rec:hover { transform: translateY(3px); background: #f5f0e6; }
      .rec span { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--rovere-scuro); }
      .rec strong { font-weight: 300; font-size: 1.28rem; }

      .modulo { padding: 5rem 0 8rem; background: var(--calce); }
      .modulo h2 { margin: 1rem 0 2rem; }
      .modulo .kicker { color: var(--rovere-scuro); }
      .campo { display: grid; gap: 0.5rem; margin-bottom: 1.8rem; }
      label { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.75; }
      input, textarea, select {
        background: transparent;
        border: 0;
        border-bottom: 1px solid rgba(107, 63, 34, 0.4);
        padding: 0.85rem 0.2rem;
        color: inherit;
        font-weight: 200;
        transition: border-color 0.6s var(--ease);
        appearance: none;
      }
      input:focus, textarea:focus, select:focus { outline: none; border-color: var(--vino); }
      textarea { resize: vertical; }
      .campo.err input, .campo.err textarea { border-color: var(--vino-vivo); }
      .msg { color: var(--vino-vivo); font-size: 1.125rem; }

      .lato { display: grid; gap: 2rem; align-content: start; }
      .frame { overflow: hidden; border-radius: 6px; border-bottom-left-radius: 80px; }
      .frame img { width: 100%; height: clamp(280px, 34vw, 420px); object-fit: cover; display: block; }
      .info { margin: 0; display: grid; gap: 0.2rem; }
      .info dt { font-family: 'Spline Sans Mono', monospace; font-size: 1.125rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--rovere-scuro); margin-top: 1.2rem; }
      .info dd { margin: 0; }

      .toast {
        position: fixed;
        top: 6.5rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--vino);
        color: var(--calce);
        padding: 1rem 1.6rem;
        border-radius: 999px;
        z-index: 45;
        box-shadow: 0 20px 40px -26px rgba(36, 28, 24, 0.9);
        animation: toastIn 0.7s var(--ease);
        max-width: min(92vw, 560px);
        text-align: center;
      }
      @keyframes toastIn { from { opacity: 0; transform: translateX(-50%) translateY(-12px); } }
    `
  ]
})
export class ContattiPage {
  inviato = false;

  private readonly fb = inject(FormBuilder);

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]],
    motivo: ['Distribuzione'],
    messaggio: ['', [Validators.required, Validators.minLength(20)]]
  });

  errore(campo: string): boolean {
    const c = this.form.get(campo);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  invia(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.inviato = true;
    this.form.reset({ motivo: 'Distribuzione' });
    window.setTimeout(() => (this.inviato = false), 5200);
  }
}
