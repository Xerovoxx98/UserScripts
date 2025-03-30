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
        /* Proxmox icons will use the default font */

        /* Apply FiraCode Nerd Font with Proxmox icon fallback */
        body, html, * {
            font-family: 'Fira Code Nerd Font', monospace, sans-serif !important;
        }

        /* Specifically target code elements */
        code, pre, kbd, samp {
            font-family: 'Fira Code Nerd Font', monospace !important;
        }

        /* Proxmox icons will fall back to the website's default font. No specific font needs to be defined here. */
        /*
        .proxmox-icon-class, .another-proxmox-icon-class {
            font-family: inherit;
        }
        */

    `);
})();
