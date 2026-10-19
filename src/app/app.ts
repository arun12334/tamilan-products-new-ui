import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header, NAVIGATION_CATEGORIES } from './components/header/header';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, Header, RouterLink, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class App {
  readonly year = new Date().getFullYear();
  readonly freeShippingThreshold = 999;
  readonly store = inject(StoreService);
  readonly showBackToTop = signal(false);
  readonly categories = NAVIGATION_CATEGORIES;

  get shippingProgress(): number {
    return Math.min(100, this.store.cartTotal() / this.freeShippingThreshold * 100);
  }

  get remainingShipping(): number {
    return Math.max(0, this.freeShippingThreshold - this.store.cartTotal());
  }

  onWindowScroll(): void {
    this.showBackToTop.set(window.scrollY > 450);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
