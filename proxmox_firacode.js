// ==UserScript==
// @name         Primary Font as Fira Code with Icon Fallbacks
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Set FiraCode as the primary font for Proxmox, with fallbacks to icons and defaults
// @author       Xerovoxx98
// @match        https://shadowcore.loader.au*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
  /* Import FiraCode Nerd Font and FontAwesome for icons (as fallback) */
  @import url('https://cdn.jsdelivr.net/npm/nerd-fonts/css/font-awesome.css');

  /* Global font stack: Use FiraCode as the primary font, with fallbacks to the defaults */
  body {
      font-family: "Fira Code", "FiraCode Nerd Font", "FontAwesome", "helvetica", "arial", "verdana", sans-serif !important;
  }

  /* Ensure forms, system UI, and specific elements use their default font stack if necessary */
  input,
  button,
  select,
  textarea,
  [class*="icon"],
  [class*="fa"],
  .x-mask,
  .x-tool,
  .x-border-box {
      font-family: inherit !important; /* Keep any existing font applied by the framework */
  }

  /* Reinforce pseudo-element font fallback for icons */
  *::before,
  *::after {
      font-family: inherit !important; /* Inherit from parent, defaults to framework settings */
  }
`);
