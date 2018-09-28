!function(){return function e(n,o,r){function t(s,a){if(!o[s]){if(!n[s]){var d="function"==typeof require&&require;if(!a&&d)return d(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=o[s]={exports:{}};n[s][0].call(c.exports,function(e){return t(n[s][1][e]||e)},c,c.exports,e,n,o,r)}return o[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)t(r[s]);return t}}()({1:[function(e,n,o){e("./utils/browser.js"),e("./utils/scroll.js"),e("./utils/time.js"),e("./utils/touchscreen.js")},{"./utils/browser.js":2,"./utils/scroll.js":3,"./utils/time.js":4,"./utils/touchscreen.js":5}],2:[function(e,n,o){const r={};document.addEventListener("DOMContentLoaded",function(){let e;-1!=navigator.appVersion.indexOf("Macintosh")&&(r.os="macos"),-1!=navigator.appVersion.indexOf("X11")&&(r.os="gnulinux"),-1!=navigator.appVersion.indexOf("Windows")&&(r.os="windows"),-1!=navigator.appVersion.indexOf("iPhone")&&(r.os="ios"),-1!=navigator.appVersion.indexOf("Android")&&(r.os="android"),-1!=navigator.vendor.indexOf("Google")&&-1!=navigator.appVersion.indexOf("Chrome")&&(r.browserName="chrome",e=navigator.appVersion.indexOf("Chrome")+7,r.browserVersion=navigator.appVersion.substring(e,e+2)),-1!=navigator.vendor.indexOf("Apple")&&-1!=navigator.appVersion.indexOf("Safari")&&(r.browserName="safari",e=navigator.appVersion.indexOf("Version")+8,r.browserVersion=navigator.appVersion.substring(e,e+2)),"Mozilla"==navigator.appCodeName&&-1!=navigator.userAgent.indexOf("Firefox")&&(r.browserName="firefox",e=navigator.userAgent.indexOf("Firefox")+8,r.browserVersion=navigator.userAgent.substring(e,e+2)),-1!=navigator.appVersion.indexOf("Edge")&&(r.browserName="edge",e=navigator.appVersion.indexOf("Edge")+5,r.browserVersion=navigator.appVersion.substring(e,e+2)),-1!=navigator.appVersion.indexOf("Trident")&&(r.browserName="ie",e=navigator.appVersion.indexOf("Trident")+8,7==navigator.appVersion.substring(e,e+1)&&(r.browserVersion=11)),void 0!=r.os&&(document.documentElement.dataset.os=r.os),void 0!=r.browserName&&(document.documentElement.dataset.browser=r.browserName),void 0!=r.browserVersion&&(document.documentElement.dataset.browserversion=r.browserVersion),r.online=navigator.onLine,document.documentElement.dataset.online=r.online,r.lang=navigator.language,document.documentElement.dataset.browserlang=r.lang}),n.exports=r},{}],3:[function(e,n,o){const r={current:0,previous:0,max:document.documentElement.scrollHeight-document.documentElement.clientHeight,percentage:0,scrolled:!1,direction:void 0};window.addEventListener("scroll",function(){window.scrollY>1?r.scrolled=!0:r.scrolled=!1;r.current>r.previous?r.direction="down":r.direction="up";r.percentage=Math.round(100*window.scrollY/r.max),document.documentElement.dataset.scroll=r.scrolled,document.documentElement.dataset.scrolldir=r.direction,document.documentElement.dataset.scrollper=r.percentage,r.previous=r.current,r.current=window.scrollY}),window.addEventListener("resize",function(){r.max=document.documentElement.scrollHeight-document.documentElement.clientHeight}),n.exports=r},{}],4:[function(e,n,o){const r={hour:(new Date).getHours(),now:Date.now(),night:void 0};document.addEventListener("DOMContentLoaded",function(){r.hour>20||r.hour<7?r.night=!0:r.night=!1,document.documentElement.dataset.night=r.night}),n.exports=r},{}],5:[function(e,n,o){const r="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch;document.documentElement.dataset.touchscreen=!0===r,n.exports=r},{}]},{},[1]);