// Simple site interactions: theme toggle, mobile nav, year
(function(){
  const themeToggle = document.getElementById('themeToggle');
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const yearEl = document.getElementById('year');

  // Year
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved) root.setAttribute('data-theme', saved);
  themeToggle?.addEventListener('click', ()=>{
    const cur = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', cur);
    localStorage.setItem('theme', cur);
  });

  // Mobile nav
  navToggle?.addEventListener('click', ()=>{
    if(nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
  });
})();
