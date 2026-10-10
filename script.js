// Simple fade‑in on page load
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, index) => {
    // Stagger the animation
    setTimeout(() => {
      el.classList.add('applied');
    }, index * 200); // 200ms per element
  });
});
