// ==UserScript==
// @name         Primary Font as Fira Code with Icon Fallbacks
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Changes Proxmox fonts to FiraCode Nerd Font
// @author       Xerovoxx98
// @match        https://shadowcore.loader.au*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/FiraCode.css');

        /* Add your classes here, separated by commas */
        .x-body, .x-tree-node-text, .x-grid-item, .x-btn-inner-default-toolbar-small, .x-btn-inner-default-small, .x-column-header, .x-menu-item-text-default, .x-form-text-default, .x-boundlist-item, .x-tab-inner-default {
            font-family: 'Fira Code Nerd Font', monospace !important;
        }
    `);
})();
