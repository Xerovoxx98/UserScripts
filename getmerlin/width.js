// ==UserScript==
// @name         Expand Chat Response Box
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Expands the width of the chat response box on the Chat - Merlin AI page
// @author       Xerovoxx98
// @match        https://www.getmerlin.in/chat*
// @grant        none
// ==/UserScript==
(function() {
  'use strict';

  // Create a new style element
  const style = document.createElement('style');

  // Add the CSS rules to the style element
  style.textContent = `
    @media (min-width: 768px) {
      .relative.mx-auto.grid.w-full.content-start {
        border: 2px solid red;
        max-width: none !important;
      }
    }
  `;

  // Append the style element to the document head
  document.head.appendChild(style);
})();
