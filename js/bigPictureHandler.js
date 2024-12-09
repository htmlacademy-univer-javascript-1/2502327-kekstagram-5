const bigPicture = document.querySelector('.big-picture');
const bodyElement = document.body;

const displayBigPicture = function (pictureData) {
  const imgElement = bigPicture.querySelector('.big-picture__img img');
  const captionElement = bigPicture.querySelector('.social__caption');
  const likesElement = bigPicture.querySelector('.likes-count');
  const commentsElement = bigPicture.querySelector('.comments-count');
  const commentsContainer = bigPicture.querySelector('.social__comments');
  const commentCounter = bigPicture.querySelector('.social__comment-count');
  const loadMoreButton = bigPicture.querySelector('.comments-loader');

  commentCounter.classList.add('hidden');
  loadMoreButton.classList.add('hidden');
  imgElement.src = pictureData.url;
  imgElement.alt = pictureData.description;
  captionElement.textContent = pictureData.description;
  likesElement.textContent = `${pictureData.likes}`;
  commentsElement.textContent = `${pictureData.comments.length}`;

  commentsContainer.innerHTML = '';

  pictureData.comments.forEach((comment) => {
    const commentItem = document.createElement('li');
    commentItem.className = 'social__comment';
    commentItem.innerHTML = `<img class="social__picture"
      src="${comment.avatar}"
      alt="${comment.name}"
      width="35" height="35">
      <p class="social__text">${comment.message}</p>`;
    commentsContainer.appendChild(commentItem);
  });

  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPicture.classList.add('hidden');
      bodyElement.classList.remove('modal-open');
      document.removeEventListener('keydown', arguments.callee);
    }
  });

  bigPicture.querySelector('.big-picture__cancel').addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    document.removeEventListener('keydown', arguments.callee);
  });
};

export {displayBigPicture};
