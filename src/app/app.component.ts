
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SiteNavComponent } from './components/site-nav.component';
import { SiteFooterComponent } from './components/site-footer.component';
import { HeroEntranceComponent } from './components/hero-entrance.component';

@Component({
  selector: 'ga-root',
  standalone: true,
  imports: [RouterOutlet, SiteNavComponent, SiteFooterComponent, HeroEntranceComponent],
  template: `
    <div id="global_app_shell">
      @if (showEntrance) {
        <ga-hero-entrance (completed)="onEntranceDone()"></ga-hero-entrance>
      }
      <ga-site-nav></ga-site-nav>
      <main><router-outlet></router-outlet></main>
      <ga-site-footer></ga-site-footer>
    </div>
  `,
  styles: [
    `
      main { display: block; }
    `
  ]
})
export class AppComponent implements OnInit {
  showEntrance = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const reloaded = nav?.type === 'reload';
    const seen = sessionStorage.getItem('ga_entrance_seen');
    const onHome = window.location.pathname === '/' || window.location.pathname === '';
    if (onHome && (reloaded || !seen)) {
      this.showEntrance = true;
    }

    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }

  onEntranceDone(): void {
    sessionStorage.setItem('ga_entrance_seen', '1');
    this.showEntrance = false;
  }
}
