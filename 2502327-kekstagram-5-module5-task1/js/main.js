import { generatePhotosArray } from './photos.js';
import { displayThumbnails } from './pictureRenderer.js';

// Генерация данных для фотографий
const photos = generatePhotosArray();

// Отображение миниатюр на странице
if (photos && photos.length > 0) {
  displayThumbnails(photos);
} else {
  console.error('Нет данных для отображения фотографий');
}
