const scroll = {
	current: 0,
	previous: 0,
	max: document.documentElement.scrollHeight - document.documentElement.clientHeight,
	percentage: 0,
	scrolled: false,
	direction: undefined
}


window.addEventListener('scroll', onScroll);

function onScroll() {
	// Set if the window is scrolled
	if (window.scrollY > 1) {
		scroll.scrolled = true;
	} else {
		scroll.scrolled = false;
	};

	// Set if the window scroll up or down
	if (scroll.current > scroll.previous) {
		scroll.direction = 'down';
	} else {
		scroll.direction = 'up';
	}

	// Set which percentage of window is scrolled
	scroll.percentage = Math.round((window.scrollY * 100) / scroll.max)

	// Write the scroll info in data-attributes
	document.documentElement.dataset.scroll = scroll.scrolled;
	document.documentElement.dataset.scrolldir = scroll.direction;
	document.documentElement.dataset.scrollper = scroll.percentage;

	// Update the scroll position
	scroll.previous = scroll.current;
	scroll.current = window.scrollY;
}


window.addEventListener('resize', onResize);

function onResize() {
	// Reset max height when resize the screen
	scroll.max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
};


module.exports = scroll;
