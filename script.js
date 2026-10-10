// Simple fade‑in animation using IntersectionObserver
const fadeElements = document.querySelectorAll('.fade-in');

function addApplied(el){
  el.classList.add('applied');
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting) {
        entry.target.classList.add('applied');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  // Observe all elements
  fadeElements.forEach(el=>observer.observe(el));
} else {
  // Fallback: immediately show all if no IntersectionObserver support
  fadeElements.forEach(addApplied);
}
