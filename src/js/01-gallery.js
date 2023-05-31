import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery')
const itemsMarkup = createGalleryMarkup (galleryItems)

function createGalleryMarkup (galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
    </li>`;
}).join('');
}

galleryEl.insertAdjacentHTML('beforeend', itemsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {})