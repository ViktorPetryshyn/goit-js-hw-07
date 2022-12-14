import SimpleLightbox from "simplelightbox";
import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createPictureCardMarkup(galleryItems);
galleryEl.innerHTML = galleryMarkup;
function createPictureCardMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
