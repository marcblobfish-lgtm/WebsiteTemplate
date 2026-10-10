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

function observeAll(){
  fadeIns.forEach(el=>observer.observe(el));
}

if ('IntersectionObserver' in window) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAll);
  } else {
    observeAll();
  }
} else {
  // Fallback: instantly show all
  fadeIns.forEach(el=>el.classList.add('applied'));
}
