function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  // Get the text element
  const text = document.querySelector('.text');

  // Add a scroll event listener
  window.addEventListener('scroll', () => {
    if (isInViewport(text)) {
      text.classList.add('visible'); // Add the animation class when in viewport
    }
  });