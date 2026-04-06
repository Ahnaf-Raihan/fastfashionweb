const revealSections = document.querySelectorAll('.reveal-section');

// Reveal sections when they are close to entering the viewport.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, sectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          sectionObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  revealSections.forEach((section) => {
    observer.observe(section);
  });
} else {
  // Fallback for very old browsers that do not support IntersectionObserver.
  revealSections.forEach((section) => {
    section.classList.add('is-visible');
  });
}
