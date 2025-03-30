// ==UserScript==
// @name         Use FiraCode Nerd Font
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Change font to FiraCode Nerd Font without breaking icons
// @author       Xerovoxx98
// @match        https://shadowcore.loader.au*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    /* Import FiraCode Nerd Font CSS */
    @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/font-awesome.css');

    /* Apply FiraCode Nerd Font only to text elements */
    body, 
    .some-text-class, 
    .another-text-class {
        font-family: "Fira Code", "FiraCode Nerd Font", monospace !important;
    }

    /* Preserve Proxmox icons by not affecting icon-related classes */
    .fa, .icon-class {
        font-family: "Font Awesome 5 Free", "Proxmox Icon Font", sans-serif !important;
    }
`);
