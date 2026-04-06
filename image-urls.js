// Paste your real image URLs here as you get them.
const IMAGE_URLS = {
  hero: "",
  "what-is": "https://i.imgur.com/CjWOKM5.png",
  environmental: "https://i.imgur.com/o49qlKb.png",
  textile: "",
  consumer: "https://i.pinimg.com/1200x/db/4e/10/db4e10e18f6e42cb99fd61c1653e2991.jpg",
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
