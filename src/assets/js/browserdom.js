// BrowserDOM
import BrowserDOM from 'browserdom';

const myBrowserDOM = new BrowserDOM({
	scrolled: true,
	scrollDirection: true,
});

document.addEventListener('DOMContentLoaded', () => {
	myBrowserDOM.print();
});
