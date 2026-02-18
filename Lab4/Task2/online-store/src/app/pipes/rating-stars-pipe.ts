import { Pipe, PipeTransform } from '@angular/core';

// Интерфейс для звезды
export interface StarInfo {
  filled: boolean;
  half: boolean;
}

@Pipe({
  name: 'ratingStars',  // Изменим имя на более короткое
  standalone: true      // Добавим standalone
})
export class RatingStarsPipe implements PipeTransform {

  transform(rating: number): StarInfo[] {
    // Проверка на корректность
    if (!rating && rating !== 0) {
      return this.getEmptyStars();
    }
    
    // Ограничиваем рейтинг от 0 до 5
    rating = Math.max(0, Math.min(5, rating));
    
    // Вычисляем количество полных звезд
    const fullStars = Math.floor(rating);
    
    // Проверяем, есть ли половинка
    const hasHalfStar = rating % 1 >= 0.5;
    
    const stars: StarInfo[] = [];
    
    // Создаем 5 звезд
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Полная звезда
        stars.push({ filled: true, half: false });
      } else if (i === fullStars && hasHalfStar) {
        // Половинка звезды
        stars.push({ filled: true, half: true });
      } else {
        // Пустая звезда
        stars.push({ filled: false, half: false });
      }
    }
    
    return stars;
  }
  
  private getEmptyStars(): StarInfo[] {
    return Array(5).fill({ filled: false, half: false });
  }
}