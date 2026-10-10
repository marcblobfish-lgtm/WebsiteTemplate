// Simple fade‑in on intersection
const fadeIns = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('applied');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.1});
fadeIn.forEach(el=>{observer.observe(el);});
