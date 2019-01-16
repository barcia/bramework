// const date = new Date();

// const time = {
// 	hour: date.getHours(),
// 	now: Date.now(),
// 	night: undefined
// }

// document.addEventListener('DOMContentLoaded', function() {
// 	// Check if is night
// 	if (time.hour > 20 || time.hour < 7) {
// 		time.night = true;
// 	} else {
// 		time.night = false;
// 	}

// 	document.documentElement.dataset.night = time.night
// });


function time() {
	const date = new Date();

	const data = {
		now: Date.now(),
		hour: date.getHours(),
		day: date.getDate(),
		weekDay: date.getDay(),
		month: date.getMonth(),
		night: undefined
	}

	if (data.hour > 20 || data.hour < 7) {
		data.night = true;
	} else {
		data.night = false;
	}

	return data;
}


document.addEventListener("DOMContentLoaded", function() {
	console.log(time());
})


module.exports = time;
