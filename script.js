// Immediately apply fade‑in classes after page load
const fadeIns = document.querySelectorAll('.fade-in');
fadeIns.forEach((el, index) => {
  setTimeout(() => {
    el.classList.add('applied');
  }, index * 200); // stagger animation
});
