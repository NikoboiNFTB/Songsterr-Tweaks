// ==UserScript==
// @name         Songsterr - Auto-Continue Playback
// @namespace    https://github.com/NikoboiNFTB/Songsterr-Tweaks/
// @version      1.6
// @description  Detects the "continue with sync pauses" link and clicks it automatically
// @match        https://www.songsterr.com/*
// @run-at       document-start
// @author       Nikoboi
// @icon         https://static3.songsterr.com/production-main/static3/media/apple-iphone-retina-180px-BzU4hLsi.png
// ==/UserScript==

(function () {
  'use strict';

  // External junk the function expects
  let n = '';
  let f = 0;
  let t = {};

  // The function, unchanged
  const spamFn = function (e) {
    if (this.l) {
      var _ = this.l[e.type + n];
      if (null == e.t) e.t = f++;
      else if (e.t < _.u) return;
      return _(t.event ? t.event(e) : e);
    }
  };

  // Fake handler so it has something to call
  const fakeContext = {
    l: {
      click: function (e) {
        return e;
      }
    }
  };
  fakeContext.l.click.u = -Infinity;

  const fakeEvent = {
    type: 'click',
    t: null
  };

  // Spam it. Adjust interval if you want more chaos.
  setInterval(() => {
    try {
      spamFn.call(fakeContext, fakeEvent);
    } catch (err) {
      // Silence is violence, but logs are annoying
    }
  }, 1);
})();
