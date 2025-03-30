// ==UserScript==
// @name         Use FiraCode Nerd Font (without breaking icons)
// @namespace    http://tampermonkey.net/
// @version      0.6
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
    // Apply FiraCode Nerd Font to all text elements
    function applyFont() {
        const allElements = document.querySelectorAll('body *');

        allElements.forEach((el) => {
            // Skip elements that have "icon" in their class or are <i> or <span> with "fa" class
            if (el.className.includes('icon') || el.tagName === 'I' || (el.tagName === 'SPAN' && el.classList.contains('fa'))) {
                return; // Skip icon-related elements
            }

            // Apply the FiraCode Nerd Font to text elements
            el.style.fontFamily = '"Fira Code", "FiraCode Nerd Font", monospace !important';
        });
    }

    // Initial run on page load
    window.addEventListener('load', applyFont);

    // MutationObserver to handle dynamic content loading (in case new elements are added after the page load)
    const observer = new MutationObserver(applyFont);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
