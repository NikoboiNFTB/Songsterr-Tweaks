// ==UserScript==
// @name         Songsterr - Auto-Continue Playback
// @namespace    https://github.com/NikoboiNFTB/Songsterr-Tweaks/
// @version      1.5
// @description  Detects the "continue with sync pauses" link and clicks it automatically
// @match        https://www.songsterr.com/*
// @run-at       document-start
// @author       Nikoboi
// @icon         https://static3.songsterr.com/production-main/static3/media/apple-iphone-retina-180px-BzU4hLsi.png
// ==/UserScript==

(function () {
    'use strict';

    const TEXT = 'continue with sync pauses';
    const seen = new WeakSet();

    function scan() {
        document.querySelectorAll('a').forEach(a => {
            if (
                a.textContent.trim().toLowerCase() === TEXT &&
                !seen.has(a)
            ) {
                seen.add(a);
                a.click();
            }
        });
    }

    new MutationObserver(scan).observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    scan();
})();
