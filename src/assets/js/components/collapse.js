document.addEventListener('DOMContentLoaded', function() {


	const collapses = document.getElementsByClassName('collapse');

	for (var i = 0; i < collapses.length; i++) {
		collapse;
		collapse.content = collapses[i].getElementsByClassName('collapse-content')[0];
		collapse.control = collapses[i].getElementsByClassName('collapse-ctrl')[0];
		// collapse.id = collapses[i].id;
		collapse.status = collapse.control.getAttribute('aria-expanded');
		collapse.status = (collapse.status === 'true');
		// console.log(collapse.status);

		collapse.control.addEventListener('click', function() {
			if (! this.status) {
				this.control.setAttribute('aria-expanded', true);
				this.content.hidden = false;
				this.status = true;
			} else {
				this.control.setAttribute('aria-expanded', false);
				this.content.hidden = true;
				this.status = false;
			};
		});

	}

	// for (var i = 0; i < collapses.length; i++) {
	// 	collapse = {};
	// 	collapse.id = collapses[i].id;
	// 	collapse.content = document.getElementById(collapse.id );
	// 	collapse.control = document.querySelector('[aria-controls=' + collapse.id  + ']');
	// 	collapse.status = collapse.control.getAttribute('aria-expanded');
	// 	collapse.status = (collapse.status === 'true');



	// 	if (! collapse.status) {
	// 		collapse.content.hidden = true;
	// 	} else {
	// 		collapse.content.hidden = false;
	// 	};

	// 	collapse.control.addEventListener('click', function() {
	// 		// collapse.status = collapse.control.getAttribute('aria-expanded');
	// 		// collapse.status = (collapse.status === 'true');

	// 		if (! collapse.status) {
	// 			collapse.control.setAttribute('aria-expanded', true);
	// 			collapse.content.hidden = false;
	// 			collapse.status = true;
	// 		} else {
	// 			collapse.control.setAttribute('aria-expanded', false);
	// 			collapse.content.hidden = true;
	// 			collapse.status = false;
	// 		};
	// 	});
	// }
});
