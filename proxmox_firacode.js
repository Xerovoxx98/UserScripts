// ==UserScript==
// @name         Fix FiraCode Nerd Font with Proxmox Icons
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Apply FiraCode Nerd Font while preserving Proxmox framework icons
// @author       Xerovoxx98
// @match        https://shadowcore.loader.au*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
  /* Import FiraCode Nerd Font and Proxmox icon fonts if missing */
  @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/font-awesome.css');

  /* Apply font to most text elements, excluding framework visuals/icons */
  body *:not([class*="fa"])
         :not([class*="icon"])
         :not([class*="x-mask"])
         :not([class*="x-border-box"])
         :not([class*="x-tool"])
         :not([class*="-draggable"]) {
      font-family: "Fira Code", "FiraCode Nerd Font", monospace !important;
  }

  /* Prevent inheritance for framework visuals/icons */
  .x-mask,
  .x-border-box,
  .x-tool,
  .x-window-header-default,
  .x-header-draggable {
      font-family: 'helvetica', 'arial', 'verdana', sans-serif !important;
  }

  /* Reinforce pseudo-element defaults for framework visuals/icons */
  .x-mask::before,
  .x-mask::after,
  .x-border-box::before,
  .x-border-box::after,
  .x-tool::before,
  .x-tool::after {
      font-family: 'FontAwesome', 'helvetica', 'arial' !important;
  }
`);
