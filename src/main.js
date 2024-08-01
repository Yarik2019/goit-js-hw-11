import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPhotos } from './js/pixabay-api';
import { imagesMarkup } from './js/render-functions';

import iconError from './img/error.svg';

const ElementForm = document.querySelector('.js-form');
const ul = document.querySelector('.js-gallery-list');
const loader = document.querySelector('.loader');

ElementForm.addEventListener('submit', onSearchGallery);

function onSearchGallery(event) {
  event.preventDefault();

  const formData = new FormData(ElementForm);
  const searchQuery = formData.get('search').trim();

  if (searchQuery === '') {
    return iziToastMessage('The field cannot be empty!');
  }

  loader.classList.remove('hidden');

  getPhotos(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        return iziToastMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }

      ul.innerHTML = imagesMarkup(data.hits);

      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('hidden');
      event.target.reset();
    });
}

function iziToastMessage(message) {
  return iziToast.error({
    iconUrl: iconError,
    title: 'Error',
    titleColor: '#fff',
    messageColor: '#fff',
    backgroundColor: '#ef4040',
    position: 'topRight',
    message: message,
  });
}
