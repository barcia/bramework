const date = new Date();

const time = {
	hour: date.getHours(),
	now: Date.now(),
	night: undefined
}

document.addEventListener('DOMContentLoaded', function() {
	// Check if is night
	if (time.hour > 20 || time.hour < 7) {
		time.night = true;
	} else {
		time.night = false;
	}

	document.documentElement.dataset.night = time.night
});


module.exports = time;
