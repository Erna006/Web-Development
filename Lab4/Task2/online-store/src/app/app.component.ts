import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent], // Убедитесь, что ProductListComponent импортирован
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>🛍️ Интернет-магазин Kaspi.kz</h1>
      </header>
      
      <main class="app-main">
        <app-product-list /> <!-- Здесь отображается список продуктов -->
      </main>
      
      <footer class="app-footer">
        <p>&copy; 2026 Учебный проект Angular</p>
      </footer>
    </div>
  `,
  styles: `
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: #f8f9fa;
    }
    
    .app-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1.5rem 2rem;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .app-header h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: 600;
    }
    
    .app-main {
      flex: 1;
      max-width: 1400px;
      width: 100%;
      margin: 0 auto;
      padding: 2rem;
      box-sizing: border-box;
    }
    
    .app-footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 1rem;
      margin-top: auto;
    }
  `
})
export class AppComponent {}