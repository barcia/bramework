/**
 *  Add class when scroll passes from a point of pages
 *  @param {string} mainElement  [ body / (element id) ] The main element,
 *  where we add the class(es). Normally will be the body but you can use other
 *  element passing the Id.
 *  @param {string} variant     [ after(default) / until ] Defines whether the
 *  class is added AFTER passing through a point, or UNTIL it is passed
 *  through a point
 *  @param {string} theClass    The class we are going to add
 *  @param {number} position    {optional}[default:1] Establishes the point
 *  after or until the class will be added
 */
function scrolled(mainElement, variant, theClass, position) {
  'use strict';

  var _mainElement;
  var _variant;
  var _position;



  // Search the element
  if (mainElement === 'body') {
    _mainElement = document.body;
  }
  else {
    _mainElement = document.getElementById(mainElement);
  }


  // Establishes the variant (after(default) / until)
  if(variant === 'until') {
    _variant = 'until';
  }
  else {
    _variant = 'after'; // Default value
  }


  // Establishes the point after or until the class will be added
  if(position) {
    _position = position;
  }
  else {
    _position = 1; // Default value
  }



  /**
   *  If the variant is until, add the class on load
   */
  function addScrolledClassUntil() {
    if(_mainElement) {
      _mainElement.classList.add(theClass);
    }
  }

  if (_variant === 'until') {
    window.addEventListener('load', addScrolledClassUntil);
  }



  /**
   *  Add class when scrolling
   */
  function addScrolledClass() {
    if(_mainElement) {

      if (_variant === 'until') {
        if (window.scrollY < _position) {
          _mainElement.classList.add(theClass);
        }
        else {
          _mainElement.classList.remove(theClass);
        }
      }


      if (_variant === 'after') {
        if (window.scrollY < _position) {
          _mainElement.classList.remove(theClass);
        }
        else {
          _mainElement.classList.add(theClass);
        }
      }

    }
  }

  window.addEventListener('scroll', addScrolledClass);

}



/**
 *  Execute the main function
 */
scrolled('body', 'after', 'site-scrolled');
