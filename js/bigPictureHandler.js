const modal = document.querySelector('.big-picture');
const bodyElement = document.body;

const closeModal = () => {
  modal.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyPress);
};

const onEscKeyPress = (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
};

const displayBigImage = (photoData) => {
  const imageElement = modal.querySelector('.big-picture__img img');
  const descriptionElement = modal.querySelector('.social__caption');
  const likesElement = modal.querySelector('.likes-count');
  const commentsElement = modal.querySelector('.comments-count');
  const commentsContainer = modal.querySelector('.social__comments');
  const commentCounter = modal.querySelector('.social__comment-count');
  const loadMoreButton = modal.querySelector('.comments-loader');

  commentCounter.classList.add('hidden');
  loadMoreButton.classList.add('hidden');
  imageElement.src = photoData.url;
  imageElement.alt = photoData.description;
  descriptionElement.textContent = photoData.description;
  likesElement.textContent = `${photoData.likes}`;
  commentsElement.textContent = `${photoData.comments.length}`;

  commentsContainer.innerHTML = '';

  photoData.comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.className = 'social__comment';
    commentElement.innerHTML = `
      <img class="social__picture"
        src="${comment.avatar}"
        alt="${comment.name}"
        width="35" height="35">
      <p class="social__text">${comment.message}</p>`;
    commentsContainer.appendChild(commentElement);
  });

  modal.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onEscKeyPress);
  modal.querySelector('.big-picture__cancel').addEventListener('click', closeModal);
};

export { displayBigImage };
