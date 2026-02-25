import { Component, input, output } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = input<Product[]>([]);
  categoryName = input<string>('');
  
  likeProduct = output<number>();
  deleteProduct = output<number>();

  onLike(productId: number) {
    this.likeProduct.emit(productId);
  }

  onDelete(productId: number) {
    this.deleteProduct.emit(productId);
  }
}