function collapse() {
	'use strict';

	var strings = {
			parentClass : 'Collapse',
			toggleClass : 'Collapse-toggle',
			closeClass : 'Collapse-close',
			activeClass : 'is-active'
		};

	var collapse = document.getElementsByClassName(strings.parentClass);

	for (var i = 0; i < collapse.length; i++) {

		var collapseButton = collapse[i].querySelector('.' + strings.toggleClass);
		var collapseClose = collapse[i].querySelector('.' + strings.closeClass);

		collapseButton.onclick = function(){
			this.parentNode.classList.toggle(strings.activeClass);
		};

		if (collapseClose) {
			collapseClose.onclick = function(){
				this.parentNode.classList.remove(strings.activeClass);
			};
		}

	}
}


// Execute the main function
collapse();
