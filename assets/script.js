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

/* ---------- Scroll progress bar ---------- */
const scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;
  scrollProgress.style.width = `${ratio * 100}%`;
}

let progressTicking = false;
window.addEventListener("scroll", () => {
  if (!progressTicking) {
    requestAnimationFrame(() => {
      updateScrollProgress();
      progressTicking = false;
    });
    progressTicking = true;
  }
});
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

/* ---------- Category scrollspy ---------- */
const catSections = document.querySelectorAll("[data-cat]");
const catLinks = document.querySelectorAll("a[data-cat]");

function setActiveCat(cat) {
  catLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.cat === cat);
  });
}

if (catSections.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      let best = null;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        }
      });
      if (best) {
        setActiveCat(best.target.dataset.cat);
      }
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
  );
  catSections.forEach((section) => observer.observe(section));
}
