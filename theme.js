// Theme, set before first paint. Shared by jch254.com and 603.nz.
//
// This is a file and not an inline script because both sites send a content
// security policy that only runs scripts from their own origin. It is loaded
// as a plain blocking script in the head because deferred and module scripts
// run after first paint.
//
// It follows prefers-color-scheme until the toggle is pressed, then keeps the
// choice in localStorage. It sets data-theme on <html> and theme-color to the
// page colour of the theme in use, and it handles the toggle, so no page
// needs any other JavaScript for theming.
(function () {
  var colors = { light: '#fbfbf8', dark: '#141917' }; // --page in each theme
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function stored() {
    try {
      var value = localStorage.getItem('theme');
      return value === 'light' || value === 'dark' ? value : null;
    } catch (e) {
      return null;
    }
  }

  function label() {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < buttons.length; i += 1) {
      buttons[i].setAttribute('aria-label', 'Switch to ' + next + ' theme');
    }
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', colors[theme]);
    label();
  }

  apply(stored() || (media.matches ? 'dark' : 'light'));

  media.addEventListener('change', function (event) {
    if (!stored()) apply(event.matches ? 'dark' : 'light');
  });

  document.addEventListener('DOMContentLoaded', label);

  document.addEventListener('click', function (event) {
    var button = event.target.closest && event.target.closest('[data-theme-toggle]');
    if (!button) return;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* The choice still holds for this page. */
    }
  });
})();
