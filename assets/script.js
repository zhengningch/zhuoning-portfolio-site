const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeButton = document.getElementById("lightbox-close");
const triggerImages = document.querySelectorAll("[data-lightbox]");

function openLightbox(image) {
  const figure = image.closest("figure");
  const caption = figure ? figure.querySelector("figcaption") : null;

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = caption ? caption.textContent : image.alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxCaption.textContent = "";
  document.body.style.overflow = "";
}

triggerImages.forEach((image) => {
  image.addEventListener("click", () => openLightbox(image));
});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});
