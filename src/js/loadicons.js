// TODO: Improve this script

function loadicons(filename) {
	var ajax = new XMLHttpRequest();
	ajax.open('GET', '/dist/'+filename, true);
	ajax.send();
	ajax.onload = function(e) {
		var div = document.createElement('div');
		div.style.display='none';
		div.innerHTML = ajax.responseText;
		document.body.insertBefore(div, document.body.childNodes[0]);
	}
}

loadicons('icons.min.svg');
