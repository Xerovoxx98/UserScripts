// ==UserScript==
// @name         Use FiraCode Nerd Font
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change font to FiraCode Nerd Font
// @author       Xerovoxx98
// @match        https://shadowcore.loader.au*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/font-awesome.css');

    * {
        font-family: "Fira Code", "FiraCode Nerd Font", monospace !important;
    }
`);
