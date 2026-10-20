import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, Footer, Header, RouterLink, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class App {
  readonly freeShippingThreshold = 999;
  readonly store = inject(StoreService);
  readonly showBackToTop = signal(false);

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
