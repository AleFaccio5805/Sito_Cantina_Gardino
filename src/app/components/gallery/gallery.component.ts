import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  url: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: GalleryImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=600&h=400&fit=crop&search_term=vineyard,grapes,harvest,wine',
      title: 'I Nostri Vigneti'
    },
    {
      url: 'https://images.pexels.com/photos/57416/pexels-photo-57416.jpeg?w=600&h=400&fit=crop&search_term=wine,barrels,cellar,aging',
      title: 'Botti di Rovere'
    },
    {
      url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop&search_term=wine,tasting,glass,red',
      title: 'Degustazione'
    },
    {
      url: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?w=600&h=400&fit=crop&search_term=wine,bottles,collection,premium',
      title: 'La Nostra Collezione'
    },
    {
      url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=400&fit=crop&search_term=vineyard,landscape,hills,rows',
      title: 'Paesaggio Collinare'
    },
    {
      url: 'https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?w=600&h=400&fit=crop&search_term=grapes,harvest,fresh,vineyard',
      title: 'Vendemmia'
    }
  ];
}
