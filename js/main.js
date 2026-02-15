/* ===================================================
   Shared JS — davidrowthorn.tech
   Tabs + obfuscated contact
   =================================================== */

(function () {
  'use strict';

  /* --- Tab switching --- */
  function initTabs() {
    var buttons = document.querySelectorAll('.tab-btn');
    if (!buttons.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var group = btn.closest('.tabs').parentElement;
        // Deactivate all
        group.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
        group.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
        // Activate selected
        btn.classList.add('active');
        var panel = group.querySelector('#' + btn.getAttribute('data-tab'));
        if (panel) panel.classList.add('active');
      });
    });

    // Handle deep-linking via hash
    handleHash();
    window.addEventListener('hashchange', handleHash);
  }

  function handleHash() {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;
    var btn = document.querySelector('.tab-btn[data-tab="' + hash + '"]');
    if (btn) btn.click();
  }

  /* --- Obfuscated email contact --- */
  function initContact() {
    var els = document.querySelectorAll('[data-contact]');
    els.forEach(function (el) {
      var p1 = 'davidrowthorn';
      var p2 = 'gmail.com';
      var addr = p1 + '@' + p2;
      var kind = el.getAttribute('data-contact');

      if (kind === 'link') {
        el.href = 'mailto:' + addr;
      } else if (kind === 'inline') {
        el.innerHTML = '<a href="mailto:' + addr + '">' + addr + '</a>';
      }
    });
  }

  /* --- Init on DOMContentLoaded --- */
  document.addEventListener('DOMContentLoaded', function () {
    initTabs();
    initContact();
  });
})();
