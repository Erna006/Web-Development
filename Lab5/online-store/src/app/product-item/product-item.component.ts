import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  product = input.required<Product>();
  
  like = output<number>();
  delete = output<number>();

  onLike() {
    this.like.emit(this.product().id);
  }

  onDelete() {
    if (confirm('Удалить этот товар?')) {
      this.delete.emit(this.product().id);
    }
  }

  shareOnWhatsApp() {
    const product = this.product();
    const text = `Посмотрите этот товар на Kaspi.kz: ${product.name}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const product = this.product();
    const text = `Посмотрите этот товар на Kaspi.kz: ${product.name}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  getStarsArray(rating: number): boolean[] {
    const fullStars = Math.floor(rating);
    const stars: boolean[] = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars);
    }
    return stars;
  }
}