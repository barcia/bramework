/**
 *  Add body class if is night
 *  @param {string} bodyClassNight The class name who will be added to body
 */
function nightMode(bodyClassNight) {
  'use strict';

  var date = new Date();
  var hour = date.getHours();

  if (hour > 22 || hour < 7) {
    document.body.classList.add(bodyClassNight);
  }
  return;
}



/**
 *  Execute the main function
 */
nightMode('site-nighted');
