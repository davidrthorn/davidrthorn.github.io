/* ===================================================
   Shared JS — davidrowthorn.tech
   Obfuscated contact
   =================================================== */

(function () {
  'use strict';

  /* --- Obfuscated email contact --- */
  function initContact() {
    var els = document.querySelectorAll('[data-contact]');
    els.forEach(function (el) {
      var z = [100,97,118,105,100,114,111,119,116,104,111,114,110,64,103,109,97,105,108,46,99,111,109];
      var addr = z.map(function(c){return String.fromCharCode(c)}).join('');
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
    initContact();
  });
})();
