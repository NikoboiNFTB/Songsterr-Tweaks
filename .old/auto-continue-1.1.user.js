// ==UserScript==
// @name         Songsterr - Auto-Continue Playback
// @namespace    https://github.com/NikoboiNFTB/Songsterr-Tweaks/
// @version      1.1
// @description  Automatically clicks "continue playback" or "continue with interruptions" popup on Songsterr.
// @author       Nikoboi
// @match        https://www.songsterr.com/*
// @grant        none
// @icon         https://www.songsterr.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';

    const observer = new MutationObserver(() => {
        const btn = Array.from(document.querySelectorAll('a')).find(a => {
            const txt = a.textContent.trim().toLowerCase();
            return txt === "continue playback" || txt === "continue with interruptions";
        });
        if (btn) {
            btn.click();
            console.log('Clicked continue button:', btn.textContent.trim());
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
