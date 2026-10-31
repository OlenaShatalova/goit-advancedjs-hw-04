import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, PER_PAGE } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import icon from './img/icon.svg';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');
const galleryEl = document.querySelector('.gallery');

const toastOptions = {
  timeout: 5000,
  position: 'topRight',
  iconUrl: icon,
};

let query = '';
let page = 1;
let totalPages = 0;

form.addEventListener('submit', onSearchSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearchSubmit(event) {
  event.preventDefault();

  const value = form.elements['search-text'].value.trim();

  if (!value) {
    iziToast.show({ ...toastOptions, message: 'Please enter a search query!' });
    return;
  }

  query = value;
  page = 1;
  totalPages = 0;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);

    if (hits.length === 0) {
      iziToast.show({
        ...toastOptions,
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    totalPages = Math.ceil(totalHits / PER_PAGE);
    createGallery(hits);
    updateLoadMore();
  } catch (error) {
    showError(error);
  } finally {
    hideLoader();
    form.reset();
  }
}

async function onLoadMore() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const { hits } = await getImagesByQuery(query, page);

    createGallery(hits);
    scrollByTwoCards();
    updateLoadMore();
  } catch (error) {
    page -= 1;
    showLoadMoreButton();
    showError(error);
  } finally {
    hideLoader();
  }
}

function updateLoadMore() {
  if (page < totalPages) {
    showLoadMoreButton();
    return;
  }

  hideLoadMoreButton();
  iziToast.show({
    ...toastOptions,
    message: "We're sorry, but you've reached the end of search results.",
  });
}

function scrollByTwoCards() {
  const card = galleryEl.firstElementChild;
  if (!card) return;

  const { height } = card.getBoundingClientRect();

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

function showError(error) {
  iziToast.show({
    ...toastOptions,
    message: `Something went wrong: ${error.message}`,
  });
}
