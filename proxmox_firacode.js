// ==UserScript==
// @name         Primary Font as Fira Code with Icon Fallbacks
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Set FiraCode as the primary font for Proxmox, with fallbacks to icons and defaults
// @author       Xerovoxx98
// @match        https://shadowcore.loader.au*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/FiraCode.css');

        /* Add your classes here, separated by commas */
        .fira-code-class, code, pre, kbd, samp {
            font-family: 'Fira Code Nerd Font', monospace !important;
        }

        /* Example of targeting specific elements */
        /*
        .some-other-class {
            font-family: 'Fira Code Nerd Font', monospace !important;
        }
        */

    `);
})();
