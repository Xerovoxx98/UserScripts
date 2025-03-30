// ==UserScript==
// @name         Fix FiraCode Nerd Font with Proxmox Icons
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Ensure FiraCode Nerd Font works without breaking icons on Proxmox
// @author       Xerovoxx98
// @match        https://shadowcore.loader.au*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
  /* Import FiraCode Nerd Font AND required icon fonts */
  @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/font-awesome.css');

  /* General font application */
  body *:not([class*="fa"]):not([class*="icon"]):not(i):not(span.fa):not([class*="x-mask"]):not([class*="x-border-box"]) {
      font-family: "Fira Code", "FiraCode Nerd Font", monospace !important;
  }

  /* Prevent font-family override on Proxmox framework elements */
  .x-mask,
  .x-border-box,
  .x-tool,
  .x-window-header-default,
  .x-header-draggable,
  div[class*="x-mask"],
  div[class*="x-border-box"],
  div[class*="x-tool"] {
      font-family: 'helvetica', 'arial', 'verdana', sans-serif !important;
  }

  /* Restore pseudo-element fonts */
  .x-mask::before,
  .x-mask::after,
  .x-border-box::before,
  .x-border-box::after {
      font-family: 'FontAwesome', 'helvetica', 'arial' !important;
  }

  /* Handle specific ExtJS elements and pseudo-elements if they use icons */
  span.x-tool,
  span.x-window-header-default,
  span.x-tool::before,
  span.x-tool::after {
      font-family: 'FontAwesome', 'helvetica', 'arial', sans-serif !important;
  }
`);
