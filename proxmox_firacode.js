// ==UserScript==
// @name         Primary Font as Fira Code with Icon Fallbacks
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Set FiraCode as the primary font for Proxmox, with fallbacks to icons and defaults
// @author       Xerovoxx98
// @match        https://shadowcore.loader.au*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/FiraCode.css');
        @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/font-awesome.css'); /* For icons */

        /* Apply FiraCode Nerd Font with Font Awesome as fallback for icons */
        body, html, * {
            font-family: 'Fira Code Nerd Font', 'Font Awesome 6 Free', monospace, sans-serif !important;
        }

        /* Specifically target code elements */
        code, pre, kbd, samp {
            font-family: 'Fira Code Nerd Font', monospace !important;
        }

        /* Specifically target icon elements, if possible */
        /*
        i[class^="fa"], i[class*=" fa"] {
            font-family: 'Font Awesome 6 Free', sans-serif !important;
        }
        */

    `);
})();
