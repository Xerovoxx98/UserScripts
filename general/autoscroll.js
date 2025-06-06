// ==UserScript==
// @name         Auto Scroll to Bottom
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Keep specified tabs scrolled to the bottom
// @author       Xerovoxx98
// @match        https://logs.mydomain.com*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.scrollTo(0, document.body.scrollHeight);
    setInterval(() => window.scrollTo(0, document.body.scrollHeight), 1000); // Adjust the interval as needed
})();
