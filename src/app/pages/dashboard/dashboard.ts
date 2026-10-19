import { CurrencyPipe, DecimalPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ShopProduct, StoreService } from '../../services/store.service';

interface DashboardCategoryCard {
  name: string;
  image: string;
}

interface DashboardMenuSection {
  id: string;
  name: string;
  description: string;
  route: string;
  cards: DashboardCategoryCard[];
}

@Component({
  selector: 'app-dashboard',
  imports: [CurrencyPipe, DecimalPipe, FormsModule, NgOptimizedImage, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly store = inject(StoreService);
  readonly newsletterEmail = signal('');
  readonly newsletterMessage = signal('');
  readonly heroBackground = "linear-gradient(110deg, #181724b5, #1817242e), url('assets/images/craft-hero.svg') center/cover";
  readonly imageUrls = {
    beads: 'assets/images/beads.svg',
    stones: 'assets/images/stones.svg',
    threads: 'assets/images/threads.svg',
    tools: 'assets/images/tools.svg',
    tailoring: 'assets/images/tailoring.svg',
  };

  readonly menuSections: DashboardMenuSection[] = [
    {
      id: 'combo-pack',
      name: 'Combo Pack',
      description: 'Curated material combinations for every skill level.',
      route: '/combo-pack',
      cards: [
        { name: 'Beginner Combos', image: this.imageUrls.beads },
        { name: 'Professional Combo Kit', image: this.imageUrls.stones },
      ],
    },
    {
      id: 'tailoring-material',
      name: 'Tailoring Material',
      description: 'Essentials for sewing, measuring and fabric marking.',
      route: '/tailoring-material',
      cards: [
        { name: 'Fabric Markers', image: this.imageUrls.tailoring },
        { name: 'Needles', image: this.imageUrls.tailoring },
        { name: 'Measuring Tools', image: this.imageUrls.tools },
      ],
    },
    {
      id: 'aari-material',
      name: 'Aari Material',
      description: 'Beads, chains, stones and tools for Aari work.',
      route: '/aari-material',
      cards: [
        { name: 'Sugar Beads', image: this.imageUrls.beads },
        { name: '2mm Cut Beads', image: this.imageUrls.beads },
        { name: '3mm Cut beads', image: this.imageUrls.beads },
        { name: '5 mm Tube Beads', image: this.imageUrls.beads },
        { name: 'Thread Needle', image: this.imageUrls.tailoring },
      ],
    },
    {
      id: 'kundan-stone-fitting-stone',
      name: 'Kundan Stone / Fitting Stone',
      description: 'Explore Kundan and fitting stones in a range of finishes.',
      route: '/kundan-stone-fitting-stone',
      cards: [
        { name: 'Matt Kundan Stone', image: this.imageUrls.stones },
        { name: 'Glossy Kundan Stone', image: this.imageUrls.stones },
        { name: 'White Kundan Stone', image: this.imageUrls.stones },
        { name: 'Ceramic White Kundan Stone', image: this.imageUrls.stones },
        { name: 'Ceramic Gold Kundan Stone', image: this.imageUrls.stones },
      ],
    },
    {
      id: 'jewellery-making-material',
      name: 'Jewellery Making Material',
      description: 'Bases and decorative pieces for jewellery making.',
      route: '/jewellery-making-material',
      cards: [
        { name: 'Bangle Base', image: this.imageUrls.beads },
        { name: 'Charms', image: this.imageUrls.stones },
      ],
    },
    {
      id: 'artificial-flower-making-material',
      name: 'Artificial Flower Making Material',
      description: 'Browse materials for creating artificial flowers.',
      route: '/artificial-flower-making-material',
      cards: [
        { name: 'Browse Flower Materials', image: 'assets/images/craft-hero.svg' },
      ],
    },
    {
      id: 'brooch-material',
      name: 'Brooch Material',
      description: 'Decorative components for making brooches.',
      route: '/brooch-material',
      cards: [
        { name: 'Flowers', image: 'assets/images/craft-hero.svg' },
        { name: 'Petals', image: this.imageUrls.beads },
        { name: 'Shells', image: this.imageUrls.stones },
        { name: 'Butterfly', image: 'assets/images/craft-hero.svg' },
        { name: 'Bows', image: this.imageUrls.threads },
      ],
    },
    {
      id: 'packing-materials',
      name: 'Packing Materials',
      description: 'Browse materials for packing and presenting your creations.',
      route: '/packing-materials',
      cards: [
        { name: 'Browse Packing Materials', image: this.imageUrls.tools },
      ],
    },
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

  subscribe(): void {
    const email = this.newsletterEmail().trim();
    if (!email) return;
    try {
      const subscriptions = JSON.parse(localStorage.getItem('tp_newsletter') ?? '[]') as string[];
      localStorage.setItem('tp_newsletter', JSON.stringify([...subscriptions, email]));
      this.newsletterEmail.set('');
      this.newsletterMessage.set('Thank you for subscribing!');
    } catch (error) {
      console.error('Unable to save the newsletter subscription.', error);
      this.newsletterMessage.set('Your subscription could not be saved. Please try again.');
    }
  }
}
