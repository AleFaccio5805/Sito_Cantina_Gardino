
import { AfterViewInit, Component, EventEmitter, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'ga-hero-entrance',
  standalone: true,
  template: `
    <div id="global_hero_entrance" class="entrance" [class.leaving]="leaving">
      <video
        class="ent-video"
        autoplay
        muted
        loop
        playsinline
        poster="https://content-studio.biela.dev/cover/3840x2160/i/images-library/692e1de0a0907ddcffc0205e/1789419746745-692e1de0a0907ddcffc0205e/originals/1789424546245.png/dim-vaulted-cellar-of-a-small-family-winery-rows-of-oak-barrels-against-rough-lime-plaster-walls-one-warm-lamp-dust-suspended-in-the-air-allow-only-white-person-european-3840x2160.webp?search_term=wine,cellar,oak,barrels&img_prompt=Dim+vaulted+cellar+of+a+small+family+winery+rows+of+oak+barrels+against+rough+lime+plaster+walls+one+warm+lamp+dust+suspended+in+the+air&w=1920&h=1080&type=image"
        src="https://www.pexels.com/video/8629902/download?search_term=wine,cellar,barrels,lamp&img_prompt=Slow+dolly+through+a+small+stone+cellar+past+oak+barrels+warm+lamp+light+raking+across+rough+lime+walls+dust+drifting+two+figures+working+in+the+background&w=1920&h=1080&type=video"
      ></video>

      <svg class="ent-arcs" viewBox="0 0 800 800" aria-hidden="true">
        <circle class="ring r1" cx="400" cy="400" r="150" />
        <circle class="ring r2" cx="400" cy="400" r="240" />
        <circle class="ring r3" cx="400" cy="400" r="330" />
      </svg>

      <div class="ent-copy">
        <span class="lot">LOTTO 1958 · VAL MARANA</span>
        <h1 class="h-xl">
          <span class="w" style="animation-delay:1.35s">Gardino</span>
          <span class="w amp" style="animation-delay:1.49s">e</span>
          <span class="w" style="animation-delay:1.63s">Armeligi</span>
        </h1>
        <span class="sub">quattordici ettari, una famiglia sola, nessuna fretta</span>
      </div>
    </div>
  `,
  styles: [
    `
      .entrance {
        position: fixed;
        inset: 0;
        z-index: 50;
        background: #efe8da;
        overflow: hidden;
        display: grid;
        place-items: center;
        transition: opacity 1.1s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .entrance.leaving { opacity: 0; pointer-events: none; }

      .ent-video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        filter: saturate(0.85) contrast(1.05);
        animation: videoIn 2.6s cubic-bezier(0.4, 0, 0.2, 1) 0.65s forwards;
      }
      @keyframes videoIn { to { opacity: 0.92; } }

      .entrance::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at 50% 60%, rgba(59, 18, 32, 0.25), rgba(36, 28, 24, 0.82));
        opacity: 0;
        animation: veilIn 2.4s cubic-bezier(0.4, 0, 0.2, 1) 0.9s forwards;
      }
      @keyframes veilIn { to { opacity: 1; } }

      .ent-arcs {
        position: absolute;
        width: min(120vh, 118vw);
        height: min(120vh, 118vw);
        opacity: 0.55;
      }
      .ring {
        fill: none;
        stroke: #a9713f;
        stroke-width: 1;
        transform-origin: 400px 400px;
        transform: scale(0.2);
        opacity: 0;
        animation: ringOut 2.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      .r1 { animation-delay: 0.15s; }
      .r2 { animation-delay: 0.45s; stroke: #efe8da; }
      .r3 { animation-delay: 0.75s; }
      @keyframes ringOut {
        0% { transform: scale(0.2); opacity: 0; }
        40% { opacity: 0.9; }
        100% { transform: scale(1.35); opacity: 0.25; }
      }

      .ent-copy {
        position: relative;
        z-index: 3;
        text-align: center;
        color: #efe8da;
        padding: 0 1.4rem;
      }
      .lot {
        font-family: 'Spline Sans Mono', monospace;
        font-size: 1.125rem;
        letter-spacing: 0.42em;
        opacity: 0;
        display: block;
        margin-bottom: 1.6rem;
        animation: fadeUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) 1.05s forwards;
      }
      h1 { color: #efe8da; }
      .w {
        display: inline-block;
        opacity: 0;
        transform: translateY(0.5em);
        filter: blur(6px);
        animation: wordIn 1.15s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        margin: 0 0.18em;
      }
      .amp { font-style: italic; color: #a9713f; }
      @keyframes wordIn { to { opacity: 1; transform: none; filter: blur(0); } }
      .sub {
        display: block;
        margin-top: 1.8rem;
        font-size: 1.125rem;
        letter-spacing: 0.12em;
        opacity: 0;
        animation: fadeUp 1.4s cubic-bezier(0.4, 0, 0.2, 1) 2.35s forwards;
      }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 0.85; transform: none; } }
    `
  ]
})
export class HeroEntranceComponent implements AfterViewInit, OnDestroy {
  @Output() completed = new EventEmitter<void>();
  leaving = false;
  private timers: number[] = [];

  ngAfterViewInit(): void {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    this.timers.push(window.setTimeout(() => (this.leaving = true), 4400));
    this.timers.push(
      window.setTimeout(() => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        this.completed.emit();
      }, 5500)
    );
  }

  ngOnDestroy(): void {
    this.timers.forEach((t) => window.clearTimeout(t));
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }
}
