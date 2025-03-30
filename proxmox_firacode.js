// ==UserScript==
// @name         Use FiraCode Nerd Font (without breaking icons)
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Change font to FiraCode Nerd Font while preserving icon fonts
// @author       Xerovoxx98
// @match        https://shadowcore.loader.au*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
  /* Import the FiraCode Nerd Font styling */
  @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/font-awesome.css');

  /* Apply the font to most elements */
  body, body * {
      font-family: "Fira Code", "FiraCode Nerd Font", monospace !important;
  }

  /* Exclude common icon selectors */
  .fa,
  [class*="icon"],
  i,
  span.fa {
      font-family: initial !important;
  }
`);
