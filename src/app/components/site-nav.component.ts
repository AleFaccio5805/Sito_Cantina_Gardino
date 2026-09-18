
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ga-site-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header id="global_site_nav" class="nav" [class.scrolled]="scrolled" [class.open]="open">
      <a class="brand" routerLink="/">
        <svg viewBox="0 0 40 40" class="brand-mark" aria-hidden="true">
          <circle cx="20" cy="20" r="17" />
          <circle cx="20" cy="20" r="10" />
          <path d="M3 20h34" />
        </svg>
        <span class="brand-name">Gardino <i>e</i> Armeligi</span>
      </a>

      <nav class="links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Cantina</a>
        <a routerLink="/storia" routerLinkActive="active">Storia</a>
        <a routerLink="/vini" routerLinkActive="active">Vini</a>
        <a routerLink="/distribuzione" routerLinkActive="active">Distribuzione</a>
        <a routerLink="/contatti" routerLinkActive="active" class="cta">Contatti</a>
      </nav>

      <button class="burger" (click)="open = !open" [attr.aria-label]="open ? 'Chiudi menu' : 'Apri menu'">
        <span></span><span></span>
      </button>

      <div class="sheet" (click)="open = false">
        <a routerLink="/">Cantina</a>
        <a routerLink="/storia">Storia</a>
        <a routerLink="/vini">Vini</a>
        <a routerLink="/distribuzione">Distribuzione</a>
        <a routerLink="/contatti">Contatti</a>
      </div>
    </header>
  `,
  styles: [
    `
      .nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 40;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.4rem clamp(1.4rem, 5vw, 4.5rem);
        color: var(--calce);
        transition: background 0.7s var(--ease), color 0.7s var(--ease), padding 0.7s var(--ease);
        text-shadow: 0 1px 24px rgba(36, 28, 24, 0.7);
      }
      .nav::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, rgba(36, 28, 24, 0.55), rgba(36, 28, 24, 0));
        pointer-events: none;
        transition: opacity 0.7s var(--ease);
      }
      .nav.scrolled {
        background: rgba(239, 232, 218, 0.94);
        backdrop-filter: blur(9px);
        color: var(--inchiostro);
        padding-top: 0.9rem;
        padding-bottom: 0.9rem;
        text-shadow: none;
        border-bottom: 1px solid rgba(107, 63, 34, 0.18);
      }
      .nav.scrolled::before { opacity: 0; }

      .brand { display: inline-flex; align-items: center; gap: 0.85rem; position: relative; z-index: 2; }
      .brand-mark { width: 34px; height: 34px; fill: none; stroke: currentColor; stroke-width: 1; }
      .brand-mark circle:first-child { animation: spinSlow 40s linear infinite; transform-origin: 20px 20px; }
      @keyframes spinSlow { to { transform: rotate(360deg); } }
      .brand-name { font-family: 'Fraunces', serif; font-size: 1.32rem; letter-spacing: 0.02em; }
      .brand-name i { color: var(--rovere); }

      .links { display: none; gap: 2.1rem; align-items: center; position: relative; z-index: 2; }
      @media (min-width: 1000px) { .links { display: flex; } }
      .links a {
        font-size: 1.125rem;
        font-weight: 200;
        letter-spacing: 0.05em;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid transparent;
        transition: border-color 0.6s var(--ease), opacity 0.6s var(--ease);
      }
      .links a:hover { border-color: currentColor; }
      .links a.active { border-color: var(--rovere); color: var(--rovere); }
      .links a.cta {
        border: 1px solid currentColor;
        border-radius: 999px;
        padding: 0.5rem 1.35rem;
        transition: transform 0.6s var(--ease);
      }
      .links a.cta:hover { transform: translateY(3px); }

      .burger { display: grid; gap: 7px; background: none; border: 0; cursor: pointer; z-index: 2; padding: 0.6rem; }
      @media (min-width: 1000px) { .burger { display: none; } }
      .burger span { display: block; width: 30px; height: 1px; background: currentColor; transition: transform 0.5s var(--ease); }
      .open .burger span:first-child { transform: translateY(4px) rotate(14deg); }
      .open .burger span:last-child { transform: translateY(-4px) rotate(-14deg); }

      .sheet {
        position: fixed;
        inset: 0;
        background: var(--vino);
        color: var(--calce);
        display: grid;
        align-content: center;
        justify-items: center;
        gap: 1.6rem;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.7s var(--ease);
      }
      .sheet a { font-family: 'Fraunces', serif; font-size: 2rem; }
      .open .sheet { opacity: 1; pointer-events: auto; }
    `
  ]
})
export class SiteNavComponent {
  scrolled = false;
  open = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
  }
}
