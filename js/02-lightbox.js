import { galleryItems } from "./gallery-items.js";
// Change code below this line
const container = document.querySelector(".gallery");
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery_item">
    <a class="gallery_link" href="${original}">
    <img class="gallery_image" src="${preview}" alt="${description}" />
    </a>
    </li>
    `
    )
    .join("");
}
const lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
