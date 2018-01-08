/**
 *  Add classes when scroll is going down, going up, or both
 *  @param {string} mainElement     [ body / (element id) ] The main element,
 *  where we add the class(es). Normally will be the body but you can use other
 *  element passing the Id.
 *  @param {string} direction   [ down / up / double ] Add the class when
 *  scrolls down, scrolls up, or add a class in both cases
 *  @param {string} theClass       The class we are going to add
 *  @param {string} theSecondClass The second class that you would like to add,
 *  in case that you are using the 'double' direction
 */
function scroll(mainElement, direction, theClass, theSecondClass) {
	'use strict';

	var _mainElement;
	var _direction;
	var currentScroll  = 0;
	var previousScroll = 0;


	// Search the main element
	if (mainElement === 'body') {
		_mainElement = document.body;
	}
	else {
		_mainElement = document.getElementById(mainElement);
	}


	// Establishes the direction (down / up / double)
	if (direction === 'up') {
		_direction = 'up';
	}
	else if (direction === 'double') {
		_direction = 'double';
	}
	else {
		_direction = 'down'; // Default value
	}


	/**
	 *  Add the suitable classes
	 */
	function addScrollClass() {

		if(_mainElement) {

			if (_direction === 'down') {
				if (currentScroll > previousScroll) {
					_mainElement.classList.add(theClass);
				}
				else if (currentScroll < previousScroll) {
					_mainElement.classList.remove(theClass);
				}
			}


			if (_direction === 'up') {
				if (currentScroll > previousScroll) {
					_mainElement.classList.remove(theClass);
				}
				else if (currentScroll < previousScroll) {
					_mainElement.classList.add(theClass);
				}
			}


			if (_direction === 'double') {
				if (currentScroll > previousScroll) {
					_mainElement.classList.add(theClass);
					_mainElement.classList.remove(theSecondClass);
				}
				else if (currentScroll < previousScroll) {
					_mainElement.classList.remove(theClass);
					_mainElement.classList.add(theSecondClass);
				}
			}

		}

		// Update the position variables
		previousScroll = currentScroll;
		currentScroll = window.scrollY;
	}

	// Execute the function when the window scroll
	window.addEventListener('scroll', addScrollClass);
}



/**
 *  Execute the main function
 */
scroll('body', 'down', 'site-scroll-down');
