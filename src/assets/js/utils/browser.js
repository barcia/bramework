const browser = {};

document.addEventListener('DOMContentLoaded', function() {

	// Get the OS
	if (navigator.appVersion.indexOf('Macintosh')!=-1) browser.os='macos';
	if (navigator.appVersion.indexOf('X11')!=-1) browser.os='gnulinux';
	if (navigator.appVersion.indexOf('Windows')!=-1) browser.os='windows';
	if (navigator.appVersion.indexOf('iPhone')!=-1) browser.os='ios';
	if (navigator.appVersion.indexOf('Android')!=-1) browser.os='android';


	// Get the navigator info
	let versionInit;
	// Google Chrome
	if ((navigator.vendor.indexOf('Google')!=-1) && (navigator.appVersion.indexOf('Chrome')!=-1)) {
		browser.browserName ='chrome';
		versionInit = navigator.appVersion.indexOf('Chrome') + 7;
		browser.browserVersion = navigator.appVersion.substring(versionInit, versionInit+2);
	}

	// Safari
	if ((navigator.vendor.indexOf('Apple')!=-1) && (navigator.appVersion.indexOf('Safari')!=-1)) {
		browser.browserName ='safari';
		versionInit = navigator.appVersion.indexOf('Version') + 8;
		browser.browserVersion = navigator.appVersion.substring(versionInit, versionInit+2);
	}

	// Mozilla Firefox
	if ((navigator.appCodeName == 'Mozilla') && (navigator.userAgent.indexOf('Firefox')!=-1)) {
		browser.browserName ='firefox';
		versionInit = navigator.userAgent.indexOf('Firefox') + 8;
		browser.browserVersion = navigator.userAgent.substring(versionInit, versionInit+2);
	}

	// Edge
	if (navigator.appVersion.indexOf('Edge')!=-1) {
		browser.browserName ='edge';
		versionInit = navigator.appVersion.indexOf('Edge') + 5;
		browser.browserVersion = navigator.appVersion.substring(versionInit, versionInit+2);
	}

	// IE
	if (navigator.appVersion.indexOf('Trident')!=-1) {
		browser.browserName ='ie';
		versionInit = navigator.appVersion.indexOf('Trident') + 8;
		if (navigator.appVersion.substring(versionInit, versionInit+1) == 7) {
			browser.browserVersion = 11;
		};
	}



	// Print the info
	if (browser.os!=undefined) document.documentElement.dataset.os = browser.os;
	if (browser.browserName!=undefined) document.documentElement.dataset.browser = browser.browserName;
	if (browser.browserVersion!=undefined) document.documentElement.dataset.browserversion = browser.browserVersion;


	// Check if the browser is online
	browser.online = navigator.onLine;
	document.documentElement.dataset.online = browser.online;

	// Get the navigator language
	// The 'lang' atributte refers to content lang
	browser.lang = navigator.language;
	document.documentElement.dataset.browserlang = browser.lang;

});


module.exports = browser;
