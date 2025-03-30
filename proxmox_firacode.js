// ==UserScript==
// @name         Primary Font as Fira Code with Icon Fallbacks
// @namespace    http://tampermonkey.net/
// @version      1.6
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
        .x-body {
            font-family: 'Fira Code Nerd Font', helvetica, arial, verdana, sans-serif;
        }

        /* Example of targeting specific elements */
        /*
        .some-other-class {
            font-family: 'Fira Code Nerd Font', helvetica, arial, verdana, sans-serif;
        }
        */

    `);
})();
