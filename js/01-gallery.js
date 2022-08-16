import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createPictureCardMarkup(galleryItems);
galleryEl.innerHTML = galleryMarkup;
galleryEl.addEventListener("click", clickOnPicture);
function createPictureCardMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li>
      <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
        </a>
      </div>
      </li>`;
    })
    .join("");
}

function clickOnPicture(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  modalOpen(e);
}

function modalOpen(e) {
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="1280" height="720">
`,
    {
      onShow: () => window.addEventListener("keydown", modalClose),
      onClose: () => window.removeEventListener("keydown", modalClose),
    }
  );
  instance.show();
  function modalClose(e) {
    if (e.keyCode === 27) {
      instance.close();
    }
  }
}
