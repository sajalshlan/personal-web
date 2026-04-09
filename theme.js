(function () {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || 'dark';
  document.documentElement.setAttribute('data-theme', theme);

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.textContent = theme === 'dark' ? '☀' : '☾';
    btn.addEventListener('click', function () {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      btn.textContent = next === 'dark' ? '☀' : '☾';
    });

    const nav = document.querySelector('.site-nav');
    if (nav && document.getElementById('lore')) {
      function syncNavActive() {
        const current = location.hash.slice(1) || 'lore';
        nav.querySelectorAll('a[href^="#"]').forEach(function (a) {
          var target = a.getAttribute('href').slice(1);
          a.classList.toggle('active', target === current);
        });
      }
      syncNavActive();
      window.addEventListener('hashchange', syncNavActive);
    }
  });
})();
