// Font
import './fonts';

// BrowserDOM
import BrowserDOM from 'browserdom';
const myBrowserDOM = new BrowserDOM({
	scrolled: true,
	scrollDirection: true
});

document.addEventListener('DOMContentLoaded', function() {
	myBrowserDOM.print();
})
