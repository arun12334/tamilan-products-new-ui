import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ComboPackCategory {
  id: string;
  title: string;
  image: string;
}

@Component({
  selector: 'app-combo-pack',
  imports: [NgOptimizedImage, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './combo-pack.html',
  styleUrl: './combo-pack.css',
})
export class ComboPack {
  readonly categories: ComboPackCategory[] = [
    { id: 'beginner-combos', title: 'Beginner Combos', image: '/assets/images/beads.svg' },
    { id: 'professional-combo', title: 'Professional Combo', image: '/assets/images/stones.svg' },
  ];
}
