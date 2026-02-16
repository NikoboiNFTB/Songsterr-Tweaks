// ==UserScript==
// @name         Songsterr - Auto-Continue Playback
// @namespace    https://github.com/NikoboiNFTB/Songsterr-Tweaks/
// @version      1.4
// @description  Detects the "continue with sync pauses" link and clicks it automatically
// @match        https://www.songsterr.com/*
// @run-at       document-start
// @author       Nikoboi
// @icon         https://static3.songsterr.com/production-main/static3/media/apple-iphone-retina-180px-BzU4hLsi.png
// ==/UserScript==

(function () {
    'use strict';

    const LINK_TEXT = 'continue with sync pauses';
    let clicked = false;

    function tryClick() {
        if (clicked) return;

        const links = document.querySelectorAll('a');
        for (const a of links) {
            if (a.textContent.trim().toLowerCase() === LINK_TEXT) {
                clicked = true;

                const evt = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });

                a.dispatchEvent(evt);
                return;
            }
        }
    }

    if (document.readyState !== 'loading') {
        tryClick();
    }

    const observer = new MutationObserver(tryClick);
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
