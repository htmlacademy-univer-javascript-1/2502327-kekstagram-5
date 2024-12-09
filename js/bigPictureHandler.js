const modal = document.querySelector('.big-picture');
const bodyElement = document.body;

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
  likesElement.textContent = photoData.likes;
  commentsElement.textContent = photoData.comments.length;

  commentsContainer.innerHTML = '';

  photoData.comments.forEach(({ avatar, name, message }) => {
    const commentItem = document.createElement('li');
    commentItem.classList.add('social__comment');
    commentItem.innerHTML = `
      <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
      <p class="social__text">${message}</p>
    `;
    commentsContainer.appendChild(commentItem);
  });

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    document.removeEventListener('keydown', handleKeydown);
  };

  modal.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', handleKeydown);
  modal.querySelector('.big-picture__cancel').addEventListener('click', closeModal);
};

export { displayBigImage };
