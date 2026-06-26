// theme.js — shared dark/light toggle, persisted across the whole site.
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  var btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = t === 'dark' ? '🌙 Dark' : '☀️ Light';
  localStorage.setItem('studyhub-theme', t);
}
function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}
(function () {
  var saved = localStorage.getItem('studyhub-theme');
  if (saved) applyTheme(saved);
})();
