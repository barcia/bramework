'use strict';

document.addEventListener('DOMContentLoaded', function() {

	const collapses = Array.prototype.slice.call(document.querySelectorAll('[data-component="collapse"]'));

	collapses.forEach(function(collapse) {

		const controller = collapse.querySelector('[aria-controls]');
		const content = controller.nextElementSibling;
		let status = controller.getAttribute('aria-expanded') === 'true';

		// Set initial status
		status ? contentShow() : contentHide();

		// Add event listener
		controller.addEventListener('click', toggle)
		controller.addEventListener("keydown", function(event) {
			if (event.keyCode === 13) { //13 is the Enter key
				toggle();
			};
		});

		// Toggle function
		function toggle() {
			status ? hide() : show();
		}

		// Show function
		function show() {
			contentShow();
			statusToggle();
		}

		// Hide function
		function hide() {
			contentHide();
			statusToggle();
		}


		function contentShow() {
			content.hidden = false;
			content.setAttribute('aria-hidden', false);
		}

		function contentHide() {
			content.hidden = true;
			content.setAttribute('aria-hidden', true);
		};

		function statusToggle() {
			controller.setAttribute('aria-expanded', !status);
			status = !status;
		};

	});

});
