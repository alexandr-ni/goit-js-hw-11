import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { searchRequest } from './js/request';
import { renderPicture } from './js/render-picture';

const formSubmit = document.querySelector('.search-form');
const formInput = document.querySelector('input');
const galleryContainerEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let value = 1;

const bigPicture = new SimpleLightbox('.gallery a');

formSubmit.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

export function addLoadBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function removeLoadBtn() {
  loadMoreBtn.classList.add('is-hidden');
}

function onLoadMore() {
  value += 1;

  createPicture(value);
}

async function createPicture(page) {
  removeLoadBtn();

  const getArray = await searchRequest(formInput.value, page);
  const imgEl = renderPicture(getArray);

  galleryContainerEl.insertAdjacentHTML('beforeend', imgEl);

  bigPicture.refresh();
}

function onFormSubmit(e) {
  e.preventDefault();

  galleryContainerEl.innerHTML = '';

  value = 1;

  createPicture(value);
}
