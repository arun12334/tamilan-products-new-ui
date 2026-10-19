import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { StoreService } from '../../services/store.service';

export interface NavigationCategory {
  name: string;
  category: string;
  icon: string;
}

export const NAVIGATION_CATEGORIES: NavigationCategory[] = [
  { name: 'Beads Collections', category: 'Beads Collections', icon: 'bi bi-circle' },
  { name: "Stone's Collections", category: "Stone's Collections", icon: 'bi bi-gem' },
  { name: 'Thread Materials', category: 'Thread Materials', icon: 'bi bi-reception-4' },
  { name: 'Tools & Accessories', category: 'Tools & Accessories', icon: 'bi bi-scissors' },
  { name: 'Tailoring Materials', category: 'Tailoring Materials', icon: 'bi bi-rulers' },
];

const HEADER_MENU_ITEMS = [
  { name: 'Combo Pack', route: '/combo-pack' },
  { name: 'Tailoring Material', route: '/tailoring-material' },
  { name: 'Aari Material', route: '/aari-material' },
  { name: 'Kundan Stone / Fitting Stone', route: '/kundan-stone-fitting-stone' },
  { name: 'Jewellery Making Material', route: '/jewellery-making-material' },
  { name: 'Artificial Flower Making Material', route: '/artificial-flower-making-material' },
  { name: 'Brooch Material', route: '/brooch-material' },
  { name: 'Packing Materials', route: '/packing-materials' },
];

@Component({
  selector: 'app-header',
  imports: [CurrencyPipe, FormsModule, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly store = inject(StoreService);
  readonly searchTerm = signal('');
  readonly mobileMenuOpen = signal(false);
  readonly menuItems = HEADER_MENU_ITEMS;

  private readonly router = inject(Router);

  search(): void {
    this.mobileMenuOpen.set(false);
    void this.router.navigate(['/collection'], { queryParams: { q: this.searchTerm().trim() || null } });
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
