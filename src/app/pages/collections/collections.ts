import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShopProduct, StoreService } from '../../services/store.service';

interface CollectionCard {
  name: string;
  category: string;
  description: string;
  count: number;
  image: string;
}

@Component({
  selector: 'app-collections',
  imports: [CurrencyPipe, DecimalPipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './collections.html',
  styleUrl: './collections.css',
})
export class Collections {
  readonly imageUrls = {
    beads: 'assets/images/beads.svg',
    stones: 'assets/images/stones.svg',
    threads: 'assets/images/threads.svg',
    tools: 'assets/images/tools.svg',
    tailoring: 'assets/images/tailoring.svg',
  };
  readonly collections: CollectionCard[] = [
    { name: "Stone's Collections", category: "Stone's Collections", description: 'Colorful Kundan and fitting stones for beautiful Aari work.', count: 229, image: this.imageUrls.stones },
    { name: 'Beads Collections', category: 'Beads Collections', description: 'Beads in a range of colors, shapes and finishes.', count: 136, image: this.imageUrls.beads },
    { name: 'Thread Materials', category: 'Thread Materials', description: 'Quality cotton, silk and zari threads for embroidery.', count: 147, image: this.imageUrls.threads },
    { name: 'Tools & Accessories', category: 'Tools & Accessories', description: 'Useful tools and accessories for Aari and embroidery.', count: 74, image: this.imageUrls.tools },
    { name: 'Tailoring Materials', category: 'Tailoring Materials', description: 'Everyday sewing and tailoring essentials.', count: 64, image: this.imageUrls.tailoring },
  ];
  readonly products: ShopProduct[] = [
    { id: 1, name: 'Aari Work Pearl Round Shape -1Bunch (12 lines) Color - White (2mm, 3mm, 4mm)', category: 'Beads Collections', sub: 'Bunch Beads', price: 120, oldPrice: 120, color: 'White', size: '2MM', image: this.imageUrls.beads },
    { id: 2, name: '2mm, 3mm, 4mm Bunch Beads Each 12 String lines Dull Gold Color', category: 'Beads Collections', sub: 'Bunch Beads', price: 130, oldPrice: 150, color: 'Gold', size: '3MM', image: this.imageUrls.beads },
    { id: 3, name: '(A STAR) Sugar or Seed Beads Gold Color 12-0(2mm) used for regular Aari work', category: 'Beads Collections', sub: 'Sugar Beads', price: 35, oldPrice: 40, color: 'Gold', size: '2MM', image: this.imageUrls.beads },
    { id: 4, name: '(Priso Brand) Seed or Sugar Beads 12-0 Gold Color', category: 'Beads Collections', sub: 'Sugar Beads', price: 45, oldPrice: 45, color: 'Gold', size: '2MM', image: this.imageUrls.beads },
    { id: 5, name: 'Glass Seed or Sugar Beads 2MM Rose Color (25grams)', category: 'Beads Collections', sub: 'Glass Seed Beads', price: 30, oldPrice: 30, color: 'Rose', size: '2MM', image: this.imageUrls.beads },
    { id: 6, name: 'Opaque Seed Beads in Half White Color (14/0) 1.5mm (25grams)', category: 'Beads Collections', sub: 'Opaque Seed Beads', price: 30, oldPrice: 40, color: 'White', size: '1.5MM', image: this.imageUrls.beads },
    { id: 7, name: 'Glass Seed or Sugar Beads 2mm Green Color (25grams)', category: 'Beads Collections', sub: 'Glass Seed Beads', price: 30, oldPrice: 30, color: 'Green', size: '2MM', image: this.imageUrls.beads },
    { id: 8, name: 'Simba Sugar or Seed Beads Gold Color 12-0 (2mm)', category: 'Beads Collections', sub: 'Sugar Beads', price: 60, oldPrice: 70, color: 'Gold', size: '2MM', image: this.imageUrls.beads },
  ];

  addToCart(product: ShopProduct): void {
    this.store.addToCart(product);
  }

  readonly store = inject(StoreService);
}
