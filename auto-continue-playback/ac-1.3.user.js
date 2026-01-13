// ==UserScript==
// @name         Songsterr - Auto-Continue Playback
// @namespace    https://github.com/NikoboiNFTB/Songsterr-Tweaks/
// @version      1.3
// @description  Automatically clicks "continue playback" or "continue with interruptions" popup on Songsterr.
// @author       Nikoboi
// @match        https://www.songsterr.com/*
// @grant        none
// @icon         https://www.songsterr.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';

    // Function to check for the dialog and click the link
    function clickContinue() {
        const dialog = document.querySelector('div[style="display: contents;"] form.C8325s');
        if (!dialog) return;

        const continueLink = dialog.querySelector('a[href=""]');
        if (continueLink) {
            continueLink.click();
            console.log('[AutoContinue] Clicked "continue with sync pauses"');
        }
    }

    // Set up a MutationObserver to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            if (mutation.addedNodes.length) {
                clickContinue();
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Also run once immediately in case dialog is already present
    clickContinue();
})();
