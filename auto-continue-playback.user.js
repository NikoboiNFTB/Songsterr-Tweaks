// ==UserScript==
// @name         Songsterr - Auto Continue With Sync Pauses
// @namespace    https://github.com/NikoboiNFTB/Songsterr-Tweaks
// @downloadURL  https://github.com/NikoboiNFTB/Songsterr-Tweaks/raw/refs/heads/main/auto-continue-playback.user.js
// @version      1.0
// @description  Automatically clicks "continue with sync pauses" when the Songsterr Plus popup appears.
// @author       Nikoboi
// @icon         https://www.songsterr.com/favicon.ico
// @match        https://www.songsterr.com/*
// @grant        none
// ==/UserScript==

(function () {
	"use strict";

	function clickContinueLink() {
		const links = document.querySelectorAll("a");

		for (const link of links) {
			if (
				link.textContent &&
				link.textContent.trim().toLowerCase() ===
					"continue with sync pauses"
			) {
				link.click();
				return true;
			}
		}

		return false;
	}

	// Initial check
	clickContinueLink();

	// Watch for popup insertion
	const observer = new MutationObserver(() => {
		clickContinueLink();
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});
})();
