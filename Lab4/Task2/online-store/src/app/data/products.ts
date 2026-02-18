import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 15 Pro Max 256GB серый',
    description: '6.7-дюймовый дисплей Super Retina XDR, процессор A17 Pro, основная камера 48 МП, защита от воды IP68',
    price: 649990,
    rating: 4.8,
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
    name: 'Ноутбук Apple MacBook Pro 14 M3 8-core CPU 10-core GPU 512GB 2023',
    description: '14.2-дюймовый дисплей Liquid Retina XDR, процессор M3, 8 ГБ ОЗУ, SSD 512 ГБ',
    price: 1299990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3f/h70/84963284353054.png',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h3f/h70/84963284353054.png',
      'https://resources.cdn-kaspi.kz/img/m/p/h1d/h0a/84963285991454.png',
      'https://resources.cdn-kaspi.kz/img/m/p/h47/h8f/84963287597086.png'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-m3-8-core-cpu-10-core-gpu-512gb-2023-118147170/'
  },
  {
    id: 3,
    name: 'Наушники Apple AirPods Pro 2nd generation белый',
    description: 'Беспроводные наушники с активным шумоподавлением, пространственным аудио, влагозащита IPX4',
    price: 99990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h1b/hc4/84378450821150.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h3d/hd2/84378452557854.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-113677292/'
  }
];
// Добавьте остальные продукты по аналогии