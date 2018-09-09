const touchscreen = ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);

// Check if is a touchscreen device or not
if (touchscreen === true) {
	document.documentElement.dataset.touchscreen = true;
} else {
	document.documentElement.dataset.touchscreen = false;
};


module.exports = touchscreen;
