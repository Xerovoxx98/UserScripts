// ==UserScript==
// @name         Expand Chat Response Box
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Expands the width of the chat response box on the Chat - Merlin AI page
// @author       Xerovoxx98
// @match        https://www.getmerlin.in/chat*
// @grant        none
// ==/UserScript==
(function() {
  'use strict';

  const style = document.createElement('style');

  style.textContent = `
.relative.mx-auto.grid.w-full.content-start {max-width: none !important;}
.rounded-lg.absolute.bottom-offset-down-4 {max-width: none !important;padding-right: 30px;padding-left: 30px;}
  `;
  document.head.appendChild(style);
})();
