// ==UserScript==
// @name         Use FiraCode Nerd Font (without breaking icons)
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Change font to FiraCode Nerd Font on Proxmox, while preserving icon fonts
// @author       Xerovoxx98
// @match        https://shadowcore.loader.au*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
  /* Import FiraCode Nerd Font styling */
  @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/font-awesome.css');

  /* 1. Apply desired font to most text elements, but skip those that are most likely icons.
       Adjust the :not() selectors as needed based on the target page’s markup. */
  body *:not([class*="fa"]):not([class*="icon"]):not(i):not(span.fa) {
      font-family: "Fira Code", "FiraCode Nerd Font", monospace !important;
  }

  /* 2. Reinstate the default icon font on common icon selectors.
       Replace 'FontAwesome' below with the actual default icon font Proxmox uses if needed. */
  .fa,
  .fas,
  .far,
  .fal,
  .fab,
  [class*="fa-"],
  [class*="icon"],
  i[class*="fa"],
  span.fa {
      font-family: 'FontAwesome', sans-serif !important;
  }
`);
