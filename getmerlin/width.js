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
.relative, .bg-background {
  background-color: transparent !important;
  background: none !important;
  border: none !important;
  transition: background-color 0.5s ease-in-out, background 0.5s ease-in-out,
    border 0.5s ease-in-out, box-shadow 0.5s ease-in-out !important;
}
  `;
  document.head.appendChild(style);
})();
