import { Component, input, signal, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../models/product.model';
import { RatingStarsPipe } from '../pipes/rating-stars-pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe, RatingStarsPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  product = input.required<Product>();
  
  selectedImageIndex = signal<number>(0);
  showGallery = signal<boolean>(false);

  // Убираем constructor или оставляем пустым
  constructor() {
    // Не обращаемся к this.product() здесь!
  }

  selectImage(index: number) {
    this.selectedImageIndex.set(index);
  }

  nextImage() {
    const currentIndex = this.selectedImageIndex();
    const maxIndex = this.product().images.length - 1;
    if (currentIndex < maxIndex) {
      this.selectedImageIndex.set(currentIndex + 1);
    }
  }

  prevImage() {
    const currentIndex = this.selectedImageIndex();
    if (currentIndex > 0) {
      this.selectedImageIndex.set(currentIndex - 1);
    }
  }

  toggleGallery() {
    this.showGallery.update(value => !value);
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
}