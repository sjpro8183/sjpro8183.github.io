document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));
const lb=document.getElementById('lightbox'), lbImg=lb.querySelector('img');
document.querySelectorAll('.gallery button, .system-gallery button').forEach(button=>button.addEventListener('click',()=>{const img=button.querySelector('img');lbImg.src=img.src;lbImg.alt=img.alt;lb.classList.add('show');lb.setAttribute('aria-hidden','false')}));
function closeLB(){lb.classList.remove('show');lb.setAttribute('aria-hidden','true');}
lb.querySelector('.close').addEventListener('click',closeLB);
lb.addEventListener('click',e=>{if(e.target===lb)closeLB()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLB()});