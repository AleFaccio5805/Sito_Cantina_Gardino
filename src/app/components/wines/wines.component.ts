import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Wine {
  name: string;
  type: string;
  year: string;
  description: string;
  image: string;
  price: string;
}

@Component({
  selector: 'app-wines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.css']
})
export class WinesComponent {
  wines: Wine[] = [
    {
      name: 'Rosso Riserva',
      type: 'Vino Rosso',
      year: '2019',
      description: 'Un vino corposo e strutturato, invecchiato in botti di rovere per 24 mesi.',
      image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?w=400&h=600&fit=crop&search_term=red,wine,bottle,elegant',
      price: '€35'
    },
    {
      name: 'Bianco Premium',
      type: 'Vino Bianco',
      year: '2021',
      description: 'Fresco e aromatico, con note di agrumi e fiori bianchi. Perfetto per antipasti.',
      image: 'https://images.pexels.com/photos/2647933/pexels-photo-2647933.jpeg?w=400&h=600&fit=crop&search_term=white,wine,bottle,premium',
      price: '€25'
    },
    {
      name: 'Spumante Brut',
      type: 'Vino Spumante',
      year: '2020',
      description: 'Elegante e raffinato, ideale per celebrazioni e momenti speciali.',
      image: 'https://images.pexels.com/photos/1839908/pexels-photo-1839908.jpeg?w=400&h=600&fit=crop&search_term=sparkling,wine,champagne,bottle',
      price: '€30'
    },
    {
      name: 'Rosato Estate',
      type: 'Vino Rosato',
      year: '2022',
      description: 'Fruttato e vivace, perfetto per le calde serate estive e aperitivi.',
      image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?w=400&h=600&fit=crop&search_term=rose,wine,pink,bottle',
      price: '€22'
    }
  ];
}
