import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ShopProduct, StoreService } from '../../services/store.service';

interface CategorySummary {
  name: string;
  category: string;
  description: string;
  count: number;
  image: string;
}

@Component({
  selector: 'app-collection',
  imports: [CurrencyPipe, DecimalPipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './collection.html',
  styleUrl: './collection.css',
})
export class Collection {
  readonly store = inject(StoreService);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  readonly imageUrls = {
    beads: '/assets/images/beads.svg',
    stones: '/assets/images/stones.svg',
    threads: '/assets/images/threads.svg',
    tools: '/assets/images/tools.svg',
    tailoring: '/assets/images/tailoring.svg',
  };
  readonly category = signal('');
  readonly subcategory = signal('');
  readonly search = signal('');
  readonly sort = signal('featured');
  readonly filtersOpen = signal(false);
  readonly selectedColors = signal<string[]>([]);
  readonly selectedSizes = signal<string[]>([]);
  readonly minPrice = signal(0);
  readonly maxPrice = signal(1000);
  readonly categories: CategorySummary[] = [
    { name: "Stone's Collections", category: "Stone's Collections", description: 'Explore colorful Kundan Stones in various shapes, sizes, and finishes for stylish handmade creations.', count: 229, image: this.imageUrls.stones },
    { name: 'Beads Collections', category: 'Beads Collections', description: 'Explore colorful beads in various shapes, sizes, and finishes for stylish handmade creations.', count: 136, image: this.imageUrls.beads },
    { name: 'Thread Materials', category: 'Thread Materials', description: 'Quality threads for Aari work, embroidery, blouse designing, tailoring, and creative craft projects.', count: 147, image: this.imageUrls.threads },
    { name: 'Tools & Accessories', category: 'Tools & Accessories', description: 'Useful tools and accessories for accurate, comfortable Aari and embroidery work.', count: 74, image: this.imageUrls.tools },
    { name: 'Tailoring Materials', category: 'Tailoring Materials', description: 'Everyday tailoring and sewing essentials for neat, professional finishes.', count: 64, image: this.imageUrls.tailoring },
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
    { id: 9, name: 'Glass Seed or Sugar Beads 2MM Violet Color (25grams)', category: 'Beads Collections', sub: 'Glass Seed Beads', price: 30, oldPrice: 30, color: 'Violet', size: '2MM', image: this.imageUrls.beads },
    { id: 10, name: 'Glass Seed or Sugar Beads 2MM Gold Color (25grams)', category: 'Beads Collections', sub: 'Glass Seed Beads', price: 25, oldPrice: 30, color: 'Gold', size: '2MM', image: this.imageUrls.beads },
    { id: 11, name: 'Kundan Clip Stone 10MM x 8MM Rectangle Shape (1Piece)', category: "Stone's Collections", sub: 'Clip Stone', price: 5, oldPrice: 5, color: 'Gold', size: '10MM', image: this.imageUrls.stones },
    { id: 12, name: 'Kundan Stone Flat Back Framed Eye Shape 4MM x 4MM Color White (25grams)', category: "Stone's Collections", sub: 'Framed Stones', price: 45, oldPrice: 55, color: 'White', size: '4MM', image: this.imageUrls.stones },
    { id: 13, name: 'Fitting Stones Round Shape 4MM White (25grams)', category: "Stone's Collections", sub: 'Framed Stones', price: 45, oldPrice: 45, color: 'White', size: '4MM', image: this.imageUrls.stones },
    { id: 14, name: 'D-Cut Moon Shape Kundan Stone 6x4mm (20grams)', category: "Stone's Collections", sub: 'Matt Kundan Stones', price: 50, oldPrice: 50, color: 'Green', size: '6MM', image: this.imageUrls.stones },
    { id: 15, name: 'Cotton Thread or Sewing Thread Color Gold - 1 piece', category: 'Tailoring Materials', sub: 'Cotton Threads', price: 9, oldPrice: 10, color: 'Gold', size: '1 Piece', image: this.imageUrls.threads },
    { id: 16, name: 'Heat Erasable Fabric Marker Pens or Erasable Fabric Refills (1Pc)', category: 'Tailoring Materials', sub: 'Fabric Markers', price: 10, oldPrice: 15, color: 'Blue', size: '1 Piece', image: this.imageUrls.tailoring },
    { id: 17, name: 'Water Erasable Pen for Fabric Marking', category: 'Tailoring Materials', sub: 'Fabric Markers', price: 25, oldPrice: 25, color: 'Blue', size: '1 Piece', image: this.imageUrls.tailoring },
    { id: 18, name: 'French Knot Needles 2Pcs (Long Needle)', category: 'Tailoring Materials', sub: 'Needles', price: 16, oldPrice: 20, color: 'Silver', size: '2 Pieces', image: this.imageUrls.tailoring },
    { id: 19, name: 'B-7000 Glue Strong Multi-Purpose Transparent Adhesive (50ML)', category: 'Tools & Accessories', sub: 'Glue & Adhesives', price: 65, oldPrice: 80, color: 'Clear', size: '50ML', image: this.imageUrls.tools },
    { id: 20, name: 'Carbon Paper for Hand Embroidery Patterns - Pack of 2 Sheets', category: 'Tools & Accessories', sub: 'Marking Tools', price: 16, oldPrice: 16, color: 'Yellow', size: '2 Sheets', image: this.imageUrls.tools },
    { id: 21, name: 'Silk Thread for Embroidery - Rich Maroon', category: 'Thread Materials', sub: 'Silk Threads', price: 45, oldPrice: 55, color: 'Maroon', size: '1 Piece', image: this.imageUrls.threads },
    { id: 22, name: 'Zari Thread Gold Color for Aari Work', category: 'Thread Materials', sub: 'Zari Threads', price: 20, oldPrice: 30, color: 'Gold', size: '1 Piece', image: this.imageUrls.threads },
  ];
  readonly filteredProducts = computed(() => {
    const query = this.search().trim().toLowerCase();
    const colors = this.selectedColors();
    const sizes = this.selectedSizes();
    const products = this.products.filter(product =>
      (!this.category() || product.category === this.category()) &&
      (!this.subcategory() || product.sub === this.subcategory()) &&
      (!query || `${product.name} ${product.category} ${product.sub}`.toLowerCase().includes(query)) &&
      (!colors.length || colors.includes(product.color)) &&
      (!sizes.length || sizes.includes(product.size)) &&
      product.price >= this.minPrice() && product.price <= this.maxPrice());
    return products.sort((a, b) => {
      switch (this.sort()) {
        case 'az': return a.name.localeCompare(b.name);
        case 'za': return b.name.localeCompare(a.name);
        case 'low': return a.price - b.price;
        case 'high': return b.price - a.price;
        case 'discount': return (b.oldPrice - b.price) - (a.oldPrice - a.price);
        default: return a.id - b.id;
      }
    });
  });

  constructor() {
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(params => {
      this.category.set(params.get('category') ?? '');
      this.subcategory.set(params.get('sub') ?? '');
      this.search.set(params.get('q') ?? '');
    });
  }

  get title(): string {
    return this.subcategory() || this.categories.find(item => item.category === this.category())?.name || 'All Collections';
  }

  get description(): string {
    return this.categories.find(item => item.category === this.category())?.description
      ?? 'Browse our selection of quality Aari, embroidery and tailoring essentials.';
  }

  toggleColor(color: string): void {
    this.selectedColors.update(items => items.includes(color) ? items.filter(item => item !== color) : [...items, color]);
  }

  toggleSize(size: string): void {
    this.selectedSizes.update(items => items.includes(size) ? items.filter(item => item !== size) : [...items, size]);
  }

  clearFilters(): void {
    this.search.set('');
    this.sort.set('featured');
    this.selectedColors.set([]);
    this.selectedSizes.set([]);
    this.minPrice.set(0);
    this.maxPrice.set(1000);
  }

  setMinPrice(value: string): void {
    this.minPrice.set(Number(value) || 0);
  }

  setMaxPrice(value: string): void {
    this.maxPrice.set(Number(value) || 0);
  }
}
