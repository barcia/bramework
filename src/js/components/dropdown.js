document.addEventListener('DOMContentLoaded', function() {

	const submenus = document.querySelectorAll('.submenu');

	console.log(submenus);
	submenus.forEach(function(submenu) {

		submenu.addEventListener('focus', submenuOn);
		// submenu.addEventListener('mouseover', submenuOn);
		submenu.addEventListener('focusout', submenuOff);

		function submenuOn() {
			submenu.nextElementSibling.setAttribute('aria-expanded', true);
		}

		function submenuOff() {
			submenu.nextElementSibling.setAttribute('aria-expanded', false);
		}

	});

});
