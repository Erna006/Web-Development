import { Component, signal } from '@angular/core';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[];
  selectedCategory = signal<Category | null>(null);
  products = signal<Product[]>([]);

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category) {
    this.selectedCategory.set(category);
    const categoryProducts = this.productService.getProductsByCategory(category.id);
    this.products.set(categoryProducts);
  }

  onLikeProduct(productId: number) {
    this.productService.likeProduct(productId);
    if (this.selectedCategory()) {
      const updatedProducts = this.productService.getProductsByCategory(this.selectedCategory()!.id);
      this.products.set(updatedProducts);
    }
  }

  onDeleteProduct(productId: number) {
    this.productService.deleteProduct(productId);
    if (this.selectedCategory()) {
      const updatedProducts = this.productService.getProductsByCategory(this.selectedCategory()!.id);
      this.products.set(updatedProducts);
    }
  }
}