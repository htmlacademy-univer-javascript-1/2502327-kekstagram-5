import './util.js';
import { generatePhotosArray } from './photos.js';
import { displayThumbnails } from './pictureRenderer.js';
import { displayBigImage } from './bigPictureHandler.js';

// Генерация данных
const photos = generatePhotosArray();

// Отображение миниатюр
displayThumbnails(photos);

// Добавление обработчиков для открытия полноразмерного изображения
const picturesContainer = document.querySelector('.pictures');
picturesContainer.addEventListener('click', (event) => {
  const pictureElement = event.target.closest('.picture');
  if (pictureElement) {
    const postId = pictureElement.getAttribute('data-id');
    const post = photos.find((photo) => photo.id === Number(postId));
    if (post) {
      displayBigImage(post);
    }
  }
});
