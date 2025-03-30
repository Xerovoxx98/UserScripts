// ==UserScript==
// @name         Use FiraCode Nerd Font (without breaking icons)
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Change font to FiraCode Nerd Font without breaking icons
// @author       Xerovoxx98
// @match        https://shadowcore.loader.au*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    /* Import FiraCode Nerd Font CSS */
    @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/font-awesome.css');
`);

(function() {
    // Wait for the page to fully load before applying styles
    window.addEventListener('load', () => {
        // Apply FiraCode Nerd Font to all text elements
        const allElements = document.querySelectorAll('*');
        allElements.forEach((el) => {
            // Skip elements with "icon" in their class names
            if (!el.className.includes('icon')) {
                el.style.fontFamily = '"Fira Code", "FiraCode Nerd Font", monospace !important';
            }
        });
    });
})();
