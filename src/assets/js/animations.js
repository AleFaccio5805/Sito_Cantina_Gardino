document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function observeElements() {
    const elementsToAnimate = document.querySelectorAll('.wine-card, .gallery-item, .story-text, .story-image, .contact-info, .contact-form');
    elementsToAnimate.forEach(function(element) {
      if (!element.classList.contains('fade-in')) {
        observer.observe(element);
      }
    });
  }

  observeElements();

  setTimeout(observeElements, 500);
  setTimeout(observeElements, 1000);
});
