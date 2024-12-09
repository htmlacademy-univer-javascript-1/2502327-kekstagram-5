
// pictureRenderer.js (изменённый код)

const displayThumbnails = (photoData) => {
  const container = document.querySelector('.pictures');
  const docFragment = document.createDocumentFragment();
  const pictureTemplate = document.querySelector('#picture').content;

  photoData.forEach(({ url, description, likes, comments }) => {
    const element = pictureTemplate.cloneNode(true);
    const imageElement = element.querySelector('.picture__img');
    const likesElement = element.querySelector('.picture__likes');
    const commentsElement = element.querySelector('.picture__comments');

    imageElement.src = url;
    imageElement.alt = description;
    likesElement.textContent = likes;
    commentsElement.textContent = comments;

    docFragment.appendChild(element);
  });

  container.appendChild(docFragment);
};

export { displayThumbnails };
