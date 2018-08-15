const time = require('./time.js');

const visits = {
	counter: 0,
	last: undefined,
	timeAgo: undefined
};

visits.counter = localStorage.getItem((window.location.host) + '_visits');
visits.last = localStorage.getItem((window.location.host) + '_lastVisit');

// Save in localStorage the number of visits
if (visits.counter) {
	visits.counter++;
	localStorage.setItem( (window.location.host) + '_visits', visits.counter);
} else {
	localStorage.setItem( (window.location.host) + '_visits', 1);
};

// Save in localStorage the timestamp of last visit
if (visits.last) {
	visits.timeAgo = time.now - visits.last;
};
localStorage.setItem( (window.location.host) + '_lastVisit', time.now);

module.exports = visits;
