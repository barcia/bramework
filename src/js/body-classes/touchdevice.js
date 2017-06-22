/**
 *  Add body class if is/isn't a touchdevice
 *  @param {string} touchDeviceClass    This class will be added to body when
 *  the page is loaded in a touch device
 *  @param {string} notTouchDeviceClass This class will be added to body when
 *  the page is loaded in a not touch device
 */

function touchDevice(touchDeviceClass, notTouchDeviceClass) {
  'use strict';

  /**
   *  Evaluate if is or not a touch device, and add the suitable class
   */
  function addClassTouchDevice() {

    // If one option is true, the variable value will be true
    var touchdevice = ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);

    // Add the suitable class
    if (touchdevice === true) {
      document.body.classList.add(touchDeviceClass);
    } else {
      document.body.classList.add(notTouchDeviceClass);
    }
  }

  // Execute the function when the window loaded
  window.addEventListener('load', addClassTouchDevice);
}



/**
 *  Execute the main function
 */
touchDevice('site-touchdevice', 'site-not-touchdevice');
