// ==UserScript==
// @name         Expand Chat Response Box
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Expands the width of the chat response box on the Chat - Merlin AI page
// @author       Xerovoxx98
// @match        https://www.getmerlin.in/chat*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    style.id = 'Xerovoxx98-Styles-css'; 
    style.textContent = `
        /* Expand the maximum width of the chat container */
        .relative.mx-auto.grid.w-full.content-start {
            max-width: none !important;
        }

        /* Adjust the width and padding of the rounded chat box */
        .rounded-lg.absolute.bottom-offset-down-4 {
            max-width: none !important;
            padding: 0 30px !important; /* Shorthand for padding-right and padding-left */
        }

        /* Set the height of the chat input area */
        .size-full {
            height: 85%;
        }

        /* Make the background transparent and remove borders from relevant elements - this is for Zen Browser Compatibility*/
        .relative,
        .bg-background {
            background: transparent !important;
            border: none !important;
            transition: background-color 0.5s ease-in-out,
                        background 0.5s ease-in-out,
                        border 0.5s ease-in-out,
                        box-shadow 0.5s ease-in-out !important;
        }
    `;
    document.head.appendChild(style);
    console.log('Expanded chat response box userscript loaded.');
    if (!document.getElementById('Xerovoxx98-Styles-css')) {
        console.error('Failed to load Xerovoxx98 chat styles.');
    }
})();
