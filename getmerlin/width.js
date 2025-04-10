// ==UserScript==
// @name         Expand Chat Response Box
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Expands the width of the chat response box on the Chat - Merlin AI page
// @author       Xerovoxx98
// @match        https://www.getmerlin.in/chat*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    GM_addStyle(`
        @media (min-width: 768px) {
            .\\!container,
            .container {
                max-width: 100% !important;
                width: 100% !important;
                padding-right: 60px !important;
                padding-left: 60px !important;
            }
        }
    `);
})();
