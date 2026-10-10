// Simple fade‑in on intersection
const fadeIns = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('applied');
      observer.unobserve(entry.target);
    }
  });
},{ threshold: 0.1 });

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    fadeIns.forEach(el => observer.observe(el));
  });
} else {
  fadeIns.forEach(el => observer.observe(el));
}
