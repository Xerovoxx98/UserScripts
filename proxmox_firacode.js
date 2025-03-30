// ==UserScript==
// @name         Primary Font as Fira Code with Icon Fallbacks
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Set FiraCode as the primary font for Proxmox, with fallbacks to icons and defaults
// @author       Xerovoxx98
// @match        https://shadowcore.loader.au*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
  {
    @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/font-awesome.css');
  }
`);
