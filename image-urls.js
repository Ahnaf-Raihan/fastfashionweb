// Paste your real image URLs here as you get them.
const IMAGE_URLS = {
  hero: "",
  environmental: "",
  human: "",
  consumer: "",
};

function applyImageUrls() {
  const hero = document.querySelector("[data-image-key='hero']");
  if (hero && IMAGE_URLS.hero) {
    hero.style.setProperty("--hero-image", `url('${IMAGE_URLS.hero}')`);
  }

  const images = document.querySelectorAll("img[data-image-key]");
  images.forEach((img) => {
    const key = img.getAttribute("data-image-key");
    const url = IMAGE_URLS[key];
    if (url) {
      img.src = url;
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyImageUrls);
} else {
  applyImageUrls();
}
