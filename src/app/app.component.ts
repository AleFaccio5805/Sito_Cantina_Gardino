import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { WinesComponent } from './components/wines/wines.component';
import { StoryComponent } from './components/story/story.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    WinesComponent,
    StoryComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div id="cantina_app">
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-wines></app-wines>
      <app-story></app-story>
      <app-gallery></app-gallery>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Cantina Vitivinicola';
}
