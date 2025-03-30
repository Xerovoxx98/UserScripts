// ==UserScript==
// @name         Use FiraCode Nerd Font (without breaking icons)
// @namespace    http://tampermonkey.net/
// @version      0.5
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
        const allTextElements = document.querySelectorAll('body *');
        
        allTextElements.forEach((el) => {
            // Skip elements with "icon" in their class name or icon tags
            if (el.className.includes('icon') || el.tagName === 'I' || el.tagName === 'SPAN' && el.classList.contains('fa')) {
                return; // Skip icon elements
            }

            // Apply the FiraCode Nerd Font to non-icon elements
            el.style.fontFamily = '"Fira Code", "FiraCode Nerd Font", monospace !important';
        });
    });
})();
