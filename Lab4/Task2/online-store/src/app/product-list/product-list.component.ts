import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PRODUCTS } from '../data/products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = PRODUCTS; // Данные из файла products.ts
  
  constructor() {
    console.log('ProductListComponent initialized');
    console.log('Products count:', this.products.length);
  }
}