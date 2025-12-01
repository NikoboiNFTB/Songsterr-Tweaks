// ==UserScript==
// @name         Songsterr - Auto-Continue Playback
// @namespace    https://github.com/NikoboiNFTB/Songsterr-Tweaks/
// @version      1.0
// @description  Automatically clicks "continue playback" popup on Songsterr
// @author       Nikoboi
// @match        https://www.songsterr.com/*
// @grant        none
// @icon         https://www.songsterr.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';

    // Observe DOM changes for dynamically added popup
    const observer = new MutationObserver(() => {
        const btn = Array.from(document.querySelectorAll('a')).find(a => a.textContent.trim() === "continue playback");
        if (btn) {
            btn.click();
            console.log('Clicked "continue playback"');
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
