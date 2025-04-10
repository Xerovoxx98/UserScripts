// ==UserScript==
// @name         Expand Chat Response Box
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Expands the width of the chat response box on the Chat - Merlin AI page
// @author       Xerovoxx98
// @match        https://www.getmerlin.in/chat*
// @grant        none
// ==/UserScript==
(function() {
  'use strict';

  const style = document.createElement('style');

  style.textContent = `
    @media (min-width: 768px) {
      .relative.mx-auto.grid.w-full.content-start {
        max-width: none !important;
      }
    }
  `;

  document.head.appendChild(style);
})();
