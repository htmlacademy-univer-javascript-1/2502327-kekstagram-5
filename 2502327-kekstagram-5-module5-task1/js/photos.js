/* eslint-disable no-unused-vars */
import { getRandomInt } from './utils.js';
import { names, messages } from './data.js';

export const generatePhotosArray = () => {
  const photos = [];
  for (let i = 0; i < 25; i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`, // Путь к изображению
      description: messages[getRandomInt(0, messages.length - 1)],
      likes: getRandomInt(15, 200),
      comments: getRandomInt(0, 100)
    };
    photos.push(photo);
  }
  return photos;
};
