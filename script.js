document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  if(menuToggle && nav){
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Año dinámico
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Lazy load imágenes galería
  document.querySelectorAll('.thumb').forEach(img=>{
    const src = img.getAttribute('data-src');
    if(src) img.src = src;
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.querySelector('.lb-img');
  const lbClose = document.querySelector('.lb-close');
  document.querySelectorAll('.thumb').forEach(t=>{
    t.addEventListener('click', ()=>{
      lbImg.src = t.src || t.getAttribute('data-src');
      lightbox.classList.add('active');
    });
  });
  lbClose.addEventListener('click', ()=>{
    lightbox.classList.remove('active');
    lbImg.src='';
  });
  lightbox.addEventListener('click',(e)=>{
    if(e.target === lightbox){lightbox.classList.remove('active'); lbImg.src='';}
  });

  // Pausar humo si tab inactivo
  const steamPaths = document.querySelectorAll('.steam span');
  document.addEventListener('visibilitychange', () => {
    steamPaths.forEach(p=>p.style.animationPlayState = document.hidden ? 'paused' : 'running');
  });
});
