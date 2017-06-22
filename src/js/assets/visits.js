function visits() {
  var visitCounter = localStorage.getItem((window.location.host) + ' visits');

  if (visitCounter) {
    visitCounter++;
    // console.log(visitCounter);
    localStorage.setItem( (window.location.host) + ' visits', visitCounter);
    // triggers(visitCounter);
  }
  else {
    localStorage.setItem( (window.location.host) + ' visits', 1);
  }
  return;
}

// function triggers(visitCounter) {
//   if (visitCounter == 5 || visitCounter == 10) {
//     console.log("Visita número: " + visitCounter);
//   }
// }


/**
 *  Execute the main function
 */
visits();
