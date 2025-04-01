// ==UserScript==
// @name         Expand Chat Response Box
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Expands the width of the chat response box on the Chat - Merlin AI page
// @author       Xerovoxx98
// @match        https://www.getmerlin.in/chat*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        // Adjust the selector below to target the chat response box element.
        var chatBox = document.querySelector('.chat-response-box');
        if(chatBox) {
            // Set the width to the desired value (e.g., 90% of the viewport or container).
            chatBox.style.width = "90%";
            chatBox.style.maxWidth = "none";
        }
    });
})();
