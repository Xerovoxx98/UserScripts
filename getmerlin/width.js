// ==UserScript==
// @name         Expand Chat Response Box
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Expands the width of the chat response box on the Chat - Merlin AI page
// @author       Xerovoxx98
// @match        https://www.getmerlin.in/chat*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    GM_addStyle(`
        @media (min-width: 768px) {
          .relative.mx-auto.grid.w-full.content-start {
            border: 2px solid red;
            max-width: none !important;
          }
        }
    `);
})();
