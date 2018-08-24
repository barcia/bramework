document.addEventListener('DOMContentLoaded', function() {

	const collapses = Array.prototype.slice.call(document.querySelectorAll('[data-component="collapse"]'));

	collapses.forEach(function(collapse) {

		const controller = collapse.querySelector('[aria-controls]');
		const content = controller.nextElementSibling;
		let status = controller.getAttribute('aria-expanded') === 'true';

		// Set initial status
		if (! status) {
			content.hidden = true;
			content.setAttribute('aria-hidden', true);
		} else {
			content.hidden = false;
			content.setAttribute('aria-hidden', false);
		}

		// Add event listener
		controller.addEventListener('click', toggle)

		// Toggle function
		function toggle() {
			if (! status) {
				show();
			} else {
				hide();
			}
		}

		// Show function
		function show() {
			controller.setAttribute('aria-expanded', true);
			content.hidden = false;
			content.setAttribute('aria-hidden', false);
			status = true;
		}

		// Hide function
		function hide() {
			controller.setAttribute('aria-expanded', false);
			content.hidden = true;
			content.setAttribute('aria-hidden', true);
			status = false;
		}

	});

});
