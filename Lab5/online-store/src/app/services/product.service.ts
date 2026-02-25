import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Смартфоны', icon: '📱' },
    { id: 2, name: 'Ноутбуки', icon: '💻' },
    { id: 3, name: 'Наушники', icon: '🎧' },
    { id: 4, name: 'Планшеты', icon: '📟' }
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max 256GB',
      description: '6.7" Super Retina XDR, A17 Pro, 48MP камера, титановый корпус',
      price: 649990,
      rating: 4.8,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h82/83559849656350.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h3d/83559851294750.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 512GB',
      description: '6.8" Dynamic AMOLED, Snapdragon 8 Gen 3, 200MP камера, S Pen',
      price: 599990,
      rating: 4.7,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc6/h01/84963284353054.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/h01/84963284353054.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/h0a/84963285991454.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h47/h8f/84963287597086.png'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-512gb-116556561/'
    },
    {
      id: 3,
      name: 'Xiaomi 14 Pro 512GB',
      description: '6.73" AMOLED, Snapdragon 8 Gen 3, Leica камера, 120W зарядка',
      price: 399990,
      rating: 4.6,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc4/84378450821150.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/hd2/84378452557854.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-14-pro-512gb-116556562/'
    },
    {
      id: 4,
      name: 'Google Pixel 8 Pro 256GB',
      description: '6.7" LTPO OLED, Google Tensor G3, 50MP камера, чистый Android',
      price: 449990,
      rating: 4.5,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h31/84296325120030.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h31/84296325120030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hd7/84296326856734.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/h06/84296328593438.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-256gb-116556563/'
    },
    {
      id: 5,
      name: 'OnePlus 12 512GB',
      description: '6.82" LTPO AMOLED, Snapdragon 8 Gen 3, Hasselblad камера, 100W зарядка',
      price: 379990,
      rating: 4.6,
      likes: 0,
      categoryId: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h30/84931852664862.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h30/84931852664862.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h20/84931854303262.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h42/84931855941662.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/oneplus-12-512gb-116556564/'
    },

    {
      id: 6,
      name: 'Apple MacBook Pro 14 M3 Pro 512GB',
      description: '14.2" Liquid Retina XDR, M3 Pro (11-core), 18GB RAM, 512GB SSD',
      price: 1299990,
      rating: 4.9,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h70/84963284353054.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h70/84963284353054.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/h0a/84963285991454.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h47/h8f/84963287597086.png'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-m3-pro-512gb-118147170/'
    },
    {
      id: 7,
      name: 'ASUS ROG Zephyrus G16 2024',
      description: '16" QHD 240Hz, Intel Core i9, RTX 4080, 32GB RAM, 1TB SSD',
      price: 999990,
      rating: 4.8,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h86/h9b/65617523179550.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h9b/65617523179550.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h05/65617524326430.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h82/hb6/65617525571614.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g16-2024-118147171/'
    },
    {
      id: 8,
      name: 'Dell XPS 15 9530',
      description: '15.6" OLED 3.5K, Intel Core i7, RTX 4050, 16GB RAM, 512GB SSD',
      price: 899990,
      rating: 4.7,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h31/64440290902046.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h31/64440290902046.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h50/h6a/64440292343838.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h28/64440293785630.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9530-118147172/'
    },
    {
      id: 9,
      name: 'Lenovo Legion Pro 7i',
      description: '16" QHD 240Hz, Intel Core i9, RTX 4090, 32GB RAM, 1TB SSD',
      price: 1099990,
      rating: 4.8,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/hf4/64282659110942.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/hf4/64282659110942.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/hfe/64282660421662.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h62/h4d/64282661732382.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-legion-pro-7i-118147173/'
    },
    {
      id: 10,
      name: 'HP Spectre x360 14',
      description: '14" OLED 3K, Intel Core i7, 16GB RAM, 1TB SSD, сенсорный экран',
      price: 799990,
      rating: 4.6,
      likes: 0,
      categoryId: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h00/85093461409822.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/h00/85093461409822.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h9f/85093462917150.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hab/h7b/85093464326174.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-118147174/'
    },

    {
      id: 11,
      name: 'Apple AirPods Max',
      description: 'Полноразмерные наушники с активным шумоподавлением, пространственное аудио',
      price: 249990,
      rating: 4.8,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/h84/6409506.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h84/6409506.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hd2/h15/6409507.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h57/6409508.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-113677292/'
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5',
      description: 'Беспроводные наушники с лучшим шумоподавлением, 30 часов работы',
      price: 159990,
      rating: 4.9,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc4/84378450821150.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/hd2/84378452557854.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-113677293/'
    },
    {
      id: 13,
      name: 'Bose QuietComfort Ultra',
      description: 'Премиальные наушники с иммерсивным звуком и лучшим комфортом',
      price: 179990,
      rating: 4.8,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h31/64440290902046.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h31/64440290902046.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h50/h6a/64440292343838.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h28/64440293785630.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-113677294/'
    },
    {
      id: 14,
      name: 'Sennheiser Momentum 4',
      description: 'Беспроводные наушники с высококачественным звуком, 60 часов работы',
      price: 149990,
      rating: 4.7,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/hf4/64282659110942.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/hf4/64282659110942.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/hfe/64282660421662.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h62/h4d/64282661732382.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sennheiser-momentum-4-113677295/'
    },
    {
      id: 15,
      name: 'JBL Tour One M2',
      description: 'Премиальные наушники с адаптивным шумоподавлением и пространственным звуком',
      price: 99990,
      rating: 4.6,
      likes: 0,
      categoryId: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h00/85093461409822.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/h00/85093461409822.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h9f/85093462917150.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hab/h7b/85093464326174.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/jbl-tour-one-m2-113677296/'
    },

    {
      id: 16,
      name: 'iPad Pro 12.9 2024',
      description: '12.9" Liquid Retina XDR, M4, 256GB, поддержка Apple Pencil Pro',
      price: 699990,
      rating: 4.9,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h82/83559849656350.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h3d/83559851294750.png'
      ],
      link: 'https://kaspi.kz/shop/p/ipad-pro-12-9-2024-118147175/'
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9 Ultra',
      description: '14.6" Dynamic AMOLED, Snapdragon 8 Gen 2, 512GB, S Pen в комплекте',
      price: 499990,
      rating: 4.8,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h70/84963284353054.png',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h70/84963284353054.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/h0a/84963285991454.png',
        'https://resources.cdn-kaspi.kz/img/m/p/h47/h8f/84963287597086.png'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-115483956/'
    },
    {
      id: 18,
      name: 'iPad Air 13 2024',
      description: '13" Liquid Retina, M2, 128GB, поддержка Apple Pencil Pro',
      price: 399990,
      rating: 4.7,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc4/84378450821150.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/hd2/84378452557854.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/ipad-air-13-2024-118147176/'
    },
    {
      id: 19,
      name: 'Xiaomi Pad 6S Pro',
      description: '12.4" 144Hz, Snapdragon 8 Gen 2, 256GB, 10000mAh, 120W зарядка',
      price: 249990,
      rating: 4.6,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h31/84296325120030.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h31/84296325120030.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hd7/84296326856734.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/h06/84296328593438.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6s-pro-118147177/'
    },
    {
      id: 20,
      name: 'Lenovo Tab Extreme',
      description: '14.5" OLED 120Hz, MediaTek Dimensity 9000, 256GB, поддержка стилуса',
      price: 299990,
      rating: 4.5,
      likes: 0,
      categoryId: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h30/84931852664862.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h30/84931852664862.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h20/84931854303262.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h42/84931855941662.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-extreme-118147178/'
    }
  ];

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes += 1;
    }
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}