import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function createCardTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
      </a>
      <ul class="img-info-list">
        <li class="img-info-item">
          <p class="img-info-text">Likes</p>
          <p class="img-info-value">${likes}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Views</p>
          <p class="img-info-value">${views}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Comments</p>
          <p class="img-info-value">${comments}</p>
        </li>
        <li class="img-info-item">
          <p class="img-info-text">Downloads</p>
          <p class="img-info-value">${downloads}</p>
        </li>
      </ul>
    </li>
  `;
}

export function createGallery(images) {
  const markup = images.map(createCardTemplate).join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}
