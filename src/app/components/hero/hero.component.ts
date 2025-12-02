import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  scrollToWines() {
    const element = document.getElementById('cantina_wines');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
